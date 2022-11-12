import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HelloWorldBean {
  constructor(private message:string) {}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http:HttpClient
  ) { }

  executeHelloService () {
     return this.http.get<HelloWorldBean>('http://localhost:8080/hello')
  }

  executeHelloNameService (name:string) {
    // let basicAuthHttpHeaderString = this.createBasicAuthHttpHeader();

    // let headers = new HttpHeaders({
    //   Authorization: basicAuthHttpHeaderString
    // })

    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello/${name}`, 
    //{headers}
    )
 }

//  createBasicAuthHttpHeader() {
//   let username = 'user'
//   let password = 'password'
//   let basicAuthHttpHeaderString = 'Baisc ' + window.btoa(username + ':' + password)
//   return basicAuthHttpHeaderString;
//  }
}
