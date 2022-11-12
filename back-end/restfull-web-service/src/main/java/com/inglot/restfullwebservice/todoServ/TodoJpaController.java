package com.inglot.restfullwebservice.todoServ;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TodoJpaController {

    @Autowired
    private TodoHardcodedService todoHardcodedService;

    @Autowired
    private TodoJpaRepository todoJpaRepository;

    @GetMapping("/jpa/users/{username}/todos")
    public List<Todo> getAllTodos(@PathVariable String username) {

        return todoJpaRepository.findByUsername(username);
    }

    @GetMapping("/jpa/users/{username}/todos/{id}")
    public Optional<Todo> getTodoById(@PathVariable Long id, String username) {

        return todoJpaRepository.findById(id);
    }

    @DeleteMapping("/jpa/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable String username, @PathVariable Long  id) {

        todoJpaRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/jpa/users/{username}/todos/{id}")
    public ResponseEntity<Todo> updateById(@PathVariable int id, @RequestBody Todo todo){

        todoJpaRepository.save(todo);
        return new ResponseEntity<Todo>(todo,HttpStatus.OK);
    }

    @PostMapping ("/jpa/users/{username}/todos")
    public ResponseEntity<Todo> AddNewTodo(@RequestParam String username , @RequestBody Todo todo){
        todo.setUsername(username);
        todoJpaRepository.save(todo);
        return new ResponseEntity<Todo>(todo,HttpStatus.OK);
    }

}
