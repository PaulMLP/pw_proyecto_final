<template>
  <div class="quejas">
    <div class="switch">
      <InputSwitch class="custom-inputswitch" v-model="checked" />
    </div>
    <div class="contenedor-formulario">
      <Button
        v-if="!agregarQueja"
        icon="pi pi-plus"
        label="Agregar Queja"
        raised
        @click="agregarQueja = true"
      />
      <QuejaFormulario
        v-if="agregarQueja"
        @cancelar="cancelarFormulario($event)"
      />
    </div>

    <div class="quejas-vista" v-if="!checked">
      <QuejasLectura v-if="quejas" :check="false" :quejas="quejas" />
    </div>
    <div class="admin" v-else>
      <QuejasLectura v-if="quejas" :check="true" :quejas="quejas" />
    </div>
  </div>
</template>

<script>
import InputSwitch from "primevue/inputswitch";
import QuejaFormulario from "../components/QuejaFormulario.vue";
import Card from "primevue/card";
import Button from "primevue/button";
import QuejasLectura from "../components/QuejasLectura.vue";
import { obtenerQuejasFachada } from "@/modules/publicacion/helpers/QuejaCliente";
export default {
  components: { QuejaFormulario, InputSwitch, Card, Button, QuejasLectura },
  data() {
    return {
      //Cambiar entre Admin y Lectura
      checked: true,
      agregarQueja: false,
      quejas: null,
    };
  },

  async created() {
    this.quejas = await obtenerQuejasFachada();
  },

  methods: {
    cancelarFormulario(event) {
      this.agregarQueja = event;
    },
  },
};
</script>

<style scoped>
.quejas {
  background: rgb(234, 234, 234);
  padding-bottom: 20px;
}

.switch {
  position: absolute;
  left: 10px;
  padding: 10px 0px;
}

.contenedor-formulario {
  margin-top: 40px;
}

.quejas-vista,
.admin,
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.quejas-vista,
.admin {
  margin-top: 40px;
}

.card {
  width: 90%;
  gap: 20px;
}

@media screen and (max-width: 500px) {
}
</style>
