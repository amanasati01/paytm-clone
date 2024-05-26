"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/signup/route";
exports.ids = ["app/api/signup/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "async_hooks":
/*!******************************!*\
  !*** external "async_hooks" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("async_hooks");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "string_decoder":
/*!*********************************!*\
  !*** external "string_decoder" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("string_decoder");

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tty");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/../../node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsignup%2Froute&page=%2Fapi%2Fsignup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsignup%2Froute.ts&appDir=%2Fhome%2Faman%2FDesktop%2Fpractice%2Fweek-17-final-code%2Fapps%2Fuser-app%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Faman%2FDesktop%2Fpractice%2Fweek-17-final-code%2Fapps%2Fuser-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsignup%2Froute&page=%2Fapi%2Fsignup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsignup%2Froute.ts&appDir=%2Fhome%2Faman%2FDesktop%2Fpractice%2Fweek-17-final-code%2Fapps%2Fuser-app%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Faman%2FDesktop%2Fpractice%2Fweek-17-final-code%2Fapps%2Fuser-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/../../node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/../../node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/../../node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_aman_Desktop_practice_week_17_final_code_apps_user_app_app_api_signup_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/signup/route.ts */ \"(rsc)/./app/api/signup/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/signup/route\",\n        pathname: \"/api/signup\",\n        filename: \"route\",\n        bundlePath: \"app/api/signup/route\"\n    },\n    resolvedPagePath: \"/home/aman/Desktop/practice/week-17-final-code/apps/user-app/app/api/signup/route.ts\",\n    nextConfigOutput,\n    userland: _home_aman_Desktop_practice_week_17_final_code_apps_user_app_app_api_signup_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/signup/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1hcHAtbG9hZGVyLmpzP25hbWU9YXBwJTJGYXBpJTJGc2lnbnVwJTJGcm91dGUmcGFnZT0lMkZhcGklMkZzaWdudXAlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZzaWdudXAlMkZyb3V0ZS50cyZhcHBEaXI9JTJGaG9tZSUyRmFtYW4lMkZEZXNrdG9wJTJGcHJhY3RpY2UlMkZ3ZWVrLTE3LWZpbmFsLWNvZGUlMkZhcHBzJTJGdXNlci1hcHAlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRmhvbWUlMkZhbWFuJTJGRGVza3RvcCUyRnByYWN0aWNlJTJGd2Vlay0xNy1maW5hbC1jb2RlJTJGYXBwcyUyRnVzZXItYXBwJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ29DO0FBQ2pIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDNko7O0FBRTdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZG9jcy8/ZTcwNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvaG9tZS9hbWFuL0Rlc2t0b3AvcHJhY3RpY2Uvd2Vlay0xNy1maW5hbC1jb2RlL2FwcHMvdXNlci1hcHAvYXBwL2FwaS9zaWdudXAvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3NpZ251cC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3NpZ251cFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvc2lnbnVwL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL2hvbWUvYW1hbi9EZXNrdG9wL3ByYWN0aWNlL3dlZWstMTctZmluYWwtY29kZS9hcHBzL3VzZXItYXBwL2FwcC9hcGkvc2lnbnVwL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL3NpZ251cC9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/../../node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsignup%2Froute&page=%2Fapi%2Fsignup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsignup%2Froute.ts&appDir=%2Fhome%2Faman%2FDesktop%2Fpractice%2Fweek-17-final-code%2Fapps%2Fuser-app%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Faman%2FDesktop%2Fpractice%2Fweek-17-final-code%2Fapps%2Fuser-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/signup/route.ts":
/*!*********************************!*\
  !*** ./app/api/signup/route.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _repo_db_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @repo/db/client */ \"(rsc)/../../packages/db/index.ts\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/../../node_modules/next/dist/api/server.js\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! body-parser */ \"(rsc)/../../node_modules/body-parser/index.js\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst jsonParser = body_parser__WEBPACK_IMPORTED_MODULE_3___default().json();\nasync function POST(req, res) {\n    try {\n        const { email, name, number, password } = await req.json();\n        console.log(email, name, number, password);\n        if (!email || !name || !number || !password) {\n            return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n                message: \"Enter a all credentials\"\n            }, {\n                status: 400\n            });\n        }\n        const isEmailValid = email.match(/^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/);\n        if (!isEmailValid) {\n            return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n                message: \"Enter a valid email\"\n            }, {\n                status: 400\n            });\n        }\n        const isPasswordValid = password.match(/^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$/);\n        if (!isPasswordValid) {\n            return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n                message: \"Enter a valid password\"\n            }, {\n                status: 400\n            });\n        }\n        const isNumberValid = number.match(/^\\d{10}$/);\n        if (!isNumberValid) {\n            return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n                message: \"Enter a valid Number\"\n            }, {\n                status: 400\n            });\n        }\n        const isUserExist = await _repo_db_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"].user.findFirst({\n            where: {\n                email\n            }\n        });\n        if (isUserExist) {\n            console.log(\"yes exist\");\n            return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n                message: \"User already exist\"\n            }, {\n                status: 400\n            });\n        }\n        console.log(\"hashing a password\");\n        const hashedPassword = await bcrypt__WEBPACK_IMPORTED_MODULE_0___default().hash(password, 10);\n        console.log(\"creating a user in db\");\n        const signupDetail = await _repo_db_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"].user.create({\n            data: {\n                name,\n                email,\n                number,\n                password: hashedPassword\n            },\n            select: {\n                name: true,\n                id: true,\n                email: true,\n                number: true\n            }\n        });\n        console.log(\"creating a balance for the user\");\n        await _repo_db_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"].balance.create({\n            data: {\n                userId: signupDetail.id,\n                amount: 10000,\n                locked: 0\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            message: \"user created with 10000 account balance\"\n        }, {\n            status: 200\n        });\n    } catch (error) {\n        console.error(\"Error occurred during signup:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            message: \"An error occurred during signup\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3NpZ251cC9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTRCO0FBQ1M7QUFDbUI7QUFDbkI7QUFJckMsTUFBTUksYUFBYUQsdURBQWU7QUFRM0IsZUFBZUcsS0FBS0MsR0FBWSxFQUFFQyxHQUFpQjtJQUN4RCxJQUFJO1FBQ0YsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxRQUFRLEVBQUUsR0FBVSxNQUFNTCxJQUFJRixJQUFJO1FBQy9EUSxRQUFRQyxHQUFHLENBQUNMLE9BQU9DLE1BQU1DLFFBQVFDO1FBQ2pDLElBQUcsQ0FBQ0gsU0FBUyxDQUFDQyxRQUFRLENBQUNDLFVBQVUsQ0FBRUMsVUFBUztZQUMxQyxPQUFPVixxREFBWUEsQ0FBQ0csSUFBSSxDQUN0QjtnQkFDRVUsU0FBUztZQUNYLEdBQ0E7Z0JBQUVDLFFBQVE7WUFBSTtRQUVsQjtRQUNBLE1BQU1DLGVBQWdCUixNQUFNUyxLQUFLLENBQUM7UUFDbEMsSUFBRyxDQUFDRCxjQUFhO1lBQ2YsT0FBT2YscURBQVlBLENBQUNHLElBQUksQ0FDdEI7Z0JBQ0VVLFNBQVM7WUFDWCxHQUNBO2dCQUFFQyxRQUFRO1lBQUk7UUFFbEI7UUFDQSxNQUFNRyxrQkFBa0JQLFNBQVNNLEtBQUssQ0FBQztRQUN2QyxJQUFHLENBQUNDLGlCQUFnQjtZQUNsQixPQUFPakIscURBQVlBLENBQUNHLElBQUksQ0FDdEI7Z0JBQ0VVLFNBQVM7WUFDWCxHQUNBO2dCQUFFQyxRQUFRO1lBQUk7UUFFbEI7UUFDQSxNQUFNSSxnQkFBZ0JULE9BQU9PLEtBQUssQ0FBQztRQUNuQyxJQUFHLENBQUNFLGVBQWM7WUFDaEIsT0FBT2xCLHFEQUFZQSxDQUFDRyxJQUFJLENBQ3RCO2dCQUNFVSxTQUFTO1lBQ1gsR0FDQTtnQkFBRUMsUUFBUTtZQUFJO1FBRWxCO1FBQ0EsTUFBTUssY0FBYyxNQUFNcEIsdURBQU1BLENBQUNxQixJQUFJLENBQUNDLFNBQVMsQ0FBQztZQUM5Q0MsT0FBTztnQkFDTGY7WUFDRjtRQUNGO1FBQ0EsSUFBSVksYUFBYTtZQUNmUixRQUFRQyxHQUFHLENBQUM7WUFDWixPQUFPWixxREFBWUEsQ0FBQ0csSUFBSSxDQUN0QjtnQkFDRVUsU0FBUztZQUNYLEdBQ0E7Z0JBQUVDLFFBQVE7WUFBSTtRQUVsQjtRQUVBSCxRQUFRQyxHQUFHLENBQUM7UUFDWixNQUFNVyxpQkFBaUIsTUFBTXpCLGtEQUFXLENBQUNZLFVBQVU7UUFDbkRDLFFBQVFDLEdBQUcsQ0FBQztRQUNaLE1BQU1hLGVBQWUsTUFBTTFCLHVEQUFNQSxDQUFDcUIsSUFBSSxDQUFDTSxNQUFNLENBQUM7WUFDNUNDLE1BQU07Z0JBQ0puQjtnQkFDQUQ7Z0JBQ0FFO2dCQUNBQyxVQUFVYTtZQUNaO1lBQ0FLLFFBQVE7Z0JBQ05wQixNQUFNO2dCQUNOcUIsSUFBSTtnQkFDSnRCLE9BQU87Z0JBQ1BFLFFBQVE7WUFDVjtRQUNGO1FBRUFFLFFBQVFDLEdBQUcsQ0FBQztRQUNaLE1BQU1iLHVEQUFNQSxDQUFDK0IsT0FBTyxDQUFDSixNQUFNLENBQUM7WUFDMUJDLE1BQU07Z0JBQ0pJLFFBQVFOLGFBQWFJLEVBQUU7Z0JBQ3ZCRyxRQUFRO2dCQUNSQyxRQUFRO1lBQ1Y7UUFDRjtRQUVBLE9BQU9qQyxxREFBWUEsQ0FBQ0csSUFBSSxDQUN0QjtZQUNFVSxTQUFTO1FBQ1gsR0FDQTtZQUFFQyxRQUFRO1FBQUk7SUFFbEIsRUFBRSxPQUFPb0IsT0FBTztRQUNkdkIsUUFBUXVCLEtBQUssQ0FBQyxpQ0FBaUNBO1FBQy9DLE9BQU9sQyxxREFBWUEsQ0FBQ0csSUFBSSxDQUN0QjtZQUNFVSxTQUFTO1FBQ1gsR0FDQTtZQUFFQyxRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2RvY3MvLi9hcHAvYXBpL3NpZ251cC9yb3V0ZS50cz81NTU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdFwiO1xuaW1wb3J0IHByaXNtYSBmcm9tIFwiQHJlcG8vZGIvY2xpZW50XCI7XG5pbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQgYm9keVBhcnNlciBmcm9tIFwiYm9keS1wYXJzZXJcIjtcblxuaW1wb3J0IHsgbnVtYmVyIH0gZnJvbSBcInpvZFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuY29uc3QganNvblBhcnNlciA9IGJvZHlQYXJzZXIuanNvbigpO1xudHlwZSBib2R5ID0gIHtcbiAgZW1haWwgOiBzdHJpbmcsXG4gIG5hbWUgOiBzdHJpbmcgLFxuICBudW1iZXIgOiBzdHJpbmcsXG4gIHBhc3N3b3JkIDogc3RyaW5nXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcTogUmVxdWVzdCwgcmVzOiBOZXh0UmVzcG9uc2UpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IGVtYWlsLCBuYW1lLCBudW1iZXIsIHBhc3N3b3JkIH0gOiBib2R5ID0gYXdhaXQgcmVxLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyhlbWFpbCwgbmFtZSwgbnVtYmVyLCBwYXNzd29yZCApO1xuICAgIGlmKCFlbWFpbCB8fCAhbmFtZSB8fCAhbnVtYmVyIHx8ICEgcGFzc3dvcmQpe1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgICB7XG4gICAgICAgICAgbWVzc2FnZTogXCJFbnRlciBhIGFsbCBjcmVkZW50aWFsc1wiLFxuICAgICAgICB9LFxuICAgICAgICB7IHN0YXR1czogNDAwIH1cbiAgICAgICk7XG4gICAgfVxuICAgIGNvbnN0IGlzRW1haWxWYWxpZCA9ICBlbWFpbC5tYXRjaCgvXlxcdysoW1xcLi1dP1xcdyspKkBcXHcrKFtcXC4tXT9cXHcrKSooXFwuXFx3ezIsM30pKyQvKVxuICAgIGlmKCFpc0VtYWlsVmFsaWQpe1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgICB7XG4gICAgICAgICAgbWVzc2FnZTogXCJFbnRlciBhIHZhbGlkIGVtYWlsXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHsgc3RhdHVzOiA0MDAgfVxuICAgICAgKTtcbiAgICB9XG4gICAgY29uc3QgaXNQYXNzd29yZFZhbGlkID0gcGFzc3dvcmQubWF0Y2goL14oPz0uKltBLVphLXpdKSg/PS4qXFxkKVtBLVphLXpcXGRdezgsfSQvKVxuICAgIGlmKCFpc1Bhc3N3b3JkVmFsaWQpe1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgICB7XG4gICAgICAgICAgbWVzc2FnZTogXCJFbnRlciBhIHZhbGlkIHBhc3N3b3JkXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHsgc3RhdHVzOiA0MDAgfVxuICAgICAgKTtcbiAgICB9XG4gICAgY29uc3QgaXNOdW1iZXJWYWxpZCA9IG51bWJlci5tYXRjaCgvXlxcZHsxMH0kLylcbiAgICBpZighaXNOdW1iZXJWYWxpZCl7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICAgIHtcbiAgICAgICAgICBtZXNzYWdlOiBcIkVudGVyIGEgdmFsaWQgTnVtYmVyXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHsgc3RhdHVzOiA0MDAgfVxuICAgICAgKTtcbiAgICB9XG4gICAgY29uc3QgaXNVc2VyRXhpc3QgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kRmlyc3Qoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgZW1haWwsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGlmIChpc1VzZXJFeGlzdCkge1xuICAgICAgY29uc29sZS5sb2coXCJ5ZXMgZXhpc3RcIik7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICAgIHtcbiAgICAgICAgICBtZXNzYWdlOiBcIlVzZXIgYWxyZWFkeSBleGlzdFwiLFxuICAgICAgICB9LFxuICAgICAgICB7IHN0YXR1czogNDAwIH1cbiAgICAgICk7XG4gICAgfVxuICAgICBcbiAgICBjb25zb2xlLmxvZyhcImhhc2hpbmcgYSBwYXNzd29yZFwiKTtcbiAgICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCAxMCk7XG4gICAgY29uc29sZS5sb2coXCJjcmVhdGluZyBhIHVzZXIgaW4gZGJcIik7XG4gICAgY29uc3Qgc2lnbnVwRGV0YWlsID0gYXdhaXQgcHJpc21hLnVzZXIuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgZW1haWwsXG4gICAgICAgIG51bWJlciAsXG4gICAgICAgIHBhc3N3b3JkOiBoYXNoZWRQYXNzd29yZCxcbiAgICAgIH0sXG4gICAgICBzZWxlY3Q6IHtcbiAgICAgICAgbmFtZTogdHJ1ZSxcbiAgICAgICAgaWQ6IHRydWUsXG4gICAgICAgIGVtYWlsOiB0cnVlLFxuICAgICAgICBudW1iZXI6IHRydWUsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIFxuICAgIGNvbnNvbGUubG9nKFwiY3JlYXRpbmcgYSBiYWxhbmNlIGZvciB0aGUgdXNlclwiKTtcbiAgICBhd2FpdCBwcmlzbWEuYmFsYW5jZS5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICB1c2VySWQ6IHNpZ251cERldGFpbC5pZCxcbiAgICAgICAgYW1vdW50OiAxMDAwMCxcbiAgICAgICAgbG9ja2VkOiAwLFxuICAgICAgfSxcbiAgICB9KTtcbiAgIFxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgIHtcbiAgICAgICAgbWVzc2FnZTogXCJ1c2VyIGNyZWF0ZWQgd2l0aCAxMDAwMCBhY2NvdW50IGJhbGFuY2VcIixcbiAgICAgIH0sXG4gICAgICB7IHN0YXR1czogMjAwIH1cbiAgICApO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBvY2N1cnJlZCBkdXJpbmcgc2lnbnVwOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAge1xuICAgICAgICBtZXNzYWdlOiBcIkFuIGVycm9yIG9jY3VycmVkIGR1cmluZyBzaWdudXBcIixcbiAgICAgIH0sXG4gICAgICB7IHN0YXR1czogNTAwIH1cbiAgICApO1xuICB9XG59XG4iXSwibmFtZXMiOlsiYmNyeXB0IiwicHJpc21hIiwiTmV4dFJlc3BvbnNlIiwiYm9keVBhcnNlciIsImpzb25QYXJzZXIiLCJqc29uIiwiUE9TVCIsInJlcSIsInJlcyIsImVtYWlsIiwibmFtZSIsIm51bWJlciIsInBhc3N3b3JkIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJpc0VtYWlsVmFsaWQiLCJtYXRjaCIsImlzUGFzc3dvcmRWYWxpZCIsImlzTnVtYmVyVmFsaWQiLCJpc1VzZXJFeGlzdCIsInVzZXIiLCJmaW5kRmlyc3QiLCJ3aGVyZSIsImhhc2hlZFBhc3N3b3JkIiwiaGFzaCIsInNpZ251cERldGFpbCIsImNyZWF0ZSIsImRhdGEiLCJzZWxlY3QiLCJpZCIsImJhbGFuY2UiLCJ1c2VySWQiLCJhbW91bnQiLCJsb2NrZWQiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/signup/route.ts\n");

/***/ }),

/***/ "(rsc)/../../packages/db/index.ts":
/*!**********************************!*\
  !*** ../../packages/db/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prismaClientSingleton = ()=>{\n    return new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n};\nconst prisma = globalThis.prismaGlobal ?? prismaClientSingleton();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\nif (true) globalThis.prismaGlobal = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vcGFja2FnZXMvZGIvaW5kZXgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTZDO0FBRTdDLE1BQU1DLHdCQUF3QjtJQUM1QixPQUFPLElBQUlELHdEQUFZQTtBQUN6QjtBQU1BLE1BQU1FLFNBQW1EQyxXQUFXQyxZQUFZLElBQUlIO0FBRXBGLGlFQUFlQyxNQUFNQSxFQUFBO0FBRXJCLElBQUlHLElBQXlCLEVBQWNGLFdBQVdDLFlBQVksR0FBR0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb2NzLy4uLy4uL3BhY2thZ2VzL2RiL2luZGV4LnRzP2RmYjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5cbmNvbnN0IHByaXNtYUNsaWVudFNpbmdsZXRvbiA9ICgpID0+IHtcbiAgcmV0dXJuIG5ldyBQcmlzbWFDbGllbnQoKVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIHZhciBwcmlzbWFHbG9iYWw6IHVuZGVmaW5lZCB8IFJldHVyblR5cGU8dHlwZW9mIHByaXNtYUNsaWVudFNpbmdsZXRvbj5cbn1cblxuY29uc3QgcHJpc21hOiBSZXR1cm5UeXBlPHR5cGVvZiBwcmlzbWFDbGllbnRTaW5nbGV0b24+ID0gZ2xvYmFsVGhpcy5wcmlzbWFHbG9iYWwgPz8gcHJpc21hQ2xpZW50U2luZ2xldG9uKClcblxuZXhwb3J0IGRlZmF1bHQgcHJpc21hXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSBnbG9iYWxUaGlzLnByaXNtYUdsb2JhbCA9IHByaXNtYSJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWFDbGllbnRTaW5nbGV0b24iLCJwcmlzbWEiLCJnbG9iYWxUaGlzIiwicHJpc21hR2xvYmFsIiwicHJvY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/../../packages/db/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/mime-db","vendor-chunks/mime-types","vendor-chunks/iconv-lite","vendor-chunks/body-parser","vendor-chunks/es-errors","vendor-chunks/qs","vendor-chunks/statuses","vendor-chunks/object-inspect","vendor-chunks/inherits","vendor-chunks/has-symbols","vendor-chunks/function-bind","vendor-chunks/call-bind","vendor-chunks/unpipe","vendor-chunks/type-is","vendor-chunks/toidentifier","vendor-chunks/side-channel","vendor-chunks/setprototypeof","vendor-chunks/set-function-length","vendor-chunks/safer-buffer","vendor-chunks/raw-body","vendor-chunks/on-finished","vendor-chunks/media-typer","vendor-chunks/http-errors","vendor-chunks/hasown","vendor-chunks/has-proto","vendor-chunks/has-property-descriptors","vendor-chunks/gopd","vendor-chunks/get-intrinsic","vendor-chunks/es-define-property","vendor-chunks/ee-first","vendor-chunks/destroy","vendor-chunks/depd","vendor-chunks/define-data-property","vendor-chunks/content-type","vendor-chunks/bytes"], () => (__webpack_exec__("(rsc)/../../node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsignup%2Froute&page=%2Fapi%2Fsignup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsignup%2Froute.ts&appDir=%2Fhome%2Faman%2FDesktop%2Fpractice%2Fweek-17-final-code%2Fapps%2Fuser-app%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Faman%2FDesktop%2Fpractice%2Fweek-17-final-code%2Fapps%2Fuser-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();