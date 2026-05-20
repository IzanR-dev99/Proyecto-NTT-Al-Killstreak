//Inserts en tareas
INSERT INTO tarea (titulo, descripcion, completada, categoria_id)
VALUES ('Preparar informe', 'Informe mensual del proyecto', FALSE, 1);

INSERT INTO tarea (titulo, descripcion, completada, categoria_id)
VALUES ('Estudiar Spring Boot', 'Repasar relaciones 1 a muchos', FALSE, 2);

INSERT INTO tarea (titulo, descripcion, completada, categoria_id)
VALUES ('Limpiar cocina', 'Fregar y ordenar', TRUE, 3);

INSERT INTO tarea (titulo, descripcion, completada, categoria_id)
VALUES ('Ir al médico', 'Revisión general anual', FALSE, 4);

INSERT INTO tarea (titulo, descripcion, completada, categoria_id)
VALUES ('Ver una película', 'Elegir algo en Netflix', TRUE, 5);



//Inserts en categoría

INSERT INTO categoria (nombre) VALUES ('Trabajo');
INSERT INTO categoria (nombre) VALUES ('Estudios');
INSERT INTO categoria (nombre) VALUES ('Casa');
INSERT INTO categoria (nombre) VALUES ('Salud');
INSERT INTO categoria (nombre) VALUES ('Ocio');


