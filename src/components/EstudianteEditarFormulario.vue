<template>
  <Dialog
    v-model:visible="visible"
    modal
    header="Editar Estudiante"
    :style="{ width: '50vw' }"
    @hide="onDialogHide"
  >
    <EstudianteFormulario :estudiante="estudiante" />
  </Dialog>
</template>

<script>
import Dialog from "primevue/dialog";
import EstudianteFormulario from "./EstudianteFormulario.vue";
export default {
  components: { Dialog, EstudianteFormulario },
  data() {
    return {
      visible: false,
      datos: null,
    };
  },

  props: {
    visibilidad: {
      type: Boolean,
      required: true,
    },
    estudiante: {
      type: Object,
      required: true,
    },
  },

  mounted() {
    this.visible = this.visibilidad;
  },

  methods: {
    onDialogHide() {
      if (!this.visible) {
        this.$emit("modal", false);
      }
    },
  },
};
</script>

<style scoped></style>
