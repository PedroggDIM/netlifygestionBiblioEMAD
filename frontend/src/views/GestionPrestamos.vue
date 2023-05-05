<script>
import Calendar from 'primevue/calendar'
import Prestamo from '@/views/Prestamo.vue'
import { mapState, mapActions } from 'pinia'
import { prestamosStore } from '@/stores/prestamos.js'

export default {
   components: { Prestamo,
    Calendar, },
   data() {
    return {
     // El nombre, apellido y email ls rellena el usuario que realiza la reserva.
      // El resto de campos del formulario son generados por el sistema
      prestamo: {
        idDocumento: '',
        titulo: '',
        autor: '',
        email: '',
        nombre: '',
        apellidos: '',
        fechaInicio: '',
        fechaFin: '',
        categoria: ''
      }
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
  <form>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-sm-5 fondoFormularioGraba">
          <h5 class="margeninput" style="color: blue;">Formulario de grabación de Préstamos</h5>
          <p class="margeninput">IdDocumento</p>
          <input type="number" placeholder="Introduzca el Id del documento" class="form-control"
            v-model.trim="prestamo.idDocumento">
          <p class="margeninput">Título</p>
          <input type="text" placeholder="Introduzca el título del documento" class="form-control"
            v-model.trim="prestamo.titulo">
          <p class="margeninput">Autor</p>
          <input type="text" placeholder="Introduzca el título del documento" class="form-control"
            v-model.trim="prestamo.autor">

          <p class="margeninput">Email</p>
          <input type="email" placeholder="Introduzca el email" class="form-control" v-model.trim="prestamo.email">

          <p class="margeninput">Nombre usuario</p>
          <input type="text" placeholder="Nombre usuario" class="form-control" v-model.trim="prestamo.nombre">

          <p class="margeninput">Apellidos</p>
          <input type="text" placeholder="Apellidos del usuario" class="form-control" v-model.trim="prestamo.apellidos">

          <p class="margeninput">Fecha de alta (Fecha actual)</p>
          <Calendar v-model.trim="prestamo.fechaInicio" dateFormat="dd/MM/yy" @focusout="cambiarFechaAlta($event)">
          </Calendar>

          <p class="margeninput">Fecha finalización préstamo (Escrito +7 días | Audiovisual +3 días)</p>
          <Calendar class="disabled" v-model.trim="prestamo.fechaFin" dateFormat="dd/MM/yy" readonly></Calendar>
          <br>
          <!-- Botón GUARDAR -->
          <div>
            <button type="button" class="btn btn-success" @click="guardarPrestamo(prestamo)">Guardar</button>
          </div>
        </div>

        <div class="col-12 col-sm-7 fondoEditElim">
          <h5 class="margeninput" style="color: blue;">Asistente para grabación préstamos (busqueda de documentos)</h5><br>
          <DocumentoPrestamo @editarPrestamo="editarPrestamo"></DocumentoPrestamo>
        </div>
      </div>
    </div>
  </form>
  <!-- AQUÍ MUESTRO LO QUE SALE DEL FORMULARIO -->
  <p>
    {{ prestamo }}
  </p>

  <!-- AQUÍ MUESTRO EL LISTADO DE PRÉSTAMOS QUE tengo en el componente Prestamo.vue -->
  <h2>Listado de Préstamos</h2>
  <Prestamo :prestamo="prestamo"> </Prestamo>
</template>
