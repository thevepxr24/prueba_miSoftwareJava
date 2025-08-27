package com.javageneral.irvingrocha.services;

import com.javageneral.irvingrocha.model.Persona;
import com.javageneral.irvingrocha.repositories.PersonRepositorie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
public class PersonService {
    @Autowired
    PersonRepositorie personRepositorie;

    public Optional<Persona> findById(Long personId){
        return personRepositorie.findById(personId);
    }

    public List<Persona> findAll(){
        return personRepositorie.findAll();
    }

    public Persona addPerson(Persona person){
        return  personRepositorie.save(person);
    }

    public  Persona updatePerson(Persona persona){
        Persona beforepersona = personRepositorie.findById(persona.getId()).orElseThrow(()-> new ResponseStatusException((HttpStatus.NOT_FOUND)));

        beforepersona.setName(persona.getName());
        beforepersona.setEmail(persona.getEmail());
        beforepersona.setYear(persona.getYear());
        return  personRepositorie.save(beforepersona);
    }

    public String deletePerson(Long id){
        Persona persona = personRepositorie.findById(id).orElseThrow(()-> new ResponseStatusException((HttpStatus.NOT_FOUND)));
            personRepositorie.deleteById(id);
            return "Persona eliminada exitosamente";
    }
}
