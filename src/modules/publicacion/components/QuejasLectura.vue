<template>
  <div class="card">
    <Card
      class="contenido"
      style="width: 100%; margin-top: 2%; text-align: left"
      v-for="queja in quejas"
      :key="queja.id"
    >
      <template #title>
        <span id="nombres">
          {{ queja.estudianteTO.nombre }}
          {{ queja.estudianteTO.apellido }}</span
        >
      </template>
      <template #subtitle>
        <span id="fecha"> {{ formatearFecha(queja.fechaPublicacion) }}</span>
      </template>
      <template #content>
        <p>
          {{ queja.descripcion }}
        </p>
      </template>
      <template #footer v-if="check">
        <Button
          class="btn-eliminar"
          icon="pi pi-trash"
          label="Eliminar"
          severity="secondary"
          raised
        />
        <i class="pi pi-trash"></i>
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

#nombres {
  font-size: 4vmin;
}

#fecha {
  font-size: 2vmin;
}

.pi-trash {
  display: none;
  background: #64748b;
  color: white;
  padding: 5px;
  font-size: 2.5vmin;
  border-radius: 5px;
  box-shadow: 0px 1px 2px 1px gray;
  cursor: pointer;
}

.contenido p {
  font-size: 2.5vmin;
}

button {
  font-size: 2.5vmin;
}

@media screen and (max-width: 550px) {
  .btn-eliminar {
    display: none;
  }
  .pi-trash {
    display: inline-block;
  }
}
</style>
