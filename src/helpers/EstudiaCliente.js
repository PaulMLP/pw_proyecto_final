import axios from "axios";

/* Fachadas */

const obtenerTodosEstudiantesFachada = async () => {
  return await obtenerTodosEstudiantes();
};
const obtenerEstudianteFachada = async (cedula) => {
  return await obtenerEstudiante(cedula);
};

const ingresarEstudianteFachada = (bodyEstudiante) => {
  ingresarEstudiante(bodyEstudiante);
};

const actualizarEstudianteFachada = (bodyEstudiante, id) => {
  actualizarEstudiante(bodyEstudiante, id);
};

const eliminarEstudianteFachada = async (id) => {
  return await eliminarEstudiante(id);
};

/* Lambdas para CRUD */
const obtenerTodosEstudiantes = async () => {
  const data = axios
    .get(`http://localhost:8083/API/v1.0/Facultad/estudiantes`)
    .then((r) => r.data);
  return data;
};

const obtenerEstudiante = async (cedula) => {
  const data = axios
    .get(`http://localhost:8083/API/v1.0/Facultad/estudiantes/${cedula}`)
    .then((r) => r.data);
  console.log(data);
  return data;
};

const ingresarEstudiante = (bodyEstudiante) => {
  axios
    .post(`http://localhost:8083/API/v1.0/Facultad/estudiantes`, bodyEstudiante)
    .then((r) => r.data);
};

const actualizarEstudiante = (bodyEstudiante, id) => {
  axios
    .put(
      `http://localhost:8083/API/v1.0/Facultad/estudiantes/${id}`,
      bodyEstudiante
    )
    .then((r) => r.data);
};

const eliminarEstudiante = async (id) => {
  const data = axios
    .delete(`http://localhost:8083/API/v1.0/Facultad/estudiantes/${id}`)
    .then((r) => r.data);
  return data;
};

export {
  obtenerTodosEstudiantesFachada,
  obtenerEstudianteFachada,
  ingresarEstudianteFachada,
  actualizarEstudianteFachada,
  eliminarEstudianteFachada,
};
