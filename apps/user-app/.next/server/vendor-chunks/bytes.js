"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/bytes";
exports.ids = ["vendor-chunks/bytes"];
exports.modules = {

/***/ "(rsc)/../../node_modules/bytes/index.js":
/*!*****************************************!*\
  !*** ../../node_modules/bytes/index.js ***!
  \*****************************************/
/***/ ((module) => {

eval("/*!\n * bytes\n * Copyright(c) 2012-2014 TJ Holowaychuk\n * Copyright(c) 2015 Jed Watson\n * MIT Licensed\n */\n\n\n\n/**\n * Module exports.\n * @public\n */\n\nmodule.exports = bytes;\nmodule.exports.format = format;\nmodule.exports.parse = parse;\n\n/**\n * Module variables.\n * @private\n */\n\nvar formatThousandsRegExp = /\\B(?=(\\d{3})+(?!\\d))/g;\n\nvar formatDecimalsRegExp = /(?:\\.0*|(\\.[^0]+)0+)$/;\n\nvar map = {\n  b:  1,\n  kb: 1 << 10,\n  mb: 1 << 20,\n  gb: 1 << 30,\n  tb: Math.pow(1024, 4),\n  pb: Math.pow(1024, 5),\n};\n\nvar parseRegExp = /^((-|\\+)?(\\d+(?:\\.\\d+)?)) *(kb|mb|gb|tb|pb)$/i;\n\n/**\n * Convert the given value in bytes into a string or parse to string to an integer in bytes.\n *\n * @param {string|number} value\n * @param {{\n *  case: [string],\n *  decimalPlaces: [number]\n *  fixedDecimals: [boolean]\n *  thousandsSeparator: [string]\n *  unitSeparator: [string]\n *  }} [options] bytes options.\n *\n * @returns {string|number|null}\n */\n\nfunction bytes(value, options) {\n  if (typeof value === 'string') {\n    return parse(value);\n  }\n\n  if (typeof value === 'number') {\n    return format(value, options);\n  }\n\n  return null;\n}\n\n/**\n * Format the given value in bytes into a string.\n *\n * If the value is negative, it is kept as such. If it is a float,\n * it is rounded.\n *\n * @param {number} value\n * @param {object} [options]\n * @param {number} [options.decimalPlaces=2]\n * @param {number} [options.fixedDecimals=false]\n * @param {string} [options.thousandsSeparator=]\n * @param {string} [options.unit=]\n * @param {string} [options.unitSeparator=]\n *\n * @returns {string|null}\n * @public\n */\n\nfunction format(value, options) {\n  if (!Number.isFinite(value)) {\n    return null;\n  }\n\n  var mag = Math.abs(value);\n  var thousandsSeparator = (options && options.thousandsSeparator) || '';\n  var unitSeparator = (options && options.unitSeparator) || '';\n  var decimalPlaces = (options && options.decimalPlaces !== undefined) ? options.decimalPlaces : 2;\n  var fixedDecimals = Boolean(options && options.fixedDecimals);\n  var unit = (options && options.unit) || '';\n\n  if (!unit || !map[unit.toLowerCase()]) {\n    if (mag >= map.pb) {\n      unit = 'PB';\n    } else if (mag >= map.tb) {\n      unit = 'TB';\n    } else if (mag >= map.gb) {\n      unit = 'GB';\n    } else if (mag >= map.mb) {\n      unit = 'MB';\n    } else if (mag >= map.kb) {\n      unit = 'KB';\n    } else {\n      unit = 'B';\n    }\n  }\n\n  var val = value / map[unit.toLowerCase()];\n  var str = val.toFixed(decimalPlaces);\n\n  if (!fixedDecimals) {\n    str = str.replace(formatDecimalsRegExp, '$1');\n  }\n\n  if (thousandsSeparator) {\n    str = str.split('.').map(function (s, i) {\n      return i === 0\n        ? s.replace(formatThousandsRegExp, thousandsSeparator)\n        : s\n    }).join('.');\n  }\n\n  return str + unitSeparator + unit;\n}\n\n/**\n * Parse the string value into an integer in bytes.\n *\n * If no unit is given, it is assumed the value is in bytes.\n *\n * @param {number|string} val\n *\n * @returns {number|null}\n * @public\n */\n\nfunction parse(val) {\n  if (typeof val === 'number' && !isNaN(val)) {\n    return val;\n  }\n\n  if (typeof val !== 'string') {\n    return null;\n  }\n\n  // Test if the string passed is valid\n  var results = parseRegExp.exec(val);\n  var floatValue;\n  var unit = 'b';\n\n  if (!results) {\n    // Nothing could be extracted from the given string\n    floatValue = parseInt(val, 10);\n    unit = 'b'\n  } else {\n    // Retrieve the value and the unit\n    floatValue = parseFloat(results[1]);\n    unit = results[4].toLowerCase();\n  }\n\n  if (isNaN(floatValue)) {\n    return null;\n  }\n\n  return Math.floor(map[unit] * floatValue);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vbm9kZV9tb2R1bGVzL2J5dGVzL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQixvQkFBb0I7O0FBRXBCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNDQUFzQyxFQUFFOztBQUV4Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZUFBZTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGVBQWU7QUFDMUI7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb2NzLy4uLy4uL25vZGVfbW9kdWxlcy9ieXRlcy9pbmRleC5qcz81NjEwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogYnl0ZXNcbiAqIENvcHlyaWdodChjKSAyMDEyLTIwMTQgVEogSG9sb3dheWNodWtcbiAqIENvcHlyaWdodChjKSAyMDE1IEplZCBXYXRzb25cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqIEBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJ5dGVzO1xubW9kdWxlLmV4cG9ydHMuZm9ybWF0ID0gZm9ybWF0O1xubW9kdWxlLmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcblxuLyoqXG4gKiBNb2R1bGUgdmFyaWFibGVzLlxuICogQHByaXZhdGVcbiAqL1xuXG52YXIgZm9ybWF0VGhvdXNhbmRzUmVnRXhwID0gL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2c7XG5cbnZhciBmb3JtYXREZWNpbWFsc1JlZ0V4cCA9IC8oPzpcXC4wKnwoXFwuW14wXSspMCspJC87XG5cbnZhciBtYXAgPSB7XG4gIGI6ICAxLFxuICBrYjogMSA8PCAxMCxcbiAgbWI6IDEgPDwgMjAsXG4gIGdiOiAxIDw8IDMwLFxuICB0YjogTWF0aC5wb3coMTAyNCwgNCksXG4gIHBiOiBNYXRoLnBvdygxMDI0LCA1KSxcbn07XG5cbnZhciBwYXJzZVJlZ0V4cCA9IC9eKCgtfFxcKyk/KFxcZCsoPzpcXC5cXGQrKT8pKSAqKGtifG1ifGdifHRifHBiKSQvaTtcblxuLyoqXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiB2YWx1ZSBpbiBieXRlcyBpbnRvIGEgc3RyaW5nIG9yIHBhcnNlIHRvIHN0cmluZyB0byBhbiBpbnRlZ2VyIGluIGJ5dGVzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gdmFsdWVcbiAqIEBwYXJhbSB7e1xuICogIGNhc2U6IFtzdHJpbmddLFxuICogIGRlY2ltYWxQbGFjZXM6IFtudW1iZXJdXG4gKiAgZml4ZWREZWNpbWFsczogW2Jvb2xlYW5dXG4gKiAgdGhvdXNhbmRzU2VwYXJhdG9yOiBbc3RyaW5nXVxuICogIHVuaXRTZXBhcmF0b3I6IFtzdHJpbmddXG4gKiAgfX0gW29wdGlvbnNdIGJ5dGVzIG9wdGlvbnMuXG4gKlxuICogQHJldHVybnMge3N0cmluZ3xudW1iZXJ8bnVsbH1cbiAqL1xuXG5mdW5jdGlvbiBieXRlcyh2YWx1ZSwgb3B0aW9ucykge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBwYXJzZSh2YWx1ZSk7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBmb3JtYXQodmFsdWUsIG9wdGlvbnMpO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogRm9ybWF0IHRoZSBnaXZlbiB2YWx1ZSBpbiBieXRlcyBpbnRvIGEgc3RyaW5nLlxuICpcbiAqIElmIHRoZSB2YWx1ZSBpcyBuZWdhdGl2ZSwgaXQgaXMga2VwdCBhcyBzdWNoLiBJZiBpdCBpcyBhIGZsb2F0LFxuICogaXQgaXMgcm91bmRlZC5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5kZWNpbWFsUGxhY2VzPTJdXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMuZml4ZWREZWNpbWFscz1mYWxzZV1cbiAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy50aG91c2FuZHNTZXBhcmF0b3I9XVxuICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLnVuaXQ9XVxuICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLnVuaXRTZXBhcmF0b3I9XVxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd8bnVsbH1cbiAqIEBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBmb3JtYXQodmFsdWUsIG9wdGlvbnMpIHtcbiAgaWYgKCFOdW1iZXIuaXNGaW5pdGUodmFsdWUpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgbWFnID0gTWF0aC5hYnModmFsdWUpO1xuICB2YXIgdGhvdXNhbmRzU2VwYXJhdG9yID0gKG9wdGlvbnMgJiYgb3B0aW9ucy50aG91c2FuZHNTZXBhcmF0b3IpIHx8ICcnO1xuICB2YXIgdW5pdFNlcGFyYXRvciA9IChvcHRpb25zICYmIG9wdGlvbnMudW5pdFNlcGFyYXRvcikgfHwgJyc7XG4gIHZhciBkZWNpbWFsUGxhY2VzID0gKG9wdGlvbnMgJiYgb3B0aW9ucy5kZWNpbWFsUGxhY2VzICE9PSB1bmRlZmluZWQpID8gb3B0aW9ucy5kZWNpbWFsUGxhY2VzIDogMjtcbiAgdmFyIGZpeGVkRGVjaW1hbHMgPSBCb29sZWFuKG9wdGlvbnMgJiYgb3B0aW9ucy5maXhlZERlY2ltYWxzKTtcbiAgdmFyIHVuaXQgPSAob3B0aW9ucyAmJiBvcHRpb25zLnVuaXQpIHx8ICcnO1xuXG4gIGlmICghdW5pdCB8fCAhbWFwW3VuaXQudG9Mb3dlckNhc2UoKV0pIHtcbiAgICBpZiAobWFnID49IG1hcC5wYikge1xuICAgICAgdW5pdCA9ICdQQic7XG4gICAgfSBlbHNlIGlmIChtYWcgPj0gbWFwLnRiKSB7XG4gICAgICB1bml0ID0gJ1RCJztcbiAgICB9IGVsc2UgaWYgKG1hZyA+PSBtYXAuZ2IpIHtcbiAgICAgIHVuaXQgPSAnR0InO1xuICAgIH0gZWxzZSBpZiAobWFnID49IG1hcC5tYikge1xuICAgICAgdW5pdCA9ICdNQic7XG4gICAgfSBlbHNlIGlmIChtYWcgPj0gbWFwLmtiKSB7XG4gICAgICB1bml0ID0gJ0tCJztcbiAgICB9IGVsc2Uge1xuICAgICAgdW5pdCA9ICdCJztcbiAgICB9XG4gIH1cblxuICB2YXIgdmFsID0gdmFsdWUgLyBtYXBbdW5pdC50b0xvd2VyQ2FzZSgpXTtcbiAgdmFyIHN0ciA9IHZhbC50b0ZpeGVkKGRlY2ltYWxQbGFjZXMpO1xuXG4gIGlmICghZml4ZWREZWNpbWFscykge1xuICAgIHN0ciA9IHN0ci5yZXBsYWNlKGZvcm1hdERlY2ltYWxzUmVnRXhwLCAnJDEnKTtcbiAgfVxuXG4gIGlmICh0aG91c2FuZHNTZXBhcmF0b3IpIHtcbiAgICBzdHIgPSBzdHIuc3BsaXQoJy4nKS5tYXAoZnVuY3Rpb24gKHMsIGkpIHtcbiAgICAgIHJldHVybiBpID09PSAwXG4gICAgICAgID8gcy5yZXBsYWNlKGZvcm1hdFRob3VzYW5kc1JlZ0V4cCwgdGhvdXNhbmRzU2VwYXJhdG9yKVxuICAgICAgICA6IHNcbiAgICB9KS5qb2luKCcuJyk7XG4gIH1cblxuICByZXR1cm4gc3RyICsgdW5pdFNlcGFyYXRvciArIHVuaXQ7XG59XG5cbi8qKlxuICogUGFyc2UgdGhlIHN0cmluZyB2YWx1ZSBpbnRvIGFuIGludGVnZXIgaW4gYnl0ZXMuXG4gKlxuICogSWYgbm8gdW5pdCBpcyBnaXZlbiwgaXQgaXMgYXNzdW1lZCB0aGUgdmFsdWUgaXMgaW4gYnl0ZXMuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSB2YWxcbiAqXG4gKiBAcmV0dXJucyB7bnVtYmVyfG51bGx9XG4gKiBAcHVibGljXG4gKi9cblxuZnVuY3Rpb24gcGFyc2UodmFsKSB7XG4gIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJyAmJiAhaXNOYU4odmFsKSkge1xuICAgIHJldHVybiB2YWw7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8vIFRlc3QgaWYgdGhlIHN0cmluZyBwYXNzZWQgaXMgdmFsaWRcbiAgdmFyIHJlc3VsdHMgPSBwYXJzZVJlZ0V4cC5leGVjKHZhbCk7XG4gIHZhciBmbG9hdFZhbHVlO1xuICB2YXIgdW5pdCA9ICdiJztcblxuICBpZiAoIXJlc3VsdHMpIHtcbiAgICAvLyBOb3RoaW5nIGNvdWxkIGJlIGV4dHJhY3RlZCBmcm9tIHRoZSBnaXZlbiBzdHJpbmdcbiAgICBmbG9hdFZhbHVlID0gcGFyc2VJbnQodmFsLCAxMCk7XG4gICAgdW5pdCA9ICdiJ1xuICB9IGVsc2Uge1xuICAgIC8vIFJldHJpZXZlIHRoZSB2YWx1ZSBhbmQgdGhlIHVuaXRcbiAgICBmbG9hdFZhbHVlID0gcGFyc2VGbG9hdChyZXN1bHRzWzFdKTtcbiAgICB1bml0ID0gcmVzdWx0c1s0XS50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbiAgaWYgKGlzTmFOKGZsb2F0VmFsdWUpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gTWF0aC5mbG9vcihtYXBbdW5pdF0gKiBmbG9hdFZhbHVlKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/../../node_modules/bytes/index.js\n");

/***/ })

};
;