import { Component } from '@angular/core';

import {DetailDailyPage} from '../detail_daily/detail_daily';
import {AddDailyPage} from '../add_daily/add_daily';
import {Server} from '../../providers/server/server';
import {Account} from '../../providers/server/account';
import { ToastController } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatePipe } from '@angular/common';
import {DetailGiaoDichPage} from '../detail_giaodich/detail_giaodich';
@Component({
  selector: 'page-lichsu_giaodich_daily_nh',
  templateUrl: 'lichsu_giaodich_daily_nh.html',
  providers: [DatePipe]
})
export class LichSuGiaoDichDailyNHPage {

  public keyword:string = "";
  public tong_so_giao_dich:string ="";
  public tong_tien:string = "";
  public tong_da_nap:string = "";
  public items:object[] = [];

  public caption:string = "";
  public id:string = "";
  public tungay:string = "";
  public denngay:string = "";
  public type_gd:string ="";
  constructor(private datePipe: DatePipe,private toast: ToastController,public myServer:Server,public account:Account,public navCtrl: NavController,public navParams: NavParams) {
    this.id = this.navParams.get("id");
    var d = new Date();
    var d1 = new Date();
    d1.setDate(d1.getDate()+1);
    this.tungay = this.datePipe.transform(d, 'dd/MM/yyyy');
    this.denngay = this.datePipe.transform(d1, 'dd/MM/yyyy');
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
      "loaitk":this.type_gd
    };
    this.myServer.getRequest("CTH/GetListNH",dataPost,(data)=>{
      var stt = data["stt"];
      var nf = Intl.NumberFormat();
      if(stt == 1){
        data = data["data"];
        this.tong_so_giao_dich = data["tatca"];
        this.tong_tien = data["tongtien"];
        this.tong_da_nap = data["danap"];
        this.caption = data["u_caption"];
        this.items = [];
        var lst = data["lst"];
        for(var i=0;i<lst.length;i++){
          var dataItem = {};
          dataItem["ngay_tao"] = lst[i]["createDate_text"];
          dataItem["loai"] = lst[i]["loaiTaiKhoan"];
          dataItem["tai_khoan_nap"] = lst[i]["taiKhoanCanNap"];
          dataItem["danap"] = lst[i]["daNap_formated"];
          dataItem["hanmuc"] = lst[i]["hanMuc_formated"];
          dataItem["hoahong"] = lst[i]["u_sotienHH_formated"];
          dataItem["trangthai"] = lst[i]["status"];
          dataItem["id"] = lst[i]["id"];
          this.items.push(dataItem);
        }
    }
    })
  }

  viewDetail(id){
    this.navCtrl.push(DetailGiaoDichPage,{
      id_giaodich:id
    });
  }

}
