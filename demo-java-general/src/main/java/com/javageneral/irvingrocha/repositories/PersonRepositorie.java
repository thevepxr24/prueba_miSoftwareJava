package com.javageneral.irvingrocha.repositories;

import com.javageneral.irvingrocha.model.Persona;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonRepositorie extends JpaRepository<Persona,Long> {
}
