<script>
import Calendar from 'primevue/calendar'
import Prestamo from '@/views/Prestamo.vue'
import { mapState, mapActions } from 'pinia'
import { prestamosStore } from '@/stores/prestamos.js'

export default {
   components: { Prestamo },
   data() {
    return {
    
    }
  },
 computed: {
      ...mapState(prestamosStore, ['prestamos'])   

  },
  methods: {
     ...mapActions(prestamosStore, [ 'getPrestamos']),   
  },    
  created() {
       this.getPrestamos()
  }
};

</script>


<template>
   <h2>Listado de Préstamos</h2>   
   <!-- <div v-for="prestamo of prestamos">{{ prestamo.titulo }}</div> -->
   <Prestamo :prestamo="prestamo"> </Prestamo>
</template>
