webpackJsonp([0,3],{

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/main/webapp/app/account/password/password-strength-bar.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(undefined);
// imports


// module
exports.push([module.i, "/* ==========================================================================\nstart Password strength bar style\n========================================================================== */\nul#strength {\n  display: inline;\n  list-style: none;\n  margin: 0;\n  margin-left: 15px;\n  padding: 0;\n  vertical-align: 2px; }\n\n.point {\n  background: #DDD;\n  border-radius: 2px;\n  display: inline-block;\n  height: 5px;\n  margin-right: 1px;\n  width: 20px; }\n  .point:last {\n    margin: 0 !important; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/main/webapp/app/home/home.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(undefined);
// imports


// module
exports.push([module.i, "/* ==========================================================================\nMain page styles\n========================================================================== */\n.hipster {\n  display: inline-block;\n  width: 347px;\n  height: 497px;\n  background: url(" + __webpack_require__("./src/main/webapp/content/images/hipster.png") + ") no-repeat center top;\n  background-size: contain; }\n\n/* wait autoprefixer update to allow simple generation of high pixel density media query */\n@media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2 / 1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx) {\n  .hipster {\n    background: url(" + __webpack_require__("./src/main/webapp/content/images/hipster2x.png") + ") no-repeat center top;\n    background-size: contain; } }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/main/webapp/app/layouts/navbar/navbar.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(undefined);
// imports


// module
exports.push([module.i, "/* ==========================================================================\nNavbar\n========================================================================== */\n.navbar-version {\n  font-size: 10px;\n  color: #ccc; }\n\n.jh-navbar {\n  background-color: #353d47;\n  padding: .2em 1em; }\n  .jh-navbar .profile-image {\n    margin: -10px 0px;\n    height: 40px;\n    width: 40px;\n    border-radius: 50%; }\n  .jh-navbar .dropdown-item.active, .jh-navbar .dropdown-item.active:focus, .jh-navbar .dropdown-item.active:hover {\n    background-color: #353d47; }\n  .jh-navbar .dropdown-toggle::after {\n    margin-left: 0.15em; }\n  .jh-navbar ul.navbar-nav {\n    padding: 0.5em; }\n    .jh-navbar ul.navbar-nav .nav-item {\n      margin-left: 1.5rem; }\n  .jh-navbar a.nav-link {\n    font-weight: 400; }\n  .jh-navbar .jh-navbar-toggler {\n    color: #ccc;\n    font-size: 1.5em;\n    padding: 10px; }\n    .jh-navbar .jh-navbar-toggler:hover {\n      color: #fff; }\n\n@media screen and (max-width: 992px) {\n  .jh-logo-container {\n    width: 100%; } }\n\n.navbar-title {\n  display: inline-block;\n  vertical-align: middle; }\n\n/* ==========================================================================\nLogo styles\n========================================================================== */\n.navbar-brand.logo {\n  padding: 5px 15px; }\n  .navbar-brand.logo .logo-img {\n    height: 45px;\n    width: 70px;\n    display: inline-block;\n    vertical-align: middle;\n    background: url(" + __webpack_require__("./src/main/webapp/content/images/logo-jhipster.png") + ") no-repeat center center;\n    background-size: contain; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/main/webapp/app/layouts/profiles/page-ribbon.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(undefined);
// imports


// module
exports.push([module.i, "/* ==========================================================================\nDevelopement Ribbon\n========================================================================== */\n.ribbon {\n  background-color: rgba(170, 0, 0, 0.5);\n  left: -3.5em;\n  moz-transform: rotate(-45deg);\n  ms-transform: rotate(-45deg);\n  o-transform: rotate(-45deg);\n  webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n  overflow: hidden;\n  position: absolute;\n  top: 40px;\n  white-space: nowrap;\n  width: 15em;\n  z-index: 9999;\n  pointer-events: none;\n  opacity: 0.75; }\n  .ribbon a {\n    color: #fff;\n    display: block;\n    font-weight: 400;\n    margin: 1px 0;\n    padding: 10px 50px;\n    text-align: center;\n    text-decoration: none;\n    text-shadow: 0 0 5px #444;\n    pointer-events: none; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/ng2-translate/ng2-translate.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(9);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "translateLoaderFactory", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["translateLoaderFactory"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TranslateModule", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["TranslateModule"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TranslatePipe", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["TranslatePipe"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MissingTranslationHandler", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["MissingTranslationHandler"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TranslateLoader", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["TranslateLoader"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TranslateStaticLoader", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["TranslateStaticLoader"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TranslateService", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["TranslateService"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TranslateParser", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["TranslateParser"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DefaultTranslateParser", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["DefaultTranslateParser"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TranslateDirective", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["TranslateDirective"]; });



/***/ }),

/***/ "./src/main/webapp/app/account/account.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(5);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var _1 = __webpack_require__("./src/main/webapp/app/account/index.ts");
var SpringBootAngularAccountModule = (function () {
    function SpringBootAngularAccountModule() {
    }
    return SpringBootAngularAccountModule;
}());
SpringBootAngularAccountModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_1.SpringBootAngularSharedModule,
            router_1.RouterModule.forRoot(_1.accountState, { useHash: true })
        ],
        declarations: [
            _1.SocialRegisterComponent,
            _1.SocialAuthComponent,
            _1.ActivateComponent,
            _1.RegisterComponent,
            _1.PasswordComponent,
            _1.PasswordStrengthBarComponent,
            _1.PasswordResetInitComponent,
            _1.PasswordResetFinishComponent,
            _1.SettingsComponent
        ],
        providers: [
            _1.Register,
            _1.Activate,
            _1.Password,
            _1.PasswordResetInit,
            _1.PasswordResetFinish
        ],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], SpringBootAngularAccountModule);
exports.SpringBootAngularAccountModule = SpringBootAngularAccountModule;


/***/ }),

/***/ "./src/main/webapp/app/account/account.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__("./src/main/webapp/app/account/index.ts");
var ACCOUNT_ROUTES = [
    _1.activateRoute,
    _1.passwordRoute,
    _1.passwordResetFinishRoute,
    _1.passwordResetInitRoute,
    _1.registerRoute,
    _1.socialAuthRoute,
    _1.socialRegisterRoute,
    _1.settingsRoute
];
exports.accountState = [{
        path: '',
        children: ACCOUNT_ROUTES
    }];


/***/ }),

/***/ "./src/main/webapp/app/account/activate/activate.component.html":
/***/ (function(module, exports) {

module.exports = "<div> <div class=\"row\"> <div class=\"col-md-8 offset-md-2\"> <h1 jhiTranslate=\"activate.title\">Activation</h1> <div class=\"alert alert-success\" *ngIf=\"success\"> <span jhiTranslate=\"activate.messages.success\"> <strong>Your user has been activated.</strong> Please <a class=\"alert-link\" (click)=\"login()\" jhiTranslate=\"global.messages.info.authenticated.link\">sign in</a>. </span> </div> <div class=\"alert alert-danger\" *ngIf=\"error\" jhiTranslate=\"activate.messages.error\"> <strong>Your user could not be activated.</strong> Please use the registration form to sign up. </div> </div> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/account/activate/activate.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(5);
var ng_jhipster_1 = __webpack_require__(1);
var activate_service_1 = __webpack_require__("./src/main/webapp/app/account/activate/activate.service.ts");
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var ActivateComponent = (function () {
    function ActivateComponent(jhiLanguageService, activate, loginModalService, route) {
        this.jhiLanguageService = jhiLanguageService;
        this.activate = activate;
        this.loginModalService = loginModalService;
        this.route = route;
        this.jhiLanguageService.setLocations(['activate']);
    }
    ActivateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.activate.get(params['key']).subscribe(function () {
                _this.error = null;
                _this.success = 'OK';
            }, function () {
                _this.success = null;
                _this.error = 'ERROR';
            });
        });
    };
    ActivateComponent.prototype.login = function () {
        this.modalRef = this.loginModalService.open();
    };
    return ActivateComponent;
}());
ActivateComponent = __decorate([
    core_1.Component({
        selector: 'jhi-activate',
        template: __webpack_require__("./src/main/webapp/app/account/activate/activate.component.html")
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        activate_service_1.Activate,
        shared_1.LoginModalService,
        router_1.ActivatedRoute])
], ActivateComponent);
exports.ActivateComponent = ActivateComponent;


/***/ }),

/***/ "./src/main/webapp/app/account/activate/activate.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var activate_component_1 = __webpack_require__("./src/main/webapp/app/account/activate/activate.component.ts");
exports.activateRoute = {
    path: 'activate',
    component: activate_component_1.ActivateComponent,
    data: {
        authorities: [],
        pageTitle: 'activate.title'
    },
    canActivate: [shared_1.UserRouteAccessService]
};


/***/ }),

/***/ "./src/main/webapp/app/account/activate/activate.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(6);
var Activate = (function () {
    function Activate(http) {
        this.http = http;
    }
    Activate.prototype.get = function (key) {
        var params = new http_1.URLSearchParams();
        params.set('key', key);
        return this.http.get('api/activate', {
            search: params
        }).map(function (res) { return res; });
    };
    return Activate;
}());
Activate = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], Activate);
exports.Activate = Activate;


/***/ }),

/***/ "./src/main/webapp/app/account/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/main/webapp/app/account/activate/activate.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/activate/activate.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/activate/activate.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/password/password.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/password/password-strength-bar.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/password/password.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/password/password.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/password-reset/finish/password-reset-finish.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/password-reset/finish/password-reset-finish.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/password-reset/finish/password-reset-finish.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/password-reset/init/password-reset-init.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/password-reset/init/password-reset-init.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/password-reset/init/password-reset-init.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/register/register.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/register/register.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/register/register.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/settings/settings.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/settings/settings.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/social/social-auth.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/social/social-register.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/social/social.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/account/account.route.ts"));


/***/ }),

/***/ "./src/main/webapp/app/account/password-reset/finish/password-reset-finish.component.html":
/***/ (function(module, exports) {

module.exports = "<div> <div class=\"row\"> <div class=\"col-md-4 col-md-offset-4\"> <h1 jhiTranslate=\"reset.finish.title\">Reset password</h1> <div class=\"alert alert-danger\" jhiTranslate=\"reset.finish.messages.keymissing\" *ngIf=\"keyMissing\"> <strong>The password reset key is missing.</strong> </div> <div class=\"alert alert-warning\" *ngIf=\"!success && !keyMissing\"> <p jhiTranslate=\"reset.finish.messages.info\">Choose a new password</p> </div> <div class=\"alert alert-danger\" *ngIf=\"error\"> <p jhiTranslate=\"reset.finish.messages.error\">Your password couldn't be reset. Remember a password request is only valid for 24 hours.</p> </div> <p class=\"alert alert-success\" *ngIf=\"success\"> <span jhiTranslate=\"reset.finish.messages.success\"><strong>Your password has been reset.</strong> Please </span> <a class=\"alert-link\" (click)=\"login()\" jhiTranslate=\"global.messages.info.authenticated.link\">sign in</a>. </p> <div class=\"alert alert-danger\" *ngIf=\"doNotMatch\" jhiTranslate=\"global.messages.error.dontmatch\"> The password and its confirmation do not match! </div> <div *ngIf=\"!keyMissing\"> <form *ngIf=\"!success\" name=\"form\" role=\"form\" (ngSubmit)=\"finishReset()\" #passwordForm=\"ngForm\"> <div class=\"form-group\"> <label class=\"form-control-label\" for=\"password\" jhiTranslate=\"global.form.newpassword\">New password</label> <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" #passwordInput=\"ngModel\" placeholder=\"{{'global.form.newpassword.placeholder' | translate}}\" [(ngModel)]=\"resetAccount.password\" minlength=\"4\" maxlength=\"50\" required> <div *ngIf=\"passwordInput.dirty && passwordInput.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"passwordInput.errors.required\" jhiTranslate=\"global.messages.validate.newpassword.required\"> Your password is required. </small> <small class=\"form-text text-danger\" *ngIf=\"passwordInput.errors.minlength\" jhiTranslate=\"global.messages.validate.newpassword.minlength\"> Your password is required to be at least 4 characters. </small> <small class=\"form-text text-danger\" *ngIf=\"passwordInput.errors.maxlength\" jhiTranslate=\"global.messages.validate.newpassword.maxlength\"> Your password cannot be longer than 50 characters. </small> </div> <jhi-password-strength-bar [passwordToCheck]=\"resetAccount.password\"></jhi-password-strength-bar> </div> <div class=\"form-group\"> <label class=\"form-control-label\" for=\"confirmPassword\" jhiTranslate=\"global.form.confirmpassword\">New password confirmation</label> <input type=\"password\" class=\"form-control\" id=\"confirmPassword\" name=\"confirmPassword\" #confirmPasswordInput=\"ngModel\" placeholder=\"{{'global.form.confirmpassword.placeholder' | translate}}\" [(ngModel)]=\"confirmPassword\" minlength=\"4\" maxlength=\"50\" required> <div *ngIf=\"confirmPasswordInput.dirty && confirmPasswordInput.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"confirmPasswordInput.errors.required\" jhiTranslate=\"global.messages.validate.confirmpassword.required\"> Your password confirmation is required. </small> <small class=\"form-text text-danger\" *ngIf=\"confirmPasswordInput.errors.minlength\" jhiTranslate=\"global.messages.validate.confirmpassword.minlength\"> Your password confirmation is required to be at least 4 characters. </small> <small class=\"form-text text-danger\" *ngIf=\"confirmPasswordInput.errors.maxlength\" jhiTranslate=\"global.messages.validate.confirmpassword.maxlength\"> Your password confirmation cannot be longer than 50 characters. </small> </div> </div> <button type=\"submit\" [disabled]=\"passwordForm.form.invalid\" class=\"btn btn-primary\" jhiTranslate=\"reset.finish.form.button\">Reset Password</button> </form> </div> </div> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/account/password-reset/finish/password-reset-finish.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(5);
var ng_jhipster_1 = __webpack_require__(1);
var password_reset_finish_service_1 = __webpack_require__("./src/main/webapp/app/account/password-reset/finish/password-reset-finish.service.ts");
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var PasswordResetFinishComponent = (function () {
    function PasswordResetFinishComponent(jhiLanguageService, passwordResetFinish, loginModalService, route, elementRef, renderer) {
        this.jhiLanguageService = jhiLanguageService;
        this.passwordResetFinish = passwordResetFinish;
        this.loginModalService = loginModalService;
        this.route = route;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.jhiLanguageService.setLocations(['reset']);
    }
    PasswordResetFinishComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.key = params['key'];
        });
        this.resetAccount = {};
        this.keyMissing = !this.key;
    };
    PasswordResetFinishComponent.prototype.ngAfterViewInit = function () {
        if (this.elementRef.nativeElement.querySelector('#password') != null) {
            this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('#password'), 'focus', []);
        }
    };
    PasswordResetFinishComponent.prototype.finishReset = function () {
        var _this = this;
        this.doNotMatch = null;
        this.error = null;
        if (this.resetAccount.password !== this.confirmPassword) {
            this.doNotMatch = 'ERROR';
        }
        else {
            this.passwordResetFinish.save({ key: this.key, newPassword: this.resetAccount.password }).subscribe(function () {
                _this.success = 'OK';
            }, function () {
                _this.success = null;
                _this.error = 'ERROR';
            });
        }
    };
    PasswordResetFinishComponent.prototype.login = function () {
        this.modalRef = this.loginModalService.open();
    };
    return PasswordResetFinishComponent;
}());
PasswordResetFinishComponent = __decorate([
    core_1.Component({
        selector: 'jhi-password-reset-finish',
        template: __webpack_require__("./src/main/webapp/app/account/password-reset/finish/password-reset-finish.component.html")
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        password_reset_finish_service_1.PasswordResetFinish,
        shared_1.LoginModalService,
        router_1.ActivatedRoute,
        core_1.ElementRef, core_1.Renderer])
], PasswordResetFinishComponent);
exports.PasswordResetFinishComponent = PasswordResetFinishComponent;


/***/ }),

/***/ "./src/main/webapp/app/account/password-reset/finish/password-reset-finish.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var password_reset_finish_component_1 = __webpack_require__("./src/main/webapp/app/account/password-reset/finish/password-reset-finish.component.ts");
exports.passwordResetFinishRoute = {
    path: 'reset/finish',
    component: password_reset_finish_component_1.PasswordResetFinishComponent,
    data: {
        authorities: [],
        pageTitle: 'global.menu.account.password'
    },
    canActivate: [shared_1.UserRouteAccessService]
};


/***/ }),

/***/ "./src/main/webapp/app/account/password-reset/finish/password-reset-finish.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(6);
var PasswordResetFinish = (function () {
    function PasswordResetFinish(http) {
        this.http = http;
    }
    PasswordResetFinish.prototype.save = function (keyAndPassword) {
        return this.http.post('api/account/reset_password/finish', keyAndPassword);
    };
    return PasswordResetFinish;
}());
PasswordResetFinish = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PasswordResetFinish);
exports.PasswordResetFinish = PasswordResetFinish;


/***/ }),

/***/ "./src/main/webapp/app/account/password-reset/init/password-reset-init.component.html":
/***/ (function(module, exports) {

module.exports = "<div> <div class=\"row\"> <div class=\"col-md-8 offset-md-2\"> <h1 jhiTranslate=\"reset.request.title\">Reset your password</h1> <div class=\"alert alert-danger\" jhiTranslate=\"reset.request.messages.notfound\" *ngIf=\"errorEmailNotExists\"> <strong>E-Mail address isn't registered!</strong> Please check and try again. </div> <div class=\"alert alert-warning\" *ngIf=\"!success\"> <p jhiTranslate=\"reset.request.messages.info\">Enter the e-mail address you used to register.</p> </div> <div class=\"alert alert-success\" *ngIf=\"success == 'OK'\"> <p jhiTranslate=\"reset.request.messages.success\">Check your e-mails for details on how to reset your password.</p> </div> <form *ngIf=\"!success\" name=\"form\" role=\"form\" (ngSubmit)=\"requestReset()\" #resetRequestForm=\"ngForm\"> <div class=\"form-group\"> <label class=\"form-control-label\" for=\"email\" jhiTranslate=\"global.form.email\">E-mail</label> <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"{{'global.form.email.placeholder' | translate}}\" [(ngModel)]=\"resetAccount.email\" minlength=\"5\" maxlength=\"100\" #emailInput=\"ngModel\" required> <div *ngIf=\"emailInput.dirty && emailInput.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"emailInput.errors.required\" jhiTranslate=\"global.messages.validate.email.required\"> Your e-mail is required. </small> <small class=\"form-text text-danger\" *ngIf=\"emailInput.errors.email\" jhiTranslate=\"global.messages.validate.email.invalid\"> Your e-mail is invalid. </small> <small class=\"form-text text-danger\" *ngIf=\"emailInput.errors.minlength\" jhiTranslate=\"global.messages.validate.email.minlength\"> Your e-mail is required to be at least 5 characters. </small> <small class=\"form-text text-danger\" *ngIf=\"emailInput.errors.maxlength\" jhiTranslate=\"global.messages.validate.email.maxlength\"> Your e-mail cannot be longer than 100 characters. </small> </div> </div> <button type=\"submit\" [disabled]=\"resetRequestForm.form.invalid\" class=\"btn btn-primary\" jhiTranslate=\"reset.request.form.button\">Reset</button> </form> </div> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/account/password-reset/init/password-reset-init.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_jhipster_1 = __webpack_require__(1);
var password_reset_init_service_1 = __webpack_require__("./src/main/webapp/app/account/password-reset/init/password-reset-init.service.ts");
var PasswordResetInitComponent = (function () {
    function PasswordResetInitComponent(jhiLanguageService, passwordResetInit, elementRef, renderer) {
        this.jhiLanguageService = jhiLanguageService;
        this.passwordResetInit = passwordResetInit;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.jhiLanguageService.setLocations(['reset']);
    }
    PasswordResetInitComponent.prototype.ngOnInit = function () {
        this.resetAccount = {};
    };
    PasswordResetInitComponent.prototype.ngAfterViewInit = function () {
        this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('#email'), 'focus', []);
    };
    PasswordResetInitComponent.prototype.requestReset = function () {
        var _this = this;
        this.error = null;
        this.errorEmailNotExists = null;
        this.passwordResetInit.save(this.resetAccount.email).subscribe(function () {
            _this.success = 'OK';
        }, function (response) {
            _this.success = null;
            if (response.status === 400 && response.data === 'e-mail address not registered') {
                _this.errorEmailNotExists = 'ERROR';
            }
            else {
                _this.error = 'ERROR';
            }
        });
    };
    return PasswordResetInitComponent;
}());
PasswordResetInitComponent = __decorate([
    core_1.Component({
        selector: 'jhi-password-reset-init',
        template: __webpack_require__("./src/main/webapp/app/account/password-reset/init/password-reset-init.component.html")
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        password_reset_init_service_1.PasswordResetInit,
        core_1.ElementRef,
        core_1.Renderer])
], PasswordResetInitComponent);
exports.PasswordResetInitComponent = PasswordResetInitComponent;


/***/ }),

/***/ "./src/main/webapp/app/account/password-reset/init/password-reset-init.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var password_reset_init_component_1 = __webpack_require__("./src/main/webapp/app/account/password-reset/init/password-reset-init.component.ts");
exports.passwordResetInitRoute = {
    path: 'reset/request',
    component: password_reset_init_component_1.PasswordResetInitComponent,
    data: {
        authorities: [],
        pageTitle: 'global.menu.account.password'
    },
    canActivate: [shared_1.UserRouteAccessService]
};


/***/ }),

/***/ "./src/main/webapp/app/account/password-reset/init/password-reset-init.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(6);
var PasswordResetInit = (function () {
    function PasswordResetInit(http) {
        this.http = http;
    }
    PasswordResetInit.prototype.save = function (mail) {
        return this.http.post('api/account/reset_password/init', mail);
    };
    return PasswordResetInit;
}());
PasswordResetInit = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PasswordResetInit);
exports.PasswordResetInit = PasswordResetInit;


/***/ }),

/***/ "./src/main/webapp/app/account/password/password-strength-bar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var PasswordStrengthBarComponent = (function () {
    function PasswordStrengthBarComponent(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.colors = ['#F00', '#F90', '#FF0', '#9F0', '#0F0'];
    }
    PasswordStrengthBarComponent.prototype.measureStrength = function (p) {
        var force = 0;
        var regex = /[$-/:-?{-~!"^_`\[\]]/g; // "
        var lowerLetters = /[a-z]+/.test(p);
        var upperLetters = /[A-Z]+/.test(p);
        var numbers = /[0-9]+/.test(p);
        var symbols = regex.test(p);
        var flags = [lowerLetters, upperLetters, numbers, symbols];
        var passedMatches = flags.filter(function (isMatchedFlag) {
            return isMatchedFlag === true;
        }).length;
        force += 2 * p.length + ((p.length >= 10) ? 1 : 0);
        force += passedMatches * 10;
        // penality (short password)
        force = (p.length <= 6) ? Math.min(force, 10) : force;
        // penality (poor variety of characters)
        force = (passedMatches === 1) ? Math.min(force, 10) : force;
        force = (passedMatches === 2) ? Math.min(force, 20) : force;
        force = (passedMatches === 3) ? Math.min(force, 40) : force;
        return force;
    };
    ;
    PasswordStrengthBarComponent.prototype.getColor = function (s) {
        var idx = 0;
        if (s <= 10) {
            idx = 0;
        }
        else if (s <= 20) {
            idx = 1;
        }
        else if (s <= 30) {
            idx = 2;
        }
        else if (s <= 40) {
            idx = 3;
        }
        else {
            idx = 4;
        }
        return { idx: idx + 1, col: this.colors[idx] };
    };
    ;
    Object.defineProperty(PasswordStrengthBarComponent.prototype, "passwordToCheck", {
        set: function (password) {
            if (password) {
                var c = this.getColor(this.measureStrength(password));
                var element = this.elementRef.nativeElement;
                if (element.className) {
                    this.renderer.setElementClass(element, element.className, false);
                }
                var lis = element.getElementsByTagName('li');
                for (var i = 0; i < lis.length; i++) {
                    if (i < c.idx) {
                        this.renderer.setElementStyle(lis[i], 'backgroundColor', c.col);
                    }
                    else {
                        this.renderer.setElementStyle(lis[i], 'backgroundColor', '#DDD');
                    }
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    return PasswordStrengthBarComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], PasswordStrengthBarComponent.prototype, "passwordToCheck", null);
PasswordStrengthBarComponent = __decorate([
    core_1.Component({
        selector: 'jhi-password-strength-bar',
        template: "\n        <div id=\"strength\">\n            <small jhiTranslate=\"global.messages.validate.newpassword.strength\">Password strength:</small>\n            <ul id=\"strengthBar\">\n                <li class=\"point\"></li>\n                <li class=\"point\"></li>\n                <li class=\"point\"></li>\n                <li class=\"point\"></li>\n                <li class=\"point\"></li>\n            </ul>\n        </div>",
        styles: [
            __webpack_require__("./src/main/webapp/app/account/password/password-strength-bar.scss")
        ]
    }),
    __metadata("design:paramtypes", [core_1.Renderer, core_1.ElementRef])
], PasswordStrengthBarComponent);
exports.PasswordStrengthBarComponent = PasswordStrengthBarComponent;


/***/ }),

/***/ "./src/main/webapp/app/account/password/password-strength-bar.scss":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/main/webapp/app/account/password/password-strength-bar.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/main/webapp/app/account/password/password.component.html":
/***/ (function(module, exports) {

module.exports = "<div> <div class=\"row\"> <div class=\"col-md-8 offset-md-2\"> <h2 jhiTranslate=\"password.title\" translateValues=\"{username: '{{account.login}}'}\" *ngIf=\"account\">Password for [<b>{{account.login}}</b>]</h2> <div class=\"alert alert-success\" *ngIf=\"success\" jhiTranslate=\"password.messages.success\"> <strong>Password changed!</strong> </div> <div class=\"alert alert-danger\" *ngIf=\"error\" jhiTranslate=\"password.messages.error\"> <strong>An error has occurred!</strong> The password could not be changed. </div> <div class=\"alert alert-danger\" *ngIf=\"doNotMatch\" jhiTranslate=\"global.messages.error.dontmatch\"> The password and its confirmation do not match! </div> <form name=\"form\" role=\"form\" (ngSubmit)=\"changePassword()\" #passwordForm=\"ngForm\"> <div class=\"form-group\"> <label class=\"form-control-label\" for=\"password\" jhiTranslate=\"global.form.newpassword\">New password</label> <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" #passwordInput=\"ngModel\" placeholder=\"{{'global.form.newpassword.placeholder' | translate}}\" [(ngModel)]=\"password\" minlength=\"4\" maxlength=\"50\" required> <div *ngIf=\"passwordInput.dirty && passwordInput.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"passwordInput.errors.required\" jhiTranslate=\"global.messages.validate.newpassword.required\"> Your password is required. </small> <small class=\"form-text text-danger\" *ngIf=\"passwordInput.errors.minlength\" jhiTranslate=\"global.messages.validate.newpassword.minlength\"> Your password is required to be at least 4 characters. </small> <small class=\"form-text text-danger\" *ngIf=\"passwordInput.errors.maxlength\" jhiTranslate=\"global.messages.validate.newpassword.maxlength\"> Your password cannot be longer than 50 characters. </small> </div> <jhi-password-strength-bar [passwordToCheck]=\"password\"></jhi-password-strength-bar> </div> <div class=\"form-group\"> <label class=\"form-control-label\" for=\"confirmPassword\" jhiTranslate=\"global.form.confirmpassword\">New password confirmation</label> <input type=\"password\" class=\"form-control\" id=\"confirmPassword\" name=\"confirmPassword\" #confirmPasswordInput=\"ngModel\" placeholder=\"{{'global.form.confirmpassword.placeholder' | translate}}\" [(ngModel)]=\"confirmPassword\" minlength=\"4\" maxlength=\"50\" required> <div *ngIf=\"confirmPasswordInput.dirty && confirmPasswordInput.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"confirmPasswordInput.errors.required\" jhiTranslate=\"global.messages.validate.confirmpassword.required\"> Your confirmation password is required. </small> <small class=\"form-text text-danger\" *ngIf=\"confirmPasswordInput.errors.minlength\" jhiTranslate=\"global.messages.validate.confirmpassword.minlength\"> Your confirmation password is required to be at least 4 characters. </small> <small class=\"form-text text-danger\" *ngIf=\"confirmPasswordInput.errors.maxlength\" jhiTranslate=\"global.messages.validate.confirmpassword.maxlength\"> Your confirmation password cannot be longer than 50 characters. </small> </div> </div> <button type=\"submit\" [disabled]=\"passwordForm.form.invalid\" class=\"btn btn-primary\" jhiTranslate=\"password.form.button\">Save</button> </form> </div> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/account/password/password.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_jhipster_1 = __webpack_require__(1);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var password_service_1 = __webpack_require__("./src/main/webapp/app/account/password/password.service.ts");
var PasswordComponent = (function () {
    function PasswordComponent(jhiLanguageService, passwordService, principal) {
        this.jhiLanguageService = jhiLanguageService;
        this.passwordService = passwordService;
        this.principal = principal;
        this.jhiLanguageService.setLocations(['password']);
    }
    PasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.principal.identity().then(function (account) {
            _this.account = account;
        });
    };
    PasswordComponent.prototype.changePassword = function () {
        var _this = this;
        if (this.password !== this.confirmPassword) {
            this.error = null;
            this.success = null;
            this.doNotMatch = 'ERROR';
        }
        else {
            this.doNotMatch = null;
            this.passwordService.save(this.password).subscribe(function () {
                _this.error = null;
                _this.success = 'OK';
            }, function () {
                _this.success = null;
                _this.error = 'ERROR';
            });
        }
    };
    return PasswordComponent;
}());
PasswordComponent = __decorate([
    core_1.Component({
        selector: 'jhi-password',
        template: __webpack_require__("./src/main/webapp/app/account/password/password.component.html")
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        password_service_1.Password,
        shared_1.Principal])
], PasswordComponent);
exports.PasswordComponent = PasswordComponent;


/***/ }),

/***/ "./src/main/webapp/app/account/password/password.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var password_component_1 = __webpack_require__("./src/main/webapp/app/account/password/password.component.ts");
exports.passwordRoute = {
    path: 'password',
    component: password_component_1.PasswordComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'global.menu.account.password'
    },
    canActivate: [shared_1.UserRouteAccessService]
};


/***/ }),

/***/ "./src/main/webapp/app/account/password/password.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(6);
var Password = (function () {
    function Password(http) {
        this.http = http;
    }
    Password.prototype.save = function (newPassword) {
        return this.http.post('api/account/change_password', newPassword);
    };
    return Password;
}());
Password = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], Password);
exports.Password = Password;


/***/ }),

/***/ "./src/main/webapp/app/account/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div> <div class=\"row\"> <div class=\"col-md-8 offset-md-2\"> <h1 jhiTranslate=\"register.title\">Registration</h1> <div class=\"alert alert-success\" *ngIf=\"success\" jhiTranslate=\"register.messages.success\"> <strong>Registration saved!</strong> Please check your email for confirmation. </div> <div class=\"alert alert-danger\" *ngIf=\"error\" jhiTranslate=\"register.messages.error.fail\"> <strong>Registration failed!</strong> Please try again later. </div> <div class=\"alert alert-danger\" *ngIf=\"errorUserExists\" jhiTranslate=\"register.messages.error.userexists\"> <strong>Login name already registered!</strong> Please choose another one. </div> <div class=\"alert alert-danger\" *ngIf=\"errorEmailExists\" jhiTranslate=\"register.messages.error.emailexists\"> <strong>E-mail is already in use!</strong> Please choose another one. </div> <div class=\"alert alert-danger\" *ngIf=\"doNotMatch\" jhiTranslate=\"global.messages.error.dontmatch\"> The password and its confirmation do not match! </div> </div> <div class=\"col-md-4 offset-md-2\"> <form name=\"form\" role=\"form\" (ngSubmit)=\"register()\" #registerForm=\"ngForm\"> <div class=\"form-group\"> <label class=\"form-control-label\" for=\"login\" jhiTranslate=\"global.form.username\">Username</label> <input type=\"text\" class=\"form-control\" [(ngModel)]=\"registerAccount.login\" id=\"login\" name=\"login\" #login=\"ngModel\" placeholder=\"{{'global.form.username.placeholder' | translate}}\" required minlength=\"1\" maxlength=\"50\" pattern=\"^[_'.@A-Za-z0-9-]*$\"> <div *ngIf=\"login.dirty && login.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"login.errors.required\" jhiTranslate=\"register.messages.validate.login.required\"> Your username is required. </small> <small class=\"form-text text-danger\" *ngIf=\"login.errors.minlength\" jhiTranslate=\"register.messages.validate.login.minlength\"> Your username is required to be at least 1 character. </small> <small class=\"form-text text-danger\" *ngIf=\"login.errors.maxlength\" jhiTranslate=\"register.messages.validate.login.maxlength\"> Your username cannot be longer than 50 characters. </small> <small class=\"form-text text-danger\" *ngIf=\"login.errors.pattern\" jhiTranslate=\"register.messages.validate.login.pattern\"> Your username can only contain lower-case letters and digits. </small> </div> </div> <div class=\"form-group\"> <label class=\"form-control-label\" for=\"email\" jhiTranslate=\"global.form.email\">E-mail</label> <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" #email=\"ngModel\" placeholder=\"{{'global.form.email.placeholder' | translate}}\" [(ngModel)]=\"registerAccount.email\" minlength=\"5\" maxlength=\"100\" required> <div *ngIf=\"email.dirty && email.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"email.errors.required\" jhiTranslate=\"global.messages.validate.email.required\"> Your e-mail is required. </small> <small class=\"form-text text-danger\" *ngIf=\"email.errors.invalid\" jhiTranslate=\"global.messages.validate.email.invalid\"> Your e-mail is invalid. </small> <small class=\"form-text text-danger\" *ngIf=\"email.errors.minlength\" jhiTranslate=\"global.messages.validate.email.minlength\"> Your e-mail is required to be at least 5 characters. </small> <small class=\"form-text text-danger\" *ngIf=\"email.errors.maxlength\" jhiTranslate=\"global.messages.validate.email.maxlength\"> Your e-mail cannot be longer than 100 characters. </small> </div> </div> <div class=\"form-group\"> <label class=\"form-control-label\" for=\"password\" jhiTranslate=\"global.form.newpassword\">New password</label> <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" #password=\"ngModel\" placeholder=\"{{'global.form.newpassword.placeholder' | translate}}\" [(ngModel)]=\"registerAccount.password\" minlength=\"4\" maxlength=\"50\" required> <div *ngIf=\"password.dirty && password.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"password.errors.required\" jhiTranslate=\"global.messages.validate.newpassword.required\"> Your password is required. </small> <small class=\"form-text text-danger\" *ngIf=\"password.errors.minlength\" jhiTranslate=\"global.messages.validate.newpassword.minlength\"> Your password is required to be at least 4 characters. </small> <small class=\"form-text text-danger\" *ngIf=\"password.errors.maxlength\" jhiTranslate=\"global.messages.validate.newpassword.maxlength\"> Your password cannot be longer than 50 characters. </small> </div> <jhi-password-strength-bar [passwordToCheck]=\"registerAccount.password\"></jhi-password-strength-bar> </div> <div class=\"form-group\"> <label class=\"form-control-label\" for=\"confirmPassword\" jhiTranslate=\"global.form.confirmpassword\">New password confirmation</label> <input type=\"password\" class=\"form-control\" id=\"confirmPassword\" name=\"confirmPassword\" #confirmPasswordInput=\"ngModel\" placeholder=\"{{'global.form.confirmpassword.placeholder' | translate}}\" [(ngModel)]=\"confirmPassword\" minlength=\"4\" maxlength=\"50\" required> <div *ngIf=\"confirmPasswordInput.dirty && confirmPasswordInput.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"confirmPasswordInput.errors.required\" jhiTranslate=\"global.messages.validate.confirmpassword.required\"> Your confirmation password is required. </small> <small class=\"form-text text-danger\" *ngIf=\"confirmPasswordInput.errors.minlength\" jhiTranslate=\"global.messages.validate.confirmpassword.minlength\"> Your confirmation password is required to be at least 4 characters. </small> <small class=\"form-text text-danger\" *ngIf=\"confirmPasswordInput.errors.maxlength\" jhiTranslate=\"global.messages.validate.confirmpassword.maxlength\"> Your confirmation password cannot be longer than 50 characters. </small> </div> </div> <button type=\"submit\" [disabled]=\"registerForm.form.invalid\" class=\"btn btn-primary\" jhiTranslate=\"register.form.button\">Register</button> </form> <p></p> <div class=\"alert alert-warning\"> <span jhiTranslate=\"global.messages.info.authenticated.prefix\">If you want to </span> <a class=\"alert-link\" (click)=\"openLogin()\" jhiTranslate=\"global.messages.info.authenticated.link\">sign in</a><span jhiTranslate=\"global.messages.info.authenticated.suffix\">, you can try the default accounts:<br/>- Administrator (login=\"admin\" and password=\"admin\") <br/>- User (login=\"user\" and password=\"user\").</span> </div> </div> <div class=\"col-md-4\"> <br/> <jhi-social provider=\"google\"></jhi-social> <jhi-social provider=\"facebook\"></jhi-social> <jhi-social provider=\"twitter\"></jhi-social> </div> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/account/register/register.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_jhipster_1 = __webpack_require__(1);
var register_service_1 = __webpack_require__("./src/main/webapp/app/account/register/register.service.ts");
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var RegisterComponent = (function () {
    function RegisterComponent(languageService, loginModalService, registerService, elementRef, renderer) {
        this.languageService = languageService;
        this.loginModalService = loginModalService;
        this.registerService = registerService;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.languageService.setLocations(['register']);
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.success = false;
        this.registerAccount = {};
    };
    RegisterComponent.prototype.ngAfterViewInit = function () {
        this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('#login'), 'focus', []);
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        if (this.registerAccount.password !== this.confirmPassword) {
            this.doNotMatch = 'ERROR';
        }
        else {
            this.doNotMatch = null;
            this.error = null;
            this.errorUserExists = null;
            this.errorEmailExists = null;
            this.languageService.getCurrent().then(function (key) {
                _this.registerAccount.langKey = key;
                _this.registerService.save(_this.registerAccount).subscribe(function () {
                    _this.success = true;
                }, function (response) { return _this.processError(response); });
            });
        }
    };
    RegisterComponent.prototype.openLogin = function () {
        this.modalRef = this.loginModalService.open();
    };
    RegisterComponent.prototype.processError = function (response) {
        this.success = null;
        if (response.status === 400 && response._body === 'login already in use') {
            this.errorUserExists = 'ERROR';
        }
        else if (response.status === 400 && response._body === 'e-mail address already in use') {
            this.errorEmailExists = 'ERROR';
        }
        else {
            this.error = 'ERROR';
        }
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        selector: 'jhi-register',
        template: __webpack_require__("./src/main/webapp/app/account/register/register.component.html")
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        shared_1.LoginModalService,
        register_service_1.Register,
        core_1.ElementRef,
        core_1.Renderer])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;


/***/ }),

/***/ "./src/main/webapp/app/account/register/register.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var register_component_1 = __webpack_require__("./src/main/webapp/app/account/register/register.component.ts");
exports.registerRoute = {
    path: 'register',
    component: register_component_1.RegisterComponent,
    data: {
        authorities: [],
        pageTitle: 'register.title'
    },
    canActivate: [shared_1.UserRouteAccessService]
};


/***/ }),

/***/ "./src/main/webapp/app/account/register/register.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(6);
var Register = (function () {
    function Register(http) {
        this.http = http;
    }
    Register.prototype.save = function (account) {
        return this.http.post('api/register', account);
    };
    return Register;
}());
Register = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], Register);
exports.Register = Register;


/***/ }),

/***/ "./src/main/webapp/app/account/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div> <div class=\"row\"> <div class=\"col-md-8 offset-md-2\"> <h2 jhiTranslate=\"settings.title\" translateValues=\"{username: '{{settingsAccount.login}}'}\" *ngIf=\"settingsAccount\">User settings for [<b>{{settingsAccount.login}}</b>]</h2> <div class=\"alert alert-success\" *ngIf=\"success\" jhiTranslate=\"settings.messages.success\"> <strong>Settings saved!</strong> </div> <jhi-alert-error></jhi-alert-error> <form name=\"form\" role=\"form\" (ngSubmit)=\"save()\" #settingsForm=\"ngForm\" *ngIf=\"settingsAccount\" novalidate> <div class=\"form-group\"> <label class=\"form-control-label\" for=\"firstName\" jhiTranslate=\"settings.form.firstname\">First Name</label> <input type=\"text\" class=\"form-control\" id=\"firstName\" name=\"firstName\" placeholder=\"{{'settings.form.firstname.placeholder' | translate}}\" [(ngModel)]=\"settingsAccount.firstName\" minlength=\"1\" maxlength=\"50\" #firstNameInput=\"ngModel\" required> <div *ngIf=\"firstNameInput.dirty && firstNameInput.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"firstNameInput.errors.required\" jhiTranslate=\"settings.messages.validate.firstname.required\"> Your first name is required. </small> <small class=\"form-text text-danger\" *ngIf=\"firstNameInput.errors.minlength\" jhiTranslate=\"settings.messages.validate.firstname.minlength\"> Your first name is required to be at least 1 character. </small> <small class=\"form-text text-danger\" *ngIf=\"firstNameInput.errors.maxlength\" jhiTranslate=\"settings.messages.validate.firstname.maxlength\"> Your first name cannot be longer than 50 characters. </small> </div> </div> <div class=\"form-group\"> <label class=\"form-control-label\" for=\"lastName\" jhiTranslate=\"settings.form.lastname\">Last Name</label> <input type=\"text\" class=\"form-control\" id=\"lastName\" name=\"lastName\" placeholder=\"{{'settings.form.lastname.placeholder' | translate}}\" [(ngModel)]=\"settingsAccount.lastName\" minlength=\"1\" maxlength=\"50\" #lastNameInput=\"ngModel\" required> <div *ngIf=\"lastNameInput.dirty && lastNameInput.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"lastNameInput.errors.required\" jhiTranslate=\"settings.messages.validate.lastname.required\"> Your last name is required. </small> <small class=\"form-text text-danger\" *ngIf=\"lastNameInput.errors.minlength\" jhiTranslate=\"settings.messages.validate.lastname.minlength\"> Your last name is required to be at least 1 character. </small> <small class=\"form-text text-danger\" *ngIf=\"lastNameInput.errors.maxlength\" jhiTranslate=\"settings.messages.validate.lastname.maxlength\"> Your last name cannot be longer than 50 characters. </small> </div> </div> <div class=\"form-group\"> <label class=\"form-control-label\" for=\"email\" jhiTranslate=\"global.form.email\">E-mail</label> <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"{{'global.form.email.placeholder' | translate}}\" [(ngModel)]=\"settingsAccount.email\" minlength=\"5\" maxlength=\"100\" #emailInput=\"ngModel\" required> <div *ngIf=\"emailInput.dirty && emailInput.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"emailInput.errors.required\" jhiTranslate=\"global.messages.validate.email.required\"> Your e-mail is required. </small> <small class=\"form-text text-danger\" *ngIf=\"emailInput.errors.email\" jhiTranslate=\"global.messages.validate.email.invalid\"> Your e-mail is invalid. </small> <small class=\"form-text text-danger\" *ngIf=\"emailInput.errors.minlength\" jhiTranslate=\"global.messages.validate.email.minlength\"> Your e-mail is required to be at least 5 characters. </small> <small class=\"form-text text-danger\" *ngIf=\"emailInput.errors.maxlength\" jhiTranslate=\"global.messages.validate.email.maxlength\"> Your e-mail cannot be longer than 100 characters. </small> </div> </div> <div class=\"form-group\" *ngIf=\"languages && languages.length > 0\"> <label for=\"langKey\" jhiTranslate=\"settings.form.language\">Language</label> <select class=\"form-control\" id=\"langKey\" name=\"langKey\" [(ngModel)]=\"settingsAccount.langKey\"> <option *ngFor=\"let language of languages\" [value]=\"language\">{{language | findLanguageFromKey}}</option> </select> </div> <button type=\"submit\" [disabled]=\"settingsForm.form.invalid\" class=\"btn btn-primary\" jhiTranslate=\"settings.form.button\">Save</button> </form> </div> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/account/settings/settings.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_jhipster_1 = __webpack_require__(1);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var SettingsComponent = (function () {
    function SettingsComponent(account, principal, languageService, languageHelper) {
        this.account = account;
        this.principal = principal;
        this.languageService = languageService;
        this.languageHelper = languageHelper;
        this.languageService.setLocations(['settings']);
    }
    SettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.principal.identity().then(function (account) {
            _this.settingsAccount = _this.copyAccount(account);
        });
        this.languageHelper.getAll().then(function (languages) {
            _this.languages = languages;
        });
    };
    SettingsComponent.prototype.save = function () {
        var _this = this;
        this.account.save(this.settingsAccount).subscribe(function () {
            _this.error = null;
            _this.success = 'OK';
            _this.principal.identity(true).then(function (account) {
                _this.settingsAccount = _this.copyAccount(account);
            });
            _this.languageService.getCurrent().then(function (current) {
                if (_this.settingsAccount.langKey !== current) {
                    _this.languageService.changeLanguage(_this.settingsAccount.langKey);
                }
            });
        }, function () {
            _this.success = null;
            _this.error = 'ERROR';
        });
    };
    SettingsComponent.prototype.copyAccount = function (account) {
        return {
            activated: account.activated,
            email: account.email,
            firstName: account.firstName,
            langKey: account.langKey,
            lastName: account.lastName,
            login: account.login,
            imageUrl: account.imageUrl
        };
    };
    return SettingsComponent;
}());
SettingsComponent = __decorate([
    core_1.Component({
        selector: 'jhi-settings',
        template: __webpack_require__("./src/main/webapp/app/account/settings/settings.component.html")
    }),
    __metadata("design:paramtypes", [shared_1.AccountService,
        shared_1.Principal,
        ng_jhipster_1.JhiLanguageService,
        shared_1.JhiLanguageHelper])
], SettingsComponent);
exports.SettingsComponent = SettingsComponent;


/***/ }),

/***/ "./src/main/webapp/app/account/settings/settings.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var settings_component_1 = __webpack_require__("./src/main/webapp/app/account/settings/settings.component.ts");
exports.settingsRoute = {
    path: 'settings',
    component: settings_component_1.SettingsComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'global.menu.account.settings'
    },
    canActivate: [shared_1.UserRouteAccessService]
};


/***/ }),

/***/ "./src/main/webapp/app/account/social/social-auth.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(5);
var ng_jhipster_1 = __webpack_require__(1);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var core_2 = __webpack_require__(14);
var SocialAuthComponent = (function () {
    function SocialAuthComponent(jhiLanguageService, Auth, loginService, cookieService, router) {
        this.jhiLanguageService = jhiLanguageService;
        this.Auth = Auth;
        this.loginService = loginService;
        this.cookieService = cookieService;
        this.router = router;
        this.jhiLanguageService.setLocations(['social']);
    }
    SocialAuthComponent.prototype.ngOnInit = function () {
        var _this = this;
        var token = this.cookieService.get('social-authentication');
        if (token.length) {
            this.loginService.loginWithToken(token, false).then(function () {
                _this.cookieService.remove('social-authentication');
                _this.Auth.authorize(true);
            }, function () {
                _this.router.navigate(['social-register'], { queryParams: { 'success': 'false' } });
            });
        }
    };
    return SocialAuthComponent;
}());
SocialAuthComponent = __decorate([
    core_1.Component({
        selector: 'jhi-auth',
        template: __webpack_require__("./src/main/webapp/app/shared/login/login.component.html")
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        shared_1.AuthService,
        shared_1.LoginService,
        core_2.CookieService,
        router_1.Router])
], SocialAuthComponent);
exports.SocialAuthComponent = SocialAuthComponent;


/***/ }),

/***/ "./src/main/webapp/app/account/social/social-register.component.html":
/***/ (function(module, exports) {

module.exports = "<div> <div class=\"row\"> <div class=\"col-md-8 offset-md-2\"> <h1 *ngIf=\"success\" jhiTranslate=\"social.register.title\" translateValues=\"{ label: '{{providerLabel}}' }\">Registration with</h1> <h1 *ngIf=\"error\" jhiTranslate=\"social.register.errorTitle\">Registration</h1> <div class=\"alert alert-success\" *ngIf=\"success\" jhiTranslate=\"social.register.messages.success\"> <strong>Registration saved!</strong> Please check your email for confirmation. </div> <div class=\"alert alert-danger\" *ngIf=\"error\" jhiTranslate=\"social.register.messages.error.fail\"> <strong>Registration failed!</strong> Please try again later. </div> <jhi-social *ngIf=\"success\" provider=\"{{ provider }}\"></jhi-social> <br/> <div class=\"alert alert-warning\"> <span jhiTranslate=\"global.messages.info.authenticated.prefix\">If you want to </span> <a class=\"alert-link\" (click)=\"login()\" jhiTranslate=\"global.messages.info.authenticated.link\">sign in</a><span jhiTranslate=\"global.messages.info.authenticated.suffix\">, you can try the default accounts:<br/>- Administrator (login=\"admin\" and password=\"admin\") <br/>- User (login=\"user\" and password=\"user\").</span> </div> </div> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/account/social/social-register.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_jhipster_1 = __webpack_require__(1);
var router_1 = __webpack_require__(5);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var SocialRegisterComponent = (function () {
    function SocialRegisterComponent(route, jhiLanguageService, loginModalService) {
        this.route = route;
        this.jhiLanguageService = jhiLanguageService;
        this.loginModalService = loginModalService;
        this.jhiLanguageService.setLocations(['social']);
    }
    SocialRegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (queryParams) {
            _this.success = queryParams['success'];
        });
        this.route.params.subscribe(function (params) {
            _this.provider = params['provider?{success:boolean}'];
        });
        this.error = !this.success;
        this.providerLabel = this.provider.charAt(0).toUpperCase() + this.provider.slice(1);
    };
    SocialRegisterComponent.prototype.login = function () {
        this.modalRef = this.loginModalService.open();
    };
    return SocialRegisterComponent;
}());
SocialRegisterComponent = __decorate([
    core_1.Component({
        selector: 'jhi-register',
        template: __webpack_require__("./src/main/webapp/app/account/social/social-register.component.html")
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        ng_jhipster_1.JhiLanguageService,
        shared_1.LoginModalService])
], SocialRegisterComponent);
exports.SocialRegisterComponent = SocialRegisterComponent;


/***/ }),

/***/ "./src/main/webapp/app/account/social/social.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var social_register_component_1 = __webpack_require__("./src/main/webapp/app/account/social/social-register.component.ts");
var social_auth_component_1 = __webpack_require__("./src/main/webapp/app/account/social/social-auth.component.ts");
exports.socialRegisterRoute = {
    path: 'social-register/:provider?{success:boolean}',
    component: social_register_component_1.SocialRegisterComponent,
    data: {
        authorities: [],
        pageTitle: 'social.register.title'
    },
    canActivate: [shared_1.UserRouteAccessService]
};
exports.socialAuthRoute = {
    path: 'social-auth',
    component: social_auth_component_1.SocialAuthComponent,
    data: {
        authorities: [],
        pageTitle: 'social.register.title'
    },
    canActivate: [shared_1.UserRouteAccessService]
};


/***/ }),

/***/ "./src/main/webapp/app/admin/admin.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(5);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var _1 = __webpack_require__("./src/main/webapp/app/admin/index.ts");
var SpringBootAngularAdminModule = (function () {
    function SpringBootAngularAdminModule() {
    }
    return SpringBootAngularAdminModule;
}());
SpringBootAngularAdminModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_1.SpringBootAngularSharedModule,
            router_1.RouterModule.forRoot(_1.adminState, { useHash: true })
        ],
        declarations: [
            _1.AuditsComponent,
            _1.UserMgmtComponent,
            _1.UserDialogComponent,
            _1.UserDeleteDialogComponent,
            _1.UserMgmtDetailComponent,
            _1.UserMgmtDialogComponent,
            _1.UserMgmtDeleteDialogComponent,
            _1.LogsComponent,
            _1.JhiConfigurationComponent,
            _1.JhiHealthCheckComponent,
            _1.JhiHealthModalComponent,
            _1.JhiDocsComponent,
            _1.JhiMetricsMonitoringComponent,
            _1.JhiMetricsMonitoringModalComponent
        ],
        entryComponents: [
            _1.UserMgmtDialogComponent,
            _1.UserMgmtDeleteDialogComponent,
            _1.JhiHealthModalComponent,
            _1.JhiMetricsMonitoringModalComponent,
        ],
        providers: [
            _1.AuditsService,
            _1.JhiConfigurationService,
            _1.JhiHealthService,
            _1.JhiMetricsService,
            _1.LogsService,
            _1.UserResolvePagingParams,
            _1.UserResolve,
            _1.UserModalService
        ],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], SpringBootAngularAdminModule);
exports.SpringBootAngularAdminModule = SpringBootAngularAdminModule;


/***/ }),

/***/ "./src/main/webapp/app/admin/admin.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __webpack_require__("./src/main/webapp/app/admin/index.ts");
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var ADMIN_ROUTES = [
    _1.auditsRoute,
    _1.configurationRoute,
    _1.docsRoute,
    _1.healthRoute,
    _1.logsRoute
].concat(_1.userMgmtRoute, [
    _1.metricsRoute
]);
exports.adminState = [{
        path: '',
        data: {
            authorities: ['ROLE_ADMIN']
        },
        canActivate: [shared_1.UserRouteAccessService],
        children: ADMIN_ROUTES
    }].concat(_1.userDialogRoute);


/***/ }),

/***/ "./src/main/webapp/app/admin/audits/audit-data.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AuditData = (function () {
    function AuditData(remoteAddress, sessionId) {
        this.remoteAddress = remoteAddress;
        this.sessionId = sessionId;
    }
    return AuditData;
}());
exports.AuditData = AuditData;


/***/ }),

/***/ "./src/main/webapp/app/admin/audits/audit.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Audit = (function () {
    function Audit(data, principal, timestamp, type) {
        this.data = data;
        this.principal = principal;
        this.timestamp = timestamp;
        this.type = type;
    }
    return Audit;
}());
exports.Audit = Audit;


/***/ }),

/***/ "./src/main/webapp/app/admin/audits/audits.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"audits\"> <h2 jhiTranslate=\"audits.title\">Audits</h2> <div class=\"row\"> <div class=\"col-md-5\"> <h4 jhiTranslate=\"audits.filter.title\">Filter by date</h4> <p class=\"d-flex\"> <span jhiTranslate=\"audits.filter.from\" class=\"input-group-addon\">from</span> <input type=\"date\" class=\"form-control\" name=\"start\" [(ngModel)]=\"fromDate\" (ngModelChange)=\"onChangeDate($event)\" required/> <span jhiTranslate=\"audits.filter.to\" class=\"input-group-addon\">to</span> <input type=\"date\" class=\"form-control\" name=\"end\" [(ngModel)]=\"toDate\" (ngModelChange)=\"onChangeDate($event)\" required/> </p> </div> </div> <div class=\"table-responsive\"> <table class=\"table table-condensed table-striped table-bordered\"> <thead> <tr> <th (click)=\"orderProp = 'timestamp'; reverse=!reverse\"><span jhiTranslate=\"audits.table.header.date\">Date</span></th> <th (click)=\"orderProp = 'principal'; reverse=!reverse\"><span jhiTranslate=\"audits.table.header.principal\">User</span></th> <th (click)=\"orderProp = 'type'; reverse=!reverse\"><span jhiTranslate=\"audits.table.header.status\">State</span></th> <th (click)=\"orderProp = 'data.message'; reverse=!reverse\"><span jhiTranslate=\"audits.table.header.data\">Extra data</span></th> </tr> </thead> <tr *ngFor=\"let audit of getAudits()\"> <td><span>{{audit.timestamp| date:'medium'}}</span></td> <td><small>{{audit.principal}}</small></td> <td>{{audit.type}}</td> <td> <span *ngIf=\"audit.data\" ng-show=\"audit.data.message\">{{audit.data.message}}</span> <span *ngIf=\"audit.data\" ng-show=\"audit.data.remoteAddress\"><span jhiTranslate=\"audits.table.data.remoteAddress\">Remote Address</span> {{audit.data.remoteAddress}}</span> </td> </tr> </table> </div> <div *ngIf=\"audits\"> <div class=\"row justify-content-center\"> <jhi-item-count [page]=\"page\" [total]=\"totalItems\" [itemsPerPage]=\"itemsPerPage\"></jhi-item-count> </div> <div class=\"row justify-content-center\"> <ngb-pagination [collectionSize]=\"totalItems\" [(page)]=\"page\" (pageChange)=\"loadPage(page)\"></ngb-pagination> </div> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/audits/audits.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(13);
var ng_jhipster_1 = __webpack_require__(1);
var audits_service_1 = __webpack_require__("./src/main/webapp/app/admin/audits/audits.service.ts");
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var uib_pagination_config_1 = __webpack_require__("./src/main/webapp/app/blocks/config/uib-pagination.config.ts");
var AuditsComponent = (function () {
    function AuditsComponent(jhiLanguageService, auditsService, parseLinks, paginationConfig, datePipe) {
        this.jhiLanguageService = jhiLanguageService;
        this.auditsService = auditsService;
        this.parseLinks = parseLinks;
        this.paginationConfig = paginationConfig;
        this.datePipe = datePipe;
        this.jhiLanguageService.setLocations(['audits']);
        this.itemsPerPage = shared_1.ITEMS_PER_PAGE;
        this.page = 1;
        this.reverse = false;
        this.orderProp = 'timestamp';
    }
    AuditsComponent.prototype.getAudits = function () {
        return this.sortAudits(this.audits);
    };
    AuditsComponent.prototype.loadPage = function (page) {
        this.page = page;
        this.onChangeDate();
    };
    AuditsComponent.prototype.ngOnInit = function () {
        this.today();
        this.previousMonth();
        this.onChangeDate();
    };
    AuditsComponent.prototype.onChangeDate = function () {
        var _this = this;
        this.auditsService.query({ page: this.page - 1, size: this.itemsPerPage,
            fromDate: this.fromDate, toDate: this.toDate }).subscribe(function (res) {
            _this.audits = res.json();
            _this.links = _this.parseLinks.parse(res.headers.get('link'));
            _this.totalItems = +res.headers.get('X-Total-Count');
        });
    };
    AuditsComponent.prototype.previousMonth = function () {
        var dateFormat = 'yyyy-MM-dd';
        var fromDate = new Date();
        if (fromDate.getMonth() === 0) {
            fromDate = new Date(fromDate.getFullYear() - 1, 11, fromDate.getDate());
        }
        else {
            fromDate = new Date(fromDate.getFullYear(), fromDate.getMonth() - 1, fromDate.getDate());
        }
        this.fromDate = this.datePipe.transform(fromDate, dateFormat);
    };
    AuditsComponent.prototype.today = function () {
        var dateFormat = 'yyyy-MM-dd';
        // Today + 1 day - needed if the current day must be included
        var today = new Date();
        var date = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
        this.toDate = this.datePipe.transform(date, dateFormat);
    };
    AuditsComponent.prototype.sortAudits = function (audits) {
        var _this = this;
        audits = audits.slice(0).sort(function (a, b) {
            if (a[_this.orderProp] < b[_this.orderProp]) {
                return -1;
            }
            else if (true) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return this.reverse ? audits.reverse() : audits;
    };
    return AuditsComponent;
}());
AuditsComponent = __decorate([
    core_1.Component({
        selector: 'jhi-audit',
        template: __webpack_require__("./src/main/webapp/app/admin/audits/audits.component.html")
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        audits_service_1.AuditsService,
        ng_jhipster_1.ParseLinks,
        uib_pagination_config_1.PaginationConfig,
        common_1.DatePipe])
], AuditsComponent);
exports.AuditsComponent = AuditsComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/audits/audits.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var audits_component_1 = __webpack_require__("./src/main/webapp/app/admin/audits/audits.component.ts");
exports.auditsRoute = {
    path: 'audits',
    component: audits_component_1.AuditsComponent,
    data: {
        pageTitle: 'audits.title'
    }
};


/***/ }),

/***/ "./src/main/webapp/app/admin/audits/audits.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(6);
var AuditsService = (function () {
    function AuditsService(http) {
        this.http = http;
    }
    AuditsService.prototype.query = function (req) {
        var params = new http_1.URLSearchParams();
        params.set('fromDate', req.fromDate);
        params.set('toDate', req.toDate);
        params.set('page', req.page);
        params.set('size', req.size);
        params.set('sort', req.sort);
        var options = {
            search: params
        };
        return this.http.get('management/audits', options);
    };
    return AuditsService;
}());
AuditsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AuditsService);
exports.AuditsService = AuditsService;


/***/ }),

/***/ "./src/main/webapp/app/admin/configuration/configuration.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"allConfiguration && configuration\"> <h2 jhiTranslate=\"configuration.title\">Configuration</h2> <span jhiTranslate=\"configuration.filter\">Filter (by prefix)</span> <input type=\"text\" [(ngModel)]=\"filter\" class=\"form-control\"> <label>Spring configuration</label> <table class=\"table table-striped table-bordered table-responsive d-table\"> <thead> <tr> <th class=\"w-40\" (click)=\"orderProp = 'prefix'; reverse=!reverse\"><span jhiTranslate=\"configuration.table.prefix\">Prefix</span></th> <th class=\"w-60\" (click)=\"orderProp = 'properties'; reverse=!reverse\"><span jhiTranslate=\"configuration.table.properties\">Properties</span></th> </tr> </thead> <tbody> <tr *ngFor=\"let entry of (configuration | pureFilter:filter:'prefix' | orderBy:orderProp:reverse)\"> <td><span>{{entry.prefix}}</span></td> <td> <div class=\"row\" *ngFor=\"let key of keys(entry.properties)\"> <div class=\"col-md-4\">{{key}}</div> <div class=\"col-md-8\"> <span class=\"float-right badge badge-default break\">{{entry.properties[key]}}</span> </div> </div> </td> </tr> </tbody> </table> <div *ngFor=\"let key of keys(allConfiguration)\"> <label><span>{{key}}</span></label> <table class=\"table table-sm table-striped table-bordered table-responsive d-table\"> <thead> <tr> <th class=\"w-40\">Property</th> <th class=\"w-60\">Value</th> </tr> </thead> <tbody> <tr *ngFor=\"let item of allConfiguration[key]\"> <td class=\"break\">{{item.key}}</td> <td class=\"break\"> <span class=\"float-right badge badge-default break\">{{item.val}}</span> </td> </tr> </tbody> </table> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/configuration/configuration.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_jhipster_1 = __webpack_require__(1);
var configuration_service_1 = __webpack_require__("./src/main/webapp/app/admin/configuration/configuration.service.ts");
var JhiConfigurationComponent = (function () {
    function JhiConfigurationComponent(jhiLanguageService, configurationService) {
        this.jhiLanguageService = jhiLanguageService;
        this.configurationService = configurationService;
        this.allConfiguration = null;
        this.configuration = null;
        this.jhiLanguageService.setLocations(['configuration']);
        this.configKeys = [];
        this.filter = '';
        this.orderProp = 'prefix';
        this.reverse = false;
    }
    JhiConfigurationComponent.prototype.keys = function (dict) {
        return (dict === undefined) ? [] : Object.keys(dict);
    };
    JhiConfigurationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.configurationService.get().subscribe(function (configuration) {
            _this.configuration = configuration;
            for (var _i = 0, configuration_1 = configuration; _i < configuration_1.length; _i++) {
                var config = configuration_1[_i];
                if (config.properties !== undefined) {
                    _this.configKeys.push(Object.keys(config.properties));
                }
            }
        });
        this.configurationService.getEnv().subscribe(function (configuration) {
            _this.allConfiguration = configuration;
        });
    };
    return JhiConfigurationComponent;
}());
JhiConfigurationComponent = __decorate([
    core_1.Component({
        selector: 'jhi-configuration',
        template: __webpack_require__("./src/main/webapp/app/admin/configuration/configuration.component.html")
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        configuration_service_1.JhiConfigurationService])
], JhiConfigurationComponent);
exports.JhiConfigurationComponent = JhiConfigurationComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/configuration/configuration.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var configuration_component_1 = __webpack_require__("./src/main/webapp/app/admin/configuration/configuration.component.ts");
exports.configurationRoute = {
    path: 'jhi-configuration',
    component: configuration_component_1.JhiConfigurationComponent,
    data: {
        pageTitle: 'configuration.title'
    }
};


/***/ }),

/***/ "./src/main/webapp/app/admin/configuration/configuration.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(6);
var JhiConfigurationService = (function () {
    function JhiConfigurationService(http) {
        this.http = http;
    }
    JhiConfigurationService.prototype.get = function () {
        return this.http.get('management/configprops').map(function (res) {
            var properties = [];
            var propertiesObject = res.json();
            for (var key in propertiesObject) {
                if (propertiesObject.hasOwnProperty(key)) {
                    properties.push(propertiesObject[key]);
                }
            }
            return properties.sort(function (propertyA, propertyB) {
                return (propertyA.prefix === propertyB.prefix) ? 0 :
                    (propertyA.prefix < propertyB.prefix) ? -1 : 1;
            });
        });
    };
    JhiConfigurationService.prototype.getEnv = function () {
        return this.http.get('management/env').map(function (res) {
            var properties = {};
            var propertiesObject = res.json();
            for (var key in propertiesObject) {
                if (propertiesObject.hasOwnProperty(key)) {
                    var valsObject = propertiesObject[key];
                    var vals = [];
                    for (var valKey in valsObject) {
                        if (valsObject.hasOwnProperty(valKey)) {
                            vals.push({ key: valKey, val: valsObject[valKey] });
                        }
                    }
                    properties[key] = vals;
                }
            }
            return properties;
        });
    };
    return JhiConfigurationService;
}());
JhiConfigurationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], JhiConfigurationService);
exports.JhiConfigurationService = JhiConfigurationService;


/***/ }),

/***/ "./src/main/webapp/app/admin/docs/docs.component.html":
/***/ (function(module, exports) {

module.exports = "<iframe src=\"swagger-ui/index.html\" width=\"100%\" height=\"900\" seamless target=\"_top\" title=\"Swagger UI\" class=\"border-0\"></iframe> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/docs/docs.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_jhipster_1 = __webpack_require__(1);
var JhiDocsComponent = (function () {
    function JhiDocsComponent(jhiLanguageService) {
        this.jhiLanguageService = jhiLanguageService;
        this.jhiLanguageService.setLocations(['global']);
    }
    return JhiDocsComponent;
}());
JhiDocsComponent = __decorate([
    core_1.Component({
        selector: 'jhi-docs',
        template: __webpack_require__("./src/main/webapp/app/admin/docs/docs.component.html")
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService])
], JhiDocsComponent);
exports.JhiDocsComponent = JhiDocsComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/docs/docs.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var docs_component_1 = __webpack_require__("./src/main/webapp/app/admin/docs/docs.component.ts");
exports.docsRoute = {
    path: 'docs',
    component: docs_component_1.JhiDocsComponent,
    data: {
        pageTitle: 'global.menu.admin.apidocs'
    }
};


/***/ }),

/***/ "./src/main/webapp/app/admin/health/health-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\"> <h4 class=\"modal-title\" id=\"showHealthLabel\"> {{'health.indicator.' + baseName(currentHealth.name) | translate}} {{subSystemName(currentHealth.name)}} </h4> <button aria-label=\"Close\" data-dismiss=\"modal\" class=\"close\" type=\"button\" (click)=\"activeModal.dismiss('closed')\"><span aria-hidden=\"true\">&times;</span> </button> </div> <div class=\"modal-body pad\"> <div *ngIf=\"currentHealth.details\"> <h5 jhiTranslate=\"health.details.properties\">Properties</h5> <div class=\"table-responsive\"> <table class=\"table table-striped\"> <thead> <tr> <th class=\"text-left\" jhiTranslate=\"health.details.name\">Name</th> <th class=\"text-left\" jhiTranslate=\"health.details.value\">Value</th> </tr> </thead> <tbody> <tr *ngFor=\"let entry of currentHealth.details | keys\"> <td class=\"text-left\">{{entry.key}}</td> <td class=\"text-left\">{{readableValue(entry.value)}}</td> </tr> </tbody> </table> </div> </div> <div *ngIf=\"currentHealth.error\"> <h4 jhiTranslate=\"health.details.error\">Error</h4> <pre>{{currentHealth.error}}</pre> </div> </div> <div class=\"modal-footer\"> <button data-dismiss=\"modal\" class=\"btn btn-secondary float-left\" type=\"button\" (click)=\"activeModal.dismiss('closed')\">Done</button> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/health/health-modal.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_bootstrap_1 = __webpack_require__(7);
var health_service_1 = __webpack_require__("./src/main/webapp/app/admin/health/health.service.ts");
var JhiHealthModalComponent = (function () {
    function JhiHealthModalComponent(healthService, activeModal) {
        this.healthService = healthService;
        this.activeModal = activeModal;
    }
    JhiHealthModalComponent.prototype.baseName = function (name) {
        return this.healthService.getBaseName(name);
    };
    JhiHealthModalComponent.prototype.subSystemName = function (name) {
        return this.healthService.getSubSystemName(name);
    };
    JhiHealthModalComponent.prototype.readableValue = function (value) {
        if (this.currentHealth.name !== 'diskSpace') {
            return value.toString();
        }
        // Should display storage space in an human readable unit
        var val = value / 1073741824;
        if (val > 1) {
            return val.toFixed(2) + ' GB';
        }
        else {
            return (value / 1048576).toFixed(2) + ' MB';
        }
    };
    return JhiHealthModalComponent;
}());
JhiHealthModalComponent = __decorate([
    core_1.Component({
        selector: 'jhi-health-modal',
        template: __webpack_require__("./src/main/webapp/app/admin/health/health-modal.component.html")
    }),
    __metadata("design:paramtypes", [health_service_1.JhiHealthService, ng_bootstrap_1.NgbActiveModal])
], JhiHealthModalComponent);
exports.JhiHealthModalComponent = JhiHealthModalComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/health/health.component.html":
/***/ (function(module, exports) {

module.exports = "<div> <h2> <span jhiTranslate=\"health.title\">Health Checks</span> <button class=\"btn btn-primary float-right\" (click)=\"refresh()\"> <span class=\"fa fa-refresh\"></span> <span jhiTranslate=\"health.refresh.button\">Refresh</span> </button> </h2> <div class=\"table-responsive\"> <table id=\"healthCheck\" class=\"table table-striped\"> <thead> <tr> <th jhiTranslate=\"health.table.service\">Service Name</th> <th class=\"text-center\" jhiTranslate=\"health.table.status\">Status</th> <th class=\"text-center\" jhiTranslate=\"health.details.details\">Details</th> </tr> </thead> <tbody> <tr *ngFor=\"let health of healthData\"> <td>{{'health.indicator.' + baseName(health.name) | translate}} {{subSystemName(health.name)}}</td> <td class=\"text-center\"> <span class=\"badge\" [ngClass]=\"getBadgeClass(health.status)\" jhiTranslate=\"{{'health.status.' + health.status}}\"> {{health.status}} </span> </td> <td class=\"text-center\"> <a class=\"hand\" (click)=\"showHealth(health)\" *ngIf=\"health.details || health.error\"> <i class=\"fa fa-eye\"></i> </a> </td> </tr> </tbody> </table> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/health/health.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_bootstrap_1 = __webpack_require__(7);
var ng_jhipster_1 = __webpack_require__(1);
var health_service_1 = __webpack_require__("./src/main/webapp/app/admin/health/health.service.ts");
var health_modal_component_1 = __webpack_require__("./src/main/webapp/app/admin/health/health-modal.component.ts");
var JhiHealthCheckComponent = (function () {
    function JhiHealthCheckComponent(jhiLanguageService, modalService, healthService) {
        this.jhiLanguageService = jhiLanguageService;
        this.modalService = modalService;
        this.healthService = healthService;
        this.jhiLanguageService.setLocations(['health']);
    }
    JhiHealthCheckComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    JhiHealthCheckComponent.prototype.baseName = function (name) {
        return this.healthService.getBaseName(name);
    };
    JhiHealthCheckComponent.prototype.getBadgeClass = function (statusState) {
        if (statusState === 'UP') {
            return 'badge-success';
        }
        else {
            return 'badge-danger';
        }
    };
    JhiHealthCheckComponent.prototype.refresh = function () {
        var _this = this;
        this.updatingHealth = true;
        this.healthService.checkHealth().subscribe(function (health) {
            _this.healthData = _this.healthService.transformHealthData(health);
            _this.updatingHealth = false;
        }, function (error) {
            if (error.status === 503) {
                _this.healthData = _this.healthService.transformHealthData(error.json());
                _this.updatingHealth = false;
            }
        });
    };
    JhiHealthCheckComponent.prototype.showHealth = function (health) {
        var modalRef = this.modalService.open(health_modal_component_1.JhiHealthModalComponent);
        modalRef.componentInstance.currentHealth = health;
        modalRef.result.then(function (result) {
            // Left blank intentionally, nothing to do here
        }, function (reason) {
            // Left blank intentionally, nothing to do here
        });
    };
    JhiHealthCheckComponent.prototype.subSystemName = function (name) {
        return this.healthService.getSubSystemName(name);
    };
    return JhiHealthCheckComponent;
}());
JhiHealthCheckComponent = __decorate([
    core_1.Component({
        selector: 'jhi-health',
        template: __webpack_require__("./src/main/webapp/app/admin/health/health.component.html"),
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        ng_bootstrap_1.NgbModal,
        health_service_1.JhiHealthService])
], JhiHealthCheckComponent);
exports.JhiHealthCheckComponent = JhiHealthCheckComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/health/health.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var health_component_1 = __webpack_require__("./src/main/webapp/app/admin/health/health.component.ts");
exports.healthRoute = {
    path: 'jhi-health',
    component: health_component_1.JhiHealthCheckComponent,
    data: {
        pageTitle: 'health.title'
    }
};


/***/ }),

/***/ "./src/main/webapp/app/admin/health/health.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(6);
var JhiHealthService = (function () {
    function JhiHealthService(http) {
        this.http = http;
        this.separator = '.';
    }
    JhiHealthService.prototype.checkHealth = function () {
        return this.http.get('management/health').map(function (res) { return res.json(); });
    };
    JhiHealthService.prototype.transformHealthData = function (data) {
        var response = [];
        this.flattenHealthData(response, null, data);
        return response;
    };
    JhiHealthService.prototype.getBaseName = function (name) {
        if (name) {
            var split = name.split('.');
            return split[0];
        }
    };
    JhiHealthService.prototype.getSubSystemName = function (name) {
        if (name) {
            var split = name.split('.');
            split.splice(0, 1);
            var remainder = split.join('.');
            return remainder ? ' - ' + remainder : '';
        }
    };
    /* private methods */
    JhiHealthService.prototype.addHealthObject = function (result, isLeaf, healthObject, name) {
        var status;
        var error;
        var healthData = {
            'name': name,
            'error': error,
            'status': status
        };
        var details = {};
        var hasDetails = false;
        for (var key in healthObject) {
            if (healthObject.hasOwnProperty(key)) {
                var value = healthObject[key];
                if (key === 'status' || key === 'error') {
                    healthData[key] = value;
                }
                else {
                    if (!this.isHealthObject(value)) {
                        details[key] = value;
                        hasDetails = true;
                    }
                }
            }
        }
        // Add the details
        if (hasDetails) {
            healthData.details = details;
        }
        // Only add nodes if they provide additional information
        if (isLeaf || hasDetails || healthData.error) {
            result.push(healthData);
        }
        return healthData;
    };
    JhiHealthService.prototype.flattenHealthData = function (result, path, data) {
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                var value = data[key];
                if (this.isHealthObject(value)) {
                    if (this.hasSubSystem(value)) {
                        this.addHealthObject(result, false, value, this.getModuleName(path, key));
                        this.flattenHealthData(result, this.getModuleName(path, key), value);
                    }
                    else {
                        this.addHealthObject(result, true, value, this.getModuleName(path, key));
                    }
                }
            }
        }
        return result;
    };
    JhiHealthService.prototype.getModuleName = function (path, name) {
        var result;
        if (path && name) {
            result = path + this.separator + name;
        }
        else if (path) {
            result = path;
        }
        else if (name) {
            result = name;
        }
        else {
            result = '';
        }
        return result;
    };
    JhiHealthService.prototype.hasSubSystem = function (healthObject) {
        var result = false;
        for (var key in healthObject) {
            if (healthObject.hasOwnProperty(key)) {
                var value = healthObject[key];
                if (value && value.status) {
                    result = true;
                }
            }
        }
        return result;
    };
    JhiHealthService.prototype.isHealthObject = function (healthObject) {
        var result = false;
        for (var key in healthObject) {
            if (healthObject.hasOwnProperty(key)) {
                if (key === 'status') {
                    result = true;
                }
            }
        }
        return result;
    };
    return JhiHealthService;
}());
JhiHealthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], JhiHealthService);
exports.JhiHealthService = JhiHealthService;


/***/ }),

/***/ "./src/main/webapp/app/admin/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/main/webapp/app/admin/audits/audits.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/audits/audits.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/audits/audits.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/audits/audit.model.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/audits/audit-data.model.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/configuration/configuration.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/configuration/configuration.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/configuration/configuration.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/docs/docs.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/docs/docs.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/health/health.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/health/health-modal.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/health/health.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/health/health.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/logs/logs.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/logs/logs.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/logs/logs.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/logs/log.model.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/metrics/metrics.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/metrics/metrics-modal.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/metrics/metrics.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/metrics/metrics.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/user-management/user-management-dialog.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/user-management/user-management-delete-dialog.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/user-management/user-management-detail.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/user-management/user-management.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/user-management/user-management.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/user-management/user-modal.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/admin/admin.route.ts"));


/***/ }),

/***/ "./src/main/webapp/app/admin/logs/log.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Log = (function () {
    function Log(name, level) {
        this.name = name;
        this.level = level;
    }
    return Log;
}());
exports.Log = Log;


/***/ }),

/***/ "./src/main/webapp/app/admin/logs/logs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"table-responsive\" *ngIf=\"loggers\"> <h2 jhiTranslate=\"logs.title\">Logs</h2> <p jhiTranslate=\"logs.nbloggers\" translateValues=\"{total: '{{ loggers.length }}'}\">There are {{ loggers.length }} loggers.</p> <span jhiTranslate=\"logs.filter\">Filter</span> <input type=\"text\" [(ngModel)]=\"filter\" class=\"form-control\"> <table class=\"table table-condensed table-striped table-bordered\"> <thead> <tr title=\"click to order\"> <th (click)=\"orderProp = 'name'; reverse=!reverse\"><span jhiTranslate=\"logs.table.name\">Name</span></th> <th (click)=\"orderProp = 'level'; reverse=!reverse\"><span jhiTranslate=\"logs.table.level\">Level</span></th> </tr> </thead> <tr *ngFor=\"let logger of (loggers | pureFilter:filter:'name' | orderBy:orderProp:reverse)\"> <td><small>{{logger.name | slice:0:140}}</small></td> <td> <button (click)=\"changeLevel(logger.name, 'TRACE')\" [ngClass]=\"(logger.level=='TRACE') ? 'btn-danger' : 'btn-secondary'\" class=\"btn btn-sm\">TRACE</button> <button (click)=\"changeLevel(logger.name, 'DEBUG')\" [ngClass]=\"(logger.level=='DEBUG') ? 'btn-warning' : 'btn-secondary'\" class=\"btn btn-sm\">DEBUG</button> <button (click)=\"changeLevel(logger.name, 'INFO')\" [ngClass]=\"(logger.level=='INFO') ? 'btn-info' : 'btn-secondary'\" class=\"btn btn-sm\">INFO</button> <button (click)=\"changeLevel(logger.name, 'WARN')\" [ngClass]=\"(logger.level=='WARN') ? 'btn-success' : 'btn-secondary'\" class=\"btn btn-sm\">WARN</button> <button (click)=\"changeLevel(logger.name, 'ERROR')\" [ngClass]=\"(logger.level=='ERROR') ? 'btn-primary' : 'btn-secondary'\" class=\"btn btn-sm\">ERROR</button> </td> </tr> </table> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/logs/logs.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_jhipster_1 = __webpack_require__(1);
var log_model_1 = __webpack_require__("./src/main/webapp/app/admin/logs/log.model.ts");
var logs_service_1 = __webpack_require__("./src/main/webapp/app/admin/logs/logs.service.ts");
var LogsComponent = (function () {
    function LogsComponent(jhiLanguageService, logsService) {
        this.jhiLanguageService = jhiLanguageService;
        this.logsService = logsService;
        this.filter = '';
        this.orderProp = 'name';
        this.reverse = false;
        this.jhiLanguageService.setLocations(['logs']);
    }
    LogsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.logsService.findAll().subscribe(function (loggers) { return _this.loggers = loggers; });
    };
    LogsComponent.prototype.changeLevel = function (name, level) {
        var _this = this;
        var log = new log_model_1.Log(name, level);
        this.logsService.changeLevel(log).subscribe(function () {
            _this.logsService.findAll().subscribe(function (loggers) { return _this.loggers = loggers; });
        });
    };
    return LogsComponent;
}());
LogsComponent = __decorate([
    core_1.Component({
        selector: 'jhi-logs',
        template: __webpack_require__("./src/main/webapp/app/admin/logs/logs.component.html"),
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        logs_service_1.LogsService])
], LogsComponent);
exports.LogsComponent = LogsComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/logs/logs.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var logs_component_1 = __webpack_require__("./src/main/webapp/app/admin/logs/logs.component.ts");
exports.logsRoute = {
    path: 'logs',
    component: logs_component_1.LogsComponent,
    data: {
        pageTitle: 'logs.title'
    }
};


/***/ }),

/***/ "./src/main/webapp/app/admin/logs/logs.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(6);
var LogsService = (function () {
    function LogsService(http) {
        this.http = http;
    }
    LogsService.prototype.changeLevel = function (log) {
        return this.http.put('management/logs', log);
    };
    LogsService.prototype.findAll = function () {
        return this.http.get('management/logs').map(function (res) { return res.json(); });
    };
    return LogsService;
}());
LogsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], LogsService);
exports.LogsService = LogsService;


/***/ }),

/***/ "./src/main/webapp/app/admin/metrics/metrics-modal.component.html":
/***/ (function(module, exports) {

module.exports = " <div class=\"modal-header\"> <h4 class=\"modal-title\" jhiTranslate=\"metrics.jvm.threads.dump.title\">Threads dump</h4> <button type=\"button\" class=\"close\" (click)=\"activeModal.dismiss('closed')\">&times;</button> </div> <div class=\"modal-body\"> <span class=\"badge badge-primary\" (click)=\"threadDumpFilter = {}\">All&nbsp;<span class=\"badge badge-pill badge-default\">{{threadDumpAll}}</span></span>&nbsp; <span class=\"badge badge-success\" (click)=\"threadDumpFilter = {threadState: 'RUNNABLE'}\">Runnable&nbsp;<span class=\"badge badge-pill badge-default\">{{threadDumpRunnable}}</span></span>&nbsp; <span class=\"badge badge-info\" (click)=\"threadDumpFilter = {threadState: 'WAITING'}\">Waiting&nbsp;<span class=\"badge badge-pill badge-default\">{{threadDumpWaiting}}</span></span>&nbsp; <span class=\"badge badge-warning\" (click)=\"threadDumpFilter = {threadState: 'TIMED_WAITING'}\">Timed Waiting&nbsp;<span class=\"badge badge-pill badge-default\">{{threadDumpTimedWaiting}}</span></span>&nbsp; <span class=\"badge badge-danger\" (click)=\"threadDumpFilter = {threadState: 'BLOCKED'}\">Blocked&nbsp;<span class=\"badge badge-pill badge-default\">{{threadDumpBlocked}}</span></span>&nbsp; <div class=\"mt-2\">&nbsp;</div> Filter <input type=\"text\" [(ngModel)]=\"threadDumpFilter\" class=\"form-control\"> <div class=\"pad\" *ngFor=\"let entry of threadDump | pureFilter:threadDumpFilter:'lockName' | keys\"> <h6> <span class=\"badge\" [ngClass]=\"getBadgeClass(entry.value.threadState)\">{{entry.value.threadState}}</span>&nbsp;{{entry.value.threadName}} (ID {{entry.value.threadId}}) <a (click)=\"entry.show = !entry.show\" href=\"javascript:void(0);\"> <span [hidden]=\"entry.show\" jhiTranslate=\"metrics.jvm.threads.dump.show\">Show StackTrace</span> <span [hidden]=\"!entry.show\" jhiTranslate=\"metrics.jvm.threads.dump.hide\">Hide StackTrace</span> </a> </h6> <div class=\"card\" [hidden]=\"!entry.show\"> <div class=\"card-block\"> <div *ngFor=\"let st of entry.value.stackTrace | keys\" class=\"break\"> <samp>{{st.value.className}}.{{st.value.methodName}}(<code>{{st.value.fileName}}:{{st.value.lineNumber}}</code>)</samp> <span class=\"mt-1\"></span> </div> </div> </div> <table class=\"table table-sm table-responsive\"> <thead> <tr> <th class=\"text-right\" jhiTranslate=\"metrics.jvm.threads.dump.blockedtime\">Blocked Time</th> <th class=\"text-right\" jhiTranslate=\"metrics.jvm.threads.dump.blockedcount\">Blocked Count</th> <th class=\"text-right\" jhiTranslate=\"metrics.jvm.threads.dump.waitedtime\">Waited Time</th> <th class=\"text-right\" jhiTranslate=\"metrics.jvm.threads.dump.waitedcount\">Waited Count</th> <th jhiTranslate=\"metrics.jvm.threads.dump.lockname\">Lock Name</th> </tr> </thead> <tbody> <tr> <td>{{entry.value.blockedTime}}</td> <td>{{entry.value.blockedCount}}</td> <td>{{entry.value.waitedTime}}</td> <td>{{entry.value.waitedCount}}</td> <td><code>{{entry.value.lockName}}</code></td> </tr> </tbody> </table> </div> </div> <div class=\"modal-footer\"> <button type=\"button\" class=\"btn btn-secondary pull-left\" data-dismiss=\"modal\" (click)=\"activeModal.dismiss('closed')\">Done</button> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/metrics/metrics-modal.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_bootstrap_1 = __webpack_require__(7);
var JhiMetricsMonitoringModalComponent = (function () {
    function JhiMetricsMonitoringModalComponent(activeModal) {
        this.activeModal = activeModal;
        this.threadDumpAll = 0;
        this.threadDumpBlocked = 0;
        this.threadDumpRunnable = 0;
        this.threadDumpTimedWaiting = 0;
        this.threadDumpWaiting = 0;
    }
    JhiMetricsMonitoringModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.threadDump.forEach(function (value) {
            if (value.threadState === 'RUNNABLE') {
                _this.threadDumpRunnable += 1;
            }
            else if (value.threadState === 'WAITING') {
                _this.threadDumpWaiting += 1;
            }
            else if (value.threadState === 'TIMED_WAITING') {
                _this.threadDumpTimedWaiting += 1;
            }
            else if (value.threadState === 'BLOCKED') {
                _this.threadDumpBlocked += 1;
            }
        });
        this.threadDumpAll = this.threadDumpRunnable + this.threadDumpWaiting +
            this.threadDumpTimedWaiting + this.threadDumpBlocked;
    };
    JhiMetricsMonitoringModalComponent.prototype.getBadgeClass = function (threadState) {
        if (threadState === 'RUNNABLE') {
            return 'badge-success';
        }
        else if (threadState === 'WAITING') {
            return 'badge-info';
        }
        else if (threadState === 'TIMED_WAITING') {
            return 'badge-warning';
        }
        else if (threadState === 'BLOCKED') {
            return 'badge-danger';
        }
    };
    return JhiMetricsMonitoringModalComponent;
}());
JhiMetricsMonitoringModalComponent = __decorate([
    core_1.Component({
        selector: 'jhi-metrics-modal',
        template: __webpack_require__("./src/main/webapp/app/admin/metrics/metrics-modal.component.html")
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal])
], JhiMetricsMonitoringModalComponent);
exports.JhiMetricsMonitoringModalComponent = JhiMetricsMonitoringModalComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/metrics/metrics.component.html":
/***/ (function(module, exports) {

module.exports = "<div> <h2> <span jhiTranslate=\"metrics.title\">Application Metrics</span> <button class=\"btn btn-primary float-right\" (click)=\"refresh()\"> <span class=\"fa fa-refresh\"></span> <span jhiTranslate=\"metrics.refresh.button\">Refresh</span> </button> </h2> <h3 jhiTranslate=\"metrics.jvm.title\">JVM Metrics</h3> <div class=\"row\" *ngIf=\"!updatingMetrics\"> <div class=\"col-md-4\"> <b jhiTranslate=\"metrics.jvm.memory.title\">Memory</b> <p><span jhiTranslate=\"metrics.jvm.memory.total\">Total Memory</span> ({{metrics.gauges['jvm.memory.total.used'].value / 1000000 | number:'1.0-0'}}M / {{metrics.gauges['jvm.memory.total.max'].value / 1000000 | number:'1.0-0'}}M)</p> <ngb-progressbar type=\"success\" [max]=\"metrics.gauges['jvm.memory.total.max'].value\" [value]=\"metrics.gauges['jvm.memory.total.used'].value\" [striped]=\"true\" [animated]=\"true\"> <span>{{metrics.gauges['jvm.memory.total.used'].value * 100 / metrics.gauges['jvm.memory.total.max'].value | number:'1.0-0'}}%</span> </ngb-progressbar> <p><span jhiTranslate=\"metrics.jvm.memory.heap\">Heap Memory</span> ({{metrics.gauges['jvm.memory.heap.used'].value / 1000000 | number:'1.0-0'}}M / {{metrics.gauges['jvm.memory.heap.max'].value / 1000000 | number:'1.0-0'}}M)</p> <ngb-progressbar [max]=\"metrics.gauges['jvm.memory.heap.max'].value\" [value]=\"metrics.gauges['jvm.memory.heap.used'].value\" [striped]=\"true\" [animated]=\"true\" type=\"success\"> <span>{{metrics.gauges['jvm.memory.heap.used'].value * 100 / metrics.gauges['jvm.memory.heap.max'].value | number:'1.0-0'}}%</span> </ngb-progressbar> <p><span jhiTranslate=\"metrics.jvm.memory.nonheap\">Non-Heap Memory</span> ({{metrics.gauges['jvm.memory.non-heap.used'].value / 1000000 | number:'1.0-0'}}M / {{metrics.gauges['jvm.memory.non-heap.committed'].value / 1000000 | number:'1.0-0'}}M)</p> <ngb-progressbar [max]=\"metrics.gauges['jvm.memory.non-heap.committed'].value\" [value]=\"metrics.gauges['jvm.memory.non-heap.used'].value\" [striped]=\"true\" [animated]=\"true\" type=\"success\"> <span>{{metrics.gauges['jvm.memory.non-heap.used'].value * 100 / metrics.gauges['jvm.memory.non-heap.committed'].value | number:'1.0-0'}}%</span> </ngb-progressbar> </div> <div class=\"col-md-4\"> <b jhiTranslate=\"metrics.jvm.threads.title\">Threads</b> (Total: {{metrics.gauges['jvm.threads.count'].value}}) <a class=\"hand\" (click)=\"refreshThreadDumpData()\" data-toggle=\"modal\" data-target=\"#threadDump\"><i class=\"fa fa-eye\"></i></a> <p><span jhiTranslate=\"metrics.jvm.threads.runnable\">Runnable</span> {{metrics.gauges['jvm.threads.runnable.count'].value}}</p> <ngb-progressbar [value]=\"metrics.gauges['jvm.threads.runnable.count'].value\" [max]=\"metrics.gauges['jvm.threads.count'].value\" [striped]=\"true\" [animated]=\"true\" type=\"success\"> <span>{{metrics.gauges['jvm.threads.runnable.count'].value * 100 / metrics.gauges['jvm.threads.count'].value | number:'1.0-0'}}%</span> </ngb-progressbar> <p><span jhiTranslate=\"metrics.jvm.threads.timedwaiting\">Timed Waiting</span> ({{metrics.gauges['jvm.threads.timed_waiting.count'].value}})</p> <ngb-progressbar [value]=\"metrics.gauges['jvm.threads.timed_waiting.count'].value\" [max]=\"metrics.gauges['jvm.threads.count'].value\" [striped]=\"true\" [animated]=\"true\" type=\"warning\"> <span>{{metrics.gauges['jvm.threads.timed_waiting.count'].value * 100 / metrics.gauges['jvm.threads.count'].value | number:'1.0-0'}}%</span> </ngb-progressbar> <p><span jhiTranslate=\"metrics.jvm.threads.waiting\">Waiting</span> ({{metrics.gauges['jvm.threads.waiting.count'].value}})</p> <ngb-progressbar [value]=\"metrics.gauges['jvm.threads.waiting.count'].value\" [max]=\"metrics.gauges['jvm.threads.count'].value\" [striped]=\"true\" [animated]=\"true\" type=\"warning\"> <span>{{metrics.gauges['jvm.threads.waiting.count'].value * 100 / metrics.gauges['jvm.threads.count'].value | number:'1.0-0'}}%</span> </ngb-progressbar> <p><span jhiTranslate=\"metrics.jvm.threads.blocked\">Blocked</span> ({{metrics.gauges['jvm.threads.blocked.count'].value}})</p> <ngb-progressbar [value]=\"metrics.gauges['jvm.threads.blocked.count'].value\" [max]=\"metrics.gauges['jvm.threads.count'].value\" [striped]=\"true\" [animated]=\"true\" type=\"success\"> <span>{{metrics.gauges['jvm.threads.blocked.count'].value * 100 / metrics.gauges['jvm.threads.count'].value | number:'1.0-0'}}%</span> </ngb-progressbar> </div> <div class=\"col-md-4\"> <b jhiTranslate=\"metrics.jvm.gc.title\">Garbage collections</b> <div class=\"row\" *ngIf=\"metrics.gauges['jvm.garbage.PS-MarkSweep.count']\"> <div class=\"col-md-9\" jhiTranslate=\"metrics.jvm.gc.marksweepcount\">Mark Sweep count</div> <div class=\"col-md-3 text-right\">{{metrics.gauges['jvm.garbage.PS-MarkSweep.count'].value}}</div> </div> <div class=\"row\" *ngIf=\"metrics.gauges['jvm.garbage.PS-MarkSweep.time']\"> <div class=\"col-md-9\" jhiTranslate=\"metrics.jvm.gc.marksweeptime\">Mark Sweep time</div> <div class=\"col-md-3 text-right\">{{metrics.gauges['jvm.garbage.PS-MarkSweep.time'].value}}ms</div> </div> <div class=\"row\" *ngIf=\"metrics.gauges['jvm.garbage.PS-Scavenge.count']\"> <div class=\"col-md-9\" jhiTranslate=\"metrics.jvm.gc.scavengecount\">Scavenge count</div> <div class=\"col-md-3 text-right\">{{metrics.gauges['jvm.garbage.PS-Scavenge.count'].value}}</div> </div> <div class=\"row\" *ngIf=\"metrics.gauges['jvm.garbage.PS-Scavenge.time']\"> <div class=\"col-md-9\" jhiTranslate=\"metrics.jvm.gc.scavengetime\">Scavenge time</div> <div class=\"col-md-3 text-right\">{{metrics.gauges['jvm.garbage.PS-Scavenge.time'].value}}ms</div> </div> </div> </div> <div class=\"well well-lg\" *ngIf=\"updatingMetrics\" jhiTranslate=\"metrics.updating\">Updating...</div> <h3 jhiTranslate=\"metrics.jvm.http.title\">HTTP requests (events per second)</h3> <p *ngIf=\"metrics.counters\"> <span jhiTranslate=\"metrics.jvm.http.active\">Active requests</span> <b>{{metrics.counters['com.codahale.metrics.servlet.InstrumentedFilter.activeRequests'].count | number:'1.0-0'}}</b> - <span jhiTranslate=\"metrics.jvm.http.total\">Total requests</span> <b>{{metrics.timers['com.codahale.metrics.servlet.InstrumentedFilter.requests'].count | number:'1.0-0'}}</b> </p> <div class=\"table-responsive\" *ngIf=\"!updatingMetrics\"> <table class=\"table table-striped\"> <thead> <tr> <th jhiTranslate=\"metrics.jvm.http.table.code\">Code</th> <th jhiTranslate=\"metrics.jvm.http.table.count\">Count</th> <th class=\"text-right\" jhiTranslate=\"metrics.jvm.http.table.mean\">Mean</th> <th class=\"text-right\"><span jhiTranslate=\"metrics.jvm.http.table.average\">Average</span> (1 min)</th> <th class=\"text-right\"><span jhiTranslate=\"metrics.jvm.http.table.average\">Average</span> (5 min)</th> <th class=\"text-right\"><span jhiTranslate=\"metrics.jvm.http.table.average\">Average</span> (15 min)</th> </tr> </thead> <tbody> <tr> <td jhiTranslate=\"metrics.jvm.http.code.ok\">OK</td> <td> <ngb-progressbar [max]=\"metrics.timers['com.codahale.metrics.servlet.InstrumentedFilter.requests'].count\" [value]=\"metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.ok'].count\" [striped]=\"true\" [animated]=\"true\" type=\"success\"> <span>{{metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.ok'].count}}</span> </ngb-progressbar> </td> <td class=\"text-right\"> {{metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.ok'].mean_rate | number:'1.0-2'}} </td> <td class=\"text-right\">{{metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.ok'].m1_rate | number:'1.0-2'}} </td> <td class=\"text-right\">{{metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.ok'].m5_rate | number:'1.0-2'}} </td> <td class=\"text-right\"> {{metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.ok'].m15_rate | number:'1.0-2'}} </td> </tr> <tr> <td jhiTranslate=\"metrics.jvm.http.code.notfound\">Not Found</td> <td> <ngb-progressbar [max]=\"metrics.timers['com.codahale.metrics.servlet.InstrumentedFilter.requests'].count\" [value]=\"metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.notFound'].count\" [striped]=\"true\" [animated]=\"true\" type=\"success\"> <span>{{metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.notFound'].count}}</span> </ngb-progressbar> </td> <td class=\"text-right\"> {{metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.notFound'].mean_rate | number:'1.0-2'}} </td> <td class=\"text-right\"> {{metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.notFound'].m1_rate | number:'1.0-2'}} </td> <td class=\"text-right\"> {{metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.notFound'].m5_rate | number:'1.0-2'}} </td> <td class=\"text-right\"> {{metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.notFound'].m15_rate | number:'1.0-2'}} </td> </tr> <tr> <td jhiTranslate=\"metrics.jvm.http.code.servererror\">Server error</td> <td> <ngb-progressbar [max]=\"metrics.timers['com.codahale.metrics.servlet.InstrumentedFilter.requests'].count\" [value]=\"metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.serverError'].count\" [striped]=\"true\" [animated]=\"true\" type=\"success\"> <span>{{metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.serverError'].count}}</span> </ngb-progressbar> </td> <td class=\"text-right\"> {{metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.serverError'].mean_rate | number:'1.0-2'}} </td> <td class=\"text-right\"> {{metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.serverError'].m1_rate | number:'1.0-2'}} </td> <td class=\"text-right\"> {{metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.serverError'].m5_rate | number:'1.0-2'}} </td> <td class=\"text-right\"> {{metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.serverError'].m15_rate | number:'1.0-2'}} </td> </tr> </tbody> </table> </div> <h3 jhiTranslate=\"metrics.servicesstats.title\">Services statistics (time in millisecond)</h3> <div class=\"table-responsive\" *ngIf=\"!updatingMetrics\"> <table class=\"table table-striped\"> <thead> <tr> <th jhiTranslate=\"metrics.servicesstats.table.name\">Service name</th> <th class=\"text-right\" jhiTranslate=\"metrics.servicesstats.table.count\">Count</th> <th class=\"text-right\" jhiTranslate=\"metrics.servicesstats.table.mean\">Mean</th> <th class=\"text-right\" jhiTranslate=\"metrics.servicesstats.table.min\">Min</th> <th class=\"text-right\" jhiTranslate=\"metrics.servicesstats.table.p50\">p50</th> <th class=\"text-right\" jhiTranslate=\"metrics.servicesstats.table.p75\">p75</th> <th class=\"text-right\" jhiTranslate=\"metrics.servicesstats.table.p95\">p95</th> <th class=\"text-right\" jhiTranslate=\"metrics.servicesstats.table.p99\">p99</th> <th class=\"text-right\" jhiTranslate=\"metrics.servicesstats.table.max\">Max</th> </tr> </thead> <tbody> <tr *ngFor=\"let entry of servicesStats | keys\"> <td>{{entry.key}}</td> <td class=\"text-right\">{{entry.value.count}}</td> <td class=\"text-right\">{{entry.value.mean * 1000 | number:'1.0-0'}}</td> <td class=\"text-right\">{{entry.value.min * 1000 | number:'1.0-0'}}</td> <td class=\"text-right\">{{entry.value.p50 * 1000 | number:'1.0-0'}}</td> <td class=\"text-right\">{{entry.value.p75 * 1000 | number:'1.0-0'}}</td> <td class=\"text-right\">{{entry.value.p95 * 1000 | number:'1.0-0'}}</td> <td class=\"text-right\">{{entry.value.p99 * 1000 | number:'1.0-0'}}</td> <td class=\"text-right\">{{entry.value.max * 1000 | number:'1.0-0'}}</td> </tr> </tbody> </table> </div> <h3 jhiTranslate=\"metrics.cache.title\">Cache statistics</h3> <div class=\"table-responsive\" *ngIf=\"!updatingMetrics\"> <table class=\"table table-striped\"> <thead> <tr> <th jhiTranslate=\"metrics.cache.cachename\">Cache name</th> <th class=\"text-right\" data-translate=\"metrics.cache.hits\">Cache Hits</th> <th class=\"text-right\" data-translate=\"metrics.cache.misses\">Cache Misses</th> <th class=\"text-right\" data-translate=\"metrics.cache.gets\">Cache Gets</th> <th class=\"text-right\" data-translate=\"metrics.cache.puts\">Cache Puts</th> <th class=\"text-right\" data-translate=\"metrics.cache.removals\">Cache Removals</th> <th class=\"text-right\" data-translate=\"metrics.cache.evictions\">Cache Evictions</th> <th class=\"text-right\" data-translate=\"metrics.cache.hitPercent\">Cache Hit %</th> <th class=\"text-right\" data-translate=\"metrics.cache.missPercent\">Cache Miss %</th> <th class=\"text-right\" data-translate=\"metrics.cache.averageGetTime\">Average get time (µs)</th> <th class=\"text-right\" data-translate=\"metrics.cache.averagePutTime\">Average put time (µs)</th> <th class=\"text-right\" data-translate=\"metrics.cache.averageRemoveTime\">Average remove time (µs)</th> </tr> </thead> <tbody> <tr *ngFor=\"let entry of cachesStats | keys\"> <td>{{entry.key}}</td> <td class=\"text-right\">{{metrics.gauges[entry.key + '.cache-hits'].value}}</td> <td class=\"text-right\">{{metrics.gauges[entry.key + '.cache-misses'].value}}</td> <td class=\"text-right\">{{metrics.gauges[entry.key + '.cache-gets'].value}}</td> <td class=\"text-right\">{{metrics.gauges[entry.key + '.cache-puts'].value}}</td> <td class=\"text-right\">{{metrics.gauges[entry.key + '.cache-removals'].value}}</td> <td class=\"text-right\">{{metrics.gauges[entry.key + '.cache-evictions'].value}}</td> <td class=\"text-right\">{{metrics.gauges[entry.key + '.cache-hit-percentage'].value}}</td> <td class=\"text-right\">{{metrics.gauges[entry.key + '.cache-miss-percentage'].value }}</td> <td class=\"text-right\">{{metrics.gauges[entry.key + '.average-get-time'].value | number : '1.2-2' }}</td> <td class=\"text-right\">{{metrics.gauges[entry.key + '.average-put-time'].value | number : '1.2-2'}}</td> <td class=\"text-right\">{{metrics.gauges[entry.key + '.average-remove-time'].value | number : '1.2-2' }}</td> </tr> </tbody> </table> </div> <h3 jhiTranslate=\"metrics.datasource.title\" *ngIf=\"metrics.gauges && metrics.gauges['HikariPool-1.pool.TotalConnections'] && metrics.gauges['HikariPool-1.pool.TotalConnections'].value > 0\">DataSource statistics (time in millisecond)</h3> <div class=\"table-responsive\" *ngIf=\"!updatingMetrics && metrics.gauges && metrics.gauges['HikariPool-1.pool.TotalConnections'] && metrics.gauges['HikariPool-1.pool.TotalConnections'].value > 0\"> <table class=\"table table-striped\"> <thead> <tr> <th><span jhiTranslate=\"metrics.datasource.usage\">Usage</span> ({{metrics.gauges['HikariPool-1.pool.ActiveConnections'].value}} / {{metrics.gauges['HikariPool-1.pool.TotalConnections'].value}})</th> <th class=\"text-right\" jhiTranslate=\"metrics.datasource.count\">Count</th> <th class=\"text-right\" jhiTranslate=\"metrics.datasource.mean\">Mean</th> <th class=\"text-right\" jhiTranslate=\"metrics.datasource.min\">Min</th> <th class=\"text-right\" jhiTranslate=\"metrics.datasource.p50\">p50</th> <th class=\"text-right\" jhiTranslate=\"metrics.datasource.p75\">p75</th> <th class=\"text-right\" jhiTranslate=\"metrics.datasource.p95\">p95</th> <th class=\"text-right\" jhiTranslate=\"metrics.datasource.p99\">p99</th> <th class=\"text-right\" jhiTranslate=\"metrics.datasource.max\">Max</th> </tr> </thead> <tbody> <tr> <td> <div class=\"progress progress-striped\"> <ngb-progressbar [max]=\"metrics.gauges['HikariPool-1.pool.TotalConnections'].value\" [value]=\"metrics.gauges['HikariPool-1.pool.ActiveConnections'].value\" [striped]=\"true\" [animated]=\"true\" type=\"success\"> <span>{{metrics.gauges['HikariPool-1.pool.ActiveConnections'].value * 100 / metrics.gauges['HikariPool-1.pool.TotalConnections'].value | number:'1.0-0'}}%</span> </ngb-progressbar> </div> </td> <td class=\"text-right\">{{metrics.histograms['HikariPool-1.pool.Usage'].count}}</td> <td class=\"text-right\">{{metrics.histograms['HikariPool-1.pool.Usage'].mean | number:'1.0-2'}}</td> <td class=\"text-right\">{{metrics.histograms['HikariPool-1.pool.Usage'].min | number:'1.0-2'}}</td> <td class=\"text-right\">{{metrics.histograms['HikariPool-1.pool.Usage'].p50 | number:'1.0-2'}}</td> <td class=\"text-right\">{{metrics.histograms['HikariPool-1.pool.Usage'].p75 | number:'1.0-2'}}</td> <td class=\"text-right\">{{metrics.histograms['HikariPool-1.pool.Usage'].p95 | number:'1.0-2'}}</td> <td class=\"text-right\">{{metrics.histograms['HikariPool-1.pool.Usage'].p99 | number:'1.0-2'}}</td> <td class=\"text-right\">{{metrics.histograms['HikariPool-1.pool.Usage'].max | number:'1.0-2'}}</td> </tr> </tbody> </table> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/metrics/metrics.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_bootstrap_1 = __webpack_require__(7);
var ng_jhipster_1 = __webpack_require__(1);
var metrics_modal_component_1 = __webpack_require__("./src/main/webapp/app/admin/metrics/metrics-modal.component.ts");
var metrics_service_1 = __webpack_require__("./src/main/webapp/app/admin/metrics/metrics.service.ts");
var JhiMetricsMonitoringComponent = (function () {
    function JhiMetricsMonitoringComponent(jhiLanguageService, modalService, metricsService) {
        this.jhiLanguageService = jhiLanguageService;
        this.modalService = modalService;
        this.metricsService = metricsService;
        this.metrics = {};
        this.cachesStats = {};
        this.servicesStats = {};
        this.updatingMetrics = true;
        this.JCACHE_KEY = 'jcache.statistics';
        this.jhiLanguageService.setLocations(['metrics']);
    }
    JhiMetricsMonitoringComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    JhiMetricsMonitoringComponent.prototype.refresh = function () {
        var _this = this;
        this.updatingMetrics = true;
        this.metricsService.getMetrics().subscribe(function (metrics) {
            _this.metrics = metrics;
            _this.updatingMetrics = false;
            _this.servicesStats = {};
            _this.cachesStats = {};
            Object.keys(metrics.timers).forEach(function (key) {
                var value = metrics.timers[key];
                if (key.indexOf('web.rest') !== -1 || key.indexOf('service') !== -1) {
                    _this.servicesStats[key] = value;
                }
            });
            Object.keys(metrics.gauges).forEach(function (key) {
                if (key.indexOf('jcache.statistics') !== -1) {
                    var value = metrics.gauges[key].value;
                    // remove gets or puts
                    var index = key.lastIndexOf('.');
                    var newKey = key.substr(0, index);
                    // Keep the name of the domain
                    _this.cachesStats[newKey] = {
                        'name': _this.JCACHE_KEY.length,
                        'value': value
                    };
                }
            });
        });
    };
    JhiMetricsMonitoringComponent.prototype.refreshThreadDumpData = function () {
        var _this = this;
        this.metricsService.threadDump().subscribe(function (data) {
            var modalRef = _this.modalService.open(metrics_modal_component_1.JhiMetricsMonitoringModalComponent, { size: 'lg' });
            modalRef.componentInstance.threadDump = data;
            modalRef.result.then(function (result) {
                // Left blank intentionally, nothing to do here
            }, function (reason) {
                // Left blank intentionally, nothing to do here
            });
        });
    };
    return JhiMetricsMonitoringComponent;
}());
JhiMetricsMonitoringComponent = __decorate([
    core_1.Component({
        selector: 'jhi-metrics',
        template: __webpack_require__("./src/main/webapp/app/admin/metrics/metrics.component.html"),
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        ng_bootstrap_1.NgbModal,
        metrics_service_1.JhiMetricsService])
], JhiMetricsMonitoringComponent);
exports.JhiMetricsMonitoringComponent = JhiMetricsMonitoringComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/metrics/metrics.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var metrics_component_1 = __webpack_require__("./src/main/webapp/app/admin/metrics/metrics.component.ts");
exports.metricsRoute = {
    path: 'jhi-metrics',
    component: metrics_component_1.JhiMetricsMonitoringComponent,
    data: {
        pageTitle: 'metrics.title'
    }
};


/***/ }),

/***/ "./src/main/webapp/app/admin/metrics/metrics.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(6);
var JhiMetricsService = (function () {
    function JhiMetricsService(http) {
        this.http = http;
    }
    JhiMetricsService.prototype.getMetrics = function () {
        return this.http.get('management/metrics').map(function (res) { return res.json(); });
    };
    JhiMetricsService.prototype.threadDump = function () {
        return this.http.get('management/dump').map(function (res) { return res.json(); });
    };
    return JhiMetricsService;
}());
JhiMetricsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], JhiMetricsService);
exports.JhiMetricsService = JhiMetricsService;


/***/ }),

/***/ "./src/main/webapp/app/admin/user-management/user-management-delete-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<form name=\"deleteForm\" (ngSubmit)=\"confirmDelete(user.login)\"> <div class=\"modal-header\"> <h4 class=\"modal-title\" jhiTranslate=\"entity.delete.title\">Confirm delete operation</h4> <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\" (click)=\"clear()\">&times;</button> </div> <div class=\"modal-body\"> <jhi-alert-error></jhi-alert-error> <p jhiTranslate=\"userManagement.delete.question\" translateValues=\"{login: '{{user.login}}'}\">Are you sure you want to delete this User?</p> </div> <div class=\"modal-footer\"> <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"clear()\"> <span class=\"fa fa-ban\"></span>&nbsp;<span jhiTranslate=\"entity.action.cancel\">Cancel</span> </button> <button type=\"submit\" class=\"btn btn-danger\"> <span class=\"fa fa-remove\"></span>&nbsp;<span jhiTranslate=\"entity.action.delete\">Delete</span> </button> </div> </form> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/user-management/user-management-delete-dialog.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(5);
var ng_bootstrap_1 = __webpack_require__(7);
var ng_jhipster_1 = __webpack_require__(1);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var user_modal_service_1 = __webpack_require__("./src/main/webapp/app/admin/user-management/user-modal.service.ts");
var UserMgmtDeleteDialogComponent = (function () {
    function UserMgmtDeleteDialogComponent(jhiLanguageService, userService, activeModal, eventManager) {
        this.jhiLanguageService = jhiLanguageService;
        this.userService = userService;
        this.activeModal = activeModal;
        this.eventManager = eventManager;
        this.jhiLanguageService.setLocations(['user-management']);
    }
    UserMgmtDeleteDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
    };
    UserMgmtDeleteDialogComponent.prototype.confirmDelete = function (login) {
        var _this = this;
        this.userService.delete(login).subscribe(function (response) {
            _this.eventManager.broadcast({ name: 'userListModification',
                content: 'Deleted a user' });
            _this.activeModal.dismiss(true);
        });
    };
    return UserMgmtDeleteDialogComponent;
}());
UserMgmtDeleteDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-user-mgmt-delete-dialog',
        template: __webpack_require__("./src/main/webapp/app/admin/user-management/user-management-delete-dialog.component.html")
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        shared_1.UserService,
        ng_bootstrap_1.NgbActiveModal,
        ng_jhipster_1.EventManager])
], UserMgmtDeleteDialogComponent);
exports.UserMgmtDeleteDialogComponent = UserMgmtDeleteDialogComponent;
var UserDeleteDialogComponent = (function () {
    function UserDeleteDialogComponent(route, userModalService) {
        this.route = route;
        this.userModalService = userModalService;
    }
    UserDeleteDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            _this.modalRef = _this.userModalService.open(UserMgmtDeleteDialogComponent, params['login']);
        });
    };
    UserDeleteDialogComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return UserDeleteDialogComponent;
}());
UserDeleteDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-user-delete-dialog',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        user_modal_service_1.UserModalService])
], UserDeleteDialogComponent);
exports.UserDeleteDialogComponent = UserDeleteDialogComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/user-management/user-management-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\"> <h2> <span jhiTranslate=\"userManagement.detail.title\">User</span> [<b>{{user.login}}</b>] </h2> <dl class=\"row-md jh-entity-details\"> <dt><span jhiTranslate=\"userManagement.login\">Login</span></dt> <dd> <span>{{user.login}}</span> <span class=\"badge badge-danger\" *ngIf=\"!user.activated\" jhiTranslate=\"userManagement.deactivated\">Deactivated</span> <span class=\"badge badge-success\" *ngIf=\"user.activated\" jhiTranslate=\"userManagement.activated\">Activated</span> </dd> <dt><span jhiTranslate=\"userManagement.firstName\">First Name</span></dt> <dd>{{user.firstName}}</dd> <dt><span jhiTranslate=\"userManagement.lastName\">Last Name</span></dt> <dd>{{user.lastName}}</dd> <dt><span jhiTranslate=\"userManagement.email\">Email</span></dt> <dd>{{user.email}}</dd> <dt><span jhiTranslate=\"userManagement.langKey\">Lang Key</span></dt> <dd>{{user.langKey}}</dd> <dt><span jhiTranslate=\"userManagement.createdBy\">Created By</span></dt> <dd>{{user.createdBy}}</dd> <dt><span jhiTranslate=\"userManagement.createdDate\">Created Date</span></dt> <dd>{{user.createdDate | date:'dd/MM/yy HH:mm' }}</dd> <dt><span jhiTranslate=\"userManagement.lastModifiedBy\">Last Modified By</span></dt> <dd>{{user.lastModifiedBy}}</dd> <dt><span jhiTranslate=\"userManagement.lastModifiedDate\">Last Modified Date</span></dt> <dd>{{user.lastModifiedDate | date:'dd/MM/yy HH:mm'}}</dd> <dt><span jhiTranslate=\"userManagement.profiles\">Profiles</span></dt> <dd> <ul class=\"list-unstyled\"> <li *ngFor=\"let authority of user.authorities\"> <span class=\"badge badge-info\">{{authority}}</span> </li> </ul> </dd> </dl> <button type=\"submit\" routerLink=\"/user-management\" class=\"btn btn-info\"> <span class=\"fa fa-arrow-left\"></span>&nbsp;<span jhiTranslate=\"entity.action.back\"> Back</span> </button> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/user-management/user-management-detail.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(5);
var ng_jhipster_1 = __webpack_require__(1);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var UserMgmtDetailComponent = (function () {
    function UserMgmtDetailComponent(jhiLanguageService, userService, route) {
        this.jhiLanguageService = jhiLanguageService;
        this.userService = userService;
        this.route = route;
        this.jhiLanguageService.setLocations(['user-management']);
    }
    UserMgmtDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            _this.load(params['login']);
        });
    };
    UserMgmtDetailComponent.prototype.load = function (login) {
        var _this = this;
        this.userService.find(login).subscribe(function (user) {
            _this.user = user;
        });
    };
    UserMgmtDetailComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return UserMgmtDetailComponent;
}());
UserMgmtDetailComponent = __decorate([
    core_1.Component({
        selector: 'jhi-user-mgmt-detail',
        template: __webpack_require__("./src/main/webapp/app/admin/user-management/user-management-detail.component.html")
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        shared_1.UserService,
        router_1.ActivatedRoute])
], UserMgmtDetailComponent);
exports.UserMgmtDetailComponent = UserMgmtDetailComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/user-management/user-management-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<form name=\"editForm\" role=\"form\" novalidate (ngSubmit)=\"save()\" #editForm=\"ngForm\"> <div class=\"modal-header\"> <h4 class=\"modal-title\" id=\"myUserLabel\" jhiTranslate=\"userManagement.home.createOrEditLabel\"> Create or edit a User</h4> <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\" (click)=\"clear()\">&times;</button> </div> <div class=\"modal-body\"> <jhi-alert-error></jhi-alert-error> <div class=\"form-group\"> <label jhiTranslate=\"global.field.id\">ID</label> <input type=\"text\" class=\"form-control\" name=\"id\" [(ngModel)]=\"user.id\" readonly=\"readonly\"> </div> <div class=\"form-group\"> <label class=\"form-control-label\" jhiTranslate=\"userManagement.login\">Login</label> <input type=\"text\" class=\"form-control\" name=\"login\" #loginInput=\"ngModel\" [(ngModel)]=\"user.login\" required minlength=\"1\" maxlength=\"50\" pattern=\"^[_'.@A-Za-z0-9-]*$\"> <div *ngIf=\"loginInput.dirty && loginInput.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"loginInput.errors.required\" jhiTranslate=\"entity.validation.required\"> This field is required. </small> <small class=\"form-text text-danger\" *ngIf=\"loginInput.errors.maxlength\" jhiTranslate=\"entity.validation.maxlength\" translate-value-max=\"50\"> This field cannot be longer than 50 characters. </small> </div> </div> <div class=\"form-group\"> <label class=\"form-control-label\" jhiTranslate=\"userManagement.firstName\">First Name</label> <input type=\"text\" class=\"form-control\" name=\"firstName\" #firstNameInput=\"ngModel\" [(ngModel)]=\"user.firstName\" maxlength=\"50\"> <div *ngIf=\"firstNameInput.dirty && firstNameInput.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"firstNameInput.errors.maxlength\" jhiTranslate=\"entity.validation.maxlength\" translate-value-max=\"50\"> This field cannot be longer than 50 characters. </small> </div> </div> <div class=\"form-group\"> <label jhiTranslate=\"userManagement.lastName\">Last Name</label> <input type=\"text\" class=\"form-control\" name=\"lastName\" #lastNameInput=\"ngModel\" [(ngModel)]=\"user.lastName\" maxlength=\"50\"> <div *ngIf=\"lastNameInput.dirty && lastNameInput.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"lastNameInput.errors.maxlength\" jhiTranslate=\"entity.validation.maxlength\" translate-value-max=\"50\"> This field cannot be longer than 50 characters. </small> </div> </div> <div class=\"form-group\"> <label class=\"form-control-label\" jhiTranslate=\"userManagement.email\">Email</label> <input type=\"email\" class=\"form-control\" name=\"email\" #emailInput=\"ngModel\" [(ngModel)]=\"user.email\" required maxlength=\"100\"> <div *ngIf=\"emailInput.dirty && emailInput.invalid\"> <small class=\"form-text text-danger\" *ngIf=\"emailInput.errors.required\" jhiTranslate=\"entity.validation.required\"> This field is required. </small> <small class=\"form-text text-danger\" *ngIf=\"emailInput.errors.maxlength\" jhiTranslate=\"entity.validation.maxlength\" translate-value-max=\"100\"> This field cannot be longer than 100 characters. </small> <small class=\"form-text text-danger\" *ngIf=\"emailInput.errors.email\" jhiTranslate=\"global.messages.validate.email.invalid\"> Your e-mail is invalid. </small> </div> </div> <div class=\"form-check\"> <label class=\"form-check-label\" for=\"activated\"> <input class=\"form-check-input\" [disabled]=\"user.id === null\" type=\"checkbox\" id=\"activated\" name=\"activated\" [(ngModel)]=\"user.activated\"> <span jhiTranslate=\"userManagement.activated\">Activated</span> </label> </div> <div class=\"form-group\" *ngIf=\"languages && languages.length > 0\"> <label jhiTranslate=\"userManagement.langKey\">Lang Key</label> <select class=\"form-control\" id=\"langKey\" name=\"langKey\" [(ngModel)]=\"user.langKey\"> <option *ngFor=\"let language of languages\" [value]=\"language\">{{language | findLanguageFromKey}}</option> </select> </div> <div class=\"form-group\"> <label jhiTranslate=\"userManagement.profiles\">Profiles</label> <select class=\"form-control\" multiple=\"multiple\" name=\"authority\" [(ngModel)]=\"user.authorities\"> <option *ngFor=\"let authority of authorities\" [value]=\"authority\">{{authority}}</option> </select> </div> </div> <div class=\"modal-footer\"> <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"clear()\"> <span class=\"fa fa-ban\"></span>&nbsp;<span jhiTranslate=\"entity.action.cancel\">Cancel</span> </button> <button type=\"submit\" [disabled]=\"editForm.form.invalid || isSaving\" class=\"btn btn-primary\"> <span class=\"fa fa-floppy-o\"></span>&nbsp;<span jhiTranslate=\"entity.action.save\">Save</span> </button> </div> </form> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/user-management/user-management-dialog.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(5);
var ng_bootstrap_1 = __webpack_require__(7);
var ng_jhipster_1 = __webpack_require__(1);
var user_modal_service_1 = __webpack_require__("./src/main/webapp/app/admin/user-management/user-modal.service.ts");
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var UserMgmtDialogComponent = (function () {
    function UserMgmtDialogComponent(activeModal, languageHelper, jhiLanguageService, userService, eventManager) {
        this.activeModal = activeModal;
        this.languageHelper = languageHelper;
        this.jhiLanguageService = jhiLanguageService;
        this.userService = userService;
        this.eventManager = eventManager;
    }
    UserMgmtDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
        this.languageHelper.getAll().then(function (languages) {
            _this.languages = languages;
        });
        this.jhiLanguageService.setLocations(['user-management']);
    };
    UserMgmtDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
    };
    UserMgmtDialogComponent.prototype.save = function () {
        var _this = this;
        this.isSaving = true;
        if (this.user.id !== null) {
            this.userService.update(this.user).subscribe(function (response) { return _this.onSaveSuccess(response); }, function () { return _this.onSaveError(); });
        }
        else {
            this.userService.create(this.user).subscribe(function (response) { return _this.onSaveSuccess(response); }, function () { return _this.onSaveError(); });
        }
    };
    UserMgmtDialogComponent.prototype.onSaveSuccess = function (result) {
        this.eventManager.broadcast({ name: 'userListModification', content: 'OK' });
        this.isSaving = false;
        this.activeModal.dismiss(result);
    };
    UserMgmtDialogComponent.prototype.onSaveError = function () {
        this.isSaving = false;
    };
    return UserMgmtDialogComponent;
}());
UserMgmtDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-user-mgmt-dialog',
        template: __webpack_require__("./src/main/webapp/app/admin/user-management/user-management-dialog.component.html")
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal,
        shared_1.JhiLanguageHelper,
        ng_jhipster_1.JhiLanguageService,
        shared_1.UserService,
        ng_jhipster_1.EventManager])
], UserMgmtDialogComponent);
exports.UserMgmtDialogComponent = UserMgmtDialogComponent;
var UserDialogComponent = (function () {
    function UserDialogComponent(route, userModalService) {
        this.route = route;
        this.userModalService = userModalService;
    }
    UserDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            if (params['login']) {
                _this.modalRef = _this.userModalService.open(UserMgmtDialogComponent, params['login']);
            }
            else {
                _this.modalRef = _this.userModalService.open(UserMgmtDialogComponent);
            }
        });
    };
    UserDialogComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return UserDialogComponent;
}());
UserDialogComponent = __decorate([
    core_1.Component({
        selector: 'jhi-user-dialog',
        template: ''
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        user_modal_service_1.UserModalService])
], UserDialogComponent);
exports.UserDialogComponent = UserDialogComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/user-management/user-management.component.html":
/***/ (function(module, exports) {

module.exports = "<div> <h2> <span jhiTranslate=\"userManagement.home.title\">Users</span> <button class=\"btn btn-primary float-right\" [routerLink]=\"['/', { outlets: { popup: ['user-management-new'] } }]\"> <span class=\"fa fa-plus\"></span> <span jhiTranslate=\"userManagement.home.createLabel\">Create a new User</span> </button> </h2> <jhi-alert></jhi-alert> <div class=\"table-responsive\" *ngIf=\"users\"> <table class=\"table table-striped\"> <thead> <tr jhiSort [(predicate)]=\"predicate\" [(ascending)]=\"reverse\" [callback]=\"transition.bind(this)\"> <th jhiSortBy=\"id\"><span jhiTranslate=\"global.field.id\">ID</span><span class=\"fa fa-sort\"></span></th> <th jhiSortBy=\"login\"><span jhiTranslate=\"userManagement.login\">Login</span> <span class=\"fa fa-sort\"></span></th> <th jhiSortBy=\"email\"><span jhiTranslate=\"userManagement.email\">Email</span> <span class=\"fa fa-sort\"></span></th> <th></th> <th jhiSortBy=\"langKey\"> <span jhiTranslate=\"userManagement.langKey\">Lang Key</span> <span class=\"fa fa-sort\"></span></th> <th><span jhiTranslate=\"userManagement.profiles\">Profiles</span></th> <th jhiSortBy=\"createdDate\"><span jhiTranslate=\"userManagement.createdDate\">Created Date</span> <span class=\"fa fa-sort\"></span></th> <th jhiSortBy=\"lastModifiedBy\"><span jhiTranslate=\"userManagement.lastModifiedBy\">Last Modified By</span> <span class=\"fa fa-sort\"></span></th> <th jhiSortBy=\"lastModifiedDate\"><span jhiTranslate=\"userManagement.lastModifiedDate\">Last Modified Date</span> <span class=\"fa fa-sort\"></span></th> <th></th> </tr> </thead> <tbody *ngIf=\"users\"> <tr *ngFor=\"let user of users; trackBy: trackIdentity\"> <td><a [routerLink]=\"['../user-management', user.login]\">{{user.id}}</a></td> <td>{{user.login}}</td> <td>{{user.email}}</td> <td> <span class=\"badge badge-danger hand\" (click)=\"setActive(user, true)\" *ngIf=\"!user.activated\" jhiTranslate=\"userManagement.deactivated\">Deactivated</span> <span class=\"badge badge-success hand\" (click)=\"setActive(user, false)\" *ngIf=\"user.activated\" jhiTranslate=\"userManagement.activated\">Activated</span> </td> <td>{{user.langKey}}</td> <td> <div *ngFor=\"let authority of user.authorities\"> <span class=\"tag tag-info\">{{ authority }}</span> </div> </td> <td>{{user.createdDate | date:'dd/MM/yy HH:mm'}}</td> <td>{{user.lastModifiedBy}}</td> <td>{{user.lastModifiedDate | date:'dd/MM/yy HH:mm'}}</td> <td class=\"text-right\"> <div class=\"btn-group flex-btn-group-container\"> <button type=\"submit\" [routerLink]=\"['../user-management', user.login]\" class=\"btn btn-info btn-sm\"> <span class=\"fa fa-eye\"></span> <span class=\"hidden-md-down\" jhiTranslate=\"entity.action.view\">View</span> </button> <button type=\"submit\" [routerLink]=\"['/', { outlets: { popup: 'user-management/'+ user.login + '/edit'} }]\" replaceUrl=\"true\" class=\"btn btn-primary btn-sm\"> <span class=\"fa fa-pencil\"></span> <span class=\"hidden-md-down\" jhiTranslate=\"entity.action.edit\">Edit</span> </button> <button type=\"submit\" [routerLink]=\"['/', { outlets: { popup: 'user-management/'+ user.login + '/delete'} }]\" replaceUrl=\"true\" class=\"btn btn-danger btn-sm\" [disabled]=\"currentAccount.login==user.login\"> <span class=\"fa fa-remove\"></span> <span class=\"hidden-md-down\" jhiTranslate=\"entity.action.delete\">Delete</span> </button> </div> </td> </tr> </tbody> </table> </div> <div *ngIf=\"users\"> <div class=\"row justify-content-center\"> <jhi-item-count [page]=\"page\" [total]=\"queryCount\" [itemsPerPage]=\"itemsPerPage\"></jhi-item-count> </div> <div class=\"row justify-content-center\"> <ngb-pagination [collectionSize]=\"totalItems\" [(page)]=\"page\" (pageChange)=\"loadPage(page)\"></ngb-pagination> </div> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/admin/user-management/user-management.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(5);
var ng_jhipster_1 = __webpack_require__(1);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var uib_pagination_config_1 = __webpack_require__("./src/main/webapp/app/blocks/config/uib-pagination.config.ts");
var UserMgmtComponent = (function () {
    function UserMgmtComponent(jhiLanguageService, userService, parseLinks, alertService, principal, eventManager, paginationUtil, paginationConfig, activatedRoute, router) {
        var _this = this;
        this.jhiLanguageService = jhiLanguageService;
        this.userService = userService;
        this.parseLinks = parseLinks;
        this.alertService = alertService;
        this.principal = principal;
        this.eventManager = eventManager;
        this.paginationUtil = paginationUtil;
        this.paginationConfig = paginationConfig;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.itemsPerPage = shared_1.ITEMS_PER_PAGE;
        this.routeData = this.activatedRoute.data.subscribe(function (data) {
            _this.page = data['pagingParams'].page;
            _this.previousPage = data['pagingParams'].page;
            _this.reverse = data['pagingParams'].ascending;
            _this.predicate = data['pagingParams'].predicate;
        });
        this.jhiLanguageService.setLocations(['user-management']);
    }
    UserMgmtComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.principal.identity().then(function (account) {
            _this.currentAccount = account;
            _this.loadAll();
            _this.registerChangeInUsers();
        });
    };
    UserMgmtComponent.prototype.ngOnDestroy = function () {
        this.routeData.unsubscribe();
    };
    UserMgmtComponent.prototype.registerChangeInUsers = function () {
        var _this = this;
        this.eventManager.subscribe('userListModification', function (response) { return _this.loadAll(); });
    };
    UserMgmtComponent.prototype.setActive = function (user, isActivated) {
        var _this = this;
        user.activated = isActivated;
        this.userService.update(user).subscribe(function (response) {
            if (response.status === 200) {
                _this.error = null;
                _this.success = 'OK';
                _this.loadAll();
            }
            else {
                _this.success = null;
                _this.error = 'ERROR';
            }
        });
    };
    UserMgmtComponent.prototype.loadAll = function () {
        var _this = this;
        this.userService.query({
            page: this.page - 1,
            size: this.itemsPerPage,
            sort: this.sort()
        }).subscribe(function (res) { return _this.onSuccess(res.json(), res.headers); }, function (res) { return _this.onError(res.json()); });
    };
    UserMgmtComponent.prototype.trackIdentity = function (index, item) {
        return item.id;
    };
    UserMgmtComponent.prototype.sort = function () {
        var result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
        if (this.predicate !== 'id') {
            result.push('id');
        }
        return result;
    };
    UserMgmtComponent.prototype.loadPage = function (page) {
        if (page !== this.previousPage) {
            this.previousPage = page;
            this.transition();
        }
    };
    UserMgmtComponent.prototype.transition = function () {
        this.router.navigate(['/user-management'], { queryParams: {
                page: this.page,
                sort: this.predicate + ',' + (this.reverse ? 'asc' : 'desc')
            }
        });
        this.loadAll();
    };
    UserMgmtComponent.prototype.onSuccess = function (data, headers) {
        this.links = this.parseLinks.parse(headers.get('link'));
        this.totalItems = headers.get('X-Total-Count');
        this.queryCount = this.totalItems;
        this.users = data;
    };
    UserMgmtComponent.prototype.onError = function (error) {
        this.alertService.error(error.error, error.message, null);
    };
    return UserMgmtComponent;
}());
UserMgmtComponent = __decorate([
    core_1.Component({
        selector: 'jhi-user-mgmt',
        template: __webpack_require__("./src/main/webapp/app/admin/user-management/user-management.component.html")
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        shared_1.UserService,
        ng_jhipster_1.ParseLinks,
        ng_jhipster_1.AlertService,
        shared_1.Principal,
        ng_jhipster_1.EventManager,
        ng_jhipster_1.PaginationUtil,
        uib_pagination_config_1.PaginationConfig,
        router_1.ActivatedRoute,
        router_1.Router])
], UserMgmtComponent);
exports.UserMgmtComponent = UserMgmtComponent;


/***/ }),

/***/ "./src/main/webapp/app/admin/user-management/user-management.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_jhipster_1 = __webpack_require__(1);
var user_management_component_1 = __webpack_require__("./src/main/webapp/app/admin/user-management/user-management.component.ts");
var user_management_detail_component_1 = __webpack_require__("./src/main/webapp/app/admin/user-management/user-management-detail.component.ts");
var user_management_dialog_component_1 = __webpack_require__("./src/main/webapp/app/admin/user-management/user-management-dialog.component.ts");
var user_management_delete_dialog_component_1 = __webpack_require__("./src/main/webapp/app/admin/user-management/user-management-delete-dialog.component.ts");
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var UserResolve = (function () {
    function UserResolve(principal) {
        this.principal = principal;
    }
    UserResolve.prototype.canActivate = function () {
        var _this = this;
        return this.principal.identity().then(function (account) { return _this.principal.hasAnyAuthority(['ROLE_ADMIN']); });
    };
    return UserResolve;
}());
UserResolve = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [shared_1.Principal])
], UserResolve);
exports.UserResolve = UserResolve;
var UserResolvePagingParams = (function () {
    function UserResolvePagingParams(paginationUtil) {
        this.paginationUtil = paginationUtil;
    }
    UserResolvePagingParams.prototype.resolve = function (route, state) {
        var page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        var sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
        };
    };
    return UserResolvePagingParams;
}());
UserResolvePagingParams = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_jhipster_1.PaginationUtil])
], UserResolvePagingParams);
exports.UserResolvePagingParams = UserResolvePagingParams;
exports.userMgmtRoute = [
    {
        path: 'user-management',
        component: user_management_component_1.UserMgmtComponent,
        resolve: {
            'pagingParams': UserResolvePagingParams
        },
        data: {
            pageTitle: 'userManagement.home.title'
        }
    },
    {
        path: 'user-management/:login',
        component: user_management_detail_component_1.UserMgmtDetailComponent,
        data: {
            pageTitle: 'userManagement.home.title'
        }
    }
];
exports.userDialogRoute = [
    {
        path: 'user-management-new',
        component: user_management_dialog_component_1.UserDialogComponent,
        outlet: 'popup'
    },
    {
        path: 'user-management/:login/edit',
        component: user_management_dialog_component_1.UserDialogComponent,
        outlet: 'popup'
    },
    {
        path: 'user-management/:login/delete',
        component: user_management_delete_dialog_component_1.UserDeleteDialogComponent,
        outlet: 'popup'
    }
];


/***/ }),

/***/ "./src/main/webapp/app/admin/user-management/user-modal.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(5);
var ng_bootstrap_1 = __webpack_require__(7);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var UserModalService = (function () {
    function UserModalService(modalService, router, userService) {
        this.modalService = modalService;
        this.router = router;
        this.userService = userService;
        this.isOpen = false;
    }
    UserModalService.prototype.open = function (component, login) {
        var _this = this;
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;
        if (login) {
            this.userService.find(login).subscribe(function (user) { return _this.userModalRef(component, user); });
        }
        else {
            return this.userModalRef(component, new shared_1.User());
        }
    };
    UserModalService.prototype.userModalRef = function (component, user) {
        var _this = this;
        var modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static' });
        modalRef.componentInstance.user = user;
        modalRef.result.then(function (result) {
            _this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
            _this.isOpen = false;
        }, function (reason) {
            _this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
            _this.isOpen = false;
        });
        return modalRef;
    };
    return UserModalService;
}());
UserModalService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
        router_1.Router,
        shared_1.UserService])
], UserModalService);
exports.UserModalService = UserModalService;


/***/ }),

/***/ "./src/main/webapp/app/app.constants.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// DO NOT EDIT THIS FILE, EDIT THE WEBPACK COMMON CONFIG INSTEAD, WHICH WILL MODIFY THIS FILE
var _VERSION = '0.0.0'; // This value will be overwritten by webpack
var _DEBUG_INFO_ENABLED = true; // This value will be overwritten by webpack
_VERSION = "0.0.0";
_DEBUG_INFO_ENABLED = true;
exports.VERSION = _VERSION;
exports.DEBUG_INFO_ENABLED = _DEBUG_INFO_ENABLED;


/***/ }),

/***/ "./src/main/webapp/app/app.main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = __webpack_require__(17);
var prod_config_1 = __webpack_require__("./src/main/webapp/app/blocks/config/prod.config.ts");
var app_module_1 = __webpack_require__("./src/main/webapp/app/app.module.ts");
prod_config_1.ProdConfig();
if (true) {
    module['hot'].accept();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.SpringBootAngularAppModule);


/***/ }),

/***/ "./src/main/webapp/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(19);
var core_1 = __webpack_require__(0);
var platform_browser_1 = __webpack_require__(12);
var ng2_webstorage_1 = __webpack_require__(10);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var home_module_1 = __webpack_require__("./src/main/webapp/app/home/home.module.ts");
var admin_module_1 = __webpack_require__("./src/main/webapp/app/admin/admin.module.ts");
var account_module_1 = __webpack_require__("./src/main/webapp/app/account/account.module.ts");
var entity_module_1 = __webpack_require__("./src/main/webapp/app/entities/entity.module.ts");
var layouts_1 = __webpack_require__("./src/main/webapp/app/layouts/index.ts");
var http_provider_1 = __webpack_require__("./src/main/webapp/app/blocks/interceptor/http.provider.ts");
var uib_pagination_config_1 = __webpack_require__("./src/main/webapp/app/blocks/config/uib-pagination.config.ts");
var layouts_2 = __webpack_require__("./src/main/webapp/app/layouts/index.ts");
var SpringBootAngularAppModule = (function () {
    function SpringBootAngularAppModule() {
    }
    return SpringBootAngularAppModule;
}());
SpringBootAngularAppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            layouts_1.LayoutRoutingModule,
            ng2_webstorage_1.Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-' }),
            shared_1.SpringBootAngularSharedModule,
            home_module_1.SpringBootAngularHomeModule,
            admin_module_1.SpringBootAngularAdminModule,
            account_module_1.SpringBootAngularAccountModule,
            entity_module_1.SpringBootAngularEntityModule
        ],
        declarations: [
            layouts_2.JhiMainComponent,
            layouts_2.NavbarComponent,
            layouts_2.ErrorComponent,
            layouts_2.PageRibbonComponent,
            layouts_2.ActiveMenuDirective,
            layouts_2.FooterComponent
        ],
        providers: [
            layouts_2.ProfileService,
            { provide: Window, useValue: window },
            { provide: Document, useValue: document },
            http_provider_1.customHttpProvider(),
            uib_pagination_config_1.PaginationConfig,
            shared_1.UserRouteAccessService
        ],
        bootstrap: [layouts_2.JhiMainComponent]
    })
], SpringBootAngularAppModule);
exports.SpringBootAngularAppModule = SpringBootAngularAppModule;


/***/ }),

/***/ "./src/main/webapp/app/app.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var layouts_1 = __webpack_require__("./src/main/webapp/app/layouts/index.ts");
exports.navbarRoute = {
    path: '',
    component: layouts_1.NavbarComponent,
    outlet: 'navbar'
};


/***/ }),

/***/ "./src/main/webapp/app/blocks/config/prod.config.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var app_constants_1 = __webpack_require__("./src/main/webapp/app/app.constants.ts");
function ProdConfig() {
    // disable debug data on prod profile to improve performance
    if (!app_constants_1.DEBUG_INFO_ENABLED) {
        core_1.enableProdMode();
    }
}
exports.ProdConfig = ProdConfig;


/***/ }),

/***/ "./src/main/webapp/app/blocks/config/uib-pagination.config.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var core_1 = __webpack_require__(0);
var ng_bootstrap_1 = __webpack_require__(7);
var PaginationConfig = (function () {
    function PaginationConfig(config) {
        this.config = config;
        config.boundaryLinks = true;
        config.maxSize = 5;
        config.pageSize = shared_1.ITEMS_PER_PAGE;
        config.size = 'sm';
    }
    return PaginationConfig;
}());
PaginationConfig = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbPaginationConfig])
], PaginationConfig);
exports.PaginationConfig = PaginationConfig;


/***/ }),

/***/ "./src/main/webapp/app/blocks/interceptor/auth-expired.interceptor.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ng_jhipster_1 = __webpack_require__(1);
var Observable_1 = __webpack_require__(11);
var auth_service_1 = __webpack_require__("./src/main/webapp/app/shared/auth/auth.service.ts");
var principal_service_1 = __webpack_require__("./src/main/webapp/app/shared/auth/principal.service.ts");
var AuthExpiredInterceptor = (function (_super) {
    __extends(AuthExpiredInterceptor, _super);
    function AuthExpiredInterceptor(injector) {
        var _this = _super.call(this) || this;
        _this.injector = injector;
        return _this;
    }
    AuthExpiredInterceptor.prototype.requestIntercept = function (options) {
        return options;
    };
    AuthExpiredInterceptor.prototype.responseIntercept = function (observable) {
        var self = this;
        return observable.catch(function (error, source) {
            if (error.status === 401) {
                var principal = self.injector.get(principal_service_1.Principal);
                if (principal.isAuthenticated()) {
                    var auth = self.injector.get(auth_service_1.AuthService);
                    auth.authorize(true);
                }
            }
            return Observable_1.Observable.throw(error);
        });
    };
    return AuthExpiredInterceptor;
}(ng_jhipster_1.HttpInterceptor));
exports.AuthExpiredInterceptor = AuthExpiredInterceptor;


/***/ }),

/***/ "./src/main/webapp/app/blocks/interceptor/auth.interceptor.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ng_jhipster_1 = __webpack_require__(1);
var AuthInterceptor = (function (_super) {
    __extends(AuthInterceptor, _super);
    function AuthInterceptor(localStorage, sessionStorage) {
        var _this = _super.call(this) || this;
        _this.localStorage = localStorage;
        _this.sessionStorage = sessionStorage;
        return _this;
    }
    AuthInterceptor.prototype.requestIntercept = function (options) {
        var token = this.localStorage.retrieve('authenticationToken') || this.sessionStorage.retrieve('authenticationToken');
        if (!!token) {
            options.headers.append('Authorization', 'Bearer ' + token);
        }
        return options;
    };
    AuthInterceptor.prototype.responseIntercept = function (observable) {
        return observable; // by pass
    };
    return AuthInterceptor;
}(ng_jhipster_1.HttpInterceptor));
exports.AuthInterceptor = AuthInterceptor;


/***/ }),

/***/ "./src/main/webapp/app/blocks/interceptor/errorhandler.interceptor.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ng_jhipster_1 = __webpack_require__(1);
var Observable_1 = __webpack_require__(11);
var ErrorHandlerInterceptor = (function (_super) {
    __extends(ErrorHandlerInterceptor, _super);
    function ErrorHandlerInterceptor(eventManager) {
        var _this = _super.call(this) || this;
        _this.eventManager = eventManager;
        return _this;
    }
    ErrorHandlerInterceptor.prototype.requestIntercept = function (options) {
        return options;
    };
    ErrorHandlerInterceptor.prototype.responseIntercept = function (observable) {
        var _this = this;
        return observable.catch(function (error) {
            if (!(error.status === 401 && (error.text() === '' ||
                (error.json().path && error.json().path.indexOf('/api/account') === 0)))) {
                _this.eventManager.broadcast({ name: 'springBootAngularApp.httpError', content: error });
            }
            return Observable_1.Observable.throw(error);
        });
    };
    return ErrorHandlerInterceptor;
}(ng_jhipster_1.HttpInterceptor));
exports.ErrorHandlerInterceptor = ErrorHandlerInterceptor;


/***/ }),

/***/ "./src/main/webapp/app/blocks/interceptor/http.provider.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(6);
var ng_jhipster_1 = __webpack_require__(1);
var auth_interceptor_1 = __webpack_require__("./src/main/webapp/app/blocks/interceptor/auth.interceptor.ts");
var ng2_webstorage_1 = __webpack_require__(10);
var auth_expired_interceptor_1 = __webpack_require__("./src/main/webapp/app/blocks/interceptor/auth-expired.interceptor.ts");
var errorhandler_interceptor_1 = __webpack_require__("./src/main/webapp/app/blocks/interceptor/errorhandler.interceptor.ts");
var notification_interceptor_1 = __webpack_require__("./src/main/webapp/app/blocks/interceptor/notification.interceptor.ts");
function interceptableFactory(backend, defaultOptions, localStorage, sessionStorage, injector, eventManager) {
    return new ng_jhipster_1.InterceptableHttp(backend, defaultOptions, [
        new auth_interceptor_1.AuthInterceptor(localStorage, sessionStorage),
        new auth_expired_interceptor_1.AuthExpiredInterceptor(injector),
        // Other interceptors can be added here
        new errorhandler_interceptor_1.ErrorHandlerInterceptor(eventManager),
        new notification_interceptor_1.NotificationInterceptor()
    ]);
}
exports.interceptableFactory = interceptableFactory;
;
function customHttpProvider() {
    return {
        provide: http_1.Http,
        useFactory: interceptableFactory,
        deps: [
            http_1.XHRBackend,
            http_1.RequestOptions,
            ng2_webstorage_1.LocalStorageService,
            ng2_webstorage_1.SessionStorageService,
            core_1.Injector,
            ng_jhipster_1.EventManager
        ]
    };
}
exports.customHttpProvider = customHttpProvider;
;


/***/ }),

/***/ "./src/main/webapp/app/blocks/interceptor/notification.interceptor.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ng_jhipster_1 = __webpack_require__(1);
var Observable_1 = __webpack_require__(11);
var NotificationInterceptor = (function (_super) {
    __extends(NotificationInterceptor, _super);
    function NotificationInterceptor() {
        return _super.call(this) || this;
    }
    NotificationInterceptor.prototype.requestIntercept = function (options) {
        return options;
    };
    NotificationInterceptor.prototype.responseIntercept = function (observable) {
        return observable.catch(function (error) {
            var arr = Array.from(error.headers._headers);
            var headers = [];
            var i;
            for (i = 0; i < arr.length; i++) {
                if (arr[i][0].endsWith('app-alert') || arr[i][0].endsWith('app-params')) {
                    headers.push(arr[i][0]);
                }
            }
            headers.sort();
            var alertKey = headers.length >= 1 ? error.headers.get(headers[0]) : null;
            if (typeof alertKey === 'string') {
                // AlertService.success(alertKey, { param: response.headers(headers[1])});
            }
            return Observable_1.Observable.throw(error);
        });
    };
    return NotificationInterceptor;
}(ng_jhipster_1.HttpInterceptor));
exports.NotificationInterceptor = NotificationInterceptor;


/***/ }),

/***/ "./src/main/webapp/app/entities/entity.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */
var SpringBootAngularEntityModule = (function () {
    function SpringBootAngularEntityModule() {
    }
    return SpringBootAngularEntityModule;
}());
SpringBootAngularEntityModule = __decorate([
    core_1.NgModule({
        imports: [],
        declarations: [],
        entryComponents: [],
        providers: [],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], SpringBootAngularEntityModule);
exports.SpringBootAngularEntityModule = SpringBootAngularEntityModule;


/***/ }),

/***/ "./src/main/webapp/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\"> <div class=\"col-md-3\"> <span class=\"hipster img-fluid img-rounded\"></span> </div> <div class=\"col-md-9\"> <h1 class=\"display-4\" jhiTranslate=\"home.title\">Welcome, Java Hipster!</h1> <p class=\"lead\" jhiTranslate=\"home.subtitle\">This is your homepage</p> <div [ngSwitch]=\"isAuthenticated()\"> <div class=\"alert alert-success\" *ngSwitchCase=\"true\"> <span *ngIf=\"account\" jhiTranslate=\"home.logged.message\" translateValues=\"{username: '{{account.login}}'}\"> You are logged in as user \"{{account.login}}\". </span> </div> <div class=\"alert alert-warning\" *ngSwitchCase=\"false\"> <span jhiTranslate=\"global.messages.info.authenticated.prefix\">If you want to </span> <a class=\"alert-link\" (click)=\"login()\" jhiTranslate=\"global.messages.info.authenticated.link\">sign in</a><span jhiTranslate=\"global.messages.info.authenticated.suffix\">, you can try the default accounts:<br/>- Administrator (login=\"admin\" and password=\"admin\") <br/>- User (login=\"user\" and password=\"user\").</span> </div> <div class=\"alert alert-warning\" *ngSwitchCase=\"false\"> <span jhiTranslate=\"global.messages.info.register.noaccount\">You don't have an account yet?</span> <a class=\"alert-link\" routerLink=\"register\" jhiTranslate=\"global.messages.info.register.link\">Register a new account</a> </div> </div> <p jhiTranslate=\"home.question\"> If you have any question on JHipster: </p> <ul> <li><a href=\"http://jhipster.github.io/\" target=\"_blank\" jhiTranslate=\"home.link.homepage\">JHipster homepage</a></li> <li><a href=\"http://stackoverflow.com/tags/jhipster/info\" target=\"_blank\" jhiTranslate=\"home.link.stackoverflow\">JHipster on Stack Overflow</a></li> <li><a href=\"https://github.com/jhipster/generator-jhipster/issues?state=open\" target=\"_blank\" jhiTranslate=\"home.link.bugtracker\">JHipster bug tracker</a></li> <li><a href=\"https://gitter.im/jhipster/generator-jhipster\" target=\"_blank\" jhiTranslate=\"home.link.chat\">JHipster public chat room</a></li> <li><a href=\"https://twitter.com/java_hipster\" target=\"_blank\" jhiTranslate=\"home.link.follow\">follow @java_hipster on Twitter</a></li> </ul> <p> <span jhiTranslate=\"home.like\">If you like JHipster, don't forget to give us a star on</span> <a href=\"https://github.com/jhipster/generator-jhipster\" target=\"_blank\" jhiTranslate=\"home.github\">Github</a>! </p> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_jhipster_1 = __webpack_require__(1);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var HomeComponent = (function () {
    function HomeComponent(jhiLanguageService, principal, loginModalService, eventManager) {
        this.jhiLanguageService = jhiLanguageService;
        this.principal = principal;
        this.loginModalService = loginModalService;
        this.eventManager = eventManager;
        this.jhiLanguageService.setLocations(['home']);
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.principal.identity().then(function (account) {
            _this.account = account;
        });
        this.registerAuthenticationSuccess();
    };
    HomeComponent.prototype.registerAuthenticationSuccess = function () {
        var _this = this;
        this.eventManager.subscribe('authenticationSuccess', function (message) {
            _this.principal.identity().then(function (account) {
                _this.account = account;
            });
        });
    };
    HomeComponent.prototype.isAuthenticated = function () {
        return this.principal.isAuthenticated();
    };
    HomeComponent.prototype.login = function () {
        this.modalRef = this.loginModalService.open();
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'jhi-home',
        template: __webpack_require__("./src/main/webapp/app/home/home.component.html"),
        styles: [
            __webpack_require__("./src/main/webapp/app/home/home.scss")
        ]
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        shared_1.Principal,
        shared_1.LoginModalService,
        ng_jhipster_1.EventManager])
], HomeComponent);
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/main/webapp/app/home/home.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(5);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var _1 = __webpack_require__("./src/main/webapp/app/home/index.ts");
var SpringBootAngularHomeModule = (function () {
    function SpringBootAngularHomeModule() {
    }
    return SpringBootAngularHomeModule;
}());
SpringBootAngularHomeModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_1.SpringBootAngularSharedModule,
            router_1.RouterModule.forRoot([_1.HOME_ROUTE], { useHash: true })
        ],
        declarations: [
            _1.HomeComponent,
        ],
        entryComponents: [],
        providers: [],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], SpringBootAngularHomeModule);
exports.SpringBootAngularHomeModule = SpringBootAngularHomeModule;


/***/ }),

/***/ "./src/main/webapp/app/home/home.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var _1 = __webpack_require__("./src/main/webapp/app/home/index.ts");
exports.HOME_ROUTE = {
    path: '',
    component: _1.HomeComponent,
    data: {
        authorities: [],
        pageTitle: 'home.title'
    },
    canActivate: [shared_1.UserRouteAccessService]
};


/***/ }),

/***/ "./src/main/webapp/app/home/home.scss":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/main/webapp/app/home/home.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/main/webapp/app/home/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/main/webapp/app/home/home.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/home/home.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/home/home.module.ts"));


/***/ }),

/***/ "./src/main/webapp/app/layouts/error/error.component.html":
/***/ (function(module, exports) {

module.exports = "<div> <div class=\"row\"> <div class=\"col-md-4\"> <span class=\"hipster img-fluid img-rounded\"></span> </div> <div class=\"col-md-8\"> <h1 jhiTranslate=\"error.title\">Error Page!</h1> <div [hidden]=\"!errorMessage\"> <div class=\"alert alert-danger\">{{errorMessage}} </div> </div> <div [hidden]=\"!error403\" class=\"alert alert-danger\" jhiTranslate=\"error.403\">You are not authorized to access the page. </div> </div> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/layouts/error/error.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_jhipster_1 = __webpack_require__(1);
var ErrorComponent = (function () {
    function ErrorComponent(jhiLanguageService) {
        this.jhiLanguageService = jhiLanguageService;
        this.jhiLanguageService.setLocations(['error']);
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    return ErrorComponent;
}());
ErrorComponent = __decorate([
    core_1.Component({
        selector: 'jhi-error',
        template: __webpack_require__("./src/main/webapp/app/layouts/error/error.component.html")
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService])
], ErrorComponent);
exports.ErrorComponent = ErrorComponent;


/***/ }),

/***/ "./src/main/webapp/app/layouts/error/error.route.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var error_component_1 = __webpack_require__("./src/main/webapp/app/layouts/error/error.component.ts");
exports.errorRoute = [
    {
        path: 'error',
        component: error_component_1.ErrorComponent,
        data: {
            authorities: [],
            pageTitle: 'error.title'
        },
        canActivate: [shared_1.UserRouteAccessService]
    },
    {
        path: 'accessdenied',
        component: error_component_1.ErrorComponent,
        data: {
            authorities: [],
            pageTitle: 'error.title'
        },
        canActivate: [shared_1.UserRouteAccessService]
    }
];


/***/ }),

/***/ "./src/main/webapp/app/layouts/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\"> <p jhiTranslate=\"footer\">This is your footer</p> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/layouts/footer/footer.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var FooterComponent = (function () {
    function FooterComponent() {
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    core_1.Component({
        selector: 'jhi-footer',
        template: __webpack_require__("./src/main/webapp/app/layouts/footer/footer.component.html")
    })
], FooterComponent);
exports.FooterComponent = FooterComponent;


/***/ }),

/***/ "./src/main/webapp/app/layouts/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/main/webapp/app/layouts/error/error.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/layouts/error/error.route.ts"));
__export(__webpack_require__("./src/main/webapp/app/layouts/main/main.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/layouts/footer/footer.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/layouts/navbar/navbar.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/layouts/navbar/active-menu.directive.ts"));
__export(__webpack_require__("./src/main/webapp/app/layouts/profiles/page-ribbon.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/layouts/profiles/profile.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/layouts/profiles/profile-info.model.ts"));
__export(__webpack_require__("./src/main/webapp/app/layouts/layout-routing.module.ts"));


/***/ }),

/***/ "./src/main/webapp/app/layouts/layout-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(5);
var app_route_1 = __webpack_require__("./src/main/webapp/app/app.route.ts");
var _1 = __webpack_require__("./src/main/webapp/app/layouts/index.ts");
var LAYOUT_ROUTES = [
    app_route_1.navbarRoute
].concat(_1.errorRoute);
var LayoutRoutingModule = (function () {
    function LayoutRoutingModule() {
    }
    return LayoutRoutingModule;
}());
LayoutRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(LAYOUT_ROUTES, { useHash: true })
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], LayoutRoutingModule);
exports.LayoutRoutingModule = LayoutRoutingModule;


/***/ }),

/***/ "./src/main/webapp/app/layouts/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<jhi-page-ribbon></jhi-page-ribbon> <div> <router-outlet name=\"navbar\"></router-outlet> </div> <div class=\"container-fluid\"> <div class=\"card jh-card\"> <router-outlet></router-outlet> <router-outlet name=\"popup\"></router-outlet> </div> <jhi-footer></jhi-footer> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/layouts/main/main.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(5);
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var JhiMainComponent = (function () {
    function JhiMainComponent(jhiLanguageHelper, router, $storageService) {
        this.jhiLanguageHelper = jhiLanguageHelper;
        this.router = router;
        this.$storageService = $storageService;
    }
    JhiMainComponent.prototype.getPageTitle = function (routeSnapshot) {
        var title = (routeSnapshot.data && routeSnapshot.data['pageTitle']) ? routeSnapshot.data['pageTitle'] : 'springBootAngularApp';
        if (routeSnapshot.firstChild) {
            title = this.getPageTitle(routeSnapshot.firstChild) || title;
        }
        return title;
    };
    JhiMainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                _this.jhiLanguageHelper.updateTitle(_this.getPageTitle(_this.router.routerState.snapshot.root));
            }
            if (event instanceof router_1.RoutesRecognized) {
                var params = {};
                var destinationData = {};
                var destinationName = '';
                var destinationEvent = event.state.root.firstChild.children[0];
                if (destinationEvent !== undefined) {
                    params = destinationEvent.params;
                    destinationData = destinationEvent.data;
                    destinationName = destinationEvent.url[0].path;
                }
                var from = { name: _this.router.url.slice(1) };
                var destination = { name: destinationName, data: destinationData };
                _this.$storageService.storeDestinationState(destination, params, from);
            }
        });
    };
    return JhiMainComponent;
}());
JhiMainComponent = __decorate([
    core_1.Component({
        selector: 'jhi-main',
        template: __webpack_require__("./src/main/webapp/app/layouts/main/main.component.html")
    }),
    __metadata("design:paramtypes", [shared_1.JhiLanguageHelper,
        router_1.Router,
        shared_1.StateStorageService])
], JhiMainComponent);
exports.JhiMainComponent = JhiMainComponent;


/***/ }),

/***/ "./src/main/webapp/app/layouts/navbar/active-menu.directive.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng2_translate_1 = __webpack_require__(9);
var ActiveMenuDirective = (function () {
    function ActiveMenuDirective(el, renderer, translateService) {
        this.el = el;
        this.renderer = renderer;
        this.translateService = translateService;
    }
    ActiveMenuDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.translateService.onLangChange.subscribe(function (event) {
            _this.updateActiveFlag(event.lang);
        });
        this.updateActiveFlag(this.translateService.currentLang);
    };
    ActiveMenuDirective.prototype.updateActiveFlag = function (selectedLanguage) {
        if (this.jhiActiveMenu === selectedLanguage) {
            this.renderer.setElementClass(this.el.nativeElement, 'active', true);
        }
        else {
            this.renderer.setElementClass(this.el.nativeElement, 'active', false);
        }
    };
    return ActiveMenuDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ActiveMenuDirective.prototype, "jhiActiveMenu", void 0);
ActiveMenuDirective = __decorate([
    core_1.Directive({
        selector: '[jhiActiveMenu]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer, ng2_translate_1.TranslateService])
], ActiveMenuDirective);
exports.ActiveMenuDirective = ActiveMenuDirective;


/***/ }),

/***/ "./src/main/webapp/app/layouts/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-toggleable-md jh-navbar\"> <div class=\"jh-logo-container float-left\"> <a class=\"jh-navbar-toggler hidden-lg-up float-right\" href=\"javascript:void(0);\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"toggleNavbar()\"> <i class=\"fa fa-bars\"></i> </a> <a class=\"navbar-brand logo float-left\" routerLink=\"/\" (click)=\"collapseNavbar()\"> <span class=\"logo-img\"></span> <span jhiTranslate=\"global.title\" class=\"navbar-title\">SpringBootAngular</span> <span class=\"navbar-version\">{{version}}</span> </a> </div> <div class=\"navbar-collapse collapse\" id=\"navbarResponsive\" [ngbCollapse]=\"isNavbarCollapsed\" [ngSwitch]=\"isAuthenticated()\"> <ul class=\"navbar-nav ml-auto\"> <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\"> <a class=\"nav-link\" routerLink=\"/\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-home\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.home\">Home</span> </a> </li> <li *ngSwitchCase=\"true\" ngbDropdown class=\"nav-item dropdown pointer\"> <a class=\"nav-link dropdown-toggle\" routerLinkActive=\"active\" ngbDropdownToggle href=\"javascript:void(0);\" id=\"entity-menu\"> <span> <i class=\"fa fa-th-list\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.entities.main\"> Entities </span> <b class=\"caret\"></b> </span> </a> <ul class=\"dropdown-menu\" ngbDropdownMenu> </ul> </li> <li *jhiHasAnyAuthority=\"'ROLE_ADMIN'\" ngbDropdown class=\"nav-item dropdown pointer\"> <a class=\"nav-link dropdown-toggle\" ngbDropdownToggle href=\"javascript:void(0);\" id=\"admin-menu\"> <span> <i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.admin.main\">Administration</span> <b class=\"caret\"></b> </span> </a> <ul class=\"dropdown-menu\" ngbDropdownMenu> <li> <a class=\"dropdown-item\" routerLink=\"user-management\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-fw fa-user\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.admin.userManagement\">User management</span> </a> </li> <li> <a class=\"dropdown-item\" routerLink=\"jhi-metrics\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-fw fa-tachometer\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.admin.metrics\">Metrics</span> </a> </li> <li> <a class=\"dropdown-item\" routerLink=\"jhi-health\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-fw fa-heart\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.admin.health\">Health</span> </a> </li> <li> <a class=\"dropdown-item\" routerLink=\"jhi-configuration\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-fw fa-list\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.admin.configuration\">Configuration</span> </a> </li> <li> <a class=\"dropdown-item\" routerLink=\"audits\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-fw fa-bell\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.admin.audits\">Audits</span> </a> </li> <li> <a class=\"dropdown-item\" routerLink=\"logs\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-fw fa-tasks\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.admin.logs\">Logs</span> </a> </li> <li *ngIf=\"swaggerEnabled\"> <a class=\"dropdown-item\" routerLink=\"docs\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-fw fa-book\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.admin.apidocs\">API</span> </a> </li> </ul> </li> <li ngbDropdown class=\"nav-item dropdown pointer\" *ngIf=\"languages\"> <a class=\"nav-link dropdown-toggle\" ngbDropdownToggle href=\"javascript:void(0);\" id=\"languagesnavBarDropdown\" *ngIf=\"languages.length > 1\"> <span> <i class=\"fa fa-flag\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.language\">Language</span> <b class=\"caret\"></b> </span> </a> <ul class=\"dropdown-menu\" ngbDropdownMenu *ngIf=\"languages.length > 1\"> <li *ngFor=\"let language of languages\"> <a class=\"dropdown-item\" [jhiActiveMenu]=\"language\" href=\"javascript:void(0);\" (click)=\"changeLanguage(language);collapseNavbar();\">{{language | findLanguageFromKey}}</a> </li> </ul> </li> <li ngbDropdown class=\"nav-item dropdown pointer\"> <a class=\"nav-link dropdown-toggle\" ngbDropdownToggle href=\"javascript:void(0);\" id=\"account-menu\"> <span *ngIf=\"!getImageUrl()\"> <i class=\"fa fa-user\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.account.main\"> Account </span> <b class=\"caret\"></b> </span> <span *ngIf=\"getImageUrl()\"> <img [src]=\"getImageUrl()\" class=\"profile-image img-circle\" alt=\"Avatar\"> </span> </a> <ul class=\"dropdown-menu dropdown-menu-right\" ngbDropdownMenu> <li *ngSwitchCase=\"true\"> <a class=\"dropdown-item\" routerLink=\"settings\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-fw fa-wrench\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.account.settings\">Settings</span> </a> </li> <li *ngSwitchCase=\"true\"> <a class=\"dropdown-item\" routerLink=\"password\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-fw fa-clock-o\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.account.password\">Password</span> </a> </li> <li *ngSwitchCase=\"true\"> <a class=\"dropdown-item\" (click)=\"logout()\" id=\"logout\"> <i class=\"fa fa-fw fa-sign-out\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.account.logout\">Sign out</span> </a> </li> <li *ngSwitchCase=\"false\"> <a class=\"dropdown-item\" (click)=\"login()\" id=\"login\"> <i class=\"fa fa-fw fa-sign-in\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.account.login\">Sign in</span> </a> </li> <li *ngSwitchCase=\"false\"> <a class=\"dropdown-item\" routerLink=\"register\" routerLinkActive=\"active\" (click)=\"collapseNavbar()\"> <i class=\"fa fa-fw fa-registered\" aria-hidden=\"true\"></i> <span jhiTranslate=\"global.menu.account.register\">Register</span> </a> </li> </ul> </li> </ul> </div> </nav> ";

/***/ }),

/***/ "./src/main/webapp/app/layouts/navbar/navbar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(5);
var ng_jhipster_1 = __webpack_require__(1);
var profile_service_1 = __webpack_require__("./src/main/webapp/app/layouts/profiles/profile.service.ts"); // FIXME barrel doesn't work here
var shared_1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var app_constants_1 = __webpack_require__("./src/main/webapp/app/app.constants.ts");
var NavbarComponent = (function () {
    function NavbarComponent(loginService, languageHelper, languageService, principal, loginModalService, profileService, router) {
        this.loginService = loginService;
        this.languageHelper = languageHelper;
        this.languageService = languageService;
        this.principal = principal;
        this.loginModalService = loginModalService;
        this.profileService = profileService;
        this.router = router;
        this.version = app_constants_1.DEBUG_INFO_ENABLED ? 'v' + app_constants_1.VERSION : '';
        this.isNavbarCollapsed = true;
        this.languageService.addLocation('home');
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.languageHelper.getAll().then(function (languages) {
            _this.languages = languages;
        });
        this.profileService.getProfileInfo().subscribe(function (profileInfo) {
            _this.inProduction = profileInfo.inProduction;
            _this.swaggerEnabled = profileInfo.swaggerEnabled;
        });
    };
    NavbarComponent.prototype.changeLanguage = function (languageKey) {
        this.languageService.changeLanguage(languageKey);
    };
    NavbarComponent.prototype.collapseNavbar = function () {
        this.isNavbarCollapsed = true;
    };
    NavbarComponent.prototype.isAuthenticated = function () {
        return this.principal.isAuthenticated();
    };
    NavbarComponent.prototype.login = function () {
        this.modalRef = this.loginModalService.open();
    };
    NavbarComponent.prototype.logout = function () {
        this.collapseNavbar();
        this.loginService.logout();
        this.router.navigate(['']);
    };
    NavbarComponent.prototype.toggleNavbar = function () {
        this.isNavbarCollapsed = !this.isNavbarCollapsed;
    };
    NavbarComponent.prototype.getImageUrl = function () {
        return this.isAuthenticated() ? this.principal.getImageUrl() : null;
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    core_1.Component({
        selector: 'jhi-navbar',
        template: __webpack_require__("./src/main/webapp/app/layouts/navbar/navbar.component.html"),
        styles: [
            __webpack_require__("./src/main/webapp/app/layouts/navbar/navbar.scss")
        ]
    }),
    __metadata("design:paramtypes", [shared_1.LoginService,
        shared_1.JhiLanguageHelper,
        ng_jhipster_1.JhiLanguageService,
        shared_1.Principal,
        shared_1.LoginModalService,
        profile_service_1.ProfileService,
        router_1.Router])
], NavbarComponent);
exports.NavbarComponent = NavbarComponent;


/***/ }),

/***/ "./src/main/webapp/app/layouts/navbar/navbar.scss":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/main/webapp/app/layouts/navbar/navbar.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/main/webapp/app/layouts/profiles/page-ribbon.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var profile_service_1 = __webpack_require__("./src/main/webapp/app/layouts/profiles/profile.service.ts");
var PageRibbonComponent = (function () {
    function PageRibbonComponent(profileService) {
        this.profileService = profileService;
    }
    PageRibbonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileService.getProfileInfo().subscribe(function (profileInfo) {
            _this.profileInfo = profileInfo;
            _this.ribbonEnv = profileInfo.ribbonEnv;
        });
    };
    return PageRibbonComponent;
}());
PageRibbonComponent = __decorate([
    core_1.Component({
        selector: 'jhi-page-ribbon',
        template: "<div class=\"ribbon\" *ngIf=\"ribbonEnv\"><a href=\"\" jhiTranslate=\"global.ribbon.{{ribbonEnv}}\">{{ribbonEnv}}</a></div>",
        styles: [
            __webpack_require__("./src/main/webapp/app/layouts/profiles/page-ribbon.scss")
        ]
    }),
    __metadata("design:paramtypes", [profile_service_1.ProfileService])
], PageRibbonComponent);
exports.PageRibbonComponent = PageRibbonComponent;


/***/ }),

/***/ "./src/main/webapp/app/layouts/profiles/page-ribbon.scss":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/main/webapp/app/layouts/profiles/page-ribbon.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/main/webapp/app/layouts/profiles/profile-info.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ProfileInfo = (function () {
    function ProfileInfo() {
    }
    return ProfileInfo;
}());
exports.ProfileInfo = ProfileInfo;


/***/ }),

/***/ "./src/main/webapp/app/layouts/profiles/profile.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(6);
var profile_info_model_1 = __webpack_require__("./src/main/webapp/app/layouts/profiles/profile-info.model.ts");
var ProfileService = (function () {
    function ProfileService(http) {
        this.http = http;
        this.profileInfoUrl = 'api/profile-info';
    }
    ProfileService.prototype.getProfileInfo = function () {
        return this.http.get(this.profileInfoUrl)
            .map(function (res) {
            var data = res.json();
            var pi = new profile_info_model_1.ProfileInfo();
            pi.activeProfiles = data.activeProfiles;
            pi.ribbonEnv = data.ribbonEnv;
            pi.inProduction = data.activeProfiles.indexOf('prod') !== -1;
            pi.swaggerEnabled = data.activeProfiles.indexOf('swagger') !== -1;
            return pi;
        });
    };
    return ProfileService;
}());
ProfileService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ProfileService);
exports.ProfileService = ProfileService;


/***/ }),

/***/ "./src/main/webapp/app/shared/alert/alert-error.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng2_translate_1 = __webpack_require__(9);
var ng_jhipster_1 = __webpack_require__(1);
var JhiAlertErrorComponent = (function () {
    function JhiAlertErrorComponent(alertService, eventManager, translateService) {
        var _this = this;
        this.alertService = alertService;
        this.eventManager = eventManager;
        this.translateService = translateService;
        this.alerts = [];
        this.cleanHttpErrorListener = eventManager.subscribe('springBootAngularApp.httpError', function (response) {
            var i;
            var httpResponse = response.content;
            switch (httpResponse.status) {
                // connection refused, server not reachable
                case 0:
                    _this.addErrorAlert('Server not reachable', 'error.server.not.reachable');
                    break;
                case 400:
                    var arr = Array.from(httpResponse.headers._headers);
                    var headers = [];
                    for (i = 0; i < arr.length; i++) {
                        if (arr[i][0].endsWith('app-error') || arr[i][0].endsWith('app-params')) {
                            headers.push(arr[i][0]);
                        }
                    }
                    headers.sort();
                    var errorHeader = null;
                    var entityKey = null;
                    if (headers.length > 1) {
                        errorHeader = httpResponse.headers.get(headers[0]);
                        entityKey = httpResponse.headers.get(headers[1]);
                    }
                    if (errorHeader) {
                        var entityName = translateService.instant('global.menu.entities.' + entityKey);
                        _this.addErrorAlert(errorHeader, errorHeader, { entityName: entityName });
                    }
                    else if (httpResponse.text() !== '' && httpResponse.json() && httpResponse.json().fieldErrors) {
                        var fieldErrors = httpResponse.json().fieldErrors;
                        for (i = 0; i < fieldErrors.length; i++) {
                            var fieldError = fieldErrors[i];
                            // convert 'something[14].other[4].id' to 'something[].other[].id' so translations can be written to it
                            var convertedField = fieldError.field.replace(/\[\d*\]/g, '[]');
                            var fieldName = translateService.instant('springBootAngularApp.' +
                                fieldError.objectName + '.' + convertedField);
                            _this.addErrorAlert('Field ' + fieldName + ' cannot be empty', 'error.' + fieldError.message, { fieldName: fieldName });
                        }
                    }
                    else if (httpResponse.text() !== '' && httpResponse.json() && httpResponse.json().message) {
                        _this.addErrorAlert(httpResponse.json().message, httpResponse.json().message, httpResponse.json());
                    }
                    else {
                        _this.addErrorAlert(httpResponse.text());
                    }
                    break;
                case 404:
                    _this.addErrorAlert('Not found', 'error.url.not.found');
                    break;
                default:
                    if (httpResponse.text() !== '' && httpResponse.json() && httpResponse.json().message) {
                        _this.addErrorAlert(httpResponse.json().message);
                    }
                    else {
                        _this.addErrorAlert(JSON.stringify(httpResponse)); // Fixme find a way to parse httpResponse
                    }
            }
        });
    }
    JhiAlertErrorComponent.prototype.ngOnDestroy = function () {
        if (this.cleanHttpErrorListener !== undefined && this.cleanHttpErrorListener !== null) {
            this.eventManager.destroy(this.cleanHttpErrorListener);
            this.alerts = [];
        }
    };
    JhiAlertErrorComponent.prototype.addErrorAlert = function (message, key, data) {
        key = key && key !== null ? key : message;
        this.alerts.push(this.alertService.addAlert({
            type: 'danger',
            msg: key,
            params: data,
            timeout: 5000,
            toast: this.alertService.isToast(),
            scoped: true
        }, this.alerts));
    };
    return JhiAlertErrorComponent;
}());
JhiAlertErrorComponent = __decorate([
    core_1.Component({
        selector: 'jhi-alert-error',
        template: "\n        <div class=\"alerts\" role=\"alert\">\n            <div *ngFor=\"let alert of alerts\"  [ngClass]=\"{'alert.position': true, 'toast': alert.toast}\">\n                <ngb-alert type=\"{{alert.type}}\" close=\"alert.close(alerts)\"><pre [innerHTML]=\"alert.msg\"></pre></ngb-alert>\n            </div>\n        </div>"
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.AlertService, ng_jhipster_1.EventManager, ng2_translate_1.TranslateService])
], JhiAlertErrorComponent);
exports.JhiAlertErrorComponent = JhiAlertErrorComponent;


/***/ }),

/***/ "./src/main/webapp/app/shared/alert/alert.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_jhipster_1 = __webpack_require__(1);
var JhiAlertComponent = (function () {
    function JhiAlertComponent(alertService) {
        this.alertService = alertService;
    }
    JhiAlertComponent.prototype.ngOnInit = function () {
        this.alerts = this.alertService.get();
    };
    JhiAlertComponent.prototype.ngOnDestroy = function () {
        this.alerts = [];
    };
    return JhiAlertComponent;
}());
JhiAlertComponent = __decorate([
    core_1.Component({
        selector: 'jhi-alert',
        template: "\n        <div class=\"alerts\" role=\"alert\">\n            <div *ngFor=\"let alert of alerts\" [ngClass]=\"{'alert.position': true, 'toast': alert.toast}\">\n                <ngb-alert [type]=\"alert.type\" (close)=\"alert.close(alerts)\"><pre [innerHTML]=\"alert.msg\"></pre></ngb-alert>\n            </div>\n        </div>"
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.AlertService])
], JhiAlertComponent);
exports.JhiAlertComponent = JhiAlertComponent;


/***/ }),

/***/ "./src/main/webapp/app/shared/auth/account.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(6);
var AccountService = (function () {
    function AccountService(http) {
        this.http = http;
    }
    AccountService.prototype.get = function () {
        return this.http.get('api/account').map(function (res) { return res.json(); });
    };
    AccountService.prototype.save = function (account) {
        return this.http.post('api/account', account);
    };
    return AccountService;
}());
AccountService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AccountService);
exports.AccountService = AccountService;


/***/ }),

/***/ "./src/main/webapp/app/shared/auth/auth-jwt.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(6);
var Rx_1 = __webpack_require__(15);
var ng2_webstorage_1 = __webpack_require__(10);
var AuthServerProvider = (function () {
    function AuthServerProvider(http, $localStorage, $sessionStorage) {
        this.http = http;
        this.$localStorage = $localStorage;
        this.$sessionStorage = $sessionStorage;
    }
    AuthServerProvider.prototype.getToken = function () {
        return this.$localStorage.retrieve('authenticationToken') || this.$sessionStorage.retrieve('authenticationToken');
    };
    AuthServerProvider.prototype.login = function (credentials) {
        var data = {
            username: credentials.username,
            password: credentials.password,
            rememberMe: credentials.rememberMe
        };
        return this.http.post('api/authenticate', data).map(authenticateSuccess.bind(this));
        function authenticateSuccess(resp) {
            var bearerToken = resp.headers.get('Authorization');
            if (bearerToken && bearerToken.slice(0, 7) === 'Bearer ') {
                var jwt = bearerToken.slice(7, bearerToken.length);
                this.storeAuthenticationToken(jwt, credentials.rememberMe);
                return jwt;
            }
        }
    };
    AuthServerProvider.prototype.loginWithToken = function (jwt, rememberMe) {
        if (jwt) {
            this.storeAuthenticationToken(jwt, rememberMe);
            return Promise.resolve(jwt);
        }
        else {
            return Promise.reject('auth-jwt-service Promise reject'); // Put appropriate error message here
        }
    };
    AuthServerProvider.prototype.storeAuthenticationToken = function (jwt, rememberMe) {
        if (rememberMe) {
            this.$localStorage.store('authenticationToken', jwt);
        }
        else {
            this.$sessionStorage.store('authenticationToken', jwt);
        }
    };
    AuthServerProvider.prototype.logout = function () {
        var _this = this;
        return new Rx_1.Observable(function (observer) {
            _this.$localStorage.clear('authenticationToken');
            _this.$sessionStorage.clear('authenticationToken');
            observer.complete();
        });
    };
    return AuthServerProvider;
}());
AuthServerProvider = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        ng2_webstorage_1.LocalStorageService,
        ng2_webstorage_1.SessionStorageService])
], AuthServerProvider);
exports.AuthServerProvider = AuthServerProvider;


/***/ }),

/***/ "./src/main/webapp/app/shared/auth/auth.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(5);
var login_modal_service_1 = __webpack_require__("./src/main/webapp/app/shared/login/login-modal.service.ts");
var principal_service_1 = __webpack_require__("./src/main/webapp/app/shared/auth/principal.service.ts");
var state_storage_service_1 = __webpack_require__("./src/main/webapp/app/shared/auth/state-storage.service.ts");
var AuthService = (function () {
    function AuthService(principal, stateStorageService, loginModalService, router) {
        this.principal = principal;
        this.stateStorageService = stateStorageService;
        this.loginModalService = loginModalService;
        this.router = router;
    }
    AuthService.prototype.authorize = function (force) {
        var authReturn = this.principal.identity(force).then(authThen.bind(this));
        return authReturn;
        function authThen() {
            var _this = this;
            var isAuthenticated = this.principal.isAuthenticated();
            var toStateInfo = this.stateStorageService.getDestinationState().destination;
            // an authenticated user can't access to login and register pages
            if (isAuthenticated && (toStateInfo.name === 'register' || toStateInfo.name === 'social-auth')) {
                this.router.navigate(['']);
                return false;
            }
            // recover and clear previousState after external login redirect (e.g. oauth2)
            var fromStateInfo = this.stateStorageService.getDestinationState().from;
            var previousState = this.stateStorageService.getPreviousState();
            if (isAuthenticated && !fromStateInfo.name && previousState) {
                this.stateStorageService.resetPreviousState();
                this.router.navigate([previousState.name], { queryParams: previousState.params });
                return false;
            }
            if (toStateInfo.data.authorities && toStateInfo.data.authorities.length > 0) {
                return this.principal.hasAnyAuthority(toStateInfo.data.authorities).then(function (hasAnyAuthority) {
                    if (!hasAnyAuthority) {
                        if (isAuthenticated) {
                            // user is signed in but not authorized for desired state
                            _this.router.navigate(['accessdenied']);
                        }
                        else {
                            // user is not authenticated. Show the state they wanted before you
                            // send them to the login service, so you can return them when you're done
                            var toStateParamsInfo = _this.stateStorageService.getDestinationState().params;
                            _this.stateStorageService.storePreviousState(toStateInfo.name, toStateParamsInfo);
                            // now, send them to the signin state so they can log in
                            _this.router.navigate(['accessdenied']).then(function () {
                                _this.loginModalService.open();
                            });
                        }
                    }
                    return hasAnyAuthority;
                });
            }
            return true;
        }
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [principal_service_1.Principal,
        state_storage_service_1.StateStorageService,
        login_modal_service_1.LoginModalService,
        router_1.Router])
], AuthService);
exports.AuthService = AuthService;


/***/ }),

/***/ "./src/main/webapp/app/shared/auth/csrf.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var core_2 = __webpack_require__(14);
var CSRFService = (function () {
    function CSRFService(cookieService) {
        this.cookieService = cookieService;
    }
    CSRFService.prototype.getCSRF = function (name) {
        name = "" + (name ? name : 'XSRF-TOKEN');
        return this.cookieService.get(name);
    };
    return CSRFService;
}());
CSRFService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [core_2.CookieService])
], CSRFService);
exports.CSRFService = CSRFService;


/***/ }),

/***/ "./src/main/webapp/app/shared/auth/has-any-authority.directive.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var principal_service_1 = __webpack_require__("./src/main/webapp/app/shared/auth/principal.service.ts");
/**
 * @whatItDoes Conditionally includes an HTML element if current user has any
 * of the authorities passed as the `expression`.
 *
 * @howToUse
 * ```
 *     <some-element *jhiHasAnyAuthority="'ROLE_ADMIN'">...</some-element>
 *
 *     <some-element *jhiHasAnyAuthority="['ROLE_ADMIN', 'ROLE_USER']">...</some-element>
 * ```
 */
var HasAnyAuthorityDirective = (function () {
    function HasAnyAuthorityDirective(principal, templateRef, viewContainerRef) {
        this.principal = principal;
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
    }
    Object.defineProperty(HasAnyAuthorityDirective.prototype, "jhiHasAnyAuthority", {
        set: function (value) {
            var _this = this;
            this.authorities = typeof value === 'string' ? [value] : value;
            this.updateView();
            // Get notified each time authentication state changes.
            this.principal.getAuthenticationState().subscribe(function (identity) { return _this.updateView(); });
        },
        enumerable: true,
        configurable: true
    });
    HasAnyAuthorityDirective.prototype.updateView = function () {
        var _this = this;
        this.principal.hasAnyAuthority(this.authorities).then(function (result) {
            _this.viewContainerRef.clear();
            if (result) {
                _this.viewContainerRef.createEmbeddedView(_this.templateRef);
            }
        });
    };
    return HasAnyAuthorityDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], HasAnyAuthorityDirective.prototype, "jhiHasAnyAuthority", null);
HasAnyAuthorityDirective = __decorate([
    core_1.Directive({
        selector: '[jhiHasAnyAuthority]'
    }),
    __metadata("design:paramtypes", [principal_service_1.Principal, core_1.TemplateRef, core_1.ViewContainerRef])
], HasAnyAuthorityDirective);
exports.HasAnyAuthorityDirective = HasAnyAuthorityDirective;


/***/ }),

/***/ "./src/main/webapp/app/shared/auth/principal.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var Subject_1 = __webpack_require__(22);
var account_service_1 = __webpack_require__("./src/main/webapp/app/shared/auth/account.service.ts");
var Principal = (function () {
    function Principal(account) {
        this.account = account;
        this.authenticated = false;
        this.authenticationState = new Subject_1.Subject();
    }
    Principal.prototype.authenticate = function (identity) {
        this.userIdentity = identity;
        this.authenticated = identity !== null;
        this.authenticationState.next(this.userIdentity);
    };
    Principal.prototype.hasAnyAuthority = function (authorities) {
        if (!this.authenticated || !this.userIdentity || !this.userIdentity.authorities) {
            return Promise.resolve(false);
        }
        for (var i = 0; i < authorities.length; i++) {
            if (this.userIdentity.authorities.indexOf(authorities[i]) !== -1) {
                return Promise.resolve(true);
            }
        }
        return Promise.resolve(false);
    };
    Principal.prototype.hasAuthority = function (authority) {
        if (!this.authenticated) {
            return Promise.resolve(false);
        }
        return this.identity().then(function (id) {
            return Promise.resolve(id.authorities && id.authorities.indexOf(authority) !== -1);
        }, function () {
            return Promise.resolve(false);
        });
    };
    Principal.prototype.identity = function (force) {
        var _this = this;
        if (force === true) {
            this.userIdentity = undefined;
        }
        // check and see if we have retrieved the userIdentity data from the server.
        // if we have, reuse it by immediately resolving
        if (this.userIdentity) {
            return Promise.resolve(this.userIdentity);
        }
        // retrieve the userIdentity data from the server, update the identity object, and then resolve.
        return this.account.get().toPromise().then(function (account) {
            if (account) {
                _this.userIdentity = account;
                _this.authenticated = true;
            }
            else {
                _this.userIdentity = null;
                _this.authenticated = false;
            }
            _this.authenticationState.next(_this.userIdentity);
            return _this.userIdentity;
        }).catch(function (err) {
            _this.userIdentity = null;
            _this.authenticated = false;
            _this.authenticationState.next(_this.userIdentity);
            return null;
        });
    };
    Principal.prototype.isAuthenticated = function () {
        return this.authenticated;
    };
    Principal.prototype.isIdentityResolved = function () {
        return this.userIdentity !== undefined;
    };
    Principal.prototype.getAuthenticationState = function () {
        return this.authenticationState.asObservable();
    };
    Principal.prototype.getImageUrl = function () {
        return this.isIdentityResolved() ? this.userIdentity.imageUrl : null;
    };
    return Principal;
}());
Principal = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [account_service_1.AccountService])
], Principal);
exports.Principal = Principal;


/***/ }),

/***/ "./src/main/webapp/app/shared/auth/state-storage.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng2_webstorage_1 = __webpack_require__(10);
var StateStorageService = (function () {
    function StateStorageService($sessionStorage) {
        this.$sessionStorage = $sessionStorage;
    }
    StateStorageService.prototype.getPreviousState = function () {
        return this.$sessionStorage.retrieve('previousState');
    };
    StateStorageService.prototype.resetPreviousState = function () {
        this.$sessionStorage.clear('previousState');
    };
    StateStorageService.prototype.storePreviousState = function (previousStateName, previousStateParams) {
        var previousState = { 'name': previousStateName, 'params': previousStateParams };
        this.$sessionStorage.store('previousState', previousState);
    };
    StateStorageService.prototype.getDestinationState = function () {
        return this.$sessionStorage.retrieve('destinationState');
    };
    StateStorageService.prototype.storeDestinationState = function (destinationState, destinationStateParams, fromState) {
        var destinationInfo = {
            'destination': {
                'name': destinationState.name,
                'data': destinationState.data,
            },
            'params': destinationStateParams,
            'from': {
                'name': fromState.name,
            }
        };
        this.$sessionStorage.store('destinationState', destinationInfo);
    };
    return StateStorageService;
}());
StateStorageService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng2_webstorage_1.SessionStorageService])
], StateStorageService);
exports.StateStorageService = StateStorageService;


/***/ }),

/***/ "./src/main/webapp/app/shared/auth/user-route-access-service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(5);
var _1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var UserRouteAccessService = (function () {
    function UserRouteAccessService(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    UserRouteAccessService.prototype.canActivate = function (route) {
        return this.auth.authorize(false).then(function (canActivate) { return canActivate; });
    };
    return UserRouteAccessService;
}());
UserRouteAccessService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router, _1.AuthService])
], UserRouteAccessService);
exports.UserRouteAccessService = UserRouteAccessService;


/***/ }),

/***/ "./src/main/webapp/app/shared/constants/pagination.constants.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ITEMS_PER_PAGE = 20;


/***/ }),

/***/ "./src/main/webapp/app/shared/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("./src/main/webapp/app/shared/alert/alert.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/alert/alert-error.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/auth/csrf.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/auth/state-storage.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/auth/account.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/auth/auth-jwt.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/auth/auth.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/auth/principal.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/auth/has-any-authority.directive.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/language/language.constants.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/language/language.helper.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/language/language.pipe.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/login/login.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/login/login.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/login/login-modal.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/constants/pagination.constants.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/user/account.model.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/user/user.model.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/user/user.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/social/social.service.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/social/social.component.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/shared-libs.module.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/shared-common.module.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/shared.module.ts"));
__export(__webpack_require__("./src/main/webapp/app/shared/auth/user-route-access-service.ts"));


/***/ }),

/***/ "./src/main/webapp/app/shared/language/language.constants.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/*
    Languages codes are ISO_639-1 codes, see http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
    They are written in English to avoid character encoding issues (not a perfect solution)
*/
exports.LANGUAGES = [
    'fr',
    'hy',
    'en',
    'hi',
    'it'
    // jhipster-needle-i18n-language-constant - JHipster will add/remove languages in this array
];


/***/ }),

/***/ "./src/main/webapp/app/shared/language/language.helper.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var platform_browser_1 = __webpack_require__(12);
var router_1 = __webpack_require__(5);
var ng2_translate_1 = __webpack_require__("./node_modules/ng2-translate/ng2-translate.js");
var language_constants_1 = __webpack_require__("./src/main/webapp/app/shared/language/language.constants.ts");
var JhiLanguageHelper = (function () {
    function JhiLanguageHelper(translateService, titleService, router) {
        this.translateService = translateService;
        this.titleService = titleService;
        this.router = router;
        this.init();
    }
    JhiLanguageHelper.prototype.getAll = function () {
        return Promise.resolve(language_constants_1.LANGUAGES);
    };
    /**
     * Update the window title using params in the following
     * order:
     * 1. titleKey parameter
     * 2. $state.$current.data.pageTitle (current state page title)
     * 3. 'global.title'
     */
    JhiLanguageHelper.prototype.updateTitle = function (titleKey) {
        var _this = this;
        if (!titleKey) {
            titleKey = this.getPageTitle(this.router.routerState.snapshot.root);
        }
        this.translateService.get(titleKey).subscribe(function (title) {
            _this.titleService.setTitle(title);
        });
    };
    JhiLanguageHelper.prototype.init = function () {
        var _this = this;
        this.translateService.onTranslationChange.subscribe(function (event) {
            _this.updateTitle();
        });
        this.translateService.onLangChange.subscribe(function (event) {
            _this.updateTitle();
        });
    };
    JhiLanguageHelper.prototype.getPageTitle = function (routeSnapshot) {
        var title = (routeSnapshot.data && routeSnapshot.data['pageTitle']) ? routeSnapshot.data['pageTitle'] : 'springBootAngularApp';
        if (routeSnapshot.firstChild) {
            title = this.getPageTitle(routeSnapshot.firstChild) || title;
        }
        return title;
    };
    return JhiLanguageHelper;
}());
JhiLanguageHelper = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng2_translate_1.TranslateService, platform_browser_1.Title, router_1.Router])
], JhiLanguageHelper);
exports.JhiLanguageHelper = JhiLanguageHelper;


/***/ }),

/***/ "./src/main/webapp/app/shared/language/language.pipe.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var FindLanguageFromKeyPipe = (function () {
    function FindLanguageFromKeyPipe() {
        this.languages = {
            'ca': 'Català',
            'cs': 'Český',
            'da': 'Dansk',
            'de': 'Deutsch',
            'el': 'Ελληνικά',
            'en': 'English',
            'es': 'Español',
            'et': 'Eesti',
            'fr': 'Français',
            'gl': 'Galego',
            'hu': 'Magyar',
            'hi': 'हिंदी',
            'hy': 'Հայերեն',
            'it': 'Italiano',
            'ja': '日本語',
            'ko': '한국어',
            'mr': 'मराठी',
            'nl': 'Nederlands',
            'pl': 'Polski',
            'pt-br': 'Português (Brasil)',
            'pt-pt': 'Português',
            'ro': 'Română',
            'ru': 'Русский',
            'sk': 'Slovenský',
            'sr': 'Srpski',
            'sv': 'Svenska',
            'ta': 'தமிழ்',
            'th': 'ไทย',
            'tr': 'Türkçe',
            'vi': 'Tiếng Việt',
            'zh-cn': '中文（简体）',
            'zh-tw': '繁體中文'
        };
    }
    FindLanguageFromKeyPipe.prototype.transform = function (lang) {
        return this.languages[lang];
    };
    return FindLanguageFromKeyPipe;
}());
FindLanguageFromKeyPipe = __decorate([
    core_1.Pipe({ name: 'findLanguageFromKey' })
], FindLanguageFromKeyPipe);
exports.FindLanguageFromKeyPipe = FindLanguageFromKeyPipe;


/***/ }),

/***/ "./src/main/webapp/app/shared/login/login-modal.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_bootstrap_1 = __webpack_require__(7);
var login_component_1 = __webpack_require__("./src/main/webapp/app/shared/login/login.component.ts");
var LoginModalService = (function () {
    function LoginModalService(modalService) {
        this.modalService = modalService;
        this.isOpen = false;
    }
    LoginModalService.prototype.open = function () {
        var _this = this;
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;
        var modalRef = this.modalService.open(login_component_1.JhiLoginModalComponent);
        modalRef.result.then(function (result) {
            _this.isOpen = false;
        }, function (reason) {
            _this.isOpen = false;
        });
        return modalRef;
    };
    return LoginModalService;
}());
LoginModalService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal])
], LoginModalService);
exports.LoginModalService = LoginModalService;


/***/ }),

/***/ "./src/main/webapp/app/shared/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\"> <h4 class=\"modal-title\" jhiTranslate=\"login.title\">Sign in</h4> <button aria-label=\"Close\" data-dismiss=\"modal\" class=\"close\" type=\"button\" (click)=\"activeModal.dismiss('closed')\"><span aria-hidden=\"true\">x</span> </button> </div> <div class=\"modal-body\"> <div class=\"row\"> <div class=\"col-md-4 offset-md-4\"> <h1 jhiTranslate=\"login.title\">Sign in</h1> </div> <div class=\"col-md-8 offset-md-2\"> <div class=\"alert alert-danger\" *ngIf=\"authenticationError\" jhiTranslate=\"login.messages.error.authentication\"> <strong>Failed to sign in!</strong> Please check your credentials and try again. </div> </div> <div class=\"col-md-6\"> <form class=\"form\" role=\"form\" (ngSubmit)=\"login()\"> <div class=\"form-group\"> <label for=\"username\" jhiTranslate=\"global.form.username\">Login</label> <input type=\"text\" class=\"form-control\" name=\"username\" id=\"username\" placeholder=\"{{'global.form.username.placeholder' | translate}}\" [(ngModel)]=\"username\"> </div> <div class=\"form-group\"> <label for=\"password\" jhiTranslate=\"login.form.password\">Password</label> <input type=\"password\" class=\"form-control\" name=\"password\" id=\"password\" placeholder=\"{{'login.form.password.placeholder' | translate}}\" [(ngModel)]=\"password\"> </div> <div class=\"form-check\"> <label class=\"form-check-label\" for=\"rememberMe\"> <input class=\"form-check-input\" type=\"checkbox\" name=\"rememberMe\" id=\"rememberMe\" [(ngModel)]=\"rememberMe\" checked=\"checked\"> <span jhiTranslate=\"login.form.rememberme\">Remember me</span> </label> </div> <button type=\"submit\" class=\"btn btn-primary\" jhiTranslate=\"login.form.button\">Sign in</button> </form> <p></p> <div class=\"alert alert-warning\"> <a class=\"alert-link\" (click)=\"requestResetPassword()\" jhiTranslate=\"login.password.forgot\">Did you forget your password?</a> </div> <div class=\"alert alert-warning\"> <span jhiTranslate=\"global.messages.info.register.noaccount\">You don't have an account yet?</span> <a class=\"alert-link\" (click)=\"register()\" jhiTranslate=\"global.messages.info.register.link\">Register a new account</a> </div> </div> <div class=\"col-md-6\"> <br/> <jhi-social provider=\"google\"></jhi-social> <jhi-social provider=\"facebook\"></jhi-social> <jhi-social provider=\"twitter\"></jhi-social> </div> </div> </div> ";

/***/ }),

/***/ "./src/main/webapp/app/shared/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_bootstrap_1 = __webpack_require__(7);
var router_1 = __webpack_require__(5);
var ng_jhipster_1 = __webpack_require__(1);
var login_service_1 = __webpack_require__("./src/main/webapp/app/shared/login/login.service.ts");
var state_storage_service_1 = __webpack_require__("./src/main/webapp/app/shared/auth/state-storage.service.ts");
var social_service_1 = __webpack_require__("./src/main/webapp/app/shared/social/social.service.ts");
var JhiLoginModalComponent = (function () {
    function JhiLoginModalComponent(eventManager, languageService, loginService, stateStorageService, elementRef, renderer, socialService, router, activeModal) {
        this.eventManager = eventManager;
        this.languageService = languageService;
        this.loginService = loginService;
        this.stateStorageService = stateStorageService;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.socialService = socialService;
        this.router = router;
        this.activeModal = activeModal;
        this.credentials = {};
    }
    JhiLoginModalComponent.prototype.ngOnInit = function () {
        this.languageService.addLocation('login');
    };
    JhiLoginModalComponent.prototype.ngAfterViewInit = function () {
        this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('#username'), 'focus', []);
    };
    JhiLoginModalComponent.prototype.cancel = function () {
        this.credentials = {
            username: null,
            password: null,
            rememberMe: true
        };
        this.authenticationError = false;
        this.activeModal.dismiss('cancel');
    };
    JhiLoginModalComponent.prototype.login = function () {
        var _this = this;
        this.loginService.login({
            username: this.username,
            password: this.password,
            rememberMe: this.rememberMe
        }).then(function () {
            _this.authenticationError = false;
            _this.activeModal.dismiss('login success');
            if (_this.router.url === '/register' || (/activate/.test(_this.router.url)) ||
                _this.router.url === '/finishReset' || _this.router.url === '/requestReset') {
                _this.router.navigate(['']);
            }
            _this.eventManager.broadcast({
                name: 'authenticationSuccess',
                content: 'Sending Authentication Success'
            });
            // // previousState was set in the authExpiredInterceptor before being redirected to login modal.
            // // since login is successful, go to stored previousState and clear previousState
            var previousState = _this.stateStorageService.getPreviousState();
            if (previousState) {
                _this.stateStorageService.resetPreviousState();
                _this.router.navigate([previousState.name], { queryParams: previousState.params });
            }
        }).catch(function () {
            _this.authenticationError = true;
        });
    };
    JhiLoginModalComponent.prototype.register = function () {
        this.activeModal.dismiss('to state register');
        this.router.navigate(['/register']);
    };
    JhiLoginModalComponent.prototype.requestResetPassword = function () {
        this.activeModal.dismiss('to state requestReset');
        this.router.navigate(['/reset', 'request']);
    };
    return JhiLoginModalComponent;
}());
JhiLoginModalComponent = __decorate([
    core_1.Component({
        selector: 'jhi-login-modal',
        template: __webpack_require__("./src/main/webapp/app/shared/login/login.component.html")
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.EventManager,
        ng_jhipster_1.JhiLanguageService,
        login_service_1.LoginService,
        state_storage_service_1.StateStorageService,
        core_1.ElementRef,
        core_1.Renderer,
        social_service_1.SocialService,
        router_1.Router,
        ng_bootstrap_1.NgbActiveModal])
], JhiLoginModalComponent);
exports.JhiLoginModalComponent = JhiLoginModalComponent;


/***/ }),

/***/ "./src/main/webapp/app/shared/login/login.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var ng_jhipster_1 = __webpack_require__(1);
var principal_service_1 = __webpack_require__("./src/main/webapp/app/shared/auth/principal.service.ts");
var auth_jwt_service_1 = __webpack_require__("./src/main/webapp/app/shared/auth/auth-jwt.service.ts");
var LoginService = (function () {
    function LoginService(languageService, principal, authServerProvider) {
        this.languageService = languageService;
        this.principal = principal;
        this.authServerProvider = authServerProvider;
    }
    LoginService.prototype.login = function (credentials, callback) {
        var _this = this;
        var cb = callback || function () { };
        return new Promise(function (resolve, reject) {
            _this.authServerProvider.login(credentials).subscribe(function (data) {
                _this.principal.identity(true).then(function (account) {
                    // After the login the language will be changed to
                    // the language selected by the user during his registration
                    if (account !== null) {
                        _this.languageService.changeLanguage(account.langKey);
                    }
                    resolve(data);
                });
                return cb();
            }, function (err) {
                _this.logout();
                reject(err);
                return cb(err);
            });
        });
    };
    LoginService.prototype.loginWithToken = function (jwt, rememberMe) {
        return this.authServerProvider.loginWithToken(jwt, rememberMe);
    };
    LoginService.prototype.logout = function () {
        this.authServerProvider.logout().subscribe();
        this.principal.authenticate(null);
    };
    return LoginService;
}());
LoginService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        principal_service_1.Principal,
        auth_jwt_service_1.AuthServerProvider])
], LoginService);
exports.LoginService = LoginService;


/***/ }),

/***/ "./src/main/webapp/app/shared/shared-common.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var platform_browser_1 = __webpack_require__(12);
var ng2_translate_1 = __webpack_require__(9);
var ng_jhipster_1 = __webpack_require__(1);
var _1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
function alertServiceProvider(sanitizer, translateService) {
    // set below to true to make alerts look like toast
    var isToast = false;
    return new ng_jhipster_1.AlertService(sanitizer, isToast, translateService);
}
exports.alertServiceProvider = alertServiceProvider;
var SpringBootAngularSharedCommonModule = (function () {
    function SpringBootAngularSharedCommonModule() {
    }
    return SpringBootAngularSharedCommonModule;
}());
SpringBootAngularSharedCommonModule = __decorate([
    core_1.NgModule({
        imports: [
            _1.SpringBootAngularSharedLibsModule
        ],
        declarations: [
            _1.FindLanguageFromKeyPipe,
            _1.JhiAlertComponent,
            _1.JhiAlertErrorComponent
        ],
        providers: [
            _1.JhiLanguageHelper,
            {
                provide: ng_jhipster_1.AlertService,
                useFactory: alertServiceProvider,
                deps: [core_1.Sanitizer, ng2_translate_1.TranslateService]
            },
            platform_browser_1.Title
        ],
        exports: [
            _1.SpringBootAngularSharedLibsModule,
            _1.FindLanguageFromKeyPipe,
            _1.JhiAlertComponent,
            _1.JhiAlertErrorComponent
        ]
    })
], SpringBootAngularSharedCommonModule);
exports.SpringBootAngularSharedCommonModule = SpringBootAngularSharedCommonModule;


/***/ }),

/***/ "./src/main/webapp/app/shared/shared-libs.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(16);
var http_1 = __webpack_require__(6);
var common_1 = __webpack_require__(13);
var ng_bootstrap_1 = __webpack_require__(7);
var ng_jhipster_1 = __webpack_require__(1);
var angular2_infinite_scroll_1 = __webpack_require__(18);
var SpringBootAngularSharedLibsModule = (function () {
    function SpringBootAngularSharedLibsModule() {
    }
    return SpringBootAngularSharedLibsModule;
}());
SpringBootAngularSharedLibsModule = __decorate([
    core_1.NgModule({
        imports: [
            ng_bootstrap_1.NgbModule.forRoot(),
            ng_jhipster_1.NgJhipsterModule.forRoot({
                i18nEnabled: true,
                defaultI18nLang: 'fr'
            }),
            angular2_infinite_scroll_1.InfiniteScrollModule
        ],
        exports: [
            forms_1.FormsModule,
            http_1.HttpModule,
            common_1.CommonModule,
            ng_bootstrap_1.NgbModule,
            ng_jhipster_1.NgJhipsterModule,
            angular2_infinite_scroll_1.InfiniteScrollModule
        ]
    })
], SpringBootAngularSharedLibsModule);
exports.SpringBootAngularSharedLibsModule = SpringBootAngularSharedLibsModule;


/***/ }),

/***/ "./src/main/webapp/app/shared/shared.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(13);
var cookies_service_1 = __webpack_require__(20);
var _1 = __webpack_require__("./src/main/webapp/app/shared/index.ts");
var SpringBootAngularSharedModule = (function () {
    function SpringBootAngularSharedModule() {
    }
    return SpringBootAngularSharedModule;
}());
SpringBootAngularSharedModule = __decorate([
    core_1.NgModule({
        imports: [
            _1.SpringBootAngularSharedLibsModule,
            _1.SpringBootAngularSharedCommonModule
        ],
        declarations: [
            _1.JhiSocialComponent,
            _1.JhiLoginModalComponent,
            _1.HasAnyAuthorityDirective
        ],
        providers: [
            cookies_service_1.CookieService,
            _1.LoginService,
            _1.LoginModalService,
            _1.AccountService,
            _1.StateStorageService,
            _1.Principal,
            _1.CSRFService,
            _1.AuthServerProvider,
            _1.SocialService,
            _1.AuthService,
            _1.UserService,
            common_1.DatePipe
        ],
        entryComponents: [_1.JhiLoginModalComponent],
        exports: [
            _1.SpringBootAngularSharedCommonModule,
            _1.JhiSocialComponent,
            _1.JhiLoginModalComponent,
            _1.HasAnyAuthorityDirective,
            common_1.DatePipe
        ],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], SpringBootAngularSharedModule);
exports.SpringBootAngularSharedModule = SpringBootAngularSharedModule;


/***/ }),

/***/ "./src/main/webapp/app/shared/social/social.component.html":
/***/ (function(module, exports) {

module.exports = "<form ngNoForm action=\"{{ providerURL }}\" method=\"POST\"> <button type=\"submit\" class=\"btn btn-block jh-btn-social jh-btn-{{ provider }}\"> <span jhiTranslate=\"social.btnLabel\" translateValues=\"{ label: '{{label}}' }\">Sign in with {{ label }}</span> </button> <input name=\"scope\" type=\"hidden\" value=\"{{ providerSetting }}\"/> <input name=\"_csrf\" type=\"hidden\" value=\"{{ csrf }}\"/> </form> ";

/***/ }),

/***/ "./src/main/webapp/app/shared/social/social.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var social_service_1 = __webpack_require__("./src/main/webapp/app/shared/social/social.service.ts");
var csrf_service_1 = __webpack_require__("./src/main/webapp/app/shared/auth/csrf.service.ts");
var ng_jhipster_1 = __webpack_require__(1);
var JhiSocialComponent = (function () {
    function JhiSocialComponent(languageService, csrfService, socialService) {
        this.languageService = languageService;
        this.csrfService = csrfService;
        this.socialService = socialService;
    }
    JhiSocialComponent.prototype.ngOnInit = function () {
        this.languageService.setLocations(['social', 'register', 'login', 'home']);
        this.label = this.provider.charAt(0).toUpperCase() + this.provider.slice(1);
        this.providerSetting = this.socialService.getProviderSetting(this.provider);
        this.providerURL = this.socialService.getProviderURL(this.provider);
        this.csrf = this.csrfService.getCSRF();
    };
    return JhiSocialComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], JhiSocialComponent.prototype, "provider", void 0);
JhiSocialComponent = __decorate([
    core_1.Component({
        selector: 'jhi-social',
        template: __webpack_require__("./src/main/webapp/app/shared/social/social.component.html")
    }),
    __metadata("design:paramtypes", [ng_jhipster_1.JhiLanguageService,
        csrf_service_1.CSRFService,
        social_service_1.SocialService])
], JhiSocialComponent);
exports.JhiSocialComponent = JhiSocialComponent;


/***/ }),

/***/ "./src/main/webapp/app/shared/social/social.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var SocialService = (function () {
    function SocialService() {
    }
    SocialService.prototype.getProviderSetting = function (provider) {
        switch (provider) {
            case 'google': return 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email';
            case 'facebook': return 'public_profile,email';
            case 'twitter': return '';
            // jhipster-needle-add-social-button
            default: return 'Provider setting not defined';
        }
    };
    SocialService.prototype.getProviderURL = function (provider) {
        return 'signin/' + provider;
    };
    return SocialService;
}());
SocialService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], SocialService);
exports.SocialService = SocialService;


/***/ }),

/***/ "./src/main/webapp/app/shared/user/account.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Account = (function () {
    function Account(activated, authorities, email, firstName, langKey, lastName, login, imageUrl) {
        this.activated = activated;
        this.authorities = authorities;
        this.email = email;
        this.firstName = firstName;
        this.langKey = langKey;
        this.lastName = lastName;
        this.login = login;
        this.imageUrl = imageUrl;
    }
    return Account;
}());
exports.Account = Account;


/***/ }),

/***/ "./src/main/webapp/app/shared/user/user.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var User = (function () {
    function User(id, login, firstName, lastName, email, activated, langKey, authorities, createdBy, createdDate, lastModifiedBy, lastModifiedDate, password) {
        this.id = id ? id : null;
        this.login = login ? login : null;
        this.firstName = firstName ? firstName : null;
        this.lastName = lastName ? lastName : null;
        this.email = email ? email : null;
        this.activated = activated ? activated : false;
        this.langKey = langKey ? langKey : null;
        this.authorities = authorities ? authorities : null;
        this.createdBy = createdBy ? createdBy : null;
        this.createdDate = createdDate ? createdDate : null;
        this.lastModifiedBy = lastModifiedBy ? lastModifiedBy : null;
        this.lastModifiedDate = lastModifiedDate ? lastModifiedDate : null;
        this.password = password ? password : null;
    }
    return User;
}());
exports.User = User;


/***/ }),

/***/ "./src/main/webapp/app/shared/user/user.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(6);
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.resourceUrl = 'api/users';
    }
    UserService.prototype.create = function (user) {
        return this.http.post(this.resourceUrl, user);
    };
    UserService.prototype.update = function (user) {
        return this.http.put(this.resourceUrl, user);
    };
    UserService.prototype.find = function (login) {
        return this.http.get(this.resourceUrl + "/" + login).map(function (res) { return res.json(); });
    };
    UserService.prototype.query = function (req) {
        var params = new http_1.URLSearchParams();
        if (req) {
            params.set('page', req.page);
            params.set('size', req.size);
            if (req.sort) {
                params.paramsMap.set('sort', req.sort);
            }
        }
        var options = {
            search: params
        };
        return this.http.get(this.resourceUrl, options);
    };
    UserService.prototype.delete = function (login) {
        return this.http.delete(this.resourceUrl + "/" + login);
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;


/***/ }),

/***/ "./src/main/webapp/content/images/hipster.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ca854e6d0785ba4b9d715049c0bdbcb3.png";

/***/ }),

/***/ "./src/main/webapp/content/images/hipster2x.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1cd3a1d782e85ba37677c1a2099bc002.png";

/***/ }),

/***/ "./src/main/webapp/content/images/logo-jhipster.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a30deb26b4eb1521433021e326cbcc2c.png";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(0);

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(445);

/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(446);

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(1);

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(103);

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(13);

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(442);

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(248);

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(25);

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(439);

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(443);

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(447);

/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(563);

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(9);

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/webpack-dev-server/client/index.js?http:/localhost:9060");
__webpack_require__("./node_modules/webpack/hot/dev-server.js");
module.exports = __webpack_require__("./src/main/webapp/app/app.main.ts");


/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(440);

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(102);

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(441);

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(230);

/***/ })

},[23]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQvcGFzc3dvcmQtc3RyZW5ndGgtYmFyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9ob21lL2hvbWUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvbmF2YmFyL25hdmJhci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9wcm9maWxlcy9wYWdlLXJpYmJvbi5zY3NzIiwid2VicGFjazovLy8uL34vbmcyLXRyYW5zbGF0ZS9uZzItdHJhbnNsYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9hY2NvdW50Lm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvYWNjb3VudC5yb3V0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvYWN0aXZhdGUvYWN0aXZhdGUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L2FjdGl2YXRlL2FjdGl2YXRlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvYWN0aXZhdGUvYWN0aXZhdGUucm91dGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L2FjdGl2YXRlL2FjdGl2YXRlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC1yZXNldC9maW5pc2gvcGFzc3dvcmQtcmVzZXQtZmluaXNoLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC1yZXNldC9maW5pc2gvcGFzc3dvcmQtcmVzZXQtZmluaXNoLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQtcmVzZXQvZmluaXNoL3Bhc3N3b3JkLXJlc2V0LWZpbmlzaC5yb3V0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQtcmVzZXQvZmluaXNoL3Bhc3N3b3JkLXJlc2V0LWZpbmlzaC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC1yZXNldC9pbml0L3Bhc3N3b3JkLXJlc2V0LWluaXQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkLXJlc2V0L2luaXQvcGFzc3dvcmQtcmVzZXQtaW5pdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkLXJlc2V0L2luaXQvcGFzc3dvcmQtcmVzZXQtaW5pdC5yb3V0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQtcmVzZXQvaW5pdC9wYXNzd29yZC1yZXNldC1pbml0LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkL3Bhc3N3b3JkLXN0cmVuZ3RoLWJhci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkL3Bhc3N3b3JkLXN0cmVuZ3RoLWJhci5zY3NzP2Y5MTgiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkL3Bhc3N3b3JkLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC9wYXNzd29yZC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkL3Bhc3N3b3JkLnJvdXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC9wYXNzd29yZC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9yZWdpc3Rlci9yZWdpc3Rlci5yb3V0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcmVnaXN0ZXIvcmVnaXN0ZXIuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvc2V0dGluZ3Mvc2V0dGluZ3Mucm91dGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3NvY2lhbC9zb2NpYWwtYXV0aC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3NvY2lhbC9zb2NpYWwtcmVnaXN0ZXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3NvY2lhbC9zb2NpYWwtcmVnaXN0ZXIuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9zb2NpYWwvc29jaWFsLnJvdXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vYWRtaW4ubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vYWRtaW4ucm91dGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9hdWRpdHMvYXVkaXQtZGF0YS5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2F1ZGl0cy9hdWRpdC5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2F1ZGl0cy9hdWRpdHMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9hdWRpdHMvYXVkaXRzLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2F1ZGl0cy9hdWRpdHMucm91dGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9hdWRpdHMvYXVkaXRzLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9jb25maWd1cmF0aW9uL2NvbmZpZ3VyYXRpb24uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9jb25maWd1cmF0aW9uL2NvbmZpZ3VyYXRpb24uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vY29uZmlndXJhdGlvbi9jb25maWd1cmF0aW9uLnJvdXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vY29uZmlndXJhdGlvbi9jb25maWd1cmF0aW9uLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9kb2NzL2RvY3MuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9kb2NzL2RvY3MuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vZG9jcy9kb2NzLnJvdXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vaGVhbHRoL2hlYWx0aC1tb2RhbC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2hlYWx0aC9oZWFsdGgtbW9kYWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vaGVhbHRoL2hlYWx0aC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2hlYWx0aC9oZWFsdGguY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vaGVhbHRoL2hlYWx0aC5yb3V0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2hlYWx0aC9oZWFsdGguc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vbG9ncy9sb2cubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9sb2dzL2xvZ3MuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9sb2dzL2xvZ3MuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vbG9ncy9sb2dzLnJvdXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vbG9ncy9sb2dzLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9tZXRyaWNzL21ldHJpY3MtbW9kYWwuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9tZXRyaWNzL21ldHJpY3MtbW9kYWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vbWV0cmljcy9tZXRyaWNzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vbWV0cmljcy9tZXRyaWNzLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL21ldHJpY3MvbWV0cmljcy5yb3V0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL21ldHJpY3MvbWV0cmljcy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC1kZWxldGUtZGlhbG9nLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC1kZWxldGUtZGlhbG9nLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQtZGV0YWlsLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC1kZXRhaWwuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC1kaWFsb2cuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LWRpYWxvZy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LnJvdXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vdXNlci1tYW5hZ2VtZW50L3VzZXItbW9kYWwuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FwcC5jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hcHAubWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FwcC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9hcHAucm91dGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9ibG9ja3MvY29uZmlnL3Byb2QuY29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYmxvY2tzL2NvbmZpZy91aWItcGFnaW5hdGlvbi5jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9ibG9ja3MvaW50ZXJjZXB0b3IvYXV0aC1leHBpcmVkLmludGVyY2VwdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYmxvY2tzL2ludGVyY2VwdG9yL2F1dGguaW50ZXJjZXB0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9ibG9ja3MvaW50ZXJjZXB0b3IvZXJyb3JoYW5kbGVyLmludGVyY2VwdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvYmxvY2tzL2ludGVyY2VwdG9yL2h0dHAucHJvdmlkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9ibG9ja3MvaW50ZXJjZXB0b3Ivbm90aWZpY2F0aW9uLmludGVyY2VwdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvZW50aXR5Lm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9ob21lL2hvbWUubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvaG9tZS9ob21lLnJvdXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvaG9tZS9ob21lLnNjc3M/NDYzMyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2hvbWUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9lcnJvci9lcnJvci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL2Vycm9yL2Vycm9yLnJvdXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL2xheW91dC1yb3V0aW5nLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvbWFpbi9tYWluLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9tYWluL21haW4uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9uYXZiYXIvYWN0aXZlLW1lbnUuZGlyZWN0aXZlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvbmF2YmFyL25hdmJhci5zY3NzP2M3ZDkiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL3Byb2ZpbGVzL3BhZ2UtcmliYm9uLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvcHJvZmlsZXMvcGFnZS1yaWJib24uc2Nzcz9kMDYyIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9wcm9maWxlcy9wcm9maWxlLWluZm8ubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL3Byb2ZpbGVzL3Byb2ZpbGUuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9hbGVydC9hbGVydC1lcnJvci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvYWxlcnQvYWxlcnQuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2F1dGgvYWNjb3VudC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2F1dGgvYXV0aC1qd3Quc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9hdXRoL2F1dGguc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9hdXRoL2NzcmYuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9hdXRoL2hhcy1hbnktYXV0aG9yaXR5LmRpcmVjdGl2ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9hdXRoL3ByaW5jaXBhbC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2F1dGgvc3RhdGUtc3RvcmFnZS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2F1dGgvdXNlci1yb3V0ZS1hY2Nlc3Mtc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9jb25zdGFudHMvcGFnaW5hdGlvbi5jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvbGFuZ3VhZ2UvbGFuZ3VhZ2UuY29uc3RhbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2xhbmd1YWdlL2xhbmd1YWdlLmhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9sYW5ndWFnZS9sYW5ndWFnZS5waXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2xvZ2luL2xvZ2luLW1vZGFsLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvbG9naW4vbG9naW4uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2xvZ2luL2xvZ2luLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvc2hhcmVkLWNvbW1vbi5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvc2hhcmVkLWxpYnMubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL3NoYXJlZC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvc29jaWFsL3NvY2lhbC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9zb2NpYWwvc29jaWFsLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9zb2NpYWwvc29jaWFsLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvdXNlci9hY2NvdW50Lm1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL3VzZXIvdXNlci5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC91c2VyL3VzZXIuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvY29udGVudC9pbWFnZXMvaGlwc3Rlci5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2NvbnRlbnQvaW1hZ2VzL2hpcHN0ZXIyeC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vd2ViYXBwL2NvbnRlbnQvaW1hZ2VzL2xvZ28tamhpcHN0ZXIucG5nIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvY29yZS9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvbmctamhpcHN0ZXIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL25nMi13ZWJzdG9yYWdlL2Rpc3QvYXBwLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yeGpzL09ic2VydmFibGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2NvbW1vbi9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItY29va2llL2NvcmUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvUnguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2Zvcm1zL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLWluZmluaXRlLXNjcm9sbC9hbmd1bGFyMi1pbmZpbml0ZS1zY3JvbGwuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vc3JjL21haW4vd2ViYXBwL2FwcC92ZW5kb3IudHMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLWNvb2tpZS9zZXJ2aWNlcy9jb29raWVzLnNlcnZpY2UuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3J4anMvU3ViamVjdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvcm91dGVyL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9odHRwL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcC9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvbmcyLXRyYW5zbGF0ZS9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTs7O0FBR0E7QUFDQSx1T0FBd08sb0JBQW9CLHFCQUFxQixjQUFjLHNCQUFzQixlQUFlLHdCQUF3QixFQUFFLFlBQVkscUJBQXFCLHVCQUF1QiwwQkFBMEIsZ0JBQWdCLHNCQUFzQixnQkFBZ0IsRUFBRSxpQkFBaUIsMkJBQTJCLEVBQUU7O0FBRXRoQjs7Ozs7Ozs7QUNQQTtBQUNBOzs7QUFHQTtBQUNBLG1OQUFvTiwwQkFBMEIsaUJBQWlCLGtCQUFrQixzSEFBOEYsNkJBQTZCLEVBQUUsbVlBQW1ZLGNBQWMsMEhBQWtHLCtCQUErQixFQUFFLEVBQUU7O0FBRXA2Qjs7Ozs7Ozs7QUNQQTtBQUNBOzs7QUFHQTtBQUNBLGdOQUFpTixvQkFBb0IsZ0JBQWdCLEVBQUUsZ0JBQWdCLDhCQUE4QixzQkFBc0IsRUFBRSwrQkFBK0Isd0JBQXdCLG1CQUFtQixrQkFBa0IseUJBQXlCLEVBQUUsc0hBQXNILGdDQUFnQyxFQUFFLHdDQUF3QywwQkFBMEIsRUFBRSw4QkFBOEIscUJBQXFCLEVBQUUsMENBQTBDLDRCQUE0QixFQUFFLDJCQUEyQix1QkFBdUIsRUFBRSxtQ0FBbUMsa0JBQWtCLHVCQUF1QixvQkFBb0IsRUFBRSwyQ0FBMkMsb0JBQW9CLEVBQUUsMENBQTBDLHdCQUF3QixrQkFBa0IsRUFBRSxFQUFF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Ozs7QUNBQSwrQzs7Ozs7OztBQ0FBLCtDOzs7Ozs7O0FDQUEsOEM7Ozs7Ozs7QUNBQSwrQzs7Ozs7OztBQ0FBLCtDOzs7Ozs7O0FDQUEsK0M7Ozs7Ozs7QUNBQSwrQzs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7O0FDQUEsK0M7Ozs7Ozs7QUNBQSwrQzs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5zdGFydCBQYXNzd29yZCBzdHJlbmd0aCBiYXIgc3R5bGVcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbnVsI3N0cmVuZ3RoIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBtYXJnaW4tbGVmdDogMTVweDtcXG4gIHBhZGRpbmc6IDA7XFxuICB2ZXJ0aWNhbC1hbGlnbjogMnB4OyB9XFxuXFxuLnBvaW50IHtcXG4gIGJhY2tncm91bmQ6ICNEREQ7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBoZWlnaHQ6IDVweDtcXG4gIG1hcmdpbi1yaWdodDogMXB4O1xcbiAgd2lkdGg6IDIwcHg7IH1cXG4gIC5wb2ludDpsYXN0IHtcXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC9wYXNzd29yZC1zdHJlbmd0aC1iYXIuc2Nzc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkL3Bhc3N3b3JkLXN0cmVuZ3RoLWJhci5zY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuTWFpbiBwYWdlIHN0eWxlc1xcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLmhpcHN0ZXIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDM0N3B4O1xcbiAgaGVpZ2h0OiA0OTdweDtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIHJlcXVpcmUoXCIuLi8uLi9jb250ZW50L2ltYWdlcy9oaXBzdGVyLnBuZ1wiKSArIFwiKSBuby1yZXBlYXQgY2VudGVyIHRvcDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjsgfVxcblxcbi8qIHdhaXQgYXV0b3ByZWZpeGVyIHVwZGF0ZSB0byBhbGxvdyBzaW1wbGUgZ2VuZXJhdGlvbiBvZiBoaWdoIHBpeGVsIGRlbnNpdHkgbWVkaWEgcXVlcnkgKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLCBvbmx5IHNjcmVlbiBhbmQgKG1pbi0tbW96LWRldmljZS1waXhlbC1yYXRpbzogMiksIG9ubHkgc2NyZWVuIGFuZCAoLW8tbWluLWRldmljZS1waXhlbC1yYXRpbzogMiAvIDEpLCBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLCBvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAxOTJkcGkpLCBvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAyZHBweCkge1xcbiAgLmhpcHN0ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyByZXF1aXJlKFwiLi4vLi4vY29udGVudC9pbWFnZXMvaGlwc3RlcjJ4LnBuZ1wiKSArIFwiKSBuby1yZXBlYXQgY2VudGVyIHRvcDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluOyB9IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3NyYy9tYWluL3dlYmFwcC9hcHAvaG9tZS9ob21lLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3NyYy9tYWluL3dlYmFwcC9hcHAvaG9tZS9ob21lLnNjc3Ncbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5OYXZiYXJcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi5uYXZiYXItdmVyc2lvbiB7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICBjb2xvcjogI2NjYzsgfVxcblxcbi5qaC1uYXZiYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1M2Q0NztcXG4gIHBhZGRpbmc6IC4yZW0gMWVtOyB9XFxuICAuamgtbmF2YmFyIC5wcm9maWxlLWltYWdlIHtcXG4gICAgbWFyZ2luOiAtMTBweCAwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgfVxcbiAgLmpoLW5hdmJhciAuZHJvcGRvd24taXRlbS5hY3RpdmUsIC5qaC1uYXZiYXIgLmRyb3Bkb3duLWl0ZW0uYWN0aXZlOmZvY3VzLCAuamgtbmF2YmFyIC5kcm9wZG93bi1pdGVtLmFjdGl2ZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTNkNDc7IH1cXG4gIC5qaC1uYXZiYXIgLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xcbiAgICBtYXJnaW4tbGVmdDogMC4xNWVtOyB9XFxuICAuamgtbmF2YmFyIHVsLm5hdmJhci1uYXYge1xcbiAgICBwYWRkaW5nOiAwLjVlbTsgfVxcbiAgICAuamgtbmF2YmFyIHVsLm5hdmJhci1uYXYgLm5hdi1pdGVtIHtcXG4gICAgICBtYXJnaW4tbGVmdDogMS41cmVtOyB9XFxuICAuamgtbmF2YmFyIGEubmF2LWxpbmsge1xcbiAgICBmb250LXdlaWdodDogNDAwOyB9XFxuICAuamgtbmF2YmFyIC5qaC1uYXZiYXItdG9nZ2xlciB7XFxuICAgIGNvbG9yOiAjY2NjO1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICBwYWRkaW5nOiAxMHB4OyB9XFxuICAgIC5qaC1uYXZiYXIgLmpoLW5hdmJhci10b2dnbGVyOmhvdmVyIHtcXG4gICAgICBjb2xvcjogI2ZmZjsgfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XFxuICAuamgtbG9nby1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTsgfSB9XFxuXFxuLm5hdmJhci10aXRsZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XFxuXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5Mb2dvIHN0eWxlc1xcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLm5hdmJhci1icmFuZC5sb2dvIHtcXG4gIHBhZGRpbmc6IDVweCAxNXB4OyB9XFxuICAubmF2YmFyLWJyYW5kLmxvZ28gLmxvZ28taW1nIHtcXG4gICAgaGVpZ2h0OiA0NXB4O1xcbiAgICB3aWR0aDogNzBweDtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyByZXF1aXJlKFwiLi4vLi4vLi4vY29udGVudC9pbWFnZXMvbG9nby1qaGlwc3Rlci5wbmdcIikgKyBcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL25hdmJhci9uYXZiYXIuc2Nzc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL25hdmJhci9uYXZiYXIuc2Nzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbkRldmVsb3BlbWVudCBSaWJib25cXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi5yaWJib24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzAsIDAsIDAsIDAuNSk7XFxuICBsZWZ0OiAtMy41ZW07XFxuICBtb3otdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gIG1zLXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICBvLXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICB3ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA0MHB4O1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHdpZHRoOiAxNWVtO1xcbiAgei1pbmRleDogOTk5OTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgb3BhY2l0eTogMC43NTsgfVxcbiAgLnJpYmJvbiBhIHtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBtYXJnaW46IDFweCAwO1xcbiAgICBwYWRkaW5nOiAxMHB4IDUwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCAjNDQ0O1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL3Byb2ZpbGVzL3BhZ2UtcmliYm9uLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9wcm9maWxlcy9wYWdlLXJpYmJvbi5zY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCAqIGZyb20gJy4vaW5kZXgnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L25nMi10cmFuc2xhdGUvbmcyLXRyYW5zbGF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvbmcyLXRyYW5zbGF0ZS9uZzItdHJhbnNsYXRlLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IE5nTW9kdWxlLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBTcHJpbmdCb290QW5ndWxhclNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZCc7XG5cbmltcG9ydCB7XG4gICAgUmVnaXN0ZXIsXG4gICAgQWN0aXZhdGUsXG4gICAgUGFzc3dvcmQsXG4gICAgUGFzc3dvcmRSZXNldEluaXQsXG4gICAgUGFzc3dvcmRSZXNldEZpbmlzaCxcbiAgICBQYXNzd29yZFN0cmVuZ3RoQmFyQ29tcG9uZW50LFxuICAgIFJlZ2lzdGVyQ29tcG9uZW50LFxuICAgIEFjdGl2YXRlQ29tcG9uZW50LFxuICAgIFBhc3N3b3JkQ29tcG9uZW50LFxuICAgIFBhc3N3b3JkUmVzZXRJbml0Q29tcG9uZW50LFxuICAgIFBhc3N3b3JkUmVzZXRGaW5pc2hDb21wb25lbnQsXG4gICAgU2V0dGluZ3NDb21wb25lbnQsXG4gICAgU29jaWFsUmVnaXN0ZXJDb21wb25lbnQsXG4gICAgU29jaWFsQXV0aENvbXBvbmVudCxcbiAgICBhY2NvdW50U3RhdGVcbn0gZnJvbSAnLi8nO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgU3ByaW5nQm9vdEFuZ3VsYXJTaGFyZWRNb2R1bGUsXG4gICAgICAgIFJvdXRlck1vZHVsZS5mb3JSb290KGFjY291bnRTdGF0ZSwgeyB1c2VIYXNoOiB0cnVlIH0pXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU29jaWFsUmVnaXN0ZXJDb21wb25lbnQsXG4gICAgICAgIFNvY2lhbEF1dGhDb21wb25lbnQsXG4gICAgICAgIEFjdGl2YXRlQ29tcG9uZW50LFxuICAgICAgICBSZWdpc3RlckNvbXBvbmVudCxcbiAgICAgICAgUGFzc3dvcmRDb21wb25lbnQsXG4gICAgICAgIFBhc3N3b3JkU3RyZW5ndGhCYXJDb21wb25lbnQsXG4gICAgICAgIFBhc3N3b3JkUmVzZXRJbml0Q29tcG9uZW50LFxuICAgICAgICBQYXNzd29yZFJlc2V0RmluaXNoQ29tcG9uZW50LFxuICAgICAgICBTZXR0aW5nc0NvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFJlZ2lzdGVyLFxuICAgICAgICBBY3RpdmF0ZSxcbiAgICAgICAgUGFzc3dvcmQsXG4gICAgICAgIFBhc3N3b3JkUmVzZXRJbml0LFxuICAgICAgICBQYXNzd29yZFJlc2V0RmluaXNoXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgU3ByaW5nQm9vdEFuZ3VsYXJBY2NvdW50TW9kdWxlIHt9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvYWNjb3VudC5tb2R1bGUudHMiLCJpbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQge1xuICAgIGFjdGl2YXRlUm91dGUsXG4gICAgcGFzc3dvcmRSb3V0ZSxcbiAgICBwYXNzd29yZFJlc2V0RmluaXNoUm91dGUsXG4gICAgcGFzc3dvcmRSZXNldEluaXRSb3V0ZSxcbiAgICByZWdpc3RlclJvdXRlLFxuICAgIHNvY2lhbFJlZ2lzdGVyUm91dGUsXG4gICAgc29jaWFsQXV0aFJvdXRlLFxuICAgIHNldHRpbmdzUm91dGVcbn0gZnJvbSAnLi8nO1xuXG5sZXQgQUNDT1VOVF9ST1VURVMgPSBbXG4gICBhY3RpdmF0ZVJvdXRlLFxuICAgcGFzc3dvcmRSb3V0ZSxcbiAgIHBhc3N3b3JkUmVzZXRGaW5pc2hSb3V0ZSxcbiAgIHBhc3N3b3JkUmVzZXRJbml0Um91dGUsXG4gICByZWdpc3RlclJvdXRlLFxuICAgIHNvY2lhbEF1dGhSb3V0ZSxcbiAgIHNvY2lhbFJlZ2lzdGVyUm91dGUsXG4gICBzZXR0aW5nc1JvdXRlXG5dO1xuXG5leHBvcnQgY29uc3QgYWNjb3VudFN0YXRlOiBSb3V0ZXMgPSBbe1xuICAgIHBhdGg6ICcnLFxuICAgIGNoaWxkcmVuOiBBQ0NPVU5UX1JPVVRFU1xufV07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvYWNjb3VudC5yb3V0ZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PiA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtOCBvZmZzZXQtbWQtMlxcXCI+IDxoMSBqaGlUcmFuc2xhdGU9XFxcImFjdGl2YXRlLnRpdGxlXFxcIj5BY3RpdmF0aW9uPC9oMT4gPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtc3VjY2Vzc1xcXCIgKm5nSWY9XFxcInN1Y2Nlc3NcXFwiPiA8c3BhbiBqaGlUcmFuc2xhdGU9XFxcImFjdGl2YXRlLm1lc3NhZ2VzLnN1Y2Nlc3NcXFwiPiA8c3Ryb25nPllvdXIgdXNlciBoYXMgYmVlbiBhY3RpdmF0ZWQuPC9zdHJvbmc+IFBsZWFzZSA8YSBjbGFzcz1cXFwiYWxlcnQtbGlua1xcXCIgKGNsaWNrKT1cXFwibG9naW4oKVxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMuaW5mby5hdXRoZW50aWNhdGVkLmxpbmtcXFwiPnNpZ24gaW48L2E+LiA8L3NwYW4+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJlcnJvclxcXCIgamhpVHJhbnNsYXRlPVxcXCJhY3RpdmF0ZS5tZXNzYWdlcy5lcnJvclxcXCI+IDxzdHJvbmc+WW91ciB1c2VyIGNvdWxkIG5vdCBiZSBhY3RpdmF0ZWQuPC9zdHJvbmc+IFBsZWFzZSB1c2UgdGhlIHJlZ2lzdHJhdGlvbiBmb3JtIHRvIHNpZ24gdXAuIDwvZGl2PiA8L2Rpdj4gPC9kaXY+IDwvZGl2PiBcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9hY3RpdmF0ZS9hY3RpdmF0ZS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvYWN0aXZhdGUvYWN0aXZhdGUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nYk1vZGFsUmVmIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSmhpTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnbmctamhpcHN0ZXInO1xuXG5pbXBvcnQgeyBBY3RpdmF0ZSB9IGZyb20gJy4vYWN0aXZhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBMb2dpbk1vZGFsU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLWFjdGl2YXRlJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYWN0aXZhdGUuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEFjdGl2YXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBlcnJvcjogc3RyaW5nO1xuICAgIHN1Y2Nlc3M6IHN0cmluZztcbiAgICBtb2RhbFJlZjogTmdiTW9kYWxSZWY7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBqaGlMYW5ndWFnZVNlcnZpY2U6IEpoaUxhbmd1YWdlU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBhY3RpdmF0ZTogQWN0aXZhdGUsXG4gICAgICAgIHByaXZhdGUgbG9naW5Nb2RhbFNlcnZpY2U6IExvZ2luTW9kYWxTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxuICAgICkge1xuICAgICAgICB0aGlzLmpoaUxhbmd1YWdlU2VydmljZS5zZXRMb2NhdGlvbnMoWydhY3RpdmF0ZSddKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCAoKSB7XG4gICAgICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2YXRlLmdldChwYXJhbXNbJ2tleSddKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuc3VjY2VzcyA9ICdPSyc7XG4gICAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWNjZXNzID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gJ0VSUk9SJztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsb2dpbigpIHtcbiAgICAgICAgdGhpcy5tb2RhbFJlZiA9IHRoaXMubG9naW5Nb2RhbFNlcnZpY2Uub3BlbigpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9hY3RpdmF0ZS9hY3RpdmF0ZS5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFVzZXJSb3V0ZUFjY2Vzc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQnO1xuaW1wb3J0IHsgQWN0aXZhdGVDb21wb25lbnQgfSBmcm9tICcuL2FjdGl2YXRlLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBhY3RpdmF0ZVJvdXRlOiBSb3V0ZSA9IHtcbiAgcGF0aDogJ2FjdGl2YXRlJyxcbiAgY29tcG9uZW50OiBBY3RpdmF0ZUNvbXBvbmVudCxcbiAgZGF0YToge1xuICAgIGF1dGhvcml0aWVzOiBbXSxcbiAgICBwYWdlVGl0bGU6ICdhY3RpdmF0ZS50aXRsZSdcbiAgfSxcbiAgY2FuQWN0aXZhdGU6IFtVc2VyUm91dGVBY2Nlc3NTZXJ2aWNlXVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9hY3RpdmF0ZS9hY3RpdmF0ZS5yb3V0ZS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlLCBVUkxTZWFyY2hQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFjdGl2YXRlIHtcblxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIGh0dHA6IEh0dHApIHt9XG5cbiAgICBnZXQoa2V5OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICBsZXQgcGFyYW1zOiBVUkxTZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG4gICAgICAgIHBhcmFtcy5zZXQoJ2tleScsIGtleSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2FwaS9hY3RpdmF0ZScsIHtcbiAgICAgICAgICAgIHNlYXJjaDogcGFyYW1zXG4gICAgICAgIH0pLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvYWN0aXZhdGUvYWN0aXZhdGUuc2VydmljZS50cyIsImV4cG9ydCAqIGZyb20gJy4vYWN0aXZhdGUvYWN0aXZhdGUuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vYWN0aXZhdGUvYWN0aXZhdGUuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2FjdGl2YXRlL2FjdGl2YXRlLnJvdXRlJztcbmV4cG9ydCAqIGZyb20gJy4vcGFzc3dvcmQvcGFzc3dvcmQuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vcGFzc3dvcmQvcGFzc3dvcmQtc3RyZW5ndGgtYmFyLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL3Bhc3N3b3JkL3Bhc3N3b3JkLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9wYXNzd29yZC9wYXNzd29yZC5yb3V0ZSc7XG5leHBvcnQgKiBmcm9tICcuL3Bhc3N3b3JkLXJlc2V0L2ZpbmlzaC9wYXNzd29yZC1yZXNldC1maW5pc2guY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vcGFzc3dvcmQtcmVzZXQvZmluaXNoL3Bhc3N3b3JkLXJlc2V0LWZpbmlzaC5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vcGFzc3dvcmQtcmVzZXQvZmluaXNoL3Bhc3N3b3JkLXJlc2V0LWZpbmlzaC5yb3V0ZSc7XG5leHBvcnQgKiBmcm9tICcuL3Bhc3N3b3JkLXJlc2V0L2luaXQvcGFzc3dvcmQtcmVzZXQtaW5pdC5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9wYXNzd29yZC1yZXNldC9pbml0L3Bhc3N3b3JkLXJlc2V0LWluaXQuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3Bhc3N3b3JkLXJlc2V0L2luaXQvcGFzc3dvcmQtcmVzZXQtaW5pdC5yb3V0ZSc7XG5leHBvcnQgKiBmcm9tICcuL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL3JlZ2lzdGVyL3JlZ2lzdGVyLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9yZWdpc3Rlci9yZWdpc3Rlci5yb3V0ZSc7XG5leHBvcnQgKiBmcm9tICcuL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL3NldHRpbmdzL3NldHRpbmdzLnJvdXRlJztcbmV4cG9ydCAqIGZyb20gJy4vc29jaWFsL3NvY2lhbC1hdXRoLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL3NvY2lhbC9zb2NpYWwtcmVnaXN0ZXIuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vc29jaWFsL3NvY2lhbC5yb3V0ZSc7XG5leHBvcnQgKiBmcm9tICcuL2FjY291bnQucm91dGUnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L2luZGV4LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXY+IDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC00IGNvbC1tZC1vZmZzZXQtNFxcXCI+IDxoMSBqaGlUcmFuc2xhdGU9XFxcInJlc2V0LmZpbmlzaC50aXRsZVxcXCI+UmVzZXQgcGFzc3dvcmQ8L2gxPiA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiIGpoaVRyYW5zbGF0ZT1cXFwicmVzZXQuZmluaXNoLm1lc3NhZ2VzLmtleW1pc3NpbmdcXFwiICpuZ0lmPVxcXCJrZXlNaXNzaW5nXFxcIj4gPHN0cm9uZz5UaGUgcGFzc3dvcmQgcmVzZXQga2V5IGlzIG1pc3NpbmcuPC9zdHJvbmc+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC13YXJuaW5nXFxcIiAqbmdJZj1cXFwiIXN1Y2Nlc3MgJiYgIWtleU1pc3NpbmdcXFwiPiA8cCBqaGlUcmFuc2xhdGU9XFxcInJlc2V0LmZpbmlzaC5tZXNzYWdlcy5pbmZvXFxcIj5DaG9vc2UgYSBuZXcgcGFzc3dvcmQ8L3A+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJlcnJvclxcXCI+IDxwIGpoaVRyYW5zbGF0ZT1cXFwicmVzZXQuZmluaXNoLm1lc3NhZ2VzLmVycm9yXFxcIj5Zb3VyIHBhc3N3b3JkIGNvdWxkbid0IGJlIHJlc2V0LiBSZW1lbWJlciBhIHBhc3N3b3JkIHJlcXVlc3QgaXMgb25seSB2YWxpZCBmb3IgMjQgaG91cnMuPC9wPiA8L2Rpdj4gPHAgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcXFwiICpuZ0lmPVxcXCJzdWNjZXNzXFxcIj4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJyZXNldC5maW5pc2gubWVzc2FnZXMuc3VjY2Vzc1xcXCI+PHN0cm9uZz5Zb3VyIHBhc3N3b3JkIGhhcyBiZWVuIHJlc2V0Ljwvc3Ryb25nPiBQbGVhc2UgPC9zcGFuPiA8YSBjbGFzcz1cXFwiYWxlcnQtbGlua1xcXCIgKGNsaWNrKT1cXFwibG9naW4oKVxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMuaW5mby5hdXRoZW50aWNhdGVkLmxpbmtcXFwiPnNpZ24gaW48L2E+LiA8L3A+IDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCIgKm5nSWY9XFxcImRvTm90TWF0Y2hcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLmVycm9yLmRvbnRtYXRjaFxcXCI+IFRoZSBwYXNzd29yZCBhbmQgaXRzIGNvbmZpcm1hdGlvbiBkbyBub3QgbWF0Y2ghIDwvZGl2PiA8ZGl2ICpuZ0lmPVxcXCIha2V5TWlzc2luZ1xcXCI+IDxmb3JtICpuZ0lmPVxcXCIhc3VjY2Vzc1xcXCIgbmFtZT1cXFwiZm9ybVxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgKG5nU3VibWl0KT1cXFwiZmluaXNoUmVzZXQoKVxcXCIgI3Bhc3N3b3JkRm9ybT1cXFwibmdGb3JtXFxcIj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+IDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcInBhc3N3b3JkXFxcIiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5mb3JtLm5ld3Bhc3N3b3JkXFxcIj5OZXcgcGFzc3dvcmQ8L2xhYmVsPiA8aW5wdXQgdHlwZT1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJwYXNzd29yZFxcXCIgbmFtZT1cXFwicGFzc3dvcmRcXFwiICNwYXNzd29yZElucHV0PVxcXCJuZ01vZGVsXFxcIiBwbGFjZWhvbGRlcj1cXFwie3snZ2xvYmFsLmZvcm0ubmV3cGFzc3dvcmQucGxhY2Vob2xkZXInIHwgdHJhbnNsYXRlfX1cXFwiIFsobmdNb2RlbCldPVxcXCJyZXNldEFjY291bnQucGFzc3dvcmRcXFwiIG1pbmxlbmd0aD1cXFwiNFxcXCIgbWF4bGVuZ3RoPVxcXCI1MFxcXCIgcmVxdWlyZWQ+IDxkaXYgKm5nSWY9XFxcInBhc3N3b3JkSW5wdXQuZGlydHkgJiYgcGFzc3dvcmRJbnB1dC5pbnZhbGlkXFxcIj4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJwYXNzd29yZElucHV0LmVycm9ycy5yZXF1aXJlZFxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMudmFsaWRhdGUubmV3cGFzc3dvcmQucmVxdWlyZWRcXFwiPiBZb3VyIHBhc3N3b3JkIGlzIHJlcXVpcmVkLiA8L3NtYWxsPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcInBhc3N3b3JkSW5wdXQuZXJyb3JzLm1pbmxlbmd0aFxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMudmFsaWRhdGUubmV3cGFzc3dvcmQubWlubGVuZ3RoXFxcIj4gWW91ciBwYXNzd29yZCBpcyByZXF1aXJlZCB0byBiZSBhdCBsZWFzdCA0IGNoYXJhY3RlcnMuIDwvc21hbGw+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwicGFzc3dvcmRJbnB1dC5lcnJvcnMubWF4bGVuZ3RoXFxcIiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZXNzYWdlcy52YWxpZGF0ZS5uZXdwYXNzd29yZC5tYXhsZW5ndGhcXFwiPiBZb3VyIHBhc3N3b3JkIGNhbm5vdCBiZSBsb25nZXIgdGhhbiA1MCBjaGFyYWN0ZXJzLiA8L3NtYWxsPiA8L2Rpdj4gPGpoaS1wYXNzd29yZC1zdHJlbmd0aC1iYXIgW3Bhc3N3b3JkVG9DaGVja109XFxcInJlc2V0QWNjb3VudC5wYXNzd29yZFxcXCI+PC9qaGktcGFzc3dvcmQtc3RyZW5ndGgtYmFyPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+IDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcImNvbmZpcm1QYXNzd29yZFxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwuZm9ybS5jb25maXJtcGFzc3dvcmRcXFwiPk5ldyBwYXNzd29yZCBjb25maXJtYXRpb248L2xhYmVsPiA8aW5wdXQgdHlwZT1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJjb25maXJtUGFzc3dvcmRcXFwiIG5hbWU9XFxcImNvbmZpcm1QYXNzd29yZFxcXCIgI2NvbmZpcm1QYXNzd29yZElucHV0PVxcXCJuZ01vZGVsXFxcIiBwbGFjZWhvbGRlcj1cXFwie3snZ2xvYmFsLmZvcm0uY29uZmlybXBhc3N3b3JkLnBsYWNlaG9sZGVyJyB8IHRyYW5zbGF0ZX19XFxcIiBbKG5nTW9kZWwpXT1cXFwiY29uZmlybVBhc3N3b3JkXFxcIiBtaW5sZW5ndGg9XFxcIjRcXFwiIG1heGxlbmd0aD1cXFwiNTBcXFwiIHJlcXVpcmVkPiA8ZGl2ICpuZ0lmPVxcXCJjb25maXJtUGFzc3dvcmRJbnB1dC5kaXJ0eSAmJiBjb25maXJtUGFzc3dvcmRJbnB1dC5pbnZhbGlkXFxcIj4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJjb25maXJtUGFzc3dvcmRJbnB1dC5lcnJvcnMucmVxdWlyZWRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLnZhbGlkYXRlLmNvbmZpcm1wYXNzd29yZC5yZXF1aXJlZFxcXCI+IFlvdXIgcGFzc3dvcmQgY29uZmlybWF0aW9uIGlzIHJlcXVpcmVkLiA8L3NtYWxsPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcImNvbmZpcm1QYXNzd29yZElucHV0LmVycm9ycy5taW5sZW5ndGhcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLnZhbGlkYXRlLmNvbmZpcm1wYXNzd29yZC5taW5sZW5ndGhcXFwiPiBZb3VyIHBhc3N3b3JkIGNvbmZpcm1hdGlvbiBpcyByZXF1aXJlZCB0byBiZSBhdCBsZWFzdCA0IGNoYXJhY3RlcnMuIDwvc21hbGw+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiY29uZmlybVBhc3N3b3JkSW5wdXQuZXJyb3JzLm1heGxlbmd0aFxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMudmFsaWRhdGUuY29uZmlybXBhc3N3b3JkLm1heGxlbmd0aFxcXCI+IFlvdXIgcGFzc3dvcmQgY29uZmlybWF0aW9uIGNhbm5vdCBiZSBsb25nZXIgdGhhbiA1MCBjaGFyYWN0ZXJzLiA8L3NtYWxsPiA8L2Rpdj4gPC9kaXY+IDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBbZGlzYWJsZWRdPVxcXCJwYXNzd29yZEZvcm0uZm9ybS5pbnZhbGlkXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBqaGlUcmFuc2xhdGU9XFxcInJlc2V0LmZpbmlzaC5mb3JtLmJ1dHRvblxcXCI+UmVzZXQgUGFzc3dvcmQ8L2J1dHRvbj4gPC9mb3JtPiA8L2Rpdj4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQtcmVzZXQvZmluaXNoL3Bhc3N3b3JkLXJlc2V0LWZpbmlzaC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQtcmVzZXQvZmluaXNoL3Bhc3N3b3JkLXJlc2V0LWZpbmlzaC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgUmVuZGVyZXIsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nYk1vZGFsUmVmIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSmhpTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnbmctamhpcHN0ZXInO1xuXG5pbXBvcnQgeyBQYXNzd29yZFJlc2V0RmluaXNoIH0gZnJvbSAnLi9wYXNzd29yZC1yZXNldC1maW5pc2guc2VydmljZSc7XG5pbXBvcnQgeyBMb2dpbk1vZGFsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLXBhc3N3b3JkLXJlc2V0LWZpbmlzaCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3Bhc3N3b3JkLXJlc2V0LWZpbmlzaC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgUGFzc3dvcmRSZXNldEZpbmlzaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgY29uZmlybVBhc3N3b3JkOiBzdHJpbmc7XG4gICAgZG9Ob3RNYXRjaDogc3RyaW5nO1xuICAgIGVycm9yOiBzdHJpbmc7XG4gICAga2V5TWlzc2luZzogYm9vbGVhbjtcbiAgICByZXNldEFjY291bnQ6IGFueTtcbiAgICBzdWNjZXNzOiBzdHJpbmc7XG4gICAgbW9kYWxSZWY6IE5nYk1vZGFsUmVmO1xuICAgIGtleTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgamhpTGFuZ3VhZ2VTZXJ2aWNlOiBKaGlMYW5ndWFnZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcGFzc3dvcmRSZXNldEZpbmlzaDogUGFzc3dvcmRSZXNldEZpbmlzaCxcbiAgICAgICAgcHJpdmF0ZSBsb2dpbk1vZGFsU2VydmljZTogTG9naW5Nb2RhbFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyXG4gICAgKSB7XG4gICAgICAgIHRoaXMuamhpTGFuZ3VhZ2VTZXJ2aWNlLnNldExvY2F0aW9ucyhbJ3Jlc2V0J10pO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICAgICAgdGhpcy5rZXkgPSBwYXJhbXNbJ2tleSddO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yZXNldEFjY291bnQgPSB7fTtcbiAgICAgICAgdGhpcy5rZXlNaXNzaW5nID0gIXRoaXMua2V5O1xuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYXNzd29yZCcpICE9IG51bGwpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignI3Bhc3N3b3JkJyksICdmb2N1cycsIFtdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpbmlzaFJlc2V0KCkge1xuICAgICAgICB0aGlzLmRvTm90TWF0Y2ggPSBudWxsO1xuICAgICAgICB0aGlzLmVycm9yID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMucmVzZXRBY2NvdW50LnBhc3N3b3JkICE9PSB0aGlzLmNvbmZpcm1QYXNzd29yZCkge1xuICAgICAgICAgICAgdGhpcy5kb05vdE1hdGNoID0gJ0VSUk9SJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucGFzc3dvcmRSZXNldEZpbmlzaC5zYXZlKHtrZXk6IHRoaXMua2V5LCBuZXdQYXNzd29yZDogdGhpcy5yZXNldEFjY291bnQucGFzc3dvcmR9KS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VjY2VzcyA9ICdPSyc7XG4gICAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWNjZXNzID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gJ0VSUk9SJztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9naW4oKSB7XG4gICAgICAgIHRoaXMubW9kYWxSZWYgPSB0aGlzLmxvZ2luTW9kYWxTZXJ2aWNlLm9wZW4oKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQtcmVzZXQvZmluaXNoL3Bhc3N3b3JkLXJlc2V0LWZpbmlzaC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFVzZXJSb3V0ZUFjY2Vzc1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQnO1xuaW1wb3J0IHsgUGFzc3dvcmRSZXNldEZpbmlzaENvbXBvbmVudCB9IGZyb20gJy4vcGFzc3dvcmQtcmVzZXQtZmluaXNoLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBwYXNzd29yZFJlc2V0RmluaXNoUm91dGU6IFJvdXRlID0ge1xuICBwYXRoOiAncmVzZXQvZmluaXNoJyxcbiAgY29tcG9uZW50OiBQYXNzd29yZFJlc2V0RmluaXNoQ29tcG9uZW50LFxuICBkYXRhOiB7XG4gICAgYXV0aG9yaXRpZXM6IFtdLFxuICAgIHBhZ2VUaXRsZTogJ2dsb2JhbC5tZW51LmFjY291bnQucGFzc3dvcmQnXG4gIH0sXG4gIGNhbkFjdGl2YXRlOiBbVXNlclJvdXRlQWNjZXNzU2VydmljZV1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQtcmVzZXQvZmluaXNoL3Bhc3N3b3JkLXJlc2V0LWZpbmlzaC5yb3V0ZS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBhc3N3b3JkUmVzZXRGaW5pc2gge1xuXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgaHR0cDogSHR0cCkge31cblxuICAgIHNhdmUoa2V5QW5kUGFzc3dvcmQ6IGFueSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnYXBpL2FjY291bnQvcmVzZXRfcGFzc3dvcmQvZmluaXNoJywga2V5QW5kUGFzc3dvcmQpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC1yZXNldC9maW5pc2gvcGFzc3dvcmQtcmVzZXQtZmluaXNoLnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdj4gPGRpdiBjbGFzcz1cXFwicm93XFxcIj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLTggb2Zmc2V0LW1kLTJcXFwiPiA8aDEgamhpVHJhbnNsYXRlPVxcXCJyZXNldC5yZXF1ZXN0LnRpdGxlXFxcIj5SZXNldCB5b3VyIHBhc3N3b3JkPC9oMT4gPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIiBqaGlUcmFuc2xhdGU9XFxcInJlc2V0LnJlcXVlc3QubWVzc2FnZXMubm90Zm91bmRcXFwiICpuZ0lmPVxcXCJlcnJvckVtYWlsTm90RXhpc3RzXFxcIj4gPHN0cm9uZz5FLU1haWwgYWRkcmVzcyBpc24ndCByZWdpc3RlcmVkITwvc3Ryb25nPiBQbGVhc2UgY2hlY2sgYW5kIHRyeSBhZ2Fpbi4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LXdhcm5pbmdcXFwiICpuZ0lmPVxcXCIhc3VjY2Vzc1xcXCI+IDxwIGpoaVRyYW5zbGF0ZT1cXFwicmVzZXQucmVxdWVzdC5tZXNzYWdlcy5pbmZvXFxcIj5FbnRlciB0aGUgZS1tYWlsIGFkZHJlc3MgeW91IHVzZWQgdG8gcmVnaXN0ZXIuPC9wPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtc3VjY2Vzc1xcXCIgKm5nSWY9XFxcInN1Y2Nlc3MgPT0gJ09LJ1xcXCI+IDxwIGpoaVRyYW5zbGF0ZT1cXFwicmVzZXQucmVxdWVzdC5tZXNzYWdlcy5zdWNjZXNzXFxcIj5DaGVjayB5b3VyIGUtbWFpbHMgZm9yIGRldGFpbHMgb24gaG93IHRvIHJlc2V0IHlvdXIgcGFzc3dvcmQuPC9wPiA8L2Rpdj4gPGZvcm0gKm5nSWY9XFxcIiFzdWNjZXNzXFxcIiBuYW1lPVxcXCJmb3JtXFxcIiByb2xlPVxcXCJmb3JtXFxcIiAobmdTdWJtaXQpPVxcXCJyZXF1ZXN0UmVzZXQoKVxcXCIgI3Jlc2V0UmVxdWVzdEZvcm09XFxcIm5nRm9ybVxcXCI+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPiA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJlbWFpbFxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwuZm9ybS5lbWFpbFxcXCI+RS1tYWlsPC9sYWJlbD4gPGlucHV0IHR5cGU9XFxcImVtYWlsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiZW1haWxcXFwiIG5hbWU9XFxcImVtYWlsXFxcIiBwbGFjZWhvbGRlcj1cXFwie3snZ2xvYmFsLmZvcm0uZW1haWwucGxhY2Vob2xkZXInIHwgdHJhbnNsYXRlfX1cXFwiIFsobmdNb2RlbCldPVxcXCJyZXNldEFjY291bnQuZW1haWxcXFwiIG1pbmxlbmd0aD1cXFwiNVxcXCIgbWF4bGVuZ3RoPVxcXCIxMDBcXFwiICNlbWFpbElucHV0PVxcXCJuZ01vZGVsXFxcIiByZXF1aXJlZD4gPGRpdiAqbmdJZj1cXFwiZW1haWxJbnB1dC5kaXJ0eSAmJiBlbWFpbElucHV0LmludmFsaWRcXFwiPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcImVtYWlsSW5wdXQuZXJyb3JzLnJlcXVpcmVkXFxcIiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZXNzYWdlcy52YWxpZGF0ZS5lbWFpbC5yZXF1aXJlZFxcXCI+IFlvdXIgZS1tYWlsIGlzIHJlcXVpcmVkLiA8L3NtYWxsPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcImVtYWlsSW5wdXQuZXJyb3JzLmVtYWlsXFxcIiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZXNzYWdlcy52YWxpZGF0ZS5lbWFpbC5pbnZhbGlkXFxcIj4gWW91ciBlLW1haWwgaXMgaW52YWxpZC4gPC9zbWFsbD4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJlbWFpbElucHV0LmVycm9ycy5taW5sZW5ndGhcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLnZhbGlkYXRlLmVtYWlsLm1pbmxlbmd0aFxcXCI+IFlvdXIgZS1tYWlsIGlzIHJlcXVpcmVkIHRvIGJlIGF0IGxlYXN0IDUgY2hhcmFjdGVycy4gPC9zbWFsbD4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJlbWFpbElucHV0LmVycm9ycy5tYXhsZW5ndGhcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLnZhbGlkYXRlLmVtYWlsLm1heGxlbmd0aFxcXCI+IFlvdXIgZS1tYWlsIGNhbm5vdCBiZSBsb25nZXIgdGhhbiAxMDAgY2hhcmFjdGVycy4gPC9zbWFsbD4gPC9kaXY+IDwvZGl2PiA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgW2Rpc2FibGVkXT1cXFwicmVzZXRSZXF1ZXN0Rm9ybS5mb3JtLmludmFsaWRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIGpoaVRyYW5zbGF0ZT1cXFwicmVzZXQucmVxdWVzdC5mb3JtLmJ1dHRvblxcXCI+UmVzZXQ8L2J1dHRvbj4gPC9mb3JtPiA8L2Rpdj4gPC9kaXY+IDwvZGl2PiBcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC1yZXNldC9pbml0L3Bhc3N3b3JkLXJlc2V0LWluaXQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkLXJlc2V0L2luaXQvcGFzc3dvcmQtcmVzZXQtaW5pdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgUmVuZGVyZXIsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEpoaUxhbmd1YWdlU2VydmljZSB9IGZyb20gJ25nLWpoaXBzdGVyJztcblxuaW1wb3J0IHsgUGFzc3dvcmRSZXNldEluaXQgfSBmcm9tICcuL3Bhc3N3b3JkLXJlc2V0LWluaXQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLXBhc3N3b3JkLXJlc2V0LWluaXQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9wYXNzd29yZC1yZXNldC1pbml0LmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBQYXNzd29yZFJlc2V0SW5pdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgZXJyb3I6IHN0cmluZztcbiAgICBlcnJvckVtYWlsTm90RXhpc3RzOiBzdHJpbmc7XG4gICAgcmVzZXRBY2NvdW50OiBhbnk7XG4gICAgc3VjY2Vzczogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgamhpTGFuZ3VhZ2VTZXJ2aWNlOiBKaGlMYW5ndWFnZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcGFzc3dvcmRSZXNldEluaXQ6IFBhc3N3b3JkUmVzZXRJbml0LFxuICAgICAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyXG4gICAgKSB7XG4gICAgICAgIHRoaXMuamhpTGFuZ3VhZ2VTZXJ2aWNlLnNldExvY2F0aW9ucyhbJ3Jlc2V0J10pO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnJlc2V0QWNjb3VudCA9IHt9O1xuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbWFpbCcpLCAnZm9jdXMnLCBbXSk7XG4gICAgfVxuXG4gICAgcmVxdWVzdFJlc2V0ICgpIHtcblxuICAgICAgICB0aGlzLmVycm9yID0gbnVsbDtcbiAgICAgICAgdGhpcy5lcnJvckVtYWlsTm90RXhpc3RzID0gbnVsbDtcblxuICAgICAgICB0aGlzLnBhc3N3b3JkUmVzZXRJbml0LnNhdmUodGhpcy5yZXNldEFjY291bnQuZW1haWwpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN1Y2Nlc3MgPSAnT0snO1xuICAgICAgICB9LCAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3VjY2VzcyA9IG51bGw7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDAgJiYgcmVzcG9uc2UuZGF0YSA9PT0gJ2UtbWFpbCBhZGRyZXNzIG5vdCByZWdpc3RlcmVkJykge1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JFbWFpbE5vdEV4aXN0cyA9ICdFUlJPUic7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSAnRVJST1InO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQtcmVzZXQvaW5pdC9wYXNzd29yZC1yZXNldC1pbml0LmNvbXBvbmVudC50cyIsImltcG9ydCB7IFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgVXNlclJvdXRlQWNjZXNzU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZCc7XG5pbXBvcnQgeyBQYXNzd29yZFJlc2V0SW5pdENvbXBvbmVudCB9IGZyb20gJy4vcGFzc3dvcmQtcmVzZXQtaW5pdC5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgcGFzc3dvcmRSZXNldEluaXRSb3V0ZTogUm91dGUgPSB7XG4gIHBhdGg6ICdyZXNldC9yZXF1ZXN0JyxcbiAgY29tcG9uZW50OiBQYXNzd29yZFJlc2V0SW5pdENvbXBvbmVudCxcbiAgZGF0YToge1xuICAgIGF1dGhvcml0aWVzOiBbXSxcbiAgICBwYWdlVGl0bGU6ICdnbG9iYWwubWVudS5hY2NvdW50LnBhc3N3b3JkJ1xuICB9LFxuICBjYW5BY3RpdmF0ZTogW1VzZXJSb3V0ZUFjY2Vzc1NlcnZpY2VdXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkLXJlc2V0L2luaXQvcGFzc3dvcmQtcmVzZXQtaW5pdC5yb3V0ZS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBhc3N3b3JkUmVzZXRJbml0IHtcblxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIGh0dHA6IEh0dHApIHt9XG5cbiAgICBzYXZlKG1haWw6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnYXBpL2FjY291bnQvcmVzZXRfcGFzc3dvcmQvaW5pdCcsIG1haWwpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC1yZXNldC9pbml0L3Bhc3N3b3JkLXJlc2V0LWluaXQuc2VydmljZS50cyIsImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIFJlbmRlcmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLXBhc3N3b3JkLXN0cmVuZ3RoLWJhcicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBpZD1cInN0cmVuZ3RoXCI+XG4gICAgICAgICAgICA8c21hbGwgamhpVHJhbnNsYXRlPVwiZ2xvYmFsLm1lc3NhZ2VzLnZhbGlkYXRlLm5ld3Bhc3N3b3JkLnN0cmVuZ3RoXCI+UGFzc3dvcmQgc3RyZW5ndGg6PC9zbWFsbD5cbiAgICAgICAgICAgIDx1bCBpZD1cInN0cmVuZ3RoQmFyXCI+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicG9pbnRcIj48L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBvaW50XCI+PC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJwb2ludFwiPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwicG9pbnRcIj48L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInBvaW50XCI+PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PmAsXG4gICAgc3R5bGVVcmxzOiBbXG4gICAgICAgICdwYXNzd29yZC1zdHJlbmd0aC1iYXIuc2NzcydcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFBhc3N3b3JkU3RyZW5ndGhCYXJDb21wb25lbnQge1xuXG4gICAgY29sb3JzID0gWycjRjAwJywgJyNGOTAnLCAnI0ZGMCcsICcjOUYwJywgJyMwRjAnXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHsgfVxuXG4gICAgbWVhc3VyZVN0cmVuZ3RoKHA6IHN0cmluZyk6IG51bWJlciB7XG5cbiAgICAgICAgbGV0IGZvcmNlID0gMDtcbiAgICAgICAgbGV0IHJlZ2V4ID0gL1skLS86LT97LX4hXCJeX2BcXFtcXF1dL2c7IC8vIFwiXG5cbiAgICAgICAgbGV0IGxvd2VyTGV0dGVycyA9IC9bYS16XSsvLnRlc3QocCk7XG4gICAgICAgIGxldCB1cHBlckxldHRlcnMgPSAvW0EtWl0rLy50ZXN0KHApO1xuICAgICAgICBsZXQgbnVtYmVycyA9IC9bMC05XSsvLnRlc3QocCk7XG4gICAgICAgIGxldCBzeW1ib2xzID0gcmVnZXgudGVzdChwKTtcblxuICAgICAgICBsZXQgZmxhZ3MgPSBbbG93ZXJMZXR0ZXJzLCB1cHBlckxldHRlcnMsIG51bWJlcnMsIHN5bWJvbHNdO1xuICAgICAgICBsZXQgcGFzc2VkTWF0Y2hlcyA9IGZsYWdzLmZpbHRlciggKGlzTWF0Y2hlZEZsYWc6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBpc01hdGNoZWRGbGFnID09PSB0cnVlO1xuICAgICAgICB9KS5sZW5ndGg7XG5cbiAgICAgICAgZm9yY2UgKz0gMiAqIHAubGVuZ3RoICsgKChwLmxlbmd0aCA+PSAxMCkgPyAxIDogMCk7XG4gICAgICAgIGZvcmNlICs9IHBhc3NlZE1hdGNoZXMgKiAxMDtcblxuICAgICAgICAvLyBwZW5hbGl0eSAoc2hvcnQgcGFzc3dvcmQpXG4gICAgICAgIGZvcmNlID0gKHAubGVuZ3RoIDw9IDYpID8gTWF0aC5taW4oZm9yY2UsIDEwKSA6IGZvcmNlO1xuXG4gICAgICAgIC8vIHBlbmFsaXR5IChwb29yIHZhcmlldHkgb2YgY2hhcmFjdGVycylcbiAgICAgICAgZm9yY2UgPSAocGFzc2VkTWF0Y2hlcyA9PT0gMSkgPyBNYXRoLm1pbihmb3JjZSwgMTApIDogZm9yY2U7XG4gICAgICAgIGZvcmNlID0gKHBhc3NlZE1hdGNoZXMgPT09IDIpID8gTWF0aC5taW4oZm9yY2UsIDIwKSA6IGZvcmNlO1xuICAgICAgICBmb3JjZSA9IChwYXNzZWRNYXRjaGVzID09PSAzKSA/IE1hdGgubWluKGZvcmNlLCA0MCkgOiBmb3JjZTtcblxuICAgICAgICByZXR1cm4gZm9yY2U7XG4gICAgfTtcblxuICAgIGdldENvbG9yKHM6IG51bWJlcik6IGFueSB7XG4gICAgICAgIGxldCBpZHggPSAwO1xuICAgICAgICBpZiAocyA8PSAxMCkge1xuICAgICAgICAgICAgaWR4ID0gMDtcbiAgICAgICAgfSBlbHNlIGlmIChzIDw9IDIwKSB7XG4gICAgICAgICAgICBpZHggPSAxO1xuICAgICAgICB9IGVsc2UgaWYgKHMgPD0gMzApIHtcbiAgICAgICAgICAgIGlkeCA9IDI7XG4gICAgICAgIH0gZWxzZSBpZiAocyA8PSA0MCkge1xuICAgICAgICAgICAgaWR4ID0gMztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlkeCA9IDQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtpZHg6IGlkeCArIDEsIGNvbDogdGhpcy5jb2xvcnNbaWR4XX07XG4gICAgfTtcblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IHBhc3N3b3JkVG9DaGVjayhwYXNzd29yZDogc3RyaW5nKSB7XG4gICAgICAgIGlmIChwYXNzd29yZCkge1xuICAgICAgICAgICAgbGV0IGMgPSB0aGlzLmdldENvbG9yKHRoaXMubWVhc3VyZVN0cmVuZ3RoKHBhc3N3b3JkKSk7XG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgICAgICAgaWYgKCBlbGVtZW50LmNsYXNzTmFtZSApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyhlbGVtZW50LCBlbGVtZW50LmNsYXNzTmFtZSAsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBsaXMgPSBlbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdsaScpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaSA8IGMuaWR4KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKGxpc1tpXSwgJ2JhY2tncm91bmRDb2xvcicsIGMuY29sKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRTdHlsZShsaXNbaV0sICdiYWNrZ3JvdW5kQ29sb3InLCAnI0RERCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC9wYXNzd29yZC1zdHJlbmd0aC1iYXIuY29tcG9uZW50LnRzIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3Bhc3N3b3JkLXN0cmVuZ3RoLWJhci5zY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC9wYXNzd29yZC1zdHJlbmd0aC1iYXIuc2Nzc1xuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQvcGFzc3dvcmQtc3RyZW5ndGgtYmFyLnNjc3Ncbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXY+IDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC04IG9mZnNldC1tZC0yXFxcIj4gPGgyIGpoaVRyYW5zbGF0ZT1cXFwicGFzc3dvcmQudGl0bGVcXFwiIHRyYW5zbGF0ZVZhbHVlcz1cXFwie3VzZXJuYW1lOiAne3thY2NvdW50LmxvZ2lufX0nfVxcXCIgKm5nSWY9XFxcImFjY291bnRcXFwiPlBhc3N3b3JkIGZvciBbPGI+e3thY2NvdW50LmxvZ2lufX08L2I+XTwvaDI+IDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcXFwiICpuZ0lmPVxcXCJzdWNjZXNzXFxcIiBqaGlUcmFuc2xhdGU9XFxcInBhc3N3b3JkLm1lc3NhZ2VzLnN1Y2Nlc3NcXFwiPiA8c3Ryb25nPlBhc3N3b3JkIGNoYW5nZWQhPC9zdHJvbmc+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJlcnJvclxcXCIgamhpVHJhbnNsYXRlPVxcXCJwYXNzd29yZC5tZXNzYWdlcy5lcnJvclxcXCI+IDxzdHJvbmc+QW4gZXJyb3IgaGFzIG9jY3VycmVkITwvc3Ryb25nPiBUaGUgcGFzc3dvcmQgY291bGQgbm90IGJlIGNoYW5nZWQuIDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJkb05vdE1hdGNoXFxcIiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZXNzYWdlcy5lcnJvci5kb250bWF0Y2hcXFwiPiBUaGUgcGFzc3dvcmQgYW5kIGl0cyBjb25maXJtYXRpb24gZG8gbm90IG1hdGNoISA8L2Rpdj4gPGZvcm0gbmFtZT1cXFwiZm9ybVxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgKG5nU3VibWl0KT1cXFwiY2hhbmdlUGFzc3dvcmQoKVxcXCIgI3Bhc3N3b3JkRm9ybT1cXFwibmdGb3JtXFxcIj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+IDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jb250cm9sLWxhYmVsXFxcIiBmb3I9XFxcInBhc3N3b3JkXFxcIiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5mb3JtLm5ld3Bhc3N3b3JkXFxcIj5OZXcgcGFzc3dvcmQ8L2xhYmVsPiA8aW5wdXQgdHlwZT1cXFwicGFzc3dvcmRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJwYXNzd29yZFxcXCIgbmFtZT1cXFwicGFzc3dvcmRcXFwiICNwYXNzd29yZElucHV0PVxcXCJuZ01vZGVsXFxcIiBwbGFjZWhvbGRlcj1cXFwie3snZ2xvYmFsLmZvcm0ubmV3cGFzc3dvcmQucGxhY2Vob2xkZXInIHwgdHJhbnNsYXRlfX1cXFwiIFsobmdNb2RlbCldPVxcXCJwYXNzd29yZFxcXCIgbWlubGVuZ3RoPVxcXCI0XFxcIiBtYXhsZW5ndGg9XFxcIjUwXFxcIiByZXF1aXJlZD4gPGRpdiAqbmdJZj1cXFwicGFzc3dvcmRJbnB1dC5kaXJ0eSAmJiBwYXNzd29yZElucHV0LmludmFsaWRcXFwiPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcInBhc3N3b3JkSW5wdXQuZXJyb3JzLnJlcXVpcmVkXFxcIiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZXNzYWdlcy52YWxpZGF0ZS5uZXdwYXNzd29yZC5yZXF1aXJlZFxcXCI+IFlvdXIgcGFzc3dvcmQgaXMgcmVxdWlyZWQuIDwvc21hbGw+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwicGFzc3dvcmRJbnB1dC5lcnJvcnMubWlubGVuZ3RoXFxcIiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZXNzYWdlcy52YWxpZGF0ZS5uZXdwYXNzd29yZC5taW5sZW5ndGhcXFwiPiBZb3VyIHBhc3N3b3JkIGlzIHJlcXVpcmVkIHRvIGJlIGF0IGxlYXN0IDQgY2hhcmFjdGVycy4gPC9zbWFsbD4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJwYXNzd29yZElucHV0LmVycm9ycy5tYXhsZW5ndGhcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLnZhbGlkYXRlLm5ld3Bhc3N3b3JkLm1heGxlbmd0aFxcXCI+IFlvdXIgcGFzc3dvcmQgY2Fubm90IGJlIGxvbmdlciB0aGFuIDUwIGNoYXJhY3RlcnMuIDwvc21hbGw+IDwvZGl2PiA8amhpLXBhc3N3b3JkLXN0cmVuZ3RoLWJhciBbcGFzc3dvcmRUb0NoZWNrXT1cXFwicGFzc3dvcmRcXFwiPjwvamhpLXBhc3N3b3JkLXN0cmVuZ3RoLWJhcj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPiA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJjb25maXJtUGFzc3dvcmRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLmZvcm0uY29uZmlybXBhc3N3b3JkXFxcIj5OZXcgcGFzc3dvcmQgY29uZmlybWF0aW9uPC9sYWJlbD4gPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiY29uZmlybVBhc3N3b3JkXFxcIiBuYW1lPVxcXCJjb25maXJtUGFzc3dvcmRcXFwiICNjb25maXJtUGFzc3dvcmRJbnB1dD1cXFwibmdNb2RlbFxcXCIgcGxhY2Vob2xkZXI9XFxcInt7J2dsb2JhbC5mb3JtLmNvbmZpcm1wYXNzd29yZC5wbGFjZWhvbGRlcicgfCB0cmFuc2xhdGV9fVxcXCIgWyhuZ01vZGVsKV09XFxcImNvbmZpcm1QYXNzd29yZFxcXCIgbWlubGVuZ3RoPVxcXCI0XFxcIiBtYXhsZW5ndGg9XFxcIjUwXFxcIiByZXF1aXJlZD4gPGRpdiAqbmdJZj1cXFwiY29uZmlybVBhc3N3b3JkSW5wdXQuZGlydHkgJiYgY29uZmlybVBhc3N3b3JkSW5wdXQuaW52YWxpZFxcXCI+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiY29uZmlybVBhc3N3b3JkSW5wdXQuZXJyb3JzLnJlcXVpcmVkXFxcIiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZXNzYWdlcy52YWxpZGF0ZS5jb25maXJtcGFzc3dvcmQucmVxdWlyZWRcXFwiPiBZb3VyIGNvbmZpcm1hdGlvbiBwYXNzd29yZCBpcyByZXF1aXJlZC4gPC9zbWFsbD4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJjb25maXJtUGFzc3dvcmRJbnB1dC5lcnJvcnMubWlubGVuZ3RoXFxcIiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZXNzYWdlcy52YWxpZGF0ZS5jb25maXJtcGFzc3dvcmQubWlubGVuZ3RoXFxcIj4gWW91ciBjb25maXJtYXRpb24gcGFzc3dvcmQgaXMgcmVxdWlyZWQgdG8gYmUgYXQgbGVhc3QgNCBjaGFyYWN0ZXJzLiA8L3NtYWxsPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcImNvbmZpcm1QYXNzd29yZElucHV0LmVycm9ycy5tYXhsZW5ndGhcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLnZhbGlkYXRlLmNvbmZpcm1wYXNzd29yZC5tYXhsZW5ndGhcXFwiPiBZb3VyIGNvbmZpcm1hdGlvbiBwYXNzd29yZCBjYW5ub3QgYmUgbG9uZ2VyIHRoYW4gNTAgY2hhcmFjdGVycy4gPC9zbWFsbD4gPC9kaXY+IDwvZGl2PiA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgW2Rpc2FibGVkXT1cXFwicGFzc3dvcmRGb3JtLmZvcm0uaW52YWxpZFxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgamhpVHJhbnNsYXRlPVxcXCJwYXNzd29yZC5mb3JtLmJ1dHRvblxcXCI+U2F2ZTwvYnV0dG9uPiA8L2Zvcm0+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkL3Bhc3N3b3JkLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC9wYXNzd29yZC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSmhpTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnbmctamhpcHN0ZXInO1xuXG5pbXBvcnQgeyBQcmluY2lwYWwgfSBmcm9tICcuLi8uLi9zaGFyZWQnO1xuaW1wb3J0IHsgUGFzc3dvcmQgfSBmcm9tICcuL3Bhc3N3b3JkLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS1wYXNzd29yZCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3Bhc3N3b3JkLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBQYXNzd29yZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgZG9Ob3RNYXRjaDogc3RyaW5nO1xuICAgIGVycm9yOiBzdHJpbmc7XG4gICAgc3VjY2Vzczogc3RyaW5nO1xuICAgIGFjY291bnQ6IGFueTtcbiAgICBwYXNzd29yZDogc3RyaW5nO1xuICAgIGNvbmZpcm1QYXNzd29yZDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgamhpTGFuZ3VhZ2VTZXJ2aWNlOiBKaGlMYW5ndWFnZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcGFzc3dvcmRTZXJ2aWNlOiBQYXNzd29yZCxcbiAgICAgICAgcHJpdmF0ZSBwcmluY2lwYWw6IFByaW5jaXBhbFxuICAgICkge1xuICAgICAgICB0aGlzLmpoaUxhbmd1YWdlU2VydmljZS5zZXRMb2NhdGlvbnMoWydwYXNzd29yZCddKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCAoKSB7XG4gICAgICAgIHRoaXMucHJpbmNpcGFsLmlkZW50aXR5KCkudGhlbigoYWNjb3VudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hY2NvdW50ID0gYWNjb3VudDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2hhbmdlUGFzc3dvcmQgKCkge1xuICAgICAgICBpZiAodGhpcy5wYXNzd29yZCAhPT0gdGhpcy5jb25maXJtUGFzc3dvcmQpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5zdWNjZXNzID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuZG9Ob3RNYXRjaCA9ICdFUlJPUic7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRvTm90TWF0Y2ggPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5wYXNzd29yZFNlcnZpY2Uuc2F2ZSh0aGlzLnBhc3N3b3JkKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuc3VjY2VzcyA9ICdPSyc7XG4gICAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWNjZXNzID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gJ0VSUk9SJztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3Bhc3N3b3JkL3Bhc3N3b3JkLmNvbXBvbmVudC50cyIsImltcG9ydCB7IFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgVXNlclJvdXRlQWNjZXNzU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5pbXBvcnQgeyBQYXNzd29yZENvbXBvbmVudCB9IGZyb20gJy4vcGFzc3dvcmQuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IHBhc3N3b3JkUm91dGU6IFJvdXRlID0ge1xuICBwYXRoOiAncGFzc3dvcmQnLFxuICBjb21wb25lbnQ6IFBhc3N3b3JkQ29tcG9uZW50LFxuICBkYXRhOiB7XG4gICAgYXV0aG9yaXRpZXM6IFsnUk9MRV9VU0VSJ10sXG4gICAgcGFnZVRpdGxlOiAnZ2xvYmFsLm1lbnUuYWNjb3VudC5wYXNzd29yZCdcbiAgfSxcbiAgY2FuQWN0aXZhdGU6IFtVc2VyUm91dGVBY2Nlc3NTZXJ2aWNlXVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9wYXNzd29yZC9wYXNzd29yZC5yb3V0ZS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBhc3N3b3JkIHtcblxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIGh0dHA6IEh0dHApIHt9XG5cbiAgICBzYXZlKG5ld1Bhc3N3b3JkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJ2FwaS9hY2NvdW50L2NoYW5nZV9wYXNzd29yZCcsIG5ld1Bhc3N3b3JkKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcGFzc3dvcmQvcGFzc3dvcmQuc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PiA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtOCBvZmZzZXQtbWQtMlxcXCI+IDxoMSBqaGlUcmFuc2xhdGU9XFxcInJlZ2lzdGVyLnRpdGxlXFxcIj5SZWdpc3RyYXRpb248L2gxPiA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1zdWNjZXNzXFxcIiAqbmdJZj1cXFwic3VjY2Vzc1xcXCIgamhpVHJhbnNsYXRlPVxcXCJyZWdpc3Rlci5tZXNzYWdlcy5zdWNjZXNzXFxcIj4gPHN0cm9uZz5SZWdpc3RyYXRpb24gc2F2ZWQhPC9zdHJvbmc+IFBsZWFzZSBjaGVjayB5b3VyIGVtYWlsIGZvciBjb25maXJtYXRpb24uIDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJlcnJvclxcXCIgamhpVHJhbnNsYXRlPVxcXCJyZWdpc3Rlci5tZXNzYWdlcy5lcnJvci5mYWlsXFxcIj4gPHN0cm9uZz5SZWdpc3RyYXRpb24gZmFpbGVkITwvc3Ryb25nPiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiZXJyb3JVc2VyRXhpc3RzXFxcIiBqaGlUcmFuc2xhdGU9XFxcInJlZ2lzdGVyLm1lc3NhZ2VzLmVycm9yLnVzZXJleGlzdHNcXFwiPiA8c3Ryb25nPkxvZ2luIG5hbWUgYWxyZWFkeSByZWdpc3RlcmVkITwvc3Ryb25nPiBQbGVhc2UgY2hvb3NlIGFub3RoZXIgb25lLiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiZXJyb3JFbWFpbEV4aXN0c1xcXCIgamhpVHJhbnNsYXRlPVxcXCJyZWdpc3Rlci5tZXNzYWdlcy5lcnJvci5lbWFpbGV4aXN0c1xcXCI+IDxzdHJvbmc+RS1tYWlsIGlzIGFscmVhZHkgaW4gdXNlITwvc3Ryb25nPiBQbGVhc2UgY2hvb3NlIGFub3RoZXIgb25lLiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiZG9Ob3RNYXRjaFxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMuZXJyb3IuZG9udG1hdGNoXFxcIj4gVGhlIHBhc3N3b3JkIGFuZCBpdHMgY29uZmlybWF0aW9uIGRvIG5vdCBtYXRjaCEgPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNCBvZmZzZXQtbWQtMlxcXCI+IDxmb3JtIG5hbWU9XFxcImZvcm1cXFwiIHJvbGU9XFxcImZvcm1cXFwiIChuZ1N1Ym1pdCk9XFxcInJlZ2lzdGVyKClcXFwiICNyZWdpc3RlckZvcm09XFxcIm5nRm9ybVxcXCI+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPiA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJsb2dpblxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwuZm9ybS51c2VybmFtZVxcXCI+VXNlcm5hbWU8L2xhYmVsPiA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgWyhuZ01vZGVsKV09XFxcInJlZ2lzdGVyQWNjb3VudC5sb2dpblxcXCIgaWQ9XFxcImxvZ2luXFxcIiBuYW1lPVxcXCJsb2dpblxcXCIgI2xvZ2luPVxcXCJuZ01vZGVsXFxcIiBwbGFjZWhvbGRlcj1cXFwie3snZ2xvYmFsLmZvcm0udXNlcm5hbWUucGxhY2Vob2xkZXInIHwgdHJhbnNsYXRlfX1cXFwiIHJlcXVpcmVkIG1pbmxlbmd0aD1cXFwiMVxcXCIgbWF4bGVuZ3RoPVxcXCI1MFxcXCIgcGF0dGVybj1cXFwiXltfJy5AQS1aYS16MC05LV0qJFxcXCI+IDxkaXYgKm5nSWY9XFxcImxvZ2luLmRpcnR5ICYmIGxvZ2luLmludmFsaWRcXFwiPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcImxvZ2luLmVycm9ycy5yZXF1aXJlZFxcXCIgamhpVHJhbnNsYXRlPVxcXCJyZWdpc3Rlci5tZXNzYWdlcy52YWxpZGF0ZS5sb2dpbi5yZXF1aXJlZFxcXCI+IFlvdXIgdXNlcm5hbWUgaXMgcmVxdWlyZWQuIDwvc21hbGw+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwibG9naW4uZXJyb3JzLm1pbmxlbmd0aFxcXCIgamhpVHJhbnNsYXRlPVxcXCJyZWdpc3Rlci5tZXNzYWdlcy52YWxpZGF0ZS5sb2dpbi5taW5sZW5ndGhcXFwiPiBZb3VyIHVzZXJuYW1lIGlzIHJlcXVpcmVkIHRvIGJlIGF0IGxlYXN0IDEgY2hhcmFjdGVyLiA8L3NtYWxsPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcImxvZ2luLmVycm9ycy5tYXhsZW5ndGhcXFwiIGpoaVRyYW5zbGF0ZT1cXFwicmVnaXN0ZXIubWVzc2FnZXMudmFsaWRhdGUubG9naW4ubWF4bGVuZ3RoXFxcIj4gWW91ciB1c2VybmFtZSBjYW5ub3QgYmUgbG9uZ2VyIHRoYW4gNTAgY2hhcmFjdGVycy4gPC9zbWFsbD4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJsb2dpbi5lcnJvcnMucGF0dGVyblxcXCIgamhpVHJhbnNsYXRlPVxcXCJyZWdpc3Rlci5tZXNzYWdlcy52YWxpZGF0ZS5sb2dpbi5wYXR0ZXJuXFxcIj4gWW91ciB1c2VybmFtZSBjYW4gb25seSBjb250YWluIGxvd2VyLWNhc2UgbGV0dGVycyBhbmQgZGlnaXRzLiA8L3NtYWxsPiA8L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPiA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJlbWFpbFxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwuZm9ybS5lbWFpbFxcXCI+RS1tYWlsPC9sYWJlbD4gPGlucHV0IHR5cGU9XFxcImVtYWlsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiZW1haWxcXFwiIG5hbWU9XFxcImVtYWlsXFxcIiAjZW1haWw9XFxcIm5nTW9kZWxcXFwiIHBsYWNlaG9sZGVyPVxcXCJ7eydnbG9iYWwuZm9ybS5lbWFpbC5wbGFjZWhvbGRlcicgfCB0cmFuc2xhdGV9fVxcXCIgWyhuZ01vZGVsKV09XFxcInJlZ2lzdGVyQWNjb3VudC5lbWFpbFxcXCIgbWlubGVuZ3RoPVxcXCI1XFxcIiBtYXhsZW5ndGg9XFxcIjEwMFxcXCIgcmVxdWlyZWQ+IDxkaXYgKm5nSWY9XFxcImVtYWlsLmRpcnR5ICYmIGVtYWlsLmludmFsaWRcXFwiPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcImVtYWlsLmVycm9ycy5yZXF1aXJlZFxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMudmFsaWRhdGUuZW1haWwucmVxdWlyZWRcXFwiPiBZb3VyIGUtbWFpbCBpcyByZXF1aXJlZC4gPC9zbWFsbD4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJlbWFpbC5lcnJvcnMuaW52YWxpZFxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMudmFsaWRhdGUuZW1haWwuaW52YWxpZFxcXCI+IFlvdXIgZS1tYWlsIGlzIGludmFsaWQuIDwvc21hbGw+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiZW1haWwuZXJyb3JzLm1pbmxlbmd0aFxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMudmFsaWRhdGUuZW1haWwubWlubGVuZ3RoXFxcIj4gWW91ciBlLW1haWwgaXMgcmVxdWlyZWQgdG8gYmUgYXQgbGVhc3QgNSBjaGFyYWN0ZXJzLiA8L3NtYWxsPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcImVtYWlsLmVycm9ycy5tYXhsZW5ndGhcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLnZhbGlkYXRlLmVtYWlsLm1heGxlbmd0aFxcXCI+IFlvdXIgZS1tYWlsIGNhbm5vdCBiZSBsb25nZXIgdGhhbiAxMDAgY2hhcmFjdGVycy4gPC9zbWFsbD4gPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4gPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwicGFzc3dvcmRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLmZvcm0ubmV3cGFzc3dvcmRcXFwiPk5ldyBwYXNzd29yZDwvbGFiZWw+IDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcInBhc3N3b3JkXFxcIiBuYW1lPVxcXCJwYXNzd29yZFxcXCIgI3Bhc3N3b3JkPVxcXCJuZ01vZGVsXFxcIiBwbGFjZWhvbGRlcj1cXFwie3snZ2xvYmFsLmZvcm0ubmV3cGFzc3dvcmQucGxhY2Vob2xkZXInIHwgdHJhbnNsYXRlfX1cXFwiIFsobmdNb2RlbCldPVxcXCJyZWdpc3RlckFjY291bnQucGFzc3dvcmRcXFwiIG1pbmxlbmd0aD1cXFwiNFxcXCIgbWF4bGVuZ3RoPVxcXCI1MFxcXCIgcmVxdWlyZWQ+IDxkaXYgKm5nSWY9XFxcInBhc3N3b3JkLmRpcnR5ICYmIHBhc3N3b3JkLmludmFsaWRcXFwiPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcInBhc3N3b3JkLmVycm9ycy5yZXF1aXJlZFxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMudmFsaWRhdGUubmV3cGFzc3dvcmQucmVxdWlyZWRcXFwiPiBZb3VyIHBhc3N3b3JkIGlzIHJlcXVpcmVkLiA8L3NtYWxsPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcInBhc3N3b3JkLmVycm9ycy5taW5sZW5ndGhcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLnZhbGlkYXRlLm5ld3Bhc3N3b3JkLm1pbmxlbmd0aFxcXCI+IFlvdXIgcGFzc3dvcmQgaXMgcmVxdWlyZWQgdG8gYmUgYXQgbGVhc3QgNCBjaGFyYWN0ZXJzLiA8L3NtYWxsPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcInBhc3N3b3JkLmVycm9ycy5tYXhsZW5ndGhcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLnZhbGlkYXRlLm5ld3Bhc3N3b3JkLm1heGxlbmd0aFxcXCI+IFlvdXIgcGFzc3dvcmQgY2Fubm90IGJlIGxvbmdlciB0aGFuIDUwIGNoYXJhY3RlcnMuIDwvc21hbGw+IDwvZGl2PiA8amhpLXBhc3N3b3JkLXN0cmVuZ3RoLWJhciBbcGFzc3dvcmRUb0NoZWNrXT1cXFwicmVnaXN0ZXJBY2NvdW50LnBhc3N3b3JkXFxcIj48L2poaS1wYXNzd29yZC1zdHJlbmd0aC1iYXI+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4gPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwiY29uZmlybVBhc3N3b3JkXFxcIiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5mb3JtLmNvbmZpcm1wYXNzd29yZFxcXCI+TmV3IHBhc3N3b3JkIGNvbmZpcm1hdGlvbjwvbGFiZWw+IDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcImNvbmZpcm1QYXNzd29yZFxcXCIgbmFtZT1cXFwiY29uZmlybVBhc3N3b3JkXFxcIiAjY29uZmlybVBhc3N3b3JkSW5wdXQ9XFxcIm5nTW9kZWxcXFwiIHBsYWNlaG9sZGVyPVxcXCJ7eydnbG9iYWwuZm9ybS5jb25maXJtcGFzc3dvcmQucGxhY2Vob2xkZXInIHwgdHJhbnNsYXRlfX1cXFwiIFsobmdNb2RlbCldPVxcXCJjb25maXJtUGFzc3dvcmRcXFwiIG1pbmxlbmd0aD1cXFwiNFxcXCIgbWF4bGVuZ3RoPVxcXCI1MFxcXCIgcmVxdWlyZWQ+IDxkaXYgKm5nSWY9XFxcImNvbmZpcm1QYXNzd29yZElucHV0LmRpcnR5ICYmIGNvbmZpcm1QYXNzd29yZElucHV0LmludmFsaWRcXFwiPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcImNvbmZpcm1QYXNzd29yZElucHV0LmVycm9ycy5yZXF1aXJlZFxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMudmFsaWRhdGUuY29uZmlybXBhc3N3b3JkLnJlcXVpcmVkXFxcIj4gWW91ciBjb25maXJtYXRpb24gcGFzc3dvcmQgaXMgcmVxdWlyZWQuIDwvc21hbGw+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiY29uZmlybVBhc3N3b3JkSW5wdXQuZXJyb3JzLm1pbmxlbmd0aFxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMudmFsaWRhdGUuY29uZmlybXBhc3N3b3JkLm1pbmxlbmd0aFxcXCI+IFlvdXIgY29uZmlybWF0aW9uIHBhc3N3b3JkIGlzIHJlcXVpcmVkIHRvIGJlIGF0IGxlYXN0IDQgY2hhcmFjdGVycy4gPC9zbWFsbD4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJjb25maXJtUGFzc3dvcmRJbnB1dC5lcnJvcnMubWF4bGVuZ3RoXFxcIiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZXNzYWdlcy52YWxpZGF0ZS5jb25maXJtcGFzc3dvcmQubWF4bGVuZ3RoXFxcIj4gWW91ciBjb25maXJtYXRpb24gcGFzc3dvcmQgY2Fubm90IGJlIGxvbmdlciB0aGFuIDUwIGNoYXJhY3RlcnMuIDwvc21hbGw+IDwvZGl2PiA8L2Rpdj4gPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIFtkaXNhYmxlZF09XFxcInJlZ2lzdGVyRm9ybS5mb3JtLmludmFsaWRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIGpoaVRyYW5zbGF0ZT1cXFwicmVnaXN0ZXIuZm9ybS5idXR0b25cXFwiPlJlZ2lzdGVyPC9idXR0b24+IDwvZm9ybT4gPHA+PC9wPiA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC13YXJuaW5nXFxcIj4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMuaW5mby5hdXRoZW50aWNhdGVkLnByZWZpeFxcXCI+SWYgeW91IHdhbnQgdG8gPC9zcGFuPiA8YSBjbGFzcz1cXFwiYWxlcnQtbGlua1xcXCIgKGNsaWNrKT1cXFwib3BlbkxvZ2luKClcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLmluZm8uYXV0aGVudGljYXRlZC5saW5rXFxcIj5zaWduIGluPC9hPjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLmluZm8uYXV0aGVudGljYXRlZC5zdWZmaXhcXFwiPiwgeW91IGNhbiB0cnkgdGhlIGRlZmF1bHQgYWNjb3VudHM6PGJyLz4tIEFkbWluaXN0cmF0b3IgKGxvZ2luPVxcXCJhZG1pblxcXCIgYW5kIHBhc3N3b3JkPVxcXCJhZG1pblxcXCIpIDxici8+LSBVc2VyIChsb2dpbj1cXFwidXNlclxcXCIgYW5kIHBhc3N3b3JkPVxcXCJ1c2VyXFxcIikuPC9zcGFuPiA8L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC00XFxcIj4gPGJyLz4gPGpoaS1zb2NpYWwgcHJvdmlkZXI9XFxcImdvb2dsZVxcXCI+PC9qaGktc29jaWFsPiA8amhpLXNvY2lhbCBwcm92aWRlcj1cXFwiZmFjZWJvb2tcXFwiPjwvamhpLXNvY2lhbD4gPGpoaS1zb2NpYWwgcHJvdmlkZXI9XFxcInR3aXR0ZXJcXFwiPjwvamhpLXNvY2lhbD4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBSZW5kZXJlciwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdiTW9kYWxSZWYgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBKaGlMYW5ndWFnZVNlcnZpY2UgfSBmcm9tICduZy1qaGlwc3Rlcic7XG5cbmltcG9ydCB7IFJlZ2lzdGVyIH0gZnJvbSAnLi9yZWdpc3Rlci5zZXJ2aWNlJztcbmltcG9ydCB7IExvZ2luTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqaGktcmVnaXN0ZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9yZWdpc3Rlci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuXG4gICAgY29uZmlybVBhc3N3b3JkOiBzdHJpbmc7XG4gICAgZG9Ob3RNYXRjaDogc3RyaW5nO1xuICAgIGVycm9yOiBzdHJpbmc7XG4gICAgZXJyb3JFbWFpbEV4aXN0czogc3RyaW5nO1xuICAgIGVycm9yVXNlckV4aXN0czogc3RyaW5nO1xuICAgIHJlZ2lzdGVyQWNjb3VudDogYW55O1xuICAgIHN1Y2Nlc3M6IGJvb2xlYW47XG4gICAgbW9kYWxSZWY6IE5nYk1vZGFsUmVmO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgbGFuZ3VhZ2VTZXJ2aWNlOiBKaGlMYW5ndWFnZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgbG9naW5Nb2RhbFNlcnZpY2U6IExvZ2luTW9kYWxTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJlZ2lzdGVyU2VydmljZTogUmVnaXN0ZXIsXG4gICAgICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXJcbiAgICApIHtcbiAgICAgICAgdGhpcy5sYW5ndWFnZVNlcnZpY2Uuc2V0TG9jYXRpb25zKFsncmVnaXN0ZXInXSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuc3VjY2VzcyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyQWNjb3VudCA9IHt9O1xuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2dpbicpLCAnZm9jdXMnLCBbXSk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnJlZ2lzdGVyQWNjb3VudC5wYXNzd29yZCAhPT0gdGhpcy5jb25maXJtUGFzc3dvcmQpIHtcbiAgICAgICAgICAgIHRoaXMuZG9Ob3RNYXRjaCA9ICdFUlJPUic7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRvTm90TWF0Y2ggPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5lcnJvciA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmVycm9yVXNlckV4aXN0cyA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmVycm9yRW1haWxFeGlzdHMgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5sYW5ndWFnZVNlcnZpY2UuZ2V0Q3VycmVudCgpLnRoZW4oa2V5ID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVyQWNjb3VudC5sYW5nS2V5ID0ga2V5O1xuICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJTZXJ2aWNlLnNhdmUodGhpcy5yZWdpc3RlckFjY291bnQpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VjY2VzcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSwgKHJlc3BvbnNlKSA9PiB0aGlzLnByb2Nlc3NFcnJvcihyZXNwb25zZSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvcGVuTG9naW4oKSB7XG4gICAgICAgIHRoaXMubW9kYWxSZWYgPSB0aGlzLmxvZ2luTW9kYWxTZXJ2aWNlLm9wZW4oKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHByb2Nlc3NFcnJvcihyZXNwb25zZSkge1xuICAgICAgICB0aGlzLnN1Y2Nlc3MgPSBudWxsO1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDAgJiYgcmVzcG9uc2UuX2JvZHkgPT09ICdsb2dpbiBhbHJlYWR5IGluIHVzZScpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3JVc2VyRXhpc3RzID0gJ0VSUk9SJztcbiAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMCAmJiByZXNwb25zZS5fYm9keSA9PT0gJ2UtbWFpbCBhZGRyZXNzIGFscmVhZHkgaW4gdXNlJykge1xuICAgICAgICAgICAgdGhpcy5lcnJvckVtYWlsRXhpc3RzID0gJ0VSUk9SJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IgPSAnRVJST1InO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC50cyIsImltcG9ydCB7IFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgVXNlclJvdXRlQWNjZXNzU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5pbXBvcnQgeyBSZWdpc3RlckNvbXBvbmVudCB9IGZyb20gJy4vcmVnaXN0ZXIuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyUm91dGU6IFJvdXRlID0ge1xuICBwYXRoOiAncmVnaXN0ZXInLFxuICBjb21wb25lbnQ6IFJlZ2lzdGVyQ29tcG9uZW50LFxuICBkYXRhOiB7XG4gICAgYXV0aG9yaXRpZXM6IFtdLFxuICAgIHBhZ2VUaXRsZTogJ3JlZ2lzdGVyLnRpdGxlJ1xuICB9LFxuICBjYW5BY3RpdmF0ZTogW1VzZXJSb3V0ZUFjY2Vzc1NlcnZpY2VdXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3JlZ2lzdGVyL3JlZ2lzdGVyLnJvdXRlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXIge1xuXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgaHR0cDogSHR0cCkge31cblxuICAgIHNhdmUoYWNjb3VudDogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCdhcGkvcmVnaXN0ZXInLCBhY2NvdW50KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvcmVnaXN0ZXIvcmVnaXN0ZXIuc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PiA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtOCBvZmZzZXQtbWQtMlxcXCI+IDxoMiBqaGlUcmFuc2xhdGU9XFxcInNldHRpbmdzLnRpdGxlXFxcIiB0cmFuc2xhdGVWYWx1ZXM9XFxcInt1c2VybmFtZTogJ3t7c2V0dGluZ3NBY2NvdW50LmxvZ2lufX0nfVxcXCIgKm5nSWY9XFxcInNldHRpbmdzQWNjb3VudFxcXCI+VXNlciBzZXR0aW5ncyBmb3IgWzxiPnt7c2V0dGluZ3NBY2NvdW50LmxvZ2lufX08L2I+XTwvaDI+IDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcXFwiICpuZ0lmPVxcXCJzdWNjZXNzXFxcIiBqaGlUcmFuc2xhdGU9XFxcInNldHRpbmdzLm1lc3NhZ2VzLnN1Y2Nlc3NcXFwiPiA8c3Ryb25nPlNldHRpbmdzIHNhdmVkITwvc3Ryb25nPiA8L2Rpdj4gPGpoaS1hbGVydC1lcnJvcj48L2poaS1hbGVydC1lcnJvcj4gPGZvcm0gbmFtZT1cXFwiZm9ybVxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgKG5nU3VibWl0KT1cXFwic2F2ZSgpXFxcIiAjc2V0dGluZ3NGb3JtPVxcXCJuZ0Zvcm1cXFwiICpuZ0lmPVxcXCJzZXR0aW5nc0FjY291bnRcXFwiIG5vdmFsaWRhdGU+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPiA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY29udHJvbC1sYWJlbFxcXCIgZm9yPVxcXCJmaXJzdE5hbWVcXFwiIGpoaVRyYW5zbGF0ZT1cXFwic2V0dGluZ3MuZm9ybS5maXJzdG5hbWVcXFwiPkZpcnN0IE5hbWU8L2xhYmVsPiA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcImZpcnN0TmFtZVxcXCIgbmFtZT1cXFwiZmlyc3ROYW1lXFxcIiBwbGFjZWhvbGRlcj1cXFwie3snc2V0dGluZ3MuZm9ybS5maXJzdG5hbWUucGxhY2Vob2xkZXInIHwgdHJhbnNsYXRlfX1cXFwiIFsobmdNb2RlbCldPVxcXCJzZXR0aW5nc0FjY291bnQuZmlyc3ROYW1lXFxcIiBtaW5sZW5ndGg9XFxcIjFcXFwiIG1heGxlbmd0aD1cXFwiNTBcXFwiICNmaXJzdE5hbWVJbnB1dD1cXFwibmdNb2RlbFxcXCIgcmVxdWlyZWQ+IDxkaXYgKm5nSWY9XFxcImZpcnN0TmFtZUlucHV0LmRpcnR5ICYmIGZpcnN0TmFtZUlucHV0LmludmFsaWRcXFwiPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcImZpcnN0TmFtZUlucHV0LmVycm9ycy5yZXF1aXJlZFxcXCIgamhpVHJhbnNsYXRlPVxcXCJzZXR0aW5ncy5tZXNzYWdlcy52YWxpZGF0ZS5maXJzdG5hbWUucmVxdWlyZWRcXFwiPiBZb3VyIGZpcnN0IG5hbWUgaXMgcmVxdWlyZWQuIDwvc21hbGw+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiZmlyc3ROYW1lSW5wdXQuZXJyb3JzLm1pbmxlbmd0aFxcXCIgamhpVHJhbnNsYXRlPVxcXCJzZXR0aW5ncy5tZXNzYWdlcy52YWxpZGF0ZS5maXJzdG5hbWUubWlubGVuZ3RoXFxcIj4gWW91ciBmaXJzdCBuYW1lIGlzIHJlcXVpcmVkIHRvIGJlIGF0IGxlYXN0IDEgY2hhcmFjdGVyLiA8L3NtYWxsPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcImZpcnN0TmFtZUlucHV0LmVycm9ycy5tYXhsZW5ndGhcXFwiIGpoaVRyYW5zbGF0ZT1cXFwic2V0dGluZ3MubWVzc2FnZXMudmFsaWRhdGUuZmlyc3RuYW1lLm1heGxlbmd0aFxcXCI+IFlvdXIgZmlyc3QgbmFtZSBjYW5ub3QgYmUgbG9uZ2VyIHRoYW4gNTAgY2hhcmFjdGVycy4gPC9zbWFsbD4gPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4gPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwibGFzdE5hbWVcXFwiIGpoaVRyYW5zbGF0ZT1cXFwic2V0dGluZ3MuZm9ybS5sYXN0bmFtZVxcXCI+TGFzdCBOYW1lPC9sYWJlbD4gPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJsYXN0TmFtZVxcXCIgbmFtZT1cXFwibGFzdE5hbWVcXFwiIHBsYWNlaG9sZGVyPVxcXCJ7eydzZXR0aW5ncy5mb3JtLmxhc3RuYW1lLnBsYWNlaG9sZGVyJyB8IHRyYW5zbGF0ZX19XFxcIiBbKG5nTW9kZWwpXT1cXFwic2V0dGluZ3NBY2NvdW50Lmxhc3ROYW1lXFxcIiBtaW5sZW5ndGg9XFxcIjFcXFwiIG1heGxlbmd0aD1cXFwiNTBcXFwiICNsYXN0TmFtZUlucHV0PVxcXCJuZ01vZGVsXFxcIiByZXF1aXJlZD4gPGRpdiAqbmdJZj1cXFwibGFzdE5hbWVJbnB1dC5kaXJ0eSAmJiBsYXN0TmFtZUlucHV0LmludmFsaWRcXFwiPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcImxhc3ROYW1lSW5wdXQuZXJyb3JzLnJlcXVpcmVkXFxcIiBqaGlUcmFuc2xhdGU9XFxcInNldHRpbmdzLm1lc3NhZ2VzLnZhbGlkYXRlLmxhc3RuYW1lLnJlcXVpcmVkXFxcIj4gWW91ciBsYXN0IG5hbWUgaXMgcmVxdWlyZWQuIDwvc21hbGw+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwibGFzdE5hbWVJbnB1dC5lcnJvcnMubWlubGVuZ3RoXFxcIiBqaGlUcmFuc2xhdGU9XFxcInNldHRpbmdzLm1lc3NhZ2VzLnZhbGlkYXRlLmxhc3RuYW1lLm1pbmxlbmd0aFxcXCI+IFlvdXIgbGFzdCBuYW1lIGlzIHJlcXVpcmVkIHRvIGJlIGF0IGxlYXN0IDEgY2hhcmFjdGVyLiA8L3NtYWxsPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcImxhc3ROYW1lSW5wdXQuZXJyb3JzLm1heGxlbmd0aFxcXCIgamhpVHJhbnNsYXRlPVxcXCJzZXR0aW5ncy5tZXNzYWdlcy52YWxpZGF0ZS5sYXN0bmFtZS5tYXhsZW5ndGhcXFwiPiBZb3VyIGxhc3QgbmFtZSBjYW5ub3QgYmUgbG9uZ2VyIHRoYW4gNTAgY2hhcmFjdGVycy4gPC9zbWFsbD4gPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4gPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wtbGFiZWxcXFwiIGZvcj1cXFwiZW1haWxcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLmZvcm0uZW1haWxcXFwiPkUtbWFpbDwvbGFiZWw+IDxpbnB1dCB0eXBlPVxcXCJlbWFpbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcImVtYWlsXFxcIiBuYW1lPVxcXCJlbWFpbFxcXCIgcGxhY2Vob2xkZXI9XFxcInt7J2dsb2JhbC5mb3JtLmVtYWlsLnBsYWNlaG9sZGVyJyB8IHRyYW5zbGF0ZX19XFxcIiBbKG5nTW9kZWwpXT1cXFwic2V0dGluZ3NBY2NvdW50LmVtYWlsXFxcIiBtaW5sZW5ndGg9XFxcIjVcXFwiIG1heGxlbmd0aD1cXFwiMTAwXFxcIiAjZW1haWxJbnB1dD1cXFwibmdNb2RlbFxcXCIgcmVxdWlyZWQ+IDxkaXYgKm5nSWY9XFxcImVtYWlsSW5wdXQuZGlydHkgJiYgZW1haWxJbnB1dC5pbnZhbGlkXFxcIj4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJlbWFpbElucHV0LmVycm9ycy5yZXF1aXJlZFxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMudmFsaWRhdGUuZW1haWwucmVxdWlyZWRcXFwiPiBZb3VyIGUtbWFpbCBpcyByZXF1aXJlZC4gPC9zbWFsbD4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJlbWFpbElucHV0LmVycm9ycy5lbWFpbFxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMudmFsaWRhdGUuZW1haWwuaW52YWxpZFxcXCI+IFlvdXIgZS1tYWlsIGlzIGludmFsaWQuIDwvc21hbGw+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiZW1haWxJbnB1dC5lcnJvcnMubWlubGVuZ3RoXFxcIiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZXNzYWdlcy52YWxpZGF0ZS5lbWFpbC5taW5sZW5ndGhcXFwiPiBZb3VyIGUtbWFpbCBpcyByZXF1aXJlZCB0byBiZSBhdCBsZWFzdCA1IGNoYXJhY3RlcnMuIDwvc21hbGw+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiZW1haWxJbnB1dC5lcnJvcnMubWF4bGVuZ3RoXFxcIiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZXNzYWdlcy52YWxpZGF0ZS5lbWFpbC5tYXhsZW5ndGhcXFwiPiBZb3VyIGUtbWFpbCBjYW5ub3QgYmUgbG9uZ2VyIHRoYW4gMTAwIGNoYXJhY3RlcnMuIDwvc21hbGw+IDwvZGl2PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgKm5nSWY9XFxcImxhbmd1YWdlcyAmJiBsYW5ndWFnZXMubGVuZ3RoID4gMFxcXCI+IDxsYWJlbCBmb3I9XFxcImxhbmdLZXlcXFwiIGpoaVRyYW5zbGF0ZT1cXFwic2V0dGluZ3MuZm9ybS5sYW5ndWFnZVxcXCI+TGFuZ3VhZ2U8L2xhYmVsPiA8c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJsYW5nS2V5XFxcIiBuYW1lPVxcXCJsYW5nS2V5XFxcIiBbKG5nTW9kZWwpXT1cXFwic2V0dGluZ3NBY2NvdW50LmxhbmdLZXlcXFwiPiA8b3B0aW9uICpuZ0Zvcj1cXFwibGV0IGxhbmd1YWdlIG9mIGxhbmd1YWdlc1xcXCIgW3ZhbHVlXT1cXFwibGFuZ3VhZ2VcXFwiPnt7bGFuZ3VhZ2UgfCBmaW5kTGFuZ3VhZ2VGcm9tS2V5fX08L29wdGlvbj4gPC9zZWxlY3Q+IDwvZGl2PiA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgW2Rpc2FibGVkXT1cXFwic2V0dGluZ3NGb3JtLmZvcm0uaW52YWxpZFxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgamhpVHJhbnNsYXRlPVxcXCJzZXR0aW5ncy5mb3JtLmJ1dHRvblxcXCI+U2F2ZTwvYnV0dG9uPiA8L2Zvcm0+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSmhpTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnbmctamhpcHN0ZXInO1xuXG5pbXBvcnQgeyBQcmluY2lwYWwsIEFjY291bnRTZXJ2aWNlLCBKaGlMYW5ndWFnZUhlbHBlciB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLXNldHRpbmdzJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vc2V0dGluZ3MuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFNldHRpbmdzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBlcnJvcjogc3RyaW5nO1xuICAgIHN1Y2Nlc3M6IHN0cmluZztcbiAgICBzZXR0aW5nc0FjY291bnQ6IGFueTtcbiAgICBsYW5ndWFnZXM6IGFueVtdO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgYWNjb3VudDogQWNjb3VudFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcHJpbmNpcGFsOiBQcmluY2lwYWwsXG4gICAgICAgIHByaXZhdGUgbGFuZ3VhZ2VTZXJ2aWNlOiBKaGlMYW5ndWFnZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgbGFuZ3VhZ2VIZWxwZXI6IEpoaUxhbmd1YWdlSGVscGVyXG4gICAgKSB7XG4gICAgICAgIHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLnNldExvY2F0aW9ucyhbJ3NldHRpbmdzJ10pO1xuICAgIH1cblxuICAgIG5nT25Jbml0ICgpIHtcbiAgICAgICAgdGhpcy5wcmluY2lwYWwuaWRlbnRpdHkoKS50aGVuKChhY2NvdW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzQWNjb3VudCA9IHRoaXMuY29weUFjY291bnQoYWNjb3VudCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmxhbmd1YWdlSGVscGVyLmdldEFsbCgpLnRoZW4oKGxhbmd1YWdlcykgPT4ge1xuICAgICAgICAgICAgdGhpcy5sYW5ndWFnZXMgPSBsYW5ndWFnZXM7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNhdmUgKCkge1xuICAgICAgICB0aGlzLmFjY291bnQuc2F2ZSh0aGlzLnNldHRpbmdzQWNjb3VudCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5zdWNjZXNzID0gJ09LJztcbiAgICAgICAgICAgIHRoaXMucHJpbmNpcGFsLmlkZW50aXR5KHRydWUpLnRoZW4oKGFjY291bnQpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzQWNjb3VudCA9IHRoaXMuY29weUFjY291bnQoYWNjb3VudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLmdldEN1cnJlbnQoKS50aGVuKChjdXJyZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3NBY2NvdW50LmxhbmdLZXkgIT09IGN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5ndWFnZVNlcnZpY2UuY2hhbmdlTGFuZ3VhZ2UodGhpcy5zZXR0aW5nc0FjY291bnQubGFuZ0tleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3VjY2VzcyA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmVycm9yID0gJ0VSUk9SJztcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29weUFjY291bnQgKGFjY291bnQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFjdGl2YXRlZDogYWNjb3VudC5hY3RpdmF0ZWQsXG4gICAgICAgICAgICBlbWFpbDogYWNjb3VudC5lbWFpbCxcbiAgICAgICAgICAgIGZpcnN0TmFtZTogYWNjb3VudC5maXJzdE5hbWUsXG4gICAgICAgICAgICBsYW5nS2V5OiBhY2NvdW50LmxhbmdLZXksXG4gICAgICAgICAgICBsYXN0TmFtZTogYWNjb3VudC5sYXN0TmFtZSxcbiAgICAgICAgICAgIGxvZ2luOiBhY2NvdW50LmxvZ2luLFxuICAgICAgICAgICAgaW1hZ2VVcmw6IGFjY291bnQuaW1hZ2VVcmxcbiAgICAgICAgfTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FjY291bnQvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBVc2VyUm91dGVBY2Nlc3NTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkJztcbmltcG9ydCB7IFNldHRpbmdzQ29tcG9uZW50IH0gZnJvbSAnLi9zZXR0aW5ncy5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3Qgc2V0dGluZ3NSb3V0ZTogUm91dGUgPSB7XG4gIHBhdGg6ICdzZXR0aW5ncycsXG4gIGNvbXBvbmVudDogU2V0dGluZ3NDb21wb25lbnQsXG4gIGRhdGE6IHtcbiAgICBhdXRob3JpdGllczogWydST0xFX1VTRVInXSxcbiAgICBwYWdlVGl0bGU6ICdnbG9iYWwubWVudS5hY2NvdW50LnNldHRpbmdzJ1xuICB9LFxuICBjYW5BY3RpdmF0ZTogW1VzZXJSb3V0ZUFjY2Vzc1NlcnZpY2VdXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3NldHRpbmdzL3NldHRpbmdzLnJvdXRlLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgSmhpTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnbmctamhpcHN0ZXInO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UsIExvZ2luU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5pbXBvcnQgeyBDb29raWVTZXJ2aWNlIH0gZnJvbSAnYW5ndWxhcjItY29va2llL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS1hdXRoJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4uLy4uL3NoYXJlZC9sb2dpbi9sb2dpbi5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgU29jaWFsQXV0aENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBjb25zdHJ1Y3RvciAoXG4gICAgICAgIHByaXZhdGUgamhpTGFuZ3VhZ2VTZXJ2aWNlOiBKaGlMYW5ndWFnZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgQXV0aDogQXV0aFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgbG9naW5TZXJ2aWNlOiBMb2dpblNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgY29va2llU2VydmljZTogQ29va2llU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxuICAgICkge1xuICAgICAgICB0aGlzLmpoaUxhbmd1YWdlU2VydmljZS5zZXRMb2NhdGlvbnMoWydzb2NpYWwnXSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGxldCB0b2tlbiA9IHRoaXMuY29va2llU2VydmljZS5nZXQoJ3NvY2lhbC1hdXRoZW50aWNhdGlvbicpO1xuICAgICAgICBpZiAodG9rZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmxvZ2luU2VydmljZS5sb2dpbldpdGhUb2tlbih0b2tlbiwgZmFsc2UpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvb2tpZVNlcnZpY2UucmVtb3ZlKCdzb2NpYWwtYXV0aGVudGljYXRpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5BdXRoLmF1dGhvcml6ZSh0cnVlKTtcbiAgICAgICAgICAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3NvY2lhbC1yZWdpc3RlciddLCB7cXVlcnlQYXJhbXM6IHsnc3VjY2Vzcyc6ICdmYWxzZSd9fSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9zb2NpYWwvc29jaWFsLWF1dGguY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXY+IDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC04IG9mZnNldC1tZC0yXFxcIj4gPGgxICpuZ0lmPVxcXCJzdWNjZXNzXFxcIiBqaGlUcmFuc2xhdGU9XFxcInNvY2lhbC5yZWdpc3Rlci50aXRsZVxcXCIgdHJhbnNsYXRlVmFsdWVzPVxcXCJ7IGxhYmVsOiAne3twcm92aWRlckxhYmVsfX0nIH1cXFwiPlJlZ2lzdHJhdGlvbiB3aXRoPC9oMT4gPGgxICpuZ0lmPVxcXCJlcnJvclxcXCIgamhpVHJhbnNsYXRlPVxcXCJzb2NpYWwucmVnaXN0ZXIuZXJyb3JUaXRsZVxcXCI+UmVnaXN0cmF0aW9uPC9oMT4gPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtc3VjY2Vzc1xcXCIgKm5nSWY9XFxcInN1Y2Nlc3NcXFwiIGpoaVRyYW5zbGF0ZT1cXFwic29jaWFsLnJlZ2lzdGVyLm1lc3NhZ2VzLnN1Y2Nlc3NcXFwiPiA8c3Ryb25nPlJlZ2lzdHJhdGlvbiBzYXZlZCE8L3N0cm9uZz4gUGxlYXNlIGNoZWNrIHlvdXIgZW1haWwgZm9yIGNvbmZpcm1hdGlvbi4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCIgKm5nSWY9XFxcImVycm9yXFxcIiBqaGlUcmFuc2xhdGU9XFxcInNvY2lhbC5yZWdpc3Rlci5tZXNzYWdlcy5lcnJvci5mYWlsXFxcIj4gPHN0cm9uZz5SZWdpc3RyYXRpb24gZmFpbGVkITwvc3Ryb25nPiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLiA8L2Rpdj4gPGpoaS1zb2NpYWwgKm5nSWY9XFxcInN1Y2Nlc3NcXFwiIHByb3ZpZGVyPVxcXCJ7eyBwcm92aWRlciB9fVxcXCI+PC9qaGktc29jaWFsPiA8YnIvPiA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC13YXJuaW5nXFxcIj4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMuaW5mby5hdXRoZW50aWNhdGVkLnByZWZpeFxcXCI+SWYgeW91IHdhbnQgdG8gPC9zcGFuPiA8YSBjbGFzcz1cXFwiYWxlcnQtbGlua1xcXCIgKGNsaWNrKT1cXFwibG9naW4oKVxcXCIgamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMuaW5mby5hdXRoZW50aWNhdGVkLmxpbmtcXFwiPnNpZ24gaW48L2E+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMuaW5mby5hdXRoZW50aWNhdGVkLnN1ZmZpeFxcXCI+LCB5b3UgY2FuIHRyeSB0aGUgZGVmYXVsdCBhY2NvdW50czo8YnIvPi0gQWRtaW5pc3RyYXRvciAobG9naW49XFxcImFkbWluXFxcIiBhbmQgcGFzc3dvcmQ9XFxcImFkbWluXFxcIikgPGJyLz4tIFVzZXIgKGxvZ2luPVxcXCJ1c2VyXFxcIiBhbmQgcGFzc3dvcmQ9XFxcInVzZXJcXFwiKS48L3NwYW4+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+IDwvZGl2PiBcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9zb2NpYWwvc29jaWFsLXJlZ2lzdGVyLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9zb2NpYWwvc29jaWFsLXJlZ2lzdGVyLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBKaGlMYW5ndWFnZVNlcnZpY2UgfSBmcm9tICduZy1qaGlwc3Rlcic7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOZ2JNb2RhbFJlZiB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcblxuaW1wb3J0IHsgTG9naW5Nb2RhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS1yZWdpc3RlcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NvY2lhbC1yZWdpc3Rlci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgU29jaWFsUmVnaXN0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQgIHtcbiAgICBzdWNjZXNzOiBib29sZWFuO1xuICAgIGVycm9yOiBib29sZWFuO1xuICAgIHByb3ZpZGVyOiBzdHJpbmc7XG4gICAgcHJvdmlkZXJMYWJlbDogc3RyaW5nO1xuICAgIG1vZGFsUmVmOiBOZ2JNb2RhbFJlZjtcblxuICAgIGNvbnN0cnVjdG9yIChcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHByaXZhdGUgamhpTGFuZ3VhZ2VTZXJ2aWNlOiBKaGlMYW5ndWFnZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgbG9naW5Nb2RhbFNlcnZpY2U6IExvZ2luTW9kYWxTZXJ2aWNlXG4gICAgKSB7XG4gICAgICAgIHRoaXMuamhpTGFuZ3VhZ2VTZXJ2aWNlLnNldExvY2F0aW9ucyhbJ3NvY2lhbCddKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUocXVlcnlQYXJhbXMgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdWNjZXNzID0gcXVlcnlQYXJhbXNbJ3N1Y2Nlc3MnXTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm92aWRlciA9IHBhcmFtc1sncHJvdmlkZXI/e3N1Y2Nlc3M6Ym9vbGVhbn0nXTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZXJyb3IgPSAhdGhpcy5zdWNjZXNzO1xuICAgICAgICB0aGlzLnByb3ZpZGVyTGFiZWwgPSB0aGlzLnByb3ZpZGVyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm92aWRlci5zbGljZSgxKTtcbiAgICB9XG5cbiAgICBsb2dpbigpIHtcbiAgICAgICAgdGhpcy5tb2RhbFJlZiA9IHRoaXMubG9naW5Nb2RhbFNlcnZpY2Uub3BlbigpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWNjb3VudC9zb2NpYWwvc29jaWFsLXJlZ2lzdGVyLmNvbXBvbmVudC50cyIsImltcG9ydCB7IFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgVXNlclJvdXRlQWNjZXNzU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5pbXBvcnQgeyBTb2NpYWxSZWdpc3RlckNvbXBvbmVudCB9IGZyb20gJy4vc29jaWFsLXJlZ2lzdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTb2NpYWxBdXRoQ29tcG9uZW50IH0gZnJvbSAnLi9zb2NpYWwtYXV0aC5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3Qgc29jaWFsUmVnaXN0ZXJSb3V0ZTogUm91dGUgPSB7XG4gICAgcGF0aDogJ3NvY2lhbC1yZWdpc3Rlci86cHJvdmlkZXI/e3N1Y2Nlc3M6Ym9vbGVhbn0nLFxuICAgIGNvbXBvbmVudDogU29jaWFsUmVnaXN0ZXJDb21wb25lbnQsXG4gICAgZGF0YToge1xuICAgICAgICBhdXRob3JpdGllczogW10sXG4gICAgICAgIHBhZ2VUaXRsZTogJ3NvY2lhbC5yZWdpc3Rlci50aXRsZSdcbiAgICB9LFxuICAgIGNhbkFjdGl2YXRlOiBbVXNlclJvdXRlQWNjZXNzU2VydmljZV1cbn07XG5cbmV4cG9ydCBjb25zdCBzb2NpYWxBdXRoUm91dGU6IFJvdXRlID0ge1xuICAgIHBhdGg6ICdzb2NpYWwtYXV0aCcsXG4gICAgY29tcG9uZW50OiBTb2NpYWxBdXRoQ29tcG9uZW50LFxuICAgIGRhdGE6IHtcbiAgICAgICAgYXV0aG9yaXRpZXM6IFtdLFxuICAgICAgICBwYWdlVGl0bGU6ICdzb2NpYWwucmVnaXN0ZXIudGl0bGUnXG4gICAgfSxcbiAgICBjYW5BY3RpdmF0ZTogW1VzZXJSb3V0ZUFjY2Vzc1NlcnZpY2VdXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hY2NvdW50L3NvY2lhbC9zb2NpYWwucm91dGUudHMiLCJpbXBvcnQgeyBOZ01vZHVsZSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgU3ByaW5nQm9vdEFuZ3VsYXJTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQnO1xuXG5pbXBvcnQge1xuICAgIGFkbWluU3RhdGUsXG4gICAgQXVkaXRzQ29tcG9uZW50LFxuICAgIFVzZXJNZ210Q29tcG9uZW50LFxuICAgIFVzZXJEaWFsb2dDb21wb25lbnQsXG4gICAgVXNlckRlbGV0ZURpYWxvZ0NvbXBvbmVudCxcbiAgICBVc2VyTWdtdERldGFpbENvbXBvbmVudCxcbiAgICBVc2VyTWdtdERpYWxvZ0NvbXBvbmVudCxcbiAgICBVc2VyTWdtdERlbGV0ZURpYWxvZ0NvbXBvbmVudCxcbiAgICBMb2dzQ29tcG9uZW50LFxuICAgIEpoaU1ldHJpY3NNb25pdG9yaW5nTW9kYWxDb21wb25lbnQsXG4gICAgSmhpTWV0cmljc01vbml0b3JpbmdDb21wb25lbnQsXG4gICAgSmhpSGVhbHRoTW9kYWxDb21wb25lbnQsXG4gICAgSmhpSGVhbHRoQ2hlY2tDb21wb25lbnQsXG4gICAgSmhpQ29uZmlndXJhdGlvbkNvbXBvbmVudCxcbiAgICBKaGlEb2NzQ29tcG9uZW50LFxuICAgIEF1ZGl0c1NlcnZpY2UsXG4gICAgSmhpQ29uZmlndXJhdGlvblNlcnZpY2UsXG4gICAgSmhpSGVhbHRoU2VydmljZSxcbiAgICBKaGlNZXRyaWNzU2VydmljZSxcbiAgICBMb2dzU2VydmljZSxcbiAgICBVc2VyUmVzb2x2ZVBhZ2luZ1BhcmFtcyxcbiAgICBVc2VyUmVzb2x2ZSxcbiAgICBVc2VyTW9kYWxTZXJ2aWNlXG59IGZyb20gJy4vJztcblxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgU3ByaW5nQm9vdEFuZ3VsYXJTaGFyZWRNb2R1bGUsXG4gICAgICAgIFJvdXRlck1vZHVsZS5mb3JSb290KGFkbWluU3RhdGUsIHsgdXNlSGFzaDogdHJ1ZSB9KVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEF1ZGl0c0NvbXBvbmVudCxcbiAgICAgICAgVXNlck1nbXRDb21wb25lbnQsXG4gICAgICAgIFVzZXJEaWFsb2dDb21wb25lbnQsXG4gICAgICAgIFVzZXJEZWxldGVEaWFsb2dDb21wb25lbnQsXG4gICAgICAgIFVzZXJNZ210RGV0YWlsQ29tcG9uZW50LFxuICAgICAgICBVc2VyTWdtdERpYWxvZ0NvbXBvbmVudCxcbiAgICAgICAgVXNlck1nbXREZWxldGVEaWFsb2dDb21wb25lbnQsXG4gICAgICAgIExvZ3NDb21wb25lbnQsXG4gICAgICAgIEpoaUNvbmZpZ3VyYXRpb25Db21wb25lbnQsXG4gICAgICAgIEpoaUhlYWx0aENoZWNrQ29tcG9uZW50LFxuICAgICAgICBKaGlIZWFsdGhNb2RhbENvbXBvbmVudCxcbiAgICAgICAgSmhpRG9jc0NvbXBvbmVudCxcbiAgICAgICAgSmhpTWV0cmljc01vbml0b3JpbmdDb21wb25lbnQsXG4gICAgICAgIEpoaU1ldHJpY3NNb25pdG9yaW5nTW9kYWxDb21wb25lbnRcbiAgICBdLFxuICAgIGVudHJ5Q29tcG9uZW50czogW1xuICAgICAgICBVc2VyTWdtdERpYWxvZ0NvbXBvbmVudCxcbiAgICAgICAgVXNlck1nbXREZWxldGVEaWFsb2dDb21wb25lbnQsXG4gICAgICAgIEpoaUhlYWx0aE1vZGFsQ29tcG9uZW50LFxuICAgICAgICBKaGlNZXRyaWNzTW9uaXRvcmluZ01vZGFsQ29tcG9uZW50LFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEF1ZGl0c1NlcnZpY2UsXG4gICAgICAgIEpoaUNvbmZpZ3VyYXRpb25TZXJ2aWNlLFxuICAgICAgICBKaGlIZWFsdGhTZXJ2aWNlLFxuICAgICAgICBKaGlNZXRyaWNzU2VydmljZSxcbiAgICAgICAgTG9nc1NlcnZpY2UsXG4gICAgICAgIFVzZXJSZXNvbHZlUGFnaW5nUGFyYW1zLFxuICAgICAgICBVc2VyUmVzb2x2ZSxcbiAgICAgICAgVXNlck1vZGFsU2VydmljZVxuICAgIF0sXG4gICAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdXG59KVxuZXhwb3J0IGNsYXNzIFNwcmluZ0Jvb3RBbmd1bGFyQWRtaW5Nb2R1bGUge31cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vYWRtaW4ubW9kdWxlLnRzIiwiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHtcbiAgICBhdWRpdHNSb3V0ZSxcbiAgICBjb25maWd1cmF0aW9uUm91dGUsXG4gICAgZG9jc1JvdXRlLFxuICAgIGhlYWx0aFJvdXRlLFxuICAgIGxvZ3NSb3V0ZSxcbiAgICBtZXRyaWNzUm91dGUsXG4gICAgdXNlck1nbXRSb3V0ZSxcbiAgICB1c2VyRGlhbG9nUm91dGVcbn0gZnJvbSAnLi8nO1xuXG5pbXBvcnQgeyBVc2VyUm91dGVBY2Nlc3NTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkJztcblxubGV0IEFETUlOX1JPVVRFUyA9IFtcbiAgICBhdWRpdHNSb3V0ZSxcbiAgICBjb25maWd1cmF0aW9uUm91dGUsXG4gICAgZG9jc1JvdXRlLFxuICAgIGhlYWx0aFJvdXRlLFxuICAgIGxvZ3NSb3V0ZSxcbiAgICAuLi51c2VyTWdtdFJvdXRlLFxuICAgIG1ldHJpY3NSb3V0ZVxuXTtcblxuXG5leHBvcnQgY29uc3QgYWRtaW5TdGF0ZTogUm91dGVzID0gW3tcbiAgICBwYXRoOiAnJyxcbiAgICBkYXRhOiB7XG4gICAgICAgIGF1dGhvcml0aWVzOiBbJ1JPTEVfQURNSU4nXVxuICAgIH0sXG4gICAgY2FuQWN0aXZhdGU6IFtVc2VyUm91dGVBY2Nlc3NTZXJ2aWNlXSxcbiAgICBjaGlsZHJlbjogQURNSU5fUk9VVEVTXG59LFxuICAgIC4uLnVzZXJEaWFsb2dSb3V0ZVxuXTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vYWRtaW4ucm91dGUudHMiLCJleHBvcnQgY2xhc3MgQXVkaXREYXRhIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIHJlbW90ZUFkZHJlc3M6IHN0cmluZyxcbiAgICAgICAgcHVibGljIHNlc3Npb25JZDogc3RyaW5nXG4gICAgKSB7IH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vYXVkaXRzL2F1ZGl0LWRhdGEubW9kZWwudHMiLCJpbXBvcnQgeyBBdWRpdERhdGEgfSBmcm9tICcuL2F1ZGl0LWRhdGEubW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgQXVkaXQge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgZGF0YTogQXVkaXREYXRhLFxuICAgICAgICBwdWJsaWMgcHJpbmNpcGFsOiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyB0aW1lc3RhbXA6IHN0cmluZyxcbiAgICAgICAgcHVibGljIHR5cGU6IHN0cmluZ1xuICAgICkge8KgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9hdWRpdHMvYXVkaXQubW9kZWwudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiAqbmdJZj1cXFwiYXVkaXRzXFxcIj4gPGgyIGpoaVRyYW5zbGF0ZT1cXFwiYXVkaXRzLnRpdGxlXFxcIj5BdWRpdHM8L2gyPiA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNVxcXCI+IDxoNCBqaGlUcmFuc2xhdGU9XFxcImF1ZGl0cy5maWx0ZXIudGl0bGVcXFwiPkZpbHRlciBieSBkYXRlPC9oND4gPHAgY2xhc3M9XFxcImQtZmxleFxcXCI+IDxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiYXVkaXRzLmZpbHRlci5mcm9tXFxcIiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYWRkb25cXFwiPmZyb208L3NwYW4+IDxpbnB1dCB0eXBlPVxcXCJkYXRlXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJzdGFydFxcXCIgWyhuZ01vZGVsKV09XFxcImZyb21EYXRlXFxcIiAobmdNb2RlbENoYW5nZSk9XFxcIm9uQ2hhbmdlRGF0ZSgkZXZlbnQpXFxcIiByZXF1aXJlZC8+IDxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiYXVkaXRzLmZpbHRlci50b1xcXCIgY2xhc3M9XFxcImlucHV0LWdyb3VwLWFkZG9uXFxcIj50bzwvc3Bhbj4gPGlucHV0IHR5cGU9XFxcImRhdGVcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImVuZFxcXCIgWyhuZ01vZGVsKV09XFxcInRvRGF0ZVxcXCIgKG5nTW9kZWxDaGFuZ2UpPVxcXCJvbkNoYW5nZURhdGUoJGV2ZW50KVxcXCIgcmVxdWlyZWQvPiA8L3A+IDwvZGl2PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwidGFibGUtcmVzcG9uc2l2ZVxcXCI+IDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtY29uZGVuc2VkIHRhYmxlLXN0cmlwZWQgdGFibGUtYm9yZGVyZWRcXFwiPiA8dGhlYWQ+IDx0cj4gPHRoIChjbGljayk9XFxcIm9yZGVyUHJvcCA9ICd0aW1lc3RhbXAnOyByZXZlcnNlPSFyZXZlcnNlXFxcIj48c3BhbiBqaGlUcmFuc2xhdGU9XFxcImF1ZGl0cy50YWJsZS5oZWFkZXIuZGF0ZVxcXCI+RGF0ZTwvc3Bhbj48L3RoPiA8dGggKGNsaWNrKT1cXFwib3JkZXJQcm9wID0gJ3ByaW5jaXBhbCc7IHJldmVyc2U9IXJldmVyc2VcXFwiPjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiYXVkaXRzLnRhYmxlLmhlYWRlci5wcmluY2lwYWxcXFwiPlVzZXI8L3NwYW4+PC90aD4gPHRoIChjbGljayk9XFxcIm9yZGVyUHJvcCA9ICd0eXBlJzsgcmV2ZXJzZT0hcmV2ZXJzZVxcXCI+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJhdWRpdHMudGFibGUuaGVhZGVyLnN0YXR1c1xcXCI+U3RhdGU8L3NwYW4+PC90aD4gPHRoIChjbGljayk9XFxcIm9yZGVyUHJvcCA9ICdkYXRhLm1lc3NhZ2UnOyByZXZlcnNlPSFyZXZlcnNlXFxcIj48c3BhbiBqaGlUcmFuc2xhdGU9XFxcImF1ZGl0cy50YWJsZS5oZWFkZXIuZGF0YVxcXCI+RXh0cmEgZGF0YTwvc3Bhbj48L3RoPiA8L3RyPiA8L3RoZWFkPiA8dHIgKm5nRm9yPVxcXCJsZXQgYXVkaXQgb2YgZ2V0QXVkaXRzKClcXFwiPiA8dGQ+PHNwYW4+e3thdWRpdC50aW1lc3RhbXB8IGRhdGU6J21lZGl1bSd9fTwvc3Bhbj48L3RkPiA8dGQ+PHNtYWxsPnt7YXVkaXQucHJpbmNpcGFsfX08L3NtYWxsPjwvdGQ+IDx0ZD57e2F1ZGl0LnR5cGV9fTwvdGQ+IDx0ZD4gPHNwYW4gKm5nSWY9XFxcImF1ZGl0LmRhdGFcXFwiIG5nLXNob3c9XFxcImF1ZGl0LmRhdGEubWVzc2FnZVxcXCI+e3thdWRpdC5kYXRhLm1lc3NhZ2V9fTwvc3Bhbj4gPHNwYW4gKm5nSWY9XFxcImF1ZGl0LmRhdGFcXFwiIG5nLXNob3c9XFxcImF1ZGl0LmRhdGEucmVtb3RlQWRkcmVzc1xcXCI+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJhdWRpdHMudGFibGUuZGF0YS5yZW1vdGVBZGRyZXNzXFxcIj5SZW1vdGUgQWRkcmVzczwvc3Bhbj4ge3thdWRpdC5kYXRhLnJlbW90ZUFkZHJlc3N9fTwvc3Bhbj4gPC90ZD4gPC90cj4gPC90YWJsZT4gPC9kaXY+IDxkaXYgKm5nSWY9XFxcImF1ZGl0c1xcXCI+IDxkaXYgY2xhc3M9XFxcInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXFxcIj4gPGpoaS1pdGVtLWNvdW50IFtwYWdlXT1cXFwicGFnZVxcXCIgW3RvdGFsXT1cXFwidG90YWxJdGVtc1xcXCIgW2l0ZW1zUGVyUGFnZV09XFxcIml0ZW1zUGVyUGFnZVxcXCI+PC9qaGktaXRlbS1jb3VudD4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXFxcIj4gPG5nYi1wYWdpbmF0aW9uIFtjb2xsZWN0aW9uU2l6ZV09XFxcInRvdGFsSXRlbXNcXFwiIFsocGFnZSldPVxcXCJwYWdlXFxcIiAocGFnZUNoYW5nZSk9XFxcImxvYWRQYWdlKHBhZ2UpXFxcIj48L25nYi1wYWdpbmF0aW9uPiA8L2Rpdj4gPC9kaXY+IDwvZGl2PiBcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vYXVkaXRzL2F1ZGl0cy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2F1ZGl0cy9hdWRpdHMuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFBhcnNlTGlua3MsIEpoaUxhbmd1YWdlU2VydmljZX0gZnJvbSAnbmctamhpcHN0ZXInO1xuXG5pbXBvcnQgeyBBdWRpdCB9IGZyb20gJy4vYXVkaXQubW9kZWwnO1xuaW1wb3J0IHsgQXVkaXRzU2VydmljZSB9IGZyb20gJy4vYXVkaXRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgSVRFTVNfUEVSX1BBR0UgfSBmcm9tICcuLi8uLi9zaGFyZWQnO1xuaW1wb3J0IHsgUGFnaW5hdGlvbkNvbmZpZyB9IGZyb20gJy4uLy4uL2Jsb2Nrcy9jb25maWcvdWliLXBhZ2luYXRpb24uY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnamhpLWF1ZGl0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2F1ZGl0cy5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQXVkaXRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBhdWRpdHM6IEF1ZGl0W107XG4gICAgZnJvbURhdGU6IHN0cmluZztcbiAgICBpdGVtc1BlclBhZ2U6IGFueTtcbiAgICBsaW5rczogYW55O1xuICAgIHBhZ2U6IG51bWJlcjtcbiAgICBvcmRlclByb3A6IHN0cmluZztcbiAgICByZXZlcnNlOiBib29sZWFuO1xuICAgIHRvRGF0ZTogc3RyaW5nO1xuICAgIHRvdGFsSXRlbXM6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGpoaUxhbmd1YWdlU2VydmljZTogSmhpTGFuZ3VhZ2VTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGF1ZGl0c1NlcnZpY2U6IEF1ZGl0c1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcGFyc2VMaW5rczogUGFyc2VMaW5rcyxcbiAgICAgICAgcHJpdmF0ZSBwYWdpbmF0aW9uQ29uZmlnOiBQYWdpbmF0aW9uQ29uZmlnLFxuICAgICAgICBwcml2YXRlIGRhdGVQaXBlOiBEYXRlUGlwZVxuICAgICkge1xuICAgICAgICB0aGlzLmpoaUxhbmd1YWdlU2VydmljZS5zZXRMb2NhdGlvbnMoWydhdWRpdHMnXSk7XG4gICAgICAgIHRoaXMuaXRlbXNQZXJQYWdlID0gSVRFTVNfUEVSX1BBR0U7XG4gICAgICAgIHRoaXMucGFnZSA9IDE7XG4gICAgICAgIHRoaXMucmV2ZXJzZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9yZGVyUHJvcCA9ICd0aW1lc3RhbXAnO1xuICAgIH1cblxuICAgIGdldEF1ZGl0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc29ydEF1ZGl0cyh0aGlzLmF1ZGl0cyk7XG4gICAgfVxuXG4gICAgbG9hZFBhZ2UocGFnZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMucGFnZSA9IHBhZ2U7XG4gICAgICAgIHRoaXMub25DaGFuZ2VEYXRlKCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMudG9kYXkoKTtcbiAgICAgICAgdGhpcy5wcmV2aW91c01vbnRoKCk7XG4gICAgICAgIHRoaXMub25DaGFuZ2VEYXRlKCk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2VEYXRlKCkge1xuICAgICAgICB0aGlzLmF1ZGl0c1NlcnZpY2UucXVlcnkoe3BhZ2U6IHRoaXMucGFnZSAtIDEsIHNpemU6IHRoaXMuaXRlbXNQZXJQYWdlLFxuICAgICAgICAgICAgZnJvbURhdGU6IHRoaXMuZnJvbURhdGUsIHRvRGF0ZTogdGhpcy50b0RhdGV9KS5zdWJzY3JpYmUocmVzID0+IHtcblxuICAgICAgICAgICAgdGhpcy5hdWRpdHMgPSByZXMuanNvbigpO1xuICAgICAgICAgICAgdGhpcy5saW5rcyA9IHRoaXMucGFyc2VMaW5rcy5wYXJzZShyZXMuaGVhZGVycy5nZXQoJ2xpbmsnKSk7XG4gICAgICAgICAgICB0aGlzLnRvdGFsSXRlbXMgPSArIHJlcy5oZWFkZXJzLmdldCgnWC1Ub3RhbC1Db3VudCcpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcmV2aW91c01vbnRoKCkge1xuICAgICAgICBsZXQgZGF0ZUZvcm1hdCA9ICd5eXl5LU1NLWRkJztcbiAgICAgICAgbGV0IGZyb21EYXRlOiBEYXRlID0gbmV3IERhdGUoKTtcblxuICAgICAgICBpZiAoZnJvbURhdGUuZ2V0TW9udGgoKSA9PT0gMCkge1xuICAgICAgICAgICAgZnJvbURhdGUgPSBuZXcgRGF0ZShmcm9tRGF0ZS5nZXRGdWxsWWVhcigpIC0gMSwgMTEsIGZyb21EYXRlLmdldERhdGUoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmcm9tRGF0ZSA9IG5ldyBEYXRlKGZyb21EYXRlLmdldEZ1bGxZZWFyKCksIGZyb21EYXRlLmdldE1vbnRoKCkgLSAxLCBmcm9tRGF0ZS5nZXREYXRlKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5mcm9tRGF0ZSA9IHRoaXMuZGF0ZVBpcGUudHJhbnNmb3JtKGZyb21EYXRlLCBkYXRlRm9ybWF0KTtcbiAgICB9XG5cbiAgICB0b2RheSgpIHtcbiAgICAgICAgbGV0IGRhdGVGb3JtYXQgPSAneXl5eS1NTS1kZCc7XG4gICAgICAgIC8vIFRvZGF5ICsgMSBkYXkgLSBuZWVkZWQgaWYgdGhlIGN1cnJlbnQgZGF5IG11c3QgYmUgaW5jbHVkZWRcbiAgICAgICAgbGV0IHRvZGF5OiBEYXRlID0gbmV3IERhdGUoKTtcblxuICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKHRvZGF5LmdldEZ1bGxZZWFyKCksIHRvZGF5LmdldE1vbnRoKCksIHRvZGF5LmdldERhdGUoKSArIDEpO1xuICAgICAgICB0aGlzLnRvRGF0ZSA9IHRoaXMuZGF0ZVBpcGUudHJhbnNmb3JtKGRhdGUsIGRhdGVGb3JtYXQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc29ydEF1ZGl0cyhhdWRpdHM6IEF1ZGl0W10pIHtcbiAgICAgICAgYXVkaXRzID0gYXVkaXRzLnNsaWNlKDApLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIGlmIChhW3RoaXMub3JkZXJQcm9wXSA8IGJbdGhpcy5vcmRlclByb3BdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChbYlt0aGlzLm9yZGVyUHJvcF0gPCBhW3RoaXMub3JkZXJQcm9wXV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnJldmVyc2UgPyBhdWRpdHMucmV2ZXJzZSgpIDogYXVkaXRzO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vYXVkaXRzL2F1ZGl0cy5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEF1ZGl0c0NvbXBvbmVudCB9IGZyb20gJy4vYXVkaXRzLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBhdWRpdHNSb3V0ZTogUm91dGUgPSB7XG4gIHBhdGg6ICdhdWRpdHMnLFxuICBjb21wb25lbnQ6IEF1ZGl0c0NvbXBvbmVudCxcbiAgZGF0YToge1xuICAgIHBhZ2VUaXRsZTogJ2F1ZGl0cy50aXRsZSdcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vYXVkaXRzL2F1ZGl0cy5yb3V0ZS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlLCBVUkxTZWFyY2hQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1ZGl0c1NlcnZpY2UgIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxuXG4gICAgcXVlcnkocmVxOiBhbnkpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG4gICAgICAgIGxldCBwYXJhbXM6IFVSTFNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICAgICAgcGFyYW1zLnNldCgnZnJvbURhdGUnLCByZXEuZnJvbURhdGUpO1xuICAgICAgICBwYXJhbXMuc2V0KCd0b0RhdGUnLCByZXEudG9EYXRlKTtcbiAgICAgICAgcGFyYW1zLnNldCgncGFnZScsIHJlcS5wYWdlKTtcbiAgICAgICAgcGFyYW1zLnNldCgnc2l6ZScsIHJlcS5zaXplKTtcbiAgICAgICAgcGFyYW1zLnNldCgnc29ydCcsIHJlcS5zb3J0KTtcblxuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHNlYXJjaDogcGFyYW1zXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ21hbmFnZW1lbnQvYXVkaXRzJywgb3B0aW9ucyk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9hdWRpdHMvYXVkaXRzLnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiAqbmdJZj1cXFwiYWxsQ29uZmlndXJhdGlvbiAmJiBjb25maWd1cmF0aW9uXFxcIj4gPGgyIGpoaVRyYW5zbGF0ZT1cXFwiY29uZmlndXJhdGlvbi50aXRsZVxcXCI+Q29uZmlndXJhdGlvbjwvaDI+IDxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiY29uZmlndXJhdGlvbi5maWx0ZXJcXFwiPkZpbHRlciAoYnkgcHJlZml4KTwvc3Bhbj4gPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIFsobmdNb2RlbCldPVxcXCJmaWx0ZXJcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiPiA8bGFiZWw+U3ByaW5nIGNvbmZpZ3VyYXRpb248L2xhYmVsPiA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtYm9yZGVyZWQgdGFibGUtcmVzcG9uc2l2ZSBkLXRhYmxlXFxcIj4gPHRoZWFkPiA8dHI+IDx0aCBjbGFzcz1cXFwidy00MFxcXCIgKGNsaWNrKT1cXFwib3JkZXJQcm9wID0gJ3ByZWZpeCc7IHJldmVyc2U9IXJldmVyc2VcXFwiPjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiY29uZmlndXJhdGlvbi50YWJsZS5wcmVmaXhcXFwiPlByZWZpeDwvc3Bhbj48L3RoPiA8dGggY2xhc3M9XFxcInctNjBcXFwiIChjbGljayk9XFxcIm9yZGVyUHJvcCA9ICdwcm9wZXJ0aWVzJzsgcmV2ZXJzZT0hcmV2ZXJzZVxcXCI+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJjb25maWd1cmF0aW9uLnRhYmxlLnByb3BlcnRpZXNcXFwiPlByb3BlcnRpZXM8L3NwYW4+PC90aD4gPC90cj4gPC90aGVhZD4gPHRib2R5PiA8dHIgKm5nRm9yPVxcXCJsZXQgZW50cnkgb2YgKGNvbmZpZ3VyYXRpb24gfCBwdXJlRmlsdGVyOmZpbHRlcjoncHJlZml4JyB8IG9yZGVyQnk6b3JkZXJQcm9wOnJldmVyc2UpXFxcIj4gPHRkPjxzcGFuPnt7ZW50cnkucHJlZml4fX08L3NwYW4+PC90ZD4gPHRkPiA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiICpuZ0Zvcj1cXFwibGV0IGtleSBvZiBrZXlzKGVudHJ5LnByb3BlcnRpZXMpXFxcIj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLTRcXFwiPnt7a2V5fX08L2Rpdj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLThcXFwiPiA8c3BhbiBjbGFzcz1cXFwiZmxvYXQtcmlnaHQgYmFkZ2UgYmFkZ2UtZGVmYXVsdCBicmVha1xcXCI+e3tlbnRyeS5wcm9wZXJ0aWVzW2tleV19fTwvc3Bhbj4gPC9kaXY+IDwvZGl2PiA8L3RkPiA8L3RyPiA8L3Rib2R5PiA8L3RhYmxlPiA8ZGl2ICpuZ0Zvcj1cXFwibGV0IGtleSBvZiBrZXlzKGFsbENvbmZpZ3VyYXRpb24pXFxcIj4gPGxhYmVsPjxzcGFuPnt7a2V5fX08L3NwYW4+PC9sYWJlbD4gPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zbSB0YWJsZS1zdHJpcGVkIHRhYmxlLWJvcmRlcmVkIHRhYmxlLXJlc3BvbnNpdmUgZC10YWJsZVxcXCI+IDx0aGVhZD4gPHRyPiA8dGggY2xhc3M9XFxcInctNDBcXFwiPlByb3BlcnR5PC90aD4gPHRoIGNsYXNzPVxcXCJ3LTYwXFxcIj5WYWx1ZTwvdGg+IDwvdHI+IDwvdGhlYWQ+IDx0Ym9keT4gPHRyICpuZ0Zvcj1cXFwibGV0IGl0ZW0gb2YgYWxsQ29uZmlndXJhdGlvbltrZXldXFxcIj4gPHRkIGNsYXNzPVxcXCJicmVha1xcXCI+e3tpdGVtLmtleX19PC90ZD4gPHRkIGNsYXNzPVxcXCJicmVha1xcXCI+IDxzcGFuIGNsYXNzPVxcXCJmbG9hdC1yaWdodCBiYWRnZSBiYWRnZS1kZWZhdWx0IGJyZWFrXFxcIj57e2l0ZW0udmFsfX08L3NwYW4+IDwvdGQ+IDwvdHI+IDwvdGJvZHk+IDwvdGFibGU+IDwvZGl2PiA8L2Rpdj4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2NvbmZpZ3VyYXRpb24vY29uZmlndXJhdGlvbi5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2NvbmZpZ3VyYXRpb24vY29uZmlndXJhdGlvbi5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSmhpTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnbmctamhpcHN0ZXInO1xuXG5pbXBvcnQgeyBKaGlDb25maWd1cmF0aW9uU2VydmljZSB9IGZyb20gJy4vY29uZmlndXJhdGlvbi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqaGktY29uZmlndXJhdGlvbicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NvbmZpZ3VyYXRpb24uY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEpoaUNvbmZpZ3VyYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGFsbENvbmZpZ3VyYXRpb246IGFueSA9IG51bGw7XG4gICAgY29uZmlndXJhdGlvbjogYW55ID0gbnVsbDtcbiAgICBjb25maWdLZXlzOiBhbnlbXTtcbiAgICBmaWx0ZXI6IHN0cmluZztcbiAgICBvcmRlclByb3A6IHN0cmluZztcbiAgICByZXZlcnNlOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgamhpTGFuZ3VhZ2VTZXJ2aWNlOiBKaGlMYW5ndWFnZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgY29uZmlndXJhdGlvblNlcnZpY2U6IEpoaUNvbmZpZ3VyYXRpb25TZXJ2aWNlXG4gICAgKSB7XG4gICAgICAgIHRoaXMuamhpTGFuZ3VhZ2VTZXJ2aWNlLnNldExvY2F0aW9ucyhbJ2NvbmZpZ3VyYXRpb24nXSk7XG4gICAgICAgIHRoaXMuY29uZmlnS2V5cyA9IFtdO1xuICAgICAgICB0aGlzLmZpbHRlciA9ICcnO1xuICAgICAgICB0aGlzLm9yZGVyUHJvcCA9ICdwcmVmaXgnO1xuICAgICAgICB0aGlzLnJldmVyc2UgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBrZXlzKGRpY3QpOiBBcnJheTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIChkaWN0ID09PSB1bmRlZmluZWQpID8gW10gOiBPYmplY3Qua2V5cyhkaWN0KTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uU2VydmljZS5nZXQoKS5zdWJzY3JpYmUoKGNvbmZpZ3VyYXRpb24pID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb247XG5cbiAgICAgICAgICAgIGZvciAobGV0IGNvbmZpZyBvZiBjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbmZpZy5wcm9wZXJ0aWVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maWdLZXlzLnB1c2goT2JqZWN0LmtleXMoY29uZmlnLnByb3BlcnRpZXMpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvblNlcnZpY2UuZ2V0RW52KCkuc3Vic2NyaWJlKChjb25maWd1cmF0aW9uKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFsbENvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2NvbmZpZ3VyYXRpb24vY29uZmlndXJhdGlvbi5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEpoaUNvbmZpZ3VyYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbmZpZ3VyYXRpb24uY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IGNvbmZpZ3VyYXRpb25Sb3V0ZTogUm91dGUgPSB7XG4gIHBhdGg6ICdqaGktY29uZmlndXJhdGlvbicsXG4gIGNvbXBvbmVudDogSmhpQ29uZmlndXJhdGlvbkNvbXBvbmVudCxcbiAgZGF0YToge1xuICAgIHBhZ2VUaXRsZTogJ2NvbmZpZ3VyYXRpb24udGl0bGUnXG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2NvbmZpZ3VyYXRpb24vY29uZmlndXJhdGlvbi5yb3V0ZS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBKaGlDb25maWd1cmF0aW9uU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHtcbiAgICB9XG5cbiAgICBnZXQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ21hbmFnZW1lbnQvY29uZmlncHJvcHMnKS5tYXAoKHJlczogUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGxldCBwcm9wZXJ0aWVzOiBhbnlbXSA9IFtdO1xuXG4gICAgICAgICAgICBjb25zdCBwcm9wZXJ0aWVzT2JqZWN0ID0gcmVzLmpzb24oKTtcblxuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHByb3BlcnRpZXNPYmplY3QpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcGVydGllc09iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXMucHVzaChwcm9wZXJ0aWVzT2JqZWN0W2tleV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHByb3BlcnRpZXMuc29ydCgocHJvcGVydHlBLCBwcm9wZXJ0eUIpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHByb3BlcnR5QS5wcmVmaXggPT09IHByb3BlcnR5Qi5wcmVmaXgpID8gMCA6XG4gICAgICAgICAgICAgICAgICAgICAgIChwcm9wZXJ0eUEucHJlZml4IDwgcHJvcGVydHlCLnByZWZpeCkgPyAtMSA6IDE7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0RW52KCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdtYW5hZ2VtZW50L2VudicpLm1hcCgocmVzOiBSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHByb3BlcnRpZXM6IGFueSA9IHt9O1xuXG4gICAgICAgICAgICBjb25zdCBwcm9wZXJ0aWVzT2JqZWN0ID0gcmVzLmpzb24oKTtcblxuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHByb3BlcnRpZXNPYmplY3QpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcGVydGllc09iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWxzT2JqZWN0ID0gcHJvcGVydGllc09iamVjdFtrZXldO1xuICAgICAgICAgICAgICAgICAgICBsZXQgdmFsczogYW55W10gPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB2YWxLZXkgaW4gdmFsc09iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHNPYmplY3QuaGFzT3duUHJvcGVydHkodmFsS2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHMucHVzaCh7a2V5OiB2YWxLZXksIHZhbDogdmFsc09iamVjdFt2YWxLZXldfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllc1trZXldID0gdmFscztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBwcm9wZXJ0aWVzO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2NvbmZpZ3VyYXRpb24vY29uZmlndXJhdGlvbi5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxpZnJhbWUgc3JjPVxcXCJzd2FnZ2VyLXVpL2luZGV4Lmh0bWxcXFwiIHdpZHRoPVxcXCIxMDAlXFxcIiBoZWlnaHQ9XFxcIjkwMFxcXCIgc2VhbWxlc3MgdGFyZ2V0PVxcXCJfdG9wXFxcIiB0aXRsZT1cXFwiU3dhZ2dlciBVSVxcXCIgY2xhc3M9XFxcImJvcmRlci0wXFxcIj48L2lmcmFtZT4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2RvY3MvZG9jcy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2RvY3MvZG9jcy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEpoaUxhbmd1YWdlU2VydmljZSB9IGZyb20gJ25nLWpoaXBzdGVyJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqaGktZG9jcycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2RvY3MuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEpoaURvY3NDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yIChcbiAgICAgICAgcHJpdmF0ZSBqaGlMYW5ndWFnZVNlcnZpY2U6IEpoaUxhbmd1YWdlU2VydmljZVxuICAgICkge1xuICAgICAgICB0aGlzLmpoaUxhbmd1YWdlU2VydmljZS5zZXRMb2NhdGlvbnMoWydnbG9iYWwnXSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9kb2NzL2RvY3MuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBKaGlEb2NzQ29tcG9uZW50IH0gZnJvbSAnLi9kb2NzLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBkb2NzUm91dGU6IFJvdXRlID0ge1xuICBwYXRoOiAnZG9jcycsXG4gIGNvbXBvbmVudDogSmhpRG9jc0NvbXBvbmVudCxcbiAgZGF0YToge1xuICAgIHBhZ2VUaXRsZTogJ2dsb2JhbC5tZW51LmFkbWluLmFwaWRvY3MnXG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2RvY3MvZG9jcy5yb3V0ZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPiA8aDQgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIiBpZD1cXFwic2hvd0hlYWx0aExhYmVsXFxcIj4ge3snaGVhbHRoLmluZGljYXRvci4nICsgYmFzZU5hbWUoY3VycmVudEhlYWx0aC5uYW1lKSB8IHRyYW5zbGF0ZX19IHt7c3ViU3lzdGVtTmFtZShjdXJyZW50SGVhbHRoLm5hbWUpfX0gPC9oND4gPGJ1dHRvbiBhcmlhLWxhYmVsPVxcXCJDbG9zZVxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIChjbGljayk9XFxcImFjdGl2ZU1vZGFsLmRpc21pc3MoJ2Nsb3NlZCcpXFxcIj48c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+JnRpbWVzOzwvc3Bhbj4gPC9idXR0b24+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5IHBhZFxcXCI+IDxkaXYgKm5nSWY9XFxcImN1cnJlbnRIZWFsdGguZGV0YWlsc1xcXCI+IDxoNSBqaGlUcmFuc2xhdGU9XFxcImhlYWx0aC5kZXRhaWxzLnByb3BlcnRpZXNcXFwiPlByb3BlcnRpZXM8L2g1PiA8ZGl2IGNsYXNzPVxcXCJ0YWJsZS1yZXNwb25zaXZlXFxcIj4gPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zdHJpcGVkXFxcIj4gPHRoZWFkPiA8dHI+IDx0aCBjbGFzcz1cXFwidGV4dC1sZWZ0XFxcIiBqaGlUcmFuc2xhdGU9XFxcImhlYWx0aC5kZXRhaWxzLm5hbWVcXFwiPk5hbWU8L3RoPiA8dGggY2xhc3M9XFxcInRleHQtbGVmdFxcXCIgamhpVHJhbnNsYXRlPVxcXCJoZWFsdGguZGV0YWlscy52YWx1ZVxcXCI+VmFsdWU8L3RoPiA8L3RyPiA8L3RoZWFkPiA8dGJvZHk+IDx0ciAqbmdGb3I9XFxcImxldCBlbnRyeSBvZiBjdXJyZW50SGVhbHRoLmRldGFpbHMgfCBrZXlzXFxcIj4gPHRkIGNsYXNzPVxcXCJ0ZXh0LWxlZnRcXFwiPnt7ZW50cnkua2V5fX08L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtbGVmdFxcXCI+e3tyZWFkYWJsZVZhbHVlKGVudHJ5LnZhbHVlKX19PC90ZD4gPC90cj4gPC90Ym9keT4gPC90YWJsZT4gPC9kaXY+IDwvZGl2PiA8ZGl2ICpuZ0lmPVxcXCJjdXJyZW50SGVhbHRoLmVycm9yXFxcIj4gPGg0IGpoaVRyYW5zbGF0ZT1cXFwiaGVhbHRoLmRldGFpbHMuZXJyb3JcXFwiPkVycm9yPC9oND4gPHByZT57e2N1cnJlbnRIZWFsdGguZXJyb3J9fTwvcHJlPiA8L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+IDxidXR0b24gZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCIgY2xhc3M9XFxcImJ0biBidG4tc2Vjb25kYXJ5IGZsb2F0LWxlZnRcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgKGNsaWNrKT1cXFwiYWN0aXZlTW9kYWwuZGlzbWlzcygnY2xvc2VkJylcXFwiPkRvbmU8L2J1dHRvbj4gPC9kaXY+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9oZWFsdGgvaGVhbHRoLW1vZGFsLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vaGVhbHRoL2hlYWx0aC1tb2RhbC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nYkFjdGl2ZU1vZGFsIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuXG5pbXBvcnQgeyBKaGlIZWFsdGhTZXJ2aWNlIH0gZnJvbSAnLi9oZWFsdGguc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLWhlYWx0aC1tb2RhbCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2hlYWx0aC1tb2RhbC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSmhpSGVhbHRoTW9kYWxDb21wb25lbnQge1xuXG4gICAgY3VycmVudEhlYWx0aDogYW55O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBoZWFsdGhTZXJ2aWNlOiBKaGlIZWFsdGhTZXJ2aWNlLCBwdWJsaWMgYWN0aXZlTW9kYWw6IE5nYkFjdGl2ZU1vZGFsKSB7fVxuXG4gICAgYmFzZU5hbWUobmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5oZWFsdGhTZXJ2aWNlLmdldEJhc2VOYW1lKG5hbWUpO1xuICAgIH1cblxuICAgIHN1YlN5c3RlbU5hbWUobmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5oZWFsdGhTZXJ2aWNlLmdldFN1YlN5c3RlbU5hbWUobmFtZSk7XG4gICAgfVxuXG4gICAgcmVhZGFibGVWYWx1ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRIZWFsdGgubmFtZSAhPT0gJ2Rpc2tTcGFjZScpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2hvdWxkIGRpc3BsYXkgc3RvcmFnZSBzcGFjZSBpbiBhbiBodW1hbiByZWFkYWJsZSB1bml0XG4gICAgICAgIGxldCB2YWwgPSB2YWx1ZSAvIDEwNzM3NDE4MjQ7XG4gICAgICAgIGlmICh2YWwgPiAxKSB7IC8vIFZhbHVlXG4gICAgICAgICAgICByZXR1cm4gdmFsLnRvRml4ZWQoMikgKyAnIEdCJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAodmFsdWUgLyAxMDQ4NTc2KS50b0ZpeGVkKDIpICsgJyBNQic7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2hlYWx0aC9oZWFsdGgtbW9kYWwuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXY+IDxoMj4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJoZWFsdGgudGl0bGVcXFwiPkhlYWx0aCBDaGVja3M8L3NwYW4+IDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBmbG9hdC1yaWdodFxcXCIgKGNsaWNrKT1cXFwicmVmcmVzaCgpXFxcIj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXJlZnJlc2hcXFwiPjwvc3Bhbj4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJoZWFsdGgucmVmcmVzaC5idXR0b25cXFwiPlJlZnJlc2g8L3NwYW4+IDwvYnV0dG9uPiA8L2gyPiA8ZGl2IGNsYXNzPVxcXCJ0YWJsZS1yZXNwb25zaXZlXFxcIj4gPHRhYmxlIGlkPVxcXCJoZWFsdGhDaGVja1xcXCIgY2xhc3M9XFxcInRhYmxlIHRhYmxlLXN0cmlwZWRcXFwiPiA8dGhlYWQ+IDx0cj4gPHRoIGpoaVRyYW5zbGF0ZT1cXFwiaGVhbHRoLnRhYmxlLnNlcnZpY2VcXFwiPlNlcnZpY2UgTmFtZTwvdGg+IDx0aCBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiaGVhbHRoLnRhYmxlLnN0YXR1c1xcXCI+U3RhdHVzPC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCIgamhpVHJhbnNsYXRlPVxcXCJoZWFsdGguZGV0YWlscy5kZXRhaWxzXFxcIj5EZXRhaWxzPC90aD4gPC90cj4gPC90aGVhZD4gPHRib2R5PiA8dHIgKm5nRm9yPVxcXCJsZXQgaGVhbHRoIG9mIGhlYWx0aERhdGFcXFwiPiA8dGQ+e3snaGVhbHRoLmluZGljYXRvci4nICsgYmFzZU5hbWUoaGVhbHRoLm5hbWUpIHwgdHJhbnNsYXRlfX0ge3tzdWJTeXN0ZW1OYW1lKGhlYWx0aC5uYW1lKX19PC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+IDxzcGFuIGNsYXNzPVxcXCJiYWRnZVxcXCIgW25nQ2xhc3NdPVxcXCJnZXRCYWRnZUNsYXNzKGhlYWx0aC5zdGF0dXMpXFxcIiBqaGlUcmFuc2xhdGU9XFxcInt7J2hlYWx0aC5zdGF0dXMuJyArIGhlYWx0aC5zdGF0dXN9fVxcXCI+IHt7aGVhbHRoLnN0YXR1c319IDwvc3Bhbj4gPC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+IDxhIGNsYXNzPVxcXCJoYW5kXFxcIiAoY2xpY2spPVxcXCJzaG93SGVhbHRoKGhlYWx0aClcXFwiICpuZ0lmPVxcXCJoZWFsdGguZGV0YWlscyB8fCBoZWFsdGguZXJyb3JcXFwiPiA8aSBjbGFzcz1cXFwiZmEgZmEtZXllXFxcIj48L2k+IDwvYT4gPC90ZD4gPC90cj4gPC90Ym9keT4gPC90YWJsZT4gPC9kaXY+IDwvZGl2PiBcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vaGVhbHRoL2hlYWx0aC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2hlYWx0aC9oZWFsdGguY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nYk1vZGFsIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHsgSmhpTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnbmctamhpcHN0ZXInO1xuXG5pbXBvcnQgeyBKaGlIZWFsdGhTZXJ2aWNlIH0gZnJvbSAnLi9oZWFsdGguc2VydmljZSc7XG5pbXBvcnQgeyBKaGlIZWFsdGhNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vaGVhbHRoLW1vZGFsLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLWhlYWx0aCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2hlYWx0aC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEpoaUhlYWx0aENoZWNrQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBoZWFsdGhEYXRhOiBhbnk7XG4gICAgdXBkYXRpbmdIZWFsdGg6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBqaGlMYW5ndWFnZVNlcnZpY2U6IEpoaUxhbmd1YWdlU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE5nYk1vZGFsLFxuICAgICAgICBwcml2YXRlIGhlYWx0aFNlcnZpY2U6IEpoaUhlYWx0aFNlcnZpY2VcbiAgICApIHtcbiAgICAgICAgdGhpcy5qaGlMYW5ndWFnZVNlcnZpY2Uuc2V0TG9jYXRpb25zKFsnaGVhbHRoJ10pO1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIH1cblxuICAgIGJhc2VOYW1lKG5hbWU6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5oZWFsdGhTZXJ2aWNlLmdldEJhc2VOYW1lKG5hbWUpO1xuICAgIH1cblxuICAgIGdldEJhZGdlQ2xhc3Moc3RhdHVzU3RhdGUpIHtcbiAgICAgICAgaWYgKHN0YXR1c1N0YXRlID09PSAnVVAnKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2JhZGdlLXN1Y2Nlc3MnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICdiYWRnZS1kYW5nZXInO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVmcmVzaCgpIHtcbiAgICAgICAgdGhpcy51cGRhdGluZ0hlYWx0aCA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5oZWFsdGhTZXJ2aWNlLmNoZWNrSGVhbHRoKCkuc3Vic2NyaWJlKGhlYWx0aCA9PiB7XG4gICAgICAgICAgICB0aGlzLmhlYWx0aERhdGEgPSB0aGlzLmhlYWx0aFNlcnZpY2UudHJhbnNmb3JtSGVhbHRoRGF0YShoZWFsdGgpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGluZ0hlYWx0aCA9IGZhbHNlO1xuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3Iuc3RhdHVzID09PSA1MDMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhlYWx0aERhdGEgPSB0aGlzLmhlYWx0aFNlcnZpY2UudHJhbnNmb3JtSGVhbHRoRGF0YShlcnJvci5qc29uKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRpbmdIZWFsdGggPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2hvd0hlYWx0aChoZWFsdGg6IGFueSkge1xuICAgICAgICBjb25zdCBtb2RhbFJlZiAgPSB0aGlzLm1vZGFsU2VydmljZS5vcGVuKEpoaUhlYWx0aE1vZGFsQ29tcG9uZW50KTtcbiAgICAgICAgbW9kYWxSZWYuY29tcG9uZW50SW5zdGFuY2UuY3VycmVudEhlYWx0aCA9IGhlYWx0aDtcbiAgICAgICAgbW9kYWxSZWYucmVzdWx0LnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgLy8gTGVmdCBibGFuayBpbnRlbnRpb25hbGx5LCBub3RoaW5nIHRvIGRvIGhlcmVcbiAgICAgICAgfSwgKHJlYXNvbikgPT4ge1xuICAgICAgICAgICAgLy8gTGVmdCBibGFuayBpbnRlbnRpb25hbGx5LCBub3RoaW5nIHRvIGRvIGhlcmVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3ViU3lzdGVtTmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhbHRoU2VydmljZS5nZXRTdWJTeXN0ZW1OYW1lKG5hbWUpO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9oZWFsdGgvaGVhbHRoLmNvbXBvbmVudC50cyIsImltcG9ydCB7IFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgSmhpSGVhbHRoQ2hlY2tDb21wb25lbnQgfSBmcm9tICcuL2hlYWx0aC5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgaGVhbHRoUm91dGU6IFJvdXRlID0ge1xuICBwYXRoOiAnamhpLWhlYWx0aCcsXG4gIGNvbXBvbmVudDogSmhpSGVhbHRoQ2hlY2tDb21wb25lbnQsXG4gIGRhdGE6IHtcbiAgICBwYWdlVGl0bGU6ICdoZWFsdGgudGl0bGUnXG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2hlYWx0aC9oZWFsdGgucm91dGUudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSmhpSGVhbHRoU2VydmljZSB7XG5cbiAgICBzZXBhcmF0b3I6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIGh0dHA6IEh0dHApIHtcbiAgICAgICAgdGhpcy5zZXBhcmF0b3IgPSAnLic7XG4gICAgfVxuXG4gICAgY2hlY2tIZWFsdGgoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ21hbmFnZW1lbnQvaGVhbHRoJykubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKTtcbiAgICB9XG5cbiAgICB0cmFuc2Zvcm1IZWFsdGhEYXRhKGRhdGEpOiBhbnkge1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSBbXTtcbiAgICAgICAgdGhpcy5mbGF0dGVuSGVhbHRoRGF0YShyZXNwb25zZSwgbnVsbCwgZGF0YSk7XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9XG5cbiAgICBnZXRCYXNlTmFtZShuYW1lKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgICAgIGxldCBzcGxpdCA9IG5hbWUuc3BsaXQoJy4nKTtcbiAgICAgICAgICAgIHJldHVybiBzcGxpdFswXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFN1YlN5c3RlbU5hbWUobmFtZSk6IHN0cmluZyB7XG4gICAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgICAgICBsZXQgc3BsaXQgPSBuYW1lLnNwbGl0KCcuJyk7XG4gICAgICAgICAgICBzcGxpdC5zcGxpY2UoMCwgMSk7XG4gICAgICAgICAgICBsZXQgcmVtYWluZGVyID0gc3BsaXQuam9pbignLicpO1xuICAgICAgICAgICAgcmV0dXJuIHJlbWFpbmRlciA/ICcgLSAnICsgcmVtYWluZGVyIDogJyc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiBwcml2YXRlIG1ldGhvZHMgKi9cbiAgICBwcml2YXRlIGFkZEhlYWx0aE9iamVjdChyZXN1bHQsIGlzTGVhZiwgaGVhbHRoT2JqZWN0LCBuYW1lKTogYW55IHtcblxuICAgICAgICBsZXQgc3RhdHVzOiBhbnk7XG4gICAgICAgIGxldCBlcnJvcjogYW55O1xuICAgICAgICBsZXQgaGVhbHRoRGF0YTogYW55ID0ge1xuICAgICAgICAgICAgJ25hbWUnOiBuYW1lLFxuICAgICAgICAgICAgJ2Vycm9yJzogZXJyb3IsXG4gICAgICAgICAgICAnc3RhdHVzJzogc3RhdHVzXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IGRldGFpbHMgPSB7fTtcbiAgICAgICAgbGV0IGhhc0RldGFpbHMgPSBmYWxzZTtcblxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gaGVhbHRoT2JqZWN0KSB7XG4gICAgICAgICAgICBpZiAoaGVhbHRoT2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBoZWFsdGhPYmplY3Rba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSAnc3RhdHVzJyB8fCBrZXkgPT09ICdlcnJvcicpIHtcbiAgICAgICAgICAgICAgICAgICAgaGVhbHRoRGF0YVtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzSGVhbHRoT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsc1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNEZXRhaWxzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkZCB0aGUgZGV0YWlsc1xuICAgICAgICBpZiAoaGFzRGV0YWlscykge1xuICAgICAgICAgICAgaGVhbHRoRGF0YS5kZXRhaWxzID0gZGV0YWlscztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE9ubHkgYWRkIG5vZGVzIGlmIHRoZXkgcHJvdmlkZSBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gICAgICAgIGlmIChpc0xlYWYgfHwgaGFzRGV0YWlscyB8fCBoZWFsdGhEYXRhLmVycm9yKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChoZWFsdGhEYXRhKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGVhbHRoRGF0YTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGZsYXR0ZW5IZWFsdGhEYXRhIChyZXN1bHQsIHBhdGgsIGRhdGEpOiBhbnkge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gZGF0YSkge1xuICAgICAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGRhdGFba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0hlYWx0aE9iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzU3ViU3lzdGVtKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRIZWFsdGhPYmplY3QocmVzdWx0LCBmYWxzZSwgdmFsdWUsIHRoaXMuZ2V0TW9kdWxlTmFtZShwYXRoLCBrZXkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmxhdHRlbkhlYWx0aERhdGEocmVzdWx0LCB0aGlzLmdldE1vZHVsZU5hbWUocGF0aCwga2V5KSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRIZWFsdGhPYmplY3QocmVzdWx0LCB0cnVlLCB2YWx1ZSwgdGhpcy5nZXRNb2R1bGVOYW1lKHBhdGgsIGtleSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldE1vZHVsZU5hbWUgKHBhdGgsIG5hbWUpOiBzdHJpbmcge1xuICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICBpZiAocGF0aCAmJiBuYW1lKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBwYXRoICsgdGhpcy5zZXBhcmF0b3IgKyBuYW1lO1xuICAgICAgICB9ICBlbHNlIGlmIChwYXRoKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBwYXRoO1xuICAgICAgICB9IGVsc2UgaWYgKG5hbWUpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IG5hbWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgPSAnJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHByaXZhdGUgaGFzU3ViU3lzdGVtIChoZWFsdGhPYmplY3QpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBoZWFsdGhPYmplY3QpIHtcbiAgICAgICAgICAgIGlmIChoZWFsdGhPYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGhlYWx0aE9iamVjdFtrZXldO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS5zdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHByaXZhdGUgaXNIZWFsdGhPYmplY3QgKGhlYWx0aE9iamVjdCk6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XG5cbiAgICAgICAgZm9yIChsZXQga2V5IGluIGhlYWx0aE9iamVjdCkge1xuICAgICAgICAgICAgaWYgKGhlYWx0aE9iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gJ3N0YXR1cycpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vaGVhbHRoL2hlYWx0aC5zZXJ2aWNlLnRzIiwiZXhwb3J0ICogZnJvbSAnLi9hdWRpdHMvYXVkaXRzLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2F1ZGl0cy9hdWRpdHMuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2F1ZGl0cy9hdWRpdHMucm91dGUnO1xuZXhwb3J0ICogZnJvbSAnLi9hdWRpdHMvYXVkaXQubW9kZWwnO1xuZXhwb3J0ICogZnJvbSAnLi9hdWRpdHMvYXVkaXQtZGF0YS5tb2RlbCc7XG5leHBvcnQgKiBmcm9tICcuL2NvbmZpZ3VyYXRpb24vY29uZmlndXJhdGlvbi5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9jb25maWd1cmF0aW9uL2NvbmZpZ3VyYXRpb24uc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2NvbmZpZ3VyYXRpb24vY29uZmlndXJhdGlvbi5yb3V0ZSc7XG5leHBvcnQgKiBmcm9tICcuL2RvY3MvZG9jcy5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9kb2NzL2RvY3Mucm91dGUnO1xuZXhwb3J0ICogZnJvbSAnLi9oZWFsdGgvaGVhbHRoLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2hlYWx0aC9oZWFsdGgtbW9kYWwuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vaGVhbHRoL2hlYWx0aC5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vaGVhbHRoL2hlYWx0aC5yb3V0ZSc7XG5leHBvcnQgKiBmcm9tICcuL2xvZ3MvbG9ncy5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9sb2dzL2xvZ3Muc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2xvZ3MvbG9ncy5yb3V0ZSc7XG5leHBvcnQgKiBmcm9tICcuL2xvZ3MvbG9nLm1vZGVsJztcbmV4cG9ydCAqIGZyb20gJy4vbWV0cmljcy9tZXRyaWNzLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL21ldHJpY3MvbWV0cmljcy1tb2RhbC5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9tZXRyaWNzL21ldHJpY3Muc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL21ldHJpY3MvbWV0cmljcy5yb3V0ZSc7XG5leHBvcnQgKiBmcm9tICcuL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQtZGlhbG9nLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQtZGVsZXRlLWRpYWxvZy5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LWRldGFpbC5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQucm91dGUnO1xuZXhwb3J0ICogZnJvbSAnLi91c2VyLW1hbmFnZW1lbnQvdXNlci1tb2RhbC5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vYWRtaW4ucm91dGUnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9pbmRleC50cyIsImV4cG9ydCBjbGFzcyBMb2cge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgbmFtZTogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgbGV2ZWw6IHN0cmluZ1xuICAgICkgeyB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2xvZ3MvbG9nLm1vZGVsLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInRhYmxlLXJlc3BvbnNpdmVcXFwiICpuZ0lmPVxcXCJsb2dnZXJzXFxcIj4gPGgyIGpoaVRyYW5zbGF0ZT1cXFwibG9ncy50aXRsZVxcXCI+TG9nczwvaDI+IDxwIGpoaVRyYW5zbGF0ZT1cXFwibG9ncy5uYmxvZ2dlcnNcXFwiIHRyYW5zbGF0ZVZhbHVlcz1cXFwie3RvdGFsOiAne3sgbG9nZ2Vycy5sZW5ndGggfX0nfVxcXCI+VGhlcmUgYXJlIHt7IGxvZ2dlcnMubGVuZ3RoIH19IGxvZ2dlcnMuPC9wPiA8c3BhbiBqaGlUcmFuc2xhdGU9XFxcImxvZ3MuZmlsdGVyXFxcIj5GaWx0ZXI8L3NwYW4+IDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBbKG5nTW9kZWwpXT1cXFwiZmlsdGVyXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIj4gPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1jb25kZW5zZWQgdGFibGUtc3RyaXBlZCB0YWJsZS1ib3JkZXJlZFxcXCI+IDx0aGVhZD4gPHRyIHRpdGxlPVxcXCJjbGljayB0byBvcmRlclxcXCI+IDx0aCAoY2xpY2spPVxcXCJvcmRlclByb3AgPSAnbmFtZSc7IHJldmVyc2U9IXJldmVyc2VcXFwiPjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwibG9ncy50YWJsZS5uYW1lXFxcIj5OYW1lPC9zcGFuPjwvdGg+IDx0aCAoY2xpY2spPVxcXCJvcmRlclByb3AgPSAnbGV2ZWwnOyByZXZlcnNlPSFyZXZlcnNlXFxcIj48c3BhbiBqaGlUcmFuc2xhdGU9XFxcImxvZ3MudGFibGUubGV2ZWxcXFwiPkxldmVsPC9zcGFuPjwvdGg+IDwvdHI+IDwvdGhlYWQ+IDx0ciAqbmdGb3I9XFxcImxldCBsb2dnZXIgb2YgKGxvZ2dlcnMgfCBwdXJlRmlsdGVyOmZpbHRlcjonbmFtZScgfCBvcmRlckJ5Om9yZGVyUHJvcDpyZXZlcnNlKVxcXCI+IDx0ZD48c21hbGw+e3tsb2dnZXIubmFtZSB8IHNsaWNlOjA6MTQwfX08L3NtYWxsPjwvdGQ+IDx0ZD4gPGJ1dHRvbiAoY2xpY2spPVxcXCJjaGFuZ2VMZXZlbChsb2dnZXIubmFtZSwgJ1RSQUNFJylcXFwiIFtuZ0NsYXNzXT1cXFwiKGxvZ2dlci5sZXZlbD09J1RSQUNFJykgPyAnYnRuLWRhbmdlcicgOiAnYnRuLXNlY29uZGFyeSdcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNtXFxcIj5UUkFDRTwvYnV0dG9uPiA8YnV0dG9uIChjbGljayk9XFxcImNoYW5nZUxldmVsKGxvZ2dlci5uYW1lLCAnREVCVUcnKVxcXCIgW25nQ2xhc3NdPVxcXCIobG9nZ2VyLmxldmVsPT0nREVCVUcnKSA/ICdidG4td2FybmluZycgOiAnYnRuLXNlY29uZGFyeSdcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNtXFxcIj5ERUJVRzwvYnV0dG9uPiA8YnV0dG9uIChjbGljayk9XFxcImNoYW5nZUxldmVsKGxvZ2dlci5uYW1lLCAnSU5GTycpXFxcIiBbbmdDbGFzc109XFxcIihsb2dnZXIubGV2ZWw9PSdJTkZPJykgPyAnYnRuLWluZm8nIDogJ2J0bi1zZWNvbmRhcnknXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zbVxcXCI+SU5GTzwvYnV0dG9uPiA8YnV0dG9uIChjbGljayk9XFxcImNoYW5nZUxldmVsKGxvZ2dlci5uYW1lLCAnV0FSTicpXFxcIiBbbmdDbGFzc109XFxcIihsb2dnZXIubGV2ZWw9PSdXQVJOJykgPyAnYnRuLXN1Y2Nlc3MnIDogJ2J0bi1zZWNvbmRhcnknXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zbVxcXCI+V0FSTjwvYnV0dG9uPiA8YnV0dG9uIChjbGljayk9XFxcImNoYW5nZUxldmVsKGxvZ2dlci5uYW1lLCAnRVJST1InKVxcXCIgW25nQ2xhc3NdPVxcXCIobG9nZ2VyLmxldmVsPT0nRVJST1InKSA/ICdidG4tcHJpbWFyeScgOiAnYnRuLXNlY29uZGFyeSdcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNtXFxcIj5FUlJPUjwvYnV0dG9uPiA8L3RkPiA8L3RyPiA8L3RhYmxlPiA8L2Rpdj4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2xvZ3MvbG9ncy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL2xvZ3MvbG9ncy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSmhpTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnbmctamhpcHN0ZXInO1xuXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL2xvZy5tb2RlbCc7XG5pbXBvcnQgeyBMb2dzU2VydmljZSB9IGZyb20gJy4vbG9ncy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqaGktbG9ncycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2xvZ3MuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBMb2dzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGxvZ2dlcnM6IExvZ1tdO1xuICAgIGZpbHRlcjogc3RyaW5nO1xuICAgIG9yZGVyUHJvcDogc3RyaW5nO1xuICAgIHJldmVyc2U6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvciAoXG4gICAgICAgIHByaXZhdGUgamhpTGFuZ3VhZ2VTZXJ2aWNlOiBKaGlMYW5ndWFnZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgbG9nc1NlcnZpY2U6IExvZ3NTZXJ2aWNlXG4gICAgKSB7XG4gICAgICAgIHRoaXMuZmlsdGVyID0gJyc7XG4gICAgICAgIHRoaXMub3JkZXJQcm9wID0gJ25hbWUnO1xuICAgICAgICB0aGlzLnJldmVyc2UgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5qaGlMYW5ndWFnZVNlcnZpY2Uuc2V0TG9jYXRpb25zKFsnbG9ncyddKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5sb2dzU2VydmljZS5maW5kQWxsKCkuc3Vic2NyaWJlKGxvZ2dlcnMgPT4gdGhpcy5sb2dnZXJzID0gbG9nZ2Vycyk7XG4gICAgfVxuXG4gICAgY2hhbmdlTGV2ZWwgKG5hbWU6IHN0cmluZywgbGV2ZWw6IHN0cmluZykge1xuICAgICAgICBsZXQgbG9nID0gbmV3IExvZyhuYW1lLCBsZXZlbCk7XG4gICAgICAgIHRoaXMubG9nc1NlcnZpY2UuY2hhbmdlTGV2ZWwobG9nKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2dzU2VydmljZS5maW5kQWxsKCkuc3Vic2NyaWJlKGxvZ2dlcnMgPT4gdGhpcy5sb2dnZXJzID0gbG9nZ2Vycyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vbG9ncy9sb2dzLmNvbXBvbmVudC50cyIsImltcG9ydCB7IFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgTG9nc0NvbXBvbmVudCB9IGZyb20gJy4vbG9ncy5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgbG9nc1JvdXRlOiBSb3V0ZSA9IHtcbiAgcGF0aDogJ2xvZ3MnLFxuICBjb21wb25lbnQ6IExvZ3NDb21wb25lbnQsXG4gIGRhdGE6IHtcbiAgICBwYWdlVGl0bGU6ICdsb2dzLnRpdGxlJ1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9sb2dzL2xvZ3Mucm91dGUudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xuXG5pbXBvcnQgeyBMb2cgfSBmcm9tICcuL2xvZy5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2dzU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cblxuICAgIGNoYW5nZUxldmVsKGxvZzogTG9nKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dCgnbWFuYWdlbWVudC9sb2dzJywgbG9nKTtcbiAgICB9XG5cbiAgICBmaW5kQWxsKCk6IE9ic2VydmFibGU8TG9nW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ21hbmFnZW1lbnQvbG9ncycpLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9sb2dzL2xvZ3Muc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCIgPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj4gPGg0IGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCIgamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmp2bS50aHJlYWRzLmR1bXAudGl0bGVcXFwiPlRocmVhZHMgZHVtcDwvaDQ+IDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIChjbGljayk9XFxcImFjdGl2ZU1vZGFsLmRpc21pc3MoJ2Nsb3NlZCcpXFxcIj4mdGltZXM7PC9idXR0b24+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj4gPHNwYW4gY2xhc3M9XFxcImJhZGdlIGJhZGdlLXByaW1hcnlcXFwiIChjbGljayk9XFxcInRocmVhZER1bXBGaWx0ZXIgPSB7fVxcXCI+QWxsJm5ic3A7PHNwYW4gY2xhc3M9XFxcImJhZGdlIGJhZGdlLXBpbGwgYmFkZ2UtZGVmYXVsdFxcXCI+e3t0aHJlYWREdW1wQWxsfX08L3NwYW4+PC9zcGFuPiZuYnNwOyA8c3BhbiBjbGFzcz1cXFwiYmFkZ2UgYmFkZ2Utc3VjY2Vzc1xcXCIgKGNsaWNrKT1cXFwidGhyZWFkRHVtcEZpbHRlciA9IHt0aHJlYWRTdGF0ZTogJ1JVTk5BQkxFJ31cXFwiPlJ1bm5hYmxlJm5ic3A7PHNwYW4gY2xhc3M9XFxcImJhZGdlIGJhZGdlLXBpbGwgYmFkZ2UtZGVmYXVsdFxcXCI+e3t0aHJlYWREdW1wUnVubmFibGV9fTwvc3Bhbj48L3NwYW4+Jm5ic3A7IDxzcGFuIGNsYXNzPVxcXCJiYWRnZSBiYWRnZS1pbmZvXFxcIiAoY2xpY2spPVxcXCJ0aHJlYWREdW1wRmlsdGVyID0ge3RocmVhZFN0YXRlOiAnV0FJVElORyd9XFxcIj5XYWl0aW5nJm5ic3A7PHNwYW4gY2xhc3M9XFxcImJhZGdlIGJhZGdlLXBpbGwgYmFkZ2UtZGVmYXVsdFxcXCI+e3t0aHJlYWREdW1wV2FpdGluZ319PC9zcGFuPjwvc3Bhbj4mbmJzcDsgPHNwYW4gY2xhc3M9XFxcImJhZGdlIGJhZGdlLXdhcm5pbmdcXFwiIChjbGljayk9XFxcInRocmVhZER1bXBGaWx0ZXIgPSB7dGhyZWFkU3RhdGU6ICdUSU1FRF9XQUlUSU5HJ31cXFwiPlRpbWVkIFdhaXRpbmcmbmJzcDs8c3BhbiBjbGFzcz1cXFwiYmFkZ2UgYmFkZ2UtcGlsbCBiYWRnZS1kZWZhdWx0XFxcIj57e3RocmVhZER1bXBUaW1lZFdhaXRpbmd9fTwvc3Bhbj48L3NwYW4+Jm5ic3A7IDxzcGFuIGNsYXNzPVxcXCJiYWRnZSBiYWRnZS1kYW5nZXJcXFwiIChjbGljayk9XFxcInRocmVhZER1bXBGaWx0ZXIgPSB7dGhyZWFkU3RhdGU6ICdCTE9DS0VEJ31cXFwiPkJsb2NrZWQmbmJzcDs8c3BhbiBjbGFzcz1cXFwiYmFkZ2UgYmFkZ2UtcGlsbCBiYWRnZS1kZWZhdWx0XFxcIj57e3RocmVhZER1bXBCbG9ja2VkfX08L3NwYW4+PC9zcGFuPiZuYnNwOyA8ZGl2IGNsYXNzPVxcXCJtdC0yXFxcIj4mbmJzcDs8L2Rpdj4gRmlsdGVyIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBbKG5nTW9kZWwpXT1cXFwidGhyZWFkRHVtcEZpbHRlclxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCI+IDxkaXYgY2xhc3M9XFxcInBhZFxcXCIgKm5nRm9yPVxcXCJsZXQgZW50cnkgb2YgdGhyZWFkRHVtcCB8IHB1cmVGaWx0ZXI6dGhyZWFkRHVtcEZpbHRlcjonbG9ja05hbWUnIHwga2V5c1xcXCI+IDxoNj4gPHNwYW4gY2xhc3M9XFxcImJhZGdlXFxcIiBbbmdDbGFzc109XFxcImdldEJhZGdlQ2xhc3MoZW50cnkudmFsdWUudGhyZWFkU3RhdGUpXFxcIj57e2VudHJ5LnZhbHVlLnRocmVhZFN0YXRlfX08L3NwYW4+Jm5ic3A7e3tlbnRyeS52YWx1ZS50aHJlYWROYW1lfX0gKElEIHt7ZW50cnkudmFsdWUudGhyZWFkSWR9fSkgPGEgKGNsaWNrKT1cXFwiZW50cnkuc2hvdyA9ICFlbnRyeS5zaG93XFxcIiBocmVmPVxcXCJqYXZhc2NyaXB0OnZvaWQoMCk7XFxcIj4gPHNwYW4gW2hpZGRlbl09XFxcImVudHJ5LnNob3dcXFwiIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5qdm0udGhyZWFkcy5kdW1wLnNob3dcXFwiPlNob3cgU3RhY2tUcmFjZTwvc3Bhbj4gPHNwYW4gW2hpZGRlbl09XFxcIiFlbnRyeS5zaG93XFxcIiBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3MuanZtLnRocmVhZHMuZHVtcC5oaWRlXFxcIj5IaWRlIFN0YWNrVHJhY2U8L3NwYW4+IDwvYT4gPC9oNj4gPGRpdiBjbGFzcz1cXFwiY2FyZFxcXCIgW2hpZGRlbl09XFxcIiFlbnRyeS5zaG93XFxcIj4gPGRpdiBjbGFzcz1cXFwiY2FyZC1ibG9ja1xcXCI+IDxkaXYgKm5nRm9yPVxcXCJsZXQgc3Qgb2YgZW50cnkudmFsdWUuc3RhY2tUcmFjZSB8IGtleXNcXFwiIGNsYXNzPVxcXCJicmVha1xcXCI+IDxzYW1wPnt7c3QudmFsdWUuY2xhc3NOYW1lfX0ue3tzdC52YWx1ZS5tZXRob2ROYW1lfX0oPGNvZGU+e3tzdC52YWx1ZS5maWxlTmFtZX19Ont7c3QudmFsdWUubGluZU51bWJlcn19PC9jb2RlPik8L3NhbXA+IDxzcGFuIGNsYXNzPVxcXCJtdC0xXFxcIj48L3NwYW4+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+IDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtc20gdGFibGUtcmVzcG9uc2l2ZVxcXCI+IDx0aGVhZD4gPHRyPiA8dGggY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5qdm0udGhyZWFkcy5kdW1wLmJsb2NrZWR0aW1lXFxcIj5CbG9ja2VkIFRpbWU8L3RoPiA8dGggY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5qdm0udGhyZWFkcy5kdW1wLmJsb2NrZWRjb3VudFxcXCI+QmxvY2tlZCBDb3VudDwvdGg+IDx0aCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCIgamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmp2bS50aHJlYWRzLmR1bXAud2FpdGVkdGltZVxcXCI+V2FpdGVkIFRpbWU8L3RoPiA8dGggY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5qdm0udGhyZWFkcy5kdW1wLndhaXRlZGNvdW50XFxcIj5XYWl0ZWQgQ291bnQ8L3RoPiA8dGggamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmp2bS50aHJlYWRzLmR1bXAubG9ja25hbWVcXFwiPkxvY2sgTmFtZTwvdGg+IDwvdHI+IDwvdGhlYWQ+IDx0Ym9keT4gPHRyPiA8dGQ+e3tlbnRyeS52YWx1ZS5ibG9ja2VkVGltZX19PC90ZD4gPHRkPnt7ZW50cnkudmFsdWUuYmxvY2tlZENvdW50fX08L3RkPiA8dGQ+e3tlbnRyeS52YWx1ZS53YWl0ZWRUaW1lfX08L3RkPiA8dGQ+e3tlbnRyeS52YWx1ZS53YWl0ZWRDb3VudH19PC90ZD4gPHRkPjxjb2RlPnt7ZW50cnkudmFsdWUubG9ja05hbWV9fTwvY29kZT48L3RkPiA8L3RyPiA8L3Rib2R5PiA8L3RhYmxlPiA8L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+IDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnkgcHVsbC1sZWZ0XFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIiAoY2xpY2spPVxcXCJhY3RpdmVNb2RhbC5kaXNtaXNzKCdjbG9zZWQnKVxcXCI+RG9uZTwvYnV0dG9uPiA8L2Rpdj4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL21ldHJpY3MvbWV0cmljcy1tb2RhbC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL21ldHJpY3MvbWV0cmljcy1tb2RhbC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdiQWN0aXZlTW9kYWwgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLW1ldHJpY3MtbW9kYWwnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9tZXRyaWNzLW1vZGFsLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBKaGlNZXRyaWNzTW9uaXRvcmluZ01vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHRocmVhZER1bXBGaWx0ZXI6IGFueTtcbiAgICB0aHJlYWREdW1wOiBhbnk7XG4gICAgdGhyZWFkRHVtcEFsbCA9IDA7XG4gICAgdGhyZWFkRHVtcEJsb2NrZWQgPSAwO1xuICAgIHRocmVhZER1bXBSdW5uYWJsZSA9IDA7XG4gICAgdGhyZWFkRHVtcFRpbWVkV2FpdGluZyA9IDA7XG4gICAgdGhyZWFkRHVtcFdhaXRpbmcgPSAwO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGFjdGl2ZU1vZGFsOiBOZ2JBY3RpdmVNb2RhbCkge31cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnRocmVhZER1bXAuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGlmICh2YWx1ZS50aHJlYWRTdGF0ZSA9PT0gJ1JVTk5BQkxFJykge1xuICAgICAgICAgICAgICAgIHRoaXMudGhyZWFkRHVtcFJ1bm5hYmxlICs9IDE7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLnRocmVhZFN0YXRlID09PSAnV0FJVElORycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRocmVhZER1bXBXYWl0aW5nICs9IDE7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLnRocmVhZFN0YXRlID09PSAnVElNRURfV0FJVElORycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRocmVhZER1bXBUaW1lZFdhaXRpbmcgKz0gMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUudGhyZWFkU3RhdGUgPT09ICdCTE9DS0VEJykge1xuICAgICAgICAgICAgICAgIHRoaXMudGhyZWFkRHVtcEJsb2NrZWQgKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy50aHJlYWREdW1wQWxsID0gdGhpcy50aHJlYWREdW1wUnVubmFibGUgKyB0aGlzLnRocmVhZER1bXBXYWl0aW5nICtcbiAgICAgICAgICAgIHRoaXMudGhyZWFkRHVtcFRpbWVkV2FpdGluZyArIHRoaXMudGhyZWFkRHVtcEJsb2NrZWQ7XG4gICAgfVxuXG4gICAgZ2V0QmFkZ2VDbGFzcyAodGhyZWFkU3RhdGUpIHtcbiAgICAgICAgaWYgKHRocmVhZFN0YXRlID09PSAnUlVOTkFCTEUnKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2JhZGdlLXN1Y2Nlc3MnO1xuICAgICAgICB9IGVsc2UgaWYgKHRocmVhZFN0YXRlID09PSAnV0FJVElORycpIHtcbiAgICAgICAgICAgIHJldHVybiAnYmFkZ2UtaW5mbyc7XG4gICAgICAgIH0gZWxzZSBpZiAodGhyZWFkU3RhdGUgPT09ICdUSU1FRF9XQUlUSU5HJykge1xuICAgICAgICAgICAgcmV0dXJuICdiYWRnZS13YXJuaW5nJztcbiAgICAgICAgfSBlbHNlIGlmICh0aHJlYWRTdGF0ZSA9PT0gJ0JMT0NLRUQnKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2JhZGdlLWRhbmdlcic7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL21ldHJpY3MvbWV0cmljcy1tb2RhbC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdj4gPGgyPiA8c3BhbiBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3MudGl0bGVcXFwiPkFwcGxpY2F0aW9uIE1ldHJpY3M8L3NwYW4+IDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBmbG9hdC1yaWdodFxcXCIgKGNsaWNrKT1cXFwicmVmcmVzaCgpXFxcIj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXJlZnJlc2hcXFwiPjwvc3Bhbj4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLnJlZnJlc2guYnV0dG9uXFxcIj5SZWZyZXNoPC9zcGFuPiA8L2J1dHRvbj4gPC9oMj4gPGgzIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5qdm0udGl0bGVcXFwiPkpWTSBNZXRyaWNzPC9oMz4gPGRpdiBjbGFzcz1cXFwicm93XFxcIiAqbmdJZj1cXFwiIXVwZGF0aW5nTWV0cmljc1xcXCI+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC00XFxcIj4gPGIgamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmp2bS5tZW1vcnkudGl0bGVcXFwiPk1lbW9yeTwvYj4gPHA+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmp2bS5tZW1vcnkudG90YWxcXFwiPlRvdGFsIE1lbW9yeTwvc3Bhbj4gKHt7bWV0cmljcy5nYXVnZXNbJ2p2bS5tZW1vcnkudG90YWwudXNlZCddLnZhbHVlIC8gMTAwMDAwMCB8IG51bWJlcjonMS4wLTAnfX1NIC8ge3ttZXRyaWNzLmdhdWdlc1snanZtLm1lbW9yeS50b3RhbC5tYXgnXS52YWx1ZSAvIDEwMDAwMDAgfCBudW1iZXI6JzEuMC0wJ319TSk8L3A+IDxuZ2ItcHJvZ3Jlc3NiYXIgdHlwZT1cXFwic3VjY2Vzc1xcXCIgW21heF09XFxcIm1ldHJpY3MuZ2F1Z2VzWydqdm0ubWVtb3J5LnRvdGFsLm1heCddLnZhbHVlXFxcIiBbdmFsdWVdPVxcXCJtZXRyaWNzLmdhdWdlc1snanZtLm1lbW9yeS50b3RhbC51c2VkJ10udmFsdWVcXFwiIFtzdHJpcGVkXT1cXFwidHJ1ZVxcXCIgW2FuaW1hdGVkXT1cXFwidHJ1ZVxcXCI+IDxzcGFuPnt7bWV0cmljcy5nYXVnZXNbJ2p2bS5tZW1vcnkudG90YWwudXNlZCddLnZhbHVlICogMTAwIC8gbWV0cmljcy5nYXVnZXNbJ2p2bS5tZW1vcnkudG90YWwubWF4J10udmFsdWUgfCBudW1iZXI6JzEuMC0wJ319JTwvc3Bhbj4gPC9uZ2ItcHJvZ3Jlc3NiYXI+IDxwPjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5qdm0ubWVtb3J5LmhlYXBcXFwiPkhlYXAgTWVtb3J5PC9zcGFuPiAoe3ttZXRyaWNzLmdhdWdlc1snanZtLm1lbW9yeS5oZWFwLnVzZWQnXS52YWx1ZSAvIDEwMDAwMDAgfCBudW1iZXI6JzEuMC0wJ319TSAvIHt7bWV0cmljcy5nYXVnZXNbJ2p2bS5tZW1vcnkuaGVhcC5tYXgnXS52YWx1ZSAvIDEwMDAwMDAgfCBudW1iZXI6JzEuMC0wJ319TSk8L3A+IDxuZ2ItcHJvZ3Jlc3NiYXIgW21heF09XFxcIm1ldHJpY3MuZ2F1Z2VzWydqdm0ubWVtb3J5LmhlYXAubWF4J10udmFsdWVcXFwiIFt2YWx1ZV09XFxcIm1ldHJpY3MuZ2F1Z2VzWydqdm0ubWVtb3J5LmhlYXAudXNlZCddLnZhbHVlXFxcIiBbc3RyaXBlZF09XFxcInRydWVcXFwiIFthbmltYXRlZF09XFxcInRydWVcXFwiIHR5cGU9XFxcInN1Y2Nlc3NcXFwiPiA8c3Bhbj57e21ldHJpY3MuZ2F1Z2VzWydqdm0ubWVtb3J5LmhlYXAudXNlZCddLnZhbHVlICogMTAwIC8gbWV0cmljcy5nYXVnZXNbJ2p2bS5tZW1vcnkuaGVhcC5tYXgnXS52YWx1ZSB8IG51bWJlcjonMS4wLTAnfX0lPC9zcGFuPiA8L25nYi1wcm9ncmVzc2Jhcj4gPHA+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmp2bS5tZW1vcnkubm9uaGVhcFxcXCI+Tm9uLUhlYXAgTWVtb3J5PC9zcGFuPiAoe3ttZXRyaWNzLmdhdWdlc1snanZtLm1lbW9yeS5ub24taGVhcC51c2VkJ10udmFsdWUgLyAxMDAwMDAwIHwgbnVtYmVyOicxLjAtMCd9fU0gLyB7e21ldHJpY3MuZ2F1Z2VzWydqdm0ubWVtb3J5Lm5vbi1oZWFwLmNvbW1pdHRlZCddLnZhbHVlIC8gMTAwMDAwMCB8IG51bWJlcjonMS4wLTAnfX1NKTwvcD4gPG5nYi1wcm9ncmVzc2JhciBbbWF4XT1cXFwibWV0cmljcy5nYXVnZXNbJ2p2bS5tZW1vcnkubm9uLWhlYXAuY29tbWl0dGVkJ10udmFsdWVcXFwiIFt2YWx1ZV09XFxcIm1ldHJpY3MuZ2F1Z2VzWydqdm0ubWVtb3J5Lm5vbi1oZWFwLnVzZWQnXS52YWx1ZVxcXCIgW3N0cmlwZWRdPVxcXCJ0cnVlXFxcIiBbYW5pbWF0ZWRdPVxcXCJ0cnVlXFxcIiB0eXBlPVxcXCJzdWNjZXNzXFxcIj4gPHNwYW4+e3ttZXRyaWNzLmdhdWdlc1snanZtLm1lbW9yeS5ub24taGVhcC51c2VkJ10udmFsdWUgKiAxMDAgLyBtZXRyaWNzLmdhdWdlc1snanZtLm1lbW9yeS5ub24taGVhcC5jb21taXR0ZWQnXS52YWx1ZSB8IG51bWJlcjonMS4wLTAnfX0lPC9zcGFuPiA8L25nYi1wcm9ncmVzc2Jhcj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC00XFxcIj4gPGIgamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmp2bS50aHJlYWRzLnRpdGxlXFxcIj5UaHJlYWRzPC9iPiAoVG90YWw6IHt7bWV0cmljcy5nYXVnZXNbJ2p2bS50aHJlYWRzLmNvdW50J10udmFsdWV9fSkgPGEgY2xhc3M9XFxcImhhbmRcXFwiIChjbGljayk9XFxcInJlZnJlc2hUaHJlYWREdW1wRGF0YSgpXFxcIiBkYXRhLXRvZ2dsZT1cXFwibW9kYWxcXFwiIGRhdGEtdGFyZ2V0PVxcXCIjdGhyZWFkRHVtcFxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWV5ZVxcXCI+PC9pPjwvYT4gPHA+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmp2bS50aHJlYWRzLnJ1bm5hYmxlXFxcIj5SdW5uYWJsZTwvc3Bhbj4ge3ttZXRyaWNzLmdhdWdlc1snanZtLnRocmVhZHMucnVubmFibGUuY291bnQnXS52YWx1ZX19PC9wPiA8bmdiLXByb2dyZXNzYmFyIFt2YWx1ZV09XFxcIm1ldHJpY3MuZ2F1Z2VzWydqdm0udGhyZWFkcy5ydW5uYWJsZS5jb3VudCddLnZhbHVlXFxcIiBbbWF4XT1cXFwibWV0cmljcy5nYXVnZXNbJ2p2bS50aHJlYWRzLmNvdW50J10udmFsdWVcXFwiIFtzdHJpcGVkXT1cXFwidHJ1ZVxcXCIgW2FuaW1hdGVkXT1cXFwidHJ1ZVxcXCIgdHlwZT1cXFwic3VjY2Vzc1xcXCI+IDxzcGFuPnt7bWV0cmljcy5nYXVnZXNbJ2p2bS50aHJlYWRzLnJ1bm5hYmxlLmNvdW50J10udmFsdWUgKiAxMDAgLyBtZXRyaWNzLmdhdWdlc1snanZtLnRocmVhZHMuY291bnQnXS52YWx1ZSB8IG51bWJlcjonMS4wLTAnfX0lPC9zcGFuPiA8L25nYi1wcm9ncmVzc2Jhcj4gPHA+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmp2bS50aHJlYWRzLnRpbWVkd2FpdGluZ1xcXCI+VGltZWQgV2FpdGluZzwvc3Bhbj4gKHt7bWV0cmljcy5nYXVnZXNbJ2p2bS50aHJlYWRzLnRpbWVkX3dhaXRpbmcuY291bnQnXS52YWx1ZX19KTwvcD4gPG5nYi1wcm9ncmVzc2JhciBbdmFsdWVdPVxcXCJtZXRyaWNzLmdhdWdlc1snanZtLnRocmVhZHMudGltZWRfd2FpdGluZy5jb3VudCddLnZhbHVlXFxcIiBbbWF4XT1cXFwibWV0cmljcy5nYXVnZXNbJ2p2bS50aHJlYWRzLmNvdW50J10udmFsdWVcXFwiIFtzdHJpcGVkXT1cXFwidHJ1ZVxcXCIgW2FuaW1hdGVkXT1cXFwidHJ1ZVxcXCIgdHlwZT1cXFwid2FybmluZ1xcXCI+IDxzcGFuPnt7bWV0cmljcy5nYXVnZXNbJ2p2bS50aHJlYWRzLnRpbWVkX3dhaXRpbmcuY291bnQnXS52YWx1ZSAqIDEwMCAvIG1ldHJpY3MuZ2F1Z2VzWydqdm0udGhyZWFkcy5jb3VudCddLnZhbHVlIHwgbnVtYmVyOicxLjAtMCd9fSU8L3NwYW4+IDwvbmdiLXByb2dyZXNzYmFyPiA8cD48c3BhbiBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3MuanZtLnRocmVhZHMud2FpdGluZ1xcXCI+V2FpdGluZzwvc3Bhbj4gKHt7bWV0cmljcy5nYXVnZXNbJ2p2bS50aHJlYWRzLndhaXRpbmcuY291bnQnXS52YWx1ZX19KTwvcD4gPG5nYi1wcm9ncmVzc2JhciBbdmFsdWVdPVxcXCJtZXRyaWNzLmdhdWdlc1snanZtLnRocmVhZHMud2FpdGluZy5jb3VudCddLnZhbHVlXFxcIiBbbWF4XT1cXFwibWV0cmljcy5nYXVnZXNbJ2p2bS50aHJlYWRzLmNvdW50J10udmFsdWVcXFwiIFtzdHJpcGVkXT1cXFwidHJ1ZVxcXCIgW2FuaW1hdGVkXT1cXFwidHJ1ZVxcXCIgdHlwZT1cXFwid2FybmluZ1xcXCI+IDxzcGFuPnt7bWV0cmljcy5nYXVnZXNbJ2p2bS50aHJlYWRzLndhaXRpbmcuY291bnQnXS52YWx1ZSAqIDEwMCAvIG1ldHJpY3MuZ2F1Z2VzWydqdm0udGhyZWFkcy5jb3VudCddLnZhbHVlIHwgbnVtYmVyOicxLjAtMCd9fSU8L3NwYW4+IDwvbmdiLXByb2dyZXNzYmFyPiA8cD48c3BhbiBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3MuanZtLnRocmVhZHMuYmxvY2tlZFxcXCI+QmxvY2tlZDwvc3Bhbj4gKHt7bWV0cmljcy5nYXVnZXNbJ2p2bS50aHJlYWRzLmJsb2NrZWQuY291bnQnXS52YWx1ZX19KTwvcD4gPG5nYi1wcm9ncmVzc2JhciBbdmFsdWVdPVxcXCJtZXRyaWNzLmdhdWdlc1snanZtLnRocmVhZHMuYmxvY2tlZC5jb3VudCddLnZhbHVlXFxcIiBbbWF4XT1cXFwibWV0cmljcy5nYXVnZXNbJ2p2bS50aHJlYWRzLmNvdW50J10udmFsdWVcXFwiIFtzdHJpcGVkXT1cXFwidHJ1ZVxcXCIgW2FuaW1hdGVkXT1cXFwidHJ1ZVxcXCIgdHlwZT1cXFwic3VjY2Vzc1xcXCI+IDxzcGFuPnt7bWV0cmljcy5nYXVnZXNbJ2p2bS50aHJlYWRzLmJsb2NrZWQuY291bnQnXS52YWx1ZSAqIDEwMCAvIG1ldHJpY3MuZ2F1Z2VzWydqdm0udGhyZWFkcy5jb3VudCddLnZhbHVlIHwgbnVtYmVyOicxLjAtMCd9fSU8L3NwYW4+IDwvbmdiLXByb2dyZXNzYmFyPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLTRcXFwiPiA8YiBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3MuanZtLmdjLnRpdGxlXFxcIj5HYXJiYWdlIGNvbGxlY3Rpb25zPC9iPiA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiICpuZ0lmPVxcXCJtZXRyaWNzLmdhdWdlc1snanZtLmdhcmJhZ2UuUFMtTWFya1N3ZWVwLmNvdW50J11cXFwiPiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtOVxcXCIgamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmp2bS5nYy5tYXJrc3dlZXBjb3VudFxcXCI+TWFyayBTd2VlcCBjb3VudDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMyB0ZXh0LXJpZ2h0XFxcIj57e21ldHJpY3MuZ2F1Z2VzWydqdm0uZ2FyYmFnZS5QUy1NYXJrU3dlZXAuY291bnQnXS52YWx1ZX19PC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiICpuZ0lmPVxcXCJtZXRyaWNzLmdhdWdlc1snanZtLmdhcmJhZ2UuUFMtTWFya1N3ZWVwLnRpbWUnXVxcXCI+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC05XFxcIiBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3MuanZtLmdjLm1hcmtzd2VlcHRpbWVcXFwiPk1hcmsgU3dlZXAgdGltZTwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMyB0ZXh0LXJpZ2h0XFxcIj57e21ldHJpY3MuZ2F1Z2VzWydqdm0uZ2FyYmFnZS5QUy1NYXJrU3dlZXAudGltZSddLnZhbHVlfX1tczwvZGl2PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwicm93XFxcIiAqbmdJZj1cXFwibWV0cmljcy5nYXVnZXNbJ2p2bS5nYXJiYWdlLlBTLVNjYXZlbmdlLmNvdW50J11cXFwiPiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtOVxcXCIgamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmp2bS5nYy5zY2F2ZW5nZWNvdW50XFxcIj5TY2F2ZW5nZSBjb3VudDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMyB0ZXh0LXJpZ2h0XFxcIj57e21ldHJpY3MuZ2F1Z2VzWydqdm0uZ2FyYmFnZS5QUy1TY2F2ZW5nZS5jb3VudCddLnZhbHVlfX08L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcInJvd1xcXCIgKm5nSWY9XFxcIm1ldHJpY3MuZ2F1Z2VzWydqdm0uZ2FyYmFnZS5QUy1TY2F2ZW5nZS50aW1lJ11cXFwiPiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtOVxcXCIgamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmp2bS5nYy5zY2F2ZW5nZXRpbWVcXFwiPlNjYXZlbmdlIHRpbWU8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLTMgdGV4dC1yaWdodFxcXCI+e3ttZXRyaWNzLmdhdWdlc1snanZtLmdhcmJhZ2UuUFMtU2NhdmVuZ2UudGltZSddLnZhbHVlfX1tczwvZGl2PiA8L2Rpdj4gPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJ3ZWxsIHdlbGwtbGdcXFwiICpuZ0lmPVxcXCJ1cGRhdGluZ01ldHJpY3NcXFwiIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy51cGRhdGluZ1xcXCI+VXBkYXRpbmcuLi48L2Rpdj4gPGgzIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5qdm0uaHR0cC50aXRsZVxcXCI+SFRUUCByZXF1ZXN0cyAoZXZlbnRzIHBlciBzZWNvbmQpPC9oMz4gPHAgKm5nSWY9XFxcIm1ldHJpY3MuY291bnRlcnNcXFwiPiA8c3BhbiBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3MuanZtLmh0dHAuYWN0aXZlXFxcIj5BY3RpdmUgcmVxdWVzdHM8L3NwYW4+IDxiPnt7bWV0cmljcy5jb3VudGVyc1snY29tLmNvZGFoYWxlLm1ldHJpY3Muc2VydmxldC5JbnN0cnVtZW50ZWRGaWx0ZXIuYWN0aXZlUmVxdWVzdHMnXS5jb3VudCB8IG51bWJlcjonMS4wLTAnfX08L2I+IC0gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmp2bS5odHRwLnRvdGFsXFxcIj5Ub3RhbCByZXF1ZXN0czwvc3Bhbj4gPGI+e3ttZXRyaWNzLnRpbWVyc1snY29tLmNvZGFoYWxlLm1ldHJpY3Muc2VydmxldC5JbnN0cnVtZW50ZWRGaWx0ZXIucmVxdWVzdHMnXS5jb3VudCB8IG51bWJlcjonMS4wLTAnfX08L2I+IDwvcD4gPGRpdiBjbGFzcz1cXFwidGFibGUtcmVzcG9uc2l2ZVxcXCIgKm5nSWY9XFxcIiF1cGRhdGluZ01ldHJpY3NcXFwiPiA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLXN0cmlwZWRcXFwiPiA8dGhlYWQ+IDx0cj4gPHRoIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5qdm0uaHR0cC50YWJsZS5jb2RlXFxcIj5Db2RlPC90aD4gPHRoIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5qdm0uaHR0cC50YWJsZS5jb3VudFxcXCI+Q291bnQ8L3RoPiA8dGggY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5qdm0uaHR0cC50YWJsZS5tZWFuXFxcIj5NZWFuPC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj48c3BhbiBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3MuanZtLmh0dHAudGFibGUuYXZlcmFnZVxcXCI+QXZlcmFnZTwvc3Bhbj4gKDEgbWluKTwvdGg+IDx0aCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmp2bS5odHRwLnRhYmxlLmF2ZXJhZ2VcXFwiPkF2ZXJhZ2U8L3NwYW4+ICg1IG1pbik8L3RoPiA8dGggY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5qdm0uaHR0cC50YWJsZS5hdmVyYWdlXFxcIj5BdmVyYWdlPC9zcGFuPiAoMTUgbWluKTwvdGg+IDwvdHI+IDwvdGhlYWQ+IDx0Ym9keT4gPHRyPiA8dGQgamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmp2bS5odHRwLmNvZGUub2tcXFwiPk9LPC90ZD4gPHRkPiA8bmdiLXByb2dyZXNzYmFyIFttYXhdPVxcXCJtZXRyaWNzLnRpbWVyc1snY29tLmNvZGFoYWxlLm1ldHJpY3Muc2VydmxldC5JbnN0cnVtZW50ZWRGaWx0ZXIucmVxdWVzdHMnXS5jb3VudFxcXCIgW3ZhbHVlXT1cXFwibWV0cmljcy5tZXRlcnNbJ2NvbS5jb2RhaGFsZS5tZXRyaWNzLnNlcnZsZXQuSW5zdHJ1bWVudGVkRmlsdGVyLnJlc3BvbnNlQ29kZXMub2snXS5jb3VudFxcXCIgW3N0cmlwZWRdPVxcXCJ0cnVlXFxcIiBbYW5pbWF0ZWRdPVxcXCJ0cnVlXFxcIiB0eXBlPVxcXCJzdWNjZXNzXFxcIj4gPHNwYW4+e3ttZXRyaWNzLm1ldGVyc1snY29tLmNvZGFoYWxlLm1ldHJpY3Muc2VydmxldC5JbnN0cnVtZW50ZWRGaWx0ZXIucmVzcG9uc2VDb2Rlcy5vayddLmNvdW50fX08L3NwYW4+IDwvbmdiLXByb2dyZXNzYmFyPiA8L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPiB7e21ldHJpY3MubWV0ZXJzWydjb20uY29kYWhhbGUubWV0cmljcy5zZXJ2bGV0Lkluc3RydW1lbnRlZEZpbHRlci5yZXNwb25zZUNvZGVzLm9rJ10ubWVhbl9yYXRlIHwgbnVtYmVyOicxLjAtMid9fSA8L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPnt7bWV0cmljcy5tZXRlcnNbJ2NvbS5jb2RhaGFsZS5tZXRyaWNzLnNlcnZsZXQuSW5zdHJ1bWVudGVkRmlsdGVyLnJlc3BvbnNlQ29kZXMub2snXS5tMV9yYXRlIHwgbnVtYmVyOicxLjAtMid9fSA8L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPnt7bWV0cmljcy5tZXRlcnNbJ2NvbS5jb2RhaGFsZS5tZXRyaWNzLnNlcnZsZXQuSW5zdHJ1bWVudGVkRmlsdGVyLnJlc3BvbnNlQ29kZXMub2snXS5tNV9yYXRlIHwgbnVtYmVyOicxLjAtMid9fSA8L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPiB7e21ldHJpY3MubWV0ZXJzWydjb20uY29kYWhhbGUubWV0cmljcy5zZXJ2bGV0Lkluc3RydW1lbnRlZEZpbHRlci5yZXNwb25zZUNvZGVzLm9rJ10ubTE1X3JhdGUgfCBudW1iZXI6JzEuMC0yJ319IDwvdGQ+IDwvdHI+IDx0cj4gPHRkIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5qdm0uaHR0cC5jb2RlLm5vdGZvdW5kXFxcIj5Ob3QgRm91bmQ8L3RkPiA8dGQ+IDxuZ2ItcHJvZ3Jlc3NiYXIgW21heF09XFxcIm1ldHJpY3MudGltZXJzWydjb20uY29kYWhhbGUubWV0cmljcy5zZXJ2bGV0Lkluc3RydW1lbnRlZEZpbHRlci5yZXF1ZXN0cyddLmNvdW50XFxcIiBbdmFsdWVdPVxcXCJtZXRyaWNzLm1ldGVyc1snY29tLmNvZGFoYWxlLm1ldHJpY3Muc2VydmxldC5JbnN0cnVtZW50ZWRGaWx0ZXIucmVzcG9uc2VDb2Rlcy5ub3RGb3VuZCddLmNvdW50XFxcIiBbc3RyaXBlZF09XFxcInRydWVcXFwiIFthbmltYXRlZF09XFxcInRydWVcXFwiIHR5cGU9XFxcInN1Y2Nlc3NcXFwiPiA8c3Bhbj57e21ldHJpY3MubWV0ZXJzWydjb20uY29kYWhhbGUubWV0cmljcy5zZXJ2bGV0Lkluc3RydW1lbnRlZEZpbHRlci5yZXNwb25zZUNvZGVzLm5vdEZvdW5kJ10uY291bnR9fTwvc3Bhbj4gPC9uZ2ItcHJvZ3Jlc3NiYXI+IDwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+IHt7bWV0cmljcy5tZXRlcnNbJ2NvbS5jb2RhaGFsZS5tZXRyaWNzLnNlcnZsZXQuSW5zdHJ1bWVudGVkRmlsdGVyLnJlc3BvbnNlQ29kZXMubm90Rm91bmQnXS5tZWFuX3JhdGUgfCBudW1iZXI6JzEuMC0yJ319IDwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+IHt7bWV0cmljcy5tZXRlcnNbJ2NvbS5jb2RhaGFsZS5tZXRyaWNzLnNlcnZsZXQuSW5zdHJ1bWVudGVkRmlsdGVyLnJlc3BvbnNlQ29kZXMubm90Rm91bmQnXS5tMV9yYXRlIHwgbnVtYmVyOicxLjAtMid9fSA8L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPiB7e21ldHJpY3MubWV0ZXJzWydjb20uY29kYWhhbGUubWV0cmljcy5zZXJ2bGV0Lkluc3RydW1lbnRlZEZpbHRlci5yZXNwb25zZUNvZGVzLm5vdEZvdW5kJ10ubTVfcmF0ZSB8IG51bWJlcjonMS4wLTInfX0gPC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj4ge3ttZXRyaWNzLm1ldGVyc1snY29tLmNvZGFoYWxlLm1ldHJpY3Muc2VydmxldC5JbnN0cnVtZW50ZWRGaWx0ZXIucmVzcG9uc2VDb2Rlcy5ub3RGb3VuZCddLm0xNV9yYXRlIHwgbnVtYmVyOicxLjAtMid9fSA8L3RkPiA8L3RyPiA8dHI+IDx0ZCBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3MuanZtLmh0dHAuY29kZS5zZXJ2ZXJlcnJvclxcXCI+U2VydmVyIGVycm9yPC90ZD4gPHRkPiA8bmdiLXByb2dyZXNzYmFyIFttYXhdPVxcXCJtZXRyaWNzLnRpbWVyc1snY29tLmNvZGFoYWxlLm1ldHJpY3Muc2VydmxldC5JbnN0cnVtZW50ZWRGaWx0ZXIucmVxdWVzdHMnXS5jb3VudFxcXCIgW3ZhbHVlXT1cXFwibWV0cmljcy5tZXRlcnNbJ2NvbS5jb2RhaGFsZS5tZXRyaWNzLnNlcnZsZXQuSW5zdHJ1bWVudGVkRmlsdGVyLnJlc3BvbnNlQ29kZXMuc2VydmVyRXJyb3InXS5jb3VudFxcXCIgW3N0cmlwZWRdPVxcXCJ0cnVlXFxcIiBbYW5pbWF0ZWRdPVxcXCJ0cnVlXFxcIiB0eXBlPVxcXCJzdWNjZXNzXFxcIj4gPHNwYW4+e3ttZXRyaWNzLm1ldGVyc1snY29tLmNvZGFoYWxlLm1ldHJpY3Muc2VydmxldC5JbnN0cnVtZW50ZWRGaWx0ZXIucmVzcG9uc2VDb2Rlcy5zZXJ2ZXJFcnJvciddLmNvdW50fX08L3NwYW4+IDwvbmdiLXByb2dyZXNzYmFyPiA8L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPiB7e21ldHJpY3MubWV0ZXJzWydjb20uY29kYWhhbGUubWV0cmljcy5zZXJ2bGV0Lkluc3RydW1lbnRlZEZpbHRlci5yZXNwb25zZUNvZGVzLnNlcnZlckVycm9yJ10ubWVhbl9yYXRlIHwgbnVtYmVyOicxLjAtMid9fSA8L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPiB7e21ldHJpY3MubWV0ZXJzWydjb20uY29kYWhhbGUubWV0cmljcy5zZXJ2bGV0Lkluc3RydW1lbnRlZEZpbHRlci5yZXNwb25zZUNvZGVzLnNlcnZlckVycm9yJ10ubTFfcmF0ZSB8IG51bWJlcjonMS4wLTInfX0gPC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj4ge3ttZXRyaWNzLm1ldGVyc1snY29tLmNvZGFoYWxlLm1ldHJpY3Muc2VydmxldC5JbnN0cnVtZW50ZWRGaWx0ZXIucmVzcG9uc2VDb2Rlcy5zZXJ2ZXJFcnJvciddLm01X3JhdGUgfCBudW1iZXI6JzEuMC0yJ319IDwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+IHt7bWV0cmljcy5tZXRlcnNbJ2NvbS5jb2RhaGFsZS5tZXRyaWNzLnNlcnZsZXQuSW5zdHJ1bWVudGVkRmlsdGVyLnJlc3BvbnNlQ29kZXMuc2VydmVyRXJyb3InXS5tMTVfcmF0ZSB8IG51bWJlcjonMS4wLTInfX0gPC90ZD4gPC90cj4gPC90Ym9keT4gPC90YWJsZT4gPC9kaXY+IDxoMyBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3Muc2VydmljZXNzdGF0cy50aXRsZVxcXCI+U2VydmljZXMgc3RhdGlzdGljcyAodGltZSBpbiBtaWxsaXNlY29uZCk8L2gzPiA8ZGl2IGNsYXNzPVxcXCJ0YWJsZS1yZXNwb25zaXZlXFxcIiAqbmdJZj1cXFwiIXVwZGF0aW5nTWV0cmljc1xcXCI+IDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtc3RyaXBlZFxcXCI+IDx0aGVhZD4gPHRyPiA8dGggamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLnNlcnZpY2Vzc3RhdHMudGFibGUubmFtZVxcXCI+U2VydmljZSBuYW1lPC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIiBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3Muc2VydmljZXNzdGF0cy50YWJsZS5jb3VudFxcXCI+Q291bnQ8L3RoPiA8dGggY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5zZXJ2aWNlc3N0YXRzLnRhYmxlLm1lYW5cXFwiPk1lYW48L3RoPiA8dGggY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5zZXJ2aWNlc3N0YXRzLnRhYmxlLm1pblxcXCI+TWluPC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIiBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3Muc2VydmljZXNzdGF0cy50YWJsZS5wNTBcXFwiPnA1MDwvdGg+IDx0aCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCIgamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLnNlcnZpY2Vzc3RhdHMudGFibGUucDc1XFxcIj5wNzU8L3RoPiA8dGggY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5zZXJ2aWNlc3N0YXRzLnRhYmxlLnA5NVxcXCI+cDk1PC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIiBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3Muc2VydmljZXNzdGF0cy50YWJsZS5wOTlcXFwiPnA5OTwvdGg+IDx0aCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCIgamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLnNlcnZpY2Vzc3RhdHMudGFibGUubWF4XFxcIj5NYXg8L3RoPiA8L3RyPiA8L3RoZWFkPiA8dGJvZHk+IDx0ciAqbmdGb3I9XFxcImxldCBlbnRyeSBvZiBzZXJ2aWNlc1N0YXRzIHwga2V5c1xcXCI+IDx0ZD57e2VudHJ5LmtleX19PC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj57e2VudHJ5LnZhbHVlLmNvdW50fX08L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPnt7ZW50cnkudmFsdWUubWVhbiAqIDEwMDAgfCBudW1iZXI6JzEuMC0wJ319PC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj57e2VudHJ5LnZhbHVlLm1pbiAqIDEwMDAgfCBudW1iZXI6JzEuMC0wJ319PC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj57e2VudHJ5LnZhbHVlLnA1MCAqIDEwMDAgfCBudW1iZXI6JzEuMC0wJ319PC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj57e2VudHJ5LnZhbHVlLnA3NSAqIDEwMDAgfCBudW1iZXI6JzEuMC0wJ319PC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj57e2VudHJ5LnZhbHVlLnA5NSAqIDEwMDAgfCBudW1iZXI6JzEuMC0wJ319PC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj57e2VudHJ5LnZhbHVlLnA5OSAqIDEwMDAgfCBudW1iZXI6JzEuMC0wJ319PC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj57e2VudHJ5LnZhbHVlLm1heCAqIDEwMDAgfCBudW1iZXI6JzEuMC0wJ319PC90ZD4gPC90cj4gPC90Ym9keT4gPC90YWJsZT4gPC9kaXY+IDxoMyBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3MuY2FjaGUudGl0bGVcXFwiPkNhY2hlIHN0YXRpc3RpY3M8L2gzPiA8ZGl2IGNsYXNzPVxcXCJ0YWJsZS1yZXNwb25zaXZlXFxcIiAqbmdJZj1cXFwiIXVwZGF0aW5nTWV0cmljc1xcXCI+IDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtc3RyaXBlZFxcXCI+IDx0aGVhZD4gPHRyPiA8dGggamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmNhY2hlLmNhY2hlbmFtZVxcXCI+Q2FjaGUgbmFtZTwvdGg+IDx0aCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCIgZGF0YS10cmFuc2xhdGU9XFxcIm1ldHJpY3MuY2FjaGUuaGl0c1xcXCI+Q2FjaGUgSGl0czwvdGg+IDx0aCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCIgZGF0YS10cmFuc2xhdGU9XFxcIm1ldHJpY3MuY2FjaGUubWlzc2VzXFxcIj5DYWNoZSBNaXNzZXM8L3RoPiA8dGggY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIGRhdGEtdHJhbnNsYXRlPVxcXCJtZXRyaWNzLmNhY2hlLmdldHNcXFwiPkNhY2hlIEdldHM8L3RoPiA8dGggY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIGRhdGEtdHJhbnNsYXRlPVxcXCJtZXRyaWNzLmNhY2hlLnB1dHNcXFwiPkNhY2hlIFB1dHM8L3RoPiA8dGggY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIGRhdGEtdHJhbnNsYXRlPVxcXCJtZXRyaWNzLmNhY2hlLnJlbW92YWxzXFxcIj5DYWNoZSBSZW1vdmFsczwvdGg+IDx0aCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCIgZGF0YS10cmFuc2xhdGU9XFxcIm1ldHJpY3MuY2FjaGUuZXZpY3Rpb25zXFxcIj5DYWNoZSBFdmljdGlvbnM8L3RoPiA8dGggY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIGRhdGEtdHJhbnNsYXRlPVxcXCJtZXRyaWNzLmNhY2hlLmhpdFBlcmNlbnRcXFwiPkNhY2hlIEhpdCAlPC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIiBkYXRhLXRyYW5zbGF0ZT1cXFwibWV0cmljcy5jYWNoZS5taXNzUGVyY2VudFxcXCI+Q2FjaGUgTWlzcyAlPC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIiBkYXRhLXRyYW5zbGF0ZT1cXFwibWV0cmljcy5jYWNoZS5hdmVyYWdlR2V0VGltZVxcXCI+QXZlcmFnZSBnZXQgdGltZSAowrVzKTwvdGg+IDx0aCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCIgZGF0YS10cmFuc2xhdGU9XFxcIm1ldHJpY3MuY2FjaGUuYXZlcmFnZVB1dFRpbWVcXFwiPkF2ZXJhZ2UgcHV0IHRpbWUgKMK1cyk8L3RoPiA8dGggY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIGRhdGEtdHJhbnNsYXRlPVxcXCJtZXRyaWNzLmNhY2hlLmF2ZXJhZ2VSZW1vdmVUaW1lXFxcIj5BdmVyYWdlIHJlbW92ZSB0aW1lICjCtXMpPC90aD4gPC90cj4gPC90aGVhZD4gPHRib2R5PiA8dHIgKm5nRm9yPVxcXCJsZXQgZW50cnkgb2YgY2FjaGVzU3RhdHMgfCBrZXlzXFxcIj4gPHRkPnt7ZW50cnkua2V5fX08L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPnt7bWV0cmljcy5nYXVnZXNbZW50cnkua2V5ICsgJy5jYWNoZS1oaXRzJ10udmFsdWV9fTwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+e3ttZXRyaWNzLmdhdWdlc1tlbnRyeS5rZXkgKyAnLmNhY2hlLW1pc3NlcyddLnZhbHVlfX08L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPnt7bWV0cmljcy5nYXVnZXNbZW50cnkua2V5ICsgJy5jYWNoZS1nZXRzJ10udmFsdWV9fTwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+e3ttZXRyaWNzLmdhdWdlc1tlbnRyeS5rZXkgKyAnLmNhY2hlLXB1dHMnXS52YWx1ZX19PC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj57e21ldHJpY3MuZ2F1Z2VzW2VudHJ5LmtleSArICcuY2FjaGUtcmVtb3ZhbHMnXS52YWx1ZX19PC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj57e21ldHJpY3MuZ2F1Z2VzW2VudHJ5LmtleSArICcuY2FjaGUtZXZpY3Rpb25zJ10udmFsdWV9fTwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+e3ttZXRyaWNzLmdhdWdlc1tlbnRyeS5rZXkgKyAnLmNhY2hlLWhpdC1wZXJjZW50YWdlJ10udmFsdWV9fTwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+e3ttZXRyaWNzLmdhdWdlc1tlbnRyeS5rZXkgKyAnLmNhY2hlLW1pc3MtcGVyY2VudGFnZSddLnZhbHVlIH19PC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj57e21ldHJpY3MuZ2F1Z2VzW2VudHJ5LmtleSArICcuYXZlcmFnZS1nZXQtdGltZSddLnZhbHVlIHwgbnVtYmVyIDogJzEuMi0yJyB9fTwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+e3ttZXRyaWNzLmdhdWdlc1tlbnRyeS5rZXkgKyAnLmF2ZXJhZ2UtcHV0LXRpbWUnXS52YWx1ZSB8IG51bWJlciA6ICcxLjItMid9fTwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+e3ttZXRyaWNzLmdhdWdlc1tlbnRyeS5rZXkgKyAnLmF2ZXJhZ2UtcmVtb3ZlLXRpbWUnXS52YWx1ZSB8IG51bWJlciA6ICcxLjItMicgfX08L3RkPiA8L3RyPiA8L3Rib2R5PiA8L3RhYmxlPiA8L2Rpdj4gPGgzIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5kYXRhc291cmNlLnRpdGxlXFxcIiAqbmdJZj1cXFwibWV0cmljcy5nYXVnZXMgJiYgbWV0cmljcy5nYXVnZXNbJ0hpa2FyaVBvb2wtMS5wb29sLlRvdGFsQ29ubmVjdGlvbnMnXSAmJiBtZXRyaWNzLmdhdWdlc1snSGlrYXJpUG9vbC0xLnBvb2wuVG90YWxDb25uZWN0aW9ucyddLnZhbHVlID4gMFxcXCI+RGF0YVNvdXJjZSBzdGF0aXN0aWNzICh0aW1lIGluIG1pbGxpc2Vjb25kKTwvaDM+IDxkaXYgY2xhc3M9XFxcInRhYmxlLXJlc3BvbnNpdmVcXFwiICpuZ0lmPVxcXCIhdXBkYXRpbmdNZXRyaWNzICYmIG1ldHJpY3MuZ2F1Z2VzICYmIG1ldHJpY3MuZ2F1Z2VzWydIaWthcmlQb29sLTEucG9vbC5Ub3RhbENvbm5lY3Rpb25zJ10gJiYgbWV0cmljcy5nYXVnZXNbJ0hpa2FyaVBvb2wtMS5wb29sLlRvdGFsQ29ubmVjdGlvbnMnXS52YWx1ZSA+IDBcXFwiPiA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLXN0cmlwZWRcXFwiPiA8dGhlYWQ+IDx0cj4gPHRoPjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5kYXRhc291cmNlLnVzYWdlXFxcIj5Vc2FnZTwvc3Bhbj4gKHt7bWV0cmljcy5nYXVnZXNbJ0hpa2FyaVBvb2wtMS5wb29sLkFjdGl2ZUNvbm5lY3Rpb25zJ10udmFsdWV9fSAvIHt7bWV0cmljcy5nYXVnZXNbJ0hpa2FyaVBvb2wtMS5wb29sLlRvdGFsQ29ubmVjdGlvbnMnXS52YWx1ZX19KTwvdGg+IDx0aCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCIgamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmRhdGFzb3VyY2UuY291bnRcXFwiPkNvdW50PC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIiBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3MuZGF0YXNvdXJjZS5tZWFuXFxcIj5NZWFuPC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIiBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3MuZGF0YXNvdXJjZS5taW5cXFwiPk1pbjwvdGg+IDx0aCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCIgamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmRhdGFzb3VyY2UucDUwXFxcIj5wNTA8L3RoPiA8dGggY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5kYXRhc291cmNlLnA3NVxcXCI+cDc1PC90aD4gPHRoIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIiBqaGlUcmFuc2xhdGU9XFxcIm1ldHJpY3MuZGF0YXNvdXJjZS5wOTVcXFwiPnA5NTwvdGg+IDx0aCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCIgamhpVHJhbnNsYXRlPVxcXCJtZXRyaWNzLmRhdGFzb3VyY2UucDk5XFxcIj5wOTk8L3RoPiA8dGggY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwibWV0cmljcy5kYXRhc291cmNlLm1heFxcXCI+TWF4PC90aD4gPC90cj4gPC90aGVhZD4gPHRib2R5PiA8dHI+IDx0ZD4gPGRpdiBjbGFzcz1cXFwicHJvZ3Jlc3MgcHJvZ3Jlc3Mtc3RyaXBlZFxcXCI+IDxuZ2ItcHJvZ3Jlc3NiYXIgW21heF09XFxcIm1ldHJpY3MuZ2F1Z2VzWydIaWthcmlQb29sLTEucG9vbC5Ub3RhbENvbm5lY3Rpb25zJ10udmFsdWVcXFwiIFt2YWx1ZV09XFxcIm1ldHJpY3MuZ2F1Z2VzWydIaWthcmlQb29sLTEucG9vbC5BY3RpdmVDb25uZWN0aW9ucyddLnZhbHVlXFxcIiBbc3RyaXBlZF09XFxcInRydWVcXFwiIFthbmltYXRlZF09XFxcInRydWVcXFwiIHR5cGU9XFxcInN1Y2Nlc3NcXFwiPiA8c3Bhbj57e21ldHJpY3MuZ2F1Z2VzWydIaWthcmlQb29sLTEucG9vbC5BY3RpdmVDb25uZWN0aW9ucyddLnZhbHVlICogMTAwIC8gbWV0cmljcy5nYXVnZXNbJ0hpa2FyaVBvb2wtMS5wb29sLlRvdGFsQ29ubmVjdGlvbnMnXS52YWx1ZSB8IG51bWJlcjonMS4wLTAnfX0lPC9zcGFuPiA8L25nYi1wcm9ncmVzc2Jhcj4gPC9kaXY+IDwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+e3ttZXRyaWNzLmhpc3RvZ3JhbXNbJ0hpa2FyaVBvb2wtMS5wb29sLlVzYWdlJ10uY291bnR9fTwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+e3ttZXRyaWNzLmhpc3RvZ3JhbXNbJ0hpa2FyaVBvb2wtMS5wb29sLlVzYWdlJ10ubWVhbiB8IG51bWJlcjonMS4wLTInfX08L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPnt7bWV0cmljcy5oaXN0b2dyYW1zWydIaWthcmlQb29sLTEucG9vbC5Vc2FnZSddLm1pbiB8IG51bWJlcjonMS4wLTInfX08L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPnt7bWV0cmljcy5oaXN0b2dyYW1zWydIaWthcmlQb29sLTEucG9vbC5Vc2FnZSddLnA1MCB8IG51bWJlcjonMS4wLTInfX08L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPnt7bWV0cmljcy5oaXN0b2dyYW1zWydIaWthcmlQb29sLTEucG9vbC5Vc2FnZSddLnA3NSB8IG51bWJlcjonMS4wLTInfX08L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPnt7bWV0cmljcy5oaXN0b2dyYW1zWydIaWthcmlQb29sLTEucG9vbC5Vc2FnZSddLnA5NSB8IG51bWJlcjonMS4wLTInfX08L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPnt7bWV0cmljcy5oaXN0b2dyYW1zWydIaWthcmlQb29sLTEucG9vbC5Vc2FnZSddLnA5OSB8IG51bWJlcjonMS4wLTInfX08L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPnt7bWV0cmljcy5oaXN0b2dyYW1zWydIaWthcmlQb29sLTEucG9vbC5Vc2FnZSddLm1heCB8IG51bWJlcjonMS4wLTInfX08L3RkPiA8L3RyPiA8L3Rib2R5PiA8L3RhYmxlPiA8L2Rpdj4gPC9kaXY+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9tZXRyaWNzL21ldHJpY3MuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9tZXRyaWNzL21ldHJpY3MuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nYk1vZGFsIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHsgSmhpTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnbmctamhpcHN0ZXInO1xuXG5pbXBvcnQgeyBKaGlNZXRyaWNzTW9uaXRvcmluZ01vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9tZXRyaWNzLW1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBKaGlNZXRyaWNzU2VydmljZSB9IGZyb20gJy4vbWV0cmljcy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqaGktbWV0cmljcycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL21ldHJpY3MuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBKaGlNZXRyaWNzTW9uaXRvcmluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgbWV0cmljczogYW55ID0ge307XG4gICAgY2FjaGVzU3RhdHM6IGFueSA9IHt9O1xuICAgIHNlcnZpY2VzU3RhdHM6IGFueSA9IHt9O1xuICAgIHVwZGF0aW5nTWV0cmljcyA9IHRydWU7XG4gICAgSkNBQ0hFX0tFWTogc3RyaW5nIDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGpoaUxhbmd1YWdlU2VydmljZTogSmhpTGFuZ3VhZ2VTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIG1vZGFsU2VydmljZTogTmdiTW9kYWwsXG4gICAgICAgIHByaXZhdGUgbWV0cmljc1NlcnZpY2U6IEpoaU1ldHJpY3NTZXJ2aWNlXG4gICAgKSB7XG4gICAgICAgIHRoaXMuSkNBQ0hFX0tFWSA9ICdqY2FjaGUuc3RhdGlzdGljcyc7XG4gICAgICAgIHRoaXMuamhpTGFuZ3VhZ2VTZXJ2aWNlLnNldExvY2F0aW9ucyhbJ21ldHJpY3MnXSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIH1cblxuICAgIHJlZnJlc2ggKCkge1xuICAgICAgICB0aGlzLnVwZGF0aW5nTWV0cmljcyA9IHRydWU7XG4gICAgICAgIHRoaXMubWV0cmljc1NlcnZpY2UuZ2V0TWV0cmljcygpLnN1YnNjcmliZSgobWV0cmljcykgPT4ge1xuICAgICAgICAgICAgdGhpcy5tZXRyaWNzID0gbWV0cmljcztcbiAgICAgICAgICAgIHRoaXMudXBkYXRpbmdNZXRyaWNzID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNlcnZpY2VzU3RhdHMgPSB7fTtcbiAgICAgICAgICAgIHRoaXMuY2FjaGVzU3RhdHMgPSB7fTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKG1ldHJpY3MudGltZXJzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBtZXRyaWNzLnRpbWVyc1trZXldO1xuICAgICAgICAgICAgICAgIGlmIChrZXkuaW5kZXhPZignd2ViLnJlc3QnKSAhPT0gLTEgfHwga2V5LmluZGV4T2YoJ3NlcnZpY2UnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlc1N0YXRzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKG1ldHJpY3MuZ2F1Z2VzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5LmluZGV4T2YoJ2pjYWNoZS5zdGF0aXN0aWNzJykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IG1ldHJpY3MuZ2F1Z2VzW2tleV0udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBnZXRzIG9yIHB1dHNcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0ga2V5Lmxhc3RJbmRleE9mKCcuJyk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdLZXkgPSBrZXkuc3Vic3RyKDAsIGluZGV4KTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBLZWVwIHRoZSBuYW1lIG9mIHRoZSBkb21haW5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWNoZXNTdGF0c1tuZXdLZXldID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiB0aGlzLkpDQUNIRV9LRVkubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVmcmVzaFRocmVhZER1bXBEYXRhICgpIHtcbiAgICAgICAgdGhpcy5tZXRyaWNzU2VydmljZS50aHJlYWREdW1wKCkuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtb2RhbFJlZiAgPSB0aGlzLm1vZGFsU2VydmljZS5vcGVuKEpoaU1ldHJpY3NNb25pdG9yaW5nTW9kYWxDb21wb25lbnQsIHsgc2l6ZTogJ2xnJ30pO1xuICAgICAgICAgICAgbW9kYWxSZWYuY29tcG9uZW50SW5zdGFuY2UudGhyZWFkRHVtcCA9IGRhdGE7XG4gICAgICAgICAgICBtb2RhbFJlZi5yZXN1bHQudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gTGVmdCBibGFuayBpbnRlbnRpb25hbGx5LCBub3RoaW5nIHRvIGRvIGhlcmVcbiAgICAgICAgICAgIH0sIChyZWFzb24pID0+IHtcbiAgICAgICAgICAgICAgICAvLyBMZWZ0IGJsYW5rIGludGVudGlvbmFsbHksIG5vdGhpbmcgdG8gZG8gaGVyZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi9tZXRyaWNzL21ldHJpY3MuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBKaGlNZXRyaWNzTW9uaXRvcmluZ0NvbXBvbmVudCB9IGZyb20gJy4vbWV0cmljcy5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgbWV0cmljc1JvdXRlOiBSb3V0ZSA9IHtcbiAgcGF0aDogJ2poaS1tZXRyaWNzJyxcbiAgY29tcG9uZW50OiBKaGlNZXRyaWNzTW9uaXRvcmluZ0NvbXBvbmVudCxcbiAgZGF0YToge1xuICAgIHBhZ2VUaXRsZTogJ21ldHJpY3MudGl0bGUnXG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL21ldHJpY3MvbWV0cmljcy5yb3V0ZS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBKaGlNZXRyaWNzU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxuXG4gICAgZ2V0TWV0cmljcygpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnbWFuYWdlbWVudC9tZXRyaWNzJykubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKTtcbiAgICB9XG5cbiAgICB0aHJlYWREdW1wKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdtYW5hZ2VtZW50L2R1bXAnKS5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vbWV0cmljcy9tZXRyaWNzLnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGZvcm0gbmFtZT1cXFwiZGVsZXRlRm9ybVxcXCIgKG5nU3VibWl0KT1cXFwiY29uZmlybURlbGV0ZSh1c2VyLmxvZ2luKVxcXCI+IDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+IDxoNCBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZW50aXR5LmRlbGV0ZS50aXRsZVxcXCI+Q29uZmlybSBkZWxldGUgb3BlcmF0aW9uPC9oND4gPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiIChjbGljayk9XFxcImNsZWFyKClcXFwiPiZ0aW1lczs8L2J1dHRvbj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPiA8amhpLWFsZXJ0LWVycm9yPjwvamhpLWFsZXJ0LWVycm9yPiA8cCBqaGlUcmFuc2xhdGU9XFxcInVzZXJNYW5hZ2VtZW50LmRlbGV0ZS5xdWVzdGlvblxcXCIgdHJhbnNsYXRlVmFsdWVzPVxcXCJ7bG9naW46ICd7e3VzZXIubG9naW59fSd9XFxcIj5BcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgVXNlcj88L3A+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPiA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tc2Vjb25kYXJ5XFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIiAoY2xpY2spPVxcXCJjbGVhcigpXFxcIj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLWJhblxcXCI+PC9zcGFuPiZuYnNwOzxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiZW50aXR5LmFjdGlvbi5jYW5jZWxcXFwiPkNhbmNlbDwvc3Bhbj4gPC9idXR0b24+IDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXJcXFwiPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtcmVtb3ZlXFxcIj48L3NwYW4+Jm5ic3A7PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJlbnRpdHkuYWN0aW9uLmRlbGV0ZVxcXCI+RGVsZXRlPC9zcGFuPiA8L2J1dHRvbj4gPC9kaXY+IDwvZm9ybT4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQtZGVsZXRlLWRpYWxvZy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQtZGVsZXRlLWRpYWxvZy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOZ2JBY3RpdmVNb2RhbCwgTmdiTW9kYWxSZWYgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBFdmVudE1hbmFnZXIsIEpoaUxhbmd1YWdlU2VydmljZSB9IGZyb20gJ25nLWpoaXBzdGVyJztcblxuaW1wb3J0IHsgVXNlciwgVXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQnO1xuaW1wb3J0IHsgVXNlck1vZGFsU2VydmljZSB9IGZyb20gJy4vdXNlci1tb2RhbC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqaGktdXNlci1tZ210LWRlbGV0ZS1kaWFsb2cnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi91c2VyLW1hbmFnZW1lbnQtZGVsZXRlLWRpYWxvZy5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgVXNlck1nbXREZWxldGVEaWFsb2dDb21wb25lbnQge1xuXG4gICAgdXNlcjogVXNlcjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGpoaUxhbmd1YWdlU2VydmljZTogSmhpTGFuZ3VhZ2VTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICAgICAgcHVibGljIGFjdGl2ZU1vZGFsOiBOZ2JBY3RpdmVNb2RhbCxcbiAgICAgICAgcHJpdmF0ZSBldmVudE1hbmFnZXI6IEV2ZW50TWFuYWdlclxuICAgICkge1xuICAgICAgICB0aGlzLmpoaUxhbmd1YWdlU2VydmljZS5zZXRMb2NhdGlvbnMoWyd1c2VyLW1hbmFnZW1lbnQnXSk7XG4gICAgfVxuXG4gICAgY2xlYXIgKCkge1xuICAgICAgICB0aGlzLmFjdGl2ZU1vZGFsLmRpc21pc3MoJ2NhbmNlbCcpO1xuICAgIH1cblxuICAgIGNvbmZpcm1EZWxldGUgKGxvZ2luKSB7XG4gICAgICAgIHRoaXMudXNlclNlcnZpY2UuZGVsZXRlKGxvZ2luKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgdGhpcy5ldmVudE1hbmFnZXIuYnJvYWRjYXN0KHsgbmFtZTogJ3VzZXJMaXN0TW9kaWZpY2F0aW9uJyxcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnRGVsZXRlZCBhIHVzZXInfSk7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZU1vZGFsLmRpc21pc3ModHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS11c2VyLWRlbGV0ZS1kaWFsb2cnLFxuICAgIHRlbXBsYXRlOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBVc2VyRGVsZXRlRGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgbW9kYWxSZWY6IE5nYk1vZGFsUmVmO1xuICAgIHJvdXRlU3ViOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvciAoXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICBwcml2YXRlIHVzZXJNb2RhbFNlcnZpY2U6IFVzZXJNb2RhbFNlcnZpY2VcbiAgICApIHt9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZVN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICAgICAgdGhpcy5tb2RhbFJlZiA9IHRoaXMudXNlck1vZGFsU2VydmljZS5vcGVuKFVzZXJNZ210RGVsZXRlRGlhbG9nQ29tcG9uZW50LCBwYXJhbXNbJ2xvZ2luJ10pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZVN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC1kZWxldGUtZGlhbG9nLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2ICpuZ0lmPVxcXCJ1c2VyXFxcIj4gPGgyPiA8c3BhbiBqaGlUcmFuc2xhdGU9XFxcInVzZXJNYW5hZ2VtZW50LmRldGFpbC50aXRsZVxcXCI+VXNlcjwvc3Bhbj4gWzxiPnt7dXNlci5sb2dpbn19PC9iPl0gPC9oMj4gPGRsIGNsYXNzPVxcXCJyb3ctbWQgamgtZW50aXR5LWRldGFpbHNcXFwiPiA8ZHQ+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJ1c2VyTWFuYWdlbWVudC5sb2dpblxcXCI+TG9naW48L3NwYW4+PC9kdD4gPGRkPiA8c3Bhbj57e3VzZXIubG9naW59fTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImJhZGdlIGJhZGdlLWRhbmdlclxcXCIgKm5nSWY9XFxcIiF1c2VyLmFjdGl2YXRlZFxcXCIgamhpVHJhbnNsYXRlPVxcXCJ1c2VyTWFuYWdlbWVudC5kZWFjdGl2YXRlZFxcXCI+RGVhY3RpdmF0ZWQ8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJiYWRnZSBiYWRnZS1zdWNjZXNzXFxcIiAqbmdJZj1cXFwidXNlci5hY3RpdmF0ZWRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwidXNlck1hbmFnZW1lbnQuYWN0aXZhdGVkXFxcIj5BY3RpdmF0ZWQ8L3NwYW4+IDwvZGQ+IDxkdD48c3BhbiBqaGlUcmFuc2xhdGU9XFxcInVzZXJNYW5hZ2VtZW50LmZpcnN0TmFtZVxcXCI+Rmlyc3QgTmFtZTwvc3Bhbj48L2R0PiA8ZGQ+e3t1c2VyLmZpcnN0TmFtZX19PC9kZD4gPGR0PjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwidXNlck1hbmFnZW1lbnQubGFzdE5hbWVcXFwiPkxhc3QgTmFtZTwvc3Bhbj48L2R0PiA8ZGQ+e3t1c2VyLmxhc3ROYW1lfX08L2RkPiA8ZHQ+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJ1c2VyTWFuYWdlbWVudC5lbWFpbFxcXCI+RW1haWw8L3NwYW4+PC9kdD4gPGRkPnt7dXNlci5lbWFpbH19PC9kZD4gPGR0PjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwidXNlck1hbmFnZW1lbnQubGFuZ0tleVxcXCI+TGFuZyBLZXk8L3NwYW4+PC9kdD4gPGRkPnt7dXNlci5sYW5nS2V5fX08L2RkPiA8ZHQ+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJ1c2VyTWFuYWdlbWVudC5jcmVhdGVkQnlcXFwiPkNyZWF0ZWQgQnk8L3NwYW4+PC9kdD4gPGRkPnt7dXNlci5jcmVhdGVkQnl9fTwvZGQ+IDxkdD48c3BhbiBqaGlUcmFuc2xhdGU9XFxcInVzZXJNYW5hZ2VtZW50LmNyZWF0ZWREYXRlXFxcIj5DcmVhdGVkIERhdGU8L3NwYW4+PC9kdD4gPGRkPnt7dXNlci5jcmVhdGVkRGF0ZSB8IGRhdGU6J2RkL01NL3l5IEhIOm1tJyB9fTwvZGQ+IDxkdD48c3BhbiBqaGlUcmFuc2xhdGU9XFxcInVzZXJNYW5hZ2VtZW50Lmxhc3RNb2RpZmllZEJ5XFxcIj5MYXN0IE1vZGlmaWVkIEJ5PC9zcGFuPjwvZHQ+IDxkZD57e3VzZXIubGFzdE1vZGlmaWVkQnl9fTwvZGQ+IDxkdD48c3BhbiBqaGlUcmFuc2xhdGU9XFxcInVzZXJNYW5hZ2VtZW50Lmxhc3RNb2RpZmllZERhdGVcXFwiPkxhc3QgTW9kaWZpZWQgRGF0ZTwvc3Bhbj48L2R0PiA8ZGQ+e3t1c2VyLmxhc3RNb2RpZmllZERhdGUgfCBkYXRlOidkZC9NTS95eSBISDptbSd9fTwvZGQ+IDxkdD48c3BhbiBqaGlUcmFuc2xhdGU9XFxcInVzZXJNYW5hZ2VtZW50LnByb2ZpbGVzXFxcIj5Qcm9maWxlczwvc3Bhbj48L2R0PiA8ZGQ+IDx1bCBjbGFzcz1cXFwibGlzdC11bnN0eWxlZFxcXCI+IDxsaSAqbmdGb3I9XFxcImxldCBhdXRob3JpdHkgb2YgdXNlci5hdXRob3JpdGllc1xcXCI+IDxzcGFuIGNsYXNzPVxcXCJiYWRnZSBiYWRnZS1pbmZvXFxcIj57e2F1dGhvcml0eX19PC9zcGFuPiA8L2xpPiA8L3VsPiA8L2RkPiA8L2RsPiA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgcm91dGVyTGluaz1cXFwiL3VzZXItbWFuYWdlbWVudFxcXCIgY2xhc3M9XFxcImJ0biBidG4taW5mb1xcXCI+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1hcnJvdy1sZWZ0XFxcIj48L3NwYW4+Jm5ic3A7PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJlbnRpdHkuYWN0aW9uLmJhY2tcXFwiPiBCYWNrPC9zcGFuPiA8L2J1dHRvbj4gPC9kaXY+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LWRldGFpbC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQtZGV0YWlsLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEpoaUxhbmd1YWdlU2VydmljZSB9IGZyb20gJ25nLWpoaXBzdGVyJztcblxuaW1wb3J0IHsgVXNlciwgVXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS11c2VyLW1nbXQtZGV0YWlsJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vdXNlci1tYW5hZ2VtZW50LWRldGFpbC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgVXNlck1nbXREZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICB1c2VyOiBVc2VyO1xuICAgIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBqaGlMYW5ndWFnZVNlcnZpY2U6IEpoaUxhbmd1YWdlU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlXG4gICAgKSB7XG4gICAgICAgIHRoaXMuamhpTGFuZ3VhZ2VTZXJ2aWNlLnNldExvY2F0aW9ucyhbJ3VzZXItbWFuYWdlbWVudCddKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9hZChwYXJhbXNbJ2xvZ2luJ10pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsb2FkIChsb2dpbikge1xuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmZpbmQobG9naW4pLnN1YnNjcmliZSh1c2VyID0+IHtcbiAgICAgICAgICAgIHRoaXMudXNlciA9IHVzZXI7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LWRldGFpbC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGZvcm0gbmFtZT1cXFwiZWRpdEZvcm1cXFwiIHJvbGU9XFxcImZvcm1cXFwiIG5vdmFsaWRhdGUgKG5nU3VibWl0KT1cXFwic2F2ZSgpXFxcIiAjZWRpdEZvcm09XFxcIm5nRm9ybVxcXCI+IDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+IDxoNCBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiIGlkPVxcXCJteVVzZXJMYWJlbFxcXCIgamhpVHJhbnNsYXRlPVxcXCJ1c2VyTWFuYWdlbWVudC5ob21lLmNyZWF0ZU9yRWRpdExhYmVsXFxcIj4gQ3JlYXRlIG9yIGVkaXQgYSBVc2VyPC9oND4gPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiIChjbGljayk9XFxcImNsZWFyKClcXFwiPiZ0aW1lczs8L2J1dHRvbj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPiA8amhpLWFsZXJ0LWVycm9yPjwvamhpLWFsZXJ0LWVycm9yPiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4gPGxhYmVsIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLmZpZWxkLmlkXFxcIj5JRDwvbGFiZWw+IDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJpZFxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXIuaWRcXFwiIHJlYWRvbmx5PVxcXCJyZWFkb25seVxcXCI+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4gPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wtbGFiZWxcXFwiIGpoaVRyYW5zbGF0ZT1cXFwidXNlck1hbmFnZW1lbnQubG9naW5cXFwiPkxvZ2luPC9sYWJlbD4gPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcImxvZ2luXFxcIiAjbG9naW5JbnB1dD1cXFwibmdNb2RlbFxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXIubG9naW5cXFwiIHJlcXVpcmVkIG1pbmxlbmd0aD1cXFwiMVxcXCIgbWF4bGVuZ3RoPVxcXCI1MFxcXCIgcGF0dGVybj1cXFwiXltfJy5AQS1aYS16MC05LV0qJFxcXCI+IDxkaXYgKm5nSWY9XFxcImxvZ2luSW5wdXQuZGlydHkgJiYgbG9naW5JbnB1dC5pbnZhbGlkXFxcIj4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJsb2dpbklucHV0LmVycm9ycy5yZXF1aXJlZFxcXCIgamhpVHJhbnNsYXRlPVxcXCJlbnRpdHkudmFsaWRhdGlvbi5yZXF1aXJlZFxcXCI+IFRoaXMgZmllbGQgaXMgcmVxdWlyZWQuIDwvc21hbGw+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwibG9naW5JbnB1dC5lcnJvcnMubWF4bGVuZ3RoXFxcIiBqaGlUcmFuc2xhdGU9XFxcImVudGl0eS52YWxpZGF0aW9uLm1heGxlbmd0aFxcXCIgdHJhbnNsYXRlLXZhbHVlLW1heD1cXFwiNTBcXFwiPiBUaGlzIGZpZWxkIGNhbm5vdCBiZSBsb25nZXIgdGhhbiA1MCBjaGFyYWN0ZXJzLiA8L3NtYWxsPiA8L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPiA8bGFiZWwgY2xhc3M9XFxcImZvcm0tY29udHJvbC1sYWJlbFxcXCIgamhpVHJhbnNsYXRlPVxcXCJ1c2VyTWFuYWdlbWVudC5maXJzdE5hbWVcXFwiPkZpcnN0IE5hbWU8L2xhYmVsPiA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwiZmlyc3ROYW1lXFxcIiAjZmlyc3ROYW1lSW5wdXQ9XFxcIm5nTW9kZWxcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyLmZpcnN0TmFtZVxcXCIgbWF4bGVuZ3RoPVxcXCI1MFxcXCI+IDxkaXYgKm5nSWY9XFxcImZpcnN0TmFtZUlucHV0LmRpcnR5ICYmIGZpcnN0TmFtZUlucHV0LmludmFsaWRcXFwiPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcImZpcnN0TmFtZUlucHV0LmVycm9ycy5tYXhsZW5ndGhcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZW50aXR5LnZhbGlkYXRpb24ubWF4bGVuZ3RoXFxcIiB0cmFuc2xhdGUtdmFsdWUtbWF4PVxcXCI1MFxcXCI+IFRoaXMgZmllbGQgY2Fubm90IGJlIGxvbmdlciB0aGFuIDUwIGNoYXJhY3RlcnMuIDwvc21hbGw+IDwvZGl2PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+IDxsYWJlbCBqaGlUcmFuc2xhdGU9XFxcInVzZXJNYW5hZ2VtZW50Lmxhc3ROYW1lXFxcIj5MYXN0IE5hbWU8L2xhYmVsPiA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwibGFzdE5hbWVcXFwiICNsYXN0TmFtZUlucHV0PVxcXCJuZ01vZGVsXFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlci5sYXN0TmFtZVxcXCIgbWF4bGVuZ3RoPVxcXCI1MFxcXCI+IDxkaXYgKm5nSWY9XFxcImxhc3ROYW1lSW5wdXQuZGlydHkgJiYgbGFzdE5hbWVJbnB1dC5pbnZhbGlkXFxcIj4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiICpuZ0lmPVxcXCJsYXN0TmFtZUlucHV0LmVycm9ycy5tYXhsZW5ndGhcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZW50aXR5LnZhbGlkYXRpb24ubWF4bGVuZ3RoXFxcIiB0cmFuc2xhdGUtdmFsdWUtbWF4PVxcXCI1MFxcXCI+IFRoaXMgZmllbGQgY2Fubm90IGJlIGxvbmdlciB0aGFuIDUwIGNoYXJhY3RlcnMuIDwvc21hbGw+IDwvZGl2PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+IDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jb250cm9sLWxhYmVsXFxcIiBqaGlUcmFuc2xhdGU9XFxcInVzZXJNYW5hZ2VtZW50LmVtYWlsXFxcIj5FbWFpbDwvbGFiZWw+IDxpbnB1dCB0eXBlPVxcXCJlbWFpbFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwiZW1haWxcXFwiICNlbWFpbElucHV0PVxcXCJuZ01vZGVsXFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlci5lbWFpbFxcXCIgcmVxdWlyZWQgbWF4bGVuZ3RoPVxcXCIxMDBcXFwiPiA8ZGl2ICpuZ0lmPVxcXCJlbWFpbElucHV0LmRpcnR5ICYmIGVtYWlsSW5wdXQuaW52YWxpZFxcXCI+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiAqbmdJZj1cXFwiZW1haWxJbnB1dC5lcnJvcnMucmVxdWlyZWRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZW50aXR5LnZhbGlkYXRpb24ucmVxdWlyZWRcXFwiPiBUaGlzIGZpZWxkIGlzIHJlcXVpcmVkLiA8L3NtYWxsPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcImVtYWlsSW5wdXQuZXJyb3JzLm1heGxlbmd0aFxcXCIgamhpVHJhbnNsYXRlPVxcXCJlbnRpdHkudmFsaWRhdGlvbi5tYXhsZW5ndGhcXFwiIHRyYW5zbGF0ZS12YWx1ZS1tYXg9XFxcIjEwMFxcXCI+IFRoaXMgZmllbGQgY2Fubm90IGJlIGxvbmdlciB0aGFuIDEwMCBjaGFyYWN0ZXJzLiA8L3NtYWxsPiA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LWRhbmdlclxcXCIgKm5nSWY9XFxcImVtYWlsSW5wdXQuZXJyb3JzLmVtYWlsXFxcIiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZXNzYWdlcy52YWxpZGF0ZS5lbWFpbC5pbnZhbGlkXFxcIj4gWW91ciBlLW1haWwgaXMgaW52YWxpZC4gPC9zbWFsbD4gPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWNoZWNrXFxcIj4gPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNoZWNrLWxhYmVsXFxcIiBmb3I9XFxcImFjdGl2YXRlZFxcXCI+IDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jaGVjay1pbnB1dFxcXCIgW2Rpc2FibGVkXT1cXFwidXNlci5pZCA9PT0gbnVsbFxcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGlkPVxcXCJhY3RpdmF0ZWRcXFwiIG5hbWU9XFxcImFjdGl2YXRlZFxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXIuYWN0aXZhdGVkXFxcIj4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJ1c2VyTWFuYWdlbWVudC5hY3RpdmF0ZWRcXFwiPkFjdGl2YXRlZDwvc3Bhbj4gPC9sYWJlbD4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiICpuZ0lmPVxcXCJsYW5ndWFnZXMgJiYgbGFuZ3VhZ2VzLmxlbmd0aCA+IDBcXFwiPiA8bGFiZWwgamhpVHJhbnNsYXRlPVxcXCJ1c2VyTWFuYWdlbWVudC5sYW5nS2V5XFxcIj5MYW5nIEtleTwvbGFiZWw+IDxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcImxhbmdLZXlcXFwiIG5hbWU9XFxcImxhbmdLZXlcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyLmxhbmdLZXlcXFwiPiA8b3B0aW9uICpuZ0Zvcj1cXFwibGV0IGxhbmd1YWdlIG9mIGxhbmd1YWdlc1xcXCIgW3ZhbHVlXT1cXFwibGFuZ3VhZ2VcXFwiPnt7bGFuZ3VhZ2UgfCBmaW5kTGFuZ3VhZ2VGcm9tS2V5fX08L29wdGlvbj4gPC9zZWxlY3Q+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4gPGxhYmVsIGpoaVRyYW5zbGF0ZT1cXFwidXNlck1hbmFnZW1lbnQucHJvZmlsZXNcXFwiPlByb2ZpbGVzPC9sYWJlbD4gPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBtdWx0aXBsZT1cXFwibXVsdGlwbGVcXFwiIG5hbWU9XFxcImF1dGhvcml0eVxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXIuYXV0aG9yaXRpZXNcXFwiPiA8b3B0aW9uICpuZ0Zvcj1cXFwibGV0IGF1dGhvcml0eSBvZiBhdXRob3JpdGllc1xcXCIgW3ZhbHVlXT1cXFwiYXV0aG9yaXR5XFxcIj57e2F1dGhvcml0eX19PC9vcHRpb24+IDwvc2VsZWN0PiA8L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+IDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnlcXFwiIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiIChjbGljayk9XFxcImNsZWFyKClcXFwiPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtYmFuXFxcIj48L3NwYW4+Jm5ic3A7PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJlbnRpdHkuYWN0aW9uLmNhbmNlbFxcXCI+Q2FuY2VsPC9zcGFuPiA8L2J1dHRvbj4gPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIFtkaXNhYmxlZF09XFxcImVkaXRGb3JtLmZvcm0uaW52YWxpZCB8fCBpc1NhdmluZ1xcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCI+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1mbG9wcHktb1xcXCI+PC9zcGFuPiZuYnNwOzxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiZW50aXR5LmFjdGlvbi5zYXZlXFxcIj5TYXZlPC9zcGFuPiA8L2J1dHRvbj4gPC9kaXY+IDwvZm9ybT4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQtZGlhbG9nLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC1kaWFsb2cuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBOZ2JBY3RpdmVNb2RhbCwgTmdiTW9kYWxSZWYgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBFdmVudE1hbmFnZXIsIEpoaUxhbmd1YWdlU2VydmljZSB9IGZyb20gJ25nLWpoaXBzdGVyJztcblxuaW1wb3J0IHsgVXNlck1vZGFsU2VydmljZSB9IGZyb20gJy4vdXNlci1tb2RhbC5zZXJ2aWNlJztcbmltcG9ydCB7IEpoaUxhbmd1YWdlSGVscGVyLCBVc2VyLCBVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLXVzZXItbWdtdC1kaWFsb2cnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi91c2VyLW1hbmFnZW1lbnQtZGlhbG9nLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBVc2VyTWdtdERpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICB1c2VyOiBVc2VyO1xuICAgIGxhbmd1YWdlczogYW55W107XG4gICAgYXV0aG9yaXRpZXM6IGFueVtdO1xuICAgIGlzU2F2aW5nOiBCb29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IgKFxuICAgICAgICBwdWJsaWMgYWN0aXZlTW9kYWw6IE5nYkFjdGl2ZU1vZGFsLFxuICAgICAgICBwcml2YXRlIGxhbmd1YWdlSGVscGVyOiBKaGlMYW5ndWFnZUhlbHBlcixcbiAgICAgICAgcHJpdmF0ZSBqaGlMYW5ndWFnZVNlcnZpY2U6IEpoaUxhbmd1YWdlU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgZXZlbnRNYW5hZ2VyOiBFdmVudE1hbmFnZXJcbiAgICApIHt9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5pc1NhdmluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmF1dGhvcml0aWVzID0gWydST0xFX1VTRVInLCAnUk9MRV9BRE1JTiddO1xuICAgICAgICB0aGlzLmxhbmd1YWdlSGVscGVyLmdldEFsbCgpLnRoZW4oKGxhbmd1YWdlcykgPT4ge1xuICAgICAgICAgICAgdGhpcy5sYW5ndWFnZXMgPSBsYW5ndWFnZXM7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmpoaUxhbmd1YWdlU2VydmljZS5zZXRMb2NhdGlvbnMoWyd1c2VyLW1hbmFnZW1lbnQnXSk7XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlTW9kYWwuZGlzbWlzcygnY2FuY2VsJyk7XG4gICAgfVxuXG4gICAgc2F2ZSgpIHtcbiAgICAgICAgdGhpcy5pc1NhdmluZyA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLnVzZXIuaWQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMudXNlclNlcnZpY2UudXBkYXRlKHRoaXMudXNlcikuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHRoaXMub25TYXZlU3VjY2VzcyhyZXNwb25zZSksICgpID0+IHRoaXMub25TYXZlRXJyb3IoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmNyZWF0ZSh0aGlzLnVzZXIpLnN1YnNjcmliZShyZXNwb25zZSA9PiB0aGlzLm9uU2F2ZVN1Y2Nlc3MocmVzcG9uc2UpLCAoKSA9PiB0aGlzLm9uU2F2ZUVycm9yKCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblNhdmVTdWNjZXNzKHJlc3VsdCkge1xuICAgICAgICB0aGlzLmV2ZW50TWFuYWdlci5icm9hZGNhc3QoeyBuYW1lOiAndXNlckxpc3RNb2RpZmljYXRpb24nLCBjb250ZW50OiAnT0snIH0pO1xuICAgICAgICB0aGlzLmlzU2F2aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYWN0aXZlTW9kYWwuZGlzbWlzcyhyZXN1bHQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25TYXZlRXJyb3IoKSB7XG4gICAgICAgIHRoaXMuaXNTYXZpbmcgPSBmYWxzZTtcbiAgICB9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLXVzZXItZGlhbG9nJyxcbiAgICB0ZW1wbGF0ZTogJydcbn0pXG5leHBvcnQgY2xhc3MgVXNlckRpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIG1vZGFsUmVmOiBOZ2JNb2RhbFJlZjtcbiAgICByb3V0ZVN1YjogYW55O1xuXG4gICAgY29uc3RydWN0b3IgKFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSB1c2VyTW9kYWxTZXJ2aWNlOiBVc2VyTW9kYWxTZXJ2aWNlXG4gICAgKSB7fVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucm91dGVTdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgICAgICAgIGlmICggcGFyYW1zWydsb2dpbiddICkge1xuICAgICAgICAgICAgICAgIHRoaXMubW9kYWxSZWYgPSB0aGlzLnVzZXJNb2RhbFNlcnZpY2Uub3BlbihVc2VyTWdtdERpYWxvZ0NvbXBvbmVudCwgcGFyYW1zWydsb2dpbiddKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RhbFJlZiA9IHRoaXMudXNlck1vZGFsU2VydmljZS5vcGVuKFVzZXJNZ210RGlhbG9nQ29tcG9uZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMucm91dGVTdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FkbWluL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQtZGlhbG9nLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PiA8aDI+IDxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwidXNlck1hbmFnZW1lbnQuaG9tZS50aXRsZVxcXCI+VXNlcnM8L3NwYW4+IDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBmbG9hdC1yaWdodFxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy8nLCB7IG91dGxldHM6IHsgcG9wdXA6IFsndXNlci1tYW5hZ2VtZW50LW5ldyddIH0gfV1cXFwiPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtcGx1c1xcXCI+PC9zcGFuPiA8c3BhbiBqaGlUcmFuc2xhdGU9XFxcInVzZXJNYW5hZ2VtZW50LmhvbWUuY3JlYXRlTGFiZWxcXFwiPkNyZWF0ZSBhIG5ldyBVc2VyPC9zcGFuPiA8L2J1dHRvbj4gPC9oMj4gPGpoaS1hbGVydD48L2poaS1hbGVydD4gPGRpdiBjbGFzcz1cXFwidGFibGUtcmVzcG9uc2l2ZVxcXCIgKm5nSWY9XFxcInVzZXJzXFxcIj4gPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSB0YWJsZS1zdHJpcGVkXFxcIj4gPHRoZWFkPiA8dHIgamhpU29ydCBbKHByZWRpY2F0ZSldPVxcXCJwcmVkaWNhdGVcXFwiIFsoYXNjZW5kaW5nKV09XFxcInJldmVyc2VcXFwiIFtjYWxsYmFja109XFxcInRyYW5zaXRpb24uYmluZCh0aGlzKVxcXCI+IDx0aCBqaGlTb3J0Qnk9XFxcImlkXFxcIj48c3BhbiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5maWVsZC5pZFxcXCI+SUQ8L3NwYW4+PHNwYW4gY2xhc3M9XFxcImZhIGZhLXNvcnRcXFwiPjwvc3Bhbj48L3RoPiA8dGggamhpU29ydEJ5PVxcXCJsb2dpblxcXCI+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJ1c2VyTWFuYWdlbWVudC5sb2dpblxcXCI+TG9naW48L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1zb3J0XFxcIj48L3NwYW4+PC90aD4gPHRoIGpoaVNvcnRCeT1cXFwiZW1haWxcXFwiPjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwidXNlck1hbmFnZW1lbnQuZW1haWxcXFwiPkVtYWlsPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtc29ydFxcXCI+PC9zcGFuPjwvdGg+IDx0aD48L3RoPiA8dGggamhpU29ydEJ5PVxcXCJsYW5nS2V5XFxcIj4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJ1c2VyTWFuYWdlbWVudC5sYW5nS2V5XFxcIj5MYW5nIEtleTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXNvcnRcXFwiPjwvc3Bhbj48L3RoPiA8dGg+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJ1c2VyTWFuYWdlbWVudC5wcm9maWxlc1xcXCI+UHJvZmlsZXM8L3NwYW4+PC90aD4gPHRoIGpoaVNvcnRCeT1cXFwiY3JlYXRlZERhdGVcXFwiPjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwidXNlck1hbmFnZW1lbnQuY3JlYXRlZERhdGVcXFwiPkNyZWF0ZWQgRGF0ZTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXNvcnRcXFwiPjwvc3Bhbj48L3RoPiA8dGggamhpU29ydEJ5PVxcXCJsYXN0TW9kaWZpZWRCeVxcXCI+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJ1c2VyTWFuYWdlbWVudC5sYXN0TW9kaWZpZWRCeVxcXCI+TGFzdCBNb2RpZmllZCBCeTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXNvcnRcXFwiPjwvc3Bhbj48L3RoPiA8dGggamhpU29ydEJ5PVxcXCJsYXN0TW9kaWZpZWREYXRlXFxcIj48c3BhbiBqaGlUcmFuc2xhdGU9XFxcInVzZXJNYW5hZ2VtZW50Lmxhc3RNb2RpZmllZERhdGVcXFwiPkxhc3QgTW9kaWZpZWQgRGF0ZTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXNvcnRcXFwiPjwvc3Bhbj48L3RoPiA8dGg+PC90aD4gPC90cj4gPC90aGVhZD4gPHRib2R5ICpuZ0lmPVxcXCJ1c2Vyc1xcXCI+IDx0ciAqbmdGb3I9XFxcImxldCB1c2VyIG9mIHVzZXJzOyB0cmFja0J5OiB0cmFja0lkZW50aXR5XFxcIj4gPHRkPjxhIFtyb3V0ZXJMaW5rXT1cXFwiWycuLi91c2VyLW1hbmFnZW1lbnQnLCB1c2VyLmxvZ2luXVxcXCI+e3t1c2VyLmlkfX08L2E+PC90ZD4gPHRkPnt7dXNlci5sb2dpbn19PC90ZD4gPHRkPnt7dXNlci5lbWFpbH19PC90ZD4gPHRkPiA8c3BhbiBjbGFzcz1cXFwiYmFkZ2UgYmFkZ2UtZGFuZ2VyIGhhbmRcXFwiIChjbGljayk9XFxcInNldEFjdGl2ZSh1c2VyLCB0cnVlKVxcXCIgKm5nSWY9XFxcIiF1c2VyLmFjdGl2YXRlZFxcXCIgamhpVHJhbnNsYXRlPVxcXCJ1c2VyTWFuYWdlbWVudC5kZWFjdGl2YXRlZFxcXCI+RGVhY3RpdmF0ZWQ8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJiYWRnZSBiYWRnZS1zdWNjZXNzIGhhbmRcXFwiIChjbGljayk9XFxcInNldEFjdGl2ZSh1c2VyLCBmYWxzZSlcXFwiICpuZ0lmPVxcXCJ1c2VyLmFjdGl2YXRlZFxcXCIgamhpVHJhbnNsYXRlPVxcXCJ1c2VyTWFuYWdlbWVudC5hY3RpdmF0ZWRcXFwiPkFjdGl2YXRlZDwvc3Bhbj4gPC90ZD4gPHRkPnt7dXNlci5sYW5nS2V5fX08L3RkPiA8dGQ+IDxkaXYgKm5nRm9yPVxcXCJsZXQgYXV0aG9yaXR5IG9mIHVzZXIuYXV0aG9yaXRpZXNcXFwiPiA8c3BhbiBjbGFzcz1cXFwidGFnIHRhZy1pbmZvXFxcIj57eyBhdXRob3JpdHkgfX08L3NwYW4+IDwvZGl2PiA8L3RkPiA8dGQ+e3t1c2VyLmNyZWF0ZWREYXRlIHwgZGF0ZTonZGQvTU0veXkgSEg6bW0nfX08L3RkPiA8dGQ+e3t1c2VyLmxhc3RNb2RpZmllZEJ5fX08L3RkPiA8dGQ+e3t1c2VyLmxhc3RNb2RpZmllZERhdGUgfCBkYXRlOidkZC9NTS95eSBISDptbSd9fTwvdGQ+IDx0ZCBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCI+IDxkaXYgY2xhc3M9XFxcImJ0bi1ncm91cCBmbGV4LWJ0bi1ncm91cC1jb250YWluZXJcXFwiPiA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy4uL3VzZXItbWFuYWdlbWVudCcsIHVzZXIubG9naW5dXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1pbmZvIGJ0bi1zbVxcXCI+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1leWVcXFwiPjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhpZGRlbi1tZC1kb3duXFxcIiBqaGlUcmFuc2xhdGU9XFxcImVudGl0eS5hY3Rpb24udmlld1xcXCI+Vmlldzwvc3Bhbj4gPC9idXR0b24+IDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBbcm91dGVyTGlua109XFxcIlsnLycsIHsgb3V0bGV0czogeyBwb3B1cDogJ3VzZXItbWFuYWdlbWVudC8nKyB1c2VyLmxvZ2luICsgJy9lZGl0J30gfV1cXFwiIHJlcGxhY2VVcmw9XFxcInRydWVcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLXNtXFxcIj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXBlbmNpbFxcXCI+PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiaGlkZGVuLW1kLWRvd25cXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZW50aXR5LmFjdGlvbi5lZGl0XFxcIj5FZGl0PC9zcGFuPiA8L2J1dHRvbj4gPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvJywgeyBvdXRsZXRzOiB7IHBvcHVwOiAndXNlci1tYW5hZ2VtZW50LycrIHVzZXIubG9naW4gKyAnL2RlbGV0ZSd9IH1dXFxcIiByZXBsYWNlVXJsPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXIgYnRuLXNtXFxcIiBbZGlzYWJsZWRdPVxcXCJjdXJyZW50QWNjb3VudC5sb2dpbj09dXNlci5sb2dpblxcXCI+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1yZW1vdmVcXFwiPjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImhpZGRlbi1tZC1kb3duXFxcIiBqaGlUcmFuc2xhdGU9XFxcImVudGl0eS5hY3Rpb24uZGVsZXRlXFxcIj5EZWxldGU8L3NwYW4+IDwvYnV0dG9uPiA8L2Rpdj4gPC90ZD4gPC90cj4gPC90Ym9keT4gPC90YWJsZT4gPC9kaXY+IDxkaXYgKm5nSWY9XFxcInVzZXJzXFxcIj4gPGRpdiBjbGFzcz1cXFwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcXFwiPiA8amhpLWl0ZW0tY291bnQgW3BhZ2VdPVxcXCJwYWdlXFxcIiBbdG90YWxdPVxcXCJxdWVyeUNvdW50XFxcIiBbaXRlbXNQZXJQYWdlXT1cXFwiaXRlbXNQZXJQYWdlXFxcIj48L2poaS1pdGVtLWNvdW50PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcXFwiPiA8bmdiLXBhZ2luYXRpb24gW2NvbGxlY3Rpb25TaXplXT1cXFwidG90YWxJdGVtc1xcXCIgWyhwYWdlKV09XFxcInBhZ2VcXFwiIChwYWdlQ2hhbmdlKT1cXFwibG9hZFBhZ2UocGFnZSlcXFwiPjwvbmdiLXBhZ2luYXRpb24+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBFdmVudE1hbmFnZXIsIFBhZ2luYXRpb25VdGlsLCBQYXJzZUxpbmtzLCBBbGVydFNlcnZpY2UsIEpoaUxhbmd1YWdlU2VydmljZSB9IGZyb20gJ25nLWpoaXBzdGVyJztcblxuaW1wb3J0IHsgSVRFTVNfUEVSX1BBR0UsIFByaW5jaXBhbCwgVXNlciwgVXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQnO1xuaW1wb3J0IHsgUGFnaW5hdGlvbkNvbmZpZyB9IGZyb20gJy4uLy4uL2Jsb2Nrcy9jb25maWcvdWliLXBhZ2luYXRpb24uY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqaGktdXNlci1tZ210JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vdXNlci1tYW5hZ2VtZW50LmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBVc2VyTWdtdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIGN1cnJlbnRBY2NvdW50OiBhbnk7XG4gICAgdXNlcnM6IFVzZXJbXTtcbiAgICBlcnJvcjogYW55O1xuICAgIHN1Y2Nlc3M6IGFueTtcbiAgICByb3V0ZURhdGE6IGFueTtcbiAgICBsaW5rczogYW55O1xuICAgIHRvdGFsSXRlbXM6IGFueTtcbiAgICBxdWVyeUNvdW50OiBhbnk7XG4gICAgaXRlbXNQZXJQYWdlOiBhbnk7XG4gICAgcGFnZTogYW55O1xuICAgIHByZWRpY2F0ZTogYW55O1xuICAgIHByZXZpb3VzUGFnZTogYW55O1xuICAgIHJldmVyc2U6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGpoaUxhbmd1YWdlU2VydmljZTogSmhpTGFuZ3VhZ2VTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBwYXJzZUxpbmtzOiBQYXJzZUxpbmtzLFxuICAgICAgICBwcml2YXRlIGFsZXJ0U2VydmljZTogQWxlcnRTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHByaW5jaXBhbDogUHJpbmNpcGFsLFxuICAgICAgICBwcml2YXRlIGV2ZW50TWFuYWdlcjogRXZlbnRNYW5hZ2VyLFxuICAgICAgICBwcml2YXRlIHBhZ2luYXRpb25VdGlsOiBQYWdpbmF0aW9uVXRpbCxcbiAgICAgICAgcHJpdmF0ZSBwYWdpbmF0aW9uQ29uZmlnOiBQYWdpbmF0aW9uQ29uZmlnLFxuICAgICAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxuICAgICkge1xuICAgICAgICB0aGlzLml0ZW1zUGVyUGFnZSA9IElURU1TX1BFUl9QQUdFO1xuICAgICAgICB0aGlzLnJvdXRlRGF0YSA9IHRoaXMuYWN0aXZhdGVkUm91dGUuZGF0YS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBhZ2UgPSBkYXRhWydwYWdpbmdQYXJhbXMnXS5wYWdlO1xuICAgICAgICAgICAgdGhpcy5wcmV2aW91c1BhZ2UgPSBkYXRhWydwYWdpbmdQYXJhbXMnXS5wYWdlO1xuICAgICAgICAgICAgdGhpcy5yZXZlcnNlID0gZGF0YVsncGFnaW5nUGFyYW1zJ10uYXNjZW5kaW5nO1xuICAgICAgICAgICAgdGhpcy5wcmVkaWNhdGUgPSBkYXRhWydwYWdpbmdQYXJhbXMnXS5wcmVkaWNhdGU7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmpoaUxhbmd1YWdlU2VydmljZS5zZXRMb2NhdGlvbnMoWyd1c2VyLW1hbmFnZW1lbnQnXSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucHJpbmNpcGFsLmlkZW50aXR5KCkudGhlbigoYWNjb3VudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50QWNjb3VudCA9IGFjY291bnQ7XG4gICAgICAgICAgICB0aGlzLmxvYWRBbGwoKTtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJDaGFuZ2VJblVzZXJzKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnJvdXRlRGF0YS51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyQ2hhbmdlSW5Vc2VycygpIHtcbiAgICAgICAgdGhpcy5ldmVudE1hbmFnZXIuc3Vic2NyaWJlKCd1c2VyTGlzdE1vZGlmaWNhdGlvbicsIChyZXNwb25zZSkgPT4gdGhpcy5sb2FkQWxsKCkpO1xuICAgIH1cblxuICAgIHNldEFjdGl2ZSAodXNlciwgaXNBY3RpdmF0ZWQpIHtcbiAgICAgICAgdXNlci5hY3RpdmF0ZWQgPSBpc0FjdGl2YXRlZDtcblxuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLnVwZGF0ZSh1c2VyKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICByZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Y2Nlc3MgPSAnT0snO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRBbGwoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Y2Nlc3MgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gJ0VSUk9SJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsb2FkQWxsICgpIHtcbiAgICAgICAgdGhpcy51c2VyU2VydmljZS5xdWVyeSh7XG4gICAgICAgICAgICBwYWdlOiB0aGlzLnBhZ2UgLSAxLFxuICAgICAgICAgICAgc2l6ZTogdGhpcy5pdGVtc1BlclBhZ2UsXG4gICAgICAgICAgICBzb3J0OiB0aGlzLnNvcnQoKX0pLnN1YnNjcmliZShcbiAgICAgICAgICAgIChyZXM6IFJlc3BvbnNlKSA9PiB0aGlzLm9uU3VjY2VzcyhyZXMuanNvbigpLCByZXMuaGVhZGVycyksXG4gICAgICAgICAgICAocmVzOiBSZXNwb25zZSkgPT4gdGhpcy5vbkVycm9yKHJlcy5qc29uKCkpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgdHJhY2tJZGVudGl0eSAoaW5kZXgsIGl0ZW06IFVzZXIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0uaWQ7XG4gICAgfVxuXG4gICAgc29ydCAoKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBbdGhpcy5wcmVkaWNhdGUgKyAnLCcgKyAodGhpcy5yZXZlcnNlID8gJ2FzYycgOiAnZGVzYycpXTtcbiAgICAgICAgaWYgKHRoaXMucHJlZGljYXRlICE9PSAnaWQnKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCgnaWQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGxvYWRQYWdlIChwYWdlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHBhZ2UgIT09IHRoaXMucHJldmlvdXNQYWdlKSB7XG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzUGFnZSA9IHBhZ2U7XG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb24oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRyYW5zaXRpb24gKCkge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy91c2VyLW1hbmFnZW1lbnQnXSwgeyBxdWVyeVBhcmFtczpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBhZ2U6IHRoaXMucGFnZSxcbiAgICAgICAgICAgICAgICAgICAgc29ydDogdGhpcy5wcmVkaWNhdGUgKyAnLCcgKyAodGhpcy5yZXZlcnNlID8gJ2FzYycgOiAnZGVzYycpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5sb2FkQWxsKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblN1Y2Nlc3MoZGF0YSwgaGVhZGVycykge1xuICAgICAgICB0aGlzLmxpbmtzID0gdGhpcy5wYXJzZUxpbmtzLnBhcnNlKGhlYWRlcnMuZ2V0KCdsaW5rJykpO1xuICAgICAgICB0aGlzLnRvdGFsSXRlbXMgPSBoZWFkZXJzLmdldCgnWC1Ub3RhbC1Db3VudCcpO1xuICAgICAgICB0aGlzLnF1ZXJ5Q291bnQgPSB0aGlzLnRvdGFsSXRlbXM7XG4gICAgICAgIHRoaXMudXNlcnMgPSBkYXRhO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25FcnJvcihlcnJvcikge1xuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5lcnJvcihlcnJvci5lcnJvciwgZXJyb3IubWVzc2FnZSwgbnVsbCk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9hZG1pbi91c2VyLW1hbmFnZW1lbnQvdXNlci1tYW5hZ2VtZW50LmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc29sdmUsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJvdXRlclN0YXRlU25hcHNob3QsIFJvdXRlcywgQ2FuQWN0aXZhdGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBQYWdpbmF0aW9uVXRpbCB9IGZyb20gJ25nLWpoaXBzdGVyJztcblxuaW1wb3J0IHsgVXNlck1nbXRDb21wb25lbnQgfSBmcm9tICcuL3VzZXItbWFuYWdlbWVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVXNlck1nbXREZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL3VzZXItbWFuYWdlbWVudC1kZXRhaWwuY29tcG9uZW50JztcbmltcG9ydCB7IFVzZXJEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL3VzZXItbWFuYWdlbWVudC1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IFVzZXJEZWxldGVEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL3VzZXItbWFuYWdlbWVudC1kZWxldGUtZGlhbG9nLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFByaW5jaXBhbCB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJSZXNvbHZlIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJpbmNpcGFsOiBQcmluY2lwYWwpIHsgfVxuXG4gIGNhbkFjdGl2YXRlKCkge1xuICAgIHJldHVybiB0aGlzLnByaW5jaXBhbC5pZGVudGl0eSgpLnRoZW4oYWNjb3VudCA9PiB0aGlzLnByaW5jaXBhbC5oYXNBbnlBdXRob3JpdHkoWydST0xFX0FETUlOJ10pKTtcbiAgfVxufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlclJlc29sdmVQYWdpbmdQYXJhbXMgaW1wbGVtZW50cyBSZXNvbHZlPGFueT4ge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnaW5hdGlvblV0aWw6IFBhZ2luYXRpb25VdGlsKSB7fVxuXG4gIHJlc29sdmUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KSB7XG4gICAgICBsZXQgcGFnZSA9IHJvdXRlLnF1ZXJ5UGFyYW1zWydwYWdlJ10gPyByb3V0ZS5xdWVyeVBhcmFtc1sncGFnZSddIDogJzEnO1xuICAgICAgbGV0IHNvcnQgPSByb3V0ZS5xdWVyeVBhcmFtc1snc29ydCddID8gcm91dGUucXVlcnlQYXJhbXNbJ3NvcnQnXSA6ICdpZCxhc2MnO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwYWdlOiB0aGlzLnBhZ2luYXRpb25VdGlsLnBhcnNlUGFnZShwYWdlKSxcbiAgICAgICAgICBwcmVkaWNhdGU6IHRoaXMucGFnaW5hdGlvblV0aWwucGFyc2VQcmVkaWNhdGUoc29ydCksXG4gICAgICAgICAgYXNjZW5kaW5nOiB0aGlzLnBhZ2luYXRpb25VdGlsLnBhcnNlQXNjZW5kaW5nKHNvcnQpXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdXNlck1nbXRSb3V0ZTogUm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJ3VzZXItbWFuYWdlbWVudCcsXG4gICAgY29tcG9uZW50OiBVc2VyTWdtdENvbXBvbmVudCxcbiAgICByZXNvbHZlOiB7XG4gICAgICAncGFnaW5nUGFyYW1zJzogVXNlclJlc29sdmVQYWdpbmdQYXJhbXNcbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgIHBhZ2VUaXRsZTogJ3VzZXJNYW5hZ2VtZW50LmhvbWUudGl0bGUnXG4gICAgfVxuICB9LFxuICB7XG4gICAgcGF0aDogJ3VzZXItbWFuYWdlbWVudC86bG9naW4nLFxuICAgIGNvbXBvbmVudDogVXNlck1nbXREZXRhaWxDb21wb25lbnQsXG4gICAgZGF0YToge1xuICAgICAgcGFnZVRpdGxlOiAndXNlck1hbmFnZW1lbnQuaG9tZS50aXRsZSdcbiAgICB9XG4gIH1cbl07XG5cbmV4cG9ydCBjb25zdCB1c2VyRGlhbG9nUm91dGU6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICd1c2VyLW1hbmFnZW1lbnQtbmV3JyxcbiAgICBjb21wb25lbnQ6IFVzZXJEaWFsb2dDb21wb25lbnQsXG4gICAgb3V0bGV0OiAncG9wdXAnXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAndXNlci1tYW5hZ2VtZW50Lzpsb2dpbi9lZGl0JyxcbiAgICBjb21wb25lbnQ6IFVzZXJEaWFsb2dDb21wb25lbnQsXG4gICAgb3V0bGV0OiAncG9wdXAnXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAndXNlci1tYW5hZ2VtZW50Lzpsb2dpbi9kZWxldGUnLFxuICAgIGNvbXBvbmVudDogVXNlckRlbGV0ZURpYWxvZ0NvbXBvbmVudCxcbiAgICBvdXRsZXQ6ICdwb3B1cCdcbiAgfVxuXTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC5yb3V0ZS50cyIsImltcG9ydCB7IEluamVjdGFibGUsIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE5nYk1vZGFsLCBOZ2JNb2RhbFJlZiB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcblxuaW1wb3J0IHsgVXNlciwgVXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlck1vZGFsU2VydmljZSB7XG4gICAgcHJpdmF0ZSBpc09wZW4gPSBmYWxzZTtcbiAgICBjb25zdHJ1Y3RvciAoXG4gICAgICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBOZ2JNb2RhbCxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2VcbiAgICApIHt9XG5cbiAgICBvcGVuIChjb21wb25lbnQ6IENvbXBvbmVudCwgbG9naW4/OiBzdHJpbmcpOiBOZ2JNb2RhbFJlZiB7XG4gICAgICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcblxuICAgICAgICBpZiAobG9naW4pIHtcbiAgICAgICAgICAgIHRoaXMudXNlclNlcnZpY2UuZmluZChsb2dpbikuc3Vic2NyaWJlKHVzZXIgPT4gdGhpcy51c2VyTW9kYWxSZWYoY29tcG9uZW50LCB1c2VyKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy51c2VyTW9kYWxSZWYoY29tcG9uZW50LCBuZXcgVXNlcigpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVzZXJNb2RhbFJlZihjb21wb25lbnQ6IENvbXBvbmVudCwgdXNlcjogVXNlcik6IE5nYk1vZGFsUmVmIHtcbiAgICAgICAgbGV0IG1vZGFsUmVmID0gdGhpcy5tb2RhbFNlcnZpY2Uub3Blbihjb21wb25lbnQsIHsgc2l6ZTogJ2xnJywgYmFja2Ryb3A6ICdzdGF0aWMnfSk7XG4gICAgICAgIG1vZGFsUmVmLmNvbXBvbmVudEluc3RhbmNlLnVzZXIgPSB1c2VyO1xuICAgICAgICBtb2RhbFJlZi5yZXN1bHQudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3sgb3V0bGV0czogeyBwb3B1cDogbnVsbCB9fV0sIHsgcmVwbGFjZVVybDogdHJ1ZSB9KTtcbiAgICAgICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgIH0sIChyZWFzb24pID0+IHtcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt7IG91dGxldHM6IHsgcG9wdXA6IG51bGwgfX1dLCB7IHJlcGxhY2VVcmw6IHRydWUgfSk7XG4gICAgICAgICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG1vZGFsUmVmO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYWRtaW4vdXNlci1tYW5hZ2VtZW50L3VzZXItbW9kYWwuc2VydmljZS50cyIsIi8vIERPIE5PVCBFRElUIFRISVMgRklMRSwgRURJVCBUSEUgV0VCUEFDSyBDT01NT04gQ09ORklHIElOU1RFQUQsIFdISUNIIFdJTEwgTU9ESUZZIFRISVMgRklMRVxubGV0IF9WRVJTSU9OID0gJzAuMC4wJzsgLy8gVGhpcyB2YWx1ZSB3aWxsIGJlIG92ZXJ3cml0dGVuIGJ5IHdlYnBhY2tcbmxldCBfREVCVUdfSU5GT19FTkFCTEVEID0gdHJ1ZTsgLy8gVGhpcyB2YWx1ZSB3aWxsIGJlIG92ZXJ3cml0dGVuIGJ5IHdlYnBhY2tcbl9WRVJTSU9OID0gXCIwLjAuMFwiO1xuX0RFQlVHX0lORk9fRU5BQkxFRCA9IHRydWU7XG5leHBvcnQgY29uc3QgVkVSU0lPTiA9IF9WRVJTSU9OO1xuZXhwb3J0IGNvbnN0IERFQlVHX0lORk9fRU5BQkxFRCA9IF9ERUJVR19JTkZPX0VOQUJMRUQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3N0cmluZy1yZXBsYWNlLXdlYnBhY2stcGx1Z2luL2xvYWRlci5qcz9pZD1xdW02OWUxdmU3d244cHV5ZGxwdThmciEuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYXBwLmNvbnN0YW50cy50cyIsImltcG9ydCB7IHBsYXRmb3JtQnJvd3NlckR5bmFtaWMgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnO1xuaW1wb3J0IHsgUHJvZENvbmZpZyB9IGZyb20gJy4vYmxvY2tzL2NvbmZpZy9wcm9kLmNvbmZpZyc7XG5pbXBvcnQgeyBTcHJpbmdCb290QW5ndWxhckFwcE1vZHVsZSB9IGZyb20gJy4vYXBwLm1vZHVsZSc7XG5cblByb2RDb25maWcoKTtcblxuaWYgKG1vZHVsZVsnaG90J10pIHtcbiAgICBtb2R1bGVbJ2hvdCddLmFjY2VwdCgpO1xufVxuXG5wbGF0Zm9ybUJyb3dzZXJEeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKFNwcmluZ0Jvb3RBbmd1bGFyQXBwTW9kdWxlKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYXBwLm1haW4udHMiLCJpbXBvcnQgJy4vdmVuZG9yLnRzJztcblxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE5nMldlYnN0b3JhZ2UgfSBmcm9tICduZzItd2Vic3RvcmFnZSc7XG5cbmltcG9ydCB7IFNwcmluZ0Jvb3RBbmd1bGFyU2hhcmVkTW9kdWxlLCBVc2VyUm91dGVBY2Nlc3NTZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQnO1xuaW1wb3J0IHsgU3ByaW5nQm9vdEFuZ3VsYXJIb21lTW9kdWxlIH0gZnJvbSAnLi9ob21lL2hvbWUubW9kdWxlJztcbmltcG9ydCB7IFNwcmluZ0Jvb3RBbmd1bGFyQWRtaW5Nb2R1bGUgfSBmcm9tICcuL2FkbWluL2FkbWluLm1vZHVsZSc7XG5pbXBvcnQgeyBTcHJpbmdCb290QW5ndWxhckFjY291bnRNb2R1bGUgfSBmcm9tICcuL2FjY291bnQvYWNjb3VudC5tb2R1bGUnO1xuaW1wb3J0IHsgU3ByaW5nQm9vdEFuZ3VsYXJFbnRpdHlNb2R1bGUgfSBmcm9tICcuL2VudGl0aWVzL2VudGl0eS5tb2R1bGUnO1xuXG5pbXBvcnQgeyBMYXlvdXRSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9sYXlvdXRzJztcbmltcG9ydCB7IGN1c3RvbUh0dHBQcm92aWRlciB9IGZyb20gJy4vYmxvY2tzL2ludGVyY2VwdG9yL2h0dHAucHJvdmlkZXInO1xuaW1wb3J0IHsgUGFnaW5hdGlvbkNvbmZpZyB9IGZyb20gJy4vYmxvY2tzL2NvbmZpZy91aWItcGFnaW5hdGlvbi5jb25maWcnO1xuXG5pbXBvcnQge1xuICAgIEpoaU1haW5Db21wb25lbnQsXG4gICAgTmF2YmFyQ29tcG9uZW50LFxuICAgIEZvb3RlckNvbXBvbmVudCxcbiAgICBQcm9maWxlU2VydmljZSxcbiAgICBQYWdlUmliYm9uQ29tcG9uZW50LFxuICAgIEFjdGl2ZU1lbnVEaXJlY3RpdmUsXG4gICAgRXJyb3JDb21wb25lbnRcbn0gZnJvbSAnLi9sYXlvdXRzJztcblxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQnJvd3Nlck1vZHVsZSxcbiAgICAgICAgTGF5b3V0Um91dGluZ01vZHVsZSxcbiAgICAgICAgTmcyV2Vic3RvcmFnZS5mb3JSb290KHsgcHJlZml4OiAnamhpJywgc2VwYXJhdG9yOiAnLSd9KSxcbiAgICAgICAgU3ByaW5nQm9vdEFuZ3VsYXJTaGFyZWRNb2R1bGUsXG4gICAgICAgIFNwcmluZ0Jvb3RBbmd1bGFySG9tZU1vZHVsZSxcbiAgICAgICAgU3ByaW5nQm9vdEFuZ3VsYXJBZG1pbk1vZHVsZSxcbiAgICAgICAgU3ByaW5nQm9vdEFuZ3VsYXJBY2NvdW50TW9kdWxlLFxuICAgICAgICBTcHJpbmdCb290QW5ndWxhckVudGl0eU1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEpoaU1haW5Db21wb25lbnQsXG4gICAgICAgIE5hdmJhckNvbXBvbmVudCxcbiAgICAgICAgRXJyb3JDb21wb25lbnQsXG4gICAgICAgIFBhZ2VSaWJib25Db21wb25lbnQsXG4gICAgICAgIEFjdGl2ZU1lbnVEaXJlY3RpdmUsXG4gICAgICAgIEZvb3RlckNvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFByb2ZpbGVTZXJ2aWNlLFxuICAgICAgICB7IHByb3ZpZGU6IFdpbmRvdywgdXNlVmFsdWU6IHdpbmRvdyB9LFxuICAgICAgICB7IHByb3ZpZGU6IERvY3VtZW50LCB1c2VWYWx1ZTogZG9jdW1lbnQgfSxcbiAgICAgICAgY3VzdG9tSHR0cFByb3ZpZGVyKCksXG4gICAgICAgIFBhZ2luYXRpb25Db25maWcsXG4gICAgICAgIFVzZXJSb3V0ZUFjY2Vzc1NlcnZpY2VcbiAgICBdLFxuICAgIGJvb3RzdHJhcDogWyBKaGlNYWluQ29tcG9uZW50IF1cbn0pXG5leHBvcnQgY2xhc3MgU3ByaW5nQm9vdEFuZ3VsYXJBcHBNb2R1bGUge31cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYXBwLm1vZHVsZS50cyIsImltcG9ydCB7IFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgTmF2YmFyQ29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzJztcblxuZXhwb3J0IGNvbnN0IG5hdmJhclJvdXRlOiBSb3V0ZSA9IHtcbiAgICBwYXRoOiAnJyxcbiAgICBjb21wb25lbnQ6IE5hdmJhckNvbXBvbmVudCxcbiAgICBvdXRsZXQ6ICduYXZiYXInXG4gIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FwcC5yb3V0ZS50cyIsImltcG9ydCB7IGVuYWJsZVByb2RNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBERUJVR19JTkZPX0VOQUJMRUQgfSBmcm9tICcuLi8uLi9hcHAuY29uc3RhbnRzJztcblxuZXhwb3J0IGZ1bmN0aW9uIFByb2RDb25maWcoKSB7XG4gICAgLy8gZGlzYWJsZSBkZWJ1ZyBkYXRhIG9uIHByb2QgcHJvZmlsZSB0byBpbXByb3ZlIHBlcmZvcm1hbmNlXG4gICAgaWYgKCFERUJVR19JTkZPX0VOQUJMRUQpIHtcbiAgICAgICAgZW5hYmxlUHJvZE1vZGUoKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2Jsb2Nrcy9jb25maWcvcHJvZC5jb25maWcudHMiLCJpbXBvcnQgeyBJVEVNU19QRVJfUEFHRSB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2JQYWdpbmF0aW9uQ29uZmlnfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZzogTmdiUGFnaW5hdGlvbkNvbmZpZykge1xuICAgICAgICBjb25maWcuYm91bmRhcnlMaW5rcyA9IHRydWU7XG4gICAgICAgIGNvbmZpZy5tYXhTaXplID0gNTtcbiAgICAgICAgY29uZmlnLnBhZ2VTaXplID0gSVRFTVNfUEVSX1BBR0U7XG4gICAgICAgIGNvbmZpZy5zaXplID0gJ3NtJztcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2Jsb2Nrcy9jb25maWcvdWliLXBhZ2luYXRpb24uY29uZmlnLnRzIiwiaW1wb3J0IHsgSHR0cEludGVyY2VwdG9yIH0gZnJvbSAnbmctamhpcHN0ZXInO1xuaW1wb3J0IHsgUmVxdWVzdE9wdGlvbnNBcmdzLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvYXV0aC9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJpbmNpcGFsIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2F1dGgvcHJpbmNpcGFsLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aFNlcnZlclByb3ZpZGVyIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2F1dGgvYXV0aC1qd3Quc2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBBdXRoRXhwaXJlZEludGVyY2VwdG9yIGV4dGVuZHMgSHR0cEludGVyY2VwdG9yIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgcmVxdWVzdEludGVyY2VwdChvcHRpb25zPzogUmVxdWVzdE9wdGlvbnNBcmdzKTogUmVxdWVzdE9wdGlvbnNBcmdzIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgfVxuXG4gICAgcmVzcG9uc2VJbnRlcmNlcHQob2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxSZXNwb25zZT4pOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgICAgICByZXR1cm4gPE9ic2VydmFibGU8UmVzcG9uc2U+PiBvYnNlcnZhYmxlLmNhdGNoKChlcnJvciwgc291cmNlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3Iuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICAgICAgICBsZXQgcHJpbmNpcGFsOiBQcmluY2lwYWwgPSBzZWxmLmluamVjdG9yLmdldChQcmluY2lwYWwpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHByaW5jaXBhbC5pc0F1dGhlbnRpY2F0ZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgYXV0aDogQXV0aFNlcnZpY2UgPSBzZWxmLmluamVjdG9yLmdldChBdXRoU2VydmljZSk7XG4gICAgICAgICAgICAgICAgICAgIGF1dGguYXV0aG9yaXplKHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9ibG9ja3MvaW50ZXJjZXB0b3IvYXV0aC1leHBpcmVkLmludGVyY2VwdG9yLnRzIiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBSZXF1ZXN0T3B0aW9uc0FyZ3MsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2VTZXJ2aWNlLCBTZXNzaW9uU3RvcmFnZVNlcnZpY2UgfSBmcm9tICduZzItd2Vic3RvcmFnZSc7XG5pbXBvcnQgeyBIdHRwSW50ZXJjZXB0b3IgfSBmcm9tICduZy1qaGlwc3Rlcic7XG5cbmV4cG9ydCBjbGFzcyBBdXRoSW50ZXJjZXB0b3IgZXh0ZW5kcyBIdHRwSW50ZXJjZXB0b3Ige1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgbG9jYWxTdG9yYWdlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHNlc3Npb25TdG9yYWdlOiBTZXNzaW9uU3RvcmFnZVNlcnZpY2VcbiAgICApIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0SW50ZXJjZXB0KG9wdGlvbnM/OiBSZXF1ZXN0T3B0aW9uc0FyZ3MpOiBSZXF1ZXN0T3B0aW9uc0FyZ3Mge1xuICAgICAgICBsZXQgdG9rZW4gPSB0aGlzLmxvY2FsU3RvcmFnZS5yZXRyaWV2ZSgnYXV0aGVudGljYXRpb25Ub2tlbicpIHx8IHRoaXMuc2Vzc2lvblN0b3JhZ2UucmV0cmlldmUoJ2F1dGhlbnRpY2F0aW9uVG9rZW4nKTtcbiAgICAgICAgaWYgKCEhdG9rZW4pIHtcbiAgICAgICAgICAgIG9wdGlvbnMuaGVhZGVycy5hcHBlbmQoJ0F1dGhvcml6YXRpb24nLCAnQmVhcmVyICcgKyB0b2tlbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgfVxuXG4gICAgcmVzcG9uc2VJbnRlcmNlcHQob2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxSZXNwb25zZT4pOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlOyAvLyBieSBwYXNzXG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2Jsb2Nrcy9pbnRlcmNlcHRvci9hdXRoLmludGVyY2VwdG9yLnRzIiwiaW1wb3J0IHsgSHR0cEludGVyY2VwdG9yLCBFdmVudE1hbmFnZXIgfSBmcm9tICduZy1qaGlwc3Rlcic7XG5pbXBvcnQgeyBSZXF1ZXN0T3B0aW9uc0FyZ3MsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcblxuZXhwb3J0IGNsYXNzIEVycm9ySGFuZGxlckludGVyY2VwdG9yIGV4dGVuZHMgSHR0cEludGVyY2VwdG9yIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZXZlbnRNYW5hZ2VyOiBFdmVudE1hbmFnZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0SW50ZXJjZXB0KG9wdGlvbnM/OiBSZXF1ZXN0T3B0aW9uc0FyZ3MpOiBSZXF1ZXN0T3B0aW9uc0FyZ3Mge1xuICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9XG5cbiAgICByZXNwb25zZUludGVyY2VwdChvYnNlcnZhYmxlOiBPYnNlcnZhYmxlPFJlc3BvbnNlPik6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIDxPYnNlcnZhYmxlPFJlc3BvbnNlPj4gb2JzZXJ2YWJsZS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBpZiAoIShlcnJvci5zdGF0dXMgPT09IDQwMSAmJiAoZXJyb3IudGV4dCgpID09PSAnJyB8fFxuICAgICAgICAgICAgICAgIChlcnJvci5qc29uKCkucGF0aCAmJiBlcnJvci5qc29uKCkucGF0aC5pbmRleE9mKCcvYXBpL2FjY291bnQnKSA9PT0gMCApKSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50TWFuYWdlci5icm9hZGNhc3QoIHtuYW1lOiAnc3ByaW5nQm9vdEFuZ3VsYXJBcHAuaHR0cEVycm9yJywgY29udGVudDogZXJyb3J9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9ibG9ja3MvaW50ZXJjZXB0b3IvZXJyb3JoYW5kbGVyLmludGVyY2VwdG9yLnRzIiwiaW1wb3J0IHsgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIFhIUkJhY2tlbmQsIFJlcXVlc3RPcHRpb25zIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBFdmVudE1hbmFnZXIsIEludGVyY2VwdGFibGVIdHRwIH0gZnJvbSAnbmctamhpcHN0ZXInO1xuXG5pbXBvcnQgeyBBdXRoSW50ZXJjZXB0b3IgfSBmcm9tICcuL2F1dGguaW50ZXJjZXB0b3InO1xuaW1wb3J0IHsgTG9jYWxTdG9yYWdlU2VydmljZSwgU2Vzc2lvblN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnbmcyLXdlYnN0b3JhZ2UnO1xuaW1wb3J0IHsgQXV0aEV4cGlyZWRJbnRlcmNlcHRvciB9IGZyb20gJy4vYXV0aC1leHBpcmVkLmludGVyY2VwdG9yJztcbmltcG9ydCB7IEVycm9ySGFuZGxlckludGVyY2VwdG9yIH0gZnJvbSAnLi9lcnJvcmhhbmRsZXIuaW50ZXJjZXB0b3InO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uSW50ZXJjZXB0b3IgfSBmcm9tICcuL25vdGlmaWNhdGlvbi5pbnRlcmNlcHRvcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcmNlcHRhYmxlRmFjdG9yeShcbiAgICBiYWNrZW5kOiBYSFJCYWNrZW5kLFxuICAgIGRlZmF1bHRPcHRpb25zOiBSZXF1ZXN0T3B0aW9ucyxcbiAgICBsb2NhbFN0b3JhZ2U6IExvY2FsU3RvcmFnZVNlcnZpY2UsXG4gICAgc2Vzc2lvblN0b3JhZ2U6IFNlc3Npb25TdG9yYWdlU2VydmljZSxcbiAgICBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgZXZlbnRNYW5hZ2VyOiBFdmVudE1hbmFnZXJcbikge1xuICAgIHJldHVybiBuZXcgSW50ZXJjZXB0YWJsZUh0dHAoXG4gICAgICAgIGJhY2tlbmQsXG4gICAgICAgIGRlZmF1bHRPcHRpb25zLFxuICAgICAgICBbXG4gICAgICAgICAgICBuZXcgQXV0aEludGVyY2VwdG9yKGxvY2FsU3RvcmFnZSwgc2Vzc2lvblN0b3JhZ2UpLFxuICAgICAgICAgICAgbmV3IEF1dGhFeHBpcmVkSW50ZXJjZXB0b3IoaW5qZWN0b3IpLFxuICAgICAgICAgICAgLy8gT3RoZXIgaW50ZXJjZXB0b3JzIGNhbiBiZSBhZGRlZCBoZXJlXG4gICAgICAgICAgICBuZXcgRXJyb3JIYW5kbGVySW50ZXJjZXB0b3IoZXZlbnRNYW5hZ2VyKSxcbiAgICAgICAgICAgIG5ldyBOb3RpZmljYXRpb25JbnRlcmNlcHRvcigpXG4gICAgICAgIF1cbiAgICApO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGN1c3RvbUh0dHBQcm92aWRlcigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm92aWRlOiBIdHRwLFxuICAgICAgICB1c2VGYWN0b3J5OiBpbnRlcmNlcHRhYmxlRmFjdG9yeSxcbiAgICAgICAgZGVwczogW1xuICAgICAgICAgICAgWEhSQmFja2VuZCxcbiAgICAgICAgICAgIFJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgTG9jYWxTdG9yYWdlU2VydmljZSxcbiAgICAgICAgICAgIFNlc3Npb25TdG9yYWdlU2VydmljZSxcbiAgICAgICAgICAgIEluamVjdG9yLFxuICAgICAgICAgICAgRXZlbnRNYW5hZ2VyXG4gICAgICAgIF1cbiAgICB9O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvYmxvY2tzL2ludGVyY2VwdG9yL2h0dHAucHJvdmlkZXIudHMiLCJpbXBvcnQgeyBIdHRwSW50ZXJjZXB0b3IgfSBmcm9tICduZy1qaGlwc3Rlcic7XG5pbXBvcnQgeyBSZXF1ZXN0T3B0aW9uc0FyZ3MsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcblxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvbkludGVyY2VwdG9yIGV4dGVuZHMgSHR0cEludGVyY2VwdG9yIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHJlcXVlc3RJbnRlcmNlcHQob3B0aW9ucz86IFJlcXVlc3RPcHRpb25zQXJncyk6IFJlcXVlc3RPcHRpb25zQXJncyB7XG4gICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH1cblxuICAgIHJlc3BvbnNlSW50ZXJjZXB0KG9ic2VydmFibGU6IE9ic2VydmFibGU8UmVzcG9uc2U+KTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gPE9ic2VydmFibGU8UmVzcG9uc2U+PiBvYnNlcnZhYmxlLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgbGV0IGFyciA9IEFycmF5LmZyb20oZXJyb3IuaGVhZGVycy5faGVhZGVycyk7XG4gICAgICAgICAgICBsZXQgaGVhZGVycyA9IFtdO1xuICAgICAgICAgICAgbGV0IGk7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFycltpXVswXS5lbmRzV2l0aCgnYXBwLWFsZXJ0JykgfHwgYXJyW2ldWzBdLmVuZHNXaXRoKCdhcHAtcGFyYW1zJykpIHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVycy5wdXNoKGFycltpXVswXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGVhZGVycy5zb3J0KCk7XG4gICAgICAgICAgICBsZXQgYWxlcnRLZXkgPSBoZWFkZXJzLmxlbmd0aCA+PSAxID8gZXJyb3IuaGVhZGVycy5nZXQoaGVhZGVyc1swXSkgOiBudWxsO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBhbGVydEtleSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAvLyBBbGVydFNlcnZpY2Uuc3VjY2VzcyhhbGVydEtleSwgeyBwYXJhbTogcmVzcG9uc2UuaGVhZGVycyhoZWFkZXJzWzFdKX0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2Jsb2Nrcy9pbnRlcmNlcHRvci9ub3RpZmljYXRpb24uaW50ZXJjZXB0b3IudHMiLCJpbXBvcnQgeyBOZ01vZHVsZSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiBqaGlwc3Rlci1uZWVkbGUtYWRkLWVudGl0eS1tb2R1bGUtaW1wb3J0IC0gSkhpcHN0ZXIgd2lsbCBhZGQgZW50aXR5IG1vZHVsZXMgaW1wb3J0cyBoZXJlICovXG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICAvKiBqaGlwc3Rlci1uZWVkbGUtYWRkLWVudGl0eS1tb2R1bGUgLSBKSGlwc3RlciB3aWxsIGFkZCBlbnRpdHkgbW9kdWxlcyBoZXJlICovXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtdLFxuICAgIGVudHJ5Q29tcG9uZW50czogW10sXG4gICAgcHJvdmlkZXJzOiBbXSxcbiAgICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgU3ByaW5nQm9vdEFuZ3VsYXJFbnRpdHlNb2R1bGUge31cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvZW50aXR5Lm1vZHVsZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtM1xcXCI+IDxzcGFuIGNsYXNzPVxcXCJoaXBzdGVyIGltZy1mbHVpZCBpbWctcm91bmRlZFxcXCI+PC9zcGFuPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLTlcXFwiPiA8aDEgY2xhc3M9XFxcImRpc3BsYXktNFxcXCIgamhpVHJhbnNsYXRlPVxcXCJob21lLnRpdGxlXFxcIj5XZWxjb21lLCBKYXZhIEhpcHN0ZXIhPC9oMT4gPHAgY2xhc3M9XFxcImxlYWRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiaG9tZS5zdWJ0aXRsZVxcXCI+VGhpcyBpcyB5b3VyIGhvbWVwYWdlPC9wPiA8ZGl2IFtuZ1N3aXRjaF09XFxcImlzQXV0aGVudGljYXRlZCgpXFxcIj4gPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtc3VjY2Vzc1xcXCIgKm5nU3dpdGNoQ2FzZT1cXFwidHJ1ZVxcXCI+IDxzcGFuICpuZ0lmPVxcXCJhY2NvdW50XFxcIiBqaGlUcmFuc2xhdGU9XFxcImhvbWUubG9nZ2VkLm1lc3NhZ2VcXFwiIHRyYW5zbGF0ZVZhbHVlcz1cXFwie3VzZXJuYW1lOiAne3thY2NvdW50LmxvZ2lufX0nfVxcXCI+IFlvdSBhcmUgbG9nZ2VkIGluIGFzIHVzZXIgXFxcInt7YWNjb3VudC5sb2dpbn19XFxcIi4gPC9zcGFuPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtd2FybmluZ1xcXCIgKm5nU3dpdGNoQ2FzZT1cXFwiZmFsc2VcXFwiPiA8c3BhbiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZXNzYWdlcy5pbmZvLmF1dGhlbnRpY2F0ZWQucHJlZml4XFxcIj5JZiB5b3Ugd2FudCB0byA8L3NwYW4+IDxhIGNsYXNzPVxcXCJhbGVydC1saW5rXFxcIiAoY2xpY2spPVxcXCJsb2dpbigpXFxcIiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZXNzYWdlcy5pbmZvLmF1dGhlbnRpY2F0ZWQubGlua1xcXCI+c2lnbiBpbjwvYT48c3BhbiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZXNzYWdlcy5pbmZvLmF1dGhlbnRpY2F0ZWQuc3VmZml4XFxcIj4sIHlvdSBjYW4gdHJ5IHRoZSBkZWZhdWx0IGFjY291bnRzOjxici8+LSBBZG1pbmlzdHJhdG9yIChsb2dpbj1cXFwiYWRtaW5cXFwiIGFuZCBwYXNzd29yZD1cXFwiYWRtaW5cXFwiKSA8YnIvPi0gVXNlciAobG9naW49XFxcInVzZXJcXFwiIGFuZCBwYXNzd29yZD1cXFwidXNlclxcXCIpLjwvc3Bhbj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LXdhcm5pbmdcXFwiICpuZ1N3aXRjaENhc2U9XFxcImZhbHNlXFxcIj4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMuaW5mby5yZWdpc3Rlci5ub2FjY291bnRcXFwiPllvdSBkb24ndCBoYXZlIGFuIGFjY291bnQgeWV0Pzwvc3Bhbj4gPGEgY2xhc3M9XFxcImFsZXJ0LWxpbmtcXFwiIHJvdXRlckxpbms9XFxcInJlZ2lzdGVyXFxcIiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZXNzYWdlcy5pbmZvLnJlZ2lzdGVyLmxpbmtcXFwiPlJlZ2lzdGVyIGEgbmV3IGFjY291bnQ8L2E+IDwvZGl2PiA8L2Rpdj4gPHAgamhpVHJhbnNsYXRlPVxcXCJob21lLnF1ZXN0aW9uXFxcIj4gSWYgeW91IGhhdmUgYW55IHF1ZXN0aW9uIG9uIEpIaXBzdGVyOiA8L3A+IDx1bD4gPGxpPjxhIGhyZWY9XFxcImh0dHA6Ly9qaGlwc3Rlci5naXRodWIuaW8vXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCIgamhpVHJhbnNsYXRlPVxcXCJob21lLmxpbmsuaG9tZXBhZ2VcXFwiPkpIaXBzdGVyIGhvbWVwYWdlPC9hPjwvbGk+IDxsaT48YSBocmVmPVxcXCJodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vdGFncy9qaGlwc3Rlci9pbmZvXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCIgamhpVHJhbnNsYXRlPVxcXCJob21lLmxpbmsuc3RhY2tvdmVyZmxvd1xcXCI+SkhpcHN0ZXIgb24gU3RhY2sgT3ZlcmZsb3c8L2E+PC9saT4gPGxpPjxhIGhyZWY9XFxcImh0dHBzOi8vZ2l0aHViLmNvbS9qaGlwc3Rlci9nZW5lcmF0b3ItamhpcHN0ZXIvaXNzdWVzP3N0YXRlPW9wZW5cXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIiBqaGlUcmFuc2xhdGU9XFxcImhvbWUubGluay5idWd0cmFja2VyXFxcIj5KSGlwc3RlciBidWcgdHJhY2tlcjwvYT48L2xpPiA8bGk+PGEgaHJlZj1cXFwiaHR0cHM6Ly9naXR0ZXIuaW0vamhpcHN0ZXIvZ2VuZXJhdG9yLWpoaXBzdGVyXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCIgamhpVHJhbnNsYXRlPVxcXCJob21lLmxpbmsuY2hhdFxcXCI+SkhpcHN0ZXIgcHVibGljIGNoYXQgcm9vbTwvYT48L2xpPiA8bGk+PGEgaHJlZj1cXFwiaHR0cHM6Ly90d2l0dGVyLmNvbS9qYXZhX2hpcHN0ZXJcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIiBqaGlUcmFuc2xhdGU9XFxcImhvbWUubGluay5mb2xsb3dcXFwiPmZvbGxvdyBAamF2YV9oaXBzdGVyIG9uIFR3aXR0ZXI8L2E+PC9saT4gPC91bD4gPHA+IDxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiaG9tZS5saWtlXFxcIj5JZiB5b3UgbGlrZSBKSGlwc3RlciwgZG9uJ3QgZm9yZ2V0IHRvIGdpdmUgdXMgYSBzdGFyIG9uPC9zcGFuPiA8YSBocmVmPVxcXCJodHRwczovL2dpdGh1Yi5jb20vamhpcHN0ZXIvZ2VuZXJhdG9yLWpoaXBzdGVyXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCIgamhpVHJhbnNsYXRlPVxcXCJob21lLmdpdGh1YlxcXCI+R2l0aHViPC9hPiEgPC9wPiA8L2Rpdj4gPC9kaXY+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nYk1vZGFsUmVmIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHsgRXZlbnRNYW5hZ2VyLCBKaGlMYW5ndWFnZVNlcnZpY2UgfSBmcm9tICduZy1qaGlwc3Rlcic7XG5cbmltcG9ydCB7IEFjY291bnQsIExvZ2luTW9kYWxTZXJ2aWNlLCBQcmluY2lwYWwgfSBmcm9tICcuLi9zaGFyZWQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS1ob21lJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vaG9tZS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbXG4gICAgICAgICdob21lLnNjc3MnXG4gICAgXVxuXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGFjY291bnQ6IEFjY291bnQ7XG4gICAgbW9kYWxSZWY6IE5nYk1vZGFsUmVmO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgamhpTGFuZ3VhZ2VTZXJ2aWNlOiBKaGlMYW5ndWFnZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcHJpbmNpcGFsOiBQcmluY2lwYWwsXG4gICAgICAgIHByaXZhdGUgbG9naW5Nb2RhbFNlcnZpY2U6IExvZ2luTW9kYWxTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGV2ZW50TWFuYWdlcjogRXZlbnRNYW5hZ2VyXG4gICAgKSB7XG4gICAgICAgIHRoaXMuamhpTGFuZ3VhZ2VTZXJ2aWNlLnNldExvY2F0aW9ucyhbJ2hvbWUnXSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucHJpbmNpcGFsLmlkZW50aXR5KCkudGhlbigoYWNjb3VudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hY2NvdW50ID0gYWNjb3VudDtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJBdXRoZW50aWNhdGlvblN1Y2Nlc3MoKTtcbiAgICB9XG5cbiAgICByZWdpc3RlckF1dGhlbnRpY2F0aW9uU3VjY2VzcygpIHtcbiAgICAgICAgdGhpcy5ldmVudE1hbmFnZXIuc3Vic2NyaWJlKCdhdXRoZW50aWNhdGlvblN1Y2Nlc3MnLCAobWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcmluY2lwYWwuaWRlbnRpdHkoKS50aGVuKChhY2NvdW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY2NvdW50ID0gYWNjb3VudDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpc0F1dGhlbnRpY2F0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByaW5jaXBhbC5pc0F1dGhlbnRpY2F0ZWQoKTtcbiAgICB9XG5cbiAgICBsb2dpbigpIHtcbiAgICAgICAgdGhpcy5tb2RhbFJlZiA9IHRoaXMubG9naW5Nb2RhbFNlcnZpY2Uub3BlbigpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC50cyIsImltcG9ydCB7IE5nTW9kdWxlLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBTcHJpbmdCb290QW5ndWxhclNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZCc7XG5cbmltcG9ydCB7IEhPTUVfUk9VVEUsIEhvbWVDb21wb25lbnQgfSBmcm9tICcuLyc7XG5cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIFNwcmluZ0Jvb3RBbmd1bGFyU2hhcmVkTW9kdWxlLFxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChbIEhPTUVfUk9VVEUgXSwgeyB1c2VIYXNoOiB0cnVlIH0pXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgSG9tZUNvbXBvbmVudCxcbiAgICBdLFxuICAgIGVudHJ5Q29tcG9uZW50czogW1xuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgU3ByaW5nQm9vdEFuZ3VsYXJIb21lTW9kdWxlIHt9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2hvbWUvaG9tZS5tb2R1bGUudHMiLCJpbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFVzZXJSb3V0ZUFjY2Vzc1NlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQnO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vJztcblxuZXhwb3J0IGNvbnN0IEhPTUVfUk9VVEU6IFJvdXRlID0ge1xuICBwYXRoOiAnJyxcbiAgY29tcG9uZW50OiBIb21lQ29tcG9uZW50LFxuICBkYXRhOiB7XG4gICAgYXV0aG9yaXRpZXM6IFtdLFxuICAgIHBhZ2VUaXRsZTogJ2hvbWUudGl0bGUnXG4gIH0sXG4gIGNhbkFjdGl2YXRlOiBbVXNlclJvdXRlQWNjZXNzU2VydmljZV1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2hvbWUvaG9tZS5yb3V0ZS50cyIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9ob21lLnNjc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9ob21lL2hvbWUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2hvbWUvaG9tZS5zY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCAqIGZyb20gJy4vaG9tZS5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9ob21lLnJvdXRlJztcbmV4cG9ydCAqIGZyb20gJy4vaG9tZS5tb2R1bGUnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9ob21lL2luZGV4LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXY+IDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC00XFxcIj4gPHNwYW4gY2xhc3M9XFxcImhpcHN0ZXIgaW1nLWZsdWlkIGltZy1yb3VuZGVkXFxcIj48L3NwYW4+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtOFxcXCI+IDxoMSBqaGlUcmFuc2xhdGU9XFxcImVycm9yLnRpdGxlXFxcIj5FcnJvciBQYWdlITwvaDE+IDxkaXYgW2hpZGRlbl09XFxcIiFlcnJvck1lc3NhZ2VcXFwiPiA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiPnt7ZXJyb3JNZXNzYWdlfX0gPC9kaXY+IDwvZGl2PiA8ZGl2IFtoaWRkZW5dPVxcXCIhZXJyb3I0MDNcXFwiIGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZXJyb3IuNDAzXFxcIj5Zb3UgYXJlIG5vdCBhdXRob3JpemVkIHRvIGFjY2VzcyB0aGUgcGFnZS4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9lcnJvci9lcnJvci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSmhpTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnbmctamhpcHN0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS1lcnJvcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2Vycm9yLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBFcnJvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG4gICAgZXJyb3I0MDM6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBqaGlMYW5ndWFnZVNlcnZpY2U6IEpoaUxhbmd1YWdlU2VydmljZVxuICAgICkge1xuICAgICAgICB0aGlzLmpoaUxhbmd1YWdlU2VydmljZS5zZXRMb2NhdGlvbnMoWydlcnJvciddKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvZXJyb3IvZXJyb3IuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgVXNlclJvdXRlQWNjZXNzU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5pbXBvcnQgeyBFcnJvckNvbXBvbmVudCB9IGZyb20gJy4vZXJyb3IuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IGVycm9yUm91dGU6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICdlcnJvcicsXG4gICAgY29tcG9uZW50OiBFcnJvckNvbXBvbmVudCxcbiAgICBkYXRhOiB7XG4gICAgICBhdXRob3JpdGllczogW10sXG4gICAgICBwYWdlVGl0bGU6ICdlcnJvci50aXRsZSdcbiAgICB9LFxuICAgIGNhbkFjdGl2YXRlOiBbVXNlclJvdXRlQWNjZXNzU2VydmljZV1cbiAgfSxcbiAge1xuICAgIHBhdGg6ICdhY2Nlc3NkZW5pZWQnLFxuICAgIGNvbXBvbmVudDogRXJyb3JDb21wb25lbnQsXG4gICAgZGF0YToge1xuICAgICAgYXV0aG9yaXRpZXM6IFtdLFxuICAgICAgcGFnZVRpdGxlOiAnZXJyb3IudGl0bGUnXG4gICAgfSxcbiAgICBjYW5BY3RpdmF0ZTogW1VzZXJSb3V0ZUFjY2Vzc1NlcnZpY2VdXG4gIH1cbl07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvZXJyb3IvZXJyb3Iucm91dGUudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiZm9vdGVyXFxcIj4gPHAgamhpVHJhbnNsYXRlPVxcXCJmb290ZXJcXFwiPlRoaXMgaXMgeW91ciBmb290ZXI8L3A+IDwvZGl2PiBcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS1mb290ZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9mb290ZXIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEZvb3RlckNvbXBvbmVudCB7fVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnRzIiwiZXhwb3J0ICogZnJvbSAnLi9lcnJvci9lcnJvci5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9lcnJvci9lcnJvci5yb3V0ZSc7XG5leHBvcnQgKiBmcm9tICcuL21haW4vbWFpbi5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9mb290ZXIvZm9vdGVyLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL25hdmJhci9uYXZiYXIuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vbmF2YmFyL2FjdGl2ZS1tZW51LmRpcmVjdGl2ZSc7XG5leHBvcnQgKiBmcm9tICcuL3Byb2ZpbGVzL3BhZ2UtcmliYm9uLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL3Byb2ZpbGVzL3Byb2ZpbGUuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3Byb2ZpbGVzL3Byb2ZpbGUtaW5mby5tb2RlbCc7XG5leHBvcnQgKiBmcm9tICcuL2xheW91dC1yb3V0aW5nLm1vZHVsZSc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvaW5kZXgudHMiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgbmF2YmFyUm91dGUgfSBmcm9tICcuLi9hcHAucm91dGUnO1xuaW1wb3J0IHsgZXJyb3JSb3V0ZSB9IGZyb20gJy4vJztcblxubGV0IExBWU9VVF9ST1VURVMgPSBbXG4gICAgbmF2YmFyUm91dGUsXG4gICAgLi4uZXJyb3JSb3V0ZVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFJvdXRlck1vZHVsZS5mb3JSb290KExBWU9VVF9ST1VURVMsIHsgdXNlSGFzaDogdHJ1ZSB9KVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgUm91dGVyTW9kdWxlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTGF5b3V0Um91dGluZ01vZHVsZSB7fVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL2xheW91dC1yb3V0aW5nLm1vZHVsZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8amhpLXBhZ2UtcmliYm9uPjwvamhpLXBhZ2UtcmliYm9uPiA8ZGl2PiA8cm91dGVyLW91dGxldCBuYW1lPVxcXCJuYXZiYXJcXFwiPjwvcm91dGVyLW91dGxldD4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZFxcXCI+IDxkaXYgY2xhc3M9XFxcImNhcmQgamgtY2FyZFxcXCI+IDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD4gPHJvdXRlci1vdXRsZXQgbmFtZT1cXFwicG9wdXBcXFwiPjwvcm91dGVyLW91dGxldD4gPC9kaXY+IDxqaGktZm9vdGVyPjwvamhpLWZvb3Rlcj4gPC9kaXY+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL21haW4vbWFpbi5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvbWFpbi9tYWluLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIE5hdmlnYXRpb25FbmQsIFJvdXRlc1JlY29nbml6ZWQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBKaGlMYW5ndWFnZUhlbHBlciwgU3RhdGVTdG9yYWdlU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLW1haW4nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9tYWluLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBKaGlNYWluQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGpoaUxhbmd1YWdlSGVscGVyOiBKaGlMYW5ndWFnZUhlbHBlcixcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSAkc3RvcmFnZVNlcnZpY2U6IFN0YXRlU3RvcmFnZVNlcnZpY2UsXG4gICAgKSB7fVxuXG4gICAgcHJpdmF0ZSBnZXRQYWdlVGl0bGUocm91dGVTbmFwc2hvdDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCkge1xuICAgICAgICBsZXQgdGl0bGU6IHN0cmluZyA9IChyb3V0ZVNuYXBzaG90LmRhdGEgJiYgcm91dGVTbmFwc2hvdC5kYXRhWydwYWdlVGl0bGUnXSkgPyByb3V0ZVNuYXBzaG90LmRhdGFbJ3BhZ2VUaXRsZSddIDogJ3NwcmluZ0Jvb3RBbmd1bGFyQXBwJztcbiAgICAgICAgaWYgKHJvdXRlU25hcHNob3QuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgdGl0bGUgPSB0aGlzLmdldFBhZ2VUaXRsZShyb3V0ZVNuYXBzaG90LmZpcnN0Q2hpbGQpIHx8IHRpdGxlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aXRsZTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZSgoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmpoaUxhbmd1YWdlSGVscGVyLnVwZGF0ZVRpdGxlKHRoaXMuZ2V0UGFnZVRpdGxlKHRoaXMucm91dGVyLnJvdXRlclN0YXRlLnNuYXBzaG90LnJvb3QpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIFJvdXRlc1JlY29nbml6ZWQpIHtcbiAgICAgICAgICAgICAgICBsZXQgcGFyYW1zID0ge307XG4gICAgICAgICAgICAgICAgbGV0IGRlc3RpbmF0aW9uRGF0YSA9IHt9O1xuICAgICAgICAgICAgICAgIGxldCBkZXN0aW5hdGlvbk5hbWUgPSAnJztcbiAgICAgICAgICAgICAgICBsZXQgZGVzdGluYXRpb25FdmVudCA9IGV2ZW50LnN0YXRlLnJvb3QuZmlyc3RDaGlsZC5jaGlsZHJlblswXTtcbiAgICAgICAgICAgICAgICBpZiAoZGVzdGluYXRpb25FdmVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcyA9IGRlc3RpbmF0aW9uRXZlbnQucGFyYW1zO1xuICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbkRhdGEgPSBkZXN0aW5hdGlvbkV2ZW50LmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uTmFtZSA9IGRlc3RpbmF0aW9uRXZlbnQudXJsWzBdLnBhdGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBmcm9tID0ge25hbWU6IHRoaXMucm91dGVyLnVybC5zbGljZSgxKX07XG4gICAgICAgICAgICAgICAgbGV0IGRlc3RpbmF0aW9uID0ge25hbWU6IGRlc3RpbmF0aW9uTmFtZSwgZGF0YTogZGVzdGluYXRpb25EYXRhfTtcbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yYWdlU2VydmljZS5zdG9yZURlc3RpbmF0aW9uU3RhdGUoZGVzdGluYXRpb24sIHBhcmFtcywgZnJvbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9tYWluL21haW4uY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBPbkluaXQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyLCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlLCBMYW5nQ2hhbmdlRXZlbnQgfSBmcm9tICduZzItdHJhbnNsYXRlJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbamhpQWN0aXZlTWVudV0nXG59KVxuZXhwb3J0IGNsYXNzIEFjdGl2ZU1lbnVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBJbnB1dCgpIGpoaUFjdGl2ZU1lbnU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyLCBwcml2YXRlIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2UpIHt9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgIHRoaXMudHJhbnNsYXRlU2VydmljZS5vbkxhbmdDaGFuZ2Uuc3Vic2NyaWJlKChldmVudDogTGFuZ0NoYW5nZUV2ZW50KSA9PiB7XG4gICAgICAgICB0aGlzLnVwZGF0ZUFjdGl2ZUZsYWcoZXZlbnQubGFuZyk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMudXBkYXRlQWN0aXZlRmxhZyh0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuY3VycmVudExhbmcpO1xuICAgIH1cblxuICAgIHVwZGF0ZUFjdGl2ZUZsYWcoc2VsZWN0ZWRMYW5ndWFnZSkge1xuICAgICAgaWYgKHRoaXMuamhpQWN0aXZlTWVudSA9PT0gc2VsZWN0ZWRMYW5ndWFnZSkge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2FjdGl2ZScsIHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdhY3RpdmUnLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL25hdmJhci9hY3RpdmUtbWVudS5kaXJlY3RpdmUudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPG5hdiBjbGFzcz1cXFwibmF2YmFyIG5hdmJhci1pbnZlcnNlIG5hdmJhci10b2dnbGVhYmxlLW1kIGpoLW5hdmJhclxcXCI+IDxkaXYgY2xhc3M9XFxcImpoLWxvZ28tY29udGFpbmVyIGZsb2F0LWxlZnRcXFwiPiA8YSBjbGFzcz1cXFwiamgtbmF2YmFyLXRvZ2dsZXIgaGlkZGVuLWxnLXVwIGZsb2F0LXJpZ2h0XFxcIiBocmVmPVxcXCJqYXZhc2NyaXB0OnZvaWQoMCk7XFxcIiBkYXRhLXRvZ2dsZT1cXFwiY29sbGFwc2VcXFwiIGRhdGEtdGFyZ2V0PVxcXCIjbmF2YmFyUmVzcG9uc2l2ZVxcXCIgYXJpYS1jb250cm9scz1cXFwibmF2YmFyUmVzcG9uc2l2ZVxcXCIgYXJpYS1leHBhbmRlZD1cXFwiZmFsc2VcXFwiIGFyaWEtbGFiZWw9XFxcIlRvZ2dsZSBuYXZpZ2F0aW9uXFxcIiAoY2xpY2spPVxcXCJ0b2dnbGVOYXZiYXIoKVxcXCI+IDxpIGNsYXNzPVxcXCJmYSBmYS1iYXJzXFxcIj48L2k+IDwvYT4gPGEgY2xhc3M9XFxcIm5hdmJhci1icmFuZCBsb2dvIGZsb2F0LWxlZnRcXFwiIHJvdXRlckxpbms9XFxcIi9cXFwiIChjbGljayk9XFxcImNvbGxhcHNlTmF2YmFyKClcXFwiPiA8c3BhbiBjbGFzcz1cXFwibG9nby1pbWdcXFwiPjwvc3Bhbj4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwudGl0bGVcXFwiIGNsYXNzPVxcXCJuYXZiYXItdGl0bGVcXFwiPlNwcmluZ0Jvb3RBbmd1bGFyPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwibmF2YmFyLXZlcnNpb25cXFwiPnt7dmVyc2lvbn19PC9zcGFuPiA8L2E+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJuYXZiYXItY29sbGFwc2UgY29sbGFwc2VcXFwiIGlkPVxcXCJuYXZiYXJSZXNwb25zaXZlXFxcIiBbbmdiQ29sbGFwc2VdPVxcXCJpc05hdmJhckNvbGxhcHNlZFxcXCIgW25nU3dpdGNoXT1cXFwiaXNBdXRoZW50aWNhdGVkKClcXFwiPiA8dWwgY2xhc3M9XFxcIm5hdmJhci1uYXYgbWwtYXV0b1xcXCI+IDxsaSBjbGFzcz1cXFwibmF2LWl0ZW1cXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCIgW3JvdXRlckxpbmtBY3RpdmVPcHRpb25zXT1cXFwie2V4YWN0OiB0cnVlfVxcXCI+IDxhIGNsYXNzPVxcXCJuYXYtbGlua1xcXCIgcm91dGVyTGluaz1cXFwiL1xcXCIgKGNsaWNrKT1cXFwiY29sbGFwc2VOYXZiYXIoKVxcXCI+IDxpIGNsYXNzPVxcXCJmYSBmYS1ob21lXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPiA8c3BhbiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZW51LmhvbWVcXFwiPkhvbWU8L3NwYW4+IDwvYT4gPC9saT4gPGxpICpuZ1N3aXRjaENhc2U9XFxcInRydWVcXFwiIG5nYkRyb3Bkb3duIGNsYXNzPVxcXCJuYXYtaXRlbSBkcm9wZG93biBwb2ludGVyXFxcIj4gPGEgY2xhc3M9XFxcIm5hdi1saW5rIGRyb3Bkb3duLXRvZ2dsZVxcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiBuZ2JEcm9wZG93blRvZ2dsZSBocmVmPVxcXCJqYXZhc2NyaXB0OnZvaWQoMCk7XFxcIiBpZD1cXFwiZW50aXR5LW1lbnVcXFwiPiA8c3Bhbj4gPGkgY2xhc3M9XFxcImZhIGZhLXRoLWxpc3RcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+IDxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lbnUuZW50aXRpZXMubWFpblxcXCI+IEVudGl0aWVzIDwvc3Bhbj4gPGIgY2xhc3M9XFxcImNhcmV0XFxcIj48L2I+IDwvc3Bhbj4gPC9hPiA8dWwgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiIG5nYkRyb3Bkb3duTWVudT4gPC91bD4gPC9saT4gPGxpICpqaGlIYXNBbnlBdXRob3JpdHk9XFxcIidST0xFX0FETUlOJ1xcXCIgbmdiRHJvcGRvd24gY2xhc3M9XFxcIm5hdi1pdGVtIGRyb3Bkb3duIHBvaW50ZXJcXFwiPiA8YSBjbGFzcz1cXFwibmF2LWxpbmsgZHJvcGRvd24tdG9nZ2xlXFxcIiBuZ2JEcm9wZG93blRvZ2dsZSBocmVmPVxcXCJqYXZhc2NyaXB0OnZvaWQoMCk7XFxcIiBpZD1cXFwiYWRtaW4tbWVudVxcXCI+IDxzcGFuPiA8aSBjbGFzcz1cXFwiZmEgZmEtdXNlci1wbHVzXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPiA8c3BhbiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZW51LmFkbWluLm1haW5cXFwiPkFkbWluaXN0cmF0aW9uPC9zcGFuPiA8YiBjbGFzcz1cXFwiY2FyZXRcXFwiPjwvYj4gPC9zcGFuPiA8L2E+IDx1bCBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCIgbmdiRHJvcGRvd25NZW51PiA8bGk+IDxhIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIiByb3V0ZXJMaW5rPVxcXCJ1c2VyLW1hbmFnZW1lbnRcXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCIgKGNsaWNrKT1cXFwiY29sbGFwc2VOYXZiYXIoKVxcXCI+IDxpIGNsYXNzPVxcXCJmYSBmYS1mdyBmYS11c2VyXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPiA8c3BhbiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZW51LmFkbWluLnVzZXJNYW5hZ2VtZW50XFxcIj5Vc2VyIG1hbmFnZW1lbnQ8L3NwYW4+IDwvYT4gPC9saT4gPGxpPiA8YSBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgcm91dGVyTGluaz1cXFwiamhpLW1ldHJpY3NcXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCIgKGNsaWNrKT1cXFwiY29sbGFwc2VOYXZiYXIoKVxcXCI+IDxpIGNsYXNzPVxcXCJmYSBmYS1mdyBmYS10YWNob21ldGVyXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPiA8c3BhbiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZW51LmFkbWluLm1ldHJpY3NcXFwiPk1ldHJpY3M8L3NwYW4+IDwvYT4gPC9saT4gPGxpPiA8YSBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgcm91dGVyTGluaz1cXFwiamhpLWhlYWx0aFxcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiAoY2xpY2spPVxcXCJjb2xsYXBzZU5hdmJhcigpXFxcIj4gPGkgY2xhc3M9XFxcImZhIGZhLWZ3IGZhLWhlYXJ0XFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPiA8c3BhbiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZW51LmFkbWluLmhlYWx0aFxcXCI+SGVhbHRoPC9zcGFuPiA8L2E+IDwvbGk+IDxsaT4gPGEgY2xhc3M9XFxcImRyb3Bkb3duLWl0ZW1cXFwiIHJvdXRlckxpbms9XFxcImpoaS1jb25maWd1cmF0aW9uXFxcIiByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiIChjbGljayk9XFxcImNvbGxhcHNlTmF2YmFyKClcXFwiPiA8aSBjbGFzcz1cXFwiZmEgZmEtZncgZmEtbGlzdFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVudS5hZG1pbi5jb25maWd1cmF0aW9uXFxcIj5Db25maWd1cmF0aW9uPC9zcGFuPiA8L2E+IDwvbGk+IDxsaT4gPGEgY2xhc3M9XFxcImRyb3Bkb3duLWl0ZW1cXFwiIHJvdXRlckxpbms9XFxcImF1ZGl0c1xcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiAoY2xpY2spPVxcXCJjb2xsYXBzZU5hdmJhcigpXFxcIj4gPGkgY2xhc3M9XFxcImZhIGZhLWZ3IGZhLWJlbGxcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+IDxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lbnUuYWRtaW4uYXVkaXRzXFxcIj5BdWRpdHM8L3NwYW4+IDwvYT4gPC9saT4gPGxpPiA8YSBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgcm91dGVyTGluaz1cXFwibG9nc1xcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIiAoY2xpY2spPVxcXCJjb2xsYXBzZU5hdmJhcigpXFxcIj4gPGkgY2xhc3M9XFxcImZhIGZhLWZ3IGZhLXRhc2tzXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPiA8c3BhbiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZW51LmFkbWluLmxvZ3NcXFwiPkxvZ3M8L3NwYW4+IDwvYT4gPC9saT4gPGxpICpuZ0lmPVxcXCJzd2FnZ2VyRW5hYmxlZFxcXCI+IDxhIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIiByb3V0ZXJMaW5rPVxcXCJkb2NzXFxcIiByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiIChjbGljayk9XFxcImNvbGxhcHNlTmF2YmFyKClcXFwiPiA8aSBjbGFzcz1cXFwiZmEgZmEtZncgZmEtYm9va1xcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVudS5hZG1pbi5hcGlkb2NzXFxcIj5BUEk8L3NwYW4+IDwvYT4gPC9saT4gPC91bD4gPC9saT4gPGxpIG5nYkRyb3Bkb3duIGNsYXNzPVxcXCJuYXYtaXRlbSBkcm9wZG93biBwb2ludGVyXFxcIiAqbmdJZj1cXFwibGFuZ3VhZ2VzXFxcIj4gPGEgY2xhc3M9XFxcIm5hdi1saW5rIGRyb3Bkb3duLXRvZ2dsZVxcXCIgbmdiRHJvcGRvd25Ub2dnbGUgaHJlZj1cXFwiamF2YXNjcmlwdDp2b2lkKDApO1xcXCIgaWQ9XFxcImxhbmd1YWdlc25hdkJhckRyb3Bkb3duXFxcIiAqbmdJZj1cXFwibGFuZ3VhZ2VzLmxlbmd0aCA+IDFcXFwiPiA8c3Bhbj4gPGkgY2xhc3M9XFxcImZhIGZhLWZsYWdcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+IDxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lbnUubGFuZ3VhZ2VcXFwiPkxhbmd1YWdlPC9zcGFuPiA8YiBjbGFzcz1cXFwiY2FyZXRcXFwiPjwvYj4gPC9zcGFuPiA8L2E+IDx1bCBjbGFzcz1cXFwiZHJvcGRvd24tbWVudVxcXCIgbmdiRHJvcGRvd25NZW51ICpuZ0lmPVxcXCJsYW5ndWFnZXMubGVuZ3RoID4gMVxcXCI+IDxsaSAqbmdGb3I9XFxcImxldCBsYW5ndWFnZSBvZiBsYW5ndWFnZXNcXFwiPiA8YSBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgW2poaUFjdGl2ZU1lbnVdPVxcXCJsYW5ndWFnZVxcXCIgaHJlZj1cXFwiamF2YXNjcmlwdDp2b2lkKDApO1xcXCIgKGNsaWNrKT1cXFwiY2hhbmdlTGFuZ3VhZ2UobGFuZ3VhZ2UpO2NvbGxhcHNlTmF2YmFyKCk7XFxcIj57e2xhbmd1YWdlIHwgZmluZExhbmd1YWdlRnJvbUtleX19PC9hPiA8L2xpPiA8L3VsPiA8L2xpPiA8bGkgbmdiRHJvcGRvd24gY2xhc3M9XFxcIm5hdi1pdGVtIGRyb3Bkb3duIHBvaW50ZXJcXFwiPiA8YSBjbGFzcz1cXFwibmF2LWxpbmsgZHJvcGRvd24tdG9nZ2xlXFxcIiBuZ2JEcm9wZG93blRvZ2dsZSBocmVmPVxcXCJqYXZhc2NyaXB0OnZvaWQoMCk7XFxcIiBpZD1cXFwiYWNjb3VudC1tZW51XFxcIj4gPHNwYW4gKm5nSWY9XFxcIiFnZXRJbWFnZVVybCgpXFxcIj4gPGkgY2xhc3M9XFxcImZhIGZhLXVzZXJcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+IDxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lbnUuYWNjb3VudC5tYWluXFxcIj4gQWNjb3VudCA8L3NwYW4+IDxiIGNsYXNzPVxcXCJjYXJldFxcXCI+PC9iPiA8L3NwYW4+IDxzcGFuICpuZ0lmPVxcXCJnZXRJbWFnZVVybCgpXFxcIj4gPGltZyBbc3JjXT1cXFwiZ2V0SW1hZ2VVcmwoKVxcXCIgY2xhc3M9XFxcInByb2ZpbGUtaW1hZ2UgaW1nLWNpcmNsZVxcXCIgYWx0PVxcXCJBdmF0YXJcXFwiPiA8L3NwYW4+IDwvYT4gPHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51IGRyb3Bkb3duLW1lbnUtcmlnaHRcXFwiIG5nYkRyb3Bkb3duTWVudT4gPGxpICpuZ1N3aXRjaENhc2U9XFxcInRydWVcXFwiPiA8YSBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgcm91dGVyTGluaz1cXFwic2V0dGluZ3NcXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCIgKGNsaWNrKT1cXFwiY29sbGFwc2VOYXZiYXIoKVxcXCI+IDxpIGNsYXNzPVxcXCJmYSBmYS1mdyBmYS13cmVuY2hcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+IDxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lbnUuYWNjb3VudC5zZXR0aW5nc1xcXCI+U2V0dGluZ3M8L3NwYW4+IDwvYT4gPC9saT4gPGxpICpuZ1N3aXRjaENhc2U9XFxcInRydWVcXFwiPiA8YSBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgcm91dGVyTGluaz1cXFwicGFzc3dvcmRcXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCIgKGNsaWNrKT1cXFwiY29sbGFwc2VOYXZiYXIoKVxcXCI+IDxpIGNsYXNzPVxcXCJmYSBmYS1mdyBmYS1jbG9jay1vXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPiA8c3BhbiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZW51LmFjY291bnQucGFzc3dvcmRcXFwiPlBhc3N3b3JkPC9zcGFuPiA8L2E+IDwvbGk+IDxsaSAqbmdTd2l0Y2hDYXNlPVxcXCJ0cnVlXFxcIj4gPGEgY2xhc3M9XFxcImRyb3Bkb3duLWl0ZW1cXFwiIChjbGljayk9XFxcImxvZ291dCgpXFxcIiBpZD1cXFwibG9nb3V0XFxcIj4gPGkgY2xhc3M9XFxcImZhIGZhLWZ3IGZhLXNpZ24tb3V0XFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPiA8c3BhbiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZW51LmFjY291bnQubG9nb3V0XFxcIj5TaWduIG91dDwvc3Bhbj4gPC9hPiA8L2xpPiA8bGkgKm5nU3dpdGNoQ2FzZT1cXFwiZmFsc2VcXFwiPiA8YSBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgKGNsaWNrKT1cXFwibG9naW4oKVxcXCIgaWQ9XFxcImxvZ2luXFxcIj4gPGkgY2xhc3M9XFxcImZhIGZhLWZ3IGZhLXNpZ24taW5cXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+IDxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lbnUuYWNjb3VudC5sb2dpblxcXCI+U2lnbiBpbjwvc3Bhbj4gPC9hPiA8L2xpPiA8bGkgKm5nU3dpdGNoQ2FzZT1cXFwiZmFsc2VcXFwiPiA8YSBjbGFzcz1cXFwiZHJvcGRvd24taXRlbVxcXCIgcm91dGVyTGluaz1cXFwicmVnaXN0ZXJcXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCIgKGNsaWNrKT1cXFwiY29sbGFwc2VOYXZiYXIoKVxcXCI+IDxpIGNsYXNzPVxcXCJmYSBmYS1mdyBmYS1yZWdpc3RlcmVkXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPiA8c3BhbiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5tZW51LmFjY291bnQucmVnaXN0ZXJcXFwiPlJlZ2lzdGVyPC9zcGFuPiA8L2E+IDwvbGk+IDwvdWw+IDwvbGk+IDwvdWw+IDwvZGl2PiA8L25hdj4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE5nYk1vZGFsUmVmIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHsgSmhpTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnbmctamhpcHN0ZXInO1xuXG5pbXBvcnQgeyBQcm9maWxlU2VydmljZSB9IGZyb20gJy4uL3Byb2ZpbGVzL3Byb2ZpbGUuc2VydmljZSc7IC8vIEZJWE1FIGJhcnJlbCBkb2Vzbid0IHdvcmsgaGVyZVxuaW1wb3J0IHsgSmhpTGFuZ3VhZ2VIZWxwZXIsIFByaW5jaXBhbCwgTG9naW5Nb2RhbFNlcnZpY2UsIExvZ2luU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XG5cbmltcG9ydCB7IFZFUlNJT04sIERFQlVHX0lORk9fRU5BQkxFRCB9IGZyb20gJy4uLy4uL2FwcC5jb25zdGFudHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS1uYXZiYXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9uYXZiYXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW1xuICAgICAgICAnbmF2YmFyLnNjc3MnXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBOYXZiYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgaW5Qcm9kdWN0aW9uOiBib29sZWFuO1xuICAgIGlzTmF2YmFyQ29sbGFwc2VkOiBib29sZWFuO1xuICAgIGxhbmd1YWdlczogYW55W107XG4gICAgc3dhZ2dlckVuYWJsZWQ6IGJvb2xlYW47XG4gICAgbW9kYWxSZWY6IE5nYk1vZGFsUmVmO1xuICAgIHZlcnNpb246IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGxvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGxhbmd1YWdlSGVscGVyOiBKaGlMYW5ndWFnZUhlbHBlcixcbiAgICAgICAgcHJpdmF0ZSBsYW5ndWFnZVNlcnZpY2U6IEpoaUxhbmd1YWdlU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBwcmluY2lwYWw6IFByaW5jaXBhbCxcbiAgICAgICAgcHJpdmF0ZSBsb2dpbk1vZGFsU2VydmljZTogTG9naW5Nb2RhbFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcHJvZmlsZVNlcnZpY2U6IFByb2ZpbGVTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyXG4gICAgKSB7XG4gICAgICAgIHRoaXMudmVyc2lvbiA9IERFQlVHX0lORk9fRU5BQkxFRCA/ICd2JyArIFZFUlNJT04gOiAnJztcbiAgICAgICAgdGhpcy5pc05hdmJhckNvbGxhcHNlZCA9IHRydWU7XG4gICAgICAgIHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLmFkZExvY2F0aW9uKCdob21lJyk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMubGFuZ3VhZ2VIZWxwZXIuZ2V0QWxsKCkudGhlbigobGFuZ3VhZ2VzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxhbmd1YWdlcyA9IGxhbmd1YWdlcztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5wcm9maWxlU2VydmljZS5nZXRQcm9maWxlSW5mbygpLnN1YnNjcmliZShwcm9maWxlSW5mbyA9PiB7XG4gICAgICAgICAgICB0aGlzLmluUHJvZHVjdGlvbiA9IHByb2ZpbGVJbmZvLmluUHJvZHVjdGlvbjtcbiAgICAgICAgICAgIHRoaXMuc3dhZ2dlckVuYWJsZWQgPSBwcm9maWxlSW5mby5zd2FnZ2VyRW5hYmxlZDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2hhbmdlTGFuZ3VhZ2UobGFuZ3VhZ2VLZXk6IHN0cmluZykge1xuICAgICAgdGhpcy5sYW5ndWFnZVNlcnZpY2UuY2hhbmdlTGFuZ3VhZ2UobGFuZ3VhZ2VLZXkpO1xuICAgIH1cblxuICAgIGNvbGxhcHNlTmF2YmFyKCkge1xuICAgICAgICB0aGlzLmlzTmF2YmFyQ29sbGFwc2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpc0F1dGhlbnRpY2F0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByaW5jaXBhbC5pc0F1dGhlbnRpY2F0ZWQoKTtcbiAgICB9XG5cbiAgICBsb2dpbigpIHtcbiAgICAgICAgdGhpcy5tb2RhbFJlZiA9IHRoaXMubG9naW5Nb2RhbFNlcnZpY2Uub3BlbigpO1xuICAgIH1cblxuICAgIGxvZ291dCgpIHtcbiAgICAgICAgdGhpcy5jb2xsYXBzZU5hdmJhcigpO1xuICAgICAgICB0aGlzLmxvZ2luU2VydmljZS5sb2dvdXQoKTtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycnXSk7XG4gICAgfVxuXG4gICAgdG9nZ2xlTmF2YmFyKCkge1xuICAgICAgICB0aGlzLmlzTmF2YmFyQ29sbGFwc2VkID0gIXRoaXMuaXNOYXZiYXJDb2xsYXBzZWQ7XG4gICAgfVxuXG4gICAgZ2V0SW1hZ2VVcmwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzQXV0aGVudGljYXRlZCgpID8gdGhpcy5wcmluY2lwYWwuZ2V0SW1hZ2VVcmwoKSA6IG51bGw7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnRzIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL25hdmJhci5zY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9uYXZiYXIvbmF2YmFyLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL25hdmJhci9uYXZiYXIuc2Nzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJvZmlsZVNlcnZpY2UgfSBmcm9tICcuL3Byb2ZpbGUuc2VydmljZSc7XG5pbXBvcnQgeyBQcm9maWxlSW5mbyB9IGZyb20gJy4vcHJvZmlsZS1pbmZvLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdqaGktcGFnZS1yaWJib24nLFxuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInJpYmJvblwiICpuZ0lmPVwicmliYm9uRW52XCI+PGEgaHJlZj1cIlwiIGpoaVRyYW5zbGF0ZT1cImdsb2JhbC5yaWJib24ue3tyaWJib25FbnZ9fVwiPnt7cmliYm9uRW52fX08L2E+PC9kaXY+YCxcbiAgICBzdHlsZVVybHM6IFtcbiAgICAgICAgJ3BhZ2UtcmliYm9uLnNjc3MnXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBQYWdlUmliYm9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHByb2ZpbGVJbmZvOiBQcm9maWxlSW5mbztcbiAgICByaWJib25FbnY6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJvZmlsZVNlcnZpY2U6IFByb2ZpbGVTZXJ2aWNlKSB7fVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucHJvZmlsZVNlcnZpY2UuZ2V0UHJvZmlsZUluZm8oKS5zdWJzY3JpYmUocHJvZmlsZUluZm8gPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9maWxlSW5mbyA9IHByb2ZpbGVJbmZvO1xuICAgICAgICAgICAgdGhpcy5yaWJib25FbnYgPSBwcm9maWxlSW5mby5yaWJib25FbnY7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9wcm9maWxlcy9wYWdlLXJpYmJvbi5jb21wb25lbnQudHMiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vcGFnZS1yaWJib24uc2Nzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvcHJvZmlsZXMvcGFnZS1yaWJib24uc2Nzc1xuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvcHJvZmlsZXMvcGFnZS1yaWJib24uc2Nzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY2xhc3MgUHJvZmlsZUluZm8ge1xuICAgIGFjdGl2ZVByb2ZpbGVzOiBzdHJpbmdbXTtcbiAgICByaWJib25FbnY6IHN0cmluZztcbiAgICBpblByb2R1Y3Rpb246IGJvb2xlYW47XG4gICAgc3dhZ2dlckVuYWJsZWQ6IGJvb2xlYW47XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvcHJvZmlsZXMvcHJvZmlsZS1pbmZvLm1vZGVsLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcblxuaW1wb3J0IHsgUHJvZmlsZUluZm8gfSBmcm9tICcuL3Byb2ZpbGUtaW5mby5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcm9maWxlU2VydmljZSB7XG5cbiAgICBwcml2YXRlIHByb2ZpbGVJbmZvVXJsID0gJ2FwaS9wcm9maWxlLWluZm8nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cblxuICAgIGdldFByb2ZpbGVJbmZvKCk6IE9ic2VydmFibGU8UHJvZmlsZUluZm8+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5wcm9maWxlSW5mb1VybClcbiAgICAgICAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlcy5qc29uKCk7XG4gICAgICAgICAgICAgICAgbGV0IHBpID0gbmV3IFByb2ZpbGVJbmZvKCk7XG4gICAgICAgICAgICAgICAgcGkuYWN0aXZlUHJvZmlsZXMgPSBkYXRhLmFjdGl2ZVByb2ZpbGVzO1xuICAgICAgICAgICAgICAgIHBpLnJpYmJvbkVudiA9IGRhdGEucmliYm9uRW52O1xuICAgICAgICAgICAgICAgIHBpLmluUHJvZHVjdGlvbiA9IGRhdGEuYWN0aXZlUHJvZmlsZXMuaW5kZXhPZigncHJvZCcpICE9PSAtMTtcbiAgICAgICAgICAgICAgICBwaS5zd2FnZ2VyRW5hYmxlZCA9IGRhdGEuYWN0aXZlUHJvZmlsZXMuaW5kZXhPZignc3dhZ2dlcicpICE9PSAtMTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvcHJvZmlsZXMvcHJvZmlsZS5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICduZzItdHJhbnNsYXRlJztcbmltcG9ydCB7IEV2ZW50TWFuYWdlciwgQWxlcnRTZXJ2aWNlIH0gZnJvbSAnbmctamhpcHN0ZXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9SeCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLWFsZXJ0LWVycm9yJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYWxlcnRzXCIgcm9sZT1cImFsZXJ0XCI+XG4gICAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBhbGVydCBvZiBhbGVydHNcIiAgW25nQ2xhc3NdPVwie1xcJ2FsZXJ0LnBvc2l0aW9uXFwnOiB0cnVlLCBcXCd0b2FzdFxcJzogYWxlcnQudG9hc3R9XCI+XG4gICAgICAgICAgICAgICAgPG5nYi1hbGVydCB0eXBlPVwie3thbGVydC50eXBlfX1cIiBjbG9zZT1cImFsZXJ0LmNsb3NlKGFsZXJ0cylcIj48cHJlIFtpbm5lckhUTUxdPVwiYWxlcnQubXNnXCI+PC9wcmU+PC9uZ2ItYWxlcnQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+YFxufSlcbmV4cG9ydCBjbGFzcyBKaGlBbGVydEVycm9yQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuICAgIGFsZXJ0czogYW55W107XG4gICAgY2xlYW5IdHRwRXJyb3JMaXN0ZW5lcjogU3Vic2NyaXB0aW9uO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhbGVydFNlcnZpY2U6IEFsZXJ0U2VydmljZSwgcHJpdmF0ZSBldmVudE1hbmFnZXI6IEV2ZW50TWFuYWdlciwgcHJpdmF0ZSB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuYWxlcnRzID0gW107XG5cbiAgICAgICAgdGhpcy5jbGVhbkh0dHBFcnJvckxpc3RlbmVyID0gZXZlbnRNYW5hZ2VyLnN1YnNjcmliZSgnc3ByaW5nQm9vdEFuZ3VsYXJBcHAuaHR0cEVycm9yJywgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBsZXQgaTtcbiAgICAgICAgICAgIGxldCBodHRwUmVzcG9uc2UgPSByZXNwb25zZS5jb250ZW50O1xuICAgICAgICAgICAgc3dpdGNoIChodHRwUmVzcG9uc2Uuc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgLy8gY29ubmVjdGlvbiByZWZ1c2VkLCBzZXJ2ZXIgbm90IHJlYWNoYWJsZVxuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRFcnJvckFsZXJ0KCdTZXJ2ZXIgbm90IHJlYWNoYWJsZScsICdlcnJvci5zZXJ2ZXIubm90LnJlYWNoYWJsZScpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgNDAwOlxuICAgICAgICAgICAgICAgICAgICBsZXQgYXJyID0gQXJyYXkuZnJvbShodHRwUmVzcG9uc2UuaGVhZGVycy5faGVhZGVycyk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBoZWFkZXJzID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcnJbaV1bMF0uZW5kc1dpdGgoJ2FwcC1lcnJvcicpIHx8IGFycltpXVswXS5lbmRzV2l0aCgnYXBwLXBhcmFtcycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVycy5wdXNoKGFycltpXVswXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaGVhZGVycy5zb3J0KCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBlcnJvckhlYWRlciA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGxldCBlbnRpdHlLZXkgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaGVhZGVycy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvckhlYWRlciA9IGh0dHBSZXNwb25zZS5oZWFkZXJzLmdldChoZWFkZXJzWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUtleSA9IGh0dHBSZXNwb25zZS5oZWFkZXJzLmdldChoZWFkZXJzWzFdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3JIZWFkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlbnRpdHlOYW1lID0gdHJhbnNsYXRlU2VydmljZS5pbnN0YW50KCdnbG9iYWwubWVudS5lbnRpdGllcy4nICsgZW50aXR5S2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkRXJyb3JBbGVydChlcnJvckhlYWRlciwgZXJyb3JIZWFkZXIsIHtlbnRpdHlOYW1lOiBlbnRpdHlOYW1lfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaHR0cFJlc3BvbnNlLnRleHQoKSAhPT0gJycgJiYgaHR0cFJlc3BvbnNlLmpzb24oKSAmJiBodHRwUmVzcG9uc2UuanNvbigpLmZpZWxkRXJyb3JzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmllbGRFcnJvcnMgPSBodHRwUmVzcG9uc2UuanNvbigpLmZpZWxkRXJyb3JzO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGZpZWxkRXJyb3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpZWxkRXJyb3IgPSBmaWVsZEVycm9yc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb252ZXJ0ICdzb21ldGhpbmdbMTRdLm90aGVyWzRdLmlkJyB0byAnc29tZXRoaW5nW10ub3RoZXJbXS5pZCcgc28gdHJhbnNsYXRpb25zIGNhbiBiZSB3cml0dGVuIHRvIGl0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnZlcnRlZEZpZWxkID0gZmllbGRFcnJvci5maWVsZC5yZXBsYWNlKC9cXFtcXGQqXFxdL2csICdbXScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaWVsZE5hbWUgPSB0cmFuc2xhdGVTZXJ2aWNlLmluc3RhbnQoJ3NwcmluZ0Jvb3RBbmd1bGFyQXBwLicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZEVycm9yLm9iamVjdE5hbWUgKyAnLicgKyBjb252ZXJ0ZWRGaWVsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRFcnJvckFsZXJ0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnRmllbGQgJyArIGZpZWxkTmFtZSArICcgY2Fubm90IGJlIGVtcHR5JywgJ2Vycm9yLicgKyBmaWVsZEVycm9yLm1lc3NhZ2UsIHtmaWVsZE5hbWU6IGZpZWxkTmFtZX0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGh0dHBSZXNwb25zZS50ZXh0KCkgIT09ICcnICYmIGh0dHBSZXNwb25zZS5qc29uKCkgJiYgaHR0cFJlc3BvbnNlLmpzb24oKS5tZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEVycm9yQWxlcnQoaHR0cFJlc3BvbnNlLmpzb24oKS5tZXNzYWdlLCBodHRwUmVzcG9uc2UuanNvbigpLm1lc3NhZ2UsIGh0dHBSZXNwb25zZS5qc29uKCkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRFcnJvckFsZXJ0KGh0dHBSZXNwb25zZS50ZXh0KCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSA0MDQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkRXJyb3JBbGVydCgnTm90IGZvdW5kJywgJ2Vycm9yLnVybC5ub3QuZm91bmQnKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoaHR0cFJlc3BvbnNlLnRleHQoKSAhPT0gJycgJiYgaHR0cFJlc3BvbnNlLmpzb24oKSAmJiBodHRwUmVzcG9uc2UuanNvbigpLm1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkRXJyb3JBbGVydChodHRwUmVzcG9uc2UuanNvbigpLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRFcnJvckFsZXJ0KEpTT04uc3RyaW5naWZ5KGh0dHBSZXNwb25zZSkpOyAvLyBGaXhtZSBmaW5kIGEgd2F5IHRvIHBhcnNlIGh0dHBSZXNwb25zZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5jbGVhbkh0dHBFcnJvckxpc3RlbmVyICE9PSB1bmRlZmluZWQgJiYgdGhpcy5jbGVhbkh0dHBFcnJvckxpc3RlbmVyICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50TWFuYWdlci5kZXN0cm95KHRoaXMuY2xlYW5IdHRwRXJyb3JMaXN0ZW5lcik7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0cyA9IFtdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkRXJyb3JBbGVydCAobWVzc2FnZSwga2V5PywgZGF0YT8pIHtcbiAgICAgICAga2V5ID0ga2V5ICYmIGtleSAhPT0gbnVsbCA/IGtleSA6IG1lc3NhZ2U7XG4gICAgICAgIHRoaXMuYWxlcnRzLnB1c2goXG4gICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5hZGRBbGVydChcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdkYW5nZXInLFxuICAgICAgICAgICAgICAgICAgICBtc2c6IGtleSxcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiBkYXRhLFxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiA1MDAwLFxuICAgICAgICAgICAgICAgICAgICB0b2FzdDogdGhpcy5hbGVydFNlcnZpY2UuaXNUb2FzdCgpLFxuICAgICAgICAgICAgICAgICAgICBzY29wZWQ6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRzXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvYWxlcnQvYWxlcnQtZXJyb3IuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWxlcnRTZXJ2aWNlIH0gZnJvbSAnbmctamhpcHN0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2poaS1hbGVydCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImFsZXJ0c1wiIHJvbGU9XCJhbGVydFwiPlxuICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgYWxlcnQgb2YgYWxlcnRzXCIgW25nQ2xhc3NdPVwie1xcJ2FsZXJ0LnBvc2l0aW9uXFwnOiB0cnVlLCBcXCd0b2FzdFxcJzogYWxlcnQudG9hc3R9XCI+XG4gICAgICAgICAgICAgICAgPG5nYi1hbGVydCBbdHlwZV09XCJhbGVydC50eXBlXCIgKGNsb3NlKT1cImFsZXJ0LmNsb3NlKGFsZXJ0cylcIj48cHJlIFtpbm5lckhUTUxdPVwiYWxlcnQubXNnXCI+PC9wcmU+PC9uZ2ItYWxlcnQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+YFxufSlcbmV4cG9ydCBjbGFzcyBKaGlBbGVydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBhbGVydHM6IGFueVtdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhbGVydFNlcnZpY2U6IEFsZXJ0U2VydmljZSkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5hbGVydHMgPSB0aGlzLmFsZXJ0U2VydmljZS5nZXQoKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5hbGVydHMgPSBbXTtcbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBY2NvdW50U2VydmljZSAge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkgeyB9XG5cbiAgICBnZXQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2FwaS9hY2NvdW50JykubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKTtcbiAgICB9XG5cbiAgICBzYXZlKGFjY291bnQ6IGFueSk6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCdhcGkvYWNjb3VudCcsIGFjY291bnQpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2F1dGgvYWNjb3VudC5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UsIEhlYWRlcnMsIFVSTFNlYXJjaFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xuaW1wb3J0IHsgTG9jYWxTdG9yYWdlU2VydmljZSwgU2Vzc2lvblN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnbmcyLXdlYnN0b3JhZ2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZlclByb3ZpZGVyIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwLFxuICAgICAgICBwcml2YXRlICRsb2NhbFN0b3JhZ2U6IExvY2FsU3RvcmFnZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgJHNlc3Npb25TdG9yYWdlOiBTZXNzaW9uU3RvcmFnZVNlcnZpY2VcbiAgICApIHt9XG5cbiAgICBnZXRUb2tlbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRsb2NhbFN0b3JhZ2UucmV0cmlldmUoJ2F1dGhlbnRpY2F0aW9uVG9rZW4nKSB8fCB0aGlzLiRzZXNzaW9uU3RvcmFnZS5yZXRyaWV2ZSgnYXV0aGVudGljYXRpb25Ub2tlbicpO1xuICAgIH1cblxuICAgIGxvZ2luIChjcmVkZW50aWFscyk6IE9ic2VydmFibGU8YW55PiB7XG5cbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICB1c2VybmFtZTogY3JlZGVudGlhbHMudXNlcm5hbWUsXG4gICAgICAgICAgICBwYXNzd29yZDogY3JlZGVudGlhbHMucGFzc3dvcmQsXG4gICAgICAgICAgICByZW1lbWJlck1lOiBjcmVkZW50aWFscy5yZW1lbWJlck1lXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnYXBpL2F1dGhlbnRpY2F0ZScsIGRhdGEpLm1hcChhdXRoZW50aWNhdGVTdWNjZXNzLmJpbmQodGhpcykpO1xuXG4gICAgICAgIGZ1bmN0aW9uIGF1dGhlbnRpY2F0ZVN1Y2Nlc3MgKHJlc3ApIHtcbiAgICAgICAgICAgIGxldCBiZWFyZXJUb2tlbiA9IHJlc3AuaGVhZGVycy5nZXQoJ0F1dGhvcml6YXRpb24nKTtcbiAgICAgICAgICAgIGlmIChiZWFyZXJUb2tlbiAmJiBiZWFyZXJUb2tlbi5zbGljZSgwLCA3KSA9PT0gJ0JlYXJlciAnKSB7XG4gICAgICAgICAgICAgICAgbGV0IGp3dCA9IGJlYXJlclRva2VuLnNsaWNlKDcsIGJlYXJlclRva2VuLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yZUF1dGhlbnRpY2F0aW9uVG9rZW4oand0LCBjcmVkZW50aWFscy5yZW1lbWJlck1lKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gand0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9naW5XaXRoVG9rZW4oand0LCByZW1lbWJlck1lKSB7XG4gICAgICAgIGlmIChqd3QpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcmVBdXRoZW50aWNhdGlvblRva2VuKGp3dCwgcmVtZW1iZXJNZSk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGp3dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ2F1dGgtand0LXNlcnZpY2UgUHJvbWlzZSByZWplY3QnKTsgLy8gUHV0IGFwcHJvcHJpYXRlIGVycm9yIG1lc3NhZ2UgaGVyZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RvcmVBdXRoZW50aWNhdGlvblRva2VuKGp3dCwgcmVtZW1iZXJNZSkge1xuICAgICAgICBpZiAocmVtZW1iZXJNZSkge1xuICAgICAgICAgICAgdGhpcy4kbG9jYWxTdG9yYWdlLnN0b3JlKCdhdXRoZW50aWNhdGlvblRva2VuJywgand0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuJHNlc3Npb25TdG9yYWdlLnN0b3JlKCdhdXRoZW50aWNhdGlvblRva2VuJywgand0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvZ291dCAoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKG9ic2VydmVyID0+IHtcbiAgICAgICAgICAgIHRoaXMuJGxvY2FsU3RvcmFnZS5jbGVhcignYXV0aGVudGljYXRpb25Ub2tlbicpO1xuICAgICAgICAgICAgdGhpcy4kc2Vzc2lvblN0b3JhZ2UuY2xlYXIoJ2F1dGhlbnRpY2F0aW9uVG9rZW4nKTtcbiAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2F1dGgvYXV0aC1qd3Quc2VydmljZS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IExvZ2luTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi4vbG9naW4vbG9naW4tbW9kYWwuc2VydmljZSc7XG5pbXBvcnQgeyBQcmluY2lwYWwgfSBmcm9tICcuL3ByaW5jaXBhbC5zZXJ2aWNlJztcbmltcG9ydCB7IFN0YXRlU3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuL3N0YXRlLXN0b3JhZ2Uuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBwcmluY2lwYWw6IFByaW5jaXBhbCxcbiAgICAgICAgcHJpdmF0ZSBzdGF0ZVN0b3JhZ2VTZXJ2aWNlOiBTdGF0ZVN0b3JhZ2VTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGxvZ2luTW9kYWxTZXJ2aWNlOiBMb2dpbk1vZGFsU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxuICAgICkge31cblxuICAgIGF1dGhvcml6ZSAoZm9yY2UpIHtcbiAgICAgICAgbGV0IGF1dGhSZXR1cm4gPSB0aGlzLnByaW5jaXBhbC5pZGVudGl0eShmb3JjZSkudGhlbihhdXRoVGhlbi5iaW5kKHRoaXMpKTtcblxuICAgICAgICByZXR1cm4gYXV0aFJldHVybjtcblxuICAgICAgICBmdW5jdGlvbiBhdXRoVGhlbiAoKSB7XG4gICAgICAgICAgICBsZXQgaXNBdXRoZW50aWNhdGVkID0gdGhpcy5wcmluY2lwYWwuaXNBdXRoZW50aWNhdGVkKCk7XG4gICAgICAgICAgICBsZXQgdG9TdGF0ZUluZm8gPSB0aGlzLnN0YXRlU3RvcmFnZVNlcnZpY2UuZ2V0RGVzdGluYXRpb25TdGF0ZSgpLmRlc3RpbmF0aW9uO1xuXG4gICAgICAgICAgICAvLyBhbiBhdXRoZW50aWNhdGVkIHVzZXIgY2FuJ3QgYWNjZXNzIHRvIGxvZ2luIGFuZCByZWdpc3RlciBwYWdlc1xuICAgICAgICAgICAgaWYgKGlzQXV0aGVudGljYXRlZCAmJiAodG9TdGF0ZUluZm8ubmFtZSA9PT0gJ3JlZ2lzdGVyJyB8fCB0b1N0YXRlSW5mby5uYW1lID09PSAnc29jaWFsLWF1dGgnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnJ10pO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gcmVjb3ZlciBhbmQgY2xlYXIgcHJldmlvdXNTdGF0ZSBhZnRlciBleHRlcm5hbCBsb2dpbiByZWRpcmVjdCAoZS5nLiBvYXV0aDIpXG4gICAgICAgICAgICBsZXQgZnJvbVN0YXRlSW5mbyA9IHRoaXMuc3RhdGVTdG9yYWdlU2VydmljZS5nZXREZXN0aW5hdGlvblN0YXRlKCkuZnJvbTtcbiAgICAgICAgICAgIGxldCBwcmV2aW91c1N0YXRlID0gdGhpcy5zdGF0ZVN0b3JhZ2VTZXJ2aWNlLmdldFByZXZpb3VzU3RhdGUoKTtcbiAgICAgICAgICAgIGlmIChpc0F1dGhlbnRpY2F0ZWQgJiYgIWZyb21TdGF0ZUluZm8ubmFtZSAmJiBwcmV2aW91c1N0YXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZVN0b3JhZ2VTZXJ2aWNlLnJlc2V0UHJldmlvdXNTdGF0ZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtwcmV2aW91c1N0YXRlLm5hbWVdLCB7IHF1ZXJ5UGFyYW1zOiAgcHJldmlvdXNTdGF0ZS5wYXJhbXMgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRvU3RhdGVJbmZvLmRhdGEuYXV0aG9yaXRpZXMgJiYgdG9TdGF0ZUluZm8uZGF0YS5hdXRob3JpdGllcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJpbmNpcGFsLmhhc0FueUF1dGhvcml0eSh0b1N0YXRlSW5mby5kYXRhLmF1dGhvcml0aWVzKS50aGVuKGhhc0FueUF1dGhvcml0eSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaGFzQW55QXV0aG9yaXR5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNBdXRoZW50aWNhdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdXNlciBpcyBzaWduZWQgaW4gYnV0IG5vdCBhdXRob3JpemVkIGZvciBkZXNpcmVkIHN0YXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydhY2Nlc3NkZW5pZWQnXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHVzZXIgaXMgbm90IGF1dGhlbnRpY2F0ZWQuIFNob3cgdGhlIHN0YXRlIHRoZXkgd2FudGVkIGJlZm9yZSB5b3VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzZW5kIHRoZW0gdG8gdGhlIGxvZ2luIHNlcnZpY2UsIHNvIHlvdSBjYW4gcmV0dXJuIHRoZW0gd2hlbiB5b3UncmUgZG9uZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b1N0YXRlUGFyYW1zSW5mbyA9IHRoaXMuc3RhdGVTdG9yYWdlU2VydmljZS5nZXREZXN0aW5hdGlvblN0YXRlKCkucGFyYW1zO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVTdG9yYWdlU2VydmljZS5zdG9yZVByZXZpb3VzU3RhdGUodG9TdGF0ZUluZm8ubmFtZSwgdG9TdGF0ZVBhcmFtc0luZm8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5vdywgc2VuZCB0aGVtIHRvIHRoZSBzaWduaW4gc3RhdGUgc28gdGhleSBjYW4gbG9nIGluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydhY2Nlc3NkZW5pZWQnXSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW5Nb2RhbFNlcnZpY2Uub3BlbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBoYXNBbnlBdXRob3JpdHk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2F1dGgvYXV0aC5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29va2llU2VydmljZSB9IGZyb20gJ2FuZ3VsYXIyLWNvb2tpZS9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENTUkZTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY29va2llU2VydmljZTogQ29va2llU2VydmljZSkge31cblxuICAgIGdldENTUkYobmFtZT86IHN0cmluZykge1xuICAgICAgICBuYW1lID0gYCR7bmFtZSA/IG5hbWUgOiAnWFNSRi1UT0tFTid9YDtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29va2llU2VydmljZS5nZXQobmFtZSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvYXV0aC9jc3JmLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJpbmNpcGFsIH0gZnJvbSAnLi9wcmluY2lwYWwuc2VydmljZSc7XG5cbi8qKlxuICogQHdoYXRJdERvZXMgQ29uZGl0aW9uYWxseSBpbmNsdWRlcyBhbiBIVE1MIGVsZW1lbnQgaWYgY3VycmVudCB1c2VyIGhhcyBhbnlcbiAqIG9mIHRoZSBhdXRob3JpdGllcyBwYXNzZWQgYXMgdGhlIGBleHByZXNzaW9uYC5cbiAqXG4gKiBAaG93VG9Vc2VcbiAqIGBgYFxuICogICAgIDxzb21lLWVsZW1lbnQgKmpoaUhhc0FueUF1dGhvcml0eT1cIidST0xFX0FETUlOJ1wiPi4uLjwvc29tZS1lbGVtZW50PlxuICpcbiAqICAgICA8c29tZS1lbGVtZW50ICpqaGlIYXNBbnlBdXRob3JpdHk9XCJbJ1JPTEVfQURNSU4nLCAnUk9MRV9VU0VSJ11cIj4uLi48L3NvbWUtZWxlbWVudD5cbiAqIGBgYFxuICovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tqaGlIYXNBbnlBdXRob3JpdHldJ1xufSlcbmV4cG9ydCBjbGFzcyBIYXNBbnlBdXRob3JpdHlEaXJlY3RpdmUge1xuXG4gICAgcHJpdmF0ZSBhdXRob3JpdGllczogc3RyaW5nW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHByaW5jaXBhbDogUHJpbmNpcGFsLCBwcml2YXRlIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LCBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCBqaGlIYXNBbnlBdXRob3JpdHkodmFsdWU6IHN0cmluZ3xzdHJpbmdbXSkge1xuICAgICAgICB0aGlzLmF1dGhvcml0aWVzID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IFsgPHN0cmluZz4gdmFsdWUgXSA6IDxzdHJpbmdbXT4gdmFsdWU7XG4gICAgICAgIHRoaXMudXBkYXRlVmlldygpO1xuICAgICAgICAvLyBHZXQgbm90aWZpZWQgZWFjaCB0aW1lIGF1dGhlbnRpY2F0aW9uIHN0YXRlIGNoYW5nZXMuXG4gICAgICAgIHRoaXMucHJpbmNpcGFsLmdldEF1dGhlbnRpY2F0aW9uU3RhdGUoKS5zdWJzY3JpYmUoaWRlbnRpdHkgPT4gdGhpcy51cGRhdGVWaWV3KCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlVmlldygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wcmluY2lwYWwuaGFzQW55QXV0aG9yaXR5KHRoaXMuYXV0aG9yaXRpZXMpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIHRoaXMudmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy50ZW1wbGF0ZVJlZik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2F1dGgvaGFzLWFueS1hdXRob3JpdHkuZGlyZWN0aXZlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcy9TdWJqZWN0JztcbmltcG9ydCB7IEFjY291bnRTZXJ2aWNlIH0gZnJvbSAnLi9hY2NvdW50LnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJpbmNpcGFsIHtcbiAgICBwcml2YXRlIHVzZXJJZGVudGl0eTogYW55O1xuICAgIHByaXZhdGUgYXV0aGVudGljYXRlZCA9IGZhbHNlO1xuICAgIHByaXZhdGUgYXV0aGVudGljYXRpb25TdGF0ZSA9IG5ldyBTdWJqZWN0PGFueT4oKTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGFjY291bnQ6IEFjY291bnRTZXJ2aWNlXG4gICAgKSB7fVxuXG4gICAgYXV0aGVudGljYXRlIChpZGVudGl0eSkge1xuICAgICAgICB0aGlzLnVzZXJJZGVudGl0eSA9IGlkZW50aXR5O1xuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0ZWQgPSBpZGVudGl0eSAhPT0gbnVsbDtcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblN0YXRlLm5leHQodGhpcy51c2VySWRlbnRpdHkpO1xuICAgIH1cblxuICAgIGhhc0FueUF1dGhvcml0eSAoYXV0aG9yaXRpZXM6IHN0cmluZ1tdKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIGlmICghdGhpcy5hdXRoZW50aWNhdGVkIHx8ICF0aGlzLnVzZXJJZGVudGl0eSB8fCAhdGhpcy51c2VySWRlbnRpdHkuYXV0aG9yaXRpZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdXRob3JpdGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMudXNlcklkZW50aXR5LmF1dGhvcml0aWVzLmluZGV4T2YoYXV0aG9yaXRpZXNbaV0pICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbiAgICB9XG5cbiAgICBoYXNBdXRob3JpdHkgKGF1dGhvcml0eTogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIGlmICghdGhpcy5hdXRoZW50aWNhdGVkKSB7XG4gICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaWRlbnRpdHkoKS50aGVuKGlkID0+IHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoaWQuYXV0aG9yaXRpZXMgJiYgaWQuYXV0aG9yaXRpZXMuaW5kZXhPZihhdXRob3JpdHkpICE9PSAtMSk7XG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGl0eSAoZm9yY2U/OiBib29sZWFuKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgaWYgKGZvcmNlID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLnVzZXJJZGVudGl0eSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGFuZCBzZWUgaWYgd2UgaGF2ZSByZXRyaWV2ZWQgdGhlIHVzZXJJZGVudGl0eSBkYXRhIGZyb20gdGhlIHNlcnZlci5cbiAgICAgICAgLy8gaWYgd2UgaGF2ZSwgcmV1c2UgaXQgYnkgaW1tZWRpYXRlbHkgcmVzb2x2aW5nXG4gICAgICAgIGlmICh0aGlzLnVzZXJJZGVudGl0eSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnVzZXJJZGVudGl0eSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZXRyaWV2ZSB0aGUgdXNlcklkZW50aXR5IGRhdGEgZnJvbSB0aGUgc2VydmVyLCB1cGRhdGUgdGhlIGlkZW50aXR5IG9iamVjdCwgYW5kIHRoZW4gcmVzb2x2ZS5cbiAgICAgICAgcmV0dXJuIHRoaXMuYWNjb3VudC5nZXQoKS50b1Byb21pc2UoKS50aGVuKGFjY291bnQgPT4ge1xuICAgICAgICAgICAgaWYgKGFjY291bnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJJZGVudGl0eSA9IGFjY291bnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoZW50aWNhdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VySWRlbnRpdHkgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0aGVudGljYXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblN0YXRlLm5leHQodGhpcy51c2VySWRlbnRpdHkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudXNlcklkZW50aXR5O1xuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgdGhpcy51c2VySWRlbnRpdHkgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5hdXRoZW50aWNhdGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU3RhdGUubmV4dCh0aGlzLnVzZXJJZGVudGl0eSk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaXNBdXRoZW50aWNhdGVkICgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aGVudGljYXRlZDtcbiAgICB9XG5cbiAgICBpc0lkZW50aXR5UmVzb2x2ZWQgKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy51c2VySWRlbnRpdHkgIT09IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBnZXRBdXRoZW50aWNhdGlvblN0YXRlKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmF1dGhlbnRpY2F0aW9uU3RhdGUuYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxuXG4gICAgZ2V0SW1hZ2VVcmwoKTogU3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNJZGVudGl0eVJlc29sdmVkICgpID8gdGhpcy51c2VySWRlbnRpdHkuaW1hZ2VVcmwgOiBudWxsO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2F1dGgvcHJpbmNpcGFsLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTZXNzaW9uU3RvcmFnZVNlcnZpY2UgfSBmcm9tICduZzItd2Vic3RvcmFnZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdGF0ZVN0b3JhZ2VTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSAkc2Vzc2lvblN0b3JhZ2U6IFNlc3Npb25TdG9yYWdlU2VydmljZVxuICAgICkge31cblxuICAgIGdldFByZXZpb3VzU3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRzZXNzaW9uU3RvcmFnZS5yZXRyaWV2ZSgncHJldmlvdXNTdGF0ZScpO1xuICAgIH1cblxuICAgIHJlc2V0UHJldmlvdXNTdGF0ZSgpIHtcbiAgICAgICAgdGhpcy4kc2Vzc2lvblN0b3JhZ2UuY2xlYXIoJ3ByZXZpb3VzU3RhdGUnKTtcbiAgICB9XG5cbiAgICBzdG9yZVByZXZpb3VzU3RhdGUocHJldmlvdXNTdGF0ZU5hbWUsIHByZXZpb3VzU3RhdGVQYXJhbXMpIHtcbiAgICAgICAgbGV0IHByZXZpb3VzU3RhdGUgPSB7ICduYW1lJzogcHJldmlvdXNTdGF0ZU5hbWUsICdwYXJhbXMnOiBwcmV2aW91c1N0YXRlUGFyYW1zIH07XG4gICAgICAgIHRoaXMuJHNlc3Npb25TdG9yYWdlLnN0b3JlKCdwcmV2aW91c1N0YXRlJywgcHJldmlvdXNTdGF0ZSk7XG4gICAgfVxuXG4gICAgZ2V0RGVzdGluYXRpb25TdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHNlc3Npb25TdG9yYWdlLnJldHJpZXZlKCdkZXN0aW5hdGlvblN0YXRlJyk7XG4gICAgfVxuXG4gICAgc3RvcmVEZXN0aW5hdGlvblN0YXRlKGRlc3RpbmF0aW9uU3RhdGUsIGRlc3RpbmF0aW9uU3RhdGVQYXJhbXMsIGZyb21TdGF0ZSkge1xuICAgICAgICBsZXQgZGVzdGluYXRpb25JbmZvID0ge1xuICAgICAgICAgICAgJ2Rlc3RpbmF0aW9uJzoge1xuICAgICAgICAgICAgICAgICduYW1lJzogZGVzdGluYXRpb25TdGF0ZS5uYW1lLFxuICAgICAgICAgICAgICAgICdkYXRhJzogZGVzdGluYXRpb25TdGF0ZS5kYXRhLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdwYXJhbXMnOiBkZXN0aW5hdGlvblN0YXRlUGFyYW1zLFxuICAgICAgICAgICAgJ2Zyb20nOiB7XG4gICAgICAgICAgICAgICAgJ25hbWUnOiBmcm9tU3RhdGUubmFtZSxcbiAgICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuJHNlc3Npb25TdG9yYWdlLnN0b3JlKCdkZXN0aW5hdGlvblN0YXRlJywgZGVzdGluYXRpb25JbmZvKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9hdXRoL3N0YXRlLXN0b3JhZ2Uuc2VydmljZS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbkFjdGl2YXRlLCBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyUm91dGVBY2Nlc3NTZXJ2aWNlIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBhdXRoOiBBdXRoU2VydmljZSkge1xuICAgIH1cblxuICAgIGNhbkFjdGl2YXRlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogYm9vbGVhbiB8IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5hdXRoLmF1dGhvcml6ZShmYWxzZSkudGhlbiggY2FuQWN0aXZhdGUgPT4gY2FuQWN0aXZhdGUpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2F1dGgvdXNlci1yb3V0ZS1hY2Nlc3Mtc2VydmljZS50cyIsImV4cG9ydCBjb25zdCBJVEVNU19QRVJfUEFHRSA9IDIwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvY29uc3RhbnRzL3BhZ2luYXRpb24uY29uc3RhbnRzLnRzIiwiZXhwb3J0ICogZnJvbSAnLi9hbGVydC9hbGVydC5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9hbGVydC9hbGVydC1lcnJvci5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9hdXRoL2NzcmYuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2F1dGgvc3RhdGUtc3RvcmFnZS5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vYXV0aC9hY2NvdW50LnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9hdXRoL2F1dGgtand0LnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9hdXRoL2F1dGguc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2F1dGgvcHJpbmNpcGFsLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9hdXRoL2hhcy1hbnktYXV0aG9yaXR5LmRpcmVjdGl2ZSc7XG5leHBvcnQgKiBmcm9tICcuL2xhbmd1YWdlL2xhbmd1YWdlLmNvbnN0YW50cyc7XG5leHBvcnQgKiBmcm9tICcuL2xhbmd1YWdlL2xhbmd1YWdlLmhlbHBlcic7XG5leHBvcnQgKiBmcm9tICcuL2xhbmd1YWdlL2xhbmd1YWdlLnBpcGUnO1xuZXhwb3J0ICogZnJvbSAnLi9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9sb2dpbi9sb2dpbi5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vbG9naW4vbG9naW4tbW9kYWwuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2NvbnN0YW50cy9wYWdpbmF0aW9uLmNvbnN0YW50cyc7XG5leHBvcnQgKiBmcm9tICcuL3VzZXIvYWNjb3VudC5tb2RlbCc7XG5leHBvcnQgKiBmcm9tICcuL3VzZXIvdXNlci5tb2RlbCc7XG5leHBvcnQgKiBmcm9tICcuL3VzZXIvdXNlci5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vc29jaWFsL3NvY2lhbC5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vc29jaWFsL3NvY2lhbC5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9zaGFyZWQtbGlicy5tb2R1bGUnO1xuZXhwb3J0ICogZnJvbSAnLi9zaGFyZWQtY29tbW9uLm1vZHVsZSc7XG5leHBvcnQgKiBmcm9tICcuL3NoYXJlZC5tb2R1bGUnO1xuZXhwb3J0ICogZnJvbSAnLi9hdXRoL3VzZXItcm91dGUtYWNjZXNzLXNlcnZpY2UnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvaW5kZXgudHMiLCIvKlxuICAgIExhbmd1YWdlcyBjb2RlcyBhcmUgSVNPXzYzOS0xIGNvZGVzLCBzZWUgaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9MaXN0X29mX0lTT182MzktMV9jb2Rlc1xuICAgIFRoZXkgYXJlIHdyaXR0ZW4gaW4gRW5nbGlzaCB0byBhdm9pZCBjaGFyYWN0ZXIgZW5jb2RpbmcgaXNzdWVzIChub3QgYSBwZXJmZWN0IHNvbHV0aW9uKVxuKi9cbmV4cG9ydCBjb25zdCBMQU5HVUFHRVM6IHN0cmluZ1tdID0gW1xuICAgICdmcicsXG4gICAgJ2h5JyxcbiAgICAnZW4nLFxuICAgICdoaScsXG4gICAgJ2l0J1xuICAgIC8vIGpoaXBzdGVyLW5lZWRsZS1pMThuLWxhbmd1YWdlLWNvbnN0YW50IC0gSkhpcHN0ZXIgd2lsbCBhZGQvcmVtb3ZlIGxhbmd1YWdlcyBpbiB0aGlzIGFycmF5XG5dO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvbGFuZ3VhZ2UvbGFuZ3VhZ2UuY29uc3RhbnRzLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGl0bGUgfSAgICAgZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSwgVHJhbnNsYXRpb25DaGFuZ2VFdmVudCwgTGFuZ0NoYW5nZUV2ZW50IH0gZnJvbSAnbmcyLXRyYW5zbGF0ZS9uZzItdHJhbnNsYXRlJztcblxuaW1wb3J0IHsgTEFOR1VBR0VTIH0gZnJvbSAnLi9sYW5ndWFnZS5jb25zdGFudHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSmhpTGFuZ3VhZ2VIZWxwZXIge1xuXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZSwgcHJpdmF0ZSB0aXRsZVNlcnZpY2U6IFRpdGxlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIGdldEFsbCgpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKExBTkdVQUdFUyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSB3aW5kb3cgdGl0bGUgdXNpbmcgcGFyYW1zIGluIHRoZSBmb2xsb3dpbmdcbiAgICAgKiBvcmRlcjpcbiAgICAgKiAxLiB0aXRsZUtleSBwYXJhbWV0ZXJcbiAgICAgKiAyLiAkc3RhdGUuJGN1cnJlbnQuZGF0YS5wYWdlVGl0bGUgKGN1cnJlbnQgc3RhdGUgcGFnZSB0aXRsZSlcbiAgICAgKiAzLiAnZ2xvYmFsLnRpdGxlJ1xuICAgICAqL1xuICAgIHVwZGF0ZVRpdGxlKHRpdGxlS2V5Pzogc3RyaW5nKSB7XG4gICAgICAgIGlmICghdGl0bGVLZXkpIHtcbiAgICAgICAgICAgICB0aXRsZUtleSA9IHRoaXMuZ2V0UGFnZVRpdGxlKHRoaXMucm91dGVyLnJvdXRlclN0YXRlLnNuYXBzaG90LnJvb3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmdldCh0aXRsZUtleSkuc3Vic2NyaWJlKHRpdGxlID0+IHtcbiAgICAgICAgICAgIHRoaXMudGl0bGVTZXJ2aWNlLnNldFRpdGxlKHRpdGxlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0ICgpIHtcbiAgICAgICAgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLm9uVHJhbnNsYXRpb25DaGFuZ2Uuc3Vic2NyaWJlKChldmVudDogVHJhbnNsYXRpb25DaGFuZ2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVUaXRsZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnRyYW5zbGF0ZVNlcnZpY2Uub25MYW5nQ2hhbmdlLnN1YnNjcmliZSgoZXZlbnQ6IExhbmdDaGFuZ2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVUaXRsZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFBhZ2VUaXRsZShyb3V0ZVNuYXBzaG90OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KSB7XG4gICAgICAgIGxldCB0aXRsZTogc3RyaW5nID0gKHJvdXRlU25hcHNob3QuZGF0YSAmJiByb3V0ZVNuYXBzaG90LmRhdGFbJ3BhZ2VUaXRsZSddKSA/IHJvdXRlU25hcHNob3QuZGF0YVsncGFnZVRpdGxlJ10gOiAnc3ByaW5nQm9vdEFuZ3VsYXJBcHAnO1xuICAgICAgICBpZiAocm91dGVTbmFwc2hvdC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICB0aXRsZSA9IHRoaXMuZ2V0UGFnZVRpdGxlKHJvdXRlU25hcHNob3QuZmlyc3RDaGlsZCkgfHwgdGl0bGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRpdGxlO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2xhbmd1YWdlL2xhbmd1YWdlLmhlbHBlci50cyIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe25hbWU6ICdmaW5kTGFuZ3VhZ2VGcm9tS2V5J30pXG5leHBvcnQgY2xhc3MgRmluZExhbmd1YWdlRnJvbUtleVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgICBwcml2YXRlIGxhbmd1YWdlczogYW55ID0ge1xuICAgICAgICAnY2EnOiAnQ2F0YWzDoCcsXG4gICAgICAgICdjcyc6ICfEjGVza8O9JyxcbiAgICAgICAgJ2RhJzogJ0RhbnNrJyxcbiAgICAgICAgJ2RlJzogJ0RldXRzY2gnLFxuICAgICAgICAnZWwnOiAnzpXOu867zrfOvc65zrrOrCcsXG4gICAgICAgICdlbic6ICdFbmdsaXNoJyxcbiAgICAgICAgJ2VzJzogJ0VzcGHDsW9sJyxcbiAgICAgICAgJ2V0JzogJ0Vlc3RpJyxcbiAgICAgICAgJ2ZyJzogJ0ZyYW7Dp2FpcycsXG4gICAgICAgICdnbCc6ICdHYWxlZ28nLFxuICAgICAgICAnaHUnOiAnTWFneWFyJyxcbiAgICAgICAgJ2hpJzogJ+CkueCkv+CkguCkpuClgCcsXG4gICAgICAgICdoeSc6ICfVgNWh1bXVpdaA1aXVticsXG4gICAgICAgICdpdCc6ICdJdGFsaWFubycsXG4gICAgICAgICdqYSc6ICfml6XmnKzoqp4nLFxuICAgICAgICAna28nOiAn7ZWc6rWt7Ja0JyxcbiAgICAgICAgJ21yJzogJ+CkruCksOCkvuCkoOClgCcsXG4gICAgICAgICdubCc6ICdOZWRlcmxhbmRzJyxcbiAgICAgICAgJ3BsJzogJ1BvbHNraScsXG4gICAgICAgICdwdC1icic6ICdQb3J0dWd1w6pzIChCcmFzaWwpJyxcbiAgICAgICAgJ3B0LXB0JzogJ1BvcnR1Z3XDqnMnLFxuICAgICAgICAncm8nOiAnUm9tw6JuxIMnLFxuICAgICAgICAncnUnOiAn0KDRg9GB0YHQutC40LknLFxuICAgICAgICAnc2snOiAnU2xvdmVuc2vDvScsXG4gICAgICAgICdzcic6ICdTcnBza2knLFxuICAgICAgICAnc3YnOiAnU3ZlbnNrYScsXG4gICAgICAgICd0YSc6ICfgrqTgrq7grr/grrTgr40nLFxuICAgICAgICAndGgnOiAn4LmE4LiX4LiiJyxcbiAgICAgICAgJ3RyJzogJ1TDvHJrw6dlJyxcbiAgICAgICAgJ3ZpJzogJ1Rp4bq/bmcgVmnhu4d0JyxcbiAgICAgICAgJ3poLWNuJzogJ+S4reaWh++8iOeugOS9k++8iScsXG4gICAgICAgICd6aC10dyc6ICfnuYHpq5TkuK3mlocnXG4gICAgfTtcbiAgICB0cmFuc2Zvcm0obGFuZzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGFuZ3VhZ2VzW2xhbmddO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL2xhbmd1YWdlL2xhbmd1YWdlLnBpcGUudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2JNb2RhbCwgTmdiTW9kYWxSZWYgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5cbmltcG9ydCB7IEpoaUxvZ2luTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL2xvZ2luLmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2dpbk1vZGFsU2VydmljZSB7XG4gICAgcHJpdmF0ZSBpc09wZW4gPSBmYWxzZTtcbiAgICBjb25zdHJ1Y3RvciAoXG4gICAgICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBOZ2JNb2RhbCxcbiAgICApIHt9XG5cbiAgICBvcGVuICgpOiBOZ2JNb2RhbFJlZiB7XG4gICAgICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcbiAgICAgICAgbGV0IG1vZGFsUmVmID0gdGhpcy5tb2RhbFNlcnZpY2Uub3BlbihKaGlMb2dpbk1vZGFsQ29tcG9uZW50KTtcbiAgICAgICAgbW9kYWxSZWYucmVzdWx0LnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgIH0sIChyZWFzb24pID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbW9kYWxSZWY7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvbG9naW4vbG9naW4tbW9kYWwuc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPiA8aDQgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIiBqaGlUcmFuc2xhdGU9XFxcImxvZ2luLnRpdGxlXFxcIj5TaWduIGluPC9oND4gPGJ1dHRvbiBhcmlhLWxhYmVsPVxcXCJDbG9zZVxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIChjbGljayk9XFxcImFjdGl2ZU1vZGFsLmRpc21pc3MoJ2Nsb3NlZCcpXFxcIj48c3BhbiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+eDwvc3Bhbj4gPC9idXR0b24+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj4gPGRpdiBjbGFzcz1cXFwicm93XFxcIj4gPGRpdiBjbGFzcz1cXFwiY29sLW1kLTQgb2Zmc2V0LW1kLTRcXFwiPiA8aDEgamhpVHJhbnNsYXRlPVxcXCJsb2dpbi50aXRsZVxcXCI+U2lnbiBpbjwvaDE+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtOCBvZmZzZXQtbWQtMlxcXCI+IDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCIgKm5nSWY9XFxcImF1dGhlbnRpY2F0aW9uRXJyb3JcXFwiIGpoaVRyYW5zbGF0ZT1cXFwibG9naW4ubWVzc2FnZXMuZXJyb3IuYXV0aGVudGljYXRpb25cXFwiPiA8c3Ryb25nPkZhaWxlZCB0byBzaWduIGluITwvc3Ryb25nPiBQbGVhc2UgY2hlY2sgeW91ciBjcmVkZW50aWFscyBhbmQgdHJ5IGFnYWluLiA8L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImNvbC1tZC02XFxcIj4gPGZvcm0gY2xhc3M9XFxcImZvcm1cXFwiIHJvbGU9XFxcImZvcm1cXFwiIChuZ1N1Ym1pdCk9XFxcImxvZ2luKClcXFwiPiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4gPGxhYmVsIGZvcj1cXFwidXNlcm5hbWVcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLmZvcm0udXNlcm5hbWVcXFwiPkxvZ2luPC9sYWJlbD4gPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIG5hbWU9XFxcInVzZXJuYW1lXFxcIiBpZD1cXFwidXNlcm5hbWVcXFwiIHBsYWNlaG9sZGVyPVxcXCJ7eydnbG9iYWwuZm9ybS51c2VybmFtZS5wbGFjZWhvbGRlcicgfCB0cmFuc2xhdGV9fVxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXJuYW1lXFxcIj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPiA8bGFiZWwgZm9yPVxcXCJwYXNzd29yZFxcXCIgamhpVHJhbnNsYXRlPVxcXCJsb2dpbi5mb3JtLnBhc3N3b3JkXFxcIj5QYXNzd29yZDwvbGFiZWw+IDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgbmFtZT1cXFwicGFzc3dvcmRcXFwiIGlkPVxcXCJwYXNzd29yZFxcXCIgcGxhY2Vob2xkZXI9XFxcInt7J2xvZ2luLmZvcm0ucGFzc3dvcmQucGxhY2Vob2xkZXInIHwgdHJhbnNsYXRlfX1cXFwiIFsobmdNb2RlbCldPVxcXCJwYXNzd29yZFxcXCI+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWNoZWNrXFxcIj4gPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNoZWNrLWxhYmVsXFxcIiBmb3I9XFxcInJlbWVtYmVyTWVcXFwiPiA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY2hlY2staW5wdXRcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIiBuYW1lPVxcXCJyZW1lbWJlck1lXFxcIiBpZD1cXFwicmVtZW1iZXJNZVxcXCIgWyhuZ01vZGVsKV09XFxcInJlbWVtYmVyTWVcXFwiIGNoZWNrZWQ9XFxcImNoZWNrZWRcXFwiPiA8c3BhbiBqaGlUcmFuc2xhdGU9XFxcImxvZ2luLmZvcm0ucmVtZW1iZXJtZVxcXCI+UmVtZW1iZXIgbWU8L3NwYW4+IDwvbGFiZWw+IDwvZGl2PiA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgamhpVHJhbnNsYXRlPVxcXCJsb2dpbi5mb3JtLmJ1dHRvblxcXCI+U2lnbiBpbjwvYnV0dG9uPiA8L2Zvcm0+IDxwPjwvcD4gPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtd2FybmluZ1xcXCI+IDxhIGNsYXNzPVxcXCJhbGVydC1saW5rXFxcIiAoY2xpY2spPVxcXCJyZXF1ZXN0UmVzZXRQYXNzd29yZCgpXFxcIiBqaGlUcmFuc2xhdGU9XFxcImxvZ2luLnBhc3N3b3JkLmZvcmdvdFxcXCI+RGlkIHlvdSBmb3JnZXQgeW91ciBwYXNzd29yZD88L2E+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC13YXJuaW5nXFxcIj4gPHNwYW4gamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwubWVzc2FnZXMuaW5mby5yZWdpc3Rlci5ub2FjY291bnRcXFwiPllvdSBkb24ndCBoYXZlIGFuIGFjY291bnQgeWV0Pzwvc3Bhbj4gPGEgY2xhc3M9XFxcImFsZXJ0LWxpbmtcXFwiIChjbGljayk9XFxcInJlZ2lzdGVyKClcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZ2xvYmFsLm1lc3NhZ2VzLmluZm8ucmVnaXN0ZXIubGlua1xcXCI+UmVnaXN0ZXIgYSBuZXcgYWNjb3VudDwvYT4gPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtNlxcXCI+IDxici8+IDxqaGktc29jaWFsIHByb3ZpZGVyPVxcXCJnb29nbGVcXFwiPjwvamhpLXNvY2lhbD4gPGpoaS1zb2NpYWwgcHJvdmlkZXI9XFxcImZhY2Vib29rXFxcIj48L2poaS1zb2NpYWw+IDxqaGktc29jaWFsIHByb3ZpZGVyPVxcXCJ0d2l0dGVyXFxcIj48L2poaS1zb2NpYWw+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvbG9naW4vbG9naW4uY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvbG9naW4vbG9naW4uY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEFmdGVyVmlld0luaXQsIFJlbmRlcmVyLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2JBY3RpdmVNb2RhbCB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBKaGlMYW5ndWFnZVNlcnZpY2UsIEV2ZW50TWFuYWdlciB9IGZyb20gJ25nLWpoaXBzdGVyJztcblxuaW1wb3J0IHsgTG9naW5TZXJ2aWNlIH0gZnJvbSAnLi4vbG9naW4vbG9naW4uc2VydmljZSc7XG5pbXBvcnQgeyBTdGF0ZVN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aC9zdGF0ZS1zdG9yYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgU29jaWFsU2VydmljZSB9IGZyb20gJy4uL3NvY2lhbC9zb2NpYWwuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLWxvZ2luLW1vZGFsJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEpoaUxvZ2luTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICAgIGF1dGhlbnRpY2F0aW9uRXJyb3I6IGJvb2xlYW47XG4gICAgcGFzc3dvcmQ6IHN0cmluZztcbiAgICByZW1lbWJlck1lOiBib29sZWFuO1xuICAgIHVzZXJuYW1lOiBzdHJpbmc7XG4gICAgY3JlZGVudGlhbHM6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGV2ZW50TWFuYWdlcjogRXZlbnRNYW5hZ2VyLFxuICAgICAgICBwcml2YXRlIGxhbmd1YWdlU2VydmljZTogSmhpTGFuZ3VhZ2VTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGxvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHN0YXRlU3RvcmFnZVNlcnZpY2U6IFN0YXRlU3RvcmFnZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIsXG4gICAgICAgIHByaXZhdGUgc29jaWFsU2VydmljZTogU29jaWFsU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHVibGljIGFjdGl2ZU1vZGFsOiBOZ2JBY3RpdmVNb2RhbFxuICAgICkge1xuICAgICAgICB0aGlzLmNyZWRlbnRpYWxzID0ge307XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLmFkZExvY2F0aW9uKCdsb2dpbicpO1xuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1c2VybmFtZScpLCAnZm9jdXMnLCBbXSk7XG4gICAgfVxuXG4gICAgY2FuY2VsICgpIHtcbiAgICAgICAgdGhpcy5jcmVkZW50aWFscyA9IHtcbiAgICAgICAgICAgIHVzZXJuYW1lOiBudWxsLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IG51bGwsXG4gICAgICAgICAgICByZW1lbWJlck1lOiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25FcnJvciA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFjdGl2ZU1vZGFsLmRpc21pc3MoJ2NhbmNlbCcpO1xuICAgIH1cblxuICAgIGxvZ2luICgpIHtcbiAgICAgICAgdGhpcy5sb2dpblNlcnZpY2UubG9naW4oe1xuICAgICAgICAgICAgdXNlcm5hbWU6IHRoaXMudXNlcm5hbWUsXG4gICAgICAgICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29yZCxcbiAgICAgICAgICAgIHJlbWVtYmVyTWU6IHRoaXMucmVtZW1iZXJNZVxuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25FcnJvciA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVNb2RhbC5kaXNtaXNzKCdsb2dpbiBzdWNjZXNzJyk7XG4gICAgICAgICAgICBpZiAodGhpcy5yb3V0ZXIudXJsID09PSAnL3JlZ2lzdGVyJyB8fCAoL2FjdGl2YXRlLy50ZXN0KHRoaXMucm91dGVyLnVybCkpIHx8XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIudXJsID09PSAnL2ZpbmlzaFJlc2V0JyB8fCB0aGlzLnJvdXRlci51cmwgPT09ICcvcmVxdWVzdFJlc2V0Jykge1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnJ10pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmV2ZW50TWFuYWdlci5icm9hZGNhc3Qoe1xuICAgICAgICAgICAgICAgIG5hbWU6ICdhdXRoZW50aWNhdGlvblN1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdTZW5kaW5nIEF1dGhlbnRpY2F0aW9uIFN1Y2Nlc3MnXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gLy8gcHJldmlvdXNTdGF0ZSB3YXMgc2V0IGluIHRoZSBhdXRoRXhwaXJlZEludGVyY2VwdG9yIGJlZm9yZSBiZWluZyByZWRpcmVjdGVkIHRvIGxvZ2luIG1vZGFsLlxuICAgICAgICAgICAgLy8gLy8gc2luY2UgbG9naW4gaXMgc3VjY2Vzc2Z1bCwgZ28gdG8gc3RvcmVkIHByZXZpb3VzU3RhdGUgYW5kIGNsZWFyIHByZXZpb3VzU3RhdGVcbiAgICAgICAgICAgIGxldCBwcmV2aW91c1N0YXRlID0gdGhpcy5zdGF0ZVN0b3JhZ2VTZXJ2aWNlLmdldFByZXZpb3VzU3RhdGUoKTtcbiAgICAgICAgICAgIGlmIChwcmV2aW91c1N0YXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZVN0b3JhZ2VTZXJ2aWNlLnJlc2V0UHJldmlvdXNTdGF0ZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtwcmV2aW91c1N0YXRlLm5hbWVdLCB7IHF1ZXJ5UGFyYW1zOiAgcHJldmlvdXNTdGF0ZS5wYXJhbXMgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25FcnJvciA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyICgpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVNb2RhbC5kaXNtaXNzKCd0byBzdGF0ZSByZWdpc3RlcicpO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9yZWdpc3RlciddKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0UmVzZXRQYXNzd29yZCAoKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlTW9kYWwuZGlzbWlzcygndG8gc3RhdGUgcmVxdWVzdFJlc2V0Jyk7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3Jlc2V0JywgJ3JlcXVlc3QnXSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSmhpTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnbmctamhpcHN0ZXInO1xuXG5pbXBvcnQgeyBQcmluY2lwYWwgfSBmcm9tICcuLi9hdXRoL3ByaW5jaXBhbC5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhTZXJ2ZXJQcm92aWRlciB9IGZyb20gJy4uL2F1dGgvYXV0aC1qd3Quc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2dpblNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IgKFxuICAgICAgICBwcml2YXRlIGxhbmd1YWdlU2VydmljZTogSmhpTGFuZ3VhZ2VTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHByaW5jaXBhbDogUHJpbmNpcGFsLFxuICAgICAgICBwcml2YXRlIGF1dGhTZXJ2ZXJQcm92aWRlcjogQXV0aFNlcnZlclByb3ZpZGVyXG4gICAgKSB7fVxuXG4gICAgbG9naW4gKGNyZWRlbnRpYWxzLCBjYWxsYmFjaz8pIHtcbiAgICAgICAgbGV0IGNiID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hdXRoU2VydmVyUHJvdmlkZXIubG9naW4oY3JlZGVudGlhbHMpLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByaW5jaXBhbC5pZGVudGl0eSh0cnVlKS50aGVuKGFjY291bnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBBZnRlciB0aGUgbG9naW4gdGhlIGxhbmd1YWdlIHdpbGwgYmUgY2hhbmdlZCB0b1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgbGFuZ3VhZ2Ugc2VsZWN0ZWQgYnkgdGhlIHVzZXIgZHVyaW5nIGhpcyByZWdpc3RyYXRpb25cbiAgICAgICAgICAgICAgICAgICAgaWYgKGFjY291bnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFuZ3VhZ2VTZXJ2aWNlLmNoYW5nZUxhbmd1YWdlKGFjY291bnQubGFuZ0tleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2IoKTtcbiAgICAgICAgICAgIH0sIGVyciA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dvdXQoKTtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2IoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgbG9naW5XaXRoVG9rZW4oand0LCByZW1lbWJlck1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2ZXJQcm92aWRlci5sb2dpbldpdGhUb2tlbihqd3QsIHJlbWVtYmVyTWUpO1xuICAgIH1cblxuICAgIGxvZ291dCAoKSB7XG4gICAgICAgIHRoaXMuYXV0aFNlcnZlclByb3ZpZGVyLmxvZ291dCgpLnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLnByaW5jaXBhbC5hdXRoZW50aWNhdGUobnVsbCk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvbG9naW4vbG9naW4uc2VydmljZS50cyIsImltcG9ydCB7IE5nTW9kdWxlLCBTYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICduZzItdHJhbnNsYXRlJztcbmltcG9ydCB7IEFsZXJ0U2VydmljZSB9IGZyb20gJ25nLWpoaXBzdGVyJztcblxuaW1wb3J0IHtcbiAgICBTcHJpbmdCb290QW5ndWxhclNoYXJlZExpYnNNb2R1bGUsXG4gICAgSmhpTGFuZ3VhZ2VIZWxwZXIsXG4gICAgRmluZExhbmd1YWdlRnJvbUtleVBpcGUsXG4gICAgSmhpQWxlcnRDb21wb25lbnQsXG4gICAgSmhpQWxlcnRFcnJvckNvbXBvbmVudFxufSBmcm9tICcuLyc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFsZXJ0U2VydmljZVByb3ZpZGVyKHNhbml0aXplcjogU2FuaXRpemVyLCB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlKSB7XG4gICAgLy8gc2V0IGJlbG93IHRvIHRydWUgdG8gbWFrZSBhbGVydHMgbG9vayBsaWtlIHRvYXN0XG4gICAgbGV0IGlzVG9hc3QgPSBmYWxzZTtcbiAgICByZXR1cm4gbmV3IEFsZXJ0U2VydmljZShzYW5pdGl6ZXIsIGlzVG9hc3QsIHRyYW5zbGF0ZVNlcnZpY2UpO1xufVxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgU3ByaW5nQm9vdEFuZ3VsYXJTaGFyZWRMaWJzTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgRmluZExhbmd1YWdlRnJvbUtleVBpcGUsXG4gICAgICAgIEpoaUFsZXJ0Q29tcG9uZW50LFxuICAgICAgICBKaGlBbGVydEVycm9yQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgSmhpTGFuZ3VhZ2VIZWxwZXIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb3ZpZGU6IEFsZXJ0U2VydmljZSxcbiAgICAgICAgICAgIHVzZUZhY3Rvcnk6IGFsZXJ0U2VydmljZVByb3ZpZGVyLFxuICAgICAgICAgICAgZGVwczogW1Nhbml0aXplciwgVHJhbnNsYXRlU2VydmljZV1cbiAgICAgICAgfSxcbiAgICAgICAgVGl0bGVcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgU3ByaW5nQm9vdEFuZ3VsYXJTaGFyZWRMaWJzTW9kdWxlLFxuICAgICAgICBGaW5kTGFuZ3VhZ2VGcm9tS2V5UGlwZSxcbiAgICAgICAgSmhpQWxlcnRDb21wb25lbnQsXG4gICAgICAgIEpoaUFsZXJ0RXJyb3JDb21wb25lbnRcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFNwcmluZ0Jvb3RBbmd1bGFyU2hhcmVkQ29tbW9uTW9kdWxlIHt9XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9zaGFyZWQtY29tbW9uLm1vZHVsZS50cyIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ2JNb2R1bGUgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBOZ0poaXBzdGVyTW9kdWxlIH0gZnJvbSAnbmctamhpcHN0ZXInO1xuaW1wb3J0IHsgSW5maW5pdGVTY3JvbGxNb2R1bGUgfSBmcm9tICdhbmd1bGFyMi1pbmZpbml0ZS1zY3JvbGwnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmdiTW9kdWxlLmZvclJvb3QoKSxcbiAgICAgICAgTmdKaGlwc3Rlck1vZHVsZS5mb3JSb290KHtcbiAgICAgICAgICAgIGkxOG5FbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgZGVmYXVsdEkxOG5MYW5nOiAnZnInXG4gICAgICAgIH0pLFxuICAgICAgICBJbmZpbml0ZVNjcm9sbE1vZHVsZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgSHR0cE1vZHVsZSxcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBOZ2JNb2R1bGUsXG4gICAgICAgIE5nSmhpcHN0ZXJNb2R1bGUsXG4gICAgICAgIEluZmluaXRlU2Nyb2xsTW9kdWxlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTcHJpbmdCb290QW5ndWxhclNoYXJlZExpYnNNb2R1bGUge31cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL3NoYXJlZC1saWJzLm1vZHVsZS50cyIsImltcG9ydCB7IE5nTW9kdWxlLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IENvb2tpZVNlcnZpY2UgfSBmcm9tICdhbmd1bGFyMi1jb29raWUvc2VydmljZXMvY29va2llcy5zZXJ2aWNlJztcbmltcG9ydCB7XG4gICAgU3ByaW5nQm9vdEFuZ3VsYXJTaGFyZWRMaWJzTW9kdWxlLFxuICAgIFNwcmluZ0Jvb3RBbmd1bGFyU2hhcmVkQ29tbW9uTW9kdWxlLFxuICAgIENTUkZTZXJ2aWNlLFxuICAgIEF1dGhTZXJ2aWNlLFxuICAgIEF1dGhTZXJ2ZXJQcm92aWRlcixcbiAgICBBY2NvdW50U2VydmljZSxcbiAgICBVc2VyU2VydmljZSxcbiAgICBTdGF0ZVN0b3JhZ2VTZXJ2aWNlLFxuICAgIExvZ2luU2VydmljZSxcbiAgICBMb2dpbk1vZGFsU2VydmljZSxcbiAgICBQcmluY2lwYWwsXG4gICAgSGFzQW55QXV0aG9yaXR5RGlyZWN0aXZlLFxuICAgIEpoaVNvY2lhbENvbXBvbmVudCxcbiAgICBTb2NpYWxTZXJ2aWNlLFxuICAgIEpoaUxvZ2luTW9kYWxDb21wb25lbnRcbn0gZnJvbSAnLi8nO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgU3ByaW5nQm9vdEFuZ3VsYXJTaGFyZWRMaWJzTW9kdWxlLFxuICAgICAgICBTcHJpbmdCb290QW5ndWxhclNoYXJlZENvbW1vbk1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEpoaVNvY2lhbENvbXBvbmVudCxcbiAgICAgICAgSmhpTG9naW5Nb2RhbENvbXBvbmVudCxcbiAgICAgICAgSGFzQW55QXV0aG9yaXR5RGlyZWN0aXZlXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQ29va2llU2VydmljZSxcbiAgICAgICAgTG9naW5TZXJ2aWNlLFxuICAgICAgICBMb2dpbk1vZGFsU2VydmljZSxcbiAgICAgICAgQWNjb3VudFNlcnZpY2UsXG4gICAgICAgIFN0YXRlU3RvcmFnZVNlcnZpY2UsXG4gICAgICAgIFByaW5jaXBhbCxcbiAgICAgICAgQ1NSRlNlcnZpY2UsXG4gICAgICAgIEF1dGhTZXJ2ZXJQcm92aWRlcixcbiAgICAgICAgU29jaWFsU2VydmljZSxcbiAgICAgICAgQXV0aFNlcnZpY2UsXG4gICAgICAgIFVzZXJTZXJ2aWNlLFxuICAgICAgICBEYXRlUGlwZVxuICAgIF0sXG4gICAgZW50cnlDb21wb25lbnRzOiBbSmhpTG9naW5Nb2RhbENvbXBvbmVudF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBTcHJpbmdCb290QW5ndWxhclNoYXJlZENvbW1vbk1vZHVsZSxcbiAgICAgICAgSmhpU29jaWFsQ29tcG9uZW50LFxuICAgICAgICBKaGlMb2dpbk1vZGFsQ29tcG9uZW50LFxuICAgICAgICBIYXNBbnlBdXRob3JpdHlEaXJlY3RpdmUsXG4gICAgICAgIERhdGVQaXBlXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQV1cblxufSlcbmV4cG9ydCBjbGFzcyBTcHJpbmdCb290QW5ndWxhclNoYXJlZE1vZHVsZSB7fVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvc2hhcmVkLm1vZHVsZS50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8Zm9ybSBuZ05vRm9ybSBhY3Rpb249XFxcInt7IHByb3ZpZGVyVVJMIH19XFxcIiBtZXRob2Q9XFxcIlBPU1RcXFwiPiA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tYmxvY2sgamgtYnRuLXNvY2lhbCBqaC1idG4te3sgcHJvdmlkZXIgfX1cXFwiPiA8c3BhbiBqaGlUcmFuc2xhdGU9XFxcInNvY2lhbC5idG5MYWJlbFxcXCIgdHJhbnNsYXRlVmFsdWVzPVxcXCJ7IGxhYmVsOiAne3tsYWJlbH19JyB9XFxcIj5TaWduIGluIHdpdGgge3sgbGFiZWwgfX08L3NwYW4+IDwvYnV0dG9uPiA8aW5wdXQgbmFtZT1cXFwic2NvcGVcXFwiIHR5cGU9XFxcImhpZGRlblxcXCIgdmFsdWU9XFxcInt7wqBwcm92aWRlclNldHRpbmcgfX1cXFwiLz4gPGlucHV0IG5hbWU9XFxcIl9jc3JmXFxcIiB0eXBlPVxcXCJoaWRkZW5cXFwiIHZhbHVlPVxcXCJ7e8KgY3NyZiB9fVxcXCIvPiA8L2Zvcm0+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvc29jaWFsL3NvY2lhbC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9zb2NpYWwvc29jaWFsLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU29jaWFsU2VydmljZSB9IGZyb20gJy4vc29jaWFsLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ1NSRlNlcnZpY2UgfSBmcm9tICcuLi9hdXRoL2NzcmYuc2VydmljZSc7XG5pbXBvcnQgeyBKaGlMYW5ndWFnZVNlcnZpY2UgfSBmcm9tICduZy1qaGlwc3Rlcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnamhpLXNvY2lhbCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NvY2lhbC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSmhpU29jaWFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBASW5wdXQoKSBwcm92aWRlcjogc3RyaW5nO1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgcHJvdmlkZXJTZXR0aW5nOiBzdHJpbmc7XG4gICAgcHJvdmlkZXJVUkw6IHN0cmluZztcbiAgICBjc3JmOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvciAoXG4gICAgICAgIHByaXZhdGUgbGFuZ3VhZ2VTZXJ2aWNlOiBKaGlMYW5ndWFnZVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgY3NyZlNlcnZpY2U6IENTUkZTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHNvY2lhbFNlcnZpY2U6IFNvY2lhbFNlcnZpY2VcbiAgICApIHt9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5sYW5ndWFnZVNlcnZpY2Uuc2V0TG9jYXRpb25zKFsnc29jaWFsJywgJ3JlZ2lzdGVyJywgJ2xvZ2luJywgJ2hvbWUnXSk7XG4gICAgICAgIHRoaXMubGFiZWwgPSB0aGlzLnByb3ZpZGVyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5wcm92aWRlci5zbGljZSgxKTtcbiAgICAgICAgdGhpcy5wcm92aWRlclNldHRpbmcgPSB0aGlzLnNvY2lhbFNlcnZpY2UuZ2V0UHJvdmlkZXJTZXR0aW5nKHRoaXMucHJvdmlkZXIpO1xuICAgICAgICB0aGlzLnByb3ZpZGVyVVJMID0gdGhpcy5zb2NpYWxTZXJ2aWNlLmdldFByb3ZpZGVyVVJMKHRoaXMucHJvdmlkZXIpO1xuICAgICAgICB0aGlzLmNzcmYgPSB0aGlzLmNzcmZTZXJ2aWNlLmdldENTUkYoKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9zb2NpYWwvc29jaWFsLmNvbXBvbmVudC50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNvY2lhbFNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IgKCkge31cblxuICAgIGdldFByb3ZpZGVyU2V0dGluZyAocHJvdmlkZXIpIHtcbiAgICAgICAgc3dpdGNoIChwcm92aWRlcikge1xuICAgICAgICAgICAgY2FzZSAnZ29vZ2xlJzogcmV0dXJuICdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL3VzZXJpbmZvLnByb2ZpbGUgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC91c2VyaW5mby5lbWFpbCc7XG4gICAgICAgICAgICBjYXNlICdmYWNlYm9vayc6IHJldHVybiAncHVibGljX3Byb2ZpbGUsZW1haWwnO1xuICAgICAgICAgICAgY2FzZSAndHdpdHRlcic6IHJldHVybiAnJztcbiAgICAgICAgICAgIC8vIGpoaXBzdGVyLW5lZWRsZS1hZGQtc29jaWFsLWJ1dHRvblxuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuICdQcm92aWRlciBzZXR0aW5nIG5vdCBkZWZpbmVkJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFByb3ZpZGVyVVJMIChwcm92aWRlcikge1xuICAgICAgICByZXR1cm4gJ3NpZ25pbi8nICsgcHJvdmlkZXI7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC9zb2NpYWwvc29jaWFsLnNlcnZpY2UudHMiLCJleHBvcnQgY2xhc3MgQWNjb3VudCB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBhY3RpdmF0ZWQ6IGJvb2xlYW4sXG4gICAgICAgIHB1YmxpYyBhdXRob3JpdGllczogc3RyaW5nW10sXG4gICAgICAgIHB1YmxpYyBlbWFpbDogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgZmlyc3ROYW1lOiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyBsYW5nS2V5OiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyBsYXN0TmFtZTogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgbG9naW46IHN0cmluZyxcbiAgICAgICAgcHVibGljIGltYWdlVXJsOiBzdHJpbmdcbiAgICApIHsgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL21haW4vd2ViYXBwL2FwcC9zaGFyZWQvdXNlci9hY2NvdW50Lm1vZGVsLnRzIiwiZXhwb3J0IGNsYXNzIFVzZXIge1xuICAgIHB1YmxpYyBpZD86IGFueTtcbiAgICBwdWJsaWMgbG9naW4/OiBzdHJpbmc7XG4gICAgcHVibGljIGZpcnN0TmFtZT86IHN0cmluZztcbiAgICBwdWJsaWMgbGFzdE5hbWU/OiBzdHJpbmc7XG4gICAgcHVibGljIGVtYWlsPzogc3RyaW5nO1xuICAgIHB1YmxpYyBhY3RpdmF0ZWQ/OiBCb29sZWFuO1xuICAgIHB1YmxpYyBsYW5nS2V5Pzogc3RyaW5nO1xuICAgIHB1YmxpYyBhdXRob3JpdGllcz86IGFueVtdO1xuICAgIHB1YmxpYyBjcmVhdGVkQnk/OiBzdHJpbmc7XG4gICAgcHVibGljIGNyZWF0ZWREYXRlPzogRGF0ZTtcbiAgICBwdWJsaWMgbGFzdE1vZGlmaWVkQnk/OiBzdHJpbmc7XG4gICAgcHVibGljIGxhc3RNb2RpZmllZERhdGU/OiBEYXRlO1xuICAgIHB1YmxpYyBwYXNzd29yZD86IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgaWQ/OiBhbnksXG4gICAgICAgIGxvZ2luPzogc3RyaW5nLFxuICAgICAgICBmaXJzdE5hbWU/OiBzdHJpbmcsXG4gICAgICAgIGxhc3ROYW1lPzogc3RyaW5nLFxuICAgICAgICBlbWFpbD86IHN0cmluZyxcbiAgICAgICAgYWN0aXZhdGVkPzogQm9vbGVhbixcbiAgICAgICAgbGFuZ0tleT86IHN0cmluZyxcbiAgICAgICAgYXV0aG9yaXRpZXM/OiBhbnlbXSxcbiAgICAgICAgY3JlYXRlZEJ5Pzogc3RyaW5nLFxuICAgICAgICBjcmVhdGVkRGF0ZT86IERhdGUsXG4gICAgICAgIGxhc3RNb2RpZmllZEJ5Pzogc3RyaW5nLFxuICAgICAgICBsYXN0TW9kaWZpZWREYXRlPzogRGF0ZSxcbiAgICAgICAgcGFzc3dvcmQ/OiBzdHJpbmdcbiAgICApIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkID8gaWQgOiBudWxsO1xuICAgICAgICB0aGlzLmxvZ2luID0gbG9naW4gPyBsb2dpbiA6IG51bGw7XG4gICAgICAgIHRoaXMuZmlyc3ROYW1lID0gZmlyc3ROYW1lID8gZmlyc3ROYW1lIDogbnVsbDtcbiAgICAgICAgdGhpcy5sYXN0TmFtZSA9IGxhc3ROYW1lID8gbGFzdE5hbWUgOiBudWxsO1xuICAgICAgICB0aGlzLmVtYWlsID0gZW1haWwgPyBlbWFpbCA6IG51bGw7XG4gICAgICAgIHRoaXMuYWN0aXZhdGVkID0gYWN0aXZhdGVkID8gYWN0aXZhdGVkIDogZmFsc2U7XG4gICAgICAgIHRoaXMubGFuZ0tleSA9IGxhbmdLZXkgPyBsYW5nS2V5IDogbnVsbDtcbiAgICAgICAgdGhpcy5hdXRob3JpdGllcyA9IGF1dGhvcml0aWVzID8gYXV0aG9yaXRpZXMgOiBudWxsO1xuICAgICAgICB0aGlzLmNyZWF0ZWRCeSA9IGNyZWF0ZWRCeSA/IGNyZWF0ZWRCeSA6IG51bGw7XG4gICAgICAgIHRoaXMuY3JlYXRlZERhdGUgPSBjcmVhdGVkRGF0ZSA/IGNyZWF0ZWREYXRlIDogbnVsbDtcbiAgICAgICAgdGhpcy5sYXN0TW9kaWZpZWRCeSA9IGxhc3RNb2RpZmllZEJ5ID8gbGFzdE1vZGlmaWVkQnkgOiBudWxsO1xuICAgICAgICB0aGlzLmxhc3RNb2RpZmllZERhdGUgPSBsYXN0TW9kaWZpZWREYXRlID8gbGFzdE1vZGlmaWVkRGF0ZSA6IG51bGw7XG4gICAgICAgIHRoaXMucGFzc3dvcmQgPSBwYXNzd29yZCA/IHBhc3N3b3JkIDogbnVsbDtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvbWFpbi93ZWJhcHAvYXBwL3NoYXJlZC91c2VyL3VzZXIubW9kZWwudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSwgVVJMU2VhcmNoUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCc7XG5cbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuL3VzZXIubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xuICAgIHByaXZhdGUgcmVzb3VyY2VVcmwgPSAnYXBpL3VzZXJzJztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkgeyB9XG5cbiAgICBjcmVhdGUodXNlcjogVXNlcik6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMucmVzb3VyY2VVcmwsIHVzZXIpO1xuICAgIH1cblxuICAgIHVwZGF0ZSh1c2VyOiBVc2VyKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh0aGlzLnJlc291cmNlVXJsLCB1c2VyKTtcbiAgICB9XG5cbiAgICBmaW5kKGxvZ2luOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFVzZXI+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy5yZXNvdXJjZVVybH0vJHtsb2dpbn1gKS5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpO1xuICAgIH1cblxuICAgIHF1ZXJ5KHJlcT86IGFueSk6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcbiAgICAgICAgbGV0IHBhcmFtczogVVJMU2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICAgICAgICBpZiAocmVxKSB7XG4gICAgICAgICAgICBwYXJhbXMuc2V0KCdwYWdlJywgcmVxLnBhZ2UpO1xuICAgICAgICAgICAgcGFyYW1zLnNldCgnc2l6ZScsIHJlcS5zaXplKTtcbiAgICAgICAgICAgIGlmIChyZXEuc29ydCkge1xuICAgICAgICAgICAgICAgIHBhcmFtcy5wYXJhbXNNYXAuc2V0KCdzb3J0JywgcmVxLnNvcnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBzZWFyY2g6IHBhcmFtc1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMucmVzb3VyY2VVcmwsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGRlbGV0ZShsb2dpbjogc3RyaW5nKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZShgJHt0aGlzLnJlc291cmNlVXJsfS8ke2xvZ2lufWApO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9tYWluL3dlYmFwcC9hcHAvc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiY2E4NTRlNmQwNzg1YmE0YjlkNzE1MDQ5YzBiZGJjYjMucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvY29udGVudC9pbWFnZXMvaGlwc3Rlci5wbmdcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2NvbnRlbnQvaW1hZ2VzL2hpcHN0ZXIucG5nXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjFjZDNhMWQ3ODJlODViYTM3Njc3YzFhMjA5OWJjMDAyLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2NvbnRlbnQvaW1hZ2VzL2hpcHN0ZXIyeC5wbmdcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2NvbnRlbnQvaW1hZ2VzL2hpcHN0ZXIyeC5wbmdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYTMwZGViMjZiNGViMTUyMTQzMzAyMWUzMjZjYmNjMmMucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvY29udGVudC9pbWFnZXMvbG9nby1qaGlwc3Rlci5wbmdcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2NvbnRlbnQvaW1hZ2VzL2xvZ28tamhpcHN0ZXIucG5nXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oNCkpKDApO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb3JlL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXyg0KSkoNDQ1KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvbmctamhpcHN0ZXIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvclxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDQpKSg0NDYpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9uZzItd2Vic3RvcmFnZS9kaXN0L2FwcC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDQpKSgxKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9PYnNlcnZhYmxlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oNCkpKDEwMyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvclxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXyg0KSkoMTMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jb21tb24vaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvclxuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXyg0KSkoNDQyKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItY29va2llL2NvcmUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvclxuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXyg0KSkoMjQ4KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9SeC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDQpKSgyNSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2Zvcm1zL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oNCkpKDQzOSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDQpKSg0NDMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi1pbmZpbml0ZS1zY3JvbGwvYW5ndWxhcjItaW5maW5pdGUtc2Nyb2xsLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oNCkpKDQ0Nyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vc3JjL21haW4vd2ViYXBwL2FwcC92ZW5kb3IudHMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvclxuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXyg0KSkoNTYzKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItY29va2llL3NlcnZpY2VzL2Nvb2tpZXMuc2VydmljZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDQpKSg5KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcnhqcy9TdWJqZWN0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oNCkpKDQ0MCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL3JvdXRlci9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oNCkpKDEwMik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2h0dHAvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvclxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDQpKSg0NDEpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9AbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcC9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oNCkpKDIzMCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL25nMi10cmFuc2xhdGUvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvclxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9