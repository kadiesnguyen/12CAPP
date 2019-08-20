import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SignupPage } from '../signup/signup';
import { ForgotpasswordPage } from '../forgotpassword/forgotpassword';
import { TabsPage } from '../tabs/tabs';
import {Server} from '../../providers/server/server';
import {Account} from '../../providers/server/account';
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SigninPage {

  public id:string;
  public pw:string;
  public otp:string;
  public error_login:string;
  constructor(public myServer:Server,public account:Account,public navCtrl: NavController) {
    this.id = "luuthihuyen";
    this.pw = "123654aac";
    this.otp = "";
  }
     
 signup(){
        this.navCtrl.push(SignupPage)
  }  
 forgotpassword(){
        this.navCtrl.push(ForgotpasswordPage)
  } 
 tabs(){
        this.navCtrl.setRoot(TabsPage)
  } 
  login(){
   
    let postData = {
      "id": this.id,
      "pw": this.pw,
      "otp":this.otp
  }
  this.myServer.sendRequest("Login/Loginin",postData,(data)=>{
  var stt = data["stt"];
  if(stt == 1)
  {
    this.account.SaveDataLogin(data);
    this.tabs();
  }
  else{
    this.error_login = data["msg"];
  }

  });
  }
}
