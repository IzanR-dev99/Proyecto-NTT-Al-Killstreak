# Proyecto-NTT-Al-Killstreak

# 💾 Módulo de Base de Datos - Persistencia Relacional

Este espacio detalla la capa de almacenamiento de datos del proyecto, orientada a cumplir con los criterios de persistencia estructurada mediante relaciones jerárquicas[cite: 8, 37, 38].

## ⚙️ Motor de Base de Datos: H2 (En Memoria)
Para agilizar el despliegue del proyecto y facilitar los criterios de evaluación, el backend utiliza un motor relacional **H2 embebido en memoria**[cite: 36, 59]. Esto significa que la base de datos se crea, estructura y destruye automáticamente junto al ciclo de vida del servidor backend de Spring Boot[cite: 36].

## 📐 Esquema de Tablas (Relación 1:M)
El diseño lógico consta de dos tablas principales unidas por una clave foránea (FK)[cite: 40]:

1. **`CATEGORIA` (Tabla Padre / Fuerte)**
   - `id` (PK, BigInt, Auto-increment)
   - `nombre` (Varchar, Not Null)

2. **`TAREA` (Tabla Hija / Débil)**
   - `id` (PK, BigInt, Auto-increment)
   - `titulo` (Varchar, Not Null)
   - `descripcion` (Varchar)
   - `categoria_id` (FK vinculada a la tabla `CATEGORIA`, Not Null) [cite: 40]

---

## 📊 Script SQL de Inicialización y Poblado de Datos
Para disponer de registros de prueba inmediatamente tras el arranque de la aplicación, el sistema lee automáticamente la configuración de datos de ejemplo (`import.sql` o `data.sql`)[cite: 58]:

```sql
-- Inserción de Categorías de ejemplo
INSERT INTO CATEGORIA (nombre) VALUES ('Trabajo');
INSERT INTO CATEGORIA (nombre) VALUES ('Estudios');
INSERT INTO CATEGORIA (nombre) VALUES ('Personal');

-- Inserción de Tareas vinculadas (Relación 1:M)
INSERT INTO TAREA (titulo, descripcion, categoria_id) VALUES ('Diseñar la interfaz', 'Estructurar botones CRUD en Angular', 2);
INSERT INTO TAREA (titulo, descripcion, categoria_id) VALUES ('Configurar CORS', 'Añadir anotación en Spring Boot', 1);
INSERT INTO TAREA (titulo, descripcion, categoria_id) VALUES ('Hacer la compra', 'Comprar fruta y leche', 3);
🛠️ Acceso a la Consola Web de GestiónPuedes inspeccionar visualmente las tablas, comprobar los registros actuales y ejecutar tus propias consultas SQL interactivas siguiendo estos pasos:Asegúrate de que el backend esté ejecutándose.  Entra en tu navegador a: http://localhost:8080/h2-consoleAsegúrate de que el campo JDBC URL coincida con el configurado en tu application.properties (Por defecto suele ser jdbc:h2:mem:testdb).Haz clic en Connect.
