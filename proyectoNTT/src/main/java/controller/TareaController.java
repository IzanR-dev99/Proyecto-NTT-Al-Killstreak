package controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import repository.TareaRepository;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/tareas")
@CrossOrigin(origins = "*")
public class TareaController {

    @Autowired
    private TareaRepository tareaRepository;

    // GET: todas las tareas
    @GetMapping
    public List<Tarea> getAll() {
        return tareaRepository.findAll();
    }

    // GET: tarea por ID
    @GetMapping("/{id}")
    public ResponseEntity<Tarea> getById(@PathVariable Long id) {
        return tareaRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // POST: crear tarea
    @PostMapping
    public Tarea create(@RequestBody Tarea tarea) {
        return tareaRepository.save(tarea);
    }

    // PUT: actualizar tarea
    @PutMapping("/{id}")
    public ResponseEntity<Tarea> update(@PathVariable Long id, @RequestBody Tarea datos) {
        return tareaRepository.findById(id)
                .map(tarea -> {

                    tarea.setTitulo(datos.getTitulo());
                    tarea.setDescripcion(datos.getDescripcion());
                    tarea.setCompletada(datos.isCompletada());

                    // IMPORTANTE: mantiene relación con Categoria (FK)
                    tarea.setCategoria(datos.getCategoria());

                    return ResponseEntity.ok(tareaRepository.save(tarea));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    // DELETE: borrar tarea
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        if (!tareaRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }

        tareaRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}