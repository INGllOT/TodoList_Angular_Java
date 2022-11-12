package com.inglot.restfullwebservice;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class User {

    @Id
    @GeneratedValue()
    private Long id;
    private String firstName;
    private String lastName;

}
