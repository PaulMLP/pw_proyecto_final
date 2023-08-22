import axios from "axios";

/* Fachadas */
const obtenerNoticiasFachada = async () => {
  return await obtenerNoticias();
};

const ingresarNoticiaFachada = (bodyNoticia) => {
  ingresarNoticia(bodyNoticia);
};

const actualizarNoticiaFachada = (bodyNoticia, id) => {
  actualizarNoticia(bodyNoticia, id);
};

const eliminarNoticiaFachada = async (id) => {
  return await eliminarNoticia(id);
};

/* Lambdas para CRUD */
const obtenerNoticias = async () => {
  const data = axios
    .get("http://localhost:8083/API/v1.0/Facultad/noticias")
    .then((r) => r.data);
  return data;
};

const ingresarNoticia = (bodyNoticia) => {
  axios
    .post(`http://localhost:8083/API/v1.0/Facultad/noticias`, bodyNoticia)
    .then((r) => r.data);
};

const actualizarNoticia = (bodyNoticia, id) => {
  axios
    .put(`http://localhost:8083/API/v1.0/Facultad/noticias/${id}`, bodyNoticia)
    .then((r) => r.data);
};

const eliminarNoticia = async (id) => {
  const data = axios
    .delete(`http://localhost:8083/API/v1.0/Facultad/noticias/${id}`)
    .then((r) => r.data);
  return data;
};

export {
  obtenerNoticiasFachada,
  ingresarNoticiaFachada,
  eliminarNoticiaFachada,
  actualizarNoticiaFachada,
};
