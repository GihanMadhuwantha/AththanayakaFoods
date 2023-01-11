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
  if (!auth.user) return null;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
    className: "profile_page",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("title", {
        children: "Profile"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
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
          lineNumber: 64,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          className: "avatar",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("img", {
            src: avatar ? URL.createObjectURL(avatar) : auth.user.avatar,
            alt: "avatar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("span", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("i", {
              className: "fas fa-camera"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
              children: "Change"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("input", {
              type: "file",
              name: "file",
              id: "file_up",
              accept: "image/*",
              onChange: changeAvatar
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("label", {
            htmlFor: "name",
            children: "Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
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
            htmlFor: "email",
            children: "Email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("input", {
            type: "text",
            name: "email",
            defaultValue: auth.user.email,
            className: "form-control",
            disabled: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("label", {
            htmlFor: "password",
            children: "New Password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
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
            lineNumber: 93,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("label", {
            htmlFor: "cf_password",
            children: "Confirm New Password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
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
            lineNumber: 99,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("button", {
          className: "btn btn-info",
          disabled: notify.loading,
          onClick: handleUpdateProfile,
          children: "Update"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 58,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJQcm9maWxlIiwiaW5pdGlhbFNhdGUiLCJhdmF0YXIiLCJuYW1lIiwicGFzc3dvcmQiLCJjZl9wYXNzd29yZCIsInVzZVN0YXRlIiwiZGF0YSIsInNldERhdGEiLCJ1c2VDb250ZXh0IiwiRGF0YUNvbnRleHQiLCJzdGF0ZSIsImRpc3BhdGNoIiwiYXV0aCIsIm5vdGlmeSIsIm9yZGVycyIsInVzZUVmZmVjdCIsInVzZXIiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ0eXBlIiwicGF5bG9hZCIsImhhbmRsZVVwZGF0ZVByb2ZpbGUiLCJwcmV2ZW50RGVmYXVsdCIsImVyck1zZyIsInZhbGlkIiwiZW1haWwiLCJlcnJvciIsInVwZGF0ZVBhc3N3b3JkIiwidXBkYXRlSW5mb3IiLCJjaGFuZ2VBdmF0YXIiLCJmaWxlIiwiZmlsZXMiLCJzaXplIiwicm9sZSIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImxvYWRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEI7QUFDMkI7QUFDM0I7QUFDTTtBQUNnQjtBQUFBO0FBQ2xELElBQU1BLE9BQU8sR0FBQyxTQUFSQSxPQUFPLEdBQUs7RUFBQTtFQUNkLElBQU1DLFdBQVcsR0FBRztJQUNoQkMsTUFBTSxFQUFFLEVBQUU7SUFDVkMsSUFBSSxFQUFFLEVBQUU7SUFDUkMsUUFBUSxFQUFFLEVBQUU7SUFDWkMsV0FBVyxFQUFFO0VBQ2pCLENBQUM7RUFFRCxnQkFBd0JDLHNEQUFRLENBQUNMLFdBQVcsQ0FBQztJQUF0Q00sSUFBSTtJQUFFQyxPQUFPO0VBQ3BCLGtCQUEwQkMsd0RBQVUsQ0FBQ0MsOERBQVcsQ0FBQztJQUExQ0MsS0FBSyxlQUFMQSxLQUFLO0lBQUVDLFFBQVEsZUFBUkEsUUFBUTtFQUN0QixJQUFRVixNQUFNLEdBQWtDSyxJQUFJLENBQTVDTCxNQUFNO0lB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QTtZQUFBO1VBQUEsU0FBRztRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUEsU0FDM0QsZUFFTjtVQUFRLFNBQVMsRUFBQyxjQUFjO1VBQUMsUUFBUSxFQUFFSixNQUFNLENBQUN5QixPQUFRO1VBQzFELE9BQU8sRUFBRWYsbUJBQW9CO1VBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBLFNBRXBCO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUNQO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FFQTtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsU0FFUjtBQUlkLENBQUM7QUFBQSxHQTdHS3hCLE9BQU87QUFBQSxLQUFQQSxPQUFPO0FBOEdFQSxzRUFBTztBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS5iNGU0Y2ZlMTMzYmIzODEwZTliZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHZhbGlkIGZyb20gJy4uL3V0aWxzL3ZhbGlkJ1xyXG5pbXBvcnQgeyBEYXRhQ29udGV4dCB9IGZyb20gJy4uL3N0b3JlL0dsb2JhbFN0YXRlJ1xyXG5jb25zdCBQcm9maWxlPSgpPT57XHJcbiAgICBjb25zdCBpbml0aWFsU2F0ZSA9IHtcclxuICAgICAgICBhdmF0YXI6ICcnLFxyXG4gICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgICBjZl9wYXNzd29yZDogJydcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoaW5pdGlhbFNhdGUpXHJcbiAgICBjb25zdCB7c3RhdGUsIGRpc3BhdGNofSA9IHVzZUNvbnRleHQoRGF0YUNvbnRleHQpXHJcbiAgICBjb25zdCB7IGF2YXRhciwgbmFtZSwgcGFzc3dvcmQsIGNmX3Bhc3N3b3JkIH0gPSBkYXRhXHJcbiAgICBjb25zdCB7IGF1dGgsIG5vdGlmeSwgb3JkZXJzIH0gPSBzdGF0ZVxyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKGF1dGgudXNlcikgc2V0RGF0YSh7Li4uZGF0YSwgbmFtZTogYXV0aC51c2VyLm5hbWV9KVxyXG4gICAgfSxbYXV0aC51c2VyXSlcclxuICAgIFxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldFxyXG4gICAgICAgIHNldERhdGEoey4uLmRhdGEsIFtuYW1lXTp2YWx1ZX0pXHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge30gfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVVcGRhdGVQcm9maWxlID0gZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgaWYocGFzc3dvcmQpe1xyXG4gICAgICAgICAgICBjb25zdCBlcnJNc2cgPSB2YWxpZChuYW1lLCBhdXRoLnVzZXIuZW1haWwsIHBhc3N3b3JkLCBjZl9wYXNzd29yZClcclxuICAgICAgICAgICAgaWYoZXJyTXNnKSByZXR1cm4gZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge2Vycm9yOiBlcnJNc2d9IH0pXHJcbiAgICAgICAgICAgIHVwZGF0ZVBhc3N3b3JkKClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKG5hbWUgIT09IGF1dGgudXNlci5uYW1lIHx8IGF2YXRhcikgdXBkYXRlSW5mb3IoKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoYW5nZUF2YXRhciA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdXHJcbiAgICAgICAgaWYoIWZpbGUpXHJcbiAgICAgICAgICAgIHJldHVybiBkaXNwYXRjaCh7dHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHtlcnJvcjogJ0ZpbGUgZG9lcyBub3QgZXhpc3QuJ319KVxyXG5cclxuICAgICAgICBpZihmaWxlLnNpemUgPiAxMDI0ICogMTAyNCkgLy8xbWJcclxuICAgICAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHt0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge2Vycm9yOiAnVGhlIGxhcmdlc3QgaW1hZ2Ugc2l6ZSBpcyAxbWIuJ319KVxyXG5cclxuICAgICAgICBpZihmaWxlLnR5cGUgIT09IFwiaW1hZ2UvanBlZ1wiICYmIGZpbGUudHlwZSAhPT0gXCJpbWFnZS9wbmdcIikgLy8xbWJcclxuICAgICAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHt0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge2Vycm9yOiAnSW1hZ2UgZm9ybWF0IGlzIGluY29ycmVjdC4nfX0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgc2V0RGF0YSh7Li4uZGF0YSwgYXZhdGFyOiBmaWxlfSlcclxuICAgIH1cclxuICAgIFxyXG4gICBcclxuICAgIGlmKCFhdXRoLnVzZXIpIHJldHVybiBudWxsO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGVfcGFnZVwiPlxyXG4gICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+UHJvZmlsZTwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicm93IHRleHQtc2Vjb25kYXJ5IG15LTNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YXV0aC51c2VyLnJvbGUgPT09ICd1c2VyJyA/ICdVc2VyIFByb2ZpbGUnIDogJ0FkbWluIFByb2ZpbGUnfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2F2YXRhciA/IFVSTC5jcmVhdGVPYmplY3RVUkwoYXZhdGFyKSA6IGF1dGgudXNlci5hdmF0YXJ9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJhdmF0YXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jYW1lcmFcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5DaGFuZ2U8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBuYW1lPVwiZmlsZVwiIGlkPVwiZmlsZV91cFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCIgb25DaGFuZ2U9e2NoYW5nZUF2YXRhcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+TmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgdmFsdWU9e25hbWV9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJlbWFpbFwiIGRlZmF1bHRWYWx1ZT17YXV0aC51c2VyLmVtYWlsfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgZGlzYWJsZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+TmV3IFBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHZhbHVlPXtwYXNzd29yZH0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIG5ldyBwYXNzd29yZFwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNmX3Bhc3N3b3JkXCI+Q29uZmlybSBOZXcgUGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cImNmX3Bhc3N3b3JkXCIgdmFsdWU9e2NmX3Bhc3N3b3JkfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbmZpcm0gbmV3IHBhc3N3b3JkXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIiBkaXNhYmxlZD17bm90aWZ5LmxvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlVXBkYXRlUHJvZmlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFVwZGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG5cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZSJdLCJzb3VyY2VSb290IjoiIn0=