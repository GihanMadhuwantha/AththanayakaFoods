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
      }
    }).render(refPaypalBtn.current);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    ref: refPaypalBtn
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGF5cGFsQnRuLmpzIl0sIm5hbWVzIjpbInBheXBhbEJ0biIsInRvdGFsIiwiYWRkcmVzcyIsIm1vYmlsZSIsInN0YXRlIiwiZGlzcGF0Y2giLCJyZWZQYXlwYWxCdG4iLCJ1c2VSZWYiLCJjYXJ0IiwiYXV0aCIsInVzZUVmZmVjdCIsInBheXBhbCIsIkJ1dHRvbnMiLCJjcmVhdGVPcmRlciIsImRhdGEiLCJhY3Rpb25zIiwib3JkZXIiLCJjcmVhdGUiLCJwdXJjaGFzZV91bml0cyIsImFtb3VudCIsInZhbHVlIiwib25BcHByb3ZlIiwidHlwZSIsInBheWxvYWQiLCJsb2FkaW5nIiwiY2FwdHVyZSIsInRoZW4iLCJkZXRhaWxzIiwicG9zdERhdGEiLCJ0b2tlbiIsInJlcyIsImVyciIsImVycm9yIiwic3VjY2VzcyIsIm1zZyIsInJlbmRlciIsImN1cnJlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFxRDtBQUNSO0FBQ0c7QUFDTDtBQUFBO0FBRTNDLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFTLE9BQThDO0VBQUE7RUFBQSxJQUF6Q0MsS0FBSyxRQUFMQSxLQUFLO0lBQUNDLE9BQU8sUUFBUEEsT0FBTztJQUFDQyxNQUFNLFFBQU5BLE1BQU07SUFBQ0MsS0FBSyxRQUFMQSxLQUFLO0lBQUNDLFFBQVEsUUFBUkEsUUFBUTtFQUNuRCxJQUFNQyxZQUFZLEdBQUdDLG9EQUFNLEVBQUU7RUFDN0IsSUFBTUMsSUFBSSxHQUFPSixLQUFLLENBQWhCSSxJQUFJO0lBQUNDLElBQUksR0FBRUwsS0FBSyxDQUFYSyxJQUFJO0VBQ2ZDLHVEQUFTLENBQUMsWUFBTTtJQUNkQyxNQUFNLENBQUNDLE9BQU8sQ0FBQztNQUNYQyxXQUFXLEVBQUUscUJBQVNDLElBQUksRUFBRUMsT0FBTyxFQUFFO1FBQ25DO1FBQ0EsT0FBT0EsT0FBTyxDQUFDQyxLQUFLLENBQUNDLE1BQU0sQ0FBQztVQUMxQkMsY0FBYyxFQUFFLENBQUM7WUFDZkMsTUFBTSxFQUFFO2NBQ05DLEtBQUssRUFBQ25CO1lBQ1I7VUFDRixDQUFDO1FBQ0gsQ0FBQyxDQUFDO01BQ0osQ0FBQztNQUNEb0IsU0FBUyxFQUFFLG1CQUFTUCxJQUFJLEVBQUVDLE9BQU8sRUFBRTtRQUNqQztRQUNBVixRQUFRLENBQUM7VUFBRWlCLElBQUksRUFBRSxRQUFRO1VBQUVDLE9BQU8sRUFBRTtZQUFDQyxPQUFPLEVBQUU7VUFBSTtRQUFFLENBQUMsQ0FBQztRQUV0RCxPQUFPVCxPQUFPLENBQUNDLEtBQUssQ0FBQ1MsT0FBTyxFQUFFLENBQUNDLElBQUksQ0FBQyxVQUFTQyxPQUFPLEVBQUU7VUFFckRDLGlFQUFRLENBQUMsT0FBTyxFQUFDO1lBQUMxQixPQUFPLEVBQVBBLE9BQU87WUFBQ0MsTUFBTSxFQUFOQSxNQUFNO1lBQUNLLElBQUksRUFBSkEsSUFBSTtZQUFDUCxLQUFLLEVBQUxBO1VBQUssQ0FBQyxFQUFDUSxJQUFJLENBQUNvQixLQUFLLENBQUMsQ0FDdkRILElBQUksQ0FBQyxVQUFBSSxHQUFHLEVBQUU7WUFBRSxJQUFHQSxHQUFHLENBQUNDLEdBQUcsRUFBRSxPQUFPMUIsUUFBUSxDQUFDO2NBQUVpQixJQUFJLEVBQUUsUUFBUTtjQUFFQyxPQUFPLEVBQUU7Z0JBQUNTLEtBQUssRUFBRUYsR0FBRyxDQUFDQztjQUFHO1lBQUUsQ0FBQyxDQUFDO1VBQUEsQ0FBQyxDQUFDO1VBQ3pGMUIsUUFBUSxDQUFDO1lBQUNpQixJQUFJLEVBQUMsVUFBVTtZQUFDQyxPQUFPLEVBQUM7VUFBRSxDQUFDLENBQUM7VUFDdEMsT0FBT2xCLFFBQVEsQ0FBQztZQUFFaUIsSUFBSSxFQUFFLFFBQVE7WUFBRUMsT0FBTyxFQUFFO2NBQUNVLE9BQU8sRUFBRUgsR0FBRyxDQUFDSTtZQUFHO1VBQUUsQ0FBQyxDQUFDO1FBQ2pFLENBQUMsQ0FBQztNQUNKO0lBQ0osQ0FBQyxDQUFDLENBQUNDLE1BQU0sQ0FBQzdCLFlBQVksQ0FBQzhCLE9BQU8sQ0FBQztFQUNuQyxDQUFDLEVBQUMsRUFBRSxDQUFDO0VBQ0gsb0JBQ0k7SUFBSyxHQUFHLEVBQUU5QjtFQUFhO0lBQUE7SUFBQTtJQUFBO0VBQUEsU0FBTztBQUdsQyxDQUFDO0FBQUEsR0FqQ0NOLFNBQVM7QUFrQ0FBLHdFQUFTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhcnQuMDg4OWQzMDhmNTE3MDFhYmNhNjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHBvc3REYXRhIH0gZnJvbSAnLi4vdXRpbHMvZmV0Y2hEYXRhJ1xyXG5pbXBvcnQge0RhdGFDb250ZXh0fSBmcm9tICcuLi9zdG9yZS9HbG9iYWxTdGF0ZSdcclxuaW1wb3J0IHt1cGRhdGVJdGVtfSBmcm9tICcuLi9zdG9yZS9BY3Rpb25zJ1xyXG5cclxuY29uc3QgcGF5cGFsQnRuID0gKHt0b3RhbCxhZGRyZXNzLG1vYmlsZSxzdGF0ZSxkaXNwYXRjaH0pID0+IHtcclxuICAgIGNvbnN0IHJlZlBheXBhbEJ0biA9IHVzZVJlZigpXHJcbiAgICBjb25zdHtjYXJ0LGF1dGh9PXN0YXRlXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBwYXlwYWwuQnV0dG9ucyh7XHJcbiAgICAgICAgICBjcmVhdGVPcmRlcjogZnVuY3Rpb24oZGF0YSwgYWN0aW9ucykge1xyXG4gICAgICAgICAgICAvLyBUaGlzIGZ1bmN0aW9uIHNldHMgdXAgdGhlIGRldGFpbHMgb2YgdGhlIHRyYW5zYWN0aW9uLCBpbmNsdWRpbmcgdGhlIGFtb3VudCBhbmQgbGluZSBpdGVtIGRldGFpbHMuXHJcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb25zLm9yZGVyLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgcHVyY2hhc2VfdW5pdHM6IFt7XHJcbiAgICAgICAgICAgICAgICBhbW91bnQ6IHtcclxuICAgICAgICAgICAgICAgICAgdmFsdWU6dG90YWxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBvbkFwcHJvdmU6IGZ1bmN0aW9uKGRhdGEsIGFjdGlvbnMpIHtcclxuICAgICAgICAgICAgLy8gVGhpcyBmdW5jdGlvbiBjYXB0dXJlcyB0aGUgZnVuZHMgZnJvbSB0aGUgdHJhbnNhY3Rpb24uXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHtsb2FkaW5nOiB0cnVlfSB9KVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbnMub3JkZXIuY2FwdHVyZSgpLnRoZW4oZnVuY3Rpb24oZGV0YWlscykge1xyXG5cclxuICAgICAgICAgICAgIHBvc3REYXRhKCdvcmRlcicse2FkZHJlc3MsbW9iaWxlLGNhcnQsdG90YWx9LGF1dGgudG9rZW4pXHJcbiAgICAgICAgICAgICAudGhlbihyZXM9PnsgaWYocmVzLmVycikgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHtlcnJvcjogcmVzLmVycn0gfSl9KVxyXG4gICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6J0FERF9DQVJUJyxwYXlsb2FkOltdfSlcclxuICAgICAgICAgICAgIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7c3VjY2VzczogcmVzLm1zZ30gfSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0pLnJlbmRlcihyZWZQYXlwYWxCdG4uY3VycmVudCk7XHJcbiAgfSxbXSlcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IHJlZj17cmVmUGF5cGFsQnRufT48L2Rpdj5cclxuICAgIClcclxuICAgIFxyXG4gICAgfVxyXG5leHBvcnQgZGVmYXVsdCBwYXlwYWxCdG4gIl0sInNvdXJjZVJvb3QiOiIifQ==