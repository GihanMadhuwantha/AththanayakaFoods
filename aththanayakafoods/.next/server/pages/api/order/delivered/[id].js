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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/order/delivered/[id].js");
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

/***/ "./pages/api/order/delivered/[id].js":
/*!*******************************************!*\
  !*** ./pages/api/order/delivered/[id].js ***!
  \*******************************************/
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
      await deliveredOrder(req, res);
      break;
  }
});
const deliveredOrder = async (req, res) => {
  try {
    const result = await Object(_middleware_auth__WEBPACK_IMPORTED_MODULE_2__["default"])(req, res);
    if (result.role !== 'admin') return res.status(400).json({
      err: 'Authentication is not valid.'
    });
    const {
      id
    } = req.query;
    const order = await _models_orderModel__WEBPACK_IMPORTED_MODULE_1__["default"].findOne({
      _id: id
    });
    if (order.paid) {
      await _models_orderModel__WEBPACK_IMPORTED_MODULE_1__["default"].findOneAndUpdate({
        _id: id
      }, {
        delivered: true
      });
      res.json({
        msg: 'Updated success!',
        result: {
          paid: true,
          dateOfPayment: order.dateOfPayment,
          method: order.method,
          delivered: true
        }
      });
    } else {
      await _models_orderModel__WEBPACK_IMPORTED_MODULE_1__["default"].findOneAndUpdate({
        _id: id
      }, {
        paid: true,
        dateOfPayment: new Date().toISOString(),
        method: 'Receive Cash',
        delivered: true
      });
      res.json({
        msg: 'Updated success!',
        result: {
          paid: true,
          dateOfPayment: new Date().toISOString(),
          method: 'Receive Cash',
          delivered: true
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbWlkZGxld2FyZS9hdXRoLmpzIiwid2VicGFjazovLy8uL21vZGVscy9vcmRlck1vZGVsLmpzIiwid2VicGFjazovLy8uL21vZGVscy91c2VyTW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL29yZGVyL2RlbGl2ZXJlZC8uanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29ubmVjdERCLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvb3NlXCIiXSwibmFtZXMiOlsiYXV0aCIsInJlcSIsInJlcyIsInRva2VuIiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwiZGVjb2RlZCIsImp3dCIsInZlcmlmeSIsInByb2Nlc3MiLCJ1c2VyIiwiVXNlcnMiLCJmaW5kT25lIiwiX2lkIiwiaWQiLCJyb2xlIiwicm9vdCIsIm9yZGVyU2NoZW1hIiwibW9uZ29vc2UiLCJTY2hlbWEiLCJ0eXBlIiwiVHlwZXMiLCJPYmplY3RJZCIsInJlZiIsImFkZHJlc3MiLCJTdHJpbmciLCJtb2JpbGUiLCJjYXJ0IiwiQXJyYXkiLCJ0b3RhbCIsIk51bWJlciIsInBheW1lbnRJZCIsIm1ldGhvZCIsImRlbGl2ZXJlZCIsIkJvb2xlYW4iLCJkZWZhdWx0IiwicGFpZCIsImRhdGVPZlBheW1lbnQiLCJEYXRlIiwidGltZXN0YW1wcyIsIkRhdGFzZXQiLCJtb2RlbHMiLCJvcmRlciIsIm1vZGVsIiwidXNlclNjaGVtYSIsIm5hbWUiLCJyZXF1aXJlZCIsImVtYWlsIiwidW5pcXVlIiwicGFzc3dvcmQiLCJhdmF0YXIiLCJjb25uZWN0REIiLCJkZWxpdmVyZWRPcmRlciIsInJlc3VsdCIsInF1ZXJ5IiwiT3JkZXJzIiwiZmluZE9uZUFuZFVwZGF0ZSIsIm1zZyIsInRvSVNPU3RyaW5nIiwibWVzc2FnZSIsImNvbm5lY3Rpb25zIiwicmVhZHlTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJjb25uZWN0IiwidXNlQ3JlYXRlSW5kZXgiLCJ1c2VGaW5kQW5kTW9kaWZ5IiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQTtBQUFBO0FBQThCO0FBQ1M7QUFHdkMsTUFBTUEsSUFBSSxHQUFHLE9BQU9DLEdBQUcsRUFBRUMsR0FBRyxLQUFLO0VBQzdCLE1BQU1DLEtBQUssR0FBR0YsR0FBRyxDQUFDRyxPQUFPLENBQUNDLGFBQWE7RUFDdkMsSUFBRyxDQUFDRixLQUFLLEVBQUUsT0FBT0QsR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztJQUFDQyxHQUFHLEVBQUU7RUFBeUIsQ0FBQyxDQUFDO0VBRXhFLE1BQU1DLE9BQU8sR0FBR0MsbURBQUcsQ0FBQ0MsTUFBTSxDQUFDUixLQUFLLEVBQUVTLG9EQUErQixDQUFDO0VBQ2xFLElBQUcsQ0FBQ0gsT0FBTyxFQUFFLE9BQU9QLEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7SUFBQ0MsR0FBRyxFQUFFO0VBQXlCLENBQUMsQ0FBQztFQUUxRSxNQUFNSyxJQUFJLEdBQUcsTUFBTUMseURBQUssQ0FBQ0MsT0FBTyxDQUFDO0lBQUNDLEdBQUcsRUFBRVAsT0FBTyxDQUFDUTtFQUFFLENBQUMsQ0FBQztFQUVuRCxPQUFPO0lBQUNBLEVBQUUsRUFBRUosSUFBSSxDQUFDRyxHQUFHO0lBQUVFLElBQUksRUFBRUwsSUFBSSxDQUFDSyxJQUFJO0lBQUVDLElBQUksRUFBRU4sSUFBSSxDQUFDTTtFQUFJLENBQUM7QUFDM0QsQ0FBQztBQUdjbkIsbUVBQUksRTs7Ozs7Ozs7Ozs7O0FDakJuQjtBQUFBO0FBQUE7QUFBK0I7QUFFL0IsTUFBTW9CLFdBQVcsR0FBRyxJQUFJQywrQ0FBUSxDQUFDQyxNQUFNLENBQUM7RUFDcENULElBQUksRUFBRTtJQUNGVSxJQUFJLEVBQUVGLCtDQUFRLENBQUNHLEtBQUssQ0FBQ0MsUUFBUTtJQUM3QkMsR0FBRyxFQUFFO0VBQ1QsQ0FBQztFQUNEQyxPQUFPLEVBQUVDLE1BQU07RUFDZkMsTUFBTSxFQUFFRCxNQUFNO0VBQ2RFLElBQUksRUFBRUMsS0FBSztFQUNYQyxLQUFLLEVBQUVDLE1BQU07RUFDYkMsU0FBUyxFQUFFTixNQUFNO0VBQ2pCTyxNQUFNLEVBQUVQLE1BQU07RUFDZFEsU0FBUyxFQUFFO0lBQ1BiLElBQUksRUFBRWMsT0FBTztJQUNiQyxPQUFPLEVBQUU7RUFDYixDQUFDO0VBQ0RDLElBQUksRUFBRTtJQUNGaEIsSUFBSSxFQUFFYyxPQUFPO0lBQ2JDLE9BQU8sRUFBRTtFQUNiLENBQUM7RUFDREUsYUFBYSxFQUFFQztBQUNuQixDQUFDLEVBQUU7RUFDQ0MsVUFBVSxFQUFFO0FBQ2hCLENBQUMsQ0FBQztBQUVGLElBQUlDLE9BQU8sR0FBR3RCLCtDQUFRLENBQUN1QixNQUFNLENBQUNDLEtBQUssSUFBSXhCLCtDQUFRLENBQUN5QixLQUFLLENBQUMsT0FBTyxFQUFFMUIsV0FBVyxDQUFDO0FBQzVEdUIsc0VBQU8sRTs7Ozs7Ozs7Ozs7O0FDM0J0QjtBQUFBO0FBQUE7QUFBK0I7QUFFL0IsTUFBTUksVUFBVSxHQUFHLElBQUkxQiwrQ0FBUSxDQUFDQyxNQUFNLENBQUM7RUFDbkMwQixJQUFJLEVBQUU7SUFDRnpCLElBQUksRUFBRUssTUFBTTtJQUNacUIsUUFBUSxFQUFFO0VBQ2QsQ0FBQztFQUNEQyxLQUFLLEVBQUU7SUFDSDNCLElBQUksRUFBRUssTUFBTTtJQUNacUIsUUFBUSxFQUFFLElBQUk7SUFDZEUsTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNEQyxRQUFRLEVBQUU7SUFDTjdCLElBQUksRUFBRUssTUFBTTtJQUNacUIsUUFBUSxFQUFFO0VBQ2QsQ0FBQztFQUNEL0IsSUFBSSxFQUFFO0lBQ0ZLLElBQUksRUFBRUssTUFBTTtJQUNaVSxPQUFPLEVBQUU7RUFDYixDQUFDO0VBQ0RuQixJQUFJLEVBQUU7SUFDRkksSUFBSSxFQUFFYyxPQUFPO0lBQ2JDLE9BQU8sRUFBRTtFQUNiLENBQUM7RUFDRGUsTUFBTSxFQUFFO0lBQ0o5QixJQUFJLEVBQUVLLE1BQU07SUFDWlUsT0FBTyxFQUFFO0VBQ2I7QUFDSixDQUFDLEVBQUU7RUFDQ0ksVUFBVSxFQUFFO0FBQ2hCLENBQUMsQ0FBQztBQUVGLElBQUlDLE9BQU8sR0FBR3RCLCtDQUFRLENBQUN1QixNQUFNLENBQUMvQixJQUFJLElBQUlRLCtDQUFRLENBQUN5QixLQUFLLENBQUMsTUFBTSxFQUFFQyxVQUFVLENBQUM7QUFDekRKLHNFQUFPLEU7Ozs7Ozs7Ozs7OztBQ2pDdEI7QUFBQTtBQUFBO0FBQUE7QUFBbUQ7QUFDRDtBQUNKO0FBRTlDVyxnRUFBUyxFQUFFO0FBRUksc0VBQU9yRCxHQUFHLEVBQUVDLEdBQUcsS0FBSztFQUMvQixRQUFPRCxHQUFHLENBQUNrQyxNQUFNO0lBQ2IsS0FBSyxPQUFPO01BQ1IsTUFBTW9CLGNBQWMsQ0FBQ3RELEdBQUcsRUFBRUMsR0FBRyxDQUFDO01BQzlCO0VBQU07QUFFbEIsQ0FBQztBQUVELE1BQU1xRCxjQUFjLEdBQUcsT0FBTXRELEdBQUcsRUFBRUMsR0FBRyxLQUFLO0VBQ3RDLElBQUk7SUFDQSxNQUFNc0QsTUFBTSxHQUFHLE1BQU14RCxnRUFBSSxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsQ0FBQztJQUNuQyxJQUFHc0QsTUFBTSxDQUFDdEMsSUFBSSxLQUFLLE9BQU8sRUFDMUIsT0FBT2hCLEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7TUFBQ0MsR0FBRyxFQUFFO0lBQThCLENBQUMsQ0FBQztJQUNsRSxNQUFNO01BQUNTO0lBQUUsQ0FBQyxHQUFHaEIsR0FBRyxDQUFDd0QsS0FBSztJQUd0QixNQUFNWixLQUFLLEdBQUcsTUFBTWEsMERBQU0sQ0FBQzNDLE9BQU8sQ0FBQztNQUFDQyxHQUFHLEVBQUVDO0lBQUUsQ0FBQyxDQUFDO0lBQzdDLElBQUc0QixLQUFLLENBQUNOLElBQUksRUFBQztNQUNWLE1BQU1tQiwwREFBTSxDQUFDQyxnQkFBZ0IsQ0FBQztRQUFDM0MsR0FBRyxFQUFFQztNQUFFLENBQUMsRUFBRTtRQUFDbUIsU0FBUyxFQUFFO01BQUksQ0FBQyxDQUFDO01BRTNEbEMsR0FBRyxDQUFDSyxJQUFJLENBQUM7UUFDTHFELEdBQUcsRUFBRSxrQkFBa0I7UUFDdkJKLE1BQU0sRUFBRTtVQUNKakIsSUFBSSxFQUFFLElBQUk7VUFDVkMsYUFBYSxFQUFFSyxLQUFLLENBQUNMLGFBQWE7VUFDbENMLE1BQU0sRUFBRVUsS0FBSyxDQUFDVixNQUFNO1VBQ25CQyxTQUFTLEVBQUU7UUFDaEI7TUFDSixDQUFDLENBQUM7SUFDTixDQUFDLE1BQUk7TUFDRCxNQUFNc0IsMERBQU0sQ0FBQ0MsZ0JBQWdCLENBQUM7UUFBQzNDLEdBQUcsRUFBRUM7TUFBRSxDQUFDLEVBQUU7UUFDckNzQixJQUFJLEVBQUUsSUFBSTtRQUFFQyxhQUFhLEVBQUUsSUFBSUMsSUFBSSxFQUFFLENBQUNvQixXQUFXLEVBQUU7UUFDbkQxQixNQUFNLEVBQUUsY0FBYztRQUFFQyxTQUFTLEVBQUU7TUFDdkMsQ0FBQyxDQUFDO01BRUZsQyxHQUFHLENBQUNLLElBQUksQ0FBQztRQUNMcUQsR0FBRyxFQUFFLGtCQUFrQjtRQUN2QkosTUFBTSxFQUFFO1VBQ0pqQixJQUFJLEVBQUUsSUFBSTtVQUNWQyxhQUFhLEVBQUUsSUFBSUMsSUFBSSxFQUFFLENBQUNvQixXQUFXLEVBQUU7VUFDdkMxQixNQUFNLEVBQUUsY0FBYztVQUN0QkMsU0FBUyxFQUFFO1FBQ2Y7TUFDSixDQUFDLENBQUM7SUFDTjtFQUVKLENBQUMsQ0FBQyxPQUFPNUIsR0FBRyxFQUFFO0lBQ1YsT0FBT04sR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztNQUFDQyxHQUFHLEVBQUVBLEdBQUcsQ0FBQ3NEO0lBQU8sQ0FBQyxDQUFDO0VBQ25EO0FBQ0osQ0FBQyxDOzs7Ozs7Ozs7Ozs7QUN2REQ7QUFBQTtBQUFBO0FBQStCO0FBRS9CLE1BQU1SLFNBQVMsR0FBRyxNQUFNO0VBQ3BCLElBQUdqQywrQ0FBUSxDQUFDMEMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxVQUFVLEVBQUM7SUFDbENDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixDQUFDO0lBQ2pDO0VBQ0o7RUFDQTdDLCtDQUFRLENBQUM4QyxPQUFPLENBQUN2RCx5R0FBdUIsRUFBRTtJQUN0Q3dELGNBQWMsRUFBRSxJQUFJO0lBQ3BCQyxnQkFBZ0IsRUFBRSxLQUFLO0lBQ3ZCQyxlQUFlLEVBQUUsSUFBSTtJQUNyQkMsa0JBQWtCLEVBQUU7RUFDeEIsQ0FBQyxFQUFFL0QsR0FBRyxJQUFJO0lBQ04sSUFBR0EsR0FBRyxFQUFFLE1BQU1BLEdBQUc7SUFDakJ5RCxPQUFPLENBQUNDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQztFQUN4QyxDQUFDLENBQUM7QUFDTixDQUFDO0FBR2NaLHdFQUFTLEU7Ozs7Ozs7Ozs7O0FDbkJ4Qix5Qzs7Ozs7Ozs7Ozs7QUNBQSxxQyIsImZpbGUiOiJwYWdlcy9hcGkvb3JkZXIvZGVsaXZlcmVkL1tpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FwaS9vcmRlci9kZWxpdmVyZWQvW2lkXS5qc1wiKTtcbiIsImltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xyXG5pbXBvcnQgVXNlcnMgZnJvbSAnLi4vbW9kZWxzL3VzZXJNb2RlbCdcclxuXHJcblxyXG5jb25zdCBhdXRoID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCB0b2tlbiA9IHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb247XHJcbiAgICBpZighdG9rZW4pIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyOiAnSW52YWxpZCBBdXRoZW50aWNhdGlvbi4nfSlcclxuXHJcbiAgICBjb25zdCBkZWNvZGVkID0gand0LnZlcmlmeSh0b2tlbiwgcHJvY2Vzcy5lbnYuQUNDRVNTX1RPS0VOX1NFQ1JFVClcclxuICAgIGlmKCFkZWNvZGVkKSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2VycjogJ0ludmFsaWQgQXV0aGVudGljYXRpb24uJ30pXHJcblxyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXJzLmZpbmRPbmUoe19pZDogZGVjb2RlZC5pZH0pXHJcblxyXG4gICAgcmV0dXJuIHtpZDogdXNlci5faWQsIHJvbGU6IHVzZXIucm9sZSwgcm9vdDogdXNlci5yb290fTtcclxufVxyXG5cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBhdXRoIiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xyXG5cclxuY29uc3Qgb3JkZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICAgIHVzZXI6IHtcclxuICAgICAgICB0eXBlOiBtb25nb29zZS5UeXBlcy5PYmplY3RJZCxcclxuICAgICAgICByZWY6ICd1c2VyJ1xyXG4gICAgfSxcclxuICAgIGFkZHJlc3M6IFN0cmluZyxcclxuICAgIG1vYmlsZTogU3RyaW5nLFxyXG4gICAgY2FydDogQXJyYXksXHJcbiAgICB0b3RhbDogTnVtYmVyLFxyXG4gICAgcGF5bWVudElkOiBTdHJpbmcsXHJcbiAgICBtZXRob2Q6IFN0cmluZyxcclxuICAgIGRlbGl2ZXJlZDoge1xyXG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgZGVmYXVsdDogZmFsc2VcclxuICAgIH0sXHJcbiAgICBwYWlkOiB7XHJcbiAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICBkZWZhdWx0OiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGRhdGVPZlBheW1lbnQ6IERhdGVcclxufSwge1xyXG4gICAgdGltZXN0YW1wczogdHJ1ZVxyXG59KVxyXG5cclxubGV0IERhdGFzZXQgPSBtb25nb29zZS5tb2RlbHMub3JkZXIgfHwgbW9uZ29vc2UubW9kZWwoJ29yZGVyJywgb3JkZXJTY2hlbWEpXHJcbmV4cG9ydCBkZWZhdWx0IERhdGFzZXQiLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnXHJcblxyXG5jb25zdCB1c2VyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgICBuYW1lOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgZW1haWw6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgdW5pcXVlOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgcGFzc3dvcmQ6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgIH0sXHJcbiAgICByb2xlOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIGRlZmF1bHQ6ICd1c2VyJ1xyXG4gICAgfSxcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgYXZhdGFyOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIGRlZmF1bHQ6ICdodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZXZhdGNoYW5uZWwvaW1hZ2UvdXBsb2FkL3YxNjAyNzUyNDAyL2F2YXRhci9hdmF0YXJfY3VncTQwLnBuZydcclxuICAgIH1cclxufSwge1xyXG4gICAgdGltZXN0YW1wczogdHJ1ZVxyXG59KVxyXG5cclxubGV0IERhdGFzZXQgPSBtb25nb29zZS5tb2RlbHMudXNlciB8fCBtb25nb29zZS5tb2RlbCgndXNlcicsIHVzZXJTY2hlbWEpXHJcbmV4cG9ydCBkZWZhdWx0IERhdGFzZXQiLCJpbXBvcnQgY29ubmVjdERCIGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2Nvbm5lY3REQidcclxuaW1wb3J0IE9yZGVycyBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbHMvb3JkZXJNb2RlbCdcclxuaW1wb3J0IGF1dGggZnJvbSAnLi4vLi4vLi4vLi4vbWlkZGxld2FyZS9hdXRoJ1xyXG5cclxuY29ubmVjdERCKClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgc3dpdGNoKHJlcS5tZXRob2Qpe1xyXG4gICAgICAgIGNhc2UgXCJQQVRDSFwiOlxyXG4gICAgICAgICAgICBhd2FpdCBkZWxpdmVyZWRPcmRlcihyZXEsIHJlcylcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGRlbGl2ZXJlZE9yZGVyID0gYXN5bmMocmVxLCByZXMpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXV0aChyZXEsIHJlcylcclxuICAgICAgICBpZihyZXN1bHQucm9sZSAhPT0gJ2FkbWluJylcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2VycjogJ0F1dGhlbnRpY2F0aW9uIGlzIG5vdCB2YWxpZC4nfSlcclxuICAgICAgICBjb25zdCB7aWR9ID0gcmVxLnF1ZXJ5XHJcblxyXG5cclxuICAgICAgICBjb25zdCBvcmRlciA9IGF3YWl0IE9yZGVycy5maW5kT25lKHtfaWQ6IGlkfSlcclxuICAgICAgICBpZihvcmRlci5wYWlkKXtcclxuICAgICAgICAgICAgYXdhaXQgT3JkZXJzLmZpbmRPbmVBbmRVcGRhdGUoe19pZDogaWR9LCB7ZGVsaXZlcmVkOiB0cnVlfSlcclxuICAgIFxyXG4gICAgICAgICAgICByZXMuanNvbih7XHJcbiAgICAgICAgICAgICAgICBtc2c6ICdVcGRhdGVkIHN1Y2Nlc3MhJyxcclxuICAgICAgICAgICAgICAgIHJlc3VsdDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhaWQ6IHRydWUsIFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGVPZlBheW1lbnQ6IG9yZGVyLmRhdGVPZlBheW1lbnQsIFxyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogb3JkZXIubWV0aG9kLCBcclxuICAgICAgICAgICAgICAgICAgICAgZGVsaXZlcmVkOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGF3YWl0IE9yZGVycy5maW5kT25lQW5kVXBkYXRlKHtfaWQ6IGlkfSwge1xyXG4gICAgICAgICAgICAgICAgcGFpZDogdHJ1ZSwgZGF0ZU9mUGF5bWVudDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLCBcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1JlY2VpdmUgQ2FzaCcsIGRlbGl2ZXJlZDogdHJ1ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgXHJcbiAgICAgICAgICAgIHJlcy5qc29uKHtcclxuICAgICAgICAgICAgICAgIG1zZzogJ1VwZGF0ZWQgc3VjY2VzcyEnLFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFpZDogdHJ1ZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZU9mUGF5bWVudDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLCBcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdSZWNlaXZlIENhc2gnLCBcclxuICAgICAgICAgICAgICAgICAgICBkZWxpdmVyZWQ6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oe2VycjogZXJyLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xyXG5cclxuY29uc3QgY29ubmVjdERCID0gKCkgPT4ge1xyXG4gICAgaWYobW9uZ29vc2UuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0FscmVhZHkgY29ubmVjdGVkLicpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT0RCX1VSTCwge1xyXG4gICAgICAgIHVzZUNyZWF0ZUluZGV4OiB0cnVlLFxyXG4gICAgICAgIHVzZUZpbmRBbmRNb2RpZnk6IGZhbHNlLFxyXG4gICAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcclxuICAgICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWVcclxuICAgIH0sIGVyciA9PiB7XHJcbiAgICAgICAgaWYoZXJyKSB0aHJvdyBlcnI7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0Nvbm5lY3RlZCB0byBtb25nb2RiLicpXHJcbiAgICB9KVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdERCIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=