package NTT.proyectoNTT.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Tarea {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String titulo;
    private String descripcion;
    private boolean completada;
    private Usuario propietario;

    public Tarea() {
    }

    public Tarea(String titulo, String descripcion, boolean completada, Usuario propietario) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.completada = completada;
        this.propietario = propietario;
    }

    public Long getId() {
        return id;
    }

    public String getTitulo() {
        return titulo;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public boolean isCompletada() {
        return completada;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public void setCompletada(boolean completada) {
        this.completada = completada;
    }

    public String getUsuario() {
        return propietario;
    }

    public void setUsuario(Usuario usuario) {
        this.propietario = usuario;
    }
}