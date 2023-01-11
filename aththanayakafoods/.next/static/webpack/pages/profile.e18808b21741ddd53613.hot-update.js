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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJQcm9maWxlIiwidXNlQ29udGV4dCIsIkRhdGFDb250ZXh0Iiwic3RhdGUiLCJkaXNwYXRjaCIsImF1dGgiLCJub3RpZnkiLCJvcmRlcnMiLCJ1c2VyIiwicm9sZSIsImF2YXRhciIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImNoYW5nZUF2YXRhciIsIm5hbWUiLCJoYW5kbGVDaGFuZ2UiLCJlbWFpbCIsInBhc3N3b3JkIiwiY2ZfcGFzc3dvcmQiLCJsb2FkaW5nIiwiaGFuZGxlVXBkYXRlUHJvZmlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEI7QUFDMkI7QUFDM0I7QUFDTTtBQUFBO0FBQ2xDLElBQU1BLE9BQU8sR0FBQyxTQUFSQSxPQUFPLEdBQUs7RUFBQTtFQUVkLGtCQUEwQkMsd0RBQVUsQ0FBQ0MsV0FBVyxDQUFDO0lBQTFDQyxLQUFLLGVBQUxBLEtBQUs7SUFBRUMsUUFBUSxlQUFSQSxRQUFRO0VBQ3RCLElBQVFDLElBQUksR0FBcUJGLEtBQUssQ0FBOUJFLElBQUk7SUFBRUMsTUFBTSxHQUFhSCxLQUFLLENBQXhCRyxNQUFNO0lBQUVDLE1BQU0sR0FBS0osS0FBSyxDQUFoQkksTUFBTTtFQUM1QixvQkFDSTtJQUFLLFNBQVMsRUFBQyxjQUFjO0lBQUEsd0JBQ3hCLHFFQUFDLGdEQUFJO01BQUEsdUJBQ0Y7UUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBc0I7TUFBQTtNQUFBO01BQUE7SUFBQSxTQUNuQixlQUNQO01BQVMsU0FBUyxFQUFDLHlCQUF5QjtNQUFBLHVCQUM1QztRQUFLLFNBQVMsRUFBQyxVQUFVO1FBQUEsd0JBQ2pCO1VBQUksU0FBUyxFQUFDLDRCQUE0QjtVQUFBLFVBQ3JDRixJQUFJLENBQUNHLElBQUksQ0FBQ0MsSUFBSSxLQUFLLE1BQU0sR0FBRyxjQUFjLEdBQUc7UUFBZTtVQUFBO1VBQUE7VUFB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QUFJZCxDQUFDO0FBQUEsR0E5REtwQixPQUFPO0FBQUEsS0FBUEEsT0FBTztBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS5lMTg4MDhiMjE3NDFkZGQ1MzYxMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHZhbGlkIGZyb20gJy4uL3V0aWxzL3ZhbGlkJ1xyXG5jb25zdCBQcm9maWxlPSgpPT57XHJcbiAgICBcclxuICAgIGNvbnN0IHtzdGF0ZSwgZGlzcGF0Y2h9ID0gdXNlQ29udGV4dChEYXRhQ29udGV4dClcclxuICAgIGNvbnN0IHsgYXV0aCwgbm90aWZ5LCBvcmRlcnMgfSA9IHN0YXRlXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlX3BhZ2VcIj5cclxuICAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPlByb2ZpbGU8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJvdyB0ZXh0LXNlY29uZGFyeSBteS0zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC11cHBlcmNhc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2F1dGgudXNlci5yb2xlID09PSAndXNlcicgPyAnVXNlciBQcm9maWxlJyA6ICdBZG1pbiBQcm9maWxlJ31cclxuICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YXZhdGFyID8gVVJMLmNyZWF0ZU9iamVjdFVSTChhdmF0YXIpIDogYXV0aC51c2VyLmF2YXRhcn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImF2YXRhclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNhbWVyYVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNoYW5nZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJmaWxlXCIgaWQ9XCJmaWxlX3VwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIiBvbkNoYW5nZT17Y2hhbmdlQXZhdGFyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5OYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiB2YWx1ZT17bmFtZX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWVcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImVtYWlsXCIgZGVmYXVsdFZhbHVlPXthdXRoLnVzZXIuZW1haWx9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBkaXNhYmxlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5OZXcgUGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgdmFsdWU9e3Bhc3N3b3JkfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgbmV3IHBhc3N3b3JkXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY2ZfcGFzc3dvcmRcIj5Db25maXJtIE5ldyBQYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwiY2ZfcGFzc3dvcmRcIiB2YWx1ZT17Y2ZfcGFzc3dvcmR9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29uZmlybSBuZXcgcGFzc3dvcmRcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiIGRpc2FibGVkPXtub3RpZnkubG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVVcGRhdGVQcm9maWxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVXBkYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcblxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=