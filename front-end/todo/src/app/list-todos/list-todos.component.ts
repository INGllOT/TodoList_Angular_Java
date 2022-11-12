import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {
  constructor(
   public id : number,
   public username: string,
   public descryption : string,
   public done : boolean,
   public targetDate: Date
  ){

  }
}


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {


  todos!: Todo[]; 

  // todos = [
  //   new Todo(1, "Learn welll !!", true, new Date()),
  //   new Todo(2, "Learn bad !!", false, new Date()),
  // ]

  // todo = {
  //   id : 1,
  //   descryption: 'DESCRYPTION !!! '
  // }

  constructor(private todoDataService: TodoDataService, private router: Router) { }

  ngOnInit(): void {
    this.loadTodos();
    this.loadTodos();
  }

  loadTodos(): void {
    this.todoDataService.retrieveAllTodos("wojciech").subscribe(
      response => this.todos = response
    );
  }

  deteteTodo(id:number) {
    this.todoDataService.deleteTodoById('wojciech', id).subscribe(
      response => {
        console.log(response);
        this.loadTodos();
      }
    );
  }

  updateTodo(id:number) {
    console.log('Updated id: ' + id)
    this.router.navigate(['todo',id])
  }

  addTodo(){
    this.router.navigate(['todo',-1])
  }

}
