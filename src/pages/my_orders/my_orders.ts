import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Server} from '../../providers/server/server';
import { ToastController } from 'ionic-angular';
import { DatePipe } from '@angular/common';
import { m } from '@angular/core/src/render3';
import {DetailGiaoDichPage} from '../detail_giaodich/detail_giaodich';
import {DetailGiaoDichNHPage} from '../detail_giaodich_nh/detail_giaodich_nh';
@Component({
  selector: 'page-my_orders',
  templateUrl: 'my_orders.html',
  providers: [DatePipe]
})
export class My_ordersPage {
  private history_tab: string = "";
  private items:object[] = [];
  public tungay:string;
  public denngay:string;
  public keyword:string;
  public accountType:string;
  public accountType1:string;
  public id:string;
  public tong_giao_dich:string;
  public tong_da_nap:string;
  public tong_so_tien:string;

  constructor(private datePipe: DatePipe,private toast: ToastController,public myServer:Server,public navCtrl: NavController) {

    
    this.history_tab = "lichsu_giaodich";
    
    this.onSegmentChange();
  }

  onSegmentChange(){
    this.items.length = 0;
    var d = new Date();
    var d1 = new Date();
    d1.setDate(d1.getDate()+1);
    
    this.tungay = this.datePipe.transform(d, 'dd/MM/yyyy');
    this.denngay = this.datePipe.transform(d1, 'dd/MM/yyyy');
    this.keyword = "";
    this.accountType = "";
    this.accountType1 = "";
    this.tong_da_nap = "0";
    this.tong_giao_dich = "0";
    this.tong_so_tien = "0";
    if(this.history_tab == "lichsu_giaodich")
    {
      this.finding();
    }
    else
    {
      this.findingGiaRe();
    }
  }
  async presentToast(msg) {
    const toast = await this.toast.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
  finding()
  {
    let dataPost = {
      "tungay":this.tungay,
      "denngay":this.denngay,
      "p":"1",
      "k":this.keyword,
      "loaitk":this.accountType,
      "id":"undefined"
    }
    this.myServer.getRequest("CTH/GetListAll",dataPost,(data)=>{
      console.log(JSON.stringify(data));
      var stt = data["stt"];
      if(stt == 1)
      {
        this.items = [];
        data = data["data"];
        this.tong_giao_dich = data["tatca"];
        this.tong_so_tien = data["tongtien"];
        this.tong_da_nap = data["danap"];

        var lst = data["lst"];
        for(var i=0;i<lst.length;i++){
          var dataItem = {};
          dataItem["ngay_tao"] = lst[i]["createDate_text"];
          dataItem["loai"] = lst[i]["loaiTaiKhoan"];
          dataItem["tai_khoan_nap"] = lst[i]["taiKhoanCanNap"];
          dataItem["han_muc"] = lst[i]["hanMuc_formated"];
          dataItem["da_nap"] = lst[i]["daNap_formated"];
          dataItem["trang_thai"] = lst[i]["status"];
          dataItem["id"] = lst[i]["id"];
          this.items.push(dataItem);
        }
        
      }
      else
      {
        this.presentToast(data["msg"]);
      }
    })
  }

  findingGiaRe()
  {
    let dataPost = {
      "tungay":this.tungay,
      "denngay":this.denngay,
      "p":"1",
      "k":this.keyword,
      "loaitk":this.accountType1,
      "id":"undefined"
    }
    this.myServer.getRequest("CTH/GetListNH",dataPost,(data)=>{
      console.log(JSON.stringify(data));
      var stt = data["stt"];
      if(stt == 1)
      {
        this.items = [];
        data = data["data"];
        this.tong_giao_dich =data["tatca"];
        this.tong_so_tien = data["tongtien"];
        this.tong_da_nap = data["danap"];

        var lst = data["lst"];
        for(var i=0;i<lst.length;i++){
          var dataItem = {};
          dataItem["ngay_tao"] = lst[i]["createDate_text"];
          dataItem["loai"] = lst[i]["loaiTaiKhoan"];
          dataItem["tai_khoan_nap"] = lst[i]["taiKhoanCanNap"];
          dataItem["han_muc"] = lst[i]["hanMuc_formated"];
          dataItem["da_nap"] = lst[i]["daNap_formated"];
          dataItem["trang_thai"] = lst[i]["status"];
          dataItem["ghi_chu"] = lst[i]["note"];
          dataItem["id"] = lst[i]["id"];
          this.items.push(dataItem);
        }
        
      }
      else
      {
        this.presentToast(data["msg"]);
      }
    })
  }
  viewDetail(id){
    this.navCtrl.push(DetailGiaoDichPage,{
      id_giaodich:id
    });
  }
  viewDetailNH(id){
    this.navCtrl.push(DetailGiaoDichNHPage,{
      id_giaodich:id
    });
  }
}
