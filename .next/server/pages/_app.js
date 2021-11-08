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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.jsx":
/*!****************************!*\
  !*** ./src/pages/_app.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/styles.scss */ \"./src/styles/styles.scss\");\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-cookie */ \"react-cookie\");\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/home/yubull1m3/Documentos/Practicas/Yellow-Board/src/pages/_app.jsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"title\", {\n        children: \"YellowBoard\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"meta\", {\n        property: \"og:title\",\n        content: \"Yellowboard academy\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"meta\", {\n        property: \"og:image\",\n        content: \"https://media.discordapp.net/attachments/906891142602305606/906911978646290452/yellowboard-removebg-preview1.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"meta\", {\n        property: \"og:url\",\n        content: \"https://www.yellowboard.avocadosnetwork.com\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"meta\", {\n        name: \"keywords\",\n        content: \"yellowboard, board, yellow, webapp, react\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"meta\", {\n        name: \"viewport\",\n        content: \"width=device-width, initial-scale=1\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"link\", {\n        rel: \"icon\",\n        type: \"image/png\",\n        href: \"/assets/icons/top.png\",\n        sizes: \"96x96\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"link\", {\n        rel: \"apple-touch-icon\",\n        sizes: \"152x152\",\n        href: \"/assets/icons/top.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"link\", {\n        rel: \"stylesheet\",\n        href: \"https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css\",\n        integrity: \"sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU\",\n        crossorigin: \"anonymous\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"meta\", {\n        name: \"description\",\n        content: \"Bienvenido a yellowboad academy, donde podr\\xE1s poner a prueba tus habilidades de primaria o tus hijos podr\\xE1n reforzar sus conocimientos de primaria para la escuela.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"meta\", {\n        name: \"keywords\",\n        content: \"yellowboard, board, yellow, webapp, react\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"meta\", {\n        name: \"viewport\",\n        content: \"width=device-width, initial-scale=1\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"link\", {\n        rel: \"icon\",\n        type: \"image/png\",\n        href: \"/assets/icons/top.png\",\n        sizes: \"96x96\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"link\", {\n        rel: \"apple-touch-icon\",\n        sizes: \"152x152\",\n        href: \"/assets/icons/top.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"link\", {\n        rel: \"stylesheet\",\n        href: \"https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css\",\n        integrity: \"sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU\",\n        crossorigin: \"anonymous\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_cookie__WEBPACK_IMPORTED_MODULE_3__.CookiesProvider, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsU0FBU0csS0FBVCxDQUFlO0FBQUVDLEVBQUFBLFNBQUY7QUFBYUMsRUFBQUE7QUFBYixDQUFmLEVBQXlDO0FBQ3ZDLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTSxnQkFBUSxFQUFDLFVBQWY7QUFBMEIsZUFBTyxFQUFDO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFO0FBQ0UsZ0JBQVEsRUFBQyxVQURYO0FBRUUsZUFBTyxFQUFDO0FBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGLGVBT0U7QUFDRSxnQkFBUSxFQUFDLFFBRFg7QUFFRSxlQUFPLEVBQUM7QUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEYsZUFXRTtBQUNFLFlBQUksRUFBQyxVQURQO0FBRUUsZUFBTyxFQUFDO0FBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhGLGVBZUU7QUFBTSxZQUFJLEVBQUMsVUFBWDtBQUFzQixlQUFPLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWZGLGVBZ0JFO0FBQ0UsV0FBRyxFQUFDLE1BRE47QUFFRSxZQUFJLEVBQUMsV0FGUDtBQUdFLFlBQUksRUFBQyx1QkFIUDtBQUlFLGFBQUssRUFBQztBQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FoQkYsZUFzQkU7QUFDRSxXQUFHLEVBQUMsa0JBRE47QUFFRSxhQUFLLEVBQUMsU0FGUjtBQUdFLFlBQUksRUFBQztBQUhQO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F0QkYsZUEyQkU7QUFDRSxXQUFHLEVBQUMsWUFETjtBQUVFLFlBQUksRUFBQyx5RUFGUDtBQUdFLGlCQUFTLEVBQUMseUVBSFo7QUFJRSxtQkFBVyxFQUFDO0FBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTNCRixlQWlDRTtBQUNFLFlBQUksRUFBQyxhQURQO0FBRUUsZUFBTyxFQUFDO0FBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpDRixlQXFDRTtBQUNFLFlBQUksRUFBQyxVQURQO0FBRUUsZUFBTyxFQUFDO0FBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXJDRixlQXlDRTtBQUFNLFlBQUksRUFBQyxVQUFYO0FBQXNCLGVBQU8sRUFBQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBekNGLGVBMENFO0FBQ0UsV0FBRyxFQUFDLE1BRE47QUFFRSxZQUFJLEVBQUMsV0FGUDtBQUdFLFlBQUksRUFBQyx1QkFIUDtBQUlFLGFBQUssRUFBQztBQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0ExQ0YsZUFnREU7QUFDRSxXQUFHLEVBQUMsa0JBRE47QUFFRSxhQUFLLEVBQUMsU0FGUjtBQUdFLFlBQUksRUFBQztBQUhQO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FoREYsZUFxREU7QUFDRSxXQUFHLEVBQUMsWUFETjtBQUVFLFlBQUksRUFBQyx5RUFGUDtBQUdFLGlCQUFTLEVBQUMseUVBSFo7QUFJRSxtQkFBVyxFQUFDO0FBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXJERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQTZERSw4REFBQyx5REFBRDtBQUFBLDZCQUNFLDhEQUFDLFNBQUQsb0JBQWVBLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE3REY7QUFBQSxrQkFERjtBQW1FRDs7QUFDRCxpRUFBZUYsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL3llbGxvd2JvYXJkLy4vc3JjL3BhZ2VzL19hcHAuanN4PzQzNGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4uL3N0eWxlcy9zdHlsZXMuc2Nzcyc7XG5pbXBvcnQgeyBDb29raWVzUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1jb29raWUnO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5ZZWxsb3dCb2FyZDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PVwiWWVsbG93Ym9hcmQgYWNhZGVteVwiIC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgcHJvcGVydHk9XCJvZzppbWFnZVwiXG4gICAgICAgICAgY29udGVudD1cImh0dHBzOi8vbWVkaWEuZGlzY29yZGFwcC5uZXQvYXR0YWNobWVudHMvOTA2ODkxMTQyNjAyMzA1NjA2LzkwNjkxMTk3ODY0NjI5MDQ1Mi95ZWxsb3dib2FyZC1yZW1vdmViZy1wcmV2aWV3MS5wbmdcIlxuICAgICAgICAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIHByb3BlcnR5PVwib2c6dXJsXCJcbiAgICAgICAgICBjb250ZW50PVwiaHR0cHM6Ly93d3cueWVsbG93Ym9hcmQuYXZvY2Fkb3NuZXR3b3JrLmNvbVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cImtleXdvcmRzXCJcbiAgICAgICAgICBjb250ZW50PVwieWVsbG93Ym9hcmQsIGJvYXJkLCB5ZWxsb3csIHdlYmFwcCwgcmVhY3RcIlxuICAgICAgICAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cImljb25cIlxuICAgICAgICAgIHR5cGU9XCJpbWFnZS9wbmdcIlxuICAgICAgICAgIGhyZWY9XCIvYXNzZXRzL2ljb25zL3RvcC5wbmdcIlxuICAgICAgICAgIHNpemVzPVwiOTZ4OTZcIlxuICAgICAgICAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIlxuICAgICAgICAgIHNpemVzPVwiMTUyeDE1MlwiXG4gICAgICAgICAgaHJlZj1cIi9hc3NldHMvaWNvbnMvdG9wLnBuZ1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMS4xL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtRjN3N21YOTVQZGd5VG1aWk1FQ0FuZ3NlUUI4M0RmR1Rvd2kwaU1qaVdhZVZoQW40RkprcUpCeWhaTUkzQWhpVVwiXG4gICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxuICAgICAgICAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgY29udGVudD1cIkJpZW52ZW5pZG8gYSB5ZWxsb3dib2FkIGFjYWRlbXksIGRvbmRlIHBvZHLDoXMgcG9uZXIgYSBwcnVlYmEgdHVzIGhhYmlsaWRhZGVzIGRlIHByaW1hcmlhIG8gdHVzIGhpam9zIHBvZHLDoW4gcmVmb3J6YXIgc3VzIGNvbm9jaW1pZW50b3MgZGUgcHJpbWFyaWEgcGFyYSBsYSBlc2N1ZWxhLlwiXG4gICAgICAgIC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cImtleXdvcmRzXCJcbiAgICAgICAgICBjb250ZW50PVwieWVsbG93Ym9hcmQsIGJvYXJkLCB5ZWxsb3csIHdlYmFwcCwgcmVhY3RcIlxuICAgICAgICAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cImljb25cIlxuICAgICAgICAgIHR5cGU9XCJpbWFnZS9wbmdcIlxuICAgICAgICAgIGhyZWY9XCIvYXNzZXRzL2ljb25zL3RvcC5wbmdcIlxuICAgICAgICAgIHNpemVzPVwiOTZ4OTZcIlxuICAgICAgICAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIlxuICAgICAgICAgIHNpemVzPVwiMTUyeDE1MlwiXG4gICAgICAgICAgaHJlZj1cIi9hc3NldHMvaWNvbnMvdG9wLnBuZ1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDUuMS4xL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcbiAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtRjN3N21YOTVQZGd5VG1aWk1FQ0FuZ3NlUUI4M0RmR1Rvd2kwaU1qaVdhZVZoQW40RkprcUpCeWhaTUkzQWhpVVwiXG4gICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPENvb2tpZXNQcm92aWRlcj5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9Db29raWVzUHJvdmlkZXI+XG4gICAgPC8+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJIZWFkIiwiUmVhY3QiLCJDb29raWVzUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.jsx\n");

/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-cookie":
/*!*******************************!*\
  !*** external "react-cookie" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-cookie");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.jsx"));
module.exports = __webpack_exports__;

})();