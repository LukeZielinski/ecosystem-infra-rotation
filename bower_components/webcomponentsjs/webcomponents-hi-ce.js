/**
@license @nocompile
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
(function(){/*

 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
'use strict';(function(a){function b(a,b){if("function"===typeof window.CustomEvent)return new CustomEvent(a,b);var c=document.createEvent("CustomEvent");c.initCustomEvent(a,!!b.bubbles,!!b.cancelable,b.detail);return c}function c(a){if(J)return a.ownerDocument!==document?a.ownerDocument:null;var b=a.__importDoc;if(!b&&a.parentNode){b=a.parentNode;if("function"===typeof b.closest)b=b.closest("link[rel=import]");else for(;!h(b)&&(b=b.parentNode););a.__importDoc=b}return b}function d(a){var b=l(document,
"link[rel=import]:not([import-dependency])"),c=b.length;c?r(b,function(b){return k(b,function(){0===--c&&a()})}):a()}function e(a){function b(){"loading"!==document.readyState&&document.body&&(document.removeEventListener("readystatechange",b),a())}document.addEventListener("readystatechange",b);b()}function f(a){e(function(){return d(function(){return a&&a()})})}function k(a,b){if(a.__loaded)b&&b();else if("script"===a.localName&&!a.src||"style"===a.localName&&!a.firstChild)a.__loaded=!0,b&&b();
else{var c=function(e){a.removeEventListener(e.type,c);a.__loaded=!0;b&&b()};a.addEventListener("load",c);K&&"style"===a.localName||a.addEventListener("error",c)}}function h(a){return a.nodeType===Node.ELEMENT_NODE&&"link"===a.localName&&"import"===a.rel}function g(){var a=this;this.a={};this.b=0;this.f=new MutationObserver(function(b){return a.K(b)});this.f.observe(document.head,{childList:!0,subtree:!0});this.loadImports(document)}function n(a){r(l(a,"template"),function(a){r(l(a.content,'script:not([type]),script[type="application/javascript"],script[type="text/javascript"],script[type="module"]'),
function(a){var b=document.createElement("script");r(a.attributes,function(a){return b.setAttribute(a.name,a.value)});b.textContent=a.textContent;a.parentNode.replaceChild(b,a)});n(a.content)})}function l(a,b){return a.childNodes.length?a.querySelectorAll(b):Aa}function r(a,b,c){var e=a?a.length:0,d=c?-1:1;for(c=c?e-1:0;c<e&&0<=c;c+=d)b(a[c],c)}var A=document.createElement("link"),J="import"in A,Aa=A.querySelectorAll("*"),L=null;!1==="currentScript"in document&&Object.defineProperty(document,"currentScript",
{get:function(){return L||("complete"!==document.readyState?document.scripts[document.scripts.length-1]:null)},configurable:!0});var Ba=/(url\()([^)]*)(\))/g,Ca=/(@import[\s]+(?!url\())([^;]*)(;)/g,Da=/(<link[^>]*)(rel=['|"]?stylesheet['|"]?[^>]*>)/g,t={I:function(a,b){a.href&&a.setAttribute("href",t.j(a.getAttribute("href"),b));a.src&&a.setAttribute("src",t.j(a.getAttribute("src"),b));if("style"===a.localName){var c=t.D(a.textContent,b,Ba);a.textContent=t.D(c,b,Ca)}},D:function(a,b,c){return a.replace(c,
function(a,c,e,d){a=e.replace(/["']/g,"");b&&(a=t.j(a,b));return c+"'"+a+"'"+d})},j:function(a,b){if(void 0===t.m){t.m=!1;try{var c=new URL("b","http://a");c.pathname="c%20d";t.m="http://a/c%20d"===c.href}catch(Wa){}}if(t.m)return(new URL(a,b)).href;c=t.F;c||(c=document.implementation.createHTMLDocument("temp"),t.F=c,c.A=c.createElement("base"),c.head.appendChild(c.A),c.w=c.createElement("a"));c.A.href=b;c.w.href=a;return c.w.href||a}},X={async:!0,load:function(a,b,c){if(a)if(a.match(/^data:/)){a=
a.split(",");var e=a[1];e=-1<a[0].indexOf(";base64")?atob(e):decodeURIComponent(e);b(e)}else{var d=new XMLHttpRequest;d.open("GET",a,X.async);d.onload=function(){var a=d.responseURL||d.getResponseHeader("Location");a&&0===a.indexOf("/")&&(a=(location.origin||location.protocol+"//"+location.host)+a);var e=d.response||d.responseText;304===d.status||0===d.status||200<=d.status&&300>d.status?b(e,a):c(e)};d.send()}else c("error: href must be specified")}},K=/Trident/.test(navigator.userAgent)||/Edge\/\d./i.test(navigator.userAgent);
g.prototype.loadImports=function(a){var b=this;r(l(a,"link[rel=import]"),function(a){return b.B(a)})};g.prototype.B=function(a){var b=this,c=a.href;if(void 0!==this.a[c]){var e=this.a[c];e&&e.__loaded&&(a.__import=e,this.g(a))}else this.b++,this.a[c]="pending",X.load(c,function(a,e){a=b.L(a,e||c);b.a[c]=a;b.b--;b.loadImports(a);b.C()},function(){b.a[c]=null;b.b--;b.C()})};g.prototype.L=function(a,b){if(!a)return document.createDocumentFragment();K&&(a=a.replace(Da,function(a,b,c){return-1===a.indexOf("type=")?
b+" type=import-disable "+c:a}));var c=document.createElement("template");c.innerHTML=a;if(c.content)a=c.content,n(a);else for(a=document.createDocumentFragment();c.firstChild;)a.appendChild(c.firstChild);if(c=a.querySelector("base"))b=t.j(c.getAttribute("href"),b),c.removeAttribute("href");var e=0;r(l(a,'link[rel=import],link[rel=stylesheet][href][type=import-disable],style:not([type]),link[rel=stylesheet][href]:not([type]),script:not([type]),script[type="application/javascript"],script[type="text/javascript"],script[type="module"]'),
function(a){k(a);t.I(a,b);a.setAttribute("import-dependency","");if("script"===a.localName&&!a.src&&a.textContent){if("module"===a.type)throw Error("Inline module scripts are not supported in HTML Imports.");a.setAttribute("src","data:text/javascript;charset=utf-8,"+encodeURIComponent(a.textContent+("\n//# sourceURL="+b+(e?"-"+e:"")+".js\n")));a.textContent="";e++}});return a};g.prototype.C=function(){var a=this;if(!this.b){this.f.disconnect();this.flatten(document);var b=!1,c=!1,e=function(){c&&
b&&(a.loadImports(document),a.b||(a.f.observe(document.head,{childList:!0,subtree:!0}),a.J()))};this.N(function(){c=!0;e()});this.M(function(){b=!0;e()})}};g.prototype.flatten=function(a){var b=this;r(l(a,"link[rel=import]"),function(a){var c=b.a[a.href];(a.__import=c)&&c.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&(b.a[a.href]=a,a.readyState="loading",a.__import=a,b.flatten(c),a.appendChild(c))})};g.prototype.M=function(a){function b(d){if(d<e){var f=c[d],h=document.createElement("script");f.removeAttribute("import-dependency");
r(f.attributes,function(a){return h.setAttribute(a.name,a.value)});L=h;f.parentNode.replaceChild(h,f);k(h,function(){L=null;b(d+1)})}else a()}var c=l(document,"script[import-dependency]"),e=c.length;b(0)};g.prototype.N=function(a){var b=l(document,"style[import-dependency],link[rel=stylesheet][import-dependency]"),e=b.length;if(e){var d=K&&!!document.querySelector("link[rel=stylesheet][href][type=import-disable]");r(b,function(b){k(b,function(){b.removeAttribute("import-dependency");0===--e&&a()});
if(d&&b.parentNode!==document.head){var f=document.createElement(b.localName);f.__appliedElement=b;f.setAttribute("type","import-placeholder");b.parentNode.insertBefore(f,b.nextSibling);for(f=c(b);f&&c(f);)f=c(f);f.parentNode!==document.head&&(f=null);document.head.insertBefore(b,f);b.removeAttribute("type")}})}else a()};g.prototype.J=function(){var a=this;r(l(document,"link[rel=import]"),function(b){return a.g(b)},!0)};g.prototype.g=function(a){a.__loaded||(a.__loaded=!0,a.import&&(a.import.readyState=
"complete"),a.dispatchEvent(b(a.import?"load":"error",{bubbles:!1,cancelable:!1,detail:void 0})))};g.prototype.K=function(a){var b=this;r(a,function(a){return r(a.addedNodes,function(a){a&&a.nodeType===Node.ELEMENT_NODE&&(h(a)?b.B(a):b.loadImports(a))})})};var M=null;if(J)r(l(document,"link[rel=import]"),function(a){a.import&&"loading"===a.import.readyState||(a.__loaded=!0)}),A=function(a){a=a.target;h(a)&&(a.__loaded=!0)},document.addEventListener("load",A,!0),document.addEventListener("error",A,
!0);else{var B=Object.getOwnPropertyDescriptor(Node.prototype,"baseURI");Object.defineProperty((!B||B.configurable?Node:Element).prototype,"baseURI",{get:function(){var a=h(this)?this:c(this);return a?a.href:B&&B.get?B.get.call(this):(document.querySelector("base")||window.location).href},configurable:!0,enumerable:!0});Object.defineProperty(HTMLLinkElement.prototype,"import",{get:function(){return this.__import||null},configurable:!0,enumerable:!0});e(function(){M=new g})}f(function(){return document.dispatchEvent(b("HTMLImportsLoaded",
{cancelable:!0,bubbles:!0,detail:void 0}))});a.useNative=J;a.whenReady=f;a.importForElement=c;a.loadImports=function(a){M&&M.loadImports(a)}})(window.HTMLImports=window.HTMLImports||{});var aa=new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));function m(a){var b=aa.has(a);a=/^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(a);return!b&&a}function p(a){var b=a.isConnected;if(void 0!==b)return b;for(;a&&!(a.__CE_isImportDocument||a instanceof Document);)a=a.parentNode||(window.ShadowRoot&&a instanceof ShadowRoot?a.host:void 0);return!(!a||!(a.__CE_isImportDocument||a instanceof Document))}
function q(a,b){for(;b&&b!==a&&!b.nextSibling;)b=b.parentNode;return b&&b!==a?b.nextSibling:null}
function u(a,b,c){c=void 0===c?new Set:c;for(var d=a;d;){if(d.nodeType===Node.ELEMENT_NODE){var e=d;b(e);var f=e.localName;if("link"===f&&"import"===e.getAttribute("rel")){d=e.import;if(d instanceof Node&&!c.has(d))for(c.add(d),d=d.firstChild;d;d=d.nextSibling)u(d,b,c);d=q(a,e);continue}else if("template"===f){d=q(a,e);continue}if(e=e.__CE_shadowRoot)for(e=e.firstChild;e;e=e.nextSibling)u(e,b,c)}d=d.firstChild?d.firstChild:q(a,d)}}function v(a,b,c){a[b]=c};function w(){this.a=new Map;this.g=new Map;this.f=[];this.b=!1}function ba(a,b,c){a.a.set(b,c);a.g.set(c.constructor,c)}function x(a,b){a.b=!0;a.f.push(b)}function y(a,b){a.b&&u(b,function(b){return z(a,b)})}function z(a,b){if(a.b&&!b.__CE_patched){b.__CE_patched=!0;for(var c=0;c<a.f.length;c++)a.f[c](b)}}function C(a,b){var c=[];u(b,function(a){return c.push(a)});for(b=0;b<c.length;b++){var d=c[b];1===d.__CE_state?a.connectedCallback(d):D(a,d)}}
function E(a,b){var c=[];u(b,function(a){return c.push(a)});for(b=0;b<c.length;b++){var d=c[b];1===d.__CE_state&&a.disconnectedCallback(d)}}
function F(a,b,c){c=void 0===c?{}:c;var d=c.P||new Set,e=c.l||function(b){return D(a,b)},f=[];u(b,function(b){if("link"===b.localName&&"import"===b.getAttribute("rel")){var c=b.import;c instanceof Node&&(c.__CE_isImportDocument=!0,c.__CE_hasRegistry=!0);c&&"complete"===c.readyState?c.__CE_documentLoadHandled=!0:b.addEventListener("load",function(){var c=b.import;if(!c.__CE_documentLoadHandled){c.__CE_documentLoadHandled=!0;var f=new Set(d);f.delete(c);F(a,c,{P:f,l:e})}})}else f.push(b)},d);if(a.b)for(b=
0;b<f.length;b++)z(a,f[b]);for(b=0;b<f.length;b++)e(f[b])}
function D(a,b){if(void 0===b.__CE_state){var c=b.ownerDocument;if(c.defaultView||c.__CE_isImportDocument&&c.__CE_hasRegistry)if(c=a.a.get(b.localName)){c.constructionStack.push(b);var d=c.constructor;try{try{if(new d!==b)throw Error("The custom element constructor did not produce the element being upgraded.");}finally{c.constructionStack.pop()}}catch(k){throw b.__CE_state=2,k;}b.__CE_state=1;b.__CE_definition=c;if(c.attributeChangedCallback)for(c=c.observedAttributes,d=0;d<c.length;d++){var e=c[d],
f=b.getAttribute(e);null!==f&&a.attributeChangedCallback(b,e,null,f,null)}p(b)&&a.connectedCallback(b)}}}w.prototype.connectedCallback=function(a){var b=a.__CE_definition;b.connectedCallback&&b.connectedCallback.call(a)};w.prototype.disconnectedCallback=function(a){var b=a.__CE_definition;b.disconnectedCallback&&b.disconnectedCallback.call(a)};
w.prototype.attributeChangedCallback=function(a,b,c,d,e){var f=a.__CE_definition;f.attributeChangedCallback&&-1<f.observedAttributes.indexOf(b)&&f.attributeChangedCallback.call(a,b,c,d,e)};function ca(a){var b=document;this.c=a;this.a=b;this.b=void 0;F(this.c,this.a);"loading"===this.a.readyState&&(this.b=new MutationObserver(this.f.bind(this)),this.b.observe(this.a,{childList:!0,subtree:!0}))}function da(a){a.b&&a.b.disconnect()}ca.prototype.f=function(a){var b=this.a.readyState;"interactive"!==b&&"complete"!==b||da(this);for(b=0;b<a.length;b++)for(var c=a[b].addedNodes,d=0;d<c.length;d++)F(this.c,c[d])};function ea(){var a=this;this.b=this.a=void 0;this.f=new Promise(function(b){a.b=b;a.a&&b(a.a)})}function fa(a){if(a.a)throw Error("Already resolved.");a.a=void 0;a.b&&a.b(void 0)};function G(a){this.o=!1;this.c=a;this.v=new Map;this.s=function(a){return a()};this.h=!1;this.u=[];this.G=new ca(a)}
G.prototype.define=function(a,b){var c=this;if(!(b instanceof Function))throw new TypeError("Custom element constructors must be functions.");if(!m(a))throw new SyntaxError("The element name '"+a+"' is not valid.");if(this.c.a.get(a))throw Error("A custom element with name '"+a+"' has already been defined.");if(this.o)throw Error("A custom element is already being defined.");this.o=!0;try{var d=function(a){var b=e[a];if(void 0!==b&&!(b instanceof Function))throw Error("The '"+a+"' callback must be a function.");
return b},e=b.prototype;if(!(e instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");var f=d("connectedCallback");var k=d("disconnectedCallback");var h=d("adoptedCallback");var g=d("attributeChangedCallback");var n=b.observedAttributes||[]}catch(l){return}finally{this.o=!1}b={localName:a,constructor:b,connectedCallback:f,disconnectedCallback:k,adoptedCallback:h,attributeChangedCallback:g,observedAttributes:n,constructionStack:[]};ba(this.c,a,b);this.u.push(b);
this.h||(this.h=!0,this.s(function(){return ha(c)}))};G.prototype.l=function(a){F(this.c,a)};function ha(a){if(!1!==a.h){a.h=!1;for(var b=a.u,c=[],d=new Map,e=0;e<b.length;e++)d.set(b[e].localName,[]);F(a.c,document,{l:function(b){if(void 0===b.__CE_state){var e=b.localName,f=d.get(e);f?f.push(b):a.c.a.get(e)&&c.push(b)}}});for(e=0;e<c.length;e++)D(a.c,c[e]);for(;0<b.length;){var f=b.shift();e=f.localName;f=d.get(f.localName);for(var k=0;k<f.length;k++)D(a.c,f[k]);(e=a.v.get(e))&&fa(e)}}}
G.prototype.get=function(a){if(a=this.c.a.get(a))return a.constructor};G.prototype.whenDefined=function(a){if(!m(a))return Promise.reject(new SyntaxError("'"+a+"' is not a valid custom element name."));var b=this.v.get(a);if(b)return b.f;b=new ea;this.v.set(a,b);this.c.a.get(a)&&!this.u.some(function(b){return b.localName===a})&&fa(b);return b.f};G.prototype.O=function(a){da(this.G);var b=this.s;this.s=function(c){return a(function(){return b(c)})}};window.CustomElementRegistry=G;
G.prototype.define=G.prototype.define;G.prototype.upgrade=G.prototype.l;G.prototype.get=G.prototype.get;G.prototype.whenDefined=G.prototype.whenDefined;G.prototype.polyfillWrapFlushCallback=G.prototype.O;var ia=window.Document.prototype.createElement,ja=window.Document.prototype.createElementNS,ka=window.Document.prototype.importNode,la=window.Document.prototype.prepend,ma=window.Document.prototype.append,na=window.DocumentFragment.prototype.prepend,oa=window.DocumentFragment.prototype.append,pa=window.Node.prototype.cloneNode,H=window.Node.prototype.appendChild,qa=window.Node.prototype.insertBefore,I=window.Node.prototype.removeChild,ra=window.Node.prototype.replaceChild,N=Object.getOwnPropertyDescriptor(window.Node.prototype,
"textContent"),sa=window.Element.prototype.attachShadow,O=Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),P=window.Element.prototype.getAttribute,ta=window.Element.prototype.setAttribute,ua=window.Element.prototype.removeAttribute,Q=window.Element.prototype.getAttributeNS,va=window.Element.prototype.setAttributeNS,wa=window.Element.prototype.removeAttributeNS,xa=window.Element.prototype.insertAdjacentElement,ya=window.Element.prototype.insertAdjacentHTML,za=window.Element.prototype.prepend,
Ea=window.Element.prototype.append,R=window.Element.prototype.before,Fa=window.Element.prototype.after,Ga=window.Element.prototype.replaceWith,Ha=window.Element.prototype.remove,Ia=window.HTMLElement,S=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),Ja=window.HTMLElement.prototype.insertAdjacentElement,Ka=window.HTMLElement.prototype.insertAdjacentHTML;var La=new function(){};function Ma(){var a=T;window.HTMLElement=function(){function b(){var b=this.constructor,d=a.g.get(b);if(!d)throw Error("The custom element being constructed was not registered with `customElements`.");var e=d.constructionStack;if(0===e.length)return e=ia.call(document,d.localName),Object.setPrototypeOf(e,b.prototype),e.__CE_state=1,e.__CE_definition=d,z(a,e),e;d=e.length-1;var f=e[d];if(f===La)throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");
e[d]=La;Object.setPrototypeOf(f,b.prototype);z(a,f);return f}b.prototype=Ia.prototype;Object.defineProperty(b.prototype,"constructor",{writable:!0,configurable:!0,enumerable:!1,value:b});return b}()};function U(a,b,c){function d(b){return function(c){for(var e=[],d=0;d<arguments.length;++d)e[d-0]=arguments[d];d=[];for(var f=[],n=0;n<e.length;n++){var l=e[n];l instanceof Element&&p(l)&&f.push(l);if(l instanceof DocumentFragment)for(l=l.firstChild;l;l=l.nextSibling)d.push(l);else d.push(l)}b.apply(this,e);for(e=0;e<f.length;e++)E(a,f[e]);if(p(this))for(e=0;e<d.length;e++)f=d[e],f instanceof Element&&C(a,f)}}void 0!==c.i&&(b.prepend=d(c.i));void 0!==c.append&&(b.append=d(c.append))};function Na(){var a=T;v(Document.prototype,"createElement",function(b){if(this.__CE_hasRegistry){var c=a.a.get(b);if(c)return new c.constructor}b=ia.call(this,b);z(a,b);return b});v(Document.prototype,"importNode",function(b,c){b=ka.call(this,b,c);this.__CE_hasRegistry?F(a,b):y(a,b);return b});v(Document.prototype,"createElementNS",function(b,c){if(this.__CE_hasRegistry&&(null===b||"http://www.w3.org/1999/xhtml"===b)){var d=a.a.get(c);if(d)return new d.constructor}b=ja.call(this,b,c);z(a,b);return b});
U(a,Document.prototype,{i:la,append:ma})};function Oa(){var a=T;function b(b,d){Object.defineProperty(b,"textContent",{enumerable:d.enumerable,configurable:!0,get:d.get,set:function(b){if(this.nodeType===Node.TEXT_NODE)d.set.call(this,b);else{var c=void 0;if(this.firstChild){var e=this.childNodes,h=e.length;if(0<h&&p(this)){c=Array(h);for(var g=0;g<h;g++)c[g]=e[g]}}d.set.call(this,b);if(c)for(b=0;b<c.length;b++)E(a,c[b])}}})}v(Node.prototype,"insertBefore",function(b,d){if(b instanceof DocumentFragment){var c=Array.prototype.slice.apply(b.childNodes);
b=qa.call(this,b,d);if(p(this))for(d=0;d<c.length;d++)C(a,c[d]);return b}c=p(b);d=qa.call(this,b,d);c&&E(a,b);p(this)&&C(a,b);return d});v(Node.prototype,"appendChild",function(b){if(b instanceof DocumentFragment){var c=Array.prototype.slice.apply(b.childNodes);b=H.call(this,b);if(p(this))for(var e=0;e<c.length;e++)C(a,c[e]);return b}c=p(b);e=H.call(this,b);c&&E(a,b);p(this)&&C(a,b);return e});v(Node.prototype,"cloneNode",function(b){b=pa.call(this,b);this.ownerDocument.__CE_hasRegistry?F(a,b):y(a,
b);return b});v(Node.prototype,"removeChild",function(b){var c=p(b),e=I.call(this,b);c&&E(a,b);return e});v(Node.prototype,"replaceChild",function(b,d){if(b instanceof DocumentFragment){var c=Array.prototype.slice.apply(b.childNodes);b=ra.call(this,b,d);if(p(this))for(E(a,d),d=0;d<c.length;d++)C(a,c[d]);return b}c=p(b);var f=ra.call(this,b,d),k=p(this);k&&E(a,d);c&&E(a,b);k&&C(a,b);return f});N&&N.get?b(Node.prototype,N):x(a,function(a){b(a,{enumerable:!0,configurable:!0,get:function(){for(var a=
[],b=0;b<this.childNodes.length;b++)a.push(this.childNodes[b].textContent);return a.join("")},set:function(a){for(;this.firstChild;)I.call(this,this.firstChild);H.call(this,document.createTextNode(a))}})})};function Pa(a){var b=Element.prototype;function c(b){return function(c){for(var e=[],d=0;d<arguments.length;++d)e[d-0]=arguments[d];d=[];for(var h=[],g=0;g<e.length;g++){var n=e[g];n instanceof Element&&p(n)&&h.push(n);if(n instanceof DocumentFragment)for(n=n.firstChild;n;n=n.nextSibling)d.push(n);else d.push(n)}b.apply(this,e);for(e=0;e<h.length;e++)E(a,h[e]);if(p(this))for(e=0;e<d.length;e++)h=d[e],h instanceof Element&&C(a,h)}}void 0!==R&&(b.before=c(R));void 0!==R&&(b.after=c(Fa));void 0!==Ga&&
v(b,"replaceWith",function(b){for(var c=[],d=0;d<arguments.length;++d)c[d-0]=arguments[d];d=[];for(var k=[],h=0;h<c.length;h++){var g=c[h];g instanceof Element&&p(g)&&k.push(g);if(g instanceof DocumentFragment)for(g=g.firstChild;g;g=g.nextSibling)d.push(g);else d.push(g)}h=p(this);Ga.apply(this,c);for(c=0;c<k.length;c++)E(a,k[c]);if(h)for(E(a,this),c=0;c<d.length;c++)k=d[c],k instanceof Element&&C(a,k)});void 0!==Ha&&v(b,"remove",function(){var b=p(this);Ha.call(this);b&&E(a,this)})};function Qa(){var a=T;function b(b,c){Object.defineProperty(b,"innerHTML",{enumerable:c.enumerable,configurable:!0,get:c.get,set:function(b){var e=this,d=void 0;p(this)&&(d=[],u(this,function(a){a!==e&&d.push(a)}));c.set.call(this,b);if(d)for(var f=0;f<d.length;f++){var k=d[f];1===k.__CE_state&&a.disconnectedCallback(k)}this.ownerDocument.__CE_hasRegistry?F(a,this):y(a,this);return b}})}function c(b,c){v(b,"insertAdjacentElement",function(b,e){var d=p(e);b=c.call(this,b,e);d&&E(a,e);p(b)&&C(a,e);
return b})}function d(b,c){function e(b,c){for(var e=[];b!==c;b=b.nextSibling)e.push(b);for(c=0;c<e.length;c++)F(a,e[c])}v(b,"insertAdjacentHTML",function(a,b){a=a.toLowerCase();if("beforebegin"===a){var d=this.previousSibling;c.call(this,a,b);e(d||this.parentNode.firstChild,this)}else if("afterbegin"===a)d=this.firstChild,c.call(this,a,b),e(this.firstChild,d);else if("beforeend"===a)d=this.lastChild,c.call(this,a,b),e(d||this.firstChild,null);else if("afterend"===a)d=this.nextSibling,c.call(this,
a,b),e(this.nextSibling,d);else throw new SyntaxError("The value provided ("+String(a)+") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");})}sa&&v(Element.prototype,"attachShadow",function(a){return this.__CE_shadowRoot=a=sa.call(this,a)});O&&O.get?b(Element.prototype,O):S&&S.get?b(HTMLElement.prototype,S):x(a,function(a){b(a,{enumerable:!0,configurable:!0,get:function(){return pa.call(this,!0).innerHTML},set:function(a){var b="template"===this.localName,c=b?this.content:
this,e=ja.call(document,this.namespaceURI,this.localName);for(e.innerHTML=a;0<c.childNodes.length;)I.call(c,c.childNodes[0]);for(a=b?e.content:e;0<a.childNodes.length;)H.call(c,a.childNodes[0])}})});v(Element.prototype,"setAttribute",function(b,c){if(1!==this.__CE_state)return ta.call(this,b,c);var e=P.call(this,b);ta.call(this,b,c);c=P.call(this,b);a.attributeChangedCallback(this,b,e,c,null)});v(Element.prototype,"setAttributeNS",function(b,c,d){if(1!==this.__CE_state)return va.call(this,b,c,d);
var e=Q.call(this,b,c);va.call(this,b,c,d);d=Q.call(this,b,c);a.attributeChangedCallback(this,c,e,d,b)});v(Element.prototype,"removeAttribute",function(b){if(1!==this.__CE_state)return ua.call(this,b);var c=P.call(this,b);ua.call(this,b);null!==c&&a.attributeChangedCallback(this,b,c,null,null)});v(Element.prototype,"removeAttributeNS",function(b,c){if(1!==this.__CE_state)return wa.call(this,b,c);var d=Q.call(this,b,c);wa.call(this,b,c);var e=Q.call(this,b,c);d!==e&&a.attributeChangedCallback(this,
c,d,e,b)});Ja?c(HTMLElement.prototype,Ja):xa?c(Element.prototype,xa):console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched.");Ka?d(HTMLElement.prototype,Ka):ya?d(Element.prototype,ya):console.warn("Custom Elements: `Element#insertAdjacentHTML` was not patched.");U(a,Element.prototype,{i:za,append:Ea});Pa(a)};var V=window.customElements;if(!V||V.forcePolyfill||"function"!=typeof V.define||"function"!=typeof V.get){var T=new w;Ma();Na();U(T,DocumentFragment.prototype,{i:na,append:oa});Oa();Qa();document.__CE_hasRegistry=!0;var customElements=new G(T);Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:customElements})};/*

 Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
var W=window.customElements,Y=window.HTMLImports,Ra=window.HTMLTemplateElement;window.WebComponents=window.WebComponents||{};if(W&&W.polyfillWrapFlushCallback){var Z,Sa=function(){if(Z){Ra.H&&Ra.H(window.document);var a=Z;Z=null;a();return!0}},Ta=Y.whenReady;W.polyfillWrapFlushCallback(function(a){Z=a;Ta(Sa)});Y.whenReady=function(a){Ta(function(){Sa()?Y.whenReady(a):a()})}}
Y.whenReady(function(){requestAnimationFrame(function(){window.WebComponents.ready=!0;document.dispatchEvent(new CustomEvent("WebComponentsReady",{bubbles:!0}))})});var Ua=document.createElement("style");Ua.textContent="body {transition: opacity ease-in 0.2s; } \nbody[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } \n";var Va=document.querySelector("head");Va.insertBefore(Ua,Va.firstChild);/*

Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
}).call(this);

//# sourceMappingURL=webcomponents-hi-ce.js.map
