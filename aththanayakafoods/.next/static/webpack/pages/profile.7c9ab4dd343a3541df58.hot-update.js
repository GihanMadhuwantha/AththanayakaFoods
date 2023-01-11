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
    patchData('user/resetPassword', {
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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
    className: "profile_page",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("title", {
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
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("section", {
      className: "row text-secondary my-3",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        className: "col-md-4",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h3", {
          className: "text-center text-uppercase",
          children: auth.user.role === 'user' ? 'User Profile' : 'Admin Profile'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          className: "avatar",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("img", {
            src: avatar ? URL.createObjectURL(avatar) : auth.user.avatar,
            alt: "avatar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("span", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("i", {
              className: "fas fa-camera"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
              children: "Change"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("input", {
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
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("label", {
            htmlFor: "name",
            children: "Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
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
            lineNumber: 89,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("label", {
            htmlFor: "email",
            children: "Email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("input", {
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
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("label", {
            htmlFor: "password",
            children: "New Password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
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
            lineNumber: 101,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("label", {
            htmlFor: "cf_password",
            children: "Confirm New Password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
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
            lineNumber: 107,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("button", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJQcm9maWxlIiwiaW5pdGlhbFNhdGUiLCJhdmF0YXIiLCJuYW1lIiwicGFzc3dvcmQiLCJjZl9wYXNzd29yZCIsInVzZVN0YXRlIiwiZGF0YSIsInNldERhdGEiLCJ1c2VDb250ZXh0IiwiRGF0YUNvbnRleHQiLCJzdGF0ZSIsImRpc3BhdGNoIiwiYXV0aCIsIm5vdGlmeSIsIm9yZGVycyIsInVzZUVmZmVjdCIsInVzZXIiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ0eXBlIiwicGF5bG9hZCIsImhhbmRsZVVwZGF0ZVByb2ZpbGUiLCJwcmV2ZW50RGVmYXVsdCIsImVyck1zZyIsInZhbGlkIiwiZW1haWwiLCJlcnJvciIsInVwZGF0ZVBhc3N3b3JkIiwidXBkYXRlSW5mb3IiLCJjaGFuZ2VBdmF0YXIiLCJmaWxlIiwiZmlsZXMiLCJzaXplIiwibG9hZGluZyIsInBhdGNoRGF0YSIsInRva2VuIiwidGhlbiIsInJlcyIsImVyciIsInN1Y2Nlc3MiLCJtc2ciLCJyb2xlIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRCO0FBQzJCO0FBQzNCO0FBQ007QUFDZ0I7QUFBQTtBQUVsRCxJQUFNQSxPQUFPLEdBQUMsU0FBUkEsT0FBTyxHQUFLO0VBQUE7RUFDZCxJQUFNQyxXQUFXLEdBQUc7SUFDaEJDLE1BQU0sRUFBRSxFQUFFO0lBQ1ZDLElBQUksRUFBRSxFQUFFO0lBQ1JDLFFBQVEsRUFBRSxFQUFFO0lBQ1pDLFdBQVcsRUFBRTtFQUNqQixDQUFDO0VBRUQsZ0JBQXdCQyxzREFBUSxDQUFDTCxXQUFXLENBQUM7SUFBdENNLElBQUk7SUFBRUMsT0FBTztFQUNwQixrQkFBMEJDLHdEQUFVLENBQUNDLDhEQUFXLENBQUM7SUFBMUNDLEtBQUssZUFBTEEsS0FBSztJQUFFQyxRQUFR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YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuN2M5YWI0ZGQzNDNhMzU0MWRmNTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB2YWxpZCBmcm9tICcuLi91dGlscy92YWxpZCdcclxuaW1wb3J0IHsgRGF0YUNvbnRleHQgfSBmcm9tICcuLi9zdG9yZS9HbG9iYWxTdGF0ZSdcclxuXHJcbmNvbnN0IFByb2ZpbGU9KCk9PntcclxuICAgIGNvbnN0IGluaXRpYWxTYXRlID0ge1xyXG4gICAgICAgIGF2YXRhcjogJycsXHJcbiAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgIGNmX3Bhc3N3b3JkOiAnJ1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShpbml0aWFsU2F0ZSlcclxuICAgIGNvbnN0IHtzdGF0ZSwgZGlzcGF0Y2h9ID0gdXNlQ29udGV4dChEYXRhQ29udGV4dClcclxuICAgIGNvbnN0IHsgYXZhdGFyLCBuYW1lLCBwYXNzd29yZCwgY2ZfcGFzc3dvcmQgfSA9IGRhdGFcclxuICAgIGNvbnN0IHsgYXV0aCwgbm90aWZ5LCBvcmRlcnMgfSA9IHN0YXRlXHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYoYXV0aC51c2VyKSBzZXREYXRhKHsuLi5kYXRhLCBuYW1lOiBhdXRoLnVzZXIubmFtZX0pXHJcbiAgICB9LFthdXRoLnVzZXJdKVxyXG4gICAgXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0XHJcbiAgICAgICAgc2V0RGF0YSh7Li4uZGF0YSwgW25hbWVdOnZhbHVlfSlcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7fSB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVVwZGF0ZVByb2ZpbGUgPSBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBpZihwYXNzd29yZCl7XHJcbiAgICAgICAgICAgIGNvbnN0IGVyck1zZyA9IHZhbGlkKG5hbWUsIGF1dGgudXNlci5lbWFpbCwgcGFzc3dvcmQsIGNmX3Bhc3N3b3JkKVxyXG4gICAgICAgICAgICBpZihlcnJNc2cpIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7ZXJyb3I6IGVyck1zZ30gfSlcclxuICAgICAgICAgICAgdXBkYXRlUGFzc3dvcmQoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYobmFtZSAhPT0gYXV0aC51c2VyLm5hbWUgfHwgYXZhdGFyKSB1cGRhdGVJbmZvcigpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2hhbmdlQXZhdGFyID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF1cclxuICAgICAgICBpZighZmlsZSlcclxuICAgICAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHt0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge2Vycm9yOiAnRmlsZSBkb2VzIG5vdCBleGlzdC4nfX0pXHJcblxyXG4gICAgICAgIGlmKGZpbGUuc2l6ZSA+IDEwMjQgKiAxMDI0KSAvLzFtYlxyXG4gICAgICAgICAgICByZXR1cm4gZGlzcGF0Y2goe3R5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7ZXJyb3I6ICdUaGUgbGFyZ2VzdCBpbWFnZSBzaXplIGlzIDFtYi4nfX0pXHJcblxyXG4gICAgICAgIGlmKGZpbGUudHlwZSAhPT0gXCJpbWFnZS9qcGVnXCIgJiYgZmlsZS50eXBlICE9PSBcImltYWdlL3BuZ1wiKSAvLzFtYlxyXG4gICAgICAgICAgICByZXR1cm4gZGlzcGF0Y2goe3R5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7ZXJyb3I6ICdJbWFnZSBmb3JtYXQgaXMgaW5jb3JyZWN0Lid9fSlcclxuICAgICAgICBcclxuICAgICAgICBzZXREYXRhKHsuLi5kYXRhLCBhdmF0YXI6IGZpbGV9KVxyXG4gICAgfVxyXG4gICAgY29uc3QgdXBkYXRlUGFzc3dvcmQgPSAoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge2xvYWRpbmc6IHRydWV9IH0pXHJcbiAgICAgICAgcGF0Y2hEYXRhKCd1c2VyL3Jlc2V0UGFzc3dvcmQnLCB7cGFzc3dvcmR9LCBhdXRoLnRva2VuKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGlmKHJlcy5lcnIpIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7ZXJyb3I6IHJlcy5lcnJ9IH0pXHJcbiAgICAgICAgICAgIHJldHVybiBkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7c3VjY2VzczogcmVzLm1zZ30gfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICBcclxuICAgIGlmKCFhdXRoLnVzZXIpIHJldHVybiBudWxsO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGVfcGFnZVwiPlxyXG4gICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+UHJvZmlsZTwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicm93IHRleHQtc2Vjb25kYXJ5IG15LTNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YXV0aC51c2VyLnJvbGUgPT09ICd1c2VyJyA/ICdVc2VyIFByb2ZpbGUnIDogJ0FkbWluIFByb2ZpbGUnfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2F2YXRhciA/IFVSTC5jcmVhdGVPYmplY3RVUkwoYXZhdGFyKSA6IGF1dGgudXNlci5hdmF0YXJ9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJhdmF0YXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jYW1lcmFcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5DaGFuZ2U8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBuYW1lPVwiZmlsZVwiIGlkPVwiZmlsZV91cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCIgb25DaGFuZ2U9e2NoYW5nZUF2YXRhcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+TmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgdmFsdWU9e25hbWV9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJlbWFpbFwiIGRlZmF1bHRWYWx1ZT17YXV0aC51c2VyLmVtYWlsfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+TmV3IFBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHZhbHVlPXtwYXNzd29yZH0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIG5ldyBwYXNzd29yZFwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNmX3Bhc3N3b3JkXCI+Q29uZmlybSBOZXcgUGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cImNmX3Bhc3N3b3JkXCIgdmFsdWU9e2NmX3Bhc3N3b3JkfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbmZpcm0gbmV3IHBhc3N3b3JkXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIiBkaXNhYmxlZD17bm90aWZ5LmxvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlVXBkYXRlUHJvZmlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFVwZGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG5cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZSJdLCJzb3VyY2VSb290IjoiIn0=