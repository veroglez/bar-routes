webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n\n  <nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" [routerLink]=\"['/']\"><img src=\"../assets/images/logo.png\" alt=\"\"></a>\n      </div>\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n        <ul class=\"nav navbar-nav navbar-right\">\n          <div *ngIf=\"user\">\n            <li><a [routerLink]=\"['/profile', user._id]\">Mi perfil</a></li>\n            <li><button style=\"background:transparent\" (click)=\"auth.logout().subscribe()\"> <span class=\"glyphicon glyphicon-off\" aria-hidden=\"true\"></span></button></li>\n          </div>\n          <div *ngIf=\"!user\">\n            <li><a [routerLink]=\"['/signup']\">Signup</a></li>\n            <li><a [routerLink]=\"['/login']\">Login</a></li>\n          </div>\n        </ul>\n      </div>\n    </div>\n  </nav>\n    <router-outlet></router-outlet>\n\n</div>\n\n<footer>\n\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(auth) {
        var _this = this;
        this.auth = auth;
        this.title = 'app';
        this.user = this.auth.getUser();
        this.auth.getLoginEventEmitter()
            .subscribe(function (user) { return _this.user = user; });
    }
    ;
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_google_maps_core__ = __webpack_require__("../../../../angular2-google-maps/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__map_google_map_directive__ = __webpack_require__("../../../../../src/app/map/google-map.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__map_map_component__ = __webpack_require__("../../../../../src/app/map/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__new_route_new_route_component__ = __webpack_require__("../../../../../src/app/new-route/new-route.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__loginform_loginform_component__ = __webpack_require__("../../../../../src/app/loginform/loginform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__signupform_signupform_component__ = __webpack_require__("../../../../../src/app/signupform/signupform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__userprofile_userprofile_component__ = __webpack_require__("../../../../../src/app/userprofile/userprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__editprofile_editprofile_component__ = __webpack_require__("../../../../../src/app/editprofile/editprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_verotronik_verotronik_component__ = __webpack_require__("../../../../../src/app/shared/verotronik/verotronik.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__new_route_data_new_route_data_component__ = __webpack_require__("../../../../../src/app/new-route-data/new-route-data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_places_service__ = __webpack_require__("../../../../../src/app/services/places.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_isLoggedIn_canactivate_service__ = __webpack_require__("../../../../../src/app/services/isLoggedIn.canactivate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__routes__ = __webpack_require__("../../../../../src/app/routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__show_routes_show_routes_component__ = __webpack_require__("../../../../../src/app/show-routes/show-routes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__show_simple_route_show_simple_route_component__ = __webpack_require__("../../../../../src/app/show-simple-route/show-simple-route.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// Packages

// Directives

// Components









// Services






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_13__signupform_signupform_component__["a" /* SignupformComponent */],
            __WEBPACK_IMPORTED_MODULE_12__loginform_loginform_component__["a" /* LoginformComponent */],
            __WEBPACK_IMPORTED_MODULE_14__userprofile_userprofile_component__["a" /* UserprofileComponent */],
            __WEBPACK_IMPORTED_MODULE_15__editprofile_editprofile_component__["a" /* EditprofileComponent */],
            __WEBPACK_IMPORTED_MODULE_16__shared_verotronik_verotronik_component__["a" /* VerotronikComponent */],
            __WEBPACK_IMPORTED_MODULE_9__map_map_component__["a" /* MapComponent */],
            __WEBPACK_IMPORTED_MODULE_11__new_route_new_route_component__["a" /* NewRouteComponent */],
            __WEBPACK_IMPORTED_MODULE_17__new_route_data_new_route_data_component__["a" /* NewRouteDataComponent */],
            __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__map_google_map_directive__["a" /* DirectionsMapDirective */],
            __WEBPACK_IMPORTED_MODULE_22__show_routes_show_routes_component__["a" /* ShowRoutesComponent */],
            __WEBPACK_IMPORTED_MODULE_23__show_simple_route_show_simple_route_component__["a" /* ShowSimpleRouteComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_21__routes__["a" /* routes */]),
            // ReactiveFormsModule,
            __WEBPACK_IMPORTED_MODULE_7_angular2_google_maps_core__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyD6kQpdkVk-xQXObw1jvODNoEgIOLDfVBc',
                libraries: ["places"]
            }),
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* ReactiveFormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_18__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_20__services_isLoggedIn_canactivate_service__["a" /* IsLoggedInService */], __WEBPACK_IMPORTED_MODULE_19__services_places_service__["a" /* PlacesService */], __WEBPACK_IMPORTED_MODULE_7_angular2_google_maps_core__["GoogleMapsAPIWrapper"]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/editprofile/editprofile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/editprofile/editprofile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container-section mg-top\">\n  <form class=\"center\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-6\">\n      <h2> Edit profile </h2>\n      <label> Username </label>\n      <input class=\"form-control\" type=\"text\" [(ngModel)]=\"formInfo.username\" name=\"username\" value=\"{{auth.user.username}}\"/>\n      <br>\n      <label> Password </label>\n      <input class=\"form-control\" type=\"password\" [(ngModel)]=\"formInfo.password\" name=\"password\" value=\"hola\"/>\n      <br>\n      <label> Email </label>\n      <input class=\"form-control\" type=\"text\" [(ngModel)]=\"formInfo.email\" name=\"email\" value=\"{{auth.user.email}}\"/>\n      <br>\n      <button class=\"btn btn-default\"  (click)=\"editProfile()\"> Edit </button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/editprofile/editprofile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditprofileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditprofileComponent = (function () {
    function EditprofileComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.formInfo = {
            username: "",
            password: "",
            email: ""
        };
    }
    EditprofileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.auth.getUser();
        this.auth.getLoginEventEmitter()
            .subscribe(function (user) {
            _this.user = user;
        });
    };
    EditprofileComponent.prototype.editProfile = function () {
        var _this = this;
        this.userId = this.auth.getUser();
        var _a = this.formInfo, username = _a.username, password = _a.password, email = _a.email;
        this.auth.editProfile(username, password, email)
            .map(function (user) { return console.log('holi', user); })
            .subscribe(function (result) { return _this.user = result; });
    };
    return EditprofileComponent;
}());
EditprofileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-editprofile',
        template: __webpack_require__("../../../../../src/app/editprofile/editprofile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/editprofile/editprofile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], EditprofileComponent);

var _a, _b;
//# sourceMappingURL=editprofile.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header h1{\n  color: white;\n  font-size: 6rem;\n  font-weight: 400;\n  /*text-shadow: 3px 3px #000;*/\n}\n\n.header .row{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n text-align: left;\n}\n.header .image{\n  height: 600px;\n  background: url(" + __webpack_require__("../../../../../src/assets/images/mobile-phone.png") + ");\n  background-size: contain;\n  background-repeat: no-repeat;\n  margin: auto;\n  margin-left: 10%;\n  background-position: 30% 20%;\n}\n.header .title{\n  padding-left: 10%;\n  margin: auto;\n  font-weight: 500;\n  text-align:left;\n}\n.header .title h1{\n  margin: 50px 0;\n  text-align: left;\n}\n\n.header{\n  padding-top: 80px;\n  height: 700px;\n  background: url(" + __webpack_require__("../../../../../src/assets/images/bar4.jpg") + ");\n  /*,linear-gradient(to left,#7b4397,#dc2430);*/\n  background-size: cover;\n  background-attachment: fixed;\n  /*filter: saturate(2);*/\n}\n\n.filter{\n  padding: 50px 0;\n  text-align: center;\n  width: 100%;\n  margin: 0;\n}\n.container{\n  width: 100%;\n}\n\n.filter .title{\n  color: #fdcc52;\n  margin: 50px 0;\n}\n.filter .title h2{\n  font-size: 5rem;\n}\n.filter .btn{\n  margin: 50px;\n  padding: 10px 30px\n}\n\n\n@media screen and (max-width: 768px){\n  .header .title  h1{\n    text-align: center;\n    font-size: 5rem;\n    font-weight: 300;\n    margin-bottom: 10px\n  }\n  .header .title{\n    padding-left: 0;\n    text-align: center;\n  }\n  .header{\n    overflow: hidden;\n    padding-bottom: 80px;\n    height: auto;\n  }\n\n  .row {\n      display: block;\n  }\n  .header .image{\n    display: none\n  }\n  .form-inline{\n    padding: 10px;\n  }\n\n  .profile{\n    text-align: center;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <div class=\"\">\n    <div class=\"col-xs-12 col-sm-6 col-md-6 title\">\n      <h1>Deja de estar perdido y encuentra tu ruta</h1>\n      <div *ngIf = \"user\">\n        <a [routerLink]=\"['/profile', user._id, 'routes','new']\"><button type=\"submit\" class=\"btn-create btn\">Crea tu ruta</button></a>\n      </div>\n      <div *ngIf = \"!user\">\n        <a [routerLink]=\"['/login']\"><button type=\"submit\" class=\"btn-create btn\">Crea tu ruta</button></a>\n      </div>\n    </div>\n    <div class=\"col-xs-12 col-sm-4 col-md-4 image\"><img src=\"\" alt=\"\"></div>\n  </div>\n</div>\n\n<div class=\"\">\n  <div class=\"filter\">\n    <form class=\"form-inline\">\n      <div class=\"title\"><h2>Elige tu ruta</h2></div>\n      <div class=\"form-group\">\n        <input class=\"form-control\" type=\"text\" [(ngModel)]=\"formInfo.city\" name=\"city\" placeholder=\"City\"/>\n      </div>\n      <div class=\"form-group\">\n        <select class=\"form-control input-lg\" [(ngModel)]=\"formInfo.schedule\" name=\"schedule\" placeholder=\"Seleccionar\">\n          <option value=\"\">--- Select schedule ---</option>\n          <option  *ngFor=\"let sched of schedule\" value=\"{{ sched }}\">{{ sched }}</option>\n        </select>\n      </div>\n      <div class=\"form-group\">\n        <select class=\"form-control input-lg\" [(ngModel)]=\"formInfo.routegenre\" name=\"routegenre\" placeholder=\"Seleccionar\">\n          <option value=\"\">--- Selecet type ---</option>\n          <option  *ngFor=\"let genre of places_genre\" value=\"{{ genre }}\">{{ genre }}</option>\n        </select>\n      </div>\n      <div class=\"form-group\">\n        <select class=\"form-control input-lg\" [(ngModel)]=\"formInfo.pricerange\" name=\"pricerange\" placeholder=\"Seleccionar\">\n          <option value=\"\">--- Select price ---</option>\n          <option  *ngFor=\"let price of price_range\" value=\"{{ price }}\">{{ price }}</option>\n        </select>\n      </div>\n      <br>\n\n      <a [routerLink]=\"['/routes']\">\n        <button type=\"submit\" (click)=\"searchRoutes()\" class=\"btn\">Buscar</button>\n      </a>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_places_service__ = __webpack_require__("../../../../../src/app/services/places.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(places, auth) {
        var _this = this;
        this.places = places;
        this.auth = auth;
        this.places_genre = [
            'Romantic',
            'Live music',
            'After',
            'Brunch',
        ];
        this.price_range = [
            'Cheap',
            'Moderate',
            'Expensive'
        ];
        this.schedule = [
            'Morning',
            'Afternoon',
            'Night'
        ];
        this.formInfo = {
            routename: "",
            routegenre: "",
            pricerange: "",
            schedule: "",
            city: ""
        };
        this.user = this.auth.getUser();
        this.auth.getLoginEventEmitter()
            .subscribe(function (user) { return _this.user = user; });
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent.prototype.searchRoutes = function () {
        var _a = this.formInfo, city = _a.city, schedule = _a.schedule, routegenre = _a.routegenre, pricerange = _a.pricerange;
        this.places.searchRoutes(city, schedule, routegenre, pricerange).subscribe(function (res) { return console.log('componente', res); });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_places_service__["a" /* PlacesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_places_service__["a" /* PlacesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/loginform/loginform.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login{\n  height: 90vh;\n  background: url(" + __webpack_require__("../../../../../src/assets/images/bar4.jpg") + ");\n  /*,linear-gradient(to left,#7b4397,#dc2430);*/\n  background-size: cover;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.login-form{\n  background: rgba(255,255,255,0.9);\n  margin: 100px auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: auto;\n}\n\n.form-group{\n  margin: 20px auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/loginform/loginform.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container login\">\n  <div class=\"col-md-6 col-xs-10 login-form\">\n    <form class=\"form-group col-md-8 col-xs-12\">\n      <h2> Login </h2>\n      <input class=\"form-control\" type=\"text\" [(ngModel)]=\"formInfo.username\" placeholder=\"Username\" name=\"username\"/>\n      <br>\n      <input class=\"form-control\" type=\"password\" [(ngModel)]=\"formInfo.password\" placeholder=\"Password\" name=\"password\"/>\n      <br>\n      <button class=\"btn btn-default\"  (click)=\"login()\"> login </button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/loginform/loginform.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginformComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginformComponent = (function () {
    function LoginformComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.formInfo = {
            username: "",
            password: ""
        };
    }
    LoginformComponent.prototype.ngOnInit = function () {
        console.log(this.auth.getUser());
    };
    LoginformComponent.prototype.login = function () {
        var _this = this;
        var _a = this.formInfo, username = _a.username, password = _a.password;
        if (username != "" && password != "") {
            console.log("Login with " + username + " " + password);
            this.auth.login(username, password)
                .map(function (user) { return console.log(user); })
                .subscribe(function () { return _this.router.navigate(["/"]); });
        }
        else {
            console.log("You must set a username and a password");
        }
    };
    return LoginformComponent;
}());
LoginformComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-loginform',
        template: __webpack_require__("../../../../../src/app/loginform/loginform.component.html"),
        styles: [__webpack_require__("../../../../../src/app/loginform/loginform.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginformComponent);

var _a, _b;
//# sourceMappingURL=loginform.component.js.map

/***/ }),

/***/ "../../../../../src/app/map/google-map.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectionsMapDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_google_maps_core__ = __webpack_require__("../../../../angular2-google-maps/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DirectionsMapDirective = (function () {
    function DirectionsMapDirective(gmapsApi) {
        this.gmapsApi = gmapsApi;
    }
    DirectionsMapDirective.prototype.updateDirections = function () {
        var _this = this;
        this.gmapsApi.getNativeMap().then(function (map) {
            if (!_this.originPlaceId || !_this.destinationPlaceId) {
                return;
            }
            var directionsService = new google.maps.DirectionsService;
            var me = _this;
            var latLngA = new google.maps.LatLng({ lat: _this.origin.latitude, lng: _this.origin.longitude });
            var latLngB = new google.maps.LatLng({ lat: _this.destination.latitude, lng: _this.destination.longitude });
            _this.directionsDisplay.setMap(map);
            _this.directionsDisplay.setOptions({
                polylineOptions: {
                    strokeWeight: 8,
                    strokeOpacity: 0.7,
                    strokeColor: '#00468c'
                }
            });
            console.log('origin', _this.originPlaceId);
            console.log('origin', _this.destinationPlaceId);
            _this.directionsDisplay.setDirections({ routes: [] });
            directionsService.route({
                origin: { placeId: _this.originPlaceId },
                destination: { placeId: _this.destinationPlaceId },
                waypoints: _this.waypoints,
                avoidHighways: true,
                travelMode: google.maps.DirectionsTravelMode.WALKING
                //travelMode: 'DRIVING'
            }, function (response, status) {
                if (status === 'OK') {
                    console.log('lugares:', this.originPlaceId, this.destinationPlaceId, this.waypoints);
                    me.directionsDisplay.setDirections(response);
                    map.setZoom(30);
                    var point = response.routes[0].legs[0];
                    me.estimatedTime = point.duration.text;
                    me.estimatedDistance = point.distance.text;
                    console.log(me.estimatedTime);
                    console.log('Estimated travel time: ' + point.duration.text + ' (' + point.distance.text + ')');
                }
                else {
                    console.log('Directions request failed due to ' + status);
                }
            });
        });
    };
    DirectionsMapDirective.prototype.getcomputeDistance = function (latLngA, latLngB) {
        return (google.maps.geometry.spherical.computeDistanceBetween(latLngA, latLngB) / 1000).toFixed(2);
    };
    return DirectionsMapDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DirectionsMapDirective.prototype, "origin", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DirectionsMapDirective.prototype, "destination", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DirectionsMapDirective.prototype, "originPlaceId", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DirectionsMapDirective.prototype, "destinationPlaceId", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DirectionsMapDirective.prototype, "waypoints", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DirectionsMapDirective.prototype, "directionsDisplay", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DirectionsMapDirective.prototype, "estimatedTime", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DirectionsMapDirective.prototype, "estimatedDistance", void 0);
DirectionsMapDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"])({
        selector: 'sebm-google-map-directions'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0_angular2_google_maps_core__["GoogleMapsAPIWrapper"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_angular2_google_maps_core__["GoogleMapsAPIWrapper"]) === "function" && _a || Object])
], DirectionsMapDirective);

var _a;
//# sourceMappingURL=google-map.directive.js.map

/***/ }),

/***/ "../../../../../src/app/map/map.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sebm-google-map-container {\n   height: 300px;\n }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/map/map.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6  col-xs-12 map\">\n  <div class=\"form-group\">\n    <input placeholder=\"Enter source location\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" class=\"form-control\" #pickupInput [formControl]=\"destinationInput\">\n    <sebm-google-map [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"false\" [zoom]=\"zoom\" [styles]=\"mapCustomStyles\">\n      <sebm-google-map-directions [origin]=\"origin\" [destination]=\"destination\" [waypoints]=\"waypoints\"></sebm-google-map-directions>\n    </sebm-google-map>\n  </div>\n</div>\n\n<div class=\"list-places col-md-6 col-xs-12\">\n  <h3>Lugares</h3>\n  <ul *ngFor=\"let place of arrPlacesName\">\n    <li>{{place}}  <span (click)=\"deletePlace(place)\" class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span></li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/map/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_google_maps_core__ = __webpack_require__("../../../../angular2-google-maps/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__google_map_directive__ = __webpack_require__("../../../../../src/app/map/google-map.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_places_service__ = __webpack_require__("../../../../../src/app/services/places.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MapComponent = (function () {
    function MapComponent(mapsAPILoader, ngZone, gmapsApi, _elementRef, places) {
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.gmapsApi = gmapsApi;
        this._elementRef = _elementRef;
        this.places = places;
        this.waypoints = [];
        this.arrPlaces = [];
        this.arrPlacesName = [];
        this.arrPlacesIds = [];
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.zoom = 4;
        this.latitude = 39.8282;
        this.longitude = -98.5795;
        this.destinationInput = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]();
        this.destinationOutput = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]();
        this.setCurrentPosition();
        this.mapsAPILoader.load().then(function () {
            var autocompleteInput = new google.maps.places.Autocomplete(_this.pickupInputElementRef.nativeElement, {
                types: ["establishment"]
            });
            _this.setupPlaceChangedListener(autocompleteInput, 'ORG');
        });
    };
    MapComponent.prototype.setupPlaceChangedListener = function (autocomplete, mode) {
        var _this = this;
        autocomplete.addListener("place_changed", function () {
            _this.ngZone.run(function () {
                var place = autocomplete.getPlace();
                console.log(place);
                _this.placeLatitude = place.geometry.location.lat();
                _this.placeLongitude = place.geometry.location.lng();
                _this.placePlaceId = place.id;
                _this.placeName = place.name;
                _this.placePhotos = place.photos;
                _this.mapPlaceId = place.place_id;
                _this.createPlace();
                _this.arrPlaces.push({ placeId: place.place_id, placeName: place.name, lng: place.geometry.location.lng(), lat: place.geometry.location.lat() });
                console.log(_this.arrPlaces);
                if (place.geometry === undefined)
                    return;
                if (mode === 'ORG') {
                    _this.vc.origin = { longitude: _this.arrPlaces[0]['lng'], latitude: _this.arrPlaces[0]['lat'] };
                    _this.vc.originPlaceId = _this.arrPlaces[0]['placeId'];
                    if (_this.arrPlaces.length > 2)
                        _this.vc.waypoints.push({ location: _this.arrPlaces[_this.arrPlaces.length - 2]['placeName'] });
                    _this.vc.destination = { longitude: _this.arrPlaces[_this.arrPlaces.length - 1]['lng'], latitude: _this.arrPlaces[_this.arrPlaces.length - 1]['lat'] }; // its a example aleatory position
                    _this.vc.destinationPlaceId = _this.arrPlaces[_this.arrPlaces.length - 1]['placeId'];
                }
                if (_this.vc.directionsDisplay === undefined)
                    _this.mapsAPILoader.load().then(function () { _this.vc.directionsDisplay = new google.maps.DirectionsRenderer; });
                _this.vc.updateDirections();
                _this.zoom = 12;
            });
        });
    };
    MapComponent.prototype.getDistanceAndDuration = function () {
        this.estimatedTime = this.vc.estimatedTime;
        this.estimatedDistance = this.vc.estimatedDistance;
    };
    MapComponent.prototype.setPickUpLocation = function (place) {
        if (place.geometry === undefined || place.geometry === null) {
            return;
        }
        this.latitude = place.geometry.location.lat();
        this.longitude = place.geometry.location.lng();
        this.zoom = 12;
    };
    MapComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                _this.zoom = 12;
            });
        }
    };
    MapComponent.prototype.createPlace = function () {
        var _this = this;
        this.places.createPlaces(this.placeName, this.places.routeId, this.placePlaceId, this.placeLatitude, this.placeLongitude, this.placePhotos, this.mapPlaceId).subscribe(function (place) {
            _this.arrPlacesName.push(place.name);
            _this.arrPlacesIds.push(place._id);
            console.log(_this.arrPlacesName);
        });
    };
    MapComponent.prototype.deletePlace = function (place) {
        console.log(place);
        var positionId = this.arrPlacesName.indexOf(place);
        console.log(positionId);
        this.places.deletePlace(this.arrPlacesIds[positionId], this.places.barsroute._id).subscribe();
        this.arrPlacesName.splice(positionId, 1);
        this.arrPlacesIds.splice(positionId, 1);
        this.arrPlaces.splice(positionId, 1);
        console.log(this.arrPlacesName);
        this.vc.waypoints = [];
        this.vc.origin = { longitude: this.arrPlaces[0]['lng'], latitude: this.arrPlaces[0]['lat'] };
        this.vc.originPlaceId = this.arrPlaces[0]['placeId'];
        for (var i = 0; i < this.arrPlaces.length - 2; i++) {
            this.vc.waypoints.push({ location: this.arrPlaces[i + 1]['placeName'] });
        }
        this.vc.destination = { longitude: this.arrPlaces[this.arrPlaces.length - 1]['lng'], latitude: this.arrPlaces[this.arrPlaces.length - 1]['lat'] };
        this.vc.destinationPlaceId = this.arrPlaces[this.arrPlaces.length - 1]['placeId'];
        this.vc.updateDirections();
    };
    return MapComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("pickupInput"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], MapComponent.prototype, "pickupInputElementRef", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("pickupOutput"),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
], MapComponent.prototype, "pickupOutputElementRef", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("scrollMe"),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object)
], MapComponent.prototype, "scrollContainer", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__google_map_directive__["a" /* DirectionsMapDirective */]),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__google_map_directive__["a" /* DirectionsMapDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__google_map_directive__["a" /* DirectionsMapDirective */]) === "function" && _d || Object)
], MapComponent.prototype, "vc", void 0);
MapComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-map',
        template: __webpack_require__("../../../../../src/app/map/map.component.html"),
        styles: [__webpack_require__("../../../../../src/app/map/map.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2_angular2_google_maps_core__["GoogleMapsAPIWrapper"]]
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_google_maps_core__["MapsAPILoader"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_google_maps_core__["MapsAPILoader"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_google_maps_core__["GoogleMapsAPIWrapper"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_google_maps_core__["GoogleMapsAPIWrapper"]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_4__services_places_service__["a" /* PlacesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_places_service__["a" /* PlacesService */]) === "function" && _j || Object])
], MapComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=map.component.js.map

/***/ }),

/***/ "../../../../../src/app/new-route-data/new-route-data.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new-route-data/new-route-data.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"row\">\n    <h2> Create Route </h2>\n    <form class=\"center\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <input class=\"form-control\" type=\"text\" [(ngModel)]=\"formInfo.routename\" name=\"routename\" placeholder=\"Route name\"/>\n        </div>\n        <div class=\"form-group\">\n          <input class=\"form-control\" type=\"text\" [(ngModel)]=\"formInfo.city\" name=\"city\" placeholder=\"City\"/>\n        </div>\n        <div class=\"form-group\">\n          <select class=\"form-control input-lg\" [(ngModel)]=\"formInfo.schedule\" name=\"schedule\" placeholder=\"Seleccionar\">\n            <option value=\"\">--- Please select ---</option>\n            <option  *ngFor=\"let sched of schedule\" value=\"{{ sched }}\">{{ sched }}</option>\n          </select>\n        </div>\n        <div class=\"form-group\">\n          <select class=\"form-control input-lg\" [(ngModel)]=\"formInfo.routegenre\" name=\"routegenre\" placeholder=\"Seleccionar\">\n            <option value=\"\">--- Please select ---</option>\n            <option  *ngFor=\"let genre of places_genre\" value=\"{{ genre }}\">{{ genre }}</option>\n          </select>\n        </div>\n        <div class=\"form-group\">\n          <select class=\"form-control input-lg\" [(ngModel)]=\"formInfo.pricerange\" name=\"pricerange\" placeholder=\"Seleccionar\">\n            <option value=\"\">--- Please select ---</option>\n            <option  *ngFor=\"let price of price_range\" value=\"{{ price }}\">{{ price }}</option>\n          </select>\n        </div>\n        <br>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group form-inline\">\n          <textarea class=\"form-control\" rows=\"5\" cols=\"50\"[(ngModel)]=\"formInfo.description\" name=\"description\" placeholder=\"Write a description of the route\"></textarea>\n        </div>\n      </div>\n\n      <button class=\"btn btn-default\" (click)=\"createRoute()\"> Create route </button>\n    </form>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/new-route-data/new-route-data.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewRouteDataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_places_service__ = __webpack_require__("../../../../../src/app/services/places.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewRouteDataComponent = (function () {
    function NewRouteDataComponent(places, auth) {
        this.places = places;
        this.auth = auth;
        this.onSubmitId = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.places_genre = [
            'Romantic',
            'Live music',
            'After',
            'Brunch',
        ];
        this.price_range = [
            'Cheap',
            'Moderate',
            'Expensive'
        ];
        this.schedule = [
            'Morning',
            'Afternoon',
            'Night'
        ];
        this.formInfo = {
            routename: "",
            routegenre: "",
            pricerange: "",
            schedule: "",
            city: "",
            description: ""
        };
    }
    NewRouteDataComponent.prototype.ngOnInit = function () { };
    NewRouteDataComponent.prototype.createRoute = function () {
        var _this = this;
        this.user = this.auth.getUser();
        this.places.createRoutes(this.user._id, this.formInfo.routename, this.formInfo.routegenre, this.formInfo.pricerange, this.formInfo.schedule, this.formInfo.city, this.formInfo.description).subscribe();
        setTimeout(function () {
            _this.onSubmitId.emit(true);
        }, 1000);
    };
    return NewRouteDataComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], NewRouteDataComponent.prototype, "onSubmitId", void 0);
NewRouteDataComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-new-route-data',
        template: __webpack_require__("../../../../../src/app/new-route-data/new-route-data.component.html"),
        styles: [__webpack_require__("../../../../../src/app/new-route-data/new-route-data.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_places_service__["a" /* PlacesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_places_service__["a" /* PlacesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], NewRouteDataComponent);

var _a, _b;
//# sourceMappingURL=new-route-data.component.js.map

/***/ }),

/***/ "../../../../../src/app/new-route/new-route.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".create-route{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new-route/new-route.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"page-container-section\">\n    <div class=\"create-route \">\n      <app-new-route-data (onSubmitId)=\"receiveEmitter($event)\" style=\"width:100%\"></app-new-route-data>\n    </div>\n    <div *ngIf=\"routeId\">\n      <div class=\"route-map\">\n      <app-map ></app-map>\n      <a [routerLink]=\"['/profile',user._id]\"><button type=\"submit\" class=\"btn-create btn\">Save</button></a>\n    </div>\n  </div>\n  <div style=\"clear:both\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/new-route/new-route.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewRouteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewRouteComponent = (function () {
    function NewRouteComponent(auth) {
        this.auth = auth;
        this.routeId = false;
    }
    NewRouteComponent.prototype.ngOnInit = function () {
        this.user = this.auth.getUser();
        console.log(this.user);
    };
    NewRouteComponent.prototype.receiveEmitter = function (a) {
        this.routeId = a;
        console.log('componente padre', this.routeId);
    };
    return NewRouteComponent;
}());
NewRouteComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-new-route',
        template: __webpack_require__("../../../../../src/app/new-route/new-route.component.html"),
        styles: [__webpack_require__("../../../../../src/app/new-route/new-route.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], NewRouteComponent);

var _a;
//# sourceMappingURL=new-route.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__userprofile_userprofile_component__ = __webpack_require__("../../../../../src/app/userprofile/userprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editprofile_editprofile_component__ = __webpack_require__("../../../../../src/app/editprofile/editprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loginform_loginform_component__ = __webpack_require__("../../../../../src/app/loginform/loginform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signupform_signupform_component__ = __webpack_require__("../../../../../src/app/signupform/signupform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_isLoggedIn_canactivate_service__ = __webpack_require__("../../../../../src/app/services/isLoggedIn.canactivate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__new_route_new_route_component__ = __webpack_require__("../../../../../src/app/new-route/new-route.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__show_routes_show_routes_component__ = __webpack_require__("../../../../../src/app/show-routes/show-routes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__show_simple_route_show_simple_route_component__ = __webpack_require__("../../../../../src/app/show-simple-route/show-simple-route.component.ts");









var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */] },
    { path: 'profile/:id/routes/new', component: __WEBPACK_IMPORTED_MODULE_6__new_route_new_route_component__["a" /* NewRouteComponent */] },
    { path: 'profile/:id', component: __WEBPACK_IMPORTED_MODULE_0__userprofile_userprofile_component__["a" /* UserprofileComponent */], },
    { path: 'profile/:id/edit', component: __WEBPACK_IMPORTED_MODULE_1__editprofile_editprofile_component__["a" /* EditprofileComponent */], },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__loginform_loginform_component__["a" /* LoginformComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__services_isLoggedIn_canactivate_service__["a" /* IsLoggedInService */]] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_3__signupform_signupform_component__["a" /* SignupformComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__services_isLoggedIn_canactivate_service__["a" /* IsLoggedInService */]] },
    { path: 'routes', component: __WEBPACK_IMPORTED_MODULE_7__show_routes_show_routes_component__["a" /* ShowRoutesComponent */] },
    { path: 'routes/:id', component: __WEBPACK_IMPORTED_MODULE_8__show_simple_route_show_simple_route_component__["a" /* ShowSimpleRouteComponent */] },
    { path: '**', redirectTo: '' },
];
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BASEURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].BASEURL + "/api";
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.userLoginEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.options = { withCredentials: true };
        this.isLoggedIn().subscribe();
    }
    AuthService.prototype.getLoginEventEmitter = function () {
        return this.userLoginEvent;
    };
    AuthService.prototype.getUser = function () {
        return this.user;
    };
    AuthService.prototype.emitUserLoginEvent = function (user) {
        this.user = user;
        this.userLoginEvent.emit(user);
        return user;
    };
    AuthService.prototype.handleError = function (e) {
        console.log("AUTH ERROR");
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(e.json().message);
    };
    AuthService.prototype.signup = function (username, password, email) {
        var _this = this;
        // console.log("entrooo")
        return this.http.post(BASEURL + "/signup", { username: username, password: password, email: email }, this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return _this.emitUserLoginEvent(user); })
            .catch(this.handleError);
    };
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post(BASEURL + "/login", { username: username, password: password }, this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return _this.emitUserLoginEvent(user); })
            .catch(this.handleError);
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        return this.http.get(BASEURL + "/logout", this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return _this.emitUserLoginEvent(null); })
            .catch(this.handleError);
    };
    AuthService.prototype.isLoggedIn = function () {
        var _this = this;
        return this.http.get(BASEURL + "/loggedin", this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return _this.emitUserLoginEvent(user); })
            .catch(this.handleError);
    };
    AuthService.prototype.editProfile = function (username, password, email) {
        var _this = this;
        this.userId = this.getUser();
        // console.log("editoooo", this.userId)
        // console.log(this.userId._id)
        return this.http.put(BASEURL + "/profile/" + this.userId._id + "/edit", { username: username, password: password, email: email }, this.options)
            .map(function (res) { return res.json(); })
            .map(function (response_object) {
            // console.log('response:', response_object.user)
            _this.emitUserLoginEvent(response_object.user);
        })
            .catch(this.handleError);
    };
    AuthService.prototype.getUserId = function (id) {
        return this.http.get(BASEURL + "/profile/" + id, this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/isLoggedIn.canactivate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsLoggedInService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IsLoggedInService = (function () {
    function IsLoggedInService(auth) {
        this.auth = auth;
    }
    IsLoggedInService.prototype.canActivate = function () {
        console.log("Checking can activate");
        return this.auth.getUser() ? false : true;
    };
    return IsLoggedInService;
}());
IsLoggedInService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], IsLoggedInService);

var _a;
//# sourceMappingURL=isLoggedIn.canactivate.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/places.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BASEURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].BASEURL + "/api";
var PlacesService = (function () {
    function PlacesService(http, auth) {
        this.http = http;
        this.auth = auth;
        this.options = { withCredentials: true };
    }
    PlacesService.prototype.handleError = function (e) {
        console.log("PLACE ERROR");
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(e.json().message);
    };
    PlacesService.prototype.createPlaces = function (name, routeId, placeId, latitude, longitude, photos, mapPlaceId) {
        return this.http.post(BASEURL + "/profile/places/new", { name: name, routeId: routeId, placeId: placeId, latitude: latitude, longitude: longitude, photos: photos, mapPlaceId: mapPlaceId }, this.options)
            .map(function (res) { return res.json(); })
            .map(function (place) {
            return place;
        })
            .catch(this.handleError);
    };
    PlacesService.prototype.createRoutes = function (userId, routeName, routeGenre, priceRange, schedule, city, description) {
        var _this = this;
        return this.http.post(BASEURL + "/profile/" + userId + "/routes/new", { userId: userId, routeName: routeName, routeGenre: routeGenre, priceRange: priceRange, schedule: schedule, city: city, description: description }, this.options)
            .map(function (res) { return res.json(); })
            .map(function (route) {
            _this.routeId = route.routeId;
            _this.barsrouteId = route._id;
            _this.barsroute = route;
            return route;
        })
            .catch(this.handleError);
    };
    PlacesService.prototype.deletePlace = function (placeId, barsrouteId) {
        return this.http.put(BASEURL + "/profile/delete/place", { placeId: placeId, barsrouteId: barsrouteId }, this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    PlacesService.prototype.searchRoutes = function (city, schedule, routegenre, pricerange) {
        var _this = this;
        return this.http.post(BASEURL + "/", { city: city, schedule: schedule, routegenre: routegenre, pricerange: pricerange }, this.options)
            .map(function (res) {
            return _this.allRoutes = res.json();
        })
            .catch(this.handleError);
    };
    PlacesService.prototype.getRoute = function (id) {
        return this.http.get(BASEURL + "/routes/" + id, this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    return PlacesService;
}());
PlacesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], PlacesService);

var _a, _b;
//# sourceMappingURL=places.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/verotronik/verotronik.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/verotronik/verotronik.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  verotronik works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/shared/verotronik/verotronik.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerotronikComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VerotronikComponent = (function () {
    function VerotronikComponent() {
    }
    VerotronikComponent.prototype.ngOnInit = function () {
    };
    return VerotronikComponent;
}());
VerotronikComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-verotronik',
        template: __webpack_require__("../../../../../src/app/shared/verotronik/verotronik.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/verotronik/verotronik.component.css")]
    }),
    __metadata("design:paramtypes", [])
], VerotronikComponent);

//# sourceMappingURL=verotronik.component.js.map

/***/ }),

/***/ "../../../../../src/app/show-routes/show-routes.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/show-routes/show-routes.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container-section mg-top\">\n  <div class=\"row col-md-12\">\n    <div class=\"col-xs-6 col-sm-4 col-md-2\" *ngFor=\"let e of places.allRoutes\">\n      <div class=\"thumbnail\">\n        <div  class=\"caption\">\n          <img class=\"img-responsive\"  src=\"http://placehold.it/500x325\" alt=\"...\">\n          <a [routerLink]=\"['/routes',e._id]\"><h4>{{e.routeId.name}}</h4></a>\n          <div class=\"description\">\n            {{e.routeId.description}}\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"clearfix\"></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/show-routes/show-routes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowRoutesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_places_service__ = __webpack_require__("../../../../../src/app/services/places.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShowRoutesComponent = (function () {
    function ShowRoutesComponent(places) {
        this.places = places;
    }
    ShowRoutesComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            console.log('estoy en /routes:', _this.places.allRoutes);
        }, 100);
    };
    return ShowRoutesComponent;
}());
ShowRoutesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-show-routes',
        template: __webpack_require__("../../../../../src/app/show-routes/show-routes.component.html"),
        styles: [__webpack_require__("../../../../../src/app/show-routes/show-routes.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_places_service__["a" /* PlacesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_places_service__["a" /* PlacesService */]) === "function" && _a || Object])
], ShowRoutesComponent);

var _a;
//# sourceMappingURL=show-routes.component.js.map

/***/ }),

/***/ "../../../../../src/app/show-simple-route/show-simple-route.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sebm-google-map-container {\n   height: 300px;\n   width: 100%;\n }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/show-simple-route/show-simple-route.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"page-container-section\" style=\"margin-top:70px;\">\n    <div class=\"col-md-12 map\">\n      <div class=\"form-group\">\n        <sebm-google-map [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"false\" [zoom]=\"zoom\" [styles]=\"mapCustomStyles\">\n          <sebm-google-map-directions [origin]=\"origin\" [destination]=\"destination\" [waypoints]=\"waypoints\"></sebm-google-map-directions>\n        </sebm-google-map>\n      </div>\n    <div class=\"col-md-12 pd-left pd-right text-left show-route\">\n      <h3>{{route.routeId.name}}</h3>\n      <div class=\"description col-md-5\">\n        <h4>Description</h4>\n        <p>{{route.routeId.description}}</p>\n      </div>\n      <div class=\"col-md-1\">\n      </div>\n      <div class=\"list col-md-6\">\n        <h4>Places</h4>\n        <ol>\n          <li *ngFor=\"let e of route.places\">{{e.name}}</li>\n        </ol>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/show-simple-route/show-simple-route.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowSimpleRouteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_google_maps_core__ = __webpack_require__("../../../../angular2-google-maps/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_google_map_directive__ = __webpack_require__("../../../../../src/app/map/google-map.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_places_service__ = __webpack_require__("../../../../../src/app/services/places.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ShowSimpleRouteComponent = (function () {
    function ShowSimpleRouteComponent(mapsAPILoader, ngZone, gmapsApi, _elementRef, places, router) {
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.gmapsApi = gmapsApi;
        this._elementRef = _elementRef;
        this.places = places;
        this.router = router;
        this.waypoints = [];
    }
    ShowSimpleRouteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.getRoute(params['id']);
        });
        this.zoom = 4;
        this.latitude = 39.8282;
        this.longitude = -98.5795;
        this.mapsAPILoader.load().then(function () {
            _this.showRoute();
        });
    };
    ShowSimpleRouteComponent.prototype.getRoute = function (id) {
        var _this = this;
        this.places.getRoute(id).subscribe(function (route) {
            console.log(route);
            _this.route = route;
        });
    };
    ShowSimpleRouteComponent.prototype.showRoute = function () {
        var _this = this;
        this.vc.origin = { longitude: this.route.places[0].longitude, latitude: this.route.places[0].longitude };
        this.vc.originPlaceId = this.route.places[0].mapPlaceId;
        if (this.route.places.length > 2)
            this.vc.waypoints.push({ location: this.route.places[this.route.places.length - 2].name });
        this.vc.destination = { longitude: this.route.places[this.route.places.length - 1].longitude, latitude: this.route.places[this.route.places.length - 1].latitude }; // its a example aleatory position
        this.vc.destinationPlaceId = this.route.places[this.route.places.length - 1].mapPlaceId;
        if (this.vc.directionsDisplay === undefined)
            this.mapsAPILoader.load().then(function () { _this.vc.directionsDisplay = new google.maps.DirectionsRenderer; });
        this.vc.updateDirections();
        this.zoom = 12;
    };
    ShowSimpleRouteComponent.prototype.getDistanceAndDuration = function () {
        this.estimatedTime = this.vc.estimatedTime;
        this.estimatedDistance = this.vc.estimatedDistance;
    };
    return ShowSimpleRouteComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])("pickupInput"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"]) === "function" && _a || Object)
], ShowSimpleRouteComponent.prototype, "pickupInputElementRef", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])("pickupOutput"),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"]) === "function" && _b || Object)
], ShowSimpleRouteComponent.prototype, "pickupOutputElementRef", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])("scrollMe"),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"]) === "function" && _c || Object)
], ShowSimpleRouteComponent.prototype, "scrollContainer", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__map_google_map_directive__["a" /* DirectionsMapDirective */]),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__map_google_map_directive__["a" /* DirectionsMapDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__map_google_map_directive__["a" /* DirectionsMapDirective */]) === "function" && _d || Object)
], ShowSimpleRouteComponent.prototype, "vc", void 0);
ShowSimpleRouteComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-show-simple-route',
        template: __webpack_require__("../../../../../src/app/show-simple-route/show-simple-route.component.html"),
        styles: [__webpack_require__("../../../../../src/app/show-simple-route/show-simple-route.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2_angular2_google_maps_core__["GoogleMapsAPIWrapper"]]
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_google_maps_core__["MapsAPILoader"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_google_maps_core__["MapsAPILoader"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgZone"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_google_maps_core__["GoogleMapsAPIWrapper"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_google_maps_core__["GoogleMapsAPIWrapper"]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_4__services_places_service__["a" /* PlacesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_places_service__["a" /* PlacesService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */]) === "function" && _k || Object])
], ShowSimpleRouteComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
//# sourceMappingURL=show-simple-route.component.js.map

/***/ }),

/***/ "../../../../../src/app/signupform/signupform.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".signup{\n  height: 90vh;\n  background: url(" + __webpack_require__("../../../../../src/assets/images/bar4.jpg") + "),linear-gradient(to left,#7b4397,#dc2430);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  background-size: cover;\n}\n\n.signup-form{\n  background: rgba(255,255,255,0.9);\n  margin: 100px auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: auto;\n}\n\n.form-group{\n  margin: 20px auto;\n}\n\n@media screen and (max-width: 768px){\n  h2{\n    margin:20px;\n  }\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signupform/signupform.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container signup\">\n  <div class=\"col-md-6 col-xs-10  signup-form\">\n    <form class=\"form-group col-md-8 col-xs-12\">\n      <h2> Signup </h2>\n      <input class=\"form-control\" type=\"text\" placeholder=\"Username\" [(ngModel)]=\"formInfo.username\" name=\"username\" required/>\n      <br>\n      <input class=\"form-control\"  type=\"password\" placeholder=\"Password\"  [(ngModel)]=\"formInfo.password\" name=\"password\" required/>\n      <br>\n      <input class=\"form-control\"  type=\"email\" placeholder=\"Email\"  [(ngModel)]=\"formInfo.email\" name=\"email\" required/>\n      <br>\n      <button class=\"btn btn-default\" (click)=\"signup()\"> signup </button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/signupform/signupform.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupformComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupformComponent = (function () {
    function SignupformComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.formInfo = {
            username: "",
            password: "",
            email: ""
        };
    }
    SignupformComponent.prototype.ngOnInit = function () {
    };
    SignupformComponent.prototype.signup = function () {
        var _this = this;
        var _a = this.formInfo, username = _a.username, password = _a.password, email = _a.email;
        if (username != "" && password != "" && email != "") {
            console.log("Signup with " + username + " " + password);
            this.auth.signup(username, password, email)
                .map(function (user) { return console.log(user); })
                .subscribe(function () { return _this.router.navigate(["/"]); });
        }
        else {
            console.log("You must set a username and a password");
        }
    };
    return SignupformComponent;
}());
SignupformComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-signupform',
        template: __webpack_require__("../../../../../src/app/signupform/signupform.component.html"),
        styles: [__webpack_require__("../../../../../src/app/signupform/signupform.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SignupformComponent);

var _a, _b;
//# sourceMappingURL=signupform.component.js.map

/***/ }),

/***/ "../../../../../src/app/userprofile/userprofile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/userprofile/userprofile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container-section\" style=\"padding-top:50px\">\n  <div *ngIf=\"!user\">\n    <h2>NO USER LOGGED IN</h2>\n  </div>\n  <div *ngIf=\"user\">\n    <h1>Profile</h1>\n    <div class=\"profile col-md-12\">\n      <div class=\" col-md-6\">\n        <div class=\" col-md-12\">\n          <img class=\"img-responsive\" style=\"margin:0 auto\" src=\"http://www.dinneer.com/images/users/user_icon.png\" alt=\"\">\n        </div>\n        <div class=\" col-md-12 text-center\">\n          <h4>Username:  <span class=\"yellow\">{{ user.username }}</span></h4>\n          <h4>Email:  <span class=\"yellow\">{{ user.email }}</span></h4>\n          <button [routerLink]=\"['/profile', user._id, 'edit']\" class=\"btn\" style=\"margin-right: 20px\">Edit profile</button>\n          <button [routerLink]=\"['/profile', user._id, 'routes','new']\" class=\"btn\">Create route</button>\n        </div>\n      </div>\n      <div class=\"profile col-md-6 text-left my-routes\">\n        <h3 style=\"color:black\">Mis rutas</h3>\n        <ul>\n          <li *ngFor =\"let e of routes\">\n            <div class=\"col-md-10\">\n              <a [routerLink]=\"['/routes', e._id]\">{{e.routeId.name}}</a>\n            </div>\n            <div class=\"col-md-2\">\n              <!-- <span class=\"glyphicon glyphicon-remove\" style=\"font-weight:300\" aria-hidden=\"true\"></span> -->\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/userprofile/userprofile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserprofileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserprofileComponent = (function () {
    function UserprofileComponent(auth, router) {
        var _this = this;
        this.auth = auth;
        this.router = router;
        this.user = this.auth.getUser();
        this.auth.getLoginEventEmitter()
            .subscribe(function (user) { return _this.user = user; });
    }
    UserprofileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.getUserId(params['id']);
        });
    };
    UserprofileComponent.prototype.getUserId = function (id) {
        var _this = this;
        this.auth.getUserId(id).subscribe(function (routes) {
            _this.routes = routes.user;
            console.log(_this.routes);
        });
    };
    return UserprofileComponent;
}());
UserprofileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-userprofile',
        template: __webpack_require__("../../../../../src/app/userprofile/userprofile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/userprofile/userprofile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], UserprofileComponent);

var _a, _b;
//# sourceMappingURL=userprofile.component.js.map

/***/ }),

/***/ "../../../../../src/assets/images/bar4.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bar4.24b9b3dbe098fa4e122c.jpg";

/***/ }),

/***/ "../../../../../src/assets/images/mobile-phone.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "mobile-phone.535a88750dac0edc30a1.png";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    BASEURL: ''
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map