<script>

import { mapState, mapActions } from 'pinia'
// import axios from 'axios'
 import Documento from '@/views/Documento.vue'
 import { documentosStore } from '@/stores/documentos.js'

export default {
   components: { Documento },
//  components: { BasicLayout },
   data() {
    return {
    
    }
  },
 computed: {
    ...mapState(documentosStore, ['documentos'])   

  },
  methods: {
    //para get
    ...mapActions(documentosStore, [ 'getDocumentos']),   
  },    
  created() {
      this.getDocumentos()
  }
};

</script>

<template>
    <div class="container">
       <img
        src="src/assets/logo_app_lite.png"
        class="img-fluid"
        alt="Descripción de la imagen"/>
      <section class="contenedor-main row align-items-center">
        <main class="col-md-8">     

          <h5 class="d-none d-md-block">
            Encuentre el documento/libro o elemento audiovisual que necesita
          </h5>
          <br />
          <p class="d-block d-md-none"></p>
          <p>Búsqueda por autor</p>
          <p>Búsqueda por título</p>
          <br /><br />
        </main>

        <aside class="col-md-4">
          <h5>Consultar mis préstamos</h5>
          <p class="d-none d-md-block">Mis préstamos</p>
          <p class="d-block d-md-none"></p>
        </aside>
      </section>

      <section class="row">
        <div class="col">
          <h4>Documentos/Elementos audiovisuales disponibles</h4>   
          <span>Esto lo pinta home</span>          
      <div v-for="documento of documentos">{{ documento.autor }}</div>
      <div v-for="documento of documentos">{{ documento }}</div>
      
      <!-- Componente documento -->
      <!-- <Documento v-for="documento of documentos" :documento="documento">
      </Documento>  -->
      </div>
      </section>
    </div>
</template>

<style scoped>
.container {
  width: 1800px;  
}
</style>
