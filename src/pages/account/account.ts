import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {MyprofilePage} from '../myprofile/myprofile';
import {FavoritedPage} from '../favorited/favorited';
import {NotificationPage} from '../notification/notification';
import {HelpPage} from '../help/help';
import {ConditionPage} from '../condition/condition';
@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {

  constructor(public navCtrl: NavController) {

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

}
