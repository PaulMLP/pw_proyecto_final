<template>
  <div>
    <div class="contenedor-tabla">
      <DataTable
        :value="estudiantes"
        tableStyle="min-width: 50rem;"
        class="tabla"
      >
        <template #header>
          <span style="font-size: 1.5rem">Estudiantes</span>
        </template>
        <Column field="cedula" header="Cédula"></Column>
        <Column field="nombre" header="Nombre"></Column>
        <Column field="apellido" header="Apellido"></Column>
        <Column field="suscripcion" header="Suscripción">
          <template #body="slotProps">
            <Tag
              :severity="getSeverity(slotProps.data.suscripcion)"
              value="Suscripción"
            ></Tag>
          </template>
        </Column>
        <Column header="Image">
          <template #body="slotProps">
            <Avatar
              :image="slotProps.data.imagen"
              class="mr-2"
              size="xlarge"
              shape="circle"
            />
          </template>
        </Column>
        <Column header="Actualizar" style="width: 10%"
          ><template #body="slotProps">
            <Button
              icon="pi pi-pencil"
              raised
              @click="editarEstudiante(slotProps.data)"
          /></template>
        </Column>
        <Column header="Eliminar" style="width: 10%"
          ><template #body="slotProps">
            <Button
              icon="pi pi-trash"
              raised
              @click="confirmarEliminarEstudiante(slotProps.data.id)"
            /> </template
        ></Column>
      </DataTable>
      <ConfirmDialog />
    </div>
  </div>
</template>

<script>
import Button from "primevue/button";
import Column from "primevue/column";
import DataTable from "primevue/datatable";
import Avatar from "primevue/avatar";
import Tag from "primevue/tag";
import InputText from "primevue/inputtext";
import ConfirmDialog from "primevue/confirmdialog";
import EstudianteCrearFormulario from "@/components/EstudianteCrearFormulario.vue";
import { useConfirm } from "primevue/useconfirm";
import { obtenerTodosEstudiantesFachada } from "@/helpers/EstudiaCliente";
export default {
  components: {
    EstudianteCrearFormulario,
    Button,
    Column,
    DataTable,
    Avatar,
    Tag,
    InputText,
    ConfirmDialog,
  },
  data() {
    return {
      cedula: "",
      estudiantes: null,
      confirm: useConfirm(),
    };
  },
  async mounted() {
    this.estudiantes = await obtenerTodosEstudiantesFachada();
  },
  methods: {
    getSeverity(estado) {
      switch (estado) {
        case true:
          return "success";
        case false:
          return "danger";
      }
    },

    editarEstudiante(data) {
      this.$emit("getEstudiante", data);
    },
    confirmarEliminarEstudiante(e) {
      this.confirm.require({
        message: "Se eliminará el estudiante con id: " + e,
        header: "Confirmación de Eliminación",
        icon: "pi pi-exclamation-triangle",
        acceptClass: "p-button-danger",
        accept: () => {
          this.eliminarEstudiante(e);
        },
        reject: () => {
          console.log("rechazo");
        },
      });
    },
    eliminarEstudiante(e) {
      console.log("logica de eliminacion API");
    },
  },
};
</script>

<style scoped>
.contenedor-tabla {
  display: flex;
  justify-content: center;
}

.tabla {
  margin-top: 20px;
  width: 80%;
  box-shadow: 0 0 10px gray;
  border-radius: 5px;
  overflow: hidden;
}
</style>
