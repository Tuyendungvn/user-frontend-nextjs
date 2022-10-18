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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "0Jp5":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogTitle");

/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "0n/8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROOT_URL; });
const isDevelopment = false;
const ROOT_URL = isDevelopment ? `http://localhost:${"1999"}` : `${process.env.NEXT_PUBLIC_HOST_FRONTEND}`;

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

/***/ "1gBk":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogActions");

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

/***/ "2Hz8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return withRecord; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YLtl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_hooks_useRedirect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Aw+l");
/* harmony import */ var _common_hooks_useAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("2rfL");
/* harmony import */ var _containers_JobSeeker_PersonalInfo_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("TvDC");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("4mzW");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_6__);







const withRecord = Component => () => {
  const {
    accountInfo
  } = Object(_common_hooks_useAuth__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])();
  const redirect = Object(_common_hooks_useRedirect__WEBPACK_IMPORTED_MODULE_3__[/* useRedirect */ "a"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (!Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isEmpty"])(accountInfo)) {
      const fullRecordAndProfile = localStorage.getItem("RECORD_PROFILE_EXIST");

      if (!fullRecordAndProfile) {
        checkFullProfileAndRecord();
      } else {
        if (fullRecordAndProfile === "0") {
          redirect(_routes__WEBPACK_IMPORTED_MODULE_6__["PATH"].JOB_MANAGEMENT_PERSONAL_INFO);
        }
      }
    }
  }, []);

  const checkFullProfileAndRecord = async () => {
    // const recordResult = await checkRecordUserService();
    const profileResult = await Object(_containers_JobSeeker_PersonalInfo_helper__WEBPACK_IMPORTED_MODULE_5__[/* checkProfileUserService */ "b"])();

    if (profileResult) {
      Object(_containers_JobSeeker_PersonalInfo_helper__WEBPACK_IMPORTED_MODULE_5__[/* addLocalStorage */ "a"])(1);
    } else {
      redirect(_routes__WEBPACK_IMPORTED_MODULE_6__["PATH"].JOB_MANAGEMENT_PERSONAL_INFO);
    }
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Component, {});
};

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

/***/ "2rfL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4mzW");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _useRedirect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Aw+l");
/* harmony import */ var _common_utils_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("DATO");
/* harmony import */ var _redux_actions_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("3yXT");







const useAuth = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const redirect = Object(_useRedirect__WEBPACK_IMPORTED_MODULE_3__[/* useRedirect */ "a"])();
  const {
    isAuth,
    accountInfo
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.auth);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // to make sure data won't be lacked
    dispatch(Object(_redux_actions_auth__WEBPACK_IMPORTED_MODULE_5__[/* setIsAuth */ "l"])(Object(_common_utils_auth__WEBPACK_IMPORTED_MODULE_4__[/* isAuthenticated */ "d"])()));
    dispatch(Object(_redux_actions_auth__WEBPACK_IMPORTED_MODULE_5__[/* setAccountInfo */ "k"])(Object(_common_utils_auth__WEBPACK_IMPORTED_MODULE_4__[/* getLoggedInAccount */ "a"])()));
  }, []);
  const logout = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    dispatch(Object(_redux_actions_auth__WEBPACK_IMPORTED_MODULE_5__[/* removeCurrentUser */ "h"])());
    redirect(_routes__WEBPACK_IMPORTED_MODULE_2__["PATH"].LOGIN, {}, {}, {
      useRefresh: true
    });
  }, []);
  return {
    isAuth,
    accountInfo,
    logout
  };
};

/* harmony default export */ __webpack_exports__["a"] = (useAuth);

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

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3izT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./src/designs/Input/styles.tsx

const Container = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1ag1wqh-0"
})(["", ""], {
  "position": "relative"
});
const Label = external_styled_components_default.a.p.withConfig({
  displayName: "styles__Label",
  componentId: "sc-1ag1wqh-1"
})(["", ""], {
  "fontWeight": "500",
  "fontSize": "14px",
  "marginBottom": "5px",
  "@media (min-width: 600px)": {
    "fontSize": "16px"
  }
});
const Required = external_styled_components_default.a.span.withConfig({
  displayName: "styles__Required",
  componentId: "sc-1ag1wqh-2"
})(["", ""], {
  "fontSize": "16px",
  "fontWeight": "500",
  "--tw-text-opacity": "1",
  "color": "rgba(199, 44, 65, var(--tw-text-opacity))",
  "marginLeft": "5px"
});
const Icon = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Icon",
  componentId: "sc-1ag1wqh-3"
})(["transform:translateY(-50%);", ""], {
  "position": "absolute",
  "zIndex": "10",
  "lineHeight": "1",
  "left": "20px",
  "top": "50%"
});
const Input = external_styled_components_default.a.input.withConfig({
  displayName: "styles__Input",
  componentId: "sc-1ag1wqh-4"
})(({
  error,
  icon,
  disabled
}) => Object(external_styled_components_["css"])(["", " ", " ", " ", ""], {
  "height": "50px",
  "width": "100%",
  "padding": "15px",
  "borderRadius": "0px",
  "fontSize": "14px",
  "lineHeight": "1",
  "--tw-text-opacity": "1",
  "color": "rgba(13, 2, 41, var(--tw-text-opacity))",
  "borderWidth": "1px",
  "borderStyle": "solid",
  "--tw-border-opacity": "1",
  "borderColor": "rgba(224, 224, 224, var(--tw-border-opacity))",
  ":focus": {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(234, 78, 27, var(--tw-border-opacity))"
  },
  "::placeholder": {
    "--tw-placeholder-opacity": "0.8",
    "color": "rgba(138, 138, 138, var(--tw-placeholder-opacity))"
  }
}, error && {
  "--tw-border-opacity": "1",
  "borderColor": "rgba(199, 44, 65, var(--tw-border-opacity))"
}, icon && {
  "paddingLeft": "50px"
}, disabled && {}));
const Error = external_styled_components_default.a.p.withConfig({
  displayName: "styles__Error",
  componentId: "sc-1ag1wqh-5"
})(["", ""], {
  "display": "flex",
  "alignItems": "center",
  "marginTop": "10px",
  "fontWeight": "400",
  "fontSize": "14px",
  "--tw-text-opacity": "1",
  "color": "rgba(199, 44, 65, var(--tw-text-opacity))"
});
// EXTERNAL MODULE: ./src/designs/SVG/index.tsx
var SVG = __webpack_require__("v1+Z");

// CONCATENATED MODULE: ./src/designs/Input/index.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const InputBox = props => {
  const {
    className = "",
    classNameInput = "",
    error,
    touched,
    icon,
    ref,
    onChangeValue,
    onChange,
    disabled = false,
    label = "",
    placeholder = "",
    required,
    value
  } = props,
        restProps = _objectWithoutProperties(props, ["className", "classNameInput", "error", "touched", "icon", "ref", "onChangeValue", "onChange", "disabled", "label", "placeholder", "required", "value"]);

  const {
    0: isError,
    1: setIsError
  } = Object(external_react_["useState"])(false);
  Object(external_react_["useEffect"])(() => {
    if (touched && error) {
      !isError && setIsError(true);
    } else {
      isError && setIsError(false);
    }
  }, [touched, error]);

  const handleChange = e => {
    onChange === null || onChange === void 0 ? void 0 : onChange(e);
    onChangeValue && onChangeValue(e.target.value);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Container, {
    className: className,
    children: [label && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Label, {
      children: [label, required ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(Required, {
        children: "(*)"
      }) : null]
    }), icon && /*#__PURE__*/Object(jsx_runtime_["jsx"])(Icon, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(SVG["a" /* SVG */], {
        name: icon,
        className: "fill-current text-primary",
        width: "20"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Input, _objectSpread({
      className: classNameInput,
      error: isError,
      icon: !!icon,
      disabled: disabled,
      ref: ref,
      onChange: handleChange,
      placeholder: placeholder,
      value: value
    }, restProps)), error && touched && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Error, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(SVG["a" /* SVG */], {
        name: "common/error",
        width: 16,
        height: 16,
        className: "mr-0.5 inline-block"
      }), error]
    })]
  });
};

/* harmony default export */ var designs_Input = __webpack_exports__["a"] = (InputBox);

/***/ }),

/***/ "3wub":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

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

/***/ "4mzW":
/***/ (function(module, exports) {

const PATH = {
  MAINTAIN: "MAINTAIN",
  COMING_SOON: "COMING_SOON",
  NOT_FOUND: "NOT_FOUND",
  GLOBAL_ARTICLE: "GLOBAL_ARTICLE",
  HOME: "HOME",
  BLOG_DETAIL: "BLOG_DETAIL",
  LOGIN: "LOGIN",
  REGISTER: "REGISTER",
  FORGOT_PASSWORD: "FORGOT_PASSWORD",
  JOB: "JOB",
  JOB_DETAIL: "JOB_DETAIL",
  COMPANY: "COMPANY",
  COMPANY_RECRUITMENT: "COMPANY_RECRUITMENT",
  COMPANY_DETAIL: "COMPANY_DETAIL",
  COMPANY_RESULT: "COMPANY_RESULT",
  ABOUT_USER: "ABOUT_USER",
  CATEGORY: "CATEGORY",
  ACCOUNT_INFORMATION: "ACCOUNT_INFORMATION",
  ACCOUNT_PROFILE: "ACCOUNT_PROFILE",
  WORK_LOCATION: "WORK_LOCATION",
  ACCOUNT_FAVORITE: "ACCOUNT_FAVORITE",
  ACCOUNT_EDIT_PROFILE: "ACCOUNT_EDIT_PROFILE",
  ACCOUNT_NOTIFICATION: "ACCOUNT_NOTIFICATION",
  JOB_MANAGEMENT_PERSONAL_INFO: "JOB_MANAGEMENT_PERSONAL_INFO",
  JOB_MANAGEMENT_EVALUATED: "JOB_MANAGEMENT_EVALUATED",
  JOB_MANAGEMENT_MYJOB: "JOB_MANAGEMENT_MYJOB",
  JOB_MANAGEMENT_EMPLOYER_VIEW_PROFILE: "JOB_MANAGEMENT_EMPLOYER_VIEW_PROFILE",
  JOB_MANAGEMENT_CHANGE_PASSWORD: "JOB_MANAGEMENT_CHANGE_PASSWORD"
};
const paths = [{
  name: PATH.COMING_SOON,
  locale: {
    vi: "/dang-phat-trien",
    en: "/maintenance/coming-soon"
  },
  isPrivate: false
}, {
  name: PATH.MAINTAIN,
  locale: {
    vi: "/dang-bao-tri",
    en: "/maintenance/loading"
  },
  isPrivate: false
}, {
  name: PATH.NOT_FOUND,
  locale: {
    vi: "/khong-tim-thay",
    en: "/404"
  },
  isPrivate: false
}, {
  name: PATH.HOME,
  locale: {
    vi: "/",
    en: "/home"
  },
  isPrivate: false
}, {
  name: PATH.BLOG_DETAIL,
  locale: {
    vi: "/tin-tuc/:slug",
    en: "/blog-detail/:slug"
  }
}, {
  name: PATH.REGISTER,
  locale: {
    vi: "/dang-ky",
    en: "/register"
  }
}, {
  name: PATH.LOGIN,
  locale: {
    vi: "/dang-nhap",
    en: "/login"
  }
}, {
  name: PATH.FORGOT_PASSWORD,
  locale: {
    vi: "/quen-mat-khau",
    en: "/forgot-password"
  }
}, {
  name: PATH.JOB_MANAGEMENT_PERSONAL_INFO,
  locale: {
    vi: "/nguoi-tim-viec/thong-tin-ca-nhan",
    en: "/job-seeker/personal-info"
  }
}, {
  name: PATH.JOB_MANAGEMENT_EVALUATED,
  locale: {
    vi: "/nguoi-tim-viec/yeu-cau-danh-gia",
    en: "/job-seeker/evaluated"
  }
}, {
  name: PATH.JOB_MANAGEMENT_MYJOB,
  locale: {
    vi: "/nguoi-tim-viec/cong-viec-cua-toi",
    en: "/job-seeker/my-job"
  }
}, {
  name: PATH.JOB_MANAGEMENT_EMPLOYER_VIEW_PROFILE,
  locale: {
    vi: "/nguoi-tim-viec/nha-tuyen-dung-xem-ho-so",
    en: "/job-seeker/employer-view-profile"
  }
}, {
  name: PATH.JOB_MANAGEMENT_CHANGE_PASSWORD,
  locale: {
    vi: "/nguoi-tim-viec/thay-doi-mat-khau",
    en: "/job-seeker/change-password"
  }
}, {
  name: PATH.JOB,
  locale: {
    vi: "/viec-lam",
    en: "/job"
  }
}, {
  name: PATH.JOB_DETAIL,
  locale: {
    vi: "/viec-lam/:slug",
    en: "/job-detail/:slug"
  }
}, {
  name: PATH.COMPANY,
  locale: {
    vi: "/cong-ty",
    en: "/company"
  }
}, {
  name: PATH.COMPANY_RECRUITMENT,
  locale: {
    vi: "/thong-tin-cong-ty-tuyen-dung/:slug",
    en: "/recruitment-company-detail/:slug"
  }
}, {
  name: PATH.COMPANY_DETAIL,
  locale: {
    vi: "/thong-tin-cong-ty/:slug",
    en: "/company-detail/:slug"
  }
}, {
  name: PATH.COMPANY_RESULT,
  locale: {
    vi: "/ket-qua-tim-kiem-cong-ty",
    en: "/company-result"
  }
}, {
  name: PATH.CATEGORY,
  locale: {
    vi: "/chuyen-muc/:slug",
    en: "/category/:slug"
  }
}];
const routes = paths.map(path => {
  return {
    source: path.locale.vi,
    destination: path.locale.en
  };
});
module.exports = {
  PATH,
  paths,
  routes
};

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("USGS");


/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "6f9I":
/***/ (function(module, exports) {

module.exports = require("next-i18next");

/***/ }),

/***/ "6mnf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.matchHas = matchHas;
exports.compileNonPath = compileNonPath;
exports.default = prepareDestination;
exports.getSafeParamName = void 0;

var _querystring = __webpack_require__("3WeD");

var _parseRelativeUrl = __webpack_require__("hS4m");

var pathToRegexp = _interopRequireWildcard(__webpack_require__("zOyy"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // ensure only a-zA-Z are used for param names for proper interpolating
// with path-to-regexp


const getSafeParamName = paramName => {
  let newParamName = '';

  for (let i = 0; i < paramName.length; i++) {
    const charCode = paramName.charCodeAt(i);

    if (charCode > 64 && charCode < 91 || // A-Z
    charCode > 96 && charCode < 123 // a-z
    ) {
        newParamName += paramName[i];
      }
  }

  return newParamName;
};

exports.getSafeParamName = getSafeParamName;

function matchHas(req, has, query) {
  const params = {};
  const allMatch = has.every(hasItem => {
    let value;
    let key = hasItem.key;

    switch (hasItem.type) {
      case 'header':
        {
          key = key.toLowerCase();
          value = req.headers[key];
          break;
        }

      case 'cookie':
        {
          value = req.cookies[hasItem.key];
          break;
        }

      case 'query':
        {
          value = query[key];
          break;
        }

      case 'host':
        {
          const {
            host
          } = (req == null ? void 0 : req.headers) || {}; // remove port from host if present

          const hostname = host == null ? void 0 : host.split(':')[0].toLowerCase();
          value = hostname;
          break;
        }

      default:
        {
          break;
        }
    }

    if (!hasItem.value && value) {
      params[getSafeParamName(key)] = value;
      return true;
    } else if (value) {
      const matcher = new RegExp(`^${hasItem.value}$`);
      const matches = value.match(matcher);

      if (matches) {
        if (matches.groups) {
          Object.keys(matches.groups).forEach(groupKey => {
            params[groupKey] = matches.groups[groupKey];
          });
        } else if (hasItem.type === 'host' && matches[0]) {
          params.host = matches[0];
        }

        return true;
      }
    }

    return false;
  });

  if (allMatch) {
    return params;
  }

  return false;
}

function compileNonPath(value, params) {
  if (!value.includes(':')) {
    return value;
  }

  for (const key of Object.keys(params)) {
    if (value.includes(`:${key}`)) {
      value = value.replace(new RegExp(`:${key}\\*`, 'g'), `:${key}--ESCAPED_PARAM_ASTERISKS`).replace(new RegExp(`:${key}\\?`, 'g'), `:${key}--ESCAPED_PARAM_QUESTION`).replace(new RegExp(`:${key}\\+`, 'g'), `:${key}--ESCAPED_PARAM_PLUS`).replace(new RegExp(`:${key}(?!\\w)`, 'g'), `--ESCAPED_PARAM_COLON${key}`);
    }
  }

  value = value.replace(/(:|\*|\?|\+|\(|\)|\{|\})/g, '\\$1').replace(/--ESCAPED_PARAM_PLUS/g, '+').replace(/--ESCAPED_PARAM_COLON/g, ':').replace(/--ESCAPED_PARAM_QUESTION/g, '?').replace(/--ESCAPED_PARAM_ASTERISKS/g, '*'); // the value needs to start with a forward-slash to be compiled
  // correctly

  return pathToRegexp.compile(`/${value}`, {
    validate: false
  })(params).substr(1);
}

function prepareDestination(destination, params, query, appendParamsToQuery) {
  let parsedDestination = {}; // clone query so we don't modify the original

  query = Object.assign({}, query);
  const hadLocale = query.__nextLocale;
  delete query.__nextLocale;
  delete query.__nextDefaultLocale;

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = compileNonPath(value, params);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  let paramKeys = Object.keys(params); // remove internal param for i18n

  if (hadLocale) {
    paramKeys = paramKeys.filter(name => name !== 'nextInternalLocale');
  }

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  try {
    newUrl = destinationCompiler(params);
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://nextjs.org/docs/messages/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

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

/***/ "9pNP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "@headlessui/react"
var react_ = __webpack_require__("m17n");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./src/components/Dialog/styles.tsx

const ContentContainer = external_styled_components_default.a.div.withConfig({
  displayName: "styles__ContentContainer",
  componentId: "sc-izj8vw-0"
})(["", ""], {
  "transform": "var(--tw-transform)",
  "position": "relative",
  "display": "inline-block",
  "width": "100%",
  "maxHeight": "90vh",
  "overflowY": "auto",
  "textAlign": "left",
  "verticalAlign": "middle",
  "transitionProperty": "all",
  "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
  "transitionDuration": "150ms",
  "--tw-bg-opacity": "1",
  "backgroundColor": "rgba(255, 255, 255, var(--tw-bg-opacity))",
  "--tw-shadow": "0px 6px 12px -6px rgba(24, 39, 75, 0.12), 0px 8px 24px -4px rgba(24, 39, 75, 0.08)",
  "boxShadow": "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
  "@media (min-width: 600px)": {
    "width": "100%",
    "maxWidth": "max-content",
    "minWidth": "600px"
  }
});
// CONCATENATED MODULE: ./src/components/Dialog/index.tsx






const Dialog = props => {
  const {
    className = "",
    isOpen,
    children,
    onClose
  } = props;
  const cancelButtonRef = Object(external_react_["useRef"])();
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["Transition"], {
    show: isOpen,
    as: external_react_["Fragment"],
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["Dialog"], {
      as: "div",
      className: "fixed inset-0 z-40 overflow-y-auto",
      onClose: onClose,
      initialFocus: cancelButtonRef,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "min-h-screen px-1 text-center phone:px-4",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["Transition"].Child, {
          as: external_react_["Fragment"],
          enter: "ease-out duration-300",
          enterFrom: "opacity-0",
          enterTo: "opacity-100",
          leave: "ease-in duration-200",
          leaveFrom: "opacity-100",
          leaveTo: "opacity-0",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["Dialog"].Overlay, {
            className: "fixed inset-0",
            style: {
              background: "#00000061"
            }
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          className: "inline-block h-screen align-middle",
          "aria-hidden": "true",
          children: "\u200B"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["Transition"].Child, {
          as: external_react_["Fragment"],
          enter: "ease-out duration-300",
          enterFrom: "opacity-0 scale-95",
          enterTo: "opacity-100 scale-100",
          leave: "ease-in duration-200",
          leaveFrom: "opacity-100 scale-100",
          leaveTo: "opacity-0 scale-95",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(ContentContainer, {
            className: className,
            children: [children, /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
              ref: cancelButtonRef,
              className: "hidden"
            })]
          })
        })]
      })
    })
  });
};

/* harmony default export */ var components_Dialog = __webpack_exports__["a"] = (Dialog);

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

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "Aw+l":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useRedirect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("6f9I");
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _routes_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4mzW");
/* harmony import */ var _routes_index__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_routes_index__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("oyvS");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);





const useRedirect = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const currentLanguage = next_i18next__WEBPACK_IMPORTED_MODULE_2__["i18n"].language;
  const redirect = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((routeName, params = {}, query = {}, options, // ? For refresh page not use route
  locale = undefined, shallow = true) => {
    var _currentPath$locale;

    const currentPath = _routes_index__WEBPACK_IMPORTED_MODULE_3__["paths"].find(item => item.name === routeName);
    if (!locale) locale = currentLanguage;

    if (!currentPath) {
      console.error(`[Link Error] Don't find any route which has name is "${routeName}"`);
    }

    let href = path__WEBPACK_IMPORTED_MODULE_4___default.a.join(`/${currentPath === null || currentPath === void 0 ? void 0 : (_currentPath$locale = currentPath.locale) === null || _currentPath$locale === void 0 ? void 0 : _currentPath$locale[locale]}`);

    if (Object.keys(params).length) {
      for (const key in params) {
        const value = params[key];
        href = href.replace(`/:${key}`, `/${value}`);
      }
    }

    href = href.replace(/(\/:)\w+/g, "/-");

    if (Object.keys(query).length) {
      const queryString = renderQueryStringFromObject(query);
      href += `?${queryString}`;
    }

    if (options !== null && options !== void 0 && options.useRefresh) {
      const aTag = document.createElement("a");
      aTag.href = href;
      aTag.click();
      return;
    }

    router.push(href, undefined, {
      shallow
    });
  }, []);
  return redirect;
};

const renderQueryStringFromObject = query => {
  var _URLSearchParams;

  return (_URLSearchParams = new URLSearchParams(query)) === null || _URLSearchParams === void 0 ? void 0 : _URLSearchParams.toString();
};

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

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

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

/***/ "DW/d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);


const Spinner = ({
  className
}) => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("svg", {
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    style: {
      width: 25,
      height: 25
    },
    viewBox: "0 0 100 100",
    preserveAspectRatio: "xMidYMid",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("circle", {
      cx: 50,
      cy: 50,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 10,
      r: 35,
      strokeDasharray: "164.93361431346415 56.97787143782138",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        repeatCount: "indefinite",
        dur: "1s",
        values: "0 50 50;360 50 50",
        keyTimes: "0;1"
      })
    })
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Spinner);

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

/***/ "MQhX":
/***/ (function(module, exports) {

module.exports = require("react-i18next");

/***/ }),

/***/ "MbIc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContentText");

/***/ }),

/***/ "N6Fi":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__("zOyy"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = __webpack_require__("0G5g"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "O/hg":
/***/ (function(module, exports) {

module.exports = require("react-slick");

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

/***/ "O6Eg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("6f9I");
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4mzW");
/* harmony import */ var _routes_index__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes_index__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("oyvS");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);






const Link = props => {
  var _currentPath$locale;

  const {
    i18n
  } = Object(next_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])();
  const currentLanguage = i18n.language;
  const {
    routeName,
    disableShadow = false,
    locale = currentLanguage,
    children,
    className = "",
    query = {},
    params = {}
  } = props;
  const linkRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(null);
  const currentPath = _routes_index__WEBPACK_IMPORTED_MODULE_2__["paths"].find(item => item.name === routeName);

  if (!currentPath) {
    console.error(`[Link Error] Don't find any route which has name is "${routeName}"`);
  }

  let href = path__WEBPACK_IMPORTED_MODULE_3___default.a.join(`/${currentPath === null || currentPath === void 0 ? void 0 : (_currentPath$locale = currentPath.locale) === null || _currentPath$locale === void 0 ? void 0 : _currentPath$locale[locale]}`);

  if (Object.keys(params).length) {
    for (const key in params) {
      const value = params[key];
      href = href.replace(`/:${key}`, `/${value}`);
    }
  } // incase we replace all params but it still has /:abc in url,
  // replace it by -.


  href = href.replace(/(\/:)\w+/g, "/-");

  if (Object.keys(query).length) {
    const queryString = renderQueryStringFromObject(query);
    href += `?${queryString}`;
  }

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    if (href) {
      linkRef.current.href = href;
    }
  }, [href]);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
    ref: linkRef,
    href: href,
    className: `block cursor-pointer ${className}`,
    children: children
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Link);

const renderQueryStringFromObject = query => {
  var _URLSearchParams;

  return (_URLSearchParams = new URLSearchParams(query)) === null || _URLSearchParams === void 0 ? void 0 : _URLSearchParams.toString();
};

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "OvnE":
/***/ (function(module, exports) {

module.exports = require("html-react-parser");

/***/ }),

/***/ "P4iE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./src/designs/Button/styles.tsx

const ButtonContainer = external_styled_components_default.a.button.withConfig({
  displayName: "styles__ButtonContainer",
  componentId: "sc-15a2p3e-0"
})(["", " ", " ", ""], {
  "display": "flex",
  "alignItems": "center",
  "justifyContent": "center",
  "paddingTop": "10px",
  "paddingBottom": "10px",
  "fontWeight": "600",
  "fontSize": "14px",
  "@media (min-width: 600px)": {
    "fontSize": "16px"
  }
}, ({
  primary
}) => primary ? {
  "--tw-text-opacity": "1",
  "color": "rgba(255, 255, 255, var(--tw-text-opacity))",
  "transitionDuration": "100ms",
  "--tw-bg-opacity": "1",
  "backgroundColor": "rgba(234, 78, 27, var(--tw-bg-opacity))",
  ":hover": {
    "--tw-bg-opacity": "0.8"
  }
} : {
  "--tw-text-opacity": "1",
  "color": "rgba(234, 78, 27, var(--tw-text-opacity))",
  "transitionDuration": "100ms",
  "--tw-bg-opacity": "1",
  "backgroundColor": "rgba(255, 255, 255, var(--tw-bg-opacity))",
  ":hover": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(234, 78, 27, var(--tw-bg-opacity))",
    "--tw-text-opacity": "1",
    "color": "rgba(255, 255, 255, var(--tw-text-opacity))"
  }
}, ({
  loading
}) => loading ? {
  "cursor": "wait",
  "pointerEvents": "none",
  "--tw-bg-opacity": "0.6"
} : "");
// EXTERNAL MODULE: ./src/designs/icons/Spinner/index.tsx
var Spinner = __webpack_require__("DW/d");

// CONCATENATED MODULE: ./src/designs/Button/index.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Button = props => {
  const {
    primary,
    children,
    className,
    loading,
    innerClassName = ""
  } = props,
        rest = _objectWithoutProperties(props, ["primary", "children", "className", "loading", "innerClassName"]);

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(ButtonContainer, _objectSpread(_objectSpread({
    loading: loading,
    className: className,
    primary: primary
  }, rest), {}, {
    children: [loading && /*#__PURE__*/Object(jsx_runtime_["jsx"])(Spinner["a" /* default */], {
      className: "mr-1 text-white"
    }), children]
  }));
};

/* harmony default export */ var designs_Button = __webpack_exports__["a"] = (Button);

/***/ }),

/***/ "P7gm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__("N6Fi"));

var _prepareDestination = _interopRequireWildcard(__webpack_require__("6mnf"));

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _normalizeLocalePath = __webpack_require__("3wub");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _router = __webpack_require__("elyg");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, rewrites, query, resolveHref, locales) {
  let matchedPage = false;
  let parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(asPath);
  let fsPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _normalizeLocalePath.normalizeLocalePath)((0, _router.delBasePath)(parsedAs.pathname), locales).pathname);
  let resolvedHref;

  const handleRewrite = rewrite => {
    const matcher = customRouteMatcher(rewrite.source);
    let params = matcher(parsedAs.pathname);

    if (rewrite.has && params) {
      const hasParams = (0, _prepareDestination.matchHas)({
        headers: {
          host: document.location.hostname
        },
        cookies: document.cookie.split('; ').reduce((acc, item) => {
          const [key, ...value] = item.split('=');
          acc[key] = value.join('=');
          return acc;
        }, {})
      }, rewrite.has, parsedAs.query);

      if (hasParams) {
        Object.assign(params, hasParams);
      } else {
        params = false;
      }
    }

    if (params) {
      if (!rewrite.destination) {
        // this is a proxied rewrite which isn't handled on the client
        return true;
      }

      const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true);
      parsedAs = destRes.parsedDestination;
      asPath = destRes.newUrl;
      Object.assign(query, destRes.parsedDestination.query);
      fsPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _normalizeLocalePath.normalizeLocalePath)((0, _router.delBasePath)(asPath), locales).pathname);

      if (pages.includes(fsPathname)) {
        // check if we now match a page as this means we are done
        // resolving the rewrites
        matchedPage = true;
        resolvedHref = fsPathname;
        return true;
      } // check if we match a dynamic-route, if so we break the rewrites chain


      resolvedHref = resolveHref(fsPathname);

      if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
        matchedPage = true;
        return true;
      }
    }
  };

  let finished = false;

  for (let i = 0; i < rewrites.beforeFiles.length; i++) {
    // we don't end after match in beforeFiles to allow
    // continuing through all beforeFiles rewrites
    handleRewrite(rewrites.beforeFiles[i]);
  }

  matchedPage = pages.includes(fsPathname);

  if (!matchedPage) {
    if (!finished) {
      for (let i = 0; i < rewrites.afterFiles.length; i++) {
        if (handleRewrite(rewrites.afterFiles[i])) {
          finished = true;
          break;
        }
      }
    } // check dynamic route before processing fallback rewrites


    if (!finished) {
      resolvedHref = resolveHref(fsPathname);
      matchedPage = pages.includes(resolvedHref);
      finished = matchedPage;
    }

    if (!finished) {
      for (let i = 0; i < rewrites.fallback.length; i++) {
        if (handleRewrite(rewrites.fallback[i])) {
          finished = true;
          break;
        }
      }
    }
  }

  return {
    asPath,
    parsedAs,
    matchedPage,
    resolvedHref
  };
}

/***/ }),

/***/ "Qg44":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ cleanObject; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ forceTextInputEnterNumber; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ removeHtmlTagFromString; });

// UNUSED EXPORTS: filterAdByLocation, removeArrayDuplicate

// CONCATENATED MODULE: ./src/common/functions/filter/cleanObject.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @description This will help you remove all properties which has null/undefined value
 * @returns an object may miss some key
 * @example
 *  input: {
 *    cow: "something",
 *    cat: 0,
 *    fish: undefined.
 *    dog: false
 *  }
 *
 *  output: {
 *    cow: "something",
 *    cat: 0,
 *    dog: false
 *  }
 */
const cleanObject = initObject => {
  if (!initObject || typeof initObject !== "object") {
    console.error("[CleanObject] Object input is not valid!");
    return initObject;
  }

  try {
    const obj = _objectSpread({}, initObject);

    for (let propName in obj) {
      if (obj[propName] === undefined || obj[propName] === null) {
        delete obj[propName];
      } else {
        if (typeof obj[propName] === "object" && !Array.isArray(obj[propName])) obj[propName] = cleanObject(obj[propName]);
      }
    }

    return obj;
  } catch (error) {
    console.error(error);
    return initObject;
  }
};
// CONCATENATED MODULE: ./src/common/functions/filter/filterAdByLocation.ts
const filterAdByLocation = (location, listAds) => {
  const ads = listAds.filter(item => {
    var _item$displayLocation;

    return (item === null || item === void 0 ? void 0 : (_item$displayLocation = item.displayLocation) === null || _item$displayLocation === void 0 ? void 0 : _item$displayLocation._id) === location;
  });
  return ads || [];
};
// CONCATENATED MODULE: ./src/common/functions/filter/forceTextInputEnterNumber.ts
/**
 * @Note place this function into onKeyPress Input, which you want to force it enter only number
 * */
const forceTextInputEnterNumber = event => {
  if (!/[0-9]/.test(event.key)) {
    event.preventDefault();
  }
};
// CONCATENATED MODULE: ./src/common/functions/filter/removeArrayDuplicate.ts
/**
 * @description This will help you remove duplicate in array
 * @returns an array
 * @example
 *  input: [
 *   {label: 'Truyền thông', options: 1},
 *   {label: 'Truyền thông', options: 1},
 *   {label: 'Truyền thông', options: 1}
 * ]
 *  output: [{label: 'Truyền thông', options: 1}]
 */
const removeArrayDuplicate = array => {
  return array.filter((item, index) => {
    const _array = JSON.stringify(item);

    return index === array.findIndex(obj => {
      return JSON.stringify(obj) === _array;
    });
  });
};
// CONCATENATED MODULE: ./src/common/functions/filter/removeHtmlTagFromString.ts
const removeHtmlTagFromString = html => {
  if (!html) return "";

  try {
    let justText = html.replace(/<\/?[^>]+(>|$)/g, "");
    return justText || "";
  } catch (error) {
    console.error(error);
    return "";
  }
};
// CONCATENATED MODULE: ./src/common/functions/filter/index.ts






/***/ }),

/***/ "QxnH":
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "RE4Q":
/***/ (function(module, exports) {

module.exports = require("universal-cookie");

/***/ }),

/***/ "RRGY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useClickOutSide; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @description Handle element state when click outside
 * @usage
 *   Put elementRef in ref of div element you want to handle click outside
 *
 *   const {elementRef,  isVisible, setElementVisible} = useClickOutSide(initState);
 *
 *   <div ref={elementRef}>
 *     ... your code here ...
 *   </div>
 *
 *   Use isVisible, setElementVisible instead of useState
 * */

const useClickOutSide = initState => {
  const {
    0: isVisible,
    1: setElementVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initState);
  const elementRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  const handleKeyDropdown = e => {
    if (e.key === "Escape") {
      setElementVisible(false);
    }
  };

  const handleClickOutSide = e => {
    if (elementRef.current && !elementRef.current.contains(e.target)) {
      setElementVisible(false);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    document.addEventListener("keydown", handleKeyDropdown);
    document.addEventListener("click", handleClickOutSide);
    return () => {
      document.removeEventListener("keydown", handleKeyDropdown);
      document.removeEventListener("click", handleClickOutSide);
    };
  }, [isVisible]);
  return {
    elementRef,
    isVisible,
    setElementVisible
  };
};

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

/***/ "TvDC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return checkProfileUserService; });
/* unused harmony export checkRecordUserService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addLocalStorage; });
/* harmony import */ var _services_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q465");
/* harmony import */ var _services_record__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("yIJW");


const checkProfileUserService = async () => {
  const response = await Object(_services_user__WEBPACK_IMPORTED_MODULE_0__[/* checkProfileUserExist */ "a"])();
  const {
    checkProfileUserExist: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};
  return result;
};
const checkRecordUserService = async () => {
  const response = await Object(_services_record__WEBPACK_IMPORTED_MODULE_1__[/* checkRecordUserExist */ "a"])();
  const {
    checkRecordUserExist: result
  } = (response === null || response === void 0 ? void 0 : response.data) || {};
  return result;
};
const addLocalStorage = value => {
  if (true) return;
  localStorage.setItem("RECORD_PROFILE_EXIST", String(value));
};

/***/ }),

/***/ "USGS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__("1fKG");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./src/redux/store.ts + 131 modules
var store = __webpack_require__("ALsR");

// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__("efsx");

// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__("UqoJ");

// EXTERNAL MODULE: ./src/common/functions/filter/index.ts + 5 modules
var filter = __webpack_require__("Qg44");

// EXTERNAL MODULE: ./src/common/HOC/withRecord.tsx
var withRecord = __webpack_require__("2Hz8");

// EXTERNAL MODULE: ./src/constants/app/index.ts
var app = __webpack_require__("0n/8");

// EXTERNAL MODULE: ./src/routes/index.js
var routes = __webpack_require__("4mzW");

// EXTERNAL MODULE: ./src/redux/actions/company/index.ts + 1 modules
var company = __webpack_require__("gFNR");

// EXTERNAL MODULE: external "react-i18next"
var external_react_i18next_ = __webpack_require__("MQhX");

// EXTERNAL MODULE: ./src/common/functions/filterString/index.ts + 3 modules
var filterString = __webpack_require__("Vgxo");

// EXTERNAL MODULE: ./src/redux/actions/recruitment/index.ts + 3 modules
var actions_recruitment = __webpack_require__("VfsZ");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./src/containers/CompanyDetail/styles.tsx

const Wrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-otwyfz-0"
})(["", ""], {
  "paddingBottom": "80px",
  "position": "relative"
});
const Title = external_styled_components_default.a.h2.withConfig({
  displayName: "styles__Title",
  componentId: "sc-otwyfz-1"
})(["", ""], {
  "fontSize": "24px",
  "textAlign": "center",
  "fontWeight": "700",
  "@media (min-width: 1024px)": {
    "textAlign": "left",
    "fontSize": "30px"
  }
});
const Banner = external_styled_components_default.a.img.withConfig({
  displayName: "styles__Banner",
  componentId: "sc-otwyfz-2"
})(["", ""], {
  "width": "100%",
  "height": "240px",
  "marginBottom": "350px",
  "objectFit": "cover",
  "@media (min-width: 600px)": {
    "marginBottom": "70px"
  },
  "@media (min-width: 1024px)": {
    "marginBottom": "150px"
  }
});
const SectionWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__SectionWrapper",
  componentId: "sc-otwyfz-3"
})(["", ""], {
  "width": "100%"
});
const CompanyCardWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__CompanyCardWrapper",
  componentId: "sc-otwyfz-4"
})(["", " transform:translateX(-50%);"], {
  "transform": "var(--tw-transform)",
  "position": "absolute",
  "top": "130px",
  "left": "50%",
  "--tw-translate-x": "-50%"
});
const OpportunityWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__OpportunityWrapper",
  componentId: "sc-otwyfz-5"
})(["", ""], {
  "marginTop": "40px",
  "width": "100vw",
  "paddingTop": "40px",
  "paddingBottom": "40px",
  "--tw-bg-opacity": "1",
  "backgroundColor": "rgba(255, 255, 255, var(--tw-bg-opacity))"
});
const OpportunityContainer = external_styled_components_default.a.div.withConfig({
  displayName: "styles__OpportunityContainer",
  componentId: "sc-otwyfz-6"
})(["", ""], {
  "width": "100%"
});
const ListCard = external_styled_components_default.a.div.withConfig({
  displayName: "styles__ListCard",
  componentId: "sc-otwyfz-7"
})(["", ""], {
  "display": "flex",
  "flexDirection": "column",
  "gap": "20px",
  "marginTop": "40px"
});
const Location = {
  Container: external_styled_components_default.a.div.withConfig({
    displayName: "styles__Container",
    componentId: "sc-otwyfz-8"
  })(["", ""], {
    "width": "100%",
    "marginLeft": "auto",
    "marginRight": "auto",
    "marginTop": "40px",
    "padding": "20px",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(255, 255, 255, var(--tw-bg-opacity))",
    "display": "flex",
    "flexWrap": "wrap",
    "alignItems": "center",
    "borderRadius": "8px",
    "borderWidth": "1px",
    "--tw-border-opacity": "1",
    "borderColor": "rgba(224, 224, 224, var(--tw-border-opacity))",
    "flexDirection": "column-reverse",
    "rowGap": "20px",
    "@media (min-width: 600px)": {
      "padding": "40px"
    },
    "@media (min-width: 1024px)": {
      "flexDirection": "row"
    }
  }),
  Info: external_styled_components_default.a.div.withConfig({
    displayName: "styles__Info",
    componentId: "sc-otwyfz-9"
  })(["", ""], {
    "width": "100%",
    "paddingRight": "20px",
    "@media (min-width: 1024px)": {
      "width": "58.333333%"
    }
  }),
  Title: external_styled_components_default.a.h2.withConfig({
    displayName: "styles__Title",
    componentId: "sc-otwyfz-10"
  })(["", ""], {
    "fontWeight": "700",
    "fontSize": "20px",
    "lineHeight": "1",
    "@media (min-width: 1024px)": {
      "fontSize": "30px"
    }
  }),
  Detail: external_styled_components_default.a.div.withConfig({
    displayName: "styles__Detail",
    componentId: "sc-otwyfz-11"
  })(["", ""], {
    "fontSize": "20px",
    "fontWeight": "500",
    "lineHeight": "1.25",
    "marginTop": "40px"
  }),
  DetailItem: external_styled_components_default.a.p.withConfig({
    displayName: "styles__DetailItem",
    componentId: "sc-otwyfz-12"
  })(["", ""], {
    "fontSize": "16px"
  }),
  SliderWrapper: external_styled_components_default.a.div.withConfig({
    displayName: "styles__SliderWrapper",
    componentId: "sc-otwyfz-13"
  })(["", ""], {
    "width": "100%",
    "@media (min-width: 1024px)": {
      "width": "41.666667%"
    }
  }),
  Img: external_styled_components_default.a.img.withConfig({
    displayName: "styles__Img",
    componentId: "sc-otwyfz-14"
  })(["", ""], {
    "height": "300px",
    "objectFit": "cover"
  })
};
const AboutUs = {
  Container: external_styled_components_default.a.div.withConfig({
    displayName: "styles__Container",
    componentId: "sc-otwyfz-15"
  })(["", ""], {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(255, 255, 255, var(--tw-bg-opacity))",
    "padding": "20px",
    "marginTop": "40px",
    "width": "100%",
    "marginLeft": "auto",
    "marginRight": "auto",
    "borderWidth": "1px",
    "--tw-border-opacity": "1",
    "borderColor": "rgba(224, 224, 224, var(--tw-border-opacity))",
    "@media (min-width: 600px)": {
      "padding": "40px"
    }
  }),
  Description: external_styled_components_default.a.div.withConfig({
    displayName: "styles__Description",
    componentId: "sc-otwyfz-16"
  })(["", ""], {
    "fontSize": "16px",
    "fontWeight": "400",
    "marginTop": "40px"
  })
};
const Benefit = {
  Container: external_styled_components_default.a.div.withConfig({
    displayName: "styles__Container",
    componentId: "sc-otwyfz-17"
  })(["", ""], {
    "width": "100%",
    "marginLeft": "auto",
    "marginRight": "auto",
    "marginTop": "40px"
  }),
  Icon: external_styled_components_default.a.img.withConfig({
    displayName: "styles__Icon",
    componentId: "sc-otwyfz-18"
  })(["", ""], {
    "width": "50px"
  }),
  Title: external_styled_components_default.a.h2.withConfig({
    displayName: "styles__Title",
    componentId: "sc-otwyfz-19"
  })(["", ""], {
    "fontWeight": "700",
    "fontSize": "24px",
    "textAlign": "center",
    "@media (min-width: 1024px)": {
      "fontSize": "30px"
    }
  }),
  ListItem: external_styled_components_default.a.div.withConfig({
    displayName: "styles__ListItem",
    componentId: "sc-otwyfz-20"
  })(["", ""], {
    "display": "grid",
    "gridTemplateColumns": "repeat(12, minmax(0, 1fr))",
    "gap": "20px",
    "marginTop": "40px"
  }),
  Item: external_styled_components_default.a.div.withConfig({
    displayName: "styles__Item",
    componentId: "sc-otwyfz-21"
  })(["", ""], {
    "gridColumn": "span 12 / span 12",
    "borderWidth": "1px",
    "--tw-border-opacity": "1",
    "borderColor": "rgba(224, 224, 224, var(--tw-border-opacity))",
    "paddingTop": "20px",
    "paddingBottom": "20px",
    "paddingLeft": "20px",
    "paddingRight": "20px",
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "center",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(255, 255, 255, var(--tw-bg-opacity))",
    "@media (min-width: 600px)": {
      "paddingTop": "40px",
      "paddingBottom": "40px"
    },
    "@media (min-width: 1024px)": {
      "gridColumn": "span 4 / span 4"
    }
  }),
  TitleItem: external_styled_components_default.a.h3.withConfig({
    displayName: "styles__TitleItem",
    componentId: "sc-otwyfz-22"
  })(["", ""], {
    "fontSize": "20px",
    "fontWeight": "700",
    "lineHeight": "1",
    "paddingTop": "20px",
    "paddingBottom": "20px",
    "borderBottomWidth": "1px",
    "--tw-border-opacity": "1",
    "borderColor": "rgba(224, 224, 224, var(--tw-border-opacity))",
    "textAlign": "center"
  }),
  Detail: external_styled_components_default.a.div.withConfig({
    displayName: "styles__Detail",
    componentId: "sc-otwyfz-23"
  })(["", ""], {
    "fontSize": "16px",
    "fontWeight": "400",
    "textAlign": "center",
    "marginTop": "20px"
  })
};
const VideoWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__VideoWrapper",
  componentId: "sc-otwyfz-24"
})(["", ""], {
  "marginTop": "40px",
  "width": "100%",
  "marginLeft": "auto",
  "marginRight": "auto"
});
const Video = external_styled_components_default.a.iframe.withConfig({
  displayName: "styles__Video",
  componentId: "sc-otwyfz-25"
})(["", ""], {
  "width": "100%",
  "height": "200px",
  "@media (min-width: 1024px)": {
    "height": "400px"
  }
});
// EXTERNAL MODULE: ./src/designs/Card/CompanyCard/index.tsx + 1 modules
var CompanyCard = __webpack_require__("n5fT");

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");

// EXTERNAL MODULE: ./src/common/functions/index.ts + 17 modules
var functions = __webpack_require__("Vtj2");

// EXTERNAL MODULE: ./src/common/utils/auth.ts
var auth = __webpack_require__("DATO");

// EXTERNAL MODULE: ./src/designs/Link/index.tsx
var Link = __webpack_require__("O6Eg");

// CONCATENATED MODULE: ./src/designs/Card/OpportunityCard/styles.tsx


const styles_Wrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-uykgt3-0"
})(["", ""], {
  "padding": "20px",
  "borderWidth": "1px",
  "--tw-border-opacity": "1",
  "borderColor": "rgba(224, 224, 224, var(--tw-border-opacity))",
  "@media (min-width: 600px)": {
    "paddingTop": "40px",
    "paddingBottom": "40px",
    "paddingLeft": "20px",
    "paddingRight": "40px"
  }
});
const Container = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-uykgt3-1"
})(["", ""], {
  "display": "flex",
  "flexDirection": "column",
  "alignItems": "flex-start",
  "justifyContent": "space-between",
  "@media (min-width: 600px)": {
    "alignItems": "center",
    "flexDirection": "row"
  }
});
const Content = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Content",
  componentId: "sc-uykgt3-2"
})(["", ""], {
  "width": "100%",
  "@media (min-width: 1024px)": {
    "width": "auto"
  }
});
const styles_Title = external_styled_components_default.a.h3.withConfig({
  displayName: "styles__Title",
  componentId: "sc-uykgt3-3"
})(["", ""], {
  "fontWeight": "500",
  "fontSize": "20px",
  "@media (min-width: 600px)": {
    "paddingLeft": "20px",
    "paddingRight": "20px",
    "lineHeight": "1"
  }
});
const InfoWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__InfoWrapper",
  componentId: "sc-uykgt3-4"
})(["", ""], {
  "display": "flex",
  "flexDirection": "column",
  "alignItems": "flex-start",
  "@media (min-width: 600px)": {
    "> :not([hidden]) ~ :not([hidden])": {
      "--tw-divide-x-reverse": 0,
      "borderRightWidth": "calc(1px * var(--tw-divide-x-reverse))",
      "borderLeftWidth": "calc(1px * calc(1 - var(--tw-divide-x-reverse)))",
      "--tw-divide-opacity": "1",
      "borderColor": "rgba(13, 2, 41, var(--tw-divide-opacity))"
    },
    "alignItems": "center",
    "flexDirection": "row"
  }
});
const LinkWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__LinkWrapper",
  componentId: "sc-uykgt3-5"
})(["", ""], {});
const LinkDetail = external_styled_components_default()(Link["a" /* default */]).withConfig({
  displayName: "styles__LinkDetail",
  componentId: "sc-uykgt3-6"
})(["", " ", ""], {
  "transitionProperty": "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
  "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
  "transitionDuration": "300ms",
  "fontWeight": "400",
  "lineHeight": "1",
  "fontSize": "16px",
  ":hover": {
    "--tw-text-opacity": "1",
    "color": "rgba(246, 182, 0, var(--tw-text-opacity))"
  }
}, ({
  isSecondary
}) => isSecondary ? {
  "--tw-text-opacity": "1",
  "color": "rgba(246, 182, 0, var(--tw-text-opacity))"
} : {
  "--tw-text-opacity": "1",
  "color": "rgba(13, 2, 41, var(--tw-text-opacity))"
});
const InfoItem = external_styled_components_default.a.div.withConfig({
  displayName: "styles__InfoItem",
  componentId: "sc-uykgt3-7"
})(["", ""], {
  "marginTop": "10px",
  "fontWeight": "400",
  "textAlign": "left",
  "fontSize": "14px",
  "@media (min-width: 600px)": {
    "marginTop": "20px",
    "paddingLeft": "20px",
    "paddingRight": "20px",
    "textAlign": "center",
    "fontSize": "16px"
  }
});
const Button = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Button",
  componentId: "sc-uykgt3-8"
})(["", ""], {
  "transitionProperty": "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
  "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
  "transitionDuration": "200ms",
  "display": "flex",
  "alignItems": "center",
  "justifyContent": "center",
  "height": "50px",
  "marginTop": "20px",
  "fontWeight": "500",
  "borderWidth": "1px",
  "cursor": "pointer",
  "width": "170px",
  "fontSize": "16px",
  "--tw-text-opacity": "1",
  "color": "rgba(234, 78, 27, var(--tw-text-opacity))",
  "--tw-border-opacity": "1",
  "borderColor": "rgba(234, 78, 27, var(--tw-border-opacity))",
  ":hover": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(234, 78, 27, var(--tw-bg-opacity))",
    "--tw-text-opacity": "1",
    "color": "rgba(255, 255, 255, var(--tw-text-opacity))"
  },
  "@media (min-width: 1024px)": {
    "marginTop": "0"
  }
});
const styles_Link = external_styled_components_default()(Link["a" /* default */]).withConfig({
  displayName: "styles__Link",
  componentId: "sc-uykgt3-9"
})(["", ""], {
  "transitionProperty": "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
  "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
  "transitionDuration": "200ms",
  "display": "flex",
  "alignItems": "center",
  "justifyContent": "center",
  "height": "50px",
  "marginTop": "20px",
  "fontWeight": "500",
  "borderWidth": "1px",
  "width": "170px",
  "fontSize": "16px",
  "--tw-text-opacity": "1",
  "color": "rgba(234, 78, 27, var(--tw-text-opacity))",
  "--tw-border-opacity": "1",
  "borderColor": "rgba(234, 78, 27, var(--tw-border-opacity))",
  ":hover": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(234, 78, 27, var(--tw-bg-opacity))",
    "--tw-text-opacity": "1",
    "color": "rgba(255, 255, 255, var(--tw-text-opacity))"
  },
  "@media (min-width: 1024px)": {
    "marginTop": "0"
  }
});
// EXTERNAL MODULE: ./src/redux/actions/common/index.ts
var common = __webpack_require__("W6d4");

// EXTERNAL MODULE: ./src/redux/actions/user/index.ts
var actions_user = __webpack_require__("q6WE");

// CONCATENATED MODULE: ./src/designs/Card/OpportunityCard/index.tsx














const Opportunity = ({
  recruitment
}) => {
  const {
    t
  } = Object(external_react_i18next_["useTranslation"])(["company"]);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    user
  } = Object(external_react_redux_["useSelector"])(state => state.user);
  const {
    name,
    level,
    location,
    slug,
    _id
  } = recruitment;
  const locationString = Object(functions["l" /* renderLocation */])(location.map(item => {
    var _item$province;

    return item === null || item === void 0 ? void 0 : (_item$province = item.province) === null || _item$province === void 0 ? void 0 : _item$province.name;
  }));
  const {
    currentUser
  } = Object(external_react_redux_["useSelector"])(state => state.auth);
  const {
    actionSuccess
  } = Object(external_react_redux_["useSelector"])(state => state.actions);
  const {
    0: isApplied,
    1: setIsApplied
  } = Object(external_react_["useState"])();
  const userInfo = (currentUser === null || currentUser === void 0 ? void 0 : currentUser.userInfo) || {};
  Object(external_react_["useEffect"])(() => {
    getUserProfileAPI();
  }, []);
  Object(external_react_["useEffect"])(() => {
    checkApplied();
  }, [user]);
  Object(external_react_["useEffect"])(() => {
    if (actionSuccess) {
      dispatch(Object(common["b" /* resetAction */])());
      getUserProfileAPI();
      checkApplied();
    }
  }, [actionSuccess]);

  const setAppliedRecruitmentAPI = (userId, recruitmentId) => {
    const payload = {
      userId: userId,
      recruitmentId: recruitmentId
    };
    dispatch(Object(actions_recruitment["l" /* setAppliedRecruitment */])(payload));
  };

  const getUserProfileAPI = () => {
    var _getUserCookies, _getUserCookies$userI;

    const payload = {
      id: (_getUserCookies = Object(auth["c" /* getUserCookies */])()) === null || _getUserCookies === void 0 ? void 0 : (_getUserCookies$userI = _getUserCookies.userInfo) === null || _getUserCookies$userI === void 0 ? void 0 : _getUserCookies$userI._id
    };
    dispatch(Object(actions_user["a" /* getUserProfile */])(payload));
  };

  const handleApply = () => {
    setAppliedRecruitmentAPI(userInfo === null || userInfo === void 0 ? void 0 : userInfo._id, _id);
  };

  const checkApplied = () => {
    var _user$appliedRecruitm;

    const listAppliedId = user === null || user === void 0 ? void 0 : (_user$appliedRecruitm = user.appliedRecruitment) === null || _user$appliedRecruitm === void 0 ? void 0 : _user$appliedRecruitm.map(item => {
      var _item$recruitment;

      return item === null || item === void 0 ? void 0 : (_item$recruitment = item.recruitment) === null || _item$recruitment === void 0 ? void 0 : _item$recruitment._id;
    });

    if (listAppliedId !== null && listAppliedId !== void 0 && listAppliedId.includes(_id)) {
      setIsApplied(true);
    }
  };

  const handleClickJob = () => {
    if (Object(external_lodash_["isEmpty"])(userInfo)) return;
    dispatch(Object(actions_recruitment["n" /* setSeenRecruitment */])({
      userId: userInfo === null || userInfo === void 0 ? void 0 : userInfo._id,
      recruitmentId: _id
    }));
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(styles_Wrapper, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Container, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(Content, {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(LinkWrapper, {
          onClick: handleClickJob,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(LinkDetail, {
            routeName: routes["PATH"].JOB_DETAIL,
            params: {
              slug: slug
            },
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(styles_Title, {
              title: name,
              children: name
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(InfoWrapper, {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(InfoItem, {
            children: level === null || level === void 0 ? void 0 : level.name
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(InfoItem, {
            children: locationString
          })]
        })]
      }), Object.keys(userInfo).length > 0 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button, {
        onClick: handleApply,
        style: {
          opacity: isApplied ? 0.5 : 1,
          pointerEvents: isApplied ? "none" : "initial"
        },
        children: isApplied ? t("applied") : t("apply")
      }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(styles_Link, {
        routeName: routes["PATH"].LOGIN,
        children: t("apply")
      })]
    })
  });
};

/* harmony default export */ var OpportunityCard = (Opportunity);
// EXTERNAL MODULE: ./src/components/ErrorBoundary/index.tsx + 1 modules
var ErrorBoundary = __webpack_require__("fWWA");

// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__("O/hg");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);

// CONCATENATED MODULE: ./src/containers/CompanyDetail/components/SliderImage/styles.tsx

const SliderImage_styles_Wrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-wc5xn1-0"
})(["", " .slick-dots{bottom:15px;}.ft-slick__dots--custom{height:12px;width:12px;background-color:#ffffff;border-radius:100%;position:relative;transition:0.2s ease-in-out;&:hover{background:#f6b600;}}.slick-dots li{width:12px;height:12px;border-radius:100%;margin:0 20px;transition:width 0.3s ease-in-out;}.slick-dots .slick-active{width:12px;height:12px;transition:width 0.3s ease-in-out;}.slick-dots .slick-active .ft-slick__dots--custom{width:12px;height:12px;background-color:#f6b600;}"], {
  "width": "100%"
});
// CONCATENATED MODULE: ./src/containers/CompanyDetail/components/SliderImage/index.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 500,
  appendDots: dots => /*#__PURE__*/Object(jsx_runtime_["jsx"])("ul", {
    children: dots
  }),
  customPaging: i => /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: "ft-slick__dots--custom"
  })
};

const SlickSlider = props => {
  const {
    children,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["children", "className"]);

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(SliderImage_styles_Wrapper, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_slick_default.a, _objectSpread(_objectSpread(_objectSpread({
      className: className
    }, rest), settings), {}, {
      children: children
    }))
  });
};

/* harmony default export */ var SliderImage = (SlickSlider);
// CONCATENATED MODULE: ./src/containers/CompanyDetail/index.tsx












const skeletonImage = "/img/skeleton/banner-default.jpg";

const CompanyDetail = () => {
  var _images$;

  const {
    t
  } = Object(external_react_i18next_["useTranslation"])(["company"]);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    companyDetail = {}
  } = Object(external_react_redux_["useSelector"])(state => state.company);
  const {
    allRecruitment: {
      results: allRecruitment
    }
  } = Object(external_react_redux_["useSelector"])(state => state.recruitment);
  const {
    images = [],
    name,
    _id,
    location,
    description,
    benefits,
    videos
  } = companyDetail || {};
  const idVideo = Object(filterString["a" /* extractVideoID */])(videos);
  Object(external_react_["useEffect"])(() => {
    if (Object.keys(companyDetail).length > 0 && _id) {
      getRecruitmentAPI(_id);
    }
  }, [companyDetail]);

  const getRecruitmentAPI = id => {
    const payload = {
      companyId: id
    };
    dispatch(Object(actions_recruitment["g" /* getRecruitmentByCompany */])(payload));
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Wrapper, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(ErrorBoundary["a" /* default */], {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Banner, {
        src: ((_images$ = images[0]) === null || _images$ === void 0 ? void 0 : _images$.default) || skeletonImage,
        alt: name
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ErrorBoundary["a" /* default */], {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(CompanyCardWrapper, {
        className: "container",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(CompanyCard["a" /* default */], {
          company: companyDetail
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ErrorBoundary["a" /* default */], {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(SectionWrapper, {
        children: (allRecruitment === null || allRecruitment === void 0 ? void 0 : allRecruitment.length) > 0 && /*#__PURE__*/Object(jsx_runtime_["jsx"])(OpportunityWrapper, {
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(OpportunityContainer, {
            className: "container",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Title, {
              children: t("opportunity")
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ListCard, {
              children: allRecruitment === null || allRecruitment === void 0 ? void 0 : allRecruitment.map((recruitment, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(OpportunityCard, {
                recruitment: recruitment
              }, index))
            })]
          })
        })
      })
    }), location && /*#__PURE__*/Object(jsx_runtime_["jsx"])(ErrorBoundary["a" /* default */], {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(SectionWrapper, {
        className: "container",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Location.Container, {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(Location.Info, {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Title, {
              children: t("address")
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Location.Detail, {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Location.DetailItem, {
                children: location
              })
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Location.SliderWrapper, {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(SliderImage, {
              children: images === null || images === void 0 ? void 0 : images.map((image, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(Location.Img, {
                src: (image === null || image === void 0 ? void 0 : image.default) || (image === null || image === void 0 ? void 0 : image.medium) || (image === null || image === void 0 ? void 0 : image.small),
                alt: name
              }, index))
            })
          })]
        })
      })
    }), description && /*#__PURE__*/Object(jsx_runtime_["jsx"])(ErrorBoundary["a" /* default */], {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(SectionWrapper, {
        className: "container",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(AboutUs.Container, {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Title, {
            children: t("about-us")
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(AboutUs.Description, {
            dangerouslySetInnerHTML: {
              __html: description
            }
          })]
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ErrorBoundary["a" /* default */], {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(SectionWrapper, {
        className: "container",
        children: (benefits === null || benefits === void 0 ? void 0 : benefits.length) > 0 && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Benefit.Container, {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Benefit.Title, {
            children: t("benefits")
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Benefit.ListItem, {
            children: benefits === null || benefits === void 0 ? void 0 : benefits.map((benefit, index) => {
              var _benefit$icon, _benefit$icon$icon, _benefit$icon2, _benefit$icon2$icon, _benefit$icon3, _benefit$icon3$icon, _benefit$icon4, _benefit$icon5, _benefit$icon6;

              return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Benefit.Item, {
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Benefit.Icon, {
                  src: (benefit === null || benefit === void 0 ? void 0 : (_benefit$icon = benefit.icon) === null || _benefit$icon === void 0 ? void 0 : (_benefit$icon$icon = _benefit$icon.icon) === null || _benefit$icon$icon === void 0 ? void 0 : _benefit$icon$icon.default) || (benefit === null || benefit === void 0 ? void 0 : (_benefit$icon2 = benefit.icon) === null || _benefit$icon2 === void 0 ? void 0 : (_benefit$icon2$icon = _benefit$icon2.icon) === null || _benefit$icon2$icon === void 0 ? void 0 : _benefit$icon2$icon.medium) || (benefit === null || benefit === void 0 ? void 0 : (_benefit$icon3 = benefit.icon) === null || _benefit$icon3 === void 0 ? void 0 : (_benefit$icon3$icon = _benefit$icon3.icon) === null || _benefit$icon3$icon === void 0 ? void 0 : _benefit$icon3$icon.small),
                  alt: benefit === null || benefit === void 0 ? void 0 : (_benefit$icon4 = benefit.icon) === null || _benefit$icon4 === void 0 ? void 0 : _benefit$icon4.name
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Benefit.TitleItem, {
                  children: benefit === null || benefit === void 0 ? void 0 : (_benefit$icon5 = benefit.icon) === null || _benefit$icon5 === void 0 ? void 0 : _benefit$icon5.name
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Benefit.Detail, {
                  children: benefit === null || benefit === void 0 ? void 0 : (_benefit$icon6 = benefit.icon) === null || _benefit$icon6 === void 0 ? void 0 : _benefit$icon6.description
                })]
              }, index);
            })
          })]
        })
      })
    }), videos && /*#__PURE__*/Object(jsx_runtime_["jsx"])(ErrorBoundary["a" /* default */], {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(SectionWrapper, {
        className: "container",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(VideoWrapper, {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Video, {
            className: "video",
            src: `https://www.youtube.com/embed/${idVideo}`
          })
        })
      })
    })]
  });
};

/* harmony default export */ var containers_CompanyDetail = (CompanyDetail);
// EXTERNAL MODULE: ./src/components/Meta/index.tsx
var Meta = __webpack_require__("tSya");

// EXTERNAL MODULE: ./src/layouts/Main/index.tsx + 28 modules
var Main = __webpack_require__("ab40");

// CONCATENATED MODULE: ./src/pages/company-detail/[slug]/index.tsx



function _slug_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _slug_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _slug_ownKeys(Object(source), true).forEach(function (key) { _slug_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _slug_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _slug_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















const CompanyDetailPage = props => {
  var _renderImages;

  const {
    companyDetail
  } = Object(external_react_redux_["useSelector"])(state => state.company);
  const {
    name,
    images = [],
    description,
    slug,
    location
  } = companyDetail;
  const {
    seoData: {
      seoTitle
    }
  } = Object(external_react_redux_["useSelector"])(state => state.contentWebsite);
  const seoDescription = Object(filter["c" /* removeHtmlTagFromString */])(description).slice(0, 157) + "...";
  const url = `${app["a" /* ROOT_URL */]}/thong-tin-cong-ty/${slug}`;

  const renderImages = () => {
    const otherImagesInfo = images.map(item => ({
      url: item === null || item === void 0 ? void 0 : item.small,
      width: 500,
      height: 346,
      alt: `${name} | ${seoTitle}`
    }));
    return otherImagesInfo || [];
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Meta["a" /* default */], {
      title: name,
      routeName: routes["PATH"].COMPANY_DETAIL,
      description: seoDescription
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_next_seo_["NextSeo"], {
      openGraph: {
        images: renderImages()
      }
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_next_seo_["LocalBusinessJsonLd"], {
      type: "company",
      name: name,
      description: seoDescription,
      id: url,
      url: url,
      address: {
        streetAddress: location,
        addressLocality: location,
        addressCountry: "VN",
        addressRegion: "vi",
        postalCode: ""
      },
      images: (_renderImages = renderImages()) === null || _renderImages === void 0 ? void 0 : _renderImages.map(({
        url
      }) => url)
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Main["a" /* default */], {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(containers_CompanyDetail, {})
    })]
  });
};

/* harmony default export */ var _slug_ = __webpack_exports__["default"] = (Object(withRecord["a" /* withRecord */])(CompanyDetailPage));
const getServerSideProps = store["a" /* wrapper */].getServerSideProps(async context => {
  const {
    locale,
    params,
    res,
    store: {
      dispatch,
      sagaTask,
      getState
    }
  } = context;
  Object(Main["b" /* getAllBasicAPIForPage */])(locale, dispatch);
  const {
    slug = ""
  } = params;
  Object(Main["b" /* getAllBasicAPIForPage */])(locale, dispatch);
  dispatch(Object(company["c" /* getCompanyBySlug */])({
    slug: String(slug)
  }));
  dispatch(external_redux_saga_["END"]);
  await sagaTask.toPromise();
  const {
    company: {
      companyDetail
    }
  } = getState();

  if (!Object.keys(companyDetail).length) {
    res.statusCode = 404;
    return {
      notFound: true,
      props: {}
    };
  }

  return {
    props: _slug_objectSpread({
      locale
    }, await Object(serverSideTranslations_["serverSideTranslations"])(locale, ["common", "company"]))
  };
});

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "UqoJ":
/***/ (function(module, exports) {

module.exports = require("next-i18next/serverSideTranslations");

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

/***/ "Vgxo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ extractVideoID; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ splitStringToWordsArray; });

// UNUSED EXPORTS: replaceTagHTML

// CONCATENATED MODULE: ./src/common/functions/filterString/replaceTags.ts
const replaceTagHTML = (initialTag, newTag, html) => {
  const fromTag = {
    open: `<${initialTag}>`,
    close: `<${initialTag}/>`
  };
  const toTag = {
    open: `<${newTag}>`,
    close: `<${newTag}/>`
  };
  const fromOpenTagRegExp = new RegExp(`/${fromTag.open}/g`);
  const fromCloseTagRegExp = new RegExp(`/${fromTag.close}/g`);
  html = html.replace(fromOpenTagRegExp, toTag.open);
  html = html.replace(fromCloseTagRegExp, toTag.close);
  return html;
};
// CONCATENATED MODULE: ./src/common/functions/filterString/renderYTB.ts
const extractVideoID = url => {
  if (!url) return;
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
  var match = url.match(regExp);

  if (match && match[7].length === 11) {
    return match[7];
  }
};
// CONCATENATED MODULE: ./src/common/functions/filterString/convertStringToWordArray.ts
const splitStringToWordsArray = (text, character) => {
  if (!text) return [];
  const arr = text.split(character);
  return arr.filter(text => text);
};
// CONCATENATED MODULE: ./src/common/functions/filterString/index.ts




/***/ }),

/***/ "Vtj2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "m", function() { return /* reexport */ renderPrice; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ filter["a" /* cleanObject */]; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ filter["b" /* forceTextInputEnterNumber */]; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ getBetweenDay; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ formatDate["a" /* formatDate */]; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ formatParams; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ mergeParams; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ addQuery; });
__webpack_require__.d(__webpack_exports__, "l", function() { return /* reexport */ renderLocation; });
__webpack_require__.d(__webpack_exports__, "k", function() { return /* reexport */ renderCareer; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ getCroppedImg; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* reexport */ readFile; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* reexport */ randomId; });
__webpack_require__.d(__webpack_exports__, "n", function() { return /* reexport */ unShiftArray; });

// UNUSED EXPORTS: numberWithCommas, filterAdByLocation, removeArrayDuplicate, removeHtmlTagFromString, replaceTagHTML, extractVideoID, splitStringToWordsArray, formatDateWithTime, formatDateTable, prettyVietnamDongs, randomInteger, renderURL, getBase64

// CONCATENATED MODULE: ./src/common/functions/currency/renderPrice.ts
const numberWithCommas = num => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
/**
 * @example
 *  price = 1500000
 *    --> "1.500.000 ₫";
 */

const renderPrice = price => {
  if (!price) return "0 vnđ";
  const formattedPrice = numberWithCommas(price);
  const result = `${formattedPrice} vnđ`;
  return result;
};
// CONCATENATED MODULE: ./src/common/functions/currency/index.ts

// EXTERNAL MODULE: ./src/common/functions/filter/index.ts + 5 modules
var filter = __webpack_require__("Qg44");

// EXTERNAL MODULE: ./src/common/functions/filterString/index.ts + 3 modules
var filterString = __webpack_require__("Vgxo");

// CONCATENATED MODULE: ./src/common/functions/format/getBetweenDay.ts
const getBetweenDay = (dateFrom, dateTo) => {
  const differenceInTime = dateTo.getTime() - dateFrom.getTime();
  const differenceInDay = Math.floor(differenceInTime / (1000 * 3600 * 24));
  return differenceInDay;
};
// EXTERNAL MODULE: ./src/common/functions/format/formatDate.ts
var formatDate = __webpack_require__("zi1o");

// CONCATENATED MODULE: ./src/common/functions/format/params.ts

const formatParams = param => {
  if (!param || param === "-") return null;
  return param;
};

const renderQueryStringFromObject = query => {
  var _URLSearchParams;

  return (_URLSearchParams = new URLSearchParams(query)) === null || _URLSearchParams === void 0 ? void 0 : _URLSearchParams.toString();
};

const mergeParams = (url, params) => {
  if (!params) return url;
  let href = url;

  for (const key in params) {
    const value = params[key] || "-";
    href = href.replace(`/:${key}`, `/${value}`);
  }

  href = href.replace(/(\/:)\w+/g, "/-");
  return href;
};
const addQuery = (url, query) => {
  if (!query) return url;
  let href = url;

  if (Object.keys(query).length) {
    const queryString = renderQueryStringFromObject(Object(filter["a" /* cleanObject */])(query));
    href += `?${queryString}`;
  }

  return href;
};
// CONCATENATED MODULE: ./src/constants/formats/unit.ts
const SIGNS_NUMBER = {
  UNITS: "UNITS",
  THOUSANDS: "THOUSANDS",
  MILLIONS: "MILLIONS",
  BILLIONS: "BILLIONS"
};
const typesOfVietnamDongCurrency = [{
  minLength: 1,
  sign: "UNITS"
}, {
  minLength: 4,
  sign: "THOUSANDS"
}, {
  minLength: 7,
  sign: "MILLIONS"
}, {
  minLength: 10,
  sign: "BILLIONS"
}];
const DD_MM_YYYY = "DD-MM-YYYY";
const YYYY_MM_DD = "YYYY-MM-DD";
// CONCATENATED MODULE: ./src/common/functions/format/prettyVietnamDongs.ts

function prettyVietnamDongs(num) {
  // firstly, sort typesOfVietnamDongCurrency to descending
  const descendingTypes = typesOfVietnamDongCurrency.sort((a, b) => b.minLength - a.minLength); // Now, find the first item which has minLength less then or equal length of current number
  // F.e: num = 10000 --> type will have sign is THOUSANDS

  let type = descendingTypes.find(item => item.minLength <= String(num).length);
  let sign = type ? type.sign : "";
  let divider = type ? type.minLength - 1 : 0;
  let number = Number((num / 10 ** divider).toFixed(1));
  return {
    number,
    sign: `VND-sign.${sign}`
  };
}
// CONCATENATED MODULE: ./src/common/functions/format/renderStringArray.ts
/**
 *  @description Give me ward, district and province, I'll give you magic
 *  @example
 *    - ward: "Linh Trung"
 *    - district: undefine
 *    - province: "Ho Chi Minh"
 *  --> "Linh Trung, Ho Chi, Minh"
 */
const renderLocation = array => {
  let splitLocation = array === null || array === void 0 ? void 0 : array.filter(item => !!item);
  return splitLocation === null || splitLocation === void 0 ? void 0 : splitLocation.join(", ");
};
const renderCareer = array => {
  let splitLocation = array === null || array === void 0 ? void 0 : array.filter(item => !!item);
  return splitLocation === null || splitLocation === void 0 ? void 0 : splitLocation.join(" | ");
};
// CONCATENATED MODULE: ./src/common/functions/format/index.ts





// CONCATENATED MODULE: ./src/common/functions/image/cropImage.ts
const createImage = url => new Promise((resolve, reject) => {
  const image = new Image();
  image.addEventListener("load", () => resolve(image));
  image.addEventListener("error", error => reject(error));
  image.setAttribute("crossOrigin", "anonymous"); // needed to avoid cross-origin issues on CodeSandbox

  image.src = url;
});
/**
 * @param {File} image - Image File url
 * @param {Object} pixelCrop - pixelCrop Object provided by react-easy-crop
 *
 * @returns {Object} { file, base64File }
 *
 */


const getCroppedImg = async (imageSrc, pixelCrop, fileType = "image/jpeg") => {
  const image = await createImage(imageSrc);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const maxSize = Math.max(image.width, image.height);
  const safeArea = 2 * (maxSize / 2 * Math.sqrt(2)); // set each dimensions to double largest dimension to allow for a safe area for the
  // image to rotate in without being clipped by canvas context

  canvas.width = safeArea;
  canvas.height = safeArea; // translate canvas context to a central location on image to allow rotating around the center.

  ctx === null || ctx === void 0 ? void 0 : ctx.translate(safeArea / 2, safeArea / 2);
  ctx === null || ctx === void 0 ? void 0 : ctx.translate(-safeArea / 2, -safeArea / 2); // draw rotated image and store data.

  ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(image, safeArea / 2 - image.width * 0.5, safeArea / 2 - image.height * 0.5);
  const data = ctx === null || ctx === void 0 ? void 0 : ctx.getImageData(0, 0, safeArea, safeArea); // set canvas width to final desired crop size - this will clear existing context

  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height; // paste generated rotate image with correct offsets for x,y crop values.

  ctx === null || ctx === void 0 ? void 0 : ctx.putImageData(data, Math.round(0 - safeArea / 2 + image.width * 0.5 - pixelCrop.x), Math.round(0 - safeArea / 2 + image.height * 0.5 - pixelCrop.y)); // As Base64 string
  // As a blob

  return new Promise(resolve => {
    canvas.toBlob(blob => {
      try {
        const base64File = canvas.toDataURL(fileType);
        const file = new File([blob], `fileName.${fileType === "image/jpeg" ? "jpg" : "png"}`, {
          type: fileType
        });
        resolve({
          file,
          base64File
        });
      } catch (error) {
        console.error(error);
      }
    }, fileType);
  });
};
// CONCATENATED MODULE: ./src/common/functions/image/readFile.ts
const readFile = file => {
  if (!file) return;
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result), false);
    reader.readAsDataURL(file);
  });
};
// CONCATENATED MODULE: ./src/common/functions/image/index.ts


// CONCATENATED MODULE: ./src/common/functions/random/index.ts
const randomInteger = (min, max) => {
  const randFloat = Math.floor(Math.random() * (max - min + 1)) + min;
  return Math.round(randFloat);
};
const randomId = () => {
  let s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  };

  return s4() + s4() + "-" + s4();
};
// EXTERNAL MODULE: ./src/constants/app/index.ts
var app = __webpack_require__("0n/8");

// EXTERNAL MODULE: ./src/routes/index.js
var routes = __webpack_require__("4mzW");

// CONCATENATED MODULE: ./src/common/functions/routes/renderURL.ts



const renderURL = args => {
  var _route$locale;

  const route = routes["paths"].find(item => item.name === args.routeName);

  if (!route) {
    console.error(`[renderURL] Not found any route has name ${args.routeName}`);
  }

  let url = `${app["a" /* ROOT_URL */]}/${args.language}${route === null || route === void 0 ? void 0 : (_route$locale = route.locale) === null || _route$locale === void 0 ? void 0 : _route$locale.vi}`;
  url = mergeParams(url, args.params);
  url = addQuery(url, args.query);
  return url;
};
// CONCATENATED MODULE: ./src/common/functions/routes/index.ts

// CONCATENATED MODULE: ./src/common/functions/upload/getBase64.ts
const getBase64 = img => new Promise(resolve => {
  const reader = new FileReader();
  reader.readAsDataURL(img);
  reader.addEventListener("load", () => resolve(reader.result));
});
// CONCATENATED MODULE: ./src/common/functions/upload/index.ts

// CONCATENATED MODULE: ./src/common/functions/unShiftArray/index.ts
const unShiftArray = (name, array) => {
  const draftOption = {
    name,
    slug: "-",
    customSlug: "-"
  };
  array.unshift(draftOption);
  return array;
};
// CONCATENATED MODULE: ./src/common/functions/index.ts










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

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

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

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


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

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

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

/***/ "ab40":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ getAllBasicAPIForPage; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "html-react-parser"
var external_html_react_parser_ = __webpack_require__("OvnE");
var external_html_react_parser_default = /*#__PURE__*/__webpack_require__.n(external_html_react_parser_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./src/layouts/Footer/components/TopFooter/styles.tsx

const Wrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-pz6hsh-0"
})(["", ""], {
  "display": "grid",
  "width": "100%",
  "gap": "40px",
  "@media (min-width: 600px)": {
    "gridTemplateColumns": "repeat(2, minmax(0, 1fr))"
  },
  "@media (min-width: 1024px)": {
    "gridTemplateColumns": "repeat(4, minmax(0, 1fr))"
  }
});
const Item = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Item",
  componentId: "sc-pz6hsh-1"
})(["", ""], {
  "lineHeight": "2.5rem",
  "fontSize": "14px",
  "@media (min-width: 600px)": {
    "fontSize": "16px"
  },
  "@media (min-width: 1270px)": {
    "lineHeight": "2rem"
  }
});
const TitleItem = external_styled_components_default.a.h3.withConfig({
  displayName: "styles__TitleItem",
  componentId: "sc-pz6hsh-2"
})(["", ""], {
  "paddingBottom": "10px",
  "fontWeight": "700",
  "borderBottomWidth": "1px",
  "fontSize": "20px"
});
const MobileApp = external_styled_components_default.a.div.withConfig({
  displayName: "styles__MobileApp",
  componentId: "sc-pz6hsh-3"
})(["", ""], {
  "display": "flex",
  "gap": "20px"
});
const ListSocial = external_styled_components_default.a.div.withConfig({
  displayName: "styles__ListSocial",
  componentId: "sc-pz6hsh-4"
})(["", ""], {
  "display": "flex",
  "alignItems": "center",
  "gap": "20px",
  "marginTop": "40px",
  "marginBottom": "40px"
});
const Verified = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Verified",
  componentId: "sc-pz6hsh-5"
})([""]);
const Img = external_styled_components_default.a.img.withConfig({
  displayName: "styles__Img",
  componentId: "sc-pz6hsh-6"
})(["", ""], {
  "marginTop": "15px"
});
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./src/layouts/Footer/components/TopFooter/index.tsx




const regex = /\employer\//g;

const TopFooter = () => {
  const {
    contentWebsite: {
      footerUserInfo = [],
      footerEmployerInfo = []
    } = {}
  } = Object(external_react_redux_["useSelector"])(state => state.contentWebsite);
  const currentPath = Object(router_["useRouter"])().pathname;
  const isEmployer = regex.test(currentPath);
  const data = isEmployer ? footerEmployerInfo : footerUserInfo;
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Wrapper, {
    children: data.map((htmlString, index) => {
      return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Item, {
        dangerouslySetInnerHTML: {
          __html: htmlString
        }
      }, index);
    })
  });
};

/* harmony default export */ var components_TopFooter = (TopFooter);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__("6f9I");

// CONCATENATED MODULE: ./src/layouts/Footer/components/BottomFooter/styles.tsx

const styles_Wrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-1fic8de-0"
})(["", ""], {
  "paddingTop": "20px",
  "paddingBottom": "20px",
  "marginTop": "100px",
  "borderTopWidth": "1px",
  "--tw-border-opacity": "1",
  "borderColor": "rgba(255, 255, 255, var(--tw-border-opacity))"
});
const Container = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1fic8de-1"
})(["", ""], {
  "--tw-text-opacity": "1",
  "color": "rgba(255, 255, 255, var(--tw-text-opacity))",
  "textAlign": "center",
  "fontSize": "13px",
  "@media (min-width: 600px)": {
    "textAlign": "left"
  }
});
// CONCATENATED MODULE: ./src/layouts/Footer/components/BottomFooter/index.tsx




const BottomFooter = () => {
  const {
    t
  } = Object(external_next_i18next_["useTranslation"])(["common"]);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(styles_Wrapper, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Container, {
      className: "container",
      children: t("bottom-footer")
    })
  });
};

/* harmony default export */ var components_BottomFooter = (BottomFooter);
// CONCATENATED MODULE: ./src/layouts/Footer/styles.tsx

const Footer_styles_Wrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-nr0y9s-0"
})(["", ""], {
  "--tw-bg-opacity": "1",
  "backgroundColor": "rgba(234, 78, 27, var(--tw-bg-opacity))"
});
const styles_Container = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-nr0y9s-1"
})(["", ""], {
  "paddingTop": "60px",
  "--tw-text-opacity": "1",
  "color": "rgba(255, 255, 255, var(--tw-text-opacity))"
});
// CONCATENATED MODULE: ./src/layouts/Footer/index.tsx






const FooterUser = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Footer_styles_Wrapper, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(styles_Container, {
      className: "container",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_TopFooter, {})
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_BottomFooter, {})]
  });
};

/* harmony default export */ var Footer = (FooterUser);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");

// EXTERNAL MODULE: ./src/common/utils/auth.ts
var auth = __webpack_require__("DATO");

// EXTERNAL MODULE: ./src/routes/index.js
var routes = __webpack_require__("4mzW");

// EXTERNAL MODULE: ./src/redux/actions/auth/index.ts
var actions_auth = __webpack_require__("3yXT");

// EXTERNAL MODULE: external "@headlessui/react"
var react_ = __webpack_require__("m17n");

// EXTERNAL MODULE: ./src/common/hooks/useClickOutSide.ts
var useClickOutSide = __webpack_require__("RRGY");

// EXTERNAL MODULE: ./src/common/hooks/useAuth.ts
var useAuth = __webpack_require__("2rfL");

// EXTERNAL MODULE: ./src/designs/SVG/index.tsx
var SVG = __webpack_require__("v1+Z");

// CONCATENATED MODULE: ./src/layouts/Header/components/UserInfo/styles.tsx


const UserInfoContainer = external_styled_components_default.a.div.withConfig({
  displayName: "styles__UserInfoContainer",
  componentId: "sc-i78x54-0"
})(["", ""], {});
const UserButton = external_styled_components_default.a.div.withConfig({
  displayName: "styles__UserButton",
  componentId: "sc-i78x54-1"
})(["", ""], {
  "paddingLeft": "10px",
  "paddingRight": "10px",
  "paddingTop": "5px",
  "paddingBottom": "5px",
  "borderRadius": "20px",
  "display": "flex",
  "alignItems": "center",
  "cursor": "pointer",
  "userSelect": "none",
  ":hover": {
    "--tw-bg-opacity": "0.2",
    "backgroundColor": "rgba(224, 224, 224, var(--tw-bg-opacity))"
  }
});
const Icon = external_styled_components_default()(SVG["a" /* SVG */]).withConfig({
  displayName: "styles__Icon",
  componentId: "sc-i78x54-2"
})(["", " ", ""], {
  "transform": "var(--tw-transform)",
  "width": "25px",
  "height": "25px",
  "transitionDuration": "150ms"
}, ({
  active
}) => active && {
  "--tw-rotate": "180deg",
  "transform": "var(--tw-transform)"
});
const UserContainer = external_styled_components_default.a.div.withConfig({
  displayName: "styles__UserContainer",
  componentId: "sc-i78x54-3"
})(["", ""], {
  "padding": "20px"
});
const UserName = external_styled_components_default.a.p.withConfig({
  displayName: "styles__UserName",
  componentId: "sc-i78x54-4"
})(["", ""], {
  "fontSize": "16px",
  "--tw-text-opacity": "1",
  "color": "rgba(234, 78, 27, var(--tw-text-opacity))",
  "whiteSpace": "nowrap"
});
const UserWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__UserWrapper",
  componentId: "sc-i78x54-5"
})(["", ""], {});
const AvatarWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__AvatarWrapper",
  componentId: "sc-i78x54-6"
})(["", ""], {
  "width": "40px",
  "height": "40px",
  "overflow": "hidden",
  "borderRadius": "9999999px",
  "marginRight": "10px"
});
const Avatar = external_styled_components_default.a.img.withConfig({
  displayName: "styles__Avatar",
  componentId: "sc-i78x54-7"
})(["", ""], {
  "width": "100%",
  "height": "100%",
  "objectFit": "cover"
});
const Slider = {
  Container: external_styled_components_default.a.div.withConfig({
    displayName: "styles__Container",
    componentId: "sc-i78x54-8"
  })(["", ""], {
    "position": "fixed",
    "top": "0",
    "bottom": "0",
    "height": "100vh",
    "zIndex": "999",
    "width": "450px",
    "right": "0",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(255, 255, 255, var(--tw-bg-opacity))",
    "--tw-shadow": "0 8px 24px -4px rgba(24, 39, 75, 0.08), 0 6px 12px -6px rgba(24, 39, 75, 0.12)",
    "boxShadow": "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
    "boxSizing": "border-box"
  }),
  User: external_styled_components_default.a.div.withConfig({
    displayName: "styles__User",
    componentId: "sc-i78x54-9"
  })(["", ""], {
    "paddingTop": "20px",
    "paddingLeft": "20px",
    "paddingRight": "20px",
    "paddingBottom": "40px",
    "display": "flex",
    "alignItems": "center",
    "width": "100%",
    "borderBottomWidth": "1px",
    "--tw-border-opacity": "1",
    "borderColor": "rgba(224, 224, 224, var(--tw-border-opacity))"
  }),
  AvatarWrapper: external_styled_components_default.a.div.withConfig({
    displayName: "styles__AvatarWrapper",
    componentId: "sc-i78x54-10"
  })(["", ""], {
    "width": "40px",
    "height": "40px",
    "overflow": "hidden",
    "borderRadius": "9999999px",
    "marginRight": "10px",
    "display": "flex",
    "alignItems": "center"
  }),
  Avatar: external_styled_components_default.a.img.withConfig({
    displayName: "styles__Avatar",
    componentId: "sc-i78x54-11"
  })(["", ""], {
    "width": "32px",
    "height": "32px",
    "borderRadius": "9999999px",
    "objectFit": "cover",
    "display": "flex",
    "alignItems": "center"
  }),
  InfoWrapper: external_styled_components_default.a.div.withConfig({
    displayName: "styles__InfoWrapper",
    componentId: "sc-i78x54-12"
  })(["", ""], {
    "width": "100%",
    "fontWeight": "500"
  }),
  Name: external_styled_components_default.a.p.withConfig({
    displayName: "styles__Name",
    componentId: "sc-i78x54-13"
  })(["", ""], {
    "fontSize": "20px",
    "--tw-text-opacity": "1",
    "color": "rgba(234, 78, 27, var(--tw-text-opacity))"
  }),
  Email: external_styled_components_default.a.p.withConfig({
    displayName: "styles__Email",
    componentId: "sc-i78x54-14"
  })(["", ""], {
    "fontSize": "14px",
    "--tw-text-opacity": "1",
    "color": "rgba(138, 138, 138, var(--tw-text-opacity))"
  }),
  Icon: external_styled_components_default()(SVG["a" /* SVG */]).withConfig({
    displayName: "styles__Icon",
    componentId: "sc-i78x54-15"
  })(["", ""], {
    "width": "25px",
    "height": "25px",
    "cursor": "pointer",
    "marginRight": "10px"
  }),
  Link: external_styled_components_default.a.div.withConfig({
    displayName: "styles__Link",
    componentId: "sc-i78x54-16"
  })(["", ""], {
    "padding": "20px",
    "display": "flex",
    "alignItems": "center",
    "borderBottomWidth": "1px",
    "--tw-border-opacity": "1",
    "borderColor": "rgba(224, 224, 224, var(--tw-border-opacity))",
    "fontSize": "16px",
    "fontWeight": "500",
    ":hover": {
      "--tw-bg-opacity": "0.2",
      "backgroundColor": "rgba(224, 224, 224, var(--tw-bg-opacity))"
    },
    "cursor": "pointer"
  }),
  Logout: external_styled_components_default.a.div.withConfig({
    displayName: "styles__Logout",
    componentId: "sc-i78x54-17"
  })(["", ""], {
    "padding": "20px",
    "display": "flex",
    "alignItems": "center",
    "borderBottomWidth": "1px",
    "--tw-border-opacity": "1",
    "borderColor": "rgba(224, 224, 224, var(--tw-border-opacity))",
    "fontSize": "16px",
    "fontWeight": "500",
    ":hover": {
      "--tw-bg-opacity": "0.2",
      "backgroundColor": "rgba(224, 224, 224, var(--tw-bg-opacity))"
    },
    "cursor": "pointer",
    "userSelect": "none"
  })
};
const Email = external_styled_components_default.a.p.withConfig({
  displayName: "styles__Email",
  componentId: "sc-i78x54-18"
})(["", ""], {});
// EXTERNAL MODULE: ./src/common/hooks/useRedirect.ts
var useRedirect = __webpack_require__("Aw+l");

// CONCATENATED MODULE: ./src/layouts/Header/components/UserInfo/index.tsx











const skeletonAvatar = "/img/skeleton/avatar.jpg";

const UserInfo = props => {
  var _userInfo$urlAvt, _userInfo$urlAvt2;

  const {
    t
  } = Object(external_next_i18next_["useTranslation"])(["common"]);
  const {
    isAuth,
    accountInfo,
    logout
  } = Object(useAuth["a" /* default */])();
  const userInfo = (accountInfo === null || accountInfo === void 0 ? void 0 : accountInfo.userInfo) || {};
  const {
    elementRef,
    isVisible,
    setElementVisible
  } = Object(useClickOutSide["a" /* useClickOutSide */])(false);
  const redirect = Object(useRedirect["a" /* useRedirect */])();

  const handleLogout = () => {
    logout();
  };

  const menuItems = [{
    icon: "common/menu/user",
    text: t("header.personal-information"),
    path: routes["PATH"].JOB_MANAGEMENT_PERSONAL_INFO
  }, {
    icon: "common/menu/request",
    text: t("header.request-evaluted"),
    path: routes["PATH"].JOB_MANAGEMENT_EVALUATED
  }, {
    icon: "common/menu/job",
    text: t("header.applied-job"),
    path: routes["PATH"].JOB_MANAGEMENT_MYJOB
  }, {
    icon: "common/menu/employer-review",
    text: t("header.employer-review"),
    path: routes["PATH"].JOB_MANAGEMENT_EMPLOYER_VIEW_PROFILE
  }, {
    icon: "common/menu/edit",
    text: t("header.change-password"),
    path: routes["PATH"].JOB_MANAGEMENT_CHANGE_PASSWORD
  }];
  const userName = userInfo !== null && userInfo !== void 0 && userInfo.displayName ? userInfo === null || userInfo === void 0 ? void 0 : userInfo.displayName : `User ${userInfo === null || userInfo === void 0 ? void 0 : userInfo.code}`;
  const userAvatar = (userInfo === null || userInfo === void 0 ? void 0 : (_userInfo$urlAvt = userInfo.urlAvt) === null || _userInfo$urlAvt === void 0 ? void 0 : _userInfo$urlAvt.small) || (userInfo === null || userInfo === void 0 ? void 0 : (_userInfo$urlAvt2 = userInfo.urlAvt) === null || _userInfo$urlAvt2 === void 0 ? void 0 : _userInfo$urlAvt2.default) || skeletonAvatar;

  const handleRedirect = path => {
    redirect(path);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(UserInfoContainer, {
      ref: elementRef,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(UserButton, {
        onClick: () => setElementVisible(!isVisible),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(AvatarWrapper, {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Avatar, {
            src: userAvatar,
            alt: userInfo === null || userInfo === void 0 ? void 0 : userInfo.displayName,
            width: 36,
            height: 36
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(UserName, {
          children: userInfo === null || userInfo === void 0 ? void 0 : userInfo.displayName
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Icon, {
          active: isVisible,
          name: "common/menu/arrow-down",
          width: 24,
          height: 24
        })]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["Transition"], {
      show: isVisible,
      as: external_react_["Fragment"],
      enter: "transition duration-300 ease-out",
      enterFrom: "transform translate-x-full",
      enterTo: "transform translate-x-0",
      leave: "transition duration-300 ease-in",
      leaveFrom: "transform translate-x-0",
      leaveTo: "transform translate-x-full",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Slider.Container, {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(Slider.User, {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Slider.AvatarWrapper, {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Slider.Avatar, {
              width: 32,
              height: 32,
              src: userAvatar
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Slider.InfoWrapper, {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Slider.Name, {
              children: userName
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Slider.Email, {
              children: userInfo === null || userInfo === void 0 ? void 0 : userInfo.email
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Slider.Icon, {
            onClick: () => setElementVisible(!isVisible),
            name: "common/menu/mobile-close",
            width: 24,
            height: 24
          })]
        }), isAuth && menuItems.map((item, index) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Slider.Link, {
          onClick: () => handleRedirect(item.path),
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Slider.Icon, {
            name: item.icon,
            width: 24,
            height: 24
          }), item.text]
        }, `slider-item-${index}`)), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Slider.Logout, {
          onClick: handleLogout,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Slider.Icon, {
            name: "common/menu/logout",
            width: 24,
            height: 24
          }), t("header.logout")]
        })]
      })
    })]
  });
};

/* harmony default export */ var components_UserInfo = (UserInfo);
// EXTERNAL MODULE: ./src/redux/actions/common/index.ts
var common = __webpack_require__("W6d4");

// EXTERNAL MODULE: ./src/designs/Link/index.tsx
var Link = __webpack_require__("O6Eg");

// CONCATENATED MODULE: ./src/layouts/Header/components/Hamburger/components/UserInfo/styles.tsx



const styles_UserInfoContainer = external_styled_components_default.a.div.withConfig({
  displayName: "styles__UserInfoContainer",
  componentId: "sc-ejiegk-0"
})(["", ""], {
  "paddingTop": "20px",
  "paddingBottom": "20px"
});
const UserInfo_styles_Container = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-ejiegk-1"
})(["", " ", ""], {
  "paddingLeft": "20px",
  "paddingRight": "20px",
  "display": "flex",
  "justifyContent": "space-between",
  "marginBottom": "20px",
  "cursor": "pointer",
  "transitionDuration": "200ms"
}, ({
  extend
}) => extend ? {
  "marginBottom": "20px"
} : {
  "marginBottom": "0"
});
const styles_Icon = external_styled_components_default()(SVG["a" /* SVG */]).withConfig({
  displayName: "styles__Icon",
  componentId: "sc-ejiegk-2"
})(["", ""], {
  "width": "25px",
  "height": "25px"
});
const UserInfoWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__UserInfoWrapper",
  componentId: "sc-ejiegk-3"
})(["", ""], {
  "display": "flex",
  "alignItems": "center"
});
const styles_Avatar = external_styled_components_default.a.img.withConfig({
  displayName: "styles__Avatar",
  componentId: "sc-ejiegk-4"
})(["", ""], {
  "width": "35px",
  "height": "35px",
  "borderRadius": "9999999px",
  "marginRight": "10px",
  "objectFit": "cover"
});
const styles_UserName = external_styled_components_default.a.p.withConfig({
  displayName: "styles__UserName",
  componentId: "sc-ejiegk-5"
})(["", ""], {
  "overflow": "hidden",
  "textOverflow": "ellipsis",
  "--tw-text-opacity": "1",
  "color": "rgba(234, 78, 27, var(--tw-text-opacity))",
  "fontWeight": "500"
});
const Dropdown = external_styled_components_default.a.ul.withConfig({
  displayName: "styles__Dropdown",
  componentId: "sc-ejiegk-6"
})(["", " ", ""], {
  "display": "grid",
  "gap": "20px",
  "paddingLeft": "65px",
  "transitionDuration": "200ms",
  "overflow": "hidden"
}, ({
  extend
}) => extend ? {
  "height": "200px"
} : {
  "height": "0"
});
const DropdownItem = external_styled_components_default.a.li.withConfig({
  displayName: "styles__DropdownItem",
  componentId: "sc-ejiegk-7"
})(["", ""], {});
const styles_Link = external_styled_components_default()(Link["a" /* default */]).withConfig({
  displayName: "styles__Link",
  componentId: "sc-ejiegk-8"
})(["", ""], {});
// CONCATENATED MODULE: ./src/layouts/Header/components/Hamburger/components/UserInfo/index.tsx






const UserInfo_skeletonAvatar = "/img/skeleton/avatar.jpg";

const UserInfo_UserInfo = ({
  currentUser
}) => {
  var _userInfo$urlAvt, _userInfo$urlAvt2;

  const {
    t
  } = Object(external_next_i18next_["useTranslation"])(["common"]);
  const userInfo = (currentUser === null || currentUser === void 0 ? void 0 : currentUser.userInfo) || {};
  const {
    elementRef,
    isVisible,
    setElementVisible
  } = Object(useClickOutSide["a" /* useClickOutSide */])(false);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(styles_UserInfoContainer, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(UserInfo_styles_Container, {
      extend: isVisible,
      ref: elementRef,
      onClick: () => setElementVisible(!isVisible),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(UserInfoWrapper, {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(styles_Avatar, {
          src: (userInfo === null || userInfo === void 0 ? void 0 : (_userInfo$urlAvt = userInfo.urlAvt) === null || _userInfo$urlAvt === void 0 ? void 0 : _userInfo$urlAvt.small) || (userInfo === null || userInfo === void 0 ? void 0 : (_userInfo$urlAvt2 = userInfo.urlAvt) === null || _userInfo$urlAvt2 === void 0 ? void 0 : _userInfo$urlAvt2.default) || UserInfo_skeletonAvatar,
          alt: userInfo === null || userInfo === void 0 ? void 0 : userInfo.displayName
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(styles_UserName, {
          children: (userInfo === null || userInfo === void 0 ? void 0 : userInfo.displayName) || (userInfo === null || userInfo === void 0 ? void 0 : userInfo.code)
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(styles_Icon, {
        name: "common/arrow-down",
        width: 24,
        height: 24
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Dropdown, {
      extend: isVisible,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(DropdownItem, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(styles_Link, {
          routeName: routes["PATH"].JOB_MANAGEMENT_PERSONAL_INFO,
          children: t("header.personal-information")
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(DropdownItem, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(styles_Link, {
          routeName: routes["PATH"].JOB_MANAGEMENT_EVALUATED,
          children: t("header.request-evaluted")
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(DropdownItem, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(styles_Link, {
          routeName: routes["PATH"].JOB_MANAGEMENT_MYJOB,
          children: t("header.applied-job")
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(DropdownItem, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(styles_Link, {
          routeName: routes["PATH"].JOB_MANAGEMENT_EMPLOYER_VIEW_PROFILE,
          children: t("header.employer-review")
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(DropdownItem, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(styles_Link, {
          routeName: routes["PATH"].JOB_MANAGEMENT_CHANGE_PASSWORD,
          children: t("header.change-password")
        })
      })]
    })]
  });
};

/* harmony default export */ var Hamburger_components_UserInfo = (UserInfo_UserInfo);
// CONCATENATED MODULE: ./src/layouts/Header/components/Hamburger/styles.tsx



const HamburgerContainer = external_styled_components_default.a.div.withConfig({
  displayName: "styles__HamburgerContainer",
  componentId: "sc-jo16ri-0"
})(["", ""], {
  "display": "block",
  "@media (min-width: 1024px)": {
    "display": "none"
  }
});
const Hamburger_styles_Icon = external_styled_components_default()(SVG["a" /* SVG */]).withConfig({
  displayName: "styles__Icon",
  componentId: "sc-jo16ri-1"
})(["", ""], {
  "width": "25px",
  "height": "25px",
  "cursor": "pointer"
});
const styles_Dropdown = {
  Container: external_styled_components_default.a.div.withConfig({
    displayName: "styles__Container",
    componentId: "sc-jo16ri-2"
  })(["", ""], {
    "display": "flex",
    "flexDirection": "column",
    "position": "absolute",
    "top": "0",
    "left": "0",
    "right": "0",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(255, 255, 255, var(--tw-bg-opacity))",
    "--tw-text-opacity": "1",
    "color": "rgba(13, 2, 41, var(--tw-text-opacity))",
    "fontSize": "16px",
    "fontWeight": "400",
    "--tw-shadow": "0 8px 24px -4px rgba(24, 39, 75, 0.08), 0 6px 12px -6px rgba(24, 39, 75, 0.12)",
    "boxShadow": "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
    "zIndex": "999"
  }),
  CloseIcon: external_styled_components_default()(SVG["a" /* SVG */]).withConfig({
    displayName: "styles__CloseIcon",
    componentId: "sc-jo16ri-3"
  })(["", ""], {
    "width": "25px",
    "height": "25px",
    "cursor": "pointer",
    "marginLeft": "auto",
    "marginBottom": "20px",
    "marginRight": "20px",
    "marginTop": "20px"
  }),
  Icon: external_styled_components_default()(SVG["a" /* SVG */]).withConfig({
    displayName: "styles__Icon",
    componentId: "sc-jo16ri-4"
  })(["", ""], {
    "width": "25px",
    "height": "25px",
    "marginRight": "10px"
  }),
  Navigation: external_styled_components_default.a.div.withConfig({
    displayName: "styles__Navigation",
    componentId: "sc-jo16ri-5"
  })(["", ""], {
    "display": "grid",
    "gap": "20px",
    "borderTopWidth": "1px",
    "borderBottomWidth": "1px",
    "--tw-border-opacity": "1",
    "borderColor": "rgba(224, 224, 224, var(--tw-border-opacity))",
    "paddingTop": "20px",
    "paddingBottom": "20px"
  }),
  Link: external_styled_components_default()(Link["a" /* default */]).withConfig({
    displayName: "styles__Link",
    componentId: "sc-jo16ri-6"
  })(["", " ", " ", ""], {
    "display": "inline-flex",
    "alignItems": "center",
    "fontWeight": "500",
    "paddingLeft": "20px",
    "paddingRight": "20px"
  }, ({
    secondary
  }) => secondary ? {
    "--tw-text-opacity": "1",
    "color": "rgba(246, 182, 0, var(--tw-text-opacity))"
  } : {
    "--tw-text-opacity": "1",
    "color": "rgba(13, 2, 41, var(--tw-text-opacity))"
  }, ({
    separate
  }) => separate && {
    "borderRightWidth": "2px",
    "--tw-border-opacity": "1",
    "borderColor": "rgba(138, 138, 138, var(--tw-border-opacity))"
  }),
  Notification: external_styled_components_default.a.div.withConfig({
    displayName: "styles__Notification",
    componentId: "sc-jo16ri-7"
  })(["", ""], {
    "display": "flex",
    "alignItems": "center",
    "cursor": "pointer",
    "userSelect": "none",
    "padding": "20px",
    "borderBottomWidth": "1px",
    "--tw-border-opacity": "1",
    "borderColor": "rgba(224, 224, 224, var(--tw-border-opacity))",
    "fontWeight": "500"
  }),
  Authen: external_styled_components_default.a.div.withConfig({
    displayName: "styles__Authen",
    componentId: "sc-jo16ri-8"
  })(["", ""], {
    "paddingTop": "20px",
    "paddingBottom": "20px"
  }),
  Text: external_styled_components_default.a.p.withConfig({
    displayName: "styles__Text",
    componentId: "sc-jo16ri-9"
  })(["", ""], {}),
  ButtonWrapper: external_styled_components_default.a.div.withConfig({
    displayName: "styles__ButtonWrapper",
    componentId: "sc-jo16ri-10"
  })(["", ""], {
    "padding": "20px",
    "display": "flex",
    "borderTopWidth": "1px",
    "--tw-border-opacity": "1",
    "borderColor": "rgba(224, 224, 224, var(--tw-border-opacity))"
  }),
  Button: external_styled_components_default.a.a.withConfig({
    displayName: "styles__Button",
    componentId: "sc-jo16ri-11"
  })(["", ""], {
    "--tw-text-opacity": "1",
    "color": "rgba(246, 182, 0, var(--tw-text-opacity))",
    "paddingTop": "10px",
    "paddingBottom": "10px",
    "fontWeight": "700",
    "width": "100%",
    "borderWidth": "1px",
    "--tw-border-opacity": "1",
    "borderColor": "rgba(246, 182, 0, var(--tw-border-opacity))",
    "textAlign": "center",
    "userSelect": "none"
  }),
  Logout: external_styled_components_default.a.div.withConfig({
    displayName: "styles__Logout",
    componentId: "sc-jo16ri-12"
  })(["", ""], {
    "cursor": "pointer",
    "padding": "20px",
    "display": "flex",
    "alignItems": "center",
    "fontWeight": "500"
  })
};
// CONCATENATED MODULE: ./src/layouts/Header/components/Notification/styles.tsx


const NotificationContainer = external_styled_components_default.a.div.withConfig({
  displayName: "styles__NotificationContainer",
  componentId: "sc-1oebekg-0"
})(["", ""], {
  "marginRight": "10px",
  "cursor": "pointer",
  "--tw-border-opacity": "1",
  "borderColor": "rgba(224, 224, 224, var(--tw-border-opacity))"
});
const Notification_styles_Icon = external_styled_components_default()(SVG["a" /* SVG */]).withConfig({
  displayName: "styles__Icon",
  componentId: "sc-1oebekg-1"
})(["", ""], {
  "width": "25px",
  "height": "25px"
});
const Notification_styles_Container = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1oebekg-2"
})(["", ""], {
  "position": "fixed",
  "top": "0",
  "right": "0",
  "width": "100%",
  "height": "100vh",
  "paddingTop": "20px",
  "paddingBottom": "20px",
  "overflowY": "auto",
  "transitionDuration": "150ms",
  "--tw-bg-opacity": "1",
  "backgroundColor": "rgba(255, 255, 255, var(--tw-bg-opacity))",
  "zIndex": "999",
  "@media (min-width: 600px)": {
    "width": "600px"
  }
});
// EXTERNAL MODULE: ./src/redux/actions/notification/index.ts
var actions_notification = __webpack_require__("jAoK");

// CONCATENATED MODULE: ./src/layouts/Header/components/Notification/index.tsx








const Notification = ({
  children
}) => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    isOpenNotification
  } = Object(external_react_redux_["useSelector"])(state => state.actions);
  const {
    currentUser
  } = Object(external_react_redux_["useSelector"])(state => state.auth);
  const {
    notifications: {
      loading = true,
      getNotifyByUser: result = []
    },
    notificationsSetting: {
      loading: loadingSetting = false,
      results: notifySetting = []
    }
  } = Object(external_react_redux_["useSelector"])(state => state.notifications);
  const {
    0: seen,
    1: setSeen
  } = Object(external_react_["useState"])(false);

  const handleClick = () => {
    dispatch(Object(common["d" /* setOpenNotification */])(!isOpenNotification));
  };

  Object(external_react_["useEffect"])(() => {
    if (isOpenNotification) return;
    let seenNotifyUser = false;
    let seenNotifyAdmin = false;

    if (!loading && (result === null || result === void 0 ? void 0 : result.length) > 0) {
      //check notify of user
      const stateSeenList = result === null || result === void 0 ? void 0 : result.map(notify => notify.seen);
      const existStateSeen = stateSeenList.includes(false); // = true, mean is not seen

      if (existStateSeen) {
        seenNotifyUser = false;
      } else {
        seenNotifyUser = true;
      }
    } else {
      seenNotifyUser = true;
    }

    if ((notifySetting === null || notifySetting === void 0 ? void 0 : notifySetting.length) > 0) {
      //check notify from admin
      const listName = notifySetting === null || notifySetting === void 0 ? void 0 : notifySetting.map(notify => notify === null || notify === void 0 ? void 0 : notify.name);
      const notifies = localStorage.getItem("notifyAdmin");
      const lastNotify = listName === null || listName === void 0 ? void 0 : listName.pop();

      if (!notifies) {
        seenNotifyAdmin = false;
        localStorage.setItem("notifyAdmin", lastNotify);
      }

      if (lastNotify === notifies) {
        seenNotifyAdmin = true;
      }
    } else {
      seenNotifyAdmin = true;
    }

    setSeen(seenNotifyUser && seenNotifyAdmin);
  }, [notifySetting]);
  Object(external_react_["useEffect"])(() => {
    if (isOpenNotification) {
      if (seen) return;
      const listName = notifySetting === null || notifySetting === void 0 ? void 0 : notifySetting.map(notify => notify === null || notify === void 0 ? void 0 : notify.name);
      const lastNotify = listName === null || listName === void 0 ? void 0 : listName.pop();
      const notifies = localStorage.getItem("notifyAdmin");

      if (notifies) {
        localStorage.setItem("notifyAdmin", lastNotify);
      }

      const stateSeenList = result === null || result === void 0 ? void 0 : result.map(notify => notify.seen);
      const existStateSeen = stateSeenList.includes(false); // = true, mean is not seen

      if (existStateSeen) {
        var _currentUser$userInfo;

        dispatch(Object(actions_notification["g" /* setSeenForNotify */])({
          userId: currentUser === null || currentUser === void 0 ? void 0 : (_currentUser$userInfo = currentUser.userInfo) === null || _currentUser$userInfo === void 0 ? void 0 : _currentUser$userInfo._id
        }));
      }

      setSeen(true);
    }
  }, [isOpenNotification]);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(NotificationContainer, {
    onClick: handleClick,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Notification_styles_Icon, {
      name: `common/menu/${!loading ? seen ? "noNotify" : "haveNotify" : "noNotify"}`,
      width: 24,
      height: 24
    }), children]
  });
};

/* harmony default export */ var components_Notification = (Notification);
// CONCATENATED MODULE: ./src/layouts/Header/components/Hamburger/index.tsx
















const Hamburger = props => {
  const {
    className = ""
  } = props;
  const {
    t
  } = Object(external_next_i18next_["useTranslation"])(["common"]);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const redirect = Object(useRedirect["a" /* useRedirect */])();
  const {
    isAuth,
    accountInfo,
    logout
  } = Object(useAuth["a" /* default */])();
  const {
    elementRef,
    isVisible,
    setElementVisible
  } = Object(useClickOutSide["a" /* useClickOutSide */])(false);

  const handleClick = () => {
    dispatch(Object(common["d" /* setOpenNotification */])(true));
    setElementVisible(false);
  };

  const handleLogout = () => {
    logout();
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(HamburgerContainer, {
      className: className,
      ref: elementRef,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Hamburger_styles_Icon, {
        onClick: () => setElementVisible(!isVisible),
        name: "common/menu/hamburger",
        height: 24,
        width: 24,
        className: "w-3 phone:w-3.5 cursor-pointer"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["Transition"], {
        show: isVisible,
        as: external_react_["Fragment"],
        enter: "transition ease-out duration-100",
        enterFrom: "transform -translate-y-full",
        enterTo: "transform translate-y-0",
        leave: "transition ease-in duration-75",
        leaveFrom: "transform translate-y-0",
        leaveTo: "transform -translate-y-full",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(styles_Dropdown.Container, {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(styles_Dropdown.CloseIcon, {
            onClick: () => setElementVisible(!isVisible),
            name: "common/menu/mobile-close",
            width: 24,
            height: 24
          }), isAuth && /*#__PURE__*/Object(jsx_runtime_["jsx"])(Hamburger_components_UserInfo, {
            currentUser: accountInfo
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(styles_Dropdown.Navigation, {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(styles_Dropdown.Link, {
              routeName: routes["PATH"].JOB,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(styles_Dropdown.Icon, {
                name: "common/menu/job",
                width: 24,
                height: 24
              }), t("header.job")]
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(styles_Dropdown.Link, {
              routeName: routes["PATH"].COMPANY,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(styles_Dropdown.Icon, {
                name: "common/menu/company",
                width: 24,
                height: 24
              }), t("header.company")]
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(styles_Dropdown.Notification, {
            onClick: handleClick,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Notification, {}), t("header.notification")]
          }), !isAuth ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])(styles_Dropdown.Authen, {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(styles_Dropdown.Link, {
              routeName: routes["PATH"].LOGIN,
              secondary: true,
              separate: true,
              children: t("header.login")
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(styles_Dropdown.Link, {
              routeName: routes["PATH"].REGISTER,
              secondary: true,
              children: t("header.register")
            })]
          }) : /*#__PURE__*/Object(jsx_runtime_["jsxs"])(styles_Dropdown.Logout, {
            onClick: handleLogout,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(styles_Dropdown.Icon, {
              name: "common/menu/logout",
              width: 24,
              height: 24
            }), t("header.logout")]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(styles_Dropdown.ButtonWrapper, {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(styles_Dropdown.Button, {
              href: "https://www.employer.tuyendungvn.com/",
              target: "_blank",
              children: t("header.employer-page")
            })
          })]
        })
      })]
    })
  });
};

/* harmony default export */ var components_Hamburger = (Hamburger);
// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__("boVf");
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);

// CONCATENATED MODULE: ./src/layouts/Header/components/ContentNotify/Notify/styles.tsx


const ItemV2Container = external_styled_components_default.a.div.withConfig({
  displayName: "styles__ItemV2Container",
  componentId: "sc-bhuv5z-0"
})(["", ""], {
  "width": "100%",
  "paddingLeft": "50px",
  "paddingRight": "50px",
  "paddingTop": "15px",
  "paddingBottom": "15px",
  "maxHeight": "50%",
  "overflowY": "auto",
  "--tw-text-opacity": "1",
  "color": "rgba(13, 2, 41, var(--tw-text-opacity))",
  "borderBottomWidth": "1px",
  "fontSize": "14px",
  "--tw-border-opacity": "1",
  "borderColor": "rgba(224, 224, 224, var(--tw-border-opacity))",
  "@media (min-width: 600px)": {
    "fontSize": "16px"
  }
});
const Company = external_styled_components_default.a.p.withConfig({
  displayName: "styles__Company",
  componentId: "sc-bhuv5z-1"
})(["", ""], {
  "marginBottom": "10px",
  "fontWeight": "700",
  "wordBreak": "break-all",
  "fontSize": "14px",
  "--tw-text-opacity": "1",
  "color": "rgba(234, 78, 27, var(--tw-text-opacity))",
  "@media (min-width: 600px)": {
    "fontSize": "16px"
  }
});
const Title = external_styled_components_default.a.p.withConfig({
  displayName: "styles__Title",
  componentId: "sc-bhuv5z-2"
})(["", ""], {
  "marginBottom": "25px",
  "wordBreak": "break-all",
  "fontSize": "14px",
  "@media (min-width: 600px)": {
    "fontSize": "16px"
  }
});
const Content = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Content",
  componentId: "sc-bhuv5z-3"
})(["", " ", ""], {
  "width": "100%",
  "marginBottom": "25px",
  "textAlign": "justify",
  "fontSize": "14px",
  "@media (min-width: 600px)": {
    "fontSize": "16px"
  }
}, ({
  isOpen
}) => !isOpen && `
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        `);
const DetailButton = external_styled_components_default.a.button.withConfig({
  displayName: "styles__DetailButton",
  componentId: "sc-bhuv5z-4"
})(["", ""], {
  "transform": "var(--tw-transform)",
  "cursor": "pointer",
  "fontSize": "14px",
  "--tw-text-opacity": "1",
  "color": "rgba(234, 78, 27, var(--tw-text-opacity))",
  ":hover": {
    "--tw-scale-x": "1.05",
    "--tw-scale-y": "1.05",
    "transform": "var(--tw-transform)",
    "fontWeight": "600"
  }
});
const Action = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Action",
  componentId: "sc-bhuv5z-5"
})(["", ""], {
  "display": "flex",
  "justifyContent": "space-between",
  "width": "100%",
  "lineHeight": "1.75rem",
  "fontSize": "13px",
  "--tw-text-opacity": "1",
  "color": "rgba(234, 78, 27, var(--tw-text-opacity))"
});
const ExpandButton = external_styled_components_default.a.div.withConfig({
  displayName: "styles__ExpandButton",
  componentId: "sc-bhuv5z-6"
})(["", ""], {
  "transform": "var(--tw-transform)",
  "cursor": "pointer",
  "width": "300px",
  ":hover": {
    "--tw-scale-x": "1.05",
    "--tw-scale-y": "1.05",
    "transform": "var(--tw-transform)"
  }
});
const ConfirmButton = external_styled_components_default()(Link["a" /* default */]).withConfig({
  displayName: "styles__ConfirmButton",
  componentId: "sc-bhuv5z-7"
})(["", ""], {
  "paddingLeft": "30px",
  "paddingRight": "30px",
  "paddingTop": "10px",
  "paddingBottom": "10px",
  "--tw-text-opacity": "1",
  "color": "rgba(255, 255, 255, var(--tw-text-opacity))",
  "textTransform": "uppercase",
  "width": "max-content",
  "--tw-bg-opacity": "1",
  "backgroundColor": "rgba(234, 78, 27, var(--tw-bg-opacity))",
  ":hover": {
    "textDecoration": "none"
  }
});
const DateTime = external_styled_components_default.a.p.withConfig({
  displayName: "styles__DateTime",
  componentId: "sc-bhuv5z-8"
})(["", ""], {
  "width": "100%",
  "fontWeight": "400",
  "textAlign": "right",
  "fontSize": "13px",
  "--tw-text-opacity": "1",
  "color": "rgba(234, 78, 27, var(--tw-text-opacity))"
});
const ButtonWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__ButtonWrapper",
  componentId: "sc-bhuv5z-9"
})(["", ""], {
  "display": "flex",
  "flexDirection": "column",
  "justifyContent": "flex-start",
  "width": "100%",
  "marginTop": "20px",
  "@media (min-width: 600px)": {
    "justifyContent": "flex-end"
  },
  "@media (min-width: 1024px)": {
    "width": "auto",
    "marginTop": "0"
  }
});
const TextButton = external_styled_components_default.a.p.withConfig({
  displayName: "styles__TextButton",
  componentId: "sc-bhuv5z-10"
})(["", ""], {
  "transform": "var(--tw-transform)",
  "cursor": "pointer",
  "fontSize": "14px",
  "--tw-text-opacity": "1",
  "color": "rgba(234, 78, 27, var(--tw-text-opacity))",
  ":hover": {
    "--tw-scale-x": "1.05",
    "--tw-scale-y": "1.05",
    "transform": "var(--tw-transform)"
  }
});
const Notify_styles_Container = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-bhuv5z-11"
})(["", ""], {
  "padding": "10px",
  "@media (min-width: 600px)": {
    "padding": "40px"
  }
});
const ScheduleInterviewBox = external_styled_components_default.a.div.withConfig({
  displayName: "styles__ScheduleInterviewBox",
  componentId: "sc-bhuv5z-12"
})(["", ""], {
  "display": "flex",
  "flexDirection": "column",
  "justifyContent": "center"
});
// EXTERNAL MODULE: ./src/designs/Input/index.tsx + 1 modules
var Input = __webpack_require__("3izT");

// EXTERNAL MODULE: ./src/components/Dialog/index.tsx + 1 modules
var Dialog = __webpack_require__("9pNP");

// EXTERNAL MODULE: ./src/designs/Button/index.tsx + 1 modules
var Button = __webpack_require__("P4iE");

// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__("QxnH");

// CONCATENATED MODULE: ./src/layouts/Header/components/ContentNotify/Notify/Dialog/ScheduleInterviewDialog/styles.tsx



const ScheduleInterviewDialogContainer = external_styled_components_default.a.div.withConfig({
  displayName: "styles__ScheduleInterviewDialogContainer",
  componentId: "sc-rd4qd4-0"
})(["", ""], {
  "width": "max-content"
});
const DialogButton = external_styled_components_default.a.p.withConfig({
  displayName: "styles__DialogButton",
  componentId: "sc-rd4qd4-1"
})(["", ""], {
  "display": "block",
  "cursor": "pointer"
});
const ScheduleInterviewDialog_styles_Container = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-rd4qd4-2"
})(["", ""], {
  "padding": "10px",
  "@media (min-width: 600px)": {
    "padding": "40px"
  }
});
const styles_Title = external_styled_components_default.a.p.withConfig({
  displayName: "styles__Title",
  componentId: "sc-rd4qd4-3"
})(["", ""], {
  "fontSize": "24px",
  "fontWeight": "700",
  "--tw-text-opacity": "1",
  "color": "rgba(234, 78, 27, var(--tw-text-opacity))",
  "marginRight": "100px",
  "marginBottom": "40px",
  "textAlign": "center",
  "width": "100%",
  "@media (min-width: 600px)": {
    "fontSize": "26px"
  }
});
const ScheduleInterviewForm = external_styled_components_default()(external_formik_["Form"]).withConfig({
  displayName: "styles__ScheduleInterviewForm",
  componentId: "sc-rd4qd4-4"
})(["", ""], {
  "display": "grid",
  "gap": "20px"
});
const styles_ButtonWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__ButtonWrapper",
  componentId: "sc-rd4qd4-5"
})(["", ""], {
  "display": "flex",
  "flexDirection": "row",
  "justifyContent": "flex-end",
  "width": "100%",
  "marginTop": "40px",
  "columnGap": "10px",
  "@media (min-width: 600px)": {
    "columnGap": "20px"
  }
});
const styles_ConfirmButton = external_styled_components_default()(Button["a" /* default */]).withConfig({
  displayName: "styles__ConfirmButton",
  componentId: "sc-rd4qd4-6"
})(["", ""], {
  "width": "120px"
});
const CancelButton = external_styled_components_default()(Button["a" /* default */]).withConfig({
  displayName: "styles__CancelButton",
  componentId: "sc-rd4qd4-7"
})(["", ""], {
  "width": "120px"
});
const ViewButton = external_styled_components_default()(Button["a" /* default */]).withConfig({
  displayName: "styles__ViewButton",
  componentId: "sc-rd4qd4-8"
})(["", ""], {
  "textAlign": "center",
  "width": "170px",
  "cursor": "pointer",
  "--tw-bg-opacity": "1",
  "backgroundColor": "rgba(246, 182, 0, var(--tw-bg-opacity))"
});
const styles_ScheduleInterviewBox = external_styled_components_default.a.div.withConfig({
  displayName: "styles__ScheduleInterviewBox",
  componentId: "sc-rd4qd4-9"
})(["", ""], {
  "display": "flex",
  "flexDirection": "column",
  "justifyContent": "center"
});
const Form = external_styled_components_default()(external_formik_["Form"]).withConfig({
  displayName: "styles__Form",
  componentId: "sc-rd4qd4-10"
})(["", ""], {
  "display": "grid",
  "rowGap": "24px"
});
// EXTERNAL MODULE: ./src/redux/actions/scheduleInterview/index.ts + 1 modules
var actions_scheduleInterview = __webpack_require__("ciWM");

// EXTERNAL MODULE: ./src/common/functions/format/formatDate.ts
var formatDate = __webpack_require__("zi1o");

// CONCATENATED MODULE: ./src/layouts/Header/components/ContentNotify/Notify/Dialog/ScheduleInterviewDialog/index.tsx














const ScheduleInterviewDialog = props => {
  var _scheduleView$receive, _currentUser$userInfo2;

  const {
    isOpen,
    onClose,
    scheduleInterviewId
  } = props;
  const {
    t
  } = Object(external_next_i18next_["useTranslation"])(["profile", "common"]);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    0: open,
    1: setOpen
  } = Object(external_react_["useState"])(false);
  const {
    0: isConfirm,
    1: setIsConfirm
  } = Object(external_react_["useState"])();
  const {
    0: isExpired,
    1: setIsExpired
  } = Object(external_react_["useState"])();
  const {
    0: isRefused,
    1: setIsRefused
  } = Object(external_react_["useState"])();
  const {
    currentUser
  } = Object(external_react_redux_["useSelector"])(state => state.auth);
  const {
    recruitment
  } = Object(external_react_redux_["useSelector"])(state => state.recruitment);
  const {
    allScheduleInterview: {
      results: listScheduled = []
    }
  } = Object(external_react_redux_["useSelector"])(state => state.scheduleInterview);
  const scheduleView = listScheduled.find(element => (element === null || element === void 0 ? void 0 : element._id) === scheduleInterviewId);
  Object(external_react_["useEffect"])(() => {
    if ((scheduleView === null || scheduleView === void 0 ? void 0 : scheduleView.isConfirmFromReceiver) === true) {
      setIsConfirm(true);
    }

    if ((scheduleView === null || scheduleView === void 0 ? void 0 : scheduleView.status) === "canceled") {
      setIsRefused(true);
    }

    if ((scheduleView === null || scheduleView === void 0 ? void 0 : scheduleView.status) === "expired") {
      setIsExpired(true);
    }
  }, [scheduleView]);
  Object(external_react_["useEffect"])(() => {
    if (common["a" /* actionSuccess */]) {
      getScheduledInterview();
      open && setOpen(false);
    }
  }, [common["a" /* actionSuccess */]]);

  const getScheduledInterview = () => {
    var _currentUser$userInfo;

    const payload = {
      filterScheduleInterview: {
        receiver: currentUser === null || currentUser === void 0 ? void 0 : (_currentUser$userInfo = currentUser.userInfo) === null || _currentUser$userInfo === void 0 ? void 0 : _currentUser$userInfo._id,
        recruitment: recruitment === null || recruitment === void 0 ? void 0 : recruitment._id
      }
    };
    dispatch(Object(actions_scheduleInterview["c" /* getAllScheduleInterview */])(payload));
  };

  const confirmTheScheduleInterviewAPI = scheduleInterviewId => {
    const payload = {
      id: scheduleInterviewId
    };
    dispatch(Object(actions_scheduleInterview["b" /* confirmTheScheduleInterview */])(payload));
  };

  const cancelTheScheduleInterviewAPI = scheduleInterviewId => {
    const payload = {
      id: scheduleInterviewId
    };
    dispatch(Object(actions_scheduleInterview["a" /* cancelTheScheduleInterview */])(payload));
  };

  const handleConfirm = () => {
    confirmTheScheduleInterviewAPI(scheduleInterviewId);
    onClose();
  };

  const handleRefuse = () => {
    cancelTheScheduleInterviewAPI(scheduleInterviewId);
    onClose();
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(ScheduleInterviewDialogContainer, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Dialog["a" /* default */], {
      isOpen: isOpen,
      onClose: onClose,
      className: "z-50 rounded-none relative",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(ScheduleInterviewDialog_styles_Container, {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(styles_Title, {
          children: t("common:schedule-interview.schedule")
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(styles_ScheduleInterviewBox, {
          children: listScheduled && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "flex flex-col gap-y-2 mb-4",
            children: (scheduleView === null || scheduleView === void 0 ? void 0 : (_scheduleView$receive = scheduleView.receiver) === null || _scheduleView$receive === void 0 ? void 0 : _scheduleView$receive._id) === (currentUser === null || currentUser === void 0 ? void 0 : (_currentUser$userInfo2 = currentUser.userInfo) === null || _currentUser$userInfo2 === void 0 ? void 0 : _currentUser$userInfo2._id) && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Input["a" /* default */], {
                label: t("common:schedule-interview.interview-position"),
                value: scheduleView === null || scheduleView === void 0 ? void 0 : scheduleView.positionInterview,
                disabled: true
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Input["a" /* default */], {
                label: t("common:schedule-interview.interview-method"),
                value: scheduleView === null || scheduleView === void 0 ? void 0 : scheduleView.scheduleType,
                disabled: true
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Input["a" /* default */], {
                label: t("common:schedule-interview.interview-date"),
                value: Object(formatDate["a" /* formatDate */])(scheduleView === null || scheduleView === void 0 ? void 0 : scheduleView.scheduleTime),
                disabled: true
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Input["a" /* default */], {
                label: t("common:schedule-interview.interview-time"),
                value: Object(formatDate["b" /* formatDateWithTime */])(scheduleView === null || scheduleView === void 0 ? void 0 : scheduleView.scheduleTime),
                disabled: true
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Input["a" /* default */], {
                label: t("common:schedule-interview.interview-location"),
                value: scheduleView === null || scheduleView === void 0 ? void 0 : scheduleView.scheduleLocation,
                disabled: true
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Input["a" /* default */], {
                label: t("common:schedule-interview.interviewer"),
                value: scheduleView === null || scheduleView === void 0 ? void 0 : scheduleView.interviewerName,
                disabled: true
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Input["a" /* default */], {
                label: t("common:schedule-interview.phone-number"),
                value: scheduleView === null || scheduleView === void 0 ? void 0 : scheduleView.interviewerPhone,
                disabled: true
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Input["a" /* default */], {
                label: t("common:schedule-interview.email"),
                value: scheduleView === null || scheduleView === void 0 ? void 0 : scheduleView.interviewerEmail,
                disabled: true
              }), isRefused ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(styles_ButtonWrapper, {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
                  primary: true,
                  className: "px-2",
                  style: {
                    opacity: 0.5,
                    pointerEvents: "none"
                  },
                  children: "L\u1ECBch ph\u1ECFng v\u1EA5n \u0111\xE3 b\u1ECB h\u1EE7y"
                })
              }) : null, isExpired ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(styles_ButtonWrapper, {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
                  primary: true,
                  className: "px-2",
                  style: {
                    opacity: 0.5,
                    pointerEvents: "none"
                  },
                  children: "L\u1ECBch ph\u1ECFng v\u1EA5n \u0111\xE3 h\u1EBFt h\u1EA1n"
                })
              }) : null, !isExpired && !isRefused && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(styles_ButtonWrapper, {
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
                  type: "submit",
                  onClick: handleRefuse,
                  className: "w-15 border border-solid border-primary",
                  children: t("common:schedule-interview.refuse")
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
                  primary: true,
                  type: "submit",
                  className: "w-15",
                  onClick: handleConfirm,
                  style: {
                    opacity: isConfirm ? 0.5 : 1,
                    pointerEvents: isConfirm ? "none" : "initial"
                  },
                  children: !isConfirm ? t("common:schedule-interview.confirm") : t("common:schedule-interview.confirmed")
                })]
              })]
            })
          })
        })]
      })
    })
  });
};

/* harmony default export */ var Dialog_ScheduleInterviewDialog = (ScheduleInterviewDialog);
// CONCATENATED MODULE: ./src/layouts/Header/components/ContentNotify/Notify/Dialog/InvitationApplyDialog/styles.tsx



const styles_ScheduleInterviewDialogContainer = external_styled_components_default.a.div.withConfig({
  displayName: "styles__ScheduleInterviewDialogContainer",
  componentId: "sc-4gzrle-0"
})(["", ""], {
  "width": "max-content"
});
const styles_DialogButton = external_styled_components_default.a.p.withConfig({
  displayName: "styles__DialogButton",
  componentId: "sc-4gzrle-1"
})(["", ""], {
  "display": "block",
  "cursor": "pointer"
});
const InvitationApplyDialog_styles_Container = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-4gzrle-2"
})(["", ""], {
  "padding": "10px",
  "@media (min-width: 600px)": {
    "padding": "40px"
  }
});
const InvitationApplyDialog_styles_Title = external_styled_components_default.a.p.withConfig({
  displayName: "styles__Title",
  componentId: "sc-4gzrle-3"
})(["", ""], {
  "fontSize": "24px",
  "fontWeight": "700",
  "--tw-text-opacity": "1",
  "color": "rgba(234, 78, 27, var(--tw-text-opacity))",
  "marginRight": "100px",
  "marginBottom": "40px",
  "textAlign": "center",
  "width": "100%",
  "@media (min-width: 600px)": {
    "fontSize": "26px"
  }
});
const styles_ScheduleInterviewForm = external_styled_components_default()(external_formik_["Form"]).withConfig({
  displayName: "styles__ScheduleInterviewForm",
  componentId: "sc-4gzrle-4"
})(["", ""], {
  "display": "grid",
  "gap": "20px"
});
const InvitationApplyDialog_styles_ButtonWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__ButtonWrapper",
  componentId: "sc-4gzrle-5"
})(["", ""], {
  "display": "flex",
  "flexDirection": "row",
  "justifyContent": "flex-end",
  "width": "100%",
  "marginTop": "40px",
  "columnGap": "10px",
  "@media (min-width: 600px)": {
    "columnGap": "20px"
  }
});
const InvitationApplyDialog_styles_ConfirmButton = external_styled_components_default()(Button["a" /* default */]).withConfig({
  displayName: "styles__ConfirmButton",
  componentId: "sc-4gzrle-6"
})(["", ""], {
  "width": "120px"
});
const styles_CancelButton = external_styled_components_default()(Button["a" /* default */]).withConfig({
  displayName: "styles__CancelButton",
  componentId: "sc-4gzrle-7"
})(["", ""], {
  "width": "120px"
});
const styles_ViewButton = external_styled_components_default()(Button["a" /* default */]).withConfig({
  displayName: "styles__ViewButton",
  componentId: "sc-4gzrle-8"
})(["", ""], {
  "textAlign": "center",
  "width": "170px",
  "cursor": "pointer",
  "--tw-bg-opacity": "1",
  "backgroundColor": "rgba(246, 182, 0, var(--tw-bg-opacity))"
});
const InvitationApplyDialog_styles_ScheduleInterviewBox = external_styled_components_default.a.div.withConfig({
  displayName: "styles__ScheduleInterviewBox",
  componentId: "sc-4gzrle-9"
})(["", ""], {
  "display": "flex",
  "flexDirection": "column",
  "justifyContent": "center"
});
// EXTERNAL MODULE: ./src/redux/actions/invitationApply/index.ts + 1 modules
var actions_invitationApply = __webpack_require__("jNw/");

// CONCATENATED MODULE: ./src/layouts/Header/components/ContentNotify/Notify/Dialog/InvitationApplyDialog/index.tsx















const InvitationApplyDialog = props => {
  var _invitation$receiver, _currentUser$userInfo2, _invitation$company, _invitation$recruitme;

  const {
    isOpen,
    onClose,
    invitationApplyId
  } = props;
  const {
    t
  } = Object(external_next_i18next_["useTranslation"])(["profile", "common"]);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    0: open,
    1: setOpen
  } = Object(external_react_["useState"])(false);
  const {
    currentUser
  } = Object(external_react_redux_["useSelector"])(state => state.auth);
  const {
    isLoading
  } = Object(external_react_redux_["useSelector"])(state => state.actions);
  const {
    allInvitationApply: {
      results: listInvitation = []
    }
  } = Object(external_react_redux_["useSelector"])(state => state.invitationApply);
  const invitation = listInvitation.find(element => (element === null || element === void 0 ? void 0 : element._id) === invitationApplyId);
  Object(external_react_["useEffect"])(() => {
    if (common["a" /* actionSuccess */]) {
      getInvitationApply();
      open && setOpen(false);
    }
  }, [common["a" /* actionSuccess */]]);

  const getInvitationApply = () => {
    var _currentUser$userInfo;

    const payload = {
      filterInvitationApply: {
        receiver: currentUser === null || currentUser === void 0 ? void 0 : (_currentUser$userInfo = currentUser.userInfo) === null || _currentUser$userInfo === void 0 ? void 0 : _currentUser$userInfo._id
      }
    };
    dispatch(Object(actions_invitationApply["a" /* getAllInvitationApply */])(payload));
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(styles_ScheduleInterviewDialogContainer, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Dialog["a" /* default */], {
      isOpen: isOpen,
      onClose: onClose,
      className: "z-50 rounded-none relative",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(InvitationApplyDialog_styles_Container, {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(InvitationApplyDialog_styles_Title, {
          children: t("common:invitation-apply.invitation")
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(InvitationApplyDialog_styles_ScheduleInterviewBox, {
          children: listInvitation && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "flex flex-col gap-y-2 mb-4",
            children: (invitation === null || invitation === void 0 ? void 0 : (_invitation$receiver = invitation.receiver) === null || _invitation$receiver === void 0 ? void 0 : _invitation$receiver._id) === (currentUser === null || currentUser === void 0 ? void 0 : (_currentUser$userInfo2 = currentUser.userInfo) === null || _currentUser$userInfo2 === void 0 ? void 0 : _currentUser$userInfo2._id) && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Input["a" /* default */], {
                label: t("common:invitation-apply.company"),
                value: invitation === null || invitation === void 0 ? void 0 : (_invitation$company = invitation.company) === null || _invitation$company === void 0 ? void 0 : _invitation$company.name,
                disabled: true
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Input["a" /* default */], {
                label: t("common:invitation-apply.recruitment"),
                value: invitation === null || invitation === void 0 ? void 0 : invitation.positionApply,
                disabled: true
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Input["a" /* default */], {
                label: t("common:invitation-apply.location"),
                value: invitation === null || invitation === void 0 ? void 0 : invitation.address,
                disabled: true
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Input["a" /* default */], {
                label: t("common:invitation-apply.phone-number-contact"),
                value: invitation === null || invitation === void 0 ? void 0 : invitation.senderPhone,
                disabled: true
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Input["a" /* default */], {
                label: t("common:invitation-apply.email-contact"),
                value: invitation === null || invitation === void 0 ? void 0 : invitation.senderEmail,
                disabled: true
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(InvitationApplyDialog_styles_ButtonWrapper, {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
                  loading: isLoading,
                  primary: true,
                  type: "submit",
                  className: "px-4",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Link["a" /* default */], {
                    routeName: routes["PATH"].JOB_DETAIL,
                    params: {
                      slug: invitation === null || invitation === void 0 ? void 0 : (_invitation$recruitme = invitation.recruitment) === null || _invitation$recruitme === void 0 ? void 0 : _invitation$recruitme.slug
                    },
                    children: "Xem vi\u1EC7c l\xE0m"
                  })
                })
              })]
            })
          })
        })]
      })
    })
  });
};

/* harmony default export */ var Dialog_InvitationApplyDialog = (InvitationApplyDialog);
// CONCATENATED MODULE: ./src/layouts/Header/components/ContentNotify/Notify/index.tsx













const Notify = props => {
  const {
    notification
  } = props;
  const {
    name,
    company,
    description,
    createdAt,
    scheduleInterview,
    invitationApply
  } = notification || {};
  const {
    0: open,
    1: setOpen
  } = Object(external_react_["useState"])(false);
  const {
    t
  } = Object(external_next_i18next_["useTranslation"])(["common"]);
  const redirect = Object(useRedirect["a" /* useRedirect */])();
  const dispatch = Object(external_react_redux_["useDispatch"])();

  const handleGetNotify = () => {
    if (name === "Evaluated") {
      redirect(routes["PATH"].JOB_MANAGEMENT_EVALUATED);
    }
  };

  const onOpenDialog = () => {
    setOpen(true);
    dispatch(Object(common["d" /* setOpenNotification */])(false));
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(ItemV2Container, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Company, {
      children: company === null || company === void 0 ? void 0 : company.name
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Content, {
      isOpen: open,
      children: description
    }), name === "Evaluated" && /*#__PURE__*/Object(jsx_runtime_["jsx"])(DetailButton, {
      onClick: () => handleGetNotify(),
      children: "Xem chi ti\u1EBFt"
    }), name === "Approved" && null, name === "Scheduled" && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(ButtonWrapper, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(TextButton, {
        onClick: onOpenDialog,
        children: "Xem chi ti\u1EBFt"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Dialog_ScheduleInterviewDialog, {
        isOpen: open,
        scheduleInterviewId: scheduleInterview === null || scheduleInterview === void 0 ? void 0 : scheduleInterview._id,
        onClose: () => setOpen(false)
      })]
    }), name === "Invitation" && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(ButtonWrapper, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(TextButton, {
        onClick: onOpenDialog,
        children: "Xem chi ti\u1EBFt"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Dialog_InvitationApplyDialog, {
        isOpen: open,
        invitationApplyId: invitationApply === null || invitationApply === void 0 ? void 0 : invitationApply._id,
        onClose: () => setOpen(false)
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Action, {
      className: open && "mt-3",
      children: [(description === null || description === void 0 ? void 0 : description.length) > 150 && /*#__PURE__*/Object(jsx_runtime_["jsx"])(ExpandButton, {
        onClick: () => setOpen(!open),
        children: open ? t("header.collapse") : t("header.extend")
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(DateTime, {
        children: external_dayjs_default()(createdAt === null || createdAt === void 0 ? void 0 : createdAt.toString()).format("DD/MM/YYYY")
      })]
    })]
  });
};

/* harmony default export */ var ContentNotify_Notify = (Notify);
// CONCATENATED MODULE: ./src/layouts/Header/components/ContentNotify/styles.tsx



const ContentContainer = external_styled_components_default.a.div.withConfig({
  displayName: "styles__ContentContainer",
  componentId: "sc-kolmoi-0"
})(["", ""], {
  "position": "fixed",
  "top": "0",
  "bottom": "0",
  "right": "0",
  "width": "100vw",
  "paddingTop": "20px",
  "paddingBottom": "20px",
  "overflowY": "auto",
  "transitionDuration": "150ms",
  "--tw-bg-opacity": "1",
  "backgroundColor": "rgba(255, 255, 255, var(--tw-bg-opacity))",
  "zIndex": "999",
  "--tw-shadow": "0 8px 24px -4px rgba(24, 39, 75, 0.08), 0 6px 12px -6px rgba(24, 39, 75, 0.12)",
  "boxShadow": "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
  "@media (min-width: 600px)": {
    "width": "600px"
  }
});
const Header = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Header",
  componentId: "sc-kolmoi-1"
})(["", ""], {
  "display": "flex",
  "alignItems": "center",
  "justifyContent": "space-between",
  "paddingLeft": "20px",
  "paddingRight": "20px",
  "@media (min-width: 600px)": {
    "paddingLeft": "30px",
    "paddingRight": "30px"
  }
});
const ContentNotify_styles_Icon = external_styled_components_default()(SVG["a" /* SVG */]).withConfig({
  displayName: "styles__Icon",
  componentId: "sc-kolmoi-2"
})(["", ""], {
  "width": "80px",
  "height": "80px"
});
const CloseIcon = external_styled_components_default()(SVG["a" /* SVG */]).withConfig({
  displayName: "styles__CloseIcon",
  componentId: "sc-kolmoi-3"
})(["", ""], {
  "width": "25px",
  "height": "25px",
  "cursor": "pointer"
});
const ContentNotify_styles_Title = external_styled_components_default.a.p.withConfig({
  displayName: "styles__Title",
  componentId: "sc-kolmoi-4"
})(["", ""], {
  "fontWeight": "700",
  "--tw-text-opacity": "1",
  "color": "rgba(13, 2, 41, var(--tw-text-opacity))",
  "fontSize": "18px",
  "@media (min-width: 600px)": {
    "fontSize": "30px"
  }
});
const Login = {
  Wrapper: external_styled_components_default.a.div.withConfig({
    displayName: "styles__Wrapper",
    componentId: "sc-kolmoi-5"
  })(["", ""], {
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "center",
    "width": "100%",
    "marginTop": "100px",
    "fontWeight": "700",
    "textAlign": "center",
    "fontSize": "16px",
    "@media (min-width: 600px)": {
      "fontSize": "20px"
    }
  }),
  Title: external_styled_components_default.a.p.withConfig({
    displayName: "styles__Title",
    componentId: "sc-kolmoi-6"
  })(["", ""], {
    "marginBottom": "30px",
    "--tw-text-opacity": "1",
    "color": "rgba(234, 78, 27, var(--tw-text-opacity))"
  }),
  Button: external_styled_components_default()(Link["a" /* default */]).withConfig({
    displayName: "styles__Button",
    componentId: "sc-kolmoi-7"
  })(["", ""], {
    "paddingLeft": "30px",
    "paddingRight": "30px",
    "paddingTop": "10px",
    "paddingBottom": "10px",
    "fontWeight": "500",
    "transitionDuration": "100ms",
    "borderWidth": "1px",
    ":hover": {
      "textDecoration": "none",
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(234, 78, 27, var(--tw-bg-opacity))",
      "--tw-text-opacity": "1",
      "color": "rgba(255, 255, 255, var(--tw-text-opacity))"
    },
    "fontSize": "16px",
    "--tw-border-opacity": "1",
    "borderColor": "rgba(234, 78, 27, var(--tw-border-opacity))",
    "width": "max-content",
    "--tw-text-opacity": "1",
    "color": "rgba(234, 78, 27, var(--tw-text-opacity))"
  })
};
const Empty = external_styled_components_default.a.p.withConfig({
  displayName: "styles__Empty",
  componentId: "sc-kolmoi-8"
})(["", ""], {
  "width": "100%",
  "fontWeight": "400",
  "textAlign": "center",
  "--tw-text-opacity": "1",
  "color": "rgba(13, 2, 41, var(--tw-text-opacity))",
  "fontSize": "16px"
});
const NotifyContainer = external_styled_components_default.a.p.withConfig({
  displayName: "styles__NotifyContainer",
  componentId: "sc-kolmoi-9"
})(["", ""], {
  "width": "100%",
  "maxHeight": "90%",
  "overflowY": "auto"
});
// CONCATENATED MODULE: ./src/layouts/Header/components/ContentNotify/index.tsx











const ContentNotify_Content = () => {
  const {
    isAuth
  } = Object(useAuth["a" /* default */])();
  const {
    t
  } = Object(external_next_i18next_["useTranslation"])(["common"]);
  const {
    notifications: {
      loading = true,
      getNotifyByUser: result = []
    },
    notificationsSettingByUser: {
      loading: loadingSetting = false,
      results: notifySetting = []
    }
  } = Object(external_react_redux_["useSelector"])(state => state.notifications);
  const {
    isOpenNotification
  } = Object(external_react_redux_["useSelector"])(state => state.actions);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    0: allNotify,
    1: setAllNotify
  } = Object(external_react_["useState"])([]);
  Object(external_react_["useEffect"])(() => {
    if (notifySetting.length > 0 && result.length > 0) {
      const notifyList = [];
      notifySetting === null || notifySetting === void 0 ? void 0 : notifySetting.map(setting => {
        const notify = {
          company: {
            name: t("header.admin")
          },
          createdAt: setting.createdAt,
          name: setting.name,
          description: setting.description
        };
        notifyList.push(notify);
      });
      setAllNotify(state => [...result, ...notifyList]);
    } else if (result.length > 0 && (notifySetting === null || notifySetting === void 0 ? void 0 : notifySetting.length) === 0) {
      setAllNotify(result);
    } else {
      setAllNotify(notifySetting);
    }
  }, [result, notifySetting]);

  const handleClose = () => {
    dispatch(Object(common["d" /* setOpenNotification */])(false));
  };

  const arrReverse = [...allNotify];
  arrReverse === null || arrReverse === void 0 ? void 0 : arrReverse.sort((value1, value2) => {
    const date1 = new Date(value1.createdAt);
    const date2 = new Date(value2.createdAt);
    return date2 - date1;
  });
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(ContentContainer, {
    className: `transform ${isOpenNotification ? `translate-x-0` : `translate-x-full`}`,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(Header, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(ContentNotify_styles_Icon, {
        name: "common/menu/bell-icon",
        width: 80,
        height: 80
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ContentNotify_styles_Title, {
        children: t("header.career-notification")
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(CloseIcon, {
        onClick: handleClose,
        name: "common/close",
        width: 24,
        height: 24
      })]
    }), isAuth ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(NotifyContainer, {
      children: !loading && !loadingSetting && (arrReverse === null || arrReverse === void 0 ? void 0 : arrReverse.length) > 0 ? arrReverse === null || arrReverse === void 0 ? void 0 : arrReverse.map(notify => /*#__PURE__*/Object(jsx_runtime_["jsx"])(ContentNotify_Notify, {
        notification: notify
      })) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(Empty, {
        children: t("header.empty-notify")
      })
    }) : /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Login.Wrapper, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Login.Title, {
        children: t("header.login-notification")
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Login.Button, {
        routeName: routes["PATH"].LOGIN,
        className: "transform hover:scale-105",
        children: t("header.login")
      })]
    })]
  });
};

/* harmony default export */ var ContentNotify = (ContentNotify_Content);
// CONCATENATED MODULE: ./src/layouts/Header/styles.tsx



const HeaderWrapper = external_styled_components_default.a.nav.withConfig({
  displayName: "styles__HeaderWrapper",
  componentId: "sc-izddj1-0"
})(["", ""], {
  "position": "fixed",
  "left": "0",
  "right": "0",
  "zIndex": "20",
  "width": "100%",
  "height": "60px",
  "--tw-bg-opacity": "1",
  "backgroundColor": "rgba(255, 255, 255, var(--tw-bg-opacity))",
  "--tw-shadow": "0 0 0 1px #E0E0E0",
  "boxShadow": "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
  "@media (min-width: 600px)": {
    "height": "70px"
  }
});
const HeaderContainer = external_styled_components_default.a.div.withConfig({
  displayName: "styles__HeaderContainer",
  componentId: "sc-izddj1-1"
})(["", ""], {
  "position": "relative",
  "display": "flex",
  "alignItems": "center",
  "justifyContent": "space-between",
  "width": "100%",
  "height": "100%"
});
const LogoLink = external_styled_components_default()(Link["a" /* default */]).withConfig({
  displayName: "styles__LogoLink",
  componentId: "sc-izddj1-2"
})(["", ""], {
  "height": "50px",
  "width": "130px"
});
const Text = external_styled_components_default.a.span.withConfig({
  displayName: "styles__Text",
  componentId: "sc-izddj1-3"
})(["", ""], {
  "fontWeight": "700",
  "textTransform": "uppercase",
  "cursor": "pointer",
  "fontSize": "16px",
  "--tw-text-opacity": "1",
  "color": "rgba(234, 78, 27, var(--tw-text-opacity))",
  ":hover": {
    "--tw-text-opacity": "1",
    "color": "rgba(246, 182, 0, var(--tw-text-opacity))"
  }
});
const Logo = external_styled_components_default.a.img.withConfig({
  displayName: "styles__Logo",
  componentId: "sc-izddj1-4"
})(["", ""], {
  "objectFit": "cover",
  "width": "100%",
  "height": "100%"
});
const NavigationWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__NavigationWrapper",
  componentId: "sc-izddj1-5"
})(["", ""], {
  "alignItems": "center",
  "justifyContent": "space-between",
  "flex": "1 1 0%",
  "display": "none",
  "height": "100%",
  "paddingTop": "10px",
  "paddingBottom": "10px",
  "--tw-text-opacity": "1",
  "color": "rgba(13, 2, 41, var(--tw-text-opacity))",
  "@media (min-width: 1024px)": {
    "display": "flex"
  }
});
const PageNavigation = external_styled_components_default.a.div.withConfig({
  displayName: "styles__PageNavigation",
  componentId: "sc-izddj1-6"
})(["", ""], {
  "display": "inline-flex",
  "alignItems": "center",
  "height": "100%"
});
const AuthenNavigation = external_styled_components_default.a.div.withConfig({
  displayName: "styles__AuthenNavigation",
  componentId: "sc-izddj1-7"
})(["", ""], {
  "display": "inline-flex",
  "alignItems": "center",
  "height": "100%",
  "columnGap": "10px"
});
const Header_styles_Link = external_styled_components_default()(Link["a" /* default */]).withConfig({
  displayName: "styles__Link",
  componentId: "sc-izddj1-8"
})(["", " ", " ", ""], {
  "marginLeft": "50px",
  "fontSize": "16px",
  ":hover": {
    "--tw-text-opacity": "1",
    "color": "rgba(246, 182, 0, var(--tw-text-opacity))"
  }
}, ({
  highlight
}) => highlight ? {
  "fontWeight": "700"
} : {
  "fontWeight": "400"
}, ({
  uppercase
}) => uppercase && {
  "fontWeight": "700",
  "textTransform": "uppercase",
  "--tw-text-opacity": "1",
  "color": "rgba(234, 78, 27, var(--tw-text-opacity))"
});
const styles_Button = external_styled_components_default()(Link["a" /* default */]).withConfig({
  displayName: "styles__Button",
  componentId: "sc-izddj1-9"
})(["", " ", " ", " ", ""], {
  "display": "flex",
  "alignItems": "center",
  "justifyContent": "center",
  "paddingTop": "10px",
  "paddingBottom": "10px",
  "width": "130px",
  "fontWeight": "700",
  "fontSize": "14px",
  "@media (min-width: 600px)": {
    "fontSize": "16px"
  }
}, ({
  outline
}) => outline && {
  "backgroundColor": "rgba(0, 0, 0, 0)",
  "borderWidth": "1px",
  "--tw-border-opacity": "1",
  "borderColor": "rgba(234, 78, 27, var(--tw-border-opacity))",
  "--tw-text-opacity": "1",
  "color": "rgba(234, 78, 27, var(--tw-text-opacity))",
  ":hover": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(234, 78, 27, var(--tw-bg-opacity))",
    "--tw-text-opacity": "1",
    "color": "rgba(255, 255, 255, var(--tw-text-opacity))"
  }
}, ({
  fullFill
}) => fullFill && {
  "--tw-text-opacity": "1",
  "color": "rgba(255, 255, 255, var(--tw-text-opacity))",
  "--tw-bg-opacity": "1",
  "backgroundColor": "rgba(234, 78, 27, var(--tw-bg-opacity))",
  "borderWidth": "1px",
  "--tw-border-opacity": "1",
  "borderColor": "rgba(234, 78, 27, var(--tw-border-opacity))",
  ":hover": {
    "--tw-bg-opacity": "0.8",
    "--tw-border-opacity": "0.8"
  }
}, ({
  isHidden
}) => isHidden && {
  "display": "none"
});
const Seprate = external_styled_components_default.a.span.withConfig({
  displayName: "styles__Seprate",
  componentId: "sc-izddj1-10"
})(["", ""], {
  "height": "30px",
  "marginLeft": "10px",
  "marginRight": "10px",
  "borderWidth": "1px",
  "--tw-border-opacity": "1",
  "borderColor": "rgba(224, 224, 224, var(--tw-border-opacity))"
}); // Mobile style

const Mobile = {
  NavigationWrapper: external_styled_components_default.a.div.withConfig({
    displayName: "styles__NavigationWrapper",
    componentId: "sc-izddj1-11"
  })(["", ""], {
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "flex-end",
    "height": "100%",
    "@media (min-width: 1024px)": {
      "display": "none"
    }
  }),
  Icon: external_styled_components_default()(SVG["a" /* SVG */]).withConfig({
    displayName: "styles__Icon",
    componentId: "sc-izddj1-12"
  })(["", ""], {
    "width": "25px",
    "height": "25px",
    "marginLeft": "20px",
    "cursor": "pointer"
  })
};
const EmployerNavigationWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__EmployerNavigationWrapper",
  componentId: "sc-izddj1-13"
})(["", ""], {
  "display": "flex",
  "alignItems": "center",
  "justifyContent": "space-between",
  "flex": "1 1 0%"
});
const MobileButtonWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__MobileButtonWrapper",
  componentId: "sc-izddj1-14"
})(["", ""], {
  "display": "flex"
});
const styles_NotifyContainer = external_styled_components_default.a.div.withConfig({
  displayName: "styles__NotifyContainer",
  componentId: "sc-izddj1-15"
})(["", " ", ""], {
  "paddingLeft": "10px",
  "paddingRight": "10px",
  "borderRightWidth": "1px",
  "--tw-border-opacity": "1",
  "borderColor": "rgba(224, 224, 224, var(--tw-border-opacity))"
}, ({
  hasBorderLeft
}) => hasBorderLeft && {
  "paddingLeft": "20px",
  "borderLeftWidth": "1px"
});
const GroupInfo = external_styled_components_default.a.div.withConfig({
  displayName: "styles__GroupInfo",
  componentId: "sc-izddj1-16"
})(["", ""], {
  "display": "flex",
  "alignItems": "center",
  "gap": "10px"
});
const SwitchWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__SwitchWrapper",
  componentId: "sc-izddj1-17"
})(["", " ", ""], {
  "display": "flex",
  "paddingLeft": "20px",
  "paddingRight": "20px",
  "borderRightWidth": "1px",
  "--tw-border-opacity": "1",
  "borderColor": "rgba(224, 224, 224, var(--tw-border-opacity))"
}, ({
  hasBorderLeft
}) => hasBorderLeft && {
  "paddingLeft": "20px",
  "borderLeftWidth": "1px"
});
const SwitchTitle = external_styled_components_default.a.span.withConfig({
  displayName: "styles__SwitchTitle",
  componentId: "sc-izddj1-18"
})(["", ""], {
  "paddingRight": "20px"
});
const SwitchDialog = external_styled_components_default.a.div.withConfig({
  displayName: "styles__SwitchDialog",
  componentId: "sc-izddj1-19"
})([""]);
// CONCATENATED MODULE: ./src/designs/Switch/index.tsx




const SwitchUI = ({
  enabled = false,
  disabled = false,
  onChange
}) => {
  const {
    0: checked,
    1: setChecked
  } = Object(external_react_["useState"])(enabled);
  Object(external_react_["useEffect"])(() => {
    setChecked(enabled);
  }, [enabled]);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_["Switch"], {
    checked: checked,
    onChange: () => {} // onChange={(checked) => {
    //   setChecked(checked);
    //   onChange?.(checked);
    // }}
    ,
    disabled: disabled,
    className: `${checked ? "bg-primary" : "bg-primary bg-opacity-60"} relative inline-flex items-center h-2.5 rounded-full w-4.5 transition-colors`,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
      className: `${checked ? "translate-x-2.5" : "translate-x-0.5"} inline-block w-1.5 h-1.5 transform bg-background rounded-full transition-transform`
    })
  });
};

/* harmony default export */ var Switch = (SwitchUI);
// EXTERNAL MODULE: external "@material-ui/core/Dialog"
var Dialog_ = __webpack_require__("fEgT");
var Dialog_default = /*#__PURE__*/__webpack_require__.n(Dialog_);

// EXTERNAL MODULE: external "@material-ui/core/DialogActions"
var DialogActions_ = __webpack_require__("1gBk");
var DialogActions_default = /*#__PURE__*/__webpack_require__.n(DialogActions_);

// EXTERNAL MODULE: external "@material-ui/core/DialogContent"
var DialogContent_ = __webpack_require__("iTUb");
var DialogContent_default = /*#__PURE__*/__webpack_require__.n(DialogContent_);

// EXTERNAL MODULE: external "@material-ui/core/DialogContentText"
var DialogContentText_ = __webpack_require__("MbIc");
var DialogContentText_default = /*#__PURE__*/__webpack_require__.n(DialogContentText_);

// EXTERNAL MODULE: external "@material-ui/core/DialogTitle"
var DialogTitle_ = __webpack_require__("0Jp5");
var DialogTitle_default = /*#__PURE__*/__webpack_require__.n(DialogTitle_);

// CONCATENATED MODULE: ./src/components/AlertDialog/index.tsx










const AlertDialog = props => {
  const {
    ButtonMenu,
    title = "",
    content = "",
    onConfirm,
    data,
    className = ""
  } = props;
  const [open, setOpen] = external_react_default.a.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = e => {
    onConfirm && onConfirm(data);
    setOpen(false);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: `${className}`,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
      type: "button",
      className: "block w-full",
      onClick: handleClickOpen,
      children: ButtonMenu
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Dialog_default.a, {
      open: open,
      onClose: handleClose,
      "aria-labelledby": "alert-dialog-title",
      "aria-describedby": "alert-dialog-description",
      maxWidth: "sm",
      fullWidth: true,
      PaperProps: {
        style: {
          backgroundColor: "#fff",
          borderRadius: "0px",
          padding: "40px"
        }
      },
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(DialogTitle_default.a, {
        className: "p-0 mb-2",
        id: "alert-dialog-title",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
          className: "font-bold leading-none text-20 laptop:text-24 phone:text-20 font-sfpro",
          children: title
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(DialogContent_default.a, {
        className: "p-0 mb-3",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(DialogContentText_default.a, {
          id: "alert-dialog-description",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: "block text-14 laptop:text-16 leading-none text-black font-sfpro",
            children: content
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(DialogActions_default.a, {
        className: "flex flex-col items-center gap-2 p-0 phone:flex-row phone:justify-end",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
          className: "w-full phone:w-10",
          innerClassName: "h-4 font-medium normal-case",
          onClick: handleClose,
          type: "button",
          children: "Hu\u1EF7 b\u1ECF"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
          className: "w-full ml-0 phone:w-10",
          primary: true,
          innerClassName: "h-4 font-medium normal-case",
          type: "submit",
          onClick: handleConfirm,
          children: "\u0110\u1ED3ng \xFD"
        })]
      })]
    })]
  });
};

/* harmony default export */ var components_AlertDialog = (AlertDialog);
// EXTERNAL MODULE: ./src/redux/actions/user/index.ts
var user = __webpack_require__("q6WE");

// CONCATENATED MODULE: ./src/layouts/Header/index.tsx

























const Header_Header = props => {
  const {
    type = ""
  } = props;
  const {
    t
  } = Object(external_next_i18next_["useTranslation"])(["common"]);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    isAuth
  } = Object(useAuth["a" /* default */])();
  const {
    currentUser
  } = Object(external_react_redux_["useSelector"])(state => state.auth);
  const userInfo = (currentUser === null || currentUser === void 0 ? void 0 : currentUser.userInfo) || {};
  const {
    actionSuccess
  } = Object(external_react_redux_["useSelector"])(state => state.actions);
  const {
    0: onSeekingJob,
    1: setOnSeekingJob
  } = Object(external_react_["useState"])();
  Object(external_react_["useEffect"])(() => {
    if (actionSuccess) {
      dispatch(Object(actions_auth["e" /* refreshToken */])());
      dispatch(Object(common["b" /* resetAction */])());
    }
  }, [actionSuccess]);
  Object(external_react_["useEffect"])(() => {
    if (Object(external_lodash_["isEmpty"])(currentUser) && (userInfo === null || userInfo === void 0 ? void 0 : userInfo.email) !== null) {
      dispatch(Object(actions_auth["a" /* getCurrentUser */])(Object(auth["a" /* getLoggedInAccount */])()));
    } else {
      dispatch(Object(actions_notification["b" /* getNotificationsByUser */])({
        userId: userInfo === null || userInfo === void 0 ? void 0 : userInfo._id
      }));
      dispatch(Object(actions_notification["d" /* getNotificationsSettingByUser */])({
        id: userInfo === null || userInfo === void 0 ? void 0 : userInfo._id
      }) // getNotificationsSettingById({
      //   id: userInfo?._id,
      // }),
      );
    }
  }, [currentUser]);
  Object(external_react_["useEffect"])(() => {
    var _currentUser$userInfo;

    if ((currentUser === null || currentUser === void 0 ? void 0 : (_currentUser$userInfo = currentUser.userInfo) === null || _currentUser$userInfo === void 0 ? void 0 : _currentUser$userInfo.isSeekingJob) === true) {
      setOnSeekingJob(true);
    } else {
      setOnSeekingJob(false);
    }
  }, [actionSuccess, currentUser]);

  const handleConfirm = () => {
    const payload = {
      updateUserInput: {
        isSeekingJob: !onSeekingJob
      }
    };
    dispatch(Object(user["c" /* updateUserProfile */])(payload));
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(HeaderWrapper, {
      className: "wrapper",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(HeaderContainer, {
        className: "container",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(LogoLink, {
          routeName: routes["PATH"].HOME,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(SVG["a" /* SVG */], {
            name: "logo/logo"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(NavigationWrapper, {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(PageNavigation, {
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_["Fragment"], {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Header_styles_Link, {
                highlight: type === "job",
                routeName: routes["PATH"].JOB,
                children: t("header.job")
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Header_styles_Link, {
                highlight: type === "company",
                routeName: routes["PATH"].COMPANY,
                children: t("header.company")
              })]
            })
          }), isAuth ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])(GroupInfo, {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(SwitchWrapper, {
              hasBorderLeft: false,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(SwitchTitle, {
                children: "T\xECm vi\u1EC7c"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_AlertDialog, {
                ButtonMenu: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Switch, {
                  enabled: onSeekingJob
                }),
                title: "Bật/tắt chế độ tìm việc",
                content: `Bạn có muốn thay đổi chế độ tìm việc không?`,
                onConfirm: handleConfirm
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(styles_NotifyContainer, {
              hasBorderLeft: false,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Notification, {})
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_UserInfo, {})]
          }) : /*#__PURE__*/Object(jsx_runtime_["jsxs"])(AuthenNavigation, {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: "https://employer.tuyendungvn.com/",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Text, {
                children: t("header.employer")
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(styles_NotifyContainer, {
              hasBorderLeft: true,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Notification, {})
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(styles_Button, {
              outline: true,
              routeName: routes["PATH"].REGISTER,
              children: t("header.register")
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(styles_Button, {
              fullFill: true,
              routeName: routes["PATH"].LOGIN,
              children: t("header.login")
            })]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Mobile.NavigationWrapper, {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Hamburger, {})
        })]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ContentNotify, {})]
  });
};

/* harmony default export */ var layouts_Header = (Header_Header);
// EXTERNAL MODULE: ./src/redux/actions/contentWebsite/index.ts
var actions_contentWebsite = __webpack_require__("Z8w5");

// EXTERNAL MODULE: ./src/redux/actions/staticPages/index.ts
var staticPages = __webpack_require__("uZqx");

// CONCATENATED MODULE: ./src/layouts/Main/helper.ts


const getAllBasicAPIForPage = (language, dispatch) => {
  dispatch(Object(actions_contentWebsite["c" /* getSeoWebsite */])({
    language
  }));
  dispatch(Object(actions_contentWebsite["a" /* getAllContentWebsite */])({
    page: 0,
    size: 99
  }));
  dispatch(Object(staticPages["a" /* getAllStaticPages */])({
    filterPages: {},
    page: 0,
    size: 99
  }));
};
// CONCATENATED MODULE: ./src/layouts/Main/styles.tsx

const MainContainer = external_styled_components_default.a.div.withConfig({
  displayName: "styles__MainContainer",
  componentId: "sc-1silk2l-0"
})(["", " ", ""], {
  "overflow": "hidden",
  "@media (min-width: 600px)": {
    "overflow": "visible"
  }
}, ({
  noBackground
}) => noBackground ? {
  "--tw-bg-opacity": "1",
  "backgroundColor": "rgba(255, 255, 255, var(--tw-bg-opacity))"
} : {
  "--tw-bg-opacity": "1",
  "backgroundColor": "rgba(245, 246, 248, var(--tw-bg-opacity))"
});
const MainContent = external_styled_components_default.a.main.withConfig({
  displayName: "styles__MainContent",
  componentId: "sc-1silk2l-1"
})(["", ""], {
  "paddingTop": "60px"
});
// CONCATENATED MODULE: ./src/layouts/Main/index.tsx










const Main = props => {
  const {
    children,
    type,
    noBackground = false
  } = props;
  const {
    contentWebsite = {}
  } = Object(external_react_redux_["useSelector"])(state => state.contentWebsite);
  const {
    customCodeFooter = ""
  } = contentWebsite;
  const parsedCustomCodeFooter = external_html_react_parser_default()(customCodeFooter);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(MainContainer, {
      noBackground: noBackground,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(layouts_Header, {
        type: type
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(MainContent, {
        children: children
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Footer, {})]
    }), parsedCustomCodeFooter]
  });
};

/* harmony default export */ var layouts_Main = __webpack_exports__["a"] = (Main);

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

/***/ "boVf":
/***/ (function(module, exports) {

module.exports = require("dayjs");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.asPath || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

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

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

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

/***/ "efsx":
/***/ (function(module, exports) {

module.exports = require("next-seo");

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _normalizeLocalePath = __webpack_require__("3wub");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("P7gm"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // tslint:disable:no-console


let detectDomainLocale;

if (true) {
  detectDomainLocale = __webpack_require__("xOyL").detectDomainLocale;
}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (true) {
    locale = locale || (0, _normalizeLocalePath.normalizeLocalePath)(path, locales).detectedLocale;
    const detectedDomain = detectDomainLocale(domainLocales, undefined, locale);

    if (detectedDomain) {
      return `http${detectedDomain.http ? '' : 's'}://${detectedDomain.domain}${basePath || ''}${locale === detectedDomain.defaultLocale ? '' : `/${locale}`}${path}`;
    }

    return false;
  }

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (true) {
    const pathname = pathNoQueryHash(path);
    const pathLower = pathname.toLowerCase();
    const localeLower = locale && locale.toLowerCase();
    return locale && locale !== defaultLocale && !pathLower.startsWith('/' + localeLower + '/') && pathLower !== '/' + localeLower ? addPathPrefix(path, '/' + locale) : path;
  }

  return path;
}

function delLocale(path, locale) {
  if (true) {
    const pathname = pathNoQueryHash(path);
    const pathLower = pathname.toLowerCase();
    const localeLower = locale && locale.toLowerCase();
    return locale && (pathLower.startsWith('/' + localeLower + '/') || pathLower === '/' + localeLower) ? (pathname.length === locale.length + 1 ? '/' : '') + path.substr(locale.length + 1) : path;
  }

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;

  try {
    base = new URL(currentPath, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.asPath, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.asPath, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search && !true);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (true) {
      this.locale = locale;
      this.locales = locales;
      this.defaultLocale = defaultLocale;
      this.domainLocales = domainLocales;
      this.isLocaleDomain = !!detectDomainLocale(domainLocales, self.location.hostname);
    }

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (true) {
      this.locale = options.locale === false ? this.defaultLocale : options.locale || this.locale;

      if (typeof options.locale === 'undefined') {
        options.locale = this.locale;
      }

      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(hasBasePath(as) ? delBasePath(as) : as);
      const localePathResult = (0, _normalizeLocalePath.normalizeLocalePath)(parsedAs.pathname, this.locales);

      if (localePathResult.detectedLocale) {
        this.locale = localePathResult.detectedLocale;
        parsedAs.pathname = addBasePath(parsedAs.pathname);
        as = (0, _utils.formatWithValidation)(parsedAs);
        url = addBasePath((0, _normalizeLocalePath.normalizeLocalePath)(hasBasePath(url) ? delBasePath(url) : url, this.locales).pathname);
      }

      let didNavigate = false; // we need to wrap this in the env check again since regenerator runtime
      // moves this on its own due to the return

      if (true) {
        var _this$locales; // if the locale isn't configured hard navigate to show 404 page


        if (!((_this$locales = this.locales) != null && _this$locales.includes(this.locale))) {
          parsedAs.pathname = addLocale(parsedAs.pathname, this.locale);
          window.location.href = (0, _utils.formatWithValidation)(parsedAs); // this was previously a return but was removed in favor
          // of better dead code elimination with regenerator runtime

          didNavigate = true;
        }
      }

      const detectedDomain = detectDomainLocale(this.domainLocales, undefined, this.locale); // we need to wrap this in the env check again since regenerator runtime
      // moves this on its own due to the return

      if (true) {
        // if we are navigating to a domain locale ensure we redirect to the
        // correct domain
        if (!didNavigate && detectedDomain && this.isLocaleDomain && self.location.hostname !== detectedDomain.domain) {
          const asNoBasePath = delBasePath(as);
          window.location.href = `http${detectedDomain.http ? '' : 's'}://${detectedDomain.domain}${addBasePath(`${this.locale === detectedDomain.defaultLocale ? '' : `/${this.locale}`}${asNoBasePath === '/' ? '' : asNoBasePath}` || '/')}`; // this was previously a return but was removed in favor
          // of better dead code elimination with regenerator runtime

          didNavigate = true;
        }
      }

      if (didNavigate) {
        return new Promise(() => {});
      }
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (shouldResolveHref && pathname !== '/_error') {
      if ( true && as.startsWith('/')) {
        const rewritesResult = (0, _resolveRewrites.default)(addBasePath(addLocale(cleanedAs, this.locale)), pages, rewrites, query, p => resolveDynamicRoute(p, pages), this.locales);
        resolvedAs = rewritesResult.asPath;

        if (rewritesResult.matchedPage && rewritesResult.resolvedHref) {
          // if this directly matches a page we need to update the href to
          // allow the correct page chunk to be loaded
          pathname = rewritesResult.resolvedHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      } else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (false) {}

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (false) {} // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (true) {
        if (this.locale) {
          document.documentElement.lang = this.locale;
        }
      }

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (true) {
      if (options.locale === false) {
        pathname = (0, _normalizeLocalePath.normalizeLocalePath)(pathname, this.locales).pathname;
        parsed.pathname = pathname;
        url = (0, _utils.formatWithValidation)(parsed);
        let parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(asPath);
        const localePathResult = (0, _normalizeLocalePath.normalizeLocalePath)(parsedAs.pathname, this.locales);
        parsedAs.pathname = localePathResult.pathname;
        options.locale = localePathResult.detectedLocale || this.defaultLocale;
        asPath = (0, _utils.formatWithValidation)(parsedAs);
      }
    }

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if ( true && asPath.startsWith('/')) {
      let rewrites;
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
      const rewritesResult = (0, _resolveRewrites.default)(addBasePath(addLocale(asPath, this.locale)), pages, rewrites, parsed.query, p => resolveDynamicRoute(p, pages), this.locales);
      resolvedAs = delLocale(delBasePath(rewritesResult.asPath), this.locale);

      if (rewritesResult.matchedPage && rewritesResult.resolvedHref) {
        // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded
        pathname = rewritesResult.resolvedHref;
        parsed.pathname = pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    } else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (false) {}

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && !this.isPreview && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "fEgT":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),

/***/ "fWWA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ ErrorBoundary_ErrorBoundary; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./src/components/ErrorBoundary/styles.tsx

const ErrorBoundaryContainer = external_styled_components_default.a.div.withConfig({
  displayName: "styles__ErrorBoundaryContainer",
  componentId: "sc-yhmpql-0"
})(["", ""], {});
const Title = external_styled_components_default.a.h3.withConfig({
  displayName: "styles__Title",
  componentId: "sc-yhmpql-1"
})(["", ""], {
  "fontSize": "16px",
  "fontWeight": "600",
  "--tw-text-opacity": "1",
  "color": "rgba(234, 78, 27, var(--tw-text-opacity))"
});
const Details = external_styled_components_default.a.details.withConfig({
  displayName: "styles__Details",
  componentId: "sc-yhmpql-2"
})(["", ""], {
  "whiteSpace": "pre-wrap"
});
// CONCATENATED MODULE: ./src/components/ErrorBoundary/index.tsx



/**
 * This is component which will prevent your app is cracked when something wrong
 * with typescript.
 * This component is similar with try-catch wrapper
 */


class ErrorBoundary_ErrorBoundary extends external_react_["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return /*#__PURE__*/Object(external_react_["isValidElement"])(this.props.fallback) ? this.props.fallback : /*#__PURE__*/Object(jsx_runtime_["jsxs"])(ErrorBoundaryContainer, {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Title, {
          children: "C\xF3 l\u1ED7i x\u1EA9y ra"
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Details, {
          children: [this.state.error && this.state.error.toString(), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), this.state.errorInfo.componentStack]
        })]
      });
    } // Normally, just render children


    return this.props.children;
  }

}

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

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

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

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "iTUb":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContent");

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

/***/ "m17n":
/***/ (function(module, exports) {

module.exports = require("@headlessui/react");

/***/ }),

/***/ "n5fT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "react-i18next"
var external_react_i18next_ = __webpack_require__("MQhX");

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");

// EXTERNAL MODULE: ./src/components/Dialog/index.tsx + 1 modules
var Dialog = __webpack_require__("9pNP");

// EXTERNAL MODULE: ./src/common/functions/index.ts + 17 modules
var functions = __webpack_require__("Vtj2");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./src/designs/Link/index.tsx
var Link = __webpack_require__("O6Eg");

// CONCATENATED MODULE: ./src/designs/Card/CompanyCard/styles.tsx


const CompanyCardWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__CompanyCardWrapper",
  componentId: "sc-a6l8e-0"
})(["", ""], {
  "transitionProperty": "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
  "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
  "transitionDuration": "300ms",
  "position": "relative",
  "width": "100%",
  "paddingLeft": "20px",
  "paddingRight": "20px",
  "paddingTop": "20px",
  "paddingBottom": "20px",
  "marginLeft": "auto",
  "marginRight": "auto",
  "--tw-bg-opacity": "1",
  "backgroundColor": "rgba(255, 255, 255, var(--tw-bg-opacity))",
  "borderWidth": "1px",
  "--tw-border-opacity": "1",
  "borderColor": "rgba(224, 224, 224, var(--tw-border-opacity))",
  ":hover": {
    "--tw-shadow": "0 8px 24px -4px rgba(24, 39, 75, 0.08), 0 6px 12px -6px rgba(24, 39, 75, 0.12)",
    "boxShadow": "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"
  },
  "@media (min-width: 600px)": {
    "paddingLeft": "40px",
    "paddingRight": "40px"
  }
});
const CompanyCardContainer = external_styled_components_default.a.div.withConfig({
  displayName: "styles__CompanyCardContainer",
  componentId: "sc-a6l8e-1"
})(["", ""], {
  "alignItems": "center",
  "display": "block",
  "gridTemplateColumns": "repeat(12, minmax(0, 1fr))",
  "columnGap": "40px",
  "@media (min-width: 600px)": {
    "display": "grid"
  }
});
const Logo = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Logo",
  componentId: "sc-a6l8e-2"
})(["", ""], {
  "maxWidth": "200px",
  "marginBottom": "20px",
  "borderWidth": "1px",
  "--tw-border-opacity": "1",
  "borderColor": "rgba(224, 224, 224, var(--tw-border-opacity))",
  "padding": "15px",
  "display": "flex",
  "justifyContent": "center",
  "alignItems": "center",
  "overflow": "hidden",
  "@media (min-width: 600px)": {
    "gridColumn": "span 2 / span 2",
    "marginBottom": "0"
  }
});
const Img = external_styled_components_default.a.img.withConfig({
  displayName: "styles__Img",
  componentId: "sc-a6l8e-3"
})(["", ""], {
  "transform": "var(--tw-transform)",
  "transitionProperty": "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
  "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
  "transitionDuration": "500ms",
  "width": "100%",
  ".group:hover &": {
    "--tw-scale-x": "1.05",
    "--tw-scale-y": "1.05",
    "transform": "var(--tw-transform)"
  }
});
const Content = external_styled_components_default.a.div.withConfig({
  displayName: "styles__Content",
  componentId: "sc-a6l8e-4"
})(["", ""], {
  "gridColumn": "span 12 / span 12",
  "@media (min-width: 600px)": {
    "gridColumn": "span 6 / span 6"
  }
});
const Title = external_styled_components_default.a.h1.withConfig({
  displayName: "styles__Title",
  componentId: "sc-a6l8e-5"
})(["", ""], {
  "fontWeight": "700",
  "lineHeight": "1",
  "fontSize": "20px"
});
const Location = external_styled_components_default.a.p.withConfig({
  displayName: "styles__Location",
  componentId: "sc-a6l8e-6"
})(["", ""], {
  "marginTop": "20px",
  "marginBottom": "20px",
  "fontWeight": "400",
  "lineHeight": "1",
  "fontSize": "16px"
});
const Career = external_styled_components_default.a.p.withConfig({
  displayName: "styles__Career",
  componentId: "sc-a6l8e-7"
})(["", ""], {
  "fontWeight": "400",
  "lineHeight": "1",
  "fontSize": "16px"
});
const ButtonWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__ButtonWrapper",
  componentId: "sc-a6l8e-8"
})(["", ""], {
  "gridColumn": "span 12 / span 12",
  "display": "flex",
  "marginTop": "20px",
  "@media (min-width: 600px)": {
    "gridColumn": "span 4 / span 4",
    "justifyContent": "flex-end",
    "marginTop": "0"
  }
});
const Button = external_styled_components_default.a.button.withConfig({
  displayName: "styles__Button",
  componentId: "sc-a6l8e-9"
})(["", ""], {
  "transitionProperty": "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
  "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
  "transitionDuration": "200ms",
  "alignItems": "center",
  "justifyContent": "center",
  "height": "50px",
  "paddingLeft": "20px",
  "paddingRight": "20px",
  "fontWeight": "500",
  "--tw-text-opacity": "1",
  "color": "rgba(255, 255, 255, var(--tw-text-opacity))",
  "--tw-bg-opacity": "1",
  "backgroundColor": "rgba(234, 78, 27, var(--tw-bg-opacity))",
  "fontSize": "16px",
  ":hover": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(246, 182, 0, var(--tw-bg-opacity))"
  }
});
const DialogContainer = external_styled_components_default.a.div.withConfig({
  displayName: "styles__DialogContainer",
  componentId: "sc-a6l8e-10"
})(["", ""], {
  "position": "relative",
  "padding": "40px",
  "--tw-bg-opacity": "1",
  "backgroundColor": "rgba(255, 255, 255, var(--tw-bg-opacity))",
  "zIndex": "999"
});
const DialogTitle = external_styled_components_default.a.h2.withConfig({
  displayName: "styles__DialogTitle",
  componentId: "sc-a6l8e-11"
})(["", ""], {
  "marginBottom": "20px",
  "fontWeight": "700",
  "lineHeight": "1",
  "fontSize": "20px",
  "@media (min-width: 600px)": {
    "fontSize": "26px"
  }
});
const DialogContent = external_styled_components_default.a.p.withConfig({
  displayName: "styles__DialogContent",
  componentId: "sc-a6l8e-12"
})(["", ""], {
  "fontWeight": "400",
  "lineHeight": "1",
  "fontSize": "16px"
});
const ButtonDialogWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styles__ButtonDialogWrapper",
  componentId: "sc-a6l8e-13"
})(["", ""], {
  "display": "flex",
  "justifyContent": "flex-end",
  "width": "100%",
  "paddingLeft": "10px",
  "paddingRight": "10px",
  "marginTop": "30px",
  "columnGap": "20px"
});
const ButtonDialog = external_styled_components_default.a.div.withConfig({
  displayName: "styles__ButtonDialog",
  componentId: "sc-a6l8e-14"
})(["", " ", ""], {
  "width": "100px",
  "height": "45px",
  "display": "flex",
  "justifyContent": "center",
  "alignItems": "center",
  "fontSize": "16px",
  "fontWeight": "500",
  "lineHeight": "1",
  "cursor": "pointer"
}, ({
  isAccept
}) => isAccept ? {
  "transitionProperty": "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
  "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
  "transitionDuration": "200ms",
  "--tw-text-opacity": "1",
  "color": "rgba(255, 255, 255, var(--tw-text-opacity))",
  "--tw-bg-opacity": "1",
  "backgroundColor": "rgba(234, 78, 27, var(--tw-bg-opacity))",
  ":hover": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(246, 182, 0, var(--tw-bg-opacity))"
  }
} : {
  "--tw-text-opacity": "1",
  "color": "rgba(234, 78, 27, var(--tw-text-opacity))",
  "borderWidth": "1px",
  "--tw-border-opacity": "1",
  "borderColor": "rgba(234, 78, 27, var(--tw-border-opacity))",
  ":hover": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(234, 78, 27, var(--tw-bg-opacity))",
    "--tw-text-opacity": "1",
    "color": "rgba(255, 255, 255, var(--tw-text-opacity))"
  }
});
const styles_Link = external_styled_components_default()(Link["a" /* default */]).withConfig({
  displayName: "styles__Link",
  componentId: "sc-a6l8e-15"
})(["", ""], {
  "transitionProperty": "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
  "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
  "transitionDuration": "200ms",
  "width": "100px",
  "height": "45px",
  "display": "flex",
  "justifyContent": "center",
  "alignItems": "center",
  "fontSize": "16px",
  "fontWeight": "500",
  "lineHeight": "1",
  "--tw-bg-opacity": "1",
  "backgroundColor": "rgba(234, 78, 27, var(--tw-bg-opacity))",
  "--tw-text-opacity": "1",
  "color": "rgba(255, 255, 255, var(--tw-text-opacity))",
  ":hover": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(246, 182, 0, var(--tw-bg-opacity))"
  }
});
// EXTERNAL MODULE: ./src/routes/index.js
var routes = __webpack_require__("4mzW");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./src/redux/actions/requestReview/index.ts
var requestReview = __webpack_require__("YKVe");

// EXTERNAL MODULE: ./src/redux/actions/auth/index.ts
var auth = __webpack_require__("3yXT");

// EXTERNAL MODULE: ./src/redux/actions/common/index.ts
var common = __webpack_require__("W6d4");

// EXTERNAL MODULE: ./src/common/hooks/useRedirect.ts
var useRedirect = __webpack_require__("Aw+l");

// EXTERNAL MODULE: ./src/redux/actions/notification/index.ts
var notification = __webpack_require__("jAoK");

// CONCATENATED MODULE: ./src/designs/Card/CompanyCard/index.tsx















const skeletonImage = "/img/skeleton/default-small.jpg";

const CompanyCard = ({
  company,
  request = true,
  companyLocation = ""
}) => {
  const {
    t
  } = Object(external_react_i18next_["useTranslation"])(["company"]);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const redirect = Object(useRedirect["a" /* useRedirect */])();
  const {
    0: open,
    1: setOpen
  } = Object(external_react_["useState"])(false);
  const {
    0: isRequest,
    1: setIsRequest
  } = Object(external_react_["useState"])(false);
  const {
    currentUser
  } = Object(external_react_redux_["useSelector"])(state => state.auth);
  const {
    actionSuccess
  } = Object(external_react_redux_["useSelector"])(state => state.actions);
  const {
    requestReviewList: {
      results: requestReviewList = []
    }
  } = Object(external_react_redux_["useSelector"])(state => state.requestReview);
  const userInfo = (currentUser === null || currentUser === void 0 ? void 0 : currentUser.userInfo) || {};
  const {
    logo,
    name,
    career,
    province
  } = company;
  const careerArray = career === null || career === void 0 ? void 0 : career.map(item => item === null || item === void 0 ? void 0 : item.name);
  const careerString = Object(functions["k" /* renderCareer */])(careerArray);
  const locationArray = province === null || province === void 0 ? void 0 : province.map(item => item === null || item === void 0 ? void 0 : item.name);
  const locationString = Object(functions["k" /* renderCareer */])(locationArray);
  Object(external_react_["useEffect"])(() => {
    if (!Object(external_lodash_["isEmpty"])(currentUser)) {
      getRequestedAPI();
    }
  }, [currentUser]);
  Object(external_react_["useEffect"])(() => {
    if ((requestReviewList === null || requestReviewList === void 0 ? void 0 : requestReviewList.length) > 0) {
      checkRequested();
    }
  }, [requestReviewList]);
  Object(external_react_["useEffect"])(() => {
    if (actionSuccess) {
      dispatch(Object(common["b" /* resetAction */])());
      dispatch(Object(auth["e" /* refreshToken */])());
      checkRequested();
    }
  }, [actionSuccess]);

  const handleRequest = () => {
    var _company$user2;

    if (Object(external_lodash_["isEmpty"])(currentUser)) {
      redirect(routes["PATH"].LOGIN);
    } else {
      if (company !== null && company !== void 0 && company._id) {
        var _company$user;

        dispatch(Object(requestReview["a" /* createRequestReview */])({
          createRequestReviewInput: {
            candidate: userInfo === null || userInfo === void 0 ? void 0 : userInfo._id,
            employer: company === null || company === void 0 ? void 0 : (_company$user = company.user) === null || _company$user === void 0 ? void 0 : _company$user._id,
            status: "waiting_for_review"
          }
        }));
      }
    }

    setOpen(false);
    const payload = {
      notifyCreateInput: {
        user: company === null || company === void 0 ? void 0 : (_company$user2 = company.user) === null || _company$user2 === void 0 ? void 0 : _company$user2._id,
        name: "Required",
        company: company === null || company === void 0 ? void 0 : company._id,
        description: `${userInfo === null || userInfo === void 0 ? void 0 : userInfo.displayName} đã yêu cầu bạn đánh giá hồ sơ của họ.`
      }
    };
    dispatch(Object(notification["a" /* createNotify */])(payload));
  };

  const getRequestedAPI = () => {
    var _company$user3;

    const payload = {
      filterRequestReview: {
        candidate: userInfo === null || userInfo === void 0 ? void 0 : userInfo._id,
        employer: company === null || company === void 0 ? void 0 : (_company$user3 = company.user) === null || _company$user3 === void 0 ? void 0 : _company$user3._id
      }
    };
    dispatch(Object(requestReview["b" /* getAllRequestReview */])(payload));
  };

  const checkRequested = () => {
    const listRequestId = requestReviewList === null || requestReviewList === void 0 ? void 0 : requestReviewList.map(item => {
      var _item$candidate;

      return item === null || item === void 0 ? void 0 : (_item$candidate = item.candidate) === null || _item$candidate === void 0 ? void 0 : _item$candidate._id;
    });
    const listCompanyRequestId = requestReviewList === null || requestReviewList === void 0 ? void 0 : requestReviewList.map(item => {
      var _item$employer, _item$employer$compan;

      return item === null || item === void 0 ? void 0 : (_item$employer = item.employer) === null || _item$employer === void 0 ? void 0 : (_item$employer$compan = _item$employer.company) === null || _item$employer$compan === void 0 ? void 0 : _item$employer$compan._id;
    });

    if (listRequestId.includes(userInfo === null || userInfo === void 0 ? void 0 : userInfo._id) && listCompanyRequestId.includes(company === null || company === void 0 ? void 0 : company._id)) {
      setIsRequest(true);
    }
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(CompanyCardWrapper, {
    className: "container",
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(CompanyCardContainer, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Logo, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Img, {
          src: (logo === null || logo === void 0 ? void 0 : logo.small) || (logo === null || logo === void 0 ? void 0 : logo.default) || (logo === null || logo === void 0 ? void 0 : logo.medium) || skeletonImage,
          alt: name,
          loading: "lazy"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Content, {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Title, {
          children: name
        }), companyLocation && /*#__PURE__*/Object(jsx_runtime_["jsx"])(Location, {
          children: companyLocation
        }), !companyLocation && (province === null || province === void 0 ? void 0 : province.length) > 0 && /*#__PURE__*/Object(jsx_runtime_["jsx"])(Location, {
          children: locationString
        }), (career === null || career === void 0 ? void 0 : career.length) > 0 && /*#__PURE__*/Object(jsx_runtime_["jsx"])(Career, {
          children: careerString
        })]
      }), request && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(ButtonWrapper, {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Button, {
          onClick: () => setOpen(true),
          style: {
            opacity: isRequest ? 0.5 : 1,
            pointerEvents: isRequest ? "none" : "initial"
          },
          children: Object(external_lodash_["isEmpty"])(currentUser) ? t("required-rating-title") : isRequest ? t("requested") : t("required-rating-title")
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Dialog["a" /* default */], {
          isOpen: open,
          onClose: () => setOpen(false),
          className: "z-50 rounded-none w-max",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(DialogContainer, {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(DialogTitle, {
              children: t("required-rating-title")
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(DialogContent, {
              children: !Object(external_lodash_["isEmpty"])(currentUser) ? t("required-rating-content").replace("$companyName", String(name)) : t("no-login")
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(ButtonDialogWrapper, {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(ButtonDialog, {
                onClick: () => setOpen(false),
                children: t("cancel")
              }), Object.keys(userInfo).length > 0 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(ButtonDialog, {
                isAccept: true,
                onClick: handleRequest,
                children: t("accept")
              }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(styles_Link, {
                routeName: routes["PATH"].LOGIN,
                children: t("accept")
              })]
            })]
          })
        })]
      })]
    })
  });
};

/* harmony default export */ var Card_CompanyCard = __webpack_exports__["a"] = (CompanyCard);

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

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

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

/***/ "oyvS":
/***/ (function(module, exports) {

module.exports = require("path");

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

/***/ "tSya":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("efsx");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Vtj2");
/* harmony import */ var _constants_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("0n/8");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("4mzW");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_7__);









const Meta = ({
  title,
  routeName,
  seoInfo,
  description
}) => {
  var _contentWebsite$color;

  const query = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])().query;
  const {
    seoData,
    contentWebsite
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.contentWebsite);
  const {
    seoTitle: seoTitleServer,
    seoDescription,
    seoKeyword,
    seoSiteMap
  } = seoData || {};
  const additionalLinkTags = [{
    rel: "icon",
    sizes: "32x32",
    href: `${_constants_app__WEBPACK_IMPORTED_MODULE_6__[/* ROOT_URL */ "a"]}/favicon/favicon-32x32.png`
  }, {
    rel: "apple-touch-icon",
    sizes: "32x32",
    href: `${_constants_app__WEBPACK_IMPORTED_MODULE_6__[/* ROOT_URL */ "a"]}/favicon/favicon-32x32.png`
  }, {
    rel: "apple-touch-icon",
    sizes: "16x16",
    href: `${_constants_app__WEBPACK_IMPORTED_MODULE_6__[/* ROOT_URL */ "a"]}/favicon/favicon-16x16.png`
  }, {
    rel: "apple-touch-icon",
    sizes: "32x32",
    href: `${_constants_app__WEBPACK_IMPORTED_MODULE_6__[/* ROOT_URL */ "a"]}/favicon/favicon-32x32.png`
  }, {
    rel: "apple-touch-icon",
    sizes: "96x96",
    href: `${_constants_app__WEBPACK_IMPORTED_MODULE_6__[/* ROOT_URL */ "a"]}/favicon/favicon-96x96.png`
  }];

  const renderTitleDisplay = () => {
    let splitTitle = [title, seoTitleServer, seoInfo === null || seoInfo === void 0 ? void 0 : seoInfo.seoTitle]; // Remove all undefine or null out of array

    splitTitle = splitTitle.filter(item => !!item);
    return splitTitle.join(" | ");
  };

  const currentRoute = _routes__WEBPACK_IMPORTED_MODULE_7__["paths"].find(item => (item === null || item === void 0 ? void 0 : item.name) === routeName);
  const url = Object(_common_functions__WEBPACK_IMPORTED_MODULE_5__[/* mergeParams */ "h"])(`${_constants_app__WEBPACK_IMPORTED_MODULE_6__[/* ROOT_URL */ "a"]}${currentRoute.locale.vi}`, query);
  const titleDisplay = renderTitleDisplay();
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_seo__WEBPACK_IMPORTED_MODULE_4__["DefaultSeo"], {
    title: titleDisplay,
    defaultTitle: "Tuy\u1EC3n d\u1EE5ng Vi\u1EC7t Nam",
    description: description || seoDescription,
    canonical: _constants_app__WEBPACK_IMPORTED_MODULE_6__[/* ROOT_URL */ "a"],
    facebook: {
      appId: process.env.FACEBOOK_APP_ID
    },
    openGraph: {
      title: titleDisplay,
      type: "website",
      url,
      images: [{
        url: (contentWebsite === null || contentWebsite === void 0 ? void 0 : (_contentWebsite$color = contentWebsite.colorLogo) === null || _contentWebsite$color === void 0 ? void 0 : _contentWebsite$color.default) || `${_constants_app__WEBPACK_IMPORTED_MODULE_6__[/* ROOT_URL */ "a"]}/favicon/favicon-96x96.png`,
        alt: title
      }],
      description: description || seoDescription,
      site_name: "TuyenDung",
      locale: "vi_VN"
    },
    additionalLinkTags: additionalLinkTags,
    additionalMetaTags: [{
      name: "keywords",
      content: seoInfo ? seoInfo.seoKeyword : seoKeyword
    }, {
      name: "author",
      content: seoInfo ? seoInfo.author : "Usum Software"
    }, {
      name: "publisher",
      content: "Usum Software"
    }, {
      name: "copyright",
      content: seoInfo ? seoInfo.author : "Usum Software"
    }]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Meta);

/***/ }),

/***/ "tlnx":
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),

/***/ "txk1":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

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

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = __webpack_require__("0G5g");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "xOyL":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.detectDomainLocale = detectDomainLocale;

function detectDomainLocale(domainItems, hostname, detectedLocale) {
  let domainItem;

  if (domainItems) {
    if (detectedLocale) {
      detectedLocale = detectedLocale.toLowerCase();
    }

    for (const item of domainItems) {
      var _item$domain, _item$locales; // remove port if present


      const domainHostname = (_item$domain = item.domain) == null ? void 0 : _item$domain.split(':')[0].toLowerCase();

      if (hostname === domainHostname || detectedLocale === item.defaultLocale.toLowerCase() || (_item$locales = item.locales) != null && _item$locales.some(locale => locale.toLowerCase() === detectedLocale)) {
        domainItem = item;
        break;
      }
    }
  }

  return domainItem;
}

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

/***/ "zOyy":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "zi1o":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return formatDateWithTime; });
/* unused harmony export formatDateTable */
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("boVf");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);

const formatDate = date => {
  return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).format("DD/MM/YYYY");
};
const formatDateWithTime = date => {
  return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).format("HH:mm:ss");
};
const formatDateTable = date => {
  if (null) {}
  return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).format("DD-MM-YYYY HH:mm:ss");
};

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });