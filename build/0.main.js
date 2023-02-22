(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/Comments.js":
/*!*************************!*\
  !*** ./src/Comments.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Comments;
var _data = __webpack_require__(/*! ./data */ "./src/data.js");
var _jsxDevRuntime = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "/Users/hrgui/projects/react-next-test/src/Comments.js";
function Comments() {
  var _this = this;
  var comments = (0, _data.useData)();
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(_jsxDevRuntime.Fragment, {
    children: comments.map(function (comment, i) {
      return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)("p", {
        className: "comment",
        children: comment
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, _this);
    })
  }, void 0, false);
}

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataProvider = DataProvider;
exports.useData = useData;
var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _jsxDevRuntime = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
var _jsxFileName = "/Users/hrgui/projects/react-next-test/src/data.js";
// Note: this file does not demonstrate a real data fetching strategy.
// We only use this to simulate data fetching happening on the server
// while the cache is populated on the client. In a real app, you would
// instead use a data fetching library or Server Components for this.

var DataContext = /*#__PURE__*/(0, _react.createContext)(null);
function DataProvider(_ref) {
  var children = _ref.children,
    data = _ref.data;
  return /*#__PURE__*/(0, _jsxDevRuntime.jsxDEV)(DataContext.Provider, {
    value: data,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 10
  }, this);
}

// In a real implementation the data would be streamed with the HTML.
// We haven't integrated this part yet, so we'll just use fake data.
var fakeData = ["Wait, it doesn't wait for React to load?", 'How does this even work?', 'I like marshmallows'];
function useData() {
  var ctx = (0, _react.useContext)(DataContext);
  if (ctx !== null) {
    // This context is only provided on the server.
    // It is here to simulate a suspending data fetch.
    ctx.read();
  }
  return fakeData;
}

/***/ })

}]);
//# sourceMappingURL=0.main.js.map