webpackHotUpdate_N_E("pages/cart",{

/***/ "./pages/paypalBtn.js":
/*!****************************!*\
  !*** ./pages/paypalBtn.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_fetchData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/fetchData */ "./utils/fetchData.js");
/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/GlobalState */ "./store/GlobalState.js");
/* harmony import */ var _store_Actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/Actions */ "./store/Actions.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\gihanmadhuwantha\\Desktop\\system_Development\\AththanayakaFoods\\aththanayakafoods\\pages\\paypalBtn.js",
  _this = undefined,
  _s = $RefreshSig$();





var paypalBtn = function paypalBtn(_ref) {
  _s();
  var total = _ref.total,
    address = _ref.address,
    mobile = _ref.mobile,
    state = _ref.state,
    dispatch = _ref.dispatch;
  var refPaypalBtn = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var cart = state.cart,
    auth = state.auth;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    paypal.Buttons({
      createOrder: function createOrder(data, actions) {
        // This function sets up the details of the transaction, including the amount and line item details.
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: total
            }
          }]
        });
      },
      onApprove: function onApprove(data, actions) {
        // This function captures the funds from the transaction.
        //dispatch({ type: 'NOTIFY', payload: {loading: true} })

        return actions.order.capture().then(function (details) {
          Object(_utils_fetchData__WEBPACK_IMPORTED_MODULE_1__["postData"])('order', {
            address: address,
            mobile: mobile,
            cart: cart,
            total: total
          }, auth.token).then(function (res) {
            if (res.err) return dispatch({
              type: 'NOTIFY',
              payload: {
                error: res.err
              }
            });
          });
          dispatch({
            type: 'ADD_CART',
            payload: []
          });
          return dispatch({
            type: 'NOTIFY',
            payload: {
              success: res.msg
            }
          });
          console.log();
        });
      }
    }).render(refPaypalBtn.current);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    ref: refPaypalBtn
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 9
  }, _this);
};
_s(paypalBtn, "rI7E1oL4eqSVL08CSIq5ewwS+zk=");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGF5cGFsQnRuLmpzIl0sIm5hbWVzIjpbInBheXBhbEJ0biIsInRvdGFsIiwiYWRkcmVzcyIsIm1vYmlsZSIsInN0YXRlIiwiZGlzcGF0Y2giLCJyZWZQYXlwYWxCdG4iLCJ1c2VSZWYiLCJjYXJ0IiwiYXV0aCIsInVzZUVmZmVjdCIsInBheXBhbCIsIkJ1dHRvbnMiLCJjcmVhdGVPcmRlciIsImRhdGEiLCJhY3Rpb25zIiwib3JkZXIiLCJjcmVhdGUiLCJwdXJjaGFzZV91bml0cyIsImFtb3VudCIsInZhbHVlIiwib25BcHByb3ZlIiwiY2FwdHVyZSIsInRoZW4iLCJkZXRhaWxzIiwicG9zdERhdGEiLCJ0b2tlbiIsInJlcyIsImVyciIsInR5cGUiLCJwYXlsb2FkIiwiZXJyb3IiLCJzdWNjZXNzIiwibXNnIiwiY29uc29sZSIsImxvZyIsInJlbmRlciIsImN1cnJlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFxRDtBQUNSO0FBQ0c7QUFDTDtBQUFBO0FBRTNDLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFTLE9BQThDO0VBQUE7RUFBQSxJQUF6Q0MsS0FBSyxRQUFMQSxLQUFLO0lBQUNDLE9BQU8sUUFBUEEsT0FBTztJQUFDQyxNQUFNLFFBQU5BLE1BQU07SUFBQ0MsS0FBSyxRQUFMQSxLQUFLO0lBQUNDLFFBQVEsUUFBUkEsUUFBUTtFQUNuRCxJQUFNQyxZQUFZLEdBQUdDLG9EQUFNLEVBQUU7RUFDN0IsSUFBTUMsSUFBSSxHQUFPSixLQUFLLENBQWhCSSxJQUFJO0lBQUNDLElBQUksR0FBRUwsS0FBSyxDQUFYSyxJQUFJO0VBQ2ZDLHVEQUFTLENBQUMsWUFBTTtJQUNkQyxNQUFNLENBQUNDLE9BQU8sQ0FBQztNQUNYQyxXQUFXLEVBQUUscUJBQVNDLElBQUksRUFBRUMsT0FBTyxFQUFFO1FBQ25DO1FBQ0EsT0FBT0EsT0FBTyxDQUFDQyxLQUFLLENBQUNDLE1BQU0sQ0FBQztVQUMxQkMsY0FBYyxFQUFFLENBQUM7WUFDZkMsTUFBTSxFQUFFO2NBQ05DLEtBQUssRUFBQ25CO1lBQ1I7VUFDRixDQUFDO1FBQ0gsQ0FBQyxDQUFDO01BQ0osQ0FBQztNQUNEb0IsU0FBUyxFQUFFLG1CQUFTUCxJQUFJLEVBQUVDLE9BQU8sRUFBRTtRQUNqQztRQUNBOztRQUVBLE9BQU9BLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDTSxPQUFPLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDLFVBQVNDLE9BQU8sRUFBRTtVQUVyREMsaUVBQVEsQ0FBQyxPQUFPLEVBQUM7WUFBQ3ZCLE9BQU8sRUFBUEEsT0FBTztZQUFDQyxNQUFNLEVBQU5BLE1BQU07WUFBQ0ssSUFBSSxFQUFKQSxJQUFJO1lBQUNQLEtBQUssRUFBTEE7VUFBSyxDQUFDLEVBQUNRLElBQUksQ0FBQ2lCLEtBQUssQ0FBQyxDQUN2REgsSUFBSSxDQUFDLFVBQUFJLEdBQUcsRUFBRTtZQUFFLElBQUdBLEdBQUcsQ0FBQ0MsR0FBRyxFQUFFLE9BQU92QixRQUFRLENBQUM7Y0FBRXdCLElBQUksRUFBRSxRQUFRO2NBQUVDLE9BQU8sRUFBRTtnQkFBQ0MsS0FBSyxFQUFFSixHQUFHLENBQUNDO2NBQUc7WUFBRSxDQUFDLENBQUM7VUFBQSxDQUFDLENBQUM7VUFDekZ2QixRQUFRLENBQUM7WUFBQ3dCLElBQUksRUFBQyxVQUFVO1lBQUNDLE9BQU8sRUFBQztVQUFFLENBQUMsQ0FBQztVQUN0QyxPQUFPekIsUUFBUSxDQUFDO1lBQUV3QixJQUFJLEVBQUUsUUFBUTtZQUFFQyxPQUFPLEVBQUU7Y0FBQ0UsT0FBTyxFQUFFTCxHQUFHLENBQUNNO1lBQUc7VUFBRSxDQUFDLENBQUM7VUFDaEVDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFO1FBQ2QsQ0FBQyxDQUFDO01BQ0o7SUFDSixDQUFDLENBQUMsQ0FBQ0MsTUFBTSxDQUFDOUIsWUFBWSxDQUFDK0IsT0FBTyxDQUFDO0VBQ25DLENBQUMsRUFBQyxFQUFFLENBQUM7RUFDSCxvQkFDSTtJQUFLLEdBQUcsRUFBRS9CO0VBQWE7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQUFPO0FBR2xDLENBQUM7QUFBQSxHQWxDQ04sU0FBUztBQW1DQUEsd0VBQVMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FydC5mNGJhNWQ0MTNmNjQ0YjkwMjBkYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgcG9zdERhdGEgfSBmcm9tICcuLi91dGlscy9mZXRjaERhdGEnXHJcbmltcG9ydCB7RGF0YUNvbnRleHR9IGZyb20gJy4uL3N0b3JlL0dsb2JhbFN0YXRlJ1xyXG5pbXBvcnQge3VwZGF0ZUl0ZW19IGZyb20gJy4uL3N0b3JlL0FjdGlvbnMnXHJcblxyXG5jb25zdCBwYXlwYWxCdG4gPSAoe3RvdGFsLGFkZHJlc3MsbW9iaWxlLHN0YXRlLGRpc3BhdGNofSkgPT4ge1xyXG4gICAgY29uc3QgcmVmUGF5cGFsQnRuID0gdXNlUmVmKClcclxuICAgIGNvbnN0e2NhcnQsYXV0aH09c3RhdGVcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIHBheXBhbC5CdXR0b25zKHtcclxuICAgICAgICAgIGNyZWF0ZU9yZGVyOiBmdW5jdGlvbihkYXRhLCBhY3Rpb25zKSB7XHJcbiAgICAgICAgICAgIC8vIFRoaXMgZnVuY3Rpb24gc2V0cyB1cCB0aGUgZGV0YWlscyBvZiB0aGUgdHJhbnNhY3Rpb24sIGluY2x1ZGluZyB0aGUgYW1vdW50IGFuZCBsaW5lIGl0ZW0gZGV0YWlscy5cclxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbnMub3JkZXIuY3JlYXRlKHtcclxuICAgICAgICAgICAgICBwdXJjaGFzZV91bml0czogW3tcclxuICAgICAgICAgICAgICAgIGFtb3VudDoge1xyXG4gICAgICAgICAgICAgICAgICB2YWx1ZTp0b3RhbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIG9uQXBwcm92ZTogZnVuY3Rpb24oZGF0YSwgYWN0aW9ucykge1xyXG4gICAgICAgICAgICAvLyBUaGlzIGZ1bmN0aW9uIGNhcHR1cmVzIHRoZSBmdW5kcyBmcm9tIHRoZSB0cmFuc2FjdGlvbi5cclxuICAgICAgICAgICAgLy9kaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7bG9hZGluZzogdHJ1ZX0gfSlcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb25zLm9yZGVyLmNhcHR1cmUoKS50aGVuKGZ1bmN0aW9uKGRldGFpbHMpIHtcclxuXHJcbiAgICAgICAgICAgICBwb3N0RGF0YSgnb3JkZXInLHthZGRyZXNzLG1vYmlsZSxjYXJ0LHRvdGFsfSxhdXRoLnRva2VuKVxyXG4gICAgICAgICAgICAgLnRoZW4ocmVzPT57IGlmKHJlcy5lcnIpIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7ZXJyb3I6IHJlcy5lcnJ9IH0pfSlcclxuICAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOidBRERfQ0FSVCcscGF5bG9hZDpbXX0pXHJcbiAgICAgICAgICAgICByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge3N1Y2Nlc3M6IHJlcy5tc2d9IH0pXHJcbiAgICAgICAgICAgICBjb25zb2xlLmxvZygpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9KS5yZW5kZXIocmVmUGF5cGFsQnRuLmN1cnJlbnQpO1xyXG4gIH0sW10pXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiByZWY9e3JlZlBheXBhbEJ0bn0+PC9kaXY+XHJcbiAgICApXHJcbiAgICBcclxuICAgIH1cclxuZXhwb3J0IGRlZmF1bHQgcGF5cGFsQnRuICJdLCJzb3VyY2VSb290IjoiIn0=