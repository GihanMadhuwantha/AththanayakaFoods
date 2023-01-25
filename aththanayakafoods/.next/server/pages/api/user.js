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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/user/index.js");
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

/***/ "./pages/api/user/index.js":
/*!*********************************!*\
  !*** ./pages/api/user/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_connectDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/connectDB */ "./utils/connectDB.js");
/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/userModel */ "./models/userModel.js");
/* harmony import */ var _middleware_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../middleware/auth */ "./middleware/auth.js");



Object(_utils_connectDB__WEBPACK_IMPORTED_MODULE_0__["default"])();
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  switch (req.method) {
    case "PATCH":
      await uploadInfor(req, res);
      break;
    case "GET":
      await getUsers(req, res);
      break;
  }
});
const getUsers = async (req, res) => {
  try {
    const result = await Object(_middleware_auth__WEBPACK_IMPORTED_MODULE_2__["default"])(req, res);
    if (result.role !== 'admin') return res.status(400).json({
      err: "Authentication is not valid"
    });
    const users = await _models_userModel__WEBPACK_IMPORTED_MODULE_1__["default"].find().select('-password');
    res.json({
      users
    });
  } catch (err) {
    return res.status(500).json({
      err: err.message
    });
  }
};
const uploadInfor = async (req, res) => {
  try {
    const result = await Object(_middleware_auth__WEBPACK_IMPORTED_MODULE_2__["default"])(req, res);
    const {
      name,
      avatar
    } = req.body;
    const newUser = await _models_userModel__WEBPACK_IMPORTED_MODULE_1__["default"].findOneAndUpdate({
      _id: result.id
    }, {
      name,
      avatar
    });
    res.json({
      msg: "Update Success!",
      user: {
        name,
        avatar,
        email: newUser.email,
        role: newUser.role
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbWlkZGxld2FyZS9hdXRoLmpzIiwid2VicGFjazovLy8uL21vZGVscy91c2VyTW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3VzZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29ubmVjdERCLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvb3NlXCIiXSwibmFtZXMiOlsiYXV0aCIsInJlcSIsInJlcyIsInRva2VuIiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwiZGVjb2RlZCIsImp3dCIsInZlcmlmeSIsInByb2Nlc3MiLCJ1c2VyIiwiVXNlcnMiLCJmaW5kT25lIiwiX2lkIiwiaWQiLCJyb2xlIiwicm9vdCIsInVzZXJTY2hlbWEiLCJtb25nb29zZSIsIlNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJlbWFpbCIsInVuaXF1ZSIsInBhc3N3b3JkIiwiZGVmYXVsdCIsIkJvb2xlYW4iLCJhdmF0YXIiLCJ0aW1lc3RhbXBzIiwiRGF0YXNldCIsIm1vZGVscyIsIm1vZGVsIiwiY29ubmVjdERCIiwibWV0aG9kIiwidXBsb2FkSW5mb3IiLCJnZXRVc2VycyIsInJlc3VsdCIsInVzZXJzIiwiZmluZCIsInNlbGVjdCIsIm1lc3NhZ2UiLCJib2R5IiwibmV3VXNlciIsImZpbmRPbmVBbmRVcGRhdGUiLCJtc2ciLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdCIsInVzZUNyZWF0ZUluZGV4IiwidXNlRmluZEFuZE1vZGlmeSIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7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QUFJO0lBQ04sSUFBR0EsR0FBRyxFQUFFLE1BQU1BLEdBQUc7SUFDakI0QyxPQUFPLENBQUNDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQztFQUN4QyxDQUFDLENBQUM7QUFDTixDQUFDO0FBR2NoQix3RUFBUyxFOzs7Ozs7Ozs7OztBQ25CeEIseUM7Ozs7Ozs7Ozs7O0FDQUEscUMiLCJmaWxlIjoicGFnZXMvYXBpL3VzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FwaS91c2VyL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nXHJcbmltcG9ydCBVc2VycyBmcm9tICcuLi9tb2RlbHMvdXNlck1vZGVsJ1xyXG5cclxuXHJcbmNvbnN0IGF1dGggPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHRva2VuID0gcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbjtcclxuICAgIGlmKCF0b2tlbikgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnI6ICdJbnZhbGlkIEF1dGhlbnRpY2F0aW9uLid9KVxyXG5cclxuICAgIGNvbnN0IGRlY29kZWQgPSBqd3QudmVyaWZ5KHRva2VuLCBwcm9jZXNzLmVudi5BQ0NFU1NfVE9LRU5fU0VDUkVUKVxyXG4gICAgaWYoIWRlY29kZWQpIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyOiAnSW52YWxpZCBBdXRoZW50aWNhdGlvbi4nfSlcclxuXHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlcnMuZmluZE9uZSh7X2lkOiBkZWNvZGVkLmlkfSlcclxuXHJcbiAgICByZXR1cm4ge2lkOiB1c2VyLl9pZCwgcm9sZTogdXNlci5yb2xlLCByb290OiB1c2VyLnJvb3R9O1xyXG59XHJcblxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IGF1dGgiLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnXHJcblxyXG5jb25zdCB1c2VyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgICBuYW1lOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgZW1haWw6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgdW5pcXVlOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgcGFzc3dvcmQ6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgIH0sXHJcbiAgICByb2xlOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIGRlZmF1bHQ6ICd1c2VyJ1xyXG4gICAgfSxcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgYXZhdGFyOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIGRlZmF1bHQ6ICdodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZXZhdGNoYW5uZWwvaW1hZ2UvdXBsb2FkL3YxNjAyNzUyNDAyL2F2YXRhci9hdmF0YXJfY3VncTQwLnBuZydcclxuICAgIH1cclxufSwge1xyXG4gICAgdGltZXN0YW1wczogdHJ1ZVxyXG59KVxyXG5cclxubGV0IERhdGFzZXQgPSBtb25nb29zZS5tb2RlbHMudXNlciB8fCBtb25nb29zZS5tb2RlbCgndXNlcicsIHVzZXJTY2hlbWEpXHJcbmV4cG9ydCBkZWZhdWx0IERhdGFzZXQiLCJpbXBvcnQgY29ubmVjdERCIGZyb20gJy4uLy4uLy4uL3V0aWxzL2Nvbm5lY3REQidcclxuaW1wb3J0IFVzZXJzIGZyb20gJy4uLy4uLy4uL21vZGVscy91c2VyTW9kZWwnXHJcbmltcG9ydCBhdXRoIGZyb20gJy4uLy4uLy4uL21pZGRsZXdhcmUvYXV0aCdcclxuXHJcbmNvbm5lY3REQigpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIHN3aXRjaChyZXEubWV0aG9kKXtcclxuICAgICAgICBjYXNlIFwiUEFUQ0hcIjpcclxuICAgICAgICAgICAgYXdhaXQgdXBsb2FkSW5mb3IocmVxLCByZXMpXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJHRVRcIjpcclxuICAgICAgICAgICAgYXdhaXQgZ2V0VXNlcnMocmVxLCByZXMpXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBnZXRVc2VycyA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF1dGgocmVxLCByZXMpXHJcbiAgICAgICBpZihyZXN1bHQucm9sZSAhPT0gJ2FkbWluJykgXHJcbiAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2VycjogXCJBdXRoZW50aWNhdGlvbiBpcyBub3QgdmFsaWRcIn0pXHJcblxyXG4gICAgICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgVXNlcnMuZmluZCgpLnNlbGVjdCgnLXBhc3N3b3JkJylcclxuICAgICAgICByZXMuanNvbih7dXNlcnN9KVxyXG5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7ZXJyOiBlcnIubWVzc2FnZX0pXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5jb25zdCB1cGxvYWRJbmZvciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhdXRoKHJlcSwgcmVzKVxyXG4gICAgICAgIGNvbnN0IHtuYW1lLCBhdmF0YXJ9ID0gcmVxLmJvZHlcclxuXHJcbiAgICAgICAgY29uc3QgbmV3VXNlciA9IGF3YWl0IFVzZXJzLmZpbmRPbmVBbmRVcGRhdGUoe19pZDogcmVzdWx0LmlkfSwge25hbWUsIGF2YXRhcn0pXHJcblxyXG4gICAgICAgIHJlcy5qc29uKHtcclxuICAgICAgICAgICAgbXNnOiBcIlVwZGF0ZSBTdWNjZXNzIVwiLFxyXG4gICAgICAgICAgICB1c2VyOiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICAgICAgYXZhdGFyLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6IG5ld1VzZXIuZW1haWwsXHJcbiAgICAgICAgICAgICAgICByb2xlOiBuZXdVc2VyLnJvbGVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oe2VycjogZXJyLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xyXG5cclxuY29uc3QgY29ubmVjdERCID0gKCkgPT4ge1xyXG4gICAgaWYobW9uZ29vc2UuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0FscmVhZHkgY29ubmVjdGVkLicpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT0RCX1VSTCwge1xyXG4gICAgICAgIHVzZUNyZWF0ZUluZGV4OiB0cnVlLFxyXG4gICAgICAgIHVzZUZpbmRBbmRNb2RpZnk6IGZhbHNlLFxyXG4gICAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcclxuICAgICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWVcclxuICAgIH0sIGVyciA9PiB7XHJcbiAgICAgICAgaWYoZXJyKSB0aHJvdyBlcnI7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0Nvbm5lY3RlZCB0byBtb25nb2RiLicpXHJcbiAgICB9KVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdERCIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=