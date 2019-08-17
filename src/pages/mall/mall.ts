import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {Item_infoPage} from '../item_info/item_info';
import {CategoriesPage} from '../categories/categories';
@Component({
  selector: 'page-mall',
  templateUrl: 'mall.html'
})
export class MallPage {

  constructor(public navCtrl: NavController) {

  }
  
 item_info(){
        this.navCtrl.push(Item_infoPage)
  } 
    categories(){
        this.navCtrl.push(CategoriesPage)
  } 

}
