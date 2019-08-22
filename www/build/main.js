webpackJsonp([0],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListDailyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_daily_detail_daily__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_daily_add_daily__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_server_server__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_server_account__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var ListDailyPage = /** @class */ (function () {
    function ListDailyPage(toast, myServer, account, navCtrl) {
        this.toast = toast;
        this.myServer = myServer;
        this.account = account;
        this.navCtrl = navCtrl;
        this.tong_so_daily = "";
        this.tong_tien = "";
        this.items = [];
        this.keyword = "";
        this.finding();
    }
    ListDailyPage.prototype.presentToast = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toast.create({
                            message: msg,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ListDailyPage.prototype.finding = function () {
        var _this = this;
        var dataPost = {
            "tuKhoa": this.keyword,
            "p": "1"
        };
        this.myServer.getRequest("DL/GetList", dataPost, function (data) {
            var stt = data["stt"];
            if (stt == 1) {
                var nf = Intl.NumberFormat();
                data = data["data"];
                _this.tong_so_daily = nf.format(data["recordCount"]);
                _this.tong_tien = nf.format(data["total1"]);
                var lst = data["lst"];
                for (var i = 0; i < lst.length; i++) {
                    var dataItem = {};
                    dataItem["login_id"] = lst[i]["loginID"];
                    dataItem["ten"] = lst[i]["caption"];
                    dataItem["sotien"] = nf.format(lst[i]["money"]);
                    dataItem["ngay_tao"] = lst[i]["createDate_text2"];
                    dataItem["trang_thai"] = lst[i]["status"];
                    dataItem["id"] = lst[i]["id"];
                    _this.items.push(dataItem);
                }
            }
        });
    };
    ListDailyPage.prototype.openAddDaily = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__add_daily_add_daily__["a" /* AddDailyPage */]);
    };
    ListDailyPage.prototype.viewDetail = function (loginID) {
        var _this = this;
        var postData = {
            "id": Number(loginID.toString())
        };
        this.myServer.getRequest("DL/Get1DL", postData, function (data) {
            var stt = data["stt"];
            if (stt == 1) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__detail_daily_detail_daily__["a" /* DetailDailyPage */], {
                    dataPage: data["data"]
                });
            }
            else {
                _this.presentToast(data["msg"]);
            }
        });
    };
    ListDailyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-list_daily',template:/*ion-inline-start:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/list_daily/list_daily.html"*/'<ion-header class="bg-transparent">\n    <ion-navbar>\n        <ion-title><span text-uppercase style="text-align:center">DANH SÁCH ĐẠI LÝ</span></ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-color">\n        <ion-grid >\n                <ion-row justify-content-center align-items-center >\n                  <ion-card id = "login-card">\n                    <form >\n                      <ion-list>\n            \n                        <ion-item>\n                          <ion-label fixed>Từ khóa : </ion-label>\n                          <ion-input type="text"  placeholder="Chọn từ khóa..." [(ngModel)]="keyword" [ngModelOptions]="{standalone: true}"></ion-input>\n                        </ion-item>\n            \n                        <div padding>\n                          <button ion-button color="primary" block (click) = "finding()" >TÌM KIẾM</button>\n                          <button ion-button color="secondary" block (click)="openAddDaily()">THÊM ĐẠI LÝ</button>\n                        </div>\n                        \n                      </ion-list>\n                    </form>\n                  </ion-card>\n                </ion-row>\n              </ion-grid>\n    \n        <div>\n            <ion-card >\n        <ion-grid>\n            <ion-row>\n                <ion-col>\n                        <ion-label class="title_all" style="font-weight:bold;color:#694efe;text-align:center" >Tổng số đại lý</ion-label>\n                        <ion-label class="title_all" style="text-align:center;font-size:30px">{{tong_so_daily}}</ion-label>\n                </ion-col>\n                <ion-col>\n                        <ion-label  class="title_all" style="font-weight:bold;color:#ed3a44;text-align:center"  >Tổng tiền</ion-label>\n                        <ion-label class="title_all" style="text-align:center;font-size:30px">{{tong_tien}}</ion-label>\n                </ion-col>\n                \n            </ion-row>\n        </ion-grid>\n    </ion-card>\n    </div>\n    \n    <ion-item style="background:#34db61">\n            <ion-label style="text-align:center;font-weight:bold;color:white">Login ID</ion-label>\n            <ion-label style="text-align:center;font-weight:bold;color:white">Tên</ion-label>\n            <ion-label style="text-align:center;font-weight:bold;color:white">Số tiền</ion-label>\n            <ion-label style="text-align:center;font-weight:bold;color:white">Ngày tạo</ion-label>\n            <ion-label style="text-align:center;font-weight:bold;color:white">Trạng thái</ion-label>\n    </ion-item>\n<ion-list>\n<ion-item *ngFor = "let item of items">\n    <ion-label style="text-align:center;font-weight:bold;color:#3184fe" (click)="viewDetail(item[\'id\'])">{{item[\'login_id\']}}</ion-label>\n    <ion-label style="text-align:center">{{item[\'ten\']}}</ion-label>\n    <ion-label style="text-align:center">{{item[\'sotien\']}}</ion-label>\n    <ion-label style="text-align:center">{{item[\'ngay_tao\']}}</ion-label>\n    <ion-label style="text-align:center">{{item[\'trang_thai\']}}</ion-label>\n\n</ion-item>\n</ion-list>\n</ion-content>\n\n'/*ion-inline-end:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/list_daily/list_daily.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__providers_server_server__["a" /* Server */], __WEBPACK_IMPORTED_MODULE_5__providers_server_account__["a" /* Account */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], ListDailyPage);
    return ListDailyPage;
}());

//# sourceMappingURL=list_daily.js.map

/***/ }),

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Account; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Account = /** @class */ (function () {
    function Account() {
    }
    Account.prototype.SaveDataLogin = function (data) {
        data = data["data"];
        this.token = data["token"];
        this.id = data["id"];
        this.uId = data["uId"];
        this.ten = data["ten"];
        this.sotien = data["sotien"];
        this.isSpec = data["isSpec"];
    };
    Account.prototype.GetToken = function () {
        return this.token;
    };
    Account.prototype.GetSotien = function () {
        return this.sotien;
    };
    Account.prototype.UpdateSotien = function (st) {
        console.log("UpdateSotien:" + st);
        this.sotien = st;
    };
    Account = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Account);
    return Account;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailGiaoDichPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_server_server__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_server_account__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var DetailGiaoDichPage = /** @class */ (function () {
    function DetailGiaoDichPage(alertCtrl, toast, myServer, account, navCtrl, navParams) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.toast = toast;
        this.myServer = myServer;
        this.account = account;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.id = this.navParams.get("id_giaodich");
        console.log("id_giadich:" + this.id);
        var postData = {
            "id": this.id
        };
        this.myServer.postRequest("CTH/Get1", postData, function (data) {
            var stt = data["stt"];
            if (stt == 1) {
                data = data["data"];
                _this.init(data);
            }
        });
    }
    DetailGiaoDichPage.prototype.init = function (data) {
        this.status = data["status"];
        this.tt_the = "Thẻ " + data["loaiTaiKhoan"] + ", Số Tiền : " + data["hanMuc"];
        this.phoneNum = data["taiKhoanCanNap"];
        this.danap = data["daNap"];
        this.result_nap = data["note"];
    };
    DetailGiaoDichPage.prototype.presentToast = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toast.create({
                            message: msg,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    DetailGiaoDichPage.prototype.check = function () {
        var _this = this;
        var postData = {
            "id": this.id
        };
        this.myServer.postRequest("CTH/Get1", postData, function (data) {
            var stt = data["stt"];
            if (stt == 1) {
                _this.init(data["data"]);
                _this.presentToast(data["msg"]);
            }
        });
    };
    DetailGiaoDichPage.prototype.cancel = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Xác nhận lại!',
            message: 'Bạn chắc chắn muốn hủy?',
            buttons: [
                {
                    text: 'Hủy Bỏ',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Đồng Ý',
                    handler: function () {
                        var postData = {
                            "id": _this.id
                        };
                        _this.myServer.getRequest("CTH/Cancel", postData, function (data) {
                            var stt = data["stt"];
                            if (stt == 1) {
                                _this.init(data["data"]);
                                _this.presentToast(data["msg"]);
                            }
                            else {
                                _this.presentToast(data["msg"]);
                            }
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    DetailGiaoDichPage.prototype.delete = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Xác nhận lại!',
            message: 'Bạn chắc chắn muốn xóa, chức năng này sẽ KHÔNG HOÀN TIỀN, nó giúp bạn xóa những yêu cầu không muốn nhìn thấy nữa?',
            buttons: [
                {
                    text: 'Hủy Bỏ',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Đồng Ý',
                    handler: function () {
                        var postData = {
                            "id": _this.id
                        };
                        _this.myServer.getRequest("CTH/Delete", postData, function (data) {
                            var stt = data["stt"];
                            if (stt == 1) {
                                _this.init(data["data"]);
                                _this.presentToast(data["msg"]);
                            }
                            else {
                                _this.presentToast(data["msg"]);
                            }
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    DetailGiaoDichPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-detail_giaodich',template:/*ion-inline-start:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/detail_giaodich/detail_giaodich.html"*/'<ion-header class="bg-transparent">\n    <ion-navbar>\n        <ion-title><span text-uppercase class="center">Chi tiết giao dịch</span></ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-color">\n        <ion-card>\n                <ion-item>\n                        <div>\n                                <button style="width:150px;height:50px;font-weight: bold;background-color:#007ffe;color:white" ion-button  (click) = "check()" >KIỂM TRA</button>\n                                <button style="width:150px;height:50px;font-weight: bold;background-color:#d92f48;color:white" ion-button  (click)="cancel()">HỦY YÊU CẦU</button>\n                                <button style="width:150px;height:50px;font-weight: bold;background-color:#ffbc20;color:black" ion-button  (click)="delete()">XÓA LỆNH</button>\n                                </div>\n                </ion-item>\n        </ion-card>\n\n\n\n    <ion-card>\n        <ion-label style="font-weight: bold;font-size:30px;text-align: center;color:#3184fe " >THÔNG TIN</ion-label>\n        <ion-item>\n                <ion-label style="margin-left: 20px" color="primary">TT thẻ <span style="color:#34db61">({{status}})</span> : </ion-label>\n                <ion-input disabled ="true" style="color:black" [(ngModel)]="tt_the"></ion-input>\n        </ion-item>\n        <hr>\n        <ion-item>\n                <ion-label style="margin-left: 20px" color="primary">Số điện thoại nạp : </ion-label>\n                <ion-input disabled ="true" [(ngModel)]="phoneNum"></ion-input>\n        </ion-item>\n        <hr>\n        <ion-item>\n                <ion-label style="margin-left: 20px" color="primary">Số tiền đã nạp : </ion-label>\n                <ion-input disabled ="true"  [(ngModel)]="danap"></ion-input>\n        </ion-item>\n        <hr>\n        <ion-item>\n                <ion-label style="margin-left: 20px" color="primary">Kết quả nạp : </ion-label>\n                \n        </ion-item>\n        <div style="height:100px">\n                        <ion-textarea disabled ="true"   [(ngModel)]="result_nap"></ion-textarea>\n        </div>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/detail_giaodich/detail_giaodich.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1__providers_server_server__["a" /* Server */], __WEBPACK_IMPORTED_MODULE_2__providers_server_account__["a" /* Account */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavParams */]])
    ], DetailGiaoDichPage);
    return DetailGiaoDichPage;
}());

//# sourceMappingURL=detail_giaodich.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhonerechargePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__promocode_promocode__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_server_server__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_server_account__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var PhonerechargePage = /** @class */ (function () {
    function PhonerechargePage(account, events, toast, alertCtrl, myServer, navCtrl, modalCtrl) {
        var _this = this;
        this.account = account;
        this.events = events;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.myServer = myServer;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.sotienTmp = 0;
        this.accountCanNap = "";
        this.select_operator = "";
        this.countService = 0;
        this.chietKhau = 0;
        this.myServer.postRequest("Login/GetUInfo", null, function (data) {
            _this.dataGetUIInfo = data["data"];
            _this.initChietKhauAll();
        });
        this.myServer.getRequest("CTH/admin_getPlaying", null, function (data) {
            _this.dataAdminIsPlaying = data["data"];
            _this.initChietKhauAll();
        });
    }
    PhonerechargePage.prototype.initChietKhauAll = function () {
        this.countService++;
        if (this.countService < 2)
            return;
        var prefix = "vt";
        if (this.dataAdminIsPlaying["the" + prefix.toUpperCase()]["isPlaying"]) {
            this.chietkhau_vt = "(" + this.dataGetUIInfo["tyLeMuaThe_" + prefix] + "%)";
        }
        else {
            this.chietkhau_vt = "(Bảo Trì)";
        }
        prefix = "vn";
        if (this.dataAdminIsPlaying["the" + prefix.toUpperCase()]["isPlaying"]) {
            this.chietkhau_mb = "(" + this.dataGetUIInfo["tyLeMuaThe_" + prefix] + "%)";
        }
        else {
            this.chietkhau_mb = "(Bảo Trì)";
        }
        prefix = "mb";
        if (this.dataAdminIsPlaying["the" + prefix.toUpperCase()]["isPlaying"]) {
            this.chietkhau_mb = "(" + this.dataGetUIInfo["tyLeMuaThe_" + prefix] + "%)";
        }
        else {
            this.chietkhau_mb = "(Bảo Trì)";
        }
        this.select_operator = "vt";
        this.chietKhau = this.dataGetUIInfo["tyLeMuaThe_" + this.select_operator];
    };
    PhonerechargePage.prototype.addMoney = function (money) {
        var nf = Intl.NumberFormat();
        this.sotienTmp += money;
        this.sotien = nf.format(this.sotienTmp) + " = " + nf.format(this.sotienTmp * (this.chietKhau / 100.0));
    };
    PhonerechargePage.prototype.onChangeCardType = function (prefix) {
        this.chietKhau = this.dataGetUIInfo["tyLeMuaThe_" + prefix];
    };
    PhonerechargePage.prototype.presentConfirm = function () {
        var _this = this;
        if (this.accountCanNap == "") {
            this.presentToast("Chưa nhập số điện thoại cần nạp!");
            return;
        }
        else if (this.select_operator == "") {
            this.presentToast("Chưa chọn nhà mạng!");
            return;
        }
        else if (this.sotienTmp == 0) {
            this.presentToast("Chưa chọn giá tiền!");
            return;
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Bạn chắc chắn đây là số trả trước?',
                message: 'Mọi sai sót do nhập số trả sau hay sai số điện thoại sẽ không được hoàn tiền. Nếu chưa chắc chắn hãy gọi số tổng đài để xác minh lại',
                buttons: [
                    {
                        text: 'Hủy Bỏ',
                        role: 'cancel',
                        handler: function () {
                        }
                    },
                    {
                        text: 'Đồng Ý',
                        handler: function () {
                            console.log('Buy clicked');
                            _this.naptien();
                        }
                    }
                ]
            });
            alert_1.present();
        }
    };
    PhonerechargePage.prototype.resetMoney = function () {
        this.sotienTmp = 0;
        this.sotien = this.sotienTmp.toString();
    };
    PhonerechargePage.prototype.presentToast = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toast.create({
                            message: msg,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    PhonerechargePage.prototype.naptien = function () {
        var _this = this;
        var postData = {
            "menhGia": this.sotienTmp,
            "phoneNum": this.accountCanNap,
            "cardType": this.select_operator
        };
        this.myServer.postRequest("CTH/RegCharge", postData, function (data) {
            var stt = data["stt"];
            if (stt == 1) {
                _this.presentToast("Đăng ký nạp tiền điện thoại thành công!");
                _this.account.UpdateSotien(data["data"]["st"]);
                _this.events.publish('updateScreen');
            }
            else {
                _this.presentToast(data["msg"]);
            }
        });
    };
    PhonerechargePage.prototype.promocode = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__promocode_promocode__["a" /* PromocodePage */]);
        modal.present();
    };
    PhonerechargePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-phonerecharge',template:/*ion-inline-start:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/phonerecharge/phonerecharge.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{\'phone_recharge\' | translate}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div class="form">\n        <ion-list no-lines>\n            \n            <ion-item>\n                <ion-input [(ngModel)] = "accountCanNap" type="text" placeholder="{{\'enter_phone_number\' | translate}}"></ion-input>\n                <ion-icon class="material-icons" item-end>account_box</ion-icon>\n            </ion-item>\n            <ion-item>\n                <!--                <ion-input type="text" placeholder="{{\'select_operator\' | translate}}"></ion-input>-->\n                <ion-label>{{\'select_operator\' | translate}}</ion-label>\n                <ion-select [(ngModel)]="select_operator" (ionChange) = "onChangeCardType($event)">\n                    <ion-option value="vt">\n                      <img src="asset/imgs/iconviettel.png" />\n                      Vietel {{chietkhau_vt}}</ion-option>\n                    <ion-option value="mb">Mobiphone {{chietkhau_mb}}</ion-option>\n                    <ion-option value="vn">Vinaphone {{chietkhau_vn}}</ion-option>\n                </ion-select>\n                <ion-icon class="material-icons" item-end>keyboard_arrow_down</ion-icon>\n            </ion-item>\n\n\n        </ion-list>\n\n\n        <form id="calculator-form1">\n            <ion-item id="calculator-input1">\n                <ion-label></ion-label>\n                <ion-input type="text" placeholder="0" name="display" [(ngModel)]="sotien">0</ion-input>\n            </ion-item>\n        </form>\n\n\n            <button   ion-button color="energized" (click)="addMoney(10000)"> 10.000 </button>\n            <button ion-button color="energized" (click)="addMoney(20000)"> 20.000 </button>\n            <button ion-button color="energized" (click)="addMoney(50000)"> 50.000 </button>\n            <button ion-button color="energized" (click)="addMoney(100000)"> 100.000 </button>\n            <button ion-button color="energized" (click)="addMoney(200000)"> 200.000 </button>\n            <button ion-button color="energized" (click)="addMoney(500000)"> 500.000 </button>\n            <button   ion-button color="energized" (click)="resetMoney()"> Xoá </button>\n\n\n\n               <button ion-button block class="btn" (click)="presentConfirm()"> {{\'pay_via_quickpay\' | translate}}</button>\n   </div>\n    <div class="banner">\n        <div class="banner_img">\n            <img src="assets/imgs/banner3.png">\n        </div>\n        <div class="banner_text" text-right>\n            <h3 text-uppercase>Nạp tièn điện thoại</h3>\n            <h2>Chiết khấu cao</h2>\n            <h4 text-uppercase>{{\'shop_now\' | translate}}</h4>\n        </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/phonerecharge/phonerecharge.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_server_account__["a" /* Account */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_server_server__["a" /* Server */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], PhonerechargePage);
    return PhonerechargePage;
}());

//# sourceMappingURL=phonerecharge.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Book_ticketPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__paymentsuccessful_paymentsuccessful__ = __webpack_require__(222);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-book_ticket',template:/*ion-inline-start:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/book_ticket/book_ticket.html"*/'<ion-header class="header_bg bg-transparent">\n    <ion-navbar>\n        <ion-title>{{\'book_a_ticket\' | translate}}\n        </ion-title>\n    </ion-navbar>\n    <ion-segment [(ngModel)]="book_ticket">\n        <ion-segment-button value="train_ticket">\n            <img src="assets/imgs/ic_train.png">\n            <p>{{\'train_ticket\' | translate}} </p>\n        </ion-segment-button>\n        <ion-segment-button value="flights">\n            <img src="assets/imgs/ic_flights.png">\n            <p>{{\'flights\' | translate}} </p>\n        </ion-segment-button>\n        <ion-segment-button value="bus">\n            <img src="assets/imgs/ic_bus.png">\n            <p>{{\'bus\' | translate}} </p>\n        </ion-segment-button>\n    </ion-segment>\n</ion-header>\n\n<ion-content>\n    <div class="tab_container" [ngSwitch]="book_ticket">\n        <div class="form" *ngSwitchCase="\'train_ticket\'">\n            <ion-list no-lines>\n                <ion-item>\n                    <ion-label>{{\'from\' | translate}}</ion-label>\n                    <ion-select [(ngModel)]="from">\n                        <ion-option value="brookly">Brooklyn</ion-option>\n                        <ion-option value="smithtowm">Smithtowm</ion-option>\n                    </ion-select>\n                    <ion-icon class="material-icons" item-end>keyboard_arrow_down</ion-icon>\n                </ion-item>\n\n                <ion-item>\n                    <ion-label>{{\'to\' | translate}}</ion-label>\n                    <ion-select [(ngModel)]="to">\n                        <ion-option value="brookly">Brooklyn</ion-option>\n                        <ion-option value="smithtowm">Smithtowm</ion-option>\n                    </ion-select>\n                    <ion-icon class="material-icons" item-end>keyboard_arrow_down</ion-icon>\n                </ion-item>\n\n                <ion-item>\n                    <ion-icon class="material-icons" item-start>today</ion-icon>\n                    <ion-input type="text" placeholder="{{\'depart_date\' | translate}}"></ion-input>\n                    <h4 item-end><span class="active"> {{\'today\' | translate}}</span> | <span>{{\'tommarrow\' | translate}}</span></h4>\n                </ion-item>\n            </ion-list>\n\n            <ion-row class="type_of_sheet">\n                <ion-col col-3>\n                    <div class="sheets" text-center>\n                        <div class="img_box">\n                            <img src="assets/imgs/ac.png">\n                        </div>\n                        <p>AC</p>\n                    </div>\n                </ion-col>\n                <ion-col col-3>\n                    <div class="sheets" text-center>\n                        <div class="img_box">\n                            <img src="assets/imgs/non-sc.png">\n                        </div>\n                        <p>Non AC</p>\n                    </div>\n                </ion-col>\n                <ion-col col-3>\n                    <div class="sheets" text-center>\n                        <div class="img_box">\n                            <img src="assets/imgs/seater.png">\n                        </div>\n                        <p>Seater</p>\n                    </div>\n                </ion-col>\n                <ion-col col-3 class="active">\n                    <div class="sheets" text-center>\n                        <div class="img_box">\n                            <img src="assets/imgs/sleeper.png">\n                        </div>\n                        <p>Sleeper</p>\n                    </div>\n                </ion-col>\n            </ion-row>\n        </div>\n\n        <div class="form" *ngSwitchCase="\'flights\'">\n            <ion-list no-lines>\n                <ion-item>\n                    <p item-start text-end>{{\'one_way\' | translate}}</p>\n                    <ion-toggle checked="false"></ion-toggle>\n                    <p item-end text-start>{{\'round_trip\' | translate}}</p>\n                </ion-item>\n\n                <ion-item>\n                    <ion-label>{{\'from\' | translate}}</ion-label>\n                    <ion-select [(ngModel)]="flights_from">\n                        <ion-option value="new_york">New York (JFK)</ion-option>\n                        <ion-option value="toronto">Toronto (YTZ)</ion-option>\n                    </ion-select>\n                    <ion-icon class="material-icons" item-end>keyboard_arrow_down</ion-icon>\n                </ion-item>\n\n                <ion-item>\n                    <ion-label>{{\'to\' | translate}}</ion-label>\n                    <ion-select [(ngModel)]="flights_to">\n                        <ion-option value="new_york">New York (JFK)</ion-option>\n                        <ion-option value="toronto">Toronto (YTZ)</ion-option>\n                    </ion-select>\n                    <ion-icon class="material-icons" item-end>keyboard_arrow_down</ion-icon>\n                </ion-item>\n\n                <ion-row>\n                    <ion-col col-6>\n                        <ion-item>\n                            <ion-icon class="material-icons" item-start>today</ion-icon>\n                            <ion-input type="text" placeholder="{{\'depart_date\' | translate}}"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col col-6>\n                        <ion-item>\n                            <ion-icon class="material-icons" item-start>today</ion-icon>\n                            <ion-input type="text" placeholder="{{\'return_date\' | translate}}"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col col-4>\n                        <ion-item>\n                            <ion-input type="text" placeholder="{{\'abult\' | translate}}"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col col-4>\n                        <ion-item>\n                            <ion-input type="text" placeholder="{{\'child\' | translate}}"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col col-4>\n                        <ion-item>\n                            <ion-input type="text" placeholder="{{\'infant\' | translate}}"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n\n                <ion-item style="margin-top: 0;">\n                    <ion-label>{{\'class\' | translate}}</ion-label>\n                    <ion-select [(ngModel)]="claas">\n                        <ion-option value="business">Business</ion-option>\n                        <ion-option value="economy">Economy</ion-option>\n                    </ion-select>\n                    <ion-icon class="material-icons" item-end>keyboard_arrow_down</ion-icon>\n                </ion-item>\n            </ion-list>\n        </div>\n\n        <div class="form" *ngSwitchCase="\'bus\'">\n            <ion-list no-lines>\n                <ion-item>\n                    <ion-label>{{\'from\' | translate}}</ion-label>\n                    <ion-select [(ngModel)]="from">\n                        <ion-option value="brookly">Brooklyn</ion-option>\n                        <ion-option value="smithtowm">Smithtowm</ion-option>\n                    </ion-select>\n                    <ion-icon class="material-icons" item-end>keyboard_arrow_down</ion-icon>\n                </ion-item>\n\n                <ion-item>\n                    <ion-label>{{\'to\' | translate}}</ion-label>\n                    <ion-select [(ngModel)]="to">\n                        <ion-option value="brookly">Brooklyn</ion-option>\n                        <ion-option value="smithtowm">Smithtowm</ion-option>\n                    </ion-select>\n                    <ion-icon class="material-icons" item-end>keyboard_arrow_down</ion-icon>\n                </ion-item>\n\n                <ion-item>\n                    <ion-icon class="material-icons" item-start>today</ion-icon>\n                    <ion-input type="text" placeholder="{{\'depart_date\' | translate}}"></ion-input>\n                    <h4 item-end><span class="active"> {{\'today\' | translate}}</span> | <span>{{\'tommarrow\' | translate}}</span></h4>\n                </ion-item>\n\n                <ion-row>\n                    <ion-col col-4>\n                        <ion-item>\n                            <ion-input type="text" placeholder="{{\'abult\' | translate}}"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col col-4>\n                        <ion-item>\n                            <ion-input type="text" placeholder="{{\'child\' | translate}}"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col col-4>\n                        <ion-item>\n                            <ion-input type="text" placeholder="{{\'infant\' | translate}}"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n            </ion-list>\n\n            <ion-row class="type_of_sheet">\n                <ion-col col-3>\n                    <div class="sheets" text-center>\n                        <div class="img_box">\n                            <img src="assets/imgs/ac.png">\n                        </div>\n                        <p>AC</p>\n                    </div>\n                </ion-col>\n                <ion-col col-3>\n                    <div class="sheets" text-center>\n                        <div class="img_box">\n                            <img src="assets/imgs/non-sc.png">\n                        </div>\n                        <p>Non AC</p>\n                    </div>\n                </ion-col>\n                <ion-col col-3>\n                    <div class="sheets" text-center>\n                        <div class="img_box">\n                            <img src="assets/imgs/seater.png">\n                        </div>\n                        <p>Seater</p>\n                    </div>\n                </ion-col>\n                <ion-col col-3 class="active">\n                    <div class="sheets" text-center>\n                        <div class="img_box">\n                            <img src="assets/imgs/sleeper.png">\n                        </div>\n                        <p>Sleeper</p>\n                    </div>\n                </ion-col>\n            </ion-row>\n        </div>\n    </div>\n</ion-content>\n<ion-footer no-border>\n    <button ion-button block class="btn" *ngIf="book_ticket == \'train_ticket\'" (click)="paymentsuccessful()"> {{\'search_trains\' | translate}}</button>\n    <button ion-button block class="btn" *ngIf="book_ticket == \'flights\'"> {{\'search_flights\' | translate}}</button>\n    <button ion-button block class="btn" *ngIf="book_ticket == \'bus\'"> {{\'search_buses\' | translate}}</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/book_ticket/book_ticket.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], Book_ticketPage);
    return Book_ticketPage;
}());

//# sourceMappingURL=book_ticket.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KplusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__promocode_promocode__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_server_server__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_server_account__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var KplusPage = /** @class */ (function () {
    function KplusPage(account, events, toast, alertCtrl, myServer, navCtrl, modalCtrl) {
        var _this = this;
        this.account = account;
        this.events = events;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.myServer = myServer;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.sotienTmp = 0;
        this.phoneNum = "";
        this.countService = 0;
        this.chietKhau = 0;
        this.myServer.postRequest("Login/GetUInfo", null, function (data) {
            _this.dataGetUIInfo = data["data"];
            _this.initChietKhauAll();
        });
        this.myServer.getRequest("CTH/admin_getPlaying", null, function (data) {
            _this.dataAdminIsPlaying = data["data"];
            _this.initChietKhauAll();
        });
    }
    KplusPage.prototype.initChietKhauAll = function () {
        this.countService++;
        if (this.countService < 2)
            return;
        this.soThang = "1";
        this.chietKhau = this.dataGetUIInfo["tyLeMuaKplus"];
        this.chietkhau_kplus = "(" + this.chietKhau + "%)";
        this.sotienTmp = 255000;
        var nf = Intl.NumberFormat();
        this.sotien = nf.format(this.sotienTmp) + " = " + nf.format(this.sotienTmp * (this.chietKhau / 100.0));
    };
    KplusPage.prototype.onChange = function (thang) {
        console.log("vao day cai ne:" + thang);
        this.soThang = thang.toString();
        if (this.soThang == "1") {
            this.sotienTmp = 255000;
        }
        else if (this.soThang == "3") {
            this.sotienTmp = 675000;
        }
        else if (this.soThang == "6") {
            this.sotienTmp = 1410000;
        }
        else if (this.soThang == "12") {
            this.sotienTmp = 2700000;
        }
        var nf = Intl.NumberFormat();
        this.sotien = nf.format(this.sotienTmp) + " = " + nf.format(this.sotienTmp * (this.chietKhau / 100.0));
    };
    KplusPage.prototype.presentConfirm = function () {
        var _this = this;
        if (this.phoneNum == "") {
            this.presentToast("Chưa nhập tài khoản!");
            return;
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Bạn chắc chắn đây là số trả trước?',
                message: 'Mọi sai sót do nhập số trả sau hay sai số điện thoại sẽ không được hoàn tiền. Nếu chưa chắc chắn hãy gọi số tổng đài để xác minh lại',
                buttons: [
                    {
                        text: 'Hủy Bỏ',
                        role: 'cancel',
                        handler: function () {
                        }
                    },
                    {
                        text: 'Đồng Ý',
                        handler: function () {
                            _this.naptien();
                        }
                    }
                ]
            });
            alert_1.present();
        }
    };
    KplusPage.prototype.resetMoney = function () {
        this.sotienTmp = 0;
        this.sotien = this.sotienTmp.toString();
    };
    KplusPage.prototype.presentToast = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toast.create({
                            message: msg,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    KplusPage.prototype.naptien = function () {
        var _this = this;
        var postData = {
            "menhGia": Number(this.sotienTmp),
            "phoneNum": this.phoneNum,
            "cardType": "kplus",
            "soThang": this.soThang,
        };
        this.myServer.postRequest("CTH/RegCharge", postData, function (data) {
            var stt = data["stt"];
            if (stt == 1) {
                _this.presentToast("Đăng ký gia hạn Kplus thành công!");
                _this.account.UpdateSotien(data["data"]["st"]);
                _this.events.publish('updateScreen');
            }
            else {
                _this.presentToast(data["msg"]);
            }
        });
    };
    KplusPage.prototype.promocode = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__promocode_promocode__["a" /* PromocodePage */]);
        modal.present();
    };
    KplusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-kplus',template:/*ion-inline-start:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/kplus/kplus.html"*/'<ion-header>\n  <ion-navbar>\n      <ion-title>{{\'kplus\' | translate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="form">\n      <ion-list no-lines>\n\n          <ion-item>\n              <ion-input [(ngModel)] = "phoneNum" type="text" placeholder="{{\'Tài khoản\' | translate}}" ></ion-input>\n\n          </ion-item>\n          <ion-item>\n              <!--                <ion-input type="text" placeholder="{{\'select_operator\' | translate}}"></ion-input>-->\n              <ion-label>{{\'select_time\' | translate}} </ion-label>\n              <ion-select [(ngModel)]="soThang" (ionChange) = "onChange($event)">\n                  <ion-option value="1">\n                     1 Tháng</ion-option>\n                  <ion-option value="3">3 Tháng </ion-option>\n                  <ion-option value="6">6 Tháng</ion-option>\n                  <ion-option value="12">1 Năm</ion-option>\n                </ion-select>\n\n           </ion-item>\n\n\n      </ion-list>\n\n\n      <form id="calculator-form1">\n          <ion-item id="calculator-input1">\n              <ion-label></ion-label>\n              <ion-input type="text" placeholder="0" name="display" [(ngModel)]="sotien">0</ion-input>\n          </ion-item>\n      </form>\n\n\n\n\n\n\n             <button ion-button block class="btn" (click)="presentConfirm()"> {{\'pay_via_quickpay\' | translate}}</button>\n </div>\n  <div class="banner">\n      <div class="banner_img">\n          <img src="assets/imgs/banner3.png">\n      </div>\n      <div class="banner_text" text-right>\n          <h3 text-uppercase>Nạp tièn điện thoại</h3>\n          <h2>Chiết khấu cao</h2>\n          <h4 text-uppercase>{{\'shop_now\' | translate}}</h4>\n      </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/kplus/kplus.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_server_account__["a" /* Account */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_server_server__["a" /* Server */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], KplusPage);
    return KplusPage;
}());

//# sourceMappingURL=kplus.js.map

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Server; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_server_account__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Server = /** @class */ (function () {
    function Server(account, http) {
        this.account = account;
        this.http = http;
    }
    Server.prototype.sendRequest = function (subLink, postData, callback) {
        console.log("sendRequest:" + JSON.stringify(postData));
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var requestOptions = { headers: headers };
        this.http.post("http://trumbantien.com:10001/api/" + subLink, postData, requestOptions)
            .subscribe(function (data) {
            if (callback != null) {
                callback(data);
            }
            console.log(JSON.stringify(data));
        }, function (error) {
            console.log(error);
        });
    };
    Server.prototype.postRequest = function (subLink, postData, callback) {
        console.log("postRequest:" + subLink + "=>" + JSON.stringify(postData));
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'token': this.account.GetToken()
        });
        var requestOptions = { headers: headers };
        this.http.post("http://trumbantien.com:10001/api/" + subLink, postData, requestOptions)
            .subscribe(function (data) {
            if (callback != null) {
                callback(data);
            }
            console.log(JSON.stringify(data));
        }, function (error) {
            console.log(error);
        });
    };
    Server.prototype.getRequest = function (subLink, postData, callback) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'token': this.account.GetToken()
        });
        var requestOptions = { headers: headers };
        var link = "http://trumbantien.com:10001/api/" + subLink;
        if (postData != null) {
            link += "?";
            for (var key in postData) {
                link = link + key + "=" + postData[key] + "&";
            }
            link = link.substr(0, link.length - 1);
        }
        console.log("getRequest:" + link + "=>" + JSON.stringify(postData));
        this.http.get(link, requestOptions)
            .subscribe(function (data) {
            if (callback != null) {
                callback(data);
            }
            console.log(JSON.stringify(data));
        }, function (error) {
            console.log(error);
        });
    };
    Server = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_server_account__["a" /* Account */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], Server);
    return Server;
}());

//# sourceMappingURL=server.js.map

/***/ }),

/***/ 125:
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
webpackEmptyAsyncContext.id = 125;

/***/ }),

/***/ 168:
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
webpackEmptyAsyncContext.id = 168;

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verification_verification__ = __webpack_require__(213);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/signup/signup.html"*/'<ion-header class="bg-transparent">\n    <ion-navbar>\n        <ion-title><span text-uppercase class="center">{{\'sign_up\' | translate}}</span></ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-color">\n    <div class="banner center_img">\n        <ion-slides pager autoplay=3000>\n            <ion-slide>\n                <div class="img_box center_img">\n                    <img src="assets/imgs/banner1.png" class="crop_img">\n                </div>\n                <div class="text">\n                    <h2>Đăng ký ngay</h2>\n                    <p>Đăng ký để nạp tiền chiết khấu cao</p>\n                </div>\n            </ion-slide>\n            <ion-slide>\n                <div class="img_box center_img">\n                    <img src="assets/imgs/banner2.png" class="crop_img">\n                </div>\n                <div class="text">\n                    <h2>Đăng ký ngay</h2>\n                    <p>Đăng ký để nạp tiền chiết khấu cao</p>\n                </div>\n            </ion-slide>\n            <ion-slide>\n                <div class="img_box center_img">\n                    <img src="assets/imgs/banner1.png" class="crop_img">\n                </div>\n                <div class="text">\n                    <h2>Đăng ký ngay</h2>\n                    <p>Đăng ký để nạp tiền chiết khấu cao</p>\n                </div>\n            </ion-slide>\n            <ion-slide>\n                <div class="img_box center_img">\n                    <img src="assets/imgs/banner2.png" class="crop_img">\n                </div>\n                <div class="text">\n                    <h2>Đăng ký ngay</h2>\n                    <p>Đăng ký để nạp tiền chiết khấu cao</p>\n                </div>\n            </ion-slide>\n        </ion-slides>\n    </div>\n    <div class="form">\n        <ion-list no-lines>\n            <ion-item>\n                <div class="icon_box" item-start>\n                    <img src="assets/imgs/ic_person.png">\n                </div>\n                <ion-input type="text" placeholder="{{\'full_name\' | translate}}"></ion-input>\n            </ion-item>\n            <ion-item>\n                <div class="icon_box" item-start>\n                    <img src="assets/imgs/ic_email.png">\n                </div>\n                <ion-input type="email" placeholder="{{\'email_address\' | translate}}"></ion-input>\n            </ion-item>\n            <ion-item>\n                <div class="icon_box" item-start>\n                    <img src="assets/imgs/ic_phone.png">\n                </div>\n                <ion-input type="number" placeholder="{{\'phone_number\' | translate}}"></ion-input>\n            </ion-item>\n            <ion-item>\n                <div class="icon_box" item-start>\n                    <img src="assets/imgs/ic_password.png">\n                </div>\n                <ion-input type="password" placeholder="{{\'create_password\' | translate}}"></ion-input>\n            </ion-item>\n            <ion-item>\n                <div class="icon_box" item-start>\n                    <img src="assets/imgs/ic_password.png">\n                </div>\n                <ion-input type="password" placeholder="{{\'confirm_password\' | translate}}"></ion-input>\n            </ion-item>\n        </ion-list>\n        <button text-uppercase ion-button block class="btn" (click)="verification()"> {{\'sign_up\' | translate}}</button>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/signup/signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(44);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-verification',template:/*ion-inline-start:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/verification/verification.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title></ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div class="form">\n        <h2>{{\'phone_verification\' | translate}}</h2>\n        <p>{{\'verification_text_1\' | translate}}<br>{{\'verification_text_2\' | translate}}</p>\n        <ion-list no-lines>\n            <ion-item>\n                <ion-input type="text" placeholder="{{\'enter_code_here\' | translate}}"></ion-input>\n            </ion-item>\n            <button ion-button block class="btn" (click)="tabs()"> {{\'submit\' | translate}}</button>\n            <h3 text-center>{{\'code_resend\' | translate}}</h3>\n        </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/verification/verification.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], VerificationPage);
    return VerificationPage;
}());

//# sourceMappingURL=verification.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_daily_list_daily__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__napgame_napgame__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__kplus_kplus__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__addmoney_addmoney__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__getpayment_getpayment__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__transaction_transaction__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__phonerecharge_phonerecharge__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__book_ticket_book_ticket__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_server_account__ = __webpack_require__(11);
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
    function HomePage(events, account, navCtrl) {
        var _this = this;
        this.events = events;
        this.account = account;
        this.navCtrl = navCtrl;
        this.events.subscribe('updateScreen', function () {
            _this.updateSotien();
        });
        this.updateSotien();
    }
    HomePage.prototype.openListDaily = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__list_daily_list_daily__["a" /* ListDailyPage */]);
    };
    HomePage.prototype.updateSotien = function () {
        var nf = Intl.NumberFormat();
        this.balance = nf.format(this.account.GetSotien());
    };
    HomePage.prototype.search = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__search_search__["a" /* SearchPage */]);
    };
    HomePage.prototype.kplus = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__kplus_kplus__["a" /* KplusPage */]);
    };
    HomePage.prototype.napgame = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__napgame_napgame__["a" /* NapgamePage */]);
    };
    HomePage.prototype.addmoney = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__addmoney_addmoney__["a" /* AddmoneyPage */]);
    };
    HomePage.prototype.getpayment = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__getpayment_getpayment__["a" /* GetpaymentPage */]);
    };
    HomePage.prototype.transaction = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__transaction_transaction__["a" /* TransactionPage */]);
    };
    HomePage.prototype.phonerecharge = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__phonerecharge_phonerecharge__["a" /* PhonerechargePage */]);
    };
    HomePage.prototype.book_ticket = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__book_ticket_book_ticket__["a" /* Book_ticketPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/home/home.html"*/'<ion-header>\n  <!--\n  <ion-navbar>\n      <ion-title>{{\'home\' | translate}}</ion-title>\n  </ion-navbar>\n-->\n  <!-- <ion-list no-lines>\n      <ion-item class="search" (click)="search()">\n          <h2>{{\'\' | translate}}<span class="text-theme">{{\'Tìm kiếm\' | translate}}</span></h2>\n          <img src="assets/imgs/ic_search.svg" item-end>\n      </ion-item>\n      <ion-item class="icon_box">\n          <ion-row text-center>\n            <ion-item>\n                <h2 class="d-flex">{{\'balance\' | translate}} <span class="end">{{balance}}</span></h2>\n\n          </ion-item>\n\n          </ion-row>\n\n      </ion-item>\n\n  </ion-list> -->\n  <ion-item style="background:#ffffff">\n    <button style="width:150px;height:50px;font-size:30px;font-weight:bold" ion-button color="#3184fe" (click) = "openListDaily()">ĐẠI LÝ</button>\n</ion-item>\n\n\n</ion-header>\n\n<ion-content class="bg-color">\n  <ion-list no-lines>\n      <ion-card>\n\n          <ion-item>\n              <ion-row text-center>\n                  <ion-col col-6 (click)="addmoney()">\n                      <img src="assets/imgs/ban-tien-gia-re.svg">\n                      <h6></h6>\n                  </ion-col>\n                  <ion-col col-6 (click)="phonerecharge()">\n                      <img src="assets/imgs/nap-dt-gia-re.svg">\n                      <h6></h6>\n                  </ion-col>\n                  <ion-col col-6 (click)="napgame()">\n                      <img src="assets/imgs/nap-game.svg">\n                      <h6></h6>\n                  </ion-col>\n                  <ion-col col-6 (click)="kplus()">\n                      <img src="assets/imgs/nap_k.svg">\n                      <h6></h6>\n                  </ion-col>\n\n\n\n              </ion-row>\n          </ion-item>\n      </ion-card>\n\n      <ion-card>\n          <div class="card_bg center_img">\n              <img src="assets/imgs/card_bg2.png" class="crop_img">\n          </div>\n          <h2></h2>\n          <ion-scroll scrollX="true">\n\n          </ion-scroll>\n      </ion-card>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_11__providers_server_account__["a" /* Account */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailDailyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_server_server__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_server_account__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_daily_list_daily__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sodu_daily_sodu_daily__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lichsu_giaodich_daily_lichsu_giaodich_daily__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pay_or_send_pay_or_send__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var DetailDailyPage = /** @class */ (function () {
    function DetailDailyPage(alertCtrl, toast, myServer, account, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.toast = toast;
        this.myServer = myServer;
        this.account = account;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.vt = "100";
        this.mb = "100";
        this.vn = "100";
        this.vnts = "100";
        this.garena = "100";
        this.kplus = "100";
        this.vt1 = "100";
        this.mb1 = "100";
        this.vn1 = "100";
        this.vtts1 = "100";
        this.ftth1 = "100";
        this.ten_daily = "";
        this.login_id = "";
        this.ghi_chu = "";
        this.id = "";
        this.ngay_tao = "";
        this.trang_thai = "";
        this.so_tien = "";
        this.status_khoa = "";
        this.dataPage = this.navParams.get("dataPage");
        this.init();
    }
    DetailDailyPage.prototype.init = function () {
        var vf = Intl.NumberFormat();
        this.ten_daily = this.dataPage["caption"];
        this.login_id = this.dataPage["loginID"];
        this.id = this.dataPage["id"];
        this.trang_thai = this.dataPage["status"];
        this.ngay_tao = this.dataPage["createDate_text2"];
        this.ghi_chu = this.dataPage["note"];
        this.so_tien = vf.format(this.dataPage["money"]);
        this.vt = this.dataPage["tyleCK_vt"];
        this.mb = this.dataPage["tyleCK_mb"];
        this.vn = this.dataPage["tyleCK_vn"];
        this.vnts = this.dataPage["tyleCK_vnts"];
        this.garena = this.dataPage["tyleCK_garena"];
        this.kplus = this.dataPage["tyleCK_kplus"];
        this.vt1 = this.dataPage["tyleMua_vt"];
        this.mb1 = this.dataPage["tyleMua_mb"];
        this.vn1 = this.dataPage["tyleMua_vn"];
        this.vtts1 = this.dataPage["tyleMua_vtts"];
        this.ftth1 = this.dataPage["tyleMua_ftth"];
        this.status_khoa = this.trang_thai == "khoa" ? "Kích Hoạt" : "Khóa";
    };
    DetailDailyPage.prototype.presentToast = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toast.create({
                            message: msg,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    DetailDailyPage.prototype.toggleKhoa = function () {
        var _this = this;
        var statusNew = "";
        if (this.trang_thai == "kich-hoat") {
            statusNew = "khoa";
        }
        else {
            statusNew = "kich-hoat";
        }
        var postData = {
            "id": this.id,
            "trangThai": statusNew
        };
        this.myServer.getRequest("DL/SetTrangThai", postData, function (data) {
            var stt = data["stt"];
            if (stt == 1) {
                _this.updateStatus();
            }
        });
    };
    DetailDailyPage.prototype.updateStatus = function () {
        var _this = this;
        var postData = {
            "id": this.id
        };
        this.myServer.getRequest("DL/Get1DL", postData, function (data) {
            var stt = data["stt"];
            if (stt == 1) {
                _this.dataPage = data["data"];
                _this.init();
                _this.presentToast(data["msg"]);
            }
            else {
                _this.presentToast(data["msg"]);
            }
        });
    };
    DetailDailyPage.prototype.capnhat = function () {
        var _this = this;
        var dataPost = {
            "id": this.dataPage["id"],
            "loginID": this.login_id,
            "caption": this.ten_daily,
            "tyleCK_vt": this.vt,
            "tyleCK_mb": this.mb,
            "tyleCK_vn": this.vn,
            "tyleCK_vnts": this.vnts,
            "tyleCK_garena": this.garena,
            "tyleCK_kplus": this.kplus,
            "tyleMua_vt": this.vt1,
            "tyleMua_mb": this.mb1,
            "tyleMua_vn": this.vn1,
            "tyleMua_vtts": this.vtts1,
            "tyleMua_ftth": this.ftth1,
            "note": this.ghi_chu
        };
        this.myServer.getRequest("DL/SuaDL", dataPost, function (data) {
            var stt = data["stt"];
            if (stt == 1) {
                _this.presentToast(data["msg"]);
            }
            else {
                _this.presentToast(data["msg"]);
            }
        });
    };
    DetailDailyPage.prototype.xoaTaiKhoan = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Xác nhận lại!',
            message: 'Bạn chắc chắn muốn xóa?',
            buttons: [
                {
                    text: 'Hủy Bỏ',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Đồng Ý',
                    handler: function () {
                        var dataPost = {
                            "id": _this.dataPage["id"]
                        };
                        _this.myServer.getRequest("DL/XoaDL", dataPost, function (data) {
                            var stt = data["stt"];
                            if (stt == 1) {
                                _this.presentToast(data["msg"]);
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__list_daily_list_daily__["a" /* ListDailyPage */]);
                            }
                            else {
                                _this.presentToast(data["msg"]);
                            }
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    DetailDailyPage.prototype.viewBienDong = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__sodu_daily_sodu_daily__["a" /* SoduDailyPage */], {
            id: this.dataPage["id"]
        });
    };
    DetailDailyPage.prototype.viewLichSu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__lichsu_giaodich_daily_lichsu_giaodich_daily__["a" /* LichSuGiaoDichDailyPage */], {
            id: this.dataPage["id"]
        });
    };
    DetailDailyPage.prototype.openChuyenTien = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pay_or_send_pay_or_send__["a" /* Pay_or_sendPage */], {
            id_nguoi_nhan: this.ten_daily
        });
    };
    DetailDailyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-detail_daily',template:/*ion-inline-start:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/detail_daily/detail_daily.html"*/'<ion-header class="bg-transparent">\n    <ion-navbar>\n        <ion-title><span text-uppercase class="center">CHI TIẾT TÀI KHOẢN ĐẠI LÝ</span></ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-color">\n    <ion-card>\n        <ion-label style="font-weight: bold;font-size:30px;text-align: center;color:#3184fe " >THÔNG TIN</ion-label>\n        <ion-item>\n                <ion-label style="margin-left: 20px" color="primary">TÊN ĐẠI LÝ :  </ion-label>\n                <ion-input disabled ="true"  [(ngModel)]="ten_daily"></ion-input>\n        </ion-item>\n        <hr>\n        <ion-item>\n                <ion-label style="margin-left: 20px" color="primary">LOGIN ID : </ion-label>\n                <ion-input [(ngModel)]="login_id"></ion-input>\n        </ion-item>\n        <hr>\n        <ion-item>\n                <ion-label style="margin-left: 20px" color="primary">ID : </ion-label>\n                <ion-input disabled ="true"  [(ngModel)]="id"></ion-input>\n        </ion-item>\n        <hr>\n        <ion-item>\n                <ion-label style="margin-left: 20px" color="primary">NGÀY TẠO : </ion-label>\n                <ion-input disabled ="true" [(ngModel)]="ngay_tao"></ion-input>\n        </ion-item>\n        <hr>\n        <div>\n                <ion-row>\n                                <ion-label style="margin-left: 35px" color="primary">TRẠNG THÁI : </ion-label>\n                                <ion-input disabled ="true" [(ngModel)]="trang_thai"></ion-input>\n                                <button style="width:150px;height:50px;font-weight: bold;color:white;background-color:#34db61" ion-item  (click) = "toggleKhoa()" >{{status_khoa}}</button>\n                </ion-row>\n        </div>\n        <hr>\n        <ion-item>\n                <ion-label style="margin-left: 20px" color="primary">Tỷ lệ chiết khẩu mua tkc (%)</ion-label>\n                \n        </ion-item>\n        <div>\n                \n                <ion-grid>\n                    <ion-row>\n                            <ion-label style="margin-left: 20px;font-weight: bold;font-size:20px;color:#ed3a44" >VT : </ion-label>\n                            <ion-input  [(ngModel)]="vt" style="width:50;border: 1px solid #818181;border-radius: 10px !important"></ion-input>\n\n                            <ion-label style="margin-left: 20px;font-weight: bold;font-size:20px;color:#ed3a44"  color="primary">MB : </ion-label>\n                            <ion-input  [(ngModel)]="mb" style="width:50;border: 1px solid #818181;border-radius: 10px !important"></ion-input>\n\n                            <ion-label style="margin-left: 20px;font-weight: bold;font-size:20px;color:#ed3a44"  color="primary">VN : </ion-label>\n                            <ion-input  [(ngModel)]="vn" style="width:50;border: 1px solid #818181;border-radius: 10px !important"></ion-input>\n\n                            <ion-label style="margin-left: 20px;font-weight: bold;font-size:20px;color:#ed3a44"  color="primary">VNTS : </ion-label>\n                            <ion-input [(ngModel)]="vnts" style="width:50;border: 1px solid #818181;border-radius: 10px !important"></ion-input>\n\n                            <ion-label style="margin-left: 20px;font-weight: bold;font-size:20px;color:#ed3a44"  color="primary">Garena : </ion-label>\n                            <ion-input  [(ngModel)]="garena" style="width:50;border: 1px solid #818181;border-radius: 10px !important"></ion-input>\n                            \n                            <ion-label style="margin-left: 20px;font-weight: bold;font-size:20px;color:#ed3a44"  color="primary">K+ : </ion-label>\n                            <ion-input  [(ngModel)]="kplus" style="width:50;border: 1px solid #818181;border-radius: 10px !important" border:1px ></ion-input>\n                    </ion-row>\n                </ion-grid>\n        </div>\n        <hr>\n        <ion-item>\n                <ion-label style="margin-left: 20px" color="primary">Tỷ lệ chiết khấu mua thẻ (%)</ion-label>\n                \n        </ion-item>\n        <div>\n                \n                <ion-grid>\n                    <ion-row>\n                            <ion-label style="margin-left: 20px;font-weight: bold;font-size:20px;color:#ed3a44" >VT : </ion-label>\n                            <ion-input  [(ngModel)]="vt1" style="width:50;border: 1px solid #818181;border-radius: 10px !important"></ion-input>\n\n                            <ion-label style="margin-left: 20px;font-weight: bold;font-size:20px;color:#ed3a44"  color="primary">MB : </ion-label>\n                            <ion-input  [(ngModel)]="mb1" style="width:50;border: 1px solid #818181;border-radius: 10px !important"></ion-input>\n\n                            <ion-label style="margin-left: 20px;font-weight: bold;font-size:20px;color:#ed3a44"  color="primary">VN : </ion-label>\n                            <ion-input  [(ngModel)]="vn1" style="width:50;border: 1px solid #818181;border-radius: 10px !important"></ion-input>\n\n                            <ion-label style="margin-left: 20px;font-weight: bold;font-size:20px;color:#ed3a44"  color="primary">VTTS : </ion-label>\n                            <ion-input [(ngModel)]="vtts1" style="width:50;border: 1px solid #818181;border-radius: 10px !important"></ion-input>\n\n                            <ion-label style="margin-left: 20px;font-weight: bold;font-size:20px;color:#ed3a44"  color="primary">FTTH : </ion-label>\n                            <ion-input  [(ngModel)]="ftth1" style=" width:50;border: 1px solid #818181;border-radius: 10px !important"></ion-input>\n\n                    </ion-row>\n                </ion-grid>\n        </div>\n        <hr>\n        <div>\n                <ion-row>\n                                <ion-label style="margin-left: 35px" color="primary">SỐ TIỀN : </ion-label>\n                                <ion-input disabled ="true" [(ngModel)]="so_tien"></ion-input>\n                                <button style="width:150px;height:50px;font-weight: bold;color:white;background-color:#34db61" ion-item  (click) = "openChuyenTien()" >NẠP TIỀN</button>\n                </ion-row>\n        </div>\n        <hr>\n        <ion-item>\n                <ion-label style="margin-left: 20px" color="primary">GHI CHÚ : </ion-label>\n                <ion-input disabled ="true" placeholder="Nhập nội dung..." [(ngModel)]="ghi_chu"></ion-input>\n        </ion-item>\n\n    </ion-card>\n    <ion-card>\n        <ion-item>\n                <div>\n                        <button style="width:150px;height:50px;font-weight: bold;background-color:#007ffe;color:black" ion-button  (click) = "capnhat()" >CẬP NHẬT</button>\n                        <button style="width:150px;height:50px;font-weight: bold;background-color:#ffbc20;color:white" ion-button color="secondary" (click)="xoaTaiKhoan()">XÓA TÀI KHOẢN</button>\n                        <button style="width:150px;height:50px;font-weight: bold;background-color:#007ffe;color:black" ion-button  (click)="viewBienDong()">BIỂN ĐỘNG SỐ DƯ</button>\n                        <button style="width:150px;height:50px;font-weight: bold;background-color:#007ffe;color:black" ion-button  (click)="viewLichSu()">LỊCH SỬ CT</button>\n                      </div>\n        </ion-item>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/detail_daily/detail_daily.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1__providers_server_server__["a" /* Server */], __WEBPACK_IMPORTED_MODULE_2__providers_server_account__["a" /* Account */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavParams */]])
    ], DetailDailyPage);
    return DetailDailyPage;
}());

//# sourceMappingURL=detail_daily.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SoduDailyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_server_server__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_server_account__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pay_or_send_pay_or_send__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var SoduDailyPage = /** @class */ (function () {
    function SoduDailyPage(datePipe, toast, myServer, account, navCtrl, navParams) {
        this.datePipe = datePipe;
        this.toast = toast;
        this.myServer = myServer;
        this.account = account;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.keyword = "";
        this.tong_so_giao_dich = "";
        this.tong_tien = "";
        this.items = [];
        this.caption = "";
        this.id = "";
        this.tungay = "";
        this.denngay = "";
        this.type_gd = "";
        this.id = this.navParams.get("id");
        var d = new Date();
        var d1 = new Date();
        d1.setDate(d1.getDate() + 1);
        this.tungay = this.datePipe.transform(d, 'dd/MM/yyyy');
        this.denngay = this.datePipe.transform(d1, 'dd/MM/yyyy');
        this.finding();
    }
    SoduDailyPage.prototype.presentToast = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toast.create({
                            message: msg,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    SoduDailyPage.prototype.finding = function () {
        var _this = this;
        var dataPost = {
            "id": this.id,
            "p": "1",
            "tungay": this.tungay,
            "denngay": this.denngay,
            "k": this.keyword,
            "loai": this.type_gd
        };
        this.myServer.getRequest("Login/GetTransHistory", dataPost, function (data) {
            var stt = data["stt"];
            var nf = Intl.NumberFormat();
            if (stt == 1) {
                data = data["data"];
                _this.tong_so_giao_dich = data["tatca"];
                _this.tong_tien = data["tongtien"];
                _this.caption = data["u_caption"];
                _this.items = [];
                var lst = data["lst"];
                for (var i = 0; i < lst.length; i++) {
                    var dataItem = {};
                    dataItem["ngay_tao"] = lst[i]["createDate_text"];
                    dataItem["loai"] = lst[i]["transType"];
                    dataItem["sotien"] = lst[i]["money"];
                    dataItem["lydo"] = lst[i]["note"];
                    dataItem["id"] = lst[i]["id"];
                    _this.items.push(dataItem);
                }
            }
        });
    };
    SoduDailyPage.prototype.viewDetail = function (id) {
    };
    SoduDailyPage.prototype.chuyenTien = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pay_or_send_pay_or_send__["a" /* Pay_or_sendPage */], {
            id_nguoi_nhan: this.caption
        });
    };
    SoduDailyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-sodu_daily',template:/*ion-inline-start:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/sodu_daily/sodu_daily.html"*/'<ion-header class="bg-transparent">\n    <ion-navbar>\n        <ion-title><span text-uppercase style="text-align:center">BIẾN ĐỘNG SỐ DƯ CỦA <span style="color:#3184fe">{{caption}}</span></span></ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-color">\n    <ion-grid>\n        <ion-row>\n            <ion-col>\n                <ion-item>\n                    <ion-label position="fixed">Từ ngày : </ion-label>\n                    <ion-input type="text" placeholder = "Chọn ngày..." [(ngModel)] = "tungay"></ion-input>\n                </ion-item>\n            </ion-col>\n            <ion-col>\n                <ion-item>\n                    <ion-label position="fixed">Từ Khóa : </ion-label>\n                    <ion-input type="text" placeholder = "Chọn từ khóa..." [(ngModel)] = "keyword"></ion-input>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <ion-item>\n                    <ion-label position="fixed">Đến Ngày : </ion-label>\n                    <ion-input type="text" placeholder = "Chọn ngày..." [(ngModel)] = "denngay"></ion-input>\n                </ion-item>\n            </ion-col>\n\n            <ion-col>\n                <ion-item>\n                    <ion-label position="fixed">Loại Giao Dịch : </ion-label>\n                    <ion-select [(ngModel)]="type_gd" interface="action-sheet">\n                            <ion-option value="">Tất cả {{sortAll}}</ion-option>\n                            <ion-option value="napTien">Nạp Tiền {{sort1}}</ion-option>\n                            <ion-option value="chuyenTien">Chuyển Tiền {{sort2}}</ion-option>\n                            <ion-option value="nhanTien">Nhận Tiền{{sort3}}</ion-option>\n                            <ion-option value="hoanTien">Hoàn Tiền {{sort4}}</ion-option>\n                            <ion-option value="hoaHong">Hoa Hồng {{sort5}}</ion-option>\n                            <ion-option value="chuyenTienDL">Chuyển Tiền Đại Lý{{sort6}}</ion-option>\n                            <ion-option value="muaThe">Mua Thẻ{{sort7}}</ion-option>\n                        </ion-select>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n        \n    </ion-grid>\n    <div class = "center">\n        <button ion-button color ="primary" block (click) = "finding()">TÌM KIẾM</button>\n        <button ion-button color="secondary" block (click) = "chuyenTien()">CHUYỂN TIỀN</button>\n        <br>\n        <br>\n</div>\n        <div>\n            <ion-card >\n        <ion-grid>\n            <ion-row>\n                <ion-col>\n                        <ion-label class="title_all" style="font-weight:bold;color:#694efe;text-align:center" >TỔNG SỐ GIAO DỊCH</ion-label>\n                        <ion-label class="title_all" style="text-align:center;font-size:30px">{{tong_so_giao_dich}}</ion-label>\n                </ion-col>\n                <ion-col>\n                        <ion-label  class="title_all" style="font-weight:bold;color:#ed3a44;text-align:center"  >TỔNG TIỀN</ion-label>\n                        <ion-label class="title_all" style="text-align:center;font-size:30px">{{tong_tien}}</ion-label>\n                </ion-col>\n                \n            </ion-row>\n        </ion-grid>\n    </ion-card>\n    </div>\n    \n    <ion-item style="background:#34db61">\n            <ion-label style="text-align:center;font-weight:bold;color:white">Ngày tạo</ion-label>\n            <ion-label style="text-align:center;font-weight:bold;color:white">Loại</ion-label>\n            <ion-label style="text-align:center;font-weight:bold;color:white">Số tiền</ion-label>\n            <ion-label style="text-align:center;font-weight:bold;color:white">Lý do</ion-label>\n    </ion-item>\n<ion-list>\n<ion-item *ngFor = "let item of items">\n    <ion-label style="text-align:center;font-weight:bold;color:#3184fe" (click)="viewDetail(item[\'id\'])">{{item[\'ngay_tao\']}}</ion-label>\n    <ion-label style="text-align:center">{{item[\'loai\']}}</ion-label>\n    <ion-label style="text-align:center">{{item[\'sotien\']}}</ion-label>\n    <ion-label style="text-align:center">{{item[\'lydo\']}}</ion-label>\n\n</ion-item>\n</ion-list>\n</ion-content>\n\n'/*ion-inline-end:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/sodu_daily/sodu_daily.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__angular_common__["d" /* DatePipe */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_common__["d" /* DatePipe */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1__providers_server_server__["a" /* Server */], __WEBPACK_IMPORTED_MODULE_2__providers_server_account__["a" /* Account */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavParams */]])
    ], SoduDailyPage);
    return SoduDailyPage;
}());

//# sourceMappingURL=sodu_daily.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LichSuGiaoDichDailyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_server_server__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_server_account__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__detail_giaodich_detail_giaodich__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var LichSuGiaoDichDailyPage = /** @class */ (function () {
    function LichSuGiaoDichDailyPage(datePipe, toast, myServer, account, navCtrl, navParams) {
        this.datePipe = datePipe;
        this.toast = toast;
        this.myServer = myServer;
        this.account = account;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.keyword = "";
        this.tong_so_giao_dich = "";
        this.tong_tien = "";
        this.tong_da_nap = "";
        this.items = [];
        this.caption = "";
        this.id = "";
        this.tungay = "";
        this.denngay = "";
        this.type_gd = "";
        this.id = this.navParams.get("id");
        var d = new Date();
        var d1 = new Date();
        d1.setDate(d1.getDate() + 1);
        this.tungay = this.datePipe.transform(d, 'dd/MM/yyyy');
        this.denngay = this.datePipe.transform(d1, 'dd/MM/yyyy');
        this.finding();
    }
    LichSuGiaoDichDailyPage.prototype.presentToast = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toast.create({
                            message: msg,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    LichSuGiaoDichDailyPage.prototype.finding = function () {
        var _this = this;
        var dataPost = {
            "id": this.id,
            "p": "1",
            "tungay": this.tungay,
            "denngay": this.denngay,
            "k": this.keyword,
            "loaitk": this.type_gd
        };
        this.myServer.getRequest("CTH/GetListAll", dataPost, function (data) {
            var stt = data["stt"];
            var nf = Intl.NumberFormat();
            if (stt == 1) {
                data = data["data"];
                _this.tong_so_giao_dich = data["tatca"];
                _this.tong_tien = data["tongtien"];
                _this.tong_da_nap = data["danap"];
                _this.caption = data["u_caption"];
                _this.items = [];
                var lst = data["lst"];
                for (var i = 0; i < lst.length; i++) {
                    var dataItem = {};
                    dataItem["ngay_tao"] = lst[i]["createDate_text"];
                    dataItem["loai"] = lst[i]["loaiTaiKhoan"];
                    dataItem["tai_khoan_nap"] = lst[i]["taiKhoanCanNap"];
                    dataItem["danap"] = lst[i]["daNap_formated"];
                    dataItem["hanmuc"] = lst[i]["hanMuc_formated"];
                    dataItem["hoahong"] = lst[i]["u_sotienHH_formated"];
                    dataItem["trangthai"] = lst[i]["status"];
                    dataItem["id"] = lst[i]["id"];
                    _this.items.push(dataItem);
                }
            }
        });
    };
    LichSuGiaoDichDailyPage.prototype.viewDetail = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__detail_giaodich_detail_giaodich__["a" /* DetailGiaoDichPage */], {
            id_giaodich: id
        });
    };
    LichSuGiaoDichDailyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-lichsu_giaodich_daily',template:/*ion-inline-start:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/lichsu_giaodich_daily/lichsu_giaodich_daily.html"*/'<ion-header class="bg-transparent">\n    <ion-navbar>\n        <ion-title><span text-uppercase style="text-align:center">LỊCH SỬ GIAO DỊCH CỦA <span style="color:#3184fe">{{caption}}</span></span></ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-color">\n    <ion-grid>\n        <ion-row>\n            <ion-col>\n                <ion-item>\n                    <ion-label position="fixed">Từ ngày : </ion-label>\n                    <ion-input type="text" placeholder = "Chọn ngày..." [(ngModel)] = "tungay"></ion-input>\n                </ion-item>\n            </ion-col>\n            <ion-col>\n                <ion-item>\n                    <ion-label position="fixed">Từ Khóa : </ion-label>\n                    <ion-input type="text" placeholder = "Chọn từ khóa..." [(ngModel)] = "keyword"></ion-input>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <ion-item>\n                    <ion-label position="fixed">Đến Ngày : </ion-label>\n                    <ion-input type="text" placeholder = "Chọn ngày..." [(ngModel)] = "denngay"></ion-input>\n                </ion-item>\n            </ion-col>\n\n            <ion-col>\n                <ion-item>\n                    <ion-label position="fixed">Loại Tài Khoản : </ion-label>\n                    <ion-select [(ngModel)]="type_gd" interface="action-sheet">\n                            <ion-option value="">Tất cả </ion-option>\n                            <ion-option value="mb">Mobi </ion-option>\n                            <ion-option value="vn">Vina </ion-option>\n                            <ion-option value="vt">Viettel</ion-option>\n\n                        </ion-select>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n        \n    </ion-grid>\n    <div class = "center">\n        <button ion-button color ="primary" block (click) = "finding()">TÌM KIẾM</button>\n        <br>\n        <br>\n</div>\n        <div>\n            <ion-card >\n        <ion-grid>\n            <ion-row>\n                <ion-col>\n                        <ion-label class="title_all" style="font-weight:bold;color:#694efe;text-align:center" >TỔNG SỐ GIAO DỊCH</ion-label>\n                        <ion-label class="title_all" style="text-align:center;font-size:30px">{{tong_so_giao_dich}}</ion-label>\n                </ion-col>\n                <ion-col>\n                        <ion-label  class="title_all" style="font-weight:bold;color:#ed3a44;text-align:center"  >TỔNG SỐ TIỀN</ion-label>\n                        <ion-label class="title_all" style="text-align:center;font-size:30px">{{tong_tien}}</ion-label>\n                </ion-col>\n                <ion-col>\n                        <ion-label  class="title_all" style="font-weight:bold;color:#ffc91e;text-align:center"  >TỔNG ĐÃ NẠP</ion-label>\n                        <ion-label class="title_all" style="text-align:center;font-size:30px">{{tong_da_nap}}</ion-label>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-card>\n    </div>\n    \n    <ion-item style="background:#34db61">\n            <ion-label style="text-align:center;font-weight:bold;color:white">Ngày tạo</ion-label>\n            <ion-label style="text-align:center;font-weight:bold;color:white">Loại</ion-label>\n            <ion-label style="text-align:center;font-weight:bold;color:white">Tài khoản nạp</ion-label>\n            <ion-label style="text-align:center;font-weight:bold;color:white">Đã nạp</ion-label>\n            <ion-label style="text-align:center;font-weight:bold;color:white">Hạn mức</ion-label>\n            <ion-label style="text-align:center;font-weight:bold;color:white">Hoa hồng</ion-label>\n            <ion-label style="text-align:center;font-weight:bold;color:white">Trạng thái</ion-label>\n    </ion-item>\n<ion-list>\n<ion-item *ngFor = "let item of items">\n    <ion-label style="text-align:center;font-weight:bold;color:#3184fe" (click)="viewDetail(item[\'id\'])">{{item[\'ngay_tao\']}}</ion-label>\n    <ion-label style="text-align:center">{{item[\'loai\']}}</ion-label>\n    <ion-label style="text-align:center">{{item[\'tai_khoan_nap\']}}</ion-label>\n    <ion-label style="text-align:center">{{item[\'danap\']}}</ion-label>\n    <ion-label style="text-align:center">{{item[\'hanmuc\']}}</ion-label>\n    <ion-label style="text-align:center">{{item[\'hoahong\']}}</ion-label>\n    <ion-label style="text-align:center">{{item[\'trangthai\']}}</ion-label>\n\n</ion-item>\n</ion-list>\n</ion-content>\n\n'/*ion-inline-end:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/lichsu_giaodich_daily/lichsu_giaodich_daily.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__angular_common__["d" /* DatePipe */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_common__["d" /* DatePipe */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1__providers_server_server__["a" /* Server */], __WEBPACK_IMPORTED_MODULE_2__providers_server_account__["a" /* Account */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavParams */]])
    ], LichSuGiaoDichDailyPage);
    return LichSuGiaoDichDailyPage;
}());

//# sourceMappingURL=lichsu_giaodich_daily.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddDailyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_server_server__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_server_account__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var AddDailyPage = /** @class */ (function () {
    function AddDailyPage(toast, myServer, account, navCtrl) {
        this.toast = toast;
        this.myServer = myServer;
        this.account = account;
        this.navCtrl = navCtrl;
        this.vt = "100";
        this.mb = "100";
        this.vn = "100";
        this.vnts = "100";
        this.garena = "100";
        this.kplus = "100";
        this.vt1 = "100";
        this.mb1 = "100";
        this.vn1 = "100";
        this.vtts1 = "100";
        this.ftth1 = "100";
        this.ten_daily = "";
        this.login_id = "";
        this.pw = "";
        this.ghi_chu = "";
    }
    AddDailyPage.prototype.presentToast = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toast.create({
                            message: msg,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddDailyPage.prototype.save = function () {
        var _this = this;
        var dataPost = {
            "loginID": this.login_id,
            "loginPW": this.pw,
            "caption": this.ten_daily,
            "tyleCK_vt": this.vt,
            "tyleCK_mb": this.mb,
            "tyleCK_vn": this.vn,
            "tyleCK_vnts": this.vnts,
            "tyleCK_garena": this.garena,
            "tyleCK_kplus": this.kplus,
            "tyleMua_vt": this.vt1,
            "tyleMua_mb": this.mb1,
            "tyleMua_vn": this.vn1,
            "tyleMua_vtts": this.vtts1,
            "tyleMua_ftth": this.ftth1,
            "note": this.ghi_chu
        };
        this.myServer.getRequest("DL/ThemDL", dataPost, function (data) {
            var stt = data["stt"];
            if (stt == 1) {
                _this.presentToast(data["msg"]);
            }
            else {
                _this.presentToast(data["msg"]);
            }
        });
    };
    AddDailyPage.prototype.saveAndView = function () {
    };
    AddDailyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-add_daily',template:/*ion-inline-start:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/add_daily/add_daily.html"*/'<ion-header class="bg-transparent">\n    <ion-navbar>\n        <ion-title><span text-uppercase class="center">THÊM MỚI ĐẠI LÝ</span></ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-color">\n    <ion-card>\n        <ion-label style="font-weight: bold;font-size:30px;text-align: center;color:#3184fe " >THÔNG TIN</ion-label>\n        <ion-item>\n                <ion-label style="margin-left: 20px" color="primary">TÊN ĐẠI LÝ : </ion-label>\n                <ion-input placeholder="Nhập tên..." [(ngModel)]="ten_daily"></ion-input>\n        </ion-item>\n        <hr>\n        <ion-item>\n                <ion-label style="margin-left: 20px" color="primary">LOGIN ID : </ion-label>\n                <ion-input placeholder="Nhập id..." [(ngModel)]="login_id"></ion-input>\n        </ion-item>\n        <hr>\n        <ion-item>\n                <ion-label style="margin-left: 20px" color="primary">MẬT KHẨU : </ion-label>\n                <ion-input type="password" placeholder="Nhập mật khẩu..." [(ngModel)]="pw"></ion-input>\n        </ion-item>\n        <hr>\n        <ion-item>\n                <ion-label style="margin-left: 20px" color="primary">Tỷ lệ chiết khẩu mua tkc (%)</ion-label>\n                \n        </ion-item>\n        <div>\n                \n                <ion-grid>\n                    <ion-row>\n                            <ion-label style="margin-left: 20px;font-weight: bold;font-size:20px;color:#ed3a44" >VT : </ion-label>\n                            <ion-input  [(ngModel)]="vt" style="width:50;border: 1px solid #818181;border-radius: 10px !important"></ion-input>\n\n                            <ion-label style="margin-left: 20px;font-weight: bold;font-size:20px;color:#ed3a44"  color="primary">MB : </ion-label>\n                            <ion-input  [(ngModel)]="mb" style="width:50;border: 1px solid #818181;border-radius: 10px !important"></ion-input>\n\n                            <ion-label style="margin-left: 20px;font-weight: bold;font-size:20px;color:#ed3a44"  color="primary">VN : </ion-label>\n                            <ion-input  [(ngModel)]="vn" style="width:50;border: 1px solid #818181;border-radius: 10px !important"></ion-input>\n\n                            <ion-label style="margin-left: 20px;font-weight: bold;font-size:20px;color:#ed3a44"  color="primary">VNTS : </ion-label>\n                            <ion-input [(ngModel)]="vnts" style="width:50;border: 1px solid #818181;border-radius: 10px !important"></ion-input>\n\n                            <ion-label style="margin-left: 20px;font-weight: bold;font-size:20px;color:#ed3a44"  color="primary">Garena : </ion-label>\n                            <ion-input  [(ngModel)]="garena" style="width:50;border: 1px solid #818181;border-radius: 10px !important"></ion-input>\n                            \n                            <ion-label style="margin-left: 20px;font-weight: bold;font-size:20px;color:#ed3a44"  color="primary">K+ : </ion-label>\n                            <ion-input  [(ngModel)]="kplus" style="width:50;border: 1px solid #818181;border-radius: 10px !important" border:1px ></ion-input>\n                    </ion-row>\n                </ion-grid>\n        </div>\n        <hr>\n        <ion-item>\n                <ion-label style="margin-left: 20px" color="primary">Tỷ lệ chiết khấu mua thẻ (%)</ion-label>\n                \n        </ion-item>\n        <div>\n                \n                <ion-grid>\n                    <ion-row>\n                            <ion-label style="margin-left: 20px;font-weight: bold;font-size:20px;color:#ed3a44" >VT : </ion-label>\n                            <ion-input  [(ngModel)]="vt1" style="width:50;border: 1px solid #818181;border-radius: 10px !important"></ion-input>\n\n                            <ion-label style="margin-left: 20px;font-weight: bold;font-size:20px;color:#ed3a44"  color="primary">MB : </ion-label>\n                            <ion-input  [(ngModel)]="mb1" style="width:50;border: 1px solid #818181;border-radius: 10px !important"></ion-input>\n\n                            <ion-label style="margin-left: 20px;font-weight: bold;font-size:20px;color:#ed3a44"  color="primary">VN : </ion-label>\n                            <ion-input  [(ngModel)]="vn1" style="width:50;border: 1px solid #818181;border-radius: 10px !important"></ion-input>\n\n                            <ion-label style="margin-left: 20px;font-weight: bold;font-size:20px;color:#ed3a44"  color="primary">VTTS : </ion-label>\n                            <ion-input [(ngModel)]="vtts1" style="width:50;border: 1px solid #818181;border-radius: 10px !important"></ion-input>\n\n                            <ion-label style="margin-left: 20px;font-weight: bold;font-size:20px;color:#ed3a44"  color="primary">FTTH : </ion-label>\n                            <ion-input  [(ngModel)]="ftth1" style=" width:50;border: 1px solid #818181;border-radius: 10px !important"></ion-input>\n\n                    </ion-row>\n                </ion-grid>\n        </div>\n        <hr>\n        <ion-item>\n                <ion-label style="margin-left: 20px" color="primary">GHI CHÚ : </ion-label>\n                <ion-input placeholder="Nhập nội dung..." [(ngModel)]="ghi_chu"></ion-input>\n        </ion-item>\n\n    </ion-card>\n    <ion-card>\n        <ion-item>\n                <div>\n                        <button style="width:150px;height:50px;font-weight: bold" ion-button color="primary" (click) = "save()" >LƯU LẠI</button>\n                        <button style="width:150px;height:50px;font-weight: bold" ion-button color="secondary" (click)="saveAndView()">LƯU VÀ XEM CT</button>\n                      </div>\n        </ion-item>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/add_daily/add_daily.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_server_server__["a" /* Server */], __WEBPACK_IMPORTED_MODULE_3__providers_server_account__["a" /* Account */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], AddDailyPage);
    return AddDailyPage;
}());

//# sourceMappingURL=add_daily.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__phonerecharge_phonerecharge__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__book_ticket_book_ticket__ = __webpack_require__(112);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/search/search.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Tìm kiếm</ion-title>\n    </ion-navbar>\n\n    <ion-searchbar (ionInput)="getItems($event)" placeholder="{{\'search_placeholder\' | translate}}"></ion-searchbar>\n</ion-header>\n\n<ion-content class="bg-color">\n\n    <div class="quick_links">\n        <h3>{{\'quick_links\' | translate}}</h3>\n        <ion-scroll scrollX="true">\n            <div class="links" (click)="addmoney()">\n                <img src="assets/imgs/vietel.png">\n                <h6>{{\'Viettel trả truớc\' | translate}}</h6>\n            </div>\n            <div class="links" (click)="addmoney()">\n                <img src="assets/imgs/vina.png">\n                <h6>{{\'Vina trả truớc\' | translate}}</h6>\n            </div>\n            <div class="links" (click)="addmoney()">\n                <img src="assets/imgs/vietel.png">\n                <h6>{{\'Vietel trả sau\' | translate}}</h6>\n            </div>\n            <div class="links" (click)="addmoney()">\n                <img src="assets/imgs/ftth.png">\n                <h6>{{\'Cuợc truyền hình FTTH\' | translate}}</h6>\n            </div>\n            <div class="links" (click)="phonerecharge()">\n                <img src="assets/imgs/mobi.png">\n                <h6>{{\'Mobi trả truớc\' | translate}}</h6>\n            </div>\n            <div class="links"  (click)="addmoney()">\n                <img src="assets/imgs/garena.png">\n                <h6>{{\'Garena\' | translate}}</h6>\n            </div>\n            <div class="links"  (click)="addmoney()">\n                <img src="assets/imgs/vtc.png">\n                <h6>{{\'VTC Game\' | translate}}</h6>\n            </div>\n            <div class="links"  (click)="addmoney()">\n                <img src="assets/imgs/kplus.png">\n                <h6>{{\'K Plus\' | translate}}</h6>\n            </div>\n        </ion-scroll>\n    </div>\n    <ion-list no-lines>\n        <ion-card>\n            <div class="card_bg center_img">\n                <img src="assets/imgs/card_bg2.png" class="crop_img">\n            </div>\n            <h2>{{\'save_on_bill_payments\' | translate}}</h2>\n            <ion-scroll scrollX="true">\n                <ion-item>\n                    <h3>Thông tin giảm giá</h3>\n                    <div class="text d-flex">\n                        <p>Giảm gía nạp thẻ.</p>\n                        <h4 text-center class="end">{{\'know_more\' | translate}}</h4>\n                    </div>\n                    <h6><sup>*</sup>{{\'t_c_apply\' | translate}}</h6>\n                </ion-item>\n                <ion-item>\n                    <h3>Thông tin giảm giá</h3>\n                    <div class="text d-flex">\n                        <p>Giảm gía nạp thẻ.</p>\n                        <h4 text-center class="end">{{\'know_more\' | translate}}</h4>\n                    </div>\n                    <h6><sup>*</sup>{{\'t_c_apply\' | translate}}</h6>\n                </ion-item>\n                <ion-item>\n                    <h3>Thông tin giảm giá</h3>\n                    <div class="text d-flex">\n                        <p>Giảm gía nạp thẻ.</p>\n                        <h4 text-center class="end">{{\'know_more\' | translate}}</h4>\n                    </div>\n                    <h6><sup>*</sup>{{\'t_c_apply\' | translate}}</h6>\n                </ion-item>\n                <ion-item>\n                    <h3>Thông tin giảm giá</h3>\n                    <div class="text d-flex">\n                        <p>Giảm gía nạp thẻ.</p>\n                        <h4 text-center class="end">{{\'know_more\' | translate}}</h4>\n                    </div>\n                    <h6><sup>*</sup>{{\'t_c_apply\' | translate}}</h6>\n                </ion-item>\n            </ion-scroll>\n        </ion-card>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/search/search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentsuccessfulPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(44);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-paymentsuccessful',template:/*ion-inline-start:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/paymentsuccessful/paymentsuccessful.html"*/'<!--\n<ion-header>\n    <ion-navbar>\n        <ion-title>paymentsuccessful</ion-title>\n    </ion-navbar>\n</ion-header>\n-->\n\n<ion-content text-center>\n    <div class="img_box">\n        <img src="assets/imgs/Successful.png">\n    </div>\n    <h2>{{\'payment_successful\' | translate}}</h2>\n    <p>{{\'your_booking_is_confirmed\' | translate}}<br>{{\'with_quickpay\' | translate}}</p>\n</ion-content>\n<ion-footer no-border text-center>\n    <h2>{{\'share_your_booking_details\' | translate}}</h2>\n    <h3 (click)="tabs()">{{\'continue\' | translate}}</h3>\n</ion-footer>\n'/*ion-inline-end:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/paymentsuccessful/paymentsuccessful.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], PaymentsuccessfulPage);
    return PaymentsuccessfulPage;
}());

//# sourceMappingURL=paymentsuccessful.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NapgamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__promocode_promocode__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_server_server__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_server_account__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var NapgamePage = /** @class */ (function () {
    function NapgamePage(account, events, toast, alertCtrl, myServer, navCtrl, modalCtrl) {
        var _this = this;
        this.account = account;
        this.events = events;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.myServer = myServer;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.sotienTmp = 0;
        this.phoneNum = "";
        this.countService = 0;
        this.chietKhau = 0;
        this.myServer.postRequest("Login/GetUInfo", null, function (data) {
            _this.dataGetUIInfo = data["data"];
            _this.initChietKhauAll();
        });
        this.myServer.getRequest("CTH/admin_getPlaying", null, function (data) {
            _this.dataAdminIsPlaying = data["data"];
            _this.initChietKhauAll();
        });
    }
    NapgamePage.prototype.initChietKhauAll = function () {
        this.countService++;
        if (this.countService < 2)
            return;
        this.select_operator = "garena";
        this.chietKhau = this.dataGetUIInfo["tyLeMuaGarena"];
        this.chietkhau_garena = "(" + this.chietKhau + "%)";
    };
    NapgamePage.prototype.presentConfirm = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Bạn chắc chắn đây là số trả trước?',
            message: 'Mọi sai sót do nhập số trả sau hay sai số điện thoại sẽ không được hoàn tiền. Nếu chưa chắc chắn hãy gọi số tổng đài để xác minh lại',
            buttons: [
                {
                    text: 'Hủy Bỏ',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Đồng Ý',
                    handler: function () {
                        console.log('Buy clicked');
                        _this.naptien();
                    }
                }
            ]
        });
        alert.present();
    };
    NapgamePage.prototype.resetMoney = function () {
        this.sotienTmp = 0;
        this.sotien = this.sotienTmp.toString();
    };
    NapgamePage.prototype.presentToast = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toast.create({
                            message: msg,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    NapgamePage.prototype.onChange = function (prefix) {
        var tn = this.phoneNum.trim().toLowerCase();
        this.sotienTmp = 0;
        this.chietkhau_garena = "(" + this.chietKhau + "%)";
        if (tn.indexOf("garena") >= 0) {
            tn = tn.replace('garena', '').trim();
            tn = tn.substr(0, tn.indexOf(' ')).replace('dk', '');
            this.sotienTmp = parseInt(tn) * 1000;
        }
        else if (tn.indexOf("vtcg") >= 0) {
            tn = tn.replace('vtcg', '').trim();
            tn = tn.substr(0, tn.indexOf(' ')).replace('dk', '');
            this.sotienTmp = parseInt(tn) * 1000;
        }
        else if (tn.indexOf("vng") >= 0) {
            if (tn.indexOf("bidlo") >= 0) {
                tn = tn.replace('vng', '').replace('bidlo', '').trim();
                tn = tn.substr(0, tn.indexOf(' ')).replace('nap', '');
                this.sotienTmp = parseInt(tn) * 1000;
            }
            else {
                var a = tn.split(' ');
                if (a[1].indexOf('dk') >= 0) {
                    tn = a[1].replace('dk', '');
                    this.sotienTmp = parseInt(tn) * 1000;
                }
            }
        }
        else if (tn.indexOf("gosu") >= 0) {
            var a = tn.split(' ');
            if (a[1].indexOf('dk') >= 0) {
                tn = a[1].replace('dk', '');
                this.sotienTmp = parseInt(tn) * 1000;
            }
        }
        var nf = Intl.NumberFormat();
        this.sotien = nf.format(this.sotienTmp) + " = " + nf.format(this.sotienTmp * (this.chietKhau / 100.0));
    };
    NapgamePage.prototype.naptien = function () {
        var _this = this;
        if (this.phoneNum == "") {
            this.presentToast("Chưa nhập mã !");
            return;
        }
        var nf = Intl.NumberFormat();
        var postData = {
            "menhGia": this.sotienTmp,
            "phoneNum": this.phoneNum,
            "cardType": this.select_operator
        };
        this.myServer.postRequest("CTH/RegCharge", postData, function (data) {
            var stt = data["stt"];
            if (stt == 1) {
                _this.presentToast("Đăng ký nạp tiền game thành công!");
                _this.account.UpdateSotien(data["data"]["st"]);
                _this.events.publish('updateScreen');
            }
            else {
                _this.presentToast(data["msg"]);
            }
        });
    };
    NapgamePage.prototype.promocode = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__promocode_promocode__["a" /* PromocodePage */]);
        modal.present();
    };
    NapgamePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-napgame',template:/*ion-inline-start:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/napgame/napgame.html"*/'<ion-header>\n  <ion-navbar>\n      <ion-title>{{\'napgame\' | translate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="form">\n      <ion-list no-lines>\n\n          <ion-item>\n              <ion-input [(ngModel)] = "phoneNum" type="text" placeholder="{{\'GARENA DK200 LQ XXXXXXXX\' | translate}}" (ionChange) = "onChange($event)"></ion-input>\n\n          </ion-item>\n          <ion-item>\n              <!--                <ion-input type="text" placeholder="{{\'select_operator\' | translate}}"></ion-input>-->\n              <ion-label>{{\'select_namegame\' | translate}}</ion-label>\n              <ion-select [(ngModel)]="select_operator">\n                  <ion-option value="garena">\n                     Garena {{chietkhau_garena}}</ion-option>\n                  <ion-option value="vtcg">VTC {{chietkhau_garena}}</ion-option>\n                  <ion-option value="vng">Vina Game {{chietkhau_garena}}</ion-option>\n                  <ion-option value="gosu">Gosu {{chietkhau_garena}}</ion-option>\n\n              </ion-select>\n              <ion-icon class="material-icons" item-end>keyboard_arrow_down</ion-icon>\n          </ion-item>\n\n\n      </ion-list>\n\n\n      <form id="calculator-form1">\n          <ion-item id="calculator-input1">\n              <ion-label></ion-label>\n              <ion-input type="text" placeholder="0" name="display" [(ngModel)]="sotien">0</ion-input>\n          </ion-item>\n      </form>\n\n\n         \n\n\n             <button ion-button block class="btn" (click)="presentConfirm()"> {{\'pay_via_quickpay\' | translate}}</button>\n </div>\n  <div class="banner">\n      <div class="banner_img">\n          <img src="assets/imgs/banner3.png">\n      </div>\n      <div class="banner_text" text-right>\n          <h3 text-uppercase>Nạp tièn điện thoại</h3>\n          <h2>Chiết khấu cao</h2>\n          <h4 text-uppercase>{{\'shop_now\' | translate}}</h4>\n      </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/napgame/napgame.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_server_account__["a" /* Account */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_server_server__["a" /* Server */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], NapgamePage);
    return NapgamePage;
}());

//# sourceMappingURL=napgame.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddmoneyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__promocode_promocode__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_server_server__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_server_account__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var AddmoneyPage = /** @class */ (function () {
    function AddmoneyPage(account, events, toast, alertCtrl, myServer, navCtrl, modalCtrl) {
        var _this = this;
        this.account = account;
        this.events = events;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.myServer = myServer;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.sotienTmp = 0;
        this.accountCanNap = "";
        this.countService = 0;
        this.chietKhau = 0;
        this.myServer.postRequest("Login/GetUInfo", null, function (data) {
            _this.dataGetUIInfo = data["data"];
            _this.initChietKhauAll();
        });
        this.myServer.getRequest("CTH/admin_getPlaying", null, function (data) {
            _this.dataAdminIsPlaying = data["data"];
            _this.initChietKhauAll();
        });
    }
    AddmoneyPage.prototype.initChietKhauAll = function () {
        this.countService++;
        if (this.countService < 2)
            return;
        var prefix = "vt";
        if (this.dataAdminIsPlaying["theNH_" + prefix]["isPlaying"]) {
            this.chietkhau_vt = "(" + this.dataGetUIInfo["tyLeNH_" + prefix] + "%)";
        }
        else {
            this.chietkhau_vt = "(Bảo Trì)";
        }
        prefix = "vn";
        if (this.dataAdminIsPlaying["theNH_" + prefix]["isPlaying"]) {
            this.chietkhau_vn = "(" + this.dataGetUIInfo["tyLeNH_" + prefix] + "%)";
        }
        else {
            this.chietkhau_vn = "(Bảo Trì)";
        }
        prefix = "vtts";
        if (this.dataAdminIsPlaying["theNH_" + prefix]["isPlaying"]) {
            this.chietkhau_vtts = "(" + this.dataGetUIInfo["tyLeNH_" + prefix] + "%)";
        }
        else {
            this.chietkhau_vtts = "(Bảo Trì)";
        }
        prefix = "ftth";
        if (this.dataAdminIsPlaying["theNH_" + prefix]["isPlaying"]) {
            this.chietkhau_ftth = "(" + this.dataGetUIInfo["tyLeNH_" + prefix] + "%)";
        }
        else {
            this.chietkhau_ftth = "(Bảo Trì)";
        }
        prefix = "mb";
        if (this.dataAdminIsPlaying["theNH_" + prefix]["isPlaying"]) {
            this.chietkhau_mb = "(" + this.dataGetUIInfo["tyLeNH_" + prefix] + "%)";
        }
        else {
            this.chietkhau_mb = "(Bảo Trì)";
        }
        this.select_operator = "vt";
        this.chietKhau = this.dataGetUIInfo["tyLeNH_" + this.select_operator];
    };
    AddmoneyPage.prototype.onChangeCardType = function (prefix) {
        this.chietKhau = this.dataGetUIInfo["tyLeNH_" + prefix];
    };
    AddmoneyPage.prototype.addMoney = function (money) {
        var nf = Intl.NumberFormat();
        this.sotienTmp += money;
        this.sotien = nf.format(this.sotienTmp) + " = " + nf.format(this.sotienTmp * (this.chietKhau / 100.0));
    };
    AddmoneyPage.prototype.presentConfirm = function () {
        var _this = this;
        if (this.accountCanNap == "") {
            this.presentToast("Chưa nhập số điện thoại cần nạp!");
            return;
        }
        else if (this.select_operator == "") {
            this.presentToast("Chưa chọn nhà mạng!");
            return;
        }
        else if (this.sotienTmp == 0) {
            this.presentToast("Chưa chọn giá tiền!");
            return;
        }
        var alert = this.alertCtrl.create({
            title: 'Bạn chắc chắn đây là số trả trước?',
            message: 'Mọi sai sót do nhập số trả sau hay sai số điện thoại sẽ không được hoàn tiền. Nếu chưa chắc chắn hãy gọi số tổng đài để xác minh lại',
            buttons: [
                {
                    text: 'Hủy Bỏ',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Đồng Ý',
                    handler: function () {
                        console.log('Buy clicked');
                        _this.naptien();
                    }
                }
            ]
        });
        alert.present();
    };
    AddmoneyPage.prototype.resetMoney = function () {
        this.sotienTmp = 0;
        this.sotien = this.sotienTmp.toString();
    };
    AddmoneyPage.prototype.presentToast = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toast.create({
                            message: msg,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddmoneyPage.prototype.naptien = function () {
        var _this = this;
        var postData = {
            "menhGia": this.sotienTmp,
            "phoneNum": this.accountCanNap,
            "cardType": "nh_" + this.select_operator,
            "otp": "",
        };
        this.myServer.postRequest("CTH/RegChargeNH", postData, function (data) {
            var stt = data["stt"];
            if (stt == 1) {
                _this.account.UpdateSotien(data["data"]["st"]);
                _this.events.publish('updateScreen');
                _this.presentToast("Đăng ký nạp tiền điện thoại thành công!");
            }
            else {
                _this.presentToast(data["msg"]);
            }
        });
    };
    AddmoneyPage.prototype.promocode = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__promocode_promocode__["a" /* PromocodePage */]);
        modal.present();
    };
    AddmoneyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-addmoney',template:/*ion-inline-start:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/addmoney/addmoney.html"*/'<ion-header>\n  <ion-navbar>\n      <ion-title>{{\'add_money\' | translate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="form">\n      <ion-list no-lines>\n\n          <ion-item>\n              <ion-input [(ngModel)] = "accountCanNap" type="text" placeholder="{{\'enter_phone_number\' | translate}}"></ion-input>\n              <ion-icon class="material-icons" item-end>account_box</ion-icon>\n          </ion-item>\n          <ion-item>\n              <!--                <ion-input type="text" placeholder="{{\'select_operator\' | translate}}"></ion-input>-->\n              <ion-label>{{\'select_operator\' | translate}}</ion-label>\n              <ion-select [(ngModel)]="select_operator" (ionChange) = "onChangeCardType($event)">\n                  <ion-option value="vt">\n                    Vietel trả truớc {{chietkhau_vt}}</ion-option>\n\n                  <ion-option value="vn">Vinaphone trả truớc {{chietkhau_vn}}</ion-option>\n                  <ion-option value="vtts">Vietel trả sau {{chietkhau_vtts}}</ion-option>\n                  <ion-option value="ftth">Cuớc truyền hình FTTH {{chietkhau_ftth}}</ion-option>\n                  <ion-option value="mb">Nạp Mobi {{chietkhau_mb}}</ion-option>\n\n              </ion-select>\n              <ion-icon class="material-icons" item-end>keyboard_arrow_down</ion-icon>\n          </ion-item>\n\n\n      </ion-list>\n\n\n      <form id="calculator-form1">\n          <ion-item id="calculator-input1">\n              <ion-label></ion-label>\n              <ion-input type="text" placeholder="0" name="display" [(ngModel)]="sotien">0</ion-input>\n          </ion-item>\n      </form>\n\n\n          <button   ion-button color="energized" (click)="addMoney(10000)"> 10.000 </button>\n          <button ion-button color="energized" (click)="addMoney(20000)"> 20.000 </button>\n          <button ion-button color="energized" (click)="addMoney(50000)"> 50.000 </button>\n          <button ion-button color="energized" (click)="addMoney(100000)"> 100.000 </button>\n          <button ion-button color="energized" (click)="addMoney(200000)"> 200.000 </button>\n          <button ion-button color="energized" (click)="addMoney(500000)"> 500.000 </button>\n          <button   ion-button color="energized" (click)="resetMoney()"> Xoá </button>\n\n\n\n             <button ion-button block class="btn" (click)="presentConfirm()"> {{\'pay_via_quickpay\' | translate}}</button>\n </div>\n  <div class="banner">\n      <div class="banner_img">\n          <img src="assets/imgs/banner3.png">\n      </div>\n      <div class="banner_text" text-right>\n          <h3 text-uppercase>Nạp tièn điện thoại</h3>\n          <h2>Chiết khấu cao</h2>\n          <h4 text-uppercase>{{\'shop_now\' | translate}}</h4>\n      </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/addmoney/addmoney.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_server_account__["a" /* Account */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_server_server__["a" /* Server */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], AddmoneyPage);
    return AddmoneyPage;
}());

//# sourceMappingURL=addmoney.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetpaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-getpayment',template:/*ion-inline-start:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/getpayment/getpayment.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <img src="assets/imgs/logo2.png">\n            <ion-icon class="material-icons end">share</ion-icon>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content text-center>\n\n    <div class="qr_code_box">\n        <h2>{{\'scan_this_code_to_quickpay\' | translate}}</h2>\n        <div class="qr_code">\n            <img src="assets/imgs/img_qrcode.png">\n        </div>\n        <h3 text-uppercase>Samantha smith</h3>\n        <p>+00000000</p>\n    </div>\n</ion-content>\n<ion-footer no-border>\n    <button ion-button block clear class="btn"> {{\'download_qr_code\' | translate}}</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/getpayment/getpayment.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], GetpaymentPage);
    return GetpaymentPage;
}());

//# sourceMappingURL=getpayment.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-transaction',template:/*ion-inline-start:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/transaction/transaction.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{\'transaction\' | translate}}</ion-title>\n    </ion-navbar>\n\n    <div class="banner" text-center>\n        <h2>{{\'quick_pay_balance\' | translate}}</h2>\n        <h3>$3.85</h3>\n        <ion-row>\n            <ion-col col-6>\n                <button ion-button block clear class="btn">{{\'send_to_bank\' | translate}}</button>\n            </ion-col>\n            <ion-col col-6>\n                <button ion-button block class="btn">{{\'add_money\' | translate}}</button>\n            </ion-col>\n        </ion-row>\n    </div>\n</ion-header>\n\n<ion-content class="bg-color">\n    <ion-list no-lines>\n        <h3>Today, 19 Dec, 2018</h3>\n        <ion-item>\n            <div class="img_box" item-start>\n                <img src="assets/imgs/ic_pay.png">\n            </div>\n            <h2 class="d-flex">Paid for Order on QuickPay\n                <span class="end">-$ 10.50</span>\n            </h2>\n            <p>3:14 pm | Pre paid recharge</p>\n        </ion-item>\n        <ion-item>\n            <div class="img_box" item-start>\n                <img src="assets/imgs/ic_get_payment.png">\n            </div>\n            <h2 class="d-flex">Received as Cashback\n                <span class="end">+$ 20.50</span>\n            </h2>\n            <p>11:14 pm | Train Ticket Booking</p>\n        </ion-item>\n\n        <h3>Yestrday, 18 Dec, 2018</h3>\n        <ion-item>\n            <div class="img_box" item-start>\n                <img src="assets/imgs/ic_add_money.png">\n            </div>\n            <h2 class="d-flex">Money Added to wallet\n                <span class="end">+$ 100.50</span>\n            </h2>\n            <p>5:54 pm | via ICDH Bank</p>\n        </ion-item>\n        <ion-item>\n            <div class="img_box" item-start>\n                <img src="assets/imgs/ic_pay.png">\n            </div>\n            <h2 class="d-flex">Paid for Order on QuickPay\n                <span class="end">-$ 10.50</span>\n            </h2>\n            <p>3:14 pm | Pre paid recharge</p>\n        </ion-item>\n        <ion-item>\n            <div class="img_box" item-start>\n                <img src="assets/imgs/ic_get_payment.png">\n            </div>\n            <h2 class="d-flex">Received as Cashback\n                <span class="end">+$ 20.50</span>\n            </h2>\n            <p>11:14 pm | Train Ticket Booking</p>\n        </ion-item>\n\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/transaction/transaction.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], TransactionPage);
    return TransactionPage;
}());

//# sourceMappingURL=transaction.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return My_ordersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_server_server__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__detail_giaodich_detail_giaodich__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__detail_giaodich_nh_detail_giaodich_nh__ = __webpack_require__(229);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var My_ordersPage = /** @class */ (function () {
    function My_ordersPage(datePipe, toast, myServer, navCtrl) {
        this.datePipe = datePipe;
        this.toast = toast;
        this.myServer = myServer;
        this.navCtrl = navCtrl;
        this.history_tab = "";
        this.items = [];
        console.log("ngay:" + Date.now());
        this.history_tab = "lichsu_giaodich";
        this.onSegmentChange();
    }
    My_ordersPage.prototype.onSegmentChange = function () {
        this.items.length = 0;
        var d = new Date();
        var d1 = new Date();
        d1.setDate(d1.getDate() + 1);
        this.tungay = this.datePipe.transform(d, 'dd/MM/yyyy');
        this.denngay = this.datePipe.transform(d1, 'dd/MM/yyyy');
        this.keyword = "";
        this.accountType = "";
        this.tong_da_nap = "0";
        this.tong_giao_dich = "0";
        this.tong_so_tien = "0";
        if (this.history_tab == "lichsu_giaodich") {
            this.finding();
        }
        else {
            this.findingGiaRe();
        }
    };
    My_ordersPage.prototype.presentToast = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toast.create({
                            message: msg,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    My_ordersPage.prototype.finding = function () {
        var _this = this;
        var dataPost = {
            "tungay": this.tungay,
            "denngay": this.denngay,
            "p": "1",
            "k": this.keyword,
            "loaitk": this.accountType,
            "id": "undefined"
        };
        this.myServer.getRequest("CTH/GetListAll", dataPost, function (data) {
            console.log(JSON.stringify(data));
            var stt = data["stt"];
            if (stt == 1) {
                _this.items = [];
                data = data["data"];
                _this.tong_giao_dich = data["tatca"];
                _this.tong_so_tien = data["tongtien"];
                _this.tong_da_nap = data["danap"];
                var lst = data["lst"];
                for (var i = 0; i < lst.length; i++) {
                    var dataItem = {};
                    dataItem["ngay_tao"] = lst[i]["createDate_text"];
                    dataItem["loai"] = lst[i]["loaiTaiKhoan"];
                    dataItem["tai_khoan_nap"] = lst[i]["taiKhoanCanNap"];
                    dataItem["han_muc"] = lst[i]["daNap"];
                    dataItem["da_nap"] = lst[i]["hanMuc"];
                    dataItem["trang_thai"] = lst[i]["status"];
                    dataItem["id"] = lst[i]["id"];
                    _this.items.push(dataItem);
                }
            }
            else {
                _this.presentToast(data["msg"]);
            }
        });
    };
    My_ordersPage.prototype.findingGiaRe = function () {
        var _this = this;
        var dataPost = {
            "tungay": this.tungay,
            "denngay": this.denngay,
            "p": "1",
            "k": this.keyword,
            "loaitk": this.accountType,
            "id": "undefined"
        };
        this.myServer.getRequest("CTH/GetListNH", dataPost, function (data) {
            console.log(JSON.stringify(data));
            var stt = data["stt"];
            if (stt == 1) {
                _this.items = [];
                data = data["data"];
                var nf = Intl.NumberFormat();
                _this.tong_giao_dich = nf.format(data["tatca"]);
                _this.tong_so_tien = nf.format(data["tongtien"]);
                _this.tong_da_nap = nf.format(data["danap"]);
                var lst = data["lst"];
                for (var i = 0; i < lst.length; i++) {
                    var dataItem = {};
                    dataItem["ngay_tao"] = lst[i]["createDate_text"];
                    dataItem["loai"] = lst[i]["loaiTaiKhoan"];
                    dataItem["tai_khoan_nap"] = lst[i]["taiKhoanCanNap"];
                    dataItem["han_muc"] = nf.format(lst[i]["daNap"]);
                    dataItem["da_nap"] = nf.format(lst[i]["hanMuc"]);
                    dataItem["trang_thai"] = lst[i]["status"];
                    dataItem["ghi_chu"] = lst[i]["note"];
                    dataItem["id"] = lst[i]["id"];
                    _this.items.push(dataItem);
                }
            }
            else {
                _this.presentToast(data["msg"]);
            }
        });
    };
    My_ordersPage.prototype.viewDetail = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__detail_giaodich_detail_giaodich__["a" /* DetailGiaoDichPage */], {
            id_giaodich: id
        });
    };
    My_ordersPage.prototype.viewDetailNH = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__detail_giaodich_nh_detail_giaodich_nh__["a" /* DetailGiaoDichNHPage */], {
            id_giaodich: id
        });
    };
    My_ordersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-my_orders',template:/*ion-inline-start:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/my_orders/my_orders.html"*/'\n\n<ion-content class="bg-color">\n        <ion-segment style="background:#3184fe" [(ngModel)]="history_tab" (ionChange)="onSegmentChange($event)">\n                <ion-segment-button value="lichsu_giaodich" style="color:white;margin:0px;font-weight: bold">\n                        Lịch sử giao dịch\n                </ion-segment-button>\n                <ion-segment-button value="lichsu_napthe" style="color:white;margin:0px;font-weight: bold">\n                        Lịch sử nạp thẻ giá rẻ\n                </ion-segment-button>\n            </ion-segment>\n            \n    <div class="tab_container" [ngSwitch]="history_tab">\n            \n        <ion-list no-lines *ngSwitchCase="\'lichsu_giaodich\'">\n                <ion-card>\n                        <ion-grid>\n                            <ion-row>\n                                <ion-col>\n                                    <ion-item>\n                                        <ion-label position="fixed">Từ ngày : </ion-label>\n                                        <ion-input type="text" placeholder = "Chọn ngày..." [(ngModel)] = "tungay"></ion-input>\n                                    </ion-item>\n                                </ion-col>\n                                <ion-col>\n                                    <ion-item>\n                                        <ion-label position="fixed">Từ Khóa : </ion-label>\n                                        <ion-input type="text" placeholder = "Chọn từ khóa..." [(ngModel)] = "keyword"></ion-input>\n                                    </ion-item>\n                                </ion-col>\n                            </ion-row>\n                            <ion-row>\n                                <ion-col>\n                                    <ion-item>\n                                        <ion-label position="fixed">Đến Ngày : </ion-label>\n                                        <ion-input type="text" placeholder = "Chọn ngày..." [(ngModel)] = "denngay"></ion-input>\n                                    </ion-item>\n                                </ion-col>\n    \n                                <ion-col>\n                                    <ion-item>\n                                        <ion-label position="fixed">Loại Tài Khoản : </ion-label>\n                                        <ion-select [(ngModel)]="accountType" interface="action-sheet">\n                                                <ion-option value="">Tất cả {{sortAll}}</ion-option>\n                                                <ion-option value="mb">Mobi {{sortMb}}</ion-option>\n                                                <ion-option value="vn">Vina {{sortVn}}</ion-option>\n                                                <ion-option value="vt">Viettel{{sortVt}}</ion-option>\n                              \n                                            </ion-select>\n                                    </ion-item>\n                                </ion-col>\n                            </ion-row>\n                            \n                        </ion-grid>\n                        <div class = "center">\n                                <button ion-button color="secondary" (click) = "finding()">TÌM KIẾM</button>\n                                <br>\n                                <br>\n                        </div>\n                        \n                        </ion-card>\n                        <div>\n                            <ion-card >\n                        <ion-grid>\n                            <ion-row>\n                                <ion-col>\n                                        <ion-label class="title_all" style="font-weight:bold;color:#694efe" >Tổng số giao dịch</ion-label>\n                                        <ion-label class="title_all">{{tong_giao_dich}}</ion-label>\n                                </ion-col>\n                                <ion-col>\n                                        <ion-label  class="title_all" style="font-weight:bold;color:#ffc91e"  >Tổng số tiền</ion-label>\n                                        <ion-label class="title_all">{{tong_so_tien}}</ion-label>\n                                </ion-col>\n                                <ion-col>\n                                        <ion-label  class="title_all" style="font-weight:bold;color:#ed3a44" >Tổng đã nạp</ion-label>\n                                        <ion-label class="title_all">{{tong_da_nap}}</ion-label>\n                                </ion-col>\n                            </ion-row>\n                        </ion-grid>\n                    </ion-card>\n                    </div>\n                    \n                    <ion-item style="background:#34db61">\n                            <ion-label style="text-align:center;font-weight:bold;color:white">Ngày tạo</ion-label>\n                            <ion-label style="text-align:center;font-weight:bold;color:white">Loại</ion-label>\n                            <ion-label style="text-align:center;font-weight:bold;color:white">Tài khoản nạp</ion-label>\n                            <ion-label style="text-align:center;font-weight:bold;color:white">Hạn mức</ion-label>\n                            <ion-label style="text-align:center;font-weight:bold;color:white">Đã nạp</ion-label>\n                            <ion-label style="text-align:center;font-weight:bold;color:white">Trạng thái</ion-label>\n                    </ion-item>\n        <ion-list>\n            <ion-item *ngFor = "let item of items">\n                    <ion-label style="text-align:center;font-weight:bold;color:#3184fe" (click)="viewDetail(item[\'id\'])">{{item[\'ngay_tao\']}}</ion-label>\n                    <ion-label style="text-align:center">{{item[\'loai\']}}</ion-label>\n                    <ion-label style="text-align:center">{{item[\'tai_khoan_nap\']}}</ion-label>\n                    <ion-label style="text-align:center">{{item[\'han_muc\']}}</ion-label>\n                    <ion-label style="text-align:center">{{item[\'da_nap\']}}</ion-label>\n                    <ion-label style="text-align:center">{{item[\'trang_thai\']}}</ion-label>\n               \n            </ion-item>\n        </ion-list>\n        </ion-list>\n\n        <ion-list no-lines *ngSwitchCase="\'lichsu_napthe\'">\n                <ion-card>\n                        <ion-grid>\n                            <ion-row>\n                                    <ion-col>\n                                            <ion-item>\n                                                <ion-label position="fixed">Từ ngày : </ion-label>\n                                                <ion-input type="text" placeholder = "Chọn ngày..." [(ngModel)] = "tungay"></ion-input>\n                                            </ion-item>\n                                        </ion-col>\n                                        <ion-col>\n                                            <ion-item>\n                                                <ion-label position="fixed">Từ Khóa : </ion-label>\n                                                <ion-input type="text" placeholder = "Chọn từ khóa..." [(ngModel)] = "keyword"></ion-input>\n                                            </ion-item>\n                                        </ion-col>\n                                    </ion-row>\n                                    <ion-row>\n                                        <ion-col>\n                                            <ion-item>\n                                                <ion-label position="fixed">Đến Ngày : </ion-label>\n                                                <ion-input type="text" placeholder = "Chọn ngày..." [(ngModel)] = "denngay"></ion-input>\n                                            </ion-item>\n                                        </ion-col>\n    \n                                <ion-col>\n                                    <ion-item>\n                                        <ion-label position="fixed">Loại Tài Khoản : </ion-label>\n                                        <ion-select [(ngModel)]="accountType" interface="action-sheet">\n                                                <ion-option value="all">Tất cả {{sortAll}}</ion-option>\n                                                <ion-option value="vttt">VT trả trước {{sortVttt}}</ion-option>\n                                                <ion-option value="vn">Vina {{sortVn}}</ion-option>\n                                                <ion-option value="vtts">VT trả sau {{sortVtts}}</ion-option>\n                                                <ion-option value="ftth">Ftth {{sortFtth}}</ion-option>\n                              \n                                            </ion-select>\n                                    </ion-item>\n                                </ion-col>\n                            </ion-row>\n                            \n                        </ion-grid>\n                        <div class = "center">\n                                <button ion-button color="secondary" (click) = "findingGiaRe()">TÌM KIẾM</button>\n                                <br>\n                                <br>\n                        </div>\n                        \n                        </ion-card>\n                        <div>\n                            <ion-card >\n                        <ion-grid>\n                            <ion-row>\n                                <ion-col>\n                                        <ion-label class="title_all" style="font-weight:bold;color:#694efe" >Tổng số giao dịch</ion-label>\n                                        <ion-label class="title_all">{{tong_giao_dich}}</ion-label>\n                                </ion-col>\n                                <ion-col>\n                                        <ion-label  class="title_all" style="font-weight:bold;color:#ffc91e"  >Tổng số tiền</ion-label>\n                                        <ion-label class="title_all">{{tong_so_tien}}</ion-label>\n                                </ion-col>\n                                <ion-col>\n                                        <ion-label  class="title_all" style="font-weight:bold;color:#ed3a44" >Tổng đã nạp</ion-label>\n                                        <ion-label class="title_all">{{tong_da_nap}}</ion-label>\n                                </ion-col>\n                            </ion-row>\n                        </ion-grid>\n                    </ion-card>\n                    </div>\n                    <ion-item style="background:#34db61">\n                            <ion-label style="text-align:center;font-weight:bold;color:white">Ngày tạo</ion-label>\n                            <ion-label style="text-align:center;font-weight:bold;color:white">Loại</ion-label>\n                            <ion-label style="text-align:center;font-weight:bold;color:white">Tài khoản nạp</ion-label>\n                            <ion-label style="text-align:center;font-weight:bold;color:white">Hạn mức</ion-label>\n                            <ion-label style="text-align:center;font-weight:bold;color:white">Đã nạp</ion-label>\n                            <ion-label style="text-align:center;font-weight:bold;color:white">Trạng thái</ion-label>\n                            <ion-label style="text-align:center;font-weight:bold;color:white">Ghi chú</ion-label>\n                    </ion-item>\n                <ion-item *ngFor = "let item of items">\n                        <ion-label style="text-align:center;font-weight:bold;color:#3184fe" (click)="viewDetailNH(item[\'id\'])">{{item[\'ngay_tao\']}}</ion-label>\n                    <ion-label style="text-align:center">{{item[\'loai\']}}</ion-label>\n                    <ion-label style="text-align:center">{{item[\'tai_khoan_nap\']}}</ion-label>\n                    <ion-label style="text-align:center">{{item[\'han_muc\']}}</ion-label>\n                    <ion-label style="text-align:center">{{item[\'da_nap\']}}</ion-label>\n                    <ion-label style="text-align:center">{{item[\'trang_thai\']}}</ion-label>\n                        <ion-label style="text-align:center">{{item[\'ghi_chu\']}}</ion-label>\n                </ion-item>\n        </ion-list>\n\n       \n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/my_orders/my_orders.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* DatePipe */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* DatePipe */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_server_server__["a" /* Server */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], My_ordersPage);
    return My_ordersPage;
}());

//# sourceMappingURL=my_orders.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailGiaoDichNHPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_server_server__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_server_account__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var DetailGiaoDichNHPage = /** @class */ (function () {
    function DetailGiaoDichNHPage(alertCtrl, toast, myServer, account, navCtrl, navParams) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.toast = toast;
        this.myServer = myServer;
        this.account = account;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.id = this.navParams.get("id_giaodich");
        console.log("id_giadich:" + this.id);
        var postData = {
            "id": this.id
        };
        this.myServer.postRequest("CTH/GetNH1", postData, function (data) {
            var stt = data["stt"];
            if (stt == 1) {
                data = data["data"];
                _this.init(data);
            }
        });
    }
    DetailGiaoDichNHPage.prototype.init = function (data) {
        this.status = data["status"];
        this.tt_the = "Thẻ " + data["loaiTaiKhoan"] + ", Số Tiền : " + data["hanMuc"];
        this.phoneNum = data["taiKhoanCanNap"];
        this.danap = data["daNap"];
        this.result_nap = data["note"];
    };
    DetailGiaoDichNHPage.prototype.presentToast = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toast.create({
                            message: msg,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    DetailGiaoDichNHPage.prototype.check = function () {
        var _this = this;
        var postData = {
            "id": this.id
        };
        this.myServer.postRequest("CTH/GetNH1", postData, function (data) {
            var stt = data["stt"];
            if (stt == 1) {
                _this.init(data["data"]);
                _this.presentToast(data["msg"]);
            }
        });
    };
    DetailGiaoDichNHPage.prototype.cancel = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Xác nhận lại!',
            message: 'Bạn chắc chắn muốn hủy?',
            buttons: [
                {
                    text: 'Hủy Bỏ',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Đồng Ý',
                    handler: function () {
                        var postData = {
                            "id": _this.id
                        };
                        _this.myServer.getRequest("CTH/CancelNH", postData, function (data) {
                            var stt = data["stt"];
                            if (stt == 1) {
                                _this.init(data["data"]);
                                _this.presentToast(data["msg"]);
                            }
                            else {
                                _this.presentToast(data["msg"]);
                            }
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    DetailGiaoDichNHPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-detail_giaodich_nh',template:/*ion-inline-start:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/detail_giaodich_nh/detail_giaodich_nh.html"*/'<ion-header class="bg-transparent">\n    <ion-navbar>\n        <ion-title><span text-uppercase class="center">Chi tiết giao dịch</span></ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-color">\n        <ion-card>\n                <ion-item>\n                        <div>\n                                <button style="width:150px;height:50px;font-weight: bold;background-color:#007ffe;color:white" ion-button  (click) = "check()" >KIỂM TRA</button>\n                                <button style="width:150px;height:50px;font-weight: bold;background-color:#d92f48;color:white" ion-button  (click)="cancel()">HỦY YÊU CẦU</button>\n                                </div>\n                </ion-item>\n        </ion-card>\n\n\n\n    <ion-card>\n        <ion-label style="font-weight: bold;font-size:30px;text-align: center;color:#3184fe " >THÔNG TIN</ion-label>\n        <ion-item>\n                <ion-label style="margin-left: 20px" color="primary">TT thẻ <span style="color:#34db61">({{status}})</span> : </ion-label>\n                <ion-input disabled ="true" style="color:black" [(ngModel)]="tt_the"></ion-input>\n        </ion-item>\n        <hr>\n        <ion-item>\n                <ion-label style="margin-left: 20px" color="primary">Số điện thoại nạp : </ion-label>\n                <ion-input disabled ="true" [(ngModel)]="phoneNum"></ion-input>\n        </ion-item>\n        <hr>\n        <ion-item>\n                <ion-label style="margin-left: 20px" color="primary">Số tiền đã nạp : </ion-label>\n                <ion-input disabled ="true"  [(ngModel)]="danap"></ion-input>\n        </ion-item>\n        <hr>\n        <ion-item>\n                <ion-label style="margin-left: 20px" color="primary">Kết quả nạp : </ion-label>\n                \n        </ion-item>\n        <div style="height:100px">\n                        <ion-textarea disabled ="true"   [(ngModel)]="result_nap"></ion-textarea>\n        </div>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/detail_giaodich_nh/detail_giaodich_nh.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1__providers_server_server__["a" /* Server */], __WEBPACK_IMPORTED_MODULE_2__providers_server_account__["a" /* Account */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavParams */]])
    ], DetailGiaoDichNHPage);
    return DetailGiaoDichNHPage;
}());

//# sourceMappingURL=detail_giaodich_nh.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__myprofile_myprofile__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__favorited_favorited__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notification_notification__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__help_help__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__condition_condition__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_server_server__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__signin_signin__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_server_account__ = __webpack_require__(11);
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
    function AccountPage(myServer, account, navCtrl) {
        this.myServer = myServer;
        this.account = account;
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
    AccountPage.prototype.logout = function () {
        var _this = this;
        var postData = {};
        this.myServer.postRequest("Login/Logout", null, function (data) {
            var stt = data["stt"];
            if (stt == 1) {
                console.log("logout thành công");
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__signin_signin__["a" /* SigninPage */]);
            }
            else {
                console.log("logout thất bại");
            }
        });
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/account/account.html"*/'<ion-header class="header_bg bg-transparent">\n    <ion-navbar>\n        <ion-title>{{\'account\' | translate}}</ion-title>\n\n    </ion-navbar>\n    <div class="profile_box d-flex" (click)="myprofile()">\n        <div class="profile_img">\n            <img src="assets/imgs/profile_pic.png">\n        </div>\n        <div class="name_box">\n            <h2>12C Pay</h2>\n            <h3>{{\'view_profile\' | translate}}</h3>\n        </div>\n    </div>\n</ion-header>\n\n<ion-content class="bg-color">\n    <ion-list no-lines>\n\n        <ion-item (click)="notification()">\n            <div class="icon_box" item-start>\n                <img src="assets/imgs/ic_invite.png">\n            </div>\n            <h2>{{\'notifications\' | translate}}</h2>\n        </ion-item>\n        <ion-item (click)="help()">\n            <div class="icon_box" item-start>\n                <img src="assets/imgs/ic_help.png">\n            </div>\n            <h2>{{\'need_help\' | translate}}</h2>\n        </ion-item>\n        <ion-item>\n            <div class="icon_box" item-start>\n                <img src="assets/imgs/ic_rate.png">\n            </div>\n            <h2>{{\'rate_us\' | translate}}</h2>\n        </ion-item>\n        <ion-item (click)="condition()">\n            <div class="icon_box" item-start>\n                <img src="assets/imgs/ic_guideline.png">\n            </div>\n            <h2>{{\'terms_conditions\' | translate}}</h2>\n        </ion-item>\n        <ion-item (click)="logout()">\n          <div class="icon_box" item-start>\n              <img src="assets/imgs/exit.png">\n          </div>\n          <h2>{{\'logout\' | translate}}</h2>\n      </ion-item>\n\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/account/account.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__providers_server_server__["a" /* Server */], __WEBPACK_IMPORTED_MODULE_9__providers_server_account__["a" /* Account */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-myprofile',template:/*ion-inline-start:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/myprofile/myprofile.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{\'my_profile\' | translate}}<span class="end text-theme">{{\'update\' | translate}}</span></ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-color">\n    <div class="profile-img">\n        <div class="img-box">\n            <img src="assets/imgs/profile_pic.png">\n        </div>\n        <h3 text-center>{{\'change_picture\' | translate}}</h3>\n    </div>\n    <div class="form">\n        <ion-list no-lines>\n            <ion-row>\n                <ion-col col-6>\n                    <ion-item>\n                        <ion-label floating>{{\'frist_name\' | translate}}</ion-label>\n                        <ion-input type="text" value="Sam"></ion-input>\n                    </ion-item>\n                </ion-col>\n                <ion-col col-6>\n                    <ion-item>\n                        <ion-label floating>{{\'last_name\' | translate}}</ion-label>\n                        <ion-input type="text" value="Smith"></ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <ion-item>\n                <ion-label floating>{{\'email_address\' | translate}}</ion-label>\n                <ion-input type="email" value="samanthasmith@mail.com"></ion-input>\n                <img src="assets/imgs/ic_verified.png" item-end>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>{{\'phone_number\' | translate}}</ion-label>\n                <ion-input type="text" value="+1 987 654 3210"></ion-input>\n                <img src="assets/imgs/ic_verified.png" item-end>\n            </ion-item>\n\n            <ion-row>\n                <ion-col col-6>\n                    <ion-item>\n                        <ion-label floating>{{\'gender\' | translate}}</ion-label>\n                        <ion-input type="text" value="Male"></ion-input>\n                    </ion-item>\n                </ion-col>\n                <ion-col col-6>\n                    <ion-item>\n                        <ion-label floating>{{\'date_of_birht\' | translate}}</ion-label>\n                        <ion-input type="text" value="23rd Dec, 1990"></ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n\n        </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/myprofile/myprofile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], MyprofilePage);
    return MyprofilePage;
}());

//# sourceMappingURL=myprofile.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_info_item_info__ = __webpack_require__(59);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-favorited',template:/*ion-inline-start:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/favorited/favorited.html"*/'<ion-header class="bg-transparent">\n    <ion-navbar>\n        <ion-title>{{\'favorited\' | translate}}\n            <ion-icon class="material-icons end">search</ion-icon>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-color">\n    <ion-row>\n        <ion-col col-6 (click)="item_info()">\n            <div class="item-box">\n                <div class="img_box">\n                    <img src="assets/imgs/f1.png">\n                </div>\n                <h2>Spyworn white cotton shirt Xl</h2>\n                <p>$9.99</p>\n                <ion-icon class="material-icons favorite_icon">favorite</ion-icon>\n            </div>\n        </ion-col>\n        <ion-col col-6 (click)="item_info()">\n            <div class="item-box">\n                <div class="img_box">\n                    <img src="assets/imgs/f2.png">\n                </div>\n                <h2>Spyworn Blue cotton shirt Xl</h2>\n                <p>$9.99</p>\n                <ion-icon class="material-icons favorite_icon">favorite</ion-icon>\n            </div>\n        </ion-col>\n        <ion-col col-6 (click)="item_info()">\n            <div class="item-box">\n                <div class="img_box">\n                    <img src="assets/imgs/f3.png">\n                </div>\n                <h2>Spyworn white cotton shirt Xl</h2>\n                <p>$9.99</p>\n                <ion-icon class="material-icons favorite_icon">favorite</ion-icon>\n            </div>\n        </ion-col>\n        <ion-col col-6 (click)="item_info()">\n            <div class="item-box">\n                <div class="img_box">\n                    <img src="assets/imgs/f4.png">\n                </div>\n                <h2>Spyworn white cotton shirt Xl</h2>\n                <p>$9.99</p>\n                <ion-icon class="material-icons favorite_icon">favorite</ion-icon>\n            </div>\n        </ion-col>\n        <ion-col col-6 (click)="item_info()">\n            <div class="item-box">\n                <div class="img_box">\n                    <img src="assets/imgs/f1.png">\n                </div>\n                <h2>Spyworn white cotton shirt Xl</h2>\n                <p>$9.99</p>\n                <ion-icon class="material-icons favorite_icon">favorite</ion-icon>\n            </div>\n        </ion-col>\n        <ion-col col-6 (click)="item_info()">\n            <div class="item-box">\n                <div class="img_box">\n                    <img src="assets/imgs/f4.png">\n                </div>\n                <h2>Spyworn white cotton shirt Xl</h2>\n                <p>$9.99</p>\n                <ion-icon class="material-icons favorite_icon">favorite</ion-icon>\n            </div>\n        </ion-col>\n        <ion-col col-6 (click)="item_info()">\n            <div class="item-box">\n                <div class="img_box">\n                    <img src="assets/imgs/f1.png">\n                </div>\n                <h2>Spyworn white cotton shirt Xl</h2>\n                <p>$9.99</p>\n                <ion-icon class="material-icons favorite_icon">favorite</ion-icon>\n            </div>\n        </ion-col>\n        <ion-col col-6 (click)="item_info()">\n            <div class="item-box">\n                <div class="img_box">\n                    <img src="assets/imgs/f2.png">\n                </div>\n                <h2>Spyworn Blue cotton shirt Xl</h2>\n                <p>$9.99</p>\n                <ion-icon class="material-icons favorite_icon">favorite</ion-icon>\n            </div>\n        </ion-col>\n        <ion-col col-6 (click)="item_info()">\n            <div class="item-box">\n                <div class="img_box">\n                    <img src="assets/imgs/f3.png">\n                </div>\n                <h2>Spyworn white cotton shirt Xl</h2>\n                <p>$9.99</p>\n                <ion-icon class="material-icons favorite_icon">favorite</ion-icon>\n            </div>\n        </ion-col>\n        <ion-col col-6 (click)="item_info()">\n            <div class="item-box">\n                <div class="img_box">\n                    <img src="assets/imgs/f4.png">\n                </div>\n                <h2>Spyworn white cotton shirt Xl</h2>\n                <p>$9.99</p>\n                <ion-icon class="material-icons favorite_icon">favorite</ion-icon>\n            </div>\n        </ion-col>\n        <ion-col col-6 (click)="item_info()">\n            <div class="item-box">\n                <div class="img_box">\n                    <img src="assets/imgs/f1.png">\n                </div>\n                <h2>Spyworn white cotton shirt Xl</h2>\n                <p>$9.99</p>\n                <ion-icon class="material-icons favorite_icon">favorite</ion-icon>\n            </div>\n        </ion-col>\n        <ion-col col-6 (click)="item_info()">\n            <div class="item-box">\n                <div class="img_box">\n                    <img src="assets/imgs/f4.png">\n                </div>\n                <h2>Spyworn white cotton shirt Xl</h2>\n                <p>$9.99</p>\n                <ion-icon class="material-icons favorite_icon">favorite</ion-icon>\n            </div>\n        </ion-col>\n    </ion-row>\n</ion-content>\n'/*ion-inline-end:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/favorited/favorited.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], FavoritedPage);
    return FavoritedPage;
}());

//# sourceMappingURL=favorited.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-notification',template:/*ion-inline-start:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/notification/notification.html"*/'<ion-header class="bg-transparent">\n    <ion-navbar>\n        <ion-title>{{\'notifications\' | translate}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-color">\n    <ion-list no-lines>\n        <ion-item class="active">\n            <h2 class="d-flex"><span>Bạn vừa nạp tiền Vietel trả truớc thành công</span>\n                <ion-icon class="material-icons end">fiber_manual_record</ion-icon>\n            </h2>\n            <p>Cách đay 2 giờ</p>\n        </ion-item>\n\n        <ion-item class="active">\n            <h2 class="d-flex"><span>Your order for Sqware white shirt has been dispatched</span>\n                <ion-icon class="material-icons end">fiber_manual_record</ion-icon>\n            </h2>\n            <p>Cách đay 2 giờ</p>\n        </ion-item>\n\n        <ion-item>\n            <h2 class="d-flex"><span>Bạn vừa nạp tiền Mobi trả truớc thành công</span>\n                <ion-icon class="material-icons end">fiber_manual_record</ion-icon>\n            </h2>\n            <p>Cách đay 2 giờ</p>\n        </ion-item>\n\n        <ion-item>\n            <h2 class="d-flex"><span>YBạn vừa nạp tiền Mobi trả truớc thành công.</span>\n                <ion-icon class="material-icons end">fiber_manual_record</ion-icon>\n            </h2>\n            <p>Cách đay 2 giờ</p>\n        </ion-item>\n\n        <ion-item>\n            <h2 class="d-flex"><span>Bạn vừa nạp tiền Mobi trả truớc thành công</span>\n                <ion-icon class="material-icons end">fiber_manual_record</ion-icon>\n            </h2>\n            <p>Cách đay 2 giờ</p>\n        </ion-item>\n\n        <ion-item>\n            <h2 class="d-flex"><span>Bạn vừa nạp tiền Mobi trả truớc thành công</span>\n                <ion-icon class="material-icons end">fiber_manual_record</ion-icon>\n            </h2>\n            <p>Cách đay 2 giờ</p>\n        </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/notification/notification.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], NotificationPage);
    return NotificationPage;
}());

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-help',template:/*ion-inline-start:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/help/help.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{\'help\' | translate}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list no-lines>\n        <ion-item>\n            <h2>{{\'how_to_book\' | translate}}</h2>\n        </ion-item>\n        <ion-item>\n            <h2>{{\'how_to_pay\' | translate}}</h2>\n        </ion-item>\n        <ion-item>\n            <h2>{{\'how_to_cancel_booking\' | translate}}</h2>\n        </ion-item>\n        <ion-item>\n            <h2>{{\'how_to_complain_about_service\' | translate}}</h2>\n        </ion-item>\n        <ion-item>\n            <h2>{{\'what_is_service_charge\' | translate}}</h2>\n        </ion-item>\n        <ion-item>\n            <h2>{{\'verify_phone_number\' | translate}}</h2>\n        </ion-item>\n        <ion-item>\n            <h2>{{\'start_seling\' | translate}}</h2>\n        </ion-item>\n        <ion-item>\n            <h2>{{\'refund_policy\' | translate}}</h2>\n        </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/help/help.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HelpPage);
    return HelpPage;
}());

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConditionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-condition',template:/*ion-inline-start:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/condition/condition.html"*/'<ion-header class="bg-transparent">\n    <ion-navbar>\n        <ion-title>{{\'terms_conditions\' | translate}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div class="banner center_img">\n        <img src="assets/imgs/banner2.png" class="crop_img">\n        <div class="logo">\n            <img src="assets/imgs/logo.png">\n        </div>\n    </div>\n    <div class="text_box">\n        <h2>{{\'terms_of_use\' | translate}}</h2>\n        <p>\n          Không được sử dụng trái phép Dịch vụ của chúng tôi. Ví dụ: không được gây trở ngại cho Dịch vụ của chúng tôi hoặc tìm cách truy cập chúng bằng phương pháp nào đó không thông qua giao diện và hướng dẫn mà chúng tôi cung cấp. Bạn chỉ có thể sử dụng Dịch vụ của chúng tôi theo như được luật pháp cho phép, bao gồm cả các luật và quy định hiện hành về quản lý xuất khẩu và tái xuất khẩu. Chúng tôi có thể tạm ngừng hoặc ngừng cung cấp Dịch vụ của chúng tôi cho bạn nếu bạn không tuân thủ các điều khoản hoặc chính sách của chúng tôi hoặc nếu chúng tôi đang điều tra hành vi bị nghi ngờ là sai phạm.        </p>\n        <p>\n          Việc bạn sử dụng Dịch vụ của chúng tôi không có nghĩa là bạn được sở hữu bất cứ các quyền sở hữu trí tuệ nào đối với Dịch vụ của chúng tôi hoặc nội dung mà bạn truy cập. Bạn không được sử dụng nội dung từ Dịch vụ của chúng tôi trừ khi bạn được chủ sở hữu nội dung đó cho phép hoặc được luật pháp cho phép. Các điều khoản này không cấp cho bạn quyền sử dụng bất kỳ thương hiệu hoặc lôgô nào được sử dụng trong Dịch vụ của chúng tôi. Không được xóa, che khuất hoặc thay đổi bất kỳ thông báo pháp lý nào được hiển thị trong hoặc kèm theo Dịch vụ của chúng tôi.\n        </p>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/condition/condition.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], ConditionPage);
    return ConditionPage;
}());

//# sourceMappingURL=condition.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotpasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signin_signin__ = __webpack_require__(57);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-forgotpassword',template:/*ion-inline-start:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/forgotpassword/forgotpassword.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title></ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div class="form">\n        <h2>{{\'forgot_password\' | translate}}</h2>\n        <p>{{\'forgot_password_text_1\' | translate}}<br>{{\'forgot_password_text_2\' | translate}}</p>\n        <ion-list no-lines>\n            <ion-item>\n                <ion-input type="text" placeholder="{{\'enter_code_here\' | translate}}" value="+1 987 654 3210"></ion-input>\n            </ion-item>\n            <button ion-button block class="btn" (click)="tabs()"> {{\'submit\' | translate}}</button>\n            <h3 text-center (click)="signin()">{{\'back\' | translate}}</h3>\n        </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/forgotpassword/forgotpassword.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], ForgotpasswordPage);
    return ForgotpasswordPage;
}());

//# sourceMappingURL=forgotpassword.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(257);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_http_loader__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_detail_giaodich_detail_giaodich__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_detail_giaodich_nh_detail_giaodich_nh__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_lichsu_giaodich_daily_lichsu_giaodich_daily__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_sodu_daily_sodu_daily__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_detail_daily_detail_daily__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_add_daily_add_daily__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_list_daily_list_daily__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_account_account__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_addmoney_addmoney__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_book_ticket_book_ticket__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_kplus_kplus__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_condition_condition__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_favorited_favorited__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_forgotpassword_forgotpassword__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_getpayment_getpayment__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_help_help__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_home_home__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_pay_or_send_pay_or_send__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_item_info_item_info__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_item_lists_item_lists__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_mall_mall__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_my_orders_my_orders__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_myprofile_myprofile__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_notification_notification__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_napgame_napgame__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_paymentsuccessful_paymentsuccessful__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_phonerecharge_phonerecharge__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_promocode_promocode__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_search_search__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_signin_signin__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_signup_signup__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_tabs_tabs__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_transaction_transaction__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_verification_verification__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__providers_server_server__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__providers_server_account__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__ionic_native_splash_screen__ = __webpack_require__(211);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_addmoney_addmoney__["a" /* AddmoneyPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_book_ticket_book_ticket__["a" /* Book_ticketPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_kplus_kplus__["a" /* KplusPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_condition_condition__["a" /* ConditionPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_favorited_favorited__["a" /* FavoritedPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_getpayment_getpayment__["a" /* GetpaymentPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_pay_or_send_pay_or_send__["a" /* Pay_or_sendPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_item_info_item_info__["a" /* Item_infoPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_item_lists_item_lists__["a" /* Item_listsPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_mall_mall__["a" /* QrcodePage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_my_orders_my_orders__["a" /* My_ordersPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_myprofile_myprofile__["a" /* MyprofilePage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_napgame_napgame__["a" /* NapgamePage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_paymentsuccessful_paymentsuccessful__["a" /* PaymentsuccessfulPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_phonerecharge_phonerecharge__["a" /* PhonerechargePage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_promocode_promocode__["a" /* PromocodePage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_transaction_transaction__["a" /* TransactionPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_verification_verification__["a" /* VerificationPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_list_daily_list_daily__["a" /* ListDailyPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_add_daily_add_daily__["a" /* AddDailyPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_detail_daily_detail_daily__["a" /* DetailDailyPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_sodu_daily_sodu_daily__["a" /* SoduDailyPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_lichsu_giaodich_daily_lichsu_giaodich_daily__["a" /* LichSuGiaoDichDailyPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_detail_giaodich_detail_giaodich__["a" /* DetailGiaoDichPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_detail_giaodich_nh_detail_giaodich_nh__["a" /* DetailGiaoDichNHPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
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
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_addmoney_addmoney__["a" /* AddmoneyPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_book_ticket_book_ticket__["a" /* Book_ticketPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_kplus_kplus__["a" /* KplusPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_condition_condition__["a" /* ConditionPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_favorited_favorited__["a" /* FavoritedPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_getpayment_getpayment__["a" /* GetpaymentPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_pay_or_send_pay_or_send__["a" /* Pay_or_sendPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_item_info_item_info__["a" /* Item_infoPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_item_lists_item_lists__["a" /* Item_listsPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_mall_mall__["a" /* QrcodePage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_my_orders_my_orders__["a" /* My_ordersPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_myprofile_myprofile__["a" /* MyprofilePage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_napgame_napgame__["a" /* NapgamePage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_paymentsuccessful_paymentsuccessful__["a" /* PaymentsuccessfulPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_phonerecharge_phonerecharge__["a" /* PhonerechargePage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_promocode_promocode__["a" /* PromocodePage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_transaction_transaction__["a" /* TransactionPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_verification_verification__["a" /* VerificationPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_list_daily_list_daily__["a" /* ListDailyPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_add_daily_add_daily__["a" /* AddDailyPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_detail_daily_detail_daily__["a" /* DetailDailyPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_sodu_daily_sodu_daily__["a" /* SoduDailyPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_lichsu_giaodich_daily_lichsu_giaodich_daily__["a" /* LichSuGiaoDichDailyPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_detail_giaodich_detail_giaodich__["a" /* DetailGiaoDichPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_detail_giaodich_nh_detail_giaodich_nh__["a" /* DetailGiaoDichNHPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_43__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_44__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_41__providers_server_server__["a" /* Server */],
                __WEBPACK_IMPORTED_MODULE_42__providers_server_account__["a" /* Account */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_signin_signin__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__node_modules_ngx_translate_core__ = __webpack_require__(237);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__node_modules_ngx_translate_core__["c" /* TranslateService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromocodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-promocode',template:/*ion-inline-start:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/promocode/promocode.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <ion-icon class="material-icons" (click)="dismiss()">clear</ion-icon>\n        </ion-title>\n    </ion-navbar>\n    <div class="form">\n        <ion-list no-lines>\n            <ion-item>\n                <ion-input type="text" placeholder="{{\'enter_promocode\' | translate}}"></ion-input>\n            </ion-item>\n            <button ion-button block class="btn" (click)="dismiss()"> {{\'apply\' | translate}}</button>\n        </ion-list>\n    </div>\n</ion-header>\n\n<ion-content class="bg-color">\n    <ion-list no-lines>\n        <h3>{{\'offers\' | translate}}</h3>\n        <ion-item>\n            <h2>\n                Freerecharge50\n            </h2>\n            <p>Recharge with $5.00 and get 10% instant cashback in 24 hours.</p>\n            <p>{{\'terms_conditions_apply\' | translate}}</p>\n        </ion-item>\n        <ion-item>\n            <h2>\n                Next5Offer\n            </h2>\n            <p>Recharge with $5.00 and get 10% instant cashback in 24 hours.</p>\n            <p>{{\'terms_conditions_apply\' | translate}}</p>\n        </ion-item>\n        <ion-item>\n            <h2>\n                10On10bonanza\n            </h2>\n            <p>Recharge with $5.00 and get 10% instant cashback in 24 hours.</p>\n            <p>{{\'terms_conditions_apply\' | translate}}</p>\n        </ion-item>\n        <ion-item>\n            <h2>\n                winter100\n            </h2>\n            <p>Recharge with $5.00 and get 10% instant cashback in 24 hours.</p>\n            <p>{{\'terms_conditions_apply\' | translate}}</p>\n        </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/promocode/promocode.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], PromocodePage);
    return PromocodePage;
}());

//# sourceMappingURL=promocode.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item_listsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_info_item_info__ = __webpack_require__(59);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-item_lists',template:/*ion-inline-start:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/item_lists/item_lists.html"*/'<ion-header class="header_bg bg-transparent">\n    <ion-navbar>\n        <ion-title>Men\'s Clothings\n            <span class="icon_box end">\n                <ion-icon><img src="assets/imgs/ic_search_wt.png"></ion-icon>\n                <ion-icon><img src="assets/imgs/ic_cart_wt.png">\n                    <ion-badge item-end>2</ion-badge>\n                </ion-icon>\n            </span>\n        </ion-title>\n    </ion-navbar>\n    <ion-scroll scrollX="true">\n        <ion-segment [(ngModel)]="categories">\n            <ion-segment-button value="shirts">\n                Shirts\n            </ion-segment-button>\n            <ion-segment-button value="t-shirts">\n                T-shirts\n            </ion-segment-button>\n            <ion-segment-button value="jeans">\n                Jeans\n            </ion-segment-button>\n            <ion-segment-button value="trouser">\n                Trouser\n            </ion-segment-button>\n            <ion-segment-button value="shirts_b">\n                Shirts\n            </ion-segment-button>\n            <ion-segment-button value="t-shirts_b">\n                T-shirts\n            </ion-segment-button>\n            <ion-segment-button value="jeans_b">\n                Jeans\n            </ion-segment-button>\n            <ion-segment-button value="trouser_b">\n                Trouser\n            </ion-segment-button>\n        </ion-segment>\n    </ion-scroll>\n</ion-header>\n\n<ion-content class="bg-color">\n    <div class="banner">\n        <div class="banner_img">\n            <img src="assets/imgs/banner3.png">\n        </div>\n        <div class="banner_text" text-right>\n            <h3 text-uppercase>Winter Sale</h3>\n            <h2>Flat 50% OFF</h2>\n            <h4 text-uppercase>{{\'shop_now\' | translate}}</h4>\n        </div>\n    </div>\n\n    <div class="tab_container" [ngSwitch]="categories">\n        <ion-row *ngSwitchCase="\'shirts\'">\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f1.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f2.png">\n                    </div>\n                    <h2>Spyworn Blue cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f3.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f4.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f1.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f4.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f1.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f2.png">\n                    </div>\n                    <h2>Spyworn Blue cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f3.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f4.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f1.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f4.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n        </ion-row>\n\n        <ion-row *ngSwitchCase="\'t-shirts\'">\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f3.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f4.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f1.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f4.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f1.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f1.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f2.png">\n                    </div>\n                    <h2>Spyworn Blue cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n        </ion-row>\n\n        <ion-row *ngSwitchCase="\'jeans\'">\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f3.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n        </ion-row>\n        <ion-row *ngSwitchCase="\'trouser\'">\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f1.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f2.png">\n                    </div>\n                    <h2>Spyworn Blue cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n        </ion-row>\n\n        <ion-row *ngSwitchCase="\'shirts_b\'">\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f1.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f2.png">\n                    </div>\n                    <h2>Spyworn Blue cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f3.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f4.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f1.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f4.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f1.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f2.png">\n                    </div>\n                    <h2>Spyworn Blue cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f3.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f4.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f1.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f4.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n        </ion-row>\n\n        <ion-row *ngSwitchCase="\'t-shirts_b\'">\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f3.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f4.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f1.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f4.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f1.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f1.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f2.png">\n                    </div>\n                    <h2>Spyworn Blue cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n        </ion-row>\n\n        <ion-row *ngSwitchCase="\'jeans_b\'">\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f3.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n        </ion-row>\n        <ion-row *ngSwitchCase="\'trouser_b\'">\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f1.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n            <ion-col col-6 (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f2.png">\n                    </div>\n                    <h2>Spyworn Blue cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </ion-col>\n        </ion-row>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/item_lists/item_lists.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], Item_listsPage);
    return Item_listsPage;
}());

//# sourceMappingURL=item_lists.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QrcodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_info_item_info__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__kplus_kplus__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QrcodePage = /** @class */ (function () {
    function QrcodePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    QrcodePage.prototype.item_info = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__item_info_item_info__["a" /* Item_infoPage */]);
    };
    QrcodePage.prototype.kplus = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__kplus_kplus__["a" /* KplusPage */]);
    };
    QrcodePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-mall',template:/*ion-inline-start:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/mall/mall.html"*/'<ion-header class="header_bg bg-transparent">\n    <!--\n<ion-navbar>\n    <ion-title>mall</ion-title>\n</ion-navbar>\n-->\n    <div class="search_box d-flex">\n        <ion-icon>\n            <img src="assets/imgs/ic_search.png">\n        </ion-icon>\n        <ion-searchbar (ionInput)="getItems($event)" placeholder="{{\'search_text\' | translate}}"></ion-searchbar>\n        <ion-icon class="end"><img src="assets/imgs/ic_cart.png">\n            <ion-badge>2</ion-badge>\n        </ion-icon>\n    </div>\n    <ion-list no-lines>\n        <h2>{{\'shop_by_kplus\' | translate}}</h2>\n        <ion-item>\n            <ion-row>\n                <ion-col col-3 text-center (click)="kplus()">\n                    <div class="img_box center_img">\n                        <img src="assets/imgs/01.png" class="crop_img">\n                    </div>\n                    <p>{{\'fashion\' | translate}}</p>\n                </ion-col>\n                <ion-col col-3 text-center (click)="kplus()">\n                    <div class="img_box center_img">\n                        <img src="assets/imgs/02.png" class="crop_img">\n                    </div>\n                    <p>{{\'electronics\' | translate}}</p>\n                </ion-col>\n                <ion-col col-3 text-center (click)="kplus()">\n                    <div class="img_box center_img">\n                        <img src="assets/imgs/03.png" class="crop_img">\n                    </div>\n                    <p>{{\'phones\' | translate}}</p>\n                </ion-col>\n                <ion-col col-3 text-center (click)="kplus()">\n                    <div class="img_box center_img">\n                        <img src="assets/imgs/04.png" class="crop_img">\n                    </div>\n                    <p>{{\'devices\' | translate}}</p>\n                </ion-col>\n                <ion-col col-3 text-center (click)="kplus()">\n                    <div class="img_box center_img">\n                        <img src="assets/imgs/05.png" class="crop_img">\n                    </div>\n                    <p>{{\'appliances\' | translate}}</p>\n                </ion-col>\n                <ion-col col-3 text-center (click)="kplus()">\n                    <div class="img_box center_img">\n                        <img src="assets/imgs/c6.png" class="crop_img">\n                    </div>\n                    <p>{{\'beauty\' | translate}}</p>\n                </ion-col>\n                <ion-col col-3 text-center (click)="kplus()">\n                    <div class="img_box center_img">\n                        <img src="assets/imgs/06.png" class="crop_img">\n                    </div>\n                    <p>{{\'sports\' | translate}}</p>\n                </ion-col>\n                <ion-col col-3 text-center (click)="kplus()">\n                    <div class="img_box center_img">\n                        <img src="assets/imgs/07.png" class="crop_img">\n                    </div>\n                    <p>{{\'more\' | translate}}</p>\n                </ion-col>\n            </ion-row>\n        </ion-item>\n    </ion-list>\n</ion-header>\n\n<ion-content class="bg-color">\n    <ion-list no-lines class="deals">\n        <h2>{{\'deals_of_the_day\' | translate}}</h2>\n        <div class="bg_img center_img">\n            <img src="assets/imgs/card_bg2.png" class="crop_img">\n        </div>\n        <ion-scroll scrollX="true">\n            <div class="item_box" (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f1.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </div>\n            <div class="item_box" (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f2.png">\n                    </div>\n                    <h2>Spyworn Blue cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </div>\n            <div class="item_box" (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f3.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </div>\n            <div class="item_box" (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f4.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </div>\n            <div class="item_box" (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f1.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </div>\n            <div class="item_box" (click)="item_info()">\n                <div class="item-box">\n                    <div class="img_box">\n                        <img src="assets/imgs/f4.png">\n                    </div>\n                    <h2>Spyworn white cotton shirt Xl</h2>\n                    <p>$9.99</p>\n                </div>\n            </div>\n        </ion-scroll>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/mall/mall.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], QrcodePage);
    return QrcodePage;
}());

//# sourceMappingURL=mall.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_orders_my_orders__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pay_or_send_pay_or_send__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__account_account__ = __webpack_require__(230);
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
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__pay_or_send_pay_or_send__["a" /* Pay_or_sendPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_2__my_orders_my_orders__["a" /* My_ordersPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_4__account_account__["a" /* AccountPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/tabs/tabs.html"*/'<ion-tabs>\n    <ion-tab [root]="tab1Root" tabTitle="{{\'home\' | translate}}" tabsHideOnSubPages="true"></ion-tab>\n     <ion-tab [root]="tab3Root" tabTitle="{{\'Pay_or_sendPage\' | translate}}" tabsHideOnSubPages="true"></ion-tab>\n    <ion-tab [root]="tab4Root" tabTitle="{{\'orders\' | translate}}" tabsHideOnSubPages="true"></ion-tab>\n    <ion-tab [root]="tab5Root" tabTitle="{{\'account\' | translate}}" tabsHideOnSubPages="true"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forgotpassword_forgotpassword__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_server_server__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_server_account__ = __webpack_require__(11);
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
    function SigninPage(myServer, account, navCtrl) {
        this.myServer = myServer;
        this.account = account;
        this.navCtrl = navCtrl;
        this.id = "luuthihuyen";
        this.pw = "123654aac";
        this.otp = "";
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
    SigninPage.prototype.login = function () {
        var _this = this;
        var postData = {
            "id": this.id,
            "pw": this.pw,
            "otp": this.otp
        };
        this.myServer.sendRequest("Login/Loginin", postData, function (data) {
            var stt = data["stt"];
            if (stt == 1) {
                _this.account.SaveDataLogin(data);
                _this.tabs();
            }
            else {
                _this.error_login = data["msg"];
            }
        });
    };
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-signin',template:/*ion-inline-start:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/signin/signin.html"*/'<ion-header class="bg-transparent">\n    <ion-navbar>\n        <ion-title><span text-uppercase class="center">{{\'sign_in\' | translate}}</span><span class="end" (click)="tabs()">{{\'skip\' | translate}}</span></ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-color">\n    <div class="banner center_img">\n        <img src="assets/imgs/banner1.png" class="crop_img">\n        <div class="logo">\n            <img src="assets/imgs/logo.png">\n        </div>\n    </div>\n    <div class="form">\n        <ion-list no-lines>\n            <ion-item>\n                <div class="icon_box" item-start>\n                    <img src="assets/imgs/ic_phone.svg">\n                </div>\n                <ion-input [(ngModel)]="id" type="text" placeholder="{{\'phone_number\' | translate}}"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <div class="icon_box" item-start>\n                    <img src="assets/imgs/ic_password.svg">\n                </div>\n                <ion-input [(ngModel)]="pw" type="password" placeholder="{{\'password\' | translate}}"></ion-input>\n                <h3 item-end (click)="forgotpassword()">{{\'forgot\' | translate}}</h3>\n            </ion-item>\n            <ion-item>\n               \n                <ion-input [(ngModel)]="otp" type="password" placeholder="Otp"></ion-input>\n            </ion-item>\n        </ion-list>\n        <button text-uppercase ion-button block class="btn" (click)="login()"> {{\'sign_in\' | translate}}</button>\n        <ion-label text-center no-margin>{{error_login}}</ion-label>\n    </div>\n</ion-content>\n<ion-footer no-border>\n    <p text-center no-margin>{{\'not_registered_yet\' | translate}}</p>\n    <button text-uppercase ion-button block (click)="signup()">{{\'Đăng ký ngay\' | translate}}</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/signin/signin.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_server_server__["a" /* Server */], __WEBPACK_IMPORTED_MODULE_6__providers_server_account__["a" /* Account */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pay_or_sendPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__promocode_promocode__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_server_server__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_server_account__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var Pay_or_sendPage = /** @class */ (function () {
    function Pay_or_sendPage(account, events, toast, myServer, navCtrl, modalCtrl, navParams) {
        this.account = account;
        this.events = events;
        this.toast = toast;
        this.myServer = myServer;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        console.log("vao day cai ha:" + this.navParams.get("id_nguoi_nhan"));
        this.id_nguoi_nhan = this.navParams.get("id_nguoi_nhan");
        this.content = "";
        this.sotien = "";
        this.otp = "";
    }
    Pay_or_sendPage.prototype.presentConfirm = function () {
        if (this.id_nguoi_nhan == "") {
            this.presentToast("Chưa nhập id người nhận!");
            return;
        }
        else {
            this.naptien();
        }
    };
    Pay_or_sendPage.prototype.presentToast = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toast.create({
                            message: msg,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    Pay_or_sendPage.prototype.naptien = function () {
        var _this = this;
        var postData = {
            "uid": this.id_nguoi_nhan,
            "sotien": this.sotien,
            "noidung": this.content,
            "otp": this.otp
        };
        this.myServer.postRequest("Login/chuyenTien", postData, function (data) {
            var stt = data["stt"];
            if (stt == 1) {
                _this.presentToast("Chuyển tiền thành công thành công!");
                _this.account.UpdateSotien(data["data"]);
                _this.events.publish('updateScreen');
            }
            else {
                _this.presentToast(data["msg"]);
            }
        });
    };
    Pay_or_sendPage.prototype.promocode = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_1__promocode_promocode__["a" /* PromocodePage */]);
        modal.present();
    };
    Pay_or_sendPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-pay_or_send',template:/*ion-inline-start:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/pay_or_send/pay_or_send.html"*/'<ion-header>\n  <ion-navbar>\n      <ion-title>{{\'sent_pay\' | translate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="form">\n      <ion-list no-lines>\n\n          <ion-item>\n            <ion-input  type="text" placeholder="{{\'enter_id_nhan\' | translate}}" [(ngModel)] = "id_nguoi_nhan"></ion-input>\n                          <ion-icon class="material-icons" item-end>account_box</ion-icon>\n          </ion-item>\n\n\n\n      </ion-list>\n\n\n      <form id="calculator-form1">\n          <ion-item id="calculator-input1">\n              <ion-label></ion-label>\n              <ion-input type="text" placeholder="0" name="display" [(ngModel)]="sotien">0</ion-input>\n          </ion-item>\n      </form>\n\n\n        <ion-input [(ngModel)] = "content" type="text" placeholder="Nội dung"></ion-input>\n\n        <ion-input [(ngModel)] = "otp" type="text" placeholder="Otp"></ion-input>\n\n\n             <button ion-button block class="btn" (click)="presentConfirm()"> {{\'pay_via_quickpay\' | translate}}</button>\n </div>\n  <div class="banner">\n      <div class="banner_img">\n          <img src="assets/imgs/qr_code_scanner.png">\n      </div>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/pay_or_send/pay_or_send.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_server_account__["a" /* Account */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_server_server__["a" /* Server */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavParams */]])
    ], Pay_or_sendPage);
    return Pay_or_sendPage;
}());

//# sourceMappingURL=pay_or_send.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item_infoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-item_info',template:/*ion-inline-start:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/item_info/item_info.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            <span class="icon_box end">\n                <ion-icon><img src="assets/imgs/ic_cart.png">\n                    <ion-badge item-end>2</ion-badge>\n                </ion-icon>\n            </span>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-color">\n    <div class="banner">\n        <ion-slides pager autoplay=3000>\n            <ion-slide>\n                <div class="img_box">\n                    <img src="assets/imgs/f2.png">\n                </div>\n            </ion-slide>\n            <ion-slide>\n                <div class="img_box">\n                    <img src="assets/imgs/f2.png">\n                </div>\n            </ion-slide>\n            <ion-slide>\n                <div class="img_box">\n                    <img src="assets/imgs/f2.png">\n                </div>\n            </ion-slide>\n        </ion-slides>\n    </div>\n\n    <div class="form">\n        <ion-list no-lines>\n            <ion-item>\n                <h2>Spyworn Blue Formal Fit cotton shirt Apple cut</h2>\n                <h4 class="d-flex">Spyworn Suits\n                    <span class="end icon">\n                        <ion-icon class="material-icons">favorite_border</ion-icon>\n                        <ion-icon class="material-icons">share</ion-icon>\n                    </span>\n                </h4>\n            </ion-item>\n            <ion-item>\n                <ion-label>{{\'select_size\' | translate}}</ion-label>\n                <ion-select [(ngModel)]="select_size">\n                    <ion-option value="m">M</ion-option>\n                    <ion-option value="l">L</ion-option>\n                    <ion-option value="XL">XL</ion-option>\n                    <ion-option value="XXL">XXL</ion-option>\n                </ion-select>\n                <ion-icon class="material-icons" item-end>keyboard_arrow_down</ion-icon>\n            </ion-item>\n            <ion-item>\n                <ion-label>{{\'select_color\' | translate}}</ion-label>\n                <ion-select [(ngModel)]="select_color">\n                    <ion-option value="light_blue">Light Blue</ion-option>\n                    <ion-option value="dark_blue">Dark Blue</ion-option>\n                    <ion-option value="white">White</ion-option>\n                    <ion-option value="black">Black</ion-option>\n                </ion-select>\n                <ion-icon class="material-icons" item-end>keyboard_arrow_down</ion-icon>\n            </ion-item>\n            <ion-item>\n                <p>\n                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,\n                </p>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-content>\n<ion-footer no-border class="d-flex">\n    <h2>$9.90</h2>\n    <button ion-button block class="btn end">{{\'add_to_cart\' | translate}}</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/kadiesvu/Documents/GitHub/12CAPP/src/pages/item_info/item_info.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], Item_infoPage);
    return Item_infoPage;
}());

//# sourceMappingURL=item_info.js.map

/***/ }),

/***/ 60:
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

},[239]);
//# sourceMappingURL=main.js.map