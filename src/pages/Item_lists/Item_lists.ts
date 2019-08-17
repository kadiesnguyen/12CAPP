import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {Item_infoPage} from '../item_info/item_info';
@Component({
  selector: 'page-item_lists',
  templateUrl: 'item_lists.html'
})
export class Item_listsPage {
  categories: string = "shirts";
  constructor(public navCtrl: NavController) {

  }
 item_info(){
        this.navCtrl.push(Item_infoPage)
  } 
}
 