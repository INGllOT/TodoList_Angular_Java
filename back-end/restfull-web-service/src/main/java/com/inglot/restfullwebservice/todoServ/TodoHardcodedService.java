package com.inglot.restfullwebservice.todoServ;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoHardcodedService {

    private static List<Todo> listTodo = new ArrayList<>();
    private static long idCounter = 0;

//    static {
//        listTodo.add(new Todo(++idCounter,"AAAAAAA", true, new Date()));
//        listTodo.add(new Todo(++idCounter,"BBBBBB", false, new Date()));
//        listTodo.add(new Todo(++idCounter,"CCCCCCC", true, new Date()));
//    }

    public List<Todo> findAll() {
        return listTodo;
    }

    public Todo findById(int id) {
        for (Todo e : listTodo) {
            if(e.getId() == id) {
                return e;
            }
        }
        return new Todo(1L,"UNKNOWN","222",false,new Date());
    }

    public boolean deleteById(int id) {
        for (Todo e : listTodo) {
            if (e.getId() ==  id) {
                listTodo.remove(e);
                return true;
            }
        }
        return false;
    }

    public boolean updateTodo(int id,Todo todo) {
        for(Todo e : listTodo) {
            if (e.getId() == id) {
                e.setDescryption(todo.getDescryption());
                e.setDone(todo.isDone());
                e.setTargetDate(todo.getTargetDate());
                return true;
            }
        }
        return false;
    }

    public boolean addNewTodo(Todo todo) {
        for(Todo e : listTodo) {
            if (e.getId() == todo.getId()) {
                return false;
            }
        }
        todo.setId(++idCounter);
        listTodo.add(todo);
        return true;
    }
}
