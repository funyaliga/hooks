(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+O2E":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return m}));n("5hJT"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("PJhk");var r=n("mXGw"),a=n("/FXl"),o=n("TjRS"),u=n("ZFoC"),c=n("bzer");n("aD51");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/useTimeInterval/__docz__/useTimeInterval.mdx"}});var s={_frontmatter:i},b=o.a;function m(e){var t,n=e.components,m=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(a.b)(b,l({},s,m,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"usetimeinterval"},"useTimeInterval"),Object(a.b)("p",null,"timeInterval hooks"),Object(a.b)("p",null,"参考 ",Object(a.b)("a",l({parentName:"p"},{href:"https://overreacted.io/making-setinterval-declarative-with-react-hooks/"}),"Making setInterval Declarative with React Hooks")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"api"},"API"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-jsx"}),"useTimeInterval(\n  callback: Function,\n  delay?: number\n);\n")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"demo"},"DEMO"),Object(a.b)(u.c,{__position:2,__code:"() => {\n  const [counter, setCounter] = React.useState(0)\n  const [run, toggleRun] = useToggle()\n  const delay = 1000\n  useTimeInterval(\n    () => {\n      setCounter(pre => pre + 1)\n    },\n    run ? delay : null,\n  )\n  return (\n    <div>\n      <h4>count: {counter}</h4>\n      <button onClick={toggleRun}>{run ? 'stop' : 'start'}</button>\n    </div>\n  )\n}",__scope:(t={props:m,DefaultLayout:o.a,Playground:u.c,useTimeInterval:c.e,useToggle:c.f},t.DefaultLayout=o.a,t._frontmatter=i,t),mdxType:"Playground"},(function(){var e=r.useState(0),t=e[0],n=e[1],o=Object(c.f)(),u=o[0],l=o[1];return Object(c.e)((function(){n((function(e){return e+1}))}),u?1e3:null),Object(a.b)("div",null,Object(a.b)("h4",null,"count: ",t),Object(a.b)("button",{onClick:l},u?"stop":"start"))})))}void 0!==m&&m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/useTimeInterval/__docz__/useTimeInterval.mdx"}}),m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-use-time-interval-docz-use-time-interval-mdx-9a5ae123d0324b1fd624.js.map