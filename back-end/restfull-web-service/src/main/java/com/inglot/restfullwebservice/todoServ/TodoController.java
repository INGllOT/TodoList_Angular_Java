package com.inglot.restfullwebservice.todoServ;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TodoController {

    @Autowired
    private TodoHardcodedService todoHardcodedService;

    @GetMapping("/users/{username}/todos")
    public List<Todo> getAllTodos(@PathVariable String username) {
        return todoHardcodedService.findAll();
    }

    @GetMapping("/users/{username}/todos/{id}")
    public Todo getTodoById(@PathVariable int id, String username) {
        return todoHardcodedService.findById(id);
    }

    @DeleteMapping("/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable String username, @PathVariable int  id) {
        boolean delete = todoHardcodedService.deleteById(id);
        if(delete) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

    @PutMapping("/users/{username}/todos/{id}")
    public ResponseEntity<Todo> updateById(@PathVariable int id, @RequestBody Todo todo){
        boolean updated = todoHardcodedService.updateTodo(id,todo);

        if(updated) {
            return new ResponseEntity<Todo>(todo,HttpStatus.OK);
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping ("/users/{username}/todos")
    public ResponseEntity<Todo> AddNewTodo(@RequestBody Todo todo){
        boolean isAdded = todoHardcodedService.addNewTodo(todo);

        if(isAdded) {
            return new ResponseEntity<Todo>(todo,HttpStatus.OK);
        }
        return ResponseEntity.badRequest().build();
    }

}
