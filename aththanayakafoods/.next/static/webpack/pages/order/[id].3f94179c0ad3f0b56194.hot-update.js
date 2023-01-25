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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYXlwYWxCdG4uanMiXSwibmFtZXMiOlsicGF5cGFsQnRuIiwib3JkZXIiLCJyZWZQYXlwYWxCdG4iLCJ1c2VSZWYiLCJ1c2VDb250ZXh0IiwiRGF0YUNvbnRleHQiLCJzdGF0ZSIsImRpc3BhdGNoIiwiYXV0aCIsIm9yZGVycyIsInVzZUVmZmVjdCIsInBheXBhbCIsIkJ1dHRvbnMiLCJjcmVhdGVPcmRlciIsImRhdGEiLCJhY3Rpb25zIiwiY3JlYXRlIiwicHVyY2hhc2VfdW5pdHMiLCJhbW91bnQiLCJ2YWx1ZSIsInRvdGFsIiwib25BcHByb3ZlIiwidHlwZSIsInBheWxvYWQiLCJsb2FkaW5nIiwiY2FwdHVyZSIsInRoZW4iLCJkZXRhaWxzIiwicGF0Y2hEYXRhIiwiX2lkIiwidG9rZW4iLCJyZXMiLCJlcnIiLCJlcnJvciIsInVwZGF0ZUl0ZW0iLCJkYXRlT2ZQYXltZW50IiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwicGFpZCIsInN1Y2Nlc3MiLCJtc2ciLCJyZW5kZXIiLCJjdXJyZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXFEO0FBQ1A7QUFDRTtBQUNMO0FBQUE7QUFFM0MsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVMsT0FBZ0I7RUFBQTtFQUFBLElBQVhDLEtBQUssUUFBTEEsS0FBSztFQUNyQixJQUFNQyxZQUFZLEdBQUdDLG9EQUFNLEVBQUU7RUFDN0Isa0JBQTBCQyx3REFBVSxDQUFDQyw4REFBVyxDQUFDO0lBQTFDQyxLQUFLLGVBQUxBLEtBQUs7SUFBRUMsUUFBUSxlQUFSQSxRQUFRO0VBQ3RCLElBQVFDLElBQUksR0FBWUYsS0FBSyxDQUFyQkUsSUFBSTtJQUFFQyxNQUFNLEdBQUlILEtBQUssQ0FBZkcsTUFBTTtFQUVwQkMsdURBQVMsQ0FBQyxZQUFNO0lBQ1pDLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDO01BQ1hDLFdBQVcsRUFBRSxxQkFBU0MsSUFBSSxFQUFFQyxPQUFPLEVBQUU7UUFDbkM7UUFDQSxPQUFPQSxPQUFPLENBQUNkLEtBQUssQ0FBQ2UsTUFBTSxDQUFDO1VBQzFCQyxjQUFjLEVBQUUsQ0FBQztZQUNmQyxNQUFNLEVBQUU7Y0FDTkMsS0FBSyxFQUFFbEIsS0FBSyxDQUFDbUI7WUFDZjtVQUNGLENBQUM7UUFDSCxDQUFDLENBQUM7TUFDSixDQUFDO01BQ0RDLFNBQVMsRUFBRSxtQkFBU1AsSUFBSSxFQUFFQyxPQUFPLEVBQUU7UUFDakM7UUFDQVIsUUFBUSxDQUFDO1VBQUVlLElBQUksRUFBRSxRQUFRO1VBQUVDLE9BQU8sRUFBRTtZQUFDQyxPQUFPLEVBQUU7VUFBSTtRQUFFLENBQUMsQ0FBQztRQUV0RCxPQUFPVCxPQUFPLENBQUNkLEtBQUssQ0FBQ3dCLE9BQU8sRUFBRSxDQUFDQyxJQUFJLENBQUMsVUFBU0MsT0FBTyxFQUFFO1VBRXBEQyxrRUFBUyx5QkFBa0IzQixLQUFLLENBQUM0QixHQUFHLEdBQUksSUFBSSxFQUN6Q3JCLElBQUksQ0FBQ3NCLEtBQUssQ0FBQyxDQUNiSixJQUFJLENBQUMsVUFBQUssR0FBRyxFQUFJO1lBQ1gsSUFBR0EsR0FBRyxDQUFDQyxHQUFHLEVBQUUsT0FBT3pCLFFBQVEsQ0FBQztjQUFFZSxJQUFJLEVBQUUsUUFBUTtjQUFFQyxPQUFPLEVBQUU7Z0JBQUNVLEtBQUssRUFBRUYsR0FBRyxDQUFDQztjQUFHO1lBQUUsQ0FBQyxDQUFDO1lBRzFFekIsUUFBUSxDQUFDMkIsaUVBQVUsQ0FBQ3pCLE1BQU0sRUFBRVIsS0FBSyxDQUFDNEIsR0FBRyxrQ0FDaEM1QixLQUFLO2NBQUVrQyxhQUFhLEVBQUMsSUFBSUMsSUFBSSxFQUFFLENBQUNDLFdBQVcsRUFBRTtjQUNoREMsSUFBSSxFQUFFO1lBQUksSUFDVCxZQUFZLENBQUMsQ0FBQztZQUVqQixPQUFPL0IsUUFBUSxDQUFDO2NBQUVlLElBQUksRUFBRSxRQUFRO2NBQUVDLE9BQU8sRUFBRTtnQkFBQ2dCLE9BQU8sRUFBRVIsR0FBRyxDQUFDUztjQUFHO1lBQUUsQ0FBQyxDQUFDO1VBQ2xFLENBQUMsQ0FBQztVQUNGO1FBQ0YsQ0FBQyxDQUFDO01BQ0o7SUFDSixDQUFDLENBQUMsQ0FBQ0MsTUFBTSxDQUFDdkMsWUFBWSxDQUFDd0MsT0FBTyxDQUFDO0VBQ25DLENBQUMsRUFBQyxFQUFFLENBQUM7RUFFTCxvQkFDSTtJQUFLLEdBQUcsRUFBRXhDO0VBQWE7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQUFPO0FBRXRDLENBQUM7QUFBQSxHQTdDS0YsU0FBUztBQStDQUEsd0VBQVMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvb3JkZXIvW2lkXS4zZjk0MTc5YzBhZDNmMGI1NjE5NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgcGF0Y2hEYXRhIH0gZnJvbSAnLi4vdXRpbHMvZmV0Y2hEYXRhJ1xyXG5pbXBvcnQge0RhdGFDb250ZXh0fSBmcm9tICcuLi9zdG9yZS9HbG9iYWxTdGF0ZSdcclxuaW1wb3J0IHt1cGRhdGVJdGVtfSBmcm9tICcuLi9zdG9yZS9BY3Rpb25zJ1xyXG5cclxuY29uc3QgcGF5cGFsQnRuID0gKHtvcmRlcn0pID0+IHtcclxuICAgIGNvbnN0IHJlZlBheXBhbEJ0biA9IHVzZVJlZigpXHJcbiAgICBjb25zdCB7c3RhdGUsIGRpc3BhdGNofSA9IHVzZUNvbnRleHQoRGF0YUNvbnRleHQpXHJcbiAgICBjb25zdCB7IGF1dGgsIG9yZGVyc30gPSBzdGF0ZVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgcGF5cGFsLkJ1dHRvbnMoe1xyXG4gICAgICAgICAgICBjcmVhdGVPcmRlcjogZnVuY3Rpb24oZGF0YSwgYWN0aW9ucykge1xyXG4gICAgICAgICAgICAgIC8vIFRoaXMgZnVuY3Rpb24gc2V0cyB1cCB0aGUgZGV0YWlscyBvZiB0aGUgdHJhbnNhY3Rpb24sIGluY2x1ZGluZyB0aGUgYW1vdW50IGFuZCBsaW5lIGl0ZW0gZGV0YWlscy5cclxuICAgICAgICAgICAgICByZXR1cm4gYWN0aW9ucy5vcmRlci5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgcHVyY2hhc2VfdW5pdHM6IFt7XHJcbiAgICAgICAgICAgICAgICAgIGFtb3VudDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcmRlci50b3RhbFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkFwcHJvdmU6IGZ1bmN0aW9uKGRhdGEsIGFjdGlvbnMpIHtcclxuICAgICAgICAgICAgICAvLyBUaGlzIGZ1bmN0aW9uIGNhcHR1cmVzIHRoZSBmdW5kcyBmcm9tIHRoZSB0cmFuc2FjdGlvbi5cclxuICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7bG9hZGluZzogdHJ1ZX0gfSlcclxuXHJcbiAgICAgICAgICAgICAgcmV0dXJuIGFjdGlvbnMub3JkZXIuY2FwdHVyZSgpLnRoZW4oZnVuY3Rpb24oZGV0YWlscykge1xyXG5cclxuICAgICAgICAgICAgICAgIHBhdGNoRGF0YShgb3JkZXIvcGF5bWVudC8ke29yZGVyLl9pZH1gLCBudWxsXHJcbiAgICAgICAgICAgICAgICAgLCBhdXRoLnRva2VuKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYocmVzLmVycikgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHtlcnJvcjogcmVzLmVycn0gfSlcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHVwZGF0ZUl0ZW0ob3JkZXJzLCBvcmRlci5faWQsIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5vcmRlciwgZGF0ZU9mUGF5bWVudDpuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICAgICAgcGFpZDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICB9LCAnQUREX09SREVSUycpKVxyXG5cclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHtzdWNjZXNzOiByZXMubXNnfSB9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC8vIFRoaXMgZnVuY3Rpb24gc2hvd3MgYSB0cmFuc2FjdGlvbiBzdWNjZXNzIG1lc3NhZ2UgdG8geW91ciBidXllci5cclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLnJlbmRlcihyZWZQYXlwYWxCdG4uY3VycmVudCk7XHJcbiAgICB9LFtdKVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IHJlZj17cmVmUGF5cGFsQnRufT48L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGF5cGFsQnRuIl0sInNvdXJjZVJvb3QiOiIifQ==