import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {



  constructor() { }

  authenticate(username: string, password: string) {

    if(username === "wojciech" && password === "dummy") {
      sessionStorage.setItem('authenticaterUser', username)
      return true;
    }
    return false;
  }

isUserLoggedIn() {
  let user = sessionStorage.getItem('authenticaterUser')
  //console.log(!(user === null) + "AAAAA")
  return !(user === null)
}

logoutUser() {
  sessionStorage.clear()
}

}
