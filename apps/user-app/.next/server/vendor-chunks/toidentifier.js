"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/toidentifier";
exports.ids = ["vendor-chunks/toidentifier"];
exports.modules = {

/***/ "(rsc)/../../node_modules/toidentifier/index.js":
/*!************************************************!*\
  !*** ../../node_modules/toidentifier/index.js ***!
  \************************************************/
/***/ ((module) => {

eval("/*!\n * toidentifier\n * Copyright(c) 2016 Douglas Christopher Wilson\n * MIT Licensed\n */\n\n\n\n/**\n * Module exports.\n * @public\n */\n\nmodule.exports = toIdentifier\n\n/**\n * Trasform the given string into a JavaScript identifier\n *\n * @param {string} str\n * @returns {string}\n * @public\n */\n\nfunction toIdentifier (str) {\n  return str\n    .split(' ')\n    .map(function (token) {\n      return token.slice(0, 1).toUpperCase() + token.slice(1)\n    })\n    .join('')\n    .replace(/[^ _0-9a-z]/gi, '')\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vbm9kZV9tb2R1bGVzL3RvaWRlbnRpZmllci9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVZOztBQUVaO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2RvY3MvLi4vLi4vbm9kZV9tb2R1bGVzL3RvaWRlbnRpZmllci9pbmRleC5qcz9iNGE4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogdG9pZGVudGlmaWVyXG4gKiBDb3B5cmlnaHQoYykgMjAxNiBEb3VnbGFzIENocmlzdG9waGVyIFdpbHNvblxuICogTUlUIExpY2Vuc2VkXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKiBAcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSB0b0lkZW50aWZpZXJcblxuLyoqXG4gKiBUcmFzZm9ybSB0aGUgZ2l2ZW4gc3RyaW5nIGludG8gYSBKYXZhU2NyaXB0IGlkZW50aWZpZXJcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICogQHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIHRvSWRlbnRpZmllciAoc3RyKSB7XG4gIHJldHVybiBzdHJcbiAgICAuc3BsaXQoJyAnKVxuICAgIC5tYXAoZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICByZXR1cm4gdG9rZW4uc2xpY2UoMCwgMSkudG9VcHBlckNhc2UoKSArIHRva2VuLnNsaWNlKDEpXG4gICAgfSlcbiAgICAuam9pbignJylcbiAgICAucmVwbGFjZSgvW14gXzAtOWEtel0vZ2ksICcnKVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/../../node_modules/toidentifier/index.js\n");

/***/ })

};
;