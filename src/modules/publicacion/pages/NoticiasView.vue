<template>
  <div class="noticias">
    <div class="switch">
      <InputSwitch class="custom-inputswitch" v-model="checked" />
    </div>

    <div v-if="!checked" class="noticias-vista">
      <span class="p-input-icon-left">
        <i class="pi pi-search" />
        <InputText
          v-model="busqueda"
          placeholder="Buscar por titulo"
          @keyup="filtrarNoticias"
        />
      </span>
      <div class="contraer">
        <Button
          :icon="iconContraer"
          :label="labelColapso"
          severity="secondary"
          raised
          @click="contraer"
        />
      </div>
      <NoticiaLectura
        v-for="noticia in noticiasAux"
        :key="noticia.id"
        :noticia="noticia"
        :panelCollapsed="colapsado"
        :editable="false"
      />
    </div>

    <div class="editor" v-else>
      <Button
        icon="pi pi-plus"
        v-if="!noticiaEditor && checked"
        label="Agregar Noticia"
        raised
        @click="addNoticia"
      />

      <NoticiaEditor
        class="componente"
        v-if="noticiaEditor"
        :noticia="noticia"
        :guardar="guardar"
      />
      <Button
        v-if="noticiaEditor"
        icon="pi pi-times"
        label="Cancelar"
        severity="secondary"
        raised
        @click="cancelar"
      />
    </div>
    <div v-if="!noticiaEditor && checked" class="noticias-vista">
      <span class="p-input-icon-left">
        <i class="pi pi-search" />
        <InputText
          v-model="busqueda"
          placeholder="Buscar por titulo"
          @keyup="filtrarNoticias"
        />
      </span>
      <div class="contraer">
        <div class="filtro-fecha">
          <i class="pi pi-calendar" />
          <Dropdown
            class="opciones-fecha"
            v-model="fechaSeleccionada"
            :options="fechas"
            showClear
            optionLabel="name"
            placeholder="Selecciona"
          />
          <Button
            icon="pi pi-filter"
            severity="secondary"
            raised
            @click="filtrarPorFecha"
          ></Button>
        </div>

        <Button
          :icon="iconContraer"
          :label="labelColapso"
          severity="secondary"
          raised
          @click="contraer"
        />
      </div>
      <NoticiaLectura
        v-for="noticia in noticiasAux"
        :key="noticia.id"
        :noticia="noticia"
        :panelCollapsed="colapsado"
        :editable="true"
        @editar="editarNoticia($event)"
      />
    </div>
  </div>
</template>

<script>
import { obtenerNoticiasFachada } from "@/modules/publicacion/helpers/NoticiaCliente";
import SelectButton from "primevue/selectbutton";
import InputSwitch from "primevue/inputswitch";
import Button from "primevue/button";
import NoticiaEditor from "../components/NoticiaEditor.vue";
import NoticiaLectura from "../components/NoticiaLectura.vue";
import Panel from "primevue/panel";
import InputText from "primevue/inputtext";
import Dropdown from "primevue/dropdown";

export default {
  components: {
    SelectButton,
    InputSwitch,
    InputText,
    Button,
    NoticiaEditor,
    NoticiaLectura,
    Panel,
    Dropdown,
  },
  data() {
    return {
      iconContraer: "pi pi-minus",
      colapsado: false,
      labelColapso: "Contraer Todo",

      //Valor de busqueda
      busqueda: "",

      //Abrir editor de noticia
      noticiaEditor: false,

      //Array de objetos noticia
      noticias: [],
      noticiasAux: [],

      //Noticia de Panel
      noticia: null,

      //Cambiar entre Admin y Lectura
      checked: true,

      //Boolean que indica si guardar los datos de la noticia
      guardar: false,

      fechaSeleccionada: null,
      fechas: [
        { name: "Todo el tiempo", code: "TT" },
        { name: "Hoy", code: "HY" },
        { name: "Ultimos 7 dias", code: "U7" },
        { name: "Ultimo mes", code: "UM" },
        { name: "Este año", code: "EA" },
      ],
    };
  },
  async mounted() {
    this.noticias = await obtenerNoticiasFachada();
    this.noticiasAux = this.noticias;
  },
  methods: {
    contraer() {
      if (this.colapsado) {
        this.iconContraer = "pi pi-minus";
        this.labelColapso = "Contraer Todo";
        this.colapsado = false;
      } else {
        this.iconContraer = "pi pi-plus";
        this.labelColapso = "Ampliar Todo";
        this.colapsado = true;
      }
    },

    addNoticia() {
      this.noticiaEditor = !this.noticiaEditor;
      this.guardar = false;
    },

    editarNoticia(ntc) {
      this.noticiaEditor = true;
      this.noticia = ntc;
    },

    cancelar() {
      this.noticiaEditor = false;
    },

    filtrarPorFecha() {
      if (this.fechaSeleccionada) {
        console.log(this.fechaSeleccionada.code);
      } else {
        console.log("No se selecciono.");
      }
    },

    filtrarNoticias() {
      if (this.busqueda) {
        this.noticiasAux = this.noticias.filter((noticia) =>
          noticia.titulo.toLowerCase().includes(this.busqueda.toLowerCase())
        );
      } else {
        this.noticiasAux = this.noticias;
      }
    },
  },
};
</script>

<style scoped>
.editor {
  padding-top: 50px;
}

.noticias,
.editor,
.componente {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.componente,
.editor {
  justify-content: center;
  width: 100%;
}

.filtro-fecha {
  display: flex;
  align-items: center;
  gap: 10px;
}

.opciones-fecha {
  display: flex;
  align-items: center;
  height: 30px;
}

.contraer {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 90%;
  margin-top: 30px;
}

.contraer button {
  margin: 0;
  height: 30px;
}

.noticias-vista {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  width: 90%;
}

.switch {
  position: absolute;
  left: 10px;
  padding: 10px 0px;
}

button {
  margin-top: 30px;
  background: #3744b3;
  transition: all 0.3s linear;
}

button:hover {
  transform: scale(1.05);
}
</style>
