"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/http-errors";
exports.ids = ["vendor-chunks/http-errors"];
exports.modules = {

/***/ "(rsc)/../../node_modules/http-errors/index.js":
/*!***********************************************!*\
  !*** ../../node_modules/http-errors/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/*!\n * http-errors\n * Copyright(c) 2014 Jonathan Ong\n * Copyright(c) 2016 Douglas Christopher Wilson\n * MIT Licensed\n */\n\n\n\n/**\n * Module dependencies.\n * @private\n */\n\nvar deprecate = __webpack_require__(/*! depd */ \"(rsc)/../../node_modules/depd/index.js\")('http-errors')\nvar setPrototypeOf = __webpack_require__(/*! setprototypeof */ \"(rsc)/../../node_modules/setprototypeof/index.js\")\nvar statuses = __webpack_require__(/*! statuses */ \"(rsc)/../../node_modules/statuses/index.js\")\nvar inherits = __webpack_require__(/*! inherits */ \"(rsc)/../../node_modules/inherits/inherits.js\")\nvar toIdentifier = __webpack_require__(/*! toidentifier */ \"(rsc)/../../node_modules/toidentifier/index.js\")\n\n/**\n * Module exports.\n * @public\n */\n\nmodule.exports = createError\nmodule.exports.HttpError = createHttpErrorConstructor()\nmodule.exports.isHttpError = createIsHttpErrorFunction(module.exports.HttpError)\n\n// Populate exports for all constructors\npopulateConstructorExports(module.exports, statuses.codes, module.exports.HttpError)\n\n/**\n * Get the code class of a status code.\n * @private\n */\n\nfunction codeClass (status) {\n  return Number(String(status).charAt(0) + '00')\n}\n\n/**\n * Create a new HTTP Error.\n *\n * @returns {Error}\n * @public\n */\n\nfunction createError () {\n  // so much arity going on ~_~\n  var err\n  var msg\n  var status = 500\n  var props = {}\n  for (var i = 0; i < arguments.length; i++) {\n    var arg = arguments[i]\n    var type = typeof arg\n    if (type === 'object' && arg instanceof Error) {\n      err = arg\n      status = err.status || err.statusCode || status\n    } else if (type === 'number' && i === 0) {\n      status = arg\n    } else if (type === 'string') {\n      msg = arg\n    } else if (type === 'object') {\n      props = arg\n    } else {\n      throw new TypeError('argument #' + (i + 1) + ' unsupported type ' + type)\n    }\n  }\n\n  if (typeof status === 'number' && (status < 400 || status >= 600)) {\n    deprecate('non-error status code; use only 4xx or 5xx status codes')\n  }\n\n  if (typeof status !== 'number' ||\n    (!statuses.message[status] && (status < 400 || status >= 600))) {\n    status = 500\n  }\n\n  // constructor\n  var HttpError = createError[status] || createError[codeClass(status)]\n\n  if (!err) {\n    // create error\n    err = HttpError\n      ? new HttpError(msg)\n      : new Error(msg || statuses.message[status])\n    Error.captureStackTrace(err, createError)\n  }\n\n  if (!HttpError || !(err instanceof HttpError) || err.status !== status) {\n    // add properties to generic error\n    err.expose = status < 500\n    err.status = err.statusCode = status\n  }\n\n  for (var key in props) {\n    if (key !== 'status' && key !== 'statusCode') {\n      err[key] = props[key]\n    }\n  }\n\n  return err\n}\n\n/**\n * Create HTTP error abstract base class.\n * @private\n */\n\nfunction createHttpErrorConstructor () {\n  function HttpError () {\n    throw new TypeError('cannot construct abstract class')\n  }\n\n  inherits(HttpError, Error)\n\n  return HttpError\n}\n\n/**\n * Create a constructor for a client error.\n * @private\n */\n\nfunction createClientErrorConstructor (HttpError, name, code) {\n  var className = toClassName(name)\n\n  function ClientError (message) {\n    // create the error object\n    var msg = message != null ? message : statuses.message[code]\n    var err = new Error(msg)\n\n    // capture a stack trace to the construction point\n    Error.captureStackTrace(err, ClientError)\n\n    // adjust the [[Prototype]]\n    setPrototypeOf(err, ClientError.prototype)\n\n    // redefine the error message\n    Object.defineProperty(err, 'message', {\n      enumerable: true,\n      configurable: true,\n      value: msg,\n      writable: true\n    })\n\n    // redefine the error name\n    Object.defineProperty(err, 'name', {\n      enumerable: false,\n      configurable: true,\n      value: className,\n      writable: true\n    })\n\n    return err\n  }\n\n  inherits(ClientError, HttpError)\n  nameFunc(ClientError, className)\n\n  ClientError.prototype.status = code\n  ClientError.prototype.statusCode = code\n  ClientError.prototype.expose = true\n\n  return ClientError\n}\n\n/**\n * Create function to test is a value is a HttpError.\n * @private\n */\n\nfunction createIsHttpErrorFunction (HttpError) {\n  return function isHttpError (val) {\n    if (!val || typeof val !== 'object') {\n      return false\n    }\n\n    if (val instanceof HttpError) {\n      return true\n    }\n\n    return val instanceof Error &&\n      typeof val.expose === 'boolean' &&\n      typeof val.statusCode === 'number' && val.status === val.statusCode\n  }\n}\n\n/**\n * Create a constructor for a server error.\n * @private\n */\n\nfunction createServerErrorConstructor (HttpError, name, code) {\n  var className = toClassName(name)\n\n  function ServerError (message) {\n    // create the error object\n    var msg = message != null ? message : statuses.message[code]\n    var err = new Error(msg)\n\n    // capture a stack trace to the construction point\n    Error.captureStackTrace(err, ServerError)\n\n    // adjust the [[Prototype]]\n    setPrototypeOf(err, ServerError.prototype)\n\n    // redefine the error message\n    Object.defineProperty(err, 'message', {\n      enumerable: true,\n      configurable: true,\n      value: msg,\n      writable: true\n    })\n\n    // redefine the error name\n    Object.defineProperty(err, 'name', {\n      enumerable: false,\n      configurable: true,\n      value: className,\n      writable: true\n    })\n\n    return err\n  }\n\n  inherits(ServerError, HttpError)\n  nameFunc(ServerError, className)\n\n  ServerError.prototype.status = code\n  ServerError.prototype.statusCode = code\n  ServerError.prototype.expose = false\n\n  return ServerError\n}\n\n/**\n * Set the name of a function, if possible.\n * @private\n */\n\nfunction nameFunc (func, name) {\n  var desc = Object.getOwnPropertyDescriptor(func, 'name')\n\n  if (desc && desc.configurable) {\n    desc.value = name\n    Object.defineProperty(func, 'name', desc)\n  }\n}\n\n/**\n * Populate the exports object with constructors for every error class.\n * @private\n */\n\nfunction populateConstructorExports (exports, codes, HttpError) {\n  codes.forEach(function forEachCode (code) {\n    var CodeError\n    var name = toIdentifier(statuses.message[code])\n\n    switch (codeClass(code)) {\n      case 400:\n        CodeError = createClientErrorConstructor(HttpError, name, code)\n        break\n      case 500:\n        CodeError = createServerErrorConstructor(HttpError, name, code)\n        break\n    }\n\n    if (CodeError) {\n      // export the constructor\n      exports[code] = CodeError\n      exports[name] = CodeError\n    }\n  })\n}\n\n/**\n * Get a class name from a name identifier.\n * @private\n */\n\nfunction toClassName (name) {\n  return name.substr(-5) !== 'Error'\n    ? name + 'Error'\n    : name\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vbm9kZV9tb2R1bGVzL2h0dHAtZXJyb3JzL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IsbUJBQU8sQ0FBQyxvREFBTTtBQUM5QixxQkFBcUIsbUJBQU8sQ0FBQyx3RUFBZ0I7QUFDN0MsZUFBZSxtQkFBTyxDQUFDLDREQUFVO0FBQ2pDLGVBQWUsbUJBQU8sQ0FBQywrREFBVTtBQUNqQyxtQkFBbUIsbUJBQU8sQ0FBQyxvRUFBYzs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0I7QUFDeEIsMEJBQTBCOztBQUUxQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isc0JBQXNCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0NBQXNDO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb2NzLy4uLy4uL25vZGVfbW9kdWxlcy9odHRwLWVycm9ycy9pbmRleC5qcz8wY2VhIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogaHR0cC1lcnJvcnNcbiAqIENvcHlyaWdodChjKSAyMDE0IEpvbmF0aGFuIE9uZ1xuICogQ29weXJpZ2h0KGMpIDIwMTYgRG91Z2xhcyBDaHJpc3RvcGhlciBXaWxzb25cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbid1c2Ugc3RyaWN0J1xuXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciBkZXByZWNhdGUgPSByZXF1aXJlKCdkZXBkJykoJ2h0dHAtZXJyb3JzJylcbnZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJ3NldHByb3RvdHlwZW9mJylcbnZhciBzdGF0dXNlcyA9IHJlcXVpcmUoJ3N0YXR1c2VzJylcbnZhciBpbmhlcml0cyA9IHJlcXVpcmUoJ2luaGVyaXRzJylcbnZhciB0b0lkZW50aWZpZXIgPSByZXF1aXJlKCd0b2lkZW50aWZpZXInKVxuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICogQHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlRXJyb3Jcbm1vZHVsZS5leHBvcnRzLkh0dHBFcnJvciA9IGNyZWF0ZUh0dHBFcnJvckNvbnN0cnVjdG9yKClcbm1vZHVsZS5leHBvcnRzLmlzSHR0cEVycm9yID0gY3JlYXRlSXNIdHRwRXJyb3JGdW5jdGlvbihtb2R1bGUuZXhwb3J0cy5IdHRwRXJyb3IpXG5cbi8vIFBvcHVsYXRlIGV4cG9ydHMgZm9yIGFsbCBjb25zdHJ1Y3RvcnNcbnBvcHVsYXRlQ29uc3RydWN0b3JFeHBvcnRzKG1vZHVsZS5leHBvcnRzLCBzdGF0dXNlcy5jb2RlcywgbW9kdWxlLmV4cG9ydHMuSHR0cEVycm9yKVxuXG4vKipcbiAqIEdldCB0aGUgY29kZSBjbGFzcyBvZiBhIHN0YXR1cyBjb2RlLlxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBjb2RlQ2xhc3MgKHN0YXR1cykge1xuICByZXR1cm4gTnVtYmVyKFN0cmluZyhzdGF0dXMpLmNoYXJBdCgwKSArICcwMCcpXG59XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IEhUVFAgRXJyb3IuXG4gKlxuICogQHJldHVybnMge0Vycm9yfVxuICogQHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUVycm9yICgpIHtcbiAgLy8gc28gbXVjaCBhcml0eSBnb2luZyBvbiB+X35cbiAgdmFyIGVyclxuICB2YXIgbXNnXG4gIHZhciBzdGF0dXMgPSA1MDBcbiAgdmFyIHByb3BzID0ge31cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgYXJnID0gYXJndW1lbnRzW2ldXG4gICAgdmFyIHR5cGUgPSB0eXBlb2YgYXJnXG4gICAgaWYgKHR5cGUgPT09ICdvYmplY3QnICYmIGFyZyBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICBlcnIgPSBhcmdcbiAgICAgIHN0YXR1cyA9IGVyci5zdGF0dXMgfHwgZXJyLnN0YXR1c0NvZGUgfHwgc3RhdHVzXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnbnVtYmVyJyAmJiBpID09PSAwKSB7XG4gICAgICBzdGF0dXMgPSBhcmdcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBtc2cgPSBhcmdcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBwcm9wcyA9IGFyZ1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhcmd1bWVudCAjJyArIChpICsgMSkgKyAnIHVuc3VwcG9ydGVkIHR5cGUgJyArIHR5cGUpXG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiBzdGF0dXMgPT09ICdudW1iZXInICYmIChzdGF0dXMgPCA0MDAgfHwgc3RhdHVzID49IDYwMCkpIHtcbiAgICBkZXByZWNhdGUoJ25vbi1lcnJvciBzdGF0dXMgY29kZTsgdXNlIG9ubHkgNHh4IG9yIDV4eCBzdGF0dXMgY29kZXMnKVxuICB9XG5cbiAgaWYgKHR5cGVvZiBzdGF0dXMgIT09ICdudW1iZXInIHx8XG4gICAgKCFzdGF0dXNlcy5tZXNzYWdlW3N0YXR1c10gJiYgKHN0YXR1cyA8IDQwMCB8fCBzdGF0dXMgPj0gNjAwKSkpIHtcbiAgICBzdGF0dXMgPSA1MDBcbiAgfVxuXG4gIC8vIGNvbnN0cnVjdG9yXG4gIHZhciBIdHRwRXJyb3IgPSBjcmVhdGVFcnJvcltzdGF0dXNdIHx8IGNyZWF0ZUVycm9yW2NvZGVDbGFzcyhzdGF0dXMpXVxuXG4gIGlmICghZXJyKSB7XG4gICAgLy8gY3JlYXRlIGVycm9yXG4gICAgZXJyID0gSHR0cEVycm9yXG4gICAgICA/IG5ldyBIdHRwRXJyb3IobXNnKVxuICAgICAgOiBuZXcgRXJyb3IobXNnIHx8IHN0YXR1c2VzLm1lc3NhZ2Vbc3RhdHVzXSlcbiAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZShlcnIsIGNyZWF0ZUVycm9yKVxuICB9XG5cbiAgaWYgKCFIdHRwRXJyb3IgfHwgIShlcnIgaW5zdGFuY2VvZiBIdHRwRXJyb3IpIHx8IGVyci5zdGF0dXMgIT09IHN0YXR1cykge1xuICAgIC8vIGFkZCBwcm9wZXJ0aWVzIHRvIGdlbmVyaWMgZXJyb3JcbiAgICBlcnIuZXhwb3NlID0gc3RhdHVzIDwgNTAwXG4gICAgZXJyLnN0YXR1cyA9IGVyci5zdGF0dXNDb2RlID0gc3RhdHVzXG4gIH1cblxuICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICBpZiAoa2V5ICE9PSAnc3RhdHVzJyAmJiBrZXkgIT09ICdzdGF0dXNDb2RlJykge1xuICAgICAgZXJyW2tleV0gPSBwcm9wc1trZXldXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVyclxufVxuXG4vKipcbiAqIENyZWF0ZSBIVFRQIGVycm9yIGFic3RyYWN0IGJhc2UgY2xhc3MuXG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUh0dHBFcnJvckNvbnN0cnVjdG9yICgpIHtcbiAgZnVuY3Rpb24gSHR0cEVycm9yICgpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdjYW5ub3QgY29uc3RydWN0IGFic3RyYWN0IGNsYXNzJylcbiAgfVxuXG4gIGluaGVyaXRzKEh0dHBFcnJvciwgRXJyb3IpXG5cbiAgcmV0dXJuIEh0dHBFcnJvclxufVxuXG4vKipcbiAqIENyZWF0ZSBhIGNvbnN0cnVjdG9yIGZvciBhIGNsaWVudCBlcnJvci5cbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlQ2xpZW50RXJyb3JDb25zdHJ1Y3RvciAoSHR0cEVycm9yLCBuYW1lLCBjb2RlKSB7XG4gIHZhciBjbGFzc05hbWUgPSB0b0NsYXNzTmFtZShuYW1lKVxuXG4gIGZ1bmN0aW9uIENsaWVudEVycm9yIChtZXNzYWdlKSB7XG4gICAgLy8gY3JlYXRlIHRoZSBlcnJvciBvYmplY3RcbiAgICB2YXIgbXNnID0gbWVzc2FnZSAhPSBudWxsID8gbWVzc2FnZSA6IHN0YXR1c2VzLm1lc3NhZ2VbY29kZV1cbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKG1zZylcblxuICAgIC8vIGNhcHR1cmUgYSBzdGFjayB0cmFjZSB0byB0aGUgY29uc3RydWN0aW9uIHBvaW50XG4gICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UoZXJyLCBDbGllbnRFcnJvcilcblxuICAgIC8vIGFkanVzdCB0aGUgW1tQcm90b3R5cGVdXVxuICAgIHNldFByb3RvdHlwZU9mKGVyciwgQ2xpZW50RXJyb3IucHJvdG90eXBlKVxuXG4gICAgLy8gcmVkZWZpbmUgdGhlIGVycm9yIG1lc3NhZ2VcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCAnbWVzc2FnZScsIHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogbXNnLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KVxuXG4gICAgLy8gcmVkZWZpbmUgdGhlIGVycm9yIG5hbWVcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCAnbmFtZScsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IGNsYXNzTmFtZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSlcblxuICAgIHJldHVybiBlcnJcbiAgfVxuXG4gIGluaGVyaXRzKENsaWVudEVycm9yLCBIdHRwRXJyb3IpXG4gIG5hbWVGdW5jKENsaWVudEVycm9yLCBjbGFzc05hbWUpXG5cbiAgQ2xpZW50RXJyb3IucHJvdG90eXBlLnN0YXR1cyA9IGNvZGVcbiAgQ2xpZW50RXJyb3IucHJvdG90eXBlLnN0YXR1c0NvZGUgPSBjb2RlXG4gIENsaWVudEVycm9yLnByb3RvdHlwZS5leHBvc2UgPSB0cnVlXG5cbiAgcmV0dXJuIENsaWVudEVycm9yXG59XG5cbi8qKlxuICogQ3JlYXRlIGZ1bmN0aW9uIHRvIHRlc3QgaXMgYSB2YWx1ZSBpcyBhIEh0dHBFcnJvci5cbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlSXNIdHRwRXJyb3JGdW5jdGlvbiAoSHR0cEVycm9yKSB7XG4gIHJldHVybiBmdW5jdGlvbiBpc0h0dHBFcnJvciAodmFsKSB7XG4gICAgaWYgKCF2YWwgfHwgdHlwZW9mIHZhbCAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmICh2YWwgaW5zdGFuY2VvZiBIdHRwRXJyb3IpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbCBpbnN0YW5jZW9mIEVycm9yICYmXG4gICAgICB0eXBlb2YgdmFsLmV4cG9zZSA9PT0gJ2Jvb2xlYW4nICYmXG4gICAgICB0eXBlb2YgdmFsLnN0YXR1c0NvZGUgPT09ICdudW1iZXInICYmIHZhbC5zdGF0dXMgPT09IHZhbC5zdGF0dXNDb2RlXG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBjb25zdHJ1Y3RvciBmb3IgYSBzZXJ2ZXIgZXJyb3IuXG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZVNlcnZlckVycm9yQ29uc3RydWN0b3IgKEh0dHBFcnJvciwgbmFtZSwgY29kZSkge1xuICB2YXIgY2xhc3NOYW1lID0gdG9DbGFzc05hbWUobmFtZSlcblxuICBmdW5jdGlvbiBTZXJ2ZXJFcnJvciAobWVzc2FnZSkge1xuICAgIC8vIGNyZWF0ZSB0aGUgZXJyb3Igb2JqZWN0XG4gICAgdmFyIG1zZyA9IG1lc3NhZ2UgIT0gbnVsbCA/IG1lc3NhZ2UgOiBzdGF0dXNlcy5tZXNzYWdlW2NvZGVdXG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcihtc2cpXG5cbiAgICAvLyBjYXB0dXJlIGEgc3RhY2sgdHJhY2UgdG8gdGhlIGNvbnN0cnVjdGlvbiBwb2ludFxuICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKGVyciwgU2VydmVyRXJyb3IpXG5cbiAgICAvLyBhZGp1c3QgdGhlIFtbUHJvdG90eXBlXV1cbiAgICBzZXRQcm90b3R5cGVPZihlcnIsIFNlcnZlckVycm9yLnByb3RvdHlwZSlcblxuICAgIC8vIHJlZGVmaW5lIHRoZSBlcnJvciBtZXNzYWdlXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgJ21lc3NhZ2UnLCB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IG1zZyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSlcblxuICAgIC8vIHJlZGVmaW5lIHRoZSBlcnJvciBuYW1lXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgJ25hbWUnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBjbGFzc05hbWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pXG5cbiAgICByZXR1cm4gZXJyXG4gIH1cblxuICBpbmhlcml0cyhTZXJ2ZXJFcnJvciwgSHR0cEVycm9yKVxuICBuYW1lRnVuYyhTZXJ2ZXJFcnJvciwgY2xhc3NOYW1lKVxuXG4gIFNlcnZlckVycm9yLnByb3RvdHlwZS5zdGF0dXMgPSBjb2RlXG4gIFNlcnZlckVycm9yLnByb3RvdHlwZS5zdGF0dXNDb2RlID0gY29kZVxuICBTZXJ2ZXJFcnJvci5wcm90b3R5cGUuZXhwb3NlID0gZmFsc2VcblxuICByZXR1cm4gU2VydmVyRXJyb3Jcbn1cblxuLyoqXG4gKiBTZXQgdGhlIG5hbWUgb2YgYSBmdW5jdGlvbiwgaWYgcG9zc2libGUuXG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIG5hbWVGdW5jIChmdW5jLCBuYW1lKSB7XG4gIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihmdW5jLCAnbmFtZScpXG5cbiAgaWYgKGRlc2MgJiYgZGVzYy5jb25maWd1cmFibGUpIHtcbiAgICBkZXNjLnZhbHVlID0gbmFtZVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmdW5jLCAnbmFtZScsIGRlc2MpXG4gIH1cbn1cblxuLyoqXG4gKiBQb3B1bGF0ZSB0aGUgZXhwb3J0cyBvYmplY3Qgd2l0aCBjb25zdHJ1Y3RvcnMgZm9yIGV2ZXJ5IGVycm9yIGNsYXNzLlxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwb3B1bGF0ZUNvbnN0cnVjdG9yRXhwb3J0cyAoZXhwb3J0cywgY29kZXMsIEh0dHBFcnJvcikge1xuICBjb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIGZvckVhY2hDb2RlIChjb2RlKSB7XG4gICAgdmFyIENvZGVFcnJvclxuICAgIHZhciBuYW1lID0gdG9JZGVudGlmaWVyKHN0YXR1c2VzLm1lc3NhZ2VbY29kZV0pXG5cbiAgICBzd2l0Y2ggKGNvZGVDbGFzcyhjb2RlKSkge1xuICAgICAgY2FzZSA0MDA6XG4gICAgICAgIENvZGVFcnJvciA9IGNyZWF0ZUNsaWVudEVycm9yQ29uc3RydWN0b3IoSHR0cEVycm9yLCBuYW1lLCBjb2RlKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSA1MDA6XG4gICAgICAgIENvZGVFcnJvciA9IGNyZWF0ZVNlcnZlckVycm9yQ29uc3RydWN0b3IoSHR0cEVycm9yLCBuYW1lLCBjb2RlKVxuICAgICAgICBicmVha1xuICAgIH1cblxuICAgIGlmIChDb2RlRXJyb3IpIHtcbiAgICAgIC8vIGV4cG9ydCB0aGUgY29uc3RydWN0b3JcbiAgICAgIGV4cG9ydHNbY29kZV0gPSBDb2RlRXJyb3JcbiAgICAgIGV4cG9ydHNbbmFtZV0gPSBDb2RlRXJyb3JcbiAgICB9XG4gIH0pXG59XG5cbi8qKlxuICogR2V0IGEgY2xhc3MgbmFtZSBmcm9tIGEgbmFtZSBpZGVudGlmaWVyLlxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiB0b0NsYXNzTmFtZSAobmFtZSkge1xuICByZXR1cm4gbmFtZS5zdWJzdHIoLTUpICE9PSAnRXJyb3InXG4gICAgPyBuYW1lICsgJ0Vycm9yJ1xuICAgIDogbmFtZVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/../../node_modules/http-errors/index.js\n");

/***/ })

};
;