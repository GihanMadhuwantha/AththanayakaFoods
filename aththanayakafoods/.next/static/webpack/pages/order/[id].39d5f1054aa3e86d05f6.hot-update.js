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
          console();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYXlwYWxCdG4uanMiXSwibmFtZXMiOlsicGF5cGFsQnRuIiwib3JkZXIiLCJyZWZQYXlwYWxCdG4iLCJ1c2VSZWYiLCJ1c2VDb250ZXh0IiwiRGF0YUNvbnRleHQiLCJzdGF0ZSIsImRpc3BhdGNoIiwiYXV0aCIsIm9yZGVycyIsInVzZUVmZmVjdCIsInBheXBhbCIsIkJ1dHRvbnMiLCJjcmVhdGVPcmRlciIsImRhdGEiLCJhY3Rpb25zIiwiY3JlYXRlIiwicHVyY2hhc2VfdW5pdHMiLCJhbW91bnQiLCJ2YWx1ZSIsInRvdGFsIiwib25BcHByb3ZlIiwidHlwZSIsInBheWxvYWQiLCJsb2FkaW5nIiwiY2FwdHVyZSIsInRoZW4iLCJkZXRhaWxzIiwiY29uc29sZSIsInBhdGNoRGF0YSIsIl9pZCIsInRva2VuIiwicmVzIiwiZXJyIiwiZXJyb3IiLCJ1cGRhdGVJdGVtIiwiZGF0ZU9mUGF5bWVudCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsInBhaWQiLCJzdWNjZXNzIiwibXNnIiwicmVuZGVyIiwiY3VycmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFxRDtBQUNQO0FBQ0U7QUFDTDtBQUFBO0FBRTNDLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFTLE9BQWdCO0VBQUE7RUFBQSxJQUFYQyxLQUFLLFFBQUxBLEtBQUs7RUFDckIsSUFBTUMsWUFBWSxHQUFHQyxvREFBTSxFQUFFO0VBQzdCLGtCQUEwQkMsd0RBQVUsQ0FBQ0MsOERBQVcsQ0FBQztJQUExQ0MsS0FBSyxlQUFMQSxLQUFLO0lBQUVDLFFBQVEsZUFBUkEsUUFBUTtFQUN0QixJQUFRQyxJQUFJLEdBQVlGLEtBQUssQ0FBckJFLElBQUk7SUFBRUMsTUFBTSxHQUFJSCxLQUFLLENBQWZHLE1BQU07RUFFcEJDLHVEQUFTLENBQUMsWUFBTTtJQUNaQyxNQUFNLENBQUNDLE9BQU8sQ0FBQztNQUNYQyxXQUFXLEVBQUUscUJBQVNDLElBQUksRUFBRUMsT0FBTyxFQUFFO1FBQ25DO1FBQ0EsT0FBT0EsT0FBTyxDQUFDZCxLQUFLLENBQUNlLE1BQU0sQ0FBQztVQUMxQkMsY0FBYyxFQUFFLENBQUM7WUFDZkMsTUFBTSxFQUFFO2NBQ05DLEtBQUssRUFBRWxCLEtBQUssQ0FBQ21CO1lBQ2Y7VUFDRixDQUFDO1FBQ0gsQ0FBQyxDQUFDO01BQ0osQ0FBQztNQUNEQyxTQUFTLEVBQUUsbUJBQVNQLElBQUksRUFBRUMsT0FBTyxFQUFFO1FBQ2pDO1FBQ0FSLFFBQVEsQ0FBQztVQUFFZSxJQUFJLEVBQUUsUUFBUTtVQUFFQyxPQUFPLEVBQUU7WUFBQ0MsT0FBTyxFQUFFO1VBQUk7UUFBRSxDQUFDLENBQUM7UUFFdEQsT0FBT1QsT0FBTyxDQUFDZCxLQUFLLENBQUN3QixPQUFPLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDLFVBQVNDLE9BQU8sRUFBRTtVQUNwREMsT0FBTyxFQUFFO1VBQ1RDLGtFQUFTLHlCQUFrQjVCLEtBQUssQ0FBQzZCLEdBQUcsR0FBSSxJQUFJLEVBQ3pDdEIsSUFBSSxDQUFDdUIsS0FBSyxDQUFDLENBQ2JMLElBQUksQ0FBQyxVQUFBTSxHQUFHLEVBQUk7WUFDWCxJQUFHQSxHQUFHLENBQUNDLEdBQUcsRUFBRSxPQUFPMUIsUUFBUSxDQUFDO2NBQUVlLElBQUksRUFBRSxRQUFRO2NBQUVDLE9BQU8sRUFBRTtnQkFBQ1csS0FBSyxFQUFFRixHQUFHLENBQUNDO2NBQUc7WUFBRSxDQUFDLENBQUM7WUFHMUUxQixRQUFRLENBQUM0QixpRUFBVSxDQUFDMUIsTUFBTSxFQUFFUixLQUFLLENBQUM2QixHQUFHLGtDQUNoQzdCLEtBQUs7Y0FBRW1DLGFBQWEsRUFBQyxJQUFJQyxJQUFJLEVBQUUsQ0FBQ0MsV0FBVyxFQUFFO2NBQ2hEQyxJQUFJLEVBQUU7WUFBSSxJQUNULFlBQVksQ0FBQyxDQUFDO1lBRWpCLE9BQU9oQyxRQUFRLENBQUM7Y0FBRWUsSUFBSSxFQUFFLFFBQVE7Y0FBRUMsT0FBTyxFQUFFO2dCQUFDaUIsT0FBTyxFQUFFUixHQUFHLENBQUNTO2NBQUc7WUFBRSxDQUFDLENBQUM7VUFDbEUsQ0FBQyxDQUFDO1VBQ0Y7UUFDRixDQUFDLENBQUM7TUFDSjtJQUNKLENBQUMsQ0FBQyxDQUFDQyxNQUFNLENBQUN4QyxZQUFZLENBQUN5QyxPQUFPLENBQUM7RUFDbkMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztFQUVMLG9CQUNJO0lBQUssR0FBRyxFQUFFekM7RUFBYTtJQUFBO0lBQUE7SUFBQTtFQUFBLFNBQU87QUFFdEMsQ0FBQztBQUFBLEdBN0NLRixTQUFTO0FBK0NBQSx3RUFBUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9vcmRlci9baWRdLjM5ZDVmMTA1NGFhM2U4NmQwNWY2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBwYXRjaERhdGEgfSBmcm9tICcuLi91dGlscy9mZXRjaERhdGEnXHJcbmltcG9ydCB7RGF0YUNvbnRleHR9IGZyb20gJy4uL3N0b3JlL0dsb2JhbFN0YXRlJ1xyXG5pbXBvcnQge3VwZGF0ZUl0ZW19IGZyb20gJy4uL3N0b3JlL0FjdGlvbnMnXHJcblxyXG5jb25zdCBwYXlwYWxCdG4gPSAoe29yZGVyfSkgPT4ge1xyXG4gICAgY29uc3QgcmVmUGF5cGFsQnRuID0gdXNlUmVmKClcclxuICAgIGNvbnN0IHtzdGF0ZSwgZGlzcGF0Y2h9ID0gdXNlQ29udGV4dChEYXRhQ29udGV4dClcclxuICAgIGNvbnN0IHsgYXV0aCwgb3JkZXJzfSA9IHN0YXRlXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBwYXlwYWwuQnV0dG9ucyh7XHJcbiAgICAgICAgICAgIGNyZWF0ZU9yZGVyOiBmdW5jdGlvbihkYXRhLCBhY3Rpb25zKSB7XHJcbiAgICAgICAgICAgICAgLy8gVGhpcyBmdW5jdGlvbiBzZXRzIHVwIHRoZSBkZXRhaWxzIG9mIHRoZSB0cmFuc2FjdGlvbiwgaW5jbHVkaW5nIHRoZSBhbW91bnQgYW5kIGxpbmUgaXRlbSBkZXRhaWxzLlxyXG4gICAgICAgICAgICAgIHJldHVybiBhY3Rpb25zLm9yZGVyLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBwdXJjaGFzZV91bml0czogW3tcclxuICAgICAgICAgICAgICAgICAgYW1vdW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9yZGVyLnRvdGFsXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uQXBwcm92ZTogZnVuY3Rpb24oZGF0YSwgYWN0aW9ucykge1xyXG4gICAgICAgICAgICAgIC8vIFRoaXMgZnVuY3Rpb24gY2FwdHVyZXMgdGhlIGZ1bmRzIGZyb20gdGhlIHRyYW5zYWN0aW9uLlxyXG4gICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHtsb2FkaW5nOiB0cnVlfSB9KVxyXG5cclxuICAgICAgICAgICAgICByZXR1cm4gYWN0aW9ucy5vcmRlci5jYXB0dXJlKCkudGhlbihmdW5jdGlvbihkZXRhaWxzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlKClcclxuICAgICAgICAgICAgICAgIHBhdGNoRGF0YShgb3JkZXIvcGF5bWVudC8ke29yZGVyLl9pZH1gLCBudWxsXHJcbiAgICAgICAgICAgICAgICAgLCBhdXRoLnRva2VuKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYocmVzLmVycikgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHtlcnJvcjogcmVzLmVycn0gfSlcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHVwZGF0ZUl0ZW0ob3JkZXJzLCBvcmRlci5faWQsIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5vcmRlciwgZGF0ZU9mUGF5bWVudDpuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICAgICAgcGFpZDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICB9LCAnQUREX09SREVSUycpKVxyXG5cclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHtzdWNjZXNzOiByZXMubXNnfSB9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC8vIFRoaXMgZnVuY3Rpb24gc2hvd3MgYSB0cmFuc2FjdGlvbiBzdWNjZXNzIG1lc3NhZ2UgdG8geW91ciBidXllci5cclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLnJlbmRlcihyZWZQYXlwYWxCdG4uY3VycmVudCk7XHJcbiAgICB9LFtdKVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IHJlZj17cmVmUGF5cGFsQnRufT48L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGF5cGFsQnRuIl0sInNvdXJjZVJvb3QiOiIifQ==