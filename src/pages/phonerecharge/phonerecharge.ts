import { Component } from '@angular/core';
import { NavController, ModalController} from 'ionic-angular';

import { PromocodePage } from '../promocode/promocode';
@Component({
  selector: 'page-phonerecharge',
  templateUrl: 'phonerecharge.html'
})


export class PhonerechargePage {
  public result:string;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }
btnClicked(btn) {
        if (btn == 'C') {
            this.result = '';
        }
        else if (btn == '=') {
            this.result = eval(this.result);
        }
        else {
            this.result += btn;
        }
    }
promocode() {
    let modal = this.modalCtrl.create(PromocodePage);
    modal.present();
  }

}
