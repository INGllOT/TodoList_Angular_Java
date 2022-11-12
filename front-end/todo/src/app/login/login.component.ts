import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  errorMessage = 'Invalid Credentials'
  validLogin = true

  constructor(private router : Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService ) { }

  ngOnInit(): void {
  }

  getUsername() {
    return this.username;
  }
  handleLogin() {
    if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      this.router.navigate(['welcome', this.username])
    } else {
      
    }
  }

  handleJWTBasicLogin() {
    this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password)
    .subscribe(
      resources => {
        console.log(resources)
        this.router.navigate(['welcome', this.username]) 
        this.validLogin = true
      },
      error => {
        console.log(error)
        this.validLogin = false
      }
    )
  }

  handleBasicLogin() {
    this.basicAuthenticationService.executeAuthenticationService(this.username, this.password)
    .subscribe(
      resources => {
        console.log(resources)
        this.router.navigate(['welcome', this.username])
        this.validLogin = true
      },
      error => {
        console.log(error)
        this.validLogin = false
      }
    )
  }

}
