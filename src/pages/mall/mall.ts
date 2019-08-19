import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {Item_infoPage} from '../item_info/item_info';
import {KplusPage} from '../kplus/kplus';
@Component({
  selector: 'page-mall',
  templateUrl: 'mall.html'
})
export class QrcodePage {

  constructor(public navCtrl: NavController) {

  }

 item_info(){
        this.navCtrl.push(Item_infoPage)
  }
    kplus(){
        this.navCtrl.push(KplusPage)
  }

}
