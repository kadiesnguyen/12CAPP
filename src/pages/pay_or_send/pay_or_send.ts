import { Component } from '@angular/core';
import { NavController, ModalController} from 'ionic-angular';

import { PromocodePage } from '../promocode/promocode';
import {Server} from '../../providers/server/server';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import {Events} from 'ionic-angular';
import {Account} from '../../providers/server/account';
@Component({
  selector: 'page-pay_or_send',
  templateUrl: 'pay_or_send.html'
})


export class Pay_or_sendPage {
  public sotienTmp:number;
  public sotien:string;
  public select_operator:string;
  public accountCanNap:string;
  public otp:string;
  public chietKhau:number;
  public dataGetUIInfo:object;
  public dataAdminIsPlaying:object;
  private countService:number;
  public chietkhau_vt:string;
  public chietkhau_mb:string;
  public chietkhau_vn:string;
  constructor(public account:Account,public events:Events,private toast: ToastController,private alertCtrl: AlertController,public myServer:Server,public navCtrl: NavController, public modalCtrl: ModalController) {
    this.sotienTmp = 0;
    this.accountCanNap = "";
    this.select_operator = "";

    this.countService = 0;
    this.chietKhau = 0;

    this.myServer.postRequest("Login/GetUInfo",null,(data)=>{
      this.dataGetUIInfo = data["data"];
      this.initChietKhauAll();
    });
    this.myServer.getRequest("CTH/admin_getPlaying",null,(data)=>{
      this.dataAdminIsPlaying = data["data"];
      this.initChietKhauAll();
    });
  }

  initChietKhauAll()
  {
    this.countService++;
    if(this.countService < 2) return;

    var prefix = "vt";
    if(this.dataAdminIsPlaying["the"+prefix.toUpperCase()]["isPlaying"]){
      this.chietkhau_vt= "("+this.dataGetUIInfo["tyLeMuaThe_"+prefix]+"%)";
    }
    else{
      this.chietkhau_vt = "(Bảo Trì)";
    }

    prefix = "vn";
    if(this.dataAdminIsPlaying["the"+prefix.toUpperCase()]["isPlaying"]){
      this.chietkhau_mb= "("+this.dataGetUIInfo["tyLeMuaThe_"+prefix]+"%)";
    }
    else{
      this.chietkhau_mb = "(Bảo Trì)";
    }

    prefix = "mb";
    if(this.dataAdminIsPlaying["the"+prefix.toUpperCase()]["isPlaying"]){
      this.chietkhau_mb= "("+this.dataGetUIInfo["tyLeMuaThe_"+prefix]+"%)";
    }
    else{
      this.chietkhau_mb = "(Bảo Trì)";
    }


    this.select_operator = "vt";
    this.chietKhau = this.dataGetUIInfo["tyLeMuaThe_"+this.select_operator];
  }

  addMoney(money) {
    var nf = Intl.NumberFormat();
    this.sotienTmp  += money;
    this.sotien = nf.format(this.sotienTmp) +" = "+nf.format(this.sotienTmp*(this.chietKhau/100.0)) ;
  }

  onChangeCardType(prefix:any) {
    this.chietKhau = this.dataGetUIInfo["tyLeMuaThe_"+prefix];
 }
  presentConfirm() {
    if(this.accountCanNap == ""){
      this.presentToast("Chưa nhập số điện thoại cần nạp!");
      return;
    }
    else if (this.select_operator == ""){
      this.presentToast("Chưa chọn nhà mạng!");
      return;
    }
    else if (this.sotienTmp == 0){
      this.presentToast("Chưa chọn giá tiền!");
      return;
    }
    else{
      let alert = this.alertCtrl.create({
        title: 'Bạn chắc chắn đây là số trả trước?',
        message: 'Mọi sai sót do nhập số trả sau hay sai số điện thoại sẽ không được hoàn tiền. Nếu chưa chắc chắn hãy gọi số tổng đài để xác minh lại',
        buttons: [
          {
            text: 'Hủy Bỏ',
            role: 'cancel',
            handler: () => {

            }
          },
          {
            text: 'Đồng Ý',
            handler: () => {
              console.log('Buy clicked');
              this.naptien();
            }
          }
        ]
      });
      alert.present();
    }

  }

  resetMoney(){
    this.sotienTmp  = 0;
    this.sotien = this.sotienTmp.toString();
  }
  async presentToast(msg) {
    const toast = await this.toast.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
  naptien(){

    let postData = {
      "menhGia":this.sotienTmp,
      "phoneNum":this.accountCanNap,
      "cardType":this.select_operator
    };

    this.myServer.postRequest("CTH/RegCharge",postData,(data)=>{
        var stt = data["stt"];
        if(stt == 1){
          this.presentToast("Đăng ký nạp tiền điện thoại thành công!");
          this.account.UpdateSotien(data["data"]["st"]);
          this.events.publish('updateScreen');
        }else{
          this.presentToast(data["msg"]);
        }

    });
  }
  promocode() {
    let modal = this.modalCtrl.create(PromocodePage);
    modal.present();
  }

}
