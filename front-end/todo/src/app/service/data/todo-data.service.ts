import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URl, TODO_API_URl_JPA } from 'src/app/app.constants';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http:HttpClient ) { }

  retrieveAllTodos(name:string) {
    return this.http.get<Todo[]>(`${TODO_API_URl_JPA}/users/${name}/todos`)
 }

 deleteTodoById(name:string, id:number) {
  return this.http.delete(`${TODO_API_URl_JPA}/users/${name}/todos/${id}`)
}

updateTodoById(name:string, id:number , todo:Todo) {
  return this.http.put(`${TODO_API_URl_JPA}/users/${name}/todos/${id}`, todo)
}

getTodoById(name:string, id:number) {
  return this.http.get<Todo>(`${TODO_API_URl_JPA}/users/${name}/todos/${id}`)
}

addNewTodo(username: string ,todo:Todo) {
  return this.http.post(`${TODO_API_URl_JPA}/users/${username}/todos`, todo)
}
}
