import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {PhonerechargePage} from '../phonerecharge/phonerecharge';
import {Book_ticketPage} from '../book_ticket/book_ticket';
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  constructor(public navCtrl: NavController) {

  }
  
 phonerecharge(){
        this.navCtrl.push(PhonerechargePage)
  }  
  book_ticket(){
        this.navCtrl.push(Book_ticketPage)
  } 

}
