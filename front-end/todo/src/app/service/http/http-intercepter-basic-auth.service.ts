import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor(private basicAuthenticationService: BasicAuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // let username = 'user'
    // let password = 'password'
    //let basicAuthHttpHeaderString = 'Basic ' + window.btoa(username + ':' + password)

    let basicAuthHttpHeaderString = this.basicAuthenticationService.getAuthiticatedToken();
    let username = this.basicAuthenticationService.getAuthiticatedUser();

    if (basicAuthHttpHeaderString && username) {
      request = request.clone({
        setHeaders: {
          Authorization: basicAuthHttpHeaderString
        }
      })
    }
    return next.handle(request)
  }
}
