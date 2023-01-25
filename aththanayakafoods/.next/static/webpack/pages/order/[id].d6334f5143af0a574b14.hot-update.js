webpackHotUpdate_N_E("pages/order/[id]",{

/***/ "./components/OrderDetail.js":
/*!***********************************!*\
  !*** ./components/OrderDetail.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _paypalBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paypalBtn */ "./components/paypalBtn.js");
/* harmony import */ var _utils_fetchData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/fetchData */ "./utils/fetchData.js");
/* harmony import */ var _store_Actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/Actions */ "./store/Actions.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\gihanmadhuwantha\\Desktop\\system_Development\\AththanayakaFoods\\aththanayakafoods\\components\\OrderDetail.js",
  _this = undefined;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }






var OrderDetail = function OrderDetail(_ref) {
  var orderDetail = _ref.orderDetail,
    state = _ref.state,
    dispatch = _ref.dispatch;
  var auth = state.auth,
    orders = state.orders;
  var handleDelivered = function handleDelivered(order) {
    dispatch({
      type: 'NOTIFY',
      payload: {
        loading: true
      }
    });
    Object(_utils_fetchData__WEBPACK_IMPORTED_MODULE_3__["patchData"])("order/delivered/".concat(order._id), null, auth.token).then(function (res) {
      if (res.err) return dispatch({
        type: 'NOTIFY',
        payload: {
          error: res.err
        }
      });
      var _res$result = res.result,
        paid = _res$result.paid,
        dateOfPayment = _res$result.dateOfPayment,
        method = _res$result.method,
        delivered = _res$result.delivered;
      dispatch(Object(_store_Actions__WEBPACK_IMPORTED_MODULE_4__["updateItem"])(orders, order._id, _objectSpread(_objectSpread({}, order), {}, {
        paid: paid,
        dateOfPayment: dateOfPayment,
        method: method,
        delivered: delivered
      }), 'ADD_ORDERS'));
      return dispatch({
        type: 'NOTIFY',
        payload: {
          success: res.msg
        }
      });
    });
  };
  if (!auth.user) return null;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
    children: orderDetail.map(function (order) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        style: {
          margin: '20px auto'
        },
        className: "row justify-content-around",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          className: "text-uppercase my-3",
          style: {
            maxWidth: '600px'
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h2", {
            className: "text-break",
            children: ["Order ", order._id]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "mt-4 text-secondary",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h3", {
              children: "Shipping"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
              children: ["Name: ", order.user.name]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
              children: ["Email: ", order.user.email]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
              children: ["Address: ", order.address]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
              children: ["Mobile: ", order.mobile]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
              className: "alert ".concat(order.delivered ? 'alert-success' : 'alert-danger', "\n                        d-flex justify-content-between align-items-center"),
              role: "alert",
              children: [order.delivered ? "Deliverd on ".concat(order.updatedAt) : 'Not Delivered', auth.user.role === 'admin' && !order.delivered && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("button", {
                className: "btn btn-dark text-uppercase",
                onClick: function onClick() {
                  return handleDelivered(order);
                },
                children: "Mark as delivered"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h3", {
              children: "Payment"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 25
            }, _this), order.method && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h6", {
              children: ["Method: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("em", {
                children: order.method
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 57
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 45
            }, _this), order.paymentId && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
              children: ["PaymentId: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("em", {
                children: order.paymentId
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 62
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 48
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
              className: "alert ".concat(order.paid ? 'alert-success' : 'alert-danger', "\n                        d-flex justify-content-between align-items-center"),
              role: "alert",
              children: order.paid ? "Paid on ".concat(order.dateOfPayment) : 'Not Paid'
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h3", {
                children: "Order Items"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 29
              }, _this), order.cart.map(function (item) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                  className: "row border-bottom mx-0 p-2 justify-content-betwenn\r align-items-center",
                  style: {
                    maxWidth: '550px'
                  },
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
                    src: item.images[0].url,
                    alt: item.images[0].url,
                    style: {
                      width: '50px',
                      height: '45px',
                      objectFit: 'cover'
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 81,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h5", {
                    className: "flex-fill text-secondary px-3 m-0",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
                      href: "/product/".concat(item._id),
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
                        children: item.title
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 86,
                        columnNumber: 49
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 85,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 84,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("span", {
                    className: "text-info m-0",
                    children: [item.quantity, " x Rs", item.price, " = Rs.", item.price * item.quantity]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 90,
                    columnNumber: 41
                  }, _this)]
                }, item._id, true, {
                  fileName: _jsxFileName,
                  lineNumber: 79,
                  columnNumber: 37
                }, _this);
              })]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 25
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 17
        }, _this), !order.paid && auth.user.role !== 'admin' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          className: "p-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h2", {
            className: "mb-4 text-uppercase",
            children: ["Total: Rs.", order.total]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_paypalBtn__WEBPACK_IMPORTED_MODULE_2__["default"], {
            order: order
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 21
        }, _this)]
      }, order._id, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }, _this);
    })
  }, void 0, false);
};
_c = OrderDetail;
/* harmony default export */ __webpack_exports__["default"] = (OrderDetail);
var _c;
$RefreshReg$(_c, "OrderDetail");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9PcmRlckRldGFpbC5qcyJdLCJuYW1lcyI6WyJPcmRlckRldGFpbCIsIm9yZGVyRGV0YWlsIiwic3RhdGUiLCJkaXNwYXRjaCIsImF1dGgiLCJvcmRlcnMiLCJoYW5kbGVEZWxpdmVyZWQiLCJvcmRlciIsInR5cGUiLCJwYXlsb2FkIiwibG9hZGluZyIsInBhdGNoRGF0YSIsIl9pZCIsInRva2VuIiwidGhlbiIsInJlcyIsImVyciIsImVycm9yIiwicmVzdWx0IiwicGFpZCIsImRhdGVPZlBheW1lbnQiLCJtZXRob2QiLCJkZWxpdmVyZWQiLCJ1cGRhdGVJdGVtIiwic3VjY2VzcyIsIm1zZyIsInVzZXIiLCJtYXAiLCJtYXJnaW4iLCJtYXhXaWR0aCIsIm5hbWUiLCJlbWFpbCIsImFkZHJlc3MiLCJtb2JpbGUiLCJ1cGRhdGVkQXQiLCJyb2xlIiwicGF5bWVudElkIiwiY2FydCIsIml0ZW0iLCJpbWFnZXMiLCJ1cmwiLCJ3aWR0aCIsImhlaWdodCIsIm9iamVjdEZpdCIsInRpdGxlIiwicXVhbnRpdHkiLCJwcmljZSIsInRvdGFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEI7QUFDTztBQUNTO0FBQ0Q7QUFBQTtBQUFBO0FBRTNDLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFXLE9BQXVDO0VBQUEsSUFBbENDLFdBQVcsUUFBWEEsV0FBVztJQUFFQyxLQUFLLFFBQUxBLEtBQUs7SUFBRUMsUUFBUSxRQUFSQSxRQUFRO0VBQzlDLElBQU9DLElBQUksR0FBWUYsS0FBSyxDQUFyQkUsSUFBSTtJQUFFQyxNQUFNLEdBQUlILEtBQUssQ0FBZkcsTUFBTTtFQUVuQixJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWUsQ0FBSUMsS0FBSyxFQUFLO0lBQy9CSixRQUFRLENBQUM7TUFBQ0ssSUFBSSxFQUFFLFFBQVE7TUFBRUMsT0FBTyxFQUFFO1FBQUNDLE9BQU8sRUFBRTtNQUFJO0lB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O0FBRVgsQ0FBQztBQUFBLEtBOUdLWixXQUFXO0FBZ0hGQSwwRUFBVztBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvb3JkZXIvW2lkXS5kNjMzNGY1MTQzYWYwYTU3NGIxNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgUGF5cGFsQnRuIGZyb20gJy4vcGF5cGFsQnRuJ1xyXG5pbXBvcnQge3BhdGNoRGF0YX0gZnJvbSAnLi4vdXRpbHMvZmV0Y2hEYXRhJ1xyXG5pbXBvcnQge3VwZGF0ZUl0ZW19IGZyb20gJy4uL3N0b3JlL0FjdGlvbnMnXHJcblxyXG5jb25zdCBPcmRlckRldGFpbCA9ICh7b3JkZXJEZXRhaWwsIHN0YXRlLCBkaXNwYXRjaH0pID0+IHtcclxuICAgIGNvbnN0IHthdXRoLCBvcmRlcnN9ID0gc3RhdGVcclxuXHJcbiAgICBjb25zdCBoYW5kbGVEZWxpdmVyZWQgPSAob3JkZXIpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHtsb2FkaW5nOiB0cnVlfX0pXHJcblxyXG4gICAgICAgIHBhdGNoRGF0YShgb3JkZXIvZGVsaXZlcmVkLyR7b3JkZXIuX2lkfWAsIG51bGwsIGF1dGgudG9rZW4pXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgaWYocmVzLmVycikgcmV0dXJuIGRpc3BhdGNoKHt0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge2Vycm9yOiByZXMuZXJyfX0pXHJcblxyXG4gICAgICAgICAgICBjb25zdCB7IHBhaWQsIGRhdGVPZlBheW1lbnQsIG1ldGhvZCwgZGVsaXZlcmVkIH0gPSByZXMucmVzdWx0XHJcblxyXG4gICAgICAgICAgICBkaXNwYXRjaCh1cGRhdGVJdGVtKG9yZGVycywgb3JkZXIuX2lkLCB7XHJcbiAgICAgICAgICAgICAgICAuLi5vcmRlciwgcGFpZCwgZGF0ZU9mUGF5bWVudCwgbWV0aG9kLCBkZWxpdmVyZWRcclxuICAgICAgICAgICAgfSwgJ0FERF9PUkRFUlMnKSlcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBkaXNwYXRjaCh7dHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHtzdWNjZXNzOiByZXMubXNnfX0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBpZighYXV0aC51c2VyKSByZXR1cm4gbnVsbDtcclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgb3JkZXJEZXRhaWwubWFwKG9yZGVyID0+IChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e29yZGVyLl9pZH0gc3R5bGU9e3ttYXJnaW46ICcyMHB4IGF1dG8nfX0gY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1hcm91bmRcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtdXBwZXJjYXNlIG15LTNcIiBzdHlsZT17e21heFdpZHRoOiAnNjAwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtYnJlYWtcIj5PcmRlciB7b3JkZXIuX2lkfTwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCB0ZXh0LXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+U2hpcHBpbmc8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5OYW1lOiB7b3JkZXIudXNlci5uYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+RW1haWw6IHtvcmRlci51c2VyLmVtYWlsfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+QWRkcmVzczoge29yZGVyLmFkZHJlc3N9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Nb2JpbGU6IHtvcmRlci5tb2JpbGV9PC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BhbGVydCAke29yZGVyLmRlbGl2ZXJlZCA/ICdhbGVydC1zdWNjZXNzJyA6ICdhbGVydC1kYW5nZXInfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyYH0gcm9sZT1cImFsZXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXIuZGVsaXZlcmVkID8gYERlbGl2ZXJkIG9uICR7b3JkZXIudXBkYXRlZEF0fWAgOiAnTm90IERlbGl2ZXJlZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRoLnVzZXIucm9sZSA9PT0gJ2FkbWluJyAmJiAhb3JkZXIuZGVsaXZlcmVkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRhcmsgdGV4dC11cHBlcmNhc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGl2ZXJlZChvcmRlcil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXJrIGFzIGRlbGl2ZXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlBheW1lbnQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlci5tZXRob2QgJiYgPGg2Pk1ldGhvZDogPGVtPntvcmRlci5tZXRob2R9PC9lbT48L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlci5wYXltZW50SWQgJiYgPHA+UGF5bWVudElkOiA8ZW0+e29yZGVyLnBheW1lbnRJZH08L2VtPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BhbGVydCAke29yZGVyLnBhaWQgPyAnYWxlcnQtc3VjY2VzcycgOiAnYWxlcnQtZGFuZ2VyJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlcmB9IHJvbGU9XCJhbGVydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyLnBhaWQgPyBgUGFpZCBvbiAke29yZGVyLmRhdGVPZlBheW1lbnR9YCA6ICdOb3QgUGFpZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+T3JkZXIgSXRlbXM8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyLmNhcnQubWFwKGl0ZW0gPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBib3JkZXItYm90dG9tIG14LTAgcC0yIGp1c3RpZnktY29udGVudC1iZXR3ZW5uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zLWNlbnRlclwiIGtleT17aXRlbS5faWR9IHN0eWxlPXt7bWF4V2lkdGg6ICc1NTBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmltYWdlc1swXS51cmx9IGFsdD17aXRlbS5pbWFnZXNbMF0udXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogJzUwcHgnLCBoZWlnaHQ6ICc0NXB4Jywgb2JqZWN0Rml0OiAnY292ZXInfX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZmxleC1maWxsIHRleHQtc2Vjb25kYXJ5IHB4LTMgbS0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9kdWN0LyR7aXRlbS5faWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPntpdGVtLnRpdGxlfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtaW5mbyBtLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5xdWFudGl0eX0geCBSc3tpdGVtLnByaWNlfSA9IFJzLntpdGVtLnByaWNlICogaXRlbS5xdWFudGl0eX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICFvcmRlci5wYWlkICYmIGF1dGgudXNlci5yb2xlICE9PSAnYWRtaW4nICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm1iLTQgdGV4dC11cHBlcmNhc2VcIj5Ub3RhbDogUnMue29yZGVyLnRvdGFsfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYXlwYWxCdG4gb3JkZXI9e29yZGVyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPcmRlckRldGFpbCJdLCJzb3VyY2VSb290IjoiIn0=