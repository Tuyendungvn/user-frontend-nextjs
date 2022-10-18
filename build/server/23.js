exports.ids = [23];
exports.modules = {

/***/ "lrkt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("GvLQ");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_1__);


nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.configure({
  showSpinner: false,
  easing: "ease",
  speed: 500
});
next_router__WEBPACK_IMPORTED_MODULE_0___default.a.events.on("routeChangeStart", () => {
  nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.start();
});
next_router__WEBPACK_IMPORTED_MODULE_0___default.a.events.on("routeChangeComplete", () => nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done());
next_router__WEBPACK_IMPORTED_MODULE_0___default.a.events.on("routeChangeError", () => nprogress__WEBPACK_IMPORTED_MODULE_1___default.a.done());
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return null;
});

/***/ })

};;