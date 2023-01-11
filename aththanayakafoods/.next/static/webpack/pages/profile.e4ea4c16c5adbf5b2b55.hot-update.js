webpackHotUpdate_N_E("pages/profile",{

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_valid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/valid */ "./utils/valid.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\gihanmadhuwantha\\Desktop\\system_Development\\AththanayakaFoods\\aththanayakafoods\\pages\\profile.js",
  _this = undefined,
  _s = $RefreshSig$();
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





var Profile = function Profile() {
  _s();
  var initialSate = {
    avatar: '',
    name: '',
    password: '',
    cf_password: ''
  };
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(initialSate),
    data = _useState[0],
    setData = _useState[1];
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(DataContext),
    state = _useContext.state,
    dispatch = _useContext.dispatch;
  var avatar = data.avatar,
    name = data.name,
    password = data.password,
    cf_password = data.cf_password;
  var auth = state.auth,
    notify = state.notify,
    orders = state.orders;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (auth.user) setData(_objectSpread(_objectSpread({}, data), {}, {
      name: auth.user.name
    }));
  }, [auth.user]);
  if (!auth.user) return null;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
    className: "profile_page",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("title", {
        children: "Profile"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 14
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("section", {
      className: "row text-secondary my-3",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        className: "col-md-4",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h3", {
          className: "text-center text-uppercase",
          children: auth.user.role === 'user' ? 'User Profile' : 'Admin Profile'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          className: "avatar",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
            src: auth.user.avatar,
            alt: auth.user.avatar
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("span", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
              className: "fas fa-camera"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
              children: "Change"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("input", {
              type: "file",
              name: "file",
              id: "file_up",
              accept: "image/*",
              onChange: changeAvatar
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("label", {
            htmlFor: "name",
            children: "Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("input", {
            type: "text",
            name: "name",
            value: name,
            className: "form-control",
            placeholder: "Your name",
            onChange: handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("label", {
            htmlFor: "email",
            children: "Email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("input", {
            type: "text",
            name: "email",
            defaultValue: auth.user.email,
            className: "form-control",
            disabled: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("label", {
            htmlFor: "password",
            children: "New Password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("input", {
            type: "password",
            name: "password",
            value: password,
            className: "form-control",
            placeholder: "Your new password",
            onChange: handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("label", {
            htmlFor: "cf_password",
            children: "Confirm New Password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("input", {
            type: "password",
            name: "cf_password",
            value: cf_password,
            className: "form-control",
            placeholder: "Confirm new password",
            onChange: handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("button", {
          className: "btn btn-info",
          disabled: notify.loading,
          onClick: handleUpdateProfile,
          children: "Update"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }, _this);
};
_s(Profile, "Ievd1jeCkb0w9CIRKpbvw/5equk=");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJQcm9maWxlIiwiaW5pdGlhbFNhdGUiLCJhdmF0YXIiLCJuYW1lIiwicGFzc3dvcmQiLCJjZl9wYXNzd29yZCIsInVzZVN0YXRlIiwiZGF0YSIsInNldERhdGEiLCJ1c2VDb250ZXh0IiwiRGF0YUNvbnRleHQiLCJzdGF0ZSIsImRpc3BhdGNoIiwiYXV0aCIsIm5vdGlmeSIsIm9yZGVycyIsInVzZUVmZmVjdCIsInVzZXIiLCJyb2xlIiwiY2hhbmdlQXZhdGFyIiwiaGFuZGxlQ2hhbmdlIiwiZW1haWwiLCJsb2FkaW5nIiwiaGFuZGxlVXBkYXRlUHJvZmlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRCO0FBQzJCO0FBQzNCO0FBQ007QUFBQTtBQUNsQyxJQUFNQSxPQUFPLEdBQUMsU0FBUkEsT0FBTyxHQUFLO0VBQUE7RUFDZCxJQUFNQyxXQUFXLEdBQUc7SUFDaEJDLE1BQU0sRUFBRSxFQUFFO0lBQ1ZDLElBQUksRUFBRSxFQUFFO0lBQ1JDLFFBQVEsRUFBRSxFQUFFO0lBQ1pDLFdBQVcsRUFBRTtFQUNqQixDQUFDO0VBRUQsZ0JBQXdCQyxzREFBUSxDQUFDTCxXQUFXLENBQUM7SUFBdENNLElBQUk7SUFBRUMsT0FBTztFQUNwQixrQkFBMEJDLHdEQUFVLENBQUNDLFdBQVcsQ0FBQztJQUExQ0MsS0FBSyxlQUFMQSxLQUFLO0lBQUVDLFFBQVEsZUFBUkEsUUFBUTtFQUN0QixJQUFRVixNQUFNLEdBQWtDSyxJQUFJLENBQTVDTCxNQUFNO0lBQUVDLElBQUksR0FBNEJJLElBQUksQ0FBcENKLElBQUk7SUFBRUMsUUFBUSxHQUFrQkcsSUFBSSxDQUE5QkgsUUFBUTtJQUFFQyxXQUFXLEdBQUtFLElBQUksQ0FBcEJGLFdBQVc7RUFDM0MsSUFBUVEsSUFBSSxHQUFxQkYsS0FBSyxDQUE5QkUsSUFBSTtJQUFFQyxNQUFNLEdBQWFILEtBQUss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RWdCO1VBQWE7WUFBQTtZQUFBO1lBQUE7VUFBQSxTQUFHO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQSxTQUN4RCxlQUVOO1VBQUssU0FBUyxFQUFDLFlBQVk7VUFBQSx3QkFDdkI7WUFBTyxPQUFPLEVBQUMsYUFBYTtZQUFBO1VBQUE7WUFBQTtZQUFBO1lBQUE7VUFBQSxTQUE2QixlQUN6RDtZQUFPLElBQUksRUFBQyxVQUFVO1lBQUMsSUFBSSxFQUFDLGFBQWE7WUFBQyxLQUFLLEVBQUVmLFdBQVk7WUFBQyxTQUFTLEVBQUMsY0FBYztZQUN0RixXQUFXLEVBQUMsc0JBQXNCO1lBQUMsUUFBUSxFQUFFZTtVQUFhO1lBQUE7WUFBQTtZQUFBO1VBQUEsU0FBRztRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUEsU0FDM0QsZUFFTjtVQUFRLFNBQVMsRUFBQyxjQUFjO1VBQUMsUUFBUSxFQUFFTixNQUFNLENBQUNRLE9BQVE7VUFDMUQsT0FBTyxFQUFFQyxtQkFBb0I7VUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUEsU0FFcEI7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQ1A7TUFBQTtNQUFBO01BQUE7SUFBQSxTQUVBO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQUVSO0FBSWQsQ0FBQztBQUFBLEdBN0VLdkIsT0FBTztBQUFBLEtBQVBBLE9BQU87QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuZTRlYTRjMTZjNWFkYmY1YjJiNTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB2YWxpZCBmcm9tICcuLi91dGlscy92YWxpZCdcclxuY29uc3QgUHJvZmlsZT0oKT0+e1xyXG4gICAgY29uc3QgaW5pdGlhbFNhdGUgPSB7XHJcbiAgICAgICAgYXZhdGFyOiAnJyxcclxuICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgY2ZfcGFzc3dvcmQ6ICcnXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKGluaXRpYWxTYXRlKVxyXG4gICAgY29uc3Qge3N0YXRlLCBkaXNwYXRjaH0gPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KVxyXG4gICAgY29uc3QgeyBhdmF0YXIsIG5hbWUsIHBhc3N3b3JkLCBjZl9wYXNzd29yZCB9ID0gZGF0YVxyXG4gICAgY29uc3QgeyBhdXRoLCBub3RpZnksIG9yZGVycyB9ID0gc3RhdGVcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYoYXV0aC51c2VyKSBzZXREYXRhKHsuLi5kYXRhLCBuYW1lOiBhdXRoLnVzZXIubmFtZX0pXHJcbiAgICB9LFthdXRoLnVzZXJdKVxyXG4gICAgXHJcbiAgIFxyXG4gICAgaWYoIWF1dGgudXNlcikgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZV9wYWdlXCI+XHJcbiAgICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5Qcm9maWxlPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyb3cgdGV4dC1zZWNvbmRhcnkgbXktM1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHthdXRoLnVzZXIucm9sZSA9PT0gJ3VzZXInID8gJ1VzZXIgUHJvZmlsZScgOiAnQWRtaW4gUHJvZmlsZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmF0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9eyBhdXRoLnVzZXIuYXZhdGFyfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXsgYXV0aC51c2VyLmF2YXRhcn0gIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNhbWVyYVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNoYW5nZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJmaWxlXCIgaWQ9XCJmaWxlX3VwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIiBvbkNoYW5nZT17Y2hhbmdlQXZhdGFyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5OYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiB2YWx1ZT17bmFtZX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWVcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImVtYWlsXCIgZGVmYXVsdFZhbHVlPXthdXRoLnVzZXIuZW1haWx9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBkaXNhYmxlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5OZXcgUGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgdmFsdWU9e3Bhc3N3b3JkfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgbmV3IHBhc3N3b3JkXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY2ZfcGFzc3dvcmRcIj5Db25maXJtIE5ldyBQYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwiY2ZfcGFzc3dvcmRcIiB2YWx1ZT17Y2ZfcGFzc3dvcmR9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29uZmlybSBuZXcgcGFzc3dvcmRcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiIGRpc2FibGVkPXtub3RpZnkubG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVVcGRhdGVQcm9maWxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVXBkYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcblxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=