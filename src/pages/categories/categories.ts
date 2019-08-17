import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {Item_listsPage} from '../item_lists/item_lists';
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html'
})
export class CategoriesPage {
categories: string = "fashion";
  constructor(public navCtrl: NavController) {

  }
 item_lists(){
        this.navCtrl.push(Item_listsPage)
  } 
}
