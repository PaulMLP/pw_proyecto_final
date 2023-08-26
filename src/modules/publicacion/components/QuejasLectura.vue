<template>
  <div class="card">
    <Card
      style="width: 100%; margin-top: 2%; text-align: left"
      v-for="queja in quejas"
      :key="queja.id"
    >
      <template #title>
        {{ queja.estudianteTO.nombre }}
        {{ queja.estudianteTO.apellido }}</template
      >
      <template #subtitle>
        {{ formatearFecha(queja.fechaPublicacion) }}
      </template>
      <template #content>
        <p>
          {{ queja.descripcion }}
        </p>
      </template>
      <template #footer v-if="check">
        <Button
          icon="pi pi-trash"
          label="Eliminar"
          severity="secondary"
          raised
        />
      </template>
    </Card>
  </div>
</template>

<script>
import Card from "primevue/card";
import Button from "primevue/button";

export default {
  components: { Card, Button },

  data() {
    return {
      fechaFormato: null,
    };
  },

  props: {
    check: {
      type: Boolean,
      required: true,
    },
    quejas: {
      type: Object,
      required: true,
    },
  },

  methods: {
    formatearFecha(fecha) {
      return fecha.replace("T", " / ");
    },
  },
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
