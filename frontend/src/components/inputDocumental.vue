<script>
import Calendar from 'primevue/calendar'
import { mapState, mapActions } from 'pinia'
import Documento from '@/views/Documento.vue'
import { documentosStore } from '@/stores/documentos.js'

export default {
   components: {  
    Calendar, Documento  
  },
  data() {
     return {
       
      };
  },
   props: {
     documento: Object
   },
   computed: {
        ...mapState(documentosStore, ['documentos']),    
  bloquear(){
    if(this.documento.titulo.trim() === "" || 
       this.documento.autor.trim() === "" ||
       this.documento.sinopsis.trim() === "" ||
       this.documento.estanteria === 0 ||
       this.documento.fecha === "" ||
       this.documento.categoria.length === 0)
    return true
    else {
        return false
    } 
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
<div class="container-fluid">         
  <div class="row">
    <div class="col-12 col-sm-5 fondoFormularioGraba">
     <h5 class="margeninput">Formulario de grabación de documentos</h5>
     <p class="margeninput">Título</p>
       <input type="text" placeholder="Introduzca el título" class="form-control" v-model.trim="documento.titulo">
     <p class="margeninput">Autor</p>
        <input type="text" placeholder="Introduzca el autor" class="form-control" v-model.trim="documento.autor">
     <p class="margeninput">Sinopsis</p>
        <textarea placeholder="Introduzca la sinposis" class="form-control" v-model.trim="documento.sinopsis"></textarea>
     <p class="margeninput">Estantería</p>
        <input type="number" placeholder="Introduzca número de estantería" class="form-control" v-model.number="documento.estanteria">
     <p class="margeninput">Fecha de alta</p>
        <Calendar v-model.trim="documento.fecha" dateFormat="dd/MM/yy" ></Calendar> 
          <div class="my-2">
            <p class="margeninput">Seleccione el tipo de documento</p>
            <div class="form-radio form-radio-inline">
              <input type="radio" class="form-check-input" id="radio-1" v-model="documento.categoria" value="escrito">
              <label for="check-1" class="form-check-label">Documento escrito</label>
            </div>
            <div class="form-radio form-radio-inline">
              <input type="radio" class="form-check-input" id="radio-2" v-model="documento.categoria" value="audiovisual">
                    <label for="check-2" class="form-check-label">Documento audiovisual</label>
            </div>
          </div> 
            <div v-if="documento.categoria === 'escrito'">
              <p class="margeninput">ISBN</p>
               <input type="number" placeholder="Introduzca el ISBN" class="form-control" v-model.trim="documento.isbn">
               <p class="margeninput">Número de páginas</p>
               <input type="number" placeholder="Introduzca el número de páginas" class="form-control" v-model.trim="documento.numpag">
               <p class="margeninput">Tamaño</p>
               <input type="number" placeholder="Introduzca el tamaño" class="form-control" v-model.trim="documento.tamanio">
            </div>
            <div v-if="documento.categoria === 'audiovisual'" :disabled="documento.categoria === 'escrito'">
              <p>ISAN</p>
             <input type="number" placeholder="Introduzca el ISAN" class="form-control" v-model.trim="documento.isan" >
             <p>Duración</p>
             <input type="number" placeholder="Introduzca la duración" class="form-control" v-model.trim="documento.duracion">
             <p>Tipo</p>
             <input type="text" placeholder="Introduzca la duración" class="form-control" v-model.trim="documento.tipo">
            </div>
              <button class="btn btn-dark mt-2 btn-block" type="submit" :disabled="bloquear">Guardar</button>
    </div>
    <div class="col-12 col-sm-7 fondoEditElim">
        <h5 class="margeninput">Edición/Borrado de documentos</h5><br>
             <p>Zona para El borrado/eliminado y edidicón de documentos</p> 
                 
             <Documento >
             </Documento>                                
    </div>             
  </div>
</div>
</template>

<style>
.fondoFormularioGraba {
  background-color: #ccc;
  border: 1px; 
  border-radius: 3px; 
}
.fondoEditElim {
  background-color: #D5D8DC ; 
}
.margeninput{
  margin-top: 10px;
  margin-bottom: 0px; /* puedes ajustar este valor según tus necesidades */
 } 
</style>