import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SignupPage } from '../signup/signup';
import { ForgotpasswordPage } from '../forgotpassword/forgotpassword';
import { TabsPage } from '../tabs/tabs';
import {Server} from '../../providers/server/server';
import {Account} from '../../providers/server/account';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SigninPage {

  public id:string;
  public pw:string;
  public otp:string;
  public error_login:string;
  public isRemember: boolean;
  constructor(private storage: Storage,public myServer:Server,public account:Account,public navCtrl: NavController) {
    this.id = "";
    this.pw = "";
    this.otp = "";
    this.showDetails();
    
  }
     


  async showDetails() {
    this.pw = await this.storage.get('pw');
    this.id = await this.storage.get('id');
    this.isRemember = await this.storage.get('isRemember');
    
  
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

  notify() {
    console.log("Toggled: "+ this.isRemember);
    if(this.isRemember){
      this.storage.set("id",this.id);
      this.storage.set("pw",this.pw);
      this.storage.set("isRemember",this.isRemember)
    }
    else
    {
      this.storage.set("id","");
      this.storage.set("pw","");
      this.storage.set("isRemember",this.isRemember)
    }
  }

  login(){
    this.notify();
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
