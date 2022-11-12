import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { LoginComponent } from '../login/login.component';
import { TodoDataService } from '../service/data/todo-data.service';
import { WelcomeComponent } from '../welcome/welcome.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id!: number;
  todo!: Todo;
  username! : string;

  

  constructor(private route: ActivatedRoute, 
    private router: Router,
    private todoDataService: TodoDataService,
    private welcomeComponent: WelcomeComponent
    ) { }

  ngOnInit(): void {
    console.log("inside todo component")
    this.id = this.route.snapshot.params['id']
    if(this.id == -1) {
      this.username = "wojciech";
      this.todo = new Todo(this.id, this.username,"",false,new Date())
    } else {
      this.todo = new Todo(1, "" ,"", false, new Date())
      console.log('retreive id in todo Update : ' + this.id)
      this.retreveTodo()
    }
  }

  saveTodo() {
    if(this.id == -1){
      console.log("username : " + this.username);
      this.todoDataService.addNewTodo(this.username,this.todo).subscribe(
        response => console.log(response)
      )
    } else {
    this.todoDataService.updateTodoById("wojciech", this.id, this.todo).subscribe(
      response => console.log(response)
    )
    }
    this.router.navigate(['todo'])
    }

  retreveTodo() {
    this.todoDataService.getTodoById('wojciech', this.id).subscribe(
        response => this.todo = response
    )
  }

}
