import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {MyprofilePage} from '../myprofile/myprofile';
import {FavoritedPage} from '../favorited/favorited';
import {NotificationPage} from '../notification/notification';
import {HelpPage} from '../help/help';
import {ConditionPage} from '../condition/condition';
import {Server} from '../../providers/server/server';
import { SigninPage } from '../signin/signin';
import {Account} from '../../providers/server/account';
import {DoiMkPage} from '../doi_mk/doi_mk';
import {SettingOtpPage} from '../setting_otp/setting_otp';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {
      public id:string;
      public ten_hienthi:string;
      public sotien:string;
      public ghi_chu:string;
      public tham_gia:string;
      constructor(public myServer:Server,public account:Account,public navCtrl: NavController) {
           this.myServer.postRequest("Login/GetUInfo",null,(data)=>{
                 data = data["data"];
                 var nf = Intl.NumberFormat();
                  this.id = data["uId"];
                  this.ten_hienthi = data["ten"];
                  this.sotien = nf.format(data["sotien"]);
                  this.tham_gia = data["createDate_text2"];
                  this.ghi_chu = data["ghichu"]
           });
      }
   
 myprofile(){
        this.navCtrl.push(MyprofilePage)
  }  
 favorited(){
        this.navCtrl.push(FavoritedPage)
  }
 notification(){
        this.navCtrl.push(NotificationPage)
  }
 help(){
        this.navCtrl.push(HelpPage)
  }  
 condition(){
        this.navCtrl.push(ConditionPage)
  } 
    
  logout()
  {
      let postData = {
           
        }
      this.myServer.postRequest("Login/Logout",null,(data)=>{
            var stt = data["stt"];
            if(stt == 1)
            {
              console.log("logout thành công");
              this.navCtrl.push(SigninPage);
            }
            else{
              console.log("logout thất bại");
            }
          
            });
      }

      settingOtp(){
            this.navCtrl.push(SettingOtpPage);
      }
      changePass(){
            this.navCtrl.push(DoiMkPage);
      }
}
