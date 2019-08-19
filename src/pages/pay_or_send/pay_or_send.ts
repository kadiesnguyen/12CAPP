import { Component } from '@angular/core';
import { NavController, ModalController} from 'ionic-angular';

import { PromocodePage } from '../promocode/promocode';
import {Server} from '../../providers/server/server';
import { ToastController } from 'ionic-angular';
import {Events} from 'ionic-angular';
import {Account} from '../../providers/server/account';
@Component({
  selector: 'page-pay_or_send',
  templateUrl: 'pay_or_send.html'
})


export class Pay_or_sendPage {
  public id_nguoi_nhan:string;
  public content:string;
  public sotien:string;
  constructor(public account:Account,public events:Events,private toast: ToastController,public myServer:Server,public navCtrl: NavController, public modalCtrl: ModalController) {
      this.id_nguoi_nhan = "";
      this.content = "";
      this.sotien = "";
    
  }

  
  
  presentConfirm() {
    if(this.id_nguoi_nhan == ""){
      this.presentToast("Chưa nhập id người nhận!");
      return;
    }
    
    else{
      this.naptien();
    }

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
      "uid":this.id_nguoi_nhan,
      "sotien":this.sotien,
      "noidung":this.content,
      "otp":""
    };

    this.myServer.postRequest("Login/chuyenTien",postData,(data)=>{
        var stt = data["stt"];
        if(stt == 1){
          this.presentToast("Chuyển tiền thành công thành công!");
          this.account.UpdateSotien(data["data"]);
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
