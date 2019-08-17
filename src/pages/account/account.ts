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
@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {

  constructor(public myServer:Server,public account:Account,public navCtrl: NavController) {

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
      this.myServer.sendRequest("Login/Logout",postData,(data)=>{
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

}
