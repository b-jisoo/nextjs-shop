"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "/_error";
exports.ids = ["/_error"];
exports.modules = {

/***/ "./node_modules/@swc/helpers/lib/_interop_require_default.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@swc/helpers/lib/_interop_require_default.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"default\", ({\n    enumerable: true,\n    get: function() {\n        return _interopRequireDefault;\n    }\n}));\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2xpYi9faW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRiwyQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Bzd2MvaGVscGVycy9saWIvX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0LmpzPzliN2MiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJkZWZhdWx0XCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0O1xuICAgIH1cbn0pO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@swc/helpers/lib/_interop_require_default.js\n");

/***/ }),

/***/ "./node_modules/next/dist/pages/_error.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/pages/_error.js ***!
  \************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\n\nvar _interop_require_default = (__webpack_require__(/*! @swc/helpers/lib/_interop_require_default.js */ \"./node_modules/@swc/helpers/lib/_interop_require_default.js\")[\"default\"]);\n\nvar _react = _interop_require_default(__webpack_require__(/*! react */ \"react\"));\n\nvar _head = _interop_require_default(__webpack_require__(/*! ../shared/lib/head */ \"../shared/lib/head\"));\n\nconst statusCodes = {\n  400: 'Bad Request',\n  404: 'This page could not be found',\n  405: 'Method Not Allowed',\n  500: 'Internal Server Error'\n};\n\nfunction _getInitialProps({\n  res,\n  err\n}) {\n  const statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;\n  return {\n    statusCode\n  };\n}\n\nconst styles = {\n  error: {\n    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, \"Segoe UI\", \"Fira Sans\", Avenir, \"Helvetica Neue\", \"Lucida Grande\", sans-serif',\n    height: '100vh',\n    textAlign: 'center',\n    display: 'flex',\n    flexDirection: 'column',\n    alignItems: 'center',\n    justifyContent: 'center'\n  },\n  desc: {\n    display: 'inline-block',\n    textAlign: 'left',\n    lineHeight: '49px',\n    height: '49px',\n    verticalAlign: 'middle'\n  },\n  h1: {\n    display: 'inline-block',\n    margin: 0,\n    marginRight: '20px',\n    padding: '0 23px 0 0',\n    fontSize: '24px',\n    fontWeight: 500,\n    verticalAlign: 'top',\n    lineHeight: '49px'\n  },\n  h2: {\n    fontSize: '14px',\n    fontWeight: 'normal',\n    lineHeight: '49px',\n    margin: 0,\n    padding: 0\n  }\n};\n\nvar _Component;\n\nclass Error extends (_Component = _react.default.Component) {\n  render() {\n    const {\n      statusCode,\n      withDarkMode = true\n    } = this.props;\n    const title = this.props.title || statusCodes[statusCode] || 'An unexpected error has occurred';\n    return /*#__PURE__*/_react.default.createElement(\"div\", {\n      style: styles.error\n    }, /*#__PURE__*/_react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement(\"title\", null, statusCode ? `${statusCode}: ${title}` : 'Application error: a client-side exception has occurred')), /*#__PURE__*/_react.default.createElement(\"div\", null, /*#__PURE__*/_react.default.createElement(\"style\", {\n      dangerouslySetInnerHTML: {\n        __html: `\n                body { margin: 0; color: #000; background: #fff; }\n                .next-error-h1 {\n                  border-right: 1px solid rgba(0, 0, 0, .3);\n                }\n\n                ${withDarkMode ? `@media (prefers-color-scheme: dark) {\n                  body { color: #fff; background: #000; }\n                  .next-error-h1 {\n                    border-right: 1px solid rgba(255, 255, 255, .3);\n                  }\n                }` : ''}`\n      }\n    }), statusCode ? /*#__PURE__*/_react.default.createElement(\"h1\", {\n      className: \"next-error-h1\",\n      style: styles.h1\n    }, statusCode) : null, /*#__PURE__*/_react.default.createElement(\"div\", {\n      style: styles.desc\n    }, /*#__PURE__*/_react.default.createElement(\"h2\", {\n      style: styles.h2\n    }, this.props.title || statusCode ? title : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, \"Application error: a client-side exception has occurred (see the browser console for more information)\"), \".\"))));\n  }\n\n}\n\nError.displayName = 'ErrorPage';\nError.getInitialProps = _getInitialProps;\nError.origGetInitialProps = _getInitialProps;\nexports[\"default\"] = Error;\n\nif ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {\n  Object.defineProperty(exports.default, '__esModule', {\n    value: true\n  });\n  Object.assign(exports.default, exports);\n  module.exports = exports.default;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19lcnJvci5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFDYkEsOENBQTZDO0VBQ3pDRyxLQUFLLEVBQUU7QUFEa0MsQ0FBN0M7QUFHQUQsa0JBQUEsR0FBa0IsS0FBSyxDQUF2Qjs7QUFDQSxJQUFJRyx3QkFBd0IsR0FBR0MsbUpBQS9COztBQUNBLElBQUlDLE1BQU0sR0FBR0Ysd0JBQXdCLENBQUNDLG1CQUFPLENBQUMsb0JBQUQsQ0FBUixDQUFyQzs7QUFDQSxJQUFJRSxLQUFLLEdBQUdILHdCQUF3QixDQUFDQyxtQkFBTyxDQUFDLDhDQUFELENBQVIsQ0FBcEM7O0FBQ0EsTUFBTUcsV0FBVyxHQUFHO0VBQ2hCLEtBQUssYUFEVztFQUVoQixLQUFLLDhCQUZXO0VBR2hCLEtBQUssb0JBSFc7RUFJaEIsS0FBSztBQUpXLENBQXBCOztBQU1BLFNBQVNDLGdCQUFULENBQTBCO0VBQUVDLEdBQUY7RUFBUUM7QUFBUixDQUExQixFQUEwQztFQUN0QyxNQUFNQyxVQUFVLEdBQUdGLEdBQUcsSUFBSUEsR0FBRyxDQUFDRSxVQUFYLEdBQXdCRixHQUFHLENBQUNFLFVBQTVCLEdBQXlDRCxHQUFHLEdBQUdBLEdBQUcsQ0FBQ0MsVUFBUCxHQUFvQixHQUFuRjtFQUNBLE9BQU87SUFDSEE7RUFERyxDQUFQO0FBR0g7O0FBQ0QsTUFBTUMsTUFBTSxHQUFHO0VBQ1hDLEtBQUssRUFBRTtJQUNIQyxVQUFVLEVBQUUsMkhBRFQ7SUFFSEMsTUFBTSxFQUFFLE9BRkw7SUFHSEMsU0FBUyxFQUFFLFFBSFI7SUFJSEMsT0FBTyxFQUFFLE1BSk47SUFLSEMsYUFBYSxFQUFFLFFBTFo7SUFNSEMsVUFBVSxFQUFFLFFBTlQ7SUFPSEMsY0FBYyxFQUFFO0VBUGIsQ0FESTtFQVVYQyxJQUFJLEVBQUU7SUFDRkosT0FBTyxFQUFFLGNBRFA7SUFFRkQsU0FBUyxFQUFFLE1BRlQ7SUFHRk0sVUFBVSxFQUFFLE1BSFY7SUFJRlAsTUFBTSxF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QUssQ0FBQ1ksV0FBTixHQUFvQixXQUFwQjtBQUNBWixLQUFLLENBQUNhLGVBQU4sR0FBd0JyQyxnQkFBeEI7QUFDQXdCLEtBQUssQ0FBQ2MsbUJBQU4sR0FBNEJ0QyxnQkFBNUI7QUFDQVIsa0JBQUEsR0FBa0JnQyxLQUFsQjs7QUFFQSxJQUFJLENBQUMsT0FBT2hDLE9BQU8sQ0FBQ0UsT0FBZixLQUEyQixVQUEzQixJQUEwQyxPQUFPRixPQUFPLENBQUNFLE9BQWYsS0FBMkIsUUFBM0IsSUFBdUNGLE9BQU8sQ0FBQ0UsT0FBUixLQUFvQixJQUF0RyxLQUFnSCxPQUFPRixPQUFPLENBQUNFLE9BQVIsQ0FBZ0I2QyxVQUF2QixLQUFzQyxXQUExSixFQUF1SztFQUNyS2pELE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkMsT0FBTyxDQUFDRSxPQUE5QixFQUF1QyxZQUF2QyxFQUFxRDtJQUFFRCxLQUFLLEVBQUU7RUFBVCxDQUFyRDtFQUNBSCxNQUFNLENBQUNrRCxNQUFQLENBQWNoRCxPQUFPLENBQUNFLE9BQXRCLEVBQStCRixPQUEvQjtFQUNBaUQsTUFBTSxDQUFDakQsT0FBUCxHQUFpQkEsT0FBTyxDQUFDRSxPQUF6QjtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9wYWdlcy9fZXJyb3IuanM/MThmMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfaW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQgPSByZXF1aXJlKFwiQHN3Yy9oZWxwZXJzL2xpYi9faW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQuanNcIikuZGVmYXVsdDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfaGVhZCA9IF9pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9oZWFkXCIpKTtcbmNvbnN0IHN0YXR1c0NvZGVzID0ge1xuICAgIDQwMDogJ0JhZCBSZXF1ZXN0JyxcbiAgICA0MDQ6ICdUaGlzIHBhZ2UgY291bGQgbm90IGJlIGZvdW5kJyxcbiAgICA0MDU6ICdNZXRob2QgTm90IEFsbG93ZWQnLFxuICAgIDUwMDogJ0ludGVybmFsIFNlcnZlciBFcnJvcidcbn07XG5mdW5jdGlvbiBfZ2V0SW5pdGlhbFByb3BzKHsgcmVzICwgZXJyICB9KSB7XG4gICAgY29uc3Qgc3RhdHVzQ29kZSA9IHJlcyAmJiByZXMuc3RhdHVzQ29kZSA/IHJlcy5zdGF0dXNDb2RlIDogZXJyID8gZXJyLnN0YXR1c0NvZGUgOiA0MDQ7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3RhdHVzQ29kZVxuICAgIH07XG59XG5jb25zdCBzdHlsZXMgPSB7XG4gICAgZXJyb3I6IHtcbiAgICAgICAgZm9udEZhbWlseTogJy1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgUm9ib3RvLCBcIlNlZ29lIFVJXCIsIFwiRmlyYSBTYW5zXCIsIEF2ZW5pciwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBcIkx1Y2lkYSBHcmFuZGVcIiwgc2Fucy1zZXJpZicsXG4gICAgICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ1xuICAgIH0sXG4gICAgZGVzYzoge1xuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgICAgIGxpbmVIZWlnaHQ6ICc0OXB4JyxcbiAgICAgICAgaGVpZ2h0OiAnNDlweCcsXG4gICAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnXG4gICAgfSxcbiAgICBoMToge1xuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICBtYXJnaW5SaWdodDogJzIwcHgnLFxuICAgICAgICBwYWRkaW5nOiAnMCAyM3B4IDAgMCcsXG4gICAgICAgIGZvbnRTaXplOiAnMjRweCcsXG4gICAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICAgIGxpbmVIZWlnaHQ6ICc0OXB4J1xuICAgIH0sXG4gICAgaDI6IHtcbiAgICAgICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXG4gICAgICAgIGxpbmVIZWlnaHQ6ICc0OXB4JyxcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICBwYWRkaW5nOiAwXG4gICAgfVxufTtcbnZhciBfQ29tcG9uZW50O1xuY2xhc3MgRXJyb3IgZXh0ZW5kcyAoX0NvbXBvbmVudCA9IF9yZWFjdC5kZWZhdWx0LkNvbXBvbmVudCkge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBzdGF0dXNDb2RlICwgd2l0aERhcmtNb2RlID10cnVlICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgdGl0bGUgPSB0aGlzLnByb3BzLnRpdGxlIHx8IHN0YXR1c0NvZGVzW3N0YXR1c0NvZGVdIHx8ICdBbiB1bmV4cGVjdGVkIGVycm9yIGhhcyBvY2N1cnJlZCc7XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgICAgc3R5bGU6IHN0eWxlcy5lcnJvclxuICAgICAgICB9LCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2hlYWQuZGVmYXVsdCwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwidGl0bGVcIiwgbnVsbCwgc3RhdHVzQ29kZSA/IGAke3N0YXR1c0NvZGV9OiAke3RpdGxlfWAgOiAnQXBwbGljYXRpb24gZXJyb3I6IGEgY2xpZW50LXNpZGUgZXhjZXB0aW9uIGhhcyBvY2N1cnJlZCcpKSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIsIHtcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7XG4gICAgICAgICAgICAgICAgX19odG1sOiBgXG4gICAgICAgICAgICAgICAgYm9keSB7IG1hcmdpbjogMDsgY29sb3I6ICMwMDA7IGJhY2tncm91bmQ6ICNmZmY7IH1cbiAgICAgICAgICAgICAgICAubmV4dC1lcnJvci1oMSB7XG4gICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAke3dpdGhEYXJrTW9kZSA/IGBAbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gICAgICAgICAgICAgICAgICBib2R5IHsgY29sb3I6ICNmZmY7IGJhY2tncm91bmQ6ICMwMDA7IH1cbiAgICAgICAgICAgICAgICAgIC5uZXh0LWVycm9yLWgxIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMyk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfWAgOiAnJ31gXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLCBzdGF0dXNDb2RlID8gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBcIm5leHQtZXJyb3ItaDFcIixcbiAgICAgICAgICAgIHN0eWxlOiBzdHlsZXMuaDFcbiAgICAgICAgfSwgc3RhdHVzQ29kZSkgOiBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgICAgc3R5bGU6IHN0eWxlcy5kZXNjXG4gICAgICAgIH0sIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImgyXCIsIHtcbiAgICAgICAgICAgIHN0eWxlOiBzdHlsZXMuaDJcbiAgICAgICAgfSwgdGhpcy5wcm9wcy50aXRsZSB8fCBzdGF0dXNDb2RlID8gdGl0bGUgOiAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQsIG51bGwsIFwiQXBwbGljYXRpb24gZXJyb3I6IGEgY2xpZW50LXNpZGUgZXhjZXB0aW9uIGhhcyBvY2N1cnJlZCAoc2VlIHRoZSBicm93c2VyIGNvbnNvbGUgZm9yIG1vcmUgaW5mb3JtYXRpb24pXCIpLCBcIi5cIikpKSk7XG4gICAgfVxufVxuRXJyb3IuZGlzcGxheU5hbWUgPSAnRXJyb3JQYWdlJztcbkVycm9yLmdldEluaXRpYWxQcm9wcyA9IF9nZXRJbml0aWFsUHJvcHM7XG5FcnJvci5vcmlnR2V0SW5pdGlhbFByb3BzID0gX2dldEluaXRpYWxQcm9wcztcbmV4cG9ydHMuZGVmYXVsdCA9IEVycm9yO1xuXG5pZiAoKHR5cGVvZiBleHBvcnRzLmRlZmF1bHQgPT09ICdmdW5jdGlvbicgfHwgKHR5cGVvZiBleHBvcnRzLmRlZmF1bHQgPT09ICdvYmplY3QnICYmIGV4cG9ydHMuZGVmYXVsdCAhPT0gbnVsbCkpICYmIHR5cGVvZiBleHBvcnRzLmRlZmF1bHQuX19lc01vZHVsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMuZGVmYXVsdCwgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuICBPYmplY3QuYXNzaWduKGV4cG9ydHMuZGVmYXVsdCwgZXhwb3J0cyk7XG4gIG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1fZXJyb3IuanMubWFwIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiZGVmYXVsdCIsIl9pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdCIsInJlcXVpcmUiLCJfcmVhY3QiLCJfaGVhZCIsInN0YXR1c0NvZGVzIiwiX2dldEluaXRpYWxQcm9wcyIsInJlcyIsImVyciIsInN0YXR1c0NvZGUiLCJzdHlsZXMiLCJlcnJvciIsImZvbnRGYW1pbHkiLCJoZWlnaHQiLCJ0ZXh0QWxpZ24iLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImRlc2MiLCJsaW5lSGVpZ2h0IiwidmVydGljYWxBbGlnbiIsImgxIiwibWFyZ2luIiwibWFyZ2luUmlnaHQiLCJwYWRkaW5nIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiaDIiLCJfQ29tcG9uZW50IiwiRXJyb3IiLCJDb21wb25lbnQiLCJyZW5kZXIiLCJ3aXRoRGFya01vZGUiLCJwcm9wcyIsInRpdGxlIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJjbGFzc05hbWUiLCJGcmFnbWVudCIsImRpc3BsYXlOYW1lIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsIl9fZXNNb2R1bGUiLCJhc3NpZ24iLCJtb2R1bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/pages/_error.js\n");

/***/ }),

/***/ "../shared/lib/head":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/head.js" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./node_modules/next/dist/pages/_error.js"));
module.exports = __webpack_exports__;

})();