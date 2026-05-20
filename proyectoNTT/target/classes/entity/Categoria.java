
package entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import java.util.List;

@Entity
public class Categoria {

   @Id
   @GeneratedValue(
      strategy = GenerationType.IDENTITY
   )
   private Long id;

   @Column(
      name = "nombre",
      nullable = false,
      length = 100
   )
   private String nombre;

   // Relación inversa: Una categoría tiene muchas tareas.
   // "categoria" es el nombre del atributo privado que tienes dentro de la clase Tarea.
   @OneToMany(mappedBy = "categoria")
   private List<Tarea> tareas;

   // Constructor vacío obligatorio para JPA
   public Categoria() {
   }

   // Constructor con parámetros para crear categorías fácilmente
   public Categoria(String nombre) {
      this.nombre = nombre;
   }

   // Getters y Setters
   public Long getId() {
      return this.id;
   }

   public void setId(Long id) {
      this.id = id;
   }

   public String getNombre() {
      return this.nombre;
   }

   public void setNombre(String nombre) {
      this.nombre = nombre;
   }

   public List<Tarea> getTareas() {
      return this.tareas;
   }

   public void setTareas(List<Tarea> tareas) {
      this.tareas = tareas;
   }
}

