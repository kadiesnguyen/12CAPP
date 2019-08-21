



import { Component } from '@angular/core';
import { NavController, ModalController} from 'ionic-angular';

import { PromocodePage } from '../promocode/promocode';
import {Server} from '../../providers/server/server';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import {Events} from 'ionic-angular';
import {Account} from '../../providers/server/account';
@Component({
  selector: 'page-addmomo',
  templateUrl: 'addmomo.html'
})


export class AddMomoPage {
  public sotienTmp:number;
  public sotien:string;
  public dataGetUIInfo:object;
  public dataAdminIsPlaying:object;
  public chietkhau_vt:string;
  public chietkhau_vn:string;
  public chietkhau_vtts:string;
  public chietkhau_ftth:string;
  public chietkhau_mb:string;

  constructor(public account:Account,public events:Events,private toast: ToastController,private alertCtrl: AlertController,public myServer:Server,public navCtrl: NavController, public modalCtrl: ModalController) {
    this.sotienTmp = 0;
   
    
  }


  addMoney(money) {
    var nf = Intl.NumberFormat();
    this.sotienTmp  += money;
    this.sotien = nf.format(this.sotienTmp);
    
  }

  presentConfirm() {
    if(this.sotienTmp == 0){
      this.presentToast("Chưa nhập số tiền!");
      
      return;
    }
    
    this.naptien();
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
      "amount":this.sotienTmp
    };

    this.myServer.getRequest("Login/momo_regCharge",postData,(data)=>{
        var stt = data["stt"];
        if(stt == 1){
          this.account.UpdateSotien(data["data"]["st"]);
          this.events.publish('updateScreen');
          this.presentToast("Nạp Tiền Thành Công!");
          
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
