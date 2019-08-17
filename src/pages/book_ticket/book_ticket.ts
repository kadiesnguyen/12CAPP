import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { PaymentsuccessfulPage } from '../paymentsuccessful/paymentsuccessful';
@Component({
  selector: 'page-book_ticket',
  templateUrl: 'book_ticket.html'
})
export class Book_ticketPage {
    book_ticket: string = "train_ticket";
     from: string = "brookly";
     to: string = "smithtowm";
     flights_from: string = "new_york";
     flights_to: string = "toronto";
     claas: string = "economy";
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

 paymentsuccessful() {
    let modal = this.modalCtrl.create(PaymentsuccessfulPage);
    modal.present();
  }  

}
