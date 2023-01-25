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
          Object(_utils_fetchData__WEBPACK_IMPORTED_MODULE_2__["patchData"])("order/payment/".concat(order._id), {
            paymentId: details.payer.payer_id
          }, auth.token).then(function (res) {
            if (res.err) return dispatch({
              type: 'NOTIFY',
              payload: {
                error: res.err
              }
            });
            dispatch(Object(_store_Actions__WEBPACK_IMPORTED_MODULE_4__["updateItem"])(orders, order._id, _objectSpread(_objectSpread({}, order), {}, {
              dateOfPayment: details.create_time.toISOString(),
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
    lineNumber: 51,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYXlwYWxCdG4uanMiXSwibmFtZXMiOlsicGF5cGFsQnRuIiwib3JkZXIiLCJyZWZQYXlwYWxCdG4iLCJ1c2VSZWYiLCJ1c2VDb250ZXh0IiwiRGF0YUNvbnRleHQiLCJzdGF0ZSIsImRpc3BhdGNoIiwiYXV0aCIsIm9yZGVycyIsInVzZUVmZmVjdCIsInBheXBhbCIsIkJ1dHRvbnMiLCJjcmVhdGVPcmRlciIsImRhdGEiLCJhY3Rpb25zIiwiY3JlYXRlIiwicHVyY2hhc2VfdW5pdHMiLCJhbW91bnQiLCJ2YWx1ZSIsInRvdGFsIiwib25BcHByb3ZlIiwidHlwZSIsInBheWxvYWQiLCJsb2FkaW5nIiwiY2FwdHVyZSIsInRoZW4iLCJkZXRhaWxzIiwiY29uc29sZSIsImxvZyIsInBhdGNoRGF0YSIsIl9pZCIsInBheW1lbnRJZCIsInBheWVyIiwicGF5ZXJfaWQiLCJ0b2tlbiIsInJlcyIsImVyciIsImVycm9yIiwidXBkYXRlSXRlbSIsImRhdGVPZlBheW1lbnQiLCJjcmVhdGVfdGltZSIsInRvSVNPU3RyaW5nIiwicGFpZCIsInN1Y2Nlc3MiLCJtc2ciLCJyZW5kZXIiLCJjdXJyZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXFEO0FBQ1A7QUFDRTtBQUNMO0FBQUE7QUFFM0MsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVMsT0FBZ0I7RUFBQTtFQUFBLElBQVhDLEtBQUssUUFBTEEsS0FBSztFQUNyQixJQUFNQyxZQUFZLEdBQUdDLG9EQUFNLEVBQUU7RUFDN0Isa0JBQTBCQyx3REFBVSxDQUFDQyw4REFBVyxDQUFDO0lBQTFDQyxLQUFLLGVBQUxBLEtBQUs7SUFBRUMsUUFBUSxlQUFSQSxRQUFRO0VBQ3RCLElBQVFDLElBQUksR0FBWUYsS0FBSyxDQUFyQkUsSUFBSTtJQUFFQyxNQUFNLEdBQUlILEtBQUssQ0FBZkcsTUFBTTtFQUVwQkMsdURBQVMsQ0FBQyxZQUFNO0lBQ1pDLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDO01BQ1hDLFdBQVcsRUFBRSxxQkFBU0MsSUFBSSxFQUFFQyxPQUFPLEVBQUU7UUFDbkM7UUFDQSxPQUFPQSxPQUFPLENBQUNkLEtBQUssQ0FBQ2UsTUFBTSxDQUFDO1VBQzFCQyxjQUFjLEVBQUUsQ0FBQztZQUNmQyxNQUFNLEVBQUU7Y0FDTkMsS0FBSyxFQUFFbEIsS0FBSyxDQUFDbUI7WUFDZjtVQUNGLENBQUM7UUFDSCxDQUFDLENBQUM7TUFDSixDQUFDO01BQ0RDLFNBQVMsRUFBRSxtQkFBU1AsSUFBSSxFQUFFQyxPQUFPLEVBQUU7UUFDakM7UUFDQVIsUUFBUSxDQUFDO1VBQUVlLElBQUksRUFBRSxRQUFRO1VBQUVDLE9BQU8sRUFBRTtZQUFDQyxPQUFPLEVBQUU7VUFBSTtRQUFFLENBQUMsQ0FBQztRQUV0RCxPQUFPVCxPQUFPLENBQUNkLEtBQUssQ0FBQ3dCLE9BQU8sRUFBRSxDQUFDQyxJQUFJLENBQUMsVUFBU0MsT0FBTyxFQUFFO1VBQ3BEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsT0FBTyxDQUFDO1VBQ3BCRyxrRUFBUyx5QkFBa0I3QixLQUFLLENBQUM4QixHQUFHLEdBQUk7WUFDdENDLFNBQVMsRUFBRUwsT0FBTyxDQUFDTSxLQUFLLENBQUNDO1VBQzNCLENBQUMsRUFDRTFCLElBQUksQ0FBQzJCLEtBQUssQ0FBQyxDQUNiVCxJQUFJLENBQUMsVUFBQVUsR0FBRyxFQUFJO1lBQ1gsSUFBR0EsR0FBRyxDQUFDQyxHQUFHLEVBQUUsT0FBTzlCLFFBQVEsQ0FBQztjQUFFZSxJQUFJLEVBQUUsUUFBUTtjQUFFQyxPQUFPLEVBQUU7Z0JBQUNlLEtBQUssRUFBRUYsR0FBRyxDQUFDQztjQUFHO1lBQUUsQ0FBQyxDQUFDO1lBRzFFOUIsUUFBUSxDQUFDZ0MsaUVBQVUsQ0FBQzlCLE1BQU0sRUFBRVIsS0FBSyxDQUFDOEIsR0FBRyxrQ0FDaEM5QixLQUFLO2NBQUV1QyxhQUFhLEVBQUNiLE9BQU8sQ0FBQ2MsV0FBVyxDQUFDQyxXQUFXLEVBQUU7Y0FDekRDLElBQUksRUFBRTtZQUFJLElBQ1QsWUFBWSxDQUFDLENBQUM7WUFFakIsT0FBT3BDLFFBQVEsQ0FBQztjQUFFZSxJQUFJLEVBQUUsUUFBUTtjQUFFQyxPQUFPLEVBQUU7Z0JBQUNxQixPQUFPLEVBQUVSLEdBQUcsQ0FBQ1M7Y0FBRztZQUFFLENBQUMsQ0FBQztVQUNsRSxDQUFDLENBQUM7VUFDRjtRQUNGLENBQUMsQ0FBQztNQUNKO0lBQ0osQ0FBQyxDQUFDLENBQUNDLE1BQU0sQ0FBQzVDLFlBQVksQ0FBQzZDLE9BQU8sQ0FBQztFQUNuQyxDQUFDLEVBQUMsRUFBRSxDQUFDO0VBRUwsb0JBQ0k7SUFBSyxHQUFHLEVBQUU3QztFQUFhO0lBQUE7SUFBQTtJQUFBO0VBQUEsU0FBTztBQUV0QyxDQUFDO0FBQUEsR0EvQ0tGLFNBQVM7QUFpREFBLHdFQUFTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL29yZGVyL1tpZF0uYjc2Yzc3MWE4MDE3NTEyM2Y3YjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHBhdGNoRGF0YSB9IGZyb20gJy4uL3V0aWxzL2ZldGNoRGF0YSdcclxuaW1wb3J0IHtEYXRhQ29udGV4dH0gZnJvbSAnLi4vc3RvcmUvR2xvYmFsU3RhdGUnXHJcbmltcG9ydCB7dXBkYXRlSXRlbX0gZnJvbSAnLi4vc3RvcmUvQWN0aW9ucydcclxuXHJcbmNvbnN0IHBheXBhbEJ0biA9ICh7b3JkZXJ9KSA9PiB7XHJcbiAgICBjb25zdCByZWZQYXlwYWxCdG4gPSB1c2VSZWYoKVxyXG4gICAgY29uc3Qge3N0YXRlLCBkaXNwYXRjaH0gPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KVxyXG4gICAgY29uc3QgeyBhdXRoLCBvcmRlcnN9ID0gc3RhdGVcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHBheXBhbC5CdXR0b25zKHtcclxuICAgICAgICAgICAgY3JlYXRlT3JkZXI6IGZ1bmN0aW9uKGRhdGEsIGFjdGlvbnMpIHtcclxuICAgICAgICAgICAgICAvLyBUaGlzIGZ1bmN0aW9uIHNldHMgdXAgdGhlIGRldGFpbHMgb2YgdGhlIHRyYW5zYWN0aW9uLCBpbmNsdWRpbmcgdGhlIGFtb3VudCBhbmQgbGluZSBpdGVtIGRldGFpbHMuXHJcbiAgICAgICAgICAgICAgcmV0dXJuIGFjdGlvbnMub3JkZXIuY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgIHB1cmNoYXNlX3VuaXRzOiBbe1xyXG4gICAgICAgICAgICAgICAgICBhbW91bnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3JkZXIudG90YWxcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25BcHByb3ZlOiBmdW5jdGlvbihkYXRhLCBhY3Rpb25zKSB7XHJcbiAgICAgICAgICAgICAgLy8gVGhpcyBmdW5jdGlvbiBjYXB0dXJlcyB0aGUgZnVuZHMgZnJvbSB0aGUgdHJhbnNhY3Rpb24uXHJcbiAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge2xvYWRpbmc6IHRydWV9IH0pXHJcblxyXG4gICAgICAgICAgICAgIHJldHVybiBhY3Rpb25zLm9yZGVyLmNhcHR1cmUoKS50aGVuKGZ1bmN0aW9uKGRldGFpbHMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRldGFpbHMpXHJcbiAgICAgICAgICAgICAgICBwYXRjaERhdGEoYG9yZGVyL3BheW1lbnQvJHtvcmRlci5faWR9YCwge1xyXG4gICAgICAgICAgICAgICAgICBwYXltZW50SWQ6IGRldGFpbHMucGF5ZXIucGF5ZXJfaWRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAsIGF1dGgudG9rZW4pXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpZihyZXMuZXJyKSByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge2Vycm9yOiByZXMuZXJyfSB9KVxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgZGlzcGF0Y2godXBkYXRlSXRlbShvcmRlcnMsIG9yZGVyLl9pZCwge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLm9yZGVyLCBkYXRlT2ZQYXltZW50OmRldGFpbHMuY3JlYXRlX3RpbWUudG9JU09TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgICAgICBwYWlkOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgIH0sICdBRERfT1JERVJTJykpXHJcblxyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge3N1Y2Nlc3M6IHJlcy5tc2d9IH0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLy8gVGhpcyBmdW5jdGlvbiBzaG93cyBhIHRyYW5zYWN0aW9uIHN1Y2Nlc3MgbWVzc2FnZSB0byB5b3VyIGJ1eWVyLlxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkucmVuZGVyKHJlZlBheXBhbEJ0bi5jdXJyZW50KTtcclxuICAgIH0sW10pXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgcmVmPXtyZWZQYXlwYWxCdG59PjwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwYXlwYWxCdG4iXSwic291cmNlUm9vdCI6IiJ9