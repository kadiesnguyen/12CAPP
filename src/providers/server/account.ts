import { Injectable } from '@angular/core';
import { LNodeFlags } from '@angular/core/src/render3/interfaces';
import { DebugContext } from '@angular/core/src/view';
@Injectable()
export class Account {
    private token:string;
    private id:number;
    private uId:string;
    private ten:string;
    private sotien:number;
    private isSpec:boolean;

	constructor() {
        
	}

    SaveDataLogin(data)
    {
        data = data["data"];
        this.token = data["token"];
        this.id = data["id"];
        this.uId = data["uId"];
        this.ten = data["ten"];
        this.sotien = data["sotien"];
        this.isSpec = data["isSpec"];

    }

    GetID(){
        return this.id;
    }
    
    GetToken()
    {
        return this.token;
    }

    GetSotien()
    {
        return this.sotien;
    }

    UpdateSotien(st:number)
    {
        console.log("UpdateSotien:"+st);
        this.sotien = st;
    }

}