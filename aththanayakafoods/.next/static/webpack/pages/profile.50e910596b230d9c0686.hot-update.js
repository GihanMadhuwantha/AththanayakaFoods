webpackHotUpdate_N_E("pages/profile",{

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/*! exports provided: default */
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
/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/GlobalState */ "./store/GlobalState.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);

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
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_store_GlobalState__WEBPACK_IMPORTED_MODULE_5__["DataContext"]),
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
  var handleChange = function handleChange(e) {
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value;
    setData(_objectSpread(_objectSpread({}, data), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, value)));
    dispatch({
      type: 'NOTIFY',
      payload: {}
    });
  };
  var changeAvatar = function changeAvatar(e) {
    var file = e.target.files[0];
    if (!file) return dispatch({
      type: 'NOTIFY',
      payload: {
        error: 'File does not exist.'
      }
    });
    if (file.size > 1024 * 1024)
      //1mb
      return dispatch({
        type: 'NOTIFY',
        payload: {
          error: 'The largest image size is 1mb.'
        }
      });
    if (file.type !== "image/jpeg" && file.type !== "image/png")
      //1mb
      return dispatch({
        type: 'NOTIFY',
        payload: {
          error: 'Image format is incorrect.'
        }
      });
    setData(_objectSpread(_objectSpread({}, data), {}, {
      avatar: file
    }));
  };
  if (!auth.user) return null;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
    className: "profile_page",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("title", {
        children: "Profile"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 14
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("section", {
      className: "row text-secondary my-3",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        className: "col-md-4",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h3", {
          className: "text-center text-uppercase",
          children: auth.user.role === 'user' ? 'User Profile' : 'Admin Profile'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          className: "avatar",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("img", {
            src: auth.user.avatar,
            alt: auth.user.avatar
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("span", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("i", {
              className: "fas fa-camera"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
              children: "Change"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("input", {
              type: "file",
              name: "file",
              id: "file_up",
              accept: "image/*",
              onChange: changeAvatar
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("label", {
            htmlFor: "name",
            children: "Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("input", {
            type: "text",
            name: "name",
            value: name,
            className: "form-control",
            placeholder: "Your name",
            onChange: handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("label", {
            htmlFor: "email",
            children: "Email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("input", {
            type: "text",
            name: "email",
            defaultValue: auth.user.email,
            className: "form-control",
            disabled: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("label", {
            htmlFor: "password",
            children: "New Password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("input", {
            type: "password",
            name: "password",
            value: password,
            className: "form-control",
            placeholder: "Your new password",
            onChange: handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("label", {
            htmlFor: "cf_password",
            children: "Confirm New Password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("input", {
            type: "password",
            name: "cf_password",
            value: cf_password,
            className: "form-control",
            placeholder: "Confirm new password",
            onChange: handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("button", {
          className: "btn btn-info",
          disabled: notify.loading,
          onClick: handleUpdateProfile,
          children: "Update"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 9
  }, _this);
};
_s(Profile, "Ievd1jeCkb0w9CIRKpbvw/5equk=");
_c = Profile;
/* harmony default export */ __webpack_exports__["default"] = (Profile);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJQcm9maWxlIiwiaW5pdGlhbFNhdGUiLCJhdmF0YXIiLCJuYW1lIiwicGFzc3dvcmQiLCJjZl9wYXNzd29yZCIsInVzZVN0YXRlIiwiZGF0YSIsInNldERhdGEiLCJ1c2VDb250ZXh0IiwiRGF0YUNvbnRleHQiLCJzdGF0ZSIsImRpc3BhdGNoIiwiYXV0aCIsIm5vdGlmeSIsIm9yZGVycyIsInVzZUVmZmVjdCIsInVzZXIiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ0eXBlIiwicGF5bG9hZCIsImNoYW5nZUF2YXRhciIsImZpbGUiLCJmaWxlcyIsImVycm9yIiwic2l6ZSIsInJvbGUiLCJlbWFpbCIsImxvYWRpbmciLCJoYW5kbGVVcGRhdGVQcm9maWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRCO0FBQzJCO0FBQzNCO0FBQ007QUFDZ0I7QUFBQTtBQUNsRCxJQUFNQSxPQUFPLEdBQUMsU0FBUkEsT0FBTyxHQUFLO0VBQUE7RUFDZCxJQUFNQyxXQUFXLEdBQUc7SUFDaEJDLE1BQU0sRUFBRSxFQUFFO0lBQ1ZDLElBQUksRUFBRSxFQUFFO0lBQ1JDLFFBQVEsRUFBRSxFQUFFO0lBQ1pDLFdBQVcsRUFBRTtFQUNqQixDQUFDO0VBRUQsZ0JBQXdCQyxzREFBUSxDQUFDTCxXQUFXLENBQUM7SUFBdENNLElBQUk7SUFBRUMsT0FBTztFQUNwQixrQkFBMEJDLHdEQUFVLENBQUNDLDhEQUFXLENBQUM7SUFBMUNDLEtBQUssZUFBTEEsS0FBSztJQUFFQyxRQUFRLGVBQVJBLFFBQVE7RUFDdEIsSUFBUVYsTUFBTSxHQUFrQ0ssSUFBSSxDQUE1Q0wsTUFBTTtJQUFFQyxJQUFJLEdBQTRCSSxJQUFJLENBQXBDSixJQUFJO0lBQUVDLFFBQVEsR0FBa0JHLElBQUksQ0FBOUJILFFBQVE7SUFBRUMsV0FBVyxHQUFLRSxJQUFJ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QUMsU0FBUyxFQUFDLGNBQWM7WUFDaEYsV0FBVyxFQUFDLG1CQUFtQjtZQUFDLFFBQVEsRUFBRWM7VUFBYTtZQUFBO1lBQUE7WUFBQTtVQUFBLFNBQUc7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBLFNBQ3hELGVBRU47VUFBSyxTQUFTLEVBQUMsWUFBWTtVQUFBLHdCQUN2QjtZQUFPLE9BQU8sRUFBQyxhQUFhO1lBQUE7VUFBQTtZQUFBO1lBQUE7WUFBQTtVQUFBLFNBQTZCLGVBQ3pEO1lBQU8sSUFBSSxFQUFDLFVBQVU7WUFBQyxJQUFJLEVBQUMsYUFBYTtZQUFDLEtBQUssRUFBRWIsV0FBWTtZQUFDLFNBQVMsRUFBQyxjQUFjO1lBQ3RGLFdBQVcsRUFBQyxzQkFBc0I7WUFBQyxRQUFRLEVBQUVhO1VBQWE7WUFBQTtZQUFBO1lBQUE7VUFBQSxTQUFHO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQSxTQUMzRCxlQUVOO1VBQVEsU0FBUyxFQUFDLGNBQWM7VUFBQyxRQUFRLEVBQUVKLE1BQU0sQ0FBQ2lCLE9BQVE7VUFDMUQsT0FBTyxFQUFFQyxtQkFBb0I7VUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUEsU0FFcEI7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQ1A7TUFBQTtNQUFBO01BQUE7SUFBQSxTQUVBO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQUVSO0FBSWQsQ0FBQztBQUFBLEdBakdLaEMsT0FBTztBQUFBLEtBQVBBLE9BQU87QUFrR0VBLHNFQUFPO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLjUwZTkxMDU5NmIyMzBkOWMwNjg2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgdmFsaWQgZnJvbSAnLi4vdXRpbHMvdmFsaWQnXHJcbmltcG9ydCB7IERhdGFDb250ZXh0IH0gZnJvbSAnLi4vc3RvcmUvR2xvYmFsU3RhdGUnXHJcbmNvbnN0IFByb2ZpbGU9KCk9PntcclxuICAgIGNvbnN0IGluaXRpYWxTYXRlID0ge1xyXG4gICAgICAgIGF2YXRhcjogJycsXHJcbiAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgIGNmX3Bhc3N3b3JkOiAnJ1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShpbml0aWFsU2F0ZSlcclxuICAgIGNvbnN0IHtzdGF0ZSwgZGlzcGF0Y2h9ID0gdXNlQ29udGV4dChEYXRhQ29udGV4dClcclxuICAgIGNvbnN0IHsgYXZhdGFyLCBuYW1lLCBwYXNzd29yZCwgY2ZfcGFzc3dvcmQgfSA9IGRhdGFcclxuICAgIGNvbnN0IHsgYXV0aCwgbm90aWZ5LCBvcmRlcnMgfSA9IHN0YXRlXHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYoYXV0aC51c2VyKSBzZXREYXRhKHsuLi5kYXRhLCBuYW1lOiBhdXRoLnVzZXIubmFtZX0pXHJcbiAgICB9LFthdXRoLnVzZXJdKVxyXG4gICAgXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0XHJcbiAgICAgICAgc2V0RGF0YSh7Li4uZGF0YSwgW25hbWVdOnZhbHVlfSlcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7fSB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoYW5nZUF2YXRhciA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdXHJcbiAgICAgICAgaWYoIWZpbGUpXHJcbiAgICAgICAgICAgIHJldHVybiBkaXNwYXRjaCh7dHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHtlcnJvcjogJ0ZpbGUgZG9lcyBub3QgZXhpc3QuJ319KVxyXG5cclxuICAgICAgICBpZihmaWxlLnNpemUgPiAxMDI0ICogMTAyNCkgLy8xbWJcclxuICAgICAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHt0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge2Vycm9yOiAnVGhlIGxhcmdlc3QgaW1hZ2Ugc2l6ZSBpcyAxbWIuJ319KVxyXG5cclxuICAgICAgICBpZihmaWxlLnR5cGUgIT09IFwiaW1hZ2UvanBlZ1wiICYmIGZpbGUudHlwZSAhPT0gXCJpbWFnZS9wbmdcIikgLy8xbWJcclxuICAgICAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHt0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge2Vycm9yOiAnSW1hZ2UgZm9ybWF0IGlzIGluY29ycmVjdC4nfX0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgc2V0RGF0YSh7Li4uZGF0YSwgYXZhdGFyOiBmaWxlfSlcclxuICAgIH1cclxuICAgXHJcbiAgICBpZighYXV0aC51c2VyKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlX3BhZ2VcIj5cclxuICAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPlByb2ZpbGU8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJvdyB0ZXh0LXNlY29uZGFyeSBteS0zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC11cHBlcmNhc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2F1dGgudXNlci5yb2xlID09PSAndXNlcicgPyAnVXNlciBQcm9maWxlJyA6ICdBZG1pbiBQcm9maWxlJ31cclxuICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17IGF1dGgudXNlci5hdmF0YXJ9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9eyBhdXRoLnVzZXIuYXZhdGFyfSAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2FtZXJhXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q2hhbmdlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgbmFtZT1cImZpbGVcIiBpZD1cImZpbGVfdXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiIG9uQ2hhbmdlPXtjaGFuZ2VBdmF0YXJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPk5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHZhbHVlPXtuYW1lfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZVwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZW1haWxcIiBkZWZhdWx0VmFsdWU9e2F1dGgudXNlci5lbWFpbH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGRpc2FibGVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPk5ldyBQYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiB2YWx1ZT17cGFzc3dvcmR9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBuZXcgcGFzc3dvcmRcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjZl9wYXNzd29yZFwiPkNvbmZpcm0gTmV3IFBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJjZl9wYXNzd29yZFwiIHZhbHVlPXtjZl9wYXNzd29yZH0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb25maXJtIG5ldyBwYXNzd29yZFwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCIgZGlzYWJsZWQ9e25vdGlmeS5sb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVVwZGF0ZVByb2ZpbGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBVcGRhdGVcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuXHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGUiXSwic291cmNlUm9vdCI6IiJ9