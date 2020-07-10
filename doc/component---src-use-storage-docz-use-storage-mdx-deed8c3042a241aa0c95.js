(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"9UPp":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return s}));n("5hJT"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("PJhk"),n("mXGw");var o=n("/FXl"),a=n("TjRS"),r=n("ZFoC"),u=n("bzer");n("aD51");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var c={};void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/useStorage/__docz__/useStorage.mdx"}});var i={_frontmatter:c},b=a.a;function s(e){var t,n=e.components,s=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(o.b)(b,l({},i,s,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"usestorage"},"useStorage"),Object(o.b)("p",null,"储存"),Object(o.b)("hr",null),Object(o.b)("h2",{id:"api"},"API"),Object(o.b)("pre",null,Object(o.b)("code",l({parentName:"pre"},{className:"language-jsx"}),"const [\n  value,\n  setValue,\n] = useStorage(\n  storage: Storage | Cookies,\n  key: string,\n  initialValue?: InitialValue<T>,\n  options = {}\n);\n")),Object(o.b)("h3",{id:"storage"},"storage"),Object(o.b)("p",null,"要使用的storage, 支持 localStorage、sessionStorage、js-cookie"),Object(o.b)("h3",{id:"key"},"key"),Object(o.b)("p",null,"storage的key值"),Object(o.b)("h3",{id:"initialvalue"},"initialValue"),Object(o.b)("p",null,"初始值"),Object(o.b)("h3",{id:"options"},"options"),Object(o.b)("p",null,"配置，在js-cookie时有效，例子： { expires: 7, path: '' }"),Object(o.b)("hr",null),Object(o.b)("h2",{id:"demo"},"DEMO"),Object(o.b)(r.c,{__position:2,__code:"() => {\n  const [state, setState] = useStorage(localStorage, 'store-key', 'value1')\n  return (\n    <div>\n      <div>value: {state}</div>\n      <button onClick={() => setState('value2')}>set value2</button>\n      <button onClick={() => setState('value3')}>set value3</button>\n      <button onClick={() => setState()}>clear</button>\n    </div>\n  )\n}",__scope:(t={props:s,DefaultLayout:a.a,Playground:r.c,useStorage:u.d},t.DefaultLayout=a.a,t._frontmatter=c,t),mdxType:"Playground"},(function(){var e=Object(u.d)(localStorage,"store-key","value1"),t=e[0],n=e[1];return Object(o.b)("div",null,Object(o.b)("div",null,"value: ",t),Object(o.b)("button",{onClick:function(){return n("value2")}},"set value2"),Object(o.b)("button",{onClick:function(){return n("value3")}},"set value3"),Object(o.b)("button",{onClick:function(){return n()}},"clear"))})))}void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/useStorage/__docz__/useStorage.mdx"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-use-storage-docz-use-storage-mdx-deed8c3042a241aa0c95.js.map