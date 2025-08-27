package com.javageneral.irvingrocha.controller;

import com.javageneral.irvingrocha.model.Persona;
import com.javageneral.irvingrocha.services.PersonService;
import com.oracle.svm.core.annotate.Delete;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
@RestController
@RequestMapping("/usuarios")
public class PersonController {
    @Autowired
    PersonService personService;

    @GetMapping("/prueba")
    public String prueba(){
        return "hello world";
    }

    @GetMapping("/{id}")
    public Persona findById(@PathVariable Long id){
        return personService.findById(id).orElseThrow(()-> new ResponseStatusException((HttpStatus.NOT_FOUND)));
    }

    @PostMapping
    public Persona addPerson(@RequestBody Persona persona){
        if(persona.getName().length()>50 || persona.getEmail().length()>50) {
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST, "El nombre o email exceden el límite de 50 caracteres"
            );
        }
        if(!persona.getEmail().contains("@")){
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST, "Email no valido"
            );
        }
        return personService.addPerson(persona);
    }

    @PutMapping
    public Persona updatePerson(@RequestBody Persona persona){
        if(persona.getName().length()>50 || persona.getEmail().length()>50) {
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST, "El nombre o email exceden el límite de 50 caracteres"
            );
        }
        if(!persona.getEmail().contains("@")){
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST, "Email no valido"
            );
        }

        return personService.updatePerson(persona);
    }

    @DeleteMapping("/{id}")
    public String deletePerson(@PathVariable Long id){
        return  personService.deletePerson(id);
    }

    @GetMapping("/todos")
    public List<Persona> findAll(){
        return personService.findAll();
    }
}
