import axios from "axios";

/* Fachadas */
const obtenerQuejasFachada = async () => {
  return await obtenerQuejas();
};

const ingresarQuejaFachada = (bodyQueja) => {
  ingresarQueja(bodyQueja);
};

const actualizarQuejaFachada = (bodyQueja, id) => {
  actualizarQueja(bodyQueja, id);
};

const eliminarQuejaFachada = async (id) => {
  return await eliminarQueja(id);
};

/* Lambdas para CRUD */
const obtenerQuejas = async () => {
  const data = axios
    .get("http://localhost:8083/API/v1.0/Facultad/quejas")
    .then((r) => r.data);
  return data;
};

const ingresarQueja = (bodyQueja) => {
  axios
    .post(`http://localhost:8083/API/v1.0/Facultad/quejas`, bodyQueja)
    .then((r) => r.data);
};

const actualizarQueja = (bodyQueja, id) => {
  axios
    .put(`http://localhost:8083/API/v1.0/Facultad/quejas/${id}`, bodyQueja)
    .then((r) => r.data);
};

const eliminarQueja = async (id) => {
  const data = axios
    .delete(`http://localhost:8083/API/v1.0/Facultad/quejas/${id}`)
    .then((r) => r.data);
  return data;
};

export {
  obtenerQuejasFachada,
  ingresarQuejaFachada,
  actualizarQuejaFachada,
  eliminarQuejaFachada,
};
