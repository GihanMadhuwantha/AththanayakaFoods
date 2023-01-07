webpackHotUpdate_N_E("pages/product/[id]",{

/***/ "./pages/product/[id].js":
/*!*******************************!*\
  !*** ./pages/product/[id].js ***!
  \*******************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/GlobalState */ "./store/GlobalState.js");
/* harmony import */ var _store_Actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/Actions */ "./store/Actions.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\gihanmadhuwantha\\Desktop\\system_Development\\AththanayakaFoods\\aththanayakafoods\\pages\\product\\[id].js",
  _this = undefined,
  _s = $RefreshSig$();





var DetailProduct = function DetailProduct(props) {
  _s();
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.product),
    product = _useState[0];
  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
    tab = _useState2[0],
    setTab = _useState2[1];
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_store_GlobalState__WEBPACK_IMPORTED_MODULE_2__["DataContext"]),
    state = _useContext.state,
    dispatch = _useContext.dispatch;
  var cart = state.cart;
  var isActive = function isActive(index) {
    if (tab === index) return " active";
    return "";
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    className: "row detail_page",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("title", {
        children: "Detail Product"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "col-md-6",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
        src: product.images[tab].url,
        alt: product.images[tab].url,
        className: "d-block img-thumbnail rounded mt-4 w-100",
        style: {
          height: '350px'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "row mx-0",
        style: {
          cursor: 'pointer'
        },
        children: product.images.map(function (img, index) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
            src: img.url,
            alt: img.url,
            className: "img-thumbnail rounded ".concat(isActive(index)),
            style: {
              height: '80px',
              width: '20%'
            },
            onClick: function onClick() {
              return setTab(index);
            }
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 25
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "col-md-6 mt-3",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h2", {
        className: "text-uppercase",
        children: product.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h5", {
        className: "text-danger",
        children: ["Rs", product.price]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "row mx-0 d-flex justify-content-between",
        children: [product.inStock > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h6", {
          className: "text-danger",
          children: ["In Stock: ", product.inStock]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 27
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h6", {
          className: "text-danger",
          children: "Out Stock"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 27
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h6", {
          className: "text-danger",
          children: ["Sold: ", product.sold]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "my-2",
        children: product.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "my-2",
        children: product.content
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("button", {
        type: "button",
        className: "btn btn-dark d-block my-3 px-5",
        onClick: function onClick() {
          return dispatch(Object(_store_Actions__WEBPACK_IMPORTED_MODULE_3__["addToCart"])(product, cart));
        },
        children: "Buy"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }, _this), "."]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }, _this);
};
_s(DetailProduct, "p2TfgUznHNem+NacBOH+eRm5efE=");
_c = DetailProduct;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (DetailProduct);
var _c;
$RefreshReg$(_c, "DetailProduct");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdC8uanMiXSwibmFtZXMiOlsiRGV0YWlsUHJvZHVjdCIsInByb3BzIiwidXNlU3RhdGUiLCJwcm9kdWN0IiwidGFiIiwic2V0VGFiIiwidXNlQ29udGV4dCIsIkRhdGFDb250ZXh0Iiwic3RhdGUiLCJkaXNwYXRjaCIsImNhcnQiLCJpc0FjdGl2ZSIsImluZGV4IiwiaW1hZ2VzIiwidXJsIiwiaGVpZ2h0IiwiY3Vyc29yIiwibWFwIiwiaW1nIiwid2lkdGgiLCJ0aXRsZSIsInByaWNlIiwiaW5TdG9jayIsInNvbGQiLCJkZXNjcmlwdGlvbiIsImNvbnRlbnQiLCJhZGRUb0NhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRCO0FBQ2dCO0FBRVM7QUFDTjtBQUFBO0FBRy9DLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBYSxDQUFJQyxLQUFLLEVBQUs7RUFBQTtFQUM3QixnQkFBa0JDLHNEQUFRLENBQUNELEtBQUssQ0FBQ0UsT0FBTyxDQUFDO0lBQWxDQSxPQUFPO0VBQ2QsaUJBQXNCRCxzREFBUSxDQUFDLENBQUMsQ0FBQztJQUExQkUsR0FBRztJQUFFQyxNQUFNO0VBQ2xCLGtCQUE0QkMsd0RBQVUsQ0FBQ0MsOERBQVcsQ0FBQztJQUEzQ0MsS0FBSyxlQUFMQSxLQUFLO0lBQUVDLFFBQVEsZUFBUkEsUUFBUTtFQUN2QixJQUFRQyxJQUFJLEdBQUtGLEtBQUssQ0FBZEUsSUFBSTtFQUVaLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFRLENBQUlDLEtBQUssRUFBSztJQUN4QixJQUFHUixHQUFHLEtBQUtRLEtBQUssRUFBRSxPQUFPLFNBQVM7SUFDbEMsT0FBTyxFQUFFO0VBQ2IsQ0FBQztFQUVELG9CQUNJO0lBQUssU0FBUyxFQUFDLGlCQUFpQjtJQUFBLHdCQUM1QixxRUFBQyxnREFBSTtNQUFBLHVCQUNEO1FBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQTZC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NjM5Mzk4YjAzMzg3Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBnZXREYXRhIH0gZnJvbSAnLi4vLi4vdXRpbHMvZmV0Y2hEYXRhJ1xyXG5pbXBvcnQgeyBEYXRhQ29udGV4dCB9IGZyb20gJy4uLy4uL3N0b3JlL0dsb2JhbFN0YXRlJ1xyXG5pbXBvcnQgeyBhZGRUb0NhcnQgfSBmcm9tICcuLi8uLi9zdG9yZS9BY3Rpb25zJ1xyXG4gICBcclxuXHJcbmNvbnN0IERldGFpbFByb2R1Y3QgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtwcm9kdWN0XSA9IHVzZVN0YXRlKHByb3BzLnByb2R1Y3QpXHJcbiAgICBjb25zdCBbdGFiLCBzZXRUYWJdID0gdXNlU3RhdGUoMClcclxuICAgIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KVxyXG4gICAgY29uc3QgeyBjYXJ0IH0gPSBzdGF0ZVxyXG4gICAgXHJcbiAgICBjb25zdCBpc0FjdGl2ZSA9IChpbmRleCkgPT4ge1xyXG4gICAgICAgIGlmKHRhYiA9PT0gaW5kZXgpIHJldHVybiBcIiBhY3RpdmVcIjtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZGV0YWlsX3BhZ2VcIj5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+RGV0YWlsIFByb2R1Y3Q8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17IHByb2R1Y3QuaW1hZ2VzW3RhYl0udXJsIH0gYWx0PXsgcHJvZHVjdC5pbWFnZXNbdGFiXS51cmwgfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1ibG9jayBpbWctdGh1bWJuYWlsIHJvdW5kZWQgbXQtNCB3LTEwMFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e2hlaWdodDogJzM1MHB4J319IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXgtMFwiIHN0eWxlPXt7Y3Vyc29yOiAncG9pbnRlcid9fSA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0LmltYWdlcy5tYXAoKGltZywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBrZXk9e2luZGV4fSBzcmM9e2ltZy51cmx9IGFsdD17aW1nLnVybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaW1nLXRodW1ibmFpbCByb3VuZGVkICR7aXNBY3RpdmUoaW5kZXgpfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7aGVpZ2h0OiAnODBweCcsIHdpZHRoOiAnMjAlJ319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRhYihpbmRleCl9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG10LTNcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXVwcGVyY2FzZVwiPntwcm9kdWN0LnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj5Sc3twcm9kdWN0LnByaWNlfTwvaDU+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXgtMCBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QuaW5TdG9jayA+IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyA8aDYgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj5JbiBTdG9jazoge3Byb2R1Y3QuaW5TdG9ja308L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IDxoNiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPk91dCBTdG9jazwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj5Tb2xkOiB7cHJvZHVjdC5zb2xkfTwvaDY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTJcIj57cHJvZHVjdC5kZXNjcmlwdGlvbn08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0LmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWRhcmsgZC1ibG9jayBteS0zIHB4LTVcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goYWRkVG9DYXJ0KHByb2R1Y3QsIGNhcnQpKX0gPlxyXG4gICAgICAgICAgICAgICAgICAgIEJ1eVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+LlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgICB9XHJcbiAgICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHtwYXJhbXM6e2lkfX0pIHtcclxuICAgICAgXHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZ2V0RGF0YShgcHJvZHVjdC8ke2lkfWApXHJcbiAgICAgXHJcbiAgICAgIFxyXG4gICAgICAgIC8vIHNlcnZlciBzaWRlIHJlbmRlcmluZ1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHByb3BzOntcclxuICAgICAgICAgICAgICAgIHByb2R1Y3Q6IHJlcy5wcm9kdWN0XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBleHBvcnQgZGVmYXVsdCBEZXRhaWxQcm9kdWN0Il0sInNvdXJjZVJvb3QiOiIifQ==