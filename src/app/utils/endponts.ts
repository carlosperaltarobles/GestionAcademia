import { environment } from '../../environments/environment.development';

export const ENDPOINTS = {
  agregarEstudiante: environment.serverUrl
  .concat('/api/estudiantes/agregarEstudiante'),
  actualizarEstudiante: environment.serverUrl
  .concat('/api/estudiantes/actualizarEstudiante/:id'),
  eliminarEstudiante: environment.serverUrl
  .concat('/api/estudiantes/eliminarEstudiante/:id'),
  obtenerEstudiantes: environment.serverUrl
  .concat('/api/estudiantes/consultarEstudiante/:id'),
  estudiantes: environment.serverUrl
  .concat('/api/estudiantes/estudiantes'),

  // carreras endpoints
  carreras: environment.serverUrl.concat('/api/Carreras'),
  obtenerCarrera: environment.serverUrl.concat('/api/Carrera/:id'),
  agregarCarrera: environment.serverUrl.concat('/api/AgregarCarrera'),
  actualizarCarrera: environment.serverUrl.concat('/api/Carrera/:id'),
  eliminarCarrera: environment.serverUrl.concat('/api/Carrera/:id'),

  // grupos endpoints
  grupos: environment.serverUrl.concat('/api/Grupos'),
  obtenerGrupo: environment.serverUrl.concat('/api/Grupo/:id'),
  agregarGrupo: environment.serverUrl.concat('/api/AgregarGrupo'),
  actualizarGrupo: environment.serverUrl.concat('/api/Grupo/:id'),
  eliminarGrupo: environment.serverUrl.concat('/api/Grupo/:id'),

  // materias endpoints
  materias: environment.serverUrl.concat('/api/Materias'),
  obtenerMateria: environment.serverUrl.concat('/api/Materia/:id'),
  agregarMateria: environment.serverUrl.concat('/api/AgregarMateria'),
  actualizarMateria: environment.serverUrl.concat('/api/Materia/:id'),
  eliminarMateria: environment.serverUrl.concat('/api/Materia/:id'),
};
