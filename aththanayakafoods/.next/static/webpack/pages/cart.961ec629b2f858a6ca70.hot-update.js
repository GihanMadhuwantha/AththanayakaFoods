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
          // return dispatch({ type: 'NOTIFY', payload: {success: res.msg} })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGF5cGFsQnRuLmpzIl0sIm5hbWVzIjpbInBheXBhbEJ0biIsInRvdGFsIiwiYWRkcmVzcyIsIm1vYmlsZSIsInN0YXRlIiwiZGlzcGF0Y2giLCJyZWZQYXlwYWxCdG4iLCJ1c2VSZWYiLCJjYXJ0IiwiYXV0aCIsInVzZUVmZmVjdCIsInBheXBhbCIsIkJ1dHRvbnMiLCJjcmVhdGVPcmRlciIsImRhdGEiLCJhY3Rpb25zIiwib3JkZXIiLCJjcmVhdGUiLCJwdXJjaGFzZV91bml0cyIsImFtb3VudCIsInZhbHVlIiwib25BcHByb3ZlIiwiY2FwdHVyZSIsInRoZW4iLCJkZXRhaWxzIiwicG9zdERhdGEiLCJ0b2tlbiIsInJlcyIsImVyciIsInR5cGUiLCJwYXlsb2FkIiwiZXJyb3IiLCJyZW5kZXIiLCJjdXJyZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBcUQ7QUFDUjtBQUNHO0FBQ0w7QUFBQTtBQUUzQyxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBUyxPQUE4QztFQUFBO0VBQUEsSUFBekNDLEtBQUssUUFBTEEsS0FBSztJQUFDQyxPQUFPLFFBQVBBLE9BQU87SUFBQ0MsTUFBTSxRQUFOQSxNQUFNO0lBQUNDLEtBQUssUUFBTEEsS0FBSztJQUFDQyxRQUFRLFFBQVJBLFFBQVE7RUFDbkQsSUFBTUMsWUFBWSxHQUFHQyxvREFBTSxFQUFFO0VBQzdCLElBQU1DLElBQUksR0FBT0osS0FBSyxDQUFoQkksSUFBSTtJQUFDQyxJQUFJLEdBQUVMLEtBQUssQ0FBWEssSUFBSTtFQUNmQyx1REFBUyxDQUFDLFlBQU07SUFDZEMsTUFBTSxDQUFDQyxPQUFPLENBQUM7TUFDWEMsV0FBVyxFQUFFLHFCQUFTQyxJQUFJLEVBQUVDLE9BQU8sRUFBRTtRQUNuQztRQUNBLE9BQU9BLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDQyxNQUFNLENBQUM7VUFDMUJDLGNBQWMsRUFBRSxDQUFDO1lBQ2ZDLE1BQU0sRUFBRTtjQUNOQyxLQUFLLEVBQUNuQjtZQUNSO1VBQ0YsQ0FBQztRQUNILENBQUMsQ0FBQztNQUNKLENBQUM7TUFDRG9CLFNBQVMsRUFBRSxtQkFBU1AsSUFBSSxFQUFFQyxPQUFPLEVBQUU7UUFDakM7UUFDQTs7UUFFQSxPQUFPQSxPQUFPLENBQUNDLEtBQUssQ0FBQ00sT0FBTyxFQUFFLENBQUNDLElBQUksQ0FBQyxVQUFTQyxPQUFPLEVBQUU7VUFFckRDLGlFQUFRLENBQUMsT0FBTyxFQUFDO1lBQUN2QixPQUFPLEVBQVBBLE9BQU87WUFBQ0MsTUFBTSxFQUFOQSxNQUFNO1lBQUNLLElBQUksRUFBSkEsSUFBSTtZQUFDUCxLQUFLLEVBQUxBO1VBQUssQ0FBQyxFQUFDUSxJQUFJLENBQUNpQixLQUFLLENBQUMsQ0FDdkRILElBQUksQ0FBQyxVQUFBSSxHQUFHLEVBQUU7WUFBRSxJQUFHQSxHQUFHLENBQUNDLEdBQUcsRUFBRSxPQUFPdkIsUUFBUSxDQUFDO2NBQUV3QixJQUFJLEVBQUUsUUFBUTtjQUFFQyxPQUFPLEVBQUU7Z0JBQUNDLEtBQUssRUFBRUosR0FBRyxDQUFDQztjQUFHO1lBQUUsQ0FBQyxDQUFDO1VBQUEsQ0FBQyxDQUFDO1VBQ3pGdkIsUUFBUSxDQUFDO1lBQUN3QixJQUFJLEVBQUMsVUFBVTtZQUFDQyxPQUFPLEVBQUM7VUFBRSxDQUFDLENBQUM7VUFDdkM7UUFFQSxDQUFDLENBQUM7TUFDSjtJQUNKLENBQUMsQ0FBQyxDQUFDRSxNQUFNLENBQUMxQixZQUFZLENBQUMyQixPQUFPLENBQUM7RUFDbkMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztFQUNILG9CQUNJO0lBQUssR0FBRyxFQUFFM0I7RUFBYTtJQUFBO0lBQUE7SUFBQTtFQUFBLFNBQU87QUFHbEMsQ0FBQztBQUFBLEdBbENDTixTQUFTO0FBbUNBQSx3RUFBUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYXJ0Ljk2MWVjNjI5YjJmODU4YTZjYTcwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBwb3N0RGF0YSB9IGZyb20gJy4uL3V0aWxzL2ZldGNoRGF0YSdcclxuaW1wb3J0IHtEYXRhQ29udGV4dH0gZnJvbSAnLi4vc3RvcmUvR2xvYmFsU3RhdGUnXHJcbmltcG9ydCB7dXBkYXRlSXRlbX0gZnJvbSAnLi4vc3RvcmUvQWN0aW9ucydcclxuXHJcbmNvbnN0IHBheXBhbEJ0biA9ICh7dG90YWwsYWRkcmVzcyxtb2JpbGUsc3RhdGUsZGlzcGF0Y2h9KSA9PiB7XHJcbiAgICBjb25zdCByZWZQYXlwYWxCdG4gPSB1c2VSZWYoKVxyXG4gICAgY29uc3R7Y2FydCxhdXRofT1zdGF0ZVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgcGF5cGFsLkJ1dHRvbnMoe1xyXG4gICAgICAgICAgY3JlYXRlT3JkZXI6IGZ1bmN0aW9uKGRhdGEsIGFjdGlvbnMpIHtcclxuICAgICAgICAgICAgLy8gVGhpcyBmdW5jdGlvbiBzZXRzIHVwIHRoZSBkZXRhaWxzIG9mIHRoZSB0cmFuc2FjdGlvbiwgaW5jbHVkaW5nIHRoZSBhbW91bnQgYW5kIGxpbmUgaXRlbSBkZXRhaWxzLlxyXG4gICAgICAgICAgICByZXR1cm4gYWN0aW9ucy5vcmRlci5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgIHB1cmNoYXNlX3VuaXRzOiBbe1xyXG4gICAgICAgICAgICAgICAgYW1vdW50OiB7XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlOnRvdGFsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgb25BcHByb3ZlOiBmdW5jdGlvbihkYXRhLCBhY3Rpb25zKSB7XHJcbiAgICAgICAgICAgIC8vIFRoaXMgZnVuY3Rpb24gY2FwdHVyZXMgdGhlIGZ1bmRzIGZyb20gdGhlIHRyYW5zYWN0aW9uLlxyXG4gICAgICAgICAgICAvL2Rpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHtsb2FkaW5nOiB0cnVlfSB9KVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbnMub3JkZXIuY2FwdHVyZSgpLnRoZW4oZnVuY3Rpb24oZGV0YWlscykge1xyXG5cclxuICAgICAgICAgICAgIHBvc3REYXRhKCdvcmRlcicse2FkZHJlc3MsbW9iaWxlLGNhcnQsdG90YWx9LGF1dGgudG9rZW4pXHJcbiAgICAgICAgICAgICAudGhlbihyZXM9PnsgaWYocmVzLmVycikgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHtlcnJvcjogcmVzLmVycn0gfSl9KVxyXG4gICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6J0FERF9DQVJUJyxwYXlsb2FkOltdfSlcclxuICAgICAgICAgICAgLy8gcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHtzdWNjZXNzOiByZXMubXNnfSB9KVxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9KS5yZW5kZXIocmVmUGF5cGFsQnRuLmN1cnJlbnQpO1xyXG4gIH0sW10pXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiByZWY9e3JlZlBheXBhbEJ0bn0+PC9kaXY+XHJcbiAgICApXHJcbiAgICBcclxuICAgIH1cclxuZXhwb3J0IGRlZmF1bHQgcGF5cGFsQnRuICJdLCJzb3VyY2VSb290IjoiIn0=