import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
@Component({
  selector: 'page-paymentsuccessful',
  templateUrl: 'paymentsuccessful.html'
})
export class PaymentsuccessfulPage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {

  }
    
dismiss() {
		this.viewCtrl.dismiss();
	}

 tabs(){
        this.navCtrl.setRoot(TabsPage)
  } 
}
