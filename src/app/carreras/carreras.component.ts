import { Component, OnInit, inject } from '@angular/core';
import { CarrerasService } from '../services/carrera.service';
import { CommonModule } from '@angular/common';
import { Carrera } from '../interfaces/carrera.interface';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { parsearErroresAPI } from '../utils/Utilities';
@Component({
  selector: 'app-carreras',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carreras.component.html',
  styleUrl: './carreras.component.scss',
})
export class CarrerasComponent implements OnInit {
  // Inyeccion de dependecias
  private readonly CarrerasService = inject(CarrerasService);
  private readonly router = inject(Router);
  // Arreglo para almacenar el listado de Carreras
  lstCarreras: Carrera[];
  constructor() {
    // Es necesario inicializar el arreglo anteriormente creado
    this.lstCarreras = [];
  }
  ngOnInit(): void {
    this.getAllCarreras();
  }
  // Obtener lista de Carreras
  getAllCarreras() {
    this.CarrerasService.carreras().subscribe({
      // Se evalua que la respuesta del endpoint sea exitosa
      next: (temp) => {
        // Se asigna la lista al arreglo anteriormente descrito
        this.lstCarreras = temp;
      },
      // En caso de error
      error: (err) => {
        console.log('No se pudo obtener informacion');
      },
    });
  }
  // Metodo que permite navegar al formulario para insertar Carreras
  navigateToForm() {
    this.router.navigate(['/agregarCarrera']);
  }
  // Eliminar un Carrera
  deleteCarrera(event: any) {
    Swal.fire({
      title: '¿Quiere eliminar este registro?',
      text: 'Esta acción no se puede revertir',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
      showLoaderOnConfirm: true,
    }).then((result) => {
      if (result.isConfirmed) {
        this.CarrerasService
          .eliminarCarrera(event.target.value)
          .subscribe({
            // En caso exitoso
            next: (temp) => {
              Swal.fire('Eliminado', 'Registro eliminado con exito', 'success');
              // Refrescamos la lista de Carreras
              this.getAllCarreras();
            },
            // En caso erroneo
            error: (err) => {
              Swal.fire({
                icon: 'error',
                title: 'Error al eliminar',
                text: parsearErroresAPI(err).toString(),
              });
            },
          });
      }
    });
  }
  /*** Metodo que permite viajar al componente para agregar un Carrera (pero en
modo edicion).*/

  updateCarrera(valor: number) {
    // Viajando al componente agregar Carrera
    // Primero se valida que exista un valor (es decir que sea distinto de nulo)
    if (valor) {
      // Como puede notar, ahora se anexa un valor a la redireccion. Ej. /agregarCarrera/3;
      this.router.navigate(['/agregarCarrera', valor]);
    }
  }
}
