export interface Categoria {
  id: number;
  nombre?: string;
}

export interface Tarea {
  id?: number;
  titulo: string;
  descripcion: string;
  completada: boolean;
  categoria: Categoria;
}
