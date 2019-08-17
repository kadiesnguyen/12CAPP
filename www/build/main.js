webpackJsonp([0],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forgotpassword_forgotpassword__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SigninPage = /** @class */ (function () {
    function SigninPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SigninPage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    SigninPage.prototype.forgotpassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */]);
    };
    SigninPage.prototype.tabs = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
    };
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signin',template:/*ion-inline-start:"/Users/kadiesvu/12C APP/src/pages/signin/signin.html"*/'<ion-header class="bg-transparent">\n    <ion-navbar>\n        <ion-title><span text-uppercase class="center">{{\'sign_in\' | translate}}</span><span class="end" (click)="tabs()">{{\'skip\' | translate}}</span></ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-color">\n    <div class="banner center_img">\n        <img src="assets/imgs/banner1.png" class="crop_img">\n        <div class="logo">\n            <img src="assets/imgs/logo.png">\n        </div>\n    </div>\n    <div class="form">\n        <ion-list no-lines>\n            <ion-item>\n                <div class="icon_box" item-start>\n                    <img src="assets/imgs/ic_phone.png">\n                </div>\n                <ion-input type="text" placeholder="{{\'phone_number\' | translate}}"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <div class="icon_box" item-start>\n                    <img src="assets/imgs/ic_password.png">\n                </div>\n                <ion-input type="password" placeholder="{{\'password\' | translate}}"></ion-input>\n                <h3 item-end (click)="forgotpassword()">{{\'forgot\' | translate}}</h3>\n            </ion-item>\n        </ion-list>\n        <button text-uppercase ion-button block class="btn" (click)="tabs()"> {{\'sign_in\' | translate}}</button>\n    </div>\n</ion-content>\n<ion-footer no-border>\n    <p text-center no-margin>{{\'not_registered_yet\' | translate}}</p>\n    <button text-uppercase ion-button block (click)="signup()">{{\'Đăng ký ngay\' | translate}}</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/kadiesvu/12C APP/src/pages/signin/signin.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhonerechargePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__promocode_promocode__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PhonerechargePage = /** @class */ (function () {
    function PhonerechargePage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    PhonerechargePage.prototype.promocode = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__promocode_promocode__["a" /* PromocodePage */]);
        modal.present();
    };
    PhonerechargePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-phonerecharge',template:/*ion-inline-start:"/Users/kadiesvu/12C APP/src/pages/phonerecharge/phonerecharge.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{\'phone_recharge\' | translate}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div class="form">\n        <ion-list no-lines>\n            <ion-item>\n                <p item-start text-end>{{\'prepaid\' | translate}}</p>\n                <ion-toggle checked="false"></ion-toggle>\n                <p item-end text-start>{{\'postpaid\' | translate}}</p>\n            </ion-item>\n            <ion-item>\n                <ion-input type="text" placeholder="{{\'enter_phone_number\' | translate}}"></ion-input>\n                <ion-icon class="material-icons" item-end>account_box</ion-icon>\n            </ion-item>\n            <ion-item>\n                <!--                <ion-input type="text" placeholder="{{\'select_operator\' | translate}}"></ion-input>-->\n                <ion-label>{{\'select_operator\' | translate}}</ion-label>\n                <ion-select [(ngModel)]="select_operator">\n                    <ion-option value="vietel">Vietel</ion-option>\n                    <ion-option value="mobiphone">Mobiphone </ion-option>\n                    <ion-option value="Vinaphone">Vinaphone</ion-option>\n                </ion-select>\n                <ion-icon class="material-icons" item-end>keyboard_arrow_down</ion-icon>\n            </ion-item>\n            <ion-item>\n                <ion-input type="text" placeholder="{{\'amount\' | translate}}"></ion-input>\n                <h4 item-end>{{\'see_plans\' | translate}}</h4>\n            </ion-item>\n\n        </ion-list>\n        <button ion-button block class="btn"> {{\'pay_via_quickpay\' | translate}}</button>\n    </div>\n\n    <div class="banner">\n        <div class="banner_img">\n            <img src="assets/imgs/banner3.png">\n        </div>\n        <div class="banner_text" text-right>\n            <h3 text-uppercase>Nạp tièn điện thoại</h3>\n            <h2>Chiết khấu cao</h2>\n            <h4 text-uppercase>{{\'shop_now\' | translate}}</h4>\n        </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/kadiesvu/12C APP/src/pages/phonerecharge/phonerecharge.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]])
    ], PhonerechargePage);
    return PhonerechargePage;
}());

//# sourceMappingURL=phonerecharge.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromocodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PromocodePage = /** @class */ (function () {
    function PromocodePage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    PromocodePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    PromocodePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-promocode',template:/*ion-inline-start:"/Users/kadiesvu/12C APP/src/pages/promocode/promocode.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <ion-icon class="material-icons" (click)="dismiss()">clear</ion-icon>\n        </ion-title>\n    </ion-navbar>\n    <div class="form">\n        <ion-list no-lines>\n            <ion-item>\n                <ion-input type="text" placeholder="{{\'enter_promocode\' | translate}}"></ion-input>\n            </ion-item>\n            <button ion-button block class="btn" (click)="dismiss()"> {{\'apply\' | translate}}</button>\n        </ion-list>\n    </div>\n</ion-header>\n\n<ion-content class="bg-color">\n    <ion-list no-lines>\n        <h3>{{\'offers\' | translate}}</h3>\n        <ion-item>\n            <h2>\n                Freerecharge50\n            </h2>\n            <p>Recharge with $5.00 and get 10% instant cashback in 24 hours.</p>\n            <p>{{\'terms_conditions_apply\' | translate}}</p>\n        </ion-item>\n        <ion-item>\n            <h2>\n                Next5Offer\n            </h2>\n            <p>Recharge with $5.00 and get 10% instant cashback in 24 hours.</p>\n            <p>{{\'terms_conditions_apply\' | translate}}</p>\n        </ion-item>\n        <ion-item>\n            <h2>\n                10On10bonanza\n            </h2>\n            <p>Recharge with $5.00 and get 10% instant cashback in 24 hours.</p>\n            <p>{{\'terms_conditions_apply\' | translate}}</p>\n        </ion-item>\n        <ion-item>\n            <h2>\n                winter100\n            </h2>\n            <p>Recharge with $5.00 and get 10% instant cashback in 24 hours.</p>\n            <p>{{\'terms_conditions_apply\' | translate}}</p>\n        </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/kadiesvu/12C APP/src/pages/promocode/promocode.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ViewController */]])
    ], PromocodePage);
    return PromocodePage;
}());

//# sourceMappingURL=promocode.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Book_ticketPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__paymentsuccessful_paymentsuccessful__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Book_ticketPage = /** @class */ (function () {
    function Book_ticketPage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.book_ticket = "train_ticket";
        this.from = "brookly";
        this.to = "smithtowm";
        this.flights_from = "new_york";
        this.flights_to = "toronto";
        this.claas = "economy";
    }
    Book_ticketPage.prototype.paymentsuccessful = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__paymentsuccessful_paymentsuccessful__["a" /* PaymentsuccessfulPage */]);
        modal.present();
    };
    Book_ticketPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-book_ticket',template:/*ion-inline-start:"/Users/kadiesvu/12C APP/src/pages/book_ticket/book_ticket.html"*/'<ion-header class="header_bg bg-transparent">\n    <ion-navbar>\n        <ion-title>{{\'book_a_ticket\' | translate}}\n        </ion-title>\n    </ion-navbar>\n    <ion-segment [(ngModel)]="book_ticket">\n        <ion-segment-button value="train_ticket">\n            <img src="assets/imgs/ic_train.png">\n            <p>{{\'train_ticket\' | translate}} </p>\n        </ion-segment-button>\n        <ion-segment-button value="flights">\n            <img src="assets/imgs/ic_flights.png">\n            <p>{{\'flights\' | translate}} </p>\n        </ion-segment-button>\n        <ion-segment-button value="bus">\n            <img src="assets/imgs/ic_bus.png">\n            <p>{{\'bus\' | translate}} </p>\n        </ion-segment-button>\n    </ion-segment>\n</ion-header>\n\n<ion-content>\n    <div class="tab_container" [ngSwitch]="book_ticket">\n        <div class="form" *ngSwitchCase="\'train_ticket\'">\n            <ion-list no-lines>\n                <ion-item>\n                    <ion-label>{{\'from\' | translate}}</ion-label>\n                    <ion-select [(ngModel)]="from">\n                        <ion-option value="brookly">Brooklyn</ion-option>\n                        <ion-option value="smithtowm">Smithtowm</ion-option>\n                    </ion-select>\n                    <ion-icon class="material-icons" item-end>keyboard_arrow_down</ion-icon>\n                </ion-item>\n\n                <ion-item>\n                    <ion-label>{{\'to\' | translate}}</ion-label>\n                    <ion-select [(ngModel)]="to">\n                        <ion-option value="brookly">Brooklyn</ion-option>\n                        <ion-option value="smithtowm">Smithtowm</ion-option>\n                    </ion-select>\n                    <ion-icon class="material-icons" item-end>keyboard_arrow_down</ion-icon>\n                </ion-item>\n\n                <ion-item>\n                    <ion-icon class="material-icons" item-start>today</ion-icon>\n                    <ion-input type="text" placeholder="{{\'depart_date\' | translate}}"></ion-input>\n                    <h4 item-end><span class="active"> {{\'today\' | translate}}</span> | <span>{{\'tommarrow\' | translate}}</span></h4>\n                </ion-item>\n            </ion-list>\n\n            <ion-row class="type_of_sheet">\n                <ion-col col-3>\n                    <div class="sheets" text-center>\n                        <div class="img_box">\n                            <img src="assets/imgs/ac.png">\n                        </div>\n                        <p>AC</p>\n                    </div>\n                </ion-col>\n                <ion-col col-3>\n                    <div class="sheets" text-center>\n                        <div class="img_box">\n                            <img src="assets/imgs/non-sc.png">\n                        </div>\n                        <p>Non AC</p>\n                    </div>\n                </ion-col>\n                <ion-col col-3>\n                    <div class="sheets" text-center>\n                        <div class="img_box">\n                            <img src="assets/imgs/seater.png">\n                        </div>\n                        <p>Seater</p>\n                    </div>\n                </ion-col>\n                <ion-col col-3 class="active">\n                    <div class="sheets" text-center>\n                        <div class="img_box">\n                            <img src="assets/imgs/sleeper.png">\n                        </div>\n                        <p>Sleeper</p>\n                    </div>\n                </ion-col>\n            </ion-row>\n        </div>\n\n        <div class="form" *ngSwitchCase="\'flights\'">\n            <ion-list no-lines>\n                <ion-item>\n                    <p item-start text-end>{{\'one_way\' | translate}}</p>\n                    <ion-toggle checked="false"></ion-toggle>\n                    <p item-end text-start>{{\'round_trip\' | translate}}</p>\n                </ion-item>\n\n                <ion-item>\n                    <ion-label>{{\'from\' | translate}}</ion-label>\n                    <ion-select [(ngModel)]="flights_from">\n                        <ion-option value="new_york">New York (JFK)</ion-option>\n                        <ion-option value="toronto">Toronto (YTZ)</ion-option>\n                    </ion-select>\n                    <ion-icon class="material-icons" item-end>keyboard_arrow_down</ion-icon>\n                </ion-item>\n\n                <ion-item>\n                    <ion-label>{{\'to\' | translate}}</ion-label>\n                    <ion-select [(ngModel)]="flights_to">\n                        <ion-option value="new_york">New York (JFK)</ion-option>\n                        <ion-option value="toronto">Toronto (YTZ)</ion-option>\n                    </ion-select>\n                    <ion-icon class="material-icons" item-end>keyboard_arrow_down</ion-icon>\n                </ion-item>\n\n                <ion-row>\n                    <ion-col col-6>\n                        <ion-item>\n                            <ion-icon class="material-icons" item-start>today</ion-icon>\n                            <ion-input type="text" placeholder="{{\'depart_date\' | translate}}"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col col-6>\n                        <ion-item>\n                            <ion-icon class="material-icons" item-start>today</ion-icon>\n                            <ion-input type="text" placeholder="{{\'return_date\' | translate}}"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col col-4>\n                        <ion-item>\n                            <ion-input type="text" placeholder="{{\'abult\' | translate}}"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col col-4>\n                        <ion-item>\n                            <ion-input type="text" placeholder="{{\'child\' | translate}}"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col col-4>\n                        <ion-item>\n                            <ion-input type="text" placeholder="{{\'infant\' | translate}}"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n\n                <ion-item style="margin-top: 0;">\n                    <ion-label>{{\'class\' | translate}}</ion-label>\n                    <ion-select [(ngModel)]="claas">\n                        <ion-option value="business">Business</ion-option>\n                        <ion-option value="economy">Economy</ion-option>\n                    </ion-select>\n                    <ion-icon class="material-icons" item-end>keyboard_arrow_down</ion-icon>\n                </ion-item>\n            </ion-list>\n        </div>\n\n        <div class="form" *ngSwitchCase="\'bus\'">\n            <ion-list no-lines>\n                <ion-item>\n                    <ion-label>{{\'from\' | translate}}</ion-label>\n                    <ion-select [(ngModel)]="from">\n                        <ion-option value="brookly">Brooklyn</ion-option>\n                        <ion-option value="smithtowm">Smithtowm</ion-option>\n                    </ion-select>\n                    <ion-icon class="material-icons" item-end>keyboard_arrow_down</ion-icon>\n                </ion-item>\n\n                <ion-item>\n                    <ion-label>{{\'to\' | translate}}</ion-label>\n                    <ion-select [(ngModel)]="to">\n                        <ion-option value="brookly">Brooklyn</ion-option>\n                        <ion-option value="smithtowm">Smithtowm</ion-option>\n                    </ion-select>\n                    <ion-icon class="material-icons" item-end>keyboard_arrow_down</ion-icon>\n                </ion-item>\n\n                <ion-item>\n                    <ion-icon class="material-icons" item-start>today</ion-icon>\n                    <ion-input type="text" placeholder="{{\'depart_date\' | translate}}"></ion-input>\n                    <h4 item-end><span class="active"> {{\'today\' | translate}}</span> | <span>{{\'tommarrow\' | translate}}</span></h4>\n                </ion-item>\n\n                <ion-row>\n                    <ion-col col-4>\n                        <ion-item>\n                            <ion-input type="text" placeholder="{{\'abult\' | translate}}"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col col-4>\n                        <ion-item>\n                            <ion-input type="text" placeholder="{{\'child\' | translate}}"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col col-4>\n                        <ion-item>\n                            <ion-input type="text" placeholder="{{\'infant\' | translate}}"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n            </ion-list>\n\n            <ion-row class="type_of_sheet">\n                <ion-col col-3>\n                    <div class="sheets" text-center>\n                        <div class="img_box">\n                            <img src="assets/imgs/ac.png">\n                        </div>\n                        <p>AC</p>\n                    </div>\n                </ion-col>\n                <ion-col col-3>\n                    <div class="sheets" text-center>\n                        <div class="img_box">\n                            <img src="assets/imgs/non-sc.png">\n                        </div>\n                        <p>Non AC</p>\n                    </div>\n                </ion-col>\n                <ion-col col-3>\n                    <div class="sheets" text-center>\n                        <div class="img_box">\n                            <img src="assets/imgs/seater.png">\n                        </div>\n                        <p>Seater</p>\n                    </div>\n                </ion-col>\n                <ion-col col-3 class="active">\n                    <div class="sheets" text-center>\n                        <div class="img_box">\n                            <img src="assets/imgs/sleeper.png">\n                        </div>\n                        <p>Sleeper</p>\n                    </div>\n                </ion-col>\n            </ion-row>\n        </div>\n    </div>\n</ion-content>\n<ion-footer no-border>\n    <button ion-button block class="btn" *ngIf="book_ticket == \'train_ticket\'" (click)="paymentsuccessful()"> {{\'search_trains\' | translate}}</button>\n    <button ion-button block class="btn" *ngIf="book_ticket == \'flights\'"> {{\'search_flights\' | translate}}</button>\n    <button ion-button block class="btn" *ngIf="book_ticket == \'bus\'"> {{\'search_buses\' | translate}}</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/kadiesvu/12C APP/src/pages/book_ticket/book_ticket.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]])
    ], Book_ticketPage);
    return Book_ticketPage;
}());

//# sourceMappingURL=book_ticket.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pay_or_sendPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Pay_or_sendPage = /** @class */ (function () {
    function Pay_or_sendPage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    Pay_or_sendPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    Pay_or_sendPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pay_or_send',template:/*ion-inline-start:"/Users/kadiesvu/12C APP/src/pages/pay_or_send/pay_or_send.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title></ion-title>\n    </ion-navbar>\n\n    <div class="form">\n        <ion-list no-lines>\n            <ion-item>\n                <ion-input type="text" placeholder="{{\'enter_phone_number\' | translate}}"></ion-input>\n                <h3 item-end>\n                    <ion-icon class="material-icons">account_box </ion-icon>\n                </h3>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-header>\n\n<ion-content>\n    <div class="qr_code_scanner_container">\n        <img src="assets/imgs/qr_scan.png" class="qr_scan">\n        <h2 text-center>{{\'scan_qr_code\' | translate}}</h2>\n        <div class="scanner">\n            <div class="scan_line"></div>\n            <img src="assets/imgs/qr_code_scanner.png">\n        </div>\n    </div>\n</ion-content>\n<ion-footer no-border text-center>\n    <ion-icon class="material-icons">flash_off</ion-icon>\n    <ion-icon class="material-icons">photo</ion-icon>\n</ion-footer>\n'/*ion-inline-end:"/Users/kadiesvu/12C APP/src/pages/pay_or_send/pay_or_send.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ViewController */]])
    ], Pay_or_sendPage);
    return Pay_or_sendPage;
}());

//# sourceMappingURL=pay_or_send.js.map

/***/ }),

/***/ 120:
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
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 163:
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
webpackEmptyAsyncContext.id = 163;

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verification_verification__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SignupPage.prototype.verification = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__verification_verification__["a" /* VerificationPage */]);
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/kadiesvu/12C APP/src/pages/signup/signup.html"*/'<ion-header class="bg-transparent">\n    <ion-navbar>\n        <ion-title><span text-uppercase class="center">{{\'sign_up\' | translate}}</span></ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-color">\n    <div class="banner center_img">\n        <ion-slides pager autoplay=3000>\n            <ion-slide>\n                <div class="img_box center_img">\n                    <img src="assets/imgs/banner1.png" class="crop_img">\n                </div>\n                <div class="text">\n                    <h2>Đăng ký ngay</h2>\n                    <p>Đăng ký để nạp tiền chiết khấu cao</p>\n                </div>\n            </ion-slide>\n            <ion-slide>\n                <div class="img_box center_img">\n                    <img src="assets/imgs/banner2.png" class="crop_img">\n                </div>\n                <div class="text">\n                    <h2>Đăng ký ngay</h2>\n                    <p>Đăng ký để nạp tiền chiết khấu cao</p>\n                </div>\n            </ion-slide>\n            <ion-slide>\n                <div class="img_box center_img">\n                    <img src="assets/imgs/banner1.png" class="crop_img">\n                </div>\n                <div class="text">\n                    <h2>Đăng ký ngay</h2>\n                    <p>Đăng ký để nạp tiền chiết khấu cao</p>\n                </div>\n            </ion-slide>\n            <ion-slide>\n                <div class="img_box center_img">\n                    <img src="assets/imgs/banner2.png" class="crop_img">\n                </div>\n                <div class="text">\n                    <h2>Đăng ký ngay</h2>\n                    <p>Đăng ký để nạp tiền chiết khấu cao</p>\n                </div>\n            </ion-slide>\n        </ion-slides>\n    </div>\n    <div class="form">\n        <ion-list no-lines>\n            <ion-item>\n                <div class="icon_box" item-start>\n                    <img src="assets/imgs/ic_person.png">\n                </div>\n                <ion-input type="text" placeholder="{{\'full_name\' | translate}}"></ion-input>\n            </ion-item>\n            <ion-item>\n                <div class="icon_box" item-start>\n                    <img src="assets/imgs/ic_email.png">\n                </div>\n                <ion-input type="email" placeholder="{{\'email_address\' | translate}}"></ion-input>\n            </ion-item>\n            <ion-item>\n                <div class="icon_box" item-start>\n                    <img src="assets/imgs/ic_phone.png">\n                </div>\n                <ion-input type="number" placeholder="{{\'phone_number\' | translate}}"></ion-input>\n            </ion-item>\n            <ion-item>\n                <div class="icon_box" item-start>\n                    <img src="assets/imgs/ic_password.png">\n                </div>\n                <ion-input type="password" placeholder="{{\'create_password\' | translate}}"></ion-input>\n            </ion-item>\n            <ion-item>\n                <div class="icon_box" item-start>\n                    <img src="assets/imgs/ic_password.png">\n                </div>\n                <ion-input type="password" placeholder="{{\'confirm_password\' | translate}}"></ion-input>\n            </ion-item>\n        </ion-list>\n        <button text-uppercase ion-button block class="btn" (click)="verification()"> {{\'sign_up\' | translate}}</button>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/kadiesvu/12C APP/src/pages/signup/signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VerificationPage = /** @class */ (function () {
    function VerificationPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    VerificationPage.prototype.tabs = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    VerificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-verification',template:/*ion-inline-start:"/Users/kadiesvu/12C APP/src/pages/verification/verification.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title></ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div class="form">\n        <h2>{{\'phone_verification\' | translate}}</h2>\n        <p>{{\'verification_text_1\' | translate}}<br>{{\'verification_text_2\' | translate}}</p>\n        <ion-list no-lines>\n            <ion-item>\n                <ion-input type="text" placeholder="{{\'enter_code_here\' | translate}}"></ion-input>\n            </ion-item>\n            <button ion-button block class="btn" (click)="tabs()"> {{\'submit\' | translate}}</button>\n            <h3 text-center>{{\'code_resend\' | translate}}</h3>\n        </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/kadiesvu/12C APP/src/pages/verification/verification.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], VerificationPage);
    return VerificationPage;
}());

//# sourceMappingURL=verification.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pay_or_send_pay_or_send__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__addmoney_addmoney__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__getpayment_getpayment__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__transaction_transaction__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__phonerecharge_phonerecharge__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__book_ticket_book_ticket__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.search = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */]);
    };
    HomePage.prototype.pay_or_send = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pay_or_send_pay_or_send__["a" /* Pay_or_sendPage */]);
    };
    HomePage.prototype.addmoney = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__addmoney_addmoney__["a" /* AddmoneyPage */]);
    };
    HomePage.prototype.getpayment = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__getpayment_getpayment__["a" /* GetpaymentPage */]);
    };
    HomePage.prototype.transaction = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__transaction_transaction__["a" /* TransactionPage */]);
    };
    HomePage.prototype.phonerecharge = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__phonerecharge_phonerecharge__["a" /* PhonerechargePage */]);
    };
    HomePage.prototype.book_ticket = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__book_ticket_book_ticket__["a" /* Book_ticketPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/kadiesvu/12C APP/src/pages/home/home.html"*/'<ion-header class="header_bg bg-transparent">\n  <!--\n  <ion-navbar>\n      <ion-title>{{\'home\' | translate}}</ion-title>\n  </ion-navbar>\n-->\n  <ion-list no-lines>\n      <ion-item class="search" (click)="search()">\n          <h2>{{\'\' | translate}}<span class="text-theme">{{\'Tìm kiếm\' | translate}}</span></h2>\n          <img src="assets/imgs/ic_search.png" item-end>\n      </ion-item>\n      <ion-item class="icon_box">\n          <ion-row text-center>\n            <ion-item>\n              <h2 class="d-flex">{{\'balance\' | translate}} <span class="end">$ 10.00</span></h2>\n\n          </ion-item>\n          <ion-col col-3 (click)="phonerecharge()">\n            <img src="assets/imgs/ic_pay.png">\n            <h6>{{\'ban_tien_gia_re\' | translate}}</h6>\n        </ion-col>\n        <ion-col col-3 (click)="phonerecharge()">\n            <img src="assets/imgs/ic_add_money.png">\n            <h6>{{\'nap_tien_dien_thoai_gia_re\' | translate}}</h6>\n        </ion-col>\n        <ion-col col-3 (click)="phonerecharge()">\n          <img src="assets/imgs/ic_add_money.png">\n          <h6>{{\'nap_game\' | translate}}</h6>\n      </ion-col>\n      <ion-col col-3 (click)="phonerecharge()">\n        <img src="assets/imgs/ic_add_money.png">\n        <h6>{{\'thanh_toan_cuoc\' | translate}}</h6>\n    </ion-col>\n          </ion-row>\n\n      </ion-item>\n\n  </ion-list>\n\n\n\n</ion-header>\n\n<ion-content class="bg-color">\n  <ion-list no-lines>\n      <ion-card>\n\n          <ion-item>\n              <ion-row text-center>\n                  <ion-col col-4 (click)="phonerecharge()">\n                      <img src="assets/imgs/ic_recharge.png">\n                      <h6>{{\'Vietel trả truớc - sau\' | translate}}</h6>\n                  </ion-col>\n                  <ion-col col-4>\n                      <img src="assets/imgs/ic_electricity.png">\n                      <h6>{{\'Vina trả truớc\' | translate}}</h6>\n                  </ion-col>\n                  <ion-col col-4 (click)="phonerecharge()">\n                      <img src="assets/imgs/ic_flights.png">\n                      <h6>{{\'Cuớc truyền hình FTTH\' | translate}}</h6>\n                  </ion-col>\n                  <ion-col col-4 (click)="phonerecharge()">\n                      <img src="assets/imgs/ic_bus.png">\n                      <h6>{{\'Mobi trả truớc\' | translate}}</h6>\n                  </ion-col>\n                  <ion-col col-4 (click)="phonerecharge()" >\n                      <img src="assets/imgs/ic_dth.png">\n                      <h6>{{\'Garena\' | translate}}</h6>\n                  </ion-col>\n                  <ion-col col-4 (click)="phonerecharge()">\n                      <img src="assets/imgs/ic_broadband.png">\n                      <h6>{{\'VTC Game\' | translate}}</h6>\n                  </ion-col>\n                  <ion-col col-4 (click)="phonerecharge()">\n                      <img src="assets/imgs/ic_more.png">\n                      <h6>{{\'Vina Game\' | translate}}</h6>\n                  </ion-col>\n                  <ion-col col-4 (click)="phonerecharge()">\n                    <img src="assets/imgs/ic_k.png">\n                    <h6>{{\'K Plus\' | translate}}</h6>\n                </ion-col>\n              </ion-row>\n          </ion-item>\n      </ion-card>\n\n      <ion-card>\n          <div class="card_bg center_img">\n              <img src="assets/imgs/card_bg2.png" class="crop_img">\n          </div>\n          <h2>{{\'save_on_bill_payments\' | translate}}</h2>\n          <ion-scroll scrollX="true">\n\n          </ion-scroll>\n      </ion-card>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/kadiesvu/12C APP/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__phonerecharge_phonerecharge__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__book_ticket_book_ticket__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SearchPage.prototype.phonerecharge = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__phonerecharge_phonerecharge__["a" /* PhonerechargePage */]);
    };
    SearchPage.prototype.book_ticket = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__book_ticket_book_ticket__["a" /* Book_ticketPage */]);
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"/Users/kadiesvu/12C APP/src/pages/search/search.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Tìm kiếm</ion-title>\n    </ion-navbar>\n\n    <ion-searchbar (ionInput)="getItems($event)" placeholder="{{\'search_placeholder\' | translate}}"></ion-searchbar>\n</ion-header>\n\n<ion-content class="bg-color">\n\n    <div class="quick_links">\n        <h3>{{\'quick_links\' | translate}}</h3>\n        <ion-scroll scrollX="true">\n            <div class="links" (click)="phonerecharge()">\n                <img src="assets/imgs/ic_recharge.png">\n                <h6>{{\'Viettel trả truớc\' | translate}}</h6>\n            </div>\n            <div class="links">\n                <img src="assets/imgs/ic_electricity.png">\n                <h6>{{\'Vina trả truớc\' | translate}}</h6>\n            </div>\n            <div class="links" (click)="phonerecharge()">\n                <img src="assets/imgs/ic_train.png">\n                <h6>{{\'Vietel trả sau\' | translate}}</h6>\n            </div>\n            <div class="links" (click)="phonerecharge()">\n                <img src="assets/imgs/ic_flights.png">\n                <h6>{{\'Cuợc truyền hình FTTH\' | translate}}</h6>\n            </div>\n            <div class="links" (click)="phonerecharge()">\n                <img src="assets/imgs/ic_bus.png">\n                <h6>{{\'Mobi trả truớc\' | translate}}</h6>\n            </div>\n            <div class="links"  (click)="phonerecharge()">\n                <img src="assets/imgs/ic_dth.png">\n                <h6>{{\'Garena\' | translate}}</h6>\n            </div>\n            <div class="links"  (click)="phonerecharge()">\n                <img src="assets/imgs/ic_broadband.png">\n                <h6>{{\'VTC Game\' | translate}}</h6>\n            </div>\n            <div class="links"  (click)="phonerecharge()">\n                <img src="assets/imgs/ic_more.png">\n                <h6>{{\'K Plus\' | translate}}</h6>\n            </div>\n        </ion-scroll>\n    </div>\n    <ion-list no-lines>\n        <ion-card>\n            <div class="card_bg center_img">\n                <img src="assets/imgs/card_bg2.png" class="crop_img">\n            </div>\n            <h2>{{\'save_on_bill_payments\' | translate}}</h2>\n            <ion-scroll scrollX="true">\n                <ion-item>\n                    <h3>Thông tin giảm giá</h3>\n                    <div class="text d-flex">\n                        <p>Giảm gía nạp thẻ.</p>\n                        <h4 text-center class="end">{{\'know_more\' | translate}}</h4>\n                    </div>\n                    <h6><sup>*</sup>{{\'t_c_apply\' | translate}}</h6>\n                </ion-item>\n                <ion-item>\n                    <h3>Thông tin giảm giá</h3>\n                    <div class="text d-flex">\n                        <p>Giảm gía nạp thẻ.</p>\n                        <h4 text-center class="end">{{\'know_more\' | translate}}</h4>\n                    </div>\n                    <h6><sup>*</sup>{{\'t_c_apply\' | translate}}</h6>\n                </ion-item>\n                <ion-item>\n                    <h3>Thông tin giảm giá</h3>\n                    <div class="text d-flex">\n                        <p>Giảm gía nạp thẻ.</p>\n                        <h4 text-center class="end">{{\'know_more\' | translate}}</h4>\n                    </div>\n                    <h6><sup>*</sup>{{\'t_c_apply\' | translate}}</h6>\n                </ion-item>\n                <ion-item>\n                    <h3>Thông tin giảm giá</h3>\n                    <div class="text d-flex">\n                        <p>Giảm gía nạp thẻ.</p>\n                        <h4 text-center class="end">{{\'know_more\' | translate}}</h4>\n                    </div>\n                    <h6><sup>*</sup>{{\'t_c_apply\' | translate}}</h6>\n                </ion-item>\n            </ion-scroll>\n        </ion-card>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/kadiesvu/12C APP/src/pages/search/search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentsuccessfulPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaymentsuccessfulPage = /** @class */ (function () {
    function PaymentsuccessfulPage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    PaymentsuccessfulPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    PaymentsuccessfulPage.prototype.tabs = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    PaymentsuccessfulPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-paymentsuccessful',template:/*ion-inline-start:"/Users/kadiesvu/12C APP/src/pages/paymentsuccessful/paymentsuccessful.html"*/'<!--\n<ion-header>\n    <ion-navbar>\n        <ion-title>paymentsuccessful</ion-title>\n    </ion-navbar>\n</ion-header>\n-->\n\n<ion-content text-center>\n    <div class="img_box">\n        <img src="assets/imgs/Successful.png">\n    </div>\n    <h2>{{\'payment_successful\' | translate}}</h2>\n    <p>{{\'your_booking_is_confirmed\' | translate}}<br>{{\'with_quickpay\' | translate}}</p>\n</ion-content>\n<ion-footer no-border text-center>\n    <h2>{{\'share_your_booking_details\' | translate}}</h2>\n    <h3 (click)="tabs()">{{\'continue\' | translate}}</h3>\n</ion-footer>\n'/*ion-inline-end:"/Users/kadiesvu/12C APP/src/pages/paymentsuccessful/paymentsuccessful.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ViewController */]])
    ], PaymentsuccessfulPage);
    return PaymentsuccessfulPage;
}());

//# sourceMappingURL=paymentsuccessful.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddmoneyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__promocode_promocode__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddmoneyPage = /** @class */ (function () {
    function AddmoneyPage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    AddmoneyPage.prototype.promocode = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__promocode_promocode__["a" /* PromocodePage */]);
        modal.present();
    };
    AddmoneyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addmoney',template:/*ion-inline-start:"/Users/kadiesvu/12C APP/src/pages/addmoney/addmoney.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{\'add_money\' | translate}}</ion-title>\n    </ion-navbar>\n\n    <div class="form">\n        <ion-list no-lines>\n            <ion-item>\n                <ion-input type="text" placeholder="{{\'enter_amount\' | translate}}"></ion-input>\n                <h3 item-end (click)="promocode()">{{\'have_promocode\' | translate}}</h3>\n            </ion-item>\n            <button ion-button block class="btn"> {{\'add_money\' | translate}}</button>\n            <h2 text-center>{{\'quick_pay_balance\' | translate}} $ 3.85</h2>\n        </ion-list>\n    </div>\n</ion-header>\n\n<ion-content class="bg-color">\n    <ion-card>\n        <div class="card_bg center_img">\n            <img src="assets/imgs/card_bg2.png" class="crop_img">\n        </div>\n        <h2>{{\'deals_of_the_day\' | translate}}</h2>\n        <ion-scroll scrollY="true">\n            <ion-list no-lines>\n                <ion-item>\n                    <h3>Upto 80% Cashback every hour</h3>\n                    <div class="text d-flex">\n                        <p>Get upto 80% Cashback on any bill payment every hour.</p>\n                        <h4 text-center class="end">{{\'know_more\' | translate}}</h4>\n                    </div>\n                    <h6><sup>*</sup>{{\'t_c_apply\' | translate}}</h6>\n                </ion-item>\n                <ion-item>\n                    <h3>Upto 80% Cashback every hour</h3>\n                    <div class="text d-flex">\n                        <p>Get upto 80% Cashback on any bill payment every hour.</p>\n                        <h4 text-center class="end">{{\'know_more\' | translate}}</h4>\n                    </div>\n                    <h6><sup>*</sup>{{\'t_c_apply\' | translate}}</h6>\n                </ion-item>\n                <ion-item>\n                    <h3>Upto 80% Cashback every hour</h3>\n                    <div class="text d-flex">\n                        <p>Get upto 80% Cashback on any bill payment every hour.</p>\n                        <h4 text-center class="end">{{\'know_more\' | translate}}</h4>\n                    </div>\n                    <h6><sup>*</sup>{{\'t_c_apply\' | translate}}</h6>\n                </ion-item>\n                <ion-item>\n                    <h3>Upto 80% Cashback every hour</h3>\n                    <div class="text d-flex">\n                        <p>Get upto 80% Cashback on any bill payment every hour.</p>\n                        <h4 text-center class="end">{{\'know_more\' | translate}}</h4>\n                    </div>\n                    <h6><sup>*</sup>{{\'t_c_apply\' | translate}}</h6>\n                </ion-item>\n            </ion-list>\n        </ion-scroll>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/kadiesvu/12C APP/src/pages/addmoney/addmoney.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]])
    ], AddmoneyPage);
    return AddmoneyPage;
}());

//# sourceMappingURL=addmoney.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetpaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GetpaymentPage = /** @class */ (function () {
    function GetpaymentPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    GetpaymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-getpayment',template:/*ion-inline-start:"/Users/kadiesvu/12C APP/src/pages/getpayment/getpayment.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <img src="assets/imgs/logo2.png">\n            <ion-icon class="material-icons end">share</ion-icon>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content text-center>\n\n    <div class="qr_code_box">\n        <h2>{{\'scan_this_code_to_quickpay\' | translate}}</h2>\n        <div class="qr_code">\n            <img src="assets/imgs/img_qrcode.png">\n        </div>\n        <h3 text-uppercase>Samantha smith</h3>\n        <p>+00000000</p>\n    </div>\n</ion-content>\n<ion-footer no-border>\n    <button ion-button block clear class="btn"> {{\'download_qr_code\' | translate}}</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/kadiesvu/12C APP/src/pages/getpayment/getpayment.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], GetpaymentPage);
    return GetpaymentPage;
}());

//# sourceMappingURL=getpayment.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TransactionPage = /** @class */ (function () {
    function TransactionPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    TransactionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-transaction',template:/*ion-inline-start:"/Users/kadiesvu/12C APP/src/pages/transaction/transaction.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{\'transaction\' | translate}}</ion-title>\n    </ion-navbar>\n\n    <div class="banner" text-center>\n        <h2>{{\'quick_pay_balance\' | translate}}</h2>\n        <h3>$3.85</h3>\n        <ion-row>\n            <ion-col col-6>\n                <button ion-button block clear class="btn">{{\'send_to_bank\' | translate}}</button>\n            </ion-col>\n            <ion-col col-6>\n                <button ion-button block class="btn">{{\'add_money\' | translate}}</button>\n            </ion-col>\n        </ion-row>\n    </div>\n</ion-header>\n\n<ion-content class="bg-color">\n    <ion-list no-lines>\n        <h3>Today, 19 Dec, 2018</h3>\n        <ion-item>\n            <div class="img_box" item-start>\n                <img src="assets/imgs/ic_pay.png">\n            </div>\n            <h2 class="d-flex">Paid for Order on QuickPay\n                <span class="end">-$ 10.50</span>\n            </h2>\n            <p>3:14 pm | Pre paid recharge</p>\n        </ion-item>\n        <ion-item>\n            <div class="img_box" item-start>\n                <img src="assets/imgs/ic_get_payment.png">\n            </div>\n            <h2 class="d-flex">Received as Cashback\n                <span class="end">+$ 20.50</span>\n            </h2>\n            <p>11:14 pm | Train Ticket Booking</p>\n        </ion-item>\n\n        <h3>Yestrday, 18 Dec, 2018</h3>\n        <ion-item>\n            <div class="img_box" item-start>\n                <img src="assets/imgs/ic_add_money.png">\n            </div>\n            <h2 class="d-flex">Money Added to wallet\n                <span class="end">+$ 100.50</span>\n            </h2>\n            <p>5:54 pm | via ICDH Bank</p>\n        </ion-item>\n        <ion-item>\n            <div class="img_box" item-start>\n                <img src="assets/imgs/ic_pay.png">\n            </div>\n            <h2 class="d-flex">Paid for Order on QuickPay\n                <span class="end">-$ 10.50</span>\n            </h2>\n            <p>3:14 pm | Pre paid recharge</p>\n        </ion-item>\n        <ion-item>\n            <div class="img_box" item-start>\n                <img src="assets/imgs/ic_get_payment.png">\n            </div>\n            <h2 class="d-flex">Received as Cashback\n                <span class="end">+$ 20.50</span>\n            </h2>\n            <p>11:14 pm | Train Ticket Booking</p>\n        </ion-item>\n\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/kadiesvu/12C APP/src/pages/transaction/transaction.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], TransactionPage);
    return TransactionPage;
}());

//# sourceMappingURL=transaction.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MallPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_info_item_info__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__categories_categories__ = __webpack_require__(216);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MallPage = /** @class */ (function () {
    function MallPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    MallPage.prototype.item_info = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__item_info_item_info__["a" /* Item_infoPage */]);
    };
    MallPage.prototype.categories = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__categories_categories__["a" /* CategoriesPage */]);
    };
    MallPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mall',template:/*ion-inline-start:"/Users/kadiesvu/12C APP/src/pages/mall/mall.html"*/'<ion-header class="header_bg bg-transparent">\n    <!--\n<ion-navbar>\n    <ion-title>mall</ion-title>\n</ion-navbar>\n-->\n    <div class="search_box d-flex">\n        <ion-icon>\n            <img src="assets/imgs/ic_search.png">\n        </ion-icon>\n        <ion-searchbar (ionInput)="getItems($event)" placeholder="{{\'search_text\' | translate}}"></ion-searchbar>\n        <ion-icon class="end"><img src="assets/imgs/ic_cart.png">\n            <ion-badge>2</ion-badge>\n        </ion-icon>\n    </div>\n    <ion-list no-lines>\n        <h2>{{\'shop_by_categories\' | translate}}</h2>\n        <ion-item>\n            <ion-row>\n                <ion-col col-3 text-center (click)="categories()">\n                    <div class="img_box center_img">\n                        <img src="assets/imgs/01.png" class="crop_img">\n                    </div>\n                    <p>{{\'fashion\' | translate}}</p>\n                </ion-col>\n                <ion-col col-3 text-center (click)="categories()">\n                    <div class="img_box center_img">\n                        <img src="assets/imgs/02.png" class="crop_img">\n                    </div>\n                    <p>{{\'electronics\' | translate}}</p>\n                </ion-col>\n                <ion-col col-3 text-center (click)="categories()">\n                    <div class="img_box center_img">\n                        <img src="assets/imgs/03.png" class="crop_img">\n                    </div>\n                    <p>{{\'phones\' | translate}}</p>\n                </ion-col>\n                <ion-col col-3 text-center (click)="categories()">\n                    <div class="img_box center_img">\n                        <img src="assets/imgs/04.png" class="crop_img">\n                    </div>\n                    <p>{{\'devices\' | translate}}</p>\n                </ion-col>\n                <ion-col col-3 text-center (click)="categories()">\n                    <div class="img_box center_img">\n                        <img src="assets/imgs/05.png" class="crop_img">\n                    </div>\n                    <p>{{\'appliances\' | translate}}</p>\n                </ion-col>\n                <ion-col col-3 text-center (click)="categories()">\n                    <div class="img_box center_img">\n                        <img src="assets/imgs/c6.png" class="crop_img">\n                    </div>\n                    <p>{{\'beauty\' | translate}}</p>\n                </ion-col>\n                <ion-col col-3 text-center (click)="categories()">\n                    <div class="img_box center_img">\n                        <img src="assets/imgs/06.png" class="crop_img">\n                    </div>\n                    <p>{{\'sports\' | translate}}</p>\n                </ion-col>\n                <ion-col col-3 text-center (click)="categories()">\n                    <div class="img_box center_img">\n                        <img src="assets/imgs/07.png" class="crop_img">\n                    </div>\n                    <p>{{\'more\' | translate}}</p>\n                </ion-col>\n            </ion-row>\n        </ion-item>\n    </ion-list>\n</ion-header>\n\n<ion-content class="bg-color">\n    <ion-list no-lines class="deals">\n        <h2>{{\'deals_of_the_day\' | translate}}</h2>\n        <div class="bg_img center_img">\n            <img src="assets/imgs/card_bg2.png" class="crop_img">\n        </div>\n        <ion-scroll scrollX="true">\n            <div class="item_box" (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f1.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </div>\n            <div class="item_box" (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f2.png">\n                    </div>\n                    <h2>Spyworn Blue cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </div>\n            <div class="item_box" (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f3.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </div>\n            <div class="item_box" (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f4.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </div>\n            <div class="item_box" (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f1.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </div>\n            <div class="item_box" (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f4.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </div>\n        </ion-scroll>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/kadiesvu/12C APP/src/pages/mall/mall.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], MallPage);
    return MallPage;
}());

//# sourceMappingURL=mall.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_lists_item_lists__ = __webpack_require__(217);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoriesPage = /** @class */ (function () {
    function CategoriesPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.categories = "fashion";
    }
    CategoriesPage.prototype.item_lists = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__item_lists_item_lists__["a" /* Item_listsPage */]);
    };
    CategoriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-categories',template:/*ion-inline-start:"/Users/kadiesvu/12C APP/src/pages/categories/categories.html"*/'<ion-header class="header_bg bg-transparent">\n    <ion-navbar>\n        <ion-title>{{\'shop_by_categories\' | translate}}\n            <span class="icon_box end">\n                <ion-icon><img src="assets/imgs/ic_search_wt.png"></ion-icon>\n                <ion-icon><img src="assets/imgs/ic_cart_wt.png">\n                    <ion-badge item-end>2</ion-badge>\n                </ion-icon>\n            </span>\n        </ion-title>\n    </ion-navbar>\n    <ion-scroll scrollX="true">\n        <ion-segment [(ngModel)]="categories">\n            <ion-segment-button value="fashion">\n                {{\'fashion\' | translate}}\n            </ion-segment-button>\n            <ion-segment-button value="electronics">\n                {{\'electronics\' | translate}}\n            </ion-segment-button>\n            <ion-segment-button value="phones">\n                {{\'phones\' | translate}}\n            </ion-segment-button>\n            <ion-segment-button value="devices">\n                {{\'devices\' | translate}}\n            </ion-segment-button>\n            <ion-segment-button value="home_decor">\n                {{\'home_decor\' | translate}}\n            </ion-segment-button>\n            <ion-segment-button value="health">\n                {{\'health\' | translate}}\n            </ion-segment-button>\n            <ion-segment-button value="appliances">\n                {{\'appliances\' | translate}}\n            </ion-segment-button>\n            <ion-segment-button value="furniture">\n                {{\'furniture\' | translate}}\n            </ion-segment-button>\n        </ion-segment>\n    </ion-scroll>\n</ion-header>\n\n<ion-content class="bg-color">\n    <div class="tab_container" [ngSwitch]="categories">\n        <ion-list no-lines *ngSwitchCase="\'fashion\'">\n            <ion-item (click)="item_lists()">\n                <div class="categories_img" item-start>\n                    <img src="assets/imgs/c3.png">\n                </div>\n                <h2 class="d-flex"><span>Men\'s Clothing</span></h2>\n                <p>T-shirts, Jeans, Shirt, more</p>\n            </ion-item>\n            <ion-item (click)="item_lists()">\n                <div class="categories_img" item-start>\n                    <img src="assets/imgs/c4.png">\n                </div>\n                <h2 class="d-flex"><span>Women\'s Clothing</span></h2>\n                <p>T-shirts, Jeans, Skirts, more</p>\n            </ion-item>\n            <ion-item (click)="item_lists()">\n                <div class="categories_img" item-start>\n                    <img src="assets/imgs/c5.png">\n                </div>\n                <h2 class="d-flex"><span>Kids Clothing</span></h2>\n                <p>T-shirts, Jeans, Shirt, more</p>\n            </ion-item>\n            <ion-item (click)="item_lists()">\n                <div class="categories_img" item-start>\n                    <img src="assets/imgs/c6.png">\n                </div>\n                <h2 class="d-flex"><span>Footwear</span></h2>\n                <p>Shoe, Sandal, Sneaker & more</p>\n            </ion-item>\n            <ion-item (click)="item_lists()">\n                <div class="categories_img" item-start>\n                    <img src="assets/imgs/c7.png">\n                </div>\n                <h2 class="d-flex"><span>Accesories</span></h2>\n                <p>Watch, Bags, Cover, more</p>\n            </ion-item>\n            <ion-item (click)="item_lists()">\n                <div class="categories_img" item-start>\n                    <img src="assets/imgs/c8.png">\n                </div>\n                <h2 class="d-flex"><span>Jewelry</span></h2>\n                <p>Necklaces, Ring, Earing, more</p>\n            </ion-item>\n            <ion-item (click)="item_lists()">\n                <div class="categories_img" item-start>\n                    <img src="assets/imgs/c3.png">\n                </div>\n                <h2 class="d-flex"><span>Men\'s Clothing</span></h2>\n                <p>T-shirts, Jeans, Shirt, more</p>\n            </ion-item>\n            <ion-item (click)="item_lists()">\n                <div class="categories_img" item-start>\n                    <img src="assets/imgs/c4.png">\n                </div>\n                <h2 class="d-flex"><span>Women\'s Clothing</span></h2>\n                <p>T-shirts, Jeans, Skirts, more</p>\n            </ion-item>\n            <ion-item (click)="item_lists()">\n                <div class="categories_img" item-start>\n                    <img src="assets/imgs/c5.png">\n                </div>\n                <h2 class="d-flex"><span>Kids Clothing</span></h2>\n                <p>T-shirts, Jeans, Shirt, more</p>\n            </ion-item>\n            <ion-item (click)="item_lists()">\n                <div class="categories_img" item-start>\n                    <img src="assets/imgs/c6.png">\n                </div>\n                <h2 class="d-flex"><span>Footwear</span></h2>\n                <p>Shoe, Sandal, Sneaker & more</p>\n            </ion-item>\n            <ion-item (click)="item_lists()">\n                <div class="categories_img" item-start>\n                    <img src="assets/imgs/c7.png">\n                </div>\n                <h2 class="d-flex"><span>Accesories</span></h2>\n                <p>Watch, Bags, Cover, more</p>\n            </ion-item>\n            <ion-item (click)="item_lists()">\n                <div class="categories_img" item-start>\n                    <img src="assets/imgs/c8.png">\n                </div>\n                <h2 class="d-flex"><span>Jewelry</span></h2>\n                <p>Necklaces, Ring, Earing, more</p>\n            </ion-item>\n        </ion-list>\n\n        <ion-list no-lines *ngSwitchCase="\'electronics\'">\n            <ion-item (click)="item_lists()">\n                <div class="categories_img" item-start>\n                    <img src="assets/imgs/c3.png">\n                </div>\n                <h2 class="d-flex"><span>Men\'s Clothing</span></h2>\n                <p>T-shirts, Jeans, Shirt, more</p>\n            </ion-item>\n            <ion-item (click)="item_lists()">\n                <div class="categories_img" item-start>\n                    <img src="assets/imgs/c4.png">\n                </div>\n                <h2 class="d-flex"><span>Women\'s Clothing</span></h2>\n                <p>T-shirts, Jeans, Skirts, more</p>\n            </ion-item>\n            <ion-item (click)="item_lists()">\n                <div class="categories_img" item-start>\n                    <img src="assets/imgs/c5.png">\n                </div>\n                <h2 class="d-flex"><span>Kids Clothing</span></h2>\n                <p>T-shirts, Jeans, Shirt, more</p>\n            </ion-item>\n            <ion-item (click)="item_lists()">\n                <div class="categories_img" item-start>\n                    <img src="assets/imgs/c6.png">\n                </div>\n                <h2 class="d-flex"><span>Footwear</span></h2>\n                <p>Shoe, Sandal, Sneaker & more</p>\n            </ion-item>\n        </ion-list>\n\n        <ion-list no-lines *ngSwitchCase="\'phones\'">\n            <ion-item (click)="item_lists()">\n                <div class="categories_img" item-start>\n                    <img src="assets/imgs/c5.png">\n                </div>\n                <h2 class="d-flex"><span>Kids Clothing</span></h2>\n                <p>T-shirts, Jeans, Shirt, more</p>\n            </ion-item>\n            <ion-item (click)="item_lists()">\n                <div class="categories_img" item-start>\n                    <img src="assets/imgs/c6.png">\n                </div>\n                <h2 class="d-flex"><span>Footwear</span></h2>\n                <p>Shoe, Sandal, Sneaker & more</p>\n            </ion-item>\n\n            <ion-item (click)="item_lists()">\n                <div class="categories_img" item-start>\n                    <img src="assets/imgs/c3.png">\n                </div>\n                <h2 class="d-flex"><span>Men\'s Clothing</span></h2>\n                <p>T-shirts, Jeans, Shirt, more</p>\n            </ion-item>\n            <ion-item (click)="item_lists()">\n                <div class="categories_img" item-start>\n                    <img src="assets/imgs/c4.png">\n                </div>\n                <h2 class="d-flex"><span>Women\'s Clothing</span></h2>\n                <p>T-shirts, Jeans, Skirts, more</p>\n            </ion-item>\n        </ion-list>\n\n        <ion-list no-lines *ngSwitchCase="\'devices\'">\n            <ion-item (click)="item_lists()">\n                <div class="categories_img" item-start>\n                    <img src="assets/imgs/c6.png">\n                </div>\n                <h2 class="d-flex"><span>Footwear</span></h2>\n                <p>Shoe, Sandal, Sneaker & more</p>\n            </ion-item>\n            <ion-item (click)="item_lists()">\n                <div class="categories_img" item-start>\n                    <img src="assets/imgs/c3.png">\n                </div>\n                <h2 class="d-flex"><span>Men\'s Clothing</span></h2>\n                <p>T-shirts, Jeans, Shirt, more</p>\n            </ion-item>\n            <ion-item (click)="item_lists()">\n                <div class="categories_img" item-start>\n                    <img src="assets/imgs/c4.png">\n                </div>\n                <h2 class="d-flex"><span>Women\'s Clothing</span></h2>\n                <p>T-shirts, Jeans, Skirts, more</p>\n            </ion-item>\n        </ion-list>\n\n        <ion-list no-lines *ngSwitchCase="\'home_decor\'">\n            <ion-item (click)="item_lists()">\n                <div class="categories_img" item-start>\n                    <img src="assets/imgs/c3.png">\n                </div>\n                <h2 class="d-flex"><span>Men\'s Clothing</span></h2>\n                <p>T-shirts, Jeans, Shirt, more</p>\n            </ion-item>\n            <ion-item (click)="item_lists()">\n                <div class="categories_img" item-start>\n                    <img src="assets/imgs/c4.png">\n                </div>\n                <h2 class="d-flex"><span>Women\'s Clothing</span></h2>\n                <p>T-shirts, Jeans, Skirts, more</p>\n            </ion-item>\n            <ion-item (click)="item_lists()">\n                <div class="categories_img" item-start>\n                    <img src="assets/imgs/c5.png">\n                </div>\n                <h2 class="d-flex"><span>Kids Clothing</span></h2>\n                <p>T-shirts, Jeans, Shirt, more</p>\n            </ion-item>\n            <ion-item (click)="item_lists()">\n                <div class="categories_img" item-start>\n                    <img src="assets/imgs/c6.png">\n                </div>\n                <h2 class="d-flex"><span>Footwear</span></h2>\n                <p>Shoe, Sandal, Sneaker & more</p>\n            </ion-item>\n        </ion-list>\n\n        <ion-list no-lines *ngSwitchCase="\'health\'">\n            <ion-item (click)="item_lists()">\n                <div class="categories_img" item-start>\n                    <img src="assets/imgs/c5.png">\n                </div>\n                <h2 class="d-flex"><span>Kids Clothing</span></h2>\n                <p>T-shirts, Jeans, Shirt, more</p>\n            </ion-item>\n            <ion-item (click)="item_lists()">\n                <div class="categories_img" item-start>\n                    <img src="assets/imgs/c6.png">\n                </div>\n                <h2 class="d-flex"><span>Footwear</span></h2>\n                <p>Shoe, Sandal, Sneaker & more</p>\n            </ion-item>\n\n            <ion-item (click)="item_lists()">\n                <div class="categories_img" item-start>\n                    <img src="assets/imgs/c3.png">\n                </div>\n                <h2 class="d-flex"><span>Men\'s Clothing</span></h2>\n                <p>T-shirts, Jeans, Shirt, more</p>\n            </ion-item>\n            <ion-item (click)="item_lists()">\n                <div class="categories_img" item-start>\n                    <img src="assets/imgs/c4.png">\n                </div>\n                <h2 class="d-flex"><span>Women\'s Clothing</span></h2>\n                <p>T-shirts, Jeans, Skirts, more</p>\n            </ion-item>\n        </ion-list>\n\n        <ion-list no-lines *ngSwitchCase="\'appliances\'">\n            <ion-item (click)="item_lists()">\n                <div class="categories_img" item-start>\n                    <img src="assets/imgs/c3.png">\n                </div>\n                <h2 class="d-flex"><span>Men\'s Clothing</span></h2>\n                <p>T-shirts, Jeans, Shirt, more</p>\n            </ion-item>\n            <ion-item (click)="item_lists()">\n                <div class="categories_img" item-start>\n                    <img src="assets/imgs/c4.png">\n                </div>\n                <h2 class="d-flex"><span>Women\'s Clothing</span></h2>\n                <p>T-shirts, Jeans, Skirts, more</p>\n            </ion-item>\n            <ion-item (click)="item_lists()">\n                <div class="categories_img" item-start>\n                    <img src="assets/imgs/c5.png">\n                </div>\n                <h2 class="d-flex"><span>Kids Clothing</span></h2>\n                <p>T-shirts, Jeans, Shirt, more</p>\n            </ion-item>\n            <ion-item (click)="item_lists()">\n                <div class="categories_img" item-start>\n                    <img src="assets/imgs/c6.png">\n                </div>\n                <h2 class="d-flex"><span>Footwear</span></h2>\n                <p>Shoe, Sandal, Sneaker & more</p>\n            </ion-item>\n        </ion-list>\n\n        <ion-list no-lines *ngSwitchCase="\'furniture\'">\n\n            <ion-item (click)="item_lists()">\n                <div class="categories_img" item-start>\n                    <img src="assets/imgs/c5.png">\n                </div>\n                <h2 class="d-flex"><span>Kids Clothing</span></h2>\n                <p>T-shirts, Jeans, Shirt, more</p>\n            </ion-item>\n            <ion-item (click)="item_lists()">\n                <div class="categories_img" item-start>\n                    <img src="assets/imgs/c6.png">\n                </div>\n                <h2 class="d-flex"><span>Footwear</span></h2>\n                <p>Shoe, Sandal, Sneaker & more</p>\n            </ion-item>\n            <ion-item (click)="item_lists()">\n                <div class="categories_img" item-start>\n                    <img src="assets/imgs/c3.png">\n                </div>\n                <h2 class="d-flex"><span>Men\'s Clothing</span></h2>\n                <p>T-shirts, Jeans, Shirt, more</p>\n            </ion-item>\n            <ion-item (click)="item_lists()">\n                <div class="categories_img" item-start>\n                    <img src="assets/imgs/c4.png">\n                </div>\n                <h2 class="d-flex"><span>Women\'s Clothing</span></h2>\n                <p>T-shirts, Jeans, Skirts, more</p>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/kadiesvu/12C APP/src/pages/categories/categories.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], CategoriesPage);
    return CategoriesPage;
}());

//# sourceMappingURL=categories.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item_listsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_info_item_info__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Item_listsPage = /** @class */ (function () {
    function Item_listsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.categories = "shirts";
    }
    Item_listsPage.prototype.item_info = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__item_info_item_info__["a" /* Item_infoPage */]);
    };
    Item_listsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-item_lists',template:/*ion-inline-start:"/Users/kadiesvu/12C APP/src/pages/item_lists/item_lists.html"*/'<ion-header class="header_bg bg-transparent">\n    <ion-navbar>\n        <ion-title>Men\'s Clothings\n            <span class="icon_box end">\n                <ion-icon><img src="assets/imgs/ic_search_wt.png"></ion-icon>\n                <ion-icon><img src="assets/imgs/ic_cart_wt.png">\n                    <ion-badge item-end>2</ion-badge>\n                </ion-icon>\n            </span>\n        </ion-title>\n    </ion-navbar>\n    <ion-scroll scrollX="true">\n        <ion-segment [(ngModel)]="categories">\n            <ion-segment-button value="shirts">\n                Shirts\n            </ion-segment-button>\n            <ion-segment-button value="t-shirts">\n                T-shirts\n            </ion-segment-button>\n            <ion-segment-button value="jeans">\n                Jeans\n            </ion-segment-button>\n            <ion-segment-button value="trouser">\n                Trouser\n            </ion-segment-button>\n            <ion-segment-button value="shirts_b">\n                Shirts\n            </ion-segment-button>\n            <ion-segment-button value="t-shirts_b">\n                T-shirts\n            </ion-segment-button>\n            <ion-segment-button value="jeans_b">\n                Jeans\n            </ion-segment-button>\n            <ion-segment-button value="trouser_b">\n                Trouser\n            </ion-segment-button>\n        </ion-segment>\n    </ion-scroll>\n</ion-header>\n\n<ion-content class="bg-color">\n    <div class="banner">\n        <div class="banner_img">\n            <img src="assets/imgs/banner3.png">\n        </div>\n        <div class="banner_text" text-right>\n            <h3 text-uppercase>Winter Sale</h3>\n            <h2>Flat 50% OFF</h2>\n            <h4 text-uppercase>{{\'shop_now\' | translate}}</h4>\n        </div>\n    </div>\n\n    <div class="tab_container" [ngSwitch]="categories">\n        <ion-row *ngSwitchCase="\'shirts\'">\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f1.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f2.png">\n                    </div>\n                    <h2>Spyworn Blue cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f3.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f4.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f1.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f4.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f1.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f2.png">\n                    </div>\n                    <h2>Spyworn Blue cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f3.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f4.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f1.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f4.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n        </ion-row>\n\n        <ion-row *ngSwitchCase="\'t-shirts\'">\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f3.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f4.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f1.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f4.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f1.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f1.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f2.png">\n                    </div>\n                    <h2>Spyworn Blue cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n        </ion-row>\n\n        <ion-row *ngSwitchCase="\'jeans\'">\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f3.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n        </ion-row>\n        <ion-row *ngSwitchCase="\'trouser\'">\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f1.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f2.png">\n                    </div>\n                    <h2>Spyworn Blue cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n        </ion-row>\n\n        <ion-row *ngSwitchCase="\'shirts_b\'">\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f1.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f2.png">\n                    </div>\n                    <h2>Spyworn Blue cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f3.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f4.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f1.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f4.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f1.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f2.png">\n                    </div>\n                    <h2>Spyworn Blue cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f3.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f4.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f1.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f4.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n        </ion-row>\n\n        <ion-row *ngSwitchCase="\'t-shirts_b\'">\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f3.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f4.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f1.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f4.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f1.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f1.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f2.png">\n                    </div>\n                    <h2>Spyworn Blue cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n        </ion-row>\n\n        <ion-row *ngSwitchCase="\'jeans_b\'">\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f3.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n        </ion-row>\n        <ion-row *ngSwitchCase="\'trouser_b\'">\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f1.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f2.png">\n                    </div>\n                    <h2>Spyworn Blue cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n        </ion-row>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/kadiesvu/12C APP/src/pages/item_lists/item_lists.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], Item_listsPage);
    return Item_listsPage;
}());

//# sourceMappingURL=item_lists.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return My_ordersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var My_ordersPage = /** @class */ (function () {
    function My_ordersPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.order_tab = "all";
    }
    My_ordersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my_orders',template:/*ion-inline-start:"/Users/kadiesvu/12C APP/src/pages/my_orders/my_orders.html"*/'<ion-header class="header_bg bg-transparent">\n    <ion-navbar>\n        <ion-title>{{\'my_orders\' | translate}}\n            <span class="icon_box end">\n                <ion-icon><img src="assets/imgs/ic_search_wt.png"></ion-icon>\n                <ion-icon><img src="assets/imgs/ic_invite.png">\n                    <ion-badge item-end>2</ion-badge>\n                </ion-icon>\n            </span>\n        </ion-title>\n    </ion-navbar>\n    <ion-scroll scrollX="true">\n        <ion-segment [(ngModel)]="order_tab">\n            <ion-segment-button value="all">\n                {{\'all\' | translate}}\n            </ion-segment-button>\n            <ion-segment-button value="recharges">\n                {{\'Vietel\' | translate}}\n            </ion-segment-button>\n            <ion-segment-button value="recharges">\n                {{\'Mobiphone\' | translate}}\n            </ion-segment-button>\n            <ion-segment-button value="recharges">\n                {{\'Truyền hình\' | translate}}\n            </ion-segment-button>\n            <ion-segment-button value="recharges">\n                {{\'Vinagame\' | translate}}\n            </ion-segment-button>\n            <ion-segment-button value="recharges">\n                {{\'VTC Game\' | translate}}\n            </ion-segment-button>\n            <ion-segment-button value="recharges">\n                {{\'K Plus\' | translate}}\n            </ion-segment-button>\n        </ion-segment>\n    </ion-scroll>\n</ion-header>\n\n<ion-content class="bg-color">\n    <div class="tab_container" [ngSwitch]="order_tab">\n        <ion-list no-lines *ngSwitchCase="\'all\'">\n            <ion-item>\n                <h2 class="d-flex">{{\'order_num\' | translate}} Vietel trả truớc <span class="end">10.000đ</span></h2>\n                <p>2, tháng 8, 2019, 03:14 am</p>\n\n            </ion-item>\n\n            <ion-item>\n                <h2 class="d-flex">{{\'order_num\' | translate}} Mobi <span class="end">10.000đ</span></h2>\n                <p>2, tháng 8, 2019, 04:45 am</p>\n\n            </ion-item>\n\n            <ion-item>\n                <h2 class="d-flex">{{\'order_num\' | translate}} Vietel trả truớc <span class="end">10.000đ</span></h2>\n                <p>2, tháng 8, 2019, 03:14 am</p>\n\n            </ion-item>\n\n            <ion-item>\n                <h2 class="d-flex">{{\'order_num\' | translate}} Vietel trả truớc <span class="end">10.000đ</span></h2>\n                <p>2, tháng 8, 2019, 03:14 am</p>\n\n            </ion-item>\n            <ion-item>\n                <h2 class="d-flex">{{\'order_num\' | translate}} Vietel trả truớc <span class="end">10.000đ</span></h2>\n                <p>2, tháng 8, 2019, 03:14 am</p>\n\n            </ion-item>\n\n            <ion-item>\n                <h2 class="d-flex">{{\'order_num\' | translate}} Vietel trả truớc <span class="end">10.000đ</span></h2>\n                <p>2, tháng 8, 2019, 04:45 am</p>\n\n            </ion-item>\n\n            <ion-item>\n                <h2 class="d-flex">{{\'order_num\' | translate}} 998745 <span class="end">10.000đ</span></h2>\n                <p>2, tháng 8, 2019, 03:14 am</p>\n\n            </ion-item>\n\n            <ion-item>\n                <h2 class="d-flex">{{\'order_num\' | translate}} Vietel trả truớc <span class="end">10.000đ</span></h2>\n                <p>2, tháng 8, 2019, 03:14 am</p>\n\n            </ion-item>\n        </ion-list>\n\n        <ion-list no-lines *ngSwitchCase="\'recharges\'">\n            <ion-item>\n                <h2 class="d-flex">{{\'order_num\' | translate}} Vietel trả truớc <span class="end">10.000đ</span></h2>\n                <p>2, tháng 8, 2019, 03:14 am</p>\n\n            </ion-item>\n        </ion-list>\n\n        <ion-list no-lines *ngSwitchCase="\'trickets\'">\n            <ion-item>\n                <h2 class="d-flex">{{\'order_num\' | translate}} Vietel trả truớc <span class="end">10.000đ</span></h2>\n                <p>2, tháng 8, 2019, 03:14 am</p>\n\n            </ion-item>\n        </ion-list>\n\n        <ion-list no-lines *ngSwitchCase="\'bill\'">\n            <ion-item>\n                <h2 class="d-flex">{{\'order_num\' | translate}} Vietel trả truớc <span class="end">10.000đ</span></h2>\n                <p>2, tháng 8, 2019, 03:14 am</p>\n\n            </ion-item>\n        </ion-list>\n        <ion-list no-lines *ngSwitchCase="\'shopping\'">\n            <ion-item>\n                <h2 class="d-flex">{{\'order_num\' | translate}} Vietel trả truớc <span class="end">10.000đ</span></h2>\n                <p>2, tháng 8, 2019, 04:45 am</p>\n\n\n\n            </ion-item>\n        </ion-list>\n\n        <ion-list no-lines *ngSwitchCase="\'travel\'">\n            <ion-item>\n                <h2 class="d-flex">{{\'order_num\' | translate}} Vietel trả truớc <span class="end">10.000đ</span></h2>\n                <p>2, tháng 8, 2019, 03:14 am</p>\n\n\n            </ion-item>\n        </ion-list>\n\n        <ion-list no-lines *ngSwitchCase="\'deals\'">\n            <ion-item>\n                <h2 class="d-flex">{{\'order_num\' | translate}} Vietel trả truớc <span class="end">10.000đ</span></h2>\n                <p>2, tháng 8, 2019, 04:45 am</p>\n\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/kadiesvu/12C APP/src/pages/my_orders/my_orders.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], My_ordersPage);
    return My_ordersPage;
}());

//# sourceMappingURL=my_orders.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__myprofile_myprofile__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__favorited_favorited__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notification_notification__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__help_help__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__condition_condition__ = __webpack_require__(224);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AccountPage = /** @class */ (function () {
    function AccountPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AccountPage.prototype.myprofile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__myprofile_myprofile__["a" /* MyprofilePage */]);
    };
    AccountPage.prototype.favorited = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__favorited_favorited__["a" /* FavoritedPage */]);
    };
    AccountPage.prototype.notification = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__notification_notification__["a" /* NotificationPage */]);
    };
    AccountPage.prototype.help = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__help_help__["a" /* HelpPage */]);
    };
    AccountPage.prototype.condition = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__condition_condition__["a" /* ConditionPage */]);
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"/Users/kadiesvu/12C APP/src/pages/account/account.html"*/'<ion-header class="header_bg bg-transparent">\n    <ion-navbar>\n        <ion-title>{{\'account\' | translate}}</ion-title>\n    </ion-navbar>\n    <div class="profile_box d-flex" (click)="myprofile()">\n        <div class="profile_img">\n            <img src="assets/imgs/profile_pic.png">\n        </div>\n        <div class="name_box">\n            <h2>12C Pay</h2>\n            <h3>{{\'view_profile\' | translate}}</h3>\n        </div>\n    </div>\n</ion-header>\n\n<ion-content class="bg-color">\n    <ion-list no-lines>\n\n        <ion-item (click)="notification()">\n            <div class="icon_box" item-start>\n                <img src="assets/imgs/ic_invite.png">\n            </div>\n            <h2>{{\'notifications\' | translate}}</h2>\n        </ion-item>\n        <ion-item (click)="help()">\n            <div class="icon_box" item-start>\n                <img src="assets/imgs/ic_help.png">\n            </div>\n            <h2>{{\'need_help\' | translate}}</h2>\n        </ion-item>\n        <ion-item>\n            <div class="icon_box" item-start>\n                <img src="assets/imgs/ic_rate.png">\n            </div>\n            <h2>{{\'rate_us\' | translate}}</h2>\n        </ion-item>\n        <ion-item (click)="condition()">\n            <div class="icon_box" item-start>\n                <img src="assets/imgs/ic_guideline.png">\n            </div>\n            <h2>{{\'terms_conditions\' | translate}}</h2>\n        </ion-item>\n\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/kadiesvu/12C APP/src/pages/account/account.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyprofilePage = /** @class */ (function () {
    function MyprofilePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    MyprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myprofile',template:/*ion-inline-start:"/Users/kadiesvu/12C APP/src/pages/myprofile/myprofile.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{\'my_profile\' | translate}}<span class="end text-theme">{{\'update\' | translate}}</span></ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-color">\n    <div class="profile-img">\n        <div class="img-box">\n            <img src="assets/imgs/profile_pic.png">\n        </div>\n        <h3 text-center>{{\'change_picture\' | translate}}</h3>\n    </div>\n    <div class="form">\n        <ion-list no-lines>\n            <ion-row>\n                <ion-col col-6>\n                    <ion-item>\n                        <ion-label floating>{{\'frist_name\' | translate}}</ion-label>\n                        <ion-input type="text" value="Sam"></ion-input>\n                    </ion-item>\n                </ion-col>\n                <ion-col col-6>\n                    <ion-item>\n                        <ion-label floating>{{\'last_name\' | translate}}</ion-label>\n                        <ion-input type="text" value="Smith"></ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <ion-item>\n                <ion-label floating>{{\'email_address\' | translate}}</ion-label>\n                <ion-input type="email" value="samanthasmith@mail.com"></ion-input>\n                <img src="assets/imgs/ic_verified.png" item-end>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>{{\'phone_number\' | translate}}</ion-label>\n                <ion-input type="text" value="+1 987 654 3210"></ion-input>\n                <img src="assets/imgs/ic_verified.png" item-end>\n            </ion-item>\n\n            <ion-row>\n                <ion-col col-6>\n                    <ion-item>\n                        <ion-label floating>{{\'gender\' | translate}}</ion-label>\n                        <ion-input type="text" value="Male"></ion-input>\n                    </ion-item>\n                </ion-col>\n                <ion-col col-6>\n                    <ion-item>\n                        <ion-label floating>{{\'date_of_birht\' | translate}}</ion-label>\n                        <ion-input type="text" value="23rd Dec, 1990"></ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n\n        </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/kadiesvu/12C APP/src/pages/myprofile/myprofile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], MyprofilePage);
    return MyprofilePage;
}());

//# sourceMappingURL=myprofile.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_info_item_info__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FavoritedPage = /** @class */ (function () {
    function FavoritedPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    FavoritedPage.prototype.item_info = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__item_info_item_info__["a" /* Item_infoPage */]);
    };
    FavoritedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favorited',template:/*ion-inline-start:"/Users/kadiesvu/12C APP/src/pages/favorited/favorited.html"*/'<ion-header class="bg-transparent">\n    <ion-navbar>\n        <ion-title>{{\'favorited\' | translate}}\n            <ion-icon class="material-icons end">search</ion-icon>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-color">\n    <ion-row>\n        <ion-col col-6 (click)="item_info()">\n            <div class="item-box">\n                <div class="img_box">\n                    <img src="assets/imgs/f1.png">\n                </div>\n                <h2>Spyworn white cotton shirt Xl</h2>\n                <p>$9.99</p>\n                <ion-icon class="material-icons favorite_icon">favorite</ion-icon>\n            </div>\n        </ion-col>\n        <ion-col col-6 (click)="item_info()">\n            <div class="item-box">\n                <div class="img_box">\n                    <img src="assets/imgs/f2.png">\n                </div>\n                <h2>Spyworn Blue cotton shirt Xl</h2>\n                <p>$9.99</p>\n                <ion-icon class="material-icons favorite_icon">favorite</ion-icon>\n            </div>\n        </ion-col>\n        <ion-col col-6 (click)="item_info()">\n            <div class="item-box">\n                <div class="img_box">\n                    <img src="assets/imgs/f3.png">\n                </div>\n                <h2>Spyworn white cotton shirt Xl</h2>\n                <p>$9.99</p>\n                <ion-icon class="material-icons favorite_icon">favorite</ion-icon>\n            </div>\n        </ion-col>\n        <ion-col col-6 (click)="item_info()">\n            <div class="item-box">\n                <div class="img_box">\n                    <img src="assets/imgs/f4.png">\n                </div>\n                <h2>Spyworn white cotton shirt Xl</h2>\n                <p>$9.99</p>\n                <ion-icon class="material-icons favorite_icon">favorite</ion-icon>\n            </div>\n        </ion-col>\n        <ion-col col-6 (click)="item_info()">\n            <div class="item-box">\n                <div class="img_box">\n                    <img src="assets/imgs/f1.png">\n                </div>\n                <h2>Spyworn white cotton shirt Xl</h2>\n                <p>$9.99</p>\n                <ion-icon class="material-icons favorite_icon">favorite</ion-icon>\n            </div>\n        </ion-col>\n        <ion-col col-6 (click)="item_info()">\n            <div class="item-box">\n                <div class="img_box">\n                    <img src="assets/imgs/f4.png">\n                </div>\n                <h2>Spyworn white cotton shirt Xl</h2>\n                <p>$9.99</p>\n                <ion-icon class="material-icons favorite_icon">favorite</ion-icon>\n            </div>\n        </ion-col>\n        <ion-col col-6 (click)="item_info()">\n            <div class="item-box">\n                <div class="img_box">\n                    <img src="assets/imgs/f1.png">\n                </div>\n                <h2>Spyworn white cotton shirt Xl</h2>\n                <p>$9.99</p>\n                <ion-icon class="material-icons favorite_icon">favorite</ion-icon>\n            </div>\n        </ion-col>\n        <ion-col col-6 (click)="item_info()">\n            <div class="item-box">\n                <div class="img_box">\n                    <img src="assets/imgs/f2.png">\n                </div>\n                <h2>Spyworn Blue cotton shirt Xl</h2>\n                <p>$9.99</p>\n                <ion-icon class="material-icons favorite_icon">favorite</ion-icon>\n            </div>\n        </ion-col>\n        <ion-col col-6 (click)="item_info()">\n            <div class="item-box">\n                <div class="img_box">\n                    <img src="assets/imgs/f3.png">\n                </div>\n                <h2>Spyworn white cotton shirt Xl</h2>\n                <p>$9.99</p>\n                <ion-icon class="material-icons favorite_icon">favorite</ion-icon>\n            </div>\n        </ion-col>\n        <ion-col col-6 (click)="item_info()">\n            <div class="item-box">\n                <div class="img_box">\n                    <img src="assets/imgs/f4.png">\n                </div>\n                <h2>Spyworn white cotton shirt Xl</h2>\n                <p>$9.99</p>\n                <ion-icon class="material-icons favorite_icon">favorite</ion-icon>\n            </div>\n        </ion-col>\n        <ion-col col-6 (click)="item_info()">\n            <div class="item-box">\n                <div class="img_box">\n                    <img src="assets/imgs/f1.png">\n                </div>\n                <h2>Spyworn white cotton shirt Xl</h2>\n                <p>$9.99</p>\n                <ion-icon class="material-icons favorite_icon">favorite</ion-icon>\n            </div>\n        </ion-col>\n        <ion-col col-6 (click)="item_info()">\n            <div class="item-box">\n                <div class="img_box">\n                    <img src="assets/imgs/f4.png">\n                </div>\n                <h2>Spyworn white cotton shirt Xl</h2>\n                <p>$9.99</p>\n                <ion-icon class="material-icons favorite_icon">favorite</ion-icon>\n            </div>\n        </ion-col>\n    </ion-row>\n</ion-content>\n'/*ion-inline-end:"/Users/kadiesvu/12C APP/src/pages/favorited/favorited.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], FavoritedPage);
    return FavoritedPage;
}());

//# sourceMappingURL=favorited.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationPage = /** @class */ (function () {
    function NotificationPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    NotificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notification',template:/*ion-inline-start:"/Users/kadiesvu/12C APP/src/pages/notification/notification.html"*/'<ion-header class="bg-transparent">\n    <ion-navbar>\n        <ion-title>{{\'notifications\' | translate}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-color">\n    <ion-list no-lines>\n        <ion-item class="active">\n            <h2 class="d-flex"><span>Bạn vừa nạp tiền Vietel trả truớc thành công</span>\n                <ion-icon class="material-icons end">fiber_manual_record</ion-icon>\n            </h2>\n            <p>Cách đay 2 giờ</p>\n        </ion-item>\n\n        <ion-item class="active">\n            <h2 class="d-flex"><span>Your order for Sqware white shirt has been dispatched</span>\n                <ion-icon class="material-icons end">fiber_manual_record</ion-icon>\n            </h2>\n            <p>Cách đay 2 giờ</p>\n        </ion-item>\n\n        <ion-item>\n            <h2 class="d-flex"><span>Bạn vừa nạp tiền Mobi trả truớc thành công</span>\n                <ion-icon class="material-icons end">fiber_manual_record</ion-icon>\n            </h2>\n            <p>Cách đay 2 giờ</p>\n        </ion-item>\n\n        <ion-item>\n            <h2 class="d-flex"><span>YBạn vừa nạp tiền Mobi trả truớc thành công.</span>\n                <ion-icon class="material-icons end">fiber_manual_record</ion-icon>\n            </h2>\n            <p>Cách đay 2 giờ</p>\n        </ion-item>\n\n        <ion-item>\n            <h2 class="d-flex"><span>Bạn vừa nạp tiền Mobi trả truớc thành công</span>\n                <ion-icon class="material-icons end">fiber_manual_record</ion-icon>\n            </h2>\n            <p>Cách đay 2 giờ</p>\n        </ion-item>\n\n        <ion-item>\n            <h2 class="d-flex"><span>Bạn vừa nạp tiền Mobi trả truớc thành công</span>\n                <ion-icon class="material-icons end">fiber_manual_record</ion-icon>\n            </h2>\n            <p>Cách đay 2 giờ</p>\n        </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/kadiesvu/12C APP/src/pages/notification/notification.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], NotificationPage);
    return NotificationPage;
}());

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HelpPage = /** @class */ (function () {
    function HelpPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HelpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-help',template:/*ion-inline-start:"/Users/kadiesvu/12C APP/src/pages/help/help.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{\'help\' | translate}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list no-lines>\n        <ion-item>\n            <h2>{{\'how_to_book\' | translate}}</h2>\n        </ion-item>\n        <ion-item>\n            <h2>{{\'how_to_pay\' | translate}}</h2>\n        </ion-item>\n        <ion-item>\n            <h2>{{\'how_to_cancel_booking\' | translate}}</h2>\n        </ion-item>\n        <ion-item>\n            <h2>{{\'how_to_complain_about_service\' | translate}}</h2>\n        </ion-item>\n        <ion-item>\n            <h2>{{\'what_is_service_charge\' | translate}}</h2>\n        </ion-item>\n        <ion-item>\n            <h2>{{\'verify_phone_number\' | translate}}</h2>\n        </ion-item>\n        <ion-item>\n            <h2>{{\'start_seling\' | translate}}</h2>\n        </ion-item>\n        <ion-item>\n            <h2>{{\'refund_policy\' | translate}}</h2>\n        </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/kadiesvu/12C APP/src/pages/help/help.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HelpPage);
    return HelpPage;
}());

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConditionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConditionPage = /** @class */ (function () {
    function ConditionPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ConditionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-condition',template:/*ion-inline-start:"/Users/kadiesvu/12C APP/src/pages/condition/condition.html"*/'<ion-header class="bg-transparent">\n    <ion-navbar>\n        <ion-title>{{\'terms_conditions\' | translate}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div class="banner center_img">\n        <img src="assets/imgs/banner2.png" class="crop_img">\n        <div class="logo">\n            <img src="assets/imgs/logo.png">\n        </div>\n    </div>\n    <div class="text_box">\n        <h2>{{\'terms_of_use\' | translate}}</h2>\n        <p>\n          Không được sử dụng trái phép Dịch vụ của chúng tôi. Ví dụ: không được gây trở ngại cho Dịch vụ của chúng tôi hoặc tìm cách truy cập chúng bằng phương pháp nào đó không thông qua giao diện và hướng dẫn mà chúng tôi cung cấp. Bạn chỉ có thể sử dụng Dịch vụ của chúng tôi theo như được luật pháp cho phép, bao gồm cả các luật và quy định hiện hành về quản lý xuất khẩu và tái xuất khẩu. Chúng tôi có thể tạm ngừng hoặc ngừng cung cấp Dịch vụ của chúng tôi cho bạn nếu bạn không tuân thủ các điều khoản hoặc chính sách của chúng tôi hoặc nếu chúng tôi đang điều tra hành vi bị nghi ngờ là sai phạm.        </p>\n        <p>\n          Việc bạn sử dụng Dịch vụ của chúng tôi không có nghĩa là bạn được sở hữu bất cứ các quyền sở hữu trí tuệ nào đối với Dịch vụ của chúng tôi hoặc nội dung mà bạn truy cập. Bạn không được sử dụng nội dung từ Dịch vụ của chúng tôi trừ khi bạn được chủ sở hữu nội dung đó cho phép hoặc được luật pháp cho phép. Các điều khoản này không cấp cho bạn quyền sử dụng bất kỳ thương hiệu hoặc lôgô nào được sử dụng trong Dịch vụ của chúng tôi. Không được xóa, che khuất hoặc thay đổi bất kỳ thông báo pháp lý nào được hiển thị trong hoặc kèm theo Dịch vụ của chúng tôi.\n        </p>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/kadiesvu/12C APP/src/pages/condition/condition.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ConditionPage);
    return ConditionPage;
}());

//# sourceMappingURL=condition.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotpasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signin_signin__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgotpasswordPage = /** @class */ (function () {
    function ForgotpasswordPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ForgotpasswordPage.prototype.signin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__signin_signin__["a" /* SigninPage */]);
    };
    ForgotpasswordPage.prototype.tabs = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    ForgotpasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forgotpassword',template:/*ion-inline-start:"/Users/kadiesvu/12C APP/src/pages/forgotpassword/forgotpassword.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title></ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div class="form">\n        <h2>{{\'forgot_password\' | translate}}</h2>\n        <p>{{\'forgot_password_text_1\' | translate}}<br>{{\'forgot_password_text_2\' | translate}}</p>\n        <ion-list no-lines>\n            <ion-item>\n                <ion-input type="text" placeholder="{{\'enter_code_here\' | translate}}" value="+1 987 654 3210"></ion-input>\n            </ion-item>\n            <button ion-button block class="btn" (click)="tabs()"> {{\'submit\' | translate}}</button>\n            <h3 text-center (click)="signin()">{{\'back\' | translate}}</h3>\n        </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/kadiesvu/12C APP/src/pages/forgotpassword/forgotpassword.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ForgotpasswordPage);
    return ForgotpasswordPage;
}());

//# sourceMappingURL=forgotpassword.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(247);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_http_loader__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_account_account__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_addmoney_addmoney__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_book_ticket_book_ticket__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_categories_categories__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_condition_condition__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_favorited_favorited__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_forgotpassword_forgotpassword__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_getpayment_getpayment__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_help_help__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_home_home__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_item_info_item_info__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_item_lists_item_lists__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_mall_mall__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_my_orders_my_orders__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_myprofile_myprofile__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_notification_notification__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_pay_or_send_pay_or_send__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_paymentsuccessful_paymentsuccessful__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_phonerecharge_phonerecharge__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_promocode_promocode__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_search_search__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_signin_signin__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_signup_signup__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_tabs_tabs__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_transaction_transaction__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_verification_verification__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_splash_screen__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_6__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_addmoney_addmoney__["a" /* AddmoneyPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_book_ticket_book_ticket__["a" /* Book_ticketPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_categories_categories__["a" /* CategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_condition_condition__["a" /* ConditionPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_favorited_favorited__["a" /* FavoritedPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_getpayment_getpayment__["a" /* GetpaymentPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_item_info_item_info__["a" /* Item_infoPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_item_lists_item_lists__["a" /* Item_listsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_mall_mall__["a" /* MallPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_my_orders_my_orders__["a" /* My_ordersPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_myprofile_myprofile__["a" /* MyprofilePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_pay_or_send_pay_or_send__["a" /* Pay_or_sendPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_paymentsuccessful_paymentsuccessful__["a" /* PaymentsuccessfulPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_phonerecharge_phonerecharge__["a" /* PhonerechargePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_promocode_promocode__["a" /* PromocodePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_transaction_transaction__["a" /* TransactionPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_verification_verification__["a" /* VerificationPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_addmoney_addmoney__["a" /* AddmoneyPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_book_ticket_book_ticket__["a" /* Book_ticketPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_categories_categories__["a" /* CategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_condition_condition__["a" /* ConditionPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_favorited_favorited__["a" /* FavoritedPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_getpayment_getpayment__["a" /* GetpaymentPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_item_info_item_info__["a" /* Item_infoPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_item_lists_item_lists__["a" /* Item_listsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_mall_mall__["a" /* MallPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_my_orders_my_orders__["a" /* My_ordersPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_myprofile_myprofile__["a" /* MyprofilePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_pay_or_send_pay_or_send__["a" /* Pay_or_sendPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_paymentsuccessful_paymentsuccessful__["a" /* PaymentsuccessfulPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_phonerecharge_phonerecharge__["a" /* PhonerechargePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_promocode_promocode__["a" /* PromocodePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_transaction_transaction__["a" /* TransactionPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_verification_verification__["a" /* VerificationPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_33__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_34__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_signin_signin__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__node_modules_ngx_translate_core__ = __webpack_require__(226);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { PromocodePage } from '../pages/promocode/promocode';


var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, translate) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.translate = translate;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_signin_signin__["a" /* SigninPage */];
        this.initializeApp();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.translate.setDefaultLang('en');
            _this.translate.use('en');
        });
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/kadiesvu/12C APP/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/kadiesvu/12C APP/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__node_modules_ngx_translate_core__["c" /* TranslateService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mall_mall__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_orders_my_orders__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pay_or_send_pay_or_send__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__account_account__ = __webpack_require__(219);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__mall_mall__["a" /* MallPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__pay_or_send_pay_or_send__["a" /* Pay_or_sendPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_3__my_orders_my_orders__["a" /* My_ordersPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_5__account_account__["a" /* AccountPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/kadiesvu/12C APP/src/pages/tabs/tabs.html"*/'<ion-tabs>\n    <ion-tab [root]="tab1Root" tabTitle="{{\'home\' | translate}}" tabsHideOnSubPages="true"></ion-tab>\n     <ion-tab [root]="tab3Root" tabTitle="{{\'scan\' | translate}}" tabsHideOnSubPages="true"></ion-tab>\n    <ion-tab [root]="tab4Root" tabTitle="{{\'orders\' | translate}}" tabsHideOnSubPages="true"></ion-tab>\n    <ion-tab [root]="tab5Root" tabTitle="{{\'account\' | translate}}" tabsHideOnSubPages="true"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/kadiesvu/12C APP/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item_infoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import {MyprofilePage} from '../myprofile/myprofile';
var Item_infoPage = /** @class */ (function () {
    function Item_infoPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.select_size = "XL";
        this.select_color = "light_blue";
    }
    Item_infoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-item_info',template:/*ion-inline-start:"/Users/kadiesvu/12C APP/src/pages/item_info/item_info.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <span class="icon_box end">\n                <ion-icon><img src="assets/imgs/ic_cart.png">\n                    <ion-badge item-end>2</ion-badge>\n                </ion-icon>\n            </span>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-color">\n    <div class="banner">\n        <ion-slides pager autoplay=3000>\n            <ion-slide>\n                <div class="img_box">\n                    <img src="assets/imgs/f2.png">\n                </div>\n            </ion-slide>\n            <ion-slide>\n                <div class="img_box">\n                    <img src="assets/imgs/f2.png">\n                </div>\n            </ion-slide>\n            <ion-slide>\n                <div class="img_box">\n                    <img src="assets/imgs/f2.png">\n                </div>\n            </ion-slide>\n        </ion-slides>\n    </div>\n\n    <div class="form">\n        <ion-list no-lines>\n            <ion-item>\n                <h2>Spyworn Blue Formal Fit cotton shirt Apple cut</h2>\n                <h4 class="d-flex">Spyworn Suits\n                    <span class="end icon">\n                        <ion-icon class="material-icons">favorite_border</ion-icon>\n                        <ion-icon class="material-icons">share</ion-icon>\n                    </span>\n                </h4>\n            </ion-item>\n            <ion-item>\n                <ion-label>{{\'select_size\' | translate}}</ion-label>\n                <ion-select [(ngModel)]="select_size">\n                    <ion-option value="m">M</ion-option>\n                    <ion-option value="l">L</ion-option>\n                    <ion-option value="XL">XL</ion-option>\n                    <ion-option value="XXL">XXL</ion-option>\n                </ion-select>\n                <ion-icon class="material-icons" item-end>keyboard_arrow_down</ion-icon>\n            </ion-item>\n            <ion-item>\n                <ion-label>{{\'select_color\' | translate}}</ion-label>\n                <ion-select [(ngModel)]="select_color">\n                    <ion-option value="light_blue">Light Blue</ion-option>\n                    <ion-option value="dark_blue">Dark Blue</ion-option>\n                    <ion-option value="white">White</ion-option>\n                    <ion-option value="black">Black</ion-option>\n                </ion-select>\n                <ion-icon class="material-icons" item-end>keyboard_arrow_down</ion-icon>\n            </ion-item>\n            <ion-item>\n                <p>\n                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,\n                </p>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-content>\n<ion-footer no-border class="d-flex">\n    <h2>$9.90</h2>\n    <button ion-button block class="btn end">{{\'add_to_cart\' | translate}}</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/kadiesvu/12C APP/src/pages/item_info/item_info.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], Item_infoPage);
    return Item_infoPage;
}());

//# sourceMappingURL=item_info.js.map

/***/ })

},[229]);
//# sourceMappingURL=main.js.map