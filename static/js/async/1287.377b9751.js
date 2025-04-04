(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["1287"],{9347:function(e,n,s){"use strict";s.r(n);var r=s("5893"),i=s("65");function t(e){let n=Object.assign({h1:"h1",a:"a",h2:"h2",code:"code",pre:"pre",p:"p",div:"div",em:"em",ul:"ul",li:"li"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"other-helpers",children:["Other helpers",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#other-helpers",children:"#"})]}),"\n",(0,r.jsxs)(n.h2,{id:"within",children:[(0,r.jsx)(n.code,{children:"within"}),", ",(0,r.jsx)(n.code,{children:"getQueriesForElement"}),(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#within",children:"#"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"function within(element: ReactTestInstance): Queries {}\n\nfunction getQueriesForElement(element: ReactTestInstance): Queries {}\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"within"})," (also available as ",(0,r.jsx)(n.code,{children:"getQueriesForElement"})," alias) performs ",(0,r.jsx)(n.a,{href:"/docs/api/queries",children:"queries"})," scoped to given element."]}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive note",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"NOTE"}),(0,r.jsx)(n.div,{className:"rspress-directive-content",children:(0,r.jsxs)(n.p,{children:["Please note that additional ",(0,r.jsx)(n.code,{children:"render"})," specific operations like ",(0,r.jsx)(n.code,{children:"update"}),", ",(0,r.jsx)(n.code,{children:"unmount"}),", ",(0,r.jsx)(n.code,{children:"debug"}),", ",(0,r.jsx)(n.code,{children:"toJSON"})," are ",(0,r.jsx)(n.em,{children:"not"})," included.\n"]})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"const detailsScreen = within(screen.getByA11yHint('Details Screen'));\nexpect(detailsScreen.getByText('Some Text')).toBeOnTheScreen();\nexpect(detailsScreen.getByDisplayValue('Some Value')).toBeOnTheScreen();\nexpect(detailsScreen.queryByLabelText('Some Label')).toBeOnTheScreen();\nawait expect(detailsScreen.findByA11yHint('Some Label')).resolves.toBeOnTheScreen();\n"})}),"\n",(0,r.jsx)(n.p,{children:"Use cases for scoped queries include:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"queries scoped to a single item inside a FlatList containing many items"}),"\n",(0,r.jsx)(n.li,{children:"queries scoped to a single screen in tests involving screen transitions (e.g. with react-navigation)"}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"act",children:[(0,r.jsx)(n.code,{children:"act"}),(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#act",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Useful function to help testing components that use hooks API. By default any ",(0,r.jsx)(n.code,{children:"render"}),", ",(0,r.jsx)(n.code,{children:"update"}),", ",(0,r.jsx)(n.code,{children:"fireEvent"}),", and ",(0,r.jsx)(n.code,{children:"waitFor"})," calls are wrapped by this function, so there is no need to wrap it manually. This method is re-exported from ",(0,r.jsx)(n.a,{href:"https://github.com/facebook/react/blob/main/packages/react-test-renderer/src/ReactTestRenderer.js#L567%5D",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(n.code,{children:"react-test-renderer"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Consult our ",(0,r.jsx)(n.a,{href:"/docs/advanced/understanding-act",children:"Understanding Act function"})," document for more understanding of its intricacies."]}),"\n",(0,r.jsxs)(n.h2,{id:"cleanup",children:[(0,r.jsx)(n.code,{children:"cleanup"}),(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#cleanup",children:"#"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const cleanup: () => void;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Unmounts React trees that were mounted with ",(0,r.jsx)(n.code,{children:"render"})," and clears ",(0,r.jsx)(n.code,{children:"screen"})," variable that holds latest ",(0,r.jsx)(n.code,{children:"render"})," output."]}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive info",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"INFO"}),(0,r.jsx)(n.div,{className:"rspress-directive-content",children:(0,r.jsxs)(n.p,{children:["Please note that this is done automatically if the testing framework you're using supports the ",(0,r.jsx)(n.code,{children:"afterEach"})," global (like mocha, Jest, and Jasmine). If not, you will need to do manual cleanups after each test.\n"]})})]}),"\n",(0,r.jsxs)(n.p,{children:["For example, if you're using the ",(0,r.jsx)(n.code,{children:"jest"})," testing framework, then you would need to use the ",(0,r.jsx)(n.code,{children:"afterEach"})," hook like so:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"import { cleanup, render } from '@testing-library/react-native/pure';\nimport { View } from 'react-native';\n\nafterEach(cleanup);\n\nit('renders a view', () => {\n  render(<View />);\n  // ...\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"afterEach(cleanup)"})," call also works in ",(0,r.jsx)(n.code,{children:"describe"})," blocks:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"describe('when logged in', () => {\n  afterEach(cleanup);\n\n  it('renders the user', () => {\n    render(<SiteHeader />);\n    // ...\n  });\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Failing to call ",(0,r.jsx)(n.code,{children:"cleanup"})," when you've called ",(0,r.jsx)(n.code,{children:"render"}),' could result in a memory leak and tests which are not "idempotent" (which can lead to difficult to debug errors in your tests).']})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}n.default=c,c.__RSPRESS_PAGE_META={},c.__RSPRESS_PAGE_META["12.x%2Fdocs%2Fapi%2Fmisc%2Fother.mdx"]={toc:[{text:"`within`, `getQueriesForElement`",id:"within",depth:2},{text:"`act`",id:"act",depth:2},{text:"`cleanup`",id:"cleanup",depth:2}],title:"Other helpers",frontmatter:{}}}}]);