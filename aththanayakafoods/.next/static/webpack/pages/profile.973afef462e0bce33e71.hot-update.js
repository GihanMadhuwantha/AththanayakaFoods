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
/* harmony import */ var _utils_fetchData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/fetchData */ "./utils/fetchData.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);

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
  var handleUpdateProfile = function handleUpdateProfile(e) {
    e.preventDefault();
    if (password) {
      var errMsg = Object(_utils_valid__WEBPACK_IMPORTED_MODULE_4__["default"])(name, auth.user.email, password, cf_password);
      if (errMsg) return dispatch({
        type: 'NOTIFY',
        payload: {
          error: errMsg
        }
      });
      updatePassword();
    }
    if (name !== auth.user.name || avatar) updateInfor();
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
  var updatePassword = function updatePassword() {
    dispatch({
      type: 'NOTIFY',
      payload: {
        loading: true
      }
    });
    Object(_utils_fetchData__WEBPACK_IMPORTED_MODULE_6__["patchData"])('user/resetPassword', {
      password: password
    }, auth.token).then(function (res) {
      if (res.err) return dispatch({
        type: 'NOTIFY',
        payload: {
          error: res.err
        }
      });
      return dispatch({
        type: 'NOTIFY',
        payload: {
          success: res.msg
        }
      });
    });
  };
  if (!auth.user) return null;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
    className: "profile_page",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("title", {
        children: "Profile"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 14
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("section", {
      className: "row text-secondary my-3",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        className: "col-md-4",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h3", {
          className: "text-center text-uppercase",
          children: auth.user.role === 'user' ? 'User Profile' : 'Admin Profile'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "avatar",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("img", {
            src: avatar ? URL.createObjectURL(avatar) : auth.user.avatar,
            alt: "avatar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("i", {
              className: "fas fa-camera"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("p", {
              children: "Change"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
              type: "file",
              name: "file",
              id: "file_up",
              accept: "image/*",
              onChange: changeAvatar
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("label", {
            htmlFor: "name",
            children: "Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
            type: "text",
            name: "name",
            value: name,
            className: "form-control",
            placeholder: "Your name",
            onChange: handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("label", {
            htmlFor: "email",
            children: "Email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
            type: "text",
            name: "email",
            defaultValue: auth.user.email,
            className: "form-control",
            disabled: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("label", {
            htmlFor: "password",
            children: "New Password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
            type: "password",
            name: "password",
            value: password,
            className: "form-control",
            placeholder: "Your new password",
            onChange: handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("label", {
            htmlFor: "cf_password",
            children: "Confirm New Password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
            type: "password",
            name: "cf_password",
            value: cf_password,
            className: "form-control",
            placeholder: "Confirm new password",
            onChange: handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
          className: "btn btn-info",
          disabled: notify.loading,
          onClick: handleUpdateProfile,
          children: "Update"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 66,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJQcm9maWxlIiwiaW5pdGlhbFNhdGUiLCJhdmF0YXIiLCJuYW1lIiwicGFzc3dvcmQiLCJjZl9wYXNzd29yZCIsInVzZVN0YXRlIiwiZGF0YSIsInNldERhdGEiLCJ1c2VDb250ZXh0IiwiRGF0YUNvbnRleHQiLCJzdGF0ZSIsImRpc3BhdGNoIiwiYXV0aCIsIm5vdGlmeSIsIm9yZGVycyIsInVzZUVmZmVjdCIsInVzZXIiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ0eXBlIiwicGF5bG9hZCIsImhhbmRsZVVwZGF0ZVByb2ZpbGUiLCJwcmV2ZW50RGVmYXVsdCIsImVyck1zZyIsInZhbGlkIiwiZW1haWwiLCJlcnJvciIsInVwZGF0ZVBhc3N3b3JkIiwidXBkYXRlSW5mb3IiLCJjaGFuZ2VBdmF0YXIiLCJmaWxlIiwiZmlsZXMiLCJzaXplIiwibG9hZGluZyIsInBhdGNoRGF0YSIsInRva2VuIiwidGhlbiIsInJlcyIsImVyciIsInN1Y2Nlc3MiLCJtc2ciLCJyb2xlIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QjtBQUMyQjtBQUMzQjtBQUNNO0FBQ2dCO0FBQ0o7QUFBQTtBQUM5QyxJQUFNQSxPQUFPLEdBQUMsU0FBUkEsT0FBTyxHQUFLO0VBQUE7RUFDZCxJQUFNQyxXQUFXLEdBQUc7SUFDaEJDLE1BQU0sRUFBRSxFQUFFO0lBQ1ZDLElBQUksRUFBRSxFQUFFO0lBQ1JDLFFBQVEsRUFBRSxFQUFFO0lBQ1pDLFdBQVcsRUFBRTtFQUNqQixDQUFDO0VBRUQsZ0JBQXdCQyxzREFBUSxDQUFDTCxXQUFXLENBQUM7SUFBdENNLElBQUk7SUFBRUMsT0FBTztFQUNwQixrQkFBMEJDLHdEQUFVLENBQUNDLDhEQUFXLENBQUM7SUFBMUNDLEtBQUssZUFBTEEsS0FBSztJQUFF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bGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLjk3M2FmZWY0NjJlMGJjZTMzZTcxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgdmFsaWQgZnJvbSAnLi4vdXRpbHMvdmFsaWQnXHJcbmltcG9ydCB7IERhdGFDb250ZXh0IH0gZnJvbSAnLi4vc3RvcmUvR2xvYmFsU3RhdGUnXHJcbmltcG9ydCB7IHBhdGNoRGF0YSB9IGZyb20gJy4uL3V0aWxzL2ZldGNoRGF0YSdcclxuY29uc3QgUHJvZmlsZT0oKT0+e1xyXG4gICAgY29uc3QgaW5pdGlhbFNhdGUgPSB7XHJcbiAgICAgICAgYXZhdGFyOiAnJyxcclxuICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgY2ZfcGFzc3dvcmQ6ICcnXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKGluaXRpYWxTYXRlKVxyXG4gICAgY29uc3Qge3N0YXRlLCBkaXNwYXRjaH0gPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KVxyXG4gICAgY29uc3QgeyBhdmF0YXIsIG5hbWUsIHBhc3N3b3JkLCBjZl9wYXNzd29yZCB9ID0gZGF0YVxyXG4gICAgY29uc3QgeyBhdXRoLCBub3RpZnksIG9yZGVycyB9ID0gc3RhdGVcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihhdXRoLnVzZXIpIHNldERhdGEoey4uLmRhdGEsIG5hbWU6IGF1dGgudXNlci5uYW1lfSlcclxuICAgIH0sW2F1dGgudXNlcl0pXHJcbiAgICBcclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXRcclxuICAgICAgICBzZXREYXRhKHsuLi5kYXRhLCBbbmFtZV06dmFsdWV9KVxyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHt9IH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlVXBkYXRlUHJvZmlsZSA9IGUgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGlmKHBhc3N3b3JkKXtcclxuICAgICAgICAgICAgY29uc3QgZXJyTXNnID0gdmFsaWQobmFtZSwgYXV0aC51c2VyLmVtYWlsLCBwYXNzd29yZCwgY2ZfcGFzc3dvcmQpXHJcbiAgICAgICAgICAgIGlmKGVyck1zZykgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHtlcnJvcjogZXJyTXNnfSB9KVxyXG4gICAgICAgICAgICB1cGRhdGVQYXNzd29yZCgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihuYW1lICE9PSBhdXRoLnVzZXIubmFtZSB8fCBhdmF0YXIpIHVwZGF0ZUluZm9yKClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaGFuZ2VBdmF0YXIgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXVxyXG4gICAgICAgIGlmKCFmaWxlKVxyXG4gICAgICAgICAgICByZXR1cm4gZGlzcGF0Y2goe3R5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7ZXJyb3I6ICdGaWxlIGRvZXMgbm90IGV4aXN0Lid9fSlcclxuXHJcbiAgICAgICAgaWYoZmlsZS5zaXplID4gMTAyNCAqIDEwMjQpIC8vMW1iXHJcbiAgICAgICAgICAgIHJldHVybiBkaXNwYXRjaCh7dHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHtlcnJvcjogJ1RoZSBsYXJnZXN0IGltYWdlIHNpemUgaXMgMW1iLid9fSlcclxuXHJcbiAgICAgICAgaWYoZmlsZS50eXBlICE9PSBcImltYWdlL2pwZWdcIiAmJiBmaWxlLnR5cGUgIT09IFwiaW1hZ2UvcG5nXCIpIC8vMW1iXHJcbiAgICAgICAgICAgIHJldHVybiBkaXNwYXRjaCh7dHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHtlcnJvcjogJ0ltYWdlIGZvcm1hdCBpcyBpbmNvcnJlY3QuJ319KVxyXG4gICAgICAgIFxyXG4gICAgICAgIHNldERhdGEoey4uLmRhdGEsIGF2YXRhcjogZmlsZX0pXHJcbiAgICB9XHJcbiAgICBjb25zdCB1cGRhdGVQYXNzd29yZCA9ICgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7bG9hZGluZzogdHJ1ZX0gfSlcclxuICAgICAgICBwYXRjaERhdGEoJ3VzZXIvcmVzZXRQYXNzd29yZCcsIHtwYXNzd29yZH0sIGF1dGgudG9rZW4pXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgaWYocmVzLmVycikgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHtlcnJvcjogcmVzLmVycn0gfSlcclxuICAgICAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHtzdWNjZXNzOiByZXMubXNnfSB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgIFxyXG4gICAgaWYoIWF1dGgudXNlcikgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZV9wYWdlXCI+XHJcbiAgICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5Qcm9maWxlPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyb3cgdGV4dC1zZWNvbmRhcnkgbXktM1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHthdXRoLnVzZXIucm9sZSA9PT0gJ3VzZXInID8gJ1VzZXIgUHJvZmlsZScgOiAnQWRtaW4gUHJvZmlsZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmF0YXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YXZhdGFyID8gVVJMLmNyZWF0ZU9iamVjdFVSTChhdmF0YXIpIDogYXV0aC51c2VyLmF2YXRhcn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImF2YXRhclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNhbWVyYVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNoYW5nZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJmaWxlXCIgaWQ9XCJmaWxlX3VwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIiBvbkNoYW5nZT17Y2hhbmdlQXZhdGFyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5OYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiB2YWx1ZT17bmFtZX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWVcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImVtYWlsXCIgZGVmYXVsdFZhbHVlPXthdXRoLnVzZXIuZW1haWx9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBkaXNhYmxlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5OZXcgUGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgdmFsdWU9e3Bhc3N3b3JkfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgbmV3IHBhc3N3b3JkXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY2ZfcGFzc3dvcmRcIj5Db25maXJtIE5ldyBQYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwiY2ZfcGFzc3dvcmRcIiB2YWx1ZT17Y2ZfcGFzc3dvcmR9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29uZmlybSBuZXcgcGFzc3dvcmRcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiIGRpc2FibGVkPXtub3RpZnkubG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVVcGRhdGVQcm9maWxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVXBkYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcblxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlIl0sInNvdXJjZVJvb3QiOiIifQ==