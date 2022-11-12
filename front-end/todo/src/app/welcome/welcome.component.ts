import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = " "
  message = ''
  //static namee: string 
  constructor(private route : ActivatedRoute, private welcomeDataService : WelcomeDataService) { }

  ngOnInit(): void {
    
    //WelcomeComponent.namee = this.route.snapshot.params['name']
    this.name = this.route.snapshot.params['name'] 
    console.log(this.getName());
  }

  getName() {
    return this.name;
  }

  getMessageWithParameter(){
    this.welcomeDataService.executeHelloNameService(this.name).subscribe(
      response => this.handleSuccesfulResponse(response),
      error => this.message = error.error.message
    );
    console.log("inside getMessage");
  }

  handleSuccesfulResponse(response:any) {
    console.log(response)
    console.log(response.message)
    this.message = response.message

  }

}
