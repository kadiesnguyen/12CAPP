import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SignupPage } from '../signup/signup';
import { ForgotpasswordPage } from '../forgotpassword/forgotpassword';
import { TabsPage } from '../tabs/tabs';
import {Server} from '../../providers/server/server';
import {Account} from '../../providers/server/account';
import { ToastController } from 'ionic-angular';
@Component({
  selector: 'page-add_daily',
  templateUrl: 'add_daily.html'
})
export class AddDailyPage {
  public vt:string = "100";
  public mb:string= "100";
  public vn:string= "100";
  public vnts:string= "100";
  public garena:string= "100";
  public kplus:string= "100";

  public vt1:string = "100";
  public mb1:string = "100";
  public vn1:string = "100";
  public vtts1:string = "100";
  public ftth1:string = "100";

  public ten_daily:string = "";
  public login_id:string = "";
  public pw:string = "";
  public ghi_chu:string = "";
  constructor(private toast: ToastController,public myServer:Server,public account:Account,public navCtrl: NavController) {
  }

  async presentToast(msg) {
    const toast = await this.toast.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  save()
  {
    let dataPost = {
      "loginID":this.login_id,
      "loginPW":this.pw,
      "caption":this.ten_daily,
      "tyleCK_vt":this.vt,
      "tyleCK_mb":this.mb,
      "tyleCK_vn":this.vn,
      "tyleCK_vnts":this.vnts,
      "tyleCK_garena":this.garena,
      "tyleCK_kplus":this.kplus,
      "tyleMua_vt":this.vt1,
      "tyleMua_mb":this.mb1,
      "tyleMua_vn":this.vn1,
      "tyleMua_vtts":this.vtts1,
      "tyleMua_ftth":this.ftth1,
      "note":this.ghi_chu
    }
    this.myServer.getRequest("DL/ThemDL",dataPost,(data)=>{
      var stt = data["stt"];
      if(stt == 1)
      {
        this.presentToast(data["msg"]);
      }
      else
      {
        this.presentToast(data["msg"]);
      }
    });
  }

  saveAndView(){

  }
 
}
