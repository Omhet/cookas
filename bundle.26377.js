!function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(n){return e[n]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="/cookas",n(n.s="BVUt")}({"2mXy":function(e,n,t){"use strict";function r(e,n){for(var t in n)e[t]=n[t];return e}function o(e){var n=e.parentNode;n&&n.removeChild(e)}function i(e,n,t){var o,i,c,l,s=arguments;if(n=r({},n),arguments.length>3)for(t=[t],o=3;o<arguments.length;o++)t.push(s[o]);if(null!=t&&(n.children=t),null!=e&&null!=e.defaultProps)for(i in e.defaultProps)void 0===n[i]&&(n[i]=e.defaultProps[i]);return l=n.key,null!=(c=n.ref)&&delete n.ref,null!=l&&delete n.key,u(e,n,l,c)}function u(e,n,t,r){var o={type:e,props:n,key:t,ref:r,__k:null,__e:null,l:null,__c:null,constructor:void 0};return E.vnode&&E.vnode(o),o}function c(){return{}}function l(){}function s(e){if(null==e||"boolean"==typeof e)return null;if("string"==typeof e||"number"==typeof e)return u(null,e,null,null);if(Array.isArray(e))return i(l,null,e);if(null!=e.__e||null!=e.__c){var n=u(e.type,e.props,e.key,null);return n.__e=e.__e,n}return e}function a(e,n){this.props=e,this.context=n}function f(e){!e.__d&&(e.__d=!0)&&1===P.push(e)&&(E.debounceRendering||A)(p)}function p(){var e;for(P.sort(function(e,n){return n.__b-e.__b});e=P.pop();)e.__d&&e.forceUpdate(!1)}function d(e,n,t,r,i,u,c,a,f){var p,d,_,m,g,b,y=n.__k||h(n.props.children,n.__k=[],s,!0),j=t&&t.__k||U,x=j.length;if(f==T)if(f=null,null!=u)for(d=0;!f&&d<u.length;d++)f=u[d];else for(d=0;!f&&d<x;d++)f=j[d]&&j[d].__e;for(d=0;d<y.length;d++)if(null!=(p=y[d]=s(y[d]))){if(null===(m=j[d])||m&&p.key==m.key&&p.type===m.type)j[d]=void 0;else for(_=0;_<x;_++){if((m=j[_])&&p.key==m.key&&p.type===m.type){j[_]=void 0;break}m=null}if(null!=(g=v(e,p,m,r,i,u,c,a,null,f))){if(null!=p.l)g=p.l;else if(u==m||g!=f||null==g.parentNode)e:if(null==f||f.parentNode!==e)e.appendChild(g);else{for(b=f,_=0;(b=b.nextSibling)&&_<x;_+=2)if(b==g)break e;e.insertBefore(g,f)}f=g.nextSibling}}if(null!=u&&n.type!==l)for(d=u.length;d--;)null!=u[d]&&o(u[d]);for(d=x;d--;)null!=j[d]&&O(j[d],a)}function h(e,n,t,r){if(null==n&&(n=[]),null==e||"boolean"==typeof e)r&&n.push(null);else if(Array.isArray(e))for(var o=0;o<e.length;o++)h(e[o],n,t,r);else n.push(t?t(e):e);return n}function _(e,n,t,o,i){var u,c,l,s;if("style"===(n=i?"className"===n?"class":n:"class"===n?"className":n))for(c in u=r(r({},o),t))(t||T)[c]!==(o||T)[c]&&e.style.setProperty("-"===c[0]&&"-"===c[1]?c:c.replace(R,"-$&"),t&&c in t?"number"==typeof u[c]&&!1===L.test(c)?u[c]+"px":u[c]:"");else"o"===n[0]&&"n"===n[1]?(l=n!==(n=n.replace(/Capture$/,"")),s=n.toLowerCase(),n=(s in e?s:n).slice(2),t?o||e.addEventListener(n,m,l):e.removeEventListener(n,m,l),(e.u||(e.u={}))[n]=t):"list"!==n&&"tagName"!==n&&!i&&n in e?e[n]=null==t?"":t:"function"!=typeof t&&"dangerouslySetInnerHTML"!==n&&(n!==(n=n.replace(/^xlink:?/,""))?null==t||!1===t?e.removeAttributeNS(M,n.toLowerCase()):e.setAttributeNS(M,n.toLowerCase(),t):null==t||!1===t?e.removeAttribute(n):e.setAttribute(n,t))}function m(e){return this.u[e.type](E.event?E.event(e):e)}function v(e,n,t,o,i,u,c,f,p,h){var _,m,g,w,k,C,S,P,A,R,M,D,U;if(null==t||null==n||t.type!==n.type||t.key!==n.key){if(null!=t&&O(t,f),null==n)return null;t=T}if(S=n.type,void 0!==n.constructor)return null;(m=E.diff)&&m(n);try{e:if(t.type===l||S===l){if(d(e,n,t,o,i,u,c,f,h),(A=n.__k.length)&&null!=(m=n.__k[0]))for(n.__e=m.__e;A--&&!(n.l=(m=n.__k[A])&&(m.l||m.__e)););}else if("function"==typeof S){if(R=(m=S.contextType)&&o[m.__c],M=m?R?R.props.value:m.__p:o,t.__c?(P=(_=n.__c=t.__c).__p=_.__E,n.__e=t.__e):(S.prototype&&S.prototype.render?n.__c=_=new S(n.props,M):(n.__c=_=new a(n.props,M),_.constructor=S,_.render=j),_.__a=f,R&&R.sub(_),_.props=n.props,_.state||(_.state={}),_.context=M,_.__n=o,g=_.__d=!0,_.__h=[]),_.__v=n,null==_.__s&&(_.__s=_.state),null!=S.getDerivedStateFromProps&&r(_.__s==_.state?_.__s=r({},_.__s):_.__s,S.getDerivedStateFromProps(n.props,_.__s)),g)null==S.getDerivedStateFromProps&&null!=_.componentWillMount&&_.componentWillMount(),null!=_.componentDidMount&&c.push(_);else{if(null==S.getDerivedStateFromProps&&null==p&&null!=_.componentWillReceiveProps&&_.componentWillReceiveProps(n.props,M),!p&&null!=_.shouldComponentUpdate&&!1===_.shouldComponentUpdate(n.props,_.__s,M)){_.props=n.props,_.state=_.__s,_.__d=!1,n.l=t.l;break e}null!=_.componentWillUpdate&&_.componentWillUpdate(n.props,_.__s,M)}w=_.props,k=_.state,_.context=M,_.props=n.props,_.state=_.__s,(m=E.render)&&m(n),D=_.__t||null,_.__d=!1;try{U=_.__t=s(_.render(_.props,_.state,_.context))}catch(e){if((m=E.catchRender)&&m(e,_))return;throw e}for(null!=_.getChildContext&&(o=r(r({},o),_.getChildContext())),g||null==_.getSnapshotBeforeUpdate||(C=_.getSnapshotBeforeUpdate(w,k)),_.__b=f?(f.__b||0)+1:0,_.base=n.__e=v(e,U,D,o,i,u,c,_,null,h),null!=U&&(n.l=U.l),_.__P=e,(m=n.ref)&&y(m,_,f);m=_.__h.pop();)m.call(_);g||null==w||null==_.componentDidUpdate||_.componentDidUpdate(w,k,C)}else n.__e=b(t.__e,n,t,o,i,u,c,f),(m=n.ref)&&t.ref!==m&&y(m,n.__e,f);P&&(_.__E=_.__p=null),(m=E.diffed)&&m(n)}catch(e){x(e,f)}return n.__e}function g(e,n){for(var t;t=e.pop();)try{t.componentDidMount()}catch(e){x(e,t.__a)}E.commit&&E.commit(n)}function b(e,n,t,r,o,i,u,c){var l,s,a,f,p,h,m=t.props,v=n.props;if(o="svg"===n.type||o,null==e&&null!=i)for(l=0;l<i.length;l++)if(null!=(s=i[l])&&(null===n.type?3===s.nodeType:s.localName===n.type)){e=s,i[l]=null;break}if(null==e){if(null===n.type)return document.createTextNode(v);e=o?document.createElementNS("http://www.w3.org/2000/svg",n.type):document.createElement(n.type),i=null}return null===n.type?m!==v&&(e.data=v):(null!=i&&null!=e.childNodes&&(i=U.slice.call(e.childNodes)),n!==t&&(p=(a=t.props||T).dangerouslySetInnerHTML,((h=(f=n.props).dangerouslySetInnerHTML)||p)&&null==i&&(h&&p&&h.__html==p.__html||(e.innerHTML=h&&h.__html||"")),f.multiple&&(e.multiple=f.multiple),d(e,n,t,r,"foreignObject"!==n.type&&o,i,u,c,T),function(e,n,t,r){var o,i,u=Object.keys(n).sort();for(o=0;o<u.length;o++)"children"===(i=u[o])||"key"===i||t&&("value"===i||"checked"===i?e:t)[i]===n[i]||_(e,i,n[i],t[i],r);for(o in t)"children"===o||"key"===o||o in n||_(e,o,null,t[o],r)}(e,f,a,o))),e}function y(e,n,t){try{"function"==typeof e?e(n):e.current=n}catch(e){x(e,t)}}function O(e,n,t){var r,i,u;if(E.unmount&&E.unmount(e),(r=e.ref)&&y(r,null,n),t||null!=e.l||(t=null!=(i=e.__e)),e.__e=e.l=null,null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){x(e,n)}r.base=r.__P=null,(r=r.__t)&&O(r,n,t)}else if(r=e.__k)for(u=0;u<r.length;u++)r[u]&&O(r[u],n,t);null!=i&&o(i)}function j(e,n,t){return this.constructor(e,t)}function x(e,n){for(E.catchError&&E.catchError(e,n);n;n=n.__a)if(!n.__p)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError)n.setState(n.constructor.getDerivedStateFromError(e));else{if(null==n.componentDidCatch)continue;n.componentDidCatch(e)}return f(n.__E=n)}catch(n){e=n}throw e}function w(e,n,t){var r,o;E.root&&E.root(e,n),r=n.__t,e=i(l,null,[e]),o=[],d(n,t?e:n.__t=e,r,T,void 0!==n.ownerSVGElement,t?[t]:r?null:U.slice.call(n.childNodes),o,e,t||T),g(o,e)}function k(e,n){n.__t=null,w(e,n)}function C(e,n){return n=r(r({},e.props),n),arguments.length>2&&(n.children=U.slice.call(arguments,2)),u(e.type,n,n.key||e.key,n.ref||e.ref)}function S(e){var n={},t={__c:"__cC"+D++,__p:e,Consumer:function(e,n){return e.children(n)},Provider:function(e){var r,o=this;return this.getChildContext||(r=[],this.getChildContext=function(){return n[t.__c]=o,n},this.shouldComponentUpdate=function(e){r.some(function(n){n.__P&&(n.context=e.value,f(n))})},this.sub=function(e){r.push(e);var n=e.componentWillUnmount;e.componentWillUnmount=function(){r.splice(r.indexOf(e),1),n&&n.call(e)}}),e.children}};return t.Consumer.contextType=t,t}t.r(n),t.d(n,"render",function(){return w}),t.d(n,"hydrate",function(){return k}),t.d(n,"createElement",function(){return i}),t.d(n,"h",function(){return i}),t.d(n,"Fragment",function(){return l}),t.d(n,"createRef",function(){return c}),t.d(n,"Component",function(){return a}),t.d(n,"cloneElement",function(){return C}),t.d(n,"createContext",function(){return S}),t.d(n,"toChildArray",function(){return h}),t.d(n,"unmount",function(){return O}),t.d(n,"options",function(){return E});var E,P,A,R,M,D,T={},U=[],L=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;E={},a.prototype.setState=function(e,n){var t=this.__s!==this.state&&this.__s||(this.__s=r({},this.state));("function"!=typeof e||(e=e(t,this.props)))&&r(t,e),null!=e&&this.__v&&(n&&this.__h.push(n),f(this))},a.prototype.forceUpdate=function(e){var n,t=this.__v,r=this.__v.__e,o=this.__P;o&&(null!=(r=v(o,t,t,this.__n,void 0!==o.ownerSVGElement,null,n=[],this.__a,!1!==e,r))&&r.parentNode!==o&&o.appendChild(r),g(n,t)),e&&e()},a.prototype.render=l,P=[],A="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,R=/[A-Z]/g,M="http://www.w3.org/1999/xlink",D=0},BVUt:function(e,n,t){"use strict";t.r(n);var r=t("2mXy"),o=function(e){return e&&e.default?e.default:e};if("serviceWorker"in navigator&&navigator.serviceWorker.register(t.p+"sw.js"),"function"==typeof o(t("QfWi"))){var i=document.body.firstElementChild;0,function(){var e=o(t("QfWi"));i=Object(r.render)(Object(r.h)(e),document.body,i)}()}},GwNL:function(e,n,t){var r=t("MOxe"),o=t("bw3T"),i="undefined"!=typeof window?r.useLayoutEffect:r.useEffect;e.exports=function(){var e=[].slice.call(arguments),n=r.useContext(o),t=r.useState({});return i(function(){return n.on("@changed",function(n,r){e.some(function(e){return e in r})&&t[1]({})})},[]),r.useMemo(function(){var t=n.get(),r={};return e.forEach(function(e){r[e]=t[e]}),r.dispatch=n.dispatch,r},[t[0]])}},MOxe:function(e,n,t){"use strict";function r(e){x.options.hook&&x.options.hook(j);var n=j.__H||(j.__H={i:[],t:[],u:[]});return e>=n.i.length&&n.i.push({}),n.i[e]}function o(e){return i(y,e)}function i(e,n,t){var o=r(O++);return o.__c||(o.__c=j,o.o=[t?t(n):y(null,n),function(n){var t=e(o.o[0],n);o.o[0]!==t&&(o.o[0]=t,o.__c.setState({}))}]),o.o}function u(e,n){var t=r(O++);b(t.v,n)&&(t.o=e,t.v=n,j.__H.t.push(t),E(j))}function c(e,n){var t=r(O++);b(t.v,n)&&(t.o=e,t.v=n,j.__H.u.push(t))}function l(e){var n=r(O++);return n.o||(n.o={current:e}),n.o}function s(e,n,t){var o=r(O++);b(o.v,t)&&(o.v=t,e&&(e.current=n()))}function a(e,n){var t=r(O++);return b(t.v,n)?(t.v=n,t.p=e,t.o=e()):t.o}function f(e,n){return a(function(){return e},n)}function p(e){var n=j.context[e.__c];if(!n)return e.__p;var t=r(O++);return null==t.o&&(t.o=!0,n.sub(j)),n.props.value}function d(e,n){x.options.useDebugValue&&x.options.useDebugValue(n?n(e):e)}function h(){w.some(function(e){e.m=!1,e.__P&&(e.__H.t=m(e.__H.t))}),w=[]}function _(){setTimeout(h)}function m(e){return e.forEach(v),e.forEach(g),[]}function v(e){e.l&&e.l()}function g(e){var n=e.o();"function"==typeof n&&(e.l=n)}function b(e,n){return!e||n.some(function(n,t){return n!==e[t]})}function y(e,n){return"function"==typeof n?n(e):n}t.r(n),t.d(n,"useState",function(){return o}),t.d(n,"useReducer",function(){return i}),t.d(n,"useEffect",function(){return u}),t.d(n,"useLayoutEffect",function(){return c}),t.d(n,"useRef",function(){return l}),t.d(n,"useImperativeHandle",function(){return s}),t.d(n,"useMemo",function(){return a}),t.d(n,"useCallback",function(){return f}),t.d(n,"useContext",function(){return p}),t.d(n,"useDebugValue",function(){return d});var O,j,x=t("2mXy"),w=[],k=x.options.render;x.options.render=function(e){k&&k(e),O=0,(j=e.__c).__H&&(j.__H.t=m(j.__H.t))};var C=x.options.diffed;x.options.diffed=function(e){C&&C(e);var n=e.__c;if(n){var t=n.__H;t&&(t.u=m(t.u))}};var S=x.options.unmount;x.options.unmount=function(e){S&&S(e);var n=e.__c;if(n){var t=n.__H;t&&t.i.forEach(function(e){return e.l&&e.l()})}};var E=function(){};"undefined"!=typeof window&&(E=function(e){!e.m&&(e.m=!0)&&1===w.push(e)&&(x.options.requestAnimationFrame?x.options.requestAnimationFrame(h):requestAnimationFrame(_))})},MV5A:function(){},QfWi:function(e,n,t){"use strict";t.r(n),function(e){function r(){return e(i.a.Provider,{value:u.a},e("div",null,e(c.a,null)))}t.d(n,"default",function(){return r});var o=t("bw3T"),i=t.n(o),u=t("kQFM"),c=(t("MV5A"),t("wl9h"))}.call(this,t("2mXy").h)},TSYQ:function(e,n){var t;!function(){"use strict";function r(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var i=typeof t;if("string"===i||"number"===i)e.push(t);else if(Array.isArray(t)&&t.length){var u=r.apply(null,t);u&&e.push(u)}else if("object"===i)for(var c in t)o.call(t,c)&&t[c]&&e.push(c)}}return e.join(" ")}var o={}.hasOwnProperty;e.exports?(r.default=r,e.exports=r):void 0===(t=function(){return r}.apply(n,[]))||(e.exports=t)}()},WS6Y:function(e,n,t){"use strict";t.d(n,"a",function(){return r});var r="https://recipes-search.glitch.me/showcase"},bw3T:function(e,n,t){var r=t("2mXy");e.exports=r.createContext()},kQFM:function(e,n,t){"use strict";t.d(n,"a",function(){return i});var r=t("we5D"),o=t.n(r),i=(t("ye7r"),o()([function(e){e.on("@init",function(){return{clickedRecipe:{},isRecipeInfoOpen:!1}}),e.on("openClickedRecipe",function(e,n){return{clickedRecipe:n,isRecipeInfoOpen:!0}})},function(e){e.on("@init",function(){return{foundRecipes:[]}}),e.on("setFoundRecipes",function(e,n){return{foundRecipes:n}})}]))},we5D:function(e){function n(){return(n=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}e.exports=function(e){var t={},r={},o=function e(o,i){if("@dispatch"!==o&&e("@dispatch",[o,i,t[o]]),t[o]){var u,c={};t[o].forEach(function(e){var t=e(r,i);t&&"function"!=typeof t.then&&(u=n({},r,t),n(c,t),r=u)}),u&&e("@changed",c)}},i={dispatch:o,get:function(){return r},on:function(e,n){return(t[e]||(t[e]=[])).push(n),function(){t[e]=t[e].filter(function(e){return e!==n})}}};return e.forEach(function(e){e&&e(i)}),o("@init"),i}},wl9h:function(e,n,t){"use strict";function r(e,n){var t="p"+f++,r=n+t;return e.forEach(function(e){if(/^@/.test(e)){var n=e.indexOf("{")+1;e=e.slice(0,n)+r+e.slice(n)}else e=r+e;p.insertRule(e,p.cssRules.length)}),t}function o(e,n){return n+"{"+e+"}"}function i(e,n){var t=[""];for(var r in n=n||0,e){var u=e[r];r=r.replace(/[A-Z]/g,"-$&").toLowerCase(),u.sub||Array.isArray(u)?(u=Array.isArray(u)?u:[u]).forEach(function(e){return t[0]+=r+":"+e+";"}):(r=r.replace(/&/g,""),t.push(o(i(u,!/^@/.test(r)).join(""),r)))}return n||(t[0]=o(t[0],"")),t}function u(){return(u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var c=t("2mXy"),l=t("MOxe"),s=t("GwNL"),a=t.n(s),f=0,p=document.head.appendChild(document.createElement("style")).sheet,d=function(e,n){function t(n){return function(t){return function(r,i){i=(r=r||{}).children||i;var u="function"==typeof t?t(r):t;return r.class=[o(u),r.class].filter(Boolean).join(" "),e(n,r,i)}}}function o(e){var n=i(e),t=n.join("");return u[t]||(u[t]=r(n,"."))}var u={};return(n=n||{}).returnObject?{style:t,css:o}:t},h={display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",fontSize:"2rem",marginTop:"10rem"," .loader":{marginBottom:"3rem",display:"flex",width:"3.5em",height:"3.5em",border:"3px solid transparent",borderTopColor:"#222",borderBottomColor:"#222",borderRadius:"50%",animation:"spin 1.5s linear infinite"}," .loader:before":{content:"''",display:"block",margin:"auto",width:"0.75em",height:"0.75em",border:"3px solid #222",borderRadius:"50%",animation:"pulse 1s alternate ease-in-out infinite"},"@keyframes spin":{to:{transform:"rotate(360deg)"}},"@keyframes pulse":{from:{transform:"scale(0.5)"},to:{transform:"scale(1)"}}},_=d(c.h)(function(e){return Object(c.h)("div",{class:e.class},Object(c.h)("div",{class:"loader"}),e.children)})(h),m=d(c.h)(function(e){var n=e.isError,t=e.isLoading,r=e.loaderContent,o=void 0===r?"Загружаю":r,i=e.children,u=Object(c.h)(_,null,o);return Object(c.h)("div",{class:e.class},t?u:n?Object(c.h)("div",null,Object(c.h)("p",null,"Ой-вэй, что-то пошло не так"),Object(c.h)("p",null,"Попробуйте снова")):i)})({display:"flex",flexDirection:"column",alignItems:"center"}),v=t("TSYQ"),g=t.n(v),b=d(c.h)(function(e){var n=e.onChange,t=e.placeholder,r=e.icon,o=Object(l.useState)(!1),i=o[0],u=o[1];return Object(c.h)("div",{class:g()(e.class,{focus:i})},Object(c.h)("input",{type:"text",onChange:n,placeholder:t,onFocus:function(){return u(!0)},onBlur:function(){return u(!1)}}),r)})({position:"relative",display:"inline-flex",alignItems:"center",border:"1px solid rgba(34,36,38,.15)",borderRadius:".28571429rem",padding:"0.5rem 1rem",".focus":{borderColor:"#85b7d9"}," input":{color:"rgba(0,0,0,.87)",fontSize:".9rem",border:"none",outline:"none"}," input:focus":{borderColor:"#85b7d9"}," input:focus + svg":{fill:"#444"}}),y=d(c.h)(function(e){var n=e.amount,t=e.ingredients;return Object(c.h)("details",{class:e.class},Object(c.h)("summary",null,n),Object(c.h)("div",null,t.map(function(e){var n=e.name,t=e.amount;return Object(c.h)("div",{class:"row",key:n},Object(c.h)("span",{class:"name"},n),Object(c.h)("span",{class:"amount"},t))})))})({" summary":{outline:"none",cursor:"pointer",marginBottom:"1rem"}," .row":{color:"rgba(0,0,0,.68)",fontSize:"14px",display:"flex",justifyContent:"space-between",marginBottom:".5rem"}," .name":{fontWeight:"bold"}," .amount":{textAlign:"right"}}),O=d(c.h)(function(e){var n=e.title,t=e.image,r=e.pageUrl,o=e.ingredientsAmount,i=e.ingredients,u=e.time,l=e.portions,s=a()("clickedRecipe"),f=s.dispatch;return Object(c.h)("div",{class:e.class},Object(c.h)("img",{onClick:function(){f("openClickedRecipe",{title:n,image:t,ingredients:i,ingredientsAmount:o,portions:l,pageUrl:r,time:u})},class:"image",src:t,alt:n,loading:"lazy"}),Object(c.h)("div",{class:"content"},Object(c.h)("h3",{class:"header"},n),Object(c.h)("div",{class:"meta"},l+" "+(u||"")),Object(c.h)("div",{class:"description"},Object(c.h)(y,{amount:o,ingredients:i}))))})({display:"flex",flexDirection:"column",alignItems:"flex-start",userSelect:"none",width:"20rem"," .image":{cursor:"pointer",width:"100%"}," .content":{width:"100%"}," .header":{marginBottom:".5rem",marginTop:".5rem",color:"rgba(0,0,0,.85)"}," .meta":{fontSize:".8rem",color:"#666",marginBottom:"1rem"}}),j=t("ye7r"),x=t("WS6Y"),w=function(e){var n=Object.assign({},e);return delete n.styles,Object(c.h)("svg",Object.assign({version:"1.1",id:"svg-search-hOphw0R",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 56.966 56.966","xml:space":"preserve"},n),["\n",Object(c.h)("path",{d:"M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23\n\ts10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92\n\tc0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17\n\ts-17-7.626-17-17S14.61,6,23.984,6z"},[]),"\n",Object(c.h)("g",{},["\n"]),"\n",Object(c.h)("g",{},["\n"]),"\n",Object(c.h)("g",{},["\n"]),"\n",Object(c.h)("g",{},["\n"]),"\n",Object(c.h)("g",{},["\n"]),"\n",Object(c.h)("g",{},["\n"]),"\n",Object(c.h)("g",{},["\n"]),"\n",Object(c.h)("g",{},["\n"]),"\n",Object(c.h)("g",{},["\n"]),"\n",Object(c.h)("g",{},["\n"]),"\n",Object(c.h)("g",{},["\n"]),"\n",Object(c.h)("g",{},["\n"]),"\n",Object(c.h)("g",{},["\n"]),"\n",Object(c.h)("g",{},["\n"]),"\n",Object(c.h)("g",{},["\n"]),"\n"])},k=d(c.h);n.a=k(function(e){var n=Object(l.useState)(""),t=n[0],r=n[1],o=a()("foundRecipes"),i=o.dispatch,s=o.foundRecipes;console.log(s);var f=Object(j.b)(x.a,{recipes:s},!0),p=f.data,d=f.isLoading,h=f.isError,_=f.doFetch;Object(l.useEffect)(function(){i("setFoundRecipes",p.recipes)},[p]);var v=Object(c.h)("div",null,Object(c.h)("p",null,"Ищу рецепты"),Object(c.h)("p",null,"Подождите, пожалуйста"));return Object(c.h)("div",{class:e.class},Object(c.h)("form",{class:"search",onSubmit:function(e){e.preventDefault(),_(Object(j.a)(t))}},Object(c.h)(b,{placeholder:"Найти блюдо...",onChange:function(e){return r(e.target.value)},icon:Object(c.h)(w,{width:"16px",height:"16px",fill:"#888"})})),Object(c.h)(m,{isError:h,isLoading:d,loaderContent:v},s&&s.length>0?Object(c.h)("div",{class:"recipes"},s.map(function(e){return Object(c.h)(O,u({key:e.pageUrl},e))})):Object(c.h)("div",null,Object(c.h)("p",null,"Ох, ничего не найдено"))))})({display:"flex",flexDirection:"column",alignItems:"center"," .search":{marginBottom:"2rem",marginTop:"2rem"}," .recipes":{marginTop:"3rem",display:"grid",gridGap:"3rem",alignItems:"baseline"}})},ye7r:function(e,n,t){"use strict";function r(e){return"https://recipes-search.glitch.me/search?q="+e}t.d(n,"a",function(){return r}),t.d(n,"b",function(){return i});var o=t("MOxe"),i=(t("WS6Y"),function(e,n,t){void 0===t&&(t=!1);var r=Object(o.useState)(n),i=r[0],u=r[1],c=Object(o.useState)(e),l=c[0],s=c[1],a=Object(o.useState)(!1),f=a[0],p=a[1],d=Object(o.useState)(!1),h=d[0],_=d[1],m=Object(o.useState)(!1),v=m[0],g=m[1];Object(o.useEffect)(function(){return g(!0)},[]),Object(o.useEffect)(function(){(v||t)&&new Promise(function(e,n){_(!1),p(!0);var t=function(){try{return p(!1),e()}catch(e){return n(e)}},r=function(){try{return _(!0),t()}catch(e){return n(e)}};try{return Promise.resolve(fetch(l)).then(function(e){try{return Promise.resolve(e.json()).then(function(e){try{return u(e),t()}catch(e){return r()}},r)}catch(e){return r()}},r)}catch(e){r()}})},[l]);return{data:i,isLoading:f,isError:h,doFetch:function(e){s(e)}}})}});
//# sourceMappingURL=bundle.26377.js.map