<script>
import Calendar from 'primevue/calendar'  
export default {
   components: {  
    Calendar,   
  },
   props: {
     documento: Object
   },
   computed: {
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
}

</script>

<template>
<div class="contenedor">
  <p>Título</p>
  <input type="text" placeholder="Introduzca el título" class="form-control" v-model.trim="documento.titulo">
  <p>Autor</p>
  <input type="text" placeholder="Introduzca el autor" class="form-control" v-model.trim="documento.autor">
  <p>Sinopsis</p>
  <input type="text" placeholder="Introduzca la sinposis" class="form-control" v-model.trim="documento.sinopsis">
  <p>Estantería</p>
  <input type="number" placeholder="Introduzca número de estantería" class="form-control" v-model.number="documento.estanteria">
  <p>Fecha de alta</p>
  <Calendar v-model.trim="documento.fecha" dateFormat="dd/MM/yy" ></Calendar> 
  <div class="my-2">
    <p>Seleccione el tipo de documento</p>
    <div class="form-radio form-radio-inline">
      <input 
        type="radio"
        class="form-check-input"
        id="radio-1"
        v-model="documento.categoria"
        value="escrito">
      <label for="check-1" class="form-check-label">Documento escrito</label>
    </div>
    <div class="form-radio form-radio-inline">
      <input 
        type="radio"
        class="form-check-input"
        id="radio-2"
        v-model="documento.categoria"
        value="audiovisual">
      <label for="check-2" class="form-check-label">Documento audiovisual</label>
    </div>
  </div> 

  <div v-if="documento.categoria === 'escrito'">
    <p>ISBN</p>
    <input type="number" placeholder="Introduzca el ISBN" class="form-control" v-model.trim="documento.isbn">
    <p>Número de páginas</p>
    <input type="number" placeholder="Introduzca el número de páginas" class="form-control" v-model.trim="documento.numpag">
    <p>Tamaño</p>
    <input type="number" placeholder="Introduzca el tamaño" class="form-control" v-model.trim="documento.tamanio">
  </div>

  <div v-if="documento.categoria === 'audiovisual'" 
                                     :disabled="documento.categoria === 'escrito'">
    <p>ISAN</p>
    <input type="number" placeholder="Introduzca el ISAN" class="form-control" v-model.trim="documento.isan" >
    <p>Duración</p>
    <input type="number" placeholder="Introduzca la duración" class="form-control" v-model.trim="documento.duracion">
    <p>Tipo</p>
    <input type="text" placeholder="Introduzca la duración" class="form-control" v-model.trim="documento.tipo">
  </div>
  <button class="btn btn-dark mt-2 btn-block" type="submit" :disabled="bloquear">Guardar</button>
</div>  
</template>

<style>
.contenedor {
  width: 800px;
  border: 2px solid #ccc; 
  border-radius: 10px; 
  padding: 20px; 
  background-color: #f2f2f2; 
}
p {
 margin-top: 5px; 
 }
</style>