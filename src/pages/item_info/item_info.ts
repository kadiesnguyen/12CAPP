import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//import {MyprofilePage} from '../myprofile/myprofile';
@Component({
  selector: 'page-item_info',
  templateUrl: 'item_info.html'
})
export class Item_infoPage {
 select_size: string = "XL";
 select_color: string = "light_blue";
  constructor(public navCtrl: NavController) {

  }
//   
//myprofile(){
//        this.navCtrl.push(MyprofilePage)
//  } 

}
