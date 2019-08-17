import { Component } from '@angular/core';
import { NavController, ModalController} from 'ionic-angular';

import { PromocodePage } from '../promocode/promocode';
@Component({
  selector: 'page-phonerecharge',
  templateUrl: 'phonerecharge.html'
})
export class PhonerechargePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

promocode() {
    let modal = this.modalCtrl.create(PromocodePage);
    modal.present();
  }  

}
