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
  selector: 'page-setting_otp',
  templateUrl: 'setting_otp.html'
})
export class SettingOtpPage {
  
  public qr_url:string;
  public create_date:string;
  public otp2:string;
  public otp1:string;
  public key:string;
  public hidden1:boolean;
  public hidden2:boolean;
  public hidden3:boolean;
  constructor(private alertCtrl: AlertController,private toast: ToastController,public myServer:Server,public account:Account,public navCtrl: NavController) {
    this.hidden1 = true;
    this.hidden2 = false;
    this.hidden3 = false;
    this.getStatus();
  }

  getStatus(){
    this.myServer.getRequest("Login/OTP_getStatus",null,(data)=>{
      var stt = data["stt"];
      if(stt== 1){
        this.hidden1 = false;
        this.create_date = data["msg"];
        this.initStatus(data["data"]);
      }
      else
      {
        this.hidden1 = true;
        this.hidden2 = false;
        this.hidden3 = false;
        this.qr_url = "https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=12c";

      }
    });
  }

  initStatus(data){
    if(data){
      this.hidden2 = true;
      this.hidden3 = false;
    }
    else
    {
      this.hidden2 = false;
      this.hidden3 = true;
    }
  }
  
  async presentToast(msg) {
    const toast = await this.toast.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  createNew(){
    this.myServer.getRequest("Login/OTP_newKey",null,(data)=>{
      var stt = data["stt"];
      if(stt == 1){
        this.presentToast(data["msg"]);
        data = data["data"];
        this.qr_url = data["QrCodeSetupImageUrl"];
        this.key = data["ManualEntryKey"];
      }
      else{
        this.presentToast(data["msg"]);
      }
    })
    
  }

  onOtp(){
    let postData = {
      "c":""
    }
    this.myServer.getRequest("Login/OTP_enable",postData,(data)=>{
      var stt = data["stt"];
      if(stt == 1){
        this.getStatus();
        this.presentToast(data["msg"]);
      }
      else
      {
        this.presentToast(data["msg"]);
        
      }
    })
  }

  offOtp(){
    let postData = {
      "c":this.otp2
    }
    this.myServer.getRequest("Login/OTP_enable",postData,(data)=>{
      var stt = data["stt"];
      if(stt == 1){
        this.getStatus();
        this.presentToast(data["msg"]);
      }
      else
      {
        this.presentToast(data["msg"]);
      }
    })
  }

  accept(){
    let postData = {
      "c":this.otp1
    };
    this.myServer.getRequest("Login/OTP_set",postData,(data)=>{
      var stt = data["stt"];
      if(stt == 1){
        this.getStatus();
        this.presentToast(data["msg"]);
      }
      else{
        this.presentToast(data["msg"]);
      }
    });
  }

}
