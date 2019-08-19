



import { Component } from '@angular/core';
import { NavController, ModalController} from 'ionic-angular';

import { PromocodePage } from '../promocode/promocode';
import {Server} from '../../providers/server/server';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

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
  constructor(private toast: ToastController,private alertCtrl: AlertController,public myServer:Server,public navCtrl: NavController, public modalCtrl: ModalController) {
    this.sotienTmp = 0;
  }
  addMoney(money) {
    this.sotienTmp  += money;
    this.sotien = this.sotienTmp.toString();
    console.log("addmonkey:"+money+"=>"+this.sotienTmp );
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
  naptien(){

    let postData = {
      "menhGia":Number(this.sotien),
      "phoneNum":this.accountCanNap,
      "cardType":this.select_operator,
      "otp":"",
    };

    this.myServer.postRequest("CTH/RegChargeNH",postData,(data)=>{
        var stt = data["stt"];
        if(stt == 1){
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
