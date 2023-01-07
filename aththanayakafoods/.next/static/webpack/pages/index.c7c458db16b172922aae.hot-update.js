webpackHotUpdate_N_E("pages/index",{

/***/ "./components/product/ProductItem.js":
/*!*******************************************!*\
  !*** ./components/product/ProductItem.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/GlobalState */ "./store/GlobalState.js");
/* harmony import */ var _store_Actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/Actions */ "./store/Actions.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\gihanmadhuwantha\\Desktop\\system_Development\\AththanayakaFoods\\aththanayakafoods\\components\\product\\ProductItem.js",
  _this = undefined,
  _s = $RefreshSig$();






var ProductItem = function ProductItem(_ref) {
  _s();
  var product = _ref.product;
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_store_GlobalState__WEBPACK_IMPORTED_MODULE_2__["DataContext"]),
    state = _useContext.state,
    dispatch = _useContext.dispatch;
  var cart = state.cart,
    auth = state.auth;
  var userLink = function userLink(product) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
        href: "product/".concat(product._id),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("a", {
          className: "btn btn-info",
          style: {
            marginRight: '5px',
            flex: 1
          },
          children: "View"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("button", {
        className: "btn btn-success",
        style: {
          marginLeft: '5px',
          flex: 1
        },
        disabled: product.inStock === 0 ? true : false,
        onClick: function onClick() {
          return dispatch(Object(_store_Actions__WEBPACK_IMPORTED_MODULE_3__["addToCart"])(product, cart));
        },
        children: "Buy"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 16
      }, _this)]
    }, void 0, true);
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    className: "card",
    style: {
      width: '18rem'
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
      className: "card-img-top",
      src: product.images[0].url,
      alt: product.images[0].url
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "card-body",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h5", {
        className: "card-title text-capitalize",
        title: product.title,
        children: product.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "row justify-content-between mx-0",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h6", {
          className: "text-danger",
          children: ["Rs.", product.price]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 13
        }, _this), product.inStock > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h6", {
          className: "text-danger",
          children: ["In Stock: ", product.inStock]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 19
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h6", {
          className: "text-danger",
          children: "Out Stock"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 19
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
        className: "card-text",
        title: product.description,
        children: product.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "row justify-content-between mx-0",
        children: userLink(product)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, _this);
};
_s(ProductItem, "QMdo+h1+fLbTriZQ0QN6uukzyow=");
_c = ProductItem;
/* harmony default export */ __webpack_exports__["default"] = (ProductItem);
var _c;
$RefreshReg$(_c, "ProductItem");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9kdWN0L1Byb2R1Y3RJdGVtLmpzIl0sIm5hbWVzIjpbIlByb2R1Y3RJdGVtIiwicHJvZHVjdCIsInVzZUNvbnRleHQiLCJEYXRhQ29udGV4dCIsInN0YXRlIiwiZGlzcGF0Y2giLCJjYXJ0IiwiYXV0aCIsInVzZXJMaW5rIiwiX2lkIiwibWFyZ2luUmlnaHQiLCJmbGV4IiwibWFyZ2luTGVmdCIsImluU3RvY2siLCJhZGRUb0NhcnQiLCJ3aWR0aCIsImltYWdlcyIsInVybCIsInRpdGxlIiwicHJpY2UiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QjtBQUNNO0FBQ21CO0FBQ047QUFBQTtBQUFBO0FBRS9DLElBQU1BLFdBQVcsR0FBQyxTQUFaQSxXQUFXLE9BQWU7RUFBQTtFQUFBLElBQVpDLE9BQU8sUUFBUEEsT0FBTztFQUN2QixrQkFBNEJDLHdEQUFVLENBQUNDLDhEQUFXLENBQUM7SUFBM0NDLEtBQUssZUFBTEEsS0FBSztJQUFFQyxRQUFRLGVBQVJBLFFBQVE7RUFDdkIsSUFBUUMsSUFBSSxHQUFXRixLQUFLLENBQXBCRSxJQUFJO0lBQUVDLElBQUksR0FBS0gsS0FBSyxDQUFkRyxJQUFJO0VBRWxCLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFRLENBQUlQLE9BQU8sRUFBSztJQUMxQixvQkFDSTtNQUFBLHdCQUNJLHFFQUFDLGdEQUFJO1FBQUMsSUFBSSxvQkFBYUEsT0FBTyxDQUFDUSxHQUFHLENBQUc7UUFBQSx1QkFDakM7VUFBRyxTQUFTLEVBQUMsY0FBYztVQUMzQixLQUFLLEVBQUU7WUFBQ0MsV0FBVyxFQUFFLEtBQUs7WUFBRUMsSUFBSSxFQUFFO1VBQUMsQ0FBRTtVQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFTO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FDM0MsZUFDUjtRQUFRLFNBQVMsRUFBQyxpQkFBaUI7UUFDOUIsS0FBSyxFQUFFO1VBQUNDLFVBQVUsRUFBRSxLQUFLO1VBQUVELElBQUksRUFBRTtRQUFDLENBQUU7UUFDcEMsUUFBUSxFQUFFVixPQUFPLENBQUNZLE9BQU8sS0FBSyxDQUFDLEdBQUcsSUFBSSxHQUFHLEtBQU07UUFDL0MsT0FBTyxFQUFFO1VBQUEsT0FBTVIsUUFBUSxDQUFDUyxnRUFBUyxDQUFDYixPQUFPLEVBQUVLLElBQUksQ0FBQyxDQUFDO1FBQUEsQ0FBQztRQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQUc5QztJQUFBLGdCQUVUO0VBRVgsQ0FBQztFQUVMLG9CQUNJO0lBQUssU0FBUyxFQUFDLE1BQU07SUFBQyxLQUFLLEVBQUU7TUFBRVMsS0FBSyxFQUFFO0lBQVEsQ0FBRTtJQUFBLHdCQUVoRDtNQUFLLFNBQVMsRUFBQyxjQUFjO01BQUMsR0FBRyxFQUFFZCxPQUFPLENBQUNlLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsR0FBSTtNQUFDLEdBQUcsRUFBRWhCLE9BQU8sQ0FBQ2UsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDQztJQUFJO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FBRyxlQUN4RjtNQUFLLFNBQVMsRUFBQyxXQUFXO01BQUEsd0JBQ3RCO1FBQUksU0FBUyxFQUFDLDRCQUE0QjtRQUFDLEtBQUssRUFBRWhCLE9BQU8sQ0FBQ2lCLEtBQU07UUFBQSxVQUMzRGpCLE9BQU8sQ0FBQ2lCO01BQUs7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQUNiLGVBRUw7UUFBSyxTQUFTLEVBQUMsa0NBQWtDO1FBQUEsd0JBQzdDO1VBQUksU0FBUyxFQUFDLGFBQWE7VUFBQSxrQkFBS2pCLE9BQU8sQ0FBQ2tCLEtBQUs7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBLFNBQU0sRUFFL0NsQixPQUFPLENBQUNZLE9BQU8sR0FBRyxDQUFDLGdCQUNqQjtVQUFJLFNBQVMsRUFBQyxhQUFhO1VBQUEseUJBQVlaLE9BQU8sQ0FBQ1ksT0FBTztRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUEsU0FBTSxnQkFDNUQ7VUFBSSxTQUFTLEVBQUMsYUFBYTtVQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQSxTQUFlO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQUU5QyxlQUVOO1FBQUcsU0FBUyxFQUFDLFdBQVc7UUFBQyxLQUFLLEVBQUVaLE9BQU8sQ0FBQ21CLFdBQVk7UUFBQSxVQUMvQ25CLE9BQU8sQ0FBQ21CO01BQVc7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQUNwQixlQUVKO1FBQUssU0FBUyxFQUFDLGtDQUFrQztRQUFBLFVBQzlDWixRQUFRLENBQUNQLE9BQU87TUFBQztRQUFBO1FBQUE7UUFBQTtNQUFBLFNBQ2Q7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLFNBQ0o7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFNBQ0o7QUFHTixDQUFDO0FBQUEsR0FwREtELFdBQVc7QUFBQSxLQUFYQSxXQUFXO0FBcURGQSwwRUFBVztBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzdjNDU4ZGIxNmIxNzI5MjJhYWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBEYXRhQ29udGV4dCB9IGZyb20gJy4uLy4uL3N0b3JlL0dsb2JhbFN0YXRlJ1xyXG5pbXBvcnQgeyBhZGRUb0NhcnQgfSBmcm9tICcuLi8uLi9zdG9yZS9BY3Rpb25zJ1xyXG5cclxuY29uc3QgUHJvZHVjdEl0ZW09KHtwcm9kdWN0fSkgPT57XHJcbiAgICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChEYXRhQ29udGV4dClcclxuICAgIGNvbnN0IHsgY2FydCwgYXV0aCB9ID0gc3RhdGVcclxuXHJcbiAgICBjb25zdCB1c2VyTGluayA9IChwcm9kdWN0KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YHByb2R1Y3QvJHtwcm9kdWN0Ll9pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luUmlnaHQ6ICc1cHgnLCBmbGV4OiAxfX0+VmlldzwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luTGVmdDogJzVweCcsIGZsZXg6IDF9fVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtwcm9kdWN0LmluU3RvY2sgPT09IDAgPyB0cnVlIDogZmFsc2V9IFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKGFkZFRvQ2FydChwcm9kdWN0LCBjYXJ0KSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQnV5XHJcbiAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbnJldHVybihcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIHN0eWxlPXt7IHdpZHRoOiAnMThyZW0nIH19PlxyXG4gICAgXHJcbiAgICA8aW1nIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiIHNyYz17cHJvZHVjdC5pbWFnZXNbMF0udXJsfSBhbHQ9e3Byb2R1Y3QuaW1hZ2VzWzBdLnVybH0gLz5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgdGV4dC1jYXBpdGFsaXplXCIgdGl0bGU9e3Byb2R1Y3QudGl0bGV9PlxyXG4gICAgICAgICAgICB7cHJvZHVjdC50aXRsZX1cclxuICAgICAgICA8L2g1PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBteC0wXCI+XHJcbiAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPlJzLntwcm9kdWN0LnByaWNlfTwvaDY+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3QuaW5TdG9jayA+IDBcclxuICAgICAgICAgICAgICAgID8gPGg2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+SW4gU3RvY2s6IHtwcm9kdWN0LmluU3RvY2t9PC9oNj5cclxuICAgICAgICAgICAgICAgIDogPGg2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+T3V0IFN0b2NrPC9oNj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIiB0aXRsZT17cHJvZHVjdC5kZXNjcmlwdGlvbn0+XHJcbiAgICAgICAgICAgIHtwcm9kdWN0LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWJldHdlZW4gbXgtMFwiPlxyXG4gICAgICAgICAge3VzZXJMaW5rKHByb2R1Y3QpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG4pXHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RJdGVtXHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=