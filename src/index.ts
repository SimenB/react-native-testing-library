import './helpers/ensure-peer-deps';
import './matchers/extend-expect';

import { getIsReactActEnvironment, setReactActEnvironment } from './act';
import { flushMicroTasks } from './flush-micro-tasks';
import { cleanup } from './pure';

if (!process?.env?.RNTL_SKIP_AUTO_CLEANUP) {
  // If we're running in a test runner that supports afterEach
  // then we'll automatically run cleanup afterEach test
  // this ensures that tests run in isolation from each other
  // if you don't like this then either import the `pure` module
  // or set the RNTL_SKIP_AUTO_CLEANUP env variable to 'true'.
  if (typeof afterEach === 'function') {
    afterEach(async () => {
      await flushMicroTasks();
      cleanup();
    });
  }

  if (typeof beforeAll === 'function' && typeof afterAll === 'function') {
    // This matches the behavior of React < 18.
    let previousIsReactActEnvironment = getIsReactActEnvironment();
    beforeAll(() => {
      previousIsReactActEnvironment = getIsReactActEnvironment();
      setReactActEnvironment(true);
    });

    afterAll(() => {
      setReactActEnvironment(previousIsReactActEnvironment);
    });
  }
}

export * from './pure';
