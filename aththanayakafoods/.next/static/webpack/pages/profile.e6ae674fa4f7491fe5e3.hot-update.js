webpackHotUpdate_N_E("pages/profile",{

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_valid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/valid */ "./utils/valid.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\gihanmadhuwantha\\Desktop\\system_Development\\AththanayakaFoods\\aththanayakafoods\\pages\\profile.js",
  _this = undefined,
  _s = $RefreshSig$();





var Profile = function Profile() {
  _s();
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(DataContext),
    state = _useContext.state,
    dispatch = _useContext.dispatch;
  var auth = state.auth,
    notify = state.notify,
    orders = state.orders;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    className: "profile_page",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("title", {
        children: "Profile"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 14
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("section", {
      className: "row text-secondary my-3",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "col-md-4",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h3", {
          className: "text-center text-uppercase",
          children: auth.user.role === 'user' ? 'User Profile' : 'Admin Profile'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: "avatar",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
            src: avatar ? URL.createObjectURL(avatar) : auth.user.avatar,
            alt: "avatar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("span", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("i", {
              className: "fas fa-camera"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
              children: "Change"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
              type: "file",
              name: "file",
              id: "file_up",
              accept: "image/*",
              onChange: changeAvatar
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
            htmlFor: "name",
            children: "Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
            type: "text",
            name: "name",
            value: name,
            className: "form-control",
            placeholder: "Your name",
            onChange: handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
            htmlFor: "email",
            children: "Email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
            type: "text",
            name: "email",
            defaultValue: auth.user.email,
            className: "form-control",
            disabled: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
            htmlFor: "password",
            children: "New Password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
            type: "password",
            name: "password",
            value: password,
            className: "form-control",
            placeholder: "Your new password",
            onChange: handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
            htmlFor: "cf_password",
            children: "Confirm New Password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
            type: "password",
            name: "cf_password",
            value: cf_password,
            className: "form-control",
            placeholder: "Confirm new password",
            onChange: handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("button", {
          className: "btn btn-info",
          disabled: notify.loading,
          onClick: handleUpdateProfile,
          children: "Update"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, _this);
};
_s(Profile, "fbzusV+fmAICL+QC+YSzJO5x4kE=");
_c = Profile;
var _c;
$RefreshReg$(_c, "Profile");

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

/***/ }),

/***/ "./utils/valid.js":
/*!************************!*\
  !*** ./utils/valid.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {var valid = function valid(name, email, password, cf_password) {
  if (!name || !email || !password) return 'Please add all fields.';
  if (!validateEmail(email)) return 'Invalid emails.';
  if (password.length < 6) return 'Password must be at least 6 characters.';
  if (password !== cf_password) return 'Confirm password did not match.';
};
function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
/* harmony default export */ __webpack_exports__["default"] = (valid);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvdmFsaWQuanMiXSwibmFtZXMiOlsiUHJvZmlsZSIsInVzZUNvbnRleHQiLCJEYXRhQ29udGV4dCIsInN0YXRlIiwiZGlzcGF0Y2giLCJhdXRoIiwibm90aWZ5Iiwib3JkZXJzIiwidXNlciIsInJvbGUiLCJhdmF0YXIiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJjaGFuZ2VBdmF0YXIiLCJuYW1lIiwiaGFuZGxlQ2hhbmdlIiwiZW1haWwiLCJwYXNzd29yZCIsImNmX3Bhc3N3b3JkIiwibG9hZGluZyIsImhhbmRsZVVwZGF0ZVByb2ZpbGUiLCJ2YWxpZCIsInZhbGlkYXRlRW1haWwiLCJsZW5ndGgiLCJyZSIsInRlc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRCO0FBQzJCO0FBQzNCO0FBRU07QUFBQTtBQUNsQyxJQUFNQSxPQUFPLEdBQUMsU0FBUkEsT0FBTyxHQUFLO0VBQUE7RUFDZCxrQkFBMEJDLHdEQUFVLENBQUNDLFdBQVcsQ0FBQztJQUExQ0MsS0FBSyxlQUFMQSxLQUFLO0lBQUVDLFFBQVEsZUFBUkEsUUFBUTtFQUN0QixJQUFRQyxJQUFJLEdBQXFCRixLQUFLLENBQTlCRSxJQUFJO0lBQUVDLE1BQU0sR0FBYUgsS0FBSyxDQUF4QkcsTUFBTTtJQUFFQyxNQUFNLEdBQUtKLEtBQUssQ0FBaEJJLE1BQU07RUFDNUIsb0JBQ0k7SUFBSyxTQUFTLEVBQUMsY0FBYztJQUFBLHdCQUN4QixxRUFBQyxnREFBSTtNQUFBLHVCQUNGO1FBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQXNCO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FDbkIsZUFDUDtNQUFTLFNBQVMsRUFBQyx5QkFBeUI7TUFBQSx1QkFDNUM7UUFBSyxTQUFTLEVBQUMsVUFBVTtRQUFBLHdCQUNqQjtVQUFJLFNBQVMsRUFBQyw0QkFBNEI7VUFB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QUFBO1FBQUE7UUFBQTtNQUFBO0lBQ1A7TUFBQTtNQUFBO01BQUE7SUFBQSxTQUVBO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQUVSO0FBSWQsQ0FBQztBQUFBLEdBN0RLcEIsT0FBTztBQUFBLEtBQVBBLE9BQU87QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMYjtBQUFBLGtEQUFNcUIsS0FBSyxHQUFHLFNBQVJBLEtBQUssQ0FBSVAsSUFBSSxFQUFFRSxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsV0FBVyxFQUFLO0VBQ2xELElBQUcsQ0FBQ0osSUFBSSxJQUFJLENBQUNFLEtBQUssSUFBSSxDQUFDQyxRQUFRLEVBQy9CLE9BQU8sd0JBQXdCO0VBRS9CLElBQUcsQ0FBQ0ssYUFBYSxDQUFDTixLQUFLLENBQUMsRUFDeEIsT0FBTyxpQkFBaUI7RUFFeEIsSUFBR0MsUUFBUSxDQUFDTSxNQUFNLEdBQUcsQ0FBQyxFQUN0QixPQUFPLHlDQUF5QztFQUVoRCxJQUFHTixRQUFRLEtBQUtDLFdBQVcsRUFDM0IsT0FBTyxpQ0FBaUM7QUFDNUMsQ0FBQztBQUdELFNBQVNJLGFBQWEsQ0FBQ04sS0FBSyxFQUFFO0VBQzFCLElBQU1RLEVBQUUsR0FBRywySkFBMko7RUFDdEssT0FBT0EsRUFBRSxDQUFDQyxJQUFJLENBQUNULEtBQUssQ0FBQztBQUN6QjtBQUVlSyxvRUFBSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLmU2YWU2NzRmYTRmNzQ5MWZlNWUzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuaW1wb3J0IHZhbGlkIGZyb20gJy4uL3V0aWxzL3ZhbGlkJ1xyXG5jb25zdCBQcm9maWxlPSgpPT57XHJcbiAgICBjb25zdCB7c3RhdGUsIGRpc3BhdGNofSA9IHVzZUNvbnRleHQoRGF0YUNvbnRleHQpXHJcbiAgICBjb25zdCB7IGF1dGgsIG5vdGlmeSwgb3JkZXJzIH0gPSBzdGF0ZVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZV9wYWdlXCI+XHJcbiAgICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5Qcm9maWxlPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyb3cgdGV4dC1zZWNvbmRhcnkgbXktM1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHthdXRoLnVzZXIucm9sZSA9PT0gJ3VzZXInID8gJ1VzZXIgUHJvZmlsZScgOiAnQWRtaW4gUHJvZmlsZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmF0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2F2YXRhciA/IFVSTC5jcmVhdGVPYmplY3RVUkwoYXZhdGFyKSA6IGF1dGgudXNlci5hdmF0YXJ9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJhdmF0YXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jYW1lcmFcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5DaGFuZ2U8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBuYW1lPVwiZmlsZVwiIGlkPVwiZmlsZV91cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCIgb25DaGFuZ2U9e2NoYW5nZUF2YXRhcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+TmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgdmFsdWU9e25hbWV9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJlbWFpbFwiIGRlZmF1bHRWYWx1ZT17YXV0aC51c2VyLmVtYWlsfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+TmV3IFBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHZhbHVlPXtwYXNzd29yZH0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIG5ldyBwYXNzd29yZFwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNmX3Bhc3N3b3JkXCI+Q29uZmlybSBOZXcgUGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cImNmX3Bhc3N3b3JkXCIgdmFsdWU9e2NmX3Bhc3N3b3JkfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbmZpcm0gbmV3IHBhc3N3b3JkXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIiBkaXNhYmxlZD17bm90aWZ5LmxvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlVXBkYXRlUHJvZmlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFVwZGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG5cclxuXHJcbn0iLCJjb25zdCB2YWxpZCA9IChuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIGNmX3Bhc3N3b3JkKSA9PiB7XHJcbiAgICBpZighbmFtZSB8fCAhZW1haWwgfHwgIXBhc3N3b3JkKVxyXG4gICAgcmV0dXJuICdQbGVhc2UgYWRkIGFsbCBmaWVsZHMuJ1xyXG5cclxuICAgIGlmKCF2YWxpZGF0ZUVtYWlsKGVtYWlsKSlcclxuICAgIHJldHVybiAnSW52YWxpZCBlbWFpbHMuJ1xyXG5cclxuICAgIGlmKHBhc3N3b3JkLmxlbmd0aCA8IDYpXHJcbiAgICByZXR1cm4gJ1Bhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzLidcclxuXHJcbiAgICBpZihwYXNzd29yZCAhPT0gY2ZfcGFzc3dvcmQpXHJcbiAgICByZXR1cm4gJ0NvbmZpcm0gcGFzc3dvcmQgZGlkIG5vdCBtYXRjaC4nXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZUVtYWlsKGVtYWlsKSB7XHJcbiAgICBjb25zdCByZSA9IC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSspKil8KFxcXCIuK1xcXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xyXG4gICAgcmV0dXJuIHJlLnRlc3QoZW1haWwpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB2YWxpZCAiXSwic291cmNlUm9vdCI6IiJ9