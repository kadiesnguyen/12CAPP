import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AccountPage } from '../pages/account/account';
import { AddmoneyPage } from '../pages/addmoney/addmoney';
import { Book_ticketPage } from '../pages/book_ticket/book_ticket';
import { KplusPage } from '../pages/kplus/kplus';
import { ConditionPage } from '../pages/condition/condition';
import { FavoritedPage } from '../pages/favorited/favorited';
import { ForgotpasswordPage } from '../pages/forgotpassword/forgotpassword';
import { GetpaymentPage } from '../pages/getpayment/getpayment';
import { HelpPage } from '../pages/help/help';
import { HomePage } from '../pages/home/home';
import { Pay_or_sendPage } from '../pages/pay_or_send/pay_or_send';
import { Item_infoPage } from '../pages/item_info/item_info';
import { Item_listsPage } from '../pages/item_lists/item_lists';
import { QrcodePage } from '../pages/mall/mall';
import { My_ordersPage } from '../pages/my_orders/my_orders';
import { MyprofilePage } from '../pages/myprofile/myprofile';
import { NotificationPage } from '../pages/notification/notification';
import { NapgamePage } from '../pages/napgame/napgame';
import { PaymentsuccessfulPage } from '../pages/paymentsuccessful/paymentsuccessful';
import { PhonerechargePage } from '../pages/phonerecharge/phonerecharge';
import { PromocodePage } from '../pages/promocode/promocode';
import { SearchPage } from '../pages/search/search';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { TabsPage } from '../pages/tabs/tabs';
import { TransactionPage } from '../pages/transaction/transaction';
import { VerificationPage } from '../pages/verification/verification';
import { Server } from '../providers/server/server';
import { Account} from '../providers/server/account';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { m } from '@angular/core/src/render3';
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    AccountPage,
    AddmoneyPage,
    Book_ticketPage,
    KplusPage,
    ConditionPage,
    FavoritedPage,
    ForgotpasswordPage,
    GetpaymentPage,
    Pay_or_sendPage,
    HelpPage,
    HomePage,
    Item_infoPage,
    Item_listsPage,
    QrcodePage,
    My_ordersPage,
    MyprofilePage,
    NotificationPage,
    NapgamePage,
    PaymentsuccessfulPage,
    PhonerechargePage,
    PromocodePage,
    SearchPage,
    SigninPage,
    SignupPage,
    TabsPage,
    TransactionPage,
    VerificationPage
  ],
   imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AccountPage,
    AddmoneyPage,
    Book_ticketPage,
    KplusPage,
    ConditionPage,
    FavoritedPage,
    ForgotpasswordPage,
    GetpaymentPage,
    HelpPage,
    Pay_or_sendPage,
    HomePage,
    Item_infoPage,
    Item_listsPage,
    QrcodePage,
    My_ordersPage,
    MyprofilePage,
    NotificationPage,
    NapgamePage,
    PaymentsuccessfulPage,
    PhonerechargePage,
    PromocodePage,
    SearchPage,
    SigninPage,
    SignupPage,
    TabsPage,
    TransactionPage,
    VerificationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
	Server,
    Account,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
