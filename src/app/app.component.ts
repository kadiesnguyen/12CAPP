import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { PromocodePage } from '../pages/promocode/promocode';
import {SigninPage} from '../pages/signin/signin';
import { TranslateService } from '../../node_modules/@ngx-translate/core';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SigninPage;

 constructor(private platform: Platform, private statusBar: StatusBar,
  private splashScreen: SplashScreen, public translate:TranslateService) {
    this.initializeApp();
  }
  
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.translate.setDefaultLang('en');
      this.translate.use('en');
    });
  }
}