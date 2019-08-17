import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { SigninPage } from '../signin/signin';
@Component({
  selector: 'page-forgotpassword',
  templateUrl: 'forgotpassword.html'
})
export class ForgotpasswordPage {

  constructor(public navCtrl: NavController) {

  }
signin(){
        this.navCtrl.setRoot(SigninPage)
  } 
tabs(){
        this.navCtrl.setRoot(TabsPage)
  } 

}
