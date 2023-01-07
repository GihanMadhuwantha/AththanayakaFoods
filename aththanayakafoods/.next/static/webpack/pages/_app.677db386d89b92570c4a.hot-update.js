webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/NavBar.js":
/*!******************************!*\
  !*** ./components/NavBar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/GlobalState */ "./store/GlobalState.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\gihanmadhuwantha\\Desktop\\system_Development\\AththanayakaFoods\\aththanayakafoods\\components\\NavBar.js",
  _s = $RefreshSig$();






function NavBar() {
  _s();
  var _this = this;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_store_GlobalState__WEBPACK_IMPORTED_MODULE_3__["DataContext"]),
    state = _useContext.state,
    dispatch = _useContext.dispatch;
  var auth = state.auth,
    cart = state.cart;
  var isActive = function isActive(r) {
    if (r === router.pathname) {
      return " active";
    } else {
      return "";
    }
  };
  var loggedRouter = function loggedRouter() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("li", {
      className: "nav-item dropdown",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
        className: "nav-link dropdown-toggle",
        href: "#",
        id: "navbarDropdownMenuLink",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
          src: auth.user.avatar,
          alt: auth.user.avatar,
          style: {
            borderRadius: '50%',
            width: '30px',
            height: '30px',
            transform: 'translateY(-3px)',
            marginRight: '3px'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, _this), " ", auth.user.name]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        className: "dropdown-menu",
        "aria-labelledby": "navbarDropdownMenuLink",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
          className: "dropdown-item",
          children: "Profile"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 19
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("button", {
          className: "dropdown-item",
          onClick: handleLogout,
          children: "Logout"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 19
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, _this);
  };
  var handleLogout = function handleLogout() {
    js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.remove('refreshtoken', {
      path: 'api/auth/accessToken'
    });
    localStorage.removeItem('firstLogin');
    dispatch({
      type: 'AUTH',
      payload: {}
    });
    dispatch({
      type: 'NOTIFY',
      payload: {
        success: 'Logged out!'
      }
    });
    return router.push('/');
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("nav", {
    className: "navbar navbar-expand-lg navbar-light bg-light",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
        className: "navbar-brand",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h2", {
          children: "Aththanayaka Foods"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 42
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("button", {
      className: "navbar-toggler",
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#navbarNavDropdown",
      "aria-controls": "navbarNavDropdown",
      "aria-expanded": "false",
      "aria-label": "Toggle navigation",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("span", {
        className: "navbar-toggler-icon"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      className: "collapse navbar-collapse justify-content-end",
      id: "navbarNavDropdown",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("ul", {
        className: "navbar-nav",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("li", {
          className: "nav-item ",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
            href: "/cart",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
              className: "nav-link" + isActive('/cart'),
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                className: "fas fa-shopping-cart position-relative",
                "aria-hidden": "true",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("span", {
                  className: "position-absolute",
                  style: {
                    padding: '3px 6px',
                    background: '#ed143dc2',
                    borderRadius: '50%',
                    top: '-10px',
                    right: '-10px',
                    color: 'white',
                    fontSize: '14px'
                  },
                  children: cart.length
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 66,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 33
              }, this), " Cart"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 9
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 9
        }, this), Object.keys(auth).length === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("li", {
          className: "nav-item",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
            href: "/signin",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
              className: "nav-link" + isActive('/signin'),
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("i", {
                className: "fas fa-user",
                "aria-hidden": "true"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 27
              }, this), " Sign in"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 23
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 19
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 17
        }, this) : loggedRouter()]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 5
  }, this);
}
_s(NavBar, "naLG9Mn+JS7aGK2Pmc0ze5tcf2E=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});
_c = NavBar;
/* harmony default export */ __webpack_exports__["default"] = (NavBar);
var _c;
$RefreshReg$(_c, "NavBar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZCYXIuanMiXSwibmFtZXMiOlsiTmF2QmFyIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlQ29udGV4dCIsIkRhdGFDb250ZXh0Iiwic3RhdGUiLCJkaXNwYXRjaCIsImF1dGgiLCJjYXJ0IiwiaXNBY3RpdmUiLCJyIiwicGF0aG5hbWUiLCJsb2dnZWRSb3V0ZXIiLCJ1c2VyIiwiYXZhdGFyIiwiYm9yZGVyUmFkaXVzIiwid2lkdGgiLCJoZWlnaHQiLCJ0cmFuc2Zvcm0iLCJtYXJnaW5SaWdodCIsIm5hbWUiLCJoYW5kbGVMb2dvdXQiLCJDb29raWUiLCJyZW1vdmUiLCJwYXRoIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsInR5cGUiLCJwYXlsb2FkIiwic3VjY2VzcyIsInB1c2giLCJwYWRkaW5nIiwiYmFja2dyb3VuZCIsInRvcCIsInJpZ2h0IiwiY29sb3IiLCJmb250U2l6ZSIsImxlbmd0aCIsIk9iamVjdCIsImtleXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNiO0FBQ1M7QUFDVztBQUNsQjtBQUFBO0FBRTlCLFNBQVNBLE1BQU0sR0FBRztFQUFBO0VBQUE7RUFDaEIsSUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUFFO0VBQzFCLGtCQUEwQkMsd0RBQVUsQ0FBQ0MsOERBQVcsQ0FBQztJQUExQ0MsS0FBSyxlQUFMQSxLQUFLO0lBQUVDLFFBQVEsZUFBUkEsUUFBUTtFQUN0QixJQUFRQyxJQUFJLEdBQVVGLEtBQUssQ0FBbkJFLElBQUk7SUFBQ0MsSUFBSSxHQUFLSCxLQUFLLENBQWRHLElBQUk7RUFLakIsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVEsQ0FBSUMsQ0FBQyxFQUFLO0lBQ3RCLElBQUdBLENBQUMsS0FBS1QsTUFBTSxDQUFDVSxRQUFRLEVBQUM7TUFDckIsT0FBTyxTQUFTO0lBQ3BCLENBQUMsTUFBSTtNQUNELE9BQU8sRUFBRTtJ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WixNQUFNO0VBQUEsUUFDRUUscURBQVM7QUFBQTtBQUFBLEtBRGpCRixNQUFNO0FBOEZBQSxxRUFBTTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC42NzdkYjM4NmQ4OWI5MjU3MGM0YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7RGF0YUNvbnRleHR9IGZyb20gJy4uL3N0b3JlL0dsb2JhbFN0YXRlJ1xyXG5pbXBvcnQgQ29va2llIGZyb20gJ2pzLWNvb2tpZSdcclxuXHJcbmZ1bmN0aW9uIE5hdkJhcigpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHtzdGF0ZSwgZGlzcGF0Y2h9ID0gdXNlQ29udGV4dChEYXRhQ29udGV4dClcclxuICBjb25zdCB7IGF1dGgsY2FydCB9ID0gc3RhdGVcclxuXHJcblxyXG5cclxuXHJcbiAgY29uc3QgaXNBY3RpdmUgPSAocikgPT4ge1xyXG4gICAgaWYociA9PT0gcm91dGVyLnBhdGhuYW1lKXtcclxuICAgICAgICByZXR1cm4gXCIgYWN0aXZlXCJcclxuICAgIH1lbHNle1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICB9XHJcbn1cclxuIGNvbnN0ICBsb2dnZWRSb3V0ZXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuKFxyXG4gICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gZHJvcGRvd25cIj5cclxuICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGluayBkcm9wZG93bi10b2dnbGVcIiBocmVmPVwiI1wiIGlkPVwibmF2YmFyRHJvcGRvd25NZW51TGlua1wiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXthdXRoLnVzZXIuYXZhdGFyfSBhbHQ9e2F1dGgudXNlci5hdmF0YXJ9IFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzUwJScsIHdpZHRoOiAnMzBweCcsIGhlaWdodDogJzMwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0zcHgpJywgbWFyZ2luUmlnaHQ6ICczcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgfX0gLz4ge2F1dGgudXNlci5uYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiIGFyaWEtbGFiZWxsZWRieT1cIm5hdmJhckRyb3Bkb3duTWVudUxpbmtcIj5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiPlByb2ZpbGU8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+TG9nb3V0PC9idXR0b24+XHJcblxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbGk+XHJcbiAgKVxyXG59IFxyXG5jb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XHJcbiAgQ29va2llLnJlbW92ZSgncmVmcmVzaHRva2VuJywge3BhdGg6ICdhcGkvYXV0aC9hY2Nlc3NUb2tlbid9KVxyXG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdmaXJzdExvZ2luJylcclxuICBkaXNwYXRjaCh7IHR5cGU6ICdBVVRIJywgcGF5bG9hZDoge30gfSlcclxuICBkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7c3VjY2VzczogJ0xvZ2dlZCBvdXQhJ30gfSlcclxuICByZXR1cm4gcm91dGVyLnB1c2goJy8nKVxyXG59XHJcblxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbGcgbmF2YmFyLWxpZ2h0IGJnLWxpZ2h0XCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgPjxoMj5BdGh0aGFuYXlha2EgRm9vZHM8L2gyPjwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNuYXZiYXJOYXZEcm9wZG93blwiIGFyaWEtY29udHJvbHM9XCJuYXZiYXJOYXZEcm9wZG93blwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZSBqdXN0aWZ5LWNvbnRlbnQtZW5kXCIgaWQ9XCJuYXZiYXJOYXZEcm9wZG93blwiPlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdlwiPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBcIj5cclxuICAgICAgICA8TGluayBocmVmPVwiL2NhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17XCJuYXYtbGlua1wiICsgaXNBY3RpdmUoJy9jYXJ0Jyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zaG9wcGluZy1jYXJ0IHBvc2l0aW9uLXJlbGF0aXZlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBvc2l0aW9uLWFic29sdXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICczcHggNnB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjZWQxNDNkYzInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogJy0xMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAnLTEwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzE0cHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhcnQubGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9pPiBDYXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIFxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgT2JqZWN0LmtleXMoYXV0aCkubGVuZ3RoID09PSAwIFxyXG4gICAgICAgICAgICAgID8gPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbmluXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e1wibmF2LWxpbmtcIiArIGlzQWN0aXZlKCcvc2lnbmluJyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS11c2VyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiBTaWduIGluXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDogbG9nZ2VkUm91dGVyKClcclxuICAgICAgICB9IFxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9uYXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZCYXJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==