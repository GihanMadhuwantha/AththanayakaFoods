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
        style: {},
        children: "Aththanayaka Foods"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZCYXIuanMiXSwibmFtZXMiOlsiTmF2QmFyIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlQ29udGV4dCIsIkRhdGFDb250ZXh0Iiwic3RhdGUiLCJkaXNwYXRjaCIsImF1dGgiLCJjYXJ0IiwiaXNBY3RpdmUiLCJyIiwicGF0aG5hbWUiLCJsb2dnZWRSb3V0ZXIiLCJ1c2VyIiwiYXZhdGFyIiwiYm9yZGVyUmFkaXVzIiwid2lkdGgiLCJoZWlnaHQiLCJ0cmFuc2Zvcm0iLCJtYXJnaW5SaWdodCIsIm5hbWUiLCJoYW5kbGVMb2dvdXQiLCJDb29raWUiLCJyZW1vdmUiLCJwYXRoIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsInR5cGUiLCJwYXlsb2FkIiwic3VjY2VzcyIsInB1c2giLCJwYWRkaW5nIiwiYmFja2dyb3VuZCIsInRvcCIsInJpZ2h0IiwiY29sb3IiLCJmb250U2l6ZSIsImxlbmd0aCIsIk9iamVjdCIsImtleXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNiO0FBQ1M7QUFDVztBQUNsQjtBQUFBO0FBRTlCLFNBQVNBLE1BQU0sR0FBRztFQUFBO0VBQUE7RUFDaEIsSUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUFFO0VBQzFCLGtCQUEwQkMsd0RBQVUsQ0FBQ0MsOERBQVcsQ0FBQztJQUExQ0MsS0FBSyxlQUFMQSxLQUFLO0lBQUVDLFFBQVEsZUFBUkEsUUFBUTtFQUN0QixJQUFRQyxJQUFJLEdBQVVGLEtBQUssQ0FBbkJFLElBQUk7SUFBQ0MsSUFBSSxHQUFLSCxLQUFLLENBQWRHLElBQUk7RUFLakIsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVEsQ0FBSUMsQ0FBQyxFQUFLO0lBQ3RCLElBQUdBLENBQUMsS0FBS1QsTUFBTSxDQUFDVSxRQUFRLEVBQUM7TUFDckIsT0FBTyxTQUFTO0lBQ3BCLENBQUMsTUFBSTtNQUNELE9BQU8sRUFBRTtJ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LFFBQ0VFLHFEQUFTO0FBQUE7QUFBQSxLQURqQkYsTUFBTTtBQThGQUEscUVBQU07QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNDEwNzI5NGIyZTVmMmYyMGU2M2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQge0RhdGFDb250ZXh0fSBmcm9tICcuLi9zdG9yZS9HbG9iYWxTdGF0ZSdcclxuaW1wb3J0IENvb2tpZSBmcm9tICdqcy1jb29raWUnXHJcblxyXG5mdW5jdGlvbiBOYXZCYXIoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCB7c3RhdGUsIGRpc3BhdGNofSA9IHVzZUNvbnRleHQoRGF0YUNvbnRleHQpXHJcbiAgY29uc3QgeyBhdXRoLGNhcnQgfSA9IHN0YXRlXHJcblxyXG5cclxuXHJcblxyXG4gIGNvbnN0IGlzQWN0aXZlID0gKHIpID0+IHtcclxuICAgIGlmKHIgPT09IHJvdXRlci5wYXRobmFtZSl7XHJcbiAgICAgICAgcmV0dXJuIFwiIGFjdGl2ZVwiXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG59XHJcbiBjb25zdCAgbG9nZ2VkUm91dGVyID0gKCkgPT4ge1xyXG4gIHJldHVybihcclxuICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIGRyb3Bkb3duXCI+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmsgZHJvcGRvd24tdG9nZ2xlXCIgaHJlZj1cIiNcIiBpZD1cIm5hdmJhckRyb3Bkb3duTWVudUxpbmtcIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YXV0aC51c2VyLmF2YXRhcn0gYWx0PXthdXRoLnVzZXIuYXZhdGFyfSBcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLCB3aWR0aDogJzMwcHgnLCBoZWlnaHQ6ICczMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtM3B4KScsIG1hcmdpblJpZ2h0OiAnM3B4J1xyXG4gICAgICAgICAgICAgICAgICAgIH19IC8+IHthdXRoLnVzZXIubmFtZX1cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnVcIiBhcmlhLWxhYmVsbGVkYnk9XCJuYXZiYXJEcm9wZG93bk1lbnVMaW5rXCI+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIj5Qcm9maWxlPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PkxvZ291dDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2xpPlxyXG4gIClcclxufSBcclxuY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG4gIENvb2tpZS5yZW1vdmUoJ3JlZnJlc2h0b2tlbicsIHtwYXRoOiAnYXBpL2F1dGgvYWNjZXNzVG9rZW4nfSlcclxuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnZmlyc3RMb2dpbicpXHJcbiAgZGlzcGF0Y2goeyB0eXBlOiAnQVVUSCcsIHBheWxvYWQ6IHt9IH0pXHJcbiAgZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge3N1Y2Nlc3M6ICdMb2dnZWQgb3V0ISd9IH0pXHJcbiAgcmV0dXJuIHJvdXRlci5wdXNoKCcvJylcclxufVxyXG5cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1saWdodCBiZy1saWdodFwiPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiIHN0eWxlPXt7fX0+QXRodGhhbmF5YWthIEZvb2RzPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgIDxidXR0b24gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXJcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI25hdmJhck5hdkRyb3Bkb3duXCIgYXJpYS1jb250cm9scz1cIm5hdmJhck5hdkRyb3Bkb3duXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlIGp1c3RpZnktY29udGVudC1lbmRcIiBpZD1cIm5hdmJhck5hdkRyb3Bkb3duXCI+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2XCI+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIFwiPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvY2FydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtcIm5hdi1saW5rXCIgKyBpc0FjdGl2ZSgnL2NhcnQnKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNob3BwaW5nLWNhcnQgcG9zaXRpb24tcmVsYXRpdmVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicG9zaXRpb24tYWJzb2x1dGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzNweCA2cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJyNlZDE0M2RjMicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAnLTEwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6ICctMTBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTRweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2FydC5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2k+IENhcnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBPYmplY3Qua2V5cyhhdXRoKS5sZW5ndGggPT09IDAgXHJcbiAgICAgICAgICAgICAgPyA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWduaW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17XCJuYXYtbGlua1wiICsgaXNBY3RpdmUoJy9zaWduaW4nKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXVzZXJcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IFNpZ24gaW5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgOiBsb2dnZWRSb3V0ZXIoKVxyXG4gICAgICAgIH0gXHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICA8L25hdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdkJhclxyXG4iXSwic291cmNlUm9vdCI6IiJ9