import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { VerificationPage } from '../verification/verification';
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  constructor(public navCtrl: NavController) {

  }
 verification(){
        this.navCtrl.push(VerificationPage)
  } 
}
