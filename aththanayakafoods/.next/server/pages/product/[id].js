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
  ADD_MODAL: 'ADD_MODAL',
  ADD_ORDERS: 'ADD_ORDERS'
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
    modal: {},
    orders: []
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
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (auth.token) {
      Object(_utils_fetchData__WEBPACK_IMPORTED_MODULE_2__["getData"])('order', auth.token).then(res => {
        if (res.err) return dispatch({
          type: 'NOTIFY',
          payload: {
            error: res.err
          }
        });
        dispatch({
          type: 'ADD_ORDERS',
          payload: res.orders
        });
      });
      if (auth.user.role === 'admin') {
        Object(_utils_fetchData__WEBPACK_IMPORTED_MODULE_2__["getData"])('user', auth.token).then(res => {
          if (res.err) return dispatch({
            type: 'NOTIFY',
            payload: {
              error: res.err
            }
          });
          dispatch({
            type: 'ADD_USERS',
            payload: res.users
          });
        });
      }
    } else {
      dispatch({
        type: 'ADD_ORDERS',
        payload: []
      });
      dispatch({
        type: 'ADD_USERS',
        payload: []
      });
    }
  }, [auth.token]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(DataContext.Provider, {
    value: {
      state,
      dispatch
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 61,
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
    case _Actions__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].ADD_ORDERS:
      return _objectSpread(_objectSpread({}, state), {}, {
        orders: action.payload
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcHJvZHVjdC8uanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9HbG9iYWxTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9SZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9mZXRjaERhdGEuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJEZXRhaWxQcm9kdWN0IiwicHJvcHMiLCJwcm9kdWN0IiwidXNlU3RhdGUiLCJ0YWIiLCJzZXRUYWIiLCJzdGF0ZSIsImRpc3BhdGNoIiwidXNlQ29udGV4dCIsIkRhdGFDb250ZXh0IiwiY2FydCIsImlzQWN0aXZlIiwiaW5kZXgiLCJpbWFnZXMiLCJ1cmwiLCJoZWlnaHQiLCJjdXJzb3IiLCJtYXAiLCJpbWciLCJ3aWR0aCIsInRpdGxlIiwicHJpY2UiLCJpblN0b2NrIiwic29sZCIsImRlc2NyaXB0aW9uIiwiY29udGVudCIsImFkZFRvQ2FydCIsImdldFNlcnZlclNpZGVQcm9wcyIsInBhcmFtcyIsImlkIiwicmVzIiwiZ2V0RGF0YSIsIkFDVElPTlMiLCJOT1RJRlkiLCJBVVRIIiwiQUREX0NBUlQiLCJBRERfTU9EQUwiLCJBRERfT1JERVJTIiwidHlwZSIsInBheWxvYWQiLCJlcnJvciIsImNoZWNrIiwiZXZlcnkiLCJpdGVtIiwiX2lkIiwicXVhbnRpdHkiLCJkZWNyZWFzZSIsImRhdGEiLCJuZXdEYXRhIiwiZm9yRWFjaCIsImluY3JlYXNlIiwiZGVsZXRlSXRlbSIsImZpbHRlciIsInVwZGF0ZUl0ZW0iLCJwb3N0IiwiY3JlYXRlQ29udGV4dCIsIkRhdGFQcm92aWRlciIsImNoaWxkcmVuIiwiaW5pdGlhbFN0YXRlIiwibm90aWZ5IiwiYXV0aCIsIm1vZGFsIiwib3JkZXJzIiwidXNlUmVkdWNlciIsInJlZHVjZXJzIiwidXNlRWZmZWN0IiwiZmlyc3RMb2dpbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ0aGVuIiwiZXJyIiwicmVtb3ZlSXRlbSIsInRva2VuIiwiYWNjZXNzX3Rva2VuIiwidXNlciIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiX19uZXh0X19jYXJ0MDFfX2RldmF0IiwicGFyc2UiLCJyb2xlIiwidXNlcnMiLCJhY3Rpb24iLCJiYXNlVXJsIiwicHJvY2VzcyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImpzb24iLCJwb3N0RGF0YSIsImJvZHkiLCJwdXREYXRhIiwicGF0Y2hEYXRhIiwiZGVsZXRlRGF0YSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7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LEdBQUcsRUFBRXdDLElBQUksRUFBRWtCLEtBQUssS0FBSztFQUNqRCxNQUFNMUMsR0FBRyxHQUFHLE1BQU11RCxLQUFLLENBQUUsR0FBRUYsT0FBUSxRQUFPckUsR0FBSSxFQUFDLEVBQUU7SUFDN0N3RSxNQUFNLEVBQUUsT0FBTztJQUNmQyxPQUFPLEVBQUU7TUFDTCxjQUFjLEVBQUUsa0JBQWtCO01BQ2xDLGVBQWUsRUFBRWY7SUFDckIsQ0FBQztJQUNEa0IsSUFBSSxFQUFFZCxJQUFJLENBQUNDLFNBQVMsQ0FBQ3ZCLElBQUk7RUFDN0IsQ0FBQyxDQUFDO0VBRUYsTUFBTVAsSUFBSSxHQUFHLE1BQU1qQixHQUFHLENBQUMwRCxJQUFJLEVBQUU7RUFDN0IsT0FBT3pDLElBQUk7QUFDZixDQUFDO0FBR00sTUFBTThDLFVBQVUsR0FBRyxPQUFPL0UsR0FBRyxFQUFFMEQsS0FBSyxLQUFLO0VBQzVDLE1BQU0xQyxHQUFHLEdBQUcsTUFBTXVELEtBQUssQ0FBRSxHQUFFRixPQUFRLFFBQU9yRSxHQUFJLEVBQUMsRUFBRTtJQUM3Q3dFLE1BQU0sRUFBRSxRQUFRO0lBQ2hCQyxPQUFPLEVBQUU7TUFDTCxjQUFjLEVBQUUsa0JBQWtCO01BQ2xDLGVBQWUsRUFBRWY7SUFDckI7RUFDSixDQUFDLENBQUM7RUFFRixNQUFNekIsSUFBSSxHQUFHLE1BQU1qQixHQUFHLENBQUMwRCxJQUFJLEVBQUU7RUFDN0IsT0FBT3pDLElBQUk7QUFDZixDQUFDLEM7Ozs7Ozs7Ozs7O0FDdEVELHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL3Byb2R1Y3QvW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvcHJvZHVjdC9baWRdLmpzXCIpO1xuIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBnZXREYXRhIH0gZnJvbSAnLi4vLi4vdXRpbHMvZmV0Y2hEYXRhJ1xyXG5pbXBvcnQgeyBEYXRhQ29udGV4dCB9IGZyb20gJy4uLy4uL3N0b3JlL0dsb2JhbFN0YXRlJ1xyXG5pbXBvcnQgeyBhZGRUb0NhcnQgfSBmcm9tICcuLi8uLi9zdG9yZS9BY3Rpb25zJ1xyXG4gICBcclxuXHJcbmNvbnN0IERldGFpbFByb2R1Y3QgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtwcm9kdWN0XSA9IHVzZVN0YXRlKHByb3BzLnByb2R1Y3QpXHJcbiAgICBjb25zdCBbdGFiLCBzZXRUYWJdID0gdXNlU3RhdGUoMClcclxuICAgIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KVxyXG4gICAgY29uc3QgeyBjYXJ0IH0gPSBzdGF0ZVxyXG4gICAgXHJcbiAgICBjb25zdCBpc0FjdGl2ZSA9IChpbmRleCkgPT4ge1xyXG4gICAgICAgIGlmKHRhYiA9PT0gaW5kZXgpIHJldHVybiBcIiBhY3RpdmVcIjtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZGV0YWlsX3BhZ2VcIj5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+RGV0YWlsIFByb2R1Y3Q8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17IHByb2R1Y3QuaW1hZ2VzW3RhYl0udXJsIH0gYWx0PXsgcHJvZHVjdC5pbWFnZXNbdGFiXS51cmwgfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1ibG9jayBpbWctdGh1bWJuYWlsIHJvdW5kZWQgbXQtNCB3LTEwMFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e2hlaWdodDogJzM1MHB4J319IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXgtMFwiIHN0eWxlPXt7Y3Vyc29yOiAncG9pbnRlcid9fSA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0LmltYWdlcy5tYXAoKGltZywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBrZXk9e2luZGV4fSBzcmM9e2ltZy51cmx9IGFsdD17aW1nLnVybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaW1nLXRodW1ibmFpbCByb3VuZGVkICR7aXNBY3RpdmUoaW5kZXgpfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7aGVpZ2h0OiAnODBweCcsIHdpZHRoOiAnMjAlJ319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRhYihpbmRleCl9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG10LTNcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXVwcGVyY2FzZVwiPntwcm9kdWN0LnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj5Scy57cHJvZHVjdC5wcmljZX08L2g1PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG14LTAgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LmluU3RvY2sgPiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gPGg2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+SW4gU3RvY2s6IHtwcm9kdWN0LmluU3RvY2t9PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiA8aDYgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj5PdXQgU3RvY2s8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+U29sZDoge3Byb2R1Y3Quc29sZH08L2g2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0yXCI+e3Byb2R1Y3QuZGVzY3JpcHRpb259PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrIGQtYmxvY2sgbXktMyBweC01XCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKGFkZFRvQ2FydChwcm9kdWN0LCBjYXJ0KSl9ID5cclxuICAgICAgICAgICAgICAgICAgICBCdXlcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgICB9XHJcbiAgICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHtwYXJhbXM6e2lkfX0pIHtcclxuICAgICAgXHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZ2V0RGF0YShgcHJvZHVjdC8ke2lkfWApXHJcbiAgICAgXHJcbiAgICAgIFxyXG4gICAgICAgIC8vIHNlcnZlciBzaWRlIHJlbmRlcmluZ1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHByb3BzOntcclxuICAgICAgICAgICAgICAgIHByb2R1Y3Q6IHJlcy5wcm9kdWN0XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBleHBvcnQgZGVmYXVsdCBEZXRhaWxQcm9kdWN0IiwiZXhwb3J0IGNvbnN0IEFDVElPTlMgPSB7XHJcbiAgICBOT1RJRlk6ICdOT1RJRlknLFxyXG4gICAgQVVUSDogJ0FVVEgnLFxyXG4gICAgQUREX0NBUlQ6ICdBRERfQ0FSVCcsXHJcbiAgICBBRERfTU9EQUw6ICdBRERfTU9EQUwnLFxyXG4gICAgQUREX09SREVSUzonQUREX09SREVSUydcclxuXHJcbn1cclxuZXhwb3J0IGNvbnN0IGFkZFRvQ2FydCA9IChwcm9kdWN0LCBjYXJ0KSA9PiB7XHJcbiAgICBpZihwcm9kdWN0LmluU3RvY2sgPT09IDApXHJcbiAgICByZXR1cm4gKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHtlcnJvcjogJ1RoaXMgcHJvZHVjdCBpcyBvdXQgb2Ygc3RvY2suJ30gfSkgXHJcblxyXG4gICAgY29uc3QgY2hlY2sgPSBjYXJ0LmV2ZXJ5KGl0ZW0gPT4ge1xyXG4gICAgICAgIHJldHVybiBpdGVtLl9pZCAhPT0gcHJvZHVjdC5faWRcclxuICAgIH0pXHJcblxyXG4gICAgaWYoIWNoZWNrKSByZXR1cm4gKHsgdHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHtlcnJvcjogJ1RoZSBwcm9kdWN0IGhhcyBiZWVuIGFkZGVkIHRvIGNhcnQuJ30gfSkgXHJcblxyXG4gICAgcmV0dXJuICh7IHR5cGU6ICdBRERfQ0FSVCcsIHBheWxvYWQ6IFsuLi5jYXJ0LCB7Li4ucHJvZHVjdCwgcXVhbnRpdHk6IDF9XSB9KSBcclxufVxyXG5leHBvcnQgY29uc3QgZGVjcmVhc2UgPSAoZGF0YSwgaWQpID0+IHtcclxuICAgIGNvbnN0IG5ld0RhdGEgPSBbLi4uZGF0YV1cclxuICAgIG5ld0RhdGEuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBpZihpdGVtLl9pZCA9PT0gaWQpIGl0ZW0ucXVhbnRpdHkgLT0gMVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gKHsgdHlwZTogJ0FERF9DQVJUJywgcGF5bG9hZDogbmV3RGF0YSB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaW5jcmVhc2UgPSAoZGF0YSwgaWQpID0+IHtcclxuICAgIGNvbnN0IG5ld0RhdGEgPSBbLi4uZGF0YV1cclxuICAgIG5ld0RhdGEuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBpZihpdGVtLl9pZCA9PT0gaWQpIGl0ZW0ucXVhbnRpdHkgKz0gMVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gKHsgdHlwZTogJ0FERF9DQVJUJywgcGF5bG9hZDogbmV3RGF0YSB9KVxyXG59XHJcbmV4cG9ydCBjb25zdCBkZWxldGVJdGVtID0gKGRhdGEsIGlkLCB0eXBlKSA9PiB7XHJcbiAgICBjb25zdCBuZXdEYXRhID0gZGF0YS5maWx0ZXIoaXRlbSA9PiBpdGVtLl9pZCAhPT0gaWQpXHJcbiAgICByZXR1cm4gKHsgdHlwZSwgcGF5bG9hZDogbmV3RGF0YX0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVJdGVtID0gKGRhdGEsIGlkLCBwb3N0LCB0eXBlKSA9PiB7XHJcbiAgICBjb25zdCBuZXdEYXRhID0gZGF0YS5tYXAoaXRlbSA9PiAoaXRlbS5faWQgPT09IGlkID8gcG9zdCA6IGl0ZW0pKVxyXG4gICAgcmV0dXJuICh7IHR5cGUsIHBheWxvYWQ6IG5ld0RhdGF9KVxyXG59ICAgIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlUmVkdWNlcix1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHJlZHVjZXJzIGZyb20gJy4vUmVkdWNlcnMnXHJcbmltcG9ydCB7IGdldERhdGEgfSBmcm9tICcuLi91dGlscy9mZXRjaERhdGEnXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IERhdGFDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpXHJcbmV4cG9ydCBjb25zdCBEYXRhUHJvdmlkZXIgPSAoe2NoaWxkcmVufSkgPT4ge1xyXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0geyBcclxuICAgICAgICBub3RpZnk6IHt9LCBhdXRoOiB7fSxjYXJ0OltdLG1vZGFsOiB7fSxvcmRlcnM6W119XHJcbiAgICAgICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXJzLCBpbml0aWFsU3RhdGUpXHJcbiAgICAgICAgY29uc3QgeyBjYXJ0LCBhdXRoIH0gPSBzdGF0ZVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmaXJzdExvZ2luID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmaXJzdExvZ2luXCIpO1xyXG4gICAgaWYoZmlyc3RMb2dpbil7XHJcbiAgICAgICAgZ2V0RGF0YSgnYXV0aC9hY2Nlc3NUb2tlbicpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgaWYocmVzLmVycikgcmV0dXJuIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiZmlyc3RMb2dpblwiKVxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7IFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJBVVRIXCIsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46IHJlcy5hY2Nlc3NfdG9rZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcjogcmVzLnVzZXJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgfSxbXSlcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9fY2FydDAxX19kZXZhdCcsIEpTT04uc3RyaW5naWZ5KGNhcnQpKVxyXG4gICAgfSwgW2NhcnRdKVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBfX25leHRfX2NhcnQwMV9fZGV2YXQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfX2NhcnQwMV9fZGV2YXQnKSlcclxuXHJcbiAgICAgICAgaWYoX19uZXh0X19jYXJ0MDFfX2RldmF0KSBkaXNwYXRjaCh7IHR5cGU6ICdBRERfQ0FSVCcsIHBheWxvYWQ6IF9fbmV4dF9fY2FydDAxX19kZXZhdCB9KVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihhdXRoLnRva2VuKXtcclxuICAgICAgICAgICAgZ2V0RGF0YSgnb3JkZXInLCBhdXRoLnRva2VuKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYocmVzLmVycikgcmV0dXJuIGRpc3BhdGNoKHt0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge2Vycm9yOiByZXMuZXJyfX0pXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnQUREX09SREVSUycsIHBheWxvYWQ6IHJlcy5vcmRlcnN9KVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgaWYoYXV0aC51c2VyLnJvbGUgPT09ICdhZG1pbicpe1xyXG4gICAgICAgICAgICAgICAgZ2V0RGF0YSgndXNlcicsIGF1dGgudG9rZW4pXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlcy5lcnIpIHJldHVybiBkaXNwYXRjaCh7dHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHtlcnJvcjogcmVzLmVycn19KVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdBRERfVVNFUlMnLCBwYXlsb2FkOiByZXMudXNlcnN9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ0FERF9PUkRFUlMnLCBwYXlsb2FkOiBbXX0pXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnQUREX1VTRVJTJywgcGF5bG9hZDogW119KVxyXG4gICAgICAgIH1cclxuICAgIH0sW2F1dGgudG9rZW5dKVxyXG5cclxuICAgIHJldHVybihcclxuICAgIDxEYXRhQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e3N0YXRlLCBkaXNwYXRjaH19PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvRGF0YUNvbnRleHQuUHJvdmlkZXI+XHJcbilcclxufSIsImltcG9ydCB7IEFDVElPTlMgfSBmcm9tICcuL0FjdGlvbnMnXHJcblxyXG5cclxuY29uc3QgcmVkdWNlcnMgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgICBjYXNlIEFDVElPTlMuTk9USUZZOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBub3RpZnk6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSBBQ1RJT05TLkFVVEg6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGF1dGg6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIH07IFxyXG4gICAgICAgICAgICBjYXNlIEFDVElPTlMuQUREX0NBUlQ6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGNhcnQ6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgQUNUSU9OUy5BRERfTU9EQUw6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG1vZGFsOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIEFDVElPTlMuQUREX09SREVSUzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgb3JkZXJzOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZXhwb3J0IGRlZmF1bHQgcmVkdWNlcnMiLCJjb25zdCBiYXNlVXJsID0gcHJvY2Vzcy5lbnYuQkFTRV9VUkxcclxuXHJcbmV4cG9ydCBjb25zdCBnZXREYXRhID0gYXN5bmMgKHVybCwgdG9rZW4pID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2Jhc2VVcmx9L2FwaS8ke3VybH1gLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogdG9rZW5cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICByZXR1cm4gZGF0YVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcG9zdERhdGEgPSBhc3luYyAodXJsLCBwb3N0LCB0b2tlbikgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVybH0vYXBpLyR7dXJsfWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogdG9rZW5cclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBvc3QpXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICByZXR1cm4gZGF0YVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBwdXREYXRhID0gYXN5bmMgKHVybCwgcG9zdCwgdG9rZW4pID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2Jhc2VVcmx9L2FwaS8ke3VybH1gLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogdG9rZW5cclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBvc3QpXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICByZXR1cm4gZGF0YVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcGF0Y2hEYXRhID0gYXN5bmMgKHVybCwgcG9zdCwgdG9rZW4pID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2Jhc2VVcmx9L2FwaS8ke3VybH1gLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiB0b2tlblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocG9zdClcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgIHJldHVybiBkYXRhXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlRGF0YSA9IGFzeW5jICh1cmwsIHRva2VuKSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfS9hcGkvJHt1cmx9YCwge1xyXG4gICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRva2VuXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgcmV0dXJuIGRhdGFcclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==