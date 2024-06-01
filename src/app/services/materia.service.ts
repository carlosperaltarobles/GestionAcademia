import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ENDPOINTS } from '../utils/endponts';
import { Materia } from '../interfaces/materia.interface';
@Injectable({
  providedIn: 'root',
})
export class MateriasService {
  private readonly http = inject(HttpClient);
  constructor() {}
  // Obtener lista de Materias
  materias() {
    return this.http.get<Materia[]>(ENDPOINTS.materias);
  }
  // Obtener Materia por ID
  obtenerMaterias(id: number) {
    return this.http.get<Materia>(
      ENDPOINTS.obtenerMateria.replace(':id', id.toString())
    );
  }
  // Insertar Materia
  agregarMateria(materia: Materia) {
    // Se arma el objeto a enviar
    let body = {
      nombre: materia.nombre,
    };
    return this.http.post<any>(ENDPOINTS.agregarMateria, body);
  }
  // Eliminar un estudiante
  eliminarMateria(id: number) {
    return this.http.delete<any>(
      ENDPOINTS.eliminarMateria.replace(':id', id.toString())
    );
  }

  // Actualizar estudiante
  actualizarMateria(id: number, materia: Materia) {
    // Se arma el objeto a enviar
    let body = {
      nombre: materia.nombre,
    };
    return this.http.put<number>(
      ENDPOINTS.actualizarMateria.replace(':id', id.toString()),
      body
    );
  }
}
