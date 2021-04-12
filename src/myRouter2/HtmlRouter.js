(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["HtmlRouter"] = factory();
	else
		root["HtmlRouter"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/myRouter2/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/myRouter2/hashRouter.js":
/*!*************************************!*\
  !*** ./src/myRouter2/hashRouter.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _parentRouter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parentRouter.js */ \"./src/myRouter2/parentRouter.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n // 继承一个父类\n\nvar HashRouter = /*#__PURE__*/function (_ParentRouter) {\n  _inherits(HashRouter, _ParentRouter);\n\n  var _super = _createSuper(HashRouter);\n\n  function HashRouter(config) {\n    var _this;\n\n    _classCallCheck(this, HashRouter);\n\n    _this = _super.call(this, config);\n    window.addEventListener(\"hashchange\", _this.refresh.bind(_assertThisInitialized(_this))); // 监听路由hash是否变化\n\n    window.addEventListener(\"load\", _this.refresh.bind(_assertThisInitialized(_this))); // 加载完了初始化组件\n\n    return _this;\n  } // hash变化，刷新页面\n\n\n  _createClass(HashRouter, [{\n    key: \"refresh\",\n    value: function refresh() {\n      var currentCompontName = \"\";\n      var path = window.location.hash;\n      var indexOf = path.indexOf(\"?\");\n      path = indexOf > -1 ? path.slice(1, indexOf) : path.slice(1); // let path = window.location.hash.slice(1);  // /monday\n      // 1.更新historyRoutes数据, 新增add或者替换replace\n      // 3.前进和后退不要操作路由了\n\n      if (!this._forwardOrBack) {\n        // 4.区分新增还是替换路由\n        if (this._replaceRouter) {\n          // 替换\n          this._historyRoutes[this._currentIndex] = this.path;\n        } else {\n          // 新增\n          this._historyRoutes.push(path); // 存储路由\n\n\n          this._currentIndex++; // 路由数加1\n        }\n      } // 2.下面是组件渲染\n      // 找到当前需要渲染的组件名称\n\n\n      for (var i = 0; i < this._routes.length; i++) {\n        if (this._routes[i].path === path) {\n          currentCompontName = this._routes[i].name;\n          break;\n        }\n      }\n\n      if (!currentCompontName) return false; // 当前渲染组件为空就不往下走了\n\n      var nodeList = document.querySelectorAll(\"[data-component-name]\");\n\n      for (var j = 0; j < nodeList.length; j++) {\n        if (nodeList[j].dataset[\"componentName\"] === currentCompontName) {\n          nodeList[j].style.display = \"block\";\n        } else {\n          nodeList[j].style.display = \"none\";\n        }\n      }\n\n      this._forwardOrBack = false; // 操作完了要变为false，不然后面的路由添加不进来了\n    } // 后退\n\n  }, {\n    key: \"back\",\n    value: function back() {\n      if (this._currentIndex > 0) {\n        // 路由数量大于0才能后退\n        this._forwardOrBack = true;\n        this._currentIndex--;\n        var path = this._historyRoutes[this._currentIndex];\n        window.location.hash = path;\n      }\n    } // 后退\n\n  }, {\n    key: \"forward\",\n    value: function forward() {\n      if (this._currentIndex < this._historyRoutes.length - 1) {\n        // 路由数量大于0才能后退\n        this._forwardOrBack = true;\n        this._currentIndex++;\n        var path = this._historyRoutes[this._currentIndex];\n        window.location.hash = path;\n      }\n    }\n  }, {\n    key: \"push\",\n    value: function push(option) {\n      this._changeHash(option, option.query); // 传递path和query就行了，拼接成?a=1&b=2\n\n    }\n  }, {\n    key: \"replace\",\n    value: function replace(option) {\n      this._replaceRouter = true;\n\n      this._changeHash(option, option.query); // 拿到hash，在调用refresh\n\n    }\n  }, {\n    key: \"_changeHash\",\n    value: function _changeHash(option, query) {\n      var currentPath = option.path;\n\n      if (!currentPath) {\n        // path不存在，需要去_routes去找下path\n        for (var i = 0; i < this._routes.length; i++) {\n          if (this._routes[i].name === option.name) {\n            currentPath = this._routes[i].path;\n            break;\n          }\n        }\n      }\n\n      if (!currentPath) return false;\n\n      if (!query) {\n        // 没有查询参数直接刷新\n        window.location.hash = currentPath;\n        return false;\n      } else {\n        query = this.getTargetParams(query);\n        window.location.hash = currentPath + query;\n      }\n    }\n  }]);\n\n  return HashRouter;\n}(_parentRouter_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HashRouter);\n\n//# sourceURL=webpack://HtmlRouter/./src/myRouter2/hashRouter.js?");

/***/ }),

/***/ "./src/myRouter2/historyRouter.js":
/*!****************************************!*\
  !*** ./src/myRouter2/historyRouter.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _parentRouter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parentRouter */ \"./src/myRouter2/parentRouter.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar HistoryRouter = /*#__PURE__*/function (_ParentRouter) {\n  _inherits(HistoryRouter, _ParentRouter);\n\n  var _super = _createSuper(HistoryRouter);\n\n  function HistoryRouter(config) {\n    var _this;\n\n    _classCallCheck(this, HistoryRouter);\n\n    _this = _super.call(this, config);\n    window.addEventListener(\"popstate\", _this.refresh.bind(_assertThisInitialized(_this)), false);\n    window.addEventListener(\"load\", _this.refresh.bind(_assertThisInitialized(_this)), false);\n    return _this;\n  } // 路由变化，更新组件\n\n\n  _createClass(HistoryRouter, [{\n    key: \"refresh\",\n    value: function refresh() {\n      var path = window.location.pathname;\n      var currentComponent = \"\"; // 找到当前的组件名称 路由名称和组件名称是对应的\n\n      for (var i = 0; i < this._routes.length; i++) {\n        if (this._routes[i].path === path) {\n          currentComponent = this._routes[i].name; // 当前组件名称\n\n          break;\n        }\n      }\n\n      var nodeList = document.querySelectorAll(\"[data-component-name]\");\n\n      for (var j = 0; j < nodeList.length; j++) {\n        if (nodeList[j].dataset.componentName === currentComponent) {\n          nodeList[j].style.display = \"block\";\n        } else {\n          nodeList[j].style.display = \"none\";\n        }\n      }\n\n      this._replaceRouter = false; // \n    }\n  }, {\n    key: \"back\",\n    value: function back() {\n      window.history.back();\n    }\n  }, {\n    key: \"forward\",\n    value: function forward() {\n      window.history.forward();\n    } // 新增路由\n\n  }, {\n    key: \"push\",\n    value: function push(option) {\n      this.changeRouter(option);\n    } // 替换路由\n\n  }, {\n    key: \"replace\",\n    value: function replace(option) {\n      this._replaceRouter = true;\n      this.changeRouter(option);\n    }\n  }, {\n    key: \"changeRouter\",\n    value: function changeRouter(option) {\n      var url = \"\";\n\n      if (option.path) {\n        // 有path\n        if (!option.query) {\n          url = option.path;\n        } else {\n          var search = this.getTargetParams(option.query);\n          url = option.path + search;\n        }\n      } else {\n        // 没有path\n        if (!option.name) {\n          // 没有path，没有pathname，直接return false;\n          return false;\n        } else {\n          //有pathname，找path\n          var currentPath = \"\";\n\n          for (var i = 0; i < this._routes.length; i++) {\n            if (this._routes[i].name === option.name) {\n              currentPath = this._routes[i].path;\n              break;\n            }\n          } // 无path，直接返回空\n\n\n          if (!currentPath) {\n            return false;\n          }\n\n          if (!option.query) {\n            // 无query，直接更新路由\n            url = currentPath;\n          } else {\n            // 有query，拼接参数\n            var _search = this.getTargetParams(option.query);\n\n            url = currentPath + _search;\n          }\n        }\n      }\n\n      if (!url) return false;\n      this._replaceRouter ? window.history.replaceState(url, \"\", url) : window.history.pushState(url, \"\", url);\n      this.refresh();\n    }\n  }]);\n\n  return HistoryRouter;\n}(_parentRouter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HistoryRouter);\n\n//# sourceURL=webpack://HtmlRouter/./src/myRouter2/historyRouter.js?");

/***/ }),

/***/ "./src/myRouter2/index.js":
/*!********************************!*\
  !*** ./src/myRouter2/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hashRouter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hashRouter.js */ \"./src/myRouter2/hashRouter.js\");\n/* harmony import */ var _historyRouter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./historyRouter.js */ \"./src/myRouter2/historyRouter.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar Router = /*#__PURE__*/function () {\n  function Router(config) {\n    _classCallCheck(this, Router);\n\n    // 实例初始化路由配置,先不区分hash还是history\n    if (config.mode === \"hash\") {\n      this._router = new _hashRouter_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](config); // 实例化hash路由，监听hashChange事件\n    } else {\n      this._router = new _historyRouter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](config); // 实例化history路由， 监听popstate事件\n    }\n  } // 后退 done\n\n\n  _createClass(Router, [{\n    key: \"back\",\n    value: function back() {\n      this._router.back(); // 调用路由实例的后退\n\n    } // 前进 done\n\n  }, {\n    key: \"forward\",\n    value: function forward() {\n      this._router.forward(); // 调用路由实例的前进\n\n    } // go done\n\n  }, {\n    key: \"go\",\n    value: function go(n) {\n      window.history.go(n);\n    } // 新增路由，有两种情况，传path或者pathname\n\n  }, {\n    key: \"push\",\n    value: function push(option) {\n      this._router.push(option);\n    } // 替换路由\n\n  }, {\n    key: \"replace\",\n    value: function replace(option) {\n      this._router.replace(option);\n    }\n  }]);\n\n  return Router;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Router);\n\n//# sourceURL=webpack://HtmlRouter/./src/myRouter2/index.js?");

/***/ }),

/***/ "./src/myRouter2/parentRouter.js":
/*!***************************************!*\
  !*** ./src/myRouter2/parentRouter.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ParentRouter; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar ParentRouter = /*#__PURE__*/function () {\n  function ParentRouter(config) {\n    _classCallCheck(this, ParentRouter);\n\n    this._routes = config.routes || []; // 初始化的所有路由\n\n    this._currentIndex = -1; // 当前路由的索引\n\n    this._historyRoutes = []; // 存储历史路由\n\n    this._forwardOrBack = false; // 是否前进和后退，不要更新路由信息\n\n    this._replaceRouter = false; // 区分是新增还是替换路由\n  }\n\n  _createClass(ParentRouter, [{\n    key: \"getTargetParams\",\n    value: function getTargetParams(query) {\n      var search = \"\";\n\n      for (var key in query) {\n        if (query.hasOwnProperty(key)) {\n          search += \"\".concat(key, \"=\").concat(query[key], \"&\");\n        }\n      }\n\n      return search ? \"?\" + search.replace(/&$/g, \"\") : \"\"; // 去掉最后一个&\n    }\n  }]);\n\n  return ParentRouter;\n}();\n\n\n\n//# sourceURL=webpack://HtmlRouter/./src/myRouter2/parentRouter.js?");

/***/ })

/******/ });
});