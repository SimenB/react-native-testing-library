(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["6747"],{9997:function(e,n,t){"use strict";t.r(n);var r=t("5893"),s=t("65"),i=t("2179");function a(e){let n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",code:"code",h3:"h3",pre:"pre"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"quick-start",children:["Quick Start",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#quick-start",children:"#"})]}),"\n",(0,r.jsxs)(n.h2,{id:"installation",children:["Installation",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#installation",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Open a Terminal in your project's folder and run:"}),"\n",(0,r.jsx)(i.SU,{command:{yarn:"yarn add -D @testing-library/react-native",npm:"npm install -D @testing-library/react-native"}}),"\n",(0,r.jsxs)(n.p,{children:["This library has a peer dependency for ",(0,r.jsx)(n.code,{children:"react-test-renderer"})," package. Make sure that your ",(0,r.jsx)(n.code,{children:"react-test-renderer"})," version matches exactly your ",(0,r.jsx)(n.code,{children:"react"})," version."]}),"\n",(0,r.jsxs)(n.h3,{id:"jest-matchers",children:["Jest matchers",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#jest-matchers",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["To set up React Native-specific Jest matchers, add the following line to your ",(0,r.jsx)(n.code,{children:"jest-setup.ts"})," file (configured using ",(0,r.jsx)(n.a,{href:"https://jestjs.io/docs/configuration#setupfilesafterenv-array",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(n.code,{children:"setupFilesAfterEnv"})}),"):"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:"title=jest-setup.ts",children:"import '@testing-library/react-native/extend-expect';\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"eslint-plugin",children:["ESLint plugin",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#eslint-plugin",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["We recommend setting up ",(0,r.jsx)(n.a,{href:"https://github.com/testing-library/eslint-plugin-testing-library",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(n.code,{children:"eslint-plugin-testing-library"})})," package to help you avoid common Testing Library mistakes and bad practices."]}),"\n",(0,r.jsxs)(n.p,{children:["Install the plugin (assuming you already have ",(0,r.jsx)(n.code,{children:"eslint"})," installed & configured):"]}),"\n",(0,r.jsx)(i.SU,{command:{yarn:"yarn add -D eslint-plugin-testing-library",npm:"npm install -D eslint-plugin-testing-library"}}),"\n",(0,r.jsxs)(n.p,{children:["Then, add relevant entry to your ESLint config (e.g., ",(0,r.jsx)(n.code,{children:".eslintrc.js"}),"). We recommend extending the ",(0,r.jsx)(n.code,{children:"react"})," plugin:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",meta:"title=.eslintrc.js",children:"module.exports = {\n  overrides: [\n    {\n      // Test files only\n      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],\n      extends: ['plugin:testing-library/react'],\n    },\n  ],\n};\n"})})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}n.default=l,l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["12.x%2Fdocs%2Fstart%2Fquick-start.mdx"]={toc:[{text:"Installation",id:"installation",depth:2},{text:"Jest matchers",id:"jest-matchers",depth:3},{text:"ESLint plugin",id:"eslint-plugin",depth:3}],title:"Quick Start",frontmatter:{}}}}]);