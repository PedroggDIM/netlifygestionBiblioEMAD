<script>
import Calendar from 'primevue/calendar'
import inputDocumental from '@/components/inputDocumental.vue'
import { guardarDocumento } from '@/stores/api-service.js'
import { documentosStore } from '@/stores/documentos.js'
import { mapActions } from 'pinia'

export default {
  components: {
    Calendar,
    inputDocumental,
      },
  data() {
    return {
      documento: {
        id: '',
        titulo: '',
        autor: '',
        sinopsis: '',
        estanteria: 0,
        fecha: '',
        disponible: [],
        categoria: []
        }
    }   
  },
  methods: { 
    ...mapActions(documentosStore, ['guardarDocumento', 'getDocumentos']),
procesarFormulario() {
    console.log(this.documento)
    if(this.documento.titulo.trim() === ""){
      console.log('nombre vacío')
      return
    }
    console.log('no está vacío')

this.documento.id = shortid.generate()
console.log(this.documento.id)

    this.documento = {
        id: '',
        titulo: '',
        autor: '',
        sinopsis: '',
        estanteria: 0,
        fecha: '',
        disponible: [],
        categoria: []
    }
  },
 fGuardarDocumento(documento) {
      console.log(documento);
      debugger;
    
      this.guardarDocumento(documento).then(r => {
        debugger;
        if (r.status == 200) {
          this.getDocumentos();
        }
      });
    }
}
};
</script>

<template>
<h4>Gestión de los documentos de la biblioteca (grabación, edición y borrado del catálogo)</h4>   
<form class="mt-3" @submit.prevent="procesarFormulario">

   <!-- <inputDocumental :documento="documento" > </inputDocumental> -->
   <inputDocumental :documento="documento" @guardarDocumento="fGuardarDocumento"> </inputDocumental>
 
  <div>
    <p>{{documento}}</p>
  </div>
<hr>

</form>
</template>

<style scoped>
h4 {
  /* margin-top: 150px;    */
}
.form-control {
 /* width: 800px;   */
}
p {
  margin-top: 5px; 
  margin-bottom: 0px;
  
}
</style>