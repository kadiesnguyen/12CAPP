import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {Item_infoPage} from '../item_info/item_info';
@Component({
  selector: 'page-favorited',
  templateUrl: 'favorited.html'
})
export class FavoritedPage {

  constructor(public navCtrl: NavController) {

  }
item_info(){
        this.navCtrl.push(Item_infoPage)
  } 
}
