(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"VqN/":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return p}));n("5hJT"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("PJhk");var o=n("mXGw"),r=n("/FXl"),u=n("TjRS"),c=n("ZFoC"),i=n("bzer");n("aD51");function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/usePrevious/__docz__/usePrevious.mdx"}});var b={_frontmatter:s},l=u.a;function p(e){var t,n=e.components,p=function(e,t){if(null==e)return{};var n,o,r={},u=Object.keys(e);for(o=0;o<u.length;o++)n=u[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(r.b)(l,a({},b,p,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"useprevious"},"usePrevious"),Object(r.b)("p",null,"保存上一次渲染时的状态"),Object(r.b)("hr",null),Object(r.b)("h2",{id:"api"},"API"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-jsx"}),"const [\n  prev: any, // 上一次的值\n] = useImage(\n  state: any, // 要计算的值\n);\n")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"demo"},"DEMO"),Object(r.b)(c.c,{__position:2,__code:"() => {\n  const [count, setCount] = React.useState(0)\n  const preCount = usePrevious(count)\n  return (\n    <div>\n      <div>preCount: {preCount}</div>\n      <div>count: {count}</div>\n      <button onClick={() => setCount(pre => pre + 1)}>+</button>\n    </div>\n  )\n}",__scope:(t={props:p,DefaultLayout:u.a,Playground:c.c,usePrevious:i.d},t.DefaultLayout=u.a,t._frontmatter=s,t),mdxType:"Playground"},(function(){var e=o.useState(0),t=e[0],n=e[1],u=Object(i.d)(t);return Object(r.b)("div",null,Object(r.b)("div",null,"preCount: ",u),Object(r.b)("div",null,"count: ",t),Object(r.b)("button",{onClick:function(){return n((function(e){return e+1}))}},"+"))})))}void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/usePrevious/__docz__/usePrevious.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-use-previous-docz-use-previous-mdx-42b63b9f30ec0fce9f98.js.map