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
  var auth = state.auth;
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
                className: "fas fa-shopping-cart"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 15
              }, this), "Cart"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
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
                lineNumber: 75,
                columnNumber: 27
              }, this), " Sign in"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 23
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 19
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZCYXIuanMiXSwibmFtZXMiOlsiTmF2QmFyIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlQ29udGV4dCIsIkRhdGFDb250ZXh0Iiwic3RhdGUiLCJkaXNwYXRjaCIsImF1dGgiLCJpc0FjdGl2ZSIsInIiLCJwYXRobmFtZSIsImxvZ2dlZFJvdXRlciIsInVzZXIiLCJhdmF0YXIiLCJib3JkZXJSYWRpdXMiLCJ3aWR0aCIsImhlaWdodCIsInRyYW5zZm9ybSIsIm1hcmdpblJpZ2h0IiwibmFtZSIsImhhbmRsZUxvZ291dCIsIkNvb2tpZSIsInJlbW92ZSIsInBhdGgiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwidHlwZSIsInBheWxvYWQiLCJzdWNjZXNzIiwicHVzaCIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNiO0FBQ1M7QUFDVztBQUNsQjtBQUFBO0FBRTlCLFNBQVNBLE1BQU0sR0FBRztFQUFBO0VBQUE7RUFDaEIsSUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUFFO0VBQzFCLGtCQUEwQkMsd0RBQVUsQ0FBQ0MsOERBQVcsQ0FBQztJQUExQ0MsS0FBSyxlQUFMQSxLQUFLO0lBQUVDLFFBQVEsZUFBUkEsUUFBUTtFQUN0QixJQUFRQyxJQUFJLEdBQUtGLEtBQUssQ0FBZEUsSUFBSTtFQUtaLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFRLENBQUlDLENBQUMsRUFBSztJQUN0QixJQUFHQSxDQUFDLEtBQUtSLE1BQU0sQ0FBQ1MsUUFBUSxFQUFDO01BQ3JCLE9BQU8sU0FBUztJQUNwQixDQUFDLE1BQUk7TUFDRCxPQUFPLEVBQUU7SUFDYjtFQUNKLENBQUM7RUFDQSxJQUFPQyxZQUFZLEdBQUcsU0FBZkEsWUFBWSxHQUFTO0lBQzNCLG9CQUNJO01BQUksU0FBUyxFQUFDLG1CQUFtQjtNQUFBLHdCQUMvQjtR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UUFFTixFQUdDc0IsTUFBTSxDQUFDQyxJQUFJLENBQUN4QixJQUFJLENBQUMsQ0FBQ3lCLE1BQU0sS0FBSyxDQUFDLGdCQUM1QjtVQUFJLFNBQVMsRUFBQyxVQUFVO1VBQUEsdUJBQ3RCLHFFQUFDLGdEQUFJO1lBQUMsSUFBSSxFQUFDLFNBQVM7WUFBQSx1QkFDaEI7Y0FBRyxTQUFTLEVBQUUsVUFBVSxHQUFHeEIsUUFBUSxDQUFDLFNBQVMsQ0FBRTtjQUFBLHdCQUMzQztnQkFBRyxTQUFTLEVBQUMsYUFBYTtnQkFBQyxlQUFZO2NBQU07Z0JBQUE7Z0JBQUE7Z0JBQUE7Y0FBQSxRQUFLO1lBQUE7Y0FBQTtjQUFBO2NBQUE7WUFBQTtVQUNsRDtZQUFBO1lBQUE7WUFBQTtVQUFBO1FBQ0Q7VUFBQTtVQUFBO1VBQUE7UUFBQSxRQUNOLEdBQ0hHLFlBQVksRUFBRTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFFbkI7TUFBQTtNQUFBO01BQUE7SUFBQSxRQUNEO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxRQUNGO0FBRVI7QUFBQyxHQTlFUVgsTUFBTTtFQUFBLFFBQ0VFLHFEQUFTO0FBQUE7QUFBQSxLQURqQkYsTUFBTTtBQWdGQUEscUVBQU07QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMjI2YjYwODExYzc5OGEwZGE4OTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQge0RhdGFDb250ZXh0fSBmcm9tICcuLi9zdG9yZS9HbG9iYWxTdGF0ZSdcclxuaW1wb3J0IENvb2tpZSBmcm9tICdqcy1jb29raWUnXHJcblxyXG5mdW5jdGlvbiBOYXZCYXIoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCB7c3RhdGUsIGRpc3BhdGNofSA9IHVzZUNvbnRleHQoRGF0YUNvbnRleHQpXHJcbiAgY29uc3QgeyBhdXRoIH0gPSBzdGF0ZVxyXG5cclxuXHJcblxyXG5cclxuICBjb25zdCBpc0FjdGl2ZSA9IChyKSA9PiB7XHJcbiAgICBpZihyID09PSByb3V0ZXIucGF0aG5hbWUpe1xyXG4gICAgICAgIHJldHVybiBcIiBhY3RpdmVcIlxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxufVxyXG4gY29uc3QgIGxvZ2dlZFJvdXRlciA9ICgpID0+IHtcclxuICByZXR1cm4oXHJcbiAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBkcm9wZG93blwiPlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rIGRyb3Bkb3duLXRvZ2dsZVwiIGhyZWY9XCIjXCIgaWQ9XCJuYXZiYXJEcm9wZG93bk1lbnVMaW5rXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2F1dGgudXNlci5hdmF0YXJ9IGFsdD17YXV0aC51c2VyLmF2YXRhcn0gXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJywgd2lkdGg6ICczMHB4JywgaGVpZ2h0OiAnMzBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTNweCknLCBtYXJnaW5SaWdodDogJzNweCdcclxuICAgICAgICAgICAgICAgICAgICB9fSAvPiB7YXV0aC51c2VyLm5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCIgYXJpYS1sYWJlbGxlZGJ5PVwibmF2YmFyRHJvcGRvd25NZW51TGlua1wiPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCI+UHJvZmlsZTwvYT5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgb25DbGljaz17aGFuZGxlTG9nb3V0fT5Mb2dvdXQ8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9saT5cclxuICApXHJcbn0gXHJcbmNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICBDb29raWUucmVtb3ZlKCdyZWZyZXNodG9rZW4nLCB7cGF0aDogJ2FwaS9hdXRoL2FjY2Vzc1Rva2VuJ30pXHJcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2ZpcnN0TG9naW4nKVxyXG4gIGRpc3BhdGNoKHsgdHlwZTogJ0FVVEgnLCBwYXlsb2FkOiB7fSB9KVxyXG4gIGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHtzdWNjZXNzOiAnTG9nZ2VkIG91dCEnfSB9KVxyXG4gIHJldHVybiByb3V0ZXIucHVzaCgnLycpXHJcbn1cclxuXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyBuYXZiYXItbGlnaHQgYmctbGlnaHRcIj5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiA+QXRodGhhbmF5YWthIEZvb2RzPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgIDxidXR0b24gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXJcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI25hdmJhck5hdkRyb3Bkb3duXCIgYXJpYS1jb250cm9scz1cIm5hdmJhck5hdkRyb3Bkb3duXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlIGp1c3RpZnktY29udGVudC1lbmRcIiBpZD1cIm5hdmJhck5hdkRyb3Bkb3duXCI+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2XCI+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIFwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2NhcnRcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtcIm5hdi1saW5rXCIgKyBpc0FjdGl2ZSgnL2NhcnQnKX0+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNob3BwaW5nLWNhcnRcIj48L2k+Q2FydDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBPYmplY3Qua2V5cyhhdXRoKS5sZW5ndGggPT09IDAgXHJcbiAgICAgICAgICAgICAgPyA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWduaW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17XCJuYXYtbGlua1wiICsgaXNBY3RpdmUoJy9zaWduaW4nKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXVzZXJcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IFNpZ24gaW5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgOiBsb2dnZWRSb3V0ZXIoKVxyXG4gICAgICAgIH0gXHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICA8L25hdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdkJhclxyXG4iXSwic291cmNlUm9vdCI6IiJ9