<script>
import { mapActions, mapState } from "pinia";
import axios from "axios";
import { prestamosStore } from "@/stores/prestamos.js";

export default {
  props: ["prestamo"],
  emits: ["borrarPrestamo"],
  data() {
    return {
      busquedaTitulo: "",
    };
  },
  computed: {
    ...mapState(prestamosStore, ["prestamos"]),
    filtroDeBusqueda() {
      const filtroDePrestamos = this.prestamos.filter((prestamo) =>
        prestamo.titulo
          .toLowerCase()
          .includes(this.busquedaTitulo.toLowerCase())
      );
      //  return filtroDeDocumentos.slice(0, 4);
      return filtroDePrestamos;
    },
  },
  methods: {
    confirmarBorrado(prestamo) {
      debugger;
      if (confirm("¿Estás seguro de que deseas borrar este préstamo?")) {
        this.$emit("borrarPrestamo", prestamo);
      }
    },

    editarPrestamo(prestamo){
      debugger;
      this.$emit('editarPrestamo', prestamo)
    }
  },
};
</script>

<template>
  <h5>Buscar por Título</h5>
  <input v-model="busquedaTitulo" type="text" placeholder="Buscar por Título (introduzca el Título)" class="form-control mb-3"/>

  <div v-for="prestamo in filtroDeBusqueda" :key="prestamo.id" class="card m-0 p-0">
    <div class="card-header text-primary">
      <strong>Título: </strong>{{ prestamo.titulo }}
    </div>
    <div class="card-body">
      <div class="contenedor d-flex justify-content-end">
        <!-- Botón editar -->    
        <!-- <button type="button" class="btn btn-warning" @click="editarPrestamo(prestamo)">Editar</button> -->
      </div>

      <p class="mb-0"><strong>Id Préstamo: </strong>{{ prestamo.idPrestamo }}</p>
      <p class="mb-0"><strong>Autor Obra: </strong>{{ prestamo.autor }}</p>
      <p class="mb-0"><strong>Categoria: </strong>{{ prestamo.categoria}}</p>
      <p class="mb-0"><strong>Id Usuario: </strong>{{ prestamo.idUsuario }}</p>
      <p class="mb-0"><strong>Nombre Usuario: </strong>{{ prestamo.nombre }}</p>
      <p class="mb-0"><strong>Apellidos Usuario: </strong>{{ prestamo.apellidos }}</p>
      <p class="mb-0"><strong>Fecha Inicio Préstamo: </strong>{{ prestamo.fechaInicio }}</p>   
      <p class="mb-0"><strong>Fecha Fin Préstamo: </strong>{{ prestamo.fechaFin }}</p>    

    </div>
  </div>
</template>

<style>
.contenedor button {
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 0;
  padding-bottom: 0;
  margin-right: 10px;
}
</style>