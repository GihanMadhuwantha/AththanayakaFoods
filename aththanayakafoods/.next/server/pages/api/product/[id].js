module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/product/[id].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./middleware/auth.js":
/*!****************************!*\
  !*** ./middleware/auth.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/userModel */ "./models/userModel.js");


const auth = async (req, res) => {
  const token = req.headers.authorization;
  if (!token) return res.status(400).json({
    err: 'Invalid Authentication.'
  });
  const decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.verify(token, "hL8h5H9&xBJ2RCBmjB+Dpq2MJxAVHpW$feRqdvjfIaUTheWP+K");
  if (!decoded) return res.status(400).json({
    err: 'Invalid Authentication.'
  });
  const user = await _models_userModel__WEBPACK_IMPORTED_MODULE_1__["default"].findOne({
    _id: decoded.id
  });
  return {
    id: user._id,
    role: user.role,
    root: user.root
  };
};
/* harmony default export */ __webpack_exports__["default"] = (auth);

/***/ }),

/***/ "./models/productModel.js":
/*!********************************!*\
  !*** ./models/productModel.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const productSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  images: {
    type: Array,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  checked: {
    type: Boolean,
    default: false
  },
  inStock: {
    type: Number,
    default: 0
  },
  sold: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});
let Dataset = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.product || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('product', productSchema);
/* harmony default export */ __webpack_exports__["default"] = (Dataset);

/***/ }),

/***/ "./models/userModel.js":
/*!*****************************!*\
  !*** ./models/userModel.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 'user'
  },
  root: {
    type: Boolean,
    default: false
  },
  avatar: {
    type: String,
    default: 'https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png'
  }
}, {
  timestamps: true
});
let Dataset = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.user || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('user', userSchema);
/* harmony default export */ __webpack_exports__["default"] = (Dataset);

/***/ }),

/***/ "./pages/api/product/[id].js":
/*!***********************************!*\
  !*** ./pages/api/product/[id].js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_connectDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/connectDB */ "./utils/connectDB.js");
/* harmony import */ var _models_productModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/productModel */ "./models/productModel.js");
/* harmony import */ var _middleware_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../middleware/auth */ "./middleware/auth.js");



Object(_utils_connectDB__WEBPACK_IMPORTED_MODULE_0__["default"])();
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  switch (req.method) {
    case "GET":
      await getProduct(req, res);
      break;
    case "PUT":
      await updateProduct(req, res);
      break;
    case "DELETE":
      await deleteProduct(req, res);
      break;
  }
});
const getProduct = async (req, res) => {
  try {
    const {
      id
    } = req.query;
    const product = await _models_productModel__WEBPACK_IMPORTED_MODULE_1__["default"].findById(id);
    if (!product) return res.status(400).json({
      err: 'This product does not exist.'
    });
    res.json({
      product
    });
  } catch (err) {
    return res.status(500).json({
      err: err.message
    });
  }
};
const updateProduct = async (req, res) => {
  try {
    const result = await Object(_middleware_auth__WEBPACK_IMPORTED_MODULE_2__["default"])(req, res);
    if (result.role !== 'admin') return res.status(400).json({
      err: 'Authentication is not valid.'
    });
    const {
      id
    } = req.query;
    const {
      title,
      price,
      inStock,
      description,
      content,
      category,
      images
    } = req.body;
    if (!title || !price || !inStock || !description || !content || category === 'all' || images.length === 0) return res.status(400).json({
      err: 'Please add all the fields.'
    });
    await _models_productModel__WEBPACK_IMPORTED_MODULE_1__["default"].findOneAndUpdate({
      _id: id
    }, {
      title: title.toLowerCase(),
      price,
      inStock,
      description,
      content,
      category,
      images
    });
    res.json({
      msg: 'Success! Updated a product'
    });
  } catch (err) {
    return res.status(500).json({
      err: err.message
    });
  }
};
const deleteProduct = async (req, res) => {
  try {
    const result = await Object(_middleware_auth__WEBPACK_IMPORTED_MODULE_2__["default"])(req, res);
    if (result.role !== 'admin') return res.status(400).json({
      err: 'Authentication is not valid.'
    });
    const {
      id
    } = req.query;
    await _models_productModel__WEBPACK_IMPORTED_MODULE_1__["default"].findByIdAndDelete(id);
    res.json({
      msg: 'Deleted a product.'
    });
  } catch (err) {
    return res.status(500).json({
      err: err.message
    });
  }
};

/***/ }),

/***/ "./utils/connectDB.js":
/*!****************************!*\
  !*** ./utils/connectDB.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const connectDB = () => {
  if (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connections[0].readyState) {
    console.log('Already connected.');
    return;
  }
  mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect("mongodb+srv://jayasoor:gihankelani123@cluster0.bulx7d7.mongodb.net/AFoodsDB?retryWrites=true&w=majority", {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, err => {
    if (err) throw err;
    console.log('Connected to mongodb.');
  });
};
/* harmony default export */ __webpack_exports__["default"] = (connectDB);

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbWlkZGxld2FyZS9hdXRoLmpzIiwid2VicGFjazovLy8uL21vZGVscy9wcm9kdWN0TW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL3VzZXJNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvcHJvZHVjdC8uanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29ubmVjdERCLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvb3NlXCIiXSwibmFtZXMiOlsiYXV0aCIsInJlcSIsInJlcyIsInRva2VuIiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwiZGVjb2RlZCIsImp3dCIsInZlcmlmeSIsInByb2Nlc3MiLCJ1c2VyIiwiVXNlcnMiLCJmaW5kT25lIiwiX2lkIiwiaWQiLCJyb2xlIiwicm9vdCIsInByb2R1Y3RTY2hlbWEiLCJtb25nb29zZSIsIlNjaGVtYSIsInRpdGxlIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwidHJpbSIsInByaWNlIiwiTnVtYmVyIiwiZGVzY3JpcHRpb24iLCJjb250ZW50IiwiaW1hZ2VzIiwiQXJyYXkiLCJjYXRlZ29yeSIsImNoZWNrZWQiLCJCb29sZWFuIiwiZGVmYXVsdCIsImluU3RvY2siLCJzb2xkIiwidGltZXN0YW1wcyIsIkRhdGFzZXQiLCJtb2RlbHMiLCJwcm9kdWN0IiwibW9kZWwiLCJ1c2VyU2NoZW1hIiwibmFtZSIsImVtYWlsIiwidW5pcXVlIiwicGFzc3dvcmQiLCJhdmF0YXIiLCJjb25uZWN0REIiLCJtZXRob2QiLCJnZXRQcm9kdWN0IiwidXBkYXRlUHJvZHVjdCIsImRlbGV0ZVByb2R1Y3QiLCJxdWVyeSIsIlByb2R1Y3RzIiwiZmluZEJ5SWQiLCJtZXNzYWdlIiwicmVzdWx0IiwiYm9keSIsImxlbmd0aCIsImZpbmRPbmVBbmRVcGRhdGUiLCJ0b0xvd2VyQ2FzZSIsIm1zZyIsImZpbmRCeUlkQW5kRGVsZXRlIiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIiwiY29uc29sZSIsImxvZyIsImNvbm5lY3QiLCJ1c2VDcmVhdGVJbmRleCIsInVzZUZpbmRBbmRNb2RpZnkiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBO0FBQUE7QUFBOEI7QUFDUztBQUd2QyxNQUFNQSxJQUFJLEdBQUcsT0FBT0MsR0FBRyxFQUFFQyxHQUFHLEtBQUs7RUFDN0IsTUFBTUMsS0FBSyxHQUFHRixHQUFHLENBQUNHLE9BQU8sQ0FBQ0MsYUFBYTtFQUN2QyxJQUFHLENBQUNGLEtBQUssRUFBRSxPQUFPRCxH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QUErQjtBQUUvQixNQUFNUixTQUFTLEdBQUcsTUFBTTtFQUNwQixJQUFHOUIsK0NBQVEsQ0FBQzhDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsVUFBVSxFQUFDO0lBQ2xDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztJQUNqQztFQUNKO0VBQ0FqRCwrQ0FBUSxDQUFDa0QsT0FBTyxDQUFDM0QseUdBQXVCLEVBQUU7SUFDdEM0RCxjQUFjLEVBQUUsSUFBSTtJQUNwQkMsZ0JBQWdCLEVBQUUsS0FBSztJQUN2QkMsZUFBZSxFQUFFLElBQUk7SUFDckJDLGtCQUFrQixFQUFFO0VBQ3hCLENBQUMsRUFBRW5FLEdBQUcsSUFBSTtJQUNOLElBQUdBLEdBQUcsRUFBRSxNQUFNQSxHQUFHO0lBQ2pCNkQsT0FBTyxDQUFDQyxHQUFHLENBQUMsdUJBQXVCLENBQUM7RUFDeEMsQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQUdjbkIsd0VBQVMsRTs7Ozs7Ozs7Ozs7QUNuQnhCLHlDOzs7Ozs7Ozs7OztBQ0FBLHFDIiwiZmlsZSI6InBhZ2VzL2FwaS9wcm9kdWN0L1tpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FwaS9wcm9kdWN0L1tpZF0uanNcIik7XG4iLCJpbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbidcclxuaW1wb3J0IFVzZXJzIGZyb20gJy4uL21vZGVscy91c2VyTW9kZWwnXHJcblxyXG5cclxuY29uc3QgYXV0aCA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgY29uc3QgdG9rZW4gPSByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uO1xyXG4gICAgaWYoIXRva2VuKSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2VycjogJ0ludmFsaWQgQXV0aGVudGljYXRpb24uJ30pXHJcblxyXG4gICAgY29uc3QgZGVjb2RlZCA9IGp3dC52ZXJpZnkodG9rZW4sIHByb2Nlc3MuZW52LkFDQ0VTU19UT0tFTl9TRUNSRVQpXHJcbiAgICBpZighZGVjb2RlZCkgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnI6ICdJbnZhbGlkIEF1dGhlbnRpY2F0aW9uLid9KVxyXG5cclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2Vycy5maW5kT25lKHtfaWQ6IGRlY29kZWQuaWR9KVxyXG5cclxuICAgIHJldHVybiB7aWQ6IHVzZXIuX2lkLCByb2xlOiB1c2VyLnJvbGUsIHJvb3Q6IHVzZXIucm9vdH07XHJcbn1cclxuXHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgYXV0aCIsImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcclxuXHJcbmNvbnN0IHByb2R1Y3RTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgIHRyaW06IHRydWVcclxuICAgIH0sXHJcbiAgICBwcmljZToge1xyXG4gICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICB0cmltOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgZGVzY3JpcHRpb246IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgIH0sXHJcbiAgICBjb250ZW50OiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgaW1hZ2VzOiB7XHJcbiAgICAgICAgdHlwZTogQXJyYXksXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgIH0sXHJcbiAgICBjYXRlZ29yeToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGNoZWNrZWQ6IHtcclxuICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgaW5TdG9jazoge1xyXG4gICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgICBkZWZhdWx0OiAwXHJcbiAgICB9LFxyXG4gICAgc29sZDoge1xyXG4gICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgICBkZWZhdWx0OiAwXHJcbiAgICB9XHJcbn0sIHtcclxuICAgIHRpbWVzdGFtcHM6IHRydWVcclxufSlcclxuXHJcbmxldCBEYXRhc2V0ID0gbW9uZ29vc2UubW9kZWxzLnByb2R1Y3QgfHwgbW9uZ29vc2UubW9kZWwoJ3Byb2R1Y3QnLCBwcm9kdWN0U2NoZW1hKVxyXG5leHBvcnQgZGVmYXVsdCBEYXRhc2V0IiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xyXG5cclxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gICAgbmFtZToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGVtYWlsOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgIHVuaXF1ZTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHBhc3N3b3JkOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgcm9sZToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICBkZWZhdWx0OiAndXNlcidcclxuICAgIH0sXHJcbiAgICByb290OiB7XHJcbiAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICBkZWZhdWx0OiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGF2YXRhcjoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICBkZWZhdWx0OiAnaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGV2YXRjaGFubmVsL2ltYWdlL3VwbG9hZC92MTYwMjc1MjQwMi9hdmF0YXIvYXZhdGFyX2N1Z3E0MC5wbmcnXHJcbiAgICB9XHJcbn0sIHtcclxuICAgIHRpbWVzdGFtcHM6IHRydWVcclxufSlcclxuXHJcbmxldCBEYXRhc2V0ID0gbW9uZ29vc2UubW9kZWxzLnVzZXIgfHwgbW9uZ29vc2UubW9kZWwoJ3VzZXInLCB1c2VyU2NoZW1hKVxyXG5leHBvcnQgZGVmYXVsdCBEYXRhc2V0IiwiaW1wb3J0IGNvbm5lY3REQiBmcm9tICcuLi8uLi8uLi91dGlscy9jb25uZWN0REInXHJcbmltcG9ydCBQcm9kdWN0cyBmcm9tICcuLi8uLi8uLi9tb2RlbHMvcHJvZHVjdE1vZGVsJ1xyXG5pbXBvcnQgYXV0aCBmcm9tICcuLi8uLi8uLi9taWRkbGV3YXJlL2F1dGgnXHJcblxyXG5jb25uZWN0REIoKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7IFxyXG4gICAgc3dpdGNoKHJlcS5tZXRob2Qpe1xyXG4gICAgICAgIGNhc2UgXCJHRVRcIjpcclxuICAgICAgICAgICAgYXdhaXQgZ2V0UHJvZHVjdChyZXEsIHJlcylcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcIlBVVFwiOlxyXG4gICAgICAgICAgICBhd2FpdCB1cGRhdGVQcm9kdWN0KHJlcSwgcmVzKVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiREVMRVRFXCI6XHJcbiAgICAgICAgICAgIGF3YWl0IGRlbGV0ZVByb2R1Y3QocmVxLCByZXMpXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBnZXRQcm9kdWN0ID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgaWQgfSA9IHJlcS5xdWVyeTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJvZHVjdCA9IGF3YWl0IFByb2R1Y3RzLmZpbmRCeUlkKGlkKVxyXG4gICAgICAgIGlmKCFwcm9kdWN0KSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2VycjogJ1RoaXMgcHJvZHVjdCBkb2VzIG5vdCBleGlzdC4nfSlcclxuICAgICAgICBcclxuICAgICAgICByZXMuanNvbih7IHByb2R1Y3QgfSlcclxuXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oe2VycjogZXJyLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCB1cGRhdGVQcm9kdWN0ID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF1dGgocmVxLCByZXMpXHJcbiAgICAgICAgaWYocmVzdWx0LnJvbGUgIT09ICdhZG1pbicpIFxyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyOiAnQXV0aGVudGljYXRpb24gaXMgbm90IHZhbGlkLid9KVxyXG5cclxuICAgICAgICBjb25zdCB7aWR9ID0gcmVxLnF1ZXJ5XHJcbiAgICAgICAgY29uc3Qge3RpdGxlLCBwcmljZSwgaW5TdG9jaywgZGVzY3JpcHRpb24sIGNvbnRlbnQsIGNhdGVnb3J5LCBpbWFnZXN9ID0gcmVxLmJvZHlcclxuXHJcbiAgICAgICAgaWYoIXRpdGxlIHx8ICFwcmljZSB8fCAhaW5TdG9jayB8fCAhZGVzY3JpcHRpb24gfHwgIWNvbnRlbnQgfHwgY2F0ZWdvcnkgPT09ICdhbGwnIHx8IGltYWdlcy5sZW5ndGggPT09IDApXHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnI6ICdQbGVhc2UgYWRkIGFsbCB0aGUgZmllbGRzLid9KVxyXG5cclxuICAgICAgICBhd2FpdCBQcm9kdWN0cy5maW5kT25lQW5kVXBkYXRlKHtfaWQ6IGlkfSwge1xyXG4gICAgICAgICAgICB0aXRsZTogdGl0bGUudG9Mb3dlckNhc2UoKSwgcHJpY2UsIGluU3RvY2ssIGRlc2NyaXB0aW9uLCBjb250ZW50LCBjYXRlZ29yeSwgaW1hZ2VzXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmVzLmpzb24oe21zZzogJ1N1Y2Nlc3MhIFVwZGF0ZWQgYSBwcm9kdWN0J30pXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oe2VycjogZXJyLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBkZWxldGVQcm9kdWN0ID0gYXN5bmMocmVxLCByZXMpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXV0aChyZXEsIHJlcylcclxuICAgICAgICBcclxuICAgICAgICBpZihyZXN1bHQucm9sZSAhPT0gJ2FkbWluJykgXHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnI6ICdBdXRoZW50aWNhdGlvbiBpcyBub3QgdmFsaWQuJ30pXHJcblxyXG4gICAgICAgIGNvbnN0IHtpZH0gPSByZXEucXVlcnlcclxuXHJcbiAgICAgICAgYXdhaXQgUHJvZHVjdHMuZmluZEJ5SWRBbmREZWxldGUoaWQpXHJcbiAgICAgICAgcmVzLmpzb24oe21zZzogJ0RlbGV0ZWQgYSBwcm9kdWN0Lid9KVxyXG5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7ZXJyOiBlcnIubWVzc2FnZX0pXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnXHJcblxyXG5jb25zdCBjb25uZWN0REIgPSAoKSA9PiB7XHJcbiAgICBpZihtb25nb29zZS5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnQWxyZWFkeSBjb25uZWN0ZWQuJylcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJMLCB7XHJcbiAgICAgICAgdXNlQ3JlYXRlSW5kZXg6IHRydWUsXHJcbiAgICAgICAgdXNlRmluZEFuZE1vZGlmeTogZmFsc2UsXHJcbiAgICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxyXG4gICAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZVxyXG4gICAgfSwgZXJyID0+IHtcclxuICAgICAgICBpZihlcnIpIHRocm93IGVycjtcclxuICAgICAgICBjb25zb2xlLmxvZygnQ29ubmVjdGVkIHRvIG1vbmdvZGIuJylcclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0REIiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==