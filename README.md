# Proyecto-NTT-Al-Killstreak
# 🚀 Proyecto Final 1º FP Dual - Sistema de Gestión de Tareas

[cite_start]Este repositorio contiene el proyecto integrador de desarrollo web *Full Stack* desarrollado para el ciclo de FP Dual en colaboración con NTT Data[cite: 1, 3, 63]. [cite_start]La aplicación es un gestor de tareas que permite clasificar, crear, actualizar y eliminar registros basándose en una relación de uno a muchos (1:M) entre categorías y tareas[cite: 5, 37, 40].

[cite_start]El proyecto está estructurado de forma modular y separada por responsabilidades[cite: 14]:
- [cite_start]`/backend`: API REST construida con Java y Spring Boot[cite: 7, 35, 56].
- [cite_start]`/frontend`: Interfaz de usuario SPA desarrollada con Angular 21[cite: 26, 55].
- [cite_start]`/bbdd`: Configuración y scripts de persistencia relacional en memoria[cite: 8, 38, 58].

---

## 🛠️ Requisitos Globales Previos
Antes de arrancar los módulos, asegúrate de tener instalado en tu equipo:
- **Node.js** (Versión 20 o superior para compatibilidad con Angular 21)
- **Java JDK 17** o superior
- **Maven** (Para la gestión de dependencias del backend)

---

## ⚙️ Instrucciones de Inicio Rápido

Para desplegar la aplicación completa localmente, sigue estos pasos en terminales separadas:

### Paso 1: Levantar el Servidor Backend
```bash
cd backend
mvn spring-boot:run

El servidor backend iniciará de forma nativa en http://localhost:8080.

Paso 2: Levantar el Servidor Frontend
Bash
cd frontend
npm install
ng serve
La interfaz gráfica estará disponible en tu navegador en http://localhost:4200.


Resumen de Problemas Encontrados y Soluciones:
Bloqueo de peticiones por políticas CORS: Al conectar ambos servidores localmente, el navegador bloqueaba el flujo de datos por seguridad. Se solucionó configurando la anotación @CrossOrigin(origins = "http://localhost:4200") en los controladores de Spring Boot.
Bucle de recursividad infinita (StackOverflowError): La relación bidireccional entre Categoria y Tarea rompía la serialización JSON de Jackson. Se resolvió aplicando las anotaciones @JsonManagedReference y @JsonBackReference.
Reactividad con Signals y Componentes Standalone: Sincronizar los flujos asíncronos (Observables) de los servicios con la reactividad de las plantillas requería adaptabilidad en Angular 21. Se solventó implementando la función intermedia toSignal().  

```

```
