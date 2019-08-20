import { Component } from '@angular/core';

import { SignupPage } from '../signup/signup';
import { ForgotpasswordPage } from '../forgotpassword/forgotpassword';
import { TabsPage } from '../tabs/tabs';
import {Server} from '../../providers/server/server';
import {Account} from '../../providers/server/account';
import { ToastController } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {ListDailyPage} from '../list_daily/list_daily';
import {SoduDailyPage} from '../sodu_daily/sodu_daily';
import {LichSuGiaoDichDailyPage} from '../lichsu_giaodich_daily/lichsu_giaodich_daily';
import {Pay_or_sendPage} from '../pay_or_send/pay_or_send';
@Component({
  selector: 'page-detail_giaodich',
  templateUrl: 'detail_giaodich.html'
})
export class DetailGiaoDichPage {
  
  public status:string;
  public tt_the:string;
  public phoneNum:string;
  public danap:string;
  public result_nap:string;
  public id:string;
  constructor(private alertCtrl: AlertController,private toast: ToastController,public myServer:Server,public account:Account,public navCtrl: NavController,public navParams: NavParams) {
    this.id = this.navParams.get("id_giaodich");
    console.log("id_giadich:"+this.id);
    let postData = {
      "id":this.id
    }

    this.myServer.postRequest("CTH/Get1",postData,(data)=>{
      var stt = data["stt"];
      if(stt == 1){
        data = data["data"];
        this.init(data);
      }
    })
  }

  init(data){
    this.status = data["status"];
    this.tt_the = "Thẻ "+data["loaiTaiKhoan"]+", Số Tiền : "+data["hanMuc"];
    this.phoneNum = data["taiKhoanCanNap"];
    this.danap = data["daNap"];
    this.result_nap = data["note"];
  }
  
  async presentToast(msg) {
    const toast = await this.toast.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  check(){
    let postData = {
      "id":this.id
    }

    this.myServer.postRequest("CTH/Get1",postData,(data)=>{
      var stt = data["stt"];
      if(stt == 1){
        this.init(data["data"]);
        this.presentToast(data["msg"]);
      }
    });
  }

  cancel(){
    let alert = this.alertCtrl.create({
      title: 'Xác nhận lại!',
      message: 'Bạn chắc chắn muốn hủy?',
      buttons: [
        {
          text: 'Hủy Bỏ',
          role: 'cancel',
          handler: () => {

          }
        },
        {
          text: 'Đồng Ý',
          handler: () => {
            let postData = {
              "id":this.id
            }
        
            this.myServer.getRequest("CTH/Cancel",postData,(data)=>{
              var stt = data["stt"];
              if(stt == 1){
                this.init(data["data"]);
                this.presentToast(data["msg"]);
              }
              else{
                this.presentToast(data["msg"]);
              }
            });
          }
        }
      ]
    });
    alert.present();
    
  }
    

  

  delete(){
    let alert = this.alertCtrl.create({
      title: 'Xác nhận lại!',
      message: 'Bạn chắc chắn muốn xóa, chức năng này sẽ KHÔNG HOÀN TIỀN, nó giúp bạn xóa những yêu cầu không muốn nhìn thấy nữa?',
      buttons: [
        {
          text: 'Hủy Bỏ',
          role: 'cancel',
          handler: () => {

          }
        },
        {
          text: 'Đồng Ý',
          handler: () => {
            let postData = {
              "id":this.id
            }
        
            this.myServer.getRequest("CTH/Delete",postData,(data)=>{
              var stt = data["stt"];
              if(stt == 1){
                this.init(data["data"]);
                this.presentToast(data["msg"]);
              }
              else{
                this.presentToast(data["msg"]);
              }
            });
          }
        }
      ]
    });
    alert.present();
  }


}
