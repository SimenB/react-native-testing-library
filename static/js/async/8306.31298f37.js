(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["8306"],{2815:function(e,n,i){"use strict";i.r(n);var t=i("5893"),r=i("65");function s(e){let n=Object.assign({h1:"h1",a:"a",h2:"h2",code:"code",p:"p",pre:"pre",div:"div"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"async-utilities",children:["Async utilities",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#async-utilities",children:"#"})]}),"\n",(0,t.jsxs)(n.h2,{id:"findby-queries",children:[(0,t.jsx)(n.code,{children:"findBy*"})," queries",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#findby-queries",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"findBy*"})," queries are used to find elements that are not instantly available but will be added as a result of some asynchronous action. Learn more details ",(0,t.jsx)(n.a,{href:"/docs/api/queries#find-by",children:"here"}),"."]}),"\n",(0,t.jsxs)(n.h2,{id:"waitfor",children:[(0,t.jsx)(n.code,{children:"waitFor"}),(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#waitfor",children:"#"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"function waitFor<T>(\n  expectation: () => T,\n  options?: { timeout: number; interval: number }\n): Promise<T>;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Waits for a period of time for the ",(0,t.jsx)(n.code,{children:"expectation"})," callback to pass. ",(0,t.jsx)(n.code,{children:"waitFor"})," may run the callback a number of times until timeout is reached, as specified by the ",(0,t.jsx)(n.code,{children:"timeout"})," and ",(0,t.jsx)(n.code,{children:"interval"})," options. The callback must throw an error when the expectation is not met. Returning any value, including a falsy one, will be treated as meeting the expectation, and the callback result will be returned to the caller of ",(0,t.jsx)(n.code,{children:"waitFor"})," function."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"await waitFor(() => expect(mockFunction).toHaveBeenCalledWith());\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"waitFor"})," function will be executing ",(0,t.jsx)(n.code,{children:"expectation"})," callback every ",(0,t.jsx)(n.code,{children:"interval"})," (default: every 50 ms) until ",(0,t.jsx)(n.code,{children:"timeout"})," (default: 1000 ms) is reached. The repeated execution of callback is stopped as soon as it does not throw an error, in such case the value returned by the callback is returned to ",(0,t.jsx)(n.code,{children:"waitFor"})," caller. Otherwise, when it reaches the timeout, the final error thrown by ",(0,t.jsx)(n.code,{children:"expectation"})," will be re-thrown by ",(0,t.jsx)(n.code,{children:"waitFor"})," to the calling code."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"// \u274C `waitFor` will return immediately because callback does not throw\nawait waitFor(() => false);\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"waitFor"})," is an async function so you need to ",(0,t.jsx)(n.code,{children:"await"})," the result to pause test execution."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"// \u274C missing `await`: `waitFor` will just return Promise that will be rejected when the timeout is reached\nwaitFor(() => expect(1).toBe(2));\n"})}),"\n",(0,t.jsxs)(n.div,{className:"rspress-directive note",children:[(0,t.jsx)(n.div,{className:"rspress-directive-title",children:"NOTE"}),(0,t.jsx)(n.div,{className:"rspress-directive-content",children:(0,t.jsxs)(n.p,{children:["You can enforce awaiting ",(0,t.jsx)(n.code,{children:"waitFor"})," by using the ",(0,t.jsx)(n.a,{href:"https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/await-async-utils.md",target:"_blank",rel:"noopener noreferrer",children:"await-async-utils"})," rule from ",(0,t.jsx)(n.a,{href:"https://github.com/testing-library/eslint-plugin-testing-library",target:"_blank",rel:"noopener noreferrer",children:"eslint-plugin-testing-library"}),".\n"]})})]}),"\n",(0,t.jsxs)(n.p,{children:["Since ",(0,t.jsx)(n.code,{children:"waitFor"})," is likely to run ",(0,t.jsx)(n.code,{children:"expectation"})," callback multiple times, it is highly recommended for it ",(0,t.jsx)(n.a,{href:"https://kentcdodds.com/blog/common-mistakes-with-react-testing-library#performing-side-effects-in-waitfor",target:"_blank",rel:"noopener noreferrer",children:"not to perform any side effects"})," in ",(0,t.jsx)(n.code,{children:"waitFor"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"await waitFor(() => {\n  // \u274C button will be pressed on each waitFor iteration\n  fireEvent.press(screen.getByText('press me'));\n  expect(mockOnPress).toHaveBeenCalled();\n});\n"})}),"\n",(0,t.jsxs)(n.div,{className:"rspress-directive note",children:[(0,t.jsx)(n.div,{className:"rspress-directive-title",children:"NOTE"}),(0,t.jsx)(n.div,{className:"rspress-directive-content",children:(0,t.jsxs)(n.p,{children:["Avoiding side effects in ",(0,t.jsx)(n.code,{children:"expectation"})," callback can be partially enforced with the ",(0,t.jsxs)(n.a,{href:"https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-wait-for-side-effects.md",target:"_blank",rel:"noopener noreferrer",children:[(0,t.jsx)(n.code,{children:"no-wait-for-side-effects"})," rule"]}),".\n"]})})]}),"\n",(0,t.jsxs)(n.p,{children:["It is also recommended to have a ",(0,t.jsxs)(n.a,{href:"https://kentcdodds.com/blog/common-mistakes-with-react-testing-library#having-multiple-assertions-in-a-single-waitfor-callback",target:"_blank",rel:"noopener noreferrer",children:["single assertion per each ",(0,t.jsx)(n.code,{children:"waitFor"})]})," for more consistency and faster failing tests. If you want to make several assertions, then they should be in seperate ",(0,t.jsx)(n.code,{children:"waitFor"})," calls. In many cases you won't actually need to wrap the second assertion in ",(0,t.jsx)(n.code,{children:"waitFor"})," since the first one will do the waiting required for asynchronous change to happen."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"waitFor"})," checks whether Jest fake timers are enabled and adapts its behavior in such case. The following snippet is a simplified version of how it behaves when fake timers are enabled:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"let fakeTimeRemaining = timeout;\nlet lastError;\n\nwhile (fakeTimeRemaining > 0) {\n  fakeTimeRemaining = fakeTimeRemaining - interval;\n  jest.advanceTimersByTime(interval);\n  try {\n    // resolve\n    return expectation();\n  } catch (error) {\n    lastError = error;\n  }\n}\n\n// reject\nthrow lastError;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In the following example we test that a function is called after 10 seconds using fake timers. Since we're using fake timers, the test won't depend on real time passing and thus be much faster and more reliable. Also we don't have to advance fake timers through Jest fake timers API because ",(0,t.jsx)(n.code,{children:"waitFor"})," already does this for us."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"// in component\nsetTimeout(() => {\n  someFunction();\n}, 10000);\n\n// in test\njest.useFakeTimers();\n\nawait waitFor(() => {\n  expect(someFunction).toHaveBeenCalledWith();\n}, 10000);\n"})}),"\n",(0,t.jsxs)(n.div,{className:"rspress-directive note",children:[(0,t.jsx)(n.div,{className:"rspress-directive-title",children:"NOTE"}),(0,t.jsx)(n.div,{className:"rspress-directive-content",children:(0,t.jsxs)(n.p,{children:["If you receive warnings related to ",(0,t.jsx)(n.code,{children:"act()"})," function consult our ",(0,t.jsx)(n.a,{href:"/docs/advanced/understanding-act",children:"Understanding Act"})," function document.\n"]})})]}),"\n",(0,t.jsxs)(n.h2,{id:"waitforelementtoberemoved",children:[(0,t.jsx)(n.code,{children:"waitForElementToBeRemoved"}),(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#waitforelementtoberemoved",children:"#"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function waitForElementToBeRemoved<T>(\n  expectation: () => T,\n  options?: { timeout: number; interval: number }\n): Promise<T>;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Waits for non-deterministic periods of time until queried element is removed or times out. ",(0,t.jsx)(n.code,{children:"waitForElementToBeRemoved"})," periodically calls ",(0,t.jsx)(n.code,{children:"expectation"})," every ",(0,t.jsx)(n.code,{children:"interval"})," milliseconds to determine whether the element has been removed or not."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"import { render, screen, waitForElementToBeRemoved } from '@testing-library/react-native';\n\ntest('waiting for an Banana to be removed', async () => {\n  render(<Banana />);\n\n  await waitForElementToBeRemoved(() => screen.getByText('Banana ready'));\n});\n"})}),"\n",(0,t.jsx)(n.p,{children:"This method expects that the element is initially present in the render tree and then is removed from it. If the element is not present when you call this method it throws an error."}),"\n",(0,t.jsxs)(n.p,{children:["You can use any of ",(0,t.jsx)(n.code,{children:"getBy"}),", ",(0,t.jsx)(n.code,{children:"getAllBy"}),", ",(0,t.jsx)(n.code,{children:"queryBy"})," and ",(0,t.jsx)(n.code,{children:"queryAllBy"})," queries for ",(0,t.jsx)(n.code,{children:"expectation"})," parameter."]}),"\n",(0,t.jsxs)(n.div,{className:"rspress-directive note",children:[(0,t.jsx)(n.div,{className:"rspress-directive-title",children:"NOTE"}),(0,t.jsx)(n.div,{className:"rspress-directive-content",children:(0,t.jsxs)(n.p,{children:["If you receive warnings related to ",(0,t.jsx)(n.code,{children:"act()"})," function consult our ",(0,t.jsx)(n.a,{href:"/docs/advanced/understanding-act",children:"Understanding Act"})," function document.\n"]})})]})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}n.default=a,a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["13.x%2Fdocs%2Fapi%2Fmisc%2Fasync.mdx"]={toc:[{text:"`findBy*` queries",id:"findby-queries",depth:2},{text:"`waitFor`",id:"waitfor",depth:2},{text:"`waitForElementToBeRemoved`",id:"waitforelementtoberemoved",depth:2}],title:"Async utilities",frontmatter:{}}}}]);