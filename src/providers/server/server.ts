import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {RequestOptions} from '@angular/http';
import {Account} from '../../providers/server/account';
@Injectable()
export class Server {

	constructor(public account:Account,public http:HttpClient) {

	}

	sendRequest(subLink:string,postData:object,callback){
		console.log("sendRequest:"+JSON.stringify(postData));
		var headers = new HttpHeaders();
		headers.append("Accept", 'application/json');
		headers.append('Content-Type', 'application/json' );
		var requestOptions = { headers: headers };
		this.http.post("http://trumbantien.com:10001/api/"+subLink, postData, requestOptions)
		.subscribe(data => {
			if(callback != null){
				callback(data);
			}
		  console.log(JSON.stringify(data));
		 }, error => {
		  console.log(error);
		})
	}
	postRequest(subLink:string,postData:object,callback){
		console.log("postRequest:"+subLink+"=>"+JSON.stringify(postData));
		var headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Accept':'application/json',
			'token':this.account.GetToken()
		});
		var requestOptions = { headers: headers };
		this.http.post("http://trumbantien.com:10001/api/"+subLink, postData, requestOptions)
		.subscribe(data => {
			if(callback != null){
				callback(data);
			}
		  console.log(JSON.stringify(data));
		 }, error => {
		  console.log(error);
		});
	}
	getRequest(subLink:string,postData:object,callback){
		
		var headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Accept':'application/json',
			'token':this.account.GetToken()
		});
		var requestOptions = { headers: headers };
		var link = "http://trumbantien.com:10001/api/"+subLink;
		if(postData != null)
		{
			link+="?";
			for(let key in postData) {
				link = link +key+"="+postData[key]+"&";
			}
			link = link.substr(0,link.length-1);
		}
		console.log("getRequest:"+link+"=>"+JSON.stringify(postData));
		this.http.get(link, requestOptions)
		.subscribe(data => {
			if(callback != null){
				callback(data);
			}
		  console.log(JSON.stringify(data));
		 }, error => {
		  console.log(error);
		});
	}
	
}