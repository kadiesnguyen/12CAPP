import { Component } from '@angular/core';

import {DetailDailyPage} from '../detail_daily/detail_daily';
import {AddDailyPage} from '../add_daily/add_daily';
import {Server} from '../../providers/server/server';
import {Account} from '../../providers/server/account';
import { ToastController } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatePipe } from '@angular/common';
import {Pay_or_sendPage} from '../pay_or_send/pay_or_send';
@Component({
  selector: 'page-sodu_daily',
  templateUrl: 'sodu_daily.html',
  providers: [DatePipe]
})
export class SoduDailyPage {

  public keyword:string = "";
  public tong_so_giao_dich:string ="";
  public tong_tien:string = "";
  public items:object[] = [];

  public caption:string = "";
  public id:string = "";
  public tungay:string = "";
  public denngay:string = "";
  public type_gd:string ="";
  constructor(private datePipe: DatePipe,private toast: ToastController,public myServer:Server,public account:Account,public navCtrl: NavController,public navParams: NavParams) {
    this.id = this.navParams.get("id");
    var d = new Date();
    this.tungay = this.datePipe.transform(d, 'dd/MM/yyyy');
    this.denngay = this.datePipe.transform(d, 'dd/MM/yyyy');
    this.finding();
  }

  
  async presentToast(msg) {
    const toast = await this.toast.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  finding(){
    let dataPost = {
      "id":this.id,
      "p":"1",
      "tungay":this.tungay,
      "denngay":this.denngay,
      "k":this.keyword,
      "loai":this.type_gd
    };
    this.myServer.getRequest("Login/GetTransHistory",dataPost,(data)=>{
      var stt = data["stt"];
      var nf = Intl.NumberFormat();
      if(stt == 1){
        data = data["data"];
        this.tong_so_giao_dich = data["tatca"];
        this.tong_tien = data["tongtien"];
        this.caption = data["u_caption"];
        this.items = [];
        var lst = data["lst"];
        for(var i=0;i<lst.length;i++){
          var dataItem = {};
          dataItem["ngay_tao"] = lst[i]["createDate_text"];
          dataItem["loai"] = lst[i]["transType"];
          dataItem["sotien"] = lst[i]["money"];
          dataItem["lydo"] = lst[i]["note"];
          this.items.push(dataItem);
        }
    }
    })
  }

  chuyenTien(){
    this.navCtrl.push(Pay_or_sendPage,{
      id_nguoi_nhan:this.caption
    });
  }

}
