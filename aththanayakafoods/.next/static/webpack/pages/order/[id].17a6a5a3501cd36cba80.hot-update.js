webpackHotUpdate_N_E("pages/order/[id]",{

/***/ "./components/paypalBtn.js":
/*!*********************************!*\
  !*** ./components/paypalBtn.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_fetchData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/fetchData */ "./utils/fetchData.js");
/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/GlobalState */ "./store/GlobalState.js");
/* harmony import */ var _store_Actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/Actions */ "./store/Actions.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\gihanmadhuwantha\\Desktop\\system_Development\\AththanayakaFoods\\aththanayakafoods\\components\\paypalBtn.js",
  _this = undefined,
  _s = $RefreshSig$();
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





var paypalBtn = function paypalBtn(_ref) {
  _s();
  var order = _ref.order;
  var refPaypalBtn = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_store_GlobalState__WEBPACK_IMPORTED_MODULE_3__["DataContext"]),
    state = _useContext.state,
    dispatch = _useContext.dispatch;
  var auth = state.auth,
    orders = state.orders;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    paypal.Buttons({
      createOrder: function createOrder(data, actions) {
        // This function sets up the details of the transaction, including the amount and line item details.
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: order.total
            }
          }]
        });
      },
      onApprove: function onApprove(data, actions) {
        // This function captures the funds from the transaction.
        dispatch({
          type: 'NOTIFY',
          payload: {
            loading: true
          }
        });
        return actions.order.capture().then(function (details) {
          console.log(details);
          Object(_utils_fetchData__WEBPACK_IMPORTED_MODULE_2__["patchData"])("order/payment/".concat(order._id), null, auth.token).then(function (res) {
            if (res.err) return dispatch({
              type: 'NOTIFY',
              payload: {
                error: res.err
              }
            });
            dispatch(Object(_store_Actions__WEBPACK_IMPORTED_MODULE_4__["updateItem"])(orders, order._id, _objectSpread(_objectSpread({}, order), {}, {
              dateOfPayment: new Date().toISOString(),
              paid: true
            }), 'ADD_ORDERS'));
            return dispatch({
              type: 'NOTIFY',
              payload: {
                success: res.msg
              }
            });
          });
          // This function shows a transaction success message to your buyer.
        });
      }
    }).render(refPaypalBtn.current);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
    ref: refPaypalBtn
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 9
  }, _this);
};
_s(paypalBtn, "Q7r/pGe3Y/9OcyIGHlqtGtU0XNM=");
/* harmony default export */ __webpack_exports__["default"] = (paypalBtn);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYXlwYWxCdG4uanMiXSwibmFtZXMiOlsicGF5cGFsQnRuIiwib3JkZXIiLCJyZWZQYXlwYWxCdG4iLCJ1c2VSZWYiLCJ1c2VDb250ZXh0IiwiRGF0YUNvbnRleHQiLCJzdGF0ZSIsImRpc3BhdGNoIiwiYXV0aCIsIm9yZGVycyIsInVzZUVmZmVjdCIsInBheXBhbCIsIkJ1dHRvbnMiLCJjcmVhdGVPcmRlciIsImRhdGEiLCJhY3Rpb25zIiwiY3JlYXRlIiwicHVyY2hhc2VfdW5pdHMiLCJhbW91bnQiLCJ2YWx1ZSIsInRvdGFsIiwib25BcHByb3ZlIiwidHlwZSIsInBheWxvYWQiLCJsb2FkaW5nIiwiY2FwdHVyZSIsInRoZW4iLCJkZXRhaWxzIiwiY29uc29sZSIsImxvZyIsInBhdGNoRGF0YSIsIl9pZCIsInRva2VuIiwicmVzIiwiZXJyIiwiZXJyb3IiLCJ1cGRhdGVJdGVtIiwiZGF0ZU9mUGF5bWVudCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsInBhaWQiLCJzdWNjZXNzIiwibXNnIiwicmVuZGVyIiwiY3VycmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFxRDtBQUNQO0FBQ0U7QUFDTDtBQUFBO0FBRTNDLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFTLE9BQWdCO0VBQUE7RUFBQSxJQUFYQyxLQUFLLFFBQUxBLEtBQUs7RUFDckIsSUFBTUMsWUFBWSxHQUFHQyxvREFBTSxFQUFFO0VBQzdCLGtCQUEwQkMsd0RBQVUsQ0FBQ0MsOERBQVcsQ0FBQztJQUExQ0MsS0FBSyxlQUFMQSxLQUFLO0lBQUVDLFFBQVEsZUFBUkEsUUFBUTtFQUN0QixJQUFRQyxJQUFJLEdBQVlGLEtBQUssQ0FBckJFLElBQUk7SUFBRUMsTUFBTSxHQUFJSCxLQUFLLENBQWZHLE1BQU07RUFFcEJDLHVEQUFTLENBQUMsWUFBTTtJQUNaQyxNQUFNLENBQUNDLE9BQU8sQ0FBQztNQUNYQyxXQUFXLEVBQUUscUJBQVNDLElBQUksRUFBRUMsT0FBTyxFQUFFO1FBQ25DO1FBQ0EsT0FBT0EsT0FBTyxDQUFDZCxLQUFLLENBQUNlLE1BQU0sQ0FBQztVQUMxQkMsY0FBYyxFQUFFLENBQUM7WUFDZkMsTUFBTSxFQUFFO2NBQ05DLEtBQUssRUFBRWxCLEtBQUssQ0FBQ21CO1lBQ2Y7VUFDRixDQUFDO1FBQ0gsQ0FBQyxDQUFDO01BQ0osQ0FBQztNQUNEQyxTQUFTLEVBQUUsbUJBQVNQLElBQUksRUFBRUMsT0FBTyxFQUFFO1FBQ2pDO1FBQ0FSLFFBQVEsQ0FBQztVQUFFZSxJQUFJLEVBQUUsUUFBUTtVQUFFQyxPQUFPLEVBQUU7WUFBQ0MsT0FBTyxFQUFFO1VBQUk7UUFBRSxDQUFDLENBQUM7UUFFdEQsT0FBT1QsT0FBTyxDQUFDZCxLQUFLLENBQUN3QixPQUFPLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDLFVBQVNDLE9BQU8sRUFBRTtVQUNwREMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLE9BQU8sQ0FBQztVQUNwQkcsa0VBQVMseUJBQWtCN0IsS0FBSyxDQUFDOEIsR0FBRyxHQUFJLElBQUksRUFDekN2QixJQUFJLENBQUN3QixLQUFLLENBQUMsQ0FDYk4sSUFBSSxDQUFDLFVBQUFPLEdBQUcsRUFBSTtZQUNYLElBQUdBLEdBQUcsQ0FBQ0MsR0FBRyxFQUFFLE9BQU8zQixRQUFRLENBQUM7Y0FBRWUsSUFBSSxFQUFFLFFBQVE7Y0FBRUMsT0FBTyxFQUFFO2dCQUFDWSxLQUFLLEVBQUVGLEdBQUcsQ0FBQ0M7Y0FBRztZQUFFLENBQUMsQ0FBQztZQUcxRTNCLFFBQVEsQ0FBQzZCLGlFQUFVLENBQUMzQixNQUFNLEVBQUVSLEtBQUssQ0FBQzhCLEdBQUcsa0NBQ2hDOUIsS0FBSztjQUFFb0MsYUFBYSxFQUFDLElBQUlDLElBQUksRUFBRSxDQUFDQyxXQUFXLEVBQUU7Y0FDaERDLElBQUksRUFBRTtZQUFJLElBQ1QsWUFBWSxDQUFDLENBQUM7WUFFakIsT0FBT2pDLFFBQVEsQ0FBQztjQUFFZSxJQUFJLEVBQUUsUUFBUTtjQUFFQyxPQUFPLEVBQUU7Z0JBQUNrQixPQUFPLEVBQUVSLEdBQUcsQ0FBQ1M7Y0FBRztZQUFFLENBQUMsQ0FBQztVQUNsRSxDQUFDLENBQUM7VUFDRjtRQUNGLENBQUMsQ0FBQztNQUNKO0lBQ0osQ0FBQyxDQUFDLENBQUNDLE1BQU0sQ0FBQ3pDLFlBQVksQ0FBQzBDLE9BQU8sQ0FBQztFQUNuQyxDQUFDLEVBQUMsRUFBRSxDQUFDO0VBRUwsb0JBQ0k7SUFBSyxHQUFHLEVBQUUxQztFQUFhO0lBQUE7SUFBQTtJQUFBO0VBQUEsU0FBTztBQUV0QyxDQUFDO0FBQUEsR0E3Q0tGLFNBQVM7QUErQ0FBLHdFQUFTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL29yZGVyL1tpZF0uMTdhNmE1YTM1MDFjZDM2Y2JhODAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHBhdGNoRGF0YSB9IGZyb20gJy4uL3V0aWxzL2ZldGNoRGF0YSdcclxuaW1wb3J0IHtEYXRhQ29udGV4dH0gZnJvbSAnLi4vc3RvcmUvR2xvYmFsU3RhdGUnXHJcbmltcG9ydCB7dXBkYXRlSXRlbX0gZnJvbSAnLi4vc3RvcmUvQWN0aW9ucydcclxuXHJcbmNvbnN0IHBheXBhbEJ0biA9ICh7b3JkZXJ9KSA9PiB7XHJcbiAgICBjb25zdCByZWZQYXlwYWxCdG4gPSB1c2VSZWYoKVxyXG4gICAgY29uc3Qge3N0YXRlLCBkaXNwYXRjaH0gPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KVxyXG4gICAgY29uc3QgeyBhdXRoLCBvcmRlcnN9ID0gc3RhdGVcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHBheXBhbC5CdXR0b25zKHtcclxuICAgICAgICAgICAgY3JlYXRlT3JkZXI6IGZ1bmN0aW9uKGRhdGEsIGFjdGlvbnMpIHtcclxuICAgICAgICAgICAgICAvLyBUaGlzIGZ1bmN0aW9uIHNldHMgdXAgdGhlIGRldGFpbHMgb2YgdGhlIHRyYW5zYWN0aW9uLCBpbmNsdWRpbmcgdGhlIGFtb3VudCBhbmQgbGluZSBpdGVtIGRldGFpbHMuXHJcbiAgICAgICAgICAgICAgcmV0dXJuIGFjdGlvbnMub3JkZXIuY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgIHB1cmNoYXNlX3VuaXRzOiBbe1xyXG4gICAgICAgICAgICAgICAgICBhbW91bnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3JkZXIudG90YWxcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25BcHByb3ZlOiBmdW5jdGlvbihkYXRhLCBhY3Rpb25zKSB7XHJcbiAgICAgICAgICAgICAgLy8gVGhpcyBmdW5jdGlvbiBjYXB0dXJlcyB0aGUgZnVuZHMgZnJvbSB0aGUgdHJhbnNhY3Rpb24uXHJcbiAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge2xvYWRpbmc6IHRydWV9IH0pXHJcblxyXG4gICAgICAgICAgICAgIHJldHVybiBhY3Rpb25zLm9yZGVyLmNhcHR1cmUoKS50aGVuKGZ1bmN0aW9uKGRldGFpbHMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRldGFpbHMpXHJcbiAgICAgICAgICAgICAgICBwYXRjaERhdGEoYG9yZGVyL3BheW1lbnQvJHtvcmRlci5faWR9YCwgbnVsbFxyXG4gICAgICAgICAgICAgICAgICwgYXV0aC50b2tlbilcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGlmKHJlcy5lcnIpIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7ZXJyb3I6IHJlcy5lcnJ9IH0pXHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBkaXNwYXRjaCh1cGRhdGVJdGVtKG9yZGVycywgb3JkZXIuX2lkLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4ub3JkZXIsIGRhdGVPZlBheW1lbnQ6bmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhaWQ6IHRydWVcclxuICAgICAgICAgICAgICAgICAgfSwgJ0FERF9PUkRFUlMnKSlcclxuXHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7c3VjY2VzczogcmVzLm1zZ30gfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGZ1bmN0aW9uIHNob3dzIGEgdHJhbnNhY3Rpb24gc3VjY2VzcyBtZXNzYWdlIHRvIHlvdXIgYnV5ZXIuXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS5yZW5kZXIocmVmUGF5cGFsQnRuLmN1cnJlbnQpO1xyXG4gICAgfSxbXSlcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiByZWY9e3JlZlBheXBhbEJ0bn0+PC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBheXBhbEJ0biJdLCJzb3VyY2VSb290IjoiIn0=