<script>
import { mapState, mapActions } from 'pinia'
import Documento from '@/views/Documento.vue'
import { documentosStore } from '@/stores/documentos.js'

export default {
   components: { Documento },
   data() {
     return {
        busquedaTitulo: '',
        busquedaPorAutor: '',
        buscaSinopsis: '',    
      };
  },
 computed: {
    ...mapState(documentosStore, ['documentos']),    
    filtroDeBusqueda() {
  const filtroDeDocumentos = this.documentos.filter((documento) =>
    documento.titulo.toLowerCase().includes(this.busquedaTitulo.toLowerCase()) &&
    documento.autor.toLowerCase().includes(this.busquedaPorAutor.toLowerCase()) &&
    documento.sinopsis.toLowerCase().includes(this.buscaSinopsis.toLowerCase())
  );
  return filtroDeDocumentos.slice(0, 6);
},
  },
  methods: {
    //para get
    ...mapActions(documentosStore, [ 'getDocumentos' ]),   
  },    
  created() {
      this.getDocumentos()
  }
};
</script>

<template>
      
       <img
        src="src/assets/logo_app_lite.png"
        class="img-fluid"
        alt="Descripción de la imagen"
      />
          <h5 class="d-none d-md-block">
            Biblioteca del EMAD. Consulta del catálogo.
          </h5>
         <br/>
           <h5>Consultar mis préstamos:  <button class="btn btn-lg btn-primary" type="button">Mis préstamos</button></h5>
        <br/>

  <div class="row">
      <div class="row">
      
  <div class="col-md-4 mb-3">
  <h5>Buscar por Título</h5>
    <input
      v-model="busquedaTitulo"
      type="text"
      placeholder="Buscar por Título (introduzca el Título)"
      class="form-control mb-3"
    />
  </div>
  <div class="col-md-4 mb-3">
   <h5>Buscar por Autor</h5>
    <input
      v-model="busquedaPorAutor"
      type="text"
      placeholder="Buscar por Autor (introduzca el Autor)"
      class="form-control mb-3"
    />
  </div>
  <div class="col-md-4 mb-3">
   <h5>Buscar por Sinópsis</h5>
    <input
      v-model="buscaSinopsis"
      type="text"
      placeholder="Buscar por Sinopsis (introduzca palabras clave de la Sinopsis)"
      class="form-control mb-3"
    />
  </div>
</div>
   
  </div>
  <div class="row">
    <div class="col-md-12">
      <table class="table table-striped table-hover table-bordered">
        <thead>
          <tr class="table-primary">
            <th>Título</th>
            <th>Autor</th>
            <th>Sinopsis</th>
            <th>Estantería</th>
            <th>Fecha alta</th>
            <th>Disponible</th>
            <th>Categoría</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="documento in filtroDeBusqueda" :key="documento.id">
            <td>{{ documento.titulo }}</td>
            <td>{{ documento.autor }}</td>
            <td>{{ documento.sinopsis }}</td>
            <td>{{ documento.estanteria }}</td>
            <td>{{ documento.fecha }}</td>
            <td>{{ documento.disponible }}</td>
            <td>{{ documento.categoria }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  
        <!-- <h5>Consultar mis préstamos</h5>
        <p class="d-none d-md-block">Botón mis préstamos</p> 

          <h4>Documentos/Elementos audiovisuales disponibles</h4>   
          <span>Esto lo pinta home</span>          
      <div v-for="documento of documentos">{{ documento.titulo }} - {{ documento.autor }} - {{ documento.sinopsis }}
                                          - {{ documento.estanteria }} - {{ documento.fecha }} - {{ documento.sinopsis }}</div> -->
                                          
      <!-- <Documento v-for="documento of documentos" :documento="documento">
      </Documento>  -->

</template>

<style scoped>
.container {
  width: 1800px;
  
}
</style>
