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
  ADD_ORDERS: 'ADD_ORDERS',
  ADD_USERS: 'ADD_USERS',
  ADD_CATEGORIES: 'ADD_CATEGORIES'
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
  if (!data) {
    return {
      type: "ERROR",
      payload: "Data is undefined"
    };
  }
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
    modal: [],
    orders: [],
    users: [],
    categories: []
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
      Object(_utils_fetchData__WEBPACK_IMPORTED_MODULE_2__["getData"])('categories').then(res => {
        if (res.err) return dispatch({
          type: 'NOTIFY',
          payload: {
            error: res.err
          }
        });
        dispatch({
          type: "ADD_CATEGORIES",
          payload: res.categories
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
    lineNumber: 59,
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
    case _Actions__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].ADD_USERS:
      return _objectSpread(_objectSpread({}, state), {}, {
        users: action.payload
      });
    case _Actions__WEBPACK_IMPORTED_MODULE_0__["ACTIONS"].ADD_CATEGORIES:
      return _objectSpread(_objectSpread({}, state), {}, {
        categories: action.payload
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcHJvZHVjdC8uanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9HbG9iYWxTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9SZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9mZXRjaERhdGEuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJEZXRhaWxQcm9kdWN0IiwicHJvcHMiLCJwcm9kdWN0IiwidXNlU3RhdGUiLCJ0YWIiLCJzZXRUYWIiLCJzdGF0ZSIsImRpc3BhdGNoIiwidXNlQ29udGV4dCIsIkRhdGFDb250ZXh0IiwiY2FydCIsImlzQWN0aXZlIiwiaW5kZXgiLCJpbWFnZXMiLCJ1cmwiLCJoZWlnaHQiLCJjdXJzb3IiLCJtYXAiLCJpbWciLCJ3aWR0aCIsInRpdGxlIiwicHJpY2UiLCJpblN0b2NrIiwic29sZCIsImRlc2NyaXB0aW9uIiwiY29udGVudCIsImFkZFRvQ2FydCIsImdldFNlcnZlclNpZGVQcm9wcyIsInBhcmFtcyIsImlkIiwicmVzIiwiZ2V0RGF0YSIsIkFDVElPTlMiLCJOT1RJRlkiLCJBVVRIIiwiQUREX0NBUlQiLCJBRERfTU9EQUwiLCJBRERfT1JERVJTIiwiQUREX1VTRVJTIiwiQUREX0NBVEVHT1JJRVMiLCJ0eXBlIiwicGF5bG9hZCIsImVycm9yIiwiY2hlY2siLCJldmVyeSIsIml0ZW0iLCJfaWQiLCJxdWFudGl0eSIsImRlY3JlYXNlIiwiZGF0YSIsIm5ld0RhdGEiLCJmb3JFYWNoIiwiaW5jcmVhc2UiLCJkZWxldGVJdGVtIiwiZmlsdGVyIiwidXBkYXRlSXRlbSIsInBvc3QiLCJjcmVhdGVDb250ZXh0IiwiRGF0YVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJpbml0aWFsU3RhdGUiLCJub3RpZnkiLCJhdXRoIiwibW9kYWwiLCJvcmRlcnMiLCJ1c2VycyIsImNhdGVnb3JpZXMiLCJ1c2VSZWR1Y2VyIiwicmVkdWNlcnMiLCJ1c2VFZmZlY3QiLCJmaXJzdExvZ2luIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInRoZW4iLCJlcnIiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsIl9fbmV4dF9fY2FydDAxX19kZXZhdCIsInBhcnNlIiwidG9rZW4iLCJ1c2VyIiwicm9sZSIsImFjdGlvbiIsImJhc2VVcmwiLCJwcm9jZXNzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwianNvbiIsInBvc3REYXRhIiwiYm9keSIsInB1dERhdGEiLCJwYXRjaERhdGEiLCJkZWxldGVEYXRhIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStE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LGVBQWUsRUFBRVI7SUFDckI7RUFDSixDQUFDLENBQUM7RUFFRixNQUFNL0IsSUFBSSxHQUFHLE1BQU1uQixHQUFHLENBQUMyRCxJQUFJLEVBQUU7RUFDN0IsT0FBT3hDLElBQUk7QUFDZixDQUFDLEM7Ozs7Ozs7Ozs7O0FDdEVELHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL3Byb2R1Y3QvW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvcHJvZHVjdC9baWRdLmpzXCIpO1xuIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBnZXREYXRhIH0gZnJvbSAnLi4vLi4vdXRpbHMvZmV0Y2hEYXRhJ1xyXG5pbXBvcnQgeyBEYXRhQ29udGV4dCB9IGZyb20gJy4uLy4uL3N0b3JlL0dsb2JhbFN0YXRlJ1xyXG5pbXBvcnQgeyBhZGRUb0NhcnQgfSBmcm9tICcuLi8uLi9zdG9yZS9BY3Rpb25zJ1xyXG4gICBcclxuXHJcbmNvbnN0IERldGFpbFByb2R1Y3QgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtwcm9kdWN0XSA9IHVzZVN0YXRlKHByb3BzLnByb2R1Y3QpXHJcbiAgICBjb25zdCBbdGFiLCBzZXRUYWJdID0gdXNlU3RhdGUoMClcclxuICAgIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KVxyXG4gICAgY29uc3QgeyBjYXJ0IH0gPSBzdGF0ZVxyXG4gICAgXHJcbiAgICBjb25zdCBpc0FjdGl2ZSA9IChpbmRleCkgPT4ge1xyXG4gICAgICAgIGlmKHRhYiA9PT0gaW5kZXgpIHJldHVybiBcIiBhY3RpdmVcIjtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZGV0YWlsX3BhZ2VcIj5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+RGV0YWlsIFByb2R1Y3Q8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17IHByb2R1Y3QuaW1hZ2VzW3RhYl0udXJsIH0gYWx0PXsgcHJvZHVjdC5pbWFnZXNbdGFiXS51cmwgfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1ibG9jayBpbWctdGh1bWJuYWlsIHJvdW5kZWQgbXQtNCB3LTEwMFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e2hlaWdodDogJzM1MHB4J319IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXgtMFwiIHN0eWxlPXt7Y3Vyc29yOiAncG9pbnRlcid9fSA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0LmltYWdlcy5tYXAoKGltZywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBrZXk9e2luZGV4fSBzcmM9e2ltZy51cmx9IGFsdD17aW1nLnVybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaW1nLXRodW1ibmFpbCByb3VuZGVkICR7aXNBY3RpdmUoaW5kZXgpfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7aGVpZ2h0OiAnODBweCcsIHdpZHRoOiAnMjAlJ319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRhYihpbmRleCl9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG10LTNcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXVwcGVyY2FzZVwiPntwcm9kdWN0LnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj5Scy57cHJvZHVjdC5wcmljZX08L2g1PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG14LTAgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LmluU3RvY2sgPiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gPGg2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+SW4gU3RvY2s6IHtwcm9kdWN0LmluU3RvY2t9PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiA8aDYgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj5PdXQgU3RvY2s8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+U29sZDoge3Byb2R1Y3Quc29sZH08L2g2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0yXCI+e3Byb2R1Y3QuZGVzY3JpcHRpb259PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrIGQtYmxvY2sgbXktMyBweC01XCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKGFkZFRvQ2FydChwcm9kdWN0LCBjYXJ0KSl9ID5cclxuICAgICAgICAgICAgICAgICAgICBCdXlcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgICB9XHJcbiAgICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHtwYXJhbXM6e2lkfX0pIHtcclxuICAgICAgXHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZ2V0RGF0YShgcHJvZHVjdC8ke2lkfWApXHJcbiAgICAgXHJcbiAgICAgIFxyXG4gICAgICAgIC8vIHNlcnZlciBzaWRlIHJlbmRlcmluZ1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHByb3BzOntcclxuICAgICAgICAgICAgICAgIHByb2R1Y3Q6IHJlcy5wcm9kdWN0XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBleHBvcnQgZGVmYXVsdCBEZXRhaWxQcm9kdWN0IiwiZXhwb3J0IGNvbnN0IEFDVElPTlMgPSB7XHJcbiAgICBOT1RJRlk6ICdOT1RJRlknLFxyXG4gICAgQVVUSDogJ0FVVEgnLFxyXG4gICAgQUREX0NBUlQ6ICdBRERfQ0FSVCcsXHJcbiAgICBBRERfTU9EQUw6ICdBRERfTU9EQUwnLFxyXG4gICAgQUREX09SREVSUzonQUREX09SREVSUycsXHJcbiAgICBBRERfVVNFUlM6ICdBRERfVVNFUlMnLFxyXG4gICAgQUREX0NBVEVHT1JJRVM6ICdBRERfQ0FURUdPUklFUycsXHJcblxyXG59XHJcbmV4cG9ydCBjb25zdCBhZGRUb0NhcnQgPSAocHJvZHVjdCwgY2FydCkgPT4ge1xyXG4gICAgaWYocHJvZHVjdC5pblN0b2NrID09PSAwKVxyXG4gICAgcmV0dXJuICh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7ZXJyb3I6ICdUaGlzIHByb2R1Y3QgaXMgb3V0IG9mIHN0b2NrLid9IH0pIFxyXG5cclxuICAgIGNvbnN0IGNoZWNrID0gY2FydC5ldmVyeShpdGVtID0+IHtcclxuICAgICAgICByZXR1cm4gaXRlbS5faWQgIT09IHByb2R1Y3QuX2lkXHJcbiAgICB9KVxyXG5cclxuICAgIGlmKCFjaGVjaykgcmV0dXJuICh7IHR5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7ZXJyb3I6ICdUaGUgcHJvZHVjdCBoYXMgYmVlbiBhZGRlZCB0byBjYXJ0Lid9IH0pIFxyXG5cclxuICAgIHJldHVybiAoeyB0eXBlOiAnQUREX0NBUlQnLCBwYXlsb2FkOiBbLi4uY2FydCwgey4uLnByb2R1Y3QsIHF1YW50aXR5OiAxfV0gfSkgXHJcbn1cclxuZXhwb3J0IGNvbnN0IGRlY3JlYXNlID0gKGRhdGEsIGlkKSA9PiB7XHJcbiAgICBjb25zdCBuZXdEYXRhID0gWy4uLmRhdGFdXHJcbiAgICBuZXdEYXRhLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgaWYoaXRlbS5faWQgPT09IGlkKSBpdGVtLnF1YW50aXR5IC09IDFcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuICh7IHR5cGU6ICdBRERfQ0FSVCcsIHBheWxvYWQ6IG5ld0RhdGEgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGluY3JlYXNlID0gKGRhdGEsIGlkKSA9PiB7XHJcbiAgICBjb25zdCBuZXdEYXRhID0gWy4uLmRhdGFdXHJcbiAgICBuZXdEYXRhLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgaWYoaXRlbS5faWQgPT09IGlkKSBpdGVtLnF1YW50aXR5ICs9IDFcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuICh7IHR5cGU6ICdBRERfQ0FSVCcsIHBheWxvYWQ6IG5ld0RhdGEgfSlcclxufVxyXG5leHBvcnQgY29uc3QgZGVsZXRlSXRlbSA9IChkYXRhLCBpZCwgdHlwZSkgPT4ge1xyXG4gICAgaWYgKCFkYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgdHlwZTogXCJFUlJPUlwiLCBwYXlsb2FkOiBcIkRhdGEgaXMgdW5kZWZpbmVkXCIgfTtcclxuICAgIH1cclxuICAgIGNvbnN0IG5ld0RhdGEgPSBkYXRhLmZpbHRlcihpdGVtID0+IGl0ZW0uX2lkICE9PSBpZClcclxuICAgIHJldHVybiAoeyB0eXBlLCBwYXlsb2FkOiBuZXdEYXRhfSlcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVJdGVtID0gKGRhdGEsIGlkLCBwb3N0LCB0eXBlKSA9PiB7XHJcbiAgICBjb25zdCBuZXdEYXRhID0gZGF0YS5tYXAoaXRlbSA9PiAoaXRlbS5faWQgPT09IGlkID8gcG9zdCA6IGl0ZW0pKVxyXG4gICAgcmV0dXJuICh7IHR5cGUsIHBheWxvYWQ6IG5ld0RhdGF9KVxyXG59ICAgIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlUmVkdWNlcix1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHJlZHVjZXJzIGZyb20gJy4vUmVkdWNlcnMnXHJcbmltcG9ydCB7IGdldERhdGEgfSBmcm9tICcuLi91dGlscy9mZXRjaERhdGEnXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IERhdGFDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpXHJcbmV4cG9ydCBjb25zdCBEYXRhUHJvdmlkZXIgPSAoe2NoaWxkcmVufSkgPT4ge1xyXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0geyBcclxuICAgICAgICBub3RpZnk6IHt9LCBhdXRoOiB7fSxjYXJ0OltdLG1vZGFsOiBbXSxvcmRlcnM6W10sdXNlcnM6W10sY2F0ZWdvcmllczpbXX1cclxuICAgICAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlcnMsIGluaXRpYWxTdGF0ZSlcclxuICAgICAgICBjb25zdCB7IGNhcnQsIGF1dGggfSA9IHN0YXRlXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZpcnN0TG9naW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZpcnN0TG9naW5cIik7XHJcbiAgICBpZihmaXJzdExvZ2luKXtcclxuICAgICAgICBnZXREYXRhKCdjYXRlZ29yaWVzJykudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBpZihyZXMuZXJyKSByZXR1cm4gZGlzcGF0Y2goe3R5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7ZXJyb3I6IHJlcy5lcnJ9fSlcclxuXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkFERF9DQVRFR09SSUVTXCIsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiByZXMuY2F0ZWdvcmllc1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICB9LFtdKVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X19jYXJ0MDFfX2RldmF0JywgSlNPTi5zdHJpbmdpZnkoY2FydCkpXHJcbiAgICB9LCBbY2FydF0pXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IF9fbmV4dF9fY2FydDAxX19kZXZhdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9fY2FydDAxX19kZXZhdCcpKVxyXG5cclxuICAgICAgICBpZihfX25leHRfX2NhcnQwMV9fZGV2YXQpIGRpc3BhdGNoKHsgdHlwZTogJ0FERF9DQVJUJywgcGF5bG9hZDogX19uZXh0X19jYXJ0MDFfX2RldmF0IH0pXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKGF1dGgudG9rZW4pe1xyXG4gICAgICAgICAgICBnZXREYXRhKCdvcmRlcicsIGF1dGgudG9rZW4pXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihyZXMuZXJyKSByZXR1cm4gZGlzcGF0Y2goe3R5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7ZXJyb3I6IHJlcy5lcnJ9fSlcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdBRERfT1JERVJTJywgcGF5bG9hZDogcmVzLm9yZGVyc30pXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBpZihhdXRoLnVzZXIucm9sZSA9PT0gJ2FkbWluJyl7XHJcbiAgICAgICAgICAgICAgICBnZXREYXRhKCd1c2VyJywgYXV0aC50b2tlbilcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzLmVycikgcmV0dXJuIGRpc3BhdGNoKHt0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge2Vycm9yOiByZXMuZXJyfX0pXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ0FERF9VU0VSUycsIHBheWxvYWQ6IHJlcy51c2Vyc30pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnQUREX09SREVSUycsIHBheWxvYWQ6IFtdfSlcclxuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdBRERfVVNFUlMnLCBwYXlsb2FkOiBbXX0pXHJcbiAgICAgICAgfVxyXG4gICAgfSxbYXV0aC50b2tlbl0pXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgPERhdGFDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7c3RhdGUsIGRpc3BhdGNofX0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9EYXRhQ29udGV4dC5Qcm92aWRlcj5cclxuKVxyXG59IiwiaW1wb3J0IHsgQUNUSU9OUyB9IGZyb20gJy4vQWN0aW9ucydcclxuXHJcblxyXG5jb25zdCByZWR1Y2VycyA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgQUNUSU9OUy5OT1RJRlk6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG5vdGlmeTogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIEFDVElPTlMuQVVUSDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYXV0aDogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfTsgXHJcbiAgICAgICAgICAgIGNhc2UgQUNUSU9OUy5BRERfQ0FSVDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY2FydDogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBBQ1RJT05TLkFERF9NT0RBTDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbW9kYWw6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgQUNUSU9OUy5BRERfT1JERVJTOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBvcmRlcnM6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgQUNUSU9OUy5BRERfVVNFUlM6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHVzZXJzOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgQUNUSU9OUy5BRERfQ0FURUdPUklFUzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllczogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV4cG9ydCBkZWZhdWx0IHJlZHVjZXJzIiwiY29uc3QgYmFzZVVybCA9IHByb2Nlc3MuZW52LkJBU0VfVVJMXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RGF0YSA9IGFzeW5jICh1cmwsIHRva2VuKSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfS9hcGkvJHt1cmx9YCwge1xyXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRva2VuXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgcmV0dXJuIGRhdGFcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHBvc3REYXRhID0gYXN5bmMgKHVybCwgcG9zdCwgdG9rZW4pID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2Jhc2VVcmx9L2FwaS8ke3VybH1gLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRva2VuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwb3N0KVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgcmV0dXJuIGRhdGFcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgcHV0RGF0YSA9IGFzeW5jICh1cmwsIHBvc3QsIHRva2VuKSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfS9hcGkvJHt1cmx9YCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRva2VuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwb3N0KVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgcmV0dXJuIGRhdGFcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHBhdGNoRGF0YSA9IGFzeW5jICh1cmwsIHBvc3QsIHRva2VuKSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfS9hcGkvJHt1cmx9YCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BBVENIJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogdG9rZW5cclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBvc3QpXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICByZXR1cm4gZGF0YVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZURhdGEgPSBhc3luYyAodXJsLCB0b2tlbikgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVybH0vYXBpLyR7dXJsfWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiB0b2tlblxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgIHJldHVybiBkYXRhXHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=