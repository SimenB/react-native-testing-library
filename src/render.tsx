import * as React from 'react';
import type {
  ReactTestInstance,
  ReactTestRenderer,
  TestRendererOptions,
} from 'react-test-renderer';

import act from './act';
import { addToCleanupQueue } from './cleanup';
import { getConfig } from './config';
import { getHostSelves } from './helpers/component-tree';
import type { DebugOptions } from './helpers/debug';
import { debug } from './helpers/debug';
import { validateStringsRenderedWithinText } from './helpers/string-validation';
import { renderWithAct } from './render-act';
import { setRenderResult } from './screen';
import { getQueriesForElement } from './within';

export interface RenderOptions {
  /**
   * Pass a React Component as the wrapper option to have it rendered around the inner element. This is most useful for creating
   * reusable custom render functions for common data providers.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  wrapper?: React.ComponentType<any>;

  /**
   * Set to `false` to disable concurrent rendering.
   * Otherwise `render` will default to concurrent rendering.
   */
  concurrentRoot?: boolean;

  createNodeMock?: (element: React.ReactElement) => unknown;
  unstable_validateStringsRenderedWithinText?: boolean;
}

export type RenderResult = ReturnType<typeof render>;

/**
 * Renders test component deeply using React Test Renderer and exposes helpers
 * to assert on the output.
 */
export default function render<T>(component: React.ReactElement<T>, options: RenderOptions = {}) {
  return renderInternal(component, options);
}

export function renderInternal<T>(component: React.ReactElement<T>, options?: RenderOptions) {
  const {
    wrapper: Wrapper,
    concurrentRoot,
    unstable_validateStringsRenderedWithinText,
    ...rest
  } = options || {};

  const testRendererOptions: TestRendererOptions = {
    ...rest,
    // @ts-expect-error incomplete typing on RTR package
    unstable_isConcurrent: concurrentRoot ?? getConfig().concurrentRoot,
  };

  if (unstable_validateStringsRenderedWithinText) {
    return renderWithStringValidation(component, {
      wrapper: Wrapper,
      ...testRendererOptions,
    });
  }

  const wrap = (element: React.ReactElement) => (Wrapper ? <Wrapper>{element}</Wrapper> : element);
  const renderer = renderWithAct(wrap(component), testRendererOptions);
  return buildRenderResult(renderer, wrap);
}

function renderWithStringValidation<T>(
  component: React.ReactElement<T>,
  options: Omit<RenderOptions, 'unstable_validateStringsRenderedWithinText'> = {},
) {
  const { wrapper: Wrapper, ...testRendererOptions } = options ?? {};

  const wrap = (element: React.ReactElement) => (
    <React.Profiler id="renderProfiler" onRender={handleRender}>
      {Wrapper ? <Wrapper>{element}</Wrapper> : element}
    </React.Profiler>
  );

  const handleRender: React.ProfilerOnRenderCallback = (_, phase) => {
    if (renderer && phase === 'update') {
      validateStringsRenderedWithinText(renderer.toJSON());
    }
  };

  const renderer: ReactTestRenderer = renderWithAct(wrap(component), testRendererOptions);
  validateStringsRenderedWithinText(renderer.toJSON());

  return buildRenderResult(renderer, wrap);
}

function buildRenderResult(
  renderer: ReactTestRenderer,
  wrap: (element: React.ReactElement) => React.JSX.Element,
) {
  const update = updateWithAct(renderer, wrap);
  const instance = renderer.root;

  const unmount = () => {
    void act(() => {
      renderer.unmount();
    });
  };

  addToCleanupQueue(unmount);

  const result = {
    ...getQueriesForElement(instance),
    update,
    unmount,
    rerender: update, // alias for `update`
    toJSON: renderer.toJSON,
    debug: makeDebug(renderer),
    get root(): ReactTestInstance {
      return getHostSelves(instance)[0];
    },
    UNSAFE_root: instance,
  };

  // Add as non-enumerable property, so that it's safe to enumerate
  // `render` result, e.g. using destructuring rest syntax.
  Object.defineProperty(result, 'container', {
    enumerable: false,
    get() {
      throw new Error(
        "'container' property has been renamed to 'UNSAFE_root'.\n\n" +
          "Consider using 'root' property which returns root host element.",
      );
    },
  });

  setRenderResult(result);

  return result;
}

function updateWithAct(
  renderer: ReactTestRenderer,
  wrap: (innerElement: React.ReactElement) => React.ReactElement,
) {
  return function (component: React.ReactElement) {
    void act(() => {
      renderer.update(wrap(component));
    });
  };
}

export type DebugFunction = (options?: DebugOptions) => void;

function makeDebug(renderer: ReactTestRenderer): DebugFunction {
  function debugImpl(options?: DebugOptions) {
    const { defaultDebugOptions } = getConfig();
    const debugOptions = { ...defaultDebugOptions, ...options };
    const json = renderer.toJSON();
    if (json) {
      return debug(json, debugOptions);
    }
  }
  return debugImpl;
}
