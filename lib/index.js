!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("redux"),require("redux-thunk"),require("react-redux"),require("immutable"));else if("function"==typeof define&&define.amd)define(["redux","redux-thunk","react-redux","immutable"],t);else{var r="object"==typeof exports?t(require("redux"),require("redux-thunk"),require("react-redux"),require("immutable")):t(e.redux,e["redux-thunk"],e["react-redux"],e.immutable);for(var o in r)("object"==typeof exports?exports:e)[o]=r[o]}}(window,function(e,t,r,o){return function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
function(e,t,r){"use strict";var o=r(/*! @babel/runtime/helpers/interopRequireDefault */1);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Provider",{enumerable:!0,get:function(){return i.Provider}}),Object.defineProperty(t,"connect",{enumerable:!0,get:function(){return i.connect}}),t.autoStorageSave=t.store=t.storage=void 0;var n,a=o(r(/*! @babel/runtime/helpers/objectSpread */2)),u=r(/*! redux */4),c=o(r(/*! redux-thunk */5)),i=r(/*! react-redux */6),l=r(/*! immutable */7);function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,l.Map)({}),t=arguments.length>1?arguments[1]:void 0;return t.reducer&&t.reducer(e)||e}t.store=n,window.__REDUX_DEVTOOLS_EXTENSION__||window.__REDUX_DEVTOOLS_EXTENSION__?t.store=n=(0,u.createStore)(f,(0,u.compose)((0,u.applyMiddleware)(c.default),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())):t.store=n=(0,u.createStore)(f,(0,u.applyMiddleware)(c.default));var d={localName:"defaultIOKey",save:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d.localName,r=Object.prototype.toString.call(e);"[object Object]"===r?localStorage.setItem(t,JSON.stringify(e)):"[object String]"===r?localStorage.setItem(t,e):console.warn("Warn: storage.save() param is no a Object")},load:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.localName;try{var t=localStorage.getItem(e);if(t)return"string"==typeof t?JSON.parse(t):t}catch(e){console.warn("load last localSate error")}},clear:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.localName;localStorage.setItem(e,{})}};t.storage=d;t.autoStorageSave=function(e,t){e&&(d.localName=e),"[object Array]"!==Object.prototype.toString.call(t)&&console.warn("autoSaveStorageKeys: params is no a Array");var r={};t.forEach(function(e){r[e]=void 0}),n.subscribe(function(){var e=n.getState(),o={},a=!1;t.forEach(function(t){"[object Array]"===Object.prototype.toString.call(t)&&(o[t]=e.getIn(t)),o[t]=e.get(t),r[t]!==o[t]&&(a=!0)}),a&&(d.save(o),t.forEach(function(e){r[e]=o[e]}))});var o=d.load(d.localName);"[object Object]"===Object.prototype.toString.call(o)&&n.dispatch({type:"localStorageLoad: IO",reducer:function(e){return(0,l.fromJS)((0,a.default)({},e.toJS(),o))}})}},
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectSpread.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
function(e,t,r){var o=r(/*! ./defineProperty */3);e.exports=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){o(e,t,r[t])})}return e}},
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
function(t,r){t.exports=e},
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
function(e,r){e.exports=t},
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
function(e,t){e.exports=r},
/*!****************************!*\
  !*** external "immutable" ***!
  \****************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
function(e,t){e.exports=o}])});
//# sourceMappingURL=index.js.map