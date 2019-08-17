import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SignupPage } from '../signup/signup';
import { ForgotpasswordPage } from '../forgotpassword/forgotpassword';
import { TabsPage } from '../tabs/tabs';
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SigninPage {

  constructor(public navCtrl: NavController) {

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

}
