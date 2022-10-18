module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+1x3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ getAllRecordByUserSuccess; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ getRecordByIdSuccess; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ getRecordByUserId; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ getRecordByUserIdSuccess; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ updateRecord; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ createRecord; });

// UNUSED EXPORTS: getAllRecordByUser, getRecordById

// EXTERNAL MODULE: ./src/redux/types/record/index.ts
var record = __webpack_require__("fc+X");

// CONCATENATED MODULE: ./src/redux/actions/record/record.ts

const getAllRecordByUser = payload => ({
  type: record["b" /* GET_ALL_RECORD_BY_USER */],
  payload
});
const getAllRecordByUserSuccess = payload => ({
  type: record["c" /* GET_ALL_RECORD_BY_USER_SUCCESS */],
  payload
});
const getRecordById = payload => ({
  type: record["d" /* GET_RECORD_BY_ID */],
  payload
});
const getRecordByIdSuccess = payload => ({
  type: record["e" /* GET_RECORD_BY_ID_SUCCESS */],
  payload
});
const getRecordByUserId = payload => ({
  type: record["f" /* GET_RECORD_BY_USER_ID */],
  payload
});
const getRecordByUserIdSuccess = payload => ({
  type: record["g" /* GET_RECORD_BY_USER_ID_SUCCESS */],
  payload
});
const updateRecord = payload => ({
  type: record["h" /* UPDATE_RECORD */],
  payload
});
const createRecord = payload => ({
  type: record["a" /* CREATE_RECORD */],
  payload
});
// CONCATENATED MODULE: ./src/redux/actions/record/index.ts


/***/ }),

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k3uC");


/***/ }),

/***/ "1Wjp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_ALL_CATEGORY_1_JOB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_ALL_CATEGORY_1_JOB_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GET_ALL_CATEGORY_2_JOB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GET_ALL_CATEGORY_2_JOB_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_ALL_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return GET_ALL_CATEGORY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SET_CATEGORY_SELECTED; });
const GET_ALL_CATEGORY_1_JOB = "GET_ALL_CATEGORY_1_JOB";
const GET_ALL_CATEGORY_1_JOB_SUCCESS = "GET_ALL_CATEGORY_1_JOB_SUCCESS";
const GET_ALL_CATEGORY_2_JOB = "GET_ALL_CATEGORY_2_JOB";
const GET_ALL_CATEGORY_2_JOB_SUCCESS = "GET_ALL_CATEGORY_2_JOB_SUCCESS";
const GET_ALL_CATEGORY = "GET_ALL_CATEGORY";
const GET_ALL_CATEGORY_SUCCESS = "GET_ALL_CATEGORY_SUCCESS";
const SET_CATEGORY_SELECTED = "SET_CATEGORY_SELECTED";

/***/ }),

/***/ "1fKG":
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "27Qm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_CONTENT_WEBSITE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_CONTENT_WEBSITE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_SEO_WEBSITE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GET_SEO_WEBSITE_SUCCESS; });
/* unused harmony export GET_FOOTER_CONTENT_OF_PROJECT */
/* unused harmony export GET_FOOTER_CONTENT_OF_PROJECT_SUCCESS */
const GET_CONTENT_WEBSITE = "GET_CONTENT_WEBSITE";
const GET_CONTENT_WEBSITE_SUCCESS = "GET_CONTENT_WEBSITE_SUCCESS";
const GET_SEO_WEBSITE = "GET_SEO_WEBSITE";
const GET_SEO_WEBSITE_SUCCESS = "GET_SEO_WEBSITE_SUCCESS";
const GET_FOOTER_CONTENT_OF_PROJECT = "GET_FOOTER_CONTENT_OF_PROJECT";
const GET_FOOTER_CONTENT_OF_PROJECT_SUCCESS = "GET_FOOTER_CONTENT_OF_PROJECT_SUCCESS";

/***/ }),

/***/ "2aR6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ getProvinces; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ getDistricts; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ getWardsByDistrict; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ getStreets; });

// EXTERNAL MODULE: external "apollo-boost"
var external_apollo_boost_ = __webpack_require__("YvTO");

// EXTERNAL MODULE: ./src/common/utils/api.ts + 1 modules
var api = __webpack_require__("p2dX");

// CONCATENATED MODULE: ./src/services/location/province.ts


const GET_PROVINCES = external_apollo_boost_["gql"]`
  query {
    getProvinces(name: "", page: 0, size: 999) {
      totalCount
      provinces {
        _id
        name
        code
        slug
        longitude
        latitude
      }
    }
  }
`;
const getProvinces = async () => {
  const response = await Object(api["b" /* graphQLCommon */])(GET_PROVINCES, {});
  return response;
};
// CONCATENATED MODULE: ./src/services/location/district.ts


const GET_DISTRICTS = external_apollo_boost_["gql"]`
  query($provinceCode: String!) {
    getDistrictsByProvince(provinceCode: $provinceCode, page: 0, size: 9999) {
      totalCount
      districts {
        _id
        name
        longitude
        latitude
        code
      }
    }
  }
`;
const getDistricts = async variables => {
  const result = await Object(api["b" /* graphQLCommon */])(GET_DISTRICTS, variables);
  return result;
};
// CONCATENATED MODULE: ./src/services/location/ward.ts


const GET_WARDS_BY_DISTRICT = external_apollo_boost_["gql"]`
  query($districtCode: String!) {
    getWardsByDistrict(districtCode: $districtCode, page: 0, size: 999) {
      totalCount
      wards {
        _id
        name
        longitude
        latitude
        code
      }
    }
  }
`;
const getWardsByDistrict = async variables => {
  const response = await Object(api["b" /* graphQLCommon */])(GET_WARDS_BY_DISTRICT, variables);
  return response;
};
// CONCATENATED MODULE: ./src/services/location/street.ts


const GET_STREETS = external_apollo_boost_["gql"]`
  query($province: String!, $district: String!) {
    getStreetByProvinceAndDistrict(
      province: $province
      district: $district
      streetName: ""
      page: 0
      size: 999
    ) {
      totalCount
      streets {
        _id
        name
        longitude
        latitude
        code
      }
    }
  }
`;
const getStreets = async variables => {
  const result = await Object(api["b" /* graphQLCommon */])(GET_STREETS, variables);
  return result;
};
// CONCATENATED MODULE: ./src/services/location/index.ts





/***/ }),

/***/ "3IMB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_PROVINCES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GET_PROVINCE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_DISTRICTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_DISTRICTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return GET_WARDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return GET_WARDS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GET_STREETS_BY_PROVINCE_AND_DISTRICT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return GET_STREETS_BY_PROVINCE_AND_DISTRICT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return SET_PROVINCE_SELECTED; });
const GET_PROVINCES = "GET_PROVINCES";
const GET_PROVINCE_SUCCESS = "GET_PROVINCE_SUCCESS";
const GET_DISTRICTS = "GET_DISTRICTS";
const GET_DISTRICTS_SUCCESS = "GET_DISTRICTS_SUCCESS";
const GET_WARDS = "GET_WARDS";
const GET_WARDS_SUCCESS = "GET_WARDS_SUCCESS";
const GET_STREETS_BY_PROVINCE_AND_DISTRICT = "GET_STREETS_BY_PROVINCE_AND_DISTRICT";
const GET_STREETS_BY_PROVINCE_AND_DISTRICT_SUCCESS = "GET_STREETS_BY_PROVINCE_AND_DISTRICT_SUCCESS";
const SET_PROVINCE_SELECTED = "SET_PROVINCE_SELECTED";

/***/ }),

/***/ "3yXT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getToken */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getTokenSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return loginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return registerOtpVoice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return sendOtpVoice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return verifyOtpVoice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return verifyOtpResetPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return resetPasswordOtpVoice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return removeCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return refreshToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return refreshTokenSuccess; });
/* unused harmony export createCandidate */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCurrentUser; });
/* unused harmony export updateUserEmailPassword */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return setIsAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return setAccountInfo; });
/* harmony import */ var _redux_types_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9WYc");

const getToken = payload => ({
  type: _redux_types_auth__WEBPACK_IMPORTED_MODULE_0__[/* GET_TOKEN */ "c"],
  payload
});
const getTokenSuccess = payload => ({
  type: _redux_types_auth__WEBPACK_IMPORTED_MODULE_0__[/* GET_TOKEN_SUCCESS */ "d"],
  payload
});
const login = payload => ({
  type: _redux_types_auth__WEBPACK_IMPORTED_MODULE_0__[/* LOGIN */ "e"],
  payload
});
const loginSuccess = payload => ({
  type: _redux_types_auth__WEBPACK_IMPORTED_MODULE_0__[/* LOGIN_SUCCESS */ "f"],
  payload
});
const registerOtpVoice = payload => ({
  type: _redux_types_auth__WEBPACK_IMPORTED_MODULE_0__[/* REGISTER_OTP_VOICE */ "i"],
  payload
});
const sendOtpVoice = payload => ({
  type: _redux_types_auth__WEBPACK_IMPORTED_MODULE_0__[/* SEND_OTP_VOICE */ "l"],
  payload
});
const verifyOtpVoice = payload => ({
  type: _redux_types_auth__WEBPACK_IMPORTED_MODULE_0__[/* VERIFY_OTP_VOICE */ "q"],
  payload
});
const verifyOtpResetPassword = payload => ({
  type: _redux_types_auth__WEBPACK_IMPORTED_MODULE_0__[/* VERIFY_OTP_RESET_PASSWORD */ "p"],
  payload
});
const resetPasswordOtpVoice = payload => ({
  type: _redux_types_auth__WEBPACK_IMPORTED_MODULE_0__[/* RESET_PASSWORD_OTP_VOICE */ "k"],
  payload
});
const removeCurrentUser = () => ({
  type: _redux_types_auth__WEBPACK_IMPORTED_MODULE_0__[/* REMOVE_CURRENT_USER */ "j"]
});
const refreshToken = () => ({
  type: _redux_types_auth__WEBPACK_IMPORTED_MODULE_0__[/* REFRESH_TOKEN */ "g"]
});
const refreshTokenSuccess = payload => ({
  type: _redux_types_auth__WEBPACK_IMPORTED_MODULE_0__[/* REFRESH_TOKEN_SUCCESS */ "h"],
  payload
});
const createCandidate = payload => ({
  type: _redux_types_auth__WEBPACK_IMPORTED_MODULE_0__[/* CREATE_CANDIDATE */ "a"],
  payload
});
const getCurrentUser = payload => ({
  type: _redux_types_auth__WEBPACK_IMPORTED_MODULE_0__[/* GET_CURRENT_USER */ "b"],
  payload
});
const updateUserEmailPassword = payload => ({
  type: _redux_types_auth__WEBPACK_IMPORTED_MODULE_0__[/* UPDATE_ACCOUNT */ "o"],
  payload
});
const setIsAuth = payload => ({
  type: _redux_types_auth__WEBPACK_IMPORTED_MODULE_0__[/* SET_IS_AUTH */ "n"],
  payload
});
const setAccountInfo = payload => ({
  type: _redux_types_auth__WEBPACK_IMPORTED_MODULE_0__[/* SET_ACCOUNT_INFO */ "m"],
  payload
});

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4enj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ getAllBlog; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ getAllBlogSuccess; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ getBlogBySlug; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ getBlogBySlugSuccess; });

// EXTERNAL MODULE: ./src/redux/types/blog/index.ts
var blog = __webpack_require__("y/ha");

// CONCATENATED MODULE: ./src/redux/actions/blog/blog.ts

const getAllBlog = payload => ({
  type: blog["a" /* GET_ALL_BLOG */],
  payload
});
const getAllBlogSuccess = payload => ({
  type: blog["b" /* GET_ALL_BLOG_SUCCESS */],
  payload
});
const getBlogBySlug = payload => ({
  type: blog["c" /* GET_BLOG_BY_SLUG */],
  payload
});
const getBlogBySlugSuccess = payload => ({
  type: blog["d" /* GET_BLOG_BY_SLUG_SUCCESS */],
  payload
});
// CONCATENATED MODULE: ./src/redux/actions/blog/index.ts


/***/ }),

/***/ "5Buo":
/***/ (function(module, exports) {



/***/ }),

/***/ "6f9I":
/***/ (function(module, exports) {

module.exports = require("next-i18next");

/***/ }),

/***/ "7fqt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SUBMITTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return RESET_SUBMITTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ACTION_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RESET_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SET_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SET_EXTEND_EMPLOYER_DRAWER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SET_OPEN_NOTIFICATION; });
const SUBMITTED = "SUBMITTED";
const RESET_SUBMITTED = "RESET_SUBMITTED";
const ACTION_SUCCESS = "ACTION_SUCCESS";
const RESET_ACTION = "RESET_ACTION";
const SET_LOADING = "SET_LOADING";
const SET_EXTEND_EMPLOYER_DRAWER = "SET_EXTEND_EMPLOYER_DRAWER";
const SET_OPEN_NOTIFICATION = "SET_OPEN_NOTIFICATION";

/***/ }),

/***/ "91UR":
/***/ (function(module, exports) {



/***/ }),

/***/ "9WYc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GET_TOKEN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return SET_IS_AUTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return SET_ACCOUNT_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return REMOVE_CURRENT_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return REFRESH_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return REFRESH_TOKEN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CREATE_CANDIDATE; });
/* unused harmony export RESET_PASSWORD */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_CURRENT_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return UPDATE_ACCOUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return REGISTER_OTP_VOICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return SEND_OTP_VOICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return RESET_PASSWORD_OTP_VOICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return VERIFY_OTP_VOICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return VERIFY_OTP_RESET_PASSWORD; });
const GET_TOKEN = "GET_TOKEN";
const GET_TOKEN_SUCCESS = "GET_TOKEN_SUCCESS";
const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const SET_IS_AUTH = "SET_IS_AUTH";
const SET_ACCOUNT_INFO = "SET_ACCOUNT_INFO";
const REMOVE_CURRENT_USER = "REMOVE_CURRENT_USER";
const REFRESH_TOKEN = "REFRESH_TOKEN";
const REFRESH_TOKEN_SUCCESS = "REFRESH_TOKEN_SUCCESS";
const CREATE_CANDIDATE = "CREATE_CANDIDATE";
const RESET_PASSWORD = "RESET_PASSWORD";
const GET_CURRENT_USER = "GET_CURRENT_USER";
const UPDATE_ACCOUNT = "UPDATE_ACCOUNT";
const REGISTER_OTP_VOICE = "REGISTER_OTP_VOICE";
const SEND_OTP_VOICE = "SEND_OTP_VOICE";
const RESET_PASSWORD_OTP_VOICE = "RESET_PASSWORD_OTP_VOICE";
const VERIFY_OTP_VOICE = "VERIFY_OTP_VOICE";
const VERIFY_OTP_RESET_PASSWORD = "VERIFY_OTP_RESET_PASSWORD";

/***/ }),

/***/ "9XMF":
/***/ (function(module, exports) {



/***/ }),

/***/ "ALsR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ wrapper; });

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__("1fKG");
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_);

// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__("RmXt");

// EXTERNAL MODULE: ./src/redux/types/contentWebsite/index.ts
var contentWebsite = __webpack_require__("27Qm");

// EXTERNAL MODULE: ./src/redux/actions/contentWebsite/index.ts
var actions_contentWebsite = __webpack_require__("Z8w5");

// EXTERNAL MODULE: external "apollo-boost"
var external_apollo_boost_ = __webpack_require__("YvTO");

// EXTERNAL MODULE: ./src/common/utils/api.ts + 1 modules
var api = __webpack_require__("p2dX");

// CONCATENATED MODULE: ./src/services/contentWebsite/contentWebsite.ts


const GET_CONTENT_WEBSITE = external_apollo_boost_["gql"]`
  query {
    getAllContentWebsite(filterContentWebsite: null, page: 0, size: 1) {
      results {
        _id
        address
        phone
        footerUserInfo
        footerEmployerInfo
        customCodeHeader
        customCodeFooter
        photos {
          small
          default
          medium
        }
        colorLogo {
          small
          default
          medium
        }
        whiteLogo {
          small
          default
          medium
        }
      }
    }
  }
`;
const getAllContentWebsite = async (variables) => {
  const response = await Object(api["b" /* graphQLCommon */])(GET_CONTENT_WEBSITE, variables);
  return response;
};
const GET_SEO = external_apollo_boost_["gql"]`
  query($language: String!) {
    getSeo(language: $language) {
      _id
      seoTitle
      seoKeyword
      author
      seoSiteMap
      seoDescription
      footerContentOfHomepage
      footerContentOfJobPosting
      footerContentOfEmployee
    }
  }
`;
const getSeo = async variables => {
  const response = await Object(api["b" /* graphQLCommon */])(GET_SEO, variables);
  return response;
};
// CONCATENATED MODULE: ./src/services/contentWebsite/index.ts

// CONCATENATED MODULE: ./src/redux/sagas/contentWebsite/contentWebsite.ts



function* getContentWebsiteSaga(payload) {
  const response = yield Object(effects_["call"])(getAllContentWebsite, payload);
  const {
    getAllContentWebsite: results
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (results) {
    yield Object(effects_["put"])(Object(actions_contentWebsite["b" /* getAllContentWebsiteSuccess */])(results));
  }
}
// CONCATENATED MODULE: ./src/redux/sagas/contentWebsite/SEO.ts



function* getSeoWebsiteSaga(payload) {
  const variables = payload.payload;
  const response = yield Object(effects_["call"])(getSeo, variables);
  const {
    getSeo: results
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (results) {
    yield Object(effects_["put"])(Object(actions_contentWebsite["d" /* getSeoWebsiteSuccess */])(results));
  }
}
// CONCATENATED MODULE: ./src/redux/sagas/contentWebsite/index.ts




function* contentWebsiteSaga() {
  yield Object(effects_["all"])([Object(effects_["takeLatest"])(contentWebsite["a" /* GET_CONTENT_WEBSITE */], getContentWebsiteSaga), Object(effects_["takeLatest"])(contentWebsite["c" /* GET_SEO_WEBSITE */], getSeoWebsiteSaga)]);
}
// CONCATENATED MODULE: ./src/services/staticPages/get.ts


const GET_ALL_STATIC_PAGES = external_apollo_boost_["gql"]`
  query($filterPages: FilterPages, $page: Int, $size: Int) {
    getAllPages(filterPages: $filterPages, page: $page, size: $size) {
      totalCount
      results {
        _id
        name
        type {
          name
          _id
          slug
        }
        content
        slug
        url
        image {
          default
          small
          medium
        }
      }
    }
  }
`;
const getAllPages = async variables => {
  const response = await Object(api["b" /* graphQLCommon */])(GET_ALL_STATIC_PAGES, variables);
  return response;
};
const GET_STATIC_PAGE_BY_SLUG = external_apollo_boost_["gql"]`
  query($slug: String!) {
    getPagesBySlug(slug: $slug) {
      _id
      name
      type {
        name
        _id
        slug
      }
      content
      url
      image {
        default
        small
        medium
      }
    }
  }
`;
const getPagesBySlug = async variables => {
  const response = await Object(api["b" /* graphQLCommon */])(GET_STATIC_PAGE_BY_SLUG, variables);
  return response;
};
// CONCATENATED MODULE: ./src/services/staticPages/index.ts

// EXTERNAL MODULE: ./src/redux/actions/staticPages/index.ts
var staticPages = __webpack_require__("uZqx");

// CONCATENATED MODULE: ./src/redux/sagas/staticPages/get.ts



function* getAllStaticPagesSaga(payload) {
  const variables = payload.payload;
  const response = yield Object(effects_["call"])(getAllPages, variables);
  const {
    getAllPages: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (result) {
    yield Object(effects_["put"])(Object(staticPages["b" /* getAllStaticPagesSuccess */])(result));
  }
}
function* getStaticPageBySlugSaga(payload) {
  const variables = payload.payload;
  const response = yield Object(effects_["call"])(getPagesBySlug, variables);
  const {
    getPagesBySlug: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (result) {
    yield Object(effects_["put"])(Object(staticPages["d" /* getStaticPageBySlugSuccess */])(result));
  }
}
// EXTERNAL MODULE: ./src/redux/types/staticPages/index.ts
var types_staticPages = __webpack_require__("DoQ8");

// CONCATENATED MODULE: ./src/redux/sagas/staticPages/index.ts



function* staticPagesSaga() {
  yield Object(effects_["all"])([Object(effects_["takeLatest"])(types_staticPages["a" /* GET_ALL_STATIC_PAGES */], getAllStaticPagesSaga), Object(effects_["takeLatest"])(types_staticPages["c" /* GET_STATIC_PAGE_BY_SLUG */], getStaticPageBySlugSaga)]);
}
// EXTERNAL MODULE: ./src/redux/types/auth/index.ts
var auth = __webpack_require__("9WYc");

// EXTERNAL MODULE: ./src/services/auth/index.ts + 9 modules
var services_auth = __webpack_require__("AT8v");

// EXTERNAL MODULE: ./src/components/ToastNotification/index.tsx + 3 modules
var ToastNotification = __webpack_require__("CFwT");

// EXTERNAL MODULE: ./src/redux/actions/auth/index.ts
var actions_auth = __webpack_require__("3yXT");

// CONCATENATED MODULE: ./src/redux/sagas/auth/get.ts




function* getToken(payload) {
  const variables = payload.payload;
  const response = yield Object(effects_["call"])(services_auth["b" /* getAccessToken */], variables);
  const result = response === null || response === void 0 ? void 0 : response.data;
  const message = "Số điện thoại hoặc email của bạn đã được đăng ký";

  if (result) {
    Object(ToastNotification["b" /* showNotification */])({
      type: "success",
      title: "Thông báo",
      message: "Đăng nhập thành công!"
    });
    yield Object(effects_["put"])(Object(actions_auth["b" /* getTokenSuccess */])(result));
  } else {
    Object(ToastNotification["b" /* showNotification */])({
      type: "error",
      message: message,
      title: "Thông báo"
    });
  }
}
function* refreshToken() {
  const response = yield Object(effects_["call"])(services_auth["d" /* refreshToken */]);
  const {
    refreshToken: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (result) {
    yield Object(effects_["put"])(Object(actions_auth["f" /* refreshTokenSuccess */])(result));
  }
}
// EXTERNAL MODULE: ./src/redux/actions/common/index.ts
var common = __webpack_require__("W6d4");

// CONCATENATED MODULE: ./src/redux/sagas/auth/login.ts





function* login(payload) {
  const variables = {
    user: payload.payload.user
  };
  const permission = payload.payload.permission;
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(true));
  const response = yield Object(effects_["call"])(services_auth["c" /* loginWithPhoneNumber */], variables);
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(false));
  const {
    login: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (!result) {
    if ((response === null || response === void 0 ? void 0 : response.errors[0].extensions.exception.status) === 400) {
      if ((response === null || response === void 0 ? void 0 : response.errors[0].extensions.exception.message) === "Your account is not verified otp") {
        Object(ToastNotification["b" /* showNotification */])({
          type: "error",
          title: "Thông báo",
          message: "Tài khoản của bạn chưa được xác thực. Vui lòng nhập lại mã OTP để xác thực tài khoản !"
        });
        eventManager.fire("activeAccount");
      }

      if ((response === null || response === void 0 ? void 0 : response.errors[0].extensions.exception.message) === "Error.login phoneNumber or email or password incorrect !") {
        Object(ToastNotification["b" /* showNotification */])({
          type: "error",
          title: "Thông báo",
          message: "Sai số điện thoại hoặc mật khẩu !"
        });
      }
    }

    if ((response === null || response === void 0 ? void 0 : response.errors[0].extensions.exception.status) === 404) {
      Object(ToastNotification["b" /* showNotification */])({
        type: "error",
        title: "Thông báo",
        message: "Số điện thoại của bạn chưa được đăng ký !"
      });
    }
  }

  if (result) {
    if (permission === result.userInfo.permission) {
      Object(ToastNotification["b" /* showNotification */])({
        type: "success",
        title: "Thông báo",
        message: "Đăng nhập thành công!"
      });
      yield Object(effects_["put"])(Object(actions_auth["d" /* loginSuccess */])(result));
    } else {
      Object(ToastNotification["b" /* showNotification */])({
        type: "error",
        title: "Thông báo",
        message: "Tài khoản không phải là tài khoản người dùng !"
      });
    }
  }
} // New Login with OTP Voice
// CONCATENATED MODULE: ./src/redux/sagas/auth/create.ts




function* createCandidate(payload) {
  const variables = payload.payload;
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(true));
  const response = yield Object(effects_["call"])(services_auth["a" /* createCandidate */], variables);
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(false));
  const {
    createCandidate: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (result) {
    yield Object(effects_["put"])(Object(common["a" /* actionSuccess */])());
  } else {
    Object(ToastNotification["b" /* showNotification */])({
      type: "error",
      title: "Thông báo",
      message: "Số điện thoại hoặc email của bạn đã được đăng ký"
    });
  }
}
// CONCATENATED MODULE: ./src/redux/sagas/auth/reset.ts




function* resetPasswordOtpVoice(payload) {
  const variables = payload.payload;
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(true));
  const response = yield Object(effects_["call"])(services_auth["f" /* resetPasswordOtpVoice */], variables);
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(false));
  const {
    resetPasswordOtpVoice: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (result) {
    Object(ToastNotification["b" /* showNotification */])({
      type: "success",
      title: "Thông báo",
      message: "Thay đổi mật khẩu thành công !"
    });
    eventManager.fire("resetPasswordSuccess");
  } else {
    Object(ToastNotification["b" /* showNotification */])({
      type: "error",
      title: "Thông báo",
      message: response.errors[0].message
    });
  }
}
// CONCATENATED MODULE: ./src/redux/sagas/auth/update.ts



function* updateUserEmailPassword(payload) {
  const variables = payload.payload;
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(true));
  const response = yield Object(effects_["call"])(services_auth["h" /* updateUserEmailPassword */], variables);
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(false));
  const {
    updateUserEmailPassword: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (result) {
    yield Object(effects_["put"])(Object(common["a" /* actionSuccess */])());
  }
}
// CONCATENATED MODULE: ./src/redux/sagas/auth/register.ts




function* registerOtpVoice(payload) {
  const variables = payload.payload;
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(true));
  const response = yield Object(effects_["call"])(services_auth["e" /* registerOtpVoice */], variables);
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(false));
  const {
    registerOtpVoice: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (!result) {
    Object(ToastNotification["b" /* showNotification */])({
      type: "error",
      title: "Thông báo",
      message: "Số điện thoại hoặc email của bạn đã được đăng ký"
    });
  }
}
// CONCATENATED MODULE: ./src/redux/sagas/auth/verifyOtp.ts




function* verifyOtpVoice(payload) {
  const variables = payload.payload;
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(true));
  const response = yield Object(effects_["call"])(services_auth["k" /* verifyOtpVoice */], variables);
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(false));
  const {
    verifyOtpVoice: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (result) {
    Object(ToastNotification["b" /* showNotification */])({
      type: "success",
      title: "Thông báo",
      message: "Đăng ký thành công !"
    });
    eventManager.fire("verifyOtpSuccess");
  } else {
    var _response$error;

    Object(ToastNotification["b" /* showNotification */])({
      type: "error",
      title: "Thông báo",
      message: (response === null || response === void 0 ? void 0 : (_response$error = response.error) === null || _response$error === void 0 ? void 0 : _response$error.message) || "Sai số điện thoại hoặc mật khẩu !"
    });
  }
}
function* verifyOtpResetPassword(payload) {
  const variables = payload.payload;
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(true));
  debugger;
  const response = yield Object(effects_["call"])(services_auth["j" /* verifyOtpResetPassword */], variables);
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(false));
  const {
    verifyOtpResetPassword: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (result) {// eventManager.fire("verifyOTPResetPasswordSuccess");
  } else {
    Object(ToastNotification["b" /* showNotification */])({
      type: "error",
      title: "Thông báo",
      message: response.errors[0].message
    });
  }
}
// CONCATENATED MODULE: ./src/redux/sagas/auth/sendOtp.ts




function* sendOtpVoice(payload) {
  const variables = payload.payload;
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(true));
  const response = yield Object(effects_["call"])(services_auth["g" /* sendOtpVoice */], variables);
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(false));
  const {
    sendOtpVoice: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (result) {
    if (result.Code !== 106) {
      Object(ToastNotification["b" /* showNotification */])({
        type: "error",
        title: "Thông báo",
        message: result.Message
      });
    }

    eventManager.fire("isSendRequestOtp");
  }
}
// CONCATENATED MODULE: ./src/redux/sagas/auth/index.ts










function* authSaga() {
  yield Object(effects_["all"])([Object(effects_["takeLatest"])(auth["c" /* GET_TOKEN */], getToken), Object(effects_["takeLatest"])(auth["g" /* REFRESH_TOKEN */], refreshToken), Object(effects_["takeLatest"])(auth["e" /* LOGIN */], login), Object(effects_["takeLatest"])(auth["a" /* CREATE_CANDIDATE */], createCandidate), Object(effects_["takeLatest"])(auth["o" /* UPDATE_ACCOUNT */], updateUserEmailPassword), Object(effects_["takeLatest"])(auth["i" /* REGISTER_OTP_VOICE */], registerOtpVoice), Object(effects_["takeLatest"])(auth["l" /* SEND_OTP_VOICE */], sendOtpVoice), Object(effects_["takeLatest"])(auth["q" /* VERIFY_OTP_VOICE */], verifyOtpVoice), Object(effects_["takeLatest"])(auth["p" /* VERIFY_OTP_RESET_PASSWORD */], verifyOtpResetPassword), Object(effects_["takeLatest"])(auth["k" /* RESET_PASSWORD_OTP_VOICE */], resetPasswordOtpVoice)]);
}
// EXTERNAL MODULE: ./src/redux/types/location/index.ts
var types_location = __webpack_require__("3IMB");

// EXTERNAL MODULE: ./src/redux/actions/location/index.ts + 4 modules
var actions_location = __webpack_require__("BbVQ");

// EXTERNAL MODULE: ./src/services/location/index.ts + 4 modules
var services_location = __webpack_require__("2aR6");

// CONCATENATED MODULE: ./src/redux/sagas/location/districts.ts



function* getDistrictsSaga(payload) {
  const variables = payload.payload;
  const response = yield Object(effects_["call"])(services_location["a" /* getDistricts */], variables);
  const {
    getDistrictsByProvince: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (result) {
    yield Object(effects_["put"])(Object(actions_location["b" /* getDistrictsSuccess */])(result));
  }
}
// CONCATENATED MODULE: ./src/redux/sagas/location/provinces.ts



function* getProvincesSaga() {
  const response = yield Object(effects_["call"])(services_location["b" /* getProvinces */]);
  const {
    getProvinces: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (result) {
    yield Object(effects_["put"])(Object(actions_location["c" /* getProvincesSuccess */])(result));
  }
}
// CONCATENATED MODULE: ./src/redux/sagas/location/streets.ts



function* getStreetByProvinceAndDistrict(payload) {
  const variables = payload.payload;
  const response = yield Object(effects_["call"])(services_location["c" /* getStreets */], variables);
  const {
    getStreetByProvinceAndDistrict: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (result) {
    yield Object(effects_["put"])(Object(actions_location["d" /* getStreetByProvinceAndDistrictSuccess */])(result));
  }
}
// CONCATENATED MODULE: ./src/redux/sagas/location/wards.ts



function* getWardsSaga(payload) {
  const variables = payload.payload;
  const response = yield Object(effects_["call"])(services_location["d" /* getWardsByDistrict */], variables);
  const {
    getWardsByDistrict: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (result) {
    yield Object(effects_["put"])(Object(actions_location["f" /* getWardsSuccess */])(result));
  }
}
// CONCATENATED MODULE: ./src/redux/sagas/location/index.ts






function* locationSaga() {
  yield Object(effects_["all"])([// Provinces
  Object(effects_["takeLatest"])(types_location["c" /* GET_PROVINCES */], getProvincesSaga), // Districts
  Object(effects_["takeLatest"])(types_location["a" /* GET_DISTRICTS */], getDistrictsSaga), // Wards
  Object(effects_["takeLatest"])(types_location["g" /* GET_WARDS */], getWardsSaga), // Streets
  Object(effects_["takeLatest"])(types_location["e" /* GET_STREETS_BY_PROVINCE_AND_DISTRICT */], getStreetByProvinceAndDistrict)]);
}
// EXTERNAL MODULE: ./src/redux/types/recruitment/index.ts
var recruitment = __webpack_require__("JpLw");

// CONCATENATED MODULE: ./src/services/recruitment/recruitment.ts


const recruitment_recruitment = `
        _id 
        name
        type {
          name
        }
        level {
          name
        }
        view
        description
        requirement
        career {
          name
        }
        location {
          name
          province {
            name
          }
          location
        }
        highlight
        user {
          _id
          displayName
          username
          email
          phoneNumber
        }
        viewedUser {
          _id
          displayName
          username
          email
          phoneNumber
        }
        appliedUser {
          _id
          displayName
          username
          email
          phoneNumber
        }
        salaryMin
        salaryMax
        dealSalary
        isApproved
        slug
        keywords {
          name
        }
        expiredDate
        createdAt
        updatedAt
        companyName
        companySize
        companySlug
        companyLocation
        companyBenefit {
          icon {
            icon {
              default
              medium
              small
            }
            name
          }
          content
        }
        companyDescription
        companyLogo {
          default
          medium
          small
        }
        companyImages {
          default
          medium
          small
        }
        companyVideo
        company {
          slug
          name
          logo{
            default
            medium
            small
          }
        }
`;
const GET_ALL_RECRUITMENT = external_apollo_boost_["gql"]`
  query(
    $keyword: String
    $filterRecruitment: FilterRecruitment
    $page: Int
    $size: Int
  ) {
    getAllRecruitment(
      keyword: $keyword
      filterRecruitment: $filterRecruitment
      page: $page
      size: $size
    ) {
      totalCount
      results {
        ${recruitment_recruitment}
      }
    }
  }
`;
const getAllRecruitment = async variables => {
  const response = await Object(api["b" /* graphQLCommon */])(GET_ALL_RECRUITMENT, variables);
  return response;
};
const GET_RECRUITMENT_BY_COMPANY = external_apollo_boost_["gql"]`
  query($companyId: String!) {
    getRecruitmentByCompany(companyId: $companyId) {
      totalCount
      results {
        ${recruitment_recruitment}
      }
    }
  }
`;
const getRecruitmentByCompany = async (variables) => {
  const response = await Object(api["b" /* graphQLCommon */])(GET_RECRUITMENT_BY_COMPANY, variables);
  return response;
};
const GET_RECRUITMENT_BY_USER = external_apollo_boost_["gql"]`
  query($userId: String!) {
    getRecruitmentByUser(userId: $userId) {
      totalCount
      results {
        ${recruitment_recruitment}
      }
    }
  }
`;
const getRecruitmentByUser = async (variables) => {
  const response = await Object(api["b" /* graphQLCommon */])(GET_RECRUITMENT_BY_USER, variables);
  return response;
};
const GET_RECRUITMENT_BY_ID = external_apollo_boost_["gql"]`
  query($id: String!) {
    getRecruitmentById(id: $id) {
      ${recruitment_recruitment}
    }
  }
`;
const getRecruitmentById = async variables => {
  const response = await Object(api["b" /* graphQLCommon */])(GET_RECRUITMENT_BY_ID, variables);
  return response;
};
const GET_RECRUITMENT_BY_SLUG = external_apollo_boost_["gql"]`
  query($slug: String!) {
    getRecruitmentBySlug(slug: $slug) {
      ${recruitment_recruitment}
    }
  }
`;
const getRecruitmentBySlug = async variables => {
  const response = await Object(api["b" /* graphQLCommon */])(GET_RECRUITMENT_BY_SLUG, variables);
  return response;
};
const SET_SEEN_RECRUITMENT = external_apollo_boost_["gql"]`
  mutation($userId: String!, $recruitmentId: String!) {
    setSeenRecruitment(userId: $userId, recruitmentId: $recruitmentId)
  }
`;
const setSeenRecruitment = async variables => {
  const response = await Object(api["b" /* graphQLCommon */])(SET_SEEN_RECRUITMENT, variables);
  return response;
};
const SET_APPLIED_RECRUITMENT = external_apollo_boost_["gql"]`
  mutation($userId: String!, $recruitmentId: String!) {
    setAppliedRecruitment(userId: $userId, recruitmentId: $recruitmentId)
  }
`;
const setAppliedRecruitment = async (variables) => {
  const response = await Object(api["b" /* graphQLCommon */])(SET_APPLIED_RECRUITMENT, variables);
  return response;
};
const SET_SAVED_RECRUITMENT = external_apollo_boost_["gql"]`
  mutation($userId: String!, $recruitmentId: String!) {
    setSavedRecruitment(userId: $userId, recruitmentId: $recruitmentId)
  }
`;
const setSavedRecruitment = async (variables) => {
  const response = await Object(api["b" /* graphQLCommon */])(SET_SAVED_RECRUITMENT, variables);
  return response;
};
const CREATE_RECRUITMENT = external_apollo_boost_["gql"]`
  mutation($recruitmentCreateInput: RecruitmentCreateInput!) {
    createRecruitment(recruitmentCreateInput: $recruitmentCreateInput) {
      _id
      name
    }
  }
`;
const createRecruitment = async variables => {
  const response = await Object(api["b" /* graphQLCommon */])(CREATE_RECRUITMENT, variables);
  return response;
};
const GET_BEST_RECRUITMENT = external_apollo_boost_["gql"]`
  query Query($size: Int, $page: Int) {
    getBestRecruitment(size: $size, page: $page) {
      totalCount
      results {
        ${recruitment_recruitment}
      }
    }
  }
`;
const getBestRecruitment = async variables => {
  const response = await Object(api["b" /* graphQLCommon */])(GET_BEST_RECRUITMENT, variables);
  return response;
};
const REMOVE_SAVED_RECRUITMENT = external_apollo_boost_["gql"]`
  mutation($userId: String!, $recruitmentId: String!) {
    removeSavedRecruitmentUser(userId: $userId, recruitmentId: $recruitmentId)
  }
`;
const removeSavedRecruitment = async (variables) => {
  const response = await Object(api["b" /* graphQLCommon */])(REMOVE_SAVED_RECRUITMENT, variables);
  return response;
};
// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__("txk1");
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// CONCATENATED MODULE: ./src/services/recruitment/keyword.ts


const GET_KEYWORD = external_graphql_tag_default.a`
  query {
    getMostSearchKeyword {
      _id
      name
      keywords
      isHot
    }
  }
`;
const getMostKeyword = async () => {
  const response = await Object(api["b" /* graphQLCommon */])(GET_KEYWORD, {});
  return response;
};
// CONCATENATED MODULE: ./src/services/recruitment/index.ts


// EXTERNAL MODULE: ./src/redux/actions/recruitment/index.ts + 3 modules
var actions_recruitment = __webpack_require__("VfsZ");

// CONCATENATED MODULE: ./src/redux/sagas/recruitment/recruitment.ts





function* getAllRecruitmentSaga(payload) {
  const variables = payload.payload;
  const response = yield Object(effects_["call"])(getAllRecruitment, variables);
  const {
    getAllRecruitment: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (result) {
    yield Object(effects_["put"])(Object(actions_recruitment["d" /* getAllRecruitmentSuccess */])(result));
  }
}
function* getRecruitmentByCompanySaga(payload) {
  const variables = payload.payload;
  const response = yield Object(effects_["call"])(getRecruitmentByCompany, variables);
  const {
    getRecruitmentByCompany: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (result) {
    yield Object(effects_["put"])(Object(actions_recruitment["d" /* getAllRecruitmentSuccess */])(result));
  }
}
function* getRecruitmentByUserSaga(payload) {
  const variables = payload.payload;
  const response = yield Object(effects_["call"])(getRecruitmentByUser, variables);
  const {
    getRecruitmentByUser: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (result) {
    yield Object(effects_["put"])(Object(actions_recruitment["d" /* getAllRecruitmentSuccess */])(result));
  }
}
function* getRecruitmentByIdSaga(payload) {
  const variables = payload.payload;
  const response = yield Object(effects_["call"])(getRecruitmentById, variables);
  const {
    getRecruitmentById: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (result) {
    yield Object(effects_["put"])(Object(actions_recruitment["h" /* getRecruitmentByIdSuccess */])(result));
  }
}
function* getRecruitmentBySlugSaga(payload) {
  const variables = payload.payload;
  const response = yield Object(effects_["call"])(getRecruitmentBySlug, variables);
  const {
    getRecruitmentBySlug: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (result) {
    yield Object(effects_["put"])(Object(actions_recruitment["j" /* getRecruitmentBySlugSuccess */])(result));
  }
}
function* setSeenRecruitmentSaga(payload) {
  const variables = payload.payload;
  const response = yield Object(effects_["call"])(setSeenRecruitment, variables);
  const {
    setSeenRecruitment: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (result) {
    return true;
  }
}
function* setAppliedRecruitmentSaga(payload) {
  const variables = payload.payload;
  const response = yield Object(effects_["call"])(setAppliedRecruitment, variables);
  const {
    setAppliedRecruitment: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (result) {
    yield Object(effects_["put"])(Object(common["a" /* actionSuccess */])());
    Object(ToastNotification["b" /* showNotification */])({
      type: "success",
      title: "Thông báo",
      message: "Ứng tuyển thành công"
    });
  }
}
function* setSavedRecruitmentSaga(payload) {
  const variables = payload.payload;
  const response = yield Object(effects_["call"])(setSavedRecruitment, variables);
  const {
    setSavedRecruitment: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (result) {
    yield Object(effects_["put"])(Object(common["a" /* actionSuccess */])());
    Object(ToastNotification["b" /* showNotification */])({
      type: "success",
      title: "Thông báo",
      message: "Lưu việc làm thành công"
    });
  }
}
function* removeSavedRecruitmentSaga(payload) {
  const variables = payload.payload;
  const response = yield Object(effects_["call"])(removeSavedRecruitment, variables);
  const {
    removeSavedRecruitmentUser: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (result) {
    yield Object(effects_["put"])(Object(common["a" /* actionSuccess */])());
    Object(ToastNotification["b" /* showNotification */])({
      type: "success",
      title: "Thông báo",
      message: "Xóa việc làm thành công"
    });
  }
}
function* createRecruitmentSaga(payload) {
  const variables = payload.payload;
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(true));
  const response = yield Object(effects_["call"])(createRecruitment, variables);
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(false));
  const {
    createRecruitment: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (result) {
    yield Object(effects_["put"])(Object(common["a" /* actionSuccess */])());
    Object(ToastNotification["b" /* showNotification */])({
      type: "success",
      title: "Thông báo",
      message: "Tạo thành công"
    });
  }
}
function* recruitment_getBestRecruitment(payload) {
  const variables = payload.payload;
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(true));
  const response = yield Object(effects_["call"])(getBestRecruitment, variables);
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(false));
  const {
    getBestRecruitment: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (result) {
    yield Object(effects_["put"])(Object(actions_recruitment["f" /* getBestRecruitmentSuccess */])(result));
  }
}
// CONCATENATED MODULE: ./src/redux/sagas/recruitment/keyword.ts



function* getMostKeywordSaga() {
  const response = yield Object(effects_["call"])(getMostKeyword);
  const {
    getMostSearchKeyword: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (result) {
    yield Object(effects_["put"])(Object(actions_recruitment["b" /* getAllMostKeywordSuccess */])(result));
  }
}
// CONCATENATED MODULE: ./src/redux/sagas/recruitment/index.ts




function* recruitmentSaga() {
  yield Object(effects_["all"])([Object(effects_["takeLatest"])(recruitment["b" /* GET_ALL_RECRUITMENT */], getAllRecruitmentSaga), Object(effects_["takeLatest"])(recruitment["h" /* GET_RECRUITMENT_BY_COMPANY */], getRecruitmentByCompanySaga), Object(effects_["takeLatest"])(recruitment["m" /* GET_RECRUITMENT_BY_USER */], getRecruitmentByUserSaga), Object(effects_["takeLatest"])(recruitment["i" /* GET_RECRUITMENT_BY_ID */], getRecruitmentByIdSaga), Object(effects_["takeLatest"])(recruitment["k" /* GET_RECRUITMENT_BY_SLUG */], getRecruitmentBySlugSaga), Object(effects_["takeLatest"])(recruitment["q" /* SET_SEEN_RECRUITMENT */], setSeenRecruitmentSaga), Object(effects_["takeLatest"])(recruitment["o" /* SET_APPLIED_RECRUITMENT */], setAppliedRecruitmentSaga), Object(effects_["takeLatest"])(recruitment["p" /* SET_SAVED_RECRUITMENT */], setSavedRecruitmentSaga), Object(effects_["takeLatest"])(recruitment["n" /* REMOVE_SAVED_RECRUITMENT */], removeSavedRecruitmentSaga), Object(effects_["takeLatest"])(recruitment["a" /* CREATE_RECRUITMENT */], createRecruitmentSaga), Object(effects_["takeLatest"])(recruitment["d" /* GET_BEST_RECRUITMENT */], recruitment_getBestRecruitment), Object(effects_["takeLatest"])(recruitment["f" /* GET_MOST_KEYWORD */], getMostKeywordSaga)]);
}
// EXTERNAL MODULE: ./src/redux/types/ads/index.ts
var ads = __webpack_require__("DYVk");

// EXTERNAL MODULE: ./src/services/ads/index.ts + 1 modules
var services_ads = __webpack_require__("ZRVN");

// EXTERNAL MODULE: ./src/redux/actions/ads/index.ts
var actions_ads = __webpack_require__("spxh");

// CONCATENATED MODULE: ./src/redux/sagas/ads/get.ts



function* getAdsAll(payload) {
  const variables = payload.payload;
  const response = yield Object(effects_["call"])(services_ads["a" /* getAdsAll */], variables);
  const {
    getAdsAll: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (result) {
    yield Object(effects_["put"])(Object(actions_ads["a" /* getAdAllSuccess */])(result));
  }
}
function* getAdsByLocation(payload) {
  const variables = payload.payload;
  const response = yield Object(effects_["call"])(services_ads["b" /* getAdsByLocation */], variables);
  const {
    getAdsAllByLocation: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (result) {
    yield Object(effects_["put"])(Object(actions_ads["c" /* getAdsByLocationSuccess */])(result));
  }
}
function* getAdsJobPage(payload) {
  const variables = payload.payload;
  const response = yield Object(effects_["call"])(services_ads["b" /* getAdsByLocation */], variables);
  const {
    getAdsAllByLocation: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (result) {
    yield Object(effects_["put"])(Object(actions_ads["d" /* getAdsJobPageSuccess */])(result));
  }
}
// CONCATENATED MODULE: ./src/redux/sagas/ads/index.ts



function* adsSaga() {
  yield Object(effects_["all"])([Object(effects_["takeLatest"])(ads["a" /* GET_ADS_ALL */], getAdsAll), Object(effects_["takeLatest"])(ads["c" /* GET_ADS_BY_LOCATION */], getAdsByLocation), Object(effects_["takeLatest"])(ads["e" /* GET_ADS_JOB_PAGE */], getAdsJobPage)]);
}
// CONCATENATED MODULE: ./src/services/careerCounseling/get.ts


const GET_ALL_CAREER_COUNSELING = external_apollo_boost_["gql"]`
  query(
    $filterCareerCounseling: FilterCareerCounseling
    $page: Int
    $size: Int
  ) {
    getAllCareerCounseling(
      filterCareerCounseling: $filterCareerCounseling
      page: $page
      size: $size
    ) {
      results {
        _id
        name
        description
        content
        urlImage {
          default
          medium
          small
        }
        slug
      }
      totalCount
    }
  }
`;
const getAllCarreerCounseling = async (variable) => {
  const response = await Object(api["b" /* graphQLCommon */])(GET_ALL_CAREER_COUNSELING, variable);
  return response;
};
// CONCATENATED MODULE: ./src/services/careerCounseling/index.ts

// CONCATENATED MODULE: ./src/redux/types/careerCounseling/index.ts
const GET_ALL_CARRER_COUSELING = "GET_ALL_CARRER_COUSELING";
const GET_ALL_CARRER_COUSELING_SUCCESS = "GET_ALL_CARRER_COUSELING_SUCCESS";
// CONCATENATED MODULE: ./src/redux/actions/careerCounseling/index.ts

const getAllCareerCouseling = payload => ({
  type: GET_ALL_CARRER_COUSELING,
  payload
});
const getAllCareerCouselingSuccess = payload => ({
  type: GET_ALL_CARRER_COUSELING_SUCCESS,
  payload
});
// CONCATENATED MODULE: ./src/redux/sagas/careerCounseling/get.ts



function* getAllCareerCounseling(payload) {
  const variables = payload.payload;
  const response = yield Object(effects_["call"])(getAllCarreerCounseling, variables);
  const {
    getAllCareerCounseling: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (result) {
    yield Object(effects_["put"])(getAllCareerCouselingSuccess(result));
  }
}
// CONCATENATED MODULE: ./src/redux/sagas/careerCounseling/index.ts



function* careerCounselingSaga() {
  yield Object(effects_["all"])([Object(effects_["takeLatest"])(GET_ALL_CARRER_COUSELING, getAllCareerCounseling)]);
}
// EXTERNAL MODULE: ./src/redux/types/company/index.ts
var company = __webpack_require__("ppz9");

// EXTERNAL MODULE: ./src/services/company/index.ts + 1 modules
var services_company = __webpack_require__("KO5b");

// EXTERNAL MODULE: ./src/redux/actions/company/index.ts + 1 modules
var actions_company = __webpack_require__("gFNR");

// CONCATENATED MODULE: ./src/redux/sagas/company/company.ts




function* getAllCompanySaga(payload) {
  const variables = payload.payload;
  const response = yield Object(effects_["call"])(services_company["a" /* getAllCompany */], variables);
  const {
    getCompanies: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (result) {
    yield Object(effects_["put"])(Object(actions_company["b" /* getAllCompanySuccess */])(result));
  }
}
function* getCompanySaga(payload) {
  const variables = payload.payload;
  const response = yield Object(effects_["call"])(services_company["b" /* getCompany */], variables);
  const {
    getCompanyById: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (result) {
    yield Object(effects_["put"])(Object(actions_company["e" /* getCompanySuccess */])(result));
  }
}
function* getCompanyBySlugSaga(payload) {
  const variables = payload.payload;
  const response = yield Object(effects_["call"])(services_company["c" /* getCompanyBySlug */], variables);
  const {
    getCompanyBySlug: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (result) {
    yield Object(effects_["put"])(Object(actions_company["d" /* getCompanyBySlugSuccess */])(result));
  }
}
function* getNewestCompanySaga(payload) {
  const variables = payload.payload;
  const response = yield Object(effects_["call"])(services_company["a" /* getAllCompany */], variables);
  const {
    getCompanies: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (result) {
    yield Object(effects_["put"])(Object(actions_company["m" /* getNewestCompanySuccess */])(result));
  }
}
function* getMostViewCompanySaga(payload) {
  const variables = payload.payload;
  const response = yield Object(effects_["call"])(services_company["a" /* getAllCompany */], variables);
  const {
    getCompanies: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (result) {
    yield Object(effects_["put"])(Object(actions_company["k" /* getMostViewCompanySuccess */])(result));
  }
}
function* getMostAppliedCompanySaga(payload) {
  const variables = payload.payload;
  const response = yield Object(effects_["call"])(services_company["a" /* getAllCompany */], variables);
  const {
    getCompanies: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (result) {
    yield Object(effects_["put"])(Object(actions_company["g" /* getMostAppliedCompanySuccess */])(result));
  }
}
function* getMostRecruitingCompanySaga(payload) {
  const variables = payload.payload;
  const response = yield Object(effects_["call"])(services_company["a" /* getAllCompany */], variables);
  const {
    getCompanies: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (result) {
    yield Object(effects_["put"])(Object(actions_company["i" /* getMostRecruitingCompanySuccess */])(result));
  }
}
function* updateCompanySaga(payload) {
  const variables = payload.payload;
  const response = yield Object(effects_["call"])(services_company["f" /* updateCompany */], variables);
  const {
    updateCompany: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (result) {
    yield Object(effects_["put"])(Object(common["a" /* actionSuccess */])());
  }
}
function* updateCompanyProvinceSaga(payload) {
  const variables = payload.payload;
  const response = yield Object(effects_["call"])(services_company["g" /* updateCompanyProvince */], variables);
  const {
    updateCompanyProvince: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (result) {
    yield Object(effects_["put"])(Object(common["a" /* actionSuccess */])());
  }
}
function* setSubscribeCompanySaga(payload) {
  const variables = payload.payload;
  const response = yield Object(effects_["call"])(services_company["e" /* setSubscribeCompany */], variables);
  const {
    setSubscribedCompany: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (result) {
    yield Object(effects_["put"])(Object(common["a" /* actionSuccess */])());
  }
}
function* setSeenCompanySaga(payload) {
  const variables = payload.payload;
  const response = yield Object(effects_["call"])(services_company["d" /* setSeenCompany */], variables);
  const {
    setSeenCompany: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (result) {
    return true;
  }
}
// CONCATENATED MODULE: ./src/redux/sagas/company/index.ts



function* companySaga() {
  yield Object(effects_["all"])([Object(effects_["takeLatest"])(company["a" /* GET_ALL_COMPANY */], getAllCompanySaga), Object(effects_["takeLatest"])(company["c" /* GET_COMPANY */], getCompanySaga), Object(effects_["takeLatest"])(company["q" /* UPDATE_COMPANY */], updateCompanySaga), Object(effects_["takeLatest"])(company["r" /* UPDATE_COMPANY_PROVINCE */], updateCompanyProvinceSaga), Object(effects_["takeLatest"])(company["p" /* SET_SUBSCRIBE_COMPANY */], setSubscribeCompanySaga), Object(effects_["takeLatest"])(company["m" /* GET_NEWEST_COMPANY */], getNewestCompanySaga), Object(effects_["takeLatest"])(company["k" /* GET_MOST_VIEW_COMPANY */], getMostViewCompanySaga), Object(effects_["takeLatest"])(company["g" /* GET_MOST_APPLIED_COMPANY */], getMostAppliedCompanySaga), Object(effects_["takeLatest"])(company["i" /* GET_MOST_RECRUITING_COMPANY */], getMostRecruitingCompanySaga), Object(effects_["takeLatest"])(company["d" /* GET_COMPANY_BY_SLUG */], getCompanyBySlugSaga), Object(effects_["takeLatest"])(company["o" /* SET_SEEN_COMPANY */], setSeenCompanySaga)]);
}
// EXTERNAL MODULE: ./src/redux/types/blog/index.ts
var blog = __webpack_require__("y/ha");

// CONCATENATED MODULE: ./src/services/blog/blog.ts


const GET_ALL_Blog = external_apollo_boost_["gql"]`
  query(
    $filterCareerCounseling: FilterCareerCounseling
    $page: Int
    $size: Int
  ) {
    getAllCareerCounseling(
      filterCareerCounseling: $filterCareerCounseling
      page: $page
      size: $size
    ) {
      results {
        _id
        name
        description
        content
        urlImage {
          default
        }
        slug
        createdAt
      }
    }
  }
`;
const getAllBlog = async variables => {
  const response = await Object(api["b" /* graphQLCommon */])(GET_ALL_Blog, variables);
  return response;
};
const GET_BLOG_BY_SLUG = external_apollo_boost_["gql"]`
  query Query($slug: String!) {
    getCareerCounselingBySlug(slug: $slug) {
      _id
      name
      description
      content
      urlImage {
        default
        medium
        small
      }
      code
      highlight
      enabled
      category {
        name
      }
      tags {
        name
      }
      slug
      keywords
      createdAt
    }
  }
`;
const getBlogBySlug = async variables => {
  const response = await Object(api["b" /* graphQLCommon */])(GET_BLOG_BY_SLUG, variables);
  return response;
};
// CONCATENATED MODULE: ./src/services/blog/index.ts

// EXTERNAL MODULE: ./src/redux/actions/blog/index.ts + 1 modules
var actions_blog = __webpack_require__("4enj");

// CONCATENATED MODULE: ./src/redux/sagas/blog/blog.ts



function* getAllBlogSaga(payload) {
  const variables = payload.payload;
  const response = yield Object(effects_["call"])(getAllBlog, variables);
  const {
    getAllCareerCounseling: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (result) {
    yield Object(effects_["put"])(Object(actions_blog["b" /* getAllBlogSuccess */])(result));
  }
}
function* getBlogBySlugSaga(payload) {
  const variables = payload.payload;
  const response = yield Object(effects_["call"])(getBlogBySlug, variables);
  const {
    getCareerCounselingBySlug: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (result) {
    yield Object(effects_["put"])(Object(actions_blog["d" /* getBlogBySlugSuccess */])(result));
  }
}
// CONCATENATED MODULE: ./src/redux/sagas/blog/index.ts



function* blog_companySaga() {
  yield Object(effects_["all"])([Object(effects_["takeLatest"])(blog["a" /* GET_ALL_BLOG */], getAllBlogSaga), Object(effects_["takeLatest"])(blog["c" /* GET_BLOG_BY_SLUG */], getBlogBySlugSaga)]);
}
// EXTERNAL MODULE: ./src/redux/types/category/index.ts
var category = __webpack_require__("1Wjp");

// CONCATENATED MODULE: ./src/services/category/index.ts


const GET_CATEGORY_LEVEL1 = external_apollo_boost_["gql"]`
  query($filterCategoryLevel1: FilterCategoryLevel1) {
    getAllCategoryLevel1(
      filterCategoryLevel1: $filterCategoryLevel1
      page: 0
      size: 9999
    ) {
      totalCount
      results {
        name
        _id
      }
    }
  }
`;
const getCategoryLevel1 = async variables => {
  const result = await Object(api["b" /* graphQLCommon */])(GET_CATEGORY_LEVEL1, variables);
  return result;
};
const GET_CATEGORY_LEVEL2 = external_apollo_boost_["gql"]`
  query($filterCategoryLevel2: FilterCategoryLevel2, $page: Int, $size: Int) {
    getAllCategoryLevel2(
      filterCategoryLevel2: $filterCategoryLevel2
      page: $page
      size: $size
    ) {
      totalCount
      results {
        slug
        name
        _id
        categoryLevel1 {
          _id
          name
        }
      }
    }
  }
`;
const getCategoryLevel2 = async variables => {
  const result = await Object(api["b" /* graphQLCommon */])(GET_CATEGORY_LEVEL2, variables);
  return result;
};
// EXTERNAL MODULE: ./src/redux/actions/category/index.ts
var actions_category = __webpack_require__("dnLw");

// CONCATENATED MODULE: ./src/redux/sagas/category/category.ts




function* getAllCategoryLevel1(payload) {
  const variables = payload === null || payload === void 0 ? void 0 : payload.payload;
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(true));
  const response = yield Object(effects_["call"])(getCategoryLevel1, variables);
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(false));
  const {
    getAllCategoryLevel1: results
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (results) {
    yield Object(effects_["put"])(Object(actions_category["b" /* getAllCategoryLevel1Success */])(results));
  }
}
function* getAllCategoryLevel2(payload) {
  const variables = payload === null || payload === void 0 ? void 0 : payload.payload;
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(true));
  const response = yield Object(effects_["call"])(getCategoryLevel2, variables);
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(false));
  const {
    getAllCategoryLevel2: results
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (results) {
    yield Object(effects_["put"])(Object(actions_category["d" /* getAllCategoryLevel2Success */])(results));
  }
}
// CONCATENATED MODULE: ./src/redux/sagas/category/index.ts



function* categorySaga() {
  yield Object(effects_["all"])([Object(effects_["takeLatest"])(category["b" /* GET_ALL_CATEGORY_1_JOB */], getAllCategoryLevel1)]);
  yield Object(effects_["all"])([Object(effects_["takeLatest"])(category["d" /* GET_ALL_CATEGORY_2_JOB */], getAllCategoryLevel2)]);
} // yield all([takeLatest(types.GET_ALL_CATEGORY, getAllCategory)])
// EXTERNAL MODULE: ./src/redux/types/record/index.ts
var record = __webpack_require__("fc+X");

// EXTERNAL MODULE: ./src/services/record/index.ts + 3 modules
var services_record = __webpack_require__("yIJW");

// EXTERNAL MODULE: ./src/redux/actions/record/index.ts + 1 modules
var actions_record = __webpack_require__("+1x3");

// CONCATENATED MODULE: ./src/redux/sagas/record/get.ts



function* getAllRecordSaga(payload) {
  const variables = payload.payload;
  const response = yield Object(effects_["call"])(services_record["d" /* getRecordByUserId */], variables);
  const {
    getRecordByUser: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (result) {
    yield Object(effects_["put"])(Object(actions_record["b" /* getAllRecordByUserSuccess */])(result));
  }
}
function* getRecordByIdSaga(payload) {
  const variables = payload.payload;
  const response = yield Object(effects_["call"])(services_record["c" /* getRecordById */], variables);
  const {
    getRecordById: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (result) {
    yield Object(effects_["put"])(Object(actions_record["c" /* getRecordByIdSuccess */])(result));
  }
}
function* getRecordByUserIdSaga(payload) {
  const variables = payload.payload;
  const response = yield Object(effects_["call"])(services_record["d" /* getRecordByUserId */], variables);
  const {
    getRecordByUser: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (result) {
    yield Object(effects_["put"])(Object(actions_record["e" /* getRecordByUserIdSuccess */])(result));
  }
}
// CONCATENATED MODULE: ./src/redux/sagas/record/update.ts




function* updateRecordSaga(payload) {
  const variables = payload.payload;
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(true));
  const response = yield Object(effects_["call"])(services_record["e" /* updateRecord */], variables);
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(false));
  const {
    updateRecord: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (!result) {
    Object(ToastNotification["b" /* showNotification */])({
      type: "error",
      title: "Thông báo",
      message: "Cập nhật hồ sơ thất bại"
    });
  }

  if (result) {
    Object(ToastNotification["b" /* showNotification */])({
      type: "success",
      title: "Thông báo",
      message: "Cập nhật hồ sơ thành công!"
    });
    yield Object(effects_["put"])(Object(common["a" /* actionSuccess */])());
  }
}
// CONCATENATED MODULE: ./src/redux/sagas/record/create.ts




function* createRecordSaga(payload) {
  const variables = payload.payload;
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(true));
  const response = yield Object(effects_["call"])(services_record["b" /* createRecord */], variables);
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(false));
  const {
    createRecord: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (!result) {
    Object(ToastNotification["b" /* showNotification */])({
      type: "error",
      title: "Thông báo",
      message: "Cập nhật hồ sơ thất bại"
    });
  }

  if (result) {
    Object(ToastNotification["b" /* showNotification */])({
      type: "success",
      title: "Thông báo",
      message: "Cập nhật hồ sơ thành công!"
    });
    yield Object(effects_["put"])(Object(common["a" /* actionSuccess */])());
  }
}
// CONCATENATED MODULE: ./src/redux/sagas/record/index.ts





function* recordSaga() {
  yield Object(effects_["all"])([Object(effects_["takeLatest"])(record["b" /* GET_ALL_RECORD_BY_USER */], getAllRecordSaga), Object(effects_["takeLatest"])(record["d" /* GET_RECORD_BY_ID */], getRecordByIdSaga), Object(effects_["takeLatest"])(record["f" /* GET_RECORD_BY_USER_ID */], getRecordByUserIdSaga), Object(effects_["takeLatest"])(record["h" /* UPDATE_RECORD */], updateRecordSaga), Object(effects_["takeLatest"])(record["a" /* CREATE_RECORD */], createRecordSaga)]);
}
// CONCATENATED MODULE: ./src/redux/types/position/index.ts
const GET_POSITION = "GET_POSITION";
const GET_POSITION_SUCCESS = "GET_POSITION_SUCCESS";
// CONCATENATED MODULE: ./src/services/position/index.tsx


const GET_ALL_POSITION = external_apollo_boost_["gql"]`
  query {
    getAllPosition(page: 0, size: 99) {
      totalCount
      results {
        name
        description
        _id
      }
    }
  }
`;
const getAllPosition = async () => {
  const response = await Object(api["b" /* graphQLCommon */])(GET_ALL_POSITION, {});
  return response;
};
// CONCATENATED MODULE: ./src/redux/actions/position/index.ts

const position_getAllPosition = () => ({
  type: GET_POSITION
});
const getAllPositionSuccess = payload => ({
  type: GET_POSITION_SUCCESS,
  payload
});
// CONCATENATED MODULE: ./src/redux/sagas/position/position.ts



function* positionSaga(payload) {
  const response = yield Object(effects_["call"])(getAllPosition);
  const {
    getAllPosition: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (result) {
    yield Object(effects_["put"])(getAllPositionSuccess(result));
  }
}
// CONCATENATED MODULE: ./src/redux/sagas/position/index.ts



function* position() {
  yield Object(effects_["all"])([Object(effects_["takeLatest"])(GET_POSITION, positionSaga)]);
}
// CONCATENATED MODULE: ./src/services/contact/contact.ts


const CREATE_CONTACT = external_apollo_boost_["gql"]`
  mutation($contactInput: ContactInput!) {
    createContact(contactInput: $contactInput) {
      _id
      name
    }
  }
`;
const createContact = async variables => {
  const response = await Object(api["b" /* graphQLCommon */])(CREATE_CONTACT, variables);
  return response;
};
// CONCATENATED MODULE: ./src/services/contact/index.ts

// CONCATENATED MODULE: ./src/redux/sagas/contact/contact.ts



function* contact_createContact(payload) {
  const variables = payload.payload;
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(true));
  const response = yield Object(effects_["call"])(createContact, variables);
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(false));
  const {
    createContact: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (result) {
    yield Object(effects_["put"])(Object(common["a" /* actionSuccess */])());
  }
}
// CONCATENATED MODULE: ./src/redux/types/contact/index.ts
const contact_CREATE_CONTACT = "CREATE_CONTACT";
// CONCATENATED MODULE: ./src/redux/sagas/contact/index.ts



function* createContactSage() {
  yield Object(effects_["all"])([Object(effects_["takeLatest"])(contact_CREATE_CONTACT, contact_createContact)]);
}
// EXTERNAL MODULE: ./src/services/user/index.ts + 2 modules
var user = __webpack_require__("q465");

// CONCATENATED MODULE: ./src/redux/sagas/user/update.ts




function* updateUserProfileSaga(payload) {
  const variables = payload.payload;
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(true));
  const response = yield Object(effects_["call"])(user["d" /* updateUserProfile */], variables);
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(false));
  const {
    updateUserProfile: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (result) {
    Object(ToastNotification["b" /* showNotification */])({
      type: "success",
      title: "Thông báo",
      message: "Cập nhật hồ sơ thành công!"
    });
    yield Object(effects_["put"])(Object(common["a" /* actionSuccess */])());
  } else {
    Object(ToastNotification["b" /* showNotification */])({
      type: "error",
      title: "Thông báo",
      message: "Cập nhật hồ sơ thất bại!"
    });
  }
}
// EXTERNAL MODULE: ./src/redux/actions/user/index.ts
var actions_user = __webpack_require__("q6WE");

// CONCATENATED MODULE: ./src/redux/sagas/user/get.ts



function* getUserProfileSaga(payload) {
  const variables = payload.payload;
  const response = yield Object(effects_["call"])(user["c" /* getUserProfile */], variables);
  const {
    getUserById: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (result) {
    yield Object(effects_["put"])(Object(actions_user["b" /* getUserProfileSuccess */])(result));
  }
}
// EXTERNAL MODULE: ./src/redux/types/user/index.tsx
var types_user = __webpack_require__("X6M4");

// CONCATENATED MODULE: ./src/redux/sagas/user/index.ts




function* userSaga() {
  yield Object(effects_["all"])([Object(effects_["takeLatest"])(types_user["c" /* UPDATE_USER_PROFILE */], updateUserProfileSaga), Object(effects_["takeLatest"])(types_user["a" /* GET_USER_PROFILE */], getUserProfileSaga)]);
}
// CONCATENATED MODULE: ./src/redux/types/workLocation/index.ts
const GET_ALL_WORK_LOCATION = "GET_ALL_WORK_LOCATION";
const GET_ALL_WORK_LOCATION_SUCCESS = "GET_ALL_WORK_LOCATION_SUCCESS";
const GET_WORK_LOCATION_BY_COMPANY = "GET_WORK_LOCATION_BY_COMPANY";
const GET_WORK_LOCATION_BY_COMPANY_SUCCESS = "GET_WORK_LOCATION_BY_COMPANY_SUCCESS";
const CREATE_WORK_LOCATION = "CREATE_WORK_LOCATION";
const DELETE_WORK_LOCATION = "DELETE_WORK_LOCATION";
const UPDATE_WORK_LOCATION = "UPDATE_WORK_LOCATION";
// CONCATENATED MODULE: ./src/redux/actions/workLocation/index.ts

const getWorkLocation = () => ({
  type: GET_ALL_WORK_LOCATION
});
const getWorkLocationSuccess = payload => ({
  type: GET_ALL_WORK_LOCATION_SUCCESS,
  payload
});
const getWorkLocationByCompany = payload => ({
  type: GET_WORK_LOCATION_BY_COMPANY,
  payload
});
const getWorkLocationByCompanySuccess = payload => ({
  type: GET_WORK_LOCATION_BY_COMPANY_SUCCESS,
  payload
});
const createWorkLocation = payload => ({
  type: CREATE_WORK_LOCATION,
  payload
});
const deleteWorkLocation = payload => ({
  type: DELETE_WORK_LOCATION,
  payload
});
const updateWorkLocation = payload => ({
  type: UPDATE_WORK_LOCATION,
  payload
});
// CONCATENATED MODULE: ./src/services/workLocation/get.ts


const get_GET_ALL_WORK_LOCATION = external_apollo_boost_["gql"]`
  query Query {
    getAllWorkLocation {
      results {
        _id
        location
        province {
          name
        }
      }
      totalCount
    }
  }
`;
const getAllWorkLocation = async variables => {
  const response = await Object(api["b" /* graphQLCommon */])(get_GET_ALL_WORK_LOCATION, {});
  return response;
};
const get_GET_WORK_LOCATION_BY_COMPANY = external_apollo_boost_["gql"]`
  query Query($companyId: String) {
    getWorkLocationByCompany(companyId: $companyId) {
      results {
        company {
          _id
          name
        }
        _id
        name
        province {
          name
          _id
        }
        location
      }
      totalCount
    }
  }
`;
const get_getWorkLocationByCompany = async (variables) => {
  const response = await Object(api["b" /* graphQLCommon */])(get_GET_WORK_LOCATION_BY_COMPANY, variables);
  return response;
};
const get_CREATE_WORK_LOCATION = external_apollo_boost_["gql"]`
  mutation CreateWorkLocationMutation(
    $workLocationInput: WorkLocationCreateInput!
  ) {
    createWorkLocation(workLocationInput: $workLocationInput) {
      _id
      name
    }
  }
`;
const get_createWorkLocation = async variables => {
  const response = await Object(api["b" /* graphQLCommon */])(get_CREATE_WORK_LOCATION, variables);
  return response;
};
const get_DELETE_WORK_LOCATION = external_apollo_boost_["gql"]`
  mutation DeleteWorkLocationMutation($id: String!) {
    deleteWorkLocation(id: $id)
  }
`;
const get_deleteWorkLocation = async variables => {
  const response = await Object(api["b" /* graphQLCommon */])(get_DELETE_WORK_LOCATION, variables);
  return response;
};
const get_UPDATE_WORK_LOCATION = external_apollo_boost_["gql"]`
  mutation UpdateWorkLocationMutation(
    $id: String!
    $workLocationInput: WorkLocationUpdateInput!
  ) {
    updateWorkLocation(id: $id, workLocationInput: $workLocationInput) {
      _id
      name
    }
  }
`;
const get_updateWorkLocation = async variables => {
  const response = await Object(api["b" /* graphQLCommon */])(get_UPDATE_WORK_LOCATION, variables);
  return response;
};
// CONCATENATED MODULE: ./src/services/workLocation/index.ts

// CONCATENATED MODULE: ./src/redux/sagas/workLocation/get.ts




function* get_getWorkLocation(payload) {
  const variables = payload.payload;
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(true));
  const response = yield Object(effects_["call"])(getAllWorkLocation, variables);
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(false));
  const {
    getAllWorkLocation: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (result) {
    yield Object(effects_["put"])(getWorkLocationSuccess(result));
  }
}
function* workLocation_get_getWorkLocationByCompany(payload) {
  const variables = payload.payload;
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(true));
  const response = yield Object(effects_["call"])(get_getWorkLocationByCompany, variables);
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(false));
  const {
    getWorkLocationByCompany: results
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (results) {
    yield Object(effects_["put"])(getWorkLocationByCompanySuccess(results));
  }
}
function* workLocation_get_createWorkLocation(payload) {
  const variables = payload.payload;
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(true));
  const response = yield Object(effects_["call"])(get_createWorkLocation, variables);
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(true));
  const {
    createWorkLocation: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (result) {
    yield Object(effects_["put"])(Object(common["a" /* actionSuccess */])());
  }
}
function* workLocation_get_deleteWorkLocation(payload) {
  const variables = payload.payload;
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(true));
  const response = yield Object(effects_["call"])(get_deleteWorkLocation, variables);
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(true));
  const {
    deleteWorkLocation: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (result) {
    yield Object(effects_["put"])(Object(common["a" /* actionSuccess */])());
  }
}
function* workLocation_get_updateWorkLocation(payload) {
  const variables = payload.payload;
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(true));
  const response = yield Object(effects_["call"])(get_updateWorkLocation, variables);
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(true));
  const {
    updateWorkLocation: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (result) {
    yield Object(effects_["put"])(Object(common["a" /* actionSuccess */])());
  }
}
// CONCATENATED MODULE: ./src/redux/sagas/workLocation/index.ts



function* workLocationSaga() {
  yield Object(effects_["all"])([Object(effects_["takeLatest"])(GET_ALL_WORK_LOCATION, get_getWorkLocation), Object(effects_["takeLatest"])(GET_WORK_LOCATION_BY_COMPANY, workLocation_get_getWorkLocationByCompany), Object(effects_["takeLatest"])(CREATE_WORK_LOCATION, workLocation_get_createWorkLocation), Object(effects_["takeLatest"])(DELETE_WORK_LOCATION, workLocation_get_deleteWorkLocation), Object(effects_["takeLatest"])(UPDATE_WORK_LOCATION, workLocation_get_updateWorkLocation)]);
}
// EXTERNAL MODULE: ./src/redux/actions/job/index.ts
var job = __webpack_require__("nIqT");

// CONCATENATED MODULE: ./src/services/job/get.ts


const GET_ALL_JOB_TYPE = external_apollo_boost_["gql"]`
  query($filterJobType: FilterJobType, $page: Int, $size: Int) {
    getAllJobType(filterJobType: $filterJobType, page: $page, size: $size) {
      totalCount
      results {
        _id
        name
        slug
      }
    }
  }
`;
const getAllJobType = async variables => {
  const response = await Object(api["b" /* graphQLCommon */])(GET_ALL_JOB_TYPE, variables);
  return response;
};
const GET_ALL_JOB_LEVEL = external_apollo_boost_["gql"]`
  query {
    getAllJobLevel {
      totalCount
      results {
        _id
        name
        slug
      }
    }
  }
`;
const getAllJobLevel = async variables => {
  const response = await Object(api["b" /* graphQLCommon */])(GET_ALL_JOB_LEVEL, variables);
  return response;
};
const GET_ALL_LEVEL_PRICE = external_apollo_boost_["gql"]`
  query($filterLevelPrice: FilterLevelPrice, $page: Int, $size: Int) {
    filterLevelPrice(
      filterLevelPrice: $filterLevelPrice
      page: $page
      size: $size
    ) {
      totalCount
      results {
        _id
        displayName
        priceFrom
        priceTo
        slug
        customSlug
      }
    }
  }
`;
const getAllLevelPrice = async variables => {
  const response = await Object(api["b" /* graphQLCommon */])(GET_ALL_LEVEL_PRICE, variables);
  return response;
};
// CONCATENATED MODULE: ./src/services/job/index.ts

// CONCATENATED MODULE: ./src/redux/sagas/job/get.ts




function* getAllJobTypeSaga(payload) {
  const variables = payload.payload;
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(true));
  const response = yield Object(effects_["call"])(getAllJobType, variables);
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(false));
  const {
    getAllJobType: results
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (results) {
    yield Object(effects_["put"])(Object(job["d" /* getAllJobTypeSuccess */])(results));
  }
}
function* getAllJobLevelSaga(payload) {
  const variables = payload.payload;
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(true));
  const response = yield Object(effects_["call"])(getAllJobLevel, variables);
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(false));
  const {
    getAllJobLevel: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (result) {
    yield Object(effects_["put"])(Object(job["b" /* getAllJobLevelSuccess */])(result));
  }
}
function* getAllLevelPriceSaga(payload) {
  const variables = payload.payload;
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(true));
  const response = yield Object(effects_["call"])(getAllLevelPrice, variables);
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(false));
  const {
    filterLevelPrice: results
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (results) {
    yield Object(effects_["put"])(Object(job["f" /* getAllLevelPriceSuccess */])(results));
  }
}
// EXTERNAL MODULE: ./src/redux/types/job/index.ts
var types_job = __webpack_require__("aOmp");

// CONCATENATED MODULE: ./src/redux/sagas/job/index.ts



function* jobSaga() {
  yield Object(effects_["all"])([Object(effects_["takeLatest"])(types_job["e" /* GET_ALL_JOB_TYPE */], getAllJobTypeSaga), Object(effects_["takeLatest"])(types_job["a" /* GET_ALL_JOB_LEVEL */], getAllJobLevelSaga), Object(effects_["takeLatest"])(types_job["g" /* GET_ALL_LEVEL_PRICE */], getAllLevelPriceSaga)]);
}
// EXTERNAL MODULE: ./src/redux/types/benefit/index.ts
var benefit = __webpack_require__("tCzn");

// EXTERNAL MODULE: ./src/redux/actions/benefit/index.ts
var actions_benefit = __webpack_require__("WORP");

// CONCATENATED MODULE: ./src/services/benefit/get.ts


const GET_ALL_BENEFIT = external_apollo_boost_["gql"]`
  query Query($filterBenefit: FilterBenefit, $page: Int, $size: Int) {
    getAllBenefit(filterBenefit: $filterBenefit, page: $page, size: $size) {
      results {
        _id
        icon {
          default
          medium
          small
        }
        name
        description
        keywords
      }
      totalCount
    }
  }
`;
const getAllBenefit = async variables => {
  const response = await Object(api["b" /* graphQLCommon */])(GET_ALL_BENEFIT, variables);
  return response;
};
// CONCATENATED MODULE: ./src/services/benefit/index.ts

// CONCATENATED MODULE: ./src/redux/sagas/benefit/get.ts




function* get_getAllBenefit(payload) {
  const variables = payload.payload;
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(true));
  const response = yield Object(effects_["call"])(getAllBenefit, variables);
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(false));
  const {
    getAllBenefit: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (result) {
    yield Object(effects_["put"])(Object(actions_benefit["b" /* getAllBenefitSuccess */])(result));
  }
}
// CONCATENATED MODULE: ./src/redux/sagas/benefit/index.ts



function* benefitSaga() {
  yield Object(effects_["all"])([Object(effects_["takeLatest"])(benefit["a" /* GET_ALL_BENEFIT */], get_getAllBenefit)]);
}
// CONCATENATED MODULE: ./src/redux/types/tag/index.ts
const GET_ALL_TAG = "GET_ALL_TAG";
const GET_ALL_TAG_SUCCESS = "GET_ALL_TAG_SUCCESS";
// CONCATENATED MODULE: ./src/services/tag/get.ts


const get_GET_ALL_TAG = external_apollo_boost_["gql"]`
  query Query($filterTag: FilterTag, $size: Int, $page: Int) {
    getAllTag(filterTag: $filterTag, size: $size, page: $page) {
      results {
        _id
        name
      }
      totalCount
    }
  }
`;
const getAllTag = async variables => {
  const response = await Object(api["b" /* graphQLCommon */])(get_GET_ALL_TAG, variables);
  return response;
};
// CONCATENATED MODULE: ./src/services/tag/index.ts

// CONCATENATED MODULE: ./src/redux/actions/tag/index.ts

const tag_getAllTag = payload => ({
  type: GET_ALL_TAG,
  payload
});
const getAllTagSuccess = payload => ({
  type: GET_ALL_TAG_SUCCESS,
  payload
});
// CONCATENATED MODULE: ./src/redux/sagas/tag/get.ts




function* get_getAllTag(payload) {
  const variables = payload.payload;
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(true));
  const response = yield Object(effects_["call"])(getAllTag, variables);
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(true));
  const {
    getAllTag: result
  } = response.data || {};

  if (result) {
    yield Object(effects_["put"])(getAllTagSuccess(result));
  }
}
// CONCATENATED MODULE: ./src/redux/sagas/tag/index.ts



function* getAllTagSaga() {
  yield Object(effects_["all"])([Object(effects_["takeLatest"])(GET_ALL_TAG, get_getAllTag)]);
}
// EXTERNAL MODULE: ./src/redux/types/rating/index.ts
var rating = __webpack_require__("fvPt");

// CONCATENATED MODULE: ./src/services/rating/get.ts


const GET_RATING_BY_USER_ID = external_apollo_boost_["gql"]`
  query($userId: String!) {
    getRatingByUser(userId: $userId) {
      _id
      user {
        _id
        displayName
      }
      rate
    }
  }
`;
const getRatingByUserId = async variables => {
  const response = await Object(api["b" /* graphQLCommon */])(GET_RATING_BY_USER_ID, variables);
  return response;
};
// CONCATENATED MODULE: ./src/services/rating/index.ts

// EXTERNAL MODULE: ./src/redux/actions/rating/index.ts
var actions_rating = __webpack_require__("O5bM");

// CONCATENATED MODULE: ./src/redux/sagas/rating/get.ts



function* getRatingByUserIdSaga(payload) {
  const variables = payload.payload;
  const response = yield Object(effects_["call"])(getRatingByUserId, variables);
  const {
    getRatingByUser: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (result) {
    yield Object(effects_["put"])(Object(actions_rating["b" /* getRatingByUserIdSuccess */])(result));
  }
}
// CONCATENATED MODULE: ./src/redux/sagas/rating/index.ts



function* ratingSaga() {
  yield Object(effects_["all"])([Object(effects_["takeLatest"])(rating["a" /* GET_RATING_BY_USER_ID */], getRatingByUserIdSaga)]);
}
// EXTERNAL MODULE: external "@redux-saga/core/effects"
var core_effects_ = __webpack_require__("Z0di");

// EXTERNAL MODULE: ./src/redux/types/requestReview/index.ts
var requestReview = __webpack_require__("oJ6/");

// CONCATENATED MODULE: ./src/services/requestReview/index.ts


const GET_ALL_REQUEST_REVIEW = external_apollo_boost_["gql"]`
  query($filterRequestReview: FilterRequestReview, $page: Int, $size: Int) {
    getAllRequestReview(
      filterRequestReview: $filterRequestReview
      page: $page
      size: $size
    ) {
      results {
        _id
        candidate {
          _id
          email
        }
        employer {
          company {
            _id
            name
            career {
              name
            }
            location
            logo {
              default
              small
              medium
            }
          }
          email
        }
        status
        evaluate {
          answer1 {
            name
            point
          }
          answer2 {
            name
            point
          }
          answer3 {
            name
            point
          }
          answer4 {
            name
            point
          }
          answer5 {
            name
            point
          }
          answer6 {
            name
            point
          }
          answer7 {
            name
            point
          }
          answer8 {
            name
            point
          }
          answer9 {
            name
            point
          }
          answer10 {
            name
            point
          }
          avgPoint
        }
      }
      totalCount
    }
  }
`;
const getAllRequestReview = async variable => {
  const response = await Object(api["b" /* graphQLCommon */])(GET_ALL_REQUEST_REVIEW, variable);
  return response;
};
const GET_EVALUATE_BY_USER = external_apollo_boost_["gql"]`
  query($userId: String!) {
    getEvaluateByUser(userId: $userId) {
      _id
      evaluator {
        company {
          name
          career {
            name
          }
          location
          logo {
            default
            small
            medium
          }
        }
      }
      answer1 {
        name
        point
      }
      answer2 {
        name
        point
      }
      answer3 {
        name
        point
      }
      answer4 {
        name
        point
      }
      answer5 {
        name
        point
      }
      answer6 {
        name
        point
      }
      answer7 {
        name
        point
      }
      answer8 {
        name
        point
      }
      answer9 {
        name
        point
      }
      answer10 {
        name
        point
      }
      avgPoint
    }
  }
`;
const getEvaluateByUser = async variable => {
  const response = await Object(api["b" /* graphQLCommon */])(GET_EVALUATE_BY_USER, variable);
  return response;
};
const CREATE_REQUEST_REVIEW = external_apollo_boost_["gql"]`
  mutation($createRequestReviewInput: CreateRequestReviewInput) {
    createRequestReview(createRequestReviewInput: $createRequestReviewInput) {
      _id
    }
  }
`;
const createRequestReview = async (variable) => {
  const response = await Object(api["b" /* graphQLCommon */])(CREATE_REQUEST_REVIEW, variable);
  return response;
};
// EXTERNAL MODULE: ./src/redux/actions/requestReview/index.ts
var actions_requestReview = __webpack_require__("YKVe");

// CONCATENATED MODULE: ./src/redux/sagas/requestReview/get.ts





function* getAllReviewRequest(payload) {
  const variables = payload.payload;
  const response = yield Object(core_effects_["call"])(getAllRequestReview, variables);
  const {
    getAllRequestReview: results
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (results) {
    yield Object(core_effects_["put"])(Object(actions_requestReview["c" /* getAllRequestReviewSuccess */])(results));
  }
}
function* getEvaluateByUserSaga(payload) {
  const variables = payload.payload;
  const response = yield Object(core_effects_["call"])(getEvaluateByUser, variables);
  const {
    getEvaluateByUser: results
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (results) {
    yield Object(core_effects_["put"])(Object(actions_requestReview["e" /* getEvaluateByUserSuccess */])(results));
  }
}
function* createRequestReviewSaga(payload) {
  const variables = payload.payload;
  const response = yield Object(core_effects_["call"])(createRequestReview, variables);
  const {
    createRequestReview: results
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (results) {
    yield Object(core_effects_["put"])(Object(common["a" /* actionSuccess */])());
    Object(ToastNotification["b" /* showNotification */])({
      type: "success",
      title: "Thông báo",
      message: "Yêu cầu đánh giá thành công"
    });
  }
}
// CONCATENATED MODULE: ./src/redux/sagas/requestReview/index.ts



function* requestReview_requestReview() {
  yield Object(core_effects_["all"])([Object(core_effects_["takeLatest"])(requestReview["b" /* GET_ALL_REQUEST_REVIEW */], getAllReviewRequest), Object(core_effects_["takeLatest"])(requestReview["d" /* GET_EVALUATE_BY_USER */], getEvaluateByUserSaga), Object(core_effects_["takeLatest"])(requestReview["a" /* CREATE_REQUEST_REVIEW */], createRequestReviewSaga)]);
}
// EXTERNAL MODULE: ./src/redux/types/evaluate/index.ts
var evaluate = __webpack_require__("RlGo");

// CONCATENATED MODULE: ./src/services/evaluate/get.ts


const GET_EVALUATE_BY_USER_ID = external_apollo_boost_["gql"]`
  query($userId: String!) {
    getEvaluateByUser(userId: $userId) {
      _id
      user {
        email
      }
      evaluator {
        email
      }
      avgPoint
    }
  }
`;
const getEvaluateByUserId = async variables => {
  const response = await Object(api["b" /* graphQLCommon */])(GET_EVALUATE_BY_USER_ID, variables);
  return response;
};
// CONCATENATED MODULE: ./src/services/evaluate/index.ts

// EXTERNAL MODULE: ./src/redux/actions/evaluate/index.ts
var actions_evaluate = __webpack_require__("nLlu");

// CONCATENATED MODULE: ./src/redux/sagas/evaluate/get.ts



function* getEvaluateByUserIdSaga(payload) {
  const variables = payload.payload;
  const response = yield Object(effects_["call"])(getEvaluateByUserId, variables);
  const {
    getEvaluateByUser: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (result) {
    yield Object(effects_["put"])(Object(actions_evaluate["b" /* getEvaluateByUserIdSuccess */])(result));
  }
}
// CONCATENATED MODULE: ./src/redux/sagas/evaluate/index.ts



function* evaluateSaga() {
  yield Object(effects_["all"])([Object(effects_["takeLatest"])(evaluate["a" /* GET_EVALUATE_BY_USER_ID */], getEvaluateByUserIdSaga)]);
}
// EXTERNAL MODULE: ./src/redux/types/notification/index.ts
var notification = __webpack_require__("C4hx");

// CONCATENATED MODULE: ./src/services/notification/index.tsx


const GET_NOTIFICATION = external_apollo_boost_["gql"]`
  query($userId: String!) {
    getNotifyByUser(userId: $userId) {
      _id
      name
      user {
        _id
        displayName
      }
      company {
        _id
        name
      }
      description
      createdAt
      seen
      scheduleInterview {
        _id
        positionInterview
        scheduleType
        scheduleTime
        scheduleLocation
        interviewerName
        interviewerPhone
        interviewerEmail
        receiver {
          _id
          displayName
        }
        company {
          _id
          name
        }
        recruitment {
          _id
        }
        isConfirmFromReceiver
      }
      invitationApply {
        _id
        positionApply
        address
        receiver {
          _id
          displayName
        }
        sender {
          _id
          displayName
        }
        senderName
        senderPhone
        senderEmail
        recruitment {
          _id
          name
        }
        company {
          _id
          name
        }
        isConfirmFromReceiver
      }
    }
  }
`;
const getNotificationByUser = async (variables) => {
  const result = await Object(api["b" /* graphQLCommon */])(GET_NOTIFICATION, variables);
  return result;
};
const SET_SEEN_FOR_NOTIFY = external_apollo_boost_["gql"]`
  mutation($userId: String!) {
    setSeenForNotify(userId: $userId)
  }
`;
const setSeenForNotify = async variables => {
  const result = await Object(api["b" /* graphQLCommon */])(SET_SEEN_FOR_NOTIFY, variables);
  return result;
};
const GET_NOTIFICATION_SETTING = external_apollo_boost_["gql"]`
  query($filterNotifySetting: FilterNotifySetting) {
    getAllNotifySetting(filterNotifySetting: $filterNotifySetting) {
      results {
        _id
        name
        description
        createdAt
        permission
      }
    }
  }
`;
const getNotificationSetting = async (variables) => {
  const result = await Object(api["b" /* graphQLCommon */])(GET_NOTIFICATION_SETTING, variables);
  return result;
};
const GET_NOTIFICATION_SETTING_BY_USER = external_apollo_boost_["gql"]`
  query($id: String!) {
    getNotifySettingByUser(id: $id) {
      _id
      name
      description
      createdAt
      permission
    }
  }
`;
const getNotifySettingByUser = async (variables) => {
  const result = await Object(api["b" /* graphQLCommon */])(GET_NOTIFICATION_SETTING_BY_USER, variables);
  return result;
};
const CREATE_NOTIFY_SETTING = external_apollo_boost_["gql"]`
  mutation($notifySettingInput: NotifySettingInput!) {
    createNotify(notifySettingInput: $notifySettingInput) {
      _id
      name
      user {
        _id
        displayName
      }
      company {
        _id
        name
      }
      seen
      description
      noticeExpiration
      createdAt
      updatedAt
    }
  }
`;
const createNotifySetting = async variables => {
  const result = await Object(api["b" /* graphQLCommon */])(CREATE_NOTIFY_SETTING, variables);
  return result;
};
const CREATE_NOTIFY = external_apollo_boost_["gql"]`
  mutation($notifyCreateInput: NotifyCreateInput!) {
    createNotify(notifyCreateInput: $notifyCreateInput) {
      _id
      name
      user {
        _id
        displayName
      }
      company {
        _id
        name
      }
      seen
      description
      noticeExpiration
      createdAt
      updatedAt
    }
  }
`;
const createNotify = async variables => {
  const result = await Object(api["b" /* graphQLCommon */])(CREATE_NOTIFY, variables);
  return result;
};
// EXTERNAL MODULE: ./src/redux/actions/notification/index.ts
var actions_notification = __webpack_require__("jAoK");

// CONCATENATED MODULE: ./src/redux/sagas/notifications/notifications.ts




function* getNotifications(payload) {
  const variables = payload.payload;
  const response = yield Object(core_effects_["call"])(getNotificationByUser, variables);
  const {
    getNotifyByUser: results
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (results) {
    yield Object(core_effects_["put"])(Object(actions_notification["c" /* getNotificationsByUserSuccess */])(results));
  }
}
function* notifications_setSeenForNotify(payload) {
  const variables = payload.payload;
  const response = yield Object(core_effects_["call"])(setSeenForNotify, variables);
  const {
    setSeenForNotify: results
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (results) {}
}
function* getNotificationsSetting(payload) {
  const variables = payload.payload;
  const response = yield Object(core_effects_["call"])(getNotificationSetting, variables);
  const {
    getAllNotifySetting: results
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (results) {
    yield Object(core_effects_["put"])(Object(actions_notification["f" /* getNotificationsSettingSuccess */])(results));
  }
}
function* getNotificationsSettingByUser(payload) {
  const variables = payload.payload;
  const response = yield Object(core_effects_["call"])(getNotifySettingByUser, variables);
  const {
    getNotifySettingByUser: results
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (results) {
    yield Object(core_effects_["put"])(Object(actions_notification["e" /* getNotificationsSettingByUserSuccess */])(results));
  }
}
function* notifications_createNotifySetting(payload) {
  const variables = payload.payload;
  const response = yield Object(core_effects_["call"])(createNotifySetting, variables);
  const {
    createNotifySetting: results
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (results) {
    yield Object(core_effects_["put"])(Object(common["a" /* actionSuccess */])());
  }
}
function* notifications_createNotify(payload) {
  const variables = payload.payload;
  const response = yield Object(core_effects_["call"])(createNotify, variables);
  const {
    createNotify: results
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (results) {
    yield Object(core_effects_["put"])(Object(common["a" /* actionSuccess */])());
  }
}
// CONCATENATED MODULE: ./src/redux/sagas/notifications/index.ts



function* notify() {
  yield Object(core_effects_["all"])([Object(core_effects_["takeLatest"])(notification["c" /* GET_NOTIFICATIONS_BY_USER */], getNotifications), Object(core_effects_["takeLatest"])(notification["i" /* SET_SEEN_FOR_NOTIFY */], notifications_setSeenForNotify), Object(core_effects_["takeLatest"])(notification["e" /* GET_NOTIFICATIONS_SETTING */], getNotificationsSetting), Object(core_effects_["takeLatest"])(notification["f" /* GET_NOTIFICATIONS_SETTING_BY_USER */], getNotificationsSettingByUser), Object(core_effects_["takeLatest"])(notification["b" /* CREATE_NOTIFY_SETTING */], notifications_createNotifySetting), Object(core_effects_["takeLatest"])(notification["a" /* CREATE_NOTIFY */], notifications_createNotify)]);
}
// EXTERNAL MODULE: ./src/redux/types/scheduleInterview/index.ts
var scheduleInterview = __webpack_require__("uncI");

// CONCATENATED MODULE: ./src/services/scheduleInterview/index.tsx


const schedule = `
    _id
    positionInterview
    scheduleType
    scheduleTime
    scheduleLocation
    interviewerName
    interviewerPhone
    interviewerEmail
    receiver{
      _id
      displayName
    }
    company{
      _id
      name
    }
    recruitment{
      _id
    }
    isConfirmFromReceiver
    status
`;
const GET_ALL_SCHEDULE_INTERVIEW = external_apollo_boost_["gql"]`
    query($filterScheduleInterview: FilterScheduleInterview, $page: Int, $size: Int) {
      getAllScheduleInterview(filterScheduleInterview: $filterScheduleInterview, page:$page, size:$size){
        totalCount
        results{
         ${schedule}
        }
      }
    }
`;
const getAllScheduleInterview = async (variables) => {
  const result = await Object(api["b" /* graphQLCommon */])(GET_ALL_SCHEDULE_INTERVIEW, variables);
  return result;
};
const GET_SCHEDULE_INTERVIEW_BY_ID = external_apollo_boost_["gql"]`
    query($id: String!) {
        getScheduleInterviewById(id: $id) {
          ${schedule}
        }
    }
`;
const getScheduleInterviewById = async (variables) => {
  const result = await Object(api["b" /* graphQLCommon */])(GET_SCHEDULE_INTERVIEW_BY_ID, variables);
  return result;
};
const UPDATE_SCHEDULE_INTERVIEW = external_apollo_boost_["gql"]`
  mutation($id: String!, $input: ScheduleInterviewInput!) {
    updateScheduleInterview(id: $id, input: $input) {
      _id
    }
  }
`;
const updateScheduleInterview = async (variables) => {
  const response = await Object(api["b" /* graphQLCommon */])(UPDATE_SCHEDULE_INTERVIEW, variables);
  return response;
};
const CREATE_SCHEDULE_INTERVIEW = external_apollo_boost_["gql"]`
  mutation($input: ScheduleInterviewInput!) {
    createScheduleInterview(input: $input) {
      _id
    }
  }
`;
const createScheduleInterview = async (variables) => {
  const response = await Object(api["b" /* graphQLCommon */])(CREATE_SCHEDULE_INTERVIEW, variables);
  return response;
};
const CONFIRM_THE_SCHEDULE_INTERVIEW = external_apollo_boost_["gql"]`
  mutation($id: String!) {
    confirmTheScheduleInterview(id: $id)
  }
`;
const confirmTheScheduleInterview = async (variables) => {
  const response = await Object(api["b" /* graphQLCommon */])(CONFIRM_THE_SCHEDULE_INTERVIEW, variables);
  return response;
};
const CANCEL_THE_SCHEDULE_INTERVIEW = external_apollo_boost_["gql"]`
  mutation($id: String!) {
    cancelTheScheduleInterview(id: $id)
  }
`;
const cancelTheScheduleInterview = async (variables) => {
  const response = await Object(api["b" /* graphQLCommon */])(CANCEL_THE_SCHEDULE_INTERVIEW, variables);
  return response;
};
// EXTERNAL MODULE: ./src/redux/actions/scheduleInterview/index.ts + 1 modules
var actions_scheduleInterview = __webpack_require__("ciWM");

// CONCATENATED MODULE: ./src/redux/sagas/scheduleInterview/scheduleInterview.ts





function* getAllScheduleInterviewSaga(payload) {
  const variables = payload.payload;
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(true));
  const response = yield Object(effects_["call"])(getAllScheduleInterview, variables);
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(false));
  const {
    getAllScheduleInterview: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (result) {
    yield Object(effects_["put"])(Object(actions_scheduleInterview["d" /* getAllScheduleInterviewSuccess */])(result));
  }
}
function* scheduleInterview_getScheduleInterviewById(payload) {
  const variables = payload.payload;
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(true));
  const response = yield Object(effects_["call"])(getScheduleInterviewById, variables);
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(false));
  const {
    getScheduleInterviewById: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (result) {
    yield Object(effects_["put"])(Object(actions_scheduleInterview["e" /* getScheduleInterviewByIdSuccess */])(result));
  }
}
function* scheduleInterview_updateScheduleInterview(payload) {
  const variables = payload.payload;
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(true));
  const response = yield Object(effects_["call"])(updateScheduleInterview, variables);
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(false));
  const {
    updateScheduleInterview: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (result) {
    yield Object(effects_["put"])(Object(common["a" /* actionSuccess */])());
    Object(ToastNotification["b" /* showNotification */])({
      type: "success",
      title: "Thông báo",
      message: "Cập nhật lịch phỏng vấn thành công"
    });
  } else {
    Object(ToastNotification["b" /* showNotification */])({
      type: "error",
      title: "Thông báo",
      message: "Cập nhật thất bại"
    });
  }
}
function* scheduleInterview_createScheduleInterview(payload) {
  const variables = payload.payload;
  const response = yield Object(effects_["call"])(createScheduleInterview, variables);
  const {
    createScheduleInterview: results
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (results) {
    yield Object(effects_["put"])(Object(common["a" /* actionSuccess */])());
    Object(ToastNotification["b" /* showNotification */])({
      type: "success",
      title: "Thông báo",
      message: "Tạo lịch phỏng vấn thành công"
    });
  } else {
    Object(ToastNotification["b" /* showNotification */])({
      type: "error",
      title: "Thông báo",
      message: "Tạo lịch phỏng vấn thất bại"
    });
  }
}
function* scheduleInterview_confirmTheScheduleInterview(payload) {
  const variables = payload.payload;
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(true));
  const response = yield Object(effects_["call"])(confirmTheScheduleInterview, variables);
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(false));
  const {
    confirmTheScheduleInterview: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (result) {
    yield Object(effects_["put"])(Object(common["a" /* actionSuccess */])());
    Object(ToastNotification["b" /* showNotification */])({
      type: "success",
      title: "Thông báo",
      message: "Xác nhận tham gia phỏng vấn thành công!"
    });
  }
}
function* scheduleInterview_cancelTheScheduleInterview(payload) {
  const variables = payload.payload;
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(true));
  const response = yield Object(effects_["call"])(cancelTheScheduleInterview, variables);
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(false));
  const {
    cancelTheScheduleInterview: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (result) {
    yield Object(effects_["put"])(Object(common["a" /* actionSuccess */])());
    Object(ToastNotification["b" /* showNotification */])({
      type: "success",
      title: "Thông báo",
      message: "Bạn đã từ chối lịch mời tham gia phỏng vấn!"
    });
  }
}
// CONCATENATED MODULE: ./src/redux/sagas/scheduleInterview/index.ts



function* scheduleInterview_scheduleInterview() {
  yield Object(core_effects_["all"])([Object(core_effects_["takeLatest"])(scheduleInterview["d" /* GET_ALL_SCHEDULE_INTERVIEW */], getAllScheduleInterviewSaga), Object(core_effects_["takeLatest"])(scheduleInterview["f" /* GET_SCHEDULE_INTERVIEW_BY_ID */], scheduleInterview_getScheduleInterviewById), Object(core_effects_["takeLatest"])(scheduleInterview["h" /* UPDATE_SCHEDULE_INTERVIEW */], scheduleInterview_updateScheduleInterview), Object(core_effects_["takeLatest"])(scheduleInterview["c" /* CREATE_SCHEDULE_INTERVIEW */], scheduleInterview_createScheduleInterview), Object(core_effects_["takeLatest"])(scheduleInterview["b" /* CONFIRM_THE_SCHEDULE_INTERVIEW */], scheduleInterview_confirmTheScheduleInterview), Object(core_effects_["takeLatest"])(scheduleInterview["a" /* CANCEL_THE_SCHEDULE_INTERVIEW */], scheduleInterview_cancelTheScheduleInterview)]);
}
// EXTERNAL MODULE: ./src/redux/types/invitationApply/index.ts
var invitationApply = __webpack_require__("bKVk");

// CONCATENATED MODULE: ./src/services/invitationApply/index.tsx


const invitation = `
    _id
    positionApply
    address
    receiver { 
        _id
        displayName
    }
    sender {
        _id
        displayName
    }
    senderName
    senderPhone
    senderEmail
    company {
        _id
        name
    }
    recruitment {
        _id
        slug
    }
    isConfirmFromReceiver
    status
`;
const GET_ALL_INVITATION_APPLY = external_apollo_boost_["gql"]`
    query($filterInvitationApply: FilterInvitationApply, $page:Int, $size: Int) {
        getAllInvitationApply(filterInvitationApply: $filterInvitationApply, page:$page, size:$size){
            totalCount
            results{
                ${invitation}
            }
        }
    }
`;
const getAllInvitationApply = async (variables) => {
  const result = await Object(api["b" /* graphQLCommon */])(GET_ALL_INVITATION_APPLY, variables);
  return result;
};
const GET_INVITATION_APPLY_BY_ID = external_apollo_boost_["gql"]`
    query($id: String!) {
        getInvitationApplyById(id: $id) {
          ${invitation}
        }
    }
`;
const getInvitationApplyById = async (variables) => {
  const result = await Object(api["b" /* graphQLCommon */])(GET_INVITATION_APPLY_BY_ID, variables);
  return result;
};
const CONFIRM_THE_INVITATION = external_apollo_boost_["gql"]`
  mutation($id: String!) {
    confirmTheInvitation(id: $id)
  }
`;
const confirmTheInvitation = async (variables) => {
  const response = await Object(api["b" /* graphQLCommon */])(CONFIRM_THE_INVITATION, variables);
  return response;
};
// EXTERNAL MODULE: ./src/redux/actions/invitationApply/index.ts + 1 modules
var actions_invitationApply = __webpack_require__("jNw/");

// CONCATENATED MODULE: ./src/redux/sagas/invitationApply/invitationApply.ts





function* getAllInvitationApplySaga(payload) {
  const variables = payload.payload;
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(true));
  const response = yield Object(effects_["call"])(getAllInvitationApply, variables);
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(false));
  const {
    getAllInvitationApply: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (result) {
    yield Object(effects_["put"])(Object(actions_invitationApply["b" /* getAllInvitationApplySuccess */])(result));
  }
}
function* invitationApply_getInvitationApplyById(payload) {
  const variables = payload.payload;
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(true));
  const response = yield Object(effects_["call"])(getInvitationApplyById, variables);
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(false));
  const {
    getInvitationApplyById: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (result) {
    yield Object(effects_["put"])(Object(actions_invitationApply["c" /* getInvitationApplyByIdSuccess */])(result));
  }
}
function* invitationApply_confirmTheInvitation(payload) {
  const variables = payload.payload;
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(true));
  const response = yield Object(effects_["call"])(confirmTheInvitation, variables);
  yield Object(effects_["put"])(Object(common["c" /* setLoading */])(false));
  const {
    confirmTheInvitation: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};

  if (result) {
    yield Object(effects_["put"])(Object(common["a" /* actionSuccess */])());
    Object(ToastNotification["b" /* showNotification */])({
      type: "success",
      title: "Thông báo",
      message: "Xác nhận lời mời ứng tuyển thành công!"
    });
  }
}
// CONCATENATED MODULE: ./src/redux/sagas/invitationApply/index.ts



function* invitationApply_invitationApply() {
  yield Object(core_effects_["all"])([Object(core_effects_["takeLatest"])(invitationApply["b" /* GET_ALL_INVITATION_APPLY */], getAllInvitationApplySaga), Object(core_effects_["takeLatest"])(invitationApply["d" /* GET_INVITATION_APPLY_BY_ID */], invitationApply_getInvitationApplyById)]);
}
// CONCATENATED MODULE: ./src/redux/sagas/index.ts

























function* rootSaga() {
  yield Object(effects_["all"])([authSaga(), contentWebsiteSaga(), staticPagesSaga(), recruitmentSaga(), locationSaga(), adsSaga(), careerCounselingSaga(), companySaga(), blog_companySaga(), categorySaga(), recordSaga(), position(), createContactSage(), userSaga(), workLocationSaga(), jobSaga(), getAllTagSaga(), benefitSaga(), ratingSaga(), requestReview_requestReview(), evaluateSaga(), notify(), scheduleInterview_scheduleInterview(), invitationApply_invitationApply()]);
}
// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");

// EXTERNAL MODULE: external "immer"
var external_immer_ = __webpack_require__("T5ka");
var external_immer_default = /*#__PURE__*/__webpack_require__.n(external_immer_);

// CONCATENATED MODULE: ./src/redux/types/_app/index.tsx
const SET_PERMISSION = "SET_PERMISSION";
const SET_APP_USER = "SET_APP_USER";
// CONCATENATED MODULE: ./src/redux/reducers/_app/index.ts


const _app_initialState = {
  permission: "CANDIDATE"
};

const _appReducer = (state = _app_initialState, action) => external_immer_default()(state, draft => {
  switch (action.type) {
    case SET_PERMISSION:
      draft.permission = action.payload;
      break;
  }
});

/* harmony default export */ var _app = (_appReducer);
// EXTERNAL MODULE: ./src/redux/types/common/index.ts
var types_common = __webpack_require__("7fqt");

// CONCATENATED MODULE: ./src/redux/reducers/common/index.ts


const common_initialState = {
  isSubmitted: false,
  actionSuccess: false,
  isLoading: false,
  isExtendEmployerDrawer: false,
  isOpenNotification: false
};

const reducer = (state = common_initialState, action) => external_immer_default()(state, draft => {
  switch (action.type) {
    case types_common["g" /* SUBMITTED */]:
      draft.isSubmitted = true;
      break;

    case types_common["c" /* RESET_SUBMITTED */]:
      draft.isSubmitted = false;
      break;

    case types_common["a" /* ACTION_SUCCESS */]:
      draft.actionSuccess = true;
      break;

    case types_common["b" /* RESET_ACTION */]:
      draft.actionSuccess = false;
      break;

    case types_common["e" /* SET_LOADING */]:
      draft.isLoading = action.payload;
      break;

    case types_common["d" /* SET_EXTEND_EMPLOYER_DRAWER */]:
      draft.isExtendEmployerDrawer = action.payload;
      break;

    case types_common["f" /* SET_OPEN_NOTIFICATION */]:
      draft.isOpenNotification = action.payload;
      break;
  }
});

/* harmony default export */ var reducers_common = (reducer);
// CONCATENATED MODULE: ./src/redux/reducers/ads/index.ts


const ads_initialState = {
  listAds: [],
  adsByLocation: [],
  listAdsJobPage: [],
  loadingAdsByLocation: true
};

const ads_ads = (state = ads_initialState, action) => external_immer_default()(state, draft => {
  switch (action.type) {
    case ads["b" /* GET_ADS_ALL_SUCCESS */]:
      draft.listAds = action.payload;

    case ads["d" /* GET_ADS_BY_LOCATION_SUCCESS */]:
      draft.adsByLocation = action.payload;
      draft.loadingAdsByLocation = false;
      break;

    case ads["f" /* GET_ADS_JOB_PAGE_SUCCESS */]:
      draft.listAdsJobPage.push(action.payload);
  }
});

/* harmony default export */ var reducers_ads = (ads_ads);
// EXTERNAL MODULE: ./src/common/utils/auth.ts
var utils_auth = __webpack_require__("DATO");

// CONCATENATED MODULE: ./src/redux/reducers/auth/index.ts
/* eslint-disable consistent-return */

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */



const initial = {
  currentUser: null,
  isAuth: null,
  accountInfo: null
};

const auth_auth = (state = initial, action) => external_immer_default()(state, draft => {
  const loginSuccess = () => {
    const payload = action.payload;
    draft.currentUser = payload;
    draft.isAuth = true;
    Object(utils_auth["f" /* setUserCookies */])(payload);
  };

  switch (action.type) {
    case auth["f" /* LOGIN_SUCCESS */]:
      loginSuccess();
      break;

    case auth["d" /* GET_TOKEN_SUCCESS */]:
      loginSuccess();
      break;

    case auth["h" /* REFRESH_TOKEN_SUCCESS */]:
      loginSuccess();
      break;

    case auth["b" /* GET_CURRENT_USER */]:
      const payload = action.payload;
      draft.currentUser = payload;
      draft.isAuth = !!draft.currentUser;
      break;

    case auth["j" /* REMOVE_CURRENT_USER */]:
      draft.currentUser = null;
      draft.isAuth = false;
      Object(utils_auth["e" /* removeUserCookies */])();
      break;

    case auth["n" /* SET_IS_AUTH */]:
      draft.isAuth = action.payload;
      break;

    case auth["m" /* SET_ACCOUNT_INFO */]:
      draft.accountInfo = action.payload;
      break;

    default:
      return draft;
  }
});

/* harmony default export */ var reducers_auth = (auth_auth);
// CONCATENATED MODULE: ./src/redux/reducers/blog/index.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const blog_initialState = {
  allBlog: {
    results: [],
    totalCount: 0,
    loading: true
  },
  blog: null
};

const blog_reducer = (state = blog_initialState, action) => external_immer_default()(state, draft => {
  switch (action.type) {
    case blog["b" /* GET_ALL_BLOG_SUCCESS */]:
      draft.allBlog = _objectSpread(_objectSpread({}, action.payload), {}, {
        loading: false
      });
      break;

    case blog["d" /* GET_BLOG_BY_SLUG_SUCCESS */]:
      draft.blog = action.payload;
      break;

    default:
      break;
  }
});

/* harmony default export */ var reducers_blog = (blog_reducer);
// CONCATENATED MODULE: ./src/redux/reducers/company/index.ts
function company_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function company_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { company_ownKeys(Object(source), true).forEach(function (key) { company_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { company_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function company_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const company_initialState = {
  allCompany: {
    results: [],
    totalCount: 0,
    loading: true
  },
  company: {},
  newestCompanies: {
    results: []
  },
  mostViewCompanies: {
    results: []
  },
  mostAppliedCompanies: {
    results: []
  },
  mostRecruitingCompanies: {
    results: []
  },
  companyDetail: {}
};

const company_reducer = (state = company_initialState, action) => external_immer_default()(state, draft => {
  switch (action.type) {
    case company["b" /* GET_ALL_COMPANY_SUCCESS */]:
      draft.allCompany = company_objectSpread(company_objectSpread({}, action.payload), {}, {
        loading: false
      });
      break;

    case company["f" /* GET_COMPANY_SUCCESS */]:
      draft.company = action.payload;
      break;

    case company["n" /* GET_NEWEST_COMPANY_SUCCESS */]:
      draft.newestCompanies = action.payload;
      break;

    case company["l" /* GET_MOST_VIEW_COMPANY_SUCCESS */]:
      draft.mostViewCompanies = action.payload;
      break;

    case company["h" /* GET_MOST_APPLIED_COMPANY_SUCCESS */]:
      draft.mostAppliedCompanies = action.payload;
      break;

    case company["j" /* GET_MOST_RECRUITING_COMPANY_SUCCESS */]:
      draft.mostRecruitingCompanies = action.payload;
      break;

    case company["e" /* GET_COMPANY_BY_SLUG_SUCCESS */]:
      draft.companyDetail = action.payload;
      break;

    default:
      break;
  }
});

/* harmony default export */ var reducers_company = (company_reducer);
// CONCATENATED MODULE: ./src/redux/reducers/contentWebsite/index.ts


let contentWebsite_initialState = {
  contentWebsite: {},
  seoData: {}
};
/* harmony default export */ var reducers_contentWebsite = ((state = contentWebsite_initialState, actions) => {
  return external_immer_default()(state, draft => {
    switch (actions.type) {
      case contentWebsite["b" /* GET_CONTENT_WEBSITE_SUCCESS */]:
        draft.contentWebsite = actions.payload.results[0];
        break;

      case contentWebsite["d" /* GET_SEO_WEBSITE_SUCCESS */]:
        draft.seoData = actions.payload;
        break;
    }
  });
});
// CONCATENATED MODULE: ./src/redux/reducers/careerCounseling/index.ts


const careerCounseling_initialState = {
  listCarrerCounseling: {
    results: [],
    totalCount: 0
  }
};

const careercounseling = (state = careerCounseling_initialState, action) => external_immer_default()(state, draft => {
  switch (action.type) {
    case GET_ALL_CARRER_COUSELING_SUCCESS:
      draft.listCarrerCounseling = action.payload;
      break;
  }
});

/* harmony default export */ var careerCounseling = (careercounseling);
// CONCATENATED MODULE: ./src/redux/reducers/category/index.ts


const category_initialState = {
  categoryLevel1: {
    totalCount: 0,
    results: []
  },
  categoryLevel2: {
    totalCount: 0,
    results: []
  },
  categorySelected: null
};

const category_reducer = (state = category_initialState, action) => external_immer_default()(state, draft => {
  switch (action.type) {
    case category["c" /* GET_ALL_CATEGORY_1_JOB_SUCCESS */]:
      draft.categoryLevel1 = action.payload;
      break;

    case category["e" /* GET_ALL_CATEGORY_2_JOB_SUCCESS */]:
      draft.categoryLevel2 = action.payload;
      break;

    case category["g" /* SET_CATEGORY_SELECTED */]:
      draft.categorySelected = action.payload;
      break;

    default:
      break;
  }
});

/* harmony default export */ var reducers_category = (category_reducer);
// CONCATENATED MODULE: ./src/redux/reducers/job/index.ts


const job_initialState = {
  allJobType: [],
  allJobLevel: [],
  allJobLevelFilter: [],
  allLevelPrice: [],
  jobLevelSelected: null,
  levelPriceSelected: null,
  jobTypeSelected: null
};

const job_reducer = (state = job_initialState, action) => external_immer_default()(state, draft => {
  switch (action.type) {
    case types_job["f" /* GET_ALL_JOB_TYPE_SUCCESS */]:
      draft.allJobType = action.payload.results;
      break;

    case types_job["d" /* GET_ALL_JOB_LEVEL_SUCCESS */]:
      draft.allJobLevel = action.payload.results;
      break;

    case types_job["c" /* GET_ALL_JOB_LEVEL_FILTER_SUCCESS */]:
      draft.allJobLevelFilter = action.payload.results;
      break;

    case types_job["h" /* GET_ALL_LEVEL_PRICE_SUCCESS */]:
      draft.allLevelPrice = action.payload.results;
      break;

    case types_job["j" /* SET_JOB_TYPE_SELECTED */]:
      draft.jobTypeSelected = action.payload;
      break;

    case types_job["i" /* SET_JOB_LEVEL_SELECTED */]:
      draft.jobLevelSelected = action.payload;
      break;

    case types_job["k" /* SET_LEVEL_PRICE_SELECTED */]:
      draft.levelPriceSelected = action.payload;
      break;

    default:
      break;
  }
});

/* harmony default export */ var reducers_job = (job_reducer);
// CONCATENATED MODULE: ./src/redux/reducers/location/index.ts


const location_initial = {
  provinces: [],
  districts: [],
  wards: [],
  streets: [],
  provinceSelected: null
};

const location_location = (state = location_initial, action) => external_immer_default()(state, draft => {
  switch (action.type) {
    case types_location["d" /* GET_PROVINCE_SUCCESS */]:
      draft.provinces = action.payload;
      break;

    case types_location["b" /* GET_DISTRICTS_SUCCESS */]:
      draft.districts = action.payload.districts;
      break;

    case types_location["h" /* GET_WARDS_SUCCESS */]:
      draft.wards = action.payload.wards;
      break;

    case types_location["f" /* GET_STREETS_BY_PROVINCE_AND_DISTRICT_SUCCESS */]:
      draft.streets = action.payload.streets;
      break;

    case types_location["i" /* SET_PROVINCE_SELECTED */]:
      draft.provinceSelected = action.payload;
      break;

    default:
      break;
  }
});

/* harmony default export */ var reducers_location = (location_location);
// CONCATENATED MODULE: ./src/redux/reducers/position/index.ts


const position_initialState = {
  allPositions: [],
  totalCount: 0
};

const position_reducer = (state = position_initialState, action) => external_immer_default()(state, draft => {
  switch (action.type) {
    case GET_POSITION_SUCCESS:
      draft.allPositions = action.payload.results;
      draft.totalCount = action.payload.totalCount;
      break;

    default:
      break;
  }
});

/* harmony default export */ var reducers_position = (position_reducer);
// CONCATENATED MODULE: ./src/redux/reducers/recruitment/index.ts
function recruitment_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function recruitment_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { recruitment_ownKeys(Object(source), true).forEach(function (key) { recruitment_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { recruitment_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function recruitment_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const recruitment_initialState = {
  allRecruitment: {
    results: [],
    totalCount: 0,
    loading: true
  },
  bestRecruitment: {
    results: [],
    totalCount: 0,
    loading: true
  },
  recruitment: {},
  recruitmentDetail: {},
  mostKeyword: [],
  sortTypeSelected: null
};

const recruitment_reducer = (state = recruitment_initialState, action) => external_immer_default()(state, draft => {
  switch (action.type) {
    case recruitment["c" /* GET_ALL_RECRUITMENT_SUCCESS */]:
      draft.allRecruitment = recruitment_objectSpread(recruitment_objectSpread({}, action.payload), {}, {
        loading: false
      });
      break;

    case recruitment["j" /* GET_RECRUITMENT_BY_ID_SUCCESS */]:
      draft.recruitment = action.payload;
      break;

    case recruitment["l" /* GET_RECRUITMENT_BY_SLUG_SUCCESS */]:
      draft.recruitmentDetail = action.payload;
      break;

    case recruitment["e" /* GET_BEST_RECRUITMENT_SUCCESS */]:
      draft.bestRecruitment = recruitment_objectSpread(recruitment_objectSpread({}, action.payload), {}, {
        loading: false
      });
      break;

    case recruitment["g" /* GET_MOST_KEYWORD_SUCCESS */]:
      draft.mostKeyword = action.payload;
      break;

    case recruitment["r" /* SET_SORT_TYPE_SELECTED */]:
      draft.sortTypeSelected = action.payload;
      break;

    default:
      break;
  }
});

/* harmony default export */ var reducers_recruitment = (recruitment_reducer);
// CONCATENATED MODULE: ./src/redux/reducers/record/index.ts


const record_initialState = {
  record: null
};

const record_reducer = (state = record_initialState, action) => external_immer_default()(state, draft => {
  switch (action.type) {
    case record["c" /* GET_ALL_RECORD_BY_USER_SUCCESS */]:
      draft.record = action.payload;
      break;

    case record["g" /* GET_RECORD_BY_USER_ID_SUCCESS */]:
      draft.record = action.payload;
      break;

    default:
      break;
  }
});

/* harmony default export */ var reducers_record = (record_reducer);
// CONCATENATED MODULE: ./src/redux/reducers/staticPages/index.ts


const staticPages_initialState = {
  allStaticPages: {
    results: [],
    totalCount: 0
  },
  staticPageDetail: null
};

const staticPages_staticPages = (state = staticPages_initialState, action) => external_immer_default()(state, draft => {
  switch (action.type) {
    case types_staticPages["b" /* GET_ALL_STATIC_PAGES_SUCCESS */]:
      draft.allStaticPages = action.payload;
      break;

    case types_staticPages["d" /* GET_STATIC_PAGE_BY_SLUG_SUCCESS */]:
      draft.staticPageDetail = action.payload;
      break;
  }
});

/* harmony default export */ var reducers_staticPages = (staticPages_staticPages);
// CONCATENATED MODULE: ./src/redux/reducers/tag/index.ts


const tag_initialState = {
  allTag: {
    results: [],
    totalCount: 0
  }
};

const tag_reducer = (state = tag_initialState, action) => external_immer_default()(state, draft => {
  switch (action.type) {
    case GET_ALL_TAG_SUCCESS:
      draft.allTag = action.payload;
      break;
  }
});

/* harmony default export */ var tag = (tag_reducer);
// CONCATENATED MODULE: ./src/redux/reducers/user/index.tsx


const user_initial = {
  user: {}
};

const user_location = (state = user_initial, action) => external_immer_default()(state, draft => {
  switch (action.type) {
    case types_user["b" /* GET_USER_PROFILE_SUCCESS */]:
      draft.user = action.payload;
      break;

    default:
      break;
  }
});

/* harmony default export */ var reducers_user = (user_location);
// CONCATENATED MODULE: ./src/redux/reducers/workLocation/index.ts


const workLocation_initialState = {
  allWorkLocation: {
    results: [],
    totalCount: 0
  },
  workLocation: {
    results: [],
    totalCount: 0
  }
};

const workLocation_reducer = (state = workLocation_initialState, action) => external_immer_default()(state, draft => {
  switch (action.type) {
    case GET_ALL_WORK_LOCATION_SUCCESS:
      draft.allWorkLocation = action.payload;
      break;
  }

  switch (action.type) {
    case GET_WORK_LOCATION_BY_COMPANY_SUCCESS:
      draft.workLocation = action.payload;
      break;
  }
});

/* harmony default export */ var workLocation = (workLocation_reducer);
// CONCATENATED MODULE: ./src/redux/reducers/benefit/index.ts


const benefit_initialState = {
  benefitList: {
    results: [],
    totalCount: 0
  },
  benefit: {}
};

const benefit_reducer = (state = benefit_initialState, action) => external_immer_default()(state, draft => {
  switch (action.type) {
    case benefit["b" /* GET_ALL_BENEFIT_SUCCESS */]:
      draft.benefitList = action.payload;
      break;

    default:
      break;
  }
});

/* harmony default export */ var reducers_benefit = (benefit_reducer);
// CONCATENATED MODULE: ./src/redux/reducers/rating/index.ts


const rating_initialState = {
  rating: null
};

const rating_reducer = (state = rating_initialState, action) => external_immer_default()(state, draft => {
  switch (action.type) {
    case rating["b" /* GET_RATING_BY_USER_ID_SUCCESS */]:
      draft.rating = action.payload;
      break;

    default:
      break;
  }
});

/* harmony default export */ var reducers_rating = (rating_reducer);
// CONCATENATED MODULE: ./src/redux/reducers/requestReview/index.ts


const requestReview_initialState = {
  requestReviewList: {
    results: [],
    totalCount: 0
  },
  listEvaluate: []
};

const requestReviewReducer = (state = requestReview_initialState, action) => {
  return external_immer_default()(state, draft => {
    switch (action.type) {
      case requestReview["c" /* GET_ALL_REQUEST_REVIEW_SUCCESS */]:
        draft.requestReviewList = action.payload;
        break;

      case requestReview["e" /* GET_EVALUATE_BY_USER_SUCCESS */]:
        draft.listEvaluate = action.payload;
        break;

      default:
        break;
    }
  });
};

/* harmony default export */ var reducers_requestReview = (requestReviewReducer);
// CONCATENATED MODULE: ./src/redux/reducers/evaluate/index.ts


const evaluate_initialState = {
  evaluateList: []
};

const evaluate_reducer = (state = evaluate_initialState, action) => external_immer_default()(state, draft => {
  switch (action.type) {
    case evaluate["b" /* GET_EVALUATE_BY_USER_ID_SUCCESS */]:
      draft.evaluateList = action.payload;
      break;

    default:
      break;
  }
});

/* harmony default export */ var reducers_evaluate = (evaluate_reducer);
// CONCATENATED MODULE: ./src/redux/reducers/notifications/index.ts
function notifications_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function notifications_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { notifications_ownKeys(Object(source), true).forEach(function (key) { notifications_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { notifications_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function notifications_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const notifications_initialState = {
  notifications: {
    getNotifyByUser: [],
    loading: true
  },
  notificationsSetting: {
    results: [],
    loading: true
  },
  notificationsSettingByUser: {
    results: [],
    loading: true
  }
};

const notifications = (state = notifications_initialState, action) => {
  return external_immer_default()(state, draft => {
    switch (action.type) {
      case notification["d" /* GET_NOTIFICATIONS_BY_USER_SUCCESS */]:
        draft.notifications.getNotifyByUser = action.payload;
        draft.notifications.loading = false;
        break;

      case notification["h" /* GET_NOTIFICATIONS_SETTING_SUCCESS */]:
        draft.notificationsSetting = notifications_objectSpread(notifications_objectSpread({}, action.payload), {}, {
          loading: false
        });
        break;

      case notification["g" /* GET_NOTIFICATIONS_SETTING_BY_USER_SUCCESS */]:
        draft.notificationsSettingByUser = notifications_objectSpread(notifications_objectSpread({}, action.payload), {}, {
          loading: false
        });
        break;

      default:
        break;
    }
  });
};

/* harmony default export */ var reducers_notifications = (notifications);
// CONCATENATED MODULE: ./src/redux/reducers/scheduleInterview/index.ts
function scheduleInterview_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function scheduleInterview_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { scheduleInterview_ownKeys(Object(source), true).forEach(function (key) { scheduleInterview_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { scheduleInterview_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function scheduleInterview_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const scheduleInterview_initialState = {
  allScheduleInterview: {
    results: [],
    totalCount: 0,
    loading: true
  }
};

const scheduleInterview_reducer = (state = scheduleInterview_initialState, action) => external_immer_default()(state, draft => {
  switch (action.type) {
    case scheduleInterview["e" /* GET_ALL_SCHEDULE_INTERVIEW_SUCCESS */]:
      draft.allScheduleInterview = scheduleInterview_objectSpread(scheduleInterview_objectSpread({}, action.payload), {}, {
        loading: false
      });
      break;

    default:
      break;
  }
});

/* harmony default export */ var reducers_scheduleInterview = (scheduleInterview_reducer);
// CONCATENATED MODULE: ./src/redux/reducers/invitationApply/index.ts
function invitationApply_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function invitationApply_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { invitationApply_ownKeys(Object(source), true).forEach(function (key) { invitationApply_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { invitationApply_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function invitationApply_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const invitationApply_initialState = {
  allInvitationApply: {
    results: [],
    totalCount: 0,
    loading: true
  }
};

const invitationApply_reducer = (state = invitationApply_initialState, action) => external_immer_default()(state, draft => {
  switch (action.type) {
    case invitationApply["c" /* GET_ALL_INVITATION_APPLY_SUCCESS */]:
      draft.allInvitationApply = invitationApply_objectSpread(invitationApply_objectSpread({}, action.payload), {}, {
        loading: false
      });
      break;

    default:
      break;
  }
});

/* harmony default export */ var reducers_invitationApply = (invitationApply_reducer);
// CONCATENATED MODULE: ./src/redux/reducers/index.ts
function reducers_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function reducers_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { reducers_ownKeys(Object(source), true).forEach(function (key) { reducers_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { reducers_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function reducers_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




























const reducers = Object(external_redux_["combineReducers"])({
  _app: _app,
  actions: reducers_common,
  ads: reducers_ads,
  auth: reducers_auth,
  blog: reducers_blog,
  company: reducers_company,
  contentWebsite: reducers_contentWebsite,
  careerCounseling: careerCounseling,
  category: reducers_category,
  job: reducers_job,
  location: reducers_location,
  position: reducers_position,
  recruitment: reducers_recruitment,
  record: reducers_record,
  staticPages: reducers_staticPages,
  tag: tag,
  user: reducers_user,
  workLocation: workLocation,
  benefit: reducers_benefit,
  rating: reducers_rating,
  requestReview: reducers_requestReview,
  evaluate: reducers_evaluate,
  notifications: reducers_notifications,
  scheduleInterview: reducers_scheduleInterview,
  invitationApply: reducers_invitationApply
});

const rootReducer = (state, action) => {
  /**
   * @description We are using Next-Redux-Wrapper and Saga
   * so, server will execute the dispatch in server, after dispatch new state will be passed to
   * client by dispatch the HYDRATE
   */
  if (action.type === external_next_redux_wrapper_["HYDRATE"]) {
    const nextState = reducers_objectSpread(reducers_objectSpread({}, state), action.payload);

    return nextState;
  } else {
    return reducers(state, action);
  }
};

/* harmony default export */ var redux_reducers = (rootReducer);
/**
 * @description Use IRootState to set interface for callback's state
 *  in useSelector
 * @example
 *      const { cat } = useSelector(( state: IRootState ) => state.animal);
 */
// EXTERNAL MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_ = __webpack_require__("ufKq");

// CONCATENATED MODULE: ./src/redux/store.ts







function bindMiddleware(middleware) {
  // Just use redux devtools in dev mode
  if (false) {}

  return Object(external_redux_["applyMiddleware"])(...middleware);
}

function makeStore(initialState) {
  const sagaMiddleware = external_redux_saga_default()();
  const store = Object(external_redux_["createStore"])(redux_reducers, initialState, bindMiddleware([sagaMiddleware]));
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
} // console.clear();


const wrapper = Object(external_next_redux_wrapper_["createWrapper"])(makeStore, {
  debug: false
});

/***/ }),

/***/ "AT8v":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ getAccessToken; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ loginWithPhoneNumber; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ resetPasswordOtpVoice; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ refreshToken; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* reexport */ updateUserPassword; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ createCandidate; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ updateUserEmailPassword; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ registerOtpVoice; });
__webpack_require__.d(__webpack_exports__, "k", function() { return /* reexport */ verifyOtpVoice; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* reexport */ verifyOtpResetPassword; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ sendOtpVoice; });

// UNUSED EXPORTS: updateUserProfile

// EXTERNAL MODULE: ./src/common/utils/api.ts + 1 modules
var api = __webpack_require__("p2dX");

// CONCATENATED MODULE: ./src/services/auth/getAccessToken.ts

const getAccessToken = async (payload) => {
  const {
    data,
    loginMethod
  } = payload;

  try {
    const url = `${"http://api-v1.tuyendungvn.online"}/auth/firebase/${loginMethod}`;
    const response = await Object(api["a" /* axiosJSON */])({
      url,
      data: JSON.stringify(data),
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};
// EXTERNAL MODULE: external "apollo-boost"
var external_apollo_boost_ = __webpack_require__("YvTO");

// CONCATENATED MODULE: ./src/services/auth/loginWithPhoneNumber.ts
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */


const LOGIN_WITH_USERNAME = external_apollo_boost_["gql"]`
  mutation($user: LoginUserInput!) {
    login(user: $user) {
      accessToken
      refreshToken
      userInfo {
        _id
        provider
        birthday
        gender
        permission
        title
        username
        email
        phoneNumber
        displayName
        urlAvt {
          default
        }
        identityCard
        appliedRecruitment {
          recruitment {
            _id
            slug
          }
        }
        savedRecruitment {
          _id
          slug
        }
        subscribedCompany {
          _id
          name
        }
        seenCompany {
          name
        }
        code
        point
        province {
          _id
          name
        }
        district {
          _id
          name
        }
        ward {
          _id
          name
        }
        street {
          _id
          name
        }
        career {
          _id
          name
        }
        isSeekingJob
      }
    }
  }
`;
const loginWithPhoneNumber = async variables => {
  const result = await Object(api["b" /* graphQLCommon */])(LOGIN_WITH_USERNAME, variables);
  return result;
};
// CONCATENATED MODULE: ./src/services/auth/resetPassword.ts
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */


const RESET_PASSWORD_OTP = external_apollo_boost_["gql"]`
  mutation($input: ResetPasswordOtpInput!) {
    resetPasswordOtpVoice(input: $input)
  }
`;
const resetPasswordOtpVoice = async (variables) => {
  const result = await Object(api["b" /* graphQLCommon */])(RESET_PASSWORD_OTP, variables);
  return result;
};
// CONCATENATED MODULE: ./src/services/auth/profile.ts


const REFRESH_TOKEN = external_apollo_boost_["gql"]`
  query {
    refreshToken {
      accessToken
      refreshToken
      userInfo {
        _id
        birthday
        gender
        permission
        title
        history
        email
        username
        displayName
        urlAvt {
          default
        }
        email
        phoneNumber
        appliedRecruitment {
          recruitment {
            _id
            slug
          }
          date
        }
        savedRecruitment {
          _id
          slug
        }
        subscribedCompany {
          _id
          name
        }
        seenCompany {
          name
        }
        code
        point
        province {
          _id
          name
        }
        district {
          _id
          name
        }
        ward {
          _id
          name
        }
        street {
          _id
          name
        }
        career {
          _id
          name
        }
        isSeekingJob
      }
    }
  }
`;
const refreshToken = async () => {
  const result = await Object(api["b" /* graphQLCommon */])(REFRESH_TOKEN, {});
  return result;
};
const UPDATE_USER_PASSWORD = external_apollo_boost_["gql"]`
  mutation($updatePasswordInput: UpdatePasswordInput!) {
    updateUserPassword(updatePasswordInput: $updatePasswordInput) {
      _id
      username
    }
  }
`;
const updateUserPassword = async variables => {
  const result = await Object(api["b" /* graphQLCommon */])(UPDATE_USER_PASSWORD, variables);
  return result;
};
const UPDATE_USER_PROFILE = external_apollo_boost_["gql"]`
  mutation($updateUserInput: UpdateUserInput!) {
    updateUserProfile(updateUserInput: $updateUserInput) {
      _id
      username
    }
  }
`;
const updateUserProfile = async variables => {
  const result = await Object(api["b" /* graphQLCommon */])(UPDATE_USER_PROFILE, variables);
  return result;
};
// CONCATENATED MODULE: ./src/services/auth/createCandidate.ts


const CREATE_CANDIDATE = external_apollo_boost_["gql"]`
  mutation CreateCandidateMutation($createUserInput: CreateCandidateInput!) {
    createCandidate(createUserInput: $createUserInput) {
      _id
      phoneNumber
    }
  }
`;
const createCandidate = async variables => {
  const response = await Object(api["b" /* graphQLCommon */])(CREATE_CANDIDATE, variables);
  return response;
};
// CONCATENATED MODULE: ./src/services/auth/updateUserEmailPassword.ts


const UPDATE_USER_EMAIL_PASSWORD = external_apollo_boost_["gql"]`
  mutation($idUser: String, $email: String, $password: String) {
    updateUserEmailPassword(
      idUser: $idUser
      email: $email
      password: $password
    ) {
      _id
    }
  }
`;
const updateUserEmailPassword = async variables => {
  const response = await Object(api["b" /* graphQLCommon */])(UPDATE_USER_EMAIL_PASSWORD, variables);
  return response;
};
// CONCATENATED MODULE: ./src/services/auth/registerOtpVoice.ts


const REGISTER_OTP_VOICE = external_apollo_boost_["gql"]`
  mutation($input: RegisterOptInput!) {
    registerOtpVoice(input: $input) {
      Code
      Message
    }
  }
`;
const registerOtpVoice = async variables => {
  const result = await Object(api["b" /* graphQLCommon */])(REGISTER_OTP_VOICE, variables);
  return result;
};
// CONCATENATED MODULE: ./src/services/auth/verifyOtpVoice.ts


const VERIFY_OTP_VOICE = external_apollo_boost_["gql"]`
  mutation($input: VerifyOtpInput!) {
    verifyOtpVoice(input: $input)
  }
`;
const verifyOtpVoice = async variables => {
  const result = await Object(api["b" /* graphQLCommon */])(VERIFY_OTP_VOICE, variables);
  return result;
};
const VERIFY_OTP_RESET_PASSWORD = external_apollo_boost_["gql"]`
  mutation($input: VerifyOtpInput!) {
    verifyOtpResetPassword(input: $input)
  }
`;
const verifyOtpResetPassword = async variables => {
  const result = await Object(api["b" /* graphQLCommon */])(VERIFY_OTP_RESET_PASSWORD, variables);
  return result;
};
// CONCATENATED MODULE: ./src/services/auth/sendOtpVoice.ts


const SEND_OTP_VOICE = external_apollo_boost_["gql"]`
  mutation($phoneNumber: String!) {
    sendOtpVoice(phoneNumber: $phoneNumber) {
      Code
      Message
    }
  }
`;
const sendOtpVoice = async variables => {
  const result = await Object(api["b" /* graphQLCommon */])(SEND_OTP_VOICE, variables);
  return result;
};
// CONCATENATED MODULE: ./src/services/auth/index.ts










/***/ }),

/***/ "BPlj":
/***/ (function(module, exports) {

module.exports = require("apollo-upload-client");

/***/ }),

/***/ "BbVQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ getDistricts; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ getDistrictsSuccess; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ getProvincesSuccess; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ getStreetByProvinceAndDistrictSuccess; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ getWards; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ getWardsSuccess; });

// UNUSED EXPORTS: getProvinces, setProvinceSelected, getStreetByProvinceAndDistrict

// EXTERNAL MODULE: ./src/redux/types/location/index.ts
var types_location = __webpack_require__("3IMB");

// CONCATENATED MODULE: ./src/redux/actions/location/districts.ts

const getDistricts = payload => ({
  type: types_location["a" /* GET_DISTRICTS */],
  payload
});
const getDistrictsSuccess = payload => ({
  type: types_location["b" /* GET_DISTRICTS_SUCCESS */],
  payload
});
// CONCATENATED MODULE: ./src/redux/actions/location/provinces.ts

const getProvinces = () => ({
  type: types_location["c" /* GET_PROVINCES */]
});
const getProvincesSuccess = payload => ({
  type: types_location["d" /* GET_PROVINCE_SUCCESS */],
  payload
});
const setProvinceSelected = payload => ({
  type: types_location["i" /* SET_PROVINCE_SELECTED */],
  payload
});
// CONCATENATED MODULE: ./src/redux/actions/location/streets.ts

const getStreetByProvinceAndDistrict = payload => ({
  type: types_location["e" /* GET_STREETS_BY_PROVINCE_AND_DISTRICT */],
  payload
});
const getStreetByProvinceAndDistrictSuccess = payload => ({
  type: types_location["f" /* GET_STREETS_BY_PROVINCE_AND_DISTRICT_SUCCESS */],
  payload
});
// CONCATENATED MODULE: ./src/redux/actions/location/wards.ts

const getWards = payload => ({
  type: types_location["g" /* GET_WARDS */],
  payload
});
const getWardsSuccess = payload => ({
  type: types_location["h" /* GET_WARDS_SUCCESS */],
  payload
});
// CONCATENATED MODULE: ./src/redux/actions/location/index.ts





/***/ }),

/***/ "C4hx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GET_NOTIFICATIONS_SETTING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return GET_NOTIFICATIONS_SETTING_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return GET_NOTIFICATIONS_SETTING_BY_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return GET_NOTIFICATIONS_SETTING_BY_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CREATE_NOTIFY_SETTING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_NOTIFICATIONS_BY_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GET_NOTIFICATIONS_BY_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CREATE_NOTIFY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return SET_SEEN_FOR_NOTIFY; });
const GET_NOTIFICATIONS_SETTING = "GET_NOTIFICATIONS_SETTING";
const GET_NOTIFICATIONS_SETTING_SUCCESS = "GET_NOTIFICATIONS_SETTING_SUCCESS";
const GET_NOTIFICATIONS_SETTING_BY_USER = "GET_NOTIFICATIONS_SETTING_BY_USER";
const GET_NOTIFICATIONS_SETTING_BY_USER_SUCCESS = "GET_NOTIFICATIONS_SETTING_BY_USER_SUCCESS";
const CREATE_NOTIFY_SETTING = "CREATE_NOTIFY_SETTING";
const GET_NOTIFICATIONS_BY_USER = "GET_NOTIFICATIONS_BY_USER";
const GET_NOTIFICATIONS_BY_USER_SUCCESS = "GET_NOTIFICATIONS_BY_USER_SUCCESS";
const CREATE_NOTIFY = "CREATE_NOTIFY";
const SET_SEEN_FOR_NOTIFY = "SET_SEEN_FOR_NOTIFY";

/***/ }),

/***/ "CFwT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ StyledToastContainer; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ showNotification; });

// UNUSED EXPORTS: IconWrapper, Icon, Content, Title, Message, toastOptions

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__("oAEb");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./src/designs/SVG/index.tsx
var SVG = __webpack_require__("v1+Z");

// CONCATENATED MODULE: ./src/components/ToastNotification/styles.tsx



const StyledToastContainer = external_styled_components_default()(external_react_toastify_["ToastContainer"]).attrs({
  toastClassName: "toast-notify",
  bodyClassName: "toast-body"
}).withConfig({
  displayName: "styles__StyledToastContainer",
  componentId: "sc-11g40ux-0"
})(["", " svg{display:block;}.toast-notify{", "}.toast-body{", "}.Toastify__close-button{", " svg{", "}}.Toastify__toast--success{", "}.Toastify__toast--error{", "}"], {
  "width": "500px",
  "height": "100px",
  "@media (min-width: 1024px)": {
    "width": "600px"
  }
}, {
  "padding": "0",
  "width": "100%",
  "height": "100%"
}, {
  "display": "flex",
  "alignItems": "center",
  "padding": "0",
  "margin": "0"
}, {
  "marginRight": "30px",
  "marginTop": "auto",
  "marginBottom": "auto"
}, {
  "minWidth": "20px",
  "height": "20px"
}, {
  "--tw-bg-opacity": "1",
  "backgroundColor": "rgba(75, 181, 67, var(--tw-bg-opacity))"
}, {
  "--tw-bg-opacity": "1",
  "backgroundColor": "rgba(199, 44, 65, var(--tw-bg-opacity))"
});
const IconWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__IconWrapper",
  componentId: "sc-11g40ux-1"
})(["", ""], {
  "height": "100%",
  "--tw-bg-opacity": "0.2",
  "backgroundColor": "rgba(13, 2, 41, var(--tw-bg-opacity))",
  "paddingLeft": "10px",
  "paddingRight": "10px",
  "display": "flex",
  "alignItems": "center",
  "justifyContent": "center"
});
const Icon = external_styled_components_default()(SVG["a" /* SVG */]).withConfig({
  displayName: "styles__Icon",
  componentId: "sc-11g40ux-2"
})(["", ""], {
  "minWidth": "20px",
  "height": "20px"
});
const Content = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Content",
  componentId: "sc-11g40ux-3"
})(["", ""], {
  "paddingTop": "15px",
  "paddingBottom": "15px",
  "paddingLeft": "30px",
  "paddingRight": "20px"
});
const Title = external_styled_components_default.a.p.withConfig({
  displayName: "styles__Title",
  componentId: "sc-11g40ux-4"
})(["", ""], {
  "fontSize": "16px",
  "fontWeight": "700",
  "marginBottom": "2px",
  "lineHeight": "1.5rem",
  "@media (min-width: 600px)": {
    "marginBottom": "10px"
  }
});
const Message = external_styled_components_default.a.p.withConfig({
  displayName: "styles__Message",
  componentId: "sc-11g40ux-5"
})(["", ""], {
  "fontSize": "14px",
  "fontWeight": "400"
});
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__("6f9I");

// CONCATENATED MODULE: ./src/constants/notification/auth.ts

const notificationMapping = message => {
  const {
    t
  } = Object(external_next_i18next_["useTranslation"])(["signin"]);

  switch (message) {
    case "Error.login phoneNumber or email or password incorrect !":
      return t("dialog-login-error");

    case "Error.createRecruitment Recruitment.expiredDate must be greater than current time !":
      return "Thời gian hết hạn bài đăng phải lớn hiện tại!";

    default:
      return message;
  }
};
// CONCATENATED MODULE: ./src/constants/notification/index.ts

// CONCATENATED MODULE: ./src/components/ToastNotification/index.tsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const ToastNotification = props => {
  const {
    title,
    message,
    type
  } = props.payload || {};
  Object(external_react_["useEffect"])(() => {}, []);

  const renderIcon = () => {
    if (type === "success") {
      return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_["Fragment"], {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(IconWrapper, {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Icon, {
            name: "common/checked-white",
            width: "15px",
            height: "15px"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Content, {
          children: [title ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(Title, {
            children: title
          }) : "", /*#__PURE__*/Object(jsx_runtime_["jsx"])(Message, {
            children: message
          })]
        })]
      });
    }

    if (type === ("error" || false)) {
      return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_["Fragment"], {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(IconWrapper, {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Icon, {
            name: "common/error-white",
            width: "15px",
            height: "15px"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Content, {
          children: [title ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(Title, {
            children: title
          }) : "", /*#__PURE__*/Object(jsx_runtime_["jsx"])(Message, {
            children: notificationMapping(message)
          })]
        })]
      });
    }

    return null;
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: renderIcon()
  });
};

const toastOptions = {
  position: external_react_toastify_["toast"].POSITION.TOP_RIGHT,
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: false,
  pauseOnHover: true,
  draggable: true,
  toastId: "toast-notification"
};
const showNotification = payload => {
  const {
    type
  } = payload;
  Object(external_react_toastify_["toast"])( /*#__PURE__*/Object(jsx_runtime_["jsx"])(ToastNotification, {
    payload: payload
  }), _objectSpread(_objectSpread({}, toastOptions), {}, {
    type
  }));
};

/***/ }),

/***/ "DATO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export cookieKey */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getUserCookies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getLoggedInAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return removeUserCookies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isAuthenticated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return setUserCookies; });
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tlnx");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("RE4Q");
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(universal_cookie__WEBPACK_IMPORTED_MODULE_1__);


const cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_1___default.a();
const cookieKey = "TUYENDUNGVN_USER_KEY";
const getUserCookies = () => {
  return cookies.get(cookieKey);
};
/**
 * Returns the logged in user
 */

const getLoggedInAccount = () => {
  const account = getUserCookies();
  return account ? typeof account === "object" ? account : JSON.parse(account) : null;
};
const getToken = () => {
  var _getUserCookies, _getUserCookies2;

  return ((_getUserCookies = getUserCookies()) === null || _getUserCookies === void 0 ? void 0 : _getUserCookies.token) || ((_getUserCookies2 = getUserCookies()) === null || _getUserCookies2 === void 0 ? void 0 : _getUserCookies2.accessToken) || "";
};
const removeUserCookies = () => {
  cookies.remove(cookieKey, {
    path: "/"
  });
};
/**
 * Checks if user is authenticated
 */

const isAuthenticated = () => {
  const user = getLoggedInAccount();

  if (!user) {
    return false;
  }

  try {
    const decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_0___default()((user === null || user === void 0 ? void 0 : user.token) || (user === null || user === void 0 ? void 0 : user.accessToken) || "");
    if (!decoded) return false;
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
const setUserCookies = data => {
  const decodedToken = jwt_decode__WEBPACK_IMPORTED_MODULE_0___default()((data === null || data === void 0 ? void 0 : data.token) || (data === null || data === void 0 ? void 0 : data.accessToken) || "");
  const {
    exp
  } = decodedToken || {};
  const timeNow = new Date().getTime();
  const shortExp = timeNow + 5 * 3600 * 1000; // 5 hours

  const expires = exp ? new Date(exp * 1000) : new Date(shortExp);
  cookies.set(cookieKey, data, {
    path: "/",
    expires
  });
};

/***/ }),

/***/ "DYVk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_ADS_ALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_ADS_ALL_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_ADS_BY_LOCATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GET_ADS_BY_LOCATION_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GET_ADS_JOB_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return GET_ADS_JOB_PAGE_SUCCESS; });
const GET_ADS_ALL = "GET_ADS_ALL";
const GET_ADS_ALL_SUCCESS = "GET_ADS_ALL_SUCCESS";
const GET_ADS_BY_LOCATION = "GET_ADS_ALL_BY_LOCATION";
const GET_ADS_BY_LOCATION_SUCCESS = "GET_ADS_ALL_BY_LOCATION_SUCCESS";
const GET_ADS_JOB_PAGE = "GET_ADS_JOB_PAGE";
const GET_ADS_JOB_PAGE_SUCCESS = "GET_ADS_JOB_PAGE_SUCCESS";

/***/ }),

/***/ "DoQ8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_ALL_STATIC_PAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_ALL_STATIC_PAGES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_STATIC_PAGE_BY_SLUG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GET_STATIC_PAGE_BY_SLUG_SUCCESS; });
const GET_ALL_STATIC_PAGES = "GET_ALL_STATIC_PAGES";
const GET_ALL_STATIC_PAGES_SUCCESS = "GET_ALL_STATIC_PAGES_SUCCESS";
const GET_STATIC_PAGE_BY_SLUG = "GET_STATIC_PAGE_BY_SLUG";
const GET_STATIC_PAGE_BY_SLUG_SUCCESS = "GET_STATIC_PAGE_BY_SLUG_SUCCESS";

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "GvLQ":
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "JpLw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_ALL_RECRUITMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return GET_RECRUITMENT_BY_COMPANY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return GET_RECRUITMENT_BY_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_ALL_RECRUITMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return GET_RECRUITMENT_BY_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return GET_RECRUITMENT_BY_ID_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return GET_RECRUITMENT_BY_SLUG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return GET_RECRUITMENT_BY_SLUG_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return SET_SEEN_RECRUITMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return SET_APPLIED_RECRUITMENT; });
/* unused harmony export SET_APPLIED_USER_TO_APPROVED */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return SET_SAVED_RECRUITMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return REMOVE_SAVED_RECRUITMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CREATE_RECRUITMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GET_BEST_RECRUITMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GET_BEST_RECRUITMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return GET_MOST_KEYWORD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return GET_MOST_KEYWORD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return SET_SORT_TYPE_SELECTED; });
const GET_ALL_RECRUITMENT = "GET_ALL_RECRUITMENT";
const GET_RECRUITMENT_BY_COMPANY = "GET_RECRUITMENT_BY_COMPANY";
const GET_RECRUITMENT_BY_USER = "GET_RECRUITMENT_BY_USER";
const GET_ALL_RECRUITMENT_SUCCESS = "GET_ALL_RECRUITMENT_SUCCESS";
const GET_RECRUITMENT_BY_ID = "GET_RECRUITMENT_BY_ID";
const GET_RECRUITMENT_BY_ID_SUCCESS = "GET_RECRUITMENT_BY_ID_SUCCESS";
const GET_RECRUITMENT_BY_SLUG = "GET_RECRUITMENT_BY_SLUG";
const GET_RECRUITMENT_BY_SLUG_SUCCESS = "GET_RECRUITMENT_BY_SLUG_SUCCESS";
const SET_SEEN_RECRUITMENT = "SET_SEEN_RECRUITMENT";
const SET_APPLIED_RECRUITMENT = "SET_APPLIED_RECRUITMENT";
const SET_APPLIED_USER_TO_APPROVED = "SET_APPLIED_USER_TO_APPROVED";
const SET_SAVED_RECRUITMENT = "SET_SAVED_RECRUITMENT";
const REMOVE_SAVED_RECRUITMENT = "REMOVE_SAVED_RECRUITMENT";
const CREATE_RECRUITMENT = "CREATE_RECRUITMENT";
const GET_BEST_RECRUITMENT = "GET_BEST_RECRUITMENT";
const GET_BEST_RECRUITMENT_SUCCESS = "GET_BEST_RECRUITMENT_SUCCESS";
const GET_MOST_KEYWORD = "GET_MOST_KEYWORD";
const GET_MOST_KEYWORD_SUCCESS = "GET_MOST_KEYWORD_SUCCESS";
const SET_SORT_TYPE_SELECTED = "SET_SORT_TYPE_SELECTED";

/***/ }),

/***/ "K7k0":
/***/ (function(module, exports) {



/***/ }),

/***/ "KO5b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ getAllCompany; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ getCompany; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ updateCompany; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ setSubscribeCompany; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ getCompanyBySlug; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ updateCompanyProvince; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ setSeenCompany; });

// EXTERNAL MODULE: ./src/common/utils/api.ts + 1 modules
var api = __webpack_require__("p2dX");

// EXTERNAL MODULE: external "apollo-boost"
var external_apollo_boost_ = __webpack_require__("YvTO");

// CONCATENATED MODULE: ./src/services/company/company.ts


const GET_ALL_COMPANY = external_apollo_boost_["gql"]`
  query(
    $keyword: String
    $filterCompany: FilterCompany
    $page: Int
    $size: Int
  ) {
    getCompanies(
      keyword: $keyword
      filterCompany: $filterCompany
      page: $page
      size: $size
    ) {
      totalCount
      results {
        _id
        name
        code
        slug
        description
        career {
          _id
          name
        }
        size
        phoneNumber
        contactName
        location
        province {
          name
        }
        images {
          default
          medium
          small
        }
        logo {
          small
          medium
          default
        }
        videos
        benefits {
          _id
          icon {
            name
            icon {
              default
              medium
              small
            }
            _id
          }
          content
        }
        subscribe
        user {
          _id
        }
      }
    }
  }
`;
const getAllCompany = async variables => {
  const response = await Object(api["b" /* graphQLCommon */])(GET_ALL_COMPANY, variables);
  return response;
};
const GET_COMPANY = external_apollo_boost_["gql"]`
  query Query($id: String!) {
    getCompanyById(id: $id) {
      _id
      name
      code
      description
      career {
        _id
        name
      }
      size
      phoneNumber
      contactName
      location
      province {
        name
      }
      images {
        default
        medium
        small
      }
      logo {
        small
        medium
        default
      }
      videos
      benefits {
        _id
        icon {
          name
          icon {
            default
            medium
            small
          }
          _id
        }
        content
      }
      subscribe
      user {
        _id
      }
    }
  }
`;
const getCompany = async variables => {
  const response = await Object(api["b" /* graphQLCommon */])(GET_COMPANY, variables);
  return response;
};
const UPDATE_COMPANY = external_apollo_boost_["gql"]`
  mutation($id: String!, $companyUpdateInput: CompanyUpdateInput) {
    updateCompany(id: $id, companyUpdateInput: $companyUpdateInput) {
      _id
    }
  }
`;
const updateCompany = async variables => {
  const response = await Object(api["b" /* graphQLCommon */])(UPDATE_COMPANY, variables);
  return response;
};
const SUBSCRIBE_COMPANY = external_apollo_boost_["gql"]`
  mutation($userId: String!, $companyId: String!) {
    setSubscribedCompany(userId: $userId, companyId: $companyId)
  }
`;
const setSubscribeCompany = async variables => {
  const response = await Object(api["b" /* graphQLCommon */])(SUBSCRIBE_COMPANY, variables);
  return response;
};
const GET_COMPANY_BY_SLUG = external_apollo_boost_["gql"]`
  query($slug: String!) {
    getCompanyBySlug(slug: $slug) {
      _id
      name
      code
      description
      career {
        _id
        name
      }
      size
      phoneNumber
      contactName
      location
      province {
        name
      }
      images {
        default
        medium
        small
      }
      logo {
        small
        medium
        default
      }
      videos
      benefits {
        _id
        icon {
          name
          icon {
            default
            medium
            small
          }
          description
          _id
        }
        content
      }
      subscribe
      user {
        _id
      }
    }
  }
`;
const getCompanyBySlug = async variables => {
  const response = await Object(api["b" /* graphQLCommon */])(GET_COMPANY_BY_SLUG, variables);
  return response;
};
const UPDATE_COMPANY_PROVINCE = external_apollo_boost_["gql"]`
  mutation {
    updateCompanyProvince
  }
`;
const updateCompanyProvince = async variables => {
  const response = await Object(api["b" /* graphQLCommon */])(UPDATE_COMPANY_PROVINCE, variables);
  return response;
};
const SET_SEEN_COMPANY = external_apollo_boost_["gql"]`
  mutation SetSeenCompanyMutation($userId: String!, $companyId: String!) {
    setSeenCompany(userId: $userId, companyId: $companyId)
  }
`;
const setSeenCompany = async variables => {
  const response = await Object(api["b" /* graphQLCommon */])(SET_SEEN_COMPANY, variables);
  return response;
};
// CONCATENATED MODULE: ./src/services/company/index.ts


/***/ }),

/***/ "NSsw":
/***/ (function(module, exports) {

module.exports = require("apollo-link-persisted-queries");

/***/ }),

/***/ "O5bM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getRatingByUserId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getRatingByUserIdSuccess; });
/* harmony import */ var _redux_types_rating__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fvPt");

const getRatingByUserId = payload => ({
  type: _redux_types_rating__WEBPACK_IMPORTED_MODULE_0__[/* GET_RATING_BY_USER_ID */ "a"],
  payload
});
const getRatingByUserIdSuccess = payload => ({
  type: _redux_types_rating__WEBPACK_IMPORTED_MODULE_0__[/* GET_RATING_BY_USER_ID_SUCCESS */ "b"],
  payload
});

/***/ }),

/***/ "R3Vo":
/***/ (function(module, exports) {



/***/ }),

/***/ "RE4Q":
/***/ (function(module, exports) {

module.exports = require("universal-cookie");

/***/ }),

/***/ "RlGo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_EVALUATE_BY_USER_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_EVALUATE_BY_USER_ID_SUCCESS; });
const GET_EVALUATE_BY_USER_ID = "GET_EVALUATE_BY_USER_ID";
const GET_EVALUATE_BY_USER_ID_SUCCESS = "GET_EVALUATE_BY_USER_ID_SUCCESS";

/***/ }),

/***/ "RmXt":
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "T5ka":
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "TG1l":
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),

/***/ "VfsZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "o", function() { return /* reexport */ setSortTypeSelected; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ getAllMostKeyword; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ getAllMostKeywordSuccess; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ getAllRecruitment; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ getRecruitmentByCompany; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ getAllRecruitmentSuccess; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ getRecruitmentByIdSuccess; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* reexport */ getRecruitmentBySlug; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* reexport */ getRecruitmentBySlugSuccess; });
__webpack_require__.d(__webpack_exports__, "n", function() { return /* reexport */ setSeenRecruitment; });
__webpack_require__.d(__webpack_exports__, "l", function() { return /* reexport */ setAppliedRecruitment; });
__webpack_require__.d(__webpack_exports__, "m", function() { return /* reexport */ setSavedRecruitment; });
__webpack_require__.d(__webpack_exports__, "k", function() { return /* reexport */ removeSavedRecruitment; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ getBestRecruitment; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ getBestRecruitmentSuccess; });

// UNUSED EXPORTS: getRecruitmentByUser, getRecruitmentById, createRecruitment

// EXTERNAL MODULE: ./src/redux/types/recruitment/index.ts
var recruitment = __webpack_require__("JpLw");

// CONCATENATED MODULE: ./src/redux/actions/recruitment/sortType.ts

const setSortTypeSelected = payload => ({
  type: recruitment["r" /* SET_SORT_TYPE_SELECTED */],
  payload
});
// CONCATENATED MODULE: ./src/redux/actions/recruitment/keyword.ts

const getAllMostKeyword = () => ({
  type: recruitment["f" /* GET_MOST_KEYWORD */]
});
const getAllMostKeywordSuccess = payload => ({
  type: recruitment["g" /* GET_MOST_KEYWORD_SUCCESS */],
  payload
});
// CONCATENATED MODULE: ./src/redux/actions/recruitment/recruitment.ts

const getAllRecruitment = payload => ({
  type: recruitment["b" /* GET_ALL_RECRUITMENT */],
  payload
});
const getRecruitmentByCompany = payload => ({
  type: recruitment["h" /* GET_RECRUITMENT_BY_COMPANY */],
  payload
});
const getRecruitmentByUser = payload => ({
  type: recruitment["m" /* GET_RECRUITMENT_BY_USER */],
  payload
});
const getAllRecruitmentSuccess = payload => ({
  type: recruitment["c" /* GET_ALL_RECRUITMENT_SUCCESS */],
  payload
});
const getRecruitmentById = payload => ({
  type: recruitment["i" /* GET_RECRUITMENT_BY_ID */],
  payload
});
const getRecruitmentByIdSuccess = payload => ({
  type: recruitment["j" /* GET_RECRUITMENT_BY_ID_SUCCESS */],
  payload
});
const getRecruitmentBySlug = payload => ({
  type: recruitment["k" /* GET_RECRUITMENT_BY_SLUG */],
  payload
});
const getRecruitmentBySlugSuccess = payload => ({
  type: recruitment["l" /* GET_RECRUITMENT_BY_SLUG_SUCCESS */],
  payload
});
const setSeenRecruitment = payload => ({
  type: recruitment["q" /* SET_SEEN_RECRUITMENT */],
  payload
});
const setAppliedRecruitment = payload => ({
  type: recruitment["o" /* SET_APPLIED_RECRUITMENT */],
  payload
});
const setSavedRecruitment = payload => ({
  type: recruitment["p" /* SET_SAVED_RECRUITMENT */],
  payload
});
const removeSavedRecruitment = payload => ({
  type: recruitment["n" /* REMOVE_SAVED_RECRUITMENT */],
  payload
});
const createRecruitment = payload => ({
  type: recruitment["a" /* CREATE_RECRUITMENT */],
  payload
});
const getBestRecruitment = payload => ({
  type: recruitment["d" /* GET_BEST_RECRUITMENT */],
  payload
});
const getBestRecruitmentSuccess = payload => ({
  type: recruitment["e" /* GET_BEST_RECRUITMENT_SUCCESS */],
  payload
});
// CONCATENATED MODULE: ./src/redux/actions/recruitment/index.ts




/***/ }),

/***/ "W6d4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export submitted */
/* unused harmony export resetSubmitted */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return resetAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setLoading; });
/* unused harmony export setExtendEmployerDrawer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return setOpenNotification; });
/* harmony import */ var _redux_types_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7fqt");

const submitted = () => ({
  type: _redux_types_common__WEBPACK_IMPORTED_MODULE_0__[/* SUBMITTED */ "g"]
});
const resetSubmitted = () => ({
  type: _redux_types_common__WEBPACK_IMPORTED_MODULE_0__[/* RESET_SUBMITTED */ "c"]
});
const actionSuccess = () => ({
  type: _redux_types_common__WEBPACK_IMPORTED_MODULE_0__[/* ACTION_SUCCESS */ "a"]
});
const resetAction = () => ({
  type: _redux_types_common__WEBPACK_IMPORTED_MODULE_0__[/* RESET_ACTION */ "b"]
});
const setLoading = payload => ({
  type: _redux_types_common__WEBPACK_IMPORTED_MODULE_0__[/* SET_LOADING */ "e"],
  payload
});
const setExtendEmployerDrawer = payload => ({
  type: _redux_types_common__WEBPACK_IMPORTED_MODULE_0__[/* SET_EXTEND_EMPLOYER_DRAWER */ "d"],
  payload
});
const setOpenNotification = payload => ({
  type: _redux_types_common__WEBPACK_IMPORTED_MODULE_0__[/* SET_OPEN_NOTIFICATION */ "f"],
  payload
});

/***/ }),

/***/ "WORP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAllBenefit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getAllBenefitSuccess; });
/* harmony import */ var _redux_types_benefit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tCzn");

const getAllBenefit = payload => ({
  type: _redux_types_benefit__WEBPACK_IMPORTED_MODULE_0__[/* GET_ALL_BENEFIT */ "a"],
  payload
});
const getAllBenefitSuccess = payload => ({
  type: _redux_types_benefit__WEBPACK_IMPORTED_MODULE_0__[/* GET_ALL_BENEFIT_SUCCESS */ "b"],
  payload
});

/***/ }),

/***/ "X6M4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_USER_PROFILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_USER_PROFILE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return UPDATE_USER_PROFILE; });
/* unused harmony export CHECK_PROFILE_USER_EXIST */
/* unused harmony export CHECK_PROFILE_USER_EXIST_SUCCESS */
const GET_USER_PROFILE = "GET_USER_PROFILE";
const GET_USER_PROFILE_SUCCESS = "GET_USER_PROFILE_SUCCESS";
const UPDATE_USER_PROFILE = "UPDATE_USER_PROFILE";
const CHECK_PROFILE_USER_EXIST = "CHECK_PROFILE_USER_EXIST";
const CHECK_PROFILE_USER_EXIST_SUCCESS = "CHECK_PROFILE_USER_EXIST_SUCCESS";

/***/ }),

/***/ "YKVe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getAllRequestReview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getAllRequestReviewSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getEvaluateByUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getEvaluateByUserSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createRequestReview; });
/* harmony import */ var _redux_types_requestReview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("oJ6/");

const getAllRequestReview = payload => ({
  type: _redux_types_requestReview__WEBPACK_IMPORTED_MODULE_0__[/* GET_ALL_REQUEST_REVIEW */ "b"],
  payload
});
const getAllRequestReviewSuccess = payload => ({
  type: _redux_types_requestReview__WEBPACK_IMPORTED_MODULE_0__[/* GET_ALL_REQUEST_REVIEW_SUCCESS */ "c"],
  payload
});
const getEvaluateByUser = payload => ({
  type: _redux_types_requestReview__WEBPACK_IMPORTED_MODULE_0__[/* GET_EVALUATE_BY_USER */ "d"],
  payload
});
const getEvaluateByUserSuccess = payload => ({
  type: _redux_types_requestReview__WEBPACK_IMPORTED_MODULE_0__[/* GET_EVALUATE_BY_USER_SUCCESS */ "e"],
  payload
});
const createRequestReview = payload => {
  return {
    type: _redux_types_requestReview__WEBPACK_IMPORTED_MODULE_0__[/* CREATE_REQUEST_REVIEW */ "a"],
    payload
  };
};

/***/ }),

/***/ "YvTO":
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "Z0di":
/***/ (function(module, exports) {

module.exports = require("@redux-saga/core/effects");

/***/ }),

/***/ "Z8w5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAllContentWebsite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getAllContentWebsiteSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getSeoWebsite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getSeoWebsiteSuccess; });
/* harmony import */ var _redux_types_contentWebsite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("27Qm");

const getAllContentWebsite = payload => ({
  type: _redux_types_contentWebsite__WEBPACK_IMPORTED_MODULE_0__[/* GET_CONTENT_WEBSITE */ "a"],
  payload
});
const getAllContentWebsiteSuccess = payload => ({
  type: _redux_types_contentWebsite__WEBPACK_IMPORTED_MODULE_0__[/* GET_CONTENT_WEBSITE_SUCCESS */ "b"],
  payload
});
const getSeoWebsite = payload => ({
  type: _redux_types_contentWebsite__WEBPACK_IMPORTED_MODULE_0__[/* GET_SEO_WEBSITE */ "c"],
  payload
});
const getSeoWebsiteSuccess = payload => ({
  type: _redux_types_contentWebsite__WEBPACK_IMPORTED_MODULE_0__[/* GET_SEO_WEBSITE_SUCCESS */ "d"],
  payload
});

/***/ }),

/***/ "ZRVN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ getAdsAll; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ getAdsByLocation; });

// EXTERNAL MODULE: external "apollo-boost"
var external_apollo_boost_ = __webpack_require__("YvTO");

// EXTERNAL MODULE: ./src/common/utils/api.ts + 1 modules
var api = __webpack_require__("p2dX");

// CONCATENATED MODULE: ./src/services/ads/get.ts
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */


const GET_ADS_ALL = external_apollo_boost_["gql"]`
  query($filterAds: FilterAds) {
    getAdsAll(filterAds: $filterAds) {
      _id
      name
      code
      urlImage {
        default
        medium
        small
      }
      slideImg {
        default
        medium
        small
      }
      displayLocation {
        name
        code
        value
        slug
        _id
      }
      link
    }
  }
`;
const getAdsAll = async variables => {
  const result = await Object(api["b" /* graphQLCommon */])(GET_ADS_ALL, variables);
  return result;
};
const GET_ADS_BY_LOCATION = external_apollo_boost_["gql"]`
  query Query($displayLocation: String!) {
    getAdsAllByLocation(displayLocation: $displayLocation) {
      _id
      name
      link
      code
      urlImage {
        default
        medium
        small
      }
    }
  }
`;
const getAdsByLocation = async variables => {
  const result = await Object(api["b" /* graphQLCommon */])(GET_ADS_BY_LOCATION, variables);
  return result;
};
// CONCATENATED MODULE: ./src/services/ads/index.ts


/***/ }),

/***/ "aOmp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export GET_ALL_CAREER_SUCCESS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GET_ALL_JOB_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return GET_ALL_JOB_TYPE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_ALL_JOB_LEVEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GET_ALL_JOB_LEVEL_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_ALL_JOB_LEVEL_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_ALL_JOB_LEVEL_FILTER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return GET_ALL_LEVEL_PRICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return GET_ALL_LEVEL_PRICE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return SET_JOB_TYPE_SELECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return SET_JOB_LEVEL_SELECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return SET_LEVEL_PRICE_SELECTED; });
const GET_ALL_CAREER_SUCCESS = "GET_ALL_CAREER_SUCCESS";
const GET_ALL_JOB_TYPE = "GET_ALL_JOB_TYPE";
const GET_ALL_JOB_TYPE_SUCCESS = "GET_ALL_JOB_TYPE_SUCCESS";
const GET_ALL_JOB_LEVEL = "GET_ALL_JOB_LEVEL";
const GET_ALL_JOB_LEVEL_SUCCESS = "GET_ALL_JOB_LEVEL_SUCCESS";
const GET_ALL_JOB_LEVEL_FILTER = "GET_ALL_JOB_LEVEL_FILTER";
const GET_ALL_JOB_LEVEL_FILTER_SUCCESS = "GET_ALL_JOB_LEVEL_FILTER_SUCCESS";
const GET_ALL_LEVEL_PRICE = "GET_ALL_LEVEL_PRICE";
const GET_ALL_LEVEL_PRICE_SUCCESS = "GET_ALL_LEVEL_PRICE_SUCCESS";
const SET_JOB_TYPE_SELECTED = "SET_JOB_TYPE_SELECTED";
const SET_JOB_LEVEL_SELECTED = "SET_JOB_LEVEL_SELECTED";
const SET_LEVEL_PRICE_SELECTED = "SET_LEVEL_PRICE_SELECTED";

/***/ }),

/***/ "bKVk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_ALL_INVITATION_APPLY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_ALL_INVITATION_APPLY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GET_INVITATION_APPLY_BY_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GET_INVITATION_APPLY_BY_ID_SUCCESS; });
/* unused harmony export UPDATE_INVITATION_APPLY */
/* unused harmony export CREATE_INVITATION_APPLY */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CONFIRM_THE_INVITATION; });
const GET_ALL_INVITATION_APPLY = "GET_ALL_INVITATION_APPLY";
const GET_ALL_INVITATION_APPLY_SUCCESS = "GET_ALL_INVITATION_APPLY_SUCCESS";
const GET_INVITATION_APPLY_BY_ID = "GET_INVITATION_APPLY_BY_ID";
const GET_INVITATION_APPLY_BY_ID_SUCCESS = "GET_INVITATION_APPLY_BY_ID_SUCCESS";
const UPDATE_INVITATION_APPLY = "UPDATE_INVITATION_APPLY";
const CREATE_INVITATION_APPLY = "CREATE_INVITATION_APPLY";
const CONFIRM_THE_INVITATION = "CONFIRM_THE_INVITATION";

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "ciWM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ getAllScheduleInterview; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ getAllScheduleInterviewSuccess; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ getScheduleInterviewByIdSuccess; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ confirmTheScheduleInterview; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ cancelTheScheduleInterview; });

// UNUSED EXPORTS: getScheduleInterviewById, updateScheduleInterview, createScheduleInterview

// EXTERNAL MODULE: ./src/redux/types/scheduleInterview/index.ts
var scheduleInterview = __webpack_require__("uncI");

// CONCATENATED MODULE: ./src/redux/actions/scheduleInterview/scheduleInterview.ts

const getAllScheduleInterview = payload => ({
  type: scheduleInterview["d" /* GET_ALL_SCHEDULE_INTERVIEW */],
  payload
});
const getAllScheduleInterviewSuccess = payload => ({
  type: scheduleInterview["e" /* GET_ALL_SCHEDULE_INTERVIEW_SUCCESS */],
  payload
});
const getScheduleInterviewById = payload => ({
  type: scheduleInterview["f" /* GET_SCHEDULE_INTERVIEW_BY_ID */],
  payload
});
const getScheduleInterviewByIdSuccess = payload => ({
  type: scheduleInterview["g" /* GET_SCHEDULE_INTERVIEW_BY_ID_SUCCESS */],
  payload
});
const updateScheduleInterview = payload => ({
  type: scheduleInterview["h" /* UPDATE_SCHEDULE_INTERVIEW */],
  payload
});
const createScheduleInterview = payload => ({
  type: scheduleInterview["c" /* CREATE_SCHEDULE_INTERVIEW */],
  payload
});
const confirmTheScheduleInterview = payload => ({
  type: scheduleInterview["b" /* CONFIRM_THE_SCHEDULE_INTERVIEW */],
  payload
});
const cancelTheScheduleInterview = payload => ({
  type: scheduleInterview["a" /* CANCEL_THE_SCHEDULE_INTERVIEW */],
  payload
});
// CONCATENATED MODULE: ./src/redux/actions/scheduleInterview/index.ts


/***/ }),

/***/ "dnLw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getAllCategory */
/* unused harmony export getAllCategorySuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAllCategoryLevel1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getAllCategoryLevel1Success; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getAllCategoryLevel2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getAllCategoryLevel2Success; });
/* unused harmony export setCategorySelected */
/* harmony import */ var _redux_types_category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1Wjp");

const getAllCategory = () => ({
  type: _redux_types_category__WEBPACK_IMPORTED_MODULE_0__[/* GET_ALL_CATEGORY */ "a"]
});
const getAllCategorySuccess = payload => ({
  type: _redux_types_category__WEBPACK_IMPORTED_MODULE_0__[/* GET_ALL_CATEGORY_SUCCESS */ "f"],
  payload
});
const getAllCategoryLevel1 = payload => ({
  type: _redux_types_category__WEBPACK_IMPORTED_MODULE_0__[/* GET_ALL_CATEGORY_1_JOB */ "b"],
  payload
});
const getAllCategoryLevel1Success = payload => ({
  type: _redux_types_category__WEBPACK_IMPORTED_MODULE_0__[/* GET_ALL_CATEGORY_1_JOB_SUCCESS */ "c"],
  payload
});
const getAllCategoryLevel2 = payload => ({
  type: _redux_types_category__WEBPACK_IMPORTED_MODULE_0__[/* GET_ALL_CATEGORY_2_JOB */ "d"],
  payload
});
const getAllCategoryLevel2Success = payload => ({
  type: _redux_types_category__WEBPACK_IMPORTED_MODULE_0__[/* GET_ALL_CATEGORY_2_JOB_SUCCESS */ "e"],
  payload
});
const setCategorySelected = payload => ({
  type: _redux_types_category__WEBPACK_IMPORTED_MODULE_0__[/* SET_CATEGORY_SELECTED */ "g"],
  payload
});

/***/ }),

/***/ "fc+X":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_ALL_RECORD_BY_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_ALL_RECORD_BY_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GET_RECORD_BY_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GET_RECORD_BY_ID_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return GET_RECORD_BY_USER_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return GET_RECORD_BY_USER_ID_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return UPDATE_RECORD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CREATE_RECORD; });
/* unused harmony export CHECK_RECORD_USER_EXIST */
/* unused harmony export CHECK_RECORD_USER_EXIST_SUCCESS */
const GET_ALL_RECORD_BY_USER = "GET_ALL_RECORD_BY_USER";
const GET_ALL_RECORD_BY_USER_SUCCESS = "GET_ALL_RECORD_BY_USER_SUCCESS";
const GET_RECORD_BY_ID = "GET_RECORD_BY_ID";
const GET_RECORD_BY_ID_SUCCESS = "GET_RECORD_BY_ID_SUCCESS";
const GET_RECORD_BY_USER_ID = "GET_RECORD_BY_USER_ID";
const GET_RECORD_BY_USER_ID_SUCCESS = "GET_RECORD_BY_USER_ID_SUCCESS";
const UPDATE_RECORD = "UPDATE_RECORD";
const CREATE_RECORD = "CREATE_RECORD";
const CHECK_RECORD_USER_EXIST = "CHECK_RECORD_USER_EXIST";
const CHECK_RECORD_USER_EXIST_SUCCESS = "CHECK_RECORD_USER_EXIST_SUCCESS";

/***/ }),

/***/ "fvPt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_RATING_BY_USER_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_RATING_BY_USER_ID_SUCCESS; });
const GET_RATING_BY_USER_ID = "GET_RATING_BY_USER_ID";
const GET_RATING_BY_USER_ID_SUCCESS = "GET_RATING_BY_USER_ID_SUCCESS";

/***/ }),

/***/ "gFNR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ getAllCompany; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ getAllCompanySuccess; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ getCompanySuccess; });
__webpack_require__.d(__webpack_exports__, "p", function() { return /* reexport */ updateCompanyProvince; });
__webpack_require__.d(__webpack_exports__, "o", function() { return /* reexport */ setSubscribeCompany; });
__webpack_require__.d(__webpack_exports__, "n", function() { return /* reexport */ setSeenCompany; });
__webpack_require__.d(__webpack_exports__, "l", function() { return /* reexport */ getNewestCompany; });
__webpack_require__.d(__webpack_exports__, "m", function() { return /* reexport */ getNewestCompanySuccess; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* reexport */ getMostViewCompany; });
__webpack_require__.d(__webpack_exports__, "k", function() { return /* reexport */ getMostViewCompanySuccess; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ getMostAppliedCompany; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ getMostAppliedCompanySuccess; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ getMostRecruitingCompany; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* reexport */ getMostRecruitingCompanySuccess; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ getCompanyBySlug; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ getCompanyBySlugSuccess; });

// UNUSED EXPORTS: getCompany, updateCompany

// EXTERNAL MODULE: ./src/redux/types/company/index.ts
var company = __webpack_require__("ppz9");

// CONCATENATED MODULE: ./src/redux/actions/company/company.ts

const getAllCompany = payload => ({
  type: company["a" /* GET_ALL_COMPANY */],
  payload
});
const getAllCompanySuccess = payload => ({
  type: company["b" /* GET_ALL_COMPANY_SUCCESS */],
  payload
});
const getCompany = payload => ({
  type: company["c" /* GET_COMPANY */],
  payload
});
const getCompanySuccess = payload => ({
  type: company["f" /* GET_COMPANY_SUCCESS */],
  payload
});
const updateCompany = payload => ({
  type: company["q" /* UPDATE_COMPANY */],
  payload
});
const updateCompanyProvince = () => ({
  type: company["r" /* UPDATE_COMPANY_PROVINCE */]
});
const setSubscribeCompany = payload => ({
  type: company["p" /* SET_SUBSCRIBE_COMPANY */],
  payload
});
const setSeenCompany = payload => ({
  type: company["o" /* SET_SEEN_COMPANY */],
  payload
});
const getNewestCompany = payload => ({
  type: company["m" /* GET_NEWEST_COMPANY */],
  payload
});
const getNewestCompanySuccess = payload => ({
  type: company["n" /* GET_NEWEST_COMPANY_SUCCESS */],
  payload
});
const getMostViewCompany = payload => ({
  type: company["k" /* GET_MOST_VIEW_COMPANY */],
  payload
});
const getMostViewCompanySuccess = payload => ({
  type: company["l" /* GET_MOST_VIEW_COMPANY_SUCCESS */],
  payload
});
const getMostAppliedCompany = payload => ({
  type: company["g" /* GET_MOST_APPLIED_COMPANY */],
  payload
});
const getMostAppliedCompanySuccess = payload => ({
  type: company["h" /* GET_MOST_APPLIED_COMPANY_SUCCESS */],
  payload
});
const getMostRecruitingCompany = payload => ({
  type: company["i" /* GET_MOST_RECRUITING_COMPANY */],
  payload
});
const getMostRecruitingCompanySuccess = payload => ({
  type: company["j" /* GET_MOST_RECRUITING_COMPANY_SUCCESS */],
  payload
});
const getCompanyBySlug = payload => ({
  type: company["d" /* GET_COMPANY_BY_SLUG */],
  payload
});
const getCompanyBySlugSuccess = payload => ({
  type: company["e" /* GET_COMPANY_BY_SLUG_SUCCESS */],
  payload
});
// CONCATENATED MODULE: ./src/redux/actions/company/index.ts


/***/ }),

/***/ "jAoK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getNotificationsByUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getNotificationsByUserSuccess; });
/* unused harmony export getNotificationsSetting */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getNotificationsSettingSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getNotificationsSettingByUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getNotificationsSettingByUserSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return setSeenForNotify; });
/* unused harmony export createNotifySetting */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createNotify; });
/* harmony import */ var _redux_types_notification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("C4hx");

const getNotificationsByUser = payload => ({
  type: _redux_types_notification__WEBPACK_IMPORTED_MODULE_0__[/* GET_NOTIFICATIONS_BY_USER */ "c"],
  payload
});
const getNotificationsByUserSuccess = payload => ({
  type: _redux_types_notification__WEBPACK_IMPORTED_MODULE_0__[/* GET_NOTIFICATIONS_BY_USER_SUCCESS */ "d"],
  payload
});
const getNotificationsSetting = payload => ({
  type: _redux_types_notification__WEBPACK_IMPORTED_MODULE_0__[/* GET_NOTIFICATIONS_SETTING */ "e"],
  payload
});
const getNotificationsSettingSuccess = payload => ({
  type: _redux_types_notification__WEBPACK_IMPORTED_MODULE_0__[/* GET_NOTIFICATIONS_SETTING_SUCCESS */ "h"],
  payload
});
const getNotificationsSettingByUser = payload => ({
  type: _redux_types_notification__WEBPACK_IMPORTED_MODULE_0__[/* GET_NOTIFICATIONS_SETTING_BY_USER */ "f"],
  payload
});
const getNotificationsSettingByUserSuccess = payload => ({
  type: _redux_types_notification__WEBPACK_IMPORTED_MODULE_0__[/* GET_NOTIFICATIONS_SETTING_BY_USER_SUCCESS */ "g"],
  payload
});
const setSeenForNotify = payload => ({
  type: _redux_types_notification__WEBPACK_IMPORTED_MODULE_0__[/* SET_SEEN_FOR_NOTIFY */ "i"],
  payload
});
const createNotifySetting = payload => ({
  type: _redux_types_notification__WEBPACK_IMPORTED_MODULE_0__[/* CREATE_NOTIFY_SETTING */ "b"],
  payload
});
const createNotify = payload => ({
  type: _redux_types_notification__WEBPACK_IMPORTED_MODULE_0__[/* CREATE_NOTIFY */ "a"],
  payload
});

/***/ }),

/***/ "jDDT":
/***/ (function(module, exports) {



/***/ }),

/***/ "jNw/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ getAllInvitationApply; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ getAllInvitationApplySuccess; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ getInvitationApplyByIdSuccess; });

// UNUSED EXPORTS: getInvitationApplyById, confirmTheInvitation

// EXTERNAL MODULE: ./src/redux/types/invitationApply/index.ts
var invitationApply = __webpack_require__("bKVk");

// CONCATENATED MODULE: ./src/redux/actions/invitationApply/invitationApply.ts

const getAllInvitationApply = payload => ({
  type: invitationApply["b" /* GET_ALL_INVITATION_APPLY */],
  payload
});
const getAllInvitationApplySuccess = payload => ({
  type: invitationApply["c" /* GET_ALL_INVITATION_APPLY_SUCCESS */],
  payload
});
const getInvitationApplyById = payload => ({
  type: invitationApply["d" /* GET_INVITATION_APPLY_BY_ID */],
  payload
});
const getInvitationApplyByIdSuccess = payload => ({
  type: invitationApply["e" /* GET_INVITATION_APPLY_BY_ID_SUCCESS */],
  payload
});
const confirmTheInvitation = payload => ({
  type: invitationApply["a" /* CONFIRM_THE_INVITATION */],
  payload
});
// CONCATENATED MODULE: ./src/redux/actions/invitationApply/index.ts


/***/ }),

/***/ "k3uC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__("6f9I");

// EXTERNAL MODULE: ./src/components/ToastNotification/index.tsx + 3 modules
var ToastNotification = __webpack_require__("CFwT");

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: ./src/redux/store.ts + 131 modules
var redux_store = __webpack_require__("ALsR");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "apollo-link-http"
var external_apollo_link_http_ = __webpack_require__("TG1l");

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__("0bYB");
var external_isomorphic_unfetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_unfetch_);

// EXTERNAL MODULE: external "apollo-link-persisted-queries"
var external_apollo_link_persisted_queries_ = __webpack_require__("NSsw");

// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__("z+8S");

// CONCATENATED MODULE: ./src/common/utils/useApollo.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const graphqlUrl = "http://api-v1.tuyendungvn.online";
let useApollo_apolloClient;

const createApolloClient = initialState => {
  const isBrowser = false;
  return new client_["ApolloClient"]({
    connectToDevTools: isBrowser,
    ssrMode: !isBrowser,
    link: Object(external_apollo_link_persisted_queries_["createPersistedQueryLink"])().concat(new external_apollo_link_http_["HttpLink"]({
      uri: `${graphqlUrl}/graphql`,
      // Use fetch() polyfill on the server
      fetch: !isBrowser ? external_isomorphic_unfetch_default.a : undefined
    })),
    cache: new client_["InMemoryCache"]().restore(initialState || {})
  });
};

const initializeApollo = initialState => {
  const _apolloClient = useApollo_apolloClient || createApolloClient(initialState); // If page has Next.js data fetching methods that use Apollo Client, the initial state
  // get hydrated here


  if (initialState) {
    // get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract(); // restore the cache using the data passed from getStaticProps or getServerSideProps
    // combined with the existing cached data


    _apolloClient.cache.restore(_objectSpread(_objectSpread({}, existingCache), initialState));
  } // For SSG and SSR always create a new Apollo Client


  if (true) return _apolloClient; // create the Apollo Client once in the client

  if (!useApollo_apolloClient) useApollo_apolloClient = _apolloClient;
  return _apolloClient;
};

const useApollo = initialState => {
  const store = Object(external_react_["useMemo"])(() => initializeApollo(initialState), [initialState]);
  return store;
};
// CONCATENATED MODULE: ./src/common/utils/eventManager.ts
function eventManager_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class EventManager {
  constructor() {
    eventManager_defineProperty(this, "listeners", {});
  }

  addListener(name, fn) {
    (this.listeners[name] = this.listeners[name] || new Set()).add(fn);
    return this;
  }

  fire(name, payload) {
    let listCallbacks = this.listeners[name];

    if (listCallbacks !== undefined) {
      let data = {},
          evt;

      for (let cb of Array.from(listCallbacks)) {
        evt = this.EventArg(name, data);
        cb(payload);
        data = evt.data;

        if (evt.removed) {
          listCallbacks.delete(cb);
        }

        if (evt.cancelled) {
          break;
        }
      }
    }

    return this;
  }

  EventArg(name, data) {
    let cancelled = false;
    let removed = false;
    return {
      name,
      data,
      cancelled,
      removed,

      cancel() {
        this.cancelled = true;
      },

      remove() {
        this.removed = true;
      }

    };
  }

}
globalThis.eventManager = new EventManager();
// EXTERNAL MODULE: ./src/common/styles/index.scss
var styles = __webpack_require__("9XMF");

// EXTERNAL MODULE: ./node_modules/react-lazy-load-image-component/src/effects/blur.css
var effects_blur = __webpack_require__("R3Vo");

// EXTERNAL MODULE: ./node_modules/nprogress/nprogress.css
var nprogress = __webpack_require__("pdi6");

// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__("jDDT");

// EXTERNAL MODULE: ./node_modules/react-quill/dist/quill.snow.css
var quill_snow = __webpack_require__("91UR");

// EXTERNAL MODULE: ./node_modules/react-datepicker/dist/react-datepicker.css
var react_datepicker = __webpack_require__("5Buo");

// EXTERNAL MODULE: ./node_modules/slick-carousel/slick/slick.css
var slick = __webpack_require__("tyWD");

// EXTERNAL MODULE: ./node_modules/slick-carousel/slick/slick-theme.css
var slick_theme = __webpack_require__("K7k0");

// CONCATENATED MODULE: ./src/pages/_app/index.tsx




function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Lib import



 // Native import




 // SCSS local import

 // CSS lib import








const TopProgressBar = dynamic_default()(() => {
  return __webpack_require__.e(/* import() */ 23).then(__webpack_require__.bind(null, "lrkt"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("lrkt")],
    modules: ["_app/index.tsx -> " + "@components/TopProgressBar"]
  }
});

const WebApp = props => {
  const {
    Component,
    pageProps
  } = props;
  const apolloClient = useApollo(pageProps.initialApolloState);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "viewport",
        content: "viewport-fit=cover"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        charSet: "utf-8"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black-translucent"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "mobile-web-app-capable",
        content: "yes"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "apple-mobile-web-app-capable",
        content: "yes"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        content: "width=device-width, initial-scale=1",
        name: "viewport"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(react_hooks_["ApolloProvider"], {
      client: apolloClient,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(ToastNotification["a" /* StyledToastContainer */], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(TopProgressBar, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _app_objectSpread(_app_objectSpread({}, pageProps), {}, {
        auth: pageProps.auth
      }))]
    })]
  });
};

/* harmony default export */ var _app = __webpack_exports__["default"] = (redux_store["a" /* wrapper */].withRedux(Object(external_next_i18next_["appWithTranslation"])(WebApp)));

/***/ }),

/***/ "mU8t":
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "nIqT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getAllJobType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getAllJobTypeSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAllJobLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getAllJobLevelSuccess; });
/* unused harmony export getAllJobLevelFilter */
/* unused harmony export getAllJobLevelFilterSuccess */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getAllLevelPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getAllLevelPriceSuccess; });
/* unused harmony export setJobLevelSelected */
/* unused harmony export setLevelPriceSelected */
/* unused harmony export setJobTypeSelected */
/* harmony import */ var _redux_types_job__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("aOmp");

const getAllJobType = payload => ({
  type: _redux_types_job__WEBPACK_IMPORTED_MODULE_0__[/* GET_ALL_JOB_TYPE */ "e"],
  payload
});
const getAllJobTypeSuccess = payload => ({
  type: _redux_types_job__WEBPACK_IMPORTED_MODULE_0__[/* GET_ALL_JOB_TYPE_SUCCESS */ "f"],
  payload
});
const getAllJobLevel = () => ({
  type: _redux_types_job__WEBPACK_IMPORTED_MODULE_0__[/* GET_ALL_JOB_LEVEL */ "a"]
});
const getAllJobLevelSuccess = payload => ({
  type: _redux_types_job__WEBPACK_IMPORTED_MODULE_0__[/* GET_ALL_JOB_LEVEL_SUCCESS */ "d"],
  payload
});
const getAllJobLevelFilter = () => ({
  type: _redux_types_job__WEBPACK_IMPORTED_MODULE_0__[/* GET_ALL_JOB_LEVEL_FILTER */ "b"]
});
const getAllJobLevelFilterSuccess = payload => ({
  type: _redux_types_job__WEBPACK_IMPORTED_MODULE_0__[/* GET_ALL_JOB_LEVEL_FILTER_SUCCESS */ "c"],
  payload
});
const getAllLevelPrice = payload => ({
  type: _redux_types_job__WEBPACK_IMPORTED_MODULE_0__[/* GET_ALL_LEVEL_PRICE */ "g"],
  payload
});
const getAllLevelPriceSuccess = payload => ({
  type: _redux_types_job__WEBPACK_IMPORTED_MODULE_0__[/* GET_ALL_LEVEL_PRICE_SUCCESS */ "h"],
  payload
});
const setJobLevelSelected = payload => ({
  type: _redux_types_job__WEBPACK_IMPORTED_MODULE_0__[/* SET_JOB_LEVEL_SELECTED */ "i"],
  payload
});
const setLevelPriceSelected = payload => ({
  type: _redux_types_job__WEBPACK_IMPORTED_MODULE_0__[/* SET_LEVEL_PRICE_SELECTED */ "k"],
  payload
});
const setJobTypeSelected = payload => ({
  type: _redux_types_job__WEBPACK_IMPORTED_MODULE_0__[/* SET_JOB_TYPE_SELECTED */ "j"],
  payload
});

/***/ }),

/***/ "nLlu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getEvaluateByUserId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getEvaluateByUserIdSuccess; });
/* harmony import */ var _redux_types_evaluate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("RlGo");

const getEvaluateByUserId = payload => ({
  type: _redux_types_evaluate__WEBPACK_IMPORTED_MODULE_0__[/* GET_EVALUATE_BY_USER_ID */ "a"],
  payload
});
const getEvaluateByUserIdSuccess = payload => ({
  type: _redux_types_evaluate__WEBPACK_IMPORTED_MODULE_0__[/* GET_EVALUATE_BY_USER_ID_SUCCESS */ "b"],
  payload
});

/***/ }),

/***/ "oAEb":
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "oJ6/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_ALL_REQUEST_REVIEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_ALL_REQUEST_REVIEW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GET_EVALUATE_BY_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GET_EVALUATE_BY_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CREATE_REQUEST_REVIEW; });
const GET_ALL_REQUEST_REVIEW = "GET_ALL_REQUEST_REVIEW";
const GET_ALL_REQUEST_REVIEW_SUCCESS = "GET_ALL_REQUEST_REVIEW_SUCCESS";
const GET_EVALUATE_BY_USER = "GET_EVALUATE_BY_USER";
const GET_EVALUATE_BY_USER_SUCCESS = "GET_EVALUATE_BY_USER_SUCCESS";
const CREATE_REQUEST_REVIEW = "CREATE_REQUEST_REVIEW";

/***/ }),

/***/ "p2dX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ graphQLCommon; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ axiosJSON; });

// EXTERNAL MODULE: external "apollo-boost"
var external_apollo_boost_ = __webpack_require__("YvTO");

// EXTERNAL MODULE: external "apollo-upload-client"
var external_apollo_upload_client_ = __webpack_require__("BPlj");

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__("0bYB");

// CONCATENATED MODULE: ./src/common/config/graphql/index.ts



const propertyApiLink = Object(external_apollo_upload_client_["createUploadLink"])({
  uri: `${"http://api-v1.tuyendungvn.online"}/graphql`,
  credentials: "include",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "crossdomain": true
  }
});
const propertyApi = new external_apollo_boost_["ApolloClient"]({
  ssrMode: true,
  link: propertyApiLink,
  cache: new external_apollo_boost_["InMemoryCache"](),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "no-cache",
      errorPolicy: "ignore"
    },
    query: {
      fetchPolicy: "no-cache",
      errorPolicy: "all"
    },
    mutate: {
      errorPolicy: "all"
    }
  }
});
/* harmony default export */ var graphql = (propertyApi);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./src/common/utils/auth.ts
var auth = __webpack_require__("DATO");

// CONCATENATED MODULE: ./src/common/utils/api.ts




const printErrorOfGraphQLFromServer = error => {
  var _error$networkError, _error$networkError$r, _error$networkError$r2;

  let errorMessage = error === null || error === void 0 ? void 0 : (_error$networkError = error.networkError) === null || _error$networkError === void 0 ? void 0 : (_error$networkError$r = _error$networkError.result) === null || _error$networkError$r === void 0 ? void 0 : (_error$networkError$r2 = _error$networkError$r.errors[0]) === null || _error$networkError$r2 === void 0 ? void 0 : _error$networkError$r2.message;

  if (!errorMessage) {
    errorMessage = error === null || error === void 0 ? void 0 : error.message;
  }

  console.error("\x1b[31m", `⚠️ [GraphQL Error] ${errorMessage}`, "\x1b[37m");
};

const graphQLCommon = async (query, variables) => {
  try {
    const response = await graphql.query({
      query,
      variables,
      context: {
        headers: {
          Authorization: `Bearer ${Object(auth["b" /* getToken */])()}`
        }
      }
    });
    const errors = (response === null || response === void 0 ? void 0 : response.errors) || [];
    if (errors.length > 0) printErrorOfGraphQLFromServer(errors[0]);
    return response;
  } catch (error) {
    printErrorOfGraphQLFromServer(error);
    return error;
  }
};

const axiosJSON = options => {
  return external_axios_default()(options).then(res => res).catch(error => error);
};



/***/ }),

/***/ "pdi6":
/***/ (function(module, exports) {



/***/ }),

/***/ "ppz9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_ALL_COMPANY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_ALL_COMPANY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_COMPANY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return GET_COMPANY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return UPDATE_COMPANY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return UPDATE_COMPANY_PROVINCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return SET_SUBSCRIBE_COMPANY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return SET_SEEN_COMPANY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return GET_NEWEST_COMPANY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return GET_NEWEST_COMPANY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return GET_MOST_VIEW_COMPANY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return GET_MOST_VIEW_COMPANY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return GET_MOST_APPLIED_COMPANY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return GET_MOST_APPLIED_COMPANY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return GET_MOST_RECRUITING_COMPANY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return GET_MOST_RECRUITING_COMPANY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GET_COMPANY_BY_SLUG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GET_COMPANY_BY_SLUG_SUCCESS; });
const GET_ALL_COMPANY = "GET_ALL_COMPANY";
const GET_ALL_COMPANY_SUCCESS = "GET_ALL_COMPANY_SUCCESS";
const GET_COMPANY = "GET_COMPANY";
const GET_COMPANY_SUCCESS = "GET_COMPANY_SUCCESS";
const UPDATE_COMPANY = "UPDATE_COMPANY";
const UPDATE_COMPANY_PROVINCE = "UPDATE_COMPANY_PROVINCE";
const SET_SUBSCRIBE_COMPANY = "SET_SUBSCRIBE_COMPANY";
const SET_SEEN_COMPANY = "SET_SEEN_COMPANY";
const GET_NEWEST_COMPANY = "GET_NEWEST_COMPANY";
const GET_NEWEST_COMPANY_SUCCESS = "GET_NEWEST_COMPANY_SUCCESS";
const GET_MOST_VIEW_COMPANY = "GET_MOST_VIEW_COMPANY";
const GET_MOST_VIEW_COMPANY_SUCCESS = "GET_MOST_VIEW_COMPANY_SUCCESS";
const GET_MOST_APPLIED_COMPANY = "GET_MOST_APPLIED_COMPANY";
const GET_MOST_APPLIED_COMPANY_SUCCESS = "GET_MOST_APPLIED_COMPANY_SUCCESS";
const GET_MOST_RECRUITING_COMPANY = "GET_MOST_RECRUITING_COMPANY";
const GET_MOST_RECRUITING_COMPANY_SUCCESS = "GET_MOST_RECRUITING_COMPANY_SUCCESS";
const GET_COMPANY_BY_SLUG = "GET_COMPANY_BY_SLUG";
const GET_COMPANY_BY_SLUG_SUCCESS = "GET_COMPANY_BY_SLUG_SUCCESS";

/***/ }),

/***/ "q465":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ getUserProfile; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ getAllUser; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ checkProfileUserExist; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ updateUserProfile; });

// EXTERNAL MODULE: external "apollo-boost"
var external_apollo_boost_ = __webpack_require__("YvTO");

// EXTERNAL MODULE: ./src/common/utils/api.ts + 1 modules
var api = __webpack_require__("p2dX");

// CONCATENATED MODULE: ./src/services/user/get.ts


const user = `
    _id
      code
      title
      history
      identityCard
      province {
        _id
        name
        code
      }
      clientId
      provider
      birthday
      gender
      urlAvt {
        default
        small
        medium
      }
      firstName
      lastName
      displayName
      company {
        name
        code
      }
      username
      email
      phoneNumber
      appliedRecruitment {
        recruitment {
          _id
          slug
          name
          level {
            name
          }
          location {
            province {
              name
            }
          }
          createdAt
        }
        date
      }
      district {
        name
        code
        _id
      }
      ward {
        name
        code
        _id
      }
      street {
        name
        code
        _id
      }
      point
      postedJob
      subscribedCompany {
        name
      }
      seenCompany {
        name
      }
      seenRecruitment {
        name
      }
      savedRecruitment {
        _id
        slug
        name
        level {
          name
        }
        location {
          province {
            name
          }
        }
        createdAt
      }
      slug
      keywords
      language
      enabled
      career {
        _id
        name
      }
      isSeekingJob
`;
const GET_USER_PROFILE = external_apollo_boost_["gql"]`
  query($id: String!) {
    getUserById(id: $id) {
      ${user}
    }
  }
`;
const getUserProfile = async variables => {
  const response = await Object(api["b" /* graphQLCommon */])(GET_USER_PROFILE, variables);
  return response;
};
const GET_ALL_USER = external_apollo_boost_["gql"]`
query
  {
    getAllUserHasPermissions(permissions:["ADMIN","EMPLOYER","CANDIDATE","MANAGER"], page: 0, size: 9999)
    {
      totalCount
      results{
        ${user}
     }
     
    }
  }
`;
const getAllUser = async () => {
  const response = await Object(api["b" /* graphQLCommon */])(GET_ALL_USER, null);
  return response;
};
const CHECK_USER_PROFILE_EXIST = external_apollo_boost_["gql"]`
  query {
    checkProfileUserExist
  }
`;
const checkProfileUserExist = async () => {
  const response = await Object(api["b" /* graphQLCommon */])(CHECK_USER_PROFILE_EXIST, null);
  return response;
};
// CONCATENATED MODULE: ./src/services/user/update.ts


const UPDATE_USER_PROFILE = external_apollo_boost_["gql"]`
  mutation UpdateUserProfileMutation($updateUserInput: UpdateUserInput!) {
    updateUserProfile(updateUserInput: $updateUserInput) {
      _id
      displayName
    }
  }
`;
const updateUserProfile = async variables => {
  const response = await Object(api["b" /* graphQLCommon */])(UPDATE_USER_PROFILE, variables);
  return response;
};
// CONCATENATED MODULE: ./src/services/user/index.ts



/***/ }),

/***/ "q6WE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return updateUserProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getUserProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getUserProfileSuccess; });
/* harmony import */ var _redux_types_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("X6M4");

const updateUserProfile = payload => ({
  type: _redux_types_user__WEBPACK_IMPORTED_MODULE_0__[/* UPDATE_USER_PROFILE */ "c"],
  payload
});
const getUserProfile = payload => ({
  type: _redux_types_user__WEBPACK_IMPORTED_MODULE_0__[/* GET_USER_PROFILE */ "a"],
  payload
});
const getUserProfileSuccess = payload => ({
  type: _redux_types_user__WEBPACK_IMPORTED_MODULE_0__[/* GET_USER_PROFILE_SUCCESS */ "b"],
  payload
});

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "spxh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getAdAll */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAdAllSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getAdsByLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getAdsByLocationSuccess; });
/* unused harmony export getAdsJobPage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getAdsJobPageSuccess; });
/* harmony import */ var _redux_types_ads__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("DYVk");

const getAdAll = payload => ({
  type: _redux_types_ads__WEBPACK_IMPORTED_MODULE_0__[/* GET_ADS_ALL */ "a"],
  payload
});
const getAdAllSuccess = payload => ({
  type: _redux_types_ads__WEBPACK_IMPORTED_MODULE_0__[/* GET_ADS_ALL_SUCCESS */ "b"],
  payload
});
const getAdsByLocation = payload => ({
  type: _redux_types_ads__WEBPACK_IMPORTED_MODULE_0__[/* GET_ADS_BY_LOCATION */ "c"],
  payload
});
const getAdsByLocationSuccess = payload => ({
  type: _redux_types_ads__WEBPACK_IMPORTED_MODULE_0__[/* GET_ADS_BY_LOCATION_SUCCESS */ "d"],
  payload
});
const getAdsJobPage = payload => ({
  type: _redux_types_ads__WEBPACK_IMPORTED_MODULE_0__[/* GET_ADS_JOB_PAGE */ "e"],
  payload
});
const getAdsJobPageSuccess = payload => ({
  type: _redux_types_ads__WEBPACK_IMPORTED_MODULE_0__[/* GET_ADS_JOB_PAGE_SUCCESS */ "f"],
  payload
});

/***/ }),

/***/ "tCzn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_ALL_BENEFIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_ALL_BENEFIT_SUCCESS; });
const GET_ALL_BENEFIT = "GET_ALL_BENEFIT";
const GET_ALL_BENEFIT_SUCCESS = "GET_ALL_BENEFIT_SUCCESS";

/***/ }),

/***/ "tlnx":
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),

/***/ "txk1":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "tyWD":
/***/ (function(module, exports) {



/***/ }),

/***/ "uZqx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAllStaticPages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getAllStaticPagesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getStaticPageBySlug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getStaticPageBySlugSuccess; });
/* harmony import */ var _redux_types_staticPages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("DoQ8");

const getAllStaticPages = payload => ({
  type: _redux_types_staticPages__WEBPACK_IMPORTED_MODULE_0__[/* GET_ALL_STATIC_PAGES */ "a"],
  payload
});
const getAllStaticPagesSuccess = payload => ({
  type: _redux_types_staticPages__WEBPACK_IMPORTED_MODULE_0__[/* GET_ALL_STATIC_PAGES_SUCCESS */ "b"],
  payload
});
const getStaticPageBySlug = payload => ({
  type: _redux_types_staticPages__WEBPACK_IMPORTED_MODULE_0__[/* GET_STATIC_PAGE_BY_SLUG */ "c"],
  payload
});
const getStaticPageBySlugSuccess = payload => ({
  type: _redux_types_staticPages__WEBPACK_IMPORTED_MODULE_0__[/* GET_STATIC_PAGE_BY_SLUG_SUCCESS */ "d"],
  payload
});

/***/ }),

/***/ "ufKq":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "uncI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GET_ALL_SCHEDULE_INTERVIEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GET_ALL_SCHEDULE_INTERVIEW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return GET_SCHEDULE_INTERVIEW_BY_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return GET_SCHEDULE_INTERVIEW_BY_ID_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return UPDATE_SCHEDULE_INTERVIEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CREATE_SCHEDULE_INTERVIEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CONFIRM_THE_SCHEDULE_INTERVIEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CANCEL_THE_SCHEDULE_INTERVIEW; });
const GET_ALL_SCHEDULE_INTERVIEW = "GET_ALL_SCHEDULE_INTERVIEW";
const GET_ALL_SCHEDULE_INTERVIEW_SUCCESS = "GET_ALL_SCHEDULE_INTERVIEW_SUCCESS";
const GET_SCHEDULE_INTERVIEW_BY_ID = "GET_SCHEDULE_INTERVIEW_BY_ID";
const GET_SCHEDULE_INTERVIEW_BY_ID_SUCCESS = "GET_SCHEDULE_INTERVIEW_BY_ID_SUCCESS";
const UPDATE_SCHEDULE_INTERVIEW = "UPDATE_SCHEDULE_INTERVIEW";
const CREATE_SCHEDULE_INTERVIEW = "CREATE_SCHEDULE_INTERVIEW";
const CONFIRM_THE_SCHEDULE_INTERVIEW = "CONFIRM_THE_SCHEDULE_INTERVIEW";
const CANCEL_THE_SCHEDULE_INTERVIEW = "CANCEL_THE_SCHEDULE_INTERVIEW";

/***/ }),

/***/ "v1+Z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SVG; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const SVG = props => {
  const {
    name = "",
    src
  } = props,
        rest = _objectWithoutProperties(props, ["name", "src"]);

  if (!!src) {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", _objectSpread({
      src: src,
      alt: `${name} svg icon`
    }, rest));
  }

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", _objectSpread({
    src: `/svg/${name}.svg`,
    alt: `${name} svg icon`
  }, rest));
};



/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "y/ha":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_ALL_BLOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_ALL_BLOG_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_BLOG_BY_SLUG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GET_BLOG_BY_SLUG_SUCCESS; });
const GET_ALL_BLOG = "GET_ALL_BLOG";
const GET_ALL_BLOG_SUCCESS = "GET_ALL_BLOG_SUCCESS";
const GET_BLOG_BY_SLUG = "GET_BLOG_BY_SLUG";
const GET_BLOG_BY_SLUG_SUCCESS = "GET_BLOG_BY_SLUG_SUCCESS";

/***/ }),

/***/ "yIJW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ getRecordById; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ getRecordByUserId; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ checkRecordUserExist; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ updateRecord; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ createRecord; });

// UNUSED EXPORTS: getAllRecord

// EXTERNAL MODULE: ./src/common/utils/api.ts + 1 modules
var api = __webpack_require__("p2dX");

// EXTERNAL MODULE: external "apollo-boost"
var external_apollo_boost_ = __webpack_require__("YvTO");

// CONCATENATED MODULE: ./src/services/record/get.ts


const GET_ALL_RECORD = external_apollo_boost_["gql"]`
  query($filterRecord: FilterRecord, $page: Int, $size: Int) {
    getAllRecord(filterRecord: $filterRecord, page: $page, size: $size) {
      totalCount
      results {
        _id
        user {
          firstName
          lastName
          urlAvt {
            default
            medium
            small
          }
        }
        candidateCode
        workSaved {
          name
        }
        point
        evaluator {
          firstName
          lastName
        }
      }
    }
  }
`;
const getAllRecord = async variables => {
  const response = await Object(api["b" /* graphQLCommon */])(GET_ALL_RECORD, variables);
  return response;
};
const GET_RECORD_BY_ID = external_apollo_boost_["gql"]`
  query($id: String!) {
    getRecordById(id: $id) {
      _id
      user {
        _id
        displayName
        firstName
        lastName
        urlAvt {
          medium
          default
          small
        }
      }
      jobType
      generalInformation
      workExperience {
        companyName
        jobName
        timeStart
        timeEnd
        experience
        description
      }
      education {
        schoolName
        major
        timeStart
        timeEnd
        degree
        description
      }
      workPlace {
        _id
        name
        nameEn
        code
        countryCode
      }
      career {
        _id
        icon {
          default
          medium
          small
        }
        name
        categoryLevel1 {
          name
        }
        description
      }
      jobLevelWanted
      salaryWanted
      benefitsWanted {
        icon {
          default
          small
          medium
        }
        name
        description
        keywords
      }
      employerSeenRecord {
        employer {
          _id
          username
          displayName
        }
        date
        views
      }
      description
      urlCV
      fileNameCV
      slug
      keywords
      createdAt
      updatedAt
    }
  }
`;
const getRecordById = async variables => {
  const response = await Object(api["b" /* graphQLCommon */])(GET_RECORD_BY_ID, variables);
  return response;
};
const GET_RECORD_BY_USER_ID = external_apollo_boost_["gql"]`
  query($userId: String!) {
    getRecordByUser(userId: $userId) {
      _id
      user {
        displayName
        firstName
        lastName
        urlAvt {
          medium
          default
          small
        }
      }
      jobType
      generalInformation
      workExperience {
        companyName
        jobName
        timeStart
        timeEnd
        experience
        description
      }
      education {
        schoolName
        major
        timeStart
        timeEnd
        degree
        description
      }
      workPlace {
        _id
        name
        nameEn
        code
        countryCode
      }
      career {
        _id
        icon {
          default
          medium
          small
        }
        name
        categoryLevel1 {
          name
        }
        description
      }
      jobLevelWanted
      salaryWanted
      benefitsWanted {
        _id
        icon {
          default
          small
          medium
        }
        name
        description
        keywords
      }
      employerSeenRecord {
        employer {
          _id
          username
          displayName
          company {
            _id
          }
        }
        date
        views
      }
      description
      urlCV
      fileNameCV
      slug
      keywords
      createdAt
      updatedAt
    }
  }
`;
const getRecordByUserId = async variables => {
  const response = await Object(api["b" /* graphQLCommon */])(GET_RECORD_BY_USER_ID, variables);
  return response;
};
const CHECK_RECORD_USER_EXIST = external_apollo_boost_["gql"]`
  query {
    checkRecordUserExist
  }
`;
const checkRecordUserExist = async () => {
  const response = await Object(api["b" /* graphQLCommon */])(CHECK_RECORD_USER_EXIST, null);
  return response;
};
// CONCATENATED MODULE: ./src/services/record/update.ts


const UPDATE_RECORD = external_apollo_boost_["gql"]`
  mutation UpdateRecordMutation(
    $id: String!
    $recordUpdateInput: RecordUpdateInput!
  ) {
    updateRecord(id: $id, recordUpdateInput: $recordUpdateInput) {
      _id
    }
  }
`;
const updateRecord = async variables => {
  const response = await Object(api["b" /* graphQLCommon */])(UPDATE_RECORD, variables);
  return response;
};
// CONCATENATED MODULE: ./src/services/record/create.ts


const CREATE_RECORD = external_apollo_boost_["gql"]`
  mutation CreateRecordMutation($recordCreateInput: RecordCreateInput!) {
    createRecord(recordCreateInput: $recordCreateInput) {
      _id
    }
  }
`;
const createRecord = async variables => {
  const response = await Object(api["b" /* graphQLCommon */])(CREATE_RECORD, variables);
  return response;
};
// CONCATENATED MODULE: ./src/services/record/index.ts




/***/ }),

/***/ "z+8S":
/***/ (function(module, exports) {

module.exports = require("@apollo/client");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });