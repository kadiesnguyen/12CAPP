import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-my_orders',
  templateUrl: 'my_orders.html'
})
export class My_ordersPage {
  order_tab: string = "all";
  constructor(public navCtrl: NavController) {

  }

}
