import { Routes } from '@angular/router';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { AgregarEstudianteComponent } from './estudiantes/agregar-estudiante.component';
import { CarrerasComponent } from './carreras/carreras.component';
import { AgregarCarreraComponent } from './carreras/agregar-carrera.component';
import { MateriasComponent } from './materias/estudiantes.component';
import { AgregarMateriaComponent } from './materias/agregar-materia.component';
export const routes: Routes = [
{path: '', component: EstudiantesComponent, pathMatch: 'full'}, // Ruta por defecto
  { path:'agregarEstudiante', component: AgregarEstudianteComponent},
  { path:'agregarEstudiante/:id', component: AgregarEstudianteComponent},

  // Rutas de Carreras
  { path:'carreras', component: CarrerasComponent},
  { path:'agregarCarrera', component: AgregarCarreraComponent},
  { path:'agregarCarrera/:id', component: AgregarCarreraComponent},

  // Rutas de Materias
  { path:'materias', component: MateriasComponent},
  { path:'agregarMateria', component: AgregarMateriaComponent},
  { path:'agregarMateria/:id', component: AgregarMateriaComponent},
//{path: '**', redirectTo: '', pathMatch: 'full'}, // Rutas no existentes
];
