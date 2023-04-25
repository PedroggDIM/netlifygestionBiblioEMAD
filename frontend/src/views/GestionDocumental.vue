<script>
import Calendar from 'primevue/calendar'
import inputDocumental from '@/components/inputDocumental.vue'

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
        categoria: [],
        }
    }   
  },
  methods: { 
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
        categoria: [],
    }
  }
}
};

</script>


<template>
<h4>Grabar en el sistema nuevo documento</h4>   
<form class="mt-3" @submit.prevent="procesarFormulario">

   <inputDocumental :documento="documento"/>

  <div>
    <p>{{documento}}</p>
  </div>
   <hr>

</form>


</template>

<style scoped>
p {
  margin-top: 5px; 
  margin-bottom: 0px;  
}
</style>