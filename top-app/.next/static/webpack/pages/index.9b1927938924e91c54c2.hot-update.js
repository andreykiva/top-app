"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Rating/Rating.tsx":
/*!******************************************!*\
  !*** ./src/components/Rating/Rating.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Rating": function() { return /* binding */ Rating; }
/* harmony export */ });
/* harmony import */ var D_web_nodejs_apps_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_web_nodejs_apps_top_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Rating_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Rating.module.css */ "./src/components/Rating/Rating.module.css");
/* harmony import */ var _Rating_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Rating_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _star_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./star.svg */ "./src/components/Rating/star.svg");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _excluded = ["isEditable", "rating", "setRating"];

var _jsxFileName = "D:\\web\\nodejs\\apps\\top-app\\src\\components\\Rating\\Rating.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_web_nodejs_apps_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var Rating = function Rating(_ref) {
  _s();

  var _ref$isEditable = _ref.isEditable,
      isEditable = _ref$isEditable === void 0 ? false : _ref$isEditable,
      rating = _ref.rating,
      setRating = _ref.setRating,
      props = (0,D_web_nodejs_apps_top_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, _excluded);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(new Array(5).fill( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {}, void 0, false))),
      ratingArray = _useState[0],
      setRatingArray = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    constructRating(rating);
  }, [rating]);

  var changeDisplay = function changeDisplay(i) {
    if (!isEditable) {
      return;
    }

    constructRating(i);
  };

  var onClick = function onClick(i) {
    if (!isEditable || !setRating) {
      return;
    }

    setRating(i);
  };

  var constructRating = function constructRating(currentRating) {
    var updatedArray = ratingArray.map(function (r, i) {
      var _cn;

      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_star_svg__WEBPACK_IMPORTED_MODULE_3__.default, {
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_Rating_module_css__WEBPACK_IMPORTED_MODULE_6___default().star), (_cn = {}, (0,D_web_nodejs_apps_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_cn, (_Rating_module_css__WEBPACK_IMPORTED_MODULE_6___default().filled), i < currentRating), (0,D_web_nodejs_apps_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_cn, (_Rating_module_css__WEBPACK_IMPORTED_MODULE_6___default().isEditable), isEditable), _cn)),
        onMouseEnter: changeDisplay.bind(_this, i + 1),
        onMouseLeave: changeDisplay.bind(_this, rating),
        onClick: onClick.bind(_this, i + 1),
        tabIndex: isEditable ? 0 : -1,
        onKeyDown: true
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 4
      }, _this);
    });
    setRatingArray(updatedArray);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", _objectSpread(_objectSpread({}, props), {}, {
    children: ratingArray.map(function (r, i) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
        children: r
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 5
      }, _this);
    })
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 3
  }, _this);
};

_s(Rating, "Pptcyba1hwfxkgTSKuvQraFl5xo=");

_c = Rating;

var _c;

$RefreshReg$(_c, "Rating");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOWIxOTI3OTM4OTI0ZTkxYzU0YzIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVPLElBQU1LLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQW1GO0FBQUE7O0FBQUEsNkJBQWhGQyxVQUFnRjtBQUFBLE1BQWhGQSxVQUFnRixnQ0FBbkUsS0FBbUU7QUFBQSxNQUE1REMsTUFBNEQsUUFBNURBLE1BQTREO0FBQUEsTUFBcERDLFNBQW9ELFFBQXBEQSxTQUFvRDtBQUFBLE1BQXRDQyxLQUFzQzs7QUFDeEcsa0JBQXNDUiwrQ0FBUSxDQUFnQixJQUFJUyxLQUFKLENBQVUsQ0FBVixFQUFhQyxJQUFiLGVBQWtCLDZJQUFsQixDQUFoQixDQUE5QztBQUFBLE1BQU9DLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBRUFiLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNmYyxJQUFBQSxlQUFlLENBQUNQLE1BQUQsQ0FBZjtBQUNBLEdBRlEsRUFFTixDQUFDQSxNQUFELENBRk0sQ0FBVDs7QUFJQSxNQUFNUSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLENBQUQsRUFBZTtBQUNwQyxRQUFJLENBQUNWLFVBQUwsRUFBaUI7QUFDaEI7QUFDQTs7QUFDRFEsSUFBQUEsZUFBZSxDQUFDRSxDQUFELENBQWY7QUFDQSxHQUxEOztBQU9BLE1BQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNELENBQUQsRUFBZTtBQUM5QixRQUFJLENBQUNWLFVBQUQsSUFBZSxDQUFDRSxTQUFwQixFQUErQjtBQUM5QjtBQUNBOztBQUNEQSxJQUFBQSxTQUFTLENBQUNRLENBQUQsQ0FBVDtBQUNBLEdBTEQ7O0FBT0EsTUFBTUYsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDSSxhQUFELEVBQTJCO0FBQ2xELFFBQU1DLFlBQVksR0FBR1AsV0FBVyxDQUFDUSxHQUFaLENBQWdCLFVBQUNDLENBQUQsRUFBaUJMLENBQWpCO0FBQUE7O0FBQUEsMEJBQ3BDLDhEQUFDLDhDQUFEO0FBQ0MsaUJBQVMsRUFBRVosaURBQUUsQ0FBQ0YsZ0VBQUQsMklBQ1hBLGtFQURXLEVBQ0tjLENBQUMsR0FBR0UsYUFEVCxpSUFFWGhCLHNFQUZXLEVBRVNJLFVBRlQsUUFEZDtBQU1DLG9CQUFZLEVBQUVTLGFBQWEsQ0FBQ1MsSUFBZCxDQUFtQixLQUFuQixFQUF5QlIsQ0FBQyxHQUFHLENBQTdCLENBTmY7QUFPQyxvQkFBWSxFQUFFRCxhQUFhLENBQUNTLElBQWQsQ0FBbUIsS0FBbkIsRUFBeUJqQixNQUF6QixDQVBmO0FBUUMsZUFBTyxFQUFFVSxPQUFPLENBQUNPLElBQVIsQ0FBYSxLQUFiLEVBQW1CUixDQUFDLEdBQUcsQ0FBdkIsQ0FSVjtBQVNDLGdCQUFRLEVBQUVWLFVBQVUsR0FBRyxDQUFILEdBQU8sQ0FBQyxDQVQ3QjtBQVVDLGlCQUFTO0FBVlYsU0FLTVUsQ0FMTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRG9DO0FBQUEsS0FBaEIsQ0FBckI7QUFlQUgsSUFBQUEsY0FBYyxDQUFDTSxZQUFELENBQWQ7QUFDQSxHQWpCRDs7QUFtQkEsc0JBQ0MscUdBQVNWLEtBQVQ7QUFBQSxjQUNFRyxXQUFXLENBQUNRLEdBQVosQ0FBZ0IsVUFBQ0MsQ0FBRCxFQUFpQkwsQ0FBakI7QUFBQSwwQkFDaEI7QUFBQSxrQkFBZUs7QUFBZixTQUFXTCxDQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEZ0I7QUFBQSxLQUFoQjtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQU9BLENBL0NNOztHQUFNWDs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUmF0aW5nL1JhdGluZy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmF0aW5nUHJvcHMgfSBmcm9tICcuL1JhdGluZy5wcm9wcyc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9SYXRpbmcubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBTdGFySWNvbiBmcm9tICcuL3N0YXIuc3ZnJztcclxuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJhdGluZyA9ICh7IGlzRWRpdGFibGUgPSBmYWxzZSwgcmF0aW5nLCBzZXRSYXRpbmcsIC4uLnByb3BzIH06IFJhdGluZ1Byb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xyXG5cdGNvbnN0IFtyYXRpbmdBcnJheSwgc2V0UmF0aW5nQXJyYXldID0gdXNlU3RhdGU8SlNYLkVsZW1lbnRbXT4obmV3IEFycmF5KDUpLmZpbGwoPD48Lz4pKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGNvbnN0cnVjdFJhdGluZyhyYXRpbmcpO1xyXG5cdH0sIFtyYXRpbmddKTtcclxuXHJcblx0Y29uc3QgY2hhbmdlRGlzcGxheSA9IChpOiBudW1iZXIpID0+IHtcclxuXHRcdGlmICghaXNFZGl0YWJsZSkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRjb25zdHJ1Y3RSYXRpbmcoaSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3Qgb25DbGljayA9IChpOiBudW1iZXIpID0+IHtcclxuXHRcdGlmICghaXNFZGl0YWJsZSB8fCAhc2V0UmF0aW5nKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHNldFJhdGluZyhpKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBjb25zdHJ1Y3RSYXRpbmcgPSAoY3VycmVudFJhdGluZzogbnVtYmVyKSA9PiB7XHJcblx0XHRjb25zdCB1cGRhdGVkQXJyYXkgPSByYXRpbmdBcnJheS5tYXAoKHI6IEpTWC5FbGVtZW50LCBpOiBudW1iZXIpID0+IChcclxuXHRcdFx0PFN0YXJJY29uXHJcblx0XHRcdFx0Y2xhc3NOYW1lPXtjbihzdHlsZXMuc3Rhciwge1xyXG5cdFx0XHRcdFx0W3N0eWxlcy5maWxsZWRdOiBpIDwgY3VycmVudFJhdGluZyxcclxuXHRcdFx0XHRcdFtzdHlsZXMuaXNFZGl0YWJsZV06IGlzRWRpdGFibGUsXHJcblx0XHRcdFx0fSl9XHJcblx0XHRcdFx0a2V5PXtpfVxyXG5cdFx0XHRcdG9uTW91c2VFbnRlcj17Y2hhbmdlRGlzcGxheS5iaW5kKHRoaXMsIGkgKyAxKX1cclxuXHRcdFx0XHRvbk1vdXNlTGVhdmU9e2NoYW5nZURpc3BsYXkuYmluZCh0aGlzLCByYXRpbmcpfVxyXG5cdFx0XHRcdG9uQ2xpY2s9e29uQ2xpY2suYmluZCh0aGlzLCBpICsgMSl9XHJcblx0XHRcdFx0dGFiSW5kZXg9e2lzRWRpdGFibGUgPyAwIDogLTF9XHJcblx0XHRcdFx0b25LZXlEb3duXHJcblx0XHRcdC8+XHJcblx0XHQpKTtcclxuXHJcblx0XHRzZXRSYXRpbmdBcnJheSh1cGRhdGVkQXJyYXkpO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IHsuLi5wcm9wc30+XHJcblx0XHRcdHtyYXRpbmdBcnJheS5tYXAoKHI6IEpTWC5FbGVtZW50LCBpOiBudW1iZXIpID0+IChcclxuXHRcdFx0XHQ8c3BhbiBrZXk9e2l9PntyfTwvc3Bhbj5cclxuXHRcdFx0KSl9XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJTdGFySWNvbiIsImNuIiwiUmF0aW5nIiwiaXNFZGl0YWJsZSIsInJhdGluZyIsInNldFJhdGluZyIsInByb3BzIiwiQXJyYXkiLCJmaWxsIiwicmF0aW5nQXJyYXkiLCJzZXRSYXRpbmdBcnJheSIsImNvbnN0cnVjdFJhdGluZyIsImNoYW5nZURpc3BsYXkiLCJpIiwib25DbGljayIsImN1cnJlbnRSYXRpbmciLCJ1cGRhdGVkQXJyYXkiLCJtYXAiLCJyIiwic3RhciIsImZpbGxlZCIsImJpbmQiXSwic291cmNlUm9vdCI6IiJ9