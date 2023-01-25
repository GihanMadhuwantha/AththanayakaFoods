module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/order/payment/[id].js");
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

/***/ "./models/orderModel.js":
/*!******************************!*\
  !*** ./models/orderModel.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const orderSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({
  user: {
    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Types.ObjectId,
    ref: 'user'
  },
  address: String,
  mobile: String,
  cart: Array,
  total: Number,
  paymentId: String,
  method: String,
  delivered: {
    type: Boolean,
    default: false
  },
  paid: {
    type: Boolean,
    default: false
  },
  dateOfPayment: Date
}, {
  timestamps: true
});
let Dataset = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.order || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('order', orderSchema);
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

/***/ "./pages/api/order/payment/[id].js":
/*!*****************************************!*\
  !*** ./pages/api/order/payment/[id].js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_connectDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/connectDB */ "./utils/connectDB.js");
/* harmony import */ var _models_orderModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../models/orderModel */ "./models/orderModel.js");
/* harmony import */ var _middleware_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../middleware/auth */ "./middleware/auth.js");



Object(_utils_connectDB__WEBPACK_IMPORTED_MODULE_0__["default"])();
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  switch (req.method) {
    case "PATCH":
      await paymentOrder(req, res);
      break;
  }
});
const paymentOrder = async (req, res) => {
  try {
    const result = await Object(_middleware_auth__WEBPACK_IMPORTED_MODULE_2__["default"])(req, res);
    if (result.role === 'user') {
      const {
        id
      } = req.query;
      const {
        paymentId
      } = req.body;
      await _models_orderModel__WEBPACK_IMPORTED_MODULE_1__["default"].findOneAndUpdate({
        _id: id
      }, {
        paid: true,
        dateOfPayment: new Date().toISOString(),
        paymentId,
        method: 'Paypal'
      });
      res.json({
        msg: 'Payment success!'
      });
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbWlkZGxld2FyZS9hdXRoLmpzIiwid2VicGFjazovLy8uL21vZGVscy9vcmRlck1vZGVsLmpzIiwid2VicGFjazovLy8uL21vZGVscy91c2VyTW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL29yZGVyL3BheW1lbnQvLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2Nvbm5lY3REQi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiIl0sIm5hbWVzIjpbImF1dGgiLCJyZXEiLCJyZXMiLCJ0b2tlbiIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwic3RhdHVzIiwianNvbiIsImVyciIsImRlY29kZWQiLCJqd3QiLCJ2ZXJpZnkiLCJwcm9jZXNzIiwidXNlciIsIlVzZXJzIiwiZmluZE9uZSIsIl9pZCIsImlkIiwicm9sZSIsInJvb3QiLCJvcmRlclNjaGVtYSIsIm1vbmdvb3NlIiwiU2NoZW1hIiwidHlwZSIsIlR5cGVzIiwiT2JqZWN0SWQiLCJyZWYiLCJhZGRyZXNzIiwiU3RyaW5nIiwibW9iaWxlIiwiY2FydCIsIkFycmF5IiwidG90YWwiLCJOdW1iZXIiLCJwYXltZW50SWQiLCJtZXRob2QiLCJkZWxpdmVyZWQiLCJCb29sZWFuIiwiZGVmYXVsdCIsInBhaWQiLCJkYXRlT2ZQYXltZW50IiwiRGF0ZSIsInRpbWVzdGFtcHMiLCJEYXRhc2V0IiwibW9kZWxzIiwib3JkZXIiLCJtb2RlbCIsInVzZXJTY2hlbWEiLCJuYW1lIiwicmVxdWlyZWQiLCJlbWFpbCIsInVuaXF1ZSIsInBhc3N3b3JkIiwiYXZhdGFyIiwiY29ubmVjdERCIiwicGF5bWVudE9yZGVyIiwicmVzdWx0IiwicXVlcnkiLCJib2R5IiwiT3JkZXJzIiwiZmluZE9uZUFuZFVwZGF0ZSIsInRvSVNPU3RyaW5nIiwibXNnIiwibWVzc2FnZSIsImNvbm5lY3Rpb25zIiwicmVhZHlTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJjb25uZWN0IiwidXNlQ3JlYXRlSW5kZXgiLCJ1c2VGaW5kQW5kTW9kaWZ5IiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQTtBQUFBO0FBQThCO0FBQ1M7QUFHdkMsTUFBTUEsSUFBSSxHQUFHLE9BQU9DLEdBQUcsRUFBRUMsR0FBRyxLQUFLO0VBQzdCLE1BQU1DLEtBQUssR0FBR0YsR0FBRyxDQUFDRyxPQUFPLENBQUNDLGFBQWE7RUFDdkMsSUFBRyxDQUFDRixLQUFLLEVBQUUsT0FBT0QsR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztJQUFDQyxH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Q0FBQyxDQUFDLENBQUMsQ0FBQ0MsVUFBVSxFQUFDO0lBQ2xDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztJQUNqQztFQUNKO0VBQ0E5QywrQ0FBUSxDQUFDK0MsT0FBTyxDQUFDeEQseUdBQXVCLEVBQUU7SUFDdEN5RCxjQUFjLEVBQUUsSUFBSTtJQUNwQkMsZ0JBQWdCLEVBQUUsS0FBSztJQUN2QkMsZUFBZSxFQUFFLElBQUk7SUFDckJDLGtCQUFrQixFQUFFO0VBQ3hCLENBQUMsRUFBRWhFLEdBQUcsSUFBSTtJQUNOLElBQUdBLEdBQUcsRUFBRSxNQUFNQSxHQUFHO0lBQ2pCMEQsT0FBTyxDQUFDQyxHQUFHLENBQUMsdUJBQXVCLENBQUM7RUFDeEMsQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQUdjYix3RUFBUyxFOzs7Ozs7Ozs7OztBQ25CeEIseUM7Ozs7Ozs7Ozs7O0FDQUEscUMiLCJmaWxlIjoicGFnZXMvYXBpL29yZGVyL3BheW1lbnQvW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL29yZGVyL3BheW1lbnQvW2lkXS5qc1wiKTtcbiIsImltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xyXG5pbXBvcnQgVXNlcnMgZnJvbSAnLi4vbW9kZWxzL3VzZXJNb2RlbCdcclxuXHJcblxyXG5jb25zdCBhdXRoID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCB0b2tlbiA9IHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb247XHJcbiAgICBpZighdG9rZW4pIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyOiAnSW52YWxpZCBBdXRoZW50aWNhdGlvbi4nfSlcclxuXHJcbiAgICBjb25zdCBkZWNvZGVkID0gand0LnZlcmlmeSh0b2tlbiwgcHJvY2Vzcy5lbnYuQUNDRVNTX1RPS0VOX1NFQ1JFVClcclxuICAgIGlmKCFkZWNvZGVkKSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2VycjogJ0ludmFsaWQgQXV0aGVudGljYXRpb24uJ30pXHJcblxyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXJzLmZpbmRPbmUoe19pZDogZGVjb2RlZC5pZH0pXHJcblxyXG4gICAgcmV0dXJuIHtpZDogdXNlci5faWQsIHJvbGU6IHVzZXIucm9sZSwgcm9vdDogdXNlci5yb290fTtcclxufVxyXG5cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBhdXRoIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xyXG5cclxuY29uc3Qgb3JkZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICAgIHVzZXI6IHtcclxuICAgICAgICB0eXBlOiBtb25nb29zZS5UeXBlcy5PYmplY3RJZCxcclxuICAgICAgICByZWY6ICd1c2VyJ1xyXG4gICAgfSxcclxuICAgIGFkZHJlc3M6IFN0cmluZyxcclxuICAgIG1vYmlsZTogU3RyaW5nLFxyXG4gICAgY2FydDogQXJyYXksXHJcbiAgICB0b3RhbDogTnVtYmVyLFxyXG4gICAgcGF5bWVudElkOiBTdHJpbmcsXHJcbiAgICBtZXRob2Q6IFN0cmluZyxcclxuICAgIGRlbGl2ZXJlZDoge1xyXG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgZGVmYXVsdDogZmFsc2VcclxuICAgIH0sXHJcbiAgICBwYWlkOiB7XHJcbiAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICBkZWZhdWx0OiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGRhdGVPZlBheW1lbnQ6IERhdGVcclxufSwge1xyXG4gICAgdGltZXN0YW1wczogdHJ1ZVxyXG59KVxyXG5cclxubGV0IERhdGFzZXQgPSBtb25nb29zZS5tb2RlbHMub3JkZXIgfHwgbW9uZ29vc2UubW9kZWwoJ29yZGVyJywgb3JkZXJTY2hlbWEpXHJcbmV4cG9ydCBkZWZhdWx0IERhdGFzZXQiLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnXHJcblxyXG5jb25zdCB1c2VyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgICBuYW1lOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgZW1haWw6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgdW5pcXVlOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgcGFzc3dvcmQ6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgIH0sXHJcbiAgICByb2xlOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIGRlZmF1bHQ6ICd1c2VyJ1xyXG4gICAgfSxcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgYXZhdGFyOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIGRlZmF1bHQ6ICdodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZXZhdGNoYW5uZWwvaW1hZ2UvdXBsb2FkL3YxNjAyNzUyNDAyL2F2YXRhci9hdmF0YXJfY3VncTQwLnBuZydcclxuICAgIH1cclxufSwge1xyXG4gICAgdGltZXN0YW1wczogdHJ1ZVxyXG59KVxyXG5cclxubGV0IERhdGFzZXQgPSBtb25nb29zZS5tb2RlbHMudXNlciB8fCBtb25nb29zZS5tb2RlbCgndXNlcicsIHVzZXJTY2hlbWEpXHJcbmV4cG9ydCBkZWZhdWx0IERhdGFzZXQiLCJpbXBvcnQgY29ubmVjdERCIGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2Nvbm5lY3REQidcclxuaW1wb3J0IE9yZGVycyBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbHMvb3JkZXJNb2RlbCdcclxuaW1wb3J0IGF1dGggZnJvbSAnLi4vLi4vLi4vLi4vbWlkZGxld2FyZS9hdXRoJ1xyXG5jb25uZWN0REIoKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBzd2l0Y2gocmVxLm1ldGhvZCl7XHJcbiAgICAgICAgY2FzZSBcIlBBVENIXCI6XHJcbiAgICAgICAgICAgIGF3YWl0IHBheW1lbnRPcmRlcihyZXEsIHJlcylcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn1cclxuY29uc3QgcGF5bWVudE9yZGVyID0gYXN5bmMocmVxLCByZXMpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXV0aChyZXEsIHJlcylcclxuICAgICAgICBcclxuICAgICAgICBpZihyZXN1bHQucm9sZSA9PT0gJ3VzZXInKXtcclxuICAgICAgICAgICAgY29uc3Qge2lkfSA9IHJlcS5xdWVyeVxyXG4gICAgICAgICAgICBjb25zdCB7IHBheW1lbnRJZCB9ID0gcmVxLmJvZHlcclxuICAgIFxyXG4gICAgICAgICAgICBhd2FpdCBPcmRlcnMuZmluZE9uZUFuZFVwZGF0ZSh7X2lkOiBpZH0sIHtcclxuICAgICAgICAgICAgICAgIHBhaWQ6IHRydWUsIGRhdGVPZlBheW1lbnQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSwgcGF5bWVudElkLCBtZXRob2Q6ICdQYXlwYWwnXHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgIFxyXG4gICAgICAgICAgICByZXMuanNvbih7bXNnOiAnUGF5bWVudCBzdWNjZXNzISd9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7ZXJyOiBlcnIubWVzc2FnZX0pXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnXHJcblxyXG5jb25zdCBjb25uZWN0REIgPSAoKSA9PiB7XHJcbiAgICBpZihtb25nb29zZS5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnQWxyZWFkeSBjb25uZWN0ZWQuJylcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJMLCB7XHJcbiAgICAgICAgdXNlQ3JlYXRlSW5kZXg6IHRydWUsXHJcbiAgICAgICAgdXNlRmluZEFuZE1vZGlmeTogZmFsc2UsXHJcbiAgICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxyXG4gICAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZVxyXG4gICAgfSwgZXJyID0+IHtcclxuICAgICAgICBpZihlcnIpIHRocm93IGVycjtcclxuICAgICAgICBjb25zb2xlLmxvZygnQ29ubmVjdGVkIHRvIG1vbmdvZGIuJylcclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0REIiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==