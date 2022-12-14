module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/constants":
/*!*********************************************************!*\
  !*** external "next/dist/next-server/lib/constants.js" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/constants.js");

/***/ }),

/***/ "../next-server/lib/document-context":
/*!****************************************************************!*\
  !*** external "next/dist/next-server/lib/document-context.js" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/document-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "../next-server/server/get-page-files":
/*!*****************************************************************!*\
  !*** external "next/dist/next-server/server/get-page-files.js" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/get-page-files.js");

/***/ }),

/***/ "../next-server/server/utils":
/*!********************************************************!*\
  !*** external "next/dist/next-server/server/utils.js" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/utils.js");

/***/ }),

/***/ "./node_modules/next/dist/pages/_document.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/pages/_document.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
exports.__esModule = true;
exports.Html = Html;
exports.Main = Main;
exports.NextScript = exports.Head = exports.default = void 0;
var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));
var _server = _interopRequireDefault(__webpack_require__(/*! styled-jsx/server */ "styled-jsx/server"));
var _constants = __webpack_require__(/*! ../next-server/lib/constants */ "../next-server/lib/constants");
var _documentContext = __webpack_require__(/*! ../next-server/lib/document-context */ "../next-server/lib/document-context");
var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");
exports.DocumentContext = _utils.DocumentContext;
exports.DocumentInitialProps = _utils.DocumentInitialProps;
exports.DocumentProps = _utils.DocumentProps;
var _getPageFiles = __webpack_require__(/*! ../next-server/server/get-page-files */ "../next-server/server/get-page-files");
var _utils2 = __webpack_require__(/*! ../next-server/server/utils */ "../next-server/server/utils");
var _htmlescape = __webpack_require__(/*! ../server/htmlescape */ "./node_modules/next/dist/server/htmlescape.js");
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
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
function dedupe(bundles) {
  const files = new Set();
  const kept = [];
  for (const bundle of bundles) {
    if (files.has(bundle.file)) continue;
    files.add(bundle.file);
    kept.push(bundle);
  }
  return kept;
}
function getOptionalModernScriptVariant(path) {
  if (false) {}
  return path;
}
function getDocumentFiles(buildManifest, pathname) {
  const sharedFiles = (0, _getPageFiles.getPageFiles)(buildManifest, '/_app');
  const pageFiles = (0, _getPageFiles.getPageFiles)(buildManifest, pathname);
  return {
    sharedFiles,
    pageFiles,
    allFiles: [...new Set([...sharedFiles, ...pageFiles])]
  };
} /**
  * `Document` component handles the initial `document` markup and renders only on the server side.
  * Commonly used for implementing server side rendering for `css-in-js` libraries.
  */
class Document extends _react.Component {
  /**
  * `getInitialProps` hook returns the context object with the addition of `renderPage`.
  * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
  */
  static async getInitialProps(ctx) {
    const enhanceApp = App => {
      return props => /*#__PURE__*/_react.default.createElement(App, props);
    };
    const {
      html,
      head
    } = await ctx.renderPage({
      enhanceApp
    });
    const styles = [...(0, _server.default)()];
    return {
      html,
      head,
      styles
    };
  }
  static renderDocument(DocumentComponent, props) {
    return /*#__PURE__*/_react.default.createElement(_documentContext.DocumentContext.Provider, {
      value: props
    }, /*#__PURE__*/_react.default.createElement(DocumentComponent, props));
  }
  render() {
    return /*#__PURE__*/_react.default.createElement(Html, null, /*#__PURE__*/_react.default.createElement(Head, null), /*#__PURE__*/_react.default.createElement("body", null, /*#__PURE__*/_react.default.createElement(Main, null), /*#__PURE__*/_react.default.createElement(NextScript, null)));
  }
}
exports.default = Document;
Document.headTagsMiddleware =  false ? undefined : () => [];
function Html(props) {
  const {
    inAmpMode,
    docComponentsRendered,
    locale
  } = (0, _react.useContext)(_documentContext.DocumentContext);
  docComponentsRendered.Html = true;
  return /*#__PURE__*/_react.default.createElement("html", Object.assign({}, props, {
    lang: props.lang || locale || undefined,
    amp: inAmpMode ? '' : undefined,
    "data-ampdevmode": inAmpMode && true ? '' : undefined
  }));
}
class Head extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }
  getCssLinks(files) {
    const {
      assetPrefix,
      devOnlyCacheBusterQueryString,
      dynamicImports
    } = this.context;
    const cssFiles = files.allFiles.filter(f => f.endsWith('.css'));
    const sharedFiles = new Set(files.sharedFiles); // Unmanaged files are CSS files that will be handled directly by the
    // webpack runtime (`mini-css-extract-plugin`).
    let unmangedFiles = new Set([]);
    let dynamicCssFiles = dedupe(dynamicImports.filter(f => f.file.endsWith('.css'))).map(f => f.file);
    if (dynamicCssFiles.length) {
      const existing = new Set(cssFiles);
      dynamicCssFiles = dynamicCssFiles.filter(f => !(existing.has(f) || sharedFiles.has(f)));
      unmangedFiles = new Set(dynamicCssFiles);
      cssFiles.push(...dynamicCssFiles);
    }
    const cssLinkElements = [];
    cssFiles.forEach(file => {
      const isSharedFile = sharedFiles.has(file);
      const isUnmanagedFile = unmangedFiles.has(file);
      cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
        key: `${file}-preload`,
        nonce: this.props.nonce,
        rel: "preload",
        href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        as: "style",
        crossOrigin: this.props.crossOrigin || undefined
      }), /*#__PURE__*/_react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "stylesheet",
        href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-n-g": isUnmanagedFile ? undefined : isSharedFile ? '' : undefined,
        "data-n-p": isUnmanagedFile ? undefined : isSharedFile ? undefined : ''
      }));
    });
    return cssLinkElements.length === 0 ? null : cssLinkElements;
  }
  getPreloadDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix,
      devOnlyCacheBusterQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      // `dynamicImports` will contain both `.js` and `.module.js` when the
      // feature is enabled. This clause will filter down to the modern
      // variants only.
      if (!bundle.file.endsWith(getOptionalModernScriptVariant('.js'))) {
        return null;
      }
      return /*#__PURE__*/_react.default.createElement("link", {
        rel: "preload",
        key: bundle.file,
        href: `${assetPrefix}/_next/${encodeURI(bundle.file)}${devOnlyCacheBusterQueryString}`,
        as: "script",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      });
    }) // Filter out nulled scripts
    .filter(Boolean);
  }
  getPreloadMainLinks(files) {
    const {
      assetPrefix,
      devOnlyCacheBusterQueryString
    } = this.context;
    const preloadFiles = files.allFiles.filter(file => {
      // `dynamicImports` will contain both `.js` and `.module.js` when
      // the feature is enabled. This clause will filter down to the
      // modern variants only.
      return file.endsWith(getOptionalModernScriptVariant('.js'));
    });
    return !preloadFiles.length ? null : preloadFiles.map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file,
      nonce: this.props.nonce,
      rel: "preload",
      href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    }));
  }
  makeStylesheetInert(node) {
    return _react.default.Children.map(node, c => {
      if (c.type === 'link' && c.props['href'] && _constants.OPTIMIZED_FONT_PROVIDERS.some(url => c.props['href'].startsWith(url))) {
        const newProps = _objectSpread({}, c.props || {});
        newProps['data-href'] = newProps['href'];
        newProps['href'] = undefined;
        return /*#__PURE__*/_react.default.cloneElement(c, newProps);
      } else if (c.props && c.props['children']) {
        c.props['children'] = this.makeStylesheetInert(c.props['children']);
      }
      return c;
    });
  }
  render() {
    const {
      styles,
      ampPath,
      inAmpMode,
      hybridAmp,
      canonicalBase,
      __NEXT_DATA__,
      dangerousAsPath,
      headTags,
      unstable_runtimeJS
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    this.context.docComponentsRendered.Head = true;
    let {
      head
    } = this.context;
    let children = this.props.children; // show a warning if Head contains <title> (only in development)
    if (true) {
      children = _react.default.Children.map(children, child => {
        var _child$props;
        const isReactHelmet = child == null ? void 0 : (_child$props = child.props) == null ? void 0 : _child$props['data-react-helmet'];
        if (!isReactHelmet) {
          var _child$props2;
          if ((child == null ? void 0 : child.type) === 'title') {
            console.warn("Warning: <title> should not be used in _document.js's <Head>. https://err.sh/next.js/no-document-title");
          } else if ((child == null ? void 0 : child.type) === 'meta' && (child == null ? void 0 : (_child$props2 = child.props) == null ? void 0 : _child$props2.name) === 'viewport') {
            console.warn("Warning: viewport meta tags should not be used in _document.js's <Head>. https://err.sh/next.js/no-document-viewport-meta");
          }
        }
        return child;
      });
      if (this.props.crossOrigin) console.warn('Warning: `Head` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated');
    }
    if (false) {}
    let hasAmphtmlRel = false;
    let hasCanonicalRel = false; // show warning and remove conflicting amp head tags
    head = _react.default.Children.map(head || [], child => {
      if (!child) return child;
      const {
        type,
        props
      } = child;
      if (inAmpMode) {
        let badProp = '';
        if (type === 'meta' && props.name === 'viewport') {
          badProp = 'name="viewport"';
        } else if (type === 'link' && props.rel === 'canonical') {
          hasCanonicalRel = true;
        } else if (type === 'script') {
          // only block if
          // 1. it has a src and isn't pointing to ampproject's CDN
          // 2. it is using dangerouslySetInnerHTML without a type or
          // a type of text/javascript
          if (props.src && props.src.indexOf('ampproject') < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === 'text/javascript')) {
            badProp = '<script';
            Object.keys(props).forEach(prop => {
              badProp += ` ${prop}="${props[prop]}"`;
            });
            badProp += '/>';
          }
        }
        if (badProp) {
          console.warn(`Found conflicting amp tag "${child.type}" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://err.sh/next.js/conflicting-amp-tag`);
          return null;
        }
      } else {
        // non-amp mode
        if (type === 'link' && props.rel === 'amphtml') {
          hasAmphtmlRel = true;
        }
      }
      return child;
    }); // try to parse styles from fragment for backwards compat
    const curStyles = Array.isArray(styles) ? styles : [];
    if (inAmpMode && styles &&
    // @ts-ignore Property 'props' does not exist on type ReactElement
    styles.props &&
    // @ts-ignore Property 'props' does not exist on type ReactElement
    Array.isArray(styles.props.children)) {
      const hasStyles = el => {
        var _el$props, _el$props$dangerously;
        return el == null ? void 0 : (_el$props = el.props) == null ? void 0 : (_el$props$dangerously = _el$props.dangerouslySetInnerHTML) == null ? void 0 : _el$props$dangerously.__html;
      }; // @ts-ignore Property 'props' does not exist on type ReactElement
      styles.props.children.forEach(child => {
        if (Array.isArray(child)) {
          child.forEach(el => hasStyles(el) && curStyles.push(el));
        } else if (hasStyles(child)) {
          curStyles.push(child);
        }
      });
    }
    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page);
    return /*#__PURE__*/_react.default.createElement("head", this.props, this.context.isDevelopment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("style", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined,
      dangerouslySetInnerHTML: {
        __html: `body{display:none}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined
    }, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: `body{display:block}`
      }
    }))), children, head, inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1"
    }), !hasCanonicalRel && /*#__PURE__*/_react.default.createElement("link", {
      rel: "canonical",
      href: canonicalBase + (0, _utils2.cleanAmpPath)(dangerousAsPath)
    }), /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      as: "script",
      href: "https://cdn.ampproject.org/v0.js"
    }), styles && /*#__PURE__*/_react.default.createElement("style", {
      "amp-custom": "",
      dangerouslySetInnerHTML: {
        __html: curStyles.map(style => style.props.dangerouslySetInnerHTML.__html).join('').replace(/\/\*# sourceMappingURL=.*\*\//g, '').replace(/\/\*@ sourceURL=.*?\*\//g, '')
      }
    }), /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`
      }
    })), /*#__PURE__*/_react.default.createElement("script", {
      async: true,
      src: "https://cdn.ampproject.org/v0.js"
    })), !inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && /*#__PURE__*/_react.default.createElement("link", {
      rel: "amphtml",
      href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
    }),  false ? undefined : this.getCssLinks(files), /*#__PURE__*/_react.default.createElement("noscript", {
      "data-n-css": true
    }), !disableRuntimeJS && this.getPreloadDynamicChunks(), !disableRuntimeJS && this.getPreloadMainLinks(files), this.context.isDevelopment && /*#__PURE__*/ // this element is used to mount development styles so the
    // ordering matches production
    // (by default, style-loader injects at the bottom of <head />)
    _react.default.createElement("noscript", {
      id: "__next_css__DO_NOT_USE__"
    }), styles || null), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {}, ...(headTags || [])));
  }
}
exports.Head = Head;
Head.contextType = _documentContext.DocumentContext;
Head.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};
function Main() {
  const {
    inAmpMode,
    html,
    docComponentsRendered
  } = (0, _react.useContext)(_documentContext.DocumentContext);
  docComponentsRendered.Main = true;
  if (inAmpMode) return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _constants.AMP_RENDER_TARGET);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "__next",
    dangerouslySetInnerHTML: {
      __html: html
    }
  });
}
class NextScript extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }
  getDynamicChunks(files) {
    const {
      dynamicImports,
      assetPrefix,
      isDevelopment,
      devOnlyCacheBusterQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      let modernProps = {};
      if (false) {}
      if (!bundle.file.endsWith('.js') || files.allFiles.includes(bundle.file)) return null;
      return /*#__PURE__*/_react.default.createElement("script", Object.assign({
        async: !isDevelopment,
        key: bundle.file,
        src: `${assetPrefix}/_next/${encodeURI(bundle.file)}${devOnlyCacheBusterQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      }, modernProps));
    });
  }
  getScripts(files) {
    var _buildManifest$lowPri;
    const {
      assetPrefix,
      buildManifest,
      isDevelopment,
      devOnlyCacheBusterQueryString
    } = this.context;
    const normalScripts = files.allFiles.filter(file => file.endsWith('.js'));
    const lowPriorityScripts = (_buildManifest$lowPri = buildManifest.lowPriorityFiles) == null ? void 0 : _buildManifest$lowPri.filter(file => file.endsWith('.js'));
    return [...normalScripts, ...lowPriorityScripts].map(file => {
      let modernProps = {};
      if (false) {}
      return /*#__PURE__*/_react.default.createElement("script", Object.assign({
        key: file,
        src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        nonce: this.props.nonce,
        async: !isDevelopment,
        crossOrigin: this.props.crossOrigin || undefined
      }, modernProps));
    });
  }
  getPolyfillScripts() {
    // polyfills.js has to be rendered as nomodule without async
    // It also has to be the first script to load
    const {
      assetPrefix,
      buildManifest,
      devOnlyCacheBusterQueryString
    } = this.context;
    return buildManifest.polyfillFiles.filter(polyfill => polyfill.endsWith('.js') && !polyfill.endsWith('.module.js')).map(polyfill => /*#__PURE__*/_react.default.createElement("script", {
      key: polyfill,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      noModule: true,
      src: `${assetPrefix}/_next/${polyfill}${devOnlyCacheBusterQueryString}`
    }));
  }
  static getInlineScriptSource(documentProps) {
    const {
      __NEXT_DATA__
    } = documentProps;
    try {
      const data = JSON.stringify(__NEXT_DATA__);
      return (0, _htmlescape.htmlEscapeJsonString)(data);
    } catch (err) {
      if (err.message.indexOf('circular structure')) {
        throw new Error(`Circular structure in "getInitialProps" result of page "${__NEXT_DATA__.page}". https://err.sh/vercel/next.js/circular-structure`);
      }
      throw err;
    }
  }
  render() {
    const {
      assetPrefix,
      inAmpMode,
      buildManifest,
      unstable_runtimeJS,
      docComponentsRendered,
      devOnlyCacheBusterQueryString
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    docComponentsRendered.NextScript = true;
    if (inAmpMode) {
      if (false) {}
      const ampDevFiles = [...buildManifest.devFiles, ...buildManifest.ampDevFiles];
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
        id: "__NEXT_DATA__",
        type: "application/json",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        dangerouslySetInnerHTML: {
          __html: NextScript.getInlineScriptSource(this.context)
        },
        "data-ampdevmode": true
      }), ampDevFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
        key: file,
        src: `${assetPrefix}/_next/${file}${devOnlyCacheBusterQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-ampdevmode": true
      })));
    }
    if (true) {
      if (this.props.crossOrigin) console.warn('Warning: `NextScript` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated');
    }
    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page);
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !disableRuntimeJS && buildManifest.devFiles ? buildManifest.devFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    })) : null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
      id: "__NEXT_DATA__",
      type: "application/json",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      dangerouslySetInnerHTML: {
        __html: NextScript.getInlineScriptSource(this.context)
      }
    }),  false ? /*#__PURE__*/undefined : null, !disableRuntimeJS && this.getPolyfillScripts(), disableRuntimeJS ? null : this.getDynamicChunks(files), disableRuntimeJS ? null : this.getScripts(files));
  }
}
exports.NextScript = NextScript;
NextScript.contextType = _documentContext.DocumentContext;
NextScript.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};
NextScript.safariNomoduleFix = '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';
function getAmpPath(ampPath, asPath) {
  return ampPath || `${asPath}${asPath.includes('?') ? '&' : '?'}amp=1`;
}

/***/ }),

/***/ "./node_modules/next/dist/server/htmlescape.js":
/*!*****************************************************!*\
  !*** ./node_modules/next/dist/server/htmlescape.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.htmlEscapeJsonString=htmlEscapeJsonString;// This utility is based on https://github.com/zertosh/htmlescape
// License: https://github.com/zertosh/htmlescape/blob/0527ca7156a524d256101bb310a9f970f63078ad/LICENSE
const ESCAPE_LOOKUP={'&':'\\u0026','>':'\\u003e','<':'\\u003c','\u2028':'\\u2028','\u2029':'\\u2029'};const ESCAPE_REGEX=/[&><\u2028\u2029]/g;function htmlEscapeJsonString(str){return str.replace(ESCAPE_REGEX,match=>ESCAPE_LOOKUP[match]);}
//# sourceMappingURL=htmlescape.js.map

/***/ }),

/***/ "./node_modules/next/document.js":
/*!***************************************!*\
  !*** ./node_modules/next/document.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_document */ "./node_modules/next/dist/pages/_document.js")


/***/ }),

/***/ "./pages/_document.js":
/*!****************************!*\
  !*** ./pages/_document.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/document */ "./node_modules/next/document.js");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\gihanmadhuwantha\\Desktop\\system_Development\\AththanayakaFoods\\aththanayakafoods\\pages\\_document.js";


class MyDocument extends next_document__WEBPACK_IMPORTED_MODULE_0___default.a {
  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_document__WEBPACK_IMPORTED_MODULE_0__["Html"], {
      lang: "en",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_document__WEBPACK_IMPORTED_MODULE_0__["Head"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("meta", {
          name: "description",
          content: "Aththanayaka Foods Web System"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 7,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("link", {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("script", {
          src: "https://code.jquery.com/jquery-3.5.1.slim.min.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("script", {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("script", {
          src: "https://kit.fontawesome.com/a076d05399.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("body", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_document__WEBPACK_IMPORTED_MODULE_0__["Main"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_document__WEBPACK_IMPORTED_MODULE_0__["NextScript"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 13
    }, this);
  }
}
/* harmony default export */ __webpack_exports__["default"] = (MyDocument);

/***/ }),

/***/ 1:
/*!*********************************************!*\
  !*** multi private-next-pages/_document.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_document.js */"./pages/_document.js");


/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

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

/***/ }),

/***/ "styled-jsx/server":
/*!************************************!*\
  !*** external "styled-jsx/server" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/server");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9jb25zdGFudHMuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2RvY3VtZW50LWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9nZXQtcGFnZS1maWxlcy5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi4vLi4vcGFnZXMvX2RvY3VtZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NlcnZlci9odG1sZXNjYXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2RvY3VtZW50LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19kb2N1bWVudC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3NlcnZlclwiIl0sIm5hbWVzIjpbImRlZHVwZSIsImJ1bmRsZXMiLCJmaWxlcyIsIlNldCIsImtlcHQiLCJidW5kbGUiLCJoYXMiLCJmaWxlIiwiYWRkIiwicHVzaCIsImdldE9wdGlvbmFsTW9kZXJuU2NyaXB0VmFyaWFudCIsInBhdGgiLCJwcm9jZXNzIiwiZ2V0RG9jdW1lbnRGaWxlcyIsImJ1aWxkTWFuaWZlc3QiLCJwYXRobmFtZSIsInNoYXJlZEZpbGVzIiwicGFnZUZpbGVzIiwiYWxsRmlsZXMiLCJEb2N1bWVudCIsIkNvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsImVuaGFuY2VBcHAiLCJBcHAiLCJwcm9wcyIsImh0bWwiLCJoZWFkIiwicmVuZGVyUGFnZSIsInN0eWxlcyIsInJlbmRlckRvY3VtZW50IiwiRG9jdW1lbnRDb21wb25lbnQiLCJyZW5kZXIiLCJoZWFkVGFnc01pZGRsZXdhcmUiLCJIdG1sIiwiaW5BbXBNb2RlIiwiZG9jQ29tcG9uZW50c1JlbmRlcmVkIiwibG9jYWxlIiwiRG9jdW1lbnRDb21wb25lbnRDb250ZXh0IiwibGFuZyIsInVuZGVmaW5lZCIsIkhlYWQiLCJjb250ZXh0IiwiZ2V0Q3NzTGlua3MiLCJhc3NldFByZWZpeCIsImRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nIiwiZHluYW1pY0ltcG9ydHMiLCJjc3NGaWxlcyIsImZpbHRlciIsImYiLCJlbmRzV2l0aCIsInVubWFuZ2VkRmlsZXMiLCJkeW5hbWljQ3NzRmlsZXMiLCJtYXAiLCJsZW5ndGgiLCJleGlzdGluZyIsImNzc0xpbmtFbGVtZW50cyIsImZvckVhY2giLCJpc1NoYXJlZEZpbGUiLCJpc1VubWFuYWdlZEZpbGUiLCJub25jZSIsImVuY29kZVVSSSIsImNyb3NzT3JpZ2luIiwiX19ORVhUX0NST1NTX09SSUdJTiIsImdldFByZWxvYWREeW5hbWljQ2h1bmtzIiwiQm9vbGVhbiIsImdldFByZWxvYWRNYWluTGlua3MiLCJwcmVsb2FkRmlsZXMiLCJtYWtlU3R5bGVzaGVldEluZXJ0Iiwibm9kZSIsIlJlYWN0IiwiQ2hpbGRyZW4iLCJjIiwidHlwZSIsIk9QVElNSVpFRF9GT05UX1BST1ZJREVSUyIsInNvbWUiLCJ1cmwiLCJzdGFydHNXaXRoIiwibmV3UHJvcHMiLCJjbG9uZUVsZW1lbnQiLCJhbXBQYXRoIiwiaHlicmlkQW1wIiwiY2Fub25pY2FsQmFzZSIsIl9fTkVYVF9EQVRBX18iLCJkYW5nZXJvdXNBc1BhdGgiLCJoZWFkVGFncyIsInVuc3RhYmxlX3J1bnRpbWVKUyIsImRpc2FibGVSdW50aW1lSlMiLCJjaGlsZHJlbiIsImNoaWxkIiwiaXNSZWFjdEhlbG1ldCIsImNvbnNvbGUiLCJ3YXJuIiwibmFtZSIsImhhc0FtcGh0bWxSZWwiLCJoYXNDYW5vbmljYWxSZWwiLCJiYWRQcm9wIiwicmVsIiwic3JjIiwiaW5kZXhPZiIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiT2JqZWN0Iiwia2V5cyIsInByb3AiLCJwYWdlIiwiY3VyU3R5bGVzIiwiQXJyYXkiLCJpc0FycmF5IiwiaGFzU3R5bGVzIiwiZWwiLCJfX2h0bWwiLCJpc0RldmVsb3BtZW50Iiwic3R5bGUiLCJqb2luIiwicmVwbGFjZSIsImdldEFtcFBhdGgiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjb250ZXh0VHlwZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsIk1haW4iLCJBTVBfUkVOREVSX1RBUkdFVCIsIk5leHRTY3JpcHQiLCJnZXREeW5hbWljQ2h1bmtzIiwibW9kZXJuUHJvcHMiLCJpbmNsdWRlcyIsImdldFNjcmlwdHMiLCJub3JtYWxTY3JpcHRzIiwibG93UHJpb3JpdHlTY3JpcHRzIiwibG93UHJpb3JpdHlGaWxlcyIsImdldFBvbHlmaWxsU2NyaXB0cyIsInBvbHlmaWxsRmlsZXMiLCJwb2x5ZmlsbCIsImdldElubGluZVNjcmlwdFNvdXJjZSIsImRvY3VtZW50UHJvcHMiLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsImVyciIsIm1lc3NhZ2UiLCJFcnJvciIsImFtcERldkZpbGVzIiwiZGV2RmlsZXMiLCJzYWZhcmlOb21vZHVsZUZpeCIsImFzUGF0aCIsIk15RG9jdW1lbnQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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QUE7UUFBQTtRQUFBO01BQUEsUUFDOUQsZUFDUDtRQUFBLHdCQUNJLHFFQUFDLGtEQUFJO1VBQUE7VUFBQTtVQUFBO1FBQUEsUUFBRyxlQUNSLHFFQUFDLHdEQUFVO1VBQUE7VUFBQTtVQUFBO1FBQUEsUUFBRztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUEsUUFDWDtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFDSjtFQUVmO0FBQ0o7QUFFZW1ILHlFQUFVLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJ6Qix1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9fZG9jdW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2NvbnN0YW50cy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2RvY3VtZW50LWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2dldC1wYWdlLWZpbGVzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvdXRpbHMuanNcIik7IiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUmVhY3ROb2RlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgZmx1c2ggZnJvbSAnc3R5bGVkLWpzeC9zZXJ2ZXInXG5pbXBvcnQge1xuICBBTVBfUkVOREVSX1RBUkdFVCxcbiAgT1BUSU1JWkVEX0ZPTlRfUFJPVklERVJTLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvY29uc3RhbnRzJ1xuaW1wb3J0IHsgRG9jdW1lbnRDb250ZXh0IGFzIERvY3VtZW50Q29tcG9uZW50Q29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9kb2N1bWVudC1jb250ZXh0J1xuaW1wb3J0IHtcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wcyxcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHtcbiAgQnVpbGRNYW5pZmVzdCxcbiAgZ2V0UGFnZUZpbGVzLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5pbXBvcnQgeyBjbGVhbkFtcFBhdGggfSBmcm9tICcuLi9uZXh0LXNlcnZlci9zZXJ2ZXIvdXRpbHMnXG5pbXBvcnQgeyBodG1sRXNjYXBlSnNvblN0cmluZyB9IGZyb20gJy4uL3NlcnZlci9odG1sZXNjYXBlJ1xuXG5leHBvcnQgeyBEb2N1bWVudENvbnRleHQsIERvY3VtZW50SW5pdGlhbFByb3BzLCBEb2N1bWVudFByb3BzIH1cblxuZXhwb3J0IHR5cGUgT3JpZ2luUHJvcHMgPSB7XG4gIG5vbmNlPzogc3RyaW5nXG4gIGNyb3NzT3JpZ2luPzogc3RyaW5nXG59XG5cbmZ1bmN0aW9uIGRlZHVwZTxUIGV4dGVuZHMgeyBmaWxlOiBzdHJpbmcgfT4oYnVuZGxlczogVFtdKTogVFtdIHtcbiAgY29uc3QgZmlsZXMgPSBuZXcgU2V0PHN0cmluZz4oKVxuICBjb25zdCBrZXB0OiBUW10gPSBbXVxuXG4gIGZvciAoY29uc3QgYnVuZGxlIG9mIGJ1bmRsZXMpIHtcbiAgICBpZiAoZmlsZXMuaGFzKGJ1bmRsZS5maWxlKSkgY29udGludWVcbiAgICBmaWxlcy5hZGQoYnVuZGxlLmZpbGUpXG4gICAga2VwdC5wdXNoKGJ1bmRsZSlcbiAgfVxuICByZXR1cm4ga2VwdFxufVxuXG5mdW5jdGlvbiBnZXRPcHRpb25hbE1vZGVyblNjcmlwdFZhcmlhbnQocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9NT0RFUk5fQlVJTEQpIHtcbiAgICByZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC5qcyQvLCAnLm1vZHVsZS5qcycpXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxudHlwZSBEb2N1bWVudEZpbGVzID0ge1xuICBzaGFyZWRGaWxlczogcmVhZG9ubHkgc3RyaW5nW11cbiAgcGFnZUZpbGVzOiByZWFkb25seSBzdHJpbmdbXVxuICBhbGxGaWxlczogcmVhZG9ubHkgc3RyaW5nW11cbn1cblxuZnVuY3Rpb24gZ2V0RG9jdW1lbnRGaWxlcyhcbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdCxcbiAgcGF0aG5hbWU6IHN0cmluZ1xuKTogRG9jdW1lbnRGaWxlcyB7XG4gIGNvbnN0IHNoYXJlZEZpbGVzOiByZWFkb25seSBzdHJpbmdbXSA9IGdldFBhZ2VGaWxlcyhidWlsZE1hbmlmZXN0LCAnL19hcHAnKVxuICBjb25zdCBwYWdlRmlsZXM6IHJlYWRvbmx5IHN0cmluZ1tdID0gZ2V0UGFnZUZpbGVzKGJ1aWxkTWFuaWZlc3QsIHBhdGhuYW1lKVxuXG4gIHJldHVybiB7XG4gICAgc2hhcmVkRmlsZXMsXG4gICAgcGFnZUZpbGVzLFxuICAgIGFsbEZpbGVzOiBbLi4ubmV3IFNldChbLi4uc2hhcmVkRmlsZXMsIC4uLnBhZ2VGaWxlc10pXSxcbiAgfVxufVxuXG4vKipcbiAqIGBEb2N1bWVudGAgY29tcG9uZW50IGhhbmRsZXMgdGhlIGluaXRpYWwgYGRvY3VtZW50YCBtYXJrdXAgYW5kIHJlbmRlcnMgb25seSBvbiB0aGUgc2VydmVyIHNpZGUuXG4gKiBDb21tb25seSB1c2VkIGZvciBpbXBsZW1lbnRpbmcgc2VydmVyIHNpZGUgcmVuZGVyaW5nIGZvciBgY3NzLWluLWpzYCBsaWJyYXJpZXMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvY3VtZW50PFAgPSB7fT4gZXh0ZW5kcyBDb21wb25lbnQ8RG9jdW1lbnRQcm9wcyAmIFA+IHtcbiAgc3RhdGljIGhlYWRUYWdzTWlkZGxld2FyZSA9IHByb2Nlc3MuZW52Ll9fTkVYVF9QTFVHSU5TXG4gICAgPyBpbXBvcnQoXG4gICAgICAgIC8vIEB0cy1pZ25vcmUgbG9hZGVyIHN5bnRheFxuICAgICAgICAnbmV4dC1wbHVnaW4tbG9hZGVyP21pZGRsZXdhcmU9ZG9jdW1lbnQtaGVhZC10YWdzLXNlcnZlciEnXG4gICAgICApXG4gICAgOiAoKSA9PiBbXVxuXG4gIC8qKlxuICAgKiBgZ2V0SW5pdGlhbFByb3BzYCBob29rIHJldHVybnMgdGhlIGNvbnRleHQgb2JqZWN0IHdpdGggdGhlIGFkZGl0aW9uIG9mIGByZW5kZXJQYWdlYC5cbiAgICogYHJlbmRlclBhZ2VgIGNhbGxiYWNrIGV4ZWN1dGVzIGBSZWFjdGAgcmVuZGVyaW5nIGxvZ2ljIHN5bmNocm9ub3VzbHkgdG8gc3VwcG9ydCBzZXJ2ZXItcmVuZGVyaW5nIHdyYXBwZXJzXG4gICAqL1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKFxuICAgIGN0eDogRG9jdW1lbnRDb250ZXh0XG4gICk6IFByb21pc2U8RG9jdW1lbnRJbml0aWFsUHJvcHM+IHtcbiAgICBjb25zdCBlbmhhbmNlQXBwID0gKEFwcDogYW55KSA9PiB7XG4gICAgICByZXR1cm4gKHByb3BzOiBhbnkpID0+IDxBcHAgey4uLnByb3BzfSAvPlxuICAgIH1cblxuICAgIGNvbnN0IHsgaHRtbCwgaGVhZCB9ID0gYXdhaXQgY3R4LnJlbmRlclBhZ2UoeyBlbmhhbmNlQXBwIH0pXG4gICAgY29uc3Qgc3R5bGVzID0gWy4uLmZsdXNoKCldXG4gICAgcmV0dXJuIHsgaHRtbCwgaGVhZCwgc3R5bGVzIH1cbiAgfVxuXG4gIHN0YXRpYyByZW5kZXJEb2N1bWVudDxQPihcbiAgICBEb2N1bWVudENvbXBvbmVudDogbmV3ICgpID0+IERvY3VtZW50PFA+LFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzICYgUFxuICApOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xuICAgIHJldHVybiAoXG4gICAgICA8RG9jdW1lbnRDb21wb25lbnRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtwcm9wc30+XG4gICAgICAgIDxEb2N1bWVudENvbXBvbmVudCB7Li4ucHJvcHN9IC8+XG4gICAgICA8L0RvY3VtZW50Q29tcG9uZW50Q29udGV4dC5Qcm92aWRlcj5cbiAgICApXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxIdG1sPlxuICAgICAgICA8SGVhZCAvPlxuICAgICAgICA8Ym9keT5cbiAgICAgICAgICA8TWFpbiAvPlxuICAgICAgICAgIDxOZXh0U2NyaXB0IC8+XG4gICAgICAgIDwvYm9keT5cbiAgICAgIDwvSHRtbD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEh0bWwoXG4gIHByb3BzOiBSZWFjdC5EZXRhaWxlZEhUTUxQcm9wczxcbiAgICBSZWFjdC5IdG1sSFRNTEF0dHJpYnV0ZXM8SFRNTEh0bWxFbGVtZW50PixcbiAgICBIVE1MSHRtbEVsZW1lbnRcbiAgPlxuKSB7XG4gIGNvbnN0IHsgaW5BbXBNb2RlLCBkb2NDb21wb25lbnRzUmVuZGVyZWQsIGxvY2FsZSB9ID0gdXNlQ29udGV4dChcbiAgICBEb2N1bWVudENvbXBvbmVudENvbnRleHRcbiAgKVxuXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZC5IdG1sID0gdHJ1ZVxuXG4gIHJldHVybiAoXG4gICAgPGh0bWxcbiAgICAgIHsuLi5wcm9wc31cbiAgICAgIGxhbmc9e3Byb3BzLmxhbmcgfHwgbG9jYWxlIHx8IHVuZGVmaW5lZH1cbiAgICAgIGFtcD17aW5BbXBNb2RlID8gJycgOiB1bmRlZmluZWR9XG4gICAgICBkYXRhLWFtcGRldm1vZGU9e1xuICAgICAgICBpbkFtcE1vZGUgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICcnIDogdW5kZWZpbmVkXG4gICAgICB9XG4gICAgLz5cbiAgKVxufVxuXG5leHBvcnQgY2xhc3MgSGVhZCBleHRlbmRzIENvbXBvbmVudDxcbiAgT3JpZ2luUHJvcHMgJlxuICAgIFJlYWN0LkRldGFpbGVkSFRNTFByb3BzPFxuICAgICAgUmVhY3QuSFRNTEF0dHJpYnV0ZXM8SFRNTEhlYWRFbGVtZW50PixcbiAgICAgIEhUTUxIZWFkRWxlbWVudFxuICAgID5cbj4ge1xuICBzdGF0aWMgY29udGV4dFR5cGUgPSBEb2N1bWVudENvbXBvbmVudENvbnRleHRcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG5vbmNlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNyb3NzT3JpZ2luOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9XG5cbiAgY29udGV4dCE6IFJlYWN0LkNvbnRleHRUeXBlPHR5cGVvZiBEb2N1bWVudENvbXBvbmVudENvbnRleHQ+XG5cbiAgZ2V0Q3NzTGlua3MoZmlsZXM6IERvY3VtZW50RmlsZXMpOiBKU1guRWxlbWVudFtdIHwgbnVsbCB7XG4gICAgY29uc3Qge1xuICAgICAgYXNzZXRQcmVmaXgsXG4gICAgICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyxcbiAgICAgIGR5bmFtaWNJbXBvcnRzLFxuICAgIH0gPSB0aGlzLmNvbnRleHRcbiAgICBjb25zdCBjc3NGaWxlcyA9IGZpbGVzLmFsbEZpbGVzLmZpbHRlcigoZikgPT4gZi5lbmRzV2l0aCgnLmNzcycpKVxuICAgIGNvbnN0IHNoYXJlZEZpbGVzOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQoZmlsZXMuc2hhcmVkRmlsZXMpXG5cbiAgICAvLyBVbm1hbmFnZWQgZmlsZXMgYXJlIENTUyBmaWxlcyB0aGF0IHdpbGwgYmUgaGFuZGxlZCBkaXJlY3RseSBieSB0aGVcbiAgICAvLyB3ZWJwYWNrIHJ1bnRpbWUgKGBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbmApLlxuICAgIGxldCB1bm1hbmdlZEZpbGVzOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQoW10pXG4gICAgbGV0IGR5bmFtaWNDc3NGaWxlcyA9IGRlZHVwZShcbiAgICAgIGR5bmFtaWNJbXBvcnRzLmZpbHRlcigoZikgPT4gZi5maWxlLmVuZHNXaXRoKCcuY3NzJykpXG4gICAgKS5tYXAoKGYpID0+IGYuZmlsZSlcbiAgICBpZiAoZHluYW1pY0Nzc0ZpbGVzLmxlbmd0aCkge1xuICAgICAgY29uc3QgZXhpc3RpbmcgPSBuZXcgU2V0KGNzc0ZpbGVzKVxuICAgICAgZHluYW1pY0Nzc0ZpbGVzID0gZHluYW1pY0Nzc0ZpbGVzLmZpbHRlcihcbiAgICAgICAgKGYpID0+ICEoZXhpc3RpbmcuaGFzKGYpIHx8IHNoYXJlZEZpbGVzLmhhcyhmKSlcbiAgICAgIClcbiAgICAgIHVubWFuZ2VkRmlsZXMgPSBuZXcgU2V0KGR5bmFtaWNDc3NGaWxlcylcbiAgICAgIGNzc0ZpbGVzLnB1c2goLi4uZHluYW1pY0Nzc0ZpbGVzKVxuICAgIH1cblxuICAgIGNvbnN0IGNzc0xpbmtFbGVtZW50czogSlNYLkVsZW1lbnRbXSA9IFtdXG4gICAgY3NzRmlsZXMuZm9yRWFjaCgoZmlsZSkgPT4ge1xuICAgICAgY29uc3QgaXNTaGFyZWRGaWxlID0gc2hhcmVkRmlsZXMuaGFzKGZpbGUpXG4gICAgICBjb25zdCBpc1VubWFuYWdlZEZpbGUgPSB1bm1hbmdlZEZpbGVzLmhhcyhmaWxlKVxuICAgICAgY3NzTGlua0VsZW1lbnRzLnB1c2goXG4gICAgICAgIDxsaW5rXG4gICAgICAgICAga2V5PXtgJHtmaWxlfS1wcmVsb2FkYH1cbiAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICByZWw9XCJwcmVsb2FkXCJcbiAgICAgICAgICBocmVmPXtgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoXG4gICAgICAgICAgICBmaWxlXG4gICAgICAgICAgKX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWB9XG4gICAgICAgICAgYXM9XCJzdHlsZVwiXG4gICAgICAgICAgY3Jvc3NPcmlnaW49e1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgICAgfVxuICAgICAgICAvPixcbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBrZXk9e2ZpbGV9XG4gICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgICAgZmlsZVxuICAgICAgICAgICl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gfVxuICAgICAgICAgIGNyb3NzT3JpZ2luPXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgIH1cbiAgICAgICAgICBkYXRhLW4tZz17aXNVbm1hbmFnZWRGaWxlID8gdW5kZWZpbmVkIDogaXNTaGFyZWRGaWxlID8gJycgOiB1bmRlZmluZWR9XG4gICAgICAgICAgZGF0YS1uLXA9e2lzVW5tYW5hZ2VkRmlsZSA/IHVuZGVmaW5lZCA6IGlzU2hhcmVkRmlsZSA/IHVuZGVmaW5lZCA6ICcnfVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIH0pXG4gICAgcmV0dXJuIGNzc0xpbmtFbGVtZW50cy5sZW5ndGggPT09IDAgPyBudWxsIDogY3NzTGlua0VsZW1lbnRzXG4gIH1cblxuICBnZXRQcmVsb2FkRHluYW1pY0NodW5rcygpIHtcbiAgICBjb25zdCB7XG4gICAgICBkeW5hbWljSW1wb3J0cyxcbiAgICAgIGFzc2V0UHJlZml4LFxuICAgICAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcsXG4gICAgfSA9IHRoaXMuY29udGV4dFxuXG4gICAgcmV0dXJuIChcbiAgICAgIGRlZHVwZShkeW5hbWljSW1wb3J0cylcbiAgICAgICAgLm1hcCgoYnVuZGxlKSA9PiB7XG4gICAgICAgICAgLy8gYGR5bmFtaWNJbXBvcnRzYCB3aWxsIGNvbnRhaW4gYm90aCBgLmpzYCBhbmQgYC5tb2R1bGUuanNgIHdoZW4gdGhlXG4gICAgICAgICAgLy8gZmVhdHVyZSBpcyBlbmFibGVkLiBUaGlzIGNsYXVzZSB3aWxsIGZpbHRlciBkb3duIHRvIHRoZSBtb2Rlcm5cbiAgICAgICAgICAvLyB2YXJpYW50cyBvbmx5LlxuICAgICAgICAgIGlmICghYnVuZGxlLmZpbGUuZW5kc1dpdGgoZ2V0T3B0aW9uYWxNb2Rlcm5TY3JpcHRWYXJpYW50KCcuanMnKSkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICAgICAgICBrZXk9e2J1bmRsZS5maWxlfVxuICAgICAgICAgICAgICBocmVmPXtgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoXG4gICAgICAgICAgICAgICAgYnVuZGxlLmZpbGVcbiAgICAgICAgICAgICAgKX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWB9XG4gICAgICAgICAgICAgIGFzPVwic2NyaXB0XCJcbiAgICAgICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgICAgIGNyb3NzT3JpZ2luPXtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApXG4gICAgICAgIH0pXG4gICAgICAgIC8vIEZpbHRlciBvdXQgbnVsbGVkIHNjcmlwdHNcbiAgICAgICAgLmZpbHRlcihCb29sZWFuKVxuICAgIClcbiAgfVxuXG4gIGdldFByZWxvYWRNYWluTGlua3MoZmlsZXM6IERvY3VtZW50RmlsZXMpOiBKU1guRWxlbWVudFtdIHwgbnVsbCB7XG4gICAgY29uc3QgeyBhc3NldFByZWZpeCwgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcgfSA9IHRoaXMuY29udGV4dFxuICAgIGNvbnN0IHByZWxvYWRGaWxlcyA9IGZpbGVzLmFsbEZpbGVzLmZpbHRlcigoZmlsZTogc3RyaW5nKSA9PiB7XG4gICAgICAvLyBgZHluYW1pY0ltcG9ydHNgIHdpbGwgY29udGFpbiBib3RoIGAuanNgIGFuZCBgLm1vZHVsZS5qc2Agd2hlblxuICAgICAgLy8gdGhlIGZlYXR1cmUgaXMgZW5hYmxlZC4gVGhpcyBjbGF1c2Ugd2lsbCBmaWx0ZXIgZG93biB0byB0aGVcbiAgICAgIC8vIG1vZGVybiB2YXJpYW50cyBvbmx5LlxuICAgICAgcmV0dXJuIGZpbGUuZW5kc1dpdGgoZ2V0T3B0aW9uYWxNb2Rlcm5TY3JpcHRWYXJpYW50KCcuanMnKSlcbiAgICB9KVxuXG4gICAgcmV0dXJuICFwcmVsb2FkRmlsZXMubGVuZ3RoXG4gICAgICA/IG51bGxcbiAgICAgIDogcHJlbG9hZEZpbGVzLm1hcCgoZmlsZTogc3RyaW5nKSA9PiAoXG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIGtleT17ZmlsZX1cbiAgICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgICBocmVmPXtgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoXG4gICAgICAgICAgICAgIGZpbGVcbiAgICAgICAgICAgICl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gfVxuICAgICAgICAgICAgYXM9XCJzY3JpcHRcIlxuICAgICAgICAgICAgY3Jvc3NPcmlnaW49e1xuICAgICAgICAgICAgICB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICApKVxuICB9XG5cbiAgbWFrZVN0eWxlc2hlZXRJbmVydChub2RlOiBSZWFjdE5vZGUpOiBSZWFjdE5vZGUge1xuICAgIHJldHVybiBSZWFjdC5DaGlsZHJlbi5tYXAobm9kZSwgKGM6IGFueSkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBjLnR5cGUgPT09ICdsaW5rJyAmJlxuICAgICAgICBjLnByb3BzWydocmVmJ10gJiZcbiAgICAgICAgT1BUSU1JWkVEX0ZPTlRfUFJPVklERVJTLnNvbWUoKHVybCkgPT4gYy5wcm9wc1snaHJlZiddLnN0YXJ0c1dpdGgodXJsKSlcbiAgICAgICkge1xuICAgICAgICBjb25zdCBuZXdQcm9wcyA9IHsgLi4uKGMucHJvcHMgfHwge30pIH1cbiAgICAgICAgbmV3UHJvcHNbJ2RhdGEtaHJlZiddID0gbmV3UHJvcHNbJ2hyZWYnXVxuICAgICAgICBuZXdQcm9wc1snaHJlZiddID0gdW5kZWZpbmVkXG4gICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoYywgbmV3UHJvcHMpXG4gICAgICB9IGVsc2UgaWYgKGMucHJvcHMgJiYgYy5wcm9wc1snY2hpbGRyZW4nXSkge1xuICAgICAgICBjLnByb3BzWydjaGlsZHJlbiddID0gdGhpcy5tYWtlU3R5bGVzaGVldEluZXJ0KGMucHJvcHNbJ2NoaWxkcmVuJ10pXG4gICAgICB9XG4gICAgICByZXR1cm4gY1xuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgc3R5bGVzLFxuICAgICAgYW1wUGF0aCxcbiAgICAgIGluQW1wTW9kZSxcbiAgICAgIGh5YnJpZEFtcCxcbiAgICAgIGNhbm9uaWNhbEJhc2UsXG4gICAgICBfX05FWFRfREFUQV9fLFxuICAgICAgZGFuZ2Vyb3VzQXNQYXRoLFxuICAgICAgaGVhZFRhZ3MsXG4gICAgICB1bnN0YWJsZV9ydW50aW1lSlMsXG4gICAgfSA9IHRoaXMuY29udGV4dFxuICAgIGNvbnN0IGRpc2FibGVSdW50aW1lSlMgPSB1bnN0YWJsZV9ydW50aW1lSlMgPT09IGZhbHNlXG5cbiAgICB0aGlzLmNvbnRleHQuZG9jQ29tcG9uZW50c1JlbmRlcmVkLkhlYWQgPSB0cnVlXG5cbiAgICBsZXQgeyBoZWFkIH0gPSB0aGlzLmNvbnRleHRcbiAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgLy8gc2hvdyBhIHdhcm5pbmcgaWYgSGVhZCBjb250YWlucyA8dGl0bGU+IChvbmx5IGluIGRldmVsb3BtZW50KVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBjaGlsZHJlbiA9IFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgKGNoaWxkOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3QgaXNSZWFjdEhlbG1ldCA9IGNoaWxkPy5wcm9wcz8uWydkYXRhLXJlYWN0LWhlbG1ldCddXG4gICAgICAgIGlmICghaXNSZWFjdEhlbG1ldCkge1xuICAgICAgICAgIGlmIChjaGlsZD8udHlwZSA9PT0gJ3RpdGxlJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBcIldhcm5pbmc6IDx0aXRsZT4gc2hvdWxkIG5vdCBiZSB1c2VkIGluIF9kb2N1bWVudC5qcydzIDxIZWFkPi4gaHR0cHM6Ly9lcnIuc2gvbmV4dC5qcy9uby1kb2N1bWVudC10aXRsZVwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgIGNoaWxkPy50eXBlID09PSAnbWV0YScgJiZcbiAgICAgICAgICAgIGNoaWxkPy5wcm9wcz8ubmFtZSA9PT0gJ3ZpZXdwb3J0J1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBcIldhcm5pbmc6IHZpZXdwb3J0IG1ldGEgdGFncyBzaG91bGQgbm90IGJlIHVzZWQgaW4gX2RvY3VtZW50LmpzJ3MgPEhlYWQ+LiBodHRwczovL2Vyci5zaC9uZXh0LmpzL25vLWRvY3VtZW50LXZpZXdwb3J0LW1ldGFcIlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hpbGRcbiAgICAgIH0pXG4gICAgICBpZiAodGhpcy5wcm9wcy5jcm9zc09yaWdpbilcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdXYXJuaW5nOiBgSGVhZGAgYXR0cmlidXRlIGBjcm9zc09yaWdpbmAgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9lcnIuc2gvbmV4dC5qcy9kb2MtY3Jvc3NvcmlnaW4tZGVwcmVjYXRlZCdcbiAgICAgICAgKVxuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfRk9OVFMgJiYgIWluQW1wTW9kZSkge1xuICAgICAgY2hpbGRyZW4gPSB0aGlzLm1ha2VTdHlsZXNoZWV0SW5lcnQoY2hpbGRyZW4pXG4gICAgfVxuXG4gICAgbGV0IGhhc0FtcGh0bWxSZWwgPSBmYWxzZVxuICAgIGxldCBoYXNDYW5vbmljYWxSZWwgPSBmYWxzZVxuXG4gICAgLy8gc2hvdyB3YXJuaW5nIGFuZCByZW1vdmUgY29uZmxpY3RpbmcgYW1wIGhlYWQgdGFnc1xuICAgIGhlYWQgPSBSZWFjdC5DaGlsZHJlbi5tYXAoaGVhZCB8fCBbXSwgKGNoaWxkKSA9PiB7XG4gICAgICBpZiAoIWNoaWxkKSByZXR1cm4gY2hpbGRcbiAgICAgIGNvbnN0IHsgdHlwZSwgcHJvcHMgfSA9IGNoaWxkXG4gICAgICBpZiAoaW5BbXBNb2RlKSB7XG4gICAgICAgIGxldCBiYWRQcm9wOiBzdHJpbmcgPSAnJ1xuXG4gICAgICAgIGlmICh0eXBlID09PSAnbWV0YScgJiYgcHJvcHMubmFtZSA9PT0gJ3ZpZXdwb3J0Jykge1xuICAgICAgICAgIGJhZFByb3AgPSAnbmFtZT1cInZpZXdwb3J0XCInXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2xpbmsnICYmIHByb3BzLnJlbCA9PT0gJ2Nhbm9uaWNhbCcpIHtcbiAgICAgICAgICBoYXNDYW5vbmljYWxSZWwgPSB0cnVlXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3NjcmlwdCcpIHtcbiAgICAgICAgICAvLyBvbmx5IGJsb2NrIGlmXG4gICAgICAgICAgLy8gMS4gaXQgaGFzIGEgc3JjIGFuZCBpc24ndCBwb2ludGluZyB0byBhbXBwcm9qZWN0J3MgQ0ROXG4gICAgICAgICAgLy8gMi4gaXQgaXMgdXNpbmcgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwgd2l0aG91dCBhIHR5cGUgb3JcbiAgICAgICAgICAvLyBhIHR5cGUgb2YgdGV4dC9qYXZhc2NyaXB0XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgKHByb3BzLnNyYyAmJiBwcm9wcy5zcmMuaW5kZXhPZignYW1wcHJvamVjdCcpIDwgLTEpIHx8XG4gICAgICAgICAgICAocHJvcHMuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwgJiZcbiAgICAgICAgICAgICAgKCFwcm9wcy50eXBlIHx8IHByb3BzLnR5cGUgPT09ICd0ZXh0L2phdmFzY3JpcHQnKSlcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGJhZFByb3AgPSAnPHNjcmlwdCdcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHByb3BzKS5mb3JFYWNoKChwcm9wKSA9PiB7XG4gICAgICAgICAgICAgIGJhZFByb3AgKz0gYCAke3Byb3B9PVwiJHtwcm9wc1twcm9wXX1cImBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBiYWRQcm9wICs9ICcvPidcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYmFkUHJvcCkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBGb3VuZCBjb25mbGljdGluZyBhbXAgdGFnIFwiJHtjaGlsZC50eXBlfVwiIHdpdGggY29uZmxpY3RpbmcgcHJvcCAke2JhZFByb3B9IGluICR7X19ORVhUX0RBVEFfXy5wYWdlfS4gaHR0cHM6Ly9lcnIuc2gvbmV4dC5qcy9jb25mbGljdGluZy1hbXAtdGFnYFxuICAgICAgICAgIClcbiAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBub24tYW1wIG1vZGVcbiAgICAgICAgaWYgKHR5cGUgPT09ICdsaW5rJyAmJiBwcm9wcy5yZWwgPT09ICdhbXBodG1sJykge1xuICAgICAgICAgIGhhc0FtcGh0bWxSZWwgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBjaGlsZFxuICAgIH0pXG5cbiAgICAvLyB0cnkgdG8gcGFyc2Ugc3R5bGVzIGZyb20gZnJhZ21lbnQgZm9yIGJhY2t3YXJkcyBjb21wYXRcbiAgICBjb25zdCBjdXJTdHlsZXM6IFJlYWN0LlJlYWN0RWxlbWVudFtdID0gQXJyYXkuaXNBcnJheShzdHlsZXMpXG4gICAgICA/IChzdHlsZXMgYXMgUmVhY3QuUmVhY3RFbGVtZW50W10pXG4gICAgICA6IFtdXG4gICAgaWYgKFxuICAgICAgaW5BbXBNb2RlICYmXG4gICAgICBzdHlsZXMgJiZcbiAgICAgIC8vIEB0cy1pZ25vcmUgUHJvcGVydHkgJ3Byb3BzJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlIFJlYWN0RWxlbWVudFxuICAgICAgc3R5bGVzLnByb3BzICYmXG4gICAgICAvLyBAdHMtaWdub3JlIFByb3BlcnR5ICdwcm9wcycgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSBSZWFjdEVsZW1lbnRcbiAgICAgIEFycmF5LmlzQXJyYXkoc3R5bGVzLnByb3BzLmNoaWxkcmVuKVxuICAgICkge1xuICAgICAgY29uc3QgaGFzU3R5bGVzID0gKGVsOiBSZWFjdC5SZWFjdEVsZW1lbnQpID0+XG4gICAgICAgIGVsPy5wcm9wcz8uZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw/Ll9faHRtbFxuICAgICAgLy8gQHRzLWlnbm9yZSBQcm9wZXJ0eSAncHJvcHMnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgUmVhY3RFbGVtZW50XG4gICAgICBzdHlsZXMucHJvcHMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQ6IFJlYWN0LlJlYWN0RWxlbWVudCkgPT4ge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZCkpIHtcbiAgICAgICAgICBjaGlsZC5mb3JFYWNoKChlbCkgPT4gaGFzU3R5bGVzKGVsKSAmJiBjdXJTdHlsZXMucHVzaChlbCkpXG4gICAgICAgIH0gZWxzZSBpZiAoaGFzU3R5bGVzKGNoaWxkKSkge1xuICAgICAgICAgIGN1clN0eWxlcy5wdXNoKGNoaWxkKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGZpbGVzOiBEb2N1bWVudEZpbGVzID0gZ2V0RG9jdW1lbnRGaWxlcyhcbiAgICAgIHRoaXMuY29udGV4dC5idWlsZE1hbmlmZXN0LFxuICAgICAgdGhpcy5jb250ZXh0Ll9fTkVYVF9EQVRBX18ucGFnZVxuICAgIClcbiAgICByZXR1cm4gKFxuICAgICAgPGhlYWQgey4uLnRoaXMucHJvcHN9PlxuICAgICAgICB7dGhpcy5jb250ZXh0LmlzRGV2ZWxvcG1lbnQgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8c3R5bGVcbiAgICAgICAgICAgICAgZGF0YS1uZXh0LWhpZGUtZm91Y1xuICAgICAgICAgICAgICBkYXRhLWFtcGRldm1vZGU9e2luQW1wTW9kZSA/ICd0cnVlJyA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICBfX2h0bWw6IGBib2R5e2Rpc3BsYXk6bm9uZX1gLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxub3NjcmlwdFxuICAgICAgICAgICAgICBkYXRhLW5leHQtaGlkZS1mb3VjXG4gICAgICAgICAgICAgIGRhdGEtYW1wZGV2bW9kZT17aW5BbXBNb2RlID8gJ3RydWUnIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3R5bGVcbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgICAgX19odG1sOiBgYm9keXtkaXNwbGF5OmJsb2NrfWAsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvbm9zY3JpcHQ+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAge2hlYWR9XG4gICAgICAgIHtpbkFtcE1vZGUgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLG1pbmltdW0tc2NhbGU9MSxpbml0aWFsLXNjYWxlPTFcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHshaGFzQ2Fub25pY2FsUmVsICYmIChcbiAgICAgICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgICAgICByZWw9XCJjYW5vbmljYWxcIlxuICAgICAgICAgICAgICAgIGhyZWY9e2Nhbm9uaWNhbEJhc2UgKyBjbGVhbkFtcFBhdGgoZGFuZ2Vyb3VzQXNQYXRoKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7LyogaHR0cHM6Ly93d3cuYW1wcHJvamVjdC5vcmcvZG9jcy9mdW5kYW1lbnRhbHMvb3B0aW1pemVfYW1wI29wdGltaXplLXRoZS1hbXAtcnVudGltZS1sb2FkaW5nICovfVxuICAgICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgICAgIGFzPVwic2NyaXB0XCJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuLmFtcHByb2plY3Qub3JnL3YwLmpzXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7LyogQWRkIGN1c3RvbSBzdHlsZXMgYmVmb3JlIEFNUCBzdHlsZXMgdG8gcHJldmVudCBhY2NpZGVudGFsIG92ZXJyaWRlcyAqL31cbiAgICAgICAgICAgIHtzdHlsZXMgJiYgKFxuICAgICAgICAgICAgICA8c3R5bGVcbiAgICAgICAgICAgICAgICBhbXAtY3VzdG9tPVwiXCJcbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgICAgX19odG1sOiBjdXJTdHlsZXNcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgoc3R5bGUpID0+IHN0eWxlLnByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLl9faHRtbClcbiAgICAgICAgICAgICAgICAgICAgLmpvaW4oJycpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXC9cXCojIHNvdXJjZU1hcHBpbmdVUkw9LipcXCpcXC8vZywgJycpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXC9cXCpAIHNvdXJjZVVSTD0uKj9cXCpcXC8vZywgJycpLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPHN0eWxlXG4gICAgICAgICAgICAgIGFtcC1ib2lsZXJwbGF0ZT1cIlwiXG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgX19odG1sOiBgYm9keXstd2Via2l0LWFuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RoOy1tb3otYW5pbWF0aW9uOi1hbXAtc3RhcnQgOHMgc3RlcHMoMSxlbmQpIDBzIDEgbm9ybWFsIGJvdGg7LW1zLWFuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RoO2FuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RofUAtd2Via2l0LWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1ALW1vei1rZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QC1tcy1rZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QC1vLWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1Aa2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fWAsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPG5vc2NyaXB0PlxuICAgICAgICAgICAgICA8c3R5bGVcbiAgICAgICAgICAgICAgICBhbXAtYm9pbGVycGxhdGU9XCJcIlxuICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgICBfX2h0bWw6IGBib2R5ey13ZWJraXQtYW5pbWF0aW9uOm5vbmU7LW1vei1hbmltYXRpb246bm9uZTstbXMtYW5pbWF0aW9uOm5vbmU7YW5pbWF0aW9uOm5vbmV9YCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9ub3NjcmlwdD5cbiAgICAgICAgICAgIDxzY3JpcHQgYXN5bmMgc3JjPVwiaHR0cHM6Ly9jZG4uYW1wcHJvamVjdC5vcmcvdjAuanNcIiAvPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgICB7IWluQW1wTW9kZSAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIHshaGFzQW1waHRtbFJlbCAmJiBoeWJyaWRBbXAgJiYgKFxuICAgICAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgICAgIHJlbD1cImFtcGh0bWxcIlxuICAgICAgICAgICAgICAgIGhyZWY9e2Nhbm9uaWNhbEJhc2UgKyBnZXRBbXBQYXRoKGFtcFBhdGgsIGRhbmdlcm91c0FzUGF0aCl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge3Byb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9GT05UU1xuICAgICAgICAgICAgICA/IHRoaXMubWFrZVN0eWxlc2hlZXRJbmVydCh0aGlzLmdldENzc0xpbmtzKGZpbGVzKSlcbiAgICAgICAgICAgICAgOiB0aGlzLmdldENzc0xpbmtzKGZpbGVzKX1cbiAgICAgICAgICAgIDxub3NjcmlwdCBkYXRhLW4tY3NzIC8+XG4gICAgICAgICAgICB7IWRpc2FibGVSdW50aW1lSlMgJiYgdGhpcy5nZXRQcmVsb2FkRHluYW1pY0NodW5rcygpfVxuICAgICAgICAgICAgeyFkaXNhYmxlUnVudGltZUpTICYmIHRoaXMuZ2V0UHJlbG9hZE1haW5MaW5rcyhmaWxlcyl9XG4gICAgICAgICAgICB7dGhpcy5jb250ZXh0LmlzRGV2ZWxvcG1lbnQgJiYgKFxuICAgICAgICAgICAgICAvLyB0aGlzIGVsZW1lbnQgaXMgdXNlZCB0byBtb3VudCBkZXZlbG9wbWVudCBzdHlsZXMgc28gdGhlXG4gICAgICAgICAgICAgIC8vIG9yZGVyaW5nIG1hdGNoZXMgcHJvZHVjdGlvblxuICAgICAgICAgICAgICAvLyAoYnkgZGVmYXVsdCwgc3R5bGUtbG9hZGVyIGluamVjdHMgYXQgdGhlIGJvdHRvbSBvZiA8aGVhZCAvPilcbiAgICAgICAgICAgICAgPG5vc2NyaXB0IGlkPVwiX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fXCIgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7c3R5bGVzIHx8IG51bGx9XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICAgIHtSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCB7fSwgLi4uKGhlYWRUYWdzIHx8IFtdKSl9XG4gICAgICA8L2hlYWQ+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBNYWluKCkge1xuICBjb25zdCB7IGluQW1wTW9kZSwgaHRtbCwgZG9jQ29tcG9uZW50c1JlbmRlcmVkIH0gPSB1c2VDb250ZXh0KFxuICAgIERvY3VtZW50Q29tcG9uZW50Q29udGV4dFxuICApXG5cbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkLk1haW4gPSB0cnVlXG5cbiAgaWYgKGluQW1wTW9kZSkgcmV0dXJuIDw+e0FNUF9SRU5ERVJfVEFSR0VUfTwvPlxuICByZXR1cm4gPGRpdiBpZD1cIl9fbmV4dFwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogaHRtbCB9fSAvPlxufVxuXG5leHBvcnQgY2xhc3MgTmV4dFNjcmlwdCBleHRlbmRzIENvbXBvbmVudDxPcmlnaW5Qcm9wcz4ge1xuICBzdGF0aWMgY29udGV4dFR5cGUgPSBEb2N1bWVudENvbXBvbmVudENvbnRleHRcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG5vbmNlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNyb3NzT3JpZ2luOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9XG5cbiAgY29udGV4dCE6IFJlYWN0LkNvbnRleHRUeXBlPHR5cGVvZiBEb2N1bWVudENvbXBvbmVudENvbnRleHQ+XG5cbiAgLy8gU291cmNlOiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9zYW10aG9yLzY0YjExNGU0YTRmNTM5OTE1YTk1YjkxZmZkMzQwYWNjXG4gIHN0YXRpYyBzYWZhcmlOb21vZHVsZUZpeCA9XG4gICAgJyFmdW5jdGlvbigpe3ZhciBlPWRvY3VtZW50LHQ9ZS5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO2lmKCEoXCJub01vZHVsZVwiaW4gdCkmJlwib25iZWZvcmVsb2FkXCJpbiB0KXt2YXIgbj0hMTtlLmFkZEV2ZW50TGlzdGVuZXIoXCJiZWZvcmVsb2FkXCIsZnVuY3Rpb24oZSl7aWYoZS50YXJnZXQ9PT10KW49ITA7ZWxzZSBpZighZS50YXJnZXQuaGFzQXR0cmlidXRlKFwibm9tb2R1bGVcIil8fCFuKXJldHVybjtlLnByZXZlbnREZWZhdWx0KCl9LCEwKSx0LnR5cGU9XCJtb2R1bGVcIix0LnNyYz1cIi5cIixlLmhlYWQuYXBwZW5kQ2hpbGQodCksdC5yZW1vdmUoKX19KCk7J1xuXG4gIGdldER5bmFtaWNDaHVua3MoZmlsZXM6IERvY3VtZW50RmlsZXMpIHtcbiAgICBjb25zdCB7XG4gICAgICBkeW5hbWljSW1wb3J0cyxcbiAgICAgIGFzc2V0UHJlZml4LFxuICAgICAgaXNEZXZlbG9wbWVudCxcbiAgICAgIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nLFxuICAgIH0gPSB0aGlzLmNvbnRleHRcblxuICAgIHJldHVybiBkZWR1cGUoZHluYW1pY0ltcG9ydHMpLm1hcCgoYnVuZGxlKSA9PiB7XG4gICAgICBsZXQgbW9kZXJuUHJvcHMgPSB7fVxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9NT0RFUk5fQlVJTEQpIHtcbiAgICAgICAgbW9kZXJuUHJvcHMgPSBidW5kbGUuZmlsZS5lbmRzV2l0aCgnLm1vZHVsZS5qcycpXG4gICAgICAgICAgPyB7IHR5cGU6ICdtb2R1bGUnIH1cbiAgICAgICAgICA6IHsgbm9Nb2R1bGU6IHRydWUgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWJ1bmRsZS5maWxlLmVuZHNXaXRoKCcuanMnKSB8fCBmaWxlcy5hbGxGaWxlcy5pbmNsdWRlcyhidW5kbGUuZmlsZSkpXG4gICAgICAgIHJldHVybiBudWxsXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxzY3JpcHRcbiAgICAgICAgICBhc3luYz17IWlzRGV2ZWxvcG1lbnR9XG4gICAgICAgICAga2V5PXtidW5kbGUuZmlsZX1cbiAgICAgICAgICBzcmM9e2Ake2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShcbiAgICAgICAgICAgIGJ1bmRsZS5maWxlXG4gICAgICAgICAgKX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWB9XG4gICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgY3Jvc3NPcmlnaW49e1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgICAgfVxuICAgICAgICAgIHsuLi5tb2Rlcm5Qcm9wc31cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgZ2V0U2NyaXB0cyhmaWxlczogRG9jdW1lbnRGaWxlcykge1xuICAgIGNvbnN0IHtcbiAgICAgIGFzc2V0UHJlZml4LFxuICAgICAgYnVpbGRNYW5pZmVzdCxcbiAgICAgIGlzRGV2ZWxvcG1lbnQsXG4gICAgICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyxcbiAgICB9ID0gdGhpcy5jb250ZXh0XG5cbiAgICBjb25zdCBub3JtYWxTY3JpcHRzID0gZmlsZXMuYWxsRmlsZXMuZmlsdGVyKChmaWxlKSA9PiBmaWxlLmVuZHNXaXRoKCcuanMnKSlcbiAgICBjb25zdCBsb3dQcmlvcml0eVNjcmlwdHMgPSBidWlsZE1hbmlmZXN0Lmxvd1ByaW9yaXR5RmlsZXM/LmZpbHRlcigoZmlsZSkgPT5cbiAgICAgIGZpbGUuZW5kc1dpdGgoJy5qcycpXG4gICAgKVxuXG4gICAgcmV0dXJuIFsuLi5ub3JtYWxTY3JpcHRzLCAuLi5sb3dQcmlvcml0eVNjcmlwdHNdLm1hcCgoZmlsZSkgPT4ge1xuICAgICAgbGV0IG1vZGVyblByb3BzID0ge31cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfTU9ERVJOX0JVSUxEKSB7XG4gICAgICAgIG1vZGVyblByb3BzID0gZmlsZS5lbmRzV2l0aCgnLm1vZHVsZS5qcycpXG4gICAgICAgICAgPyB7IHR5cGU6ICdtb2R1bGUnIH1cbiAgICAgICAgICA6IHsgbm9Nb2R1bGU6IHRydWUgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8c2NyaXB0XG4gICAgICAgICAga2V5PXtmaWxlfVxuICAgICAgICAgIHNyYz17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgICAgZmlsZVxuICAgICAgICAgICl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gfVxuICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgIGFzeW5jPXshaXNEZXZlbG9wbWVudH1cbiAgICAgICAgICBjcm9zc09yaWdpbj17XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICB9XG4gICAgICAgICAgey4uLm1vZGVyblByb3BzfVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIH0pXG4gIH1cblxuICBnZXRQb2x5ZmlsbFNjcmlwdHMoKSB7XG4gICAgLy8gcG9seWZpbGxzLmpzIGhhcyB0byBiZSByZW5kZXJlZCBhcyBub21vZHVsZSB3aXRob3V0IGFzeW5jXG4gICAgLy8gSXQgYWxzbyBoYXMgdG8gYmUgdGhlIGZpcnN0IHNjcmlwdCB0byBsb2FkXG4gICAgY29uc3Qge1xuICAgICAgYXNzZXRQcmVmaXgsXG4gICAgICBidWlsZE1hbmlmZXN0LFxuICAgICAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcsXG4gICAgfSA9IHRoaXMuY29udGV4dFxuXG4gICAgcmV0dXJuIGJ1aWxkTWFuaWZlc3QucG9seWZpbGxGaWxlc1xuICAgICAgLmZpbHRlcihcbiAgICAgICAgKHBvbHlmaWxsKSA9PlxuICAgICAgICAgIHBvbHlmaWxsLmVuZHNXaXRoKCcuanMnKSAmJiAhcG9seWZpbGwuZW5kc1dpdGgoJy5tb2R1bGUuanMnKVxuICAgICAgKVxuICAgICAgLm1hcCgocG9seWZpbGwpID0+IChcbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIGtleT17cG9seWZpbGx9XG4gICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgY3Jvc3NPcmlnaW49e1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgICAgfVxuICAgICAgICAgIG5vTW9kdWxlPXt0cnVlfVxuICAgICAgICAgIHNyYz17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7cG9seWZpbGx9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gfVxuICAgICAgICAvPlxuICAgICAgKSlcbiAgfVxuXG4gIHN0YXRpYyBnZXRJbmxpbmVTY3JpcHRTb3VyY2UoZG9jdW1lbnRQcm9wczogRG9jdW1lbnRQcm9wcyk6IHN0cmluZyB7XG4gICAgY29uc3QgeyBfX05FWFRfREFUQV9fIH0gPSBkb2N1bWVudFByb3BzXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeShfX05FWFRfREFUQV9fKVxuICAgICAgcmV0dXJuIGh0bWxFc2NhcGVKc29uU3RyaW5nKGRhdGEpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLm1lc3NhZ2UuaW5kZXhPZignY2lyY3VsYXIgc3RydWN0dXJlJykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBDaXJjdWxhciBzdHJ1Y3R1cmUgaW4gXCJnZXRJbml0aWFsUHJvcHNcIiByZXN1bHQgb2YgcGFnZSBcIiR7X19ORVhUX0RBVEFfXy5wYWdlfVwiLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9jaXJjdWxhci1zdHJ1Y3R1cmVgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBhc3NldFByZWZpeCxcbiAgICAgIGluQW1wTW9kZSxcbiAgICAgIGJ1aWxkTWFuaWZlc3QsXG4gICAgICB1bnN0YWJsZV9ydW50aW1lSlMsXG4gICAgICBkb2NDb21wb25lbnRzUmVuZGVyZWQsXG4gICAgICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyxcbiAgICB9ID0gdGhpcy5jb250ZXh0XG4gICAgY29uc3QgZGlzYWJsZVJ1bnRpbWVKUyA9IHVuc3RhYmxlX3J1bnRpbWVKUyA9PT0gZmFsc2VcblxuICAgIGRvY0NvbXBvbmVudHNSZW5kZXJlZC5OZXh0U2NyaXB0ID0gdHJ1ZVxuXG4gICAgaWYgKGluQW1wTW9kZSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH1cblxuICAgICAgY29uc3QgYW1wRGV2RmlsZXMgPSBbXG4gICAgICAgIC4uLmJ1aWxkTWFuaWZlc3QuZGV2RmlsZXMsXG4gICAgICAgIC4uLmJ1aWxkTWFuaWZlc3QuYW1wRGV2RmlsZXMsXG4gICAgICBdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAge2Rpc2FibGVSdW50aW1lSlMgPyBudWxsIDogKFxuICAgICAgICAgICAgPHNjcmlwdFxuICAgICAgICAgICAgICBpZD1cIl9fTkVYVF9EQVRBX19cIlxuICAgICAgICAgICAgICB0eXBlPVwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgICAgICBjcm9zc09yaWdpbj17XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICBfX2h0bWw6IE5leHRTY3JpcHQuZ2V0SW5saW5lU2NyaXB0U291cmNlKHRoaXMuY29udGV4dCksXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGRhdGEtYW1wZGV2bW9kZVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHthbXBEZXZGaWxlcy5tYXAoKGZpbGUpID0+IChcbiAgICAgICAgICAgIDxzY3JpcHRcbiAgICAgICAgICAgICAga2V5PXtmaWxlfVxuICAgICAgICAgICAgICBzcmM9e2Ake2Fzc2V0UHJlZml4fS9fbmV4dC8ke2ZpbGV9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gfVxuICAgICAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICAgICAgY3Jvc3NPcmlnaW49e1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRhdGEtYW1wZGV2bW9kZVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC8+XG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmNyb3NzT3JpZ2luKVxuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ1dhcm5pbmc6IGBOZXh0U2NyaXB0YCBhdHRyaWJ1dGUgYGNyb3NzT3JpZ2luYCBpcyBkZXByZWNhdGVkLiBodHRwczovL2Vyci5zaC9uZXh0LmpzL2RvYy1jcm9zc29yaWdpbi1kZXByZWNhdGVkJ1xuICAgICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgZmlsZXM6IERvY3VtZW50RmlsZXMgPSBnZXREb2N1bWVudEZpbGVzKFxuICAgICAgdGhpcy5jb250ZXh0LmJ1aWxkTWFuaWZlc3QsXG4gICAgICB0aGlzLmNvbnRleHQuX19ORVhUX0RBVEFfXy5wYWdlXG4gICAgKVxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICB7IWRpc2FibGVSdW50aW1lSlMgJiYgYnVpbGRNYW5pZmVzdC5kZXZGaWxlc1xuICAgICAgICAgID8gYnVpbGRNYW5pZmVzdC5kZXZGaWxlcy5tYXAoKGZpbGU6IHN0cmluZykgPT4gKFxuICAgICAgICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgICAgICAga2V5PXtmaWxlfVxuICAgICAgICAgICAgICAgIHNyYz17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgICAgICAgICAgZmlsZVxuICAgICAgICAgICAgICAgICl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gfVxuICAgICAgICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgICAgICAgIGNyb3NzT3JpZ2luPXtcbiAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgOiBudWxsfVxuICAgICAgICB7ZGlzYWJsZVJ1bnRpbWVKUyA/IG51bGwgOiAoXG4gICAgICAgICAgPHNjcmlwdFxuICAgICAgICAgICAgaWQ9XCJfX05FWFRfREFUQV9fXCJcbiAgICAgICAgICAgIHR5cGU9XCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgICAgY3Jvc3NPcmlnaW49e1xuICAgICAgICAgICAgICB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgIF9faHRtbDogTmV4dFNjcmlwdC5nZXRJbmxpbmVTY3JpcHRTb3VyY2UodGhpcy5jb250ZXh0KSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAge3Byb2Nlc3MuZW52Ll9fTkVYVF9NT0RFUk5fQlVJTEQgJiYgIWRpc2FibGVSdW50aW1lSlMgPyAoXG4gICAgICAgICAgPHNjcmlwdFxuICAgICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgICBjcm9zc09yaWdpbj17XG4gICAgICAgICAgICAgIHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbm9Nb2R1bGU9e3RydWV9XG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICBfX2h0bWw6IE5leHRTY3JpcHQuc2FmYXJpTm9tb2R1bGVGaXgsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgICB7IWRpc2FibGVSdW50aW1lSlMgJiYgdGhpcy5nZXRQb2x5ZmlsbFNjcmlwdHMoKX1cbiAgICAgICAge2Rpc2FibGVSdW50aW1lSlMgPyBudWxsIDogdGhpcy5nZXREeW5hbWljQ2h1bmtzKGZpbGVzKX1cbiAgICAgICAge2Rpc2FibGVSdW50aW1lSlMgPyBudWxsIDogdGhpcy5nZXRTY3JpcHRzKGZpbGVzKX1cbiAgICAgIDwvPlxuICAgIClcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRBbXBQYXRoKGFtcFBhdGg6IHN0cmluZywgYXNQYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gYW1wUGF0aCB8fCBgJHthc1BhdGh9JHthc1BhdGguaW5jbHVkZXMoJz8nKSA/ICcmJyA6ICc/J31hbXA9MWBcbn1cbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuaHRtbEVzY2FwZUpzb25TdHJpbmc9aHRtbEVzY2FwZUpzb25TdHJpbmc7Ly8gVGhpcyB1dGlsaXR5IGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS96ZXJ0b3NoL2h0bWxlc2NhcGVcbi8vIExpY2Vuc2U6IGh0dHBzOi8vZ2l0aHViLmNvbS96ZXJ0b3NoL2h0bWxlc2NhcGUvYmxvYi8wNTI3Y2E3MTU2YTUyNGQyNTYxMDFiYjMxMGE5Zjk3MGY2MzA3OGFkL0xJQ0VOU0VcbmNvbnN0IEVTQ0FQRV9MT09LVVA9eycmJzonXFxcXHUwMDI2JywnPic6J1xcXFx1MDAzZScsJzwnOidcXFxcdTAwM2MnLCdcXHUyMDI4JzonXFxcXHUyMDI4JywnXFx1MjAyOSc6J1xcXFx1MjAyOSd9O2NvbnN0IEVTQ0FQRV9SRUdFWD0vWyY+PFxcdTIwMjhcXHUyMDI5XS9nO2Z1bmN0aW9uIGh0bWxFc2NhcGVKc29uU3RyaW5nKHN0cil7cmV0dXJuIHN0ci5yZXBsYWNlKEVTQ0FQRV9SRUdFWCxtYXRjaD0+RVNDQVBFX0xPT0tVUFttYXRjaF0pO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWh0bWxlc2NhcGUuanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2RvY3VtZW50JylcbiIsImltcG9ydCBEb2N1bWVudCwge0h0bWwsIEhlYWQsIE1haW4sIE5leHRTY3JpcHR9IGZyb20gJ25leHQvZG9jdW1lbnQnXHJcbmNsYXNzIE15RG9jdW1lbnQgZXh0ZW5kcyBEb2N1bWVudHtcclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPEh0bWwgbGFuZz1cImVuXCI+XHJcbiAgICAgICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiQXRodGhhbmF5YWthIEZvb2RzIFdlYiBTeXN0ZW1cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA0LjUuMy9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2NvZGUuanF1ZXJ5LmNvbS9qcXVlcnktMy41LjEuc2xpbS5taW4uanNcIj48L3NjcmlwdD5cclxuICAgICAgICAgICAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwQDQuNS4zL2Rpc3QvanMvYm9vdHN0cmFwLmJ1bmRsZS5taW4uanNcIj48L3NjcmlwdD5cclxuICAgICAgICAgICAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8va2l0LmZvbnRhd2Vzb21lLmNvbS9hMDc2ZDA1Mzk5LmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgICAgICA8Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICA8TWFpbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOZXh0U2NyaXB0IC8+XHJcbiAgICAgICAgICAgICAgICA8L2JvZHk+XHJcbiAgICAgICAgICAgIDwvSHRtbD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15RG9jdW1lbnQiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3NlcnZlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9