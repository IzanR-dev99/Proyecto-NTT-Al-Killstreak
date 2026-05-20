# 🎨 Frontend - Interfaz Web Interactiva en Angular 21

Este módulo contiene la aplicación cliente construida bajo una arquitectura Single Page Application (SPA) para interactuar visualmente con el gestor de tareas[cite: 6, 26].

## ⚡ Requisitos Técnicos Obligatorios Implementados
- **Componentes Standalone:** Arquitectura moderna modular sin necesidad de declarar `NgModule`[cite: 27].
- **Signals:** Manejo de estado nativo para actualizar la vista instantáneamente al realizar acciones del CRUD[cite: 28].
- **Formularios Reactivos:** Captura e inserción de datos con validaciones en tiempo real en los campos críticos[cite: 13, 29, 66].
- **Servicios e Integración:** Consumo asíncrono de la API REST mediante HttpClient y manejo de flujos con **Observables (RxJS)**[cite: 12, 30, 31].
- **Enrutamiento:** Navegación fluida entre las secciones de `Inicio` y `Tareas`[cite: 32].

## 🖥️ Panel Central de Control (Acciones CRUD)
La interfaz expone un bloque unificado con los botones de acción directa:
1. **Mostrar todas las tareas**: Realiza un fetch asíncrono mapeando la lista completa.
2. **Mostrar tarea por ID**: Solicita y renderiza la información de un identificador concreto.
3. **Crear tarea**: Abre el formulario reactivo asegurando que se asocie a una categoría válida.
4. **Actualizar tarea**: Envía cambios al servidor para modificar estados.
5. **Borrar tarea por ID**: Lanza una petición destructiva HTTP para eliminar la fila.

## ⚙️ Instrucciones de Instalación y Arranque
1. Accede a este directorio en tu terminal:
   ```bash
   cd frontend
Instala todos los paquetes de Node requeridos:

Bash
npm install
Levanta el servidor local de desarrollo:

Bash
ng serve
Navega en tu navegador web a la dirección http://localhost:4200.
