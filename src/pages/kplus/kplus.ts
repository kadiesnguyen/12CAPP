import { Component } from '@angular/core';
import { NavController, ModalController} from 'ionic-angular';

import { PromocodePage } from '../promocode/promocode';
import {Server} from '../../providers/server/server';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import {Events} from 'ionic-angular';
import {Account} from '../../providers/server/account';
@Component({
  selector: 'page-kplus',
  templateUrl: 'kplus.html'
})


export class KplusPage {
  public sotienTmp:number;
  public sotien:string;
  public phoneNum:string;
  public otp:string;
  public chietKhau:number;
  private countService:number;
  public dataGetUIInfo:object;
  public dataAdminIsPlaying:object;
  public chietkhau_kplus:string;
  public soThang:string;
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
    this.soThang = "1";
    this.chietKhau = this.dataGetUIInfo["tyLeMuaKplus"];
    this.chietkhau_kplus = "("+this.chietKhau+"%)";
    this.sotienTmp = 255000;
    var nf = Intl.NumberFormat();
    this.sotien = nf.format(this.sotienTmp) +" = "+nf.format(this.sotienTmp*(this.chietKhau/100.0)) ;
  }
  onChange(thang:any) {
    console.log("vao day cai ne:"+thang);
    this.soThang = thang.toString();
    if(this.soThang == "1")
    {
      this.sotienTmp = 255000;
    }
    else if(this.soThang == "3")
    {
      this.sotienTmp = 675000;
    }
    else if(this.soThang == "6")
    {
      this.sotienTmp = 1410000;
    }
    else if(this.soThang == "12")
    {
      this.sotienTmp = 2700000;
    }

    var nf = Intl.NumberFormat();
    this.sotien = nf.format(this.sotienTmp) +" = "+nf.format(this.sotienTmp*(this.chietKhau/100.0)) ;
  }

  presentConfirm() {
    if(this.phoneNum == ""){
      this.presentToast("Chưa nhập tài khoản!");
      return;
    }
    else
    {
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
      "menhGia":Number(this.sotienTmp),
      "phoneNum":this.phoneNum,
      "cardType":"kplus",
      "soThang":this.soThang,
    };

    this.myServer.postRequest("CTH/RegCharge",postData,(data)=>{
        var stt = data["stt"];
        if(stt == 1){
          this.presentToast("Đăng ký gia hạn Kplus thành công!");
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
