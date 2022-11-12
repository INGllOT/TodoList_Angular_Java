package com.inglot.restfullwebservice.todoServ;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class Todo {
    @Id
    @GeneratedValue
    private Long id;
    private String username;
    private String descryption;
    private boolean isDone;
    private Date targetDate;


    public Todo(Long id, String username, String descryption, boolean isDone, Date targetDate) {
        this.id = id;
        this.username = username;
        this.descryption = descryption;
        this.isDone = isDone;
        this.targetDate = targetDate;
    }

    public Todo() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getDescryption() {
        return descryption;
    }

    public void setDescryption(String descryption) {
        this.descryption = descryption;
    }

    public boolean isDone() {
        return isDone;
    }

    public void setDone(boolean done) {
        isDone = done;
    }

    public Date getTargetDate() {
        return targetDate;
    }

    public void setTargetDate(Date targetDate) {
        this.targetDate = targetDate;
    }
}
