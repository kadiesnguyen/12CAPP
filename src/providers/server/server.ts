import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {RequestOptions} from '@angular/http';
@Injectable()
export class Server {

	constructor(public http:HttpClient) {

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

}