//Creación de tablas
CREATE TABLE categoria (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

CREATE TABLE tarea (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(200) NOT NULL,
    descripcion VARCHAR(500),
    completada BOOLEAN DEFAULT FALSE,
    categoria_id BIGINT NOT NULL,
    CONSTRAINT fk_tarea_categoria
        FOREIGN KEY (categoria_id)
        REFERENCES categoria(id)
);
