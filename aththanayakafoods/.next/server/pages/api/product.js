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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/product/index.js");
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

/***/ "./pages/api/product/index.js":
/*!************************************!*\
  !*** ./pages/api/product/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_connectDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/connectDB */ "./utils/connectDB.js");
/* harmony import */ var _models_productModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/productModel */ "./models/productModel.js");
/* harmony import */ var _middleware_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../middleware/auth */ "./middleware/auth.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/* import connectDB from '../../../utils/connectDB'
import Products from '../../../models/productModel'
import auth from '../../../middleware/auth'

connectDB()
export default async(req,res)=>{
 switch(req.method){
    case "GET":
        await getProducts(req,res)
        break;
        case "POST":
         await createProduct(req, res)
         break;

 }
 class APIfeatures {
    constructor(query, queryString){
        this.query = query;
        this.queryString = queryString;
    }
    filtering(){
        const queryObj = {...this.queryString}

        const excludeFields = ['page', 'sort', 'limit']
        excludeFields.forEach(el => delete(queryObj[el]))

        if(queryObj.category !== 'all')
            this.query.find({category: queryObj.category})
        if(queryObj.title !== 'all')
            this.query.find({title: {$regex: queryObj.title}})

        this.query.find()
        return this;
    }

    sorting(){
        if(this.queryString.sort){
            const sortBy = this.queryString.sort.split(',').join('')
            this.query = this.query.sort(sortBy)
        }else{
            this.query = this.query.sort('-createdAt')
        }

        return this;
    }

    paginating(){
        const page = this.queryString.page * 1 || 1
        const limit = this.queryString.limit * 1 || 6
        const skip = (page - 1) * limit;
        this.query = this.query.skip(skip).limit(limit)
        return this;
    }
}

}
const getProducts= async(req,res)=>{
 try {
    const features = new APIfeatures(Products.find(), req.query)
        .filtering().sorting().paginating()

        const products = await features.query
    
   // const products=await Products.find()
    res.json({
        status:'success',
        result:products.length,
        products})
 } catch (err) {
    return res.status(500).json({err:err.message })
 }
}
const createProduct = async (req, res) => {
   try {
       const result = await auth(req, res)
       if(result.role !== 'admin') return res.status(400).json({err: 'Authentication is not valid.'})

       const {title, price, inStock, description, content, category, images} = req.body

       if(!title || !price || !inStock || !description || !content || category === 'all' || images.length === 0)
       return res.status(400).json({err: 'Please add all the fields.'})


       const newProduct = new Products({
           title: title.toLowerCase(), price, inStock, description, content, category, images
       })

       await newProduct.save()

       res.json({msg: 'Success! Created a new product'})

   } catch (err) {
       return res.status(500).json({err: err.message})
   }
} */



Object(_utils_connectDB__WEBPACK_IMPORTED_MODULE_0__["default"])();
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  switch (req.method) {
    case "GET":
      await getProducts(req, res);
      break;
    case "POST":
      await createProduct(req, res);
      break;
  }
});
class APIfeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }
  filtering() {
    const queryObj = _objectSpread({}, this.queryString);
    const excludeFields = ['page', 'sort', 'limit'];
    excludeFields.forEach(el => delete queryObj[el]);
    if (queryObj.category !== 'all') this.query.find({
      category: queryObj.category
    });
    if (queryObj.title !== 'all') this.query.find({
      title: {
        $regex: queryObj.title
      }
    });
    this.query.find();
    return this;
  }
  sorting() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(',').join('');
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort('-createdAt');
    }
    return this;
  }
  paginating() {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 6;
    const skip = (page - 1) * limit;
    this.query = this.query.skip(skip).limit(limit);
    return this;
  }
}
const getProducts = async (req, res) => {
  try {
    const features = new APIfeatures(_models_productModel__WEBPACK_IMPORTED_MODULE_1__["default"].find(), req.query).filtering().sorting().paginating();
    const products = await features.query;
    res.json({
      status: 'success',
      result: products.length,
      products
    });
  } catch (err) {
    return res.status(500).json({
      err: err.message
    });
  }
};
const createProduct = async (req, res) => {
  try {
    const result = await Object(_middleware_auth__WEBPACK_IMPORTED_MODULE_2__["default"])(req, res);
    if (result.role !== 'admin') return res.status(400).json({
      err: 'Authentication is not valid.'
    });
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
    const newProduct = new _models_productModel__WEBPACK_IMPORTED_MODULE_1__["default"]({
      title: title.toLowerCase(),
      price,
      inStock,
      description,
      content,
      category,
      images
    });
    await newProduct.save();
    res.json({
      msg: 'Success! Created a new product'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbWlkZGxld2FyZS9hdXRoLmpzIiwid2VicGFjazovLy8uL21vZGVscy9wcm9kdWN0TW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kZWxzL3VzZXJNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvcHJvZHVjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9jb25uZWN0REIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianNvbndlYnRva2VuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9uZ29vc2VcIiJdLCJuYW1lcyI6WyJhdXRoIiwicmVxIiwicmVzIiwidG9rZW4iLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsInN0YXR1cyIsImpzb24iLCJlcnIiLCJkZWNvZGVkIiwiand0IiwidmVyaWZ5IiwicHJvY2VzcyIsInVzZXIiLCJVc2VycyIsImZpbmRPbmUiLCJfaWQiLCJpZCIsInJvbGUiLCJyb290IiwicHJvZHVjdFNjaGVtYSIsIm1vbmdvb3NlIiwiU2NoZW1hIiwidGl0bGUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJ0cmltIiwicHJpY2UiLCJOdW1iZXIiLCJkZXNjcmlwdGlvbiIsImNvbnRlbnQiLCJpbWFnZXMiLCJBcnJheSIsImNhdGVnb3J5IiwiY2hlY2tlZCIsIkJvb2xlYW4iLCJkZWZhdWx0IiwiaW5TdG9jayIsInNvbGQiLCJ0aW1lc3RhbXBzIiwiRGF0YXNldCIsIm1vZGVscyIsInByb2R1Y3QiLCJtb2RlbCIsInVzZXJTY2hlbWEiLCJuYW1lIiwiZW1haWwiLCJ1bmlxdWUiLCJwYXNzd29yZCIsImF2YXRhciIsImNvbm5lY3REQiIsIm1ldGhvZCIsImdldFByb2R1Y3RzIiwiY3JlYXRlUHJvZHVjdCIsIkFQSWZlYXR1cmVzIiwiY29uc3RydWN0b3IiLCJxdWVyeSIsInF1ZXJ5U3RyaW5nIiwiZmlsdGVyaW5nIiwicXVlcnlPYmoiLCJleGNsdWRlRmllbGRzIiwiZm9yRWFjaCIsImVsIiwiZmluZCIsIiRyZWdleCIsInNvcnRpbmciLCJzb3J0Iiwic29ydEJ5Iiwic3BsaXQiLCJqb2luIiwicGFnaW5hdGluZyIsInBhZ2UiLCJsaW1pdCIsInNraXAiLCJmZWF0dXJlcyIsIlByb2R1Y3RzIiwicHJvZHVjdHMiLCJyZXN1bHQiLCJsZW5ndGgiLCJtZXNzYWdlIiwiYm9keSIsIm5ld1Byb2R1Y3QiLCJ0b0xvd2VyQ2FzZSIsInNhdmUiLCJtc2ciLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdCIsInVzZUNyZWF0ZUluZGV4IiwidXNlRmluZEFuZE1vZGlmeSIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFBO0FBQUE7QUFBQTtBQUE4QjtBQUNTO0FBR3ZDLE1BQU1BLElBQUksR0FBRyxPQUFPQyxHQUFHLEVBQUVDLEdBQUcsS0FBSztFQUM3QixNQUFNQyxLQUFLLEdBQUdGLEdBQUcsQ0FBQ0csT0FBTyxDQUFDQyxhQUFhO0VBQ3ZDLElBQUcsQ0FBQ0YsS0FBSyxFQUFFLE9BQU9ELEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7SUFBQ0MsR0FBRyxFQUFFO0VBQXlCLENBQUMsQ0FBQztFQUV4RSxNQUFNQyxPQUFPLEdBQUdDLG1EQUFHLENBQUNDLE1BQU0sQ0FBQ1IsS0FBSyxFQUFFUyxvREFBK0IsQ0FBQztFQUNsRSxJQUFHLENBQUNILE9BQU8sRUFBRSxPQUFPUCxHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO0lBQUNDLEdBQUcsRUFBRTtFQUF5QixDQUFDLENBQUM7RUFFMUUsTUFBTUssSUFBSSxHQUFHLE1BQU1DLHlEQUFLLENBQUNDLE9BQU8sQ0FBQztJQUFDQyxHQUFHLEVBQUVQLE9BQU8sQ0FBQ1E7RUFBRSxDQUFDLENBQUM7RUFFbkQsT0FBTztJQUFDQSxFQUFFLEVBQUVKLElBQUksQ0FBQ0csR0FBRztJQUFFRSxJQUFJLEVBQUVMLElBQUksQ0FBQ0ssSUFBSTtJQUFFQyxJQUFJLEVBQUVOLElBQUksQ0FBQ007RUFBSSxDQUFDO0FBQzNELENBQUM7QUFHY25CLG1FQUFJLEU7Ozs7Ozs7Ozs7OztBQ2pCbkI7QUFBQTtBQUFBO0FBQStCO0FBRS9CLE1BQU1vQixhQUFhLEdBQUcsSUFBSUMsK0NBQVEsQ0FBQ0MsTUFBTSxDQUFDO0VBQ3RDQyxLQUFLLEVBQUU7SUFDSEMsSUFBSSxFQUFFQyxNQUFNO0lBQ1pDLFFBQVEsRUFBRSxJQUFJO0lBQ2RDLElBQUksRUFBRTtFQUNWLENBQUM7RUFDREMsS0FBSyxFQUFFO0lBQ0hKLElBQUksRUFBRUssTUFBTTtJQUNaSCxRQUFRLEVBQUUsSUFBSTtJQUNkQyxJQUFJLEVBQUU7RUFDVixDQUFDO0VBQ0RHLFdBQVcsRUFBRTtJQUNUTixJQUFJLEVBQUVDLE1BQU07SUFDWkMsUUFBUSxFQUFFO0VBQ2QsQ0FBQztFQUNESyxPQUFPLEVBQUU7SUFDTFAsSUFBSSxFQUFFQyxNQUFNO0lBQ1pDLFFBQVEsRUFBRTtFQUNkLENBQUM7RUFDRE0sTUFBTSxFQUFFO0lBQ0pSLElBQUksRUFBRVMsS0FBSztJQUNYUCxRQUFRLEVBQUU7RUFDZCxDQUFDO0VBQ0RRLFFBQVEsRUFBRTtJQUNOVixJQUFJLEVBQUVDLE1BQU07SUFDWkMsUUFBUSxFQUFFO0VBQ2QsQ0FBQztFQUNEUyxPQUFPLEVBQUU7SUFDTFgsSUFBSSxFQUFFWSxPQUFPO0lBQ2JDLE9BQU8sRUFBRTtFQUNiLENBQUM7RUFDREMsT0FBTyxFQUFFO0lBQ0xkLElBQUksRUFBRUssTUFBTTtJQUNaUSxPQUFPLEVBQUU7RUFDYixDQUFDO0VBQ0RFLElBQUksRUFBRTtJQUNGZixJQUFJLEVBQUVLLE1BQU07SUFDWlEsT0FBTyxFQUFFO0VBQ2I7QUFDSixDQUFDLEVBQUU7RUFDQ0csVUFBVSxFQUFFO0FBQ2hCLENBQUMsQ0FBQztBQUVGLElBQUlDLE9BQU8sR0FBR3BCLCtDQUFRLENBQUNxQixNQUFNLENBQUNDLE9BQU8sSUFBSXRCLCtDQUFRLENBQUN1QixLQUFLLENBQUMsU0FBUyxFQUFFeEIsYUFBYSxDQUFDO0FBQ2xFcUIsc0VBQU8sRTs7Ozs7Ozs7Ozs7O0FDOUN0QjtBQUFBO0FBQUE7QUFBK0I7QUFFL0IsTUFBTUksVUFBVSxHQUFHLElBQUl4QiwrQ0FBUSxDQUFDQyxNQUFNLENBQUM7RUFDbkN3QixJQUFJLEVBQUU7SUFDRnRCLElBQUksRUFBRUMsTUFBTTtJQUNaQyxRQUFRLEVBQUU7RUFDZCxDQUFDO0VBQ0RxQixLQUFLLEVBQUU7SUFDSHZCLElBQUksRUFBRUMsTUFBTTtJQUNaQyxRQUFRLEVBQUUsSUFBSTtJQUNkc0IsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNEQyxRQUFRLEVBQUU7SUFDTnpCLElBQUksRUFBRUMsTUFBTTtJQUNaQyxRQUFRLEVBQUU7RUFDZCxDQUFDO0VBQ0RSLElBQUksRUFBRTtJQUNGTSxJQUFJLEVBQUVDLE1BQU07SUFDWlksT0FBTyxFQUFFO0VBQ2IsQ0FBQztFQUNEbEIsSUFBSSxFQUFFO0lBQ0ZLLElBQUksRUFBRVksT0FBTztJQUNiQyxPQUFPLEVBQUU7RUFDYixDQUFDO0VBQ0RhLE1BQU0sRUFBRTtJQUNKMUIsSUFBSSxFQUFFQyxNQUFNO0lBQ1pZLE9BQU8sRUFBRTtFQUNiO0FBQ0osQ0FBQyxFQUFFO0VBQ0NHLFVBQVUsRUFBRTtBQUNoQixDQUFDLENBQUM7QUFFRixJQUFJQyxPQUFPLEdBQUdwQiwrQ0FBUSxDQUFDcUIsTUFBTSxDQUFDN0IsSUFBSSxJQUFJUSwrQ0FBUSxDQUFDdUIsS0FBSyxDQUFDLE1BQU0sRUFBRUMsVUFBVSxDQUFDO0FBQ3pESixzRUFBTyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZ0Q7QUFDRztBQUNSO0FBRTNDVSxnRUFBUyxFQUFFO0FBRUksc0VBQU9sRCxHQUFHLEVBQUVDLEdBQUcsS0FBSztFQUMvQixRQUFPRCxHQUFHLENBQUNtRCxNQUFNO0lBQ2IsS0FBSyxLQUFLO01BQ04sTUFBTUMsV0FBVyxDQUFDcEQsR0FBRyxFQUFFQyxHQUFHLENBQUM7TUFDM0I7SUFDSixLQUFLLE1BQU07TUFDUCxNQUFNb0QsYUFBYSxDQUFDckQsR0FBRyxFQUFFQyxHQUFHLENBQUM7TUFDN0I7RUFBTTtBQUVsQixDQUFDO0FBRUQsTUFBTXFELFdBQVcsQ0FBQztFQUNkQyxXQUFXLENBQUNDLEtBQUssRUFBRUMsV0FBVyxFQUFDO0lBQzNCLElBQUksQ0FBQ0QsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQSxXQUFXO0VBQ2xDO0VBQ0FDLFNBQVMsR0FBRTtJQUNQLE1BQU1DLFFBQVEscUJBQU8sSUFBSSxDQUFDRixXQUFXLENBQUM7SUFFdEMsTUFBTUcsYUFBYSxHQUFHLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUM7SUFDL0NBLGFBQWEsQ0FBQ0MsT0FBTyxDQUFDQyxFQUFFLElBQUksT0FBT0gsUUFBUSxDQUFDRyxFQUFFLENBQUUsQ0FBQztJQUVqRCxJQUFHSCxRQUFRLENBQUMxQixRQUFRLEtBQUssS0FBSyxFQUMxQixJQUFJLENBQUN1QixLQUFLLENBQUNPLElBQUksQ0FBQztNQUFDOUIsUUFBUSxFQUFFMEIsUUFBUSxDQUFDMUI7SUFBUSxDQUFDLENBQUM7SUFDbEQsSUFBRzBCLFFBQVEsQ0FBQ3JDLEtBQUssS0FBSyxLQUFLLEVBQ3ZCLElBQUksQ0FBQ2tDLEtBQUssQ0FBQ08sSUFBSSxDQUFDO01BQUN6QyxLQUFLLEVBQUU7UUFBQzBDLE1BQU0sRUFBRUwsUUFBUSxDQUFDckM7TUFBSztJQUFDLENBQUMsQ0FBQztJQUV0RCxJQUFJLENBQUNrQyxLQUFLLENBQUNPLElBQUksRUFBRTtJQUNqQixPQUFPLElBQUk7RUFDZjtFQUVBRSxPQUFPLEdBQUU7SUFDTCxJQUFHLElBQUksQ0FBQ1IsV0FBVyxDQUFDUyxJQUFJLEVBQUM7TUFDckIsTUFBTUMsTUFBTSxHQUFHLElBQUksQ0FBQ1YsV0FBVyxDQUFDUyxJQUFJLENBQUNFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLEVBQUUsQ0FBQztNQUN4RCxJQUFJLENBQUNiLEtBQUssR0FBRyxJQUFJLENBQUNBLEtBQUssQ0FBQ1UsSUFBSSxDQUFDQyxNQUFNLENBQUM7SUFDeEMsQ0FBQyxNQUFJO01BQ0QsSUFBSSxDQUFDWCxLQUFLLEdBQUcsSUFBSSxDQUFDQSxLQUFLLENBQUNVLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDOUM7SUFFQSxPQUFPLElBQUk7RUFDZjtFQUVBSSxVQUFVLEdBQUU7SUFDUixNQUFNQyxJQUFJLEdBQUcsSUFBSSxDQUFDZCxXQUFXLENBQUNjLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQztJQUMzQyxNQUFNQyxLQUFLLEdBQUcsSUFBSSxDQUFDZixXQUFXLENBQUNlLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQztJQUM3QyxNQUFNQyxJQUFJLEdBQUcsQ0FBQ0YsSUFBSSxHQUFHLENBQUMsSUFBSUMsS0FBSztJQUMvQixJQUFJLENBQUNoQixLQUFLLEdBQUcsSUFBSSxDQUFDQSxLQUFLLENBQUNpQixJQUFJLENBQUNBLElBQUksQ0FBQyxDQUFDRCxLQUFLLENBQUNBLEtBQUssQ0FBQztJQUMvQyxPQUFPLElBQUk7RUFDZjtBQUNKO0FBRUEsTUFBTXBCLFdBQVcsR0FBRyxPQUFPcEQsR0FBRyxFQUFFQyxHQUFHLEtBQUs7RUFDcEMsSUFBSTtJQUNBLE1BQU15RSxRQUFRLEdBQUcsSUFBSXBCLFdBQVcsQ0FBQ3FCLDREQUFRLENBQUNaLElBQUksRUFBRSxFQUFFL0QsR0FBRyxDQUFDd0QsS0FBSyxDQUFDLENBQzNERSxTQUFTLEVBQUUsQ0FBQ08sT0FBTyxFQUFFLENBQUNLLFVBQVUsRUFBRTtJQUVuQyxNQUFNTSxRQUFRLEdBQUcsTUFBTUYsUUFBUSxDQUFDbEIsS0FBSztJQUVyQ3ZELEdBQUcsQ0FBQ0ssSUFBSSxDQUFDO01BQ0xELE1BQU0sRUFBRSxTQUFTO01BQ2pCd0UsTUFBTSxFQUFFRCxRQUFRLENBQUNFLE1BQU07TUFDdkJGO0lBQ0osQ0FBQyxDQUFDO0VBQ04sQ0FBQyxDQUFDLE9BQU9yRSxHQUFHLEVBQUU7SUFDVixPQUFPTixHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO01BQUNDLEdBQUcsRUFBRUEsR0FBRyxDQUFDd0U7SUFBTyxDQUFDLENBQUM7RUFDbkQ7QUFDSixDQUFDO0FBRUQsTUFBTTFCLGFBQWEsR0FBRyxPQUFPckQsR0FBRyxFQUFFQyxHQUFHLEtBQUs7RUFDdEMsSUFBSTtJQUNBLE1BQU00RSxNQUFNLEdBQUcsTUFBTTlFLGdFQUFJLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxDQUFDO0lBQ25DLElBQUc0RSxNQUFNLENBQUM1RCxJQUFJLEtBQUssT0FBTyxFQUFFLE9BQU9oQixHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO01BQUNDLEdBQUcsRUFBRTtJQUE4QixDQUFDLENBQUM7SUFFOUYsTUFBTTtNQUFDZSxLQUFLO01BQUVLLEtBQUs7TUFBRVUsT0FBTztNQUFFUixXQUFXO01BQUVDLE9BQU87TUFBRUcsUUFBUTtNQUFFRjtJQUFNLENBQUMsR0FBRy9CLEdBQUcsQ0FBQ2dGLElBQUk7SUFFaEYsSUFBRyxDQUFDMUQsS0FBSyxJQUFJLENBQUNLLEtBQUssSUFBSSxDQUFDVSxPQUFPLElBQUksQ0FBQ1IsV0FBVyxJQUFJLENBQUNDLE9BQU8sSUFBSUcsUUFBUSxLQUFLLEtBQUssSUFBSUYsTUFBTSxDQUFDK0MsTUFBTSxLQUFLLENBQUMsRUFDeEcsT0FBTzdFLEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7TUFBQ0MsR0FBRyxFQUFFO0lBQTRCLENBQUMsQ0FBQztJQUdoRSxNQUFNMEUsVUFBVSxHQUFHLElBQUlOLDREQUFRLENBQUM7TUFDNUJyRCxLQUFLLEVBQUVBLEtBQUssQ0FBQzRELFdBQVcsRUFBRTtNQUFFdkQsS0FBSztNQUFFVSxPQUFPO01BQUVSLFdBQVc7TUFBRUMsT0FBTztNQUFFRyxRQUFRO01BQUVGO0lBQ2hGLENBQUMsQ0FBQztJQUVGLE1BQU1rRCxVQUFVLENBQUNFLElBQUksRUFBRTtJQUV2QmxGLEdBQUcsQ0FBQ0ssSUFBSSxDQUFDO01BQUM4RSxHQUFHLEVBQUU7SUFBZ0MsQ0FBQyxDQUFDO0VBRXJELENBQUMsQ0FBQyxPQUFPN0UsR0FBRyxFQUFFO0lBQ1YsT0FBT04sR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztNQUFDQyxHQUFHLEVBQUVBLEdBQUcsQ0FBQ3dFO0lBQU8sQ0FBQyxDQUFDO0VBQ25EO0FBQ0osQ0FBQyxDOzs7Ozs7Ozs7Ozs7QUMvTEQ7QUFBQTtBQUFBO0FBQStCO0FBRS9CLE1BQU03QixTQUFTLEdBQUcsTUFBTTtFQUNwQixJQUFHOUIsK0NBQVEsQ0FBQ2lFLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsVUFBVSxFQUFDO0lBQ2xDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztJQUNqQztFQUNKO0VBQ0FwRSwrQ0FBUSxDQUFDcUUsT0FBTyxDQUFDOUUseUdBQXVCLEVBQUU7SUFDdEMrRSxjQUFjLEVBQUUsSUFBSTtJQUNwQkMsZ0JBQWdCLEVBQUUsS0FBSztJQUN2QkMsZUFBZSxFQUFFLElBQUk7SUFDckJDLGtCQUFrQixFQUFFO0VBQ3hCLENBQUMsRUFBRXRGLEdBQUcsSUFBSTtJQUNOLElBQUdBLEdBQUcsRUFBRSxNQUFNQSxHQUFHO0lBQ2pCZ0YsT0FBTyxDQUFDQyxHQUFHLENBQUMsdUJBQXVCLENBQUM7RUFDeEMsQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQUdjdEMsd0VBQVMsRTs7Ozs7Ozs7Ozs7QUNuQnhCLHlDOzs7Ozs7Ozs7OztBQ0FBLHFDIiwiZmlsZSI6InBhZ2VzL2FwaS9wcm9kdWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hcGkvcHJvZHVjdC9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xyXG5pbXBvcnQgVXNlcnMgZnJvbSAnLi4vbW9kZWxzL3VzZXJNb2RlbCdcclxuXHJcblxyXG5jb25zdCBhdXRoID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCB0b2tlbiA9IHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb247XHJcbiAgICBpZighdG9rZW4pIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyOiAnSW52YWxpZCBBdXRoZW50aWNhdGlvbi4nfSlcclxuXHJcbiAgICBjb25zdCBkZWNvZGVkID0gand0LnZlcmlmeSh0b2tlbiwgcHJvY2Vzcy5lbnYuQUNDRVNTX1RPS0VOX1NFQ1JFVClcclxuICAgIGlmKCFkZWNvZGVkKSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2VycjogJ0ludmFsaWQgQXV0aGVudGljYXRpb24uJ30pXHJcblxyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXJzLmZpbmRPbmUoe19pZDogZGVjb2RlZC5pZH0pXHJcblxyXG4gICAgcmV0dXJuIHtpZDogdXNlci5faWQsIHJvbGU6IHVzZXIucm9sZSwgcm9vdDogdXNlci5yb290fTtcclxufVxyXG5cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBhdXRoIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xyXG5cclxuY29uc3QgcHJvZHVjdFNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gICAgdGl0bGU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgdHJpbTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHByaWNlOiB7XHJcbiAgICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgIHRyaW06IHRydWVcclxuICAgIH0sXHJcbiAgICBkZXNjcmlwdGlvbjoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgIH0sXHJcbiAgICBpbWFnZXM6IHtcclxuICAgICAgICB0eXBlOiBBcnJheSxcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGNhdGVnb3J5OiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgY2hlY2tlZDoge1xyXG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgZGVmYXVsdDogZmFsc2VcclxuICAgIH0sXHJcbiAgICBpblN0b2NrOiB7XHJcbiAgICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICAgIGRlZmF1bHQ6IDBcclxuICAgIH0sXHJcbiAgICBzb2xkOiB7XHJcbiAgICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICAgIGRlZmF1bHQ6IDBcclxuICAgIH1cclxufSwge1xyXG4gICAgdGltZXN0YW1wczogdHJ1ZVxyXG59KVxyXG5cclxubGV0IERhdGFzZXQgPSBtb25nb29zZS5tb2RlbHMucHJvZHVjdCB8fCBtb25nb29zZS5tb2RlbCgncHJvZHVjdCcsIHByb2R1Y3RTY2hlbWEpXHJcbmV4cG9ydCBkZWZhdWx0IERhdGFzZXQiLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnXHJcblxyXG5jb25zdCB1c2VyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgICBuYW1lOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgZW1haWw6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgdW5pcXVlOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgcGFzc3dvcmQ6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgIH0sXHJcbiAgICByb2xlOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIGRlZmF1bHQ6ICd1c2VyJ1xyXG4gICAgfSxcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgYXZhdGFyOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIGRlZmF1bHQ6ICdodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZXZhdGNoYW5uZWwvaW1hZ2UvdXBsb2FkL3YxNjAyNzUyNDAyL2F2YXRhci9hdmF0YXJfY3VncTQwLnBuZydcclxuICAgIH1cclxufSwge1xyXG4gICAgdGltZXN0YW1wczogdHJ1ZVxyXG59KVxyXG5cclxubGV0IERhdGFzZXQgPSBtb25nb29zZS5tb2RlbHMudXNlciB8fCBtb25nb29zZS5tb2RlbCgndXNlcicsIHVzZXJTY2hlbWEpXHJcbmV4cG9ydCBkZWZhdWx0IERhdGFzZXQiLCIvKiBpbXBvcnQgY29ubmVjdERCIGZyb20gJy4uLy4uLy4uL3V0aWxzL2Nvbm5lY3REQidcclxuaW1wb3J0IFByb2R1Y3RzIGZyb20gJy4uLy4uLy4uL21vZGVscy9wcm9kdWN0TW9kZWwnXHJcbmltcG9ydCBhdXRoIGZyb20gJy4uLy4uLy4uL21pZGRsZXdhcmUvYXV0aCdcclxuXHJcbmNvbm5lY3REQigpXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jKHJlcSxyZXMpPT57XHJcbiBzd2l0Y2gocmVxLm1ldGhvZCl7XHJcbiAgICBjYXNlIFwiR0VUXCI6XHJcbiAgICAgICAgYXdhaXQgZ2V0UHJvZHVjdHMocmVxLHJlcylcclxuICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiUE9TVFwiOlxyXG4gICAgICAgICBhd2FpdCBjcmVhdGVQcm9kdWN0KHJlcSwgcmVzKVxyXG4gICAgICAgICBicmVhaztcclxuXHJcbiB9XHJcbiBjbGFzcyBBUElmZWF0dXJlcyB7XHJcbiAgICBjb25zdHJ1Y3RvcihxdWVyeSwgcXVlcnlTdHJpbmcpe1xyXG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcclxuICAgICAgICB0aGlzLnF1ZXJ5U3RyaW5nID0gcXVlcnlTdHJpbmc7XHJcbiAgICB9XHJcbiAgICBmaWx0ZXJpbmcoKXtcclxuICAgICAgICBjb25zdCBxdWVyeU9iaiA9IHsuLi50aGlzLnF1ZXJ5U3RyaW5nfVxyXG5cclxuICAgICAgICBjb25zdCBleGNsdWRlRmllbGRzID0gWydwYWdlJywgJ3NvcnQnLCAnbGltaXQnXVxyXG4gICAgICAgIGV4Y2x1ZGVGaWVsZHMuZm9yRWFjaChlbCA9PiBkZWxldGUocXVlcnlPYmpbZWxdKSlcclxuXHJcbiAgICAgICAgaWYocXVlcnlPYmouY2F0ZWdvcnkgIT09ICdhbGwnKVxyXG4gICAgICAgICAgICB0aGlzLnF1ZXJ5LmZpbmQoe2NhdGVnb3J5OiBxdWVyeU9iai5jYXRlZ29yeX0pXHJcbiAgICAgICAgaWYocXVlcnlPYmoudGl0bGUgIT09ICdhbGwnKVxyXG4gICAgICAgICAgICB0aGlzLnF1ZXJ5LmZpbmQoe3RpdGxlOiB7JHJlZ2V4OiBxdWVyeU9iai50aXRsZX19KVxyXG5cclxuICAgICAgICB0aGlzLnF1ZXJ5LmZpbmQoKVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHNvcnRpbmcoKXtcclxuICAgICAgICBpZih0aGlzLnF1ZXJ5U3RyaW5nLnNvcnQpe1xyXG4gICAgICAgICAgICBjb25zdCBzb3J0QnkgPSB0aGlzLnF1ZXJ5U3RyaW5nLnNvcnQuc3BsaXQoJywnKS5qb2luKCcnKVxyXG4gICAgICAgICAgICB0aGlzLnF1ZXJ5ID0gdGhpcy5xdWVyeS5zb3J0KHNvcnRCeSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5xdWVyeSA9IHRoaXMucXVlcnkuc29ydCgnLWNyZWF0ZWRBdCcpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwYWdpbmF0aW5nKCl7XHJcbiAgICAgICAgY29uc3QgcGFnZSA9IHRoaXMucXVlcnlTdHJpbmcucGFnZSAqIDEgfHwgMVxyXG4gICAgICAgIGNvbnN0IGxpbWl0ID0gdGhpcy5xdWVyeVN0cmluZy5saW1pdCAqIDEgfHwgNlxyXG4gICAgICAgIGNvbnN0IHNraXAgPSAocGFnZSAtIDEpICogbGltaXQ7XHJcbiAgICAgICAgdGhpcy5xdWVyeSA9IHRoaXMucXVlcnkuc2tpcChza2lwKS5saW1pdChsaW1pdClcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufVxyXG5cclxufVxyXG5jb25zdCBnZXRQcm9kdWN0cz0gYXN5bmMocmVxLHJlcyk9PntcclxuIHRyeSB7XHJcbiAgICBjb25zdCBmZWF0dXJlcyA9IG5ldyBBUElmZWF0dXJlcyhQcm9kdWN0cy5maW5kKCksIHJlcS5xdWVyeSlcclxuICAgICAgICAuZmlsdGVyaW5nKCkuc29ydGluZygpLnBhZ2luYXRpbmcoKVxyXG5cclxuICAgICAgICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IGZlYXR1cmVzLnF1ZXJ5XHJcbiAgICBcclxuICAgLy8gY29uc3QgcHJvZHVjdHM9YXdhaXQgUHJvZHVjdHMuZmluZCgpXHJcbiAgICByZXMuanNvbih7XHJcbiAgICAgICAgc3RhdHVzOidzdWNjZXNzJyxcclxuICAgICAgICByZXN1bHQ6cHJvZHVjdHMubGVuZ3RoLFxyXG4gICAgICAgIHByb2R1Y3RzfSlcclxuIH0gY2F0Y2ggKGVycikge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtlcnI6ZXJyLm1lc3NhZ2UgfSlcclxuIH1cclxufVxyXG5jb25zdCBjcmVhdGVQcm9kdWN0ID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgIHRyeSB7XHJcbiAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhdXRoKHJlcSwgcmVzKVxyXG4gICAgICAgaWYocmVzdWx0LnJvbGUgIT09ICdhZG1pbicpIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyOiAnQXV0aGVudGljYXRpb24gaXMgbm90IHZhbGlkLid9KVxyXG5cclxuICAgICAgIGNvbnN0IHt0aXRsZSwgcHJpY2UsIGluU3RvY2ssIGRlc2NyaXB0aW9uLCBjb250ZW50LCBjYXRlZ29yeSwgaW1hZ2VzfSA9IHJlcS5ib2R5XHJcblxyXG4gICAgICAgaWYoIXRpdGxlIHx8ICFwcmljZSB8fCAhaW5TdG9jayB8fCAhZGVzY3JpcHRpb24gfHwgIWNvbnRlbnQgfHwgY2F0ZWdvcnkgPT09ICdhbGwnIHx8IGltYWdlcy5sZW5ndGggPT09IDApXHJcbiAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2VycjogJ1BsZWFzZSBhZGQgYWxsIHRoZSBmaWVsZHMuJ30pXHJcblxyXG5cclxuICAgICAgIGNvbnN0IG5ld1Byb2R1Y3QgPSBuZXcgUHJvZHVjdHMoe1xyXG4gICAgICAgICAgIHRpdGxlOiB0aXRsZS50b0xvd2VyQ2FzZSgpLCBwcmljZSwgaW5TdG9jaywgZGVzY3JpcHRpb24sIGNvbnRlbnQsIGNhdGVnb3J5LCBpbWFnZXNcclxuICAgICAgIH0pXHJcblxyXG4gICAgICAgYXdhaXQgbmV3UHJvZHVjdC5zYXZlKClcclxuXHJcbiAgICAgICByZXMuanNvbih7bXNnOiAnU3VjY2VzcyEgQ3JlYXRlZCBhIG5ldyBwcm9kdWN0J30pXHJcblxyXG4gICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7ZXJyOiBlcnIubWVzc2FnZX0pXHJcbiAgIH1cclxufSAqL1xyXG5pbXBvcnQgY29ubmVjdERCIGZyb20gJy4uLy4uLy4uL3V0aWxzL2Nvbm5lY3REQidcclxuaW1wb3J0IFByb2R1Y3RzIGZyb20gJy4uLy4uLy4uL21vZGVscy9wcm9kdWN0TW9kZWwnXHJcbmltcG9ydCBhdXRoIGZyb20gJy4uLy4uLy4uL21pZGRsZXdhcmUvYXV0aCdcclxuXHJcbmNvbm5lY3REQigpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIHN3aXRjaChyZXEubWV0aG9kKXtcclxuICAgICAgICBjYXNlIFwiR0VUXCI6XHJcbiAgICAgICAgICAgIGF3YWl0IGdldFByb2R1Y3RzKHJlcSwgcmVzKVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiUE9TVFwiOlxyXG4gICAgICAgICAgICBhd2FpdCBjcmVhdGVQcm9kdWN0KHJlcSwgcmVzKVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQVBJZmVhdHVyZXMge1xyXG4gICAgY29uc3RydWN0b3IocXVlcnksIHF1ZXJ5U3RyaW5nKXtcclxuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XHJcbiAgICAgICAgdGhpcy5xdWVyeVN0cmluZyA9IHF1ZXJ5U3RyaW5nO1xyXG4gICAgfVxyXG4gICAgZmlsdGVyaW5nKCl7XHJcbiAgICAgICAgY29uc3QgcXVlcnlPYmogPSB7Li4udGhpcy5xdWVyeVN0cmluZ31cclxuXHJcbiAgICAgICAgY29uc3QgZXhjbHVkZUZpZWxkcyA9IFsncGFnZScsICdzb3J0JywgJ2xpbWl0J11cclxuICAgICAgICBleGNsdWRlRmllbGRzLmZvckVhY2goZWwgPT4gZGVsZXRlKHF1ZXJ5T2JqW2VsXSkpXHJcblxyXG4gICAgICAgIGlmKHF1ZXJ5T2JqLmNhdGVnb3J5ICE9PSAnYWxsJylcclxuICAgICAgICAgICAgdGhpcy5xdWVyeS5maW5kKHtjYXRlZ29yeTogcXVlcnlPYmouY2F0ZWdvcnl9KVxyXG4gICAgICAgIGlmKHF1ZXJ5T2JqLnRpdGxlICE9PSAnYWxsJylcclxuICAgICAgICAgICAgdGhpcy5xdWVyeS5maW5kKHt0aXRsZTogeyRyZWdleDogcXVlcnlPYmoudGl0bGV9fSlcclxuXHJcbiAgICAgICAgdGhpcy5xdWVyeS5maW5kKClcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzb3J0aW5nKCl7XHJcbiAgICAgICAgaWYodGhpcy5xdWVyeVN0cmluZy5zb3J0KXtcclxuICAgICAgICAgICAgY29uc3Qgc29ydEJ5ID0gdGhpcy5xdWVyeVN0cmluZy5zb3J0LnNwbGl0KCcsJykuam9pbignJylcclxuICAgICAgICAgICAgdGhpcy5xdWVyeSA9IHRoaXMucXVlcnkuc29ydChzb3J0QnkpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMucXVlcnkgPSB0aGlzLnF1ZXJ5LnNvcnQoJy1jcmVhdGVkQXQnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcGFnaW5hdGluZygpe1xyXG4gICAgICAgIGNvbnN0IHBhZ2UgPSB0aGlzLnF1ZXJ5U3RyaW5nLnBhZ2UgKiAxIHx8IDFcclxuICAgICAgICBjb25zdCBsaW1pdCA9IHRoaXMucXVlcnlTdHJpbmcubGltaXQgKiAxIHx8IDZcclxuICAgICAgICBjb25zdCBza2lwID0gKHBhZ2UgLSAxKSAqIGxpbWl0O1xyXG4gICAgICAgIHRoaXMucXVlcnkgPSB0aGlzLnF1ZXJ5LnNraXAoc2tpcCkubGltaXQobGltaXQpXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGdldFByb2R1Y3RzID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGZlYXR1cmVzID0gbmV3IEFQSWZlYXR1cmVzKFByb2R1Y3RzLmZpbmQoKSwgcmVxLnF1ZXJ5KVxyXG4gICAgICAgIC5maWx0ZXJpbmcoKS5zb3J0aW5nKCkucGFnaW5hdGluZygpXHJcblxyXG4gICAgICAgIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgZmVhdHVyZXMucXVlcnlcclxuICAgICAgICBcclxuICAgICAgICByZXMuanNvbih7XHJcbiAgICAgICAgICAgIHN0YXR1czogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICByZXN1bHQ6IHByb2R1Y3RzLmxlbmd0aCxcclxuICAgICAgICAgICAgcHJvZHVjdHNcclxuICAgICAgICB9KVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtlcnI6IGVyci5tZXNzYWdlfSlcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgY3JlYXRlUHJvZHVjdCA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhdXRoKHJlcSwgcmVzKVxyXG4gICAgICAgIGlmKHJlc3VsdC5yb2xlICE9PSAnYWRtaW4nKSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2VycjogJ0F1dGhlbnRpY2F0aW9uIGlzIG5vdCB2YWxpZC4nfSlcclxuXHJcbiAgICAgICAgY29uc3Qge3RpdGxlLCBwcmljZSwgaW5TdG9jaywgZGVzY3JpcHRpb24sIGNvbnRlbnQsIGNhdGVnb3J5LCBpbWFnZXN9ID0gcmVxLmJvZHlcclxuXHJcbiAgICAgICAgaWYoIXRpdGxlIHx8ICFwcmljZSB8fCAhaW5TdG9jayB8fCAhZGVzY3JpcHRpb24gfHwgIWNvbnRlbnQgfHwgY2F0ZWdvcnkgPT09ICdhbGwnIHx8IGltYWdlcy5sZW5ndGggPT09IDApXHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnI6ICdQbGVhc2UgYWRkIGFsbCB0aGUgZmllbGRzLid9KVxyXG5cclxuXHJcbiAgICAgICAgY29uc3QgbmV3UHJvZHVjdCA9IG5ldyBQcm9kdWN0cyh7XHJcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZS50b0xvd2VyQ2FzZSgpLCBwcmljZSwgaW5TdG9jaywgZGVzY3JpcHRpb24sIGNvbnRlbnQsIGNhdGVnb3J5LCBpbWFnZXNcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBhd2FpdCBuZXdQcm9kdWN0LnNhdmUoKVxyXG5cclxuICAgICAgICByZXMuanNvbih7bXNnOiAnU3VjY2VzcyEgQ3JlYXRlZCBhIG5ldyBwcm9kdWN0J30pXHJcblxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtlcnI6IGVyci5tZXNzYWdlfSlcclxuICAgIH1cclxufSAgICIsImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcclxuXHJcbmNvbnN0IGNvbm5lY3REQiA9ICgpID0+IHtcclxuICAgIGlmKG1vbmdvb3NlLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGUpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdBbHJlYWR5IGNvbm5lY3RlZC4nKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkwsIHtcclxuICAgICAgICB1c2VDcmVhdGVJbmRleDogdHJ1ZSxcclxuICAgICAgICB1c2VGaW5kQW5kTW9kaWZ5OiBmYWxzZSxcclxuICAgICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcbiAgICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlXHJcbiAgICB9LCBlcnIgPT4ge1xyXG4gICAgICAgIGlmKGVycikgdGhyb3cgZXJyO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDb25uZWN0ZWQgdG8gbW9uZ29kYi4nKVxyXG4gICAgfSlcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3REQiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9