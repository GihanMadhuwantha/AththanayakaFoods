module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/product/[id].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/product/[id].js":
/*!*******************************!*\
  !*** ./pages/product/[id].js ***!
  \*******************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_fetchData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/fetchData */ "./utils/fetchData.js");
/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/GlobalState */ "./store/GlobalState.js");
/* harmony import */ var _store_Actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/Actions */ "./store/Actions.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\gihanmadhuwantha\\Desktop\\system_Development\\AththanayakaFoods\\aththanayakafoods\\pages\\product\\[id].js";






const DetailProduct = props => {
  const {
    0: product
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.product);
  const {
    0: tab,
    1: setTab
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    state,
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_store_GlobalState__WEBPACK_IMPORTED_MODULE_3__["DataContext"]);
  const {
    cart
  } = state;
  const isActive = index => {
    if (tab === index) return " active";
    return "";
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
    className: "row detail_page",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("title", {
        children: "Detail Product"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      className: "col-md-6",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
        src: product.images[tab].url,
        alt: product.images[tab].url,
        className: "d-block img-thumbnail rounded mt-4 w-100",
        style: {
          height: '350px'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        className: "row mx-0",
        style: {
          cursor: 'pointer'
        },
        children: product.images.map((img, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
          src: img.url,
          alt: img.url,
          className: `img-thumbnail rounded ${isActive(index)}`,
          style: {
            height: '80px',
            width: '20%'
          },
          onClick: () => setTab(index)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 25
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      className: "col-md-6 mt-3",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h2", {
        className: "text-uppercase",
        children: product.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h5", {
        className: "text-danger",
        children: ["Rs.", product.price]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        className: "row mx-0 d-flex justify-content-between",
        children: [product.inStock > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h6", {
          className: "text-danger",
          children: ["In Stock: ", product.inStock]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 27
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h6", {
          className: "text-danger",
          children: "Out Stock"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 27
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h6", {
          className: "text-danger",
          children: ["Sold: ", product.sold]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        className: "my-2",
        children: product.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        className: "my-2",
        children: product.content
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("button", {
        type: "button",
        className: "btn btn-dark d-block my-3 px-5",
        onClick: () => dispatch(Object(_store_Actions__WEBPACK_IMPORTED_MODULE_4__["addToCart"])(product, cart)),
        children: "Buy"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }, undefined);
};
async function getServerSideProps({
  params: {
    id
  }
}) {
  const res = await Object(_utils_fetchData__WEBPACK_IMPORTED_MODULE_2__["getData"])(`product/${id}`);

  // server side rendering
  return {
    props: {
      product: res.product
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (DetailProduct);

/***/ }),

/***/ "./store/Actions.js":
/*!**************************!*\
  !*** ./store/Actions.js ***!
  \**************************/
/*! exports provided: ACTIONS, addToCart, decrease, increase, deleteItem, updateItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTIONS", function() { return ACTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToCart", function() { return addToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decrease", function() { return decrease; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "increase", function() { return increase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteItem", function() { return deleteItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateItem", function() { return updateItem; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const ACTIONS = {
  NOTIFY: 'NOTIFY',
  AUTH: 'AUTH',
  ADD_CART: 'ADD_CART',
  ADD_MODAL: 'ADD_MODAL'
};
const addToCart = (product, cart) => {
  if (product.inStock === 0) return {
    type: 'NOTIFY',
    payload: {
      error: 'This product is out of stock.'
    }
  };
  const check = cart.every(item => {
    return item._id !== product._id;
  });
  if (!check) return {
    type: 'NOTIFY',
    payload: {
      error: 'The product has been added to cart.'
    }
  };
  return {
    type: 'ADD_CART',
    payload: [...cart, _objectSpread(_objectSpread({}, product), {}, {
      quantity: 1
    })]
  };
};
const decrease = (data, id) => {
  const newData = [...data];
  newData.forEach(item => {
    if (item._id === id) item.quantity -= 1;
  });
  return {
    type: 'ADD_CART',
    payload: newData
  };
};
const increase = (data, id) => {
  const newData = [...data];
  newData.forEach(item => {
    if (item._id === id) item.quantity += 1;
  });
  return {
    type: 'ADD_CART',
    payload: newData
  };
};
const deleteItem = (data, id, type) => {
  const newData = data.filter(item => item._id !== id);
  return {
    type,
    payload: newData
  };
};
const updateItem = (data, id, post, type) => {
  const newData = data.map(item => item._id === id ? post : item);
  return {
    type,
    payload: newData
  };
};

/***/ }),

/***/ "./store/GlobalState.js":
/*!******************************!*\
  !*** ./store/GlobalState.js ***!
  \******************************/
/*! exports provided: DataContext, DataProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataContext", function() { return DataContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataProvider", function() { return DataProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Reducers */ "./store/Reducers.js");
/* harmony import */ var _utils_fetchData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/fetchData */ "./utils/fetchData.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\gihanmadhuwantha\\Desktop\\system_Development\\AththanayakaFoods\\aththanayakafoods\\store\\GlobalState.js";




const DataContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
const DataProvider = ({
  children
}) => {
  const initialState = {
    notify: {},
    auth: {},
    cart: [],
    modal: []
  };
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_Reducers__WEBPACK_IMPORTED_MODULE_1__["default"], initialState);
  const {
    cart,
    auth
  } = state;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const firstLogin = localStorage.getItem("firstLogin");
    if (firstLogin) {
      Object(_utils_fetchData__WEBPACK_IMPORTED_MODULE_2__["getData"])('auth/accessToken').then(res => {
        if (res.err) return localStorage.removeItem("firstLogin");
        dispatch({
          type: "AUTH",
          payload: {
            token: res.access_token,
            user: res.user
          }
        });
      });
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    localStorage.setItem('__next__cart01__devat', JSON.stringify(cart));
  }, [cart]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const __next__cart01__devat = JSON.parse(localStorage.getItem('__next__cart01__devat'));
    if (__next__cart01__devat) dispatch({
      type: 'ADD_CART',
      payload: __next__cart01__devat
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(DataContext.Provider, {
    value: {
      state,
      dispatch
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./store/Reducers.js":
/*!***************************!*\
  !*** ./store/Reducers.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Actions */ "./store/Actions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

const reducers = (state, action) => {
  switch (action.type) {
    case _Actions__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].NOTIFY:
      return _objectSpread(_objectSpread({}, state), {}, {
        notify: action.payload
      });
    case _Actions__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].AUTH:
      return _objectSpread(_objectSpread({}, state), {}, {
        auth: action.payload
      });
    case _Actions__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].ADD_CART:
      return _objectSpread(_objectSpread({}, state), {}, {
        cart: action.payload
      });
    case _Actions__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].ADD_MODAL:
      return _objectSpread(_objectSpread({}, state), {}, {
        modal: action.payload
      });
    default:
      return state;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (reducers);

/***/ }),

/***/ "./utils/fetchData.js":
/*!****************************!*\
  !*** ./utils/fetchData.js ***!
  \****************************/
/*! exports provided: getData, postData, putData, patchData, deleteData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getData", function() { return getData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "putData", function() { return putData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patchData", function() { return patchData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteData", function() { return deleteData; });
const baseUrl = "http://localhost:3000";
const getData = async (url, token) => {
  const res = await fetch(`${baseUrl}/api/${url}`, {
    method: 'GET',
    headers: {
      'Authorization': token
    }
  });
  const data = await res.json();
  return data;
};
const postData = async (url, post, token) => {
  const res = await fetch(`${baseUrl}/api/${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
    body: JSON.stringify(post)
  });
  const data = await res.json();
  return data;
};
const putData = async (url, post, token) => {
  const res = await fetch(`${baseUrl}/api/${url}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
    body: JSON.stringify(post)
  });
  const data = await res.json();
  return data;
};
const patchData = async (url, post, token) => {
  const res = await fetch(`${baseUrl}/api/${url}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
    body: JSON.stringify(post)
  });
  const data = await res.json();
  return data;
};
const deleteData = async (url, token) => {
  const res = await fetch(`${baseUrl}/api/${url}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    }
  });
  const data = await res.json();
  return data;
};

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcHJvZHVjdC8uanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9HbG9iYWxTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9SZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9mZXRjaERhdGEuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJEZXRhaWxQcm9kdWN0IiwicHJvcHMiLCJwcm9kdWN0IiwidXNlU3RhdGUiLCJ0YWIiLCJzZXRUYWIiLCJzdGF0ZSIsImRpc3BhdGNoIiwidXNlQ29udGV4dCIsIkRhdGFDb250ZXh0IiwiY2FydCIsImlzQWN0aXZlIiwiaW5kZXgiLCJpbWFnZXMiLCJ1cmwiLCJoZWlnaHQiLCJjdXJzb3IiLCJtYXAiLCJpbWciLCJ3aWR0aCIsInRpdGxlIiwicHJpY2UiLCJpblN0b2NrIiwic29sZCIsImRlc2NyaXB0aW9uIiwiY29udGVudCIsImFkZFRvQ2FydCIsImdldFNlcnZlclNpZGVQcm9wcyIsInBhcmFtcyIsImlkIiwicmVzIiwiZ2V0RGF0YSIsIkFDVElPTlMiLCJOT1RJRlkiLCJBVVRIIiwiQUREX0NBUlQiLCJBRERfTU9EQUwiLCJ0eXBlIiwicGF5bG9hZCIsImVycm9yIiwiY2hlY2siLCJldmVyeSIsIml0ZW0iLCJfaWQiLCJxdWFudGl0eSIsImRlY3JlYXNlIiwiZGF0YSIsIm5ld0RhdGEiLCJmb3JFYWNoIiwiaW5jcmVhc2UiLCJkZWxldGVJdGVtIiwiZmlsdGVyIiwidXBkYXRlSXRlbSIsInBvc3QiLCJjcmVhdGVDb250ZXh0IiwiRGF0YVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJpbml0aWFsU3RhdGUiLCJub3RpZnkiLCJhdXRoIiwibW9kYWwiLCJ1c2VSZWR1Y2VyIiwicmVkdWNlcnMiLCJ1c2VFZmZlY3QiLCJmaXJzdExvZ2luIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInRoZW4iLCJlcnIiLCJyZW1vdmVJdGVtIiwidG9rZW4iLCJhY2Nlc3NfdG9rZW4iLCJ1c2VyIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJfX25leHRfX2NhcnQwMV9fZGV2YXQiLCJwYXJzZSIsImFjdGlvbiIsImJhc2VVcmwiLCJwcm9jZXNzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwianNvbiIsInBvc3REYXRhIiwiYm9keSIsInB1dERhdGEiLCJwYXRjaERhdGEiLCJkZWxldGVEYXRhIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FD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QUFTLENBQUN0QixJQUFJO0VBQzdCLENBQUMsQ0FBQztFQUVGLE1BQU1QLElBQUksR0FBRyxNQUFNaEIsR0FBRyxDQUFDc0QsSUFBSSxFQUFFO0VBQzdCLE9BQU90QyxJQUFJO0FBQ2YsQ0FBQztBQUdNLE1BQU0yQyxVQUFVLEdBQUcsT0FBTzNFLEdBQUcsRUFBRXdELEtBQUssS0FBSztFQUM1QyxNQUFNeEMsR0FBRyxHQUFHLE1BQU1tRCxLQUFLLENBQUUsR0FBRUYsT0FBUSxRQUFPakUsR0FBSSxFQUFDLEVBQUU7SUFDN0NvRSxNQUFNLEVBQUUsUUFBUTtJQUNoQkMsT0FBTyxFQUFFO01BQ0wsY0FBYyxFQUFFLGtCQUFrQjtNQUNsQyxlQUFlLEVBQUViO0lBQ3JCO0VBQ0osQ0FBQyxDQUFDO0VBRUYsTUFBTXhCLElBQUksR0FBRyxNQUFNaEIsR0FBRyxDQUFDc0QsSUFBSSxFQUFFO0VBQzdCLE9BQU90QyxJQUFJO0FBQ2YsQ0FBQyxDOzs7Ozs7Ozs7OztBQ3RFRCxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9wcm9kdWN0L1tpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3Byb2R1Y3QvW2lkXS5qc1wiKTtcbiIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgZ2V0RGF0YSB9IGZyb20gJy4uLy4uL3V0aWxzL2ZldGNoRGF0YSdcclxuaW1wb3J0IHsgRGF0YUNvbnRleHQgfSBmcm9tICcuLi8uLi9zdG9yZS9HbG9iYWxTdGF0ZSdcclxuaW1wb3J0IHsgYWRkVG9DYXJ0IH0gZnJvbSAnLi4vLi4vc3RvcmUvQWN0aW9ucydcclxuICAgXHJcblxyXG5jb25zdCBEZXRhaWxQcm9kdWN0ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbcHJvZHVjdF0gPSB1c2VTdGF0ZShwcm9wcy5wcm9kdWN0KVxyXG4gICAgY29uc3QgW3RhYiwgc2V0VGFiXSA9IHVzZVN0YXRlKDApXHJcbiAgICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChEYXRhQ29udGV4dClcclxuICAgIGNvbnN0IHsgY2FydCB9ID0gc3RhdGVcclxuICAgIFxyXG4gICAgY29uc3QgaXNBY3RpdmUgPSAoaW5kZXgpID0+IHtcclxuICAgICAgICBpZih0YWIgPT09IGluZGV4KSByZXR1cm4gXCIgYWN0aXZlXCI7XHJcbiAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGRldGFpbF9wYWdlXCI+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkRldGFpbCBQcm9kdWN0PC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9eyBwcm9kdWN0LmltYWdlc1t0YWJdLnVybCB9IGFsdD17IHByb2R1Y3QuaW1hZ2VzW3RhYl0udXJsIH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtYmxvY2sgaW1nLXRodW1ibmFpbCByb3VuZGVkIG10LTQgdy0xMDBcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3toZWlnaHQ6ICczNTBweCd9fSAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG14LTBcIiBzdHlsZT17e2N1cnNvcjogJ3BvaW50ZXInfX0gPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5pbWFnZXMubWFwKChpbWcsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcga2V5PXtpbmRleH0gc3JjPXtpbWcudXJsfSBhbHQ9e2ltZy51cmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGltZy10aHVtYm5haWwgcm91bmRlZCAke2lzQWN0aXZlKGluZGV4KX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2hlaWdodDogJzgwcHgnLCB3aWR0aDogJzIwJSd9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUYWIoaW5kZXgpfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC11cHBlcmNhc2VcIj57cHJvZHVjdC50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+UnMue3Byb2R1Y3QucHJpY2V9PC9oNT5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBteC0wIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5pblN0b2NrID4gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IDxoNiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPkluIFN0b2NrOiB7cHJvZHVjdC5pblN0b2NrfTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogPGg2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+T3V0IFN0b2NrPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPlNvbGQ6IHtwcm9kdWN0LnNvbGR9PC9oNj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMlwiPntwcm9kdWN0LmRlc2NyaXB0aW9ufTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3QuY29udGVudH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGFyayBkLWJsb2NrIG15LTMgcHgtNVwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChhZGRUb0NhcnQocHJvZHVjdCwgY2FydCkpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgQnV5XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gICAgfVxyXG4gICAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7cGFyYW1zOntpZH19KSB7XHJcbiAgICAgIFxyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGdldERhdGEoYHByb2R1Y3QvJHtpZH1gKVxyXG4gICAgIFxyXG4gICAgICBcclxuICAgICAgICAvLyBzZXJ2ZXIgc2lkZSByZW5kZXJpbmdcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwcm9wczp7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0OiByZXMucHJvZHVjdFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgZXhwb3J0IGRlZmF1bHQgRGV0YWlsUHJvZHVjdCIsImV4cG9ydCBjb25zdCBBQ1RJT05TID0ge1xyXG4gICAgTk9USUZZOiAnTk9USUZZJyxcclxuICAgIEFVVEg6ICdBVVRIJyxcclxuICAgIEFERF9DQVJUOiAnQUREX0NBUlQnLFxyXG4gICAgQUREX01PREFMOiAnQUREX01PREFMJ1xyXG5cclxufVxyXG5leHBvcnQgY29uc3QgYWRkVG9DYXJ0ID0gKHByb2R1Y3QsIGNhcnQpID0+IHtcclxuICAgIGlmKHByb2R1Y3QuaW5TdG9jayA9PT0gMClcclxuICAgIHJldHVybiAoeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge2Vycm9yOiAnVGhpcyBwcm9kdWN0IGlzIG91dCBvZiBzdG9jay4nfSB9KSBcclxuXHJcbiAgICBjb25zdCBjaGVjayA9IGNhcnQuZXZlcnkoaXRlbSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0uX2lkICE9PSBwcm9kdWN0Ll9pZFxyXG4gICAgfSlcclxuXHJcbiAgICBpZighY2hlY2spIHJldHVybiAoeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge2Vycm9yOiAnVGhlIHByb2R1Y3QgaGFzIGJlZW4gYWRkZWQgdG8gY2FydC4nfSB9KSBcclxuXHJcbiAgICByZXR1cm4gKHsgdHlwZTogJ0FERF9DQVJUJywgcGF5bG9hZDogWy4uLmNhcnQsIHsuLi5wcm9kdWN0LCBxdWFudGl0eTogMX1dIH0pIFxyXG59XHJcbmV4cG9ydCBjb25zdCBkZWNyZWFzZSA9IChkYXRhLCBpZCkgPT4ge1xyXG4gICAgY29uc3QgbmV3RGF0YSA9IFsuLi5kYXRhXVxyXG4gICAgbmV3RGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGlmKGl0ZW0uX2lkID09PSBpZCkgaXRlbS5xdWFudGl0eSAtPSAxXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiAoeyB0eXBlOiAnQUREX0NBUlQnLCBwYXlsb2FkOiBuZXdEYXRhIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpbmNyZWFzZSA9IChkYXRhLCBpZCkgPT4ge1xyXG4gICAgY29uc3QgbmV3RGF0YSA9IFsuLi5kYXRhXVxyXG4gICAgbmV3RGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGlmKGl0ZW0uX2lkID09PSBpZCkgaXRlbS5xdWFudGl0eSArPSAxXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiAoeyB0eXBlOiAnQUREX0NBUlQnLCBwYXlsb2FkOiBuZXdEYXRhIH0pXHJcbn1cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZUl0ZW0gPSAoZGF0YSwgaWQsIHR5cGUpID0+IHtcclxuICAgIGNvbnN0IG5ld0RhdGEgPSBkYXRhLmZpbHRlcihpdGVtID0+IGl0ZW0uX2lkICE9PSBpZClcclxuICAgIHJldHVybiAoeyB0eXBlLCBwYXlsb2FkOiBuZXdEYXRhfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZUl0ZW0gPSAoZGF0YSwgaWQsIHBvc3QsIHR5cGUpID0+IHtcclxuICAgIGNvbnN0IG5ld0RhdGEgPSBkYXRhLm1hcChpdGVtID0+IChpdGVtLl9pZCA9PT0gaWQgPyBwb3N0IDogaXRlbSkpXHJcbiAgICByZXR1cm4gKHsgdHlwZSwgcGF5bG9hZDogbmV3RGF0YX0pXHJcbn0gICAiLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VSZWR1Y2VyLHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgcmVkdWNlcnMgZnJvbSAnLi9SZWR1Y2VycydcclxuaW1wb3J0IHsgZ2V0RGF0YSB9IGZyb20gJy4uL3V0aWxzL2ZldGNoRGF0YSdcclxuXHJcblxyXG5leHBvcnQgY29uc3QgRGF0YUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KClcclxuZXhwb3J0IGNvbnN0IERhdGFQcm92aWRlciA9ICh7Y2hpbGRyZW59KSA9PiB7XHJcbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB7IFxyXG4gICAgICAgIG5vdGlmeToge30sIGF1dGg6IHt9LGNhcnQ6W10sbW9kYWw6IFtdfVxyXG4gICAgICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VycywgaW5pdGlhbFN0YXRlKVxyXG4gICAgICAgIGNvbnN0IHsgY2FydCwgYXV0aCB9ID0gc3RhdGVcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmlyc3RMb2dpbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZmlyc3RMb2dpblwiKTtcclxuICAgIGlmKGZpcnN0TG9naW4pe1xyXG4gICAgICAgIGdldERhdGEoJ2F1dGgvYWNjZXNzVG9rZW4nKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGlmKHJlcy5lcnIpIHJldHVybiBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImZpcnN0TG9naW5cIilcclxuICAgICAgICAgICAgZGlzcGF0Y2goeyBcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiQVVUSFwiLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiByZXMuYWNjZXNzX3Rva2VuLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXI6IHJlcy51c2VyXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIH0sW10pXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfX2NhcnQwMV9fZGV2YXQnLCBKU09OLnN0cmluZ2lmeShjYXJ0KSlcclxuICAgIH0sIFtjYXJ0XSlcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgX19uZXh0X19jYXJ0MDFfX2RldmF0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnX19uZXh0X19jYXJ0MDFfX2RldmF0JykpXHJcblxyXG4gICAgICAgIGlmKF9fbmV4dF9fY2FydDAxX19kZXZhdCkgZGlzcGF0Y2goeyB0eXBlOiAnQUREX0NBUlQnLCBwYXlsb2FkOiBfX25leHRfX2NhcnQwMV9fZGV2YXQgfSlcclxuICAgIH0sIFtdKVxyXG5cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICA8RGF0YUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tzdGF0ZSwgZGlzcGF0Y2h9fT5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0RhdGFDb250ZXh0LlByb3ZpZGVyPlxyXG4pXHJcbn0iLCJpbXBvcnQgeyBBQ1RJT05TIH0gZnJvbSAnLi9BY3Rpb25zJ1xyXG5cclxuXHJcbmNvbnN0IHJlZHVjZXJzID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBBQ1RJT05TLk5PVElGWTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbm90aWZ5OiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgQUNUSU9OUy5BVVRIOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhdXRoOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9OyBcclxuICAgICAgICAgICAgY2FzZSBBQ1RJT05TLkFERF9DQVJUOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBjYXJ0OiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIEFDVElPTlMuQUREX01PREFMOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBtb2RhbDogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV4cG9ydCBkZWZhdWx0IHJlZHVjZXJzIiwiY29uc3QgYmFzZVVybCA9IHByb2Nlc3MuZW52LkJBU0VfVVJMXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RGF0YSA9IGFzeW5jICh1cmwsIHRva2VuKSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfS9hcGkvJHt1cmx9YCwge1xyXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRva2VuXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgcmV0dXJuIGRhdGFcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHBvc3REYXRhID0gYXN5bmMgKHVybCwgcG9zdCwgdG9rZW4pID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2Jhc2VVcmx9L2FwaS8ke3VybH1gLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRva2VuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwb3N0KVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgcmV0dXJuIGRhdGFcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgcHV0RGF0YSA9IGFzeW5jICh1cmwsIHBvc3QsIHRva2VuKSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfS9hcGkvJHt1cmx9YCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRva2VuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwb3N0KVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgcmV0dXJuIGRhdGFcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHBhdGNoRGF0YSA9IGFzeW5jICh1cmwsIHBvc3QsIHRva2VuKSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfS9hcGkvJHt1cmx9YCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BBVENIJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogdG9rZW5cclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBvc3QpXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICByZXR1cm4gZGF0YVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZURhdGEgPSBhc3luYyAodXJsLCB0b2tlbikgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVybH0vYXBpLyR7dXJsfWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiB0b2tlblxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgIHJldHVybiBkYXRhXHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=