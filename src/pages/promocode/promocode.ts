import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-promocode',
  templateUrl: 'promocode.html'
})
export class PromocodePage {

  constructor(public navCtrl: NavController,  public viewCtrl: ViewController) {

  }
dismiss() {
		this.viewCtrl.dismiss();
	}
}
