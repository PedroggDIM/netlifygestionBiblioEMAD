<script>
import { mapActions, mapState } from 'pinia'
import axios from 'axios'
// import { defineStore } from 'pinia'

export default {
  props: [ 'documento' ],   
  data() {
    return{  }
  },
 computed: {   
    
  },
 methods: {   
  }
}
</script>

<template>
  <div> 
      <span>------------------------</span><br>   
      <span> aqui va EL COMPONENTE DOCUMENTO</span> 
       <div>Id: {{ documento.id }}</div> 
      <div>Título: {{ documento.titulo }}</div> 
      <div>Autor: {{ documento.autor }}</div>
      <div>Categoría: {{ documento.categoria }}</div>
      <div>Estantería: {{ documento.estanteria }}</div>
      <div>Fecha: {{ documento.fecha }}</div>      
      <div>Sinopsis: {{ documento.sinopsis }}</div>    
   
      <span>------------------------</span><br>      
   
  </div>
</template>
