import { Component } from '@angular/core';
import { NavController, ViewController} from 'ionic-angular';

@Component({
  selector: 'page-pay_or_send',
  templateUrl: 'pay_or_send.html'
})
export class Pay_or_sendPage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {

  }
   
dismiss() {
		this.viewCtrl.dismiss();
	}

}
