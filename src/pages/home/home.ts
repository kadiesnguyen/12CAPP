import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ListDailyPage} from '../list_daily/list_daily';
import {AddDailyPage} from '../add_daily/add_daily';
import {SearchPage} from '../search/search';
import {NapgamePage} from '../napgame/napgame';
import {KplusPage} from '../kplus/kplus';
import {AddmoneyPage} from '../addmoney/addmoney';
import {GetpaymentPage} from '../getpayment/getpayment';
import {TransactionPage} from '../transaction/transaction';
import {PhonerechargePage} from '../phonerecharge/phonerecharge';
import {Book_ticketPage} from '../book_ticket/book_ticket';
import {Account} from '../../providers/server/account';
import { Events } from 'ionic-angular';
import {AddMomoPage} from '../addmomo/addmomo';
import {SoduDailyPage} from '../sodu_daily/sodu_daily';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
public balance:string;
constructor(public events: Events,public account:Account,public navCtrl: NavController) {
      this.events.subscribe('updateScreen', () => {
            this.updateSotien();
          });
      this.updateSotien();
  }

  openListDaily(){
      this.navCtrl.push(ListDailyPage)
  }

  openAddDaily(){
      this.navCtrl.push(AddDailyPage)
  }

  updateSotien(){
      var nf = Intl.NumberFormat();
      this.balance = nf.format(this.account.GetSotien());
  }

  search(){
        this.navCtrl.push(SearchPage)
  }
  kplus(){
    this.navCtrl.push(KplusPage)
}
  napgame(){
        this.navCtrl.push(NapgamePage)
  }
  addmoney(){
        this.navCtrl.push(AddmoneyPage)
  }
  getpayment(){
        this.navCtrl.push(GetpaymentPage)
  }
  transaction(){
        this.navCtrl.push(TransactionPage)
  }
  phonerecharge(){
        this.navCtrl.push(PhonerechargePage)
  }
  book_ticket(){
        this.navCtrl.push(Book_ticketPage)
  }
  napMomo(){
      this.navCtrl.push(AddMomoPage)
  }
  viewBienDong(){
        this.navCtrl.push(SoduDailyPage,{
              "id":undefined
        })
  }
}
