"use strict";
(self["webpackChunkangular_starter"] = self["webpackChunkangular_starter"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main/main.component */ 6542);
/* harmony import */ var _character_character_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./character/character.component */ 783);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);





const routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}, {
  path: 'home',
  component: _main_main_component__WEBPACK_IMPORTED_MODULE_0__.MainComponent
}, {
  path: 'chars',
  component: _character_character_component__WEBPACK_IMPORTED_MODULE_1__.CharacterComponent
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 895);



class AppComponent {
  constructor() {}
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 9,
    vars: 0,
    consts: [[1, "example-button-row"], ["mat-button", "", "routerLink", "./home"], ["mat-button", "", "routerLink", "./chars"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header")(1, "section")(2, "div", 0)(3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Scene");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Characters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatAnchor],
    styles: ["fieldset[_ngcontent-%COMP%] {\n  border: 1px solid #ccc; \n\n  border-radius: 10px; \n\n  padding: 20px; \n\n}\n\ndiv[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.no-margin[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n\n\n\n.time-segments[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 20px; \n\n  margin-top: 10px; \n\n}\n\n.segment[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.segment-0[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n\n.segment-1[_ngcontent-%COMP%] {\n  background-color: #FFA07A;\n}\n\n.segment-2[_ngcontent-%COMP%] {\n  background-color: #87CEEB;\n}\n\n.example-additional-selection[_ngcontent-%COMP%] {\n  opacity: 0.75;\n  font-size: 0.75em;\n}\n\n.ml10[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n\n\n\n\n\n\n\n\n\n.highlighted-div[_ngcontent-%COMP%] {\n  outline: 2px solid #8B0000;\n}\n\n.image-gallery[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.image-gallery[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 200px;\n  height: auto;\n}\n\n.image-caption[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n\n\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.image-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n}\n\n.image-container[_ngcontent-%COMP%] {\n  margin-right: 0px;\n}\n\n.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 100%;\n  height: auto;\n}\n\n.zoom-window[_ngcontent-%COMP%] {\n  width: 800px;\n  border: 1px solid black;\n  background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0IsRUFBRSx1QkFBdUI7RUFDL0MsbUJBQW1CLEVBQUUsNkJBQTZCO0VBQ2xELGFBQWEsRUFBRSw0QkFBNEI7QUFDN0M7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUEsc0NBQXNDO0FBQ3RDO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZLEVBQUUsd0NBQXdDO0VBQ3RELGdCQUFnQixFQUFFLGlEQUFpRDtBQUNyRTs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7Ozs7OztHQU1HOztBQUVIO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBLFFBQVE7O0FBRVI7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtFQUN2Qiw0QkFBNEI7QUFDOUIiLCJzb3VyY2VzQ29udGVudCI6WyJmaWVsZHNldCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7IC8qIEFkaWNpb25hIHVtYSBib3JkYSAqL1xuICBib3JkZXItcmFkaXVzOiAxMHB4OyAvKiBEZWZpbmUgbyByYWlvIGRvcyBjYW50b3MgKi9cbiAgcGFkZGluZzogMjBweDsgLyogQWRpY2lvbmEgZXNwYcODwqdvIGludGVybm8gKi9cbn1cblxuZGl2IHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4ubm8tbWFyZ2luIHtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi8qIEVzdGlsbyBwYXJhIG9zIHNlZ21lbnRvcyBkZSB0ZW1wbyAqL1xuLnRpbWUtc2VnbWVudHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMHB4OyAvKiBBanVzdGUgYSBhbHR1cmEgY29uZm9ybWUgbmVjZXNzw4PCoXJpbyAqL1xuICBtYXJnaW4tdG9wOiAxMHB4OyAvKiBBZGljaW9uZSBtYXJnZW0gc3VwZXJpb3IgY29uZm9ybWUgbmVjZXNzw4PCoXJpbyAqL1xufVxuXG4uc2VnbWVudCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNlZ21lbnQtMCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uc2VnbWVudC0xIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQTA3QTtcbn1cblxuLnNlZ21lbnQtMiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4N0NFRUI7XG59XG5cbi5leGFtcGxlLWFkZGl0aW9uYWwtc2VsZWN0aW9uIHtcbiAgb3BhY2l0eTogMC43NTtcbiAgZm9udC1zaXplOiAwLjc1ZW07XG59XG5cbi5tbDEwIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi8qIC5lbmxhcmdlLW92ZXI6aG92ZXIge1xuICB3aWR0aDogMTAlO1xufVxuXG4uZW5sYXJnZS1vdmVyOmhvdmVyIH4gLmVsZW1lbnRvIHtcbiAgd2lkdGg6IDUlO1xufSAqL1xuXG4uaGlnaGxpZ2h0ZWQtZGl2IHtcbiAgb3V0bGluZTogMnB4IHNvbGlkICM4QjAwMDA7XG59XG5cbi5pbWFnZS1nYWxsZXJ5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uaW1hZ2UtZ2FsbGVyeSBpbWcge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmltYWdlLWNhcHRpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qIE1BUCAqL1xuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5pbWFnZS13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uaW1hZ2UtY29udGFpbmVyIHtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG59XG5cbi5pbWFnZS1jb250YWluZXIgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uem9vbS13aW5kb3cge1xuICB3aWR0aDogODAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _main_main_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/main.module */ 1679);
/* harmony import */ var _character_character_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./character/character.module */ 8720);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);





class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _main_main_module__WEBPACK_IMPORTED_MODULE_2__.MainModule, _character_character_module__WEBPACK_IMPORTED_MODULE_3__.CharacterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _main_main_module__WEBPACK_IMPORTED_MODULE_2__.MainModule, _character_character_module__WEBPACK_IMPORTED_MODULE_3__.CharacterModule]
  });
})();

/***/ }),

/***/ 783:
/*!**************************************************!*\
  !*** ./src/app/character/character.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CharacterComponent: () => (/* binding */ CharacterComponent)
/* harmony export */ });
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highcharts */ 5080);
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts/highcharts-more */ 1825);
/* harmony import */ var highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var highcharts_modules_sankey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts/modules/sankey */ 8165);
/* harmony import */ var highcharts_modules_sankey__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_sankey__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_organization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/organization */ 5696);
/* harmony import */ var highcharts_modules_organization__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_organization__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var highcharts_modules_arc_diagram__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highcharts/modules/arc-diagram */ 2855);
/* harmony import */ var highcharts_modules_arc_diagram__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_arc_diagram__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var highcharts_modules_heatmap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! highcharts/modules/heatmap */ 6354);
/* harmony import */ var highcharts_modules_heatmap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_heatmap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var highcharts_modules_treemap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! highcharts/modules/treemap */ 2636);
/* harmony import */ var highcharts_modules_treemap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_treemap__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! highcharts/modules/exporting */ 224);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var highcharts_modules_export_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! highcharts/modules/export-data */ 5360);
/* harmony import */ var highcharts_modules_export_data__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_export_data__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var highcharts_modules_accessibility__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! highcharts/modules/accessibility */ 2680);
/* harmony import */ var highcharts_modules_accessibility__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_accessibility__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _shared_data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/data-service */ 4738);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ 6658);
















const _c0 = ["bubble"];
const _c1 = ["chart"];
const _c2 = ["locations"];
const _c3 = ["scenes"];
const _c4 = ["family"];
function CharacterComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "li")(1, "mat-checkbox", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function CharacterComponent_For_13_Template_mat_checkbox_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r11);
      const subtask_r7 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](subtask_r7.checked = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const subtask_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", subtask_r7.checked)("color", subtask_r7.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", subtask_r7.name, " ");
  }
}
function CharacterComponent_div_20_img_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "img", 21);
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("alt", ctx_r12.charData.characterName);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", ctx_r12.charData.characterImageFull, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
  }
}
function CharacterComponent_div_20_img_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "img", 22);
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("alt", ctx_r13.charData.characterName);
  }
}
function CharacterComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "mat-card", 17)(2, "mat-card-header")(3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](8, CharacterComponent_div_20_img_8_Template, 1, 2, "img", 19)(9, CharacterComponent_div_20_img_9_Template, 1, 1, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r2.charData.characterName);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r2.charData.houseName);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.charData.characterImageFull);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r2.charData.characterImageFull);
  }
}
highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_1___default()(highcharts__WEBPACK_IMPORTED_MODULE_0__);
highcharts_modules_sankey__WEBPACK_IMPORTED_MODULE_2___default()(highcharts__WEBPACK_IMPORTED_MODULE_0__);
highcharts_modules_organization__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_0__);
highcharts_modules_arc_diagram__WEBPACK_IMPORTED_MODULE_4___default()(highcharts__WEBPACK_IMPORTED_MODULE_0__);
highcharts_modules_heatmap__WEBPACK_IMPORTED_MODULE_5___default()(highcharts__WEBPACK_IMPORTED_MODULE_0__);
highcharts_modules_treemap__WEBPACK_IMPORTED_MODULE_6___default()(highcharts__WEBPACK_IMPORTED_MODULE_0__);
highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_7___default()(highcharts__WEBPACK_IMPORTED_MODULE_0__);
highcharts_modules_export_data__WEBPACK_IMPORTED_MODULE_8___default()(highcharts__WEBPACK_IMPORTED_MODULE_0__);
highcharts_modules_accessibility__WEBPACK_IMPORTED_MODULE_9___default()(highcharts__WEBPACK_IMPORTED_MODULE_0__);
class CharacterComponent {
  chageFamilyType(checked) {
    this.showFamilyNames = checked;
    this.setAll(true);
    this.selectDefaultCharacter();
    this.setCharSelectionChart();
  }
  setAll(checked) {
    this.task.checked = checked;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => t.checked = checked);
  }
  constructor(dataService) {
    this.dataService = dataService;
    this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_0__;
    // Menu
    this.showFamilyNames = true;
    this.task = {
      name: 'Select All Seasons',
      checked: true,
      color: 'primary',
      subtasks: [{
        name: '1',
        checked: true,
        color: 'primary'
      }, {
        name: '2',
        checked: true,
        color: 'primary'
      }, {
        name: '3',
        checked: true,
        color: 'primary'
      }, {
        name: '4',
        checked: true,
        color: 'primary'
      }, {
        name: '5',
        checked: true,
        color: 'primary'
      }, {
        name: '6',
        checked: true,
        color: 'primary'
      }, {
        name: '7',
        checked: true,
        color: 'primary'
      }, {
        name: '8',
        checked: true,
        color: 'primary'
      }]
    };
    this.houseSeries = [];
    this.nameSeries = [];
    this.noHouseNames = [];
    this.noHouseSeries = [];
    this.noNameSeries = [];
    this.houseColors = {
      Targaryen: "#FFDEAD",
      Greyjoy: "#778899",
      Lannister: "#DC143C",
      Stark: "#F0F8FF",
      Baratheon: "#E6CDFF",
      Frey: "#CDE6FF",
      Tully: "#87CEFA",
      Martell: "#FFEBAF",
      Mormont: "FFFAFA",
      Tyrell: "#CDFFCD",
      Arryn: "#00BFFF",
      Umber: "#F8F8FF",
      Bolton: "#778899",
      Tarly: "#7FFFD4",
      "No Family": "#5F9EA0"
    };
    this.familyData = [];
    this.familyLevels = [];
    this.familyNodes = [];
    this.bubbleSeries = [];
    this.dataService.readFiles();
  }
  ngOnInit() {
    this.dataService.globalData.subscribe(data => {
      this.globalData = data;
      this.init();
    });
  }
  ngAfterViewInit() {}
  init() {
    this.setHouseNames();
    this.setCharSelectionChart();
  }
  setHouseNames() {
    const houseNamesSet = new Set();
    this.globalData.characters.forEach(character => {
      if (typeof character.houseName === 'string') {
        houseNamesSet.add(character.houseName);
      } else if (Array.isArray(character.houseName)) {
        character.houseName.forEach(name => {
          houseNamesSet.add(name);
        });
      }
    });
    const houses = Array.from(houseNamesSet);
    this.houseNames = [];
    houses.forEach(h => {
      this.houseNames.push({
        name: h,
        categories: []
      });
    });
    this.noHouseNames.push({
      name: 'No Family',
      categories: []
    });
    this.presetHouseDonutData();
  }
  presetHouseDonutData() {
    const chars = this.globalData.characters;
    for (let i = 0; i < chars.length; i++) {
      const char = chars[i];
      if (!char['houseName']) {
        this.noHouseNames[0].categories.push(char['characterName']);
      } else if (typeof char['houseName'] === 'string') {
        this.addCharHouse(char['characterName'], char['houseName']);
      } else if (Array.isArray(char['houseName'])) {
        char['houseName'].forEach(house => {
          this.addCharHouse(char['characterName'], house);
        });
      }
    }
    this.setDonutData();
  }
  setDonutData() {
    this.houseSeries = [];
    this.nameSeries = [];
    this.houseNames.forEach(hn => {
      this.houseSeries.push({
        name: hn['name'],
        y: hn['categories'].length,
        color: this.houseColors[hn['name']]
      });
      hn['categories'].forEach(name => {
        this.nameSeries.push({
          name: name,
          y: 1,
          color: this.houseColors[hn['name']]
        });
      });
    });
    this.noHouseSeries.push({
      name: this.noHouseNames[0]['name'],
      y: this.noHouseNames[0]['categories'].length,
      color: this.houseColors[this.noHouseNames[0]['name']]
    });
    this.noHouseNames[0]['categories'].forEach(name => {
      this.noNameSeries.push({
        name: name,
        y: 1,
        color: this.houseColors[this.noHouseNames[0]['name']]
      });
    });
    this.selectDefaultCharacter();
  }
  selectDefaultCharacter() {
    if (this.showFamilyNames) {
      this.selectCharacter(this.nameSeries[2]);
    } else {
      this.selectCharacter(this.noNameSeries[20]);
    }
  }
  addCharHouse(name, house) {
    const houseRef = this.houseNames.find(h => h.name == house);
    if (houseRef) {
      houseRef.categories.push(name);
    }
  }
  setCharSelectionChart() {
    let nameSeries;
    let houseSeries;
    if (this.showFamilyNames) {
      nameSeries = this.nameSeries;
      houseSeries = this.houseSeries;
    } else {
      nameSeries = this.noNameSeries;
      houseSeries = this.noHouseSeries;
    }
    const options = {
      chart: {
        renderTo: 'container',
        type: 'pie',
        backgroundColor: '#DCDCDC'
      },
      title: {
        text: 'Main Houses'
      },
      tooltip: {
        formatter: function () {
          return '<b>' + this.point.name + '</b>';
        }
      },
      plotOptions: {
        pie: {
          shadow: true
        },
        series: {
          cursor: 'pointer',
          events: {
            click: function (event) {
              this.onCharacterClick(event);
            }.bind(this)
          }
        }
      },
      series: [{
        innerSize: 150,
        size: 300,
        data: nameSeries
      }, {
        innerSize: 100,
        size: 150,
        data: houseSeries
      }]
    };
    const chartElement = this.chartRef.nativeElement;
    // @ts-ignore
    highcharts__WEBPACK_IMPORTED_MODULE_0__.chart(chartElement, options);
  }
  onCharacterClick(event) {
    let charGraphData;
    if (this.showFamilyNames) {
      charGraphData = this.nameSeries[event['point']['index']];
    } else {
      charGraphData = this.noNameSeries[event['point']['index']];
    }
    this.selectCharacter(charGraphData);
  }
  onFamilyCharacterClick(event) {
    console.log(event, event.point.id);
    let charGraphData;
    if (event.point.id) {
      charGraphData = this.nameSeries.find(char => char.name == event.point.id);
      if (charGraphData) {
        this.selectCharacter(charGraphData);
      } else {
        charGraphData = this.noNameSeries.find(char => char.name == event.point.id);
        if (charGraphData) {
          this.selectCharacter(charGraphData);
        }
      }
    }
  }
  onBubbleCharacterClick(event) {
    const name = event.point.name;
    console.log(name);
    if (!this.selectFromNameSeries(name)) {
      this.selectFromNoNameSeries(name);
    }
  }
  selectFromNameSeries(name) {
    const charGraphData = this.nameSeries.find(char => char.name == name);
    console.log(charGraphData);
    if (charGraphData) {
      this.selectCharacter(charGraphData);
      return true;
    }
    return false;
  }
  selectFromNoNameSeries(name) {
    const charGraphData = this.noNameSeries.find(char => char.name == name);
    console.log(charGraphData);
    if (charGraphData) {
      this.selectCharacter(charGraphData);
      return true;
    }
    return false;
  }
  selectCharacter(charGraphData) {
    this.charData = this.globalData.characters.find(c => c['characterName'] == charGraphData['name']);
    const eps = this.globalData.episodes;
    console.debug('CHARACTER:', this.charData);
    let lastLocation;
    this.locations = [];
    this.scenesData = [];
    const timeElapsed = [];
    let minTime = 3600;
    let maxTime = 0;
    for (let i = 0; i < eps.length; i++) {
      for (let j = 0; j < eps[i]['scenes'].length; j++) {
        const seasonSelected = this.task.subtasks.find(st => st.name == eps[i]['seasonNum'] + '');
        if (!seasonSelected.checked) {
          continue;
        }
        const t = eps[i]['scenes'][j]['characters'].find(char => char['name'] == this.charData['characterName']);
        if (t) {
          const location = eps[i]['scenes'][j]['location'];
          if (!lastLocation) {
            lastLocation = location;
          } else {
            if (lastLocation != location) {
              this.locations.push([lastLocation, location, 1]);
              lastLocation = location;
            }
          }
          const sdata = {
            name: 'S' + eps[i]['seasonNum'] + 'E' + eps[i]['episodeNum'] + 'S' + (j + 1),
            value: eps[i]['seasonNum'],
            colorValue: eps[i]['seasonNum']
          };
          this.scenesData.push(sdata);
          const elapsed = this.calcElapsedSeconds(eps[i]['scenes'][j]['sceneStart'], eps[i]['scenes'][j]['sceneEnd']);
          timeElapsed.push(elapsed);
          if (elapsed < minTime) {
            minTime = elapsed;
          }
          if (elapsed > maxTime) {
            maxTime = elapsed;
          }
        }
      }
    }
    if (this.locations.length == 0) {
      this.locations.push([lastLocation, lastLocation, 1]);
    }
    for (let i = 0; i < this.scenesData.length; i++) {
      this.scenesData[i]['value'] = timeElapsed[i] / minTime;
    }
    console.debug('LOCATIONS', this.locations);
    console.debug('SCENES', this.scenesData);
    // console.debug('TIME ELAPSED', timeElapsed, minTime);
    this.setLocationsChart();
    this.setScenesChart();
    this.setBubbleChart();
    this.familyData = [];
    this.familyNodes = [];
    this.addCharAndParents(this.charData, '#DC143C');
    if (this.charData['siblings']) {
      this.charData['siblings'].forEach(sib => {
        const s = this.globalData.characters.find(s => s['characterName'] == sib);
        if (s) {
          this.addCharAndParents(s);
        }
      });
    }
    this.setFamilyTreeChart();
  }
  addCharAndParents(charData, color = null) {
    const node = {
      id: charData['characterName'],
      title: charData.houseName ? typeof charData.houseName == 'string' ? charData.houseName : charData.houseName.join(', ') : '---',
      name: charData['characterName'],
      image: charData['characterImageThumb']
    };
    if (color) {
      node['color'] = color;
    }
    console.log('NODE', node);
    this.familyNodes.push(node);
    if (charData['parents']) {
      charData['parents'].forEach(parent => {
        this.familyData.push([parent, charData['characterName']]);
        const p = this.globalData.characters.find(c => c['characterName'] == parent);
        this.familyNodes.push({
          id: parent,
          title: p.houseName ? typeof p.houseName == 'string' ? p.houseName : p.houseName.join(', ') : '---',
          name: parent,
          image: p ? p['characterImageThumb'] : 'assets/placeholder.jpg'
        });
      });
    }
    if (charData['parentOf']) {
      charData['parentOf'].forEach(son_daughter => {
        this.familyData.push([charData['characterName'], son_daughter]);
        const sd = this.globalData.characters.find(c => c['characterName'] == son_daughter);
        this.familyNodes.push({
          id: son_daughter,
          title: sd.houseName ? typeof sd.houseName == 'string' ? sd.houseName : sd.houseName.join(', ') : '---',
          name: son_daughter,
          image: sd ? sd['characterImageThumb'] : 'assets/placeholder.jpg'
        });
      });
    } else {
      this.familyData.push([charData['characterName'], '---']);
      this.familyNodes.push({
        id: '---',
        title: '---',
        name: '---',
        image: 'assets/placeholder.jpg'
      });
    }
  }
  calcElapsedSeconds(tStart, tEnd) {
    const [hours, minutes, seconds] = tStart.split(':').map(Number);
    const tS = hours * 3600 + minutes * 60 + seconds;
    const [hours1, minutes1, seconds1] = tEnd.split(':').map(Number);
    const tE = hours1 * 3600 + minutes1 * 60 + seconds1;
    return tE - tS;
  }
  setLocationsChart() {
    const options = {
      chart: {
        inverted: false,
        height: 400,
        backgroundColor: '#DCDCDC'
      },
      colors: ['#293462', '#a64942', '#fe5f55', '#fff1c1', '#5bd1d7', '#ff502f', '#004d61', '#ff8a5c', '#fff591', '#f5587b', '#fad3cf', '#a696c8', '#5BE7C4', '#266A2E', '#593E1A'],
      title: {
        text: 'Character Journey'
      },
      accessibility: {
        description: 'Character journey.',
        point: {
          valueDescriptionFormat: 'Connection from {point.from} to {point.to}.'
        }
      },
      series: [{
        keys: ['from', 'to', 'weight'],
        type: 'arcdiagram',
        name: 'Character Journey',
        linkWeight: 1,
        centeredLinks: true,
        dataLabels: {
          rotation: 0,
          y: 30,
          verticalAlign: 'top',
          color: 'black',
          padding: 0
        },
        offset: '100%',
        data: this.locations
      }]
    };
    const locChartElement = this.locationsRef.nativeElement;
    // @ts-ignore
    highcharts__WEBPACK_IMPORTED_MODULE_0__.chart(locChartElement, options);
  }
  setScenesChart() {
    const options = {
      chart: {
        height: 380,
        backgroundColor: '#DCDCDC'
      },
      colorAxis: {
        minColor: '#FFFFFF',
        maxColor: highcharts__WEBPACK_IMPORTED_MODULE_0__.getOptions().colors[0]
      },
      series: [{
        type: 'treemap',
        layoutAlgorithm: 'squarified',
        clip: false,
        data: this.scenesData
      }],
      title: {
        text: 'Scenes With Charater'
      }
    };
    // @ts-ignore
    highcharts__WEBPACK_IMPORTED_MODULE_0__.chart(this.scenesRef.nativeElement, options);
  }
  setFamilyTreeChart() {
    const options = {
      chart: {
        height: 400,
        inverted: true,
        backgroundColor: '#DCDCDC'
      },
      plotOptions: {
        series: {
          cursor: 'pointer',
          events: {
            click: function (event) {
              this.onFamilyCharacterClick(event);
            }.bind(this)
          }
        }
      },
      title: {
        text: 'Family Tree'
      },
      accessibility: {
        point: {
          descriptionFormat: '{add index 1}. {toNode.name}' + '{#if (ne toNode.name toNode.id)}, {toNode.id}{/if}, ' + 'reports to {fromNode.id}'
        }
      },
      series: [{
        type: 'organization',
        name: 'Family Tree',
        keys: ['from', 'to'],
        data: this.familyData,
        levels: this.familyLevels,
        nodes: this.familyNodes,
        colorByPoint: false,
        color: '#778899',
        dataLabels: {
          color: 'white'
        },
        borderColor: 'white',
        nodeWidth: 'auto'
      }],
      tooltip: {
        outside: true
      },
      exporting: {
        allowHTML: true,
        sourceWidth: 800,
        sourceHeight: 600
      }
    };
    // @ts-ignore
    highcharts__WEBPACK_IMPORTED_MODULE_0__.chart(this.familyRef.nativeElement, options);
  }
  setBubbleChart() {
    this.setBubbleData(this.charData);
    const options = {
      chart: {
        type: 'packedbubble',
        height: '100%',
        backgroundColor: '#DCDCDC'
      },
      title: {
        text: 'Other Relations',
        align: 'left'
      },
      tooltip: {
        useHTML: true,
        pointFormat: '<b>{point.name}:</b> {point.value}'
      },
      plotOptions: {
        packedbubble: {
          minSize: '20%',
          maxSize: '100%',
          zMin: 0,
          zMax: 1000,
          layoutAlgorithm: {
            gravitationalConstant: 0.05,
            splitSeries: true,
            seriesInteraction: false,
            dragBetweenSeries: true,
            parentNodeLimit: true
          },
          dataLabels: {
            enabled: true,
            format: '{point.name}',
            filter: {
              property: 'y',
              operator: '>',
              value: 250
            },
            style: {
              color: 'black',
              textOutline: 'none',
              fontWeight: 'normal'
            }
          }
        },
        series: {
          cursor: 'pointer',
          events: {
            click: function (event) {
              this.onBubbleCharacterClick(event);
            }.bind(this)
          }
        }
      },
      series: this.bubbleSeries
    };
    // @ts-ignore
    highcharts__WEBPACK_IMPORTED_MODULE_0__.chart(this.bubbleRef.nativeElement, options);
  }
  setBubbleData(charData) {
    this.bubbleSeries = [];
    if (charData['killed']) {
      this.addBubble('Killed', charData['killed']);
    }
    if (charData['killedBy']) {
      this.addBubble('Killed By', charData['killedBy']);
    }
    if (charData['servedBy']) {
      this.addBubble('Served By', charData['servedBy']);
    }
    if (charData['serves']) {
      this.addBubble('Serves', charData['serves']);
    }
    if (charData['guardianOf']) {
      this.addBubble('Guardian Of', charData['guardianOf']);
    }
    if (charData['guardedBy']) {
      this.addBubble('Guarded By', charData['guardedBy']);
    }
    if (charData['marriedEngaged']) {
      this.addBubble('Married/Engaged', charData['marriedEngaged']);
    }
  }
  addBubble(title, itens) {
    const b = {
      name: title,
      data: []
    };
    itens.forEach(d => {
      const bItem = {
        name: d,
        value: 1
      };
      b['data'].push(bItem);
      this.scenesData.forEach(sd => {
        const numeros = sd['name'].match(/\d+/g);
        const ep = this.globalData.episodes.find(e => e['seasonNum'] == numeros[0] && e['episodeNum'] == numeros[1]);
        const found = ep['scenes'][parseInt(numeros[2], 10) - 1]['characters'].find(c => c['name'] == d);
        if (found) {
          bItem['value'] += 1;
        }
      });
    });
    this.bubbleSeries.push(b);
  }
  static #_ = this.ɵfac = function CharacterComponent_Factory(t) {
    return new (t || CharacterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_data_service__WEBPACK_IMPORTED_MODULE_10__.DataService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
    type: CharacterComponent,
    selectors: [["app-character"]],
    viewQuery: function CharacterComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c3, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c4, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.bubbleRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.chartRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.locationsRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.scenesRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.familyRef = _t.first);
      }
    },
    decls: 39,
    vars: 4,
    consts: [[1, "grid", "grid-pad"], [1, "col-1-12"], [1, "content"], [1, "example-section"], [1, "example-margin", 3, "checked", "change"], [1, "example-list-section"], [1, "col-4-12"], [2, "width", "100%", "height", "400px"], ["chart", ""], [4, "ngIf"], ["family", ""], [1, "col-2-12"], ["bubble", ""], ["scenes", ""], [1, "col-8-12"], ["locations", ""], [3, "ngModel", "color", "ngModelChange"], [1, "example-card", 2, "width", "140px", "height", "180px"], [1, ""], ["style", "width: 140px;", 3, "src", "alt", 4, "ngIf"], ["style", "width: 140px;", "mat-card-image", "", "src", "assets/placeholder.jpg", 3, "alt", 4, "ngIf"], [2, "width", "140px", 3, "src", "alt"], ["mat-card-image", "", "src", "assets/placeholder.jpg", 2, "width", "140px", 3, "alt"]],
    template: function CharacterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "section", 3)(4, "mat-checkbox", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function CharacterComponent_Template_mat_checkbox_change_4_listener($event) {
          return ctx.chageFamilyType($event.checked);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "Main Houses");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "section", 3)(7, "span", 5)(8, "mat-checkbox", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function CharacterComponent_Template_mat_checkbox_change_8_listener($event) {
          return ctx.setAll($event.checked);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "span", 5)(11, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrepeaterCreate"](12, CharacterComponent_For_13_Template, 3, 3, "li", null, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrepeaterTrackByIdentity"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "div", 6)(15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](16, "div", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "div", 1)(19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](20, CharacterComponent_div_20_Template, 10, 4, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "div", 6)(22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](23, "div", 7, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](25, "div", 11)(26, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](27, "div", 7, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](29, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](30, "div", 0)(31, "div", 6)(32, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](33, "div", 7, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](35, "div", 14)(36, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](37, "div", 7, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("checked", ctx.showFamilyNames);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("checked", ctx.task.checked);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx.task.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrepeater"](12, ctx.task.subtasks);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.charData);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardImage, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardTitle, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckbox],
    styles: [".image[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 190px;\n}\n\n.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.row[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.column[_ngcontent-%COMP%] {\n  flex: 10%;\n  padding: 5px;\n}\n\n\n\n\nfieldset[_ngcontent-%COMP%] {\n  border: 1px solid #ccc; \n\n  border-radius: 10px; \n\n  padding: 20px; \n\n}\n\n\n\n.time-segments[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 20px; \n\n  margin-top: 10px; \n\n}\n\n.segment[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.segment-0[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n\n.segment-1[_ngcontent-%COMP%] {\n  background-color: #FFA07A;\n}\n\n.segment-2[_ngcontent-%COMP%] {\n  background-color: #87CEEB;\n}\n\n.example-additional-selection[_ngcontent-%COMP%] {\n  opacity: 0.75;\n  font-size: 0.75em;\n}\n\n.highlighted-div[_ngcontent-%COMP%] {\n  outline: 2px solid #8B0000;\n}\n\n.image-gallery[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.image-gallery[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 200px;\n  height: auto;\n}\n\n.image-caption[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n\n\n\n.map-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.image-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n}\n\n.image-container[_ngcontent-%COMP%] {\n  margin-right: 0px;\n}\n\n.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 100%;\n  height: auto;\n}\n\n.zoom-window[_ngcontent-%COMP%] {\n  width: 800px;\n  border: 1px solid black;\n  background-repeat: no-repeat;\n}\n\n.square-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px; \n\n  left: 5px; \n\n  width: 50px; \n\n  height: 50px; \n\n  border: 2px solid red; \n\n  pointer-events: none; \n\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY2hhcmFjdGVyL2NoYXJhY3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxZQUFZO0FBQ2Q7O0FBRUEsU0FBUzs7QUFFVDtFQUNFLHNCQUFzQixFQUFFLHVCQUF1QjtFQUMvQyxtQkFBbUIsRUFBRSw2QkFBNkI7RUFDbEQsYUFBYSxFQUFFLDRCQUE0QjtBQUM3Qzs7QUFFQSxzQ0FBc0M7QUFDdEM7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVksRUFBRSx3Q0FBd0M7RUFDdEQsZ0JBQWdCLEVBQUUsaURBQWlEO0FBQ3JFOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQSxRQUFROztBQUVSO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVEsRUFBRSwrQkFBK0I7RUFDekMsU0FBUyxFQUFFLCtCQUErQjtFQUMxQyxXQUFXLEVBQUUsd0JBQXdCO0VBQ3JDLFlBQVksRUFBRSx1QkFBdUI7RUFDckMscUJBQXFCLEVBQUUsMEJBQTBCO0VBQ2pELG9CQUFvQixFQUFFLHdEQUF3RDtBQUNoRiIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTkwcHg7XG59XG5cbi5pbWFnZSBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG59XG5cbi5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uY29sdW1uIHtcbiAgZmxleDogMTAlO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi8qIE1BSU4gKi9cblxuZmllbGRzZXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjOyAvKiBBZGljaW9uYSB1bWEgYm9yZGEgKi9cbiAgYm9yZGVyLXJhZGl1czogMTBweDsgLyogRGVmaW5lIG8gcmFpbyBkb3MgY2FudG9zICovXG4gIHBhZGRpbmc6IDIwcHg7IC8qIEFkaWNpb25hIGVzcGHDg8KnbyBpbnRlcm5vICovXG59XG5cbi8qIEVzdGlsbyBwYXJhIG9zIHNlZ21lbnRvcyBkZSB0ZW1wbyAqL1xuLnRpbWUtc2VnbWVudHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMHB4OyAvKiBBanVzdGUgYSBhbHR1cmEgY29uZm9ybWUgbmVjZXNzw4PCoXJpbyAqL1xuICBtYXJnaW4tdG9wOiAxMHB4OyAvKiBBZGljaW9uZSBtYXJnZW0gc3VwZXJpb3IgY29uZm9ybWUgbmVjZXNzw4PCoXJpbyAqL1xufVxuXG4uc2VnbWVudCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNlZ21lbnQtMCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uc2VnbWVudC0xIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQTA3QTtcbn1cblxuLnNlZ21lbnQtMiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4N0NFRUI7XG59XG5cbi5leGFtcGxlLWFkZGl0aW9uYWwtc2VsZWN0aW9uIHtcbiAgb3BhY2l0eTogMC43NTtcbiAgZm9udC1zaXplOiAwLjc1ZW07XG59XG5cbi5oaWdobGlnaHRlZC1kaXYge1xuICBvdXRsaW5lOiAycHggc29saWQgIzhCMDAwMDtcbn1cblxuLmltYWdlLWdhbGxlcnkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5pbWFnZS1nYWxsZXJ5IGltZyB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uaW1hZ2UtY2FwdGlvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogTUFQICovXG5cbi5tYXAtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5pbWFnZS13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uaW1hZ2UtY29udGFpbmVyIHtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG59XG5cbi5pbWFnZS1jb250YWluZXIgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uem9vbS13aW5kb3cge1xuICB3aWR0aDogODAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4uc3F1YXJlLW92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4OyAvKiBBanVzdGUgY29uZm9ybWUgbmVjZXNzw4PCoXJpbyAqL1xuICBsZWZ0OiA1cHg7IC8qIEFqdXN0ZSBjb25mb3JtZSBuZWNlc3PDg8KhcmlvICovXG4gIHdpZHRoOiA1MHB4OyAvKiBMYXJndXJhIGRvIHF1YWRyYWRvICovXG4gIGhlaWdodDogNTBweDsgLyogQWx0dXJhIGRvIHF1YWRyYWRvICovXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDsgLyogQ29yIGUgZXN0aWxvIGRhIGJvcmRhICovXG4gIHBvaW50ZXItZXZlbnRzOiBub25lOyAvKiBHYXJhbnRlIHF1ZSBvIHF1YWRyYWRvIG7Dg8KjbyBjYXB0dXJlIGV2ZW50b3MgZGUgbW91c2UgKi9cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 8720:
/*!***********************************************!*\
  !*** ./src/app/character/character.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CharacterModule: () => (/* binding */ CharacterModule)
/* harmony export */ });
/* harmony import */ var _character_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./character.component */ 783);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 6208);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);



class CharacterModule {
  static #_ = this.ɵfac = function CharacterModule_Factory(t) {
    return new (t || CharacterModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: CharacterModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CharacterModule, {
    declarations: [_character_component__WEBPACK_IMPORTED_MODULE_0__.CharacterComponent],
    imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule]
  });
})();

/***/ }),

/***/ 6542:
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainComponent: () => (/* binding */ MainComponent)
/* harmony export */ });
/* harmony import */ var _home_s042637679_Projetos_westeros_got_viewer_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ 6355);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _scene_selector_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scene-selector.component */ 144);













const _c0 = ["selectSeason"];
const _c1 = ["selectEpisode"];
const _c2 = ["wrapper"];
const _c3 = ["image"];
const _c4 = ["zoom"];
function MainComponent_mat_option_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const temp_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", temp_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](temp_r12);
  }
}
function MainComponent_mat_option_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ep_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ep_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ep_r13);
  }
}
function MainComponent_div_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "mat-icon")(2, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MainComponent_div_61_Template_span_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r14.circleMove(0, 0));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "filter_center_focus");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-icon")(5, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MainComponent_div_61_Template_span_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r16.circleMove(-1, 0));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "arrow_circle_up");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-icon")(8, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MainComponent_div_61_Template_span_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r17.circleMove(1, 0));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "arrow_circle_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-icon")(11, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MainComponent_div_61_Template_span_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r18.circleMove(0, -1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "arrow_circle_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-icon")(14, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MainComponent_div_61_Template_span_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r19.circleMove(0, 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "arrow_circle_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" xPercent: ", ctx_r7.xPercent, " yPercent: ", ctx_r7.yPercent, " ");
  }
}
function MainComponent_h4_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"]("Characters on Scene (", ctx_r8.currentCharIdx - ctx_r8.charsPerPage >= 0 ? ctx_r8.currentCharIdx - ctx_r8.charsPerPage + 1 : 1, "..", ctx_r8.currentCharIdx, "/", ctx_r8.allCharBio.length, ")");
  }
}
function MainComponent_h4_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "No Characters Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function MainComponent_div_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MainComponent_div_68_Template_button_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r20.previousChars($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-icon")(3, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "arrow_back");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MainComponent_div_68_Template_button_click_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r22.nextChars($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-icon")(7, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "arrow_forward");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
}
function MainComponent_ng_container_69_div_1_ng_container_1_img_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 39);
  }
  if (rf & 2) {
    const char_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("alt", char_r27.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", char_r27.img, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function MainComponent_ng_container_69_div_1_ng_container_1_img_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 40);
  }
  if (rf & 2) {
    const char_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("alt", char_r27.name);
  }
}
function MainComponent_ng_container_69_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 34)(2, "mat-card", 35)(3, "mat-card-header")(4, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, MainComponent_ng_container_69_div_1_ng_container_1_img_9_Template, 1, 2, "img", 37)(10, MainComponent_ng_container_69_div_1_ng_container_1_img_10_Template, 1, 1, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const char_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](char_r27.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](char_r27.house);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", char_r27.img);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !char_r27.img);
  }
}
function MainComponent_ng_container_69_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MainComponent_ng_container_69_div_1_ng_container_1_Template, 11, 4, "ng-container", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r25.charBio.slice(i_r24, i_r24 + 3));
  }
}
function MainComponent_ng_container_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MainComponent_ng_container_69_div_1_Template, 2, 1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const i_r24 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r24 % 3 === 0);
  }
}
const _c5 = a0 => ({
  "width": a0
});
const _c6 = (a0, a1, a2, a3) => ({
  "background-image": a0,
  "background-size": a1,
  "width": a2,
  "height": a3,
  "position": "relative"
});
class MainComponent {
  constructor(http) {
    this.http = http;
    this.temporada = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('');
    this.temporadaList = [];
    this.episodio = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('');
    this.episodesListList = [];
    this.episodesList = [];
    this.selectedSeason = 1;
    this.selectedEpisode = 1;
    this.currentDescription = '';
    this.totalSeconds = 0;
    this.timeString = '0:00:00';
    this.episodeStart = 0;
    this.episodeLength = 5400;
    this.sceneTimeSecs = [];
    this.sceneSegments = [];
    this.charBio = [];
    this.clickSelected = 1;
    this.sceneData = {
      number: 1,
      characters: '',
      location: '',
      sublocation: '',
      start: '',
      end: ''
    };
    this.debugText = '';
    this.locationsData = [];
    this.allCharBio = [];
    this.currentCharIdx = 0;
    this.charsPerPage = 6;
    this.zoomDim = 480;
    this.zoomWH = this.zoomDim + 'px';
    this.zoomSize = '600%';
    this.xPercent = 0;
    this.yPercent = 0;
    this.circleRadius = 100;
    this.squareStyle = {};
    this.circleStyle = {};
    this.debugMap = false;
  }
  ngOnInit() {
    this.readFiles();
  }
  ngAfterViewInit() {
    this.setupMap();
  }
  readFiles() {
    var _this = this;
    return (0,_home_s042637679_Projetos_westeros_got_viewer_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.readEpisodes();
    })();
  }
  readEpisodes() {
    this.http.get('assets/episodes.json').subscribe(data => {
      this.episodes = data['episodes'];
      console.debug(this.episodes);
      this.readCharacters();
    });
  }
  readCharacters() {
    this.http.get('assets/characters.json').subscribe(data => {
      this.characters = data['characters'];
      console.debug(this.characters);
      this.readLocations();
    });
  }
  readLocations() {
    this.http.get('assets/locations.csv', {
      responseType: 'text'
    }).subscribe(data => {
      const resultData = [];
      const lines = data.split("\n") || [];
      const params = lines[0].split(",");
      if (lines.length > 1) {
        for (let i = 1; i < lines.length; i++) {
          const lineObj = {};
          const values = lines[i].split(",");
          for (let j = 0; j < values.length; j++) {
            lineObj[params[j]] = values[j];
          }
          resultData.push(lineObj);
        }
      }
      console.debug('locations', resultData);
      this.locationsData = resultData;
      this.init();
    }, error => {
      console.debug(error);
    });
  }
  init() {
    let eps;
    this.episodes.forEach(ep => {
      if (!this.temporadaList.includes(ep.seasonNum)) {
        this.temporadaList.push(ep.seasonNum);
        eps = [ep.episodeNum + ': ' + ep.episodeTitle];
        this.episodesListList.push(eps);
      } else {
        eps.push(ep.episodeNum + ': ' + ep.episodeTitle);
      }
    });
    this.selectSeason.value = this.selectedSeason;
    this.episodesList = this.episodesListList[this.selectedSeason - 1];
    this.selectEpisode.value = this.episodesList[0];
    this.selectEpisodeData();
  }
  pad(value) {
    return value < 10 ? `0${value}` : `${value}`;
  }
  onSeasonChange(event) {
    this.selectedSeason = event.value;
    this.episodesList = this.episodesListList[this.selectedSeason - 1];
    this.selectEpisode.value = this.episodesList[0];
    this.selectEpisodeData();
  }
  onEpisodeChange(event) {
    this.selectedEpisode = this.episodesList.indexOf(event.value) + 1;
    this.selectEpisodeData();
  }
  selectEpisodeData() {
    this.selectedEpisodeData = this.episodes.find(episodio => episodio.seasonNum === this.selectedSeason && episodio.episodeNum === this.selectedEpisode);
    this.currentDescription = this.selectedEpisodeData['episodeDescription'];
    const scenes = this.selectedEpisodeData['scenes'];
    this.totalSeconds = this.episodeStart = this.timeToSeconds(scenes[0]['sceneStart']);
    this.episodeLength = this.timeToSeconds(scenes[scenes.length - 1]['sceneEnd']);
    this.calcSceneSegments();
    this.setSceneData(0);
    this.debugChoice(0);
    this.clickSelected = 1;
    this.findCharacters();
    this.locateOnMap();
  }
  calcSceneSegments() {
    const segs = [];
    this.sceneTimeSecs = [];
    let min = 10000;
    this.selectedEpisodeData['scenes'].forEach(scene => {
      const elapsed = this.timeToSeconds(scene['sceneStart']);
      const sec = this.timeToSeconds(scene['sceneEnd']) - elapsed;
      if (sec < min) {
        min = sec;
      }
      this.sceneTimeSecs.push(elapsed);
      segs.push(sec);
    });
    this.sceneSegments = [];
    segs.forEach(seg => {
      this.sceneSegments.push(Math.round(seg / min * 100) / 100);
    });
  }
  timeToSeconds(timeString) {
    const [hours, minutes, seconds] = timeString.split(':').map(Number);
    return hours * 3600 + minutes * 60 + seconds;
  }
  setSceneData(sceneIndex) {
    this.sceneData.number = sceneIndex + 1;
    const scene = this.selectedEpisodeData['scenes'][sceneIndex];
    this.sceneData.characters = scene['characters'].map(o => o.name).join(', ');
    this.sceneData.location = scene['location'];
    this.sceneData.sublocation = scene['subLocation'] || '';
    this.sceneData.start = scene['sceneStart'];
    this.sceneData.end = scene['sceneEnd'];
  }
  debugChoice(sceneIndex) {
    const scene = this.selectedEpisodeData['scenes'][sceneIndex];
    this.debugText = 'Scene Number: ' + (sceneIndex + 1) + '\n';
    this.debugText += 'Scene Start: ' + scene['sceneStart'] + '\n';
    this.debugText += 'Scene End: ' + scene['sceneEnd'] + '\n';
    this.debugText += 'Characters: ' + scene['characters'].map(o => o.name).join(', ') + '\n';
    this.debugText += 'Location: ' + scene['location'] + '\n';
    this.debugText += 'Sublocation: ' + scene['subLocation'];
  }
  onSceneHover(sceneIndex) {
    this.debugChoice(sceneIndex);
  }
  onSceneSearch(sceneIndex) {
    this.onSceneHover(sceneIndex);
  }
  onSceneSearchChange(sceneIndex) {}
  onSceneSearchEnd(sceneIndex) {
    this.debugChoice(this.clickSelected - 1);
  }
  onSceneSelect(sceneIndex) {
    this.onSceneClick(sceneIndex);
  }
  onSceneHoverOut(sceneIndex) {}
  onSceneClick(sceneIndex) {
    this.setSceneData(sceneIndex);
    this.clickSelected = sceneIndex + 1;
    const scene = this.selectedEpisodeData['scenes'][sceneIndex];
    this.totalSeconds = this.timeToSeconds(scene['sceneStart']);
    this.findCharacters();
    this.locateOnMap();
    this.debugChoice(sceneIndex);
  }
  findCharacters() {
    this.currentCharIdx = 0;
    const sceneCharData = [];
    this.charBio = [];
    this.allCharBio = [];
    this.sceneData.characters.split(', ').forEach(char => {
      const charData = this.characters.find(charRef => charRef['characterName'] === char);
      if (charData) {
        sceneCharData.push(charData);
        const bio = {
          name: char,
          img: charData['characterImageFull'],
          house: charData.houseName ? typeof charData.houseName == 'string' ? charData.houseName : charData.houseName.join(', ') : '---'
        };
        this.allCharBio.push(bio);
        if (this.currentCharIdx < this.charsPerPage) {
          this.charBio.push(bio);
          this.currentCharIdx++;
        }
      } else {
        console.debug('Characeter NOT FOUND:', char);
      }
    });
  }
  previousChars($event) {
    if (this.currentCharIdx < this.charsPerPage) {
      return;
    }
    this.currentCharIdx -= 2 * this.charsPerPage;
    if (this.currentCharIdx < 0) {
      this.currentCharIdx = 0;
    }
    this.placeCharactersForView();
  }
  nextChars($event) {
    if (this.allCharBio.length <= this.currentCharIdx) {
      return;
    }
    this.placeCharactersForView();
  }
  placeCharactersForView() {
    this.charBio = [];
    let i = 0;
    while (this.currentCharIdx < this.allCharBio.length && i < this.charsPerPage) {
      this.charBio.push(this.allCharBio[this.currentCharIdx]);
      this.currentCharIdx++;
      i++;
    }
  }
  setupMap() {
    this.map = this.image.nativeElement;
    this.mapZoomed = this.zoom.nativeElement;
    this.originalWidth = this.map.naturalWidth;
    this.originalHeight = this.map.naturalHeight;
    const z = this.zoom.nativeElement;
    const zoomWidth = this.mapZoomed.offsetWidth;
    const zoomHeight = this.mapZoomed.offsetHeight;
    this.circleTop = (zoomHeight - this.circleRadius) / 2;
    this.circleLeft = (zoomWidth - this.circleRadius) / 2;
    this.circleStyle = {
      width: this.circleRadius + 'px',
      height: this.circleRadius + 'px',
      borderRadius: '50%',
      backgroundColor: 'rgba(255, 0, 0, 0.2)',
      position: 'absolute',
      top: this.circleTop + 'px',
      left: this.circleLeft + 'px'
    };
  }
  centerCircle() {
    this.circleStyle['top'] = this.circleTop + 'px';
    this.circleStyle['left'] = this.circleLeft + 'px';
  }
  moveCircle(moveTop, moveLeft) {
    this.circleStyle['top'] = this.circleTop + this.circleRadius * moveTop + 'px';
    this.circleStyle['left'] = this.circleLeft + this.circleRadius * moveLeft + 'px';
  }
  round(n) {
    return Math.round(n * 100) / 100;
  }
  toggleMapDebug() {
    this.debugMap = !this.debugMap;
    if (this.debugMap) {
      this.circleMove(0, 0);
    }
  }
  circleMove(top, left) {
    this.moveCircle(top, left);
  }
  zoomImage(event) {
    if (!this.debugMap) {
      return;
    }
    const rect = this.map.getBoundingClientRect();
    const scale = this.map.naturalWidth / this.map.offsetWidth;
    const squareSize = this.zoomDim / scale;
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;
    const x = this.round(offsetX * scale);
    const y = this.round(offsetY * scale);
    this.xPercent = this.round(x / this.originalWidth * 100);
    this.yPercent = this.round(y / this.originalHeight * 100);
    const zoomWindow = document.querySelector('.zoom-window');
    zoomWindow.style['background-position'] = `${this.xPercent}% ${this.yPercent}%`;
    const left = event.clientX - rect.left - squareSize * (x / this.map.naturalWidth);
    const top = event.clientY - rect.top - squareSize * (y / this.map.naturalHeight);
    this.squareStyle = {
      left: `${left}px`,
      top: `${top}px`,
      width: `${squareSize}px`,
      height: `${squareSize}px`
    };
    console.debug(zoomWindow.style);
    console.debug(this.squareStyle);
  }
  locateOnMap() {
    const loc = this.locationsData.find(l => l['location'] == this.sceneData.location && l['subLocation'] == this.sceneData.sublocation);
    if (!loc) {
      console.debug('location not found :(');
      return;
    }
    this.xPercent = loc['x'];
    this.yPercent = loc['y'];
    this.moveCircle(loc['circleTop'], loc['clicleLeft']);
    // this.moveCircle(0,-1)
    const zoomWindow = document.querySelector('.zoom-window');
    zoomWindow.style['background-position'] = `${this.xPercent}% ${this.yPercent}%`;
    const rect = this.map.getBoundingClientRect();
    const left = rect['width'] * (this.xPercent / 100);
    const top = rect['height'] * (this.yPercent / 100);
    const scale = this.map.naturalWidth / this.map.offsetWidth;
    const squareSize = this.zoomDim / scale;
    this.squareStyle = {
      left: `${left}px`,
      top: `${top}px`,
      width: `${squareSize}px`,
      height: `${squareSize}px`
    };
  }
  static #_ = this.ɵfac = function MainComponent_Factory(t) {
    return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: MainComponent,
    selectors: [["app-main"]],
    viewQuery: function MainComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c3, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c4, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.selectSeason = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.selectEpisode = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.wrapper = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.image = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.zoom = _t.first);
      }
    },
    decls: 70,
    vars: 27,
    consts: [[1, "grid-pad"], [1, "col-1-3"], [1, "content"], [2, "font-family", "'Game of Thrones'"], [1, "col-1-2"], [3, "formControl", "selectionChange"], ["selectSeason", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "ml10"], ["selectEpisode", ""], ["id", "description", "rows", "12", "readonly", "", "disabled", "", 1, "", 2, "width", "100%", "resize", "none", 3, "innerHTML"], [3, "sceneData", "sceneSearch", "sceneSearchChange", "sceneSearchEnd", "sceneSelect"], ["id", "description", "rows", "20", "readonly", "", "disabled", "", 1, "", 2, "width", "100%", "resize", "none", 3, "ngModel", "ngModelChange"], [1, "no-margin", 2, "display", "flex"], [1, "no-margin", "container"], [1, "no-margin", "image-wrapper"], ["wrapper", ""], [1, "no-margin", "image-container"], ["src", "assets/selvag_map.jpg", "alt", "Imagem", 3, "ngStyle", "mousemove"], ["image", ""], [1, "square-overlay", 3, "ngStyle"], [1, "no-margin", "zoom-window", 2, "margin-top", "4px", 3, "ngStyle"], ["zoom", ""], [1, "circle", 3, "ngStyle"], [1, "material-symbols-outlined", 3, "click"], [4, "ngIf"], [1, "example-button-row"], [4, "ngFor", "ngForOf"], [3, "value"], ["mat-icon-button", "", "color", "secondary", "aria-label", "previews characters", 3, "click"], [1, "material-symbols-outlined"], ["mat-icon-button", "", "color", "secondary", "aria-label", "next characters", 3, "click"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "column"], [1, "example-card", 2, "width", "190px"], [1, "image"], [3, "src", "alt", 4, "ngIf"], ["mat-card-image", "", "src", "assets/placeholder.jpg", 3, "alt", 4, "ngIf"], [3, "src", "alt"], ["mat-card-image", "", "src", "assets/placeholder.jpg", 3, "alt"]],
    template: function MainComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Game of Thrones Viewer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Select Episode");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 0)(8, "div", 4)(9, "div", 2)(10, "mat-form-field")(11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Season Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-select", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectionChange", function MainComponent_Template_mat_select_selectionChange_13_listener($event) {
          return ctx.onSeasonChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-select-trigger");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, MainComponent_mat_option_17_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 4)(19, "div", 2)(20, "mat-form-field", 8)(21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Episode Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "mat-select", 5, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectionChange", function MainComponent_Template_mat_select_selectionChange_23_listener($event) {
          return ctx.onEpisodeChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "mat-select-trigger");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, MainComponent_mat_option_27_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div")(29, "textarea", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 0)(32, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Select Scene");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 4)(35, "div", 2)(36, "app-scene-selector", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("sceneSearch", function MainComponent_Template_app_scene_selector_sceneSearch_36_listener($event) {
          return ctx.onSceneSearch($event);
        })("sceneSearchChange", function MainComponent_Template_app_scene_selector_sceneSearchChange_36_listener($event) {
          return ctx.onSceneSearchChange($event);
        })("sceneSearchEnd", function MainComponent_Template_app_scene_selector_sceneSearchEnd_36_listener($event) {
          return ctx.onSceneSearchEnd($event);
        })("sceneSelect", function MainComponent_Template_app_scene_selector_sceneSelect_36_listener($event) {
          return ctx.onSceneSelect($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 4)(38, "div", 2)(39, "div")(40, "textarea", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function MainComponent_Template_textarea_ngModelChange_40_listener($event) {
          return ctx.debugText = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 1)(43, "div", 2)(44, "div")(45, "div", 13)(46, "div", 14)(47, "div", 15, 16)(49, "div", 17)(50, "img", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousemove", function MainComponent_Template_img_mousemove_50_listener($event) {
          return ctx.zoomImage($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div")(57, "div")(58, "mat-icon")(59, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MainComponent_Template_span_click_59_listener() {
          return ctx.toggleMapDebug();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "bug_report");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](61, MainComponent_div_61_Template, 17, 2, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 1)(63, "div", 2)(64, "section")(65, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](66, MainComponent_h4_66_Template, 2, 3, "h4", 25)(67, MainComponent_h4_67_Template, 2, 0, "h4", 25)(68, MainComponent_div_68_Template, 9, 0, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](69, MainComponent_ng_container_69_Template, 2, 1, "ng-container", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.temporada);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.temporada.value || "", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.temporadaList);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.episodio);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.episodio.value || "", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.episodesList);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx.currentDescription, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("sceneData", ctx.sceneSegments);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.debugText);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("grid-area", "content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](20, _c5, ctx.zoomWH));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx.squareStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction4"](22, _c6, "url(" + "assets/selvag_map.jpg" + ")", ctx.zoomSize, ctx.zoomWH, ctx.zoomWH));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx.circleStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.debugMap);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currentCharIdx > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currentCharIdx == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currentCharIdx > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.charBio);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelect, _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelectTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatOption, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardImage, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _scene_selector_component__WEBPACK_IMPORTED_MODULE_1__.SceneSelectorComponent],
    styles: [".image[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 190px;\n}\n\n.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.row[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.column[_ngcontent-%COMP%] {\n  flex: 10%;\n  padding: 5px;\n}\n\n\n\n\nfieldset[_ngcontent-%COMP%] {\n  border: 1px solid #ccc; \n\n  border-radius: 10px; \n\n  padding: 20px; \n\n}\n\n\n\n.time-segments[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 20px; \n\n  margin-top: 10px; \n\n}\n\n.segment[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.segment-0[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n\n.segment-1[_ngcontent-%COMP%] {\n  background-color: #FFA07A;\n}\n\n.segment-2[_ngcontent-%COMP%] {\n  background-color: #87CEEB;\n}\n\n.example-additional-selection[_ngcontent-%COMP%] {\n  opacity: 0.75;\n  font-size: 0.75em;\n}\n\n.highlighted-div[_ngcontent-%COMP%] {\n  outline: 2px solid #8B0000;\n}\n\n.image-gallery[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.image-gallery[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 200px;\n  height: auto;\n}\n\n.image-caption[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n\n\n\n.map-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.image-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n}\n\n.image-container[_ngcontent-%COMP%] {\n  margin-right: 0px;\n}\n\n.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 100%;\n  height: auto;\n}\n\n.zoom-window[_ngcontent-%COMP%] {\n  width: 800px;\n  border: 1px solid black;\n  background-repeat: no-repeat;\n}\n\n.square-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px; \n\n  left: 5px; \n\n  width: 50px; \n\n  height: 50px; \n\n  border: 2px solid red; \n\n  pointer-events: none; \n\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsU0FBUztFQUNULFlBQVk7QUFDZDs7QUFFQSxTQUFTOztBQUVUO0VBQ0Usc0JBQXNCLEVBQUUsdUJBQXVCO0VBQy9DLG1CQUFtQixFQUFFLDZCQUE2QjtFQUNsRCxhQUFhLEVBQUUsNEJBQTRCO0FBQzdDOztBQUVBLHNDQUFzQztBQUN0QztFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsWUFBWSxFQUFFLHdDQUF3QztFQUN0RCxnQkFBZ0IsRUFBRSxpREFBaUQ7QUFDckU7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBLFFBQVE7O0FBRVI7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtFQUN2Qiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUSxFQUFFLCtCQUErQjtFQUN6QyxTQUFTLEVBQUUsK0JBQStCO0VBQzFDLFdBQVcsRUFBRSx3QkFBd0I7RUFDckMsWUFBWSxFQUFFLHVCQUF1QjtFQUNyQyxxQkFBcUIsRUFBRSwwQkFBMEI7RUFDakQsb0JBQW9CLEVBQUUsd0RBQXdEO0FBQ2hGIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxOTBweDtcbn1cblxuLmltYWdlIGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cblxuLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jb2x1bW4ge1xuICBmbGV4OiAxMCU7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLyogTUFJTiAqL1xuXG5maWVsZHNldCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7IC8qIEFkaWNpb25hIHVtYSBib3JkYSAqL1xuICBib3JkZXItcmFkaXVzOiAxMHB4OyAvKiBEZWZpbmUgbyByYWlvIGRvcyBjYW50b3MgKi9cbiAgcGFkZGluZzogMjBweDsgLyogQWRpY2lvbmEgZXNwYcODwqdvIGludGVybm8gKi9cbn1cblxuLyogRXN0aWxvIHBhcmEgb3Mgc2VnbWVudG9zIGRlIHRlbXBvICovXG4udGltZS1zZWdtZW50cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwcHg7IC8qIEFqdXN0ZSBhIGFsdHVyYSBjb25mb3JtZSBuZWNlc3PDg8KhcmlvICovXG4gIG1hcmdpbi10b3A6IDEwcHg7IC8qIEFkaWNpb25lIG1hcmdlbSBzdXBlcmlvciBjb25mb3JtZSBuZWNlc3PDg8KhcmlvICovXG59XG5cbi5zZWdtZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2VnbWVudC0wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5zZWdtZW50LTEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZBMDdBO1xufVxuXG4uc2VnbWVudC0yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg3Q0VFQjtcbn1cblxuLmV4YW1wbGUtYWRkaXRpb25hbC1zZWxlY3Rpb24ge1xuICBvcGFjaXR5OiAwLjc1O1xuICBmb250LXNpemU6IDAuNzVlbTtcbn1cblxuLmhpZ2hsaWdodGVkLWRpdiB7XG4gIG91dGxpbmU6IDJweCBzb2xpZCAjOEIwMDAwO1xufVxuXG4uaW1hZ2UtZ2FsbGVyeSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmltYWdlLWdhbGxlcnkgaW1nIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5pbWFnZS1jYXB0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKiBNQVAgKi9cblxuLm1hcC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmltYWdlLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5pbWFnZS1jb250YWluZXIge1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbn1cblxuLmltYWdlLWNvbnRhaW5lciBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi56b29tLXdpbmRvdyB7XG4gIHdpZHRoOiA4MDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5zcXVhcmUtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1cHg7IC8qIEFqdXN0ZSBjb25mb3JtZSBuZWNlc3PDg8KhcmlvICovXG4gIGxlZnQ6IDVweDsgLyogQWp1c3RlIGNvbmZvcm1lIG5lY2Vzc8ODwqFyaW8gKi9cbiAgd2lkdGg6IDUwcHg7IC8qIExhcmd1cmEgZG8gcXVhZHJhZG8gKi9cbiAgaGVpZ2h0OiA1MHB4OyAvKiBBbHR1cmEgZG8gcXVhZHJhZG8gKi9cbiAgYm9yZGVyOiAycHggc29saWQgcmVkOyAvKiBDb3IgZSBlc3RpbG8gZGEgYm9yZGEgKi9cbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7IC8qIEdhcmFudGUgcXVlIG8gcXVhZHJhZG8gbsODwqNvIGNhcHR1cmUgZXZlbnRvcyBkZSBtb3VzZSAqL1xufSJdLCJzb3VyY2VSb290IjoiIn0= */", ".example-accordion[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 500px;\n}\n\n.example-accordion-item[_ngcontent-%COMP%] {\n  display: block;\n  border: solid 1px #ccc;\n}\n\n.example-accordion-item[_ngcontent-%COMP%]    + .example-accordion-item[_ngcontent-%COMP%] {\n  border-top: none;\n}\n\n.example-accordion-item-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  justify-content: space-between;\n}\n\n.example-accordion-item-description[_ngcontent-%COMP%] {\n  font-size: 0.85em;\n  color: #999;\n}\n\n.example-accordion-item-header[_ngcontent-%COMP%], .example-accordion-item-body[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\n.example-accordion-item-header[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: #eee;\n}\n\n.example-accordion-item[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n\n.example-accordion-item[_ngcontent-%COMP%]:last-child {\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi9pbWFnZS12aWV3ZXIuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsK0JBQStCO0FBQ2pDIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtYWNjb3JkaW9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDogNTAwcHg7XG59XG5cbi5leGFtcGxlLWFjY29yZGlvbi1pdGVtIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XG59XG5cbi5leGFtcGxlLWFjY29yZGlvbi1pdGVtICsgLmV4YW1wbGUtYWNjb3JkaW9uLWl0ZW0ge1xuICBib3JkZXItdG9wOiBub25lO1xufVxuXG4uZXhhbXBsZS1hY2NvcmRpb24taXRlbS1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmV4YW1wbGUtYWNjb3JkaW9uLWl0ZW0tZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDAuODVlbTtcbiAgY29sb3I6ICM5OTk7XG59XG5cbi5leGFtcGxlLWFjY29yZGlvbi1pdGVtLWhlYWRlcixcbi5leGFtcGxlLWFjY29yZGlvbi1pdGVtLWJvZHkge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG4uZXhhbXBsZS1hY2NvcmRpb24taXRlbS1oZWFkZXI6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG59XG5cbi5leGFtcGxlLWFjY29yZGlvbi1pdGVtOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xufVxuXG4uZXhhbXBsZS1hY2NvcmRpb24taXRlbTpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 1679:
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainModule: () => (/* binding */ MainModule)
/* harmony export */ });
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.component */ 6542);
/* harmony import */ var _scene_selector_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scene-selector.component */ 144);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 6208);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);





class MainModule {
  static #_ = this.ɵfac = function MainModule_Factory(t) {
    return new (t || MainModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: MainModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MainModule, {
    declarations: [_main_component__WEBPACK_IMPORTED_MODULE_0__.MainComponent, _scene_selector_component__WEBPACK_IMPORTED_MODULE_1__.SceneSelectorComponent],
    imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule],
    exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule]
  });
})();

/***/ }),

/***/ 144:
/*!**************************************************!*\
  !*** ./src/app/main/scene-selector.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SceneSelectorComponent: () => (/* binding */ SceneSelectorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highcharts */ 5080);
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_0__);



const _c0 = ["chart"];
class SceneSelectorComponent {
  set sceneData(d) {
    this._sceneData = d;
    if (this._sceneData.length > 0) {
      this.seriesData = [];
      for (let i = 0; i < this._sceneData.length; i++) {
        this.seriesData.push(['Scene ' + (i + 1), this._sceneData[i]]);
      }
      ;
      this.init();
    }
  }
  get sceneData() {
    return this._sceneData;
  }
  constructor() {
    this.sceneSearch = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.sceneSearchEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.sceneSearchChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.sceneSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.seriesData = [];
    this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_0__;
  }
  ngAfterViewInit() {}
  init() {
    // Create the chart
    this.chartOptions = {
      chart: {
        renderTo: 'container',
        type: 'pie',
        backgroundColor: '#DCDCDC'
      },
      title: {
        text: null
      },
      yAxis: {
        title: {
          text: 'Scene Selector'
        }
      },
      plotOptions: {
        pie: {
          shadow: false,
          colors: ['rgba(0, 153, 255, 0.7)', 'rgba(255, 51, 51, 0.7)']
        },
        series: {
          cursor: 'pointer',
          events: {
            click: function (event) {
              this.onClick(event);
            }.bind(this),
            mouseOut: function (event) {
              this.onWheelOut(event);
            }.bind(this)
          },
          point: {
            events: {
              mouseOver: function (event) {
                this.onHover(event);
              }.bind(this),
              mouseOut: function (event) {
                this.onSegmentOut(event);
              }.bind(this)
            }
          }
        }
      },
      tooltip: {
        formatter: function () {
          return '<b>' + this.point.name + '</b>';
        }
      },
      series: [{
        name: 'Scenes',
        data: this.seriesData,
        size: '90%',
        innerSize: '30%',
        showInLegend: false,
        dataLabels: {
          enabled: false
        }
      }]
    };
    const chartElement = this.chartRef.nativeElement;
    highcharts__WEBPACK_IMPORTED_MODULE_0__.chart(chartElement, this.chartOptions);
  }
  onClick(event) {
    // console.log(event['point']['index']);
    this.sceneSelect.emit(event['point']['index']);
  }
  onHover(event) {
    // console.log(event['target']['index']);
    this.sceneSearch.emit(event['target']['index']);
  }
  onSegmentOut(event) {
    // console.log(event['target']['index']);
    this.sceneSearchChange.emit(event['target']['index']);
  }
  onWheelOut(event) {
    // console.log(event['target']['index']);
    this.sceneSearchEnd.emit(event['target']['index']);
  }
  static #_ = this.ɵfac = function SceneSelectorComponent_Factory(t) {
    return new (t || SceneSelectorComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SceneSelectorComponent,
    selectors: [["app-scene-selector"]],
    viewQuery: function SceneSelectorComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.chartRef = _t.first);
      }
    },
    inputs: {
      sceneData: "sceneData"
    },
    outputs: {
      sceneSearch: "sceneSearch",
      sceneSearchEnd: "sceneSearchEnd",
      sceneSearchChange: "sceneSearchChange",
      sceneSelect: "sceneSelect"
    },
    decls: 2,
    vars: 0,
    consts: [[2, "width", "100%", "height", "400px"], ["chart", ""]],
    template: function SceneSelectorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0, 1);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 4738:
/*!****************************************!*\
  !*** ./src/app/shared/data-service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataService: () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var _home_s042637679_Projetos_westeros_got_viewer_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);




class DataService {
  constructor(http) {
    this.http = http;
    this.globalData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  ngOnInit() {}
  readFiles() {
    var _this = this;
    return (0,_home_s042637679_Projetos_westeros_got_viewer_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('readFiles');
      _this.readEpisodes();
    })();
  }
  readEpisodes() {
    this.http.get('assets/episodes.json').subscribe(data => {
      this.episodes = data['episodes'];
      console.debug(this.episodes);
      this.readCharacters();
    });
  }
  readCharacters() {
    this.http.get('assets/characters.json').subscribe(data => {
      this.characters = data['characters'];
      console.debug(this.characters);
      this.readLocations();
    });
  }
  readLocations() {
    this.http.get('assets/locations.csv', {
      responseType: 'text'
    }).subscribe(data => {
      const resultData = [];
      const lines = data.split("\n") || [];
      const params = lines[0].split(",");
      if (lines.length > 1) {
        for (let i = 1; i < lines.length; i++) {
          const lineObj = {};
          const values = lines[i].split(",");
          for (let j = 0; j < values.length; j++) {
            lineObj[params[j]] = values[j];
          }
          resultData.push(lineObj);
        }
      }
      console.debug('locations', resultData);
      this.locationsData = resultData;
      this.globalData.emit({
        episodes: this.episodes,
        characters: this.characters,
        locationsData: this.locationsData
      });
    }, error => {
      console.debug(error);
    });
  }
  static #_ = this.ɵfac = function DataService_Factory(t) {
    return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: DataService,
    factory: DataService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 6208:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedModule: () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/slider */ 549);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ 6355);
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/accordion */ 8355);
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! highcharts-angular */ 8578);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-service */ 4738);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ 6658);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);














class SharedModule {
  static #_ = this.ɵfac = function SharedModule_Factory(t) {
    return new (t || SharedModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: SharedModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    providers: [_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__.MatSliderModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelectModule, _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_8__.CdkAccordionModule, highcharts_angular__WEBPACK_IMPORTED_MODULE_9__.HighchartsChartModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__.MatCheckboxModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__.MatSliderModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelectModule, _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_8__.CdkAccordionModule, highcharts_angular__WEBPACK_IMPORTED_MODULE_9__.HighchartsChartModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__.MatCheckboxModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, {
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__.MatSliderModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelectModule, _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_8__.CdkAccordionModule, highcharts_angular__WEBPACK_IMPORTED_MODULE_9__.HighchartsChartModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__.MatCheckboxModule],
    exports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_6__.MatSliderModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelectModule, _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_8__.CdkAccordionModule, highcharts_angular__WEBPACK_IMPORTED_MODULE_9__.HighchartsChartModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__.MatCheckboxModule]
  });
})();

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 553);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map