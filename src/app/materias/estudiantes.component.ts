import { Component, OnInit, inject } from '@angular/core';
import { MateriasService } from '../services/materia.service';
import { CommonModule } from '@angular/common';
import { Materia } from '../interfaces/materia.interface';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { parsearErroresAPI } from '../utils/Utilities';
@Component({
  selector: 'app-materias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './materias.component.html',
  styleUrl: './materias.component.scss',
})
export class MateriasComponent implements OnInit {
  // Inyeccion de dependecias
  private readonly materiasService = inject(MateriasService);
  private readonly router = inject(Router);
  // Arreglo para almacenar el listado de Materias
  lstMaterias: Materia[];
  constructor() {
    // Es necesario inicializar el arreglo anteriormente creado
    this.lstMaterias = [];
  }
  ngOnInit(): void {
    this.getAllMaterias();
  }
  // Obtener lista de Materias
  getAllMaterias() {
    this.materiasService.materias().subscribe({
      // Se evalua que la respuesta del endpoint sea exitosa
      next: (temp) => {
        // Se asigna la lista al arreglo anteriormente descrito
        this.lstMaterias = temp;
      },
      // En caso de error
      error: (err) => {
        console.log('No se pudo obtener informacion');
      },
    });
  }
  // Metodo que permite navegar al formulario para insertar Materias
  navigateToForm() {
    this.router.navigate(['/agregarMateria']);
  }
  // Eliminar un Materia
  deleteMateria(event: any) {
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
        this.materiasService
          .eliminarMateria(event.target.value)
          .subscribe({
            // En caso exitoso
            next: (temp) => {
              Swal.fire('Eliminado', 'Registro eliminado con exito', 'success');
              // Refrescamos la lista de Materias
              this.getAllMaterias();
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
  /*** Metodo que permite viajar al componente para agregar un Materia (pero en
modo edicion).*/

  updateMateria(valor: number) {
    // Viajando al componente agregar Materia
    // Primero se valida que exista un valor (es decir que sea distinto de nulo)
    if (valor) {
      // Como puede notar, ahora se anexa un valor a la redireccion. Ej. /agregarMateria/3;
      this.router.navigate(['/agregarMateria', valor]);
    }
  }
}
