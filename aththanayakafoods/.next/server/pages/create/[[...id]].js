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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/create/[[...id]].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/create/[[...id]].js":
/*!***********************************!*\
  !*** ./pages/create/[[...id]].js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_GlobalState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/GlobalState */ "./store/GlobalState.js");
/* harmony import */ var _utils_imageUpload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/imageUpload */ "./utils/imageUpload.js");
/* harmony import */ var _utils_fetchData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/fetchData */ "./utils/fetchData.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\gihanmadhuwantha\\Desktop\\system_Development\\AththanayakaFoods\\aththanayakafoods\\pages\\create\\[[...id]].js";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }







const ProductsManager = () => {
  const initialState = {
    title: '',
    price: 0,
    inStock: 0,
    description: '',
    content: '',
    category: ''
  };
  const {
    0: product,
    1: setProduct
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialState);
  const {
    title,
    price,
    inStock,
    description,
    content,
    category
  } = product;
  const {
    0: images,
    1: setImages
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    state,
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_store_GlobalState__WEBPACK_IMPORTED_MODULE_2__["DataContext"]);
  const {
    categories,
    auth
  } = state;
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  const {
    id
  } = router.query;
  const {
    0: onEdit,
    1: setOnEdit
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (id) {
      setOnEdit(true);
      Object(_utils_fetchData__WEBPACK_IMPORTED_MODULE_4__["getData"])(`product/${id}`).then(res => {
        setProduct(res.product);
        setImages(res.product.images);
      });
    } else {
      setOnEdit(false);
      setProduct(initialState);
      setImages([]);
    }
  }, [id]);
  const handleChangeInput = e => {
    const {
      name,
      value
    } = e.target;
    setProduct(_objectSpread(_objectSpread({}, product), {}, {
      [name]: value
    }));
    dispatch({
      type: 'NOTIFY',
      payload: {}
    });
  };
  const handleUploadInput = e => {
    dispatch({
      type: 'NOTIFY',
      payload: {}
    });
    let newImages = [];
    let num = 0;
    let err = '';
    const files = [...e.target.files];
    if (files.length === 0) return dispatch({
      type: 'NOTIFY',
      payload: {
        error: 'Files does not exist.'
      }
    });
    files.forEach(file => {
      if (file.size > 1024 * 1024) return err = 'The largest image size is 1mb';
      if (file.type !== 'image/jpeg' && file.type !== 'image/png') return err = 'Image format is incorrect.';
      num += 1;
      if (num <= 5) newImages.push(file);
      return newImages;
    });
    if (err) dispatch({
      type: 'NOTIFY',
      payload: {
        error: err
      }
    });
    const imgCount = images.length;
    if (imgCount + newImages.length > 5) return dispatch({
      type: 'NOTIFY',
      payload: {
        error: 'Select up to 5 images.'
      }
    });
    setImages([...images, ...newImages]);
  };
  const deleteImage = index => {
    const newArr = [...images];
    newArr.splice(index, 1);
    setImages(newArr);
  };
  const handleSubmit = async e => {
    e.preventDefault();
    if (auth.user.role !== 'admin') return dispatch({
      type: 'NOTIFY',
      payload: {
        error: 'Authentication is not valid.'
      }
    });
    if (!title || !price || !inStock || !description || !content || category === 'all' || images.length === 0) return dispatch({
      type: 'NOTIFY',
      payload: {
        error: 'Please add all the fields.'
      }
    });
    dispatch({
      type: 'NOTIFY',
      payload: {
        loading: true
      }
    });
    let media = [];
    const imgNewURL = images.filter(img => !img.url);
    const imgOldURL = images.filter(img => img.url);
    if (imgNewURL.length > 0) media = await Object(_utils_imageUpload__WEBPACK_IMPORTED_MODULE_3__["imageUpload"])(imgNewURL);
    let res;
    if (onEdit) {
      res = await Object(_utils_fetchData__WEBPACK_IMPORTED_MODULE_4__["putData"])(`product/${id}`, _objectSpread(_objectSpread({}, product), {}, {
        images: [...imgOldURL, ...media]
      }), auth.token);
      if (res.err) return dispatch({
        type: 'NOTIFY',
        payload: {
          error: res.err
        }
      });
    } else {
      res = await Object(_utils_fetchData__WEBPACK_IMPORTED_MODULE_4__["postData"])('product', _objectSpread(_objectSpread({}, product), {}, {
        images: [...imgOldURL, ...media]
      }), auth.token);
      if (res.err) return dispatch({
        type: 'NOTIFY',
        payload: {
          error: res.err
        }
      });
    }
    return dispatch({
      type: 'NOTIFY',
      payload: {
        success: res.msg
      }
    });
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
    className: "products_manager",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("title", {
        children: "Products Manager"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("form", {
      className: "row",
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        className: "col-md-6",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("input", {
          type: "text",
          name: "title",
          value: title,
          placeholder: "Title",
          className: "d-block my-4 w-100 p-2",
          onChange: handleChangeInput
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
            className: "col-sm-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("label", {
              htmlFor: "price",
              children: "Price"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("input", {
              type: "number",
              name: "price",
              value: price,
              placeholder: "Price",
              className: "d-block w-100 p-2",
              onChange: handleChangeInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
            className: "col-sm-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("label", {
              htmlFor: "price",
              children: "In Stock"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("input", {
              type: "number",
              name: "inStock",
              value: inStock,
              placeholder: "inStock",
              className: "d-block w-100 p-2",
              onChange: handleChangeInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("textarea", {
          name: "description",
          id: "description",
          cols: "30",
          rows: "4",
          placeholder: "Description",
          onChange: handleChangeInput,
          className: "d-block my-4 w-100 p-2",
          value: description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("textarea", {
          name: "content",
          id: "content",
          cols: "30",
          rows: "6",
          placeholder: "Content",
          onChange: handleChangeInput,
          className: "d-block my-4 w-100 p-2",
          value: content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          className: "input-group-prepend px-0 my-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("select", {
            name: "category",
            id: "category",
            value: category,
            onChange: handleChangeInput,
            className: "custom-select text-capitalize",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("option", {
              value: "all",
              children: "All Products"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 153,
              columnNumber: 29
            }, undefined), categories.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("option", {
              value: item._id,
              children: item.name
            }, item._id, false, {
              fileName: _jsxFileName,
              lineNumber: 156,
              columnNumber: 37
            }, undefined))]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("button", {
          type: "submit",
          className: "btn btn-info my-2 px-4",
          children: onEdit ? 'Update' : 'Create'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        className: "col-md-6 my-4",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          className: "input-group mb-3",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
            className: "input-group-prepend",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("span", {
              className: "input-group-text",
              children: "Upload"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
            className: "custom-file border rounded",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("input", {
              type: "file",
              className: "custom-file-input",
              onChange: handleUploadInput,
              multiple: true,
              accept: "image/*"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 176,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          className: "row img-up mx-0",
          children: images.map((img, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
            className: "file_img my-1",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("img", {
              src: img.url ? img.url : URL.createObjectURL(img),
              alt: "",
              className: "img-thumbnail rounded"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 186,
              columnNumber: 37
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("span", {
              onClick: () => deleteImage(index),
              children: "X"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 189,
              columnNumber: 38
            }, undefined)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 33
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 115,
    columnNumber: 9
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (ProductsManager);

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

/***/ "./utils/imageUpload.js":
/*!******************************!*\
  !*** ./utils/imageUpload.js ***!
  \******************************/
/*! exports provided: imageUpload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageUpload", function() { return imageUpload; });
const imageUpload = async images => {
  let imgArr = [];
  for (const item of images) {
    const formData = new FormData();
    formData.append("file", item);
    formData.append("upload_preset", "Aththanayaka Foods");
    formData.append("cloud_name", "afoods");
    const res = await fetch("https://api.cloudinary.com/v1_1/afoods/image/upload", {
      method: "POST",
      body: formData
    });
    const data = await res.json();
    imgArr.push({
      public_id: data.public_id,
      url: data.secure_url
    });
  }
  return imgArr;
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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY3JlYXRlL1tbLi4uaWRdXS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9BY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3N0b3JlL0dsb2JhbFN0YXRlLmpzIiwid2VicGFjazovLy8uL3N0b3JlL1JlZHVjZXJzLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2ZldGNoRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9pbWFnZVVwbG9hZC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiUHJvZHVjdHNNYW5hZ2VyIiwiaW5pdGlhbFN0YXRlIiwidGl0bGUiLCJwcmljZSIsImluU3RvY2siLCJkZXNjcmlwdGlvbiIsImNvbnRlbnQiLCJjYXRlZ29yeSIsInByb2R1Y3QiLCJzZXRQcm9kdWN0IiwidXNlU3RhdGUiLCJpbWFnZXMiLCJzZXRJbWFnZXMiLCJzdGF0ZSIsImRpc3BhdGNoIiwidXNlQ29udGV4dCIsIkRhdGFDb250ZXh0IiwiY2F0ZWdvcmllcyIsImF1dGgiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5Iiwib25FZGl0Iiwic2V0T25FZGl0IiwidXNlRWZmZWN0IiwiZ2V0RGF0YSIsInRoZW4iLCJyZXMiLCJoYW5kbGVDaGFuZ2VJbnB1dCIsImUiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJ0eXBlIiwicGF5bG9hZCIsImhhbmRsZVVwbG9hZElucHV0IiwibmV3SW1hZ2VzIiwibnVtIiwiZXJyIiwiZmlsZXMiLCJsZW5ndGgiLCJlcnJvciIsImZvckVhY2giLCJmaWxlIiwic2l6ZSIsInB1c2giLCJpbWdDb3VudCIsImRlbGV0ZUltYWdlIiwiaW5kZXgiLCJuZXdBcnIiLCJzcGxpY2UiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXIiLCJyb2xlIiwibG9hZGluZyIsIm1lZGlhIiwiaW1nTmV3VVJMIiwiZmlsdGVyIiwiaW1nIiwidXJsIiwiaW1nT2xkVVJMIiwiaW1hZ2VVcGxvYWQiLCJwdXREYXRhIiwidG9rZW4iLCJwb3N0RGF0YSIsInN1Y2Nlc3MiLCJtc2ciLCJtYXAiLCJpdGVtIiwiX2lkIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiQUNUSU9OUyIsIk5PVElGWSIsIkFVVEgiLCJBRERfQ0FSVCIsIkFERF9NT0RBTCIsIkFERF9PUkRFUlMiLCJBRERfVVNFUlMiLCJBRERfQ0FURUdPUklFUyIsImFkZFRvQ2FydCIsImNhcnQiLCJjaGVjayIsImV2ZXJ5IiwicXVhbnRpdHkiLCJkZWNyZWFzZSIsImRhdGEiLCJuZXdEYXRhIiwiaW5jcmVhc2UiLCJkZWxldGVJdGVtIiwidXBkYXRlSXRlbSIsInBvc3QiLCJjcmVhdGVDb250ZXh0IiwiRGF0YVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJub3RpZnkiLCJtb2RhbCIsIm9yZGVycyIsInVzZXJzIiwidXNlUmVkdWNlciIsInJlZHVjZXJzIiwiZmlyc3RMb2dpbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsIl9fbmV4dF9fY2FydDAxX19kZXZhdCIsInBhcnNlIiwiYWN0aW9uIiwiYmFzZVVybCIsInByb2Nlc3MiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJqc29uIiwiYm9keSIsInBhdGNoRGF0YSIsImRlbGV0ZURhdGEiLCJpbWdBcnIiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicHVibGljX2lkIiwic2VjdXJlX3VybCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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RUFBQztJQUNyQixNQUFNK0csUUFBUSxHQUFHLElBQUlDLFFBQVEsRUFBRTtJQUMvQkQsUUFBUSxDQUFDRSxNQUFNLENBQUMsTUFBTSxFQUFFdEQsSUFBSSxDQUFDO0lBQzdCb0QsUUFBUSxDQUFDRSxNQUFNLENBQUMsZUFBZSxFQUFFWCxvQkFBK0IsQ0FBQztJQUNqRVMsUUFBUSxDQUFDRSxNQUFNLENBQUMsWUFBWSxFQUFFWCxRQUFzQixDQUFDO0lBRXJELE1BQU1yRixHQUFHLEdBQUcsTUFBTXNGLEtBQUssQ0FBQ0QscURBQXFCLEVBQUU7TUFDM0NFLE1BQU0sRUFBRSxNQUFNO01BQ2RHLElBQUksRUFBRUk7SUFDVixDQUFDLENBQUM7SUFFRixNQUFNbEMsSUFBSSxHQUFHLE1BQU01RCxHQUFHLENBQUN5RixJQUFJLEVBQUU7SUFDN0JJLE1BQU0sQ0FBQzNFLElBQUksQ0FBQztNQUFDK0UsU0FBUyxFQUFFckMsSUFBSSxDQUFDcUMsU0FBUztNQUFFaEUsR0FBRyxFQUFFMkIsSUFBSSxDQUFDc0M7SUFBVSxDQUFDLENBQUM7RUFDbEU7RUFDQSxPQUFPTCxNQUFNO0FBQ2pCLENBQUMsQzs7Ozs7Ozs7Ozs7QUNqQkQsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvY3JlYXRlL1tbLi4uaWRdXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvY3JlYXRlL1tbLi4uaWRdXS5qc1wiKTtcbiIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtEYXRhQ29udGV4dH0gZnJvbSAnLi4vLi4vc3RvcmUvR2xvYmFsU3RhdGUnXHJcbmltcG9ydCB7aW1hZ2VVcGxvYWR9IGZyb20gJy4uLy4uL3V0aWxzL2ltYWdlVXBsb2FkJ1xyXG5pbXBvcnQge3Bvc3REYXRhLCBnZXREYXRhLCBwdXREYXRhfSBmcm9tICcuLi8uLi91dGlscy9mZXRjaERhdGEnXHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmNvbnN0IFByb2R1Y3RzTWFuYWdlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgICAgICB0aXRsZTogJycsXHJcbiAgICAgICAgcHJpY2U6IDAsXHJcbiAgICAgICAgaW5TdG9jazogMCxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJycsXHJcbiAgICAgICAgY29udGVudDogJycsXHJcbiAgICAgICAgY2F0ZWdvcnk6ICcnXHJcbiAgICB9XHJcbiAgICBjb25zdCBbcHJvZHVjdCwgc2V0UHJvZHVjdF0gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUpXHJcbiAgICBjb25zdCB7dGl0bGUsIHByaWNlLCBpblN0b2NrLCBkZXNjcmlwdGlvbiwgY29udGVudCwgY2F0ZWdvcnl9ID0gcHJvZHVjdFxyXG5cclxuICAgIGNvbnN0IFtpbWFnZXMsIHNldEltYWdlc10gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgICBjb25zdCB7c3RhdGUsIGRpc3BhdGNofSA9IHVzZUNvbnRleHQoRGF0YUNvbnRleHQpXHJcbiAgICBjb25zdCB7Y2F0ZWdvcmllcywgYXV0aH0gPSBzdGF0ZVxyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCB7aWR9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgICBjb25zdCBbb25FZGl0LCBzZXRPbkVkaXRdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihpZCl7XHJcbiAgICAgICAgICAgIHNldE9uRWRpdCh0cnVlKVxyXG4gICAgICAgICAgICBnZXREYXRhKGBwcm9kdWN0LyR7aWR9YCkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0UHJvZHVjdChyZXMucHJvZHVjdClcclxuICAgICAgICAgICAgICAgIHNldEltYWdlcyhyZXMucHJvZHVjdC5pbWFnZXMpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHNldE9uRWRpdChmYWxzZSlcclxuICAgICAgICAgICAgc2V0UHJvZHVjdChpbml0aWFsU3RhdGUpXHJcbiAgICAgICAgICAgIHNldEltYWdlcyhbXSlcclxuICAgICAgICB9XHJcbiAgICB9LFtpZF0pXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlSW5wdXQgPSBlID0+IHtcclxuICAgICAgICBjb25zdCB7bmFtZSwgdmFsdWV9ID0gZS50YXJnZXRcclxuICAgICAgICBzZXRQcm9kdWN0KHsuLi5wcm9kdWN0LCBbbmFtZV06dmFsdWV9KVxyXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge319KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVVwbG9hZElucHV0ID0gZSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7fX0pXHJcbiAgICAgICAgbGV0IG5ld0ltYWdlcyA9IFtdXHJcbiAgICAgICAgbGV0IG51bSA9IDBcclxuICAgICAgICBsZXQgZXJyID0gJydcclxuICAgICAgICBjb25zdCBmaWxlcyA9IFsuLi5lLnRhcmdldC5maWxlc11cclxuXHJcbiAgICAgICAgaWYoZmlsZXMubGVuZ3RoID09PSAwKSBcclxuICAgICAgICByZXR1cm4gZGlzcGF0Y2goe3R5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7ZXJyb3I6ICdGaWxlcyBkb2VzIG5vdCBleGlzdC4nfX0pXHJcblxyXG4gICAgICAgIGZpbGVzLmZvckVhY2goZmlsZSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGZpbGUuc2l6ZSA+IDEwMjQgKiAxMDI0KVxyXG4gICAgICAgICAgICByZXR1cm4gZXJyID0gJ1RoZSBsYXJnZXN0IGltYWdlIHNpemUgaXMgMW1iJ1xyXG5cclxuICAgICAgICAgICAgaWYoZmlsZS50eXBlICE9PSAnaW1hZ2UvanBlZycgJiYgZmlsZS50eXBlICE9PSAnaW1hZ2UvcG5nJylcclxuICAgICAgICAgICAgcmV0dXJuIGVyciA9ICdJbWFnZSBmb3JtYXQgaXMgaW5jb3JyZWN0LidcclxuXHJcbiAgICAgICAgICAgIG51bSArPSAxO1xyXG4gICAgICAgICAgICBpZihudW0gPD0gNSkgbmV3SW1hZ2VzLnB1c2goZmlsZSlcclxuICAgICAgICAgICAgcmV0dXJuIG5ld0ltYWdlcztcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBpZihlcnIpIGRpc3BhdGNoKHt0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge2Vycm9yOiBlcnJ9fSlcclxuXHJcbiAgICAgICAgY29uc3QgaW1nQ291bnQgPSBpbWFnZXMubGVuZ3RoXHJcbiAgICAgICAgaWYoaW1nQ291bnQgKyBuZXdJbWFnZXMubGVuZ3RoID4gNSlcclxuICAgICAgICByZXR1cm4gZGlzcGF0Y2goe3R5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7ZXJyb3I6ICdTZWxlY3QgdXAgdG8gNSBpbWFnZXMuJ319KVxyXG4gICAgICAgIHNldEltYWdlcyhbLi4uaW1hZ2VzLCAuLi5uZXdJbWFnZXNdKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRlbGV0ZUltYWdlID0gaW5kZXggPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld0FyciA9IFsuLi5pbWFnZXNdXHJcbiAgICAgICAgbmV3QXJyLnNwbGljZShpbmRleCwgMSlcclxuICAgICAgICBzZXRJbWFnZXMobmV3QXJyKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBpZihhdXRoLnVzZXIucm9sZSAhPT0gJ2FkbWluJykgXHJcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHt0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge2Vycm9yOiAnQXV0aGVudGljYXRpb24gaXMgbm90IHZhbGlkLid9fSlcclxuXHJcbiAgICAgICAgaWYoIXRpdGxlIHx8ICFwcmljZSB8fCAhaW5TdG9jayB8fCAhZGVzY3JpcHRpb24gfHwgIWNvbnRlbnQgfHwgY2F0ZWdvcnkgPT09ICdhbGwnIHx8IGltYWdlcy5sZW5ndGggPT09IDApXHJcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHt0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge2Vycm9yOiAnUGxlYXNlIGFkZCBhbGwgdGhlIGZpZWxkcy4nfX0pXHJcblxyXG4gICAgXHJcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7bG9hZGluZzogdHJ1ZX19KVxyXG4gICAgICAgIGxldCBtZWRpYSA9IFtdXHJcbiAgICAgICAgY29uc3QgaW1nTmV3VVJMID0gaW1hZ2VzLmZpbHRlcihpbWcgPT4gIWltZy51cmwpXHJcbiAgICAgICAgY29uc3QgaW1nT2xkVVJMID0gaW1hZ2VzLmZpbHRlcihpbWcgPT4gaW1nLnVybClcclxuXHJcbiAgICAgICAgaWYoaW1nTmV3VVJMLmxlbmd0aCA+IDApIG1lZGlhID0gYXdhaXQgaW1hZ2VVcGxvYWQoaW1nTmV3VVJMKVxyXG5cclxuICAgICAgICBsZXQgcmVzO1xyXG4gICAgICAgIGlmKG9uRWRpdCl7XHJcbiAgICAgICAgICAgIHJlcyA9IGF3YWl0IHB1dERhdGEoYHByb2R1Y3QvJHtpZH1gLCB7Li4ucHJvZHVjdCwgaW1hZ2VzOiBbLi4uaW1nT2xkVVJMLCAuLi5tZWRpYV19LCBhdXRoLnRva2VuKVxyXG4gICAgICAgICAgICBpZihyZXMuZXJyKSByZXR1cm4gZGlzcGF0Y2goe3R5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7ZXJyb3I6IHJlcy5lcnJ9fSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmVzID0gYXdhaXQgcG9zdERhdGEoJ3Byb2R1Y3QnLCB7Li4ucHJvZHVjdCwgaW1hZ2VzOiBbLi4uaW1nT2xkVVJMLCAuLi5tZWRpYV19LCBhdXRoLnRva2VuKVxyXG4gICAgICAgICAgICBpZihyZXMuZXJyKSByZXR1cm4gZGlzcGF0Y2goe3R5cGU6ICdOT1RJRlknLCBwYXlsb2FkOiB7ZXJyb3I6IHJlcy5lcnJ9fSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBkaXNwYXRjaCh7dHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHtzdWNjZXNzOiByZXMubXNnfX0pXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHNfbWFuYWdlclwiPlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5Qcm9kdWN0cyBNYW5hZ2VyPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJyb3dcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGl0bGVcIiB2YWx1ZT17dGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUaXRsZVwiIGNsYXNzTmFtZT1cImQtYmxvY2sgbXktNCB3LTEwMCBwLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VJbnB1dH0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwcmljZVwiPlByaWNlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cInByaWNlXCIgdmFsdWU9e3ByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQcmljZVwiIGNsYXNzTmFtZT1cImQtYmxvY2sgdy0xMDAgcC0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VJbnB1dH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInByaWNlXCI+SW4gU3RvY2s8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwiaW5TdG9ja1wiIHZhbHVlPXtpblN0b2NrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJpblN0b2NrXCIgY2xhc3NOYW1lPVwiZC1ibG9jayB3LTEwMCBwLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZUlucHV0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGlkPVwiZGVzY3JpcHRpb25cIiBjb2xzPVwiMzBcIiByb3dzPVwiNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWJsb2NrIG15LTQgdy0xMDAgcC0yXCIgdmFsdWU9e2Rlc2NyaXB0aW9ufSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cImNvbnRlbnRcIiBpZD1cImNvbnRlbnRcIiBjb2xzPVwiMzBcIiByb3dzPVwiNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb250ZW50XCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZUlucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtYmxvY2sgbXktNCB3LTEwMCBwLTJcIiB2YWx1ZT17Y29udGVudH0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kIHB4LTAgbXktMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJjYXRlZ29yeVwiIGlkPVwiY2F0ZWdvcnlcIiB2YWx1ZT17Y2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VJbnB1dH0gY2xhc3NOYW1lPVwiY3VzdG9tLXNlbGVjdCB0ZXh0LWNhcGl0YWxpemVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhbGxcIj5BbGwgUHJvZHVjdHM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzLm1hcChpdGVtID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2l0ZW0uX2lkfSB2YWx1ZT17aXRlbS5faWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4taW5mbyBteS0yIHB4LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge29uRWRpdCA/ICdVcGRhdGUnOiAnQ3JlYXRlJ31cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG15LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCI+VXBsb2FkPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b20tZmlsZSBib3JkZXIgcm91bmRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgY2xhc3NOYW1lPVwiY3VzdG9tLWZpbGUtaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVVwbG9hZElucHV0fSBtdWx0aXBsZSBhY2NlcHQ9XCJpbWFnZS8qXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgaW1nLXVwIG14LTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VzLm1hcCgoaW1nLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiZmlsZV9pbWcgbXktMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nLnVybCA/IGltZy51cmwgOiBVUkwuY3JlYXRlT2JqZWN0VVJMKGltZyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIiBjbGFzc05hbWU9XCJpbWctdGh1bWJuYWlsIHJvdW5kZWRcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IGRlbGV0ZUltYWdlKGluZGV4KX0+WDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzTWFuYWdlciIsImV4cG9ydCBjb25zdCBBQ1RJT05TID0ge1xyXG4gICAgTk9USUZZOiAnTk9USUZZJyxcclxuICAgIEFVVEg6ICdBVVRIJyxcclxuICAgIEFERF9DQVJUOiAnQUREX0NBUlQnLFxyXG4gICAgQUREX01PREFMOiAnQUREX01PREFMJyxcclxuICAgIEFERF9PUkRFUlM6J0FERF9PUkRFUlMnLFxyXG4gICAgQUREX1VTRVJTOiAnQUREX1VTRVJTJyxcclxuICAgIEFERF9DQVRFR09SSUVTOiAnQUREX0NBVEVHT1JJRVMnLFxyXG5cclxufVxyXG5leHBvcnQgY29uc3QgYWRkVG9DYXJ0ID0gKHByb2R1Y3QsIGNhcnQpID0+IHtcclxuICAgIGlmKHByb2R1Y3QuaW5TdG9jayA9PT0gMClcclxuICAgIHJldHVybiAoeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge2Vycm9yOiAnVGhpcyBwcm9kdWN0IGlzIG91dCBvZiBzdG9jay4nfSB9KSBcclxuXHJcbiAgICBjb25zdCBjaGVjayA9IGNhcnQuZXZlcnkoaXRlbSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0uX2lkICE9PSBwcm9kdWN0Ll9pZFxyXG4gICAgfSlcclxuXHJcbiAgICBpZighY2hlY2spIHJldHVybiAoeyB0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge2Vycm9yOiAnVGhlIHByb2R1Y3QgaGFzIGJlZW4gYWRkZWQgdG8gY2FydC4nfSB9KSBcclxuXHJcbiAgICByZXR1cm4gKHsgdHlwZTogJ0FERF9DQVJUJywgcGF5bG9hZDogWy4uLmNhcnQsIHsuLi5wcm9kdWN0LCBxdWFudGl0eTogMX1dIH0pIFxyXG59XHJcbmV4cG9ydCBjb25zdCBkZWNyZWFzZSA9IChkYXRhLCBpZCkgPT4ge1xyXG4gICAgY29uc3QgbmV3RGF0YSA9IFsuLi5kYXRhXVxyXG4gICAgbmV3RGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGlmKGl0ZW0uX2lkID09PSBpZCkgaXRlbS5xdWFudGl0eSAtPSAxXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiAoeyB0eXBlOiAnQUREX0NBUlQnLCBwYXlsb2FkOiBuZXdEYXRhIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpbmNyZWFzZSA9IChkYXRhLCBpZCkgPT4ge1xyXG4gICAgY29uc3QgbmV3RGF0YSA9IFsuLi5kYXRhXVxyXG4gICAgbmV3RGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGlmKGl0ZW0uX2lkID09PSBpZCkgaXRlbS5xdWFudGl0eSArPSAxXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiAoeyB0eXBlOiAnQUREX0NBUlQnLCBwYXlsb2FkOiBuZXdEYXRhIH0pXHJcbn1cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZUl0ZW0gPSAoZGF0YSwgaWQsIHR5cGUpID0+IHtcclxuICAgIGlmICghZGF0YSkge1xyXG4gICAgICAgIHJldHVybiB7IHR5cGU6IFwiRVJST1JcIiwgcGF5bG9hZDogXCJEYXRhIGlzIHVuZGVmaW5lZFwiIH07XHJcbiAgICB9XHJcbiAgICBjb25zdCBuZXdEYXRhID0gZGF0YS5maWx0ZXIoaXRlbSA9PiBpdGVtLl9pZCAhPT0gaWQpXHJcbiAgICByZXR1cm4gKHsgdHlwZSwgcGF5bG9hZDogbmV3RGF0YX0pXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlSXRlbSA9IChkYXRhLCBpZCwgcG9zdCwgdHlwZSkgPT4ge1xyXG4gICAgY29uc3QgbmV3RGF0YSA9IGRhdGEubWFwKGl0ZW0gPT4gKGl0ZW0uX2lkID09PSBpZCA/IHBvc3QgOiBpdGVtKSlcclxuICAgIHJldHVybiAoeyB0eXBlLCBwYXlsb2FkOiBuZXdEYXRhfSlcclxufSAgICIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVJlZHVjZXIsdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCByZWR1Y2VycyBmcm9tICcuL1JlZHVjZXJzJ1xyXG5pbXBvcnQgeyBnZXREYXRhIH0gZnJvbSAnLi4vdXRpbHMvZmV0Y2hEYXRhJ1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBEYXRhQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxyXG5leHBvcnQgY29uc3QgRGF0YVByb3ZpZGVyID0gKHtjaGlsZHJlbn0pID0+IHtcclxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHsgXHJcbiAgICAgICAgbm90aWZ5OiB7fSwgYXV0aDoge30sY2FydDpbXSxtb2RhbDogW10sb3JkZXJzOltdLHVzZXJzOltdLGNhdGVnb3JpZXM6W119XHJcbiAgICAgICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXJzLCBpbml0aWFsU3RhdGUpXHJcbiAgICAgICAgY29uc3QgeyBjYXJ0LCBhdXRoIH0gPSBzdGF0ZVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmaXJzdExvZ2luID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmaXJzdExvZ2luXCIpO1xyXG4gICAgaWYoZmlyc3RMb2dpbil7XHJcbiAgICAgICAgZ2V0RGF0YSgnY2F0ZWdvcmllcycpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgaWYocmVzLmVycikgcmV0dXJuIGRpc3BhdGNoKHt0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge2Vycm9yOiByZXMuZXJyfX0pXHJcblxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7IFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJBRERfQ0FURUdPUklFU1wiLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogcmVzLmNhdGVnb3JpZXNcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgfSxbXSlcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9fY2FydDAxX19kZXZhdCcsIEpTT04uc3RyaW5naWZ5KGNhcnQpKVxyXG4gICAgfSwgW2NhcnRdKVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBfX25leHRfX2NhcnQwMV9fZGV2YXQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfX2NhcnQwMV9fZGV2YXQnKSlcclxuXHJcbiAgICAgICAgaWYoX19uZXh0X19jYXJ0MDFfX2RldmF0KSBkaXNwYXRjaCh7IHR5cGU6ICdBRERfQ0FSVCcsIHBheWxvYWQ6IF9fbmV4dF9fY2FydDAxX19kZXZhdCB9KVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZihhdXRoLnRva2VuKXtcclxuICAgICAgICAgICAgZ2V0RGF0YSgnb3JkZXInLCBhdXRoLnRva2VuKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYocmVzLmVycikgcmV0dXJuIGRpc3BhdGNoKHt0eXBlOiAnTk9USUZZJywgcGF5bG9hZDoge2Vycm9yOiByZXMuZXJyfX0pXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnQUREX09SREVSUycsIHBheWxvYWQ6IHJlcy5vcmRlcnN9KVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgaWYoYXV0aC51c2VyLnJvbGUgPT09ICdhZG1pbicpe1xyXG4gICAgICAgICAgICAgICAgZ2V0RGF0YSgndXNlcicsIGF1dGgudG9rZW4pXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlcy5lcnIpIHJldHVybiBkaXNwYXRjaCh7dHlwZTogJ05PVElGWScsIHBheWxvYWQ6IHtlcnJvcjogcmVzLmVycn19KVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdBRERfVVNFUlMnLCBwYXlsb2FkOiByZXMudXNlcnN9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ0FERF9PUkRFUlMnLCBwYXlsb2FkOiBbXX0pXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnQUREX1VTRVJTJywgcGF5bG9hZDogW119KVxyXG4gICAgICAgIH1cclxuICAgIH0sW2F1dGgudG9rZW5dKVxyXG5cclxuICAgIHJldHVybihcclxuICAgIDxEYXRhQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e3N0YXRlLCBkaXNwYXRjaH19PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvRGF0YUNvbnRleHQuUHJvdmlkZXI+XHJcbilcclxufSIsImltcG9ydCB7IEFDVElPTlMgfSBmcm9tICcuL0FjdGlvbnMnXHJcblxyXG5cclxuY29uc3QgcmVkdWNlcnMgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgICBjYXNlIEFDVElPTlMuTk9USUZZOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBub3RpZnk6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSBBQ1RJT05TLkFVVEg6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGF1dGg6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIH07IFxyXG4gICAgICAgICAgICBjYXNlIEFDVElPTlMuQUREX0NBUlQ6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGNhcnQ6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgQUNUSU9OUy5BRERfTU9EQUw6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG1vZGFsOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIEFDVElPTlMuQUREX09SREVSUzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgb3JkZXJzOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIEFDVElPTlMuQUREX1VTRVJTOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB1c2VyczogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIEFDVElPTlMuQUREX0NBVEVHT1JJRVM6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBleHBvcnQgZGVmYXVsdCByZWR1Y2VycyIsImNvbnN0IGJhc2VVcmwgPSBwcm9jZXNzLmVudi5CQVNFX1VSTFxyXG5cclxuZXhwb3J0IGNvbnN0IGdldERhdGEgPSBhc3luYyAodXJsLCB0b2tlbikgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVybH0vYXBpLyR7dXJsfWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiB0b2tlblxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgIHJldHVybiBkYXRhXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwb3N0RGF0YSA9IGFzeW5jICh1cmwsIHBvc3QsIHRva2VuKSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfS9hcGkvJHt1cmx9YCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiB0b2tlblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocG9zdClcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgIHJldHVybiBkYXRhXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHB1dERhdGEgPSBhc3luYyAodXJsLCBwb3N0LCB0b2tlbikgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVybH0vYXBpLyR7dXJsfWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiB0b2tlblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocG9zdClcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgIHJldHVybiBkYXRhXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwYXRjaERhdGEgPSBhc3luYyAodXJsLCBwb3N0LCB0b2tlbikgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVybH0vYXBpLyR7dXJsfWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IHRva2VuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwb3N0KVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgcmV0dXJuIGRhdGFcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVEYXRhID0gYXN5bmMgKHVybCwgdG9rZW4pID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2Jhc2VVcmx9L2FwaS8ke3VybH1gLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogdG9rZW5cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICByZXR1cm4gZGF0YVxyXG59IiwiZXhwb3J0IGNvbnN0IGltYWdlVXBsb2FkID0gYXN5bmMgKGltYWdlcykgPT4ge1xyXG4gICAgbGV0IGltZ0FyciA9IFtdXHJcbiAgICBmb3IoY29uc3QgaXRlbSBvZiBpbWFnZXMpe1xyXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJmaWxlXCIsIGl0ZW0pXHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwidXBsb2FkX3ByZXNldFwiLCBwcm9jZXNzLmVudi5DTE9VRF9VUERBVEVfUFJFU0VUKVxyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImNsb3VkX25hbWVcIiwgcHJvY2Vzcy5lbnYuQ0xPVURfTkFNRSlcclxuXHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2gocHJvY2Vzcy5lbnYuQ0xPVURfQVBJLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGJvZHk6IGZvcm1EYXRhXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgICAgICBpbWdBcnIucHVzaCh7cHVibGljX2lkOiBkYXRhLnB1YmxpY19pZCwgdXJsOiBkYXRhLnNlY3VyZV91cmx9KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGltZ0FycjtcclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==