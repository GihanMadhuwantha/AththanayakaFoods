webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_product_ProductItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/product/ProductItem */ "./components/product/ProductItem.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\gihanmadhuwantha\\Desktop\\system_Development\\AththanayakaFoods\\aththanayakafoods\\pages\\index.js",
  _this = undefined,
  _s = $RefreshSig$();




var Home = function Home(props) {
  _s();
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.products),
    products = _useState[0],
    setProducts = _useState[1];
  console.log(products);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    className: "products",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("title", {
        children: "Home Page"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, _this), products.length === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h2", {
      children: "No Products"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, _this) : products.map(function (product) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_product_ProductItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
        product: product
      }, product.id, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 1
  }, _this);
};
_s(Home, "yxtcwogYTdVcQAjozgosuHisEYw=");
_c = Home;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Home);
var _c;
$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInByb3BzIiwidXNlU3RhdGUiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsIm1hcCIsInByb2R1Y3QiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUN1RDtBQUMzQjtBQUMrQjtBQUFBO0FBQzNELElBQU1BLElBQUksR0FBQyxTQUFMQSxJQUFJLENBQUVDLEtBQUssRUFBRztFQUFBO0VBQ2pCLGdCQUFnQ0Msc0RBQVEsQ0FBQ0QsS0FBSyxDQUFDRSxRQUFRLENBQUM7SUFBakRBLFFBQVE7SUFBRUMsV0FBVztFQUM1QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNILFFBQVEsQ0FBQztFQUN4QixvQkFDQTtJQUFLLFNBQVMsRUFBQyxVQUFVO0lBQUEsd0JBQ25CLHFFQUFDLGdEQUFJO01BQUEsdUJBQ0g7UUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBd0I7TUFBQTtNQUFBO01BQUE7SUFBQSxTQUNuQixFQUVIQSxRQUFRLENBQUNJLE1BQU0sS0FBSyxDQUFDLGdCQUNuQjtNQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxTQUFvQixHQUVwQkosUUFBUSxDQUFDSyxHQUFHLENBQUMsVUFBQUMsT0FBTztNQUFBLG9CQUNwQixxRUFBQyx1RUFBVztRQUFrQixPQUFPLEVBQUVBO01BQVEsR0FBN0JBLE9BQU8sQ0FBQ0MsRUFBRTtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBQXNCO0lBQUEsQ0FDbkQsQ0FBQztFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsU0FFTjtBQUdOLENBQUM7QUFBQSxHQW5CS1YsSUFBSTtBQUFBLEtBQUpBLElBQUk7QUFBQTtBQWtDS0EsbUVBQUk7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmNmMTk2YWFlN2NjYjdlNmEzMTMyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXREYXRhIH0gZnJvbSAnLi4vdXRpbHMvZmV0Y2hEYXRhJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IFByb2R1Y3RJdGVtIGZyb20gJy4uL2NvbXBvbmVudHMvcHJvZHVjdC9Qcm9kdWN0SXRlbSdcclxuY29uc3QgSG9tZT0ocHJvcHMpPT57XHJcbiAgIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUocHJvcHMucHJvZHVjdHMpXHJcbiAgIGNvbnNvbGUubG9nKHByb2R1Y3RzKVxyXG5yZXR1cm4oXHJcbjxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHNcIj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkhvbWUgUGFnZTwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAge1xyXG4gICAgICAgICAgcHJvZHVjdHMubGVuZ3RoID09PSAwIFxyXG4gICAgICAgICAgPyA8aDI+Tm8gUHJvZHVjdHM8L2gyPlxyXG5cclxuICAgICAgICAgIDogcHJvZHVjdHMubWFwKHByb2R1Y3QgPT4gKFxyXG4gICAgICAgICAgICA8UHJvZHVjdEl0ZW0ga2V5PXtwcm9kdWN0LmlkfSBwcm9kdWN0PXtwcm9kdWN0fSAvPlxyXG4gICAgICAgICAgKSlcclxuICAgICAgfVxyXG48L2Rpdj5cclxuXHJcbilcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xyXG4gIFxyXG4gXHJcbiAgIGNvbnN0IHJlcyA9IGF3YWl0IGdldERhdGEoJ3Byb2R1Y3QnKVxyXG4gXHJcbiAgIFxyXG4gICByZXR1cm4ge1xyXG4gICAgIHByb3BzOiB7XHJcbiAgICAgIHByb2R1Y3RzOiByZXMucHJvZHVjdHMsXHJcbiAgICAgIHJlc3VsdDogcmVzLnJlc3VsdFxyXG4gICAgIFxyXG4gICAgIH0sIC8vIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xyXG4gICB9XHJcbiB9XHJcbmV4cG9ydCBkZWZhdWx0IEhvbWUiXSwic291cmNlUm9vdCI6IiJ9