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

  var handleSpace = function handleSpace() {};

  var constructRating = function constructRating(currentRating) {
    var updatedArray = ratingArray.map(function (r, i) {
      var _cn;

      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_star_svg__WEBPACK_IMPORTED_MODULE_3__.default, {
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_Rating_module_css__WEBPACK_IMPORTED_MODULE_6___default().star), (_cn = {}, (0,D_web_nodejs_apps_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_cn, (_Rating_module_css__WEBPACK_IMPORTED_MODULE_6___default().filled), i < currentRating), (0,D_web_nodejs_apps_top_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_cn, (_Rating_module_css__WEBPACK_IMPORTED_MODULE_6___default().isEditable), isEditable), _cn)),
        onMouseEnter: changeDisplay.bind(_this, i + 1),
        onMouseLeave: changeDisplay.bind(_this, rating),
        onClick: onClick.bind(_this, i + 1),
        tabIndex: isEditable ? 0 : -1,
        onKeyDown: function onKeyDown(e) {
          return isEditable && handleSpace(e, i + 1);
        }
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
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
        lineNumber: 52,
        columnNumber: 5
      }, _this);
    })
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 50,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2FhZDI0ODM0NDg5OGIxZTBkNzkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVPLElBQU1LLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQW1GO0FBQUE7O0FBQUEsNkJBQWhGQyxVQUFnRjtBQUFBLE1BQWhGQSxVQUFnRixnQ0FBbkUsS0FBbUU7QUFBQSxNQUE1REMsTUFBNEQsUUFBNURBLE1BQTREO0FBQUEsTUFBcERDLFNBQW9ELFFBQXBEQSxTQUFvRDtBQUFBLE1BQXRDQyxLQUFzQzs7QUFDeEcsa0JBQXNDUiwrQ0FBUSxDQUFnQixJQUFJUyxLQUFKLENBQVUsQ0FBVixFQUFhQyxJQUFiLGVBQWtCLDZJQUFsQixDQUFoQixDQUE5QztBQUFBLE1BQU9DLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBRUFiLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNmYyxJQUFBQSxlQUFlLENBQUNQLE1BQUQsQ0FBZjtBQUNBLEdBRlEsRUFFTixDQUFDQSxNQUFELENBRk0sQ0FBVDs7QUFJQSxNQUFNUSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLENBQUQsRUFBZTtBQUNwQyxRQUFJLENBQUNWLFVBQUwsRUFBaUI7QUFDaEI7QUFDQTs7QUFDRFEsSUFBQUEsZUFBZSxDQUFDRSxDQUFELENBQWY7QUFDQSxHQUxEOztBQU9BLE1BQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNELENBQUQsRUFBZTtBQUM5QixRQUFJLENBQUNWLFVBQUQsSUFBZSxDQUFDRSxTQUFwQixFQUErQjtBQUM5QjtBQUNBOztBQUNEQSxJQUFBQSxTQUFTLENBQUNRLENBQUQsQ0FBVDtBQUNBLEdBTEQ7O0FBT0EsTUFBTUUsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTSxDQUFFLENBQTVCOztBQUVBLE1BQU1KLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0ssYUFBRCxFQUEyQjtBQUNsRCxRQUFNQyxZQUFZLEdBQUdSLFdBQVcsQ0FBQ1MsR0FBWixDQUFnQixVQUFDQyxDQUFELEVBQWlCTixDQUFqQjtBQUFBOztBQUFBLDBCQUNwQyw4REFBQyw4Q0FBRDtBQUNDLGlCQUFTLEVBQUVaLGlEQUFFLENBQUNGLGdFQUFELDJJQUNYQSxrRUFEVyxFQUNLYyxDQUFDLEdBQUdHLGFBRFQsaUlBRVhqQixzRUFGVyxFQUVTSSxVQUZULFFBRGQ7QUFNQyxvQkFBWSxFQUFFUyxhQUFhLENBQUNVLElBQWQsQ0FBbUIsS0FBbkIsRUFBeUJULENBQUMsR0FBRyxDQUE3QixDQU5mO0FBT0Msb0JBQVksRUFBRUQsYUFBYSxDQUFDVSxJQUFkLENBQW1CLEtBQW5CLEVBQXlCbEIsTUFBekIsQ0FQZjtBQVFDLGVBQU8sRUFBRVUsT0FBTyxDQUFDUSxJQUFSLENBQWEsS0FBYixFQUFtQlQsQ0FBQyxHQUFHLENBQXZCLENBUlY7QUFTQyxnQkFBUSxFQUFFVixVQUFVLEdBQUcsQ0FBSCxHQUFPLENBQUMsQ0FUN0I7QUFVQyxpQkFBUyxFQUFFLG1CQUFDb0IsQ0FBRDtBQUFBLGlCQUFrQ3BCLFVBQVUsSUFBSVksV0FBVyxDQUFDUSxDQUFELEVBQUlWLENBQUMsR0FBRyxDQUFSLENBQTNEO0FBQUE7QUFWWixTQUtNQSxDQUxOO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEb0M7QUFBQSxLQUFoQixDQUFyQjtBQWVBSCxJQUFBQSxjQUFjLENBQUNPLFlBQUQsQ0FBZDtBQUNBLEdBakJEOztBQW1CQSxzQkFDQyxxR0FBU1gsS0FBVDtBQUFBLGNBQ0VHLFdBQVcsQ0FBQ1MsR0FBWixDQUFnQixVQUFDQyxDQUFELEVBQWlCTixDQUFqQjtBQUFBLDBCQUNoQjtBQUFBLGtCQUFlTTtBQUFmLFNBQVdOLENBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURnQjtBQUFBLEtBQWhCO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBT0EsQ0FqRE07O0dBQU1YOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9SYXRpbmcvUmF0aW5nLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSYXRpbmdQcm9wcyB9IGZyb20gJy4vUmF0aW5nLnByb3BzJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgS2V5Ym9hcmRFdmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1JhdGluZy5tb2R1bGUuY3NzJztcclxuaW1wb3J0IFN0YXJJY29uIGZyb20gJy4vc3Rhci5zdmcnO1xyXG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcyc7XHJcblxyXG5leHBvcnQgY29uc3QgUmF0aW5nID0gKHsgaXNFZGl0YWJsZSA9IGZhbHNlLCByYXRpbmcsIHNldFJhdGluZywgLi4ucHJvcHMgfTogUmF0aW5nUHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XHJcblx0Y29uc3QgW3JhdGluZ0FycmF5LCBzZXRSYXRpbmdBcnJheV0gPSB1c2VTdGF0ZTxKU1guRWxlbWVudFtdPihuZXcgQXJyYXkoNSkuZmlsbCg8PjwvPikpO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Y29uc3RydWN0UmF0aW5nKHJhdGluZyk7XHJcblx0fSwgW3JhdGluZ10pO1xyXG5cclxuXHRjb25zdCBjaGFuZ2VEaXNwbGF5ID0gKGk6IG51bWJlcikgPT4ge1xyXG5cdFx0aWYgKCFpc0VkaXRhYmxlKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGNvbnN0cnVjdFJhdGluZyhpKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBvbkNsaWNrID0gKGk6IG51bWJlcikgPT4ge1xyXG5cdFx0aWYgKCFpc0VkaXRhYmxlIHx8ICFzZXRSYXRpbmcpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0c2V0UmF0aW5nKGkpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZVNwYWNlID0gKCkgPT4ge307XHJcblxyXG5cdGNvbnN0IGNvbnN0cnVjdFJhdGluZyA9IChjdXJyZW50UmF0aW5nOiBudW1iZXIpID0+IHtcclxuXHRcdGNvbnN0IHVwZGF0ZWRBcnJheSA9IHJhdGluZ0FycmF5Lm1hcCgocjogSlNYLkVsZW1lbnQsIGk6IG51bWJlcikgPT4gKFxyXG5cdFx0XHQ8U3Rhckljb25cclxuXHRcdFx0XHRjbGFzc05hbWU9e2NuKHN0eWxlcy5zdGFyLCB7XHJcblx0XHRcdFx0XHRbc3R5bGVzLmZpbGxlZF06IGkgPCBjdXJyZW50UmF0aW5nLFxyXG5cdFx0XHRcdFx0W3N0eWxlcy5pc0VkaXRhYmxlXTogaXNFZGl0YWJsZSxcclxuXHRcdFx0XHR9KX1cclxuXHRcdFx0XHRrZXk9e2l9XHJcblx0XHRcdFx0b25Nb3VzZUVudGVyPXtjaGFuZ2VEaXNwbGF5LmJpbmQodGhpcywgaSArIDEpfVxyXG5cdFx0XHRcdG9uTW91c2VMZWF2ZT17Y2hhbmdlRGlzcGxheS5iaW5kKHRoaXMsIHJhdGluZyl9XHJcblx0XHRcdFx0b25DbGljaz17b25DbGljay5iaW5kKHRoaXMsIGkgKyAxKX1cclxuXHRcdFx0XHR0YWJJbmRleD17aXNFZGl0YWJsZSA/IDAgOiAtMX1cclxuXHRcdFx0XHRvbktleURvd249eyhlOiBLZXlib2FyZEV2ZW50PFNWR0VsZW1lbnQ+KSA9PiBpc0VkaXRhYmxlICYmIGhhbmRsZVNwYWNlKGUsIGkgKyAxKX1cclxuXHRcdFx0Lz5cclxuXHRcdCkpO1xyXG5cclxuXHRcdHNldFJhdGluZ0FycmF5KHVwZGF0ZWRBcnJheSk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgey4uLnByb3BzfT5cclxuXHRcdFx0e3JhdGluZ0FycmF5Lm1hcCgocjogSlNYLkVsZW1lbnQsIGk6IG51bWJlcikgPT4gKFxyXG5cdFx0XHRcdDxzcGFuIGtleT17aX0+e3J9PC9zcGFuPlxyXG5cdFx0XHQpKX1cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIlN0YXJJY29uIiwiY24iLCJSYXRpbmciLCJpc0VkaXRhYmxlIiwicmF0aW5nIiwic2V0UmF0aW5nIiwicHJvcHMiLCJBcnJheSIsImZpbGwiLCJyYXRpbmdBcnJheSIsInNldFJhdGluZ0FycmF5IiwiY29uc3RydWN0UmF0aW5nIiwiY2hhbmdlRGlzcGxheSIsImkiLCJvbkNsaWNrIiwiaGFuZGxlU3BhY2UiLCJjdXJyZW50UmF0aW5nIiwidXBkYXRlZEFycmF5IiwibWFwIiwiciIsInN0YXIiLCJmaWxsZWQiLCJiaW5kIiwiZSJdLCJzb3VyY2VSb290IjoiIn0=