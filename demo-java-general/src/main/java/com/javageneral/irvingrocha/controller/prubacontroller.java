package com.javageneral.irvingrocha.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class prubacontroller {

    @GetMapping("/hello")
    public String helloWorld() {
        System.out.println("hello World");
        return "hello world from springboot";
    }
}
