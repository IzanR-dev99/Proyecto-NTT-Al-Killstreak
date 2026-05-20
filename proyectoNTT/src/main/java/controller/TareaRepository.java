package controller;

import org.springframework.data.jpa.repository.JpaRepository;

import entity.Tarea;

public interface TareaRepository extends JpaRepository<Tarea, Long>{

}
