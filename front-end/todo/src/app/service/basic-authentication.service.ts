import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { HelloWorldBean } from './data/welcome-data.service';

export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'authenticaterUser'


@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }


  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticaterUser')
    //console.log(!(user === null) + "AAAAA")
    return !(user === null)
  }

  getAuthiticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER);
    
  }

  getAuthiticatedToken() {
    return sessionStorage.getItem(TOKEN);
  }

  logoutUser() {
    sessionStorage.clear()
  }

  executeJWTAuthenticationService(username: string, password: string) {
   
    return this.http.post<any>(`http://localhost:8080/authenticate`,{
    username,
    password}).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);

          return data;
        }
      )
    )
  }

  executeAuthenticationService(username: string, password: string) {
   
    let basicAuthHttpHeaderString = 'Baisc ' + window.btoa(username + ':' + password)
  
    let headers = new HttpHeaders({
      Authorization: basicAuthHttpHeaderString
    })

    return this.http.get<AuthenticationBean>(`http://localhost:8080/basicauth`, { headers }).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, basicAuthHttpHeaderString);

          return data;
        }
      )
    )
  }

  createBasicAuthHttpHeader() {

  }

}

export class AuthenticationBean {
  constructor(public message: string) {

  }
}
