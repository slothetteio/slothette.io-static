(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{48:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(12),u=n.n(l),i=n(49),o=n(50),c=n.n(o);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.a=function(e){var t;return r.a.createElement("button",m({},Object(i.a)(e),{className:u()(c.a.Button,(t={},s(t,c.a["v-".concat(e.variant)],e.variant),s(t,c.a["m-".concat(e.mode)],e.mode),t),e.className),onClick:e.onClick}),r.a.createElement("span",null,e.children))}},49:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n={};return e.style&&t?n.style=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){a(e,t,n[t])})}return e}({},e.style,t):e.style?n.style=e.style:t&&(n.style=t),e.disabled&&(n.disabled=e.disabled),null!==e.value&&(n.value=e.value),e.onChange&&(n.onChange=e.onChange),e.placeholder&&(n.placeholder=e.placeholder),e.autoCorrect&&(n.autoCorrect=e.autoCorrect),e.spellCheck&&(n.spellCheck=e.spellCheck),n}},50:function(e,t,n){e.exports={vars:"'../../css/vars.css'",transitionTimeAndEase:"0.15s ease-in-out",mainTextColor:"hsl(0, 0%, 30%)",outlineExpr:"hsla(209, 100%, 55%, 0.85) 0 0 3px 1px",buttonBorderIncreaseFactorDelta:"0.091",Button:"_3V0oU","m-transparent":"_164xO _2y5bS","v-positive":"_3Na71","v-negative":"_1VQch","m-full":"_1X7RE","m-ghost":"_2y5bS"}},53:function(e,t,n){e.exports={buttonForDemo:"_3AUaQ"}},54:function(e,t,n){e.exports={vars:"'../../css/vars.css'",transitionTimeAndEase:"0.15s ease-in-out",mainTextColor:"hsl(0, 0%, 30%)",linkColor:"#1890ff",outlineExpr:"hsla(209, 100%, 55%, 0.85) 0 0 3px 1px",checkboxSize:"2.2rem",Checkbox:"_2FS5y",input:"_2u76p",label:"_39PyM"}},55:function(e,t){e.exports="import React from 'react';\n\nfunction Example() {\n  let [value, setValue] = React.useState('');\n  return (\n    <div>\n      Basic input:\n      <input value={value} onChange={e => setValue(e.target.value)} />\n    </div>\n  );\n}\n\nexport default Example;\n"},56:function(e,t){e.exports='import React from \'react\';\nimport Button from "../../../../../elements/button";\n\nfunction Example() {\n  let [counter, setCounter] = React.useState(0);\n  return (\n    <div>\n      Counter value: {counter}\n      <br />\n      <Button variant="positive"\n              onClick={e => setCounter(counter => counter + 1)}\n      >Increment</Button>\n      {\' \'}\n      <Button variant="negative"\n              onClick={e => setCounter(counter => counter - 1)}\n      >Decrement</Button>\n    </div>\n  );\n}\n\nexport default Example;\n'},57:function(e,t){e.exports='import React from \'react\';\nimport Button from "../../../../../elements/button";\n\nfunction Example() {\n  let [counter, setCounter] = React.useState(0);\n  let [delta, setDelta] = React.useState(5);\n  return (\n    <div>\n      <p>\n        Problem with this example is that when incrementing or decrementing\n        we depend on multiple previous values, both the counter and the delta.\n        So counter and delta should sit together un a single state object (see the Complex value example)\n      </p>\n      Value: {counter}\n      <br />\n      Adjust with:\n      <input type="number" value={delta}\n             onChange={e => setDelta(parseInt(e.target.value, 10))}\n      />\n      <br />\n      <Button variant="positive"\n              onClick={e => setCounter(counter => counter + delta)}\n      >Increment</Button>\n      {\' \'}\n      <Button variant="negative"\n              onClick={e => setCounter(counter => counter - delta)}\n      >Decrement</Button>\n    </div>\n  );\n}\n\nexport default Example;\n'},58:function(e,t){e.exports='import React from \'react\';\nimport Button from "../../../../../elements/button";\n\nfunction Example() {\n  let [value, setValue] = React.useState({\n    add: 1,\n    multiply: 2,\n    result: 1\n  });\n  return (\n    <div>\n      Take: {value.result}\n      <br />\n      Add: <input value={value.add}\n                  type="number"\n                  onChange={e => setValue({...value, add: e.target.value})}/>\n      <br />\n      Multiply:\n      <input value={value.multiply}\n             type="number"\n             onChange={e => setValue({...value, multiply: e.target.value})}/>\n      <br />\n\n      <Button onClick={e => setValue(\n        ({add, multiply, result}) => ({\n          add,\n          multiply,\n          result: (result + add) * multiply,\n        })\n      )} >\n        Calculate\n      </Button>\n    </div>\n  );\n}\n\nexport default Example;\n'},59:function(e,t){e.exports='import React from \'react\';\nimport Button from "../../../../../elements/button";\n\nfunction fib(n) {\n  if (n <= 1) {\n    return n;\n  }\n  return fib(n - 1) + fib(n - 2);\n}\n\nfunction ExampleInner({initial}) {\n  // expensive call is not needed on every render\n  let [result, setResult] = React.useState(() => {\n    return fib(initial);\n  });\n\n  let [initialInitial] = React.useState(initial);\n\n  return (\n    <div>\n      <h3>Inner</h3>\n      prop: {initial}\n      <br />\n      remembered: {initialInitial}\n      <br />\n      change fib({initialInitial}):\n      <input value={result}\n             type="number"\n             onChange={e => setResult(e.target.value)}\n      />\n    </div>\n  );\n}\n\nfunction Example() {\n  let [userValue, setUserValue] = React.useState(10);\n  let [randomValue, setRandomValue] = React.useState(Math.random());\n\n  return (<div>\n    <h3>Wrapper</h3>\n    Start from the fib of\n    <input value={userValue}\n           type="number"\n           min="0"\n           max="40"\n           onChange={e => setUserValue(e.target.value)}\n    />\n    <Button onClick={e => {setRandomValue(Math.random())}}>\n      Remount inner\n    </Button>\n    <br />\n    <ExampleInner key={randomValue} initial={userValue} />\n  </div>);\n}\n\nexport default Example;\n'},60:function(e,t){e.exports="import React from 'react';\nimport Button from \"../../../../../elements/button\";\n\nfunction Inner({external}) {\n  let [internal, setInternal] = React.useState(external);\n  return (\n    <div>\n      <h3>Inner</h3>\n      External value: {external}\n      <br />\n      Internal value: {internal}\n      <br />\n      <Button onClick={e => setInternal(internal => internal + 1)}>\n        Inc Int\n      </Button>\n    </div>\n  );\n}\n\nfunction Example() {\n  let [external, setExternal] = React.useState(10);\n  return (\n    <div>\n      <p>Note: this example is incomplete</p>\n      External value: {external}\n      <br />\n      <Button\n        onClick={e => setExternal(external => external + 1)}\n      >\n        Inc ext\n      </Button>\n      <Inner external={external}/>\n    </div>\n  );\n}\n\nexport default Example;\n"},61:function(e,t){e.exports="import React from 'react';\nimport RenderCount from \"../../../../../utils/render-count\";\n\n\n\nfunction Inner({isMemoised, passed}) {\n  return (\n    <div>\n      <h3>{isMemoised ? 'Memoised' : 'Simple'} Inner <RenderCount /></h3>\n      Passed in value is: {passed}\n    </div>\n  );\n}\n\nlet MemoInner = React.memo(Inner);\n\nfunction Example() {\n  let [outer, setOuter] = React.useState('outer');\n  let [passed, setPassed] = React.useState('passed');\n  return (\n    <div>\n      <h3>Outer <RenderCount /></h3>\n      Outer state to trigger outer render\n      <input value={outer} onChange={e => setOuter(e.target.value)}/>\n      <br />\n      State passed to inner to trigger also inner render\n      <input value={passed} onChange={e => setPassed(e.target.value)} />\n      <Inner isMemoised={false} passed={passed} />\n      <MemoInner isMemoised={true} passed={passed} />\n    </div>\n  );\n}\n\nexport default Example;\n"},62:function(e,t,n){e.exports={Pg:"_3cMoP",sidebar:"_1KrC-",mainContent:"_3NcFU",menu:"_3-Viy",menuSectionHeading:"_1frNH",menuItem:"LVVH-",active:"_1zICO"}},70:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(47),u=n(45),i=n(2),o=n(22),c=n(48),m=n(53),s=n.n(m);function d(e){return r.a.createElement("span",{className:s.a.buttonForDemo},e.children)}var v=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Demo for the button element"),r.a.createElement("h3",null,"Variants"),r.a.createElement("div",null,r.a.createElement(d,null,r.a.createElement(c.a,null,"Normal")),r.a.createElement(d,null,r.a.createElement(c.a,{variant:"positive"},"Positive")),r.a.createElement(d,null,r.a.createElement(c.a,{variant:"negative"},"Negative"))),r.a.createElement("h3",null,"mode: full"),r.a.createElement("div",null,r.a.createElement(d,null,r.a.createElement(c.a,{mode:"full"},"Normal")),r.a.createElement(d,null,r.a.createElement(c.a,{mode:"full",variant:"positive"},"Positive")),r.a.createElement(d,null,r.a.createElement(c.a,{mode:"full",variant:"negative"},"Negative"))),r.a.createElement("h3",null,"mode: ghost"),r.a.createElement("div",null,r.a.createElement(d,null,r.a.createElement(c.a,{mode:"ghost"},"Normal")),r.a.createElement(d,null,r.a.createElement(c.a,{mode:"ghost",variant:"positive"},"Positive")),r.a.createElement(d,null,r.a.createElement(c.a,{mode:"ghost",variant:"negative"},"Negative"))),r.a.createElement("h3",null,"mode: transparent"),r.a.createElement("div",null,r.a.createElement(d,null,r.a.createElement(c.a,{mode:"transparent"},"Normal")),r.a.createElement(d,null,r.a.createElement(c.a,{mode:"transparent",variant:"positive"},"Positive")),r.a.createElement(d,null,r.a.createElement(c.a,{mode:"transparent",variant:"negative"},"Negative"))),r.a.createElement("h2",null,"Disabled"),r.a.createElement("h3",null,"Variants"),r.a.createElement("div",null,r.a.createElement(d,null,r.a.createElement(c.a,{disabled:!0},"Normal")),r.a.createElement(d,null,r.a.createElement(c.a,{disabled:!0,variant:"positive"},"Positive")),r.a.createElement(d,null,r.a.createElement(c.a,{disabled:!0,variant:"negative"},"Negative"))),r.a.createElement("h3",null,"mode: full"),r.a.createElement("div",null,r.a.createElement(d,null,r.a.createElement(c.a,{disabled:!0,mode:"full"},"Normal")),r.a.createElement(d,null,r.a.createElement(c.a,{disabled:!0,mode:"full",variant:"positive"},"Positive")),r.a.createElement(d,null,r.a.createElement(c.a,{disabled:!0,mode:"full",variant:"negative"},"Negative"))),r.a.createElement("h3",null,"mode: ghost"),r.a.createElement("div",null,r.a.createElement(d,null,r.a.createElement(c.a,{disabled:!0,mode:"ghost"},"Normal")),r.a.createElement(d,null,r.a.createElement(c.a,{disabled:!0,mode:"ghost",variant:"positive"},"Positive")),r.a.createElement(d,null,r.a.createElement(c.a,{disabled:!0,mode:"ghost",variant:"negative"},"Negative"))),r.a.createElement("h3",null,"mode: transparent"),r.a.createElement("div",null,r.a.createElement(d,null,r.a.createElement(c.a,{disabled:!0,mode:"transparent"},"Normal")),r.a.createElement(d,null,r.a.createElement(c.a,{disabled:!0,mode:"transparent",variant:"positive"},"Positive")),r.a.createElement(d,null,r.a.createElement(c.a,{disabled:!0,mode:"transparent",variant:"negative"},"Negative"))))},p=n(54),f=n.n(p);var E=function(e){return r.a.createElement("label",{className:f.a.Checkbox},r.a.createElement("input",{className:f.a.input,type:"checkbox",checked:!!e.checked,disabled:e.disabled,onChange:function(t){return e.onChange(t.target.value)}}),r.a.createElement("span",{className:f.a.label},e.children))};function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,l=void 0;try{for(var u,i=e[Symbol.iterator]();!(a=(u=i.next()).done)&&(n.push(u.value),!t||n.length!==t);a=!0);}catch(e){r=!0,l=e}finally{try{a||null==i.return||i.return()}finally{if(r)throw l}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var b=function(){var e=h(r.a.useState(!1),2),t=e[0],n=e[1];return r.a.createElement("div",null,r.a.createElement("h2",null,"CheckboxElementDemo"),r.a.createElement("h3",null,"No label"),r.a.createElement(E,null),r.a.createElement("h3",null,"With Label"),r.a.createElement(E,null,"Some label here"),r.a.createElement("h3",null,"checked"),r.a.createElement(E,{checked:!0},"pre checked"),r.a.createElement("h3",null,"Disabled"),r.a.createElement(E,{disabled:!0},"this is disabled"),r.a.createElement("br",null),r.a.createElement(E,{disabled:!0,checked:!0},"pre checked"),r.a.createElement("h3",null,"Interactive"),r.a.createElement(E,{checked:t,onChange:function(e){return n(!t)}},"You can click this one"))};function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,l=void 0;try{for(var u,i=e[Symbol.iterator]();!(a=(u=i.next()).done)&&(n.push(u.value),!t||n.length!==t);a=!0);}catch(e){r=!0,l=e}finally{try{a||null==i.return||i.return()}finally{if(r)throw l}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var g=function(){var e=y(r.a.useState(""),2),t=e[0],n=e[1];return r.a.createElement("div",null,"Basic input:",r.a.createElement("input",{value:t,onChange:function(e){return n(e.target.value)}}))},x=n(55),C=n.n(x);function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,l=void 0;try{for(var u,i=e[Symbol.iterator]();!(a=(u=i.next()).done)&&(n.push(u.value),!t||n.length!==t);a=!0);}catch(e){r=!0,l=e}finally{try{a||null==i.return||i.return()}finally{if(r)throw l}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var k=function(){var e=S(r.a.useState(0),2),t=e[0],n=e[1];return r.a.createElement("div",null,"Counter value: ",t,r.a.createElement("br",null),r.a.createElement(c.a,{variant:"positive",onClick:function(e){return n(function(e){return e+1})}},"Increment")," ",r.a.createElement(c.a,{variant:"negative",onClick:function(e){return n(function(e){return e-1})}},"Decrement"))},w=n(56),I=n.n(w);function N(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,l=void 0;try{for(var u,i=e[Symbol.iterator]();!(a=(u=i.next()).done)&&(n.push(u.value),!t||n.length!==t);a=!0);}catch(e){r=!0,l=e}finally{try{a||null==i.return||i.return()}finally{if(r)throw l}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var R=function(){var e=N(r.a.useState(0),2),t=e[0],n=e[1],a=N(r.a.useState(5),2),l=a[0],u=a[1];return r.a.createElement("div",null,r.a.createElement("p",null,"Problem with this example is that when incrementing or decrementing we depend on multiple previous values, both the counter and the delta. So counter and delta should sit together un a single state object (see the Complex value example)"),"Value: ",t,r.a.createElement("br",null),"Adjust with:",r.a.createElement("input",{type:"number",value:l,onChange:function(e){return u(parseInt(e.target.value,10))}}),r.a.createElement("br",null),r.a.createElement(c.a,{variant:"positive",onClick:function(e){return n(function(e){return e+l})}},"Increment")," ",r.a.createElement(c.a,{variant:"negative",onClick:function(e){return n(function(e){return e-l})}},"Decrement"))},O=n(57),B=n.n(O);function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){A(e,t,n[t])})}return e}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function V(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,l=void 0;try{for(var u,i=e[Symbol.iterator]();!(a=(u=i.next()).done)&&(n.push(u.value),!t||n.length!==t);a=!0);}catch(e){r=!0,l=e}finally{try{a||null==i.return||i.return()}finally{if(r)throw l}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var M=function(){var e=V(r.a.useState({add:1,multiply:2,result:1}),2),t=e[0],n=e[1];return r.a.createElement("div",null,"Take: ",t.result,r.a.createElement("br",null),"Add: ",r.a.createElement("input",{value:t.add,type:"number",onChange:function(e){return n(P({},t,{add:e.target.value}))}}),r.a.createElement("br",null),"Multiply:",r.a.createElement("input",{value:t.multiply,type:"number",onChange:function(e){return n(P({},t,{multiply:e.target.value}))}}),r.a.createElement("br",null),r.a.createElement(c.a,{onClick:function(e){return n(function(e){var t=e.add,n=e.multiply;return{add:t,multiply:n,result:(e.result+t)*n}})}},"Calculate"))},j=n(58),_=n.n(j);function T(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,l=void 0;try{for(var u,i=e[Symbol.iterator]();!(a=(u=i.next()).done)&&(n.push(u.value),!t||n.length!==t);a=!0);}catch(e){r=!0,l=e}finally{try{a||null==i.return||i.return()}finally{if(r)throw l}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function D(e){var t=e.initial,n=T(r.a.useState(function(){return function e(t){return t<=1?t:e(t-1)+e(t-2)}(t)}),2),a=n[0],l=n[1],u=T(r.a.useState(t),1)[0];return r.a.createElement("div",null,r.a.createElement("h3",null,"Inner"),"prop: ",t,r.a.createElement("br",null),"remembered: ",u,r.a.createElement("br",null),"change fib(",u,"):",r.a.createElement("input",{value:a,type:"number",onChange:function(e){return l(e.target.value)}}))}var F=function(){var e=T(r.a.useState(10),2),t=e[0],n=e[1],a=T(r.a.useState(Math.random()),2),l=a[0],u=a[1];return r.a.createElement("div",null,r.a.createElement("h3",null,"Wrapper"),"Start from the fib of",r.a.createElement("input",{value:t,type:"number",min:"0",max:"40",onChange:function(e){return n(e.target.value)}}),r.a.createElement(c.a,{onClick:function(e){u(Math.random())}},"Remount inner"),r.a.createElement("br",null),r.a.createElement(D,{key:l,initial:t}))},H=n(59),U=n.n(H);function W(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,l=void 0;try{for(var u,i=e[Symbol.iterator]();!(a=(u=i.next()).done)&&(n.push(u.value),!t||n.length!==t);a=!0);}catch(e){r=!0,l=e}finally{try{a||null==i.return||i.return()}finally{if(r)throw l}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function z(e){var t=e.external,n=W(r.a.useState(t),2),a=n[0],l=n[1];return r.a.createElement("div",null,r.a.createElement("h3",null,"Inner"),"External value: ",t,r.a.createElement("br",null),"Internal value: ",a,r.a.createElement("br",null),r.a.createElement(c.a,{onClick:function(e){return l(function(e){return e+1})}},"Inc Int"))}var J=function(){var e=W(r.a.useState(10),2),t=e[0],n=e[1];return r.a.createElement("div",null,r.a.createElement("p",null,"Note: this example is incomplete"),"External value: ",t,r.a.createElement("br",null),r.a.createElement(c.a,{onClick:function(e){return n(function(e){return e+1})}},"Inc ext"),r.a.createElement(z,{external:t}))},L=n(60),Q=n.n(L);var K=function(e){return r.a.createElement("div",{style:{marginTop:10,backgroundColor:"#fafafa",padding:5,whiteSpace:"pre-wrap",lineHeight:"1.4em"}},r.a.createElement("div",null,e.label),r.a.createElement("hr",null),r.a.createElement("code",null,e.children))};var X=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"React use state"),r.a.createElement("h3",null,"Basic input"),r.a.createElement(g,null),r.a.createElement(K,{space:"vertical",label:"Code for basic input"},C.a),r.a.createElement("h3",null,"Basic counter"),r.a.createElement(k,null),r.a.createElement(K,{space:"vertical",label:"Code for basic counter"},I.a),r.a.createElement("h3",null,"Multiple values"),r.a.createElement(R,null),r.a.createElement(K,{space:"vertical",label:"Code for multiple values"},B.a),r.a.createElement("h3",null,"Complex value"),r.a.createElement(M,null),r.a.createElement(K,{space:"vertical",label:"Code for complex value"},_.a),r.a.createElement("h3",null,"Expensive initial value"),r.a.createElement(F,null),r.a.createElement(K,{space:"vertical",label:"Code for expensive initial value"},U.a),r.a.createElement("h3",null,"External or internal change"),r.a.createElement(J,null),r.a.createElement(K,{space:"vertical",label:"Code for external or internal change"},Q.a))};function Y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,l=void 0;try{for(var u,i=e[Symbol.iterator]();!(a=(u=i.next()).done)&&(n.push(u.value),!t||n.length!==t);a=!0);}catch(e){r=!0,l=e}finally{try{a||null==i.return||i.return()}finally{if(r)throw l}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var q=function(){var e,t,n=Y(r.a.useState({f:(e="",t=0,function(){return e+""+t++})}),1)[0];return r.a.createElement(r.a.Fragment,null,"(r:",n.f(),")")};function G(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,l=void 0;try{for(var u,i=e[Symbol.iterator]();!(a=(u=i.next()).done)&&(n.push(u.value),!t||n.length!==t);a=!0);}catch(e){r=!0,l=e}finally{try{a||null==i.return||i.return()}finally{if(r)throw l}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function Z(e){var t=e.isMemoised,n=e.passed;return r.a.createElement("div",null,r.a.createElement("h3",null,t?"Memoised":"Simple"," Inner ",r.a.createElement(q,null)),"Passed in value is: ",n)}var $=r.a.memo(Z);var ee=function(){var e=G(r.a.useState("outer"),2),t=e[0],n=e[1],a=G(r.a.useState("passed"),2),l=a[0],u=a[1];return r.a.createElement("div",null,r.a.createElement("h3",null,"Outer ",r.a.createElement(q,null)),"Outer state to trigger outer render",r.a.createElement("input",{value:t,onChange:function(e){return n(e.target.value)}}),r.a.createElement("br",null),"State passed to inner to trigger also inner render",r.a.createElement("input",{value:l,onChange:function(e){return u(e.target.value)}}),r.a.createElement(Z,{isMemoised:!1,passed:l}),r.a.createElement($,{isMemoised:!0,passed:l}))},te=n(61),ne=n.n(te);var ae=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"React memo"),r.a.createElement("h3",null,"Basic "),r.a.createElement(ee,null),r.a.createElement(K,{space:"vertical",label:"Code for basic"},ne.a))},re=n(62),le=n.n(re),ue={button:v,checkbox:b,"react-use-state":X,"react-memo":ae};function ie(e){return r.a.createElement("div",{className:le.a.Pg},r.a.createElement("aside",{className:le.a.sidebar},r.a.createElement("ul",{className:le.a.menu},r.a.createElement("li",{className:le.a.menuSectionHeading},"Elements"),r.a.createElement("li",{className:le.a.menuItem},r.a.createElement(i.c,{linkStyle:"inherit",to:"/pg/button"},"Button")),r.a.createElement("li",{className:le.a.menuItem},r.a.createElement(i.c,{to:"/pg/checkbox",linkStyle:"inherit"},"checkbox")),r.a.createElement("li",{className:le.a.menuSectionHeading},"React Exp"),r.a.createElement("li",{className:le.a.menuItem},r.a.createElement(i.c,{to:"/pg/react-use-state",linkStyle:"inherit"},"useState")),r.a.createElement("li",{className:le.a.menuItem},r.a.createElement(i.c,{to:"/pg/react-memo",linkStyle:"inherit"},"memo")))),r.a.createElement("div",{className:le.a.mainContent},e.children))}t.default=function(){return r.a.createElement(l.a,null,r.a.createElement(u.a,{path:"/pg",exact:!0,render:function(){return r.a.createElement(ie,null,"Select a demo from the sidebar")}}),r.a.createElement(u.a,{path:"/pg/:demoId",exact:!0,render:function(e){var t=e.match.params.demoId;if(-1===Object.keys(ue).indexOf(t))return r.a.createElement(o.a,null);var n=ue[t];return r.a.createElement(ie,null,r.a.createElement(n,null))}}),r.a.createElement(u.a,{component:o.a}))}}}]);