!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(e){return t[e]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/cookas",e(e.s="BVUt")}({"0i7v":function(t,e){"use strict";function n(t,e){var n="p"+c++,r=e+n;return t.forEach(function(t){if(/^@/.test(t)){var e=t.indexOf("{")+1;t=t.slice(0,e)+r+t.slice(e)}else t=r+t;i.insertRule(t,i.cssRules.length)}),n}function r(t,e){return e+"{"+t+"}"}function o(t,e){var n=[""];for(var c in e=e||0,t){var i=t[c];c=c.replace(/[A-Z]/g,"-$&").toLowerCase(),i.sub||Array.isArray(i)?(i=Array.isArray(i)?i:[i]).forEach(function(t){return n[0]+=c+":"+t+";"}):(c=c.replace(/&/g,""),n.push(r(o(i,!/^@/.test(c)).join(""),c)))}return e||(n[0]=r(n[0],"")),n}var c=0,i=document.head.appendChild(document.createElement("style")).sheet;e.a=function(t,e){function r(e){return function(n){return function(r,o){o=(r=r||{}).children||o;var i="function"==typeof n?n(r):n;return r.class=[c(i),r.class].filter(Boolean).join(" "),t(e,r,o)}}}function c(t){var e=o(t),r=e.join("");return i[r]||(i[r]=n(e,"."))}var i={};return(e=e||{}).returnObject?{style:r,css:c}:r}},"2mXy":function(t,e,n){"use strict";function r(t,e){for(var n in e)t[n]=e[n];return t}function o(t){var e=t.parentNode;e&&e.removeChild(t)}function c(t,e,n){var o,c,l,u,s=arguments;if(e=r({},e),arguments.length>3)for(n=[n],o=3;o<arguments.length;o++)n.push(s[o]);if(null!=n&&(e.children=n),null!=t&&null!=t.defaultProps)for(c in t.defaultProps)void 0===e[c]&&(e[c]=t.defaultProps[c]);return u=e.key,null!=(l=e.ref)&&delete e.ref,null!=u&&delete e.key,i(t,e,u,l)}function i(t,e,n,r){var o={type:t,props:e,key:n,ref:r,__k:null,__e:null,l:null,__c:null,constructor:void 0};return M.vnode&&M.vnode(o),o}function l(){return{}}function u(){}function s(t){if(null==t||"boolean"==typeof t)return null;if("string"==typeof t||"number"==typeof t)return i(null,t,null,null);if(Array.isArray(t))return c(u,null,t);if(null!=t.__e||null!=t.__c){var e=i(t.type,t.props,t.key,null);return e.__e=t.__e,e}return t}function a(t,e){this.props=t,this.context=e}function p(t){!t.__d&&(t.__d=!0)&&1===E.push(t)&&(M.debounceRendering||R)(f)}function f(){var t;for(E.sort(function(t,e){return e.__b-t.__b});t=E.pop();)t.__d&&t.forceUpdate(!1)}function d(t,e,n,r,c,i,l,a,p){var f,d,m,g,_,v,O=e.__k||h(e.props.children,e.__k=[],s,!0),y=n&&n.__k||H,x=y.length;if(p==D)if(p=null,null!=i)for(d=0;!p&&d<i.length;d++)p=i[d];else for(d=0;!p&&d<x;d++)p=y[d]&&y[d].__e;for(d=0;d<O.length;d++)if(null!=(f=O[d]=s(O[d]))){if(null===(g=y[d])||g&&f.key==g.key&&f.type===g.type)y[d]=void 0;else for(m=0;m<x;m++){if((g=y[m])&&f.key==g.key&&f.type===g.type){y[m]=void 0;break}g=null}if(null!=(_=b(t,f,g,r,c,i,l,a,null,p))){if(null!=f.l)_=f.l;else if(i==g||_!=p||null==_.parentNode)t:if(null==p||p.parentNode!==t)t.appendChild(_);else{for(v=p,m=0;(v=v.nextSibling)&&m<x;m+=2)if(v==_)break t;t.insertBefore(_,p)}p=_.nextSibling}}if(null!=i&&e.type!==u)for(d=i.length;d--;)null!=i[d]&&o(i[d]);for(d=x;d--;)null!=y[d]&&j(y[d],a)}function h(t,e,n,r){if(null==e&&(e=[]),null==t||"boolean"==typeof t)r&&e.push(null);else if(Array.isArray(t))for(var o=0;o<t.length;o++)h(t[o],e,n,r);else e.push(n?n(t):t);return e}function m(t,e,n,o,c){var i,l,u,s;if("style"===(e=c?"className"===e?"class":e:"class"===e?"className":e))for(l in i=r(r({},o),n))(n||D)[l]!==(o||D)[l]&&t.style.setProperty("-"===l[0]&&"-"===l[1]?l:l.replace(P,"-$&"),n&&l in n?"number"==typeof i[l]&&!1===B.test(l)?i[l]+"px":i[l]:"");else"o"===e[0]&&"n"===e[1]?(u=e!==(e=e.replace(/Capture$/,"")),s=e.toLowerCase(),e=(s in t?s:e).slice(2),n?o||t.addEventListener(e,g,u):t.removeEventListener(e,g,u),(t.u||(t.u={}))[e]=n):"list"!==e&&"tagName"!==e&&!c&&e in t?t[e]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==e&&(e!==(e=e.replace(/^xlink:?/,""))?null==n||!1===n?t.removeAttributeNS(T,e.toLowerCase()):t.setAttributeNS(T,e.toLowerCase(),n):null==n||!1===n?t.removeAttribute(e):t.setAttribute(e,n))}function g(t){return this.u[t.type](M.event?M.event(t):t)}function b(t,e,n,o,c,i,l,p,f,h){var m,g,_,w,C,k,S,E,R,P,T,A,H;if(null==n||null==e||n.type!==e.type||n.key!==e.key){if(null!=n&&j(n,p),null==e)return null;n=D}if(S=e.type,void 0!==e.constructor)return null;(g=M.diff)&&g(e);try{t:if(n.type===u||S===u){if(d(t,e,n,o,c,i,l,p,h),(R=e.__k.length)&&null!=(g=e.__k[0]))for(e.__e=g.__e;R--&&!(e.l=(g=e.__k[R])&&(g.l||g.__e)););}else if("function"==typeof S){if(P=(g=S.contextType)&&o[g.__c],T=g?P?P.props.value:g.__p:o,n.__c?(E=(m=e.__c=n.__c).__p=m.__E,e.__e=n.__e):(S.prototype&&S.prototype.render?e.__c=m=new S(e.props,T):(e.__c=m=new a(e.props,T),m.constructor=S,m.render=y),m.__a=p,P&&P.sub(m),m.props=e.props,m.state||(m.state={}),m.context=T,m.__n=o,_=m.__d=!0,m.__h=[]),m.__v=e,null==m.__s&&(m.__s=m.state),null!=S.getDerivedStateFromProps&&r(m.__s==m.state?m.__s=r({},m.__s):m.__s,S.getDerivedStateFromProps(e.props,m.__s)),_)null==S.getDerivedStateFromProps&&null!=m.componentWillMount&&m.componentWillMount(),null!=m.componentDidMount&&l.push(m);else{if(null==S.getDerivedStateFromProps&&null==f&&null!=m.componentWillReceiveProps&&m.componentWillReceiveProps(e.props,T),!f&&null!=m.shouldComponentUpdate&&!1===m.shouldComponentUpdate(e.props,m.__s,T)){m.props=e.props,m.state=m.__s,m.__d=!1,e.l=n.l;break t}null!=m.componentWillUpdate&&m.componentWillUpdate(e.props,m.__s,T)}w=m.props,C=m.state,m.context=T,m.props=e.props,m.state=m.__s,(g=M.render)&&g(e),A=m.__t||null,m.__d=!1;try{H=m.__t=s(m.render(m.props,m.state,m.context))}catch(t){if((g=M.catchRender)&&g(t,m))return;throw t}for(null!=m.getChildContext&&(o=r(r({},o),m.getChildContext())),_||null==m.getSnapshotBeforeUpdate||(k=m.getSnapshotBeforeUpdate(w,C)),m.__b=p?(p.__b||0)+1:0,m.base=e.__e=b(t,H,A,o,c,i,l,m,null,h),null!=H&&(e.l=H.l),m.__P=t,(g=e.ref)&&O(g,m,p);g=m.__h.pop();)g.call(m);_||null==w||null==m.componentDidUpdate||m.componentDidUpdate(w,C,k)}else e.__e=v(n.__e,e,n,o,c,i,l,p),(g=e.ref)&&n.ref!==g&&O(g,e.__e,p);E&&(m.__E=m.__p=null),(g=M.diffed)&&g(e)}catch(t){x(t,p)}return e.__e}function _(t,e){for(var n;n=t.pop();)try{n.componentDidMount()}catch(t){x(t,n.__a)}M.commit&&M.commit(e)}function v(t,e,n,r,o,c,i,l){var u,s,a,p,f,h,g=n.props,b=e.props;if(o="svg"===e.type||o,null==t&&null!=c)for(u=0;u<c.length;u++)if(null!=(s=c[u])&&(null===e.type?3===s.nodeType:s.localName===e.type)){t=s,c[u]=null;break}if(null==t){if(null===e.type)return document.createTextNode(b);t=o?document.createElementNS("http://www.w3.org/2000/svg",e.type):document.createElement(e.type),c=null}return null===e.type?g!==b&&(t.data=b):(null!=c&&null!=t.childNodes&&(c=H.slice.call(t.childNodes)),e!==n&&(f=(a=n.props||D).dangerouslySetInnerHTML,((h=(p=e.props).dangerouslySetInnerHTML)||f)&&null==c&&(h&&f&&h.__html==f.__html||(t.innerHTML=h&&h.__html||"")),p.multiple&&(t.multiple=p.multiple),d(t,e,n,r,"foreignObject"!==e.type&&o,c,i,l,D),function(t,e,n,r){var o,c,i=Object.keys(e).sort();for(o=0;o<i.length;o++)"children"===(c=i[o])||"key"===c||n&&("value"===c||"checked"===c?t:n)[c]===e[c]||m(t,c,e[c],n[c],r);for(o in n)"children"===o||"key"===o||o in e||m(t,o,null,n[o],r)}(t,p,a,o))),t}function O(t,e,n){try{"function"==typeof t?t(e):t.current=e}catch(t){x(t,n)}}function j(t,e,n){var r,c,i;if(M.unmount&&M.unmount(t),(r=t.ref)&&O(r,null,e),n||null!=t.l||(n=null!=(c=t.__e)),t.__e=t.l=null,null!=(r=t.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(t){x(t,e)}r.base=r.__P=null,(r=r.__t)&&j(r,e,n)}else if(r=t.__k)for(i=0;i<r.length;i++)r[i]&&j(r[i],e,n);null!=c&&o(c)}function y(t,e,n){return this.constructor(t,n)}function x(t,e){for(M.catchError&&M.catchError(t,e);e;e=e.__a)if(!e.__p)try{if(e.constructor&&null!=e.constructor.getDerivedStateFromError)e.setState(e.constructor.getDerivedStateFromError(t));else{if(null==e.componentDidCatch)continue;e.componentDidCatch(t)}return p(e.__E=e)}catch(e){t=e}throw t}function w(t,e,n){var r,o;M.root&&M.root(t,e),r=e.__t,t=c(u,null,[t]),o=[],d(e,n?t:e.__t=t,r,D,void 0!==e.ownerSVGElement,n?[n]:r?null:H.slice.call(e.childNodes),o,t,n||D),_(o,t)}function C(t,e){e.__t=null,w(t,e)}function k(t,e){return e=r(r({},t.props),e),arguments.length>2&&(e.children=H.slice.call(arguments,2)),i(t.type,e,e.key||t.key,e.ref||t.ref)}function S(t){var e={},n={__c:"__cC"+A++,__p:t,Consumer:function(t,e){return t.children(e)},Provider:function(t){var r,o=this;return this.getChildContext||(r=[],this.getChildContext=function(){return e[n.__c]=o,e},this.shouldComponentUpdate=function(t){r.some(function(e){e.__P&&(e.context=t.value,p(e))})},this.sub=function(t){r.push(t);var e=t.componentWillUnmount;t.componentWillUnmount=function(){r.splice(r.indexOf(t),1),e&&e.call(t)}}),t.children}};return n.Consumer.contextType=n,n}n.r(e),n.d(e,"render",function(){return w}),n.d(e,"hydrate",function(){return C}),n.d(e,"createElement",function(){return c}),n.d(e,"h",function(){return c}),n.d(e,"Fragment",function(){return u}),n.d(e,"createRef",function(){return l}),n.d(e,"Component",function(){return a}),n.d(e,"cloneElement",function(){return k}),n.d(e,"createContext",function(){return S}),n.d(e,"toChildArray",function(){return h}),n.d(e,"unmount",function(){return j}),n.d(e,"options",function(){return M});var M,E,R,P,T,A,D={},H=[],B=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;M={},a.prototype.setState=function(t,e){var n=this.__s!==this.state&&this.__s||(this.__s=r({},this.state));("function"!=typeof t||(t=t(n,this.props)))&&r(n,t),null!=t&&this.__v&&(e&&this.__h.push(e),p(this))},a.prototype.forceUpdate=function(t){var e,n=this.__v,r=this.__v.__e,o=this.__P;o&&(null!=(r=b(o,n,n,this.__n,void 0!==o.ownerSVGElement,null,e=[],this.__a,!1!==t,r))&&r.parentNode!==o&&o.appendChild(r),_(e,n)),t&&t()},a.prototype.render=u,E=[],R="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,P=/[A-Z]/g,T="http://www.w3.org/1999/xlink",A=0},BVUt:function(t,e,n){"use strict";n.r(e);var r=n("2mXy");const o=t=>t&&t.default?t.default:t;if("serviceWorker"in navigator&&navigator.serviceWorker.register(n.p+"sw-esm.js"),"function"==typeof o(n("QfWi"))){let t=document.body.firstElementChild;0,(()=>{let e=o(n("QfWi"));t=Object(r.render)(Object(r.h)(e),document.body,t)})()}},BtKw:function(t,e,n){"use strict";var r=n("2mXy"),o=n("0i7v");const c={display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",fontSize:"1.7rem",marginTop:"10rem"," .loader":{marginBottom:"3rem",display:"flex",width:"3.5em",height:"3.5em",border:"3px solid transparent",borderTopColor:"#222",borderBottomColor:"#222",borderRadius:"50%",animation:"spin 1.5s linear infinite"}," .loader:before":{content:"''",display:"block",margin:"auto",width:"0.75em",height:"0.75em",border:"3px solid #222",borderRadius:"50%",animation:"pulse 1s alternate ease-in-out infinite"},"@keyframes spin":{to:{transform:"rotate(360deg)"}},"@keyframes pulse":{from:{transform:"scale(0.5)"},to:{transform:"scale(1)"}},"@media (max-width: 600px)":{fontSize:"1.5rem",marginTop:"5rem"}};var i=Object(o.a)(r.h)(t=>Object(r.h)("div",{class:t.class},Object(r.h)("div",{class:"loader"}),t.children))(c);const l=Object(o.a)(r.h);e.a=l(t=>{const{isError:e,isLoading:n,isText:o=!1,loaderContent:c="Загружаю",children:l}=t,u=Object(r.h)(i,null,c);return Object(r.h)("div",{class:t.class},n?u:e?Object(r.h)("div",null,Object(r.h)("p",null,"Ой-вэй, что-то пошло не так"),Object(r.h)("p",null,"Попробуйте снова")):l)})({display:"flex",flexDirection:"column",alignItems:"center"})},GwNL:function(t,e,n){var r=n("MOxe"),o=n("bw3T"),c="undefined"!=typeof window?r.useLayoutEffect:r.useEffect;t.exports=function(){var t=[].slice.call(arguments),e=r.useContext(o),n=r.useState({});return c(function(){return e.on("@changed",function(e,r){t.some(function(t){return t in r})&&n[1]({})})},[]),r.useMemo(function(){var n=e.get(),r={};return t.forEach(function(t){r[t]=n[t]}),r.dispatch=e.dispatch,r},[n[0]])}},MOxe:function(t,e,n){"use strict";function r(t){x.options.hook&&x.options.hook(y);var e=y.__H||(y.__H={i:[],t:[],u:[]});return t>=e.i.length&&e.i.push({}),e.i[t]}function o(t){return c(O,t)}function c(t,e,n){var o=r(j++);return o.__c||(o.__c=y,o.o=[n?n(e):O(null,e),function(e){var n=t(o.o[0],e);o.o[0]!==n&&(o.o[0]=n,o.__c.setState({}))}]),o.o}function i(t,e){var n=r(j++);v(n.v,e)&&(n.o=t,n.v=e,y.__H.t.push(n),M(y))}function l(t,e){var n=r(j++);v(n.v,e)&&(n.o=t,n.v=e,y.__H.u.push(n))}function u(t){var e=r(j++);return e.o||(e.o={current:t}),e.o}function s(t,e,n){var o=r(j++);v(o.v,n)&&(o.v=n,t&&(t.current=e()))}function a(t,e){var n=r(j++);return v(n.v,e)?(n.v=e,n.p=t,n.o=t()):n.o}function p(t,e){return a(function(){return t},e)}function f(t){var e=y.context[t.__c];if(!e)return t.__p;var n=r(j++);return null==n.o&&(n.o=!0,e.sub(y)),e.props.value}function d(t,e){x.options.useDebugValue&&x.options.useDebugValue(e?e(t):t)}function h(){w.some(function(t){t.m=!1,t.__P&&(t.__H.t=g(t.__H.t))}),w=[]}function m(){setTimeout(h)}function g(t){return t.forEach(b),t.forEach(_),[]}function b(t){t.l&&t.l()}function _(t){var e=t.o();"function"==typeof e&&(t.l=e)}function v(t,e){return!t||e.some(function(e,n){return e!==t[n]})}function O(t,e){return"function"==typeof e?e(t):e}n.r(e),n.d(e,"useState",function(){return o}),n.d(e,"useReducer",function(){return c}),n.d(e,"useEffect",function(){return i}),n.d(e,"useLayoutEffect",function(){return l}),n.d(e,"useRef",function(){return u}),n.d(e,"useImperativeHandle",function(){return s}),n.d(e,"useMemo",function(){return a}),n.d(e,"useCallback",function(){return p}),n.d(e,"useContext",function(){return f}),n.d(e,"useDebugValue",function(){return d});var j,y,x=n("2mXy"),w=[],C=x.options.render;x.options.render=function(t){C&&C(t),j=0,(y=t.__c).__H&&(y.__H.t=g(y.__H.t))};var k=x.options.diffed;x.options.diffed=function(t){k&&k(t);var e=t.__c;if(e){var n=e.__H;n&&(n.u=g(n.u))}};var S=x.options.unmount;x.options.unmount=function(t){S&&S(t);var e=t.__c;if(e){var n=e.__H;n&&n.i.forEach(function(t){return t.l&&t.l()})}};var M=function(){};"undefined"!=typeof window&&(M=function(t){!t.m&&(t.m=!0)&&1===w.push(t)&&(x.options.requestAnimationFrame?x.options.requestAnimationFrame(h):requestAnimationFrame(m))})},MV5A:function(){},QfWi:function(t,e,n){"use strict";n.r(e),function(t){function r(){return t(c.a.Provider,{value:i.a},t(l.a,null),t(u.a,null))}n.d(e,"default",function(){return r});var o=n("bw3T"),c=n.n(o),i=n("kQFM"),l=(n("MV5A"),n("wl9h")),u=n("nry6")}.call(this,n("2mXy").h)},TSYQ:function(t,e){var n;!function(){"use strict";function r(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var c=typeof n;if("string"===c||"number"===c)t.push(n);else if(Array.isArray(n)&&n.length){var i=r.apply(null,n);i&&t.push(i)}else if("object"===c)for(var l in n)o.call(n,l)&&n[l]&&t.push(l)}}return t.join(" ")}var o={}.hasOwnProperty;t.exports?(r.default=r,t.exports=r):void 0===(n=function(){return r}.apply(e,[]))||(t.exports=n)}()},WS6Y:function(t,e,n){"use strict";n.d(e,"a",function(){return r});const r="https://recipes-search.glitch.me/showcase"},"X/9+":function(t,e,n){"use strict";var r=n("2mXy"),o=n("0i7v");const c=Object(o.a)(r.h);e.a=c(t=>{const{amount:e,ingredients:n,isDefaultOpen:o}=t;return Object(r.h)("details",{open:o,class:t.class},Object(r.h)("summary",null,e),Object(r.h)("div",null,n&&n.map(t=>{let{name:e,amount:n}=t;return Object(r.h)("div",{class:"row",key:e},Object(r.h)("span",{class:"name"},e),Object(r.h)("span",{class:"amount"},n))})))})({" summary":{outline:"none",cursor:"pointer",marginBottom:"1rem"}," .row":{color:"rgba(0,0,0,.68)",fontSize:"14px",display:"flex",justifyContent:"space-between",marginBottom:".5rem"}," .name":{fontWeight:"bold"}," .amount":{textAlign:"right"}})},bw3T:function(t,e,n){var r=n("2mXy");t.exports=r.createContext()},kQFM:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n("we5D");const o=n.n(r)()([t=>{t.on("@init",()=>({clickedRecipe:{},isRecipeModalOpen:!1})),t.on("openRecipeModal",(t,e)=>({clickedRecipe:e,isRecipeModalOpen:!0})),t.on("closeRecipeModal",()=>({clickedRecipe:{},isRecipeModalOpen:!1}))},t=>{t.on("@init",()=>({foundRecipes:[]})),t.on("setFoundRecipes",(t,e)=>({foundRecipes:e}))}])},nry6:function(t,e,n){"use strict";var r=n("2mXy"),o=n("MOxe"),c=n("GwNL"),i=n.n(c),l=n("0i7v"),u=n("TSYQ"),s=n.n(u),a=n("ye7r"),p=n("X/9+"),f=n("BtKw"),d=function(t){var e=Object.assign({},t);return delete e.styles,Object(r.h)("svg",Object.assign({version:"1.1",id:"svg-portion-hOphw0R",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 35.235 35.235","xml:space":"preserve"},e),["\r\n",Object(r.h)("g",{},["\r\n\t",Object(r.h)("g",{id:"svg-portion-38UZpfP"},["\r\n\t\t",Object(r.h)("path",{d:"M26.776,12.687H19.25c0.68,0,1.233-0.553,1.233-1.234s-0.554-1.23-1.233-1.23h-3.078c-0.68,0-1.232,0.549-1.232,1.23\r\n\t\t\ts0.553,1.234,1.232,1.234H8.645c-2.094,0-3.828,1.877-4.165,3.875h26.464C30.605,14.563,28.871,12.687,26.776,12.687z"},[]),"\r\n\t\t",Object(r.h)("path",{d:"M31.005,18.677v-0.352H4.479H4.417H0v1.762h4.417v10.918c0,2.338,1.894,4.229,4.228,4.229h18.132\r\n\t\t\tc2.336,0,4.229-1.891,4.229-4.229V20.439h4.229v-1.762H31.005z"},[]),"\r\n\t\t",Object(r.h)("path",{d:"M11.24,4.235c0.123,0.162,0.254,0.318,0.391,0.465l0.341,0.342c0.216,0.217,0.417,0.434,0.577,0.629\r\n\t\t\tc0.08,0.098,0.146,0.191,0.195,0.268c0.047,0.076,0.09,0.135,0.1,0.223c0.012,0.094-0.037,0.221-0.133,0.348\r\n\t\t\tc-0.096,0.125-0.23,0.246-0.387,0.367c0.186,0.072,0.389,0.096,0.605,0.07c0.215-0.025,0.451-0.121,0.648-0.326\r\n\t\t\tc0.195-0.205,0.304-0.508,0.321-0.775c0.019-0.27-0.022-0.514-0.083-0.734c-0.123-0.438-0.327-0.793-0.545-1.119\r\n\t\t\tc-0.109-0.16-0.244-0.322-0.34-0.447c-0.096-0.113-0.185-0.229-0.266-0.344c-0.33-0.459-0.561-0.873-0.647-1.359\r\n\t\t\tc-0.09-0.492,0.01-1.121,0.307-1.842c-0.771,0.162-1.457,0.807-1.681,1.709c-0.111,0.445-0.087,0.934,0.032,1.363\r\n\t\t\tC10.793,3.511,11.002,3.897,11.24,4.235z"},[]),"\r\n\t\t",Object(r.h)("path",{d:"M15.809,4.235C15.932,4.397,16.064,4.553,16.2,4.7l0.34,0.342c0.216,0.217,0.416,0.434,0.58,0.629\r\n\t\t\tc0.077,0.098,0.143,0.191,0.193,0.268c0.049,0.076,0.09,0.135,0.098,0.223c0.013,0.094-0.035,0.221-0.131,0.348\r\n\t\t\tc-0.095,0.125-0.23,0.246-0.389,0.367c0.188,0.072,0.392,0.096,0.607,0.07c0.214-0.025,0.453-0.121,0.648-0.326\r\n\t\t\tc0.197-0.205,0.304-0.508,0.322-0.775c0.019-0.27-0.021-0.514-0.082-0.734c-0.125-0.438-0.33-0.793-0.548-1.119\r\n\t\t\tc-0.107-0.16-0.243-0.322-0.339-0.447c-0.094-0.113-0.185-0.229-0.264-0.344c-0.331-0.459-0.563-0.873-0.649-1.359\r\n\t\t\tc-0.09-0.49,0.008-1.119,0.304-1.84c-0.77,0.162-1.455,0.807-1.678,1.709c-0.111,0.445-0.088,0.934,0.031,1.363\r\n\t\t\tC15.363,3.511,15.568,3.897,15.809,4.235z"},[]),"\r\n\t\t",Object(r.h)("path",{d:"M19.972,4.235c0.122,0.162,0.253,0.318,0.39,0.465l0.341,0.342c0.216,0.217,0.415,0.434,0.577,0.629\r\n\t\t\tc0.08,0.098,0.146,0.191,0.195,0.268c0.047,0.076,0.088,0.135,0.1,0.223c0.013,0.094-0.037,0.221-0.133,0.348\r\n\t\t\tc-0.095,0.125-0.23,0.246-0.389,0.367c0.188,0.072,0.392,0.096,0.605,0.07c0.215-0.025,0.453-0.121,0.65-0.326\r\n\t\t\tc0.195-0.205,0.303-0.508,0.32-0.775c0.02-0.27-0.021-0.514-0.082-0.734c-0.123-0.438-0.326-0.793-0.545-1.119\r\n\t\t\tc-0.109-0.16-0.244-0.322-0.34-0.447c-0.096-0.113-0.186-0.229-0.266-0.344c-0.33-0.459-0.561-0.873-0.646-1.359\r\n\t\t\tc-0.091-0.492,0.009-1.121,0.304-1.842c-0.77,0.162-1.457,0.807-1.679,1.709c-0.11,0.445-0.087,0.934,0.032,1.363\r\n\t\t\tC19.524,3.511,19.731,3.897,19.972,4.235z"},[]),"\r\n\t"]),"\r\n\t",Object(r.h)("g",{id:"svg-portion-3Y8YtqK"},["\r\n\t"]),"\r\n"]),"\r\n",Object(r.h)("g",{},["\r\n"]),"\r\n",Object(r.h)("g",{},["\r\n"]),"\r\n",Object(r.h)("g",{},["\r\n"]),"\r\n",Object(r.h)("g",{},["\r\n"]),"\r\n",Object(r.h)("g",{},["\r\n"]),"\r\n",Object(r.h)("g",{},["\r\n"]),"\r\n",Object(r.h)("g",{},["\r\n"]),"\r\n",Object(r.h)("g",{},["\r\n"]),"\r\n",Object(r.h)("g",{},["\r\n"]),"\r\n",Object(r.h)("g",{},["\r\n"]),"\r\n",Object(r.h)("g",{},["\r\n"]),"\r\n",Object(r.h)("g",{},["\r\n"]),"\r\n",Object(r.h)("g",{},["\r\n"]),"\r\n",Object(r.h)("g",{},["\r\n"]),"\r\n",Object(r.h)("g",{},["\r\n"]),"\r\n"])},h=function(t){var e=Object.assign({},t);return delete e.styles,Object(r.h)("svg",Object.assign({version:"1.1",id:"svg-clock-hOphw0R",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"612px",height:"612px",viewBox:"0 0 612 612","xml:space":"preserve"},e),["\r\n",Object(r.h)("g",{},["\r\n\t",Object(r.h)("g",{},["\r\n\t\t",Object(r.h)("path",{d:"M587.572,186.881c-32.266-75.225-87.096-129.934-162.949-162.285C386.711,8.427,346.992,0.168,305.497,0.168\r\n\t\t\tc-41.488,0-80.914,8.181-118.784,24.428C111.488,56.861,56.415,111.535,24.092,186.881C7.895,224.629,0,264.176,0,305.664\r\n\t\t\tc0,41.496,7.895,81.371,24.092,119.127c32.323,75.346,87.403,130.348,162.621,162.621c37.877,16.247,77.295,24.42,118.784,24.42\r\n\t\t\tc41.489,0,81.214-8.259,119.12-24.42c75.853-32.352,130.683-87.403,162.956-162.621C603.819,386.914,612,347.16,612,305.664\r\n\t\t\tC612,264.176,603.826,224.757,587.572,186.881z M538.724,440.853c-24.021,41.195-56.929,73.876-98.375,98.039\r\n\t\t\tc-41.195,24.021-86.332,36.135-134.845,36.135c-36.47,0-71.27-7.024-104.4-21.415c-33.129-14.384-61.733-33.294-85.661-57.215\r\n\t\t\tc-23.928-23.928-42.973-52.811-57.214-85.997c-14.199-33.065-21.08-68.258-21.08-104.735c0-48.52,11.921-93.428,35.807-134.509\r\n\t\t\tc23.971-41.231,56.886-73.947,98.039-98.04c41.146-24.092,85.99-36.142,134.502-36.142c48.52,0,93.649,12.121,134.845,36.142\r\n\t\t\tc41.446,24.164,74.283,56.879,98.375,98.039c24.092,41.153,36.135,85.99,36.135,134.509\r\n\t\t\tC574.852,354.185,562.888,399.399,538.724,440.853z"},[]),"\r\n\t\t",Object(r.h)("path",{d:"M324.906,302.988V129.659c0-10.372-9.037-18.738-19.41-18.738c-9.701,0-18.403,8.366-18.403,18.738v176.005\r\n\t\t\tc0,0.336,0.671,1.678,0.671,2.678c-0.671,6.024,1.007,11.043,5.019,15.062l100.053,100.046c6.695,6.695,19.073,6.695,25.763,0\r\n\t\t\tc7.694-7.695,7.188-18.86,0-26.099L324.906,302.988z"},[]),"\r\n\t"]),"\r\n"]),"\r\n",Object(r.h)("g",{},["\r\n"]),"\r\n",Object(r.h)("g",{},["\r\n"]),"\r\n",Object(r.h)("g",{},["\r\n"]),"\r\n",Object(r.h)("g",{},["\r\n"]),"\r\n",Object(r.h)("g",{},["\r\n"]),"\r\n",Object(r.h)("g",{},["\r\n"]),"\r\n",Object(r.h)("g",{},["\r\n"]),"\r\n",Object(r.h)("g",{},["\r\n"]),"\r\n",Object(r.h)("g",{},["\r\n"]),"\r\n",Object(r.h)("g",{},["\r\n"]),"\r\n",Object(r.h)("g",{},["\r\n"]),"\r\n",Object(r.h)("g",{},["\r\n"]),"\r\n",Object(r.h)("g",{},["\r\n"]),"\r\n",Object(r.h)("g",{},["\r\n"]),"\r\n",Object(r.h)("g",{},["\r\n"]),"\r\n"])};const m=Object(l.a)(r.h);e.a=m(t=>{const{dispatch:e,clickedRecipe:n,isRecipeModalOpen:c}=i()("clickedRecipe","isRecipeModalOpen"),{title:l,image:u,ingredients:m,ingredientsAmount:g,portions:b,time:_,pageUrl:v}=n,{data:O,isLoading:j,isError:y,doFetch:x}=Object(a.c)(v,{image:"",steps:[]});Object(o.useEffect)(()=>{document.body.style.overflow=c?"hidden":"auto"},[c]),Object(o.useEffect)(()=>{v&&(x(Object(a.a)(v)),console.log("FETCHING"))},[v]),console.log(O);const w=j?u:O.image?O.image:u,C=Object(r.h)("div",null,Object(r.h)("p",null,"Ищу рецепт блюда"),Object(r.h)("p",null,l));return Object(r.h)("div",{onClick:()=>e("closeRecipeModal"),class:s()(t.class,{active:c})},Object(r.h)("div",{onClick:t=>t.stopPropagation(),class:"modal"},Object(r.h)("h2",{class:"title"},l),Object(r.h)("div",{class:"content"},Object(r.h)("div",{className:s()("image",{loading:j})},Object(r.h)("img",{src:w,alt:l,loading:"lazy"})),Object(r.h)("div",{class:"info"},Object(r.h)(p.a,{ingredients:m,amount:g,isDefaultOpen:!0}),Object(r.h)("div",{class:"meta"},Object(r.h)("div",null,Object(r.h)(d,null),Object(r.h)("div",null,b)),Object(r.h)("div",null,Object(r.h)(h,null),Object(r.h)("div",null,_||"")))),Object(r.h)(f.a,{loaderContent:C,isError:y,isLoading:j,isText:!0},Object(r.h)("div",{class:"steps"},O.steps.map((t,e)=>Object(r.h)("p",{class:"step",key:e},Object(r.h)("span",{style:{fontWeight:"bold",marginRight:"1rem"}},t[0]+t[1]),t.slice(2))))))))})({display:"none",position:"fixed",width:"100%",top:"0",left:"0",right:"0",bottom:"0",padding:"2rem",backgroundColor:"rgba(0, 0, 0, 0.8)",overflow:"auto",".active":{display:"block"}," .modal":{width:"900px",margin:"0 auto",backgroundColor:"#fff",borderRadius:"5px"}," .title":{margin:"0",borderBottom:"1px solid rgba(34,36,38,.15)",padding:"1.25rem 2.5rem"}," .image":{filter:"none",display:"flex",justifyContent:"center",willChange:"filter",transition:"filter .3s"}," .image > img":{height:"31.5rem",width:"100%",objectFit:"cover"}," .image.loading":{filter:"blur(5px)"}," .content":{padding:"2.5rem"}," .info":{display:"flex",marginTop:"64px"}," .info > *":{flex:"1"}," .meta":{display:"flex",alignItems:"center",justifyContent:"space-evenly"}," .meta svg":{maxWidth:"4rem",maxHeight:"4rem",marginBottom:".5rem"}," .meta > *":{display:"flex",flexDirection:"column",alignItems:"center"}," .steps":{marginTop:"4rem",fontSize:"1.1rem",textAlign:"justify",paddingRight:"8rem"}," .step":{marginBottom:"3rem"}," .stepNum":{}})},we5D:function(t){function e(){return(e=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}t.exports=function(t){var n={},r={},o=function t(o,c){if("@dispatch"!==o&&t("@dispatch",[o,c,n[o]]),n[o]){var i,l={};n[o].forEach(function(t){var n=t(r,c);n&&"function"!=typeof n.then&&(i=e({},r,n),e(l,n),r=i)}),i&&t("@changed",l)}},c={dispatch:o,get:function(){return r},on:function(t,e){return(n[t]||(n[t]=[])).push(e),function(){n[t]=n[t].filter(function(t){return t!==e})}}};return t.forEach(function(t){t&&t(c)}),o("@init"),c}},wl9h:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var o=n("2mXy"),c=n("MOxe"),i=n("GwNL"),l=n.n(i),u=n("0i7v"),s=n("BtKw"),a=n("TSYQ"),p=n.n(a);var f=Object(u.a)(o.h)(t=>{const{onChange:e,placeholder:n,icon:r}=t,[i,l]=Object(c.useState)(!1);return Object(o.h)("div",{class:p()(t.class,{focus:i})},Object(o.h)("input",{type:"text",onChange:e,placeholder:n,onFocus:()=>l(!0),onBlur:()=>l(!1)}),r)})({position:"relative",display:"inline-flex",alignItems:"center",border:"1px solid rgba(34,36,38,.15)",borderRadius:".28571429rem",padding:"0.5rem 1rem",".focus":{borderColor:"#85b7d9"}," input":{color:"rgba(0,0,0,.87)",fontSize:".9rem",border:"none",outline:"none"}," input:focus":{borderColor:"#85b7d9"}," input:focus + svg":{fill:"#444"}}),d=n("X/9+");var h=Object(u.a)(o.h)(t=>{const{title:e,image:n,pageUrl:r,ingredientsAmount:c,ingredients:i,time:u,portions:s}=t,{dispatch:a}=l()("clickedRecipe");return Object(o.h)("div",{tabIndex:0,class:t.class},Object(o.h)("img",{onClick:()=>{a("openRecipeModal",{title:e,image:n,ingredients:i,ingredientsAmount:c,portions:s,pageUrl:r,time:u})},class:"image",src:n,alt:e,loading:"lazy"}),Object(o.h)("div",{class:"content"},Object(o.h)("h3",{class:"header"},e),Object(o.h)("div",{class:"meta"},s+" "+(u||"")),Object(o.h)("div",{class:"description"},Object(o.h)(d.a,{amount:c,ingredients:i}))))})({display:"flex",flexDirection:"column",alignItems:"flex-start",userSelect:"none",width:"20rem"," .image":{cursor:"pointer",width:"100%"}," .content":{width:"100%"}," .header":{marginBottom:".5rem",marginTop:".5rem",color:"rgba(0,0,0,.85)"}," .meta":{fontSize:".8rem",color:"#666",marginBottom:"1rem"}}),m=n("ye7r"),g=n("WS6Y"),b=function(t){var e=Object.assign({},t);return delete e.styles,Object(o.h)("svg",Object.assign({version:"1.1",id:"svg-search-hOphw0R",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 56.966 56.966","xml:space":"preserve"},e),["\n",Object(o.h)("path",{d:"M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23\n\ts10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92\n\tc0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17\n\ts-17-7.626-17-17S14.61,6,23.984,6z"},[]),"\n",Object(o.h)("g",{},["\n"]),"\n",Object(o.h)("g",{},["\n"]),"\n",Object(o.h)("g",{},["\n"]),"\n",Object(o.h)("g",{},["\n"]),"\n",Object(o.h)("g",{},["\n"]),"\n",Object(o.h)("g",{},["\n"]),"\n",Object(o.h)("g",{},["\n"]),"\n",Object(o.h)("g",{},["\n"]),"\n",Object(o.h)("g",{},["\n"]),"\n",Object(o.h)("g",{},["\n"]),"\n",Object(o.h)("g",{},["\n"]),"\n",Object(o.h)("g",{},["\n"]),"\n",Object(o.h)("g",{},["\n"]),"\n",Object(o.h)("g",{},["\n"]),"\n",Object(o.h)("g",{},["\n"]),"\n"])};const _=Object(u.a)(o.h);e.a=_(t=>{const[e,n]=Object(c.useState)(""),{dispatch:i,foundRecipes:u}=l()("foundRecipes"),{data:a,isLoading:p,isError:d,doFetch:_}=Object(m.c)(g.a,{recipes:u},!0);Object(c.useEffect)(()=>{i("setFoundRecipes",a.recipes)},[a]);const v=Object(o.h)("div",null,Object(o.h)("p",null,"Ищу рецепты"),Object(o.h)("p",null,"Подождите, пожалуйста"));return Object(o.h)("div",{class:t.class},Object(o.h)("form",{class:"search",onSubmit:function(t){t.preventDefault(),_(Object(m.b)(e))}},Object(o.h)(f,{placeholder:"Найти блюдо...",onChange:t=>n(t.target.value),icon:Object(o.h)(b,{width:"16px",height:"16px",fill:"#888"})})),Object(o.h)(s.a,{isError:d,isLoading:p,loaderContent:v},u&&u.length>0?Object(o.h)("div",{class:"recipes"},u.map(t=>Object(o.h)(h,r({key:t.pageUrl},t)))):Object(o.h)("div",null,Object(o.h)("p",null,"Ох, ничего не найдено"))))})({display:"flex",flexDirection:"column",alignItems:"center"," .search":{marginBottom:"2rem",marginTop:"2rem"}," .recipes":{marginTop:"3rem",display:"grid",gridGap:"3rem",alignItems:"baseline"}})},ye7r:function(t,e,n){"use strict";function r(t){return"https://recipes-search.glitch.me/search?q="+t}function o(t){return"https://recipes-search.glitch.me/recipe?url="+t}n.d(e,"b",function(){return r}),n.d(e,"a",function(){return o}),n.d(e,"c",function(){return i});var c=n("MOxe");n("WS6Y");const i=function(t,e,n){void 0===n&&(n=!1);const[r,o]=Object(c.useState)(e),[i,l]=Object(c.useState)(t),[u,s]=Object(c.useState)(!1),[a,p]=Object(c.useState)(!1),[f,d]=Object(c.useState)(!1);Object(c.useEffect)(()=>d(!0),[]),Object(c.useEffect)(()=>{(f||n)&&(async()=>{p(!1),s(!0);try{const t=await fetch(i),e=await t.json();o(e)}catch(t){p(!0)}s(!1)})()},[i]);return{data:r,isLoading:u,isError:a,doFetch:t=>{l(t)}}}}});
//# sourceMappingURL=bundle.9a9d1.esm.js.map