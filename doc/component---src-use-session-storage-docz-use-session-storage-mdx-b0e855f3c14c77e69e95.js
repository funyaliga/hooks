(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{svJk:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return b}));n("5hJT"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("PJhk"),n("mXGw");var o=n("/FXl"),a=n("TjRS"),r=n("ZFoC"),u=n("bzer");n("aD51");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/useSessionStorage/__docz__/useSessionStorage.mdx"}});var l={_frontmatter:s},c=a.a;function b(e){var t,n=e.components,b=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(o.b)(c,i({},l,b,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"usesessionstorage"},"useSessionStorage"),Object(o.b)("p",null,"sessionStorage hooks"),Object(o.b)("hr",null),Object(o.b)("h2",{id:"api"},"API"),Object(o.b)("pre",null,Object(o.b)("code",i({parentName:"pre"},{className:"language-jsx"}),"const [\n  value,\n  setValue,\n] = useSessionStorage(\n  key: string,\n  initialValue?: InitialValue<T>,\n);\n")),Object(o.b)("h3",{id:"key"},"key"),Object(o.b)("p",null,"localStorage的key值"),Object(o.b)("h3",{id:"initialvalue"},"initialValue"),Object(o.b)("p",null,"初始值"),Object(o.b)("hr",null),Object(o.b)("h2",{id:"demo"},"DEMO"),Object(o.b)(r.c,{__position:2,__code:"() => {\n  if (typeof window == 'undefined') {\n    return null\n  }\n  const [state, setState] = useSessionStorage('s-storage-key', 'value1')\n  return (\n    <div>\n      <div>value: {state}</div>\n      <button onClick={() => setState('value2')}>set value2</button>\n      <button onClick={() => setState('value3')}>set value3</button>\n      <button onClick={() => setState()}>clear</button>\n    </div>\n  )\n}",__scope:(t={props:b,DefaultLayout:a.a,Playground:r.c,useSessionStorage:u.f},t.DefaultLayout=a.a,t._frontmatter=s,t),mdxType:"Playground"},(function(){if("undefined"==typeof window)return null;var e=Object(u.f)("s-storage-key","value1"),t=e[0],n=e[1];return Object(o.b)("div",null,Object(o.b)("div",null,"value: ",t),Object(o.b)("button",{onClick:function(){return n("value2")}},"set value2"),Object(o.b)("button",{onClick:function(){return n("value3")}},"set value3"),Object(o.b)("button",{onClick:function(){return n()}},"clear"))})))}void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/useSessionStorage/__docz__/useSessionStorage.mdx"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-use-session-storage-docz-use-session-storage-mdx-b0e855f3c14c77e69e95.js.map