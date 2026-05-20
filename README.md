# Proyecto-NTT-Al-

# ☕ Backend - API REST con Spring Boot

Este módulo gestiona la lógica de negocio, la conexión con la base de datos y la exposición de los servicios REST de la aplicación[cite: 7, 35].

## 🛠️ Tecnologías y Características
- **Java con Spring Boot** [cite: 7, 34]
- **Spring Data JPA**: Para el mapeo y persistencia relacional[cite: 38].
- **H2 Database**: Base de datos relacional integrada en memoria[cite: 36].
- **Validaciones**: Uso de anotaciones en las entidades para asegurar la integridad de los datos entrantes[cite: 66].

## 📐 Modelo de Datos Realizado
Se ha estructurado un modelo mínimo con una relación **1:M (Uno a Muchos)**[cite: 37, 40]:
- **`Categoria` (Entidad Principal / Padre):** Puede agrupar múltiples tareas vinculadas[cite: 40].
- **`Tarea` (Entidad Hija / Dependiente):** Pertenece estrictamente a una categoría única[cite: 40].

## 📡 Endpoints de la API REST

| Método | Endpoint | Descripción |
| :--- | :--- | :--- |
| `GET` | `/api/tareas` | Listar todas las tareas guardadas[cite: 47]. |
| `GET` | `/api/tareas/{id}` | Obtener el detalle específico de una tarea[cite: 48]. |
| `POST` | `/api/tareas` | Registrar una nueva tarea validada desde formulario[cite: 13, 49]. |
| `PUT` | `/api/tareas/{id}` | Actualizar las propiedades de una tarea (Opcional implementado)[cite: 51, 71]. |
| `DELETE` | `/api/tareas/{id}` | Eliminar una tarea por ID del registro de memoria (Opcional implementado)[cite: 51, 71]. |
| `GET` | `/api/categorias/{id}/tareas` | Consultar la lista de tareas hijas pertenecientes a una categoría[cite: 50]. |

## ⚙️ Instrucciones de Compilación y Ejecución
1. Accede a este directorio en tu terminal:
   ```bash
   cd backend
Ejecuta el comando de arranque de Maven:

Bash
mvn spring-boot:run
