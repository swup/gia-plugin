(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["SwupGiaPlugin"] = factory();
	else
		root["SwupGiaPlugin"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Config for setting and changing global settings
 */

var Config = function () {
    function Config() {
        _classCallCheck(this, Config);

        this._options = {
            log: true
        };
    }

    _createClass(Config, [{
        key: "set",
        value: function set(name, value) {
            this._options[name] = value;
        }
    }, {
        key: "get",
        value: function get(name) {
            return this._options[name];
        }
    }]);

    return Config;
}();

exports.default = new Config();


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.query = query;
exports.queryAll = queryAll;
exports.toggleClass = toggleClass;
exports.removeClass = removeClass;
exports.addClass = addClass;
exports.triggerEvent = triggerEvent;
function query(selector) {
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

    if (typeof selector !== 'string') {
        return selector;
    }

    return context.querySelector(selector);
}

function queryAll(selector) {
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

    if (typeof selector !== 'string') {
        return selector;
    }

    return Array.prototype.slice.call(context.querySelectorAll(selector));
}

function toggleClass(element, className) {
    var condition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    if (condition === null) {
        if (element.classList.contains(className)) {
            element.classList.remove(className);
        } else {
            element.classList.add(className);
        }
    } else {
        if (condition) {
            element.classList.add(className);
        } else {
            element.classList.remove(className);
        }
    }
}

function removeClass(nodes, className) {
    if (Array.isArray(nodes)) {
        nodes.forEach(function (node) {
            return node.classList.remove(className);
        });
    } else {
        nodes.classList.remove(className);
    }

    return nodes;
}

function addClass(nodes, className) {
    if (Array.isArray(nodes)) {
        nodes.forEach(function (node) {
            return node.classList.add(className);
        });
    } else {
        nodes.classList.add(className);
    }

    return nodes;
}

function triggerEvent(element, eventType) {
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
        bubbles: true,
        cancelable: true,
        detail: null
    };

    options.detail = params;
    var event = new CustomEvent(eventType, options);
    element.dispatchEvent(event);
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getComponentFromElement;
/**
 * Return instance from element
 * @param element: DOM element or ID of element
 * @returns component instance
 */

function getComponentFromElement(element) {
    if (typeof element === 'string') {
        element = document.getElementById(element);

        if (!element) {
            return null;
        }
    }

    return element['__gia_component__'];
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(4);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _index2.default; // this is here for webpack to expose SwupPlugin as window.SwupPlugin

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _plugin = __webpack_require__(5);

var _plugin2 = _interopRequireDefault(_plugin);

var _loadComponents = __webpack_require__(6);

var _loadComponents2 = _interopRequireDefault(_loadComponents);

var _removeComponents = __webpack_require__(8);

var _removeComponents2 = _interopRequireDefault(_removeComponents);

var _config = __webpack_require__(0);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GiaPlugin = function (_Plugin) {
	_inherits(GiaPlugin, _Plugin);

	function GiaPlugin(options) {
		_classCallCheck(this, GiaPlugin);

		var _this = _possibleConstructorReturn(this, (GiaPlugin.__proto__ || Object.getPrototypeOf(GiaPlugin)).call(this));

		_this.name = 'GiaPlugin';

		_this.mountComponents = function () {
			var containers = Array.prototype.slice.call(document.querySelectorAll('[data-swup]'));

			containers.forEach(function (container) {
				return (0, _loadComponents2.default)(_this.options.components, container);
			});
		};

		_this.unloadComponents = function () {
			var containers = Array.prototype.slice.call(document.querySelectorAll('[data-swup]'));

			containers.forEach(function (container) {
				return (0, _removeComponents2.default)(container);
			});
		};

		var defaultOptions = {
			components: {},
			firstLoad: true,
			log: false
		};

		_this.options = _extends({}, defaultOptions, options);

		_config2.default.set('log', _this.options.log);
		return _this;
	}

	_createClass(GiaPlugin, [{
		key: 'mount',
		value: function mount() {
			if (this.options.firstLoad) {
				this.mountComponents();
			}

			this.swup.on('contentReplaced', this.mountComponents);
			this.swup.on('willReplaceContent', this.unloadComponents);
		}
	}, {
		key: 'unmount',
		value: function unmount() {
			this.unloadComponents();
			this.swup.off('contentReplaced', this.mountComponents);
			this.swup.off('willReplaceContent', this.unloadComponents);
		}
	}]);

	return GiaPlugin;
}(_plugin2.default);

exports.default = GiaPlugin;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Plugin = function () {
    function Plugin() {
        _classCallCheck(this, Plugin);

        this.isSwupPlugin = true;
    }

    _createClass(Plugin, [{
        key: "mount",
        value: function mount() {
            // this is mount method rewritten by class extending
            // and is executed when swup is enabled with plugin
        }
    }, {
        key: "unmount",
        value: function unmount() {
            // this is unmount method rewritten by class extending
            // and is executed when swup with plugin is disabled
        }
    }, {
        key: "_beforeMount",
        value: function _beforeMount() {
            // here for any future hidden auto init
        }
    }, {
        key: "_afterUnmount",
        value: function _afterUnmount() {}
        // here for any future hidden auto-cleanup


        // this is here so we can tell if plugin was created by extending this class

    }]);

    return Plugin;
}();

exports.default = Plugin;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = loadComponents;

var _utils = __webpack_require__(1);

var _getComponentFromElement = __webpack_require__(2);

var _getComponentFromElement2 = _interopRequireDefault(_getComponentFromElement);

var _createInstance = __webpack_require__(7);

var _createInstance2 = _interopRequireDefault(_createInstance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates instances of components without creating duplicates on elements within the context
 * @param components: object of components to load
 * @param context: DOM element
 */

function loadComponents() {
    var components = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;


    if (!components || Object.keys(components).length === 0) {
        console.warn('App has no components');
        return;
    }

    var initialisedComponents = [];

    (0, _utils.queryAll)('[g-component]', context).forEach(function (element) {
        var instance = (0, _getComponentFromElement2.default)(element);

        if (instance) {
            console.warn('Error: instance exists: \n', instance);
            return true; // continue
        }

        var componentName = element.getAttribute('g-component');

        if (typeof components[componentName] === 'function') {
            initialisedComponents.push((0, _createInstance2.default)(element, componentName, components[componentName]));
        } else {
            console.warn('Constructor for component "' + componentName + '" not found.');
        }
    });

    // call _load/require/mount
    initialisedComponents.forEach(function (component) {
        component._load();
    });
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createInstance;

var _config = __webpack_require__(0);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates and returns instance of component
 * @param element: DOM element
 * @param componentName: Component name
 * @param component: Component constructor
 * @param options: options object passed into a component
 */

function createInstance(element, componentName, component, options) {
    component.prototype._name = componentName;
    var instance = new component(element, options);

    if (_config2.default.get('log')) {
        console.info('Created instance of component "' + componentName + '".');
    }
    return instance;
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = removeComponents;

var _utils = __webpack_require__(1);

var _destroyInstance = __webpack_require__(9);

var _destroyInstance2 = _interopRequireDefault(_destroyInstance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Removes instances of components on elements within the context
 * @param context: DOM element
 */

function removeComponents() {
    var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.documentElement;

    (0, _utils.queryAll)('[g-component]', context).forEach(function (element) {
        (0, _destroyInstance2.default)(element);
    });
}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = destroyInstance;

var _getComponentFromElement = __webpack_require__(2);

var _getComponentFromElement2 = _interopRequireDefault(_getComponentFromElement);

var _config = __webpack_require__(0);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Destroys and removes instance from DOM element
 * @param element: DOM element
 */

function destroyInstance(element) {
    var instance = (0, _getComponentFromElement2.default)(element);
    if (instance) {
        var name = instance._name;
        instance.unmount();
        element['__gia_component__'] = null;
        if (_config2.default.get('log')) {
            console.info('Removed component "' + name + '".');
        }
    }
}


/***/ })
/******/ ]);
});