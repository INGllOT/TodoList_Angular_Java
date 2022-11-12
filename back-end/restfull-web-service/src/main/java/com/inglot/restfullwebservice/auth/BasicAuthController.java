package com.inglot.restfullwebservice.auth;

import com.inglot.restfullwebservice.auth.AuthenticationBean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@CrossOrigin(origins = "http://localhost:4200")
@org.springframework.web.bind.annotation.RestController
public class BasicAuthController {


    @GetMapping("/hello")
    public AuthenticationBean getHello(){
        return new AuthenticationBean("WITAM");
    }

    @GetMapping("/hello/{name}")
    public AuthenticationBean getHelloName(@PathVariable String name){
        return new AuthenticationBean(name);
    }

    @GetMapping("/basicauth")
    public AuthenticationBean basicAuth() {
        return new AuthenticationBean("You are authenticated");
    }
}
