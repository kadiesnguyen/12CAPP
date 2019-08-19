import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { My_ordersPage } from '../my_orders/my_orders';
import { NapgamePage } from '../napgame/napgame';
import { AccountPage } from '../account/account';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab3Root =  NapgamePage;
  tab4Root =  My_ordersPage ;
  tab5Root = AccountPage;

   constructor() {

  }
}
