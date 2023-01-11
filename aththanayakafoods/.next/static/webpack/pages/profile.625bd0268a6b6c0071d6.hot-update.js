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
  var initialSate = {
    avatar: '',
    name: '',
    password: '',
    cf_password: ''
  };
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialSate),
    data = _useState[0],
    setData = _useState[1];
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(DataContext),
    state = _useContext.state,
    dispatch = _useContext.dispatch;
  var auth = state.auth,
    notify = state.notify,
    orders = state.orders;
  var avatar = data.avatar,
    name = data.name,
    password = data.password,
    cf_password = data.cf_password;
  if (!auth.user) return null;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    className: "profile_page",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("title", {
        children: "Profile"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
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
          lineNumber: 24,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: "avatar",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
            src: avatar ? URL.createObjectURL(avatar) : auth.user.avatar,
            alt: "avatar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("span", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("i", {
              className: "fas fa-camera"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
              children: "Change"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
              type: "file",
              name: "file",
              id: "file_up",
              accept: "image/*",
              onChange: changeAvatar
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
            htmlFor: "name",
            children: "Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
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
            lineNumber: 41,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
            htmlFor: "email",
            children: "Email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
            type: "text",
            name: "email",
            defaultValue: auth.user.email,
            className: "form-control",
            disabled: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
            htmlFor: "password",
            children: "New Password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
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
            lineNumber: 53,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
            htmlFor: "cf_password",
            children: "Confirm New Password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
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
            lineNumber: 59,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("button", {
          className: "btn btn-info",
          disabled: notify.loading,
          onClick: handleUpdateProfile,
          children: "Update"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }, _this);
};
_s(Profile, "4MzL6qQN6mNUEYkYQzcRE7MdtbI=");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJQcm9maWxlIiwiaW5pdGlhbFNhdGUiLCJhdmF0YXIiLCJuYW1lIiwicGFzc3dvcmQiLCJjZl9wYXNzd29yZCIsInVzZVN0YXRlIiwiZGF0YSIsInNldERhdGEiLCJ1c2VDb250ZXh0IiwiRGF0YUNvbnRleHQiLCJzdGF0ZSIsImRpc3BhdGNoIiwiYXV0aCIsIm5vdGlmeSIsIm9yZGVycyIsInVzZXIiLCJyb2xlIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiY2hhbmdlQXZhdGFyIiwiaGFuZGxlQ2hhbmdlIiwiZW1haWwiLCJsb2FkaW5nIiwiaGFuZGxlVXBkYXRlUHJvZmlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEI7QUFDMkI7QUFDM0I7QUFDTTtBQUFBO0FBQ2xDLElBQU1BLE9BQU8sR0FBQyxTQUFSQSxPQUFPLEdBQUs7RUFBQTtFQUNkLElBQU1DLFdBQVcsR0FBRztJQUNoQkMsTUFBTSxFQUFFLEVBQUU7SUFDVkMsSUFBSSxFQUFFLEVBQUU7SUFDUkMsUUFBUSxFQUFFLEVBQUU7SUFDWkMsV0FBVyxFQUFFO0VBQ2pCLENBQUM7RUFDRCxnQkFBd0JDLHNEQUFRLENBQUNMLFdBQVcsQ0FBQztJQUF0Q00sSUFBSTtJQUFFQyxPQUFPO0VBQ3BCLGtCQUEwQkMsd0RBQVUsQ0FBQ0MsV0FBVyxDQUFDO0lBQTFDQyxLQUFLLGVBQUxBLEtBQUs7SUFBRUMsUUFBUSxlQUFSQSxRQUFRO0VBQ3RCLElBQVFDLElBQUksR0FBcUJGLEtBQUssQ0FBOUJFLElBQUk7SUFBRUMsTUFBTSxHQUFhSCxLQUFLLENBQXhCRyxNQUFNO0lBQUVDLE1BQU0sR0FBS0osS0FBSyxDQUFoQkksTUFBTTtFQUM1QixJQUFRYixNQUFNLEdBQWtDSyxJQUFJLENBQTVDTCxNQUFNO0lBQUVDLElBQUksR0FBNEJJLElBQUksQ0FBcENKLElBQUk7SUFBRUMsUUFBUSxHQUFr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QUE7WUFBQTtZQUFBO1VBQUEsU0FBNkIsZUFDekQ7WUFBTyxJQUFJLEVBQUMsVUFBVTtZQUFDLElBQUksRUFBQyxhQUFhO1lBQUMsS0FBSyxFQUFFaEIsV0FBWTtZQUFDLFNBQVMsRUFBQyxjQUFjO1lBQ3RGLFdBQVcsRUFBQyxzQkFBc0I7WUFBQyxRQUFRLEVBQUVnQjtVQUFhO1lBQUE7WUFBQTtZQUFBO1VBQUEsU0FBRztRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUEsU0FDM0QsZUFFTjtVQUFRLFNBQVMsRUFBQyxjQUFjO1VBQUMsUUFBUSxFQUFFUCxNQUFNLENBQUNTLE9BQVE7VUFDMUQsT0FBTyxFQUFFQyxtQkFBb0I7VUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUEsU0FFcEI7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQ1A7TUFBQTtNQUFBO01BQUE7SUFBQSxTQUVBO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQUVSO0FBSWQsQ0FBQztBQUFBLEdBdEVLeEIsT0FBTztBQUFBLEtBQVBBLE9BQU87QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuNjI1YmQwMjY4YTZiNmMwMDcxZDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB2YWxpZCBmcm9tICcuLi91dGlscy92YWxpZCdcclxuY29uc3QgUHJvZmlsZT0oKT0+e1xyXG4gICAgY29uc3QgaW5pdGlhbFNhdGUgPSB7XHJcbiAgICAgICAgYXZhdGFyOiAnJyxcclxuICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgY2ZfcGFzc3dvcmQ6ICcnXHJcbiAgICB9XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShpbml0aWFsU2F0ZSlcclxuICAgIGNvbnN0IHtzdGF0ZSwgZGlzcGF0Y2h9ID0gdXNlQ29udGV4dChEYXRhQ29udGV4dClcclxuICAgIGNvbnN0IHsgYXV0aCwgbm90aWZ5LCBvcmRlcnMgfSA9IHN0YXRlXHJcbiAgICBjb25zdCB7IGF2YXRhciwgbmFtZSwgcGFzc3dvcmQsIGNmX3Bhc3N3b3JkIH0gPSBkYXRhXHJcbiAgICBpZighYXV0aC51c2VyKSByZXR1cm4gbnVsbDtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGVfcGFnZVwiPlxyXG4gICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+UHJvZmlsZTwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicm93IHRleHQtc2Vjb25kYXJ5IG15LTNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YXV0aC51c2VyLnJvbGUgPT09ICd1c2VyJyA/ICdVc2VyIFByb2ZpbGUnIDogJ0FkbWluIFByb2ZpbGUnfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXthdmF0YXIgPyBVUkwuY3JlYXRlT2JqZWN0VVJMKGF2YXRhcikgOiBhdXRoLnVzZXIuYXZhdGFyfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiYXZhdGFyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2FtZXJhXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q2hhbmdlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgbmFtZT1cImZpbGVcIiBpZD1cImZpbGVfdXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiIG9uQ2hhbmdlPXtjaGFuZ2VBdmF0YXJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPk5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHZhbHVlPXtuYW1lfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZVwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZW1haWxcIiBkZWZhdWx0VmFsdWU9e2F1dGgudXNlci5lbWFpbH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGRpc2FibGVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPk5ldyBQYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiB2YWx1ZT17cGFzc3dvcmR9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBuZXcgcGFzc3dvcmRcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjZl9wYXNzd29yZFwiPkNvbmZpcm0gTmV3IFBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJjZl9wYXNzd29yZFwiIHZhbHVlPXtjZl9wYXNzd29yZH0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb25maXJtIG5ldyBwYXNzd29yZFwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCIgZGlzYWJsZWQ9e25vdGlmeS5sb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVVwZGF0ZVByb2ZpbGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBVcGRhdGVcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuXHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==