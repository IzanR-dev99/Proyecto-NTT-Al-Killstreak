import { Component, computed, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { TareaApi } from '../../services/tarea-api';
import { Tarea } from '../../models/tarea';

@Component({
  selector: 'app-tareas',
  imports: [ReactiveFormsModule],
  templateUrl: './tareas.html',
  styleUrl: './tareas.css'
})
export class Tareas {
  tareas = signal<Tarea[]>([]);
  tareaSeleccionada = signal<Tarea | null>(null);
  mensaje = signal<string>('');
  error = signal<string>('');
  cargando = signal<boolean>(false);

  totalTareas = computed(() => this.tareas().length);

  tareasCompletadas = computed(() =>
    this.tareas().filter(tarea => tarea.completada).length
  );

  formulario!: any;

  constructor(
    private fb: FormBuilder,
    private tareaApi: TareaApi
  ) {
    this.formulario = this.fb.nonNullable.group({
      id: [1, [Validators.required]],
      titulo: ['', [Validators.required, Validators.minLength(3)]],
      descripcion: [''],
      completada: [false],
      categoriaId: [1, [Validators.required]]
    });
  }

  mostrarTodas(): void {
    this.cargando.set(true);
    this.error.set('');
    this.mensaje.set('');
    this.tareaSeleccionada.set(null);

    this.tareaApi.getAll().subscribe({
      next: (tareas) => {
        this.tareas.set(tareas);
        this.mensaje.set('Tareas cargadas correctamente.');
        this.cargando.set(false);
      },
      error: () => {
        this.error.set('Error al cargar las tareas.');
        this.cargando.set(false);
      }
    });
  }

  mostrarPorId(): void {
    const id = this.formulario.controls.id.value;

    this.cargando.set(true);
    this.error.set('');
    this.mensaje.set('');

    this.tareaApi.getById(id).subscribe({
      next: (tarea) => {
        this.tareaSeleccionada.set(tarea);
        this.mensaje.set(`Tarea con ID ${id} encontrada.`);
        this.cargando.set(false);
      },
      error: () => {
        this.tareaSeleccionada.set(null);
        this.error.set(`No existe ninguna tarea con ID ${id}.`);
        this.cargando.set(false);
      }
    });
  }

  crear(): void {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      this.error.set('Revisa los campos del formulario.');
      return;
    }

    const datos = this.formulario.getRawValue();

    const nuevaTarea: Tarea = {
      titulo: datos.titulo,
      descripcion: datos.descripcion,
      completada: datos.completada,
      categoria: {
        id: datos.categoriaId
      }
    };

    this.cargando.set(true);
    this.error.set('');
    this.mensaje.set('');

    this.tareaApi.create(nuevaTarea).subscribe({
      next: (tareaCreada) => {
        this.mensaje.set(`Tarea creada con ID ${tareaCreada.id}.`);
        this.cargando.set(false);
        this.mostrarTodas();
      },
      error: () => {
        this.error.set('No se pudo crear la tarea. Revisa que exista la categoría indicada.');
        this.cargando.set(false);
      }
    });
  }

  actualizar(): void {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      this.error.set('Revisa los campos del formulario.');
      return;
    }

    const datos = this.formulario.getRawValue();

    const tareaActualizada: Tarea = {
      id: datos.id,
      titulo: datos.titulo,
      descripcion: datos.descripcion,
      completada: datos.completada,
      categoria: {
        id: datos.categoriaId
      }
    };

    this.cargando.set(true);
    this.error.set('');
    this.mensaje.set('');

    this.tareaApi.update(datos.id, tareaActualizada).subscribe({
      next: () => {
        this.mensaje.set(`Tarea con ID ${datos.id} actualizada.`);
        this.cargando.set(false);
        this.mostrarTodas();
      },
      error: () => {
        this.error.set(`No se pudo actualizar la tarea con ID ${datos.id}.`);
        this.cargando.set(false);
      }
    });
  }

  borrar(): void {
    const id = this.formulario.controls.id.value;

    this.cargando.set(true);
    this.error.set('');
    this.mensaje.set('');

    this.tareaApi.delete(id).subscribe({
      next: () => {
        this.mensaje.set(`Tarea con ID ${id} borrada.`);
        this.tareaSeleccionada.set(null);
        this.tareas.update(tareasActuales =>
          tareasActuales.filter(tarea => tarea.id !== id)
        );
        this.cargando.set(false);
      },
      error: () => {
        this.error.set(`No se pudo borrar la tarea con ID ${id}.`);
        this.cargando.set(false);
      }
    });
  }

  cargarEnFormulario(tarea: Tarea): void {
    this.formulario.patchValue({
      id: tarea.id ?? 1,
      titulo: tarea.titulo,
      descripcion: tarea.descripcion,
      completada: tarea.completada,
      categoriaId: tarea.categoria.id
    });
  }
}
