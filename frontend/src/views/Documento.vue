<script>
import { mapActions, mapState } from 'pinia'
import axios from 'axios'
import { documentosStore } from '@/stores/documentos.js'

export default {
  props: [ 'documento' ],   
  data() {
    return{
        busquedaTitulo: '',       
      };
  },
 computed: {
    ...mapState(documentosStore, ['documentos']),    
    filtroDeBusqueda() {
 const filtroDeDocumentos = this.documentos.filter((documento) =>
    documento.titulo.toLowerCase().includes(this.busquedaTitulo.toLowerCase())    
  );
   return filtroDeDocumentos.slice(0, 4);
},
  },
 methods: {   
  }
}
</script>

<template>
  

  <h5>Buscar por Título</h5>
    <input
      v-model="busquedaTitulo"
      type="text"
      placeholder="Buscar por Título (introduzca el Título)"
      class="form-control mb-3"/>


<div v-for="documento in filtroDeBusqueda" :key="documento.id" class="card m-0 p-0">
        <div class="card-header text-primary"><strong>Título: </strong>{{ documento.titulo }}</div>            
           <div class="card-body">	            						
          <p class="mb-0"><strong>Autor: </strong>{{ documento.autor }}</p>
          <p class="mb-0"><strong>Sinopsis: </strong>{{ documento.sinopsis }}</p>
          <p class="mb-0"><strong>estantería: </strong>{{ documento.estanteria }}</p>
          <p class="mb-0"><strong>Fecha: </strong>{{ documento.fecha }}</p>
          <p class="mb-0"><strong>Categoría: </strong>{{ documento.categoria }}</p>
        </div>
</div>

</template>