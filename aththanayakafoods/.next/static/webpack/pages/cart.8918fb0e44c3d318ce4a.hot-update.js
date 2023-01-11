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
        dispatch({
          type: 'NOTIFY',
          payload: {
            loading: true
          }
        });
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
          });
          alert('Transaction Completed');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGF5cGFsQnRuLmpzIl0sIm5hbWVzIjpbInBheXBhbEJ0biIsInRvdGFsIiwiYWRkcmVzcyIsIm1vYmlsZSIsInN0YXRlIiwiZGlzcGF0Y2giLCJyZWZQYXlwYWxCdG4iLCJ1c2VSZWYiLCJjYXJ0IiwiYXV0aCIsInVzZUVmZmVjdCIsInBheXBhbCIsIkJ1dHRvbnMiLCJjcmVhdGVPcmRlciIsImRhdGEiLCJhY3Rpb25zIiwib3JkZXIiLCJjcmVhdGUiLCJwdXJjaGFzZV91bml0cyIsImFtb3VudCIsInZhbHVlIiwib25BcHByb3ZlIiwidHlwZSIsInBheWxvYWQiLCJsb2FkaW5nIiwiY2FwdHVyZSIsInRoZW4iLCJkZXRhaWxzIiwicG9zdERhdGEiLCJ0b2tlbiIsInJlcyIsImVyciIsImVycm9yIiwic3VjY2VzcyIsIm1zZyIsImFsZXJ0IiwicmVuZGVyIiwiY3VycmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXFEO0FBQ1I7QUFDRztBQUNMO0FBQUE7QUFFM0MsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVMsT0FBOEM7RUFBQTtFQUFBLElBQXpDQyxLQUFLLFFBQUxBLEtBQUs7SUFBQ0MsT0FBTyxRQUFQQSxPQUFPO0lBQUNDLE1BQU0sUUFBTkEsTUFBTTtJQUFDQyxLQUFLLFFBQUxBLEtBQUs7SUFBQ0MsUUFBUSxRQUFSQSxRQUFRO0VBQ25ELElBQU1DLFlBQVksR0FBR0Msb0RBQU0sRUFBRTtFQUM3QixJQUFNQyxJQUFJLEdBQU9KLEtBQUssQ0FBaEJJLElBQUk7SUFBQ0MsSUFBSSxHQUFFTCxLQUFLLENBQVhLLElBQUk7RUFDZkMsdURBQVMsQ0FBQyxZQUFNO0lBQ2RDLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDO01BQ1hDLFdBQVcsRUFBRSxxQkFBU0MsSUFBSSxFQUFFQyxPQUFPLEVBQUU7UUFDbkM7UUFDQSxPQUFPQSxPQUFPLENBQUNDLEtBQUssQ0FBQ0MsTUFBTSxDQUFDO1VBQzFCQyxjQUFjLEVBQUUsQ0FBQztZQUNmQyxNQUFNLEVBQUU7Y0FDTkMsS0FBSyxFQUFDbkI7WUFDUjtVQUNGLENBQUM7UUFDSCxDQUFDLENBQUM7TUFDSixDQUFDO01BQ0RvQixTQUFTLEVBQUUsbUJBQVNQLElBQUksRUFBRUMsT0FBTyxFQUFFO1FBQ2pDO1FBQ0FWLFFBQVEsQ0FBQztVQUFFaUIsSUFBSSxFQUFFLFFBQVE7VUFBRUMsT0FBTyxFQUFFO1lBQUNDLE9BQU8sRUFBRTtVQUFJO1FBQUUsQ0FBQyxDQUFDO1FBRXRELE9BQU9ULE9BQU8sQ0FBQ0MsS0FBSyxDQUFDUyxPQUFPLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDLFVBQVNDLE9BQU8sRUFBRTtVQUVyREMsaUVBQVEsQ0FBQyxPQUFPLEVBQUM7WUFBQzFCLE9BQU8sRUFBUEEsT0FBTztZQUFDQyxNQUFNLEVBQU5BLE1BQU07WUFBQ0ssSUFBSSxFQUFKQSxJQUFJO1lBQUNQLEtBQUssRUFBTEE7VUFBSyxDQUFDLEVBQUNRLElBQUksQ0FBQ29CLEtBQUssQ0FBQyxDQUN2REgsSUFBSSxDQUFDLFVBQUFJLEdBQUcsRUFBRTtZQUFFLElBQUdBLEdBQUcsQ0FBQ0MsR0FBRyxFQUFFLE9BQU8xQixRQUFRLENBQUM7Y0FBRWlCLElBQUksRUFBRSxRQUFRO2NBQUVDLE9BQU8sRUFBRTtnQkFBQ1MsS0FBSyxFQUFFRixHQUFHLENBQUNDO2NBQUc7WUFBRSxDQUFDLENBQUM7WUFDdkYxQixRQUFRLENBQUM7Y0FBQ2lCLElBQUksRUFBQyxVQUFVO2NBQUNDLE9BQU8sRUFBQztZQUFFLENBQUMsQ0FBQztZQUN0QyxPQUFPbEIsUUFBUSxDQUFDO2NBQUVpQixJQUFJLEVBQUUsUUFBUTtjQUFFQyxPQUFPLEVBQUU7Z0JBQUNVLE9BQU8sRUFBRUgsR0FBRyxDQUFDSTtjQUFHO1lBQUUsQ0FBQyxDQUFDO1VBQUEsQ0FBQyxDQUFDO1VBQ2xFQyxLQUFLLENBQUMsdUJBQXVCLENBQUM7UUFDL0IsQ0FBQyxDQUFDO01BQ0o7SUFDSixDQUFDLENBQUMsQ0FBQ0MsTUFBTSxDQUFDOUIsWUFBWSxDQUFDK0IsT0FBTyxDQUFDO0VBQ25DLENBQUMsRUFBQyxFQUFFLENBQUM7RUFDSCxvQkFDSTtJQUFLLEdBQUcsRUFBRS9CO0VBQWE7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQUFPO0FBR2xDLENBQUM7QUFBQSxHQWxDQ04sU0FBUztBQW1DQUEsd0VBQVMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FydC44OTE4ZmIwZTQ0YzNkMzE4Y2U0YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgcG9zdERhdGEgfSBmcm9tICcuLi91dGlscy9mZXRjaERhdGEnXHJcbmltcG9ydCB7RGF0YUNvbnRleHR9IGZyb20gJy4uL3N0b3JlL0dsb2JhbFN0YXRlJ1xyXG5pbXBvcnQge3VwZGF0ZUl0ZW19IGZyb20gJy4uL3N0b3JlL0FjdGlvbnMnXHJcblxyXG5jb25zdCBwYXlwYWxCdG4gPSAoe3RvdGFsLGFkZHJlc3MsbW9iaWxlLHN0YXRlLGRpc3BhdGNofSkgPT4ge1xyXG4gICAgY29uc3QgcmVmUGF5cGFsQnRuID0gdXNlUmVmKClcclxuICAgIGNvbnN0e2NhcnQsYXV0aH09c3RhdGVcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIHBheXBhbC5CdXR0b25zKHtcclxuICAgICAgICAgIGNyZWF0ZU9yZGVyOiBmdW5jdGlvbihkYXRhLCBhY3Rpb25zKSB7XHJcbiAgICAgICAgICAgIC8vIFRoaXMgZnVuY3Rpb24gc2V0cyB1cCB0aGUgZGV0YWlscyBvZiB0aGUgdHJhbnNhY3Rpb24sIGluY2x1ZGluZyB0aGUgYW1vdW50IGFuZCBsaW5lIGl0ZW0gZGV0YWlscy5cclxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbnMub3JkZXIuY3JlYXRlKHtcclxuICAgICAgICAgICAgICBwdXJjaGFzZV91bml0czogW3tcclxuICAgICAgICAgICAgICAgIGFtb3VudDoge1xyXG4gICAgICAgICAgICAgICAgICB2YWx1ZTp0b3RhbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIG9uQXBwcm92ZTogZnVuY3Rpb24oZGF0YSwgYWN0aW9ucykge1xyXG4gICAgICAgICAgICAvLyBUaGlzIGZ1bmN0aW9uIGNhcHR1cmVzIHRoZSBmdW5kcyBmcm9tIHRoZSB0cmFuc2FjdGlvbi5cclxuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge2xvYWRpbmc6IHRydWV9IH0pXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYWN0aW9ucy5vcmRlci5jYXB0dXJlKCkudGhlbihmdW5jdGlvbihkZXRhaWxzKSB7XHJcblxyXG4gICAgICAgICAgICAgcG9zdERhdGEoJ29yZGVyJyx7YWRkcmVzcyxtb2JpbGUsY2FydCx0b3RhbH0sYXV0aC50b2tlbilcclxuICAgICAgICAgICAgIC50aGVuKHJlcz0+eyBpZihyZXMuZXJyKSByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge2Vycm9yOiByZXMuZXJyfSB9KSBcclxuICAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOidBRERfQ0FSVCcscGF5bG9hZDpbXX0pXHJcbiAgICAgICAgICAgICByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge3N1Y2Nlc3M6IHJlcy5tc2d9IH0pfSlcclxuICAgICAgICAgICAgIGFsZXJ0KCdUcmFuc2FjdGlvbiBDb21wbGV0ZWQnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0pLnJlbmRlcihyZWZQYXlwYWxCdG4uY3VycmVudCk7XHJcbiAgfSxbXSlcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IHJlZj17cmVmUGF5cGFsQnRufT48L2Rpdj5cclxuICAgIClcclxuICAgIFxyXG4gICAgfVxyXG5leHBvcnQgZGVmYXVsdCBwYXlwYWxCdG4gIl0sInNvdXJjZVJvb3QiOiIifQ==