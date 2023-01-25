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
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          href: "/profile",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
            className: "dropdown-item",
            children: "Profile"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, _this), auth.user.role === 'admin' && adminRouter(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          className: "dropdown-divider"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("button", {
          className: "dropdown-item",
          onClick: handleLogout,
          children: "Logout"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
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
  var adminRouter = function adminRouter() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/users",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
          className: "dropdown-item",
          children: "Users"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/create",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
          className: "dropdown-item",
          children: "Products"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/categories",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
          className: "dropdown-item",
          children: "Categories"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 7
      }, _this)]
    }, void 0, true);
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("nav", {
    className: "navbar navbar-expand-lg navbar-light bg-light",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("a", {
        className: "navbar-brand",
        style: {
          color: "#334a8c"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h2", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("b", {
            children: "ATHTHANAYAKA FOODS"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 73
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 69
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
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
        lineNumber: 79,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
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
                  lineNumber: 87,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 33
              }, this), " Cart"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 9
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
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
                lineNumber: 110,
                columnNumber: 27
              }, this), " Sign in"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 23
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 19
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 17
        }, this) : loggedRouter()]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 74,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZCYXIuanMiXSwibmFtZXMiOlsiTmF2QmFyIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlQ29udGV4dCIsIkRhdGFDb250ZXh0Iiwic3RhdGUiLCJkaXNwYXRjaCIsImF1dGgiLCJjYXJ0IiwiaXNBY3RpdmUiLCJyIiwicGF0aG5hbWUiLCJsb2dnZWRSb3V0ZXIiLCJ1c2VyIiwiYXZhdGFyIiwiYm9yZGVyUmFkaXVzIiwid2lkdGgiLCJoZWlnaHQiLCJ0cmFuc2Zvcm0iLCJtYXJnaW5SaWdodCIsIm5hbWUiLCJyb2xlIiwiYWRtaW5Sb3V0ZXIiLCJoYW5kbGVMb2dvdXQiLCJDb29raWUiLCJyZW1vdmUiLCJwYXRoIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsInR5cGUiLCJwYXlsb2FkIiwic3VjY2VzcyIsInB1c2giLCJjb2xvciIsInBhZGRpbmciLCJiYWNrZ3JvdW5kIiwidG9wIiwicmlnaHQiLCJmb250U2l6ZSIsImxlbmd0aCIsIk9iamVjdCIsImtleXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNiO0FBQ1M7QUFDVztBQUNsQjtBQUFBO0FBQUE7QUFFOUIsU0FBU0EsTUFBTSxHQUFHO0VBQUE7RUFBQTtFQUNoQixJQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQUU7RUFDMUIsa0JBQTBCQyx3REFBVSxDQUFDQyw4REFBVyxDQUFDO0lBQTFDQyxLQUFLLGVBQUxBLEtBQUs7SUFBRUMsUUFBUSxlQUFSQSxRQUFRO0VBQ3RCLElBQVFDLElBQUksR0FBVUYsS0FBSyxDQUFuQkUsSUFBSTtJQUFDQyxJQUFJLEdBQUtILEtBQUssQ0FBZEcsSUFBSTtFQUtqQixJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBUSxDQUFJQyxDQUFDLEVBQUs7SUFDdEIsSUFBR0EsQ0FBQyxLQUFLVCxNQUFNLENBQUNVLFFBQVEsRUFBQztNQUNyQixPQUFPLFNBQVM7SUFDcEIs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cEIsWUFBWSxFQUFFLEtBQUs7b0JBQ25CcUIsR0FBRyxFQUFFLE9BQU87b0JBQ1pDLEtBQUssRUFBRSxPQUFPO29CQUNkSixLQUFLLEVBQUUsT0FBTztvQkFDZEssUUFBUSxFQUFFO2tCQUNkLENBQUU7a0JBQUEsVUFDRzlCLElBQUksQ0FBQytCO2dCQUFNO2tCQUFBO2tCQUFBO2tCQUFBO2dCQUFBO2NBQ1Q7Z0JBQUE7Z0JBQUE7Z0JBQUE7Y0FBQSxRQUNQO1lBQUE7Y0FBQTtjQUFBO2NBQUE7WUFBQTtVQUNKO1lBQUE7WUFBQTtZQUFBO1VBQUE7UUFDRDtVQUFBO1VBQUE7VUFBQTtRQUFBLFFBRWxCLEVBR0NDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDbEMsSUFBSSxDQUFDLENBQUNnQyxNQUFNLEtBQUssQ0FBQyxnQkFDNUI7VUFBSSxTQUFTLEVBQUMsVUFBVTtVQUFBLHVCQUN0QixxRUFBQyxnREFBSTtZQUFDLElBQUksRUFBQyxTQUFTO1lBQUEsdUJBQ2hCO2NBQUcsU0FBUyxFQUFFLFVBQVUsR0FBRzlCLFFBQVEsQ0FBQyxTQUFTLENBQUU7Y0FBQSx3QkFDM0M7Z0JBQUcsU0FBUyxFQUFDLGFBQWE7Z0JBQUMsZUFBWTtjQUFNO2dCQUFBO2dCQUFBO2dCQUFBO2NBQUEsUUFBSztZQUFBO2NBQUE7Y0FBQTtjQUFBO1lBQUE7VUFDbEQ7WUFBQTtZQUFBO1lBQUE7VUFBQTtRQUNEO1VBQUE7VUFBQTtVQUFBO1FBQUEsUUFDTixHQUNIRyxZQUFZLEVBQUU7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBRW5CO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFDRDtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsUUFDRjtBQUVSO0FBQUMsR0FqSFFaLE1BQU07RUFBQSxRQUNFRSxxREFBUztBQUFBO0FBQUEsS0FEakJGLE1BQU07QUFtSEFBLHFFQUFNO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmNmOTg1ZmEyZmFkMTk1ZmIxM2IyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHtEYXRhQ29udGV4dH0gZnJvbSAnLi4vc3RvcmUvR2xvYmFsU3RhdGUnXHJcbmltcG9ydCBDb29raWUgZnJvbSAnanMtY29va2llJ1xyXG5cclxuZnVuY3Rpb24gTmF2QmFyKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3Qge3N0YXRlLCBkaXNwYXRjaH0gPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KVxyXG4gIGNvbnN0IHsgYXV0aCxjYXJ0IH0gPSBzdGF0ZVxyXG5cclxuXHJcblxyXG5cclxuICBjb25zdCBpc0FjdGl2ZSA9IChyKSA9PiB7XHJcbiAgICBpZihyID09PSByb3V0ZXIucGF0aG5hbWUpe1xyXG4gICAgICAgIHJldHVybiBcIiBhY3RpdmVcIlxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxufVxyXG4gY29uc3QgIGxvZ2dlZFJvdXRlciA9ICgpID0+IHtcclxuICByZXR1cm4oXHJcbiAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBkcm9wZG93blwiPlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rIGRyb3Bkb3duLXRvZ2dsZVwiIGhyZWY9XCIjXCIgaWQ9XCJuYXZiYXJEcm9wZG93bk1lbnVMaW5rXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2F1dGgudXNlci5hdmF0YXJ9IGFsdD17YXV0aC51c2VyLmF2YXRhcn0gXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJywgd2lkdGg6ICczMHB4JywgaGVpZ2h0OiAnMzBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTNweCknLCBtYXJnaW5SaWdodDogJzNweCdcclxuICAgICAgICAgICAgICAgICAgICB9fSAvPiB7YXV0aC51c2VyLm5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCIgYXJpYS1sYWJlbGxlZGJ5PVwibmF2YmFyRHJvcGRvd25NZW51TGlua1wiPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCI+UHJvZmlsZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRoLnVzZXIucm9sZSA9PT0gJ2FkbWluJyAmJiBhZG1pblJvdXRlcigpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tZGl2aWRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PkxvZ291dDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2xpPlxyXG4gIClcclxufSBcclxuY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG4gIENvb2tpZS5yZW1vdmUoJ3JlZnJlc2h0b2tlbicsIHtwYXRoOiAnYXBpL2F1dGgvYWNjZXNzVG9rZW4nfSlcclxuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnZmlyc3RMb2dpbicpXHJcbiAgZGlzcGF0Y2goeyB0eXBlOiAnQVVUSCcsIHBheWxvYWQ6IHt9IH0pXHJcbiAgZGlzcGF0Y2goeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge3N1Y2Nlc3M6ICdMb2dnZWQgb3V0ISd9IH0pXHJcbiAgcmV0dXJuIHJvdXRlci5wdXNoKCcvJylcclxufVxyXG5jb25zdCBhZG1pblJvdXRlciA9ICgpID0+IHtcclxuICByZXR1cm4oXHJcbiAgICAgIDw+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvdXNlcnNcIj5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIj5Vc2VyczwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8TGluayBocmVmPVwiL2NyZWF0ZVwiPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiPlByb2R1Y3RzPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvY2F0ZWdvcmllc1wiPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiPkNhdGVnb3JpZXM8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbGcgbmF2YmFyLWxpZ2h0IGJnLWxpZ2h0XCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgc3R5bGU9e3tjb2xvcjogXCIjMzM0YThjXCIgfX0+PGgyPjxiPkFUSFRIQU5BWUFLQSBGT09EUzwvYj48L2gyPjwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNuYXZiYXJOYXZEcm9wZG93blwiIGFyaWEtY29udHJvbHM9XCJuYXZiYXJOYXZEcm9wZG93blwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZSBqdXN0aWZ5LWNvbnRlbnQtZW5kXCIgaWQ9XCJuYXZiYXJOYXZEcm9wZG93blwiPlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdlwiPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBcIj5cclxuICAgICAgICA8TGluayBocmVmPVwiL2NhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17XCJuYXYtbGlua1wiICsgaXNBY3RpdmUoJy9jYXJ0Jyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zaG9wcGluZy1jYXJ0IHBvc2l0aW9uLXJlbGF0aXZlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBvc2l0aW9uLWFic29sdXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICczcHggNnB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjZWQxNDNkYzInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogJy0xMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAnLTEwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzE0cHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhcnQubGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9pPiBDYXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIFxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgT2JqZWN0LmtleXMoYXV0aCkubGVuZ3RoID09PSAwIFxyXG4gICAgICAgICAgICAgID8gPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbmluXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e1wibmF2LWxpbmtcIiArIGlzQWN0aXZlKCcvc2lnbmluJyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS11c2VyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiBTaWduIGluXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDogbG9nZ2VkUm91dGVyKClcclxuICAgICAgICB9IFxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9uYXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZCYXJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==