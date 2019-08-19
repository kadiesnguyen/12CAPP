import { Component } from '@angular/core';
import { NavController, ModalController} from 'ionic-angular';

import { PromocodePage } from '../promocode/promocode';
import {Server} from '../../providers/server/server';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import {Events} from 'ionic-angular';
import {Account} from '../../providers/server/account';
@Component({
  selector: 'page-napgame',
  templateUrl: 'napgame.html'
})


export class NapgamePage {
  public sotienTmp:number;
  public sotien:string;
  public select_operator:string;
  public phoneNum:string;
  public otp:string;
  public chietKhau:number;
  private countService:number;
  public dataGetUIInfo:object;
  public dataAdminIsPlaying:object;
  public chietkhau_garena:string;
  
  constructor(public account:Account,public events:Events,private toast: ToastController,private alertCtrl: AlertController,public myServer:Server,public navCtrl: NavController, public modalCtrl: ModalController) {
    this.sotienTmp = 0;
    this.phoneNum = "";
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
    
    this.select_operator = "garena";
    this.chietKhau = this.dataGetUIInfo["tyLeMuaGarena"];
    this.chietkhau_garena = "("+this.chietKhau+"%)";
  }
 

  presentConfirm() {
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

  onChange(prefix:any) {

    var tn = this.phoneNum.trim().toLowerCase();
    this.sotienTmp = 0;
    this.chietkhau_garena = "("+this.chietKhau+"%)";
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
        else { //VNG DK100 ZSM 20190814034999923
            var a = tn.split(' ');
            if (a[1].indexOf('dk') >= 0) {
                tn = a[1].replace('dk', '');
                this.sotienTmp = parseInt(tn) * 1000;
            }
        }
    }
    else if (tn.indexOf("gosu") >= 0) { //GOSU DK20 MT 9190012189748
        var a = tn.split(' ');
        if (a[1].indexOf('dk') >= 0) {
            tn = a[1].replace('dk', '');
            this.sotienTmp = parseInt(tn) * 1000;
        }
    }
    var nf = Intl.NumberFormat();
    this.sotien = nf.format(this.sotienTmp) +" = "+nf.format(this.sotienTmp*(this.chietKhau/100.0)) ;
  }
  naptien(){
    if(this.phoneNum == ""){
      this.presentToast("Chưa nhập mã !");
      return;
    }
    
    var nf = Intl.NumberFormat();
    let postData = {
      "menhGia":this.sotienTmp,
      "phoneNum":this.phoneNum,
      "cardType":this.select_operator
    };

    this.myServer.postRequest("CTH/RegCharge",postData,(data)=>{
        var stt = data["stt"];
        if(stt == 1){
          this.presentToast("Đăng ký nạp tiền game thành công!");
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
