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

  var handleSpace = function handleSpace(e) {};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTFlOWJlZjRjMWExMzBlMTVmNmIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVPLElBQU1LLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQW1GO0FBQUE7O0FBQUEsNkJBQWhGQyxVQUFnRjtBQUFBLE1BQWhGQSxVQUFnRixnQ0FBbkUsS0FBbUU7QUFBQSxNQUE1REMsTUFBNEQsUUFBNURBLE1BQTREO0FBQUEsTUFBcERDLFNBQW9ELFFBQXBEQSxTQUFvRDtBQUFBLE1BQXRDQyxLQUFzQzs7QUFDeEcsa0JBQXNDUiwrQ0FBUSxDQUFnQixJQUFJUyxLQUFKLENBQVUsQ0FBVixFQUFhQyxJQUFiLGVBQWtCLDZJQUFsQixDQUFoQixDQUE5QztBQUFBLE1BQU9DLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBRUFiLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNmYyxJQUFBQSxlQUFlLENBQUNQLE1BQUQsQ0FBZjtBQUNBLEdBRlEsRUFFTixDQUFDQSxNQUFELENBRk0sQ0FBVDs7QUFJQSxNQUFNUSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLENBQUQsRUFBZTtBQUNwQyxRQUFJLENBQUNWLFVBQUwsRUFBaUI7QUFDaEI7QUFDQTs7QUFDRFEsSUFBQUEsZUFBZSxDQUFDRSxDQUFELENBQWY7QUFDQSxHQUxEOztBQU9BLE1BQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNELENBQUQsRUFBZTtBQUM5QixRQUFJLENBQUNWLFVBQUQsSUFBZSxDQUFDRSxTQUFwQixFQUErQjtBQUM5QjtBQUNBOztBQUNEQSxJQUFBQSxTQUFTLENBQUNRLENBQUQsQ0FBVDtBQUNBLEdBTEQ7O0FBT0EsTUFBTUUsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsQ0FBRCxFQUFrQyxDQUFFLENBQXhEOztBQUVBLE1BQU1MLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ00sYUFBRCxFQUEyQjtBQUNsRCxRQUFNQyxZQUFZLEdBQUdULFdBQVcsQ0FBQ1UsR0FBWixDQUFnQixVQUFDQyxDQUFELEVBQWlCUCxDQUFqQjtBQUFBOztBQUFBLDBCQUNwQyw4REFBQyw4Q0FBRDtBQUNDLGlCQUFTLEVBQUVaLGlEQUFFLENBQUNGLGdFQUFELDJJQUNYQSxrRUFEVyxFQUNLYyxDQUFDLEdBQUdJLGFBRFQsaUlBRVhsQixzRUFGVyxFQUVTSSxVQUZULFFBRGQ7QUFNQyxvQkFBWSxFQUFFUyxhQUFhLENBQUNXLElBQWQsQ0FBbUIsS0FBbkIsRUFBeUJWLENBQUMsR0FBRyxDQUE3QixDQU5mO0FBT0Msb0JBQVksRUFBRUQsYUFBYSxDQUFDVyxJQUFkLENBQW1CLEtBQW5CLEVBQXlCbkIsTUFBekIsQ0FQZjtBQVFDLGVBQU8sRUFBRVUsT0FBTyxDQUFDUyxJQUFSLENBQWEsS0FBYixFQUFtQlYsQ0FBQyxHQUFHLENBQXZCLENBUlY7QUFTQyxnQkFBUSxFQUFFVixVQUFVLEdBQUcsQ0FBSCxHQUFPLENBQUMsQ0FUN0I7QUFVQyxpQkFBUyxFQUFFLG1CQUFDYSxDQUFEO0FBQUEsaUJBQWtDYixVQUFVLElBQUlZLFdBQVcsQ0FBQ0MsQ0FBRCxFQUFJSCxDQUFDLEdBQUcsQ0FBUixDQUEzRDtBQUFBO0FBVlosU0FLTUEsQ0FMTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRG9DO0FBQUEsS0FBaEIsQ0FBckI7QUFlQUgsSUFBQUEsY0FBYyxDQUFDUSxZQUFELENBQWQ7QUFDQSxHQWpCRDs7QUFtQkEsc0JBQ0MscUdBQVNaLEtBQVQ7QUFBQSxjQUNFRyxXQUFXLENBQUNVLEdBQVosQ0FBZ0IsVUFBQ0MsQ0FBRCxFQUFpQlAsQ0FBakI7QUFBQSwwQkFDaEI7QUFBQSxrQkFBZU87QUFBZixTQUFXUCxDQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEZ0I7QUFBQSxLQUFoQjtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQU9BLENBakRNOztHQUFNWDs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUmF0aW5nL1JhdGluZy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmF0aW5nUHJvcHMgfSBmcm9tICcuL1JhdGluZy5wcm9wcyc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIEtleWJvYXJkRXZlbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9SYXRpbmcubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBTdGFySWNvbiBmcm9tICcuL3N0YXIuc3ZnJztcclxuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJhdGluZyA9ICh7IGlzRWRpdGFibGUgPSBmYWxzZSwgcmF0aW5nLCBzZXRSYXRpbmcsIC4uLnByb3BzIH06IFJhdGluZ1Byb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xyXG5cdGNvbnN0IFtyYXRpbmdBcnJheSwgc2V0UmF0aW5nQXJyYXldID0gdXNlU3RhdGU8SlNYLkVsZW1lbnRbXT4obmV3IEFycmF5KDUpLmZpbGwoPD48Lz4pKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGNvbnN0cnVjdFJhdGluZyhyYXRpbmcpO1xyXG5cdH0sIFtyYXRpbmddKTtcclxuXHJcblx0Y29uc3QgY2hhbmdlRGlzcGxheSA9IChpOiBudW1iZXIpID0+IHtcclxuXHRcdGlmICghaXNFZGl0YWJsZSkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRjb25zdHJ1Y3RSYXRpbmcoaSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3Qgb25DbGljayA9IChpOiBudW1iZXIpID0+IHtcclxuXHRcdGlmICghaXNFZGl0YWJsZSB8fCAhc2V0UmF0aW5nKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHNldFJhdGluZyhpKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVTcGFjZSA9IChlOiBLZXlib2FyZEV2ZW50PFNWR0VsZW1lbnQ+KSA9PiB7fTtcclxuXHJcblx0Y29uc3QgY29uc3RydWN0UmF0aW5nID0gKGN1cnJlbnRSYXRpbmc6IG51bWJlcikgPT4ge1xyXG5cdFx0Y29uc3QgdXBkYXRlZEFycmF5ID0gcmF0aW5nQXJyYXkubWFwKChyOiBKU1guRWxlbWVudCwgaTogbnVtYmVyKSA9PiAoXHJcblx0XHRcdDxTdGFySWNvblxyXG5cdFx0XHRcdGNsYXNzTmFtZT17Y24oc3R5bGVzLnN0YXIsIHtcclxuXHRcdFx0XHRcdFtzdHlsZXMuZmlsbGVkXTogaSA8IGN1cnJlbnRSYXRpbmcsXHJcblx0XHRcdFx0XHRbc3R5bGVzLmlzRWRpdGFibGVdOiBpc0VkaXRhYmxlLFxyXG5cdFx0XHRcdH0pfVxyXG5cdFx0XHRcdGtleT17aX1cclxuXHRcdFx0XHRvbk1vdXNlRW50ZXI9e2NoYW5nZURpc3BsYXkuYmluZCh0aGlzLCBpICsgMSl9XHJcblx0XHRcdFx0b25Nb3VzZUxlYXZlPXtjaGFuZ2VEaXNwbGF5LmJpbmQodGhpcywgcmF0aW5nKX1cclxuXHRcdFx0XHRvbkNsaWNrPXtvbkNsaWNrLmJpbmQodGhpcywgaSArIDEpfVxyXG5cdFx0XHRcdHRhYkluZGV4PXtpc0VkaXRhYmxlID8gMCA6IC0xfVxyXG5cdFx0XHRcdG9uS2V5RG93bj17KGU6IEtleWJvYXJkRXZlbnQ8U1ZHRWxlbWVudD4pID0+IGlzRWRpdGFibGUgJiYgaGFuZGxlU3BhY2UoZSwgaSArIDEpfVxyXG5cdFx0XHQvPlxyXG5cdFx0KSk7XHJcblxyXG5cdFx0c2V0UmF0aW5nQXJyYXkodXBkYXRlZEFycmF5KTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiB7Li4ucHJvcHN9PlxyXG5cdFx0XHR7cmF0aW5nQXJyYXkubWFwKChyOiBKU1guRWxlbWVudCwgaTogbnVtYmVyKSA9PiAoXHJcblx0XHRcdFx0PHNwYW4ga2V5PXtpfT57cn08L3NwYW4+XHJcblx0XHRcdCkpfVxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiU3Rhckljb24iLCJjbiIsIlJhdGluZyIsImlzRWRpdGFibGUiLCJyYXRpbmciLCJzZXRSYXRpbmciLCJwcm9wcyIsIkFycmF5IiwiZmlsbCIsInJhdGluZ0FycmF5Iiwic2V0UmF0aW5nQXJyYXkiLCJjb25zdHJ1Y3RSYXRpbmciLCJjaGFuZ2VEaXNwbGF5IiwiaSIsIm9uQ2xpY2siLCJoYW5kbGVTcGFjZSIsImUiLCJjdXJyZW50UmF0aW5nIiwidXBkYXRlZEFycmF5IiwibWFwIiwiciIsInN0YXIiLCJmaWxsZWQiLCJiaW5kIl0sInNvdXJjZVJvb3QiOiIifQ==