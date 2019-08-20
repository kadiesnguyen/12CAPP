import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {DetailDailyPage} from '../detail_daily/detail_daily';
import {AddDailyPage} from '../add_daily/add_daily';
import {Server} from '../../providers/server/server';
import {Account} from '../../providers/server/account';
import { ToastController } from 'ionic-angular';
@Component({
  selector: 'page-list_daily',
  templateUrl: 'list_daily.html'
})
export class ListDailyPage {

  public keyword:string;
  public tong_so_daily:string ="";
  public tong_tien:string = "";
  public items:object[] = [];
  constructor(private toast: ToastController,public myServer:Server,public account:Account,public navCtrl: NavController) {
    this.keyword = "";
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
      "tuKhoa":this.keyword,
      "p":"1"
    }
    this.myServer.getRequest("DL/GetList",dataPost,(data)=>{
      var stt = data["stt"];
      if(stt == 1)
      {
        var nf = Intl.NumberFormat();
        data = data["data"];
        this.tong_so_daily = nf.format(data["recordCount"]);
        this.tong_tien = nf.format(data["total1"]);

        var lst = data["lst"];
        for(var i=0;i<lst.length;i++){
          var dataItem = {};
          dataItem["login_id"] = lst[i]["loginID"];
          dataItem["ten"] = lst[i]["caption"];
          dataItem["sotien"] = nf.format(lst[i]["money"]);
          dataItem["ngay_tao"] = lst[i]["createDate_text2"];
          dataItem["trang_thai"] = lst[i]["status"];
          dataItem["id"] = lst[i]["id"];
          this.items.push(dataItem);
        }
      }
    });
  }

  openAddDaily(){
    this.navCtrl.push(AddDailyPage);
  }

  viewDetail(loginID)
  {
    let postData = {
      "id":Number(loginID.toString())
    };
    this.myServer.getRequest("DL/Get1DL",postData,(data)=>{
      var stt = data["stt"];
      if(stt == 1)
      {
        this.navCtrl.push(DetailDailyPage,{
          dataPage:data["data"]
        });
      }
      else
      {
        this.presentToast(data["msg"]);
      }
    });
  }
}
