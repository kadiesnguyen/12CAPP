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
@Component({
  selector: 'page-detail_daily',
  templateUrl: 'detail_daily.html'
})
export class DetailDailyPage {
  public vt:string = "100";
  public mb:string= "100";
  public vn:string= "100";
  public vnts:string= "100";
  public garena:string= "100";
  public kplus:string= "100";

  public vt1:string = "100";
  public mb1:string = "100";
  public vn1:string = "100";
  public vtts1:string = "100";
  public ftth1:string = "100";

  public ten_daily:string = "";
  public login_id:string = "";
  public ghi_chu:string = "";
  public id:string = "";
  public ngay_tao:string = "";
  public trang_thai:string = "";
  public so_tien:string = "";

  public dataPage:object;
  constructor(private alertCtrl: AlertController,private toast: ToastController,public myServer:Server,public account:Account,public navCtrl: NavController,public navParams: NavParams) {
    var vf =Intl.NumberFormat();

    this.dataPage = this.navParams.get("dataPage");
    this.ten_daily = this.dataPage["caption"];
    this.login_id = this.dataPage["loginID"];
    this.id = this.dataPage["id"];
    this.trang_thai = this.dataPage["status"];
    this.ngay_tao = this.dataPage["createDate_text2"];
    this.ghi_chu = this.dataPage["note"];
    this.so_tien = vf.format(this.dataPage["money"]);

    this.vt = this.dataPage["tyleCK_vt"];
    this.mb = this.dataPage["tyleCK_mb"];
    this.vn = this.dataPage["tyleCK_vn"];
    this.vnts = this.dataPage["tyleCK_vnts"];
    this.garena = this.dataPage["tyleCK_garena"];
    this.kplus = this.dataPage["tyleCK_kplus"];

    this.vt1 = this.dataPage["tyleMua_vt"];
    this.mb1 = this.dataPage["tyleMua_mb"];
    this.vn1 = this.dataPage["tyleMua_vn"];
    this.vtts1 = this.dataPage["tyleMua_vtts"];
    this.ftth1 = this.dataPage["tyleMua_ftth"];

  }

  async presentToast(msg) {
    const toast = await this.toast.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }



  toggleKhoa()
  {

  }

  capnhat()
  {
    let dataPost = {
      "id":this.dataPage["id"],
      "loginID":this.login_id,
      "caption":this.ten_daily,
      "tyleCK_vt":this.vt,
      "tyleCK_mb":this.mb,
      "tyleCK_vn":this.vn,
      "tyleCK_vnts":this.vnts,
      "tyleCK_garena":this.garena,
      "tyleCK_kplus":this.kplus,
      "tyleMua_vt":this.vt1,
      "tyleMua_mb":this.mb1,
      "tyleMua_vn":this.vn1,
      "tyleMua_vtts":this.vtts1,
      "tyleMua_ftth":this.ftth1,
      "note":this.ghi_chu
    }
    this.myServer.getRequest("DL/SuaDL",dataPost,(data)=>{
      var stt = data["stt"];
      if(stt == 1)
      {
        this.presentToast(data["msg"]);
      }
      else
      {
        this.presentToast(data["msg"]);
      }
    });
  }

  xoaTaiKhoan()
  {
    let alert = this.alertCtrl.create({
      title: 'Bạn chắc chắn đây là số trả trước?',
      message: 'Mọi sai sót do nhập số trả sau hay sai số điện thoại sẽ không được hoàn tiền. Nếu chưa chắc chắn hãy gọi số tổng đài để xác minh lại',
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
            let dataPost = {
              "id":this.dataPage["id"]
            }
            this.myServer.getRequest("DL/XoaDL",dataPost,(data)=>{
              var stt = data["stt"];
              if(stt == 1)
              {
                this.presentToast(data["msg"]);
                this.navCtrl.push(ListDailyPage);
              }
              else
              {
                this.presentToast(data["msg"]);
              }
            });
          }
        }
      ]
    });
    alert.present();
    
  }

  viewBienDong(){
    this.navCtrl.push(SoduDailyPage,{
      id:this.dataPage["id"]
    })
  }

  viewLichSu()
  {
    this.navCtrl.push(LichSuGiaoDichDailyPage,{
      id:this.dataPage["id"]
    });
  }
 
}
