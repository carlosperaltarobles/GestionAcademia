import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ENDPOINTS } from '../utils/endponts';
import { Carrera } from '../interfaces/carrera.interface';
@Injectable({
  providedIn: 'root',
})
export class CarrerasService {
  private readonly http = inject(HttpClient);
  constructor() {}
  // Obtener lista de carreras
  carreras() {
    return this.http.get<Carrera[]>(ENDPOINTS.carreras);
  }
  // Obtener Carrera por ID
  obtenerCarreras(id: number) {
    return this.http.get<Carrera>(
      ENDPOINTS.obtenerCarrera.replace(':id', id.toString())
    );
  }
  // Insertar Carrera
  agregarCarrera(carrera: Carrera) {
    // Se arma el objeto a enviar
    let body = {
      nombre: carrera.nombre,
      codigo: carrera.codigo,
    };
    return this.http.post<any>(ENDPOINTS.agregarCarrera, body);
  }
  // Eliminar un estudiante
  eliminarCarrera(id: number) {
    return this.http.delete<any>(
      ENDPOINTS.eliminarCarrera.replace(':id', id.toString())
    );
  }

  // Actualizar estudiante
  actualizarCarrera(id: number, carrera: Carrera) {
    // Se arma el objeto a enviar
    let body = {
      nombre: carrera.nombre,
      codigo: carrera.codigo,
    };
    return this.http.put<number>(
      ENDPOINTS.actualizarCarrera.replace(':id', id.toString()),
      body
    );
  }
}
