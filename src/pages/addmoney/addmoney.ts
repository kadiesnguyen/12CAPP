



import { Component } from '@angular/core';
import { NavController, ModalController} from 'ionic-angular';

import { PromocodePage } from '../promocode/promocode';
import {Server} from '../../providers/server/server';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import {Events} from 'ionic-angular';
import {Account} from '../../providers/server/account';
@Component({
  selector: 'page-addmoney',
  templateUrl: 'addmoney.html'
})


export class AddmoneyPage {
  public sotienTmp:number;
  public sotien:string;
  public select_operator:string;
  public accountCanNap:string;
  public otp:string;
  public dataGetUIInfo:object;
  public dataAdminIsPlaying:object;
  public chietkhau_vt:string;
  public chietkhau_vn:string;
  public chietkhau_vtts:string;
  public chietkhau_ftth:string;
  public chietkhau_mb:string;
  public chietkhau_vnmb:string;
  private countService:number;
  private chietKhau:number;
  public hidden:boolean;
  constructor(public account:Account,public events:Events,private toast: ToastController,private alertCtrl: AlertController,public myServer:Server,public navCtrl: NavController, public modalCtrl: ModalController) {
    this.sotienTmp = 0;
    this.accountCanNap = "";
   
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
    if(this.dataAdminIsPlaying["theNH_"+prefix]["isPlaying"]){
      this.chietkhau_vt= "("+this.dataGetUIInfo["tyLeNH_"+prefix]+"%)";
    }
    else{
      this.chietkhau_vt = "(Bảo Trì)";
    }

    prefix = "vn";
    if(this.dataAdminIsPlaying["theNH_"+prefix]["isPlaying"]){
      this.chietkhau_vn= "("+this.dataGetUIInfo["tyLeNH_"+prefix]+"%)";
    }
    else{
      this.chietkhau_vn = "(Bảo Trì)";
    }

    prefix = "vtts";
    if(this.dataAdminIsPlaying["theNH_"+prefix]["isPlaying"]){
      this.chietkhau_vtts= "("+this.dataGetUIInfo["tyLeNH_"+prefix]+"%)";
    }
    else{
      this.chietkhau_vtts = "(Bảo Trì)";
    }

    prefix = "ftth";
    if(this.dataAdminIsPlaying["theNH_"+prefix]["isPlaying"]){
      this.chietkhau_ftth= "("+this.dataGetUIInfo["tyLeNH_"+prefix]+"%)";
    }
    else{
      this.chietkhau_ftth = "(Bảo Trì)";
    }

    prefix = "mb";
    if(this.dataAdminIsPlaying["theNH_"+prefix]["isPlaying"]){
      this.chietkhau_mb= "("+this.dataGetUIInfo["tyLeNH_"+prefix]+"%)";
    }
    else{
      this.chietkhau_mb = "(Bảo Trì)";
    }

    prefix = "vnmb";
    if(this.dataAdminIsPlaying["theNH_"+prefix]["isPlaying"]){
      this.chietkhau_vnmb= "("+this.dataGetUIInfo["tyLeNH_"+prefix]+"%)";
    }
    else{
      this.chietkhau_vnmb = "(Bảo Trì)";
    }
    this.select_operator = "vt";
    this.chietKhau = this.dataGetUIInfo["tyLeNH_"+this.select_operator];
    
  }

  getOtp(){
    let postData = {
      "type":"nh_"+this.select_operator,
      "sdt":this.accountCanNap
    }
    this.myServer.getRequest("CTH/guiOTP",postData,(data)=>{
      var stt = data["stt"];
      if(stt == 1){
        this.presentToast("Lấy mã thành công");
      }
      else
      {
        this.presentToast(data["msg"]);
      }
    });
  }
  
  onChangeCardType(prefix:any) {
     this.chietKhau = this.dataGetUIInfo["tyLeNH_"+prefix];
     if(prefix =="mb" || prefix == "vnmb"){
      this.hidden = true;
     }
     else{
      this.hidden = false;
     }
  }
  addMoney(money) {
    var nf = Intl.NumberFormat();
    this.sotienTmp  += money;
    this.sotien = nf.format(this.sotienTmp) +" = "+nf.format(this.sotienTmp*(this.chietKhau/100.0)) ;
    
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
      "cardType":"nh_"+this.select_operator,
      "otp":this.otp,
    };

    this.myServer.postRequest("CTH/RegChargeNH",postData,(data)=>{
        var stt = data["stt"];
        if(stt == 1){
          this.account.UpdateSotien(data["data"]["st"]);
          this.events.publish('updateScreen');
          this.presentToast("Đăng ký nạp tiền điện thoại thành công!");
          
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
