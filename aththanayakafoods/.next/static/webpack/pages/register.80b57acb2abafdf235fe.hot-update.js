webpackHotUpdate_N_E("pages/register",{

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_valid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/valid */ "./utils/valid.js");
/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/GlobalState */ "./store/GlobalState.js");
/* harmony import */ var _utils_fetchData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/fetchData */ "./utils/fetchData.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);


var _jsxFileName = "C:\\Users\\gihanmadhuwantha\\Desktop\\system_Development\\AththanayakaFoods\\aththanayakafoods\\pages\\register.js",
  _this = undefined,
  _s = $RefreshSig$();
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }








var Register = function Register() {
  _s();
  var initialState = {
    name: '',
    email: '',
    password: '',
    cf_password: ''
  };
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(initialState),
    userData = _useState[0],
    setUserData = _useState[1];
  var name = userData.name,
    email = userData.email,
    password = userData.password,
    cf_password = userData.cf_password;
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_store_GlobalState__WEBPACK_IMPORTED_MODULE_6__["DataContext"]),
    state = _useContext.state,
    dispatch = _useContext.dispatch;
  var auth = state.auth;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();
  var handleChangeInput = function handleChangeInput(e) {
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value;
    setUserData(_objectSpread(_objectSpread({}, userData), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, name, value)));
    dispatch({
      type: 'NOTIFY',
      payload: {}
    });
  };
  var handleSubmit = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      var errMsg, res;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              errMsg = Object(_utils_valid__WEBPACK_IMPORTED_MODULE_5__["default"])(name, email, password, cf_password);
              if (!errMsg) {
                _context.next = 4;
                break;
              }
              return _context.abrupt("return", dispatch({
                type: 'NOTIFY',
                payload: {
                  error: errMsg
                }
              }));
            case 4:
              dispatch({
                type: 'NOTIFY',
                payload: {
                  loading: true
                }
              });
              _context.next = 7;
              return Object(_utils_fetchData__WEBPACK_IMPORTED_MODULE_7__["postData"])('auth/register', userData);
            case 7:
              res = _context.sent;
              if (!res.err) {
                _context.next = 10;
                break;
              }
              return _context.abrupt("return", dispatch({
                type: 'NOTIFY',
                payload: {
                  error: res.err
                }
              }));
            case 10:
              return _context.abrupt("return", dispatch({
                type: 'NOTIFY',
                payload: {
                  success: res.msg
                }
              }));
            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  /*  useEffect(() => {
     if(Object.keys(auth).length !== 0) router.push("/")
   }, [auth]) */
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("title", {
        children: "Register Page"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("form", {
      className: "mx-auto my-4",
      style: {
        maxWidth: '500px'
      },
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
        className: "form-group",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("label", {
          htmlFor: "name",
          children: "Name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", {
          type: "text",
          className: "form-control",
          id: "name",
          name: "name",
          value: name,
          onChange: handleChangeInput
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
        className: "form-group",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("label", {
          htmlFor: "exampleInputEmail1",
          children: "Email address"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", {
          type: "email",
          className: "form-control",
          id: "exampleInputEmail1",
          "aria-describedby": "emailHelp",
          name: "email",
          value: email,
          onChange: handleChangeInput
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("small", {
          id: "emailHelp",
          className: "form-text text-muted",
          children: "We'll never share your email with anyone else."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
        className: "form-group",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("label", {
          htmlFor: "exampleInputPassword1",
          children: "Password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", {
          type: "password",
          className: "form-control",
          id: "exampleInputPassword1",
          name: "password",
          value: password,
          onChange: handleChangeInput
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
        className: "form-group",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("label", {
          htmlFor: "exampleInputPassword2",
          children: "Confirm Password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", {
          type: "password",
          className: "form-control",
          id: "exampleInputPassword2",
          name: "cf_password",
          value: cf_password,
          onChange: handleChangeInput
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("button", {
        type: "submit",
        className: "btn btn-dark w-100",
        children: "Register"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("p", {
        className: "my-2",
        children: ["Already have an account? ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/signin",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("a", {
            style: {
              color: 'crimson'
            },
            children: "Login Now"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 57
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 36
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 7
  }, _this);
};
_s(Register, "+7aG6LMLxWDUqKW1T7+33Q1/E9g=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"]];
});
_c = Register;
/* harmony default export */ __webpack_exports__["default"] = (Register);
var _c;
$RefreshReg$(_c, "Register");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVnaXN0ZXIuanMiXSwibmFtZXMiOlsiUmVnaXN0ZXIiLCJpbml0aWFsU3RhdGUiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImNmX3Bhc3N3b3JkIiwidXNlU3RhdGUiLCJ1c2VyRGF0YSIsInNldFVzZXJEYXRhIiwidXNlQ29udGV4dCIsIkRhdGFDb250ZXh0Iiwic3RhdGUiLCJkaXNwYXRjaCIsImF1dGgiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJoYW5kbGVDaGFuZ2VJbnB1dCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInR5cGUiLCJwYXlsb2FkIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJlcnJNc2ciLCJ2YWxpZCIsImVycm9yIiwibG9hZGluZyIsInBvc3REYXRhIiwicmVzIiwiZXJyIiwic3VjY2VzcyIsIm1zZyIsIm1heFdpZHRoIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0NBQ0E7QUFBQTtBQUFBO0FBRDRCO0FBQ0E7QUFDYztBQUNSO0FBQ2M7QUFDTDtBQUNKO0FBQUE7QUFHdkMsSUFBTUEsUUFBUSxHQUFDLFNBQVRBLFFBQVEsR0FBSztFQUFBO0VBQ2YsSUFBTUMsWUFBWSxHQUFHO0lBQUVDLElBQUksRUFBRSxFQUFFO0lBQUVDLEtBQUssRUFBRSxFQUFFO0lBQUVDLFFBQVEsRUFBRSxFQUFFO0lBQUVDLFdBQVcsRUFBRTtFQUFHLENBQUM7RUFDM0UsZ0JBQWdDQyxzREFBUSxDQUFDTCxZQUFZLENBQUM7SUFBL0NNLFFBQVE7SUFBRUMsV0FBVztFQUM1QixJQUFRTixJQUFJLEdBQW1DSyxRQUFRLENBQS9DTCxJQUFJO0lBQUVDLEtBQUssR0FBNEJJLFFBQVEsQ0FBekNKLEtBQUs7SUFBRUMsUUFBUSxHQUFrQkcsUUFBUSxDQUFsQ0gsUUFBUTtJQUFFQyxXQUFXLEdBQUtFLFFBQVEsQ0FBeEJGLFdBQVc7RUFDMUMsa0JBQTBC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O1FBQUMsU0FBUyxFQUFDLG9CQUFvQjtRQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQUFrQixlQUV0RTtRQUFHLFNBQVMsRUFBQyxNQUFNO1FBQUEscURBQ1EscUVBQUMsZ0RBQUk7VUFBQyxJQUFJLEVBQUMsU0FBUztVQUFBLHVCQUFDO1lBQUcsS0FBSyxFQUFFO2NBQUNrQixLQUFLLEVBQUU7WUFBUyxDQUFFO1lBQUE7VUFBQTtZQUFBO1lBQUE7WUFBQTtVQUFBO1FBQWM7VUFBQTtVQUFBO1VBQUE7UUFBQSxTQUFPO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQUM5RjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FDQztFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsU0FDSDtBQU1OLENBQUM7QUFBQSxHQTNFQ2xDLFFBQVE7RUFBQSxRQU1LZSxxREFBUztBQUFBO0FBQUEsS0FOdEJmLFFBQVE7QUE2RUtBLHVFQUFRO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWdpc3Rlci44MGI1N2FjYjJhYmFmZGYyMzVmZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7dXNlU3RhdGUsIHVzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgdmFsaWQgZnJvbSAnLi4vdXRpbHMvdmFsaWQnXHJcbmltcG9ydCB7RGF0YUNvbnRleHR9IGZyb20gJy4uL3N0b3JlL0dsb2JhbFN0YXRlJ1xyXG5pbXBvcnQge3Bvc3REYXRhfSBmcm9tICcuLi91dGlscy9mZXRjaERhdGEnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuXHJcbmNvbnN0IFJlZ2lzdGVyPSgpPT57XHJcbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB7IG5hbWU6ICcnLCBlbWFpbDogJycsIHBhc3N3b3JkOiAnJywgY2ZfcGFzc3dvcmQ6ICcnIH1cclxuICAgIGNvbnN0IFt1c2VyRGF0YSwgc2V0VXNlckRhdGFdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKVxyXG4gICAgY29uc3QgeyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIGNmX3Bhc3N3b3JkIH0gPSB1c2VyRGF0YVxyXG4gICAgY29uc3Qge3N0YXRlLCBkaXNwYXRjaH0gPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KVxyXG4gICAgY29uc3QgeyBhdXRoIH0gPSBzdGF0ZVxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIFxyXG4gICAgXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VJbnB1dCA9IGUgPT4ge1xyXG4gICAgICAgIGNvbnN0IHtuYW1lLCB2YWx1ZX0gPSBlLnRhcmdldFxyXG4gICAgICAgIHNldFVzZXJEYXRhKHsuLi51c2VyRGF0YSwgW25hbWVdOnZhbHVlfSlcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7fSB9KVxyXG5cclxuICAgICAgfVxyXG4gICAgIFxyXG4gICAgIFxyXG4gICAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBjb25zdCBlcnJNc2cgPSB2YWxpZChuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIGNmX3Bhc3N3b3JkKVxyXG4gICAgICAgIGlmKGVyck1zZykgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHtlcnJvcjogZXJyTXNnfSB9KVxyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHtsb2FkaW5nOiB0cnVlfSB9KVxyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHBvc3REYXRhKCdhdXRoL3JlZ2lzdGVyJywgdXNlckRhdGEpXHJcbiAgICAgICAgaWYocmVzLmVycikgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHtlcnJvcjogcmVzLmVycn0gfSlcclxuXHJcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHtzdWNjZXNzOiByZXMubXNnfSB9KVxyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgLyogIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYoT2JqZWN0LmtleXMoYXV0aCkubGVuZ3RoICE9PSAwKSByb3V0ZXIucHVzaChcIi9cIilcclxuICAgICAgfSwgW2F1dGhdKSAqL1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+UmVnaXN0ZXIgUGFnZTwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cIm14LWF1dG8gbXktNFwiIHN0eWxlPXt7bWF4V2lkdGg6ICc1MDBweCd9fSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPk5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJuYW1lXCJcclxuICAgICAgICAgIG5hbWU9XCJuYW1lXCIgdmFsdWU9e25hbWV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VJbnB1dH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImV4YW1wbGVJbnB1dEVtYWlsMVwiPkVtYWlsIGFkZHJlc3M8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwiZXhhbXBsZUlucHV0RW1haWwxXCIgYXJpYS1kZXNjcmliZWRieT1cImVtYWlsSGVscFwiXHJcbiAgICAgICAgICBuYW1lPVwiZW1haWxcIiB2YWx1ZT17ZW1haWx9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VJbnB1dH0gLz5cclxuICAgICAgICAgIDxzbWFsbCBpZD1cImVtYWlsSGVscFwiIGNsYXNzTmFtZT1cImZvcm0tdGV4dCB0ZXh0LW11dGVkXCI+V2UnbGwgbmV2ZXIgc2hhcmUgeW91ciBlbWFpbCB3aXRoIGFueW9uZSBlbHNlLjwvc21hbGw+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJleGFtcGxlSW5wdXRQYXNzd29yZDFcIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJleGFtcGxlSW5wdXRQYXNzd29yZDFcIlxyXG4gICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCIgdmFsdWU9e3Bhc3N3b3JkfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlSW5wdXR9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJleGFtcGxlSW5wdXRQYXNzd29yZDJcIj5Db25maXJtIFBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImV4YW1wbGVJbnB1dFBhc3N3b3JkMlwiXHJcbiAgICAgICAgICBuYW1lPVwiY2ZfcGFzc3dvcmRcIiB2YWx1ZT17Y2ZfcGFzc3dvcmR9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VJbnB1dH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLWRhcmsgdy0xMDBcIj5SZWdpc3RlcjwvYnV0dG9uPlxyXG5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJteS0yXCI+XHJcbiAgICAgICAgICBBbHJlYWR5IGhhdmUgYW4gYWNjb3VudD8gPExpbmsgaHJlZj1cIi9zaWduaW5cIj48YSBzdHlsZT17e2NvbG9yOiAnY3JpbXNvbid9fT5Mb2dpbiBOb3c8L2E+PC9MaW5rPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgICBcclxuICAgIClcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCBSZWdpc3RlciJdLCJzb3VyY2VSb290IjoiIn0=