import { Component } from '@angular/core';

import { SignupPage } from '../signup/signup';
import { ForgotpasswordPage } from '../forgotpassword/forgotpassword';
import { TabsPage } from '../tabs/tabs';
import {Server} from '../../providers/server/server';
import {Account} from '../../providers/server/account';
import { ToastController } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {ListDailyPage} from '../list_daily/list_daily';
import {SoduDailyPage} from '../sodu_daily/sodu_daily';
import {LichSuGiaoDichDailyPage} from '../lichsu_giaodich_daily/lichsu_giaodich_daily';
import {Pay_or_sendPage} from '../pay_or_send/pay_or_send';
@Component({
  selector: 'page-doi_mk',
  templateUrl: 'doi_mk.html'
})
export class DoiMkPage {
  
  public pw_old:string = "";
  public pw:string = "";
  public pw_again:string = "";
  constructor(private alertCtrl: AlertController,private toast: ToastController,public myServer:Server,public account:Account,public navCtrl: NavController) {
    


  }

  
  async presentToast(msg) {
    const toast = await this.toast.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  accept(){
    let postData = {
      "pw1":this.pw_old,
      "pw2":this.pw,
      "pw3":this.pw_again
    };
    this.myServer.postRequest("Login/doiMatKhau",postData,(data)=>{
      var stt = data["stt"];
      if(stt == 1){

        this.presentToast("Đổi mật khẩu thành công!");
      }
      else{
        this.presentToast(data["msg"]);
      }
    });
  }

}
