<template>
  <form @submit="onSubmit" class="formulario">
    <span class="p-float-label">
      <InputText class="input" id="cedula" v-model="datos.cedula" type="text" />
      <label for="cedula">Cédula</label>
    </span>
    <small class="p-error" id="text-error">{{
      errorMessage || "&nbsp;"
    }}</small>

    <span class="p-float-label">
      <InputText class="input" id="nombre" v-model="datos.nombre" type="text" />
      <label for="nombre">Nombre</label>
    </span>
    <small class="p-error" id="text-error">{{
      errorMessage || "&nbsp;"
    }}</small>

    <span class="p-float-label">
      <InputText
        class="input"
        id="apellido"
        v-model="datos.apellido"
        type="text"
      />
      <label for="apellido">Apellido</label>
    </span>
    <small class="p-error" id="text-error">{{
      errorMessage || "&nbsp;"
    }}</small>

    <Button
      v-if="!opciones"
      label="Agregar Imagen"
      icon="pi pi-camera"
      style="margin-bottom: 10px"
      @click="abrirOpciones"
    />

    <div v-else class="cargar-imagen">
      <input ref="inputFile" id="foto" type="file" @change="eleccionImagen" />

      <Button
        icon="pi pi-image"
        class="agregar-imagen"
        :label="labelFile"
        @click="abrirSelector"
      />
      Ó
      <Button
        icon="pi pi-link"
        class="agregar-imagen"
        :label="labelFile"
        @click="abrirImagenUrl"
      />
    </div>
    <div>
      <div v-if="showUrl" class="urlInput">
        <InputText
          type="text"
          v-model="url"
          placeholder="Ingresa url de imagen"
          @keyup.enter="cargarImagen"
        />
        <Button icon="pi pi-arrow-circle-right" @click="cargarImagen" />
      </div>
    </div>
    <div v-if="datos.imagen">
      <Avatar :image="datos.imagen" class="mr-2" size="xlarge" shape="circle" />
    </div>
    <Button label="Confirmar" severity="success" raised @click="confirmar" />
  </form>
</template>

<script>
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Avatar from "primevue/avatar";
export default {
  components: { Dialog, Button, InputText, Avatar },
  data() {
    return {
      datos: { cedula: "", nombre: "", apellido: "", imagen: "" },

      errorMessage: "",
      // Mostrar opciones de seleccion de imagen
      opciones: false,

      // Texto del Label de Inptut file
      labelFile: "Elegir Imagen",

      //Variables de manejo de imagen
      imgFile: null,
      url: null,

      showUrl: false,
    };
  },

  props: {
    estudiante: {
      type: Object,
      required: true,
    },
  },

  mounted() {
    if (this.estudiante) {
      this.datos = this.estudiante;
      if (this.datos.imagen) {
        this.opciones = true;
      }
    }
  },

  methods: {
    abrirOpciones() {
      this.opciones = true;
    },

    eleccionImagen(event) {
      this.imgFile = event.target.files[0];

      if (this.imgFile) {
        const reader = new FileReader();
        reader.onload = (event) => {
          this.datos.imagen = event.target.result;
          this.opciones = true;
          this.showUrl = false;
          this.labelFile = "Cambiar Imagen";
        };
        reader.readAsDataURL(this.imgFile);
      } else {
        this.datos.imagen = "";
      }
    },

    abrirSelector() {
      this.$refs.inputFile.click();
    },

    abrirImagenUrl() {
      this.opciones = true;
      this.labelFile = "Cambiar Imagen";
      if (this.labelFile == "Cambiar Imagen") {
        this.imagen = "";
        this.url = "";
      }
      this.showUrl = true;
    },

    cargarImagen() {
      this.imagen = this.url;
      this.showUrl = false;
    },

    confirmar() {
      console.log(this.datos);
    },
  },
};
</script>

<style scoped>
.formulario {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2;
}

span {
  margin-top: 20px;
  width: 90%;
}

.input {
  width: 100%;
}

Button:hover {
  transform: scale(1.05);
}

.cargar-imagen {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 20px;
}

.urlInput {
  margin: 10px;
}

.agregar-imagen {
  transition: all 0.2s linear;
}

.agregar-imagen:hover {
  transform: scale(1.05);
}

#foto {
  display: none;
}
.mr-2 {
  margin: 15px;
}
</style>
