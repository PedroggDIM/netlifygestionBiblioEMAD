<script>
import usuariosJson from '@/assets/usuarios.json'

export default {
  components: {   
  },
  data() {
    return {
      usuarios : usuariosJson.usuario
    }
  }

};
</script>


<template> 
 
<div class="container" id="user"> 
  <h4>Usuarios de la aplicación</h4>
  <div class="row">
    <div class="col-md-12">
      <table class="table table-striped table-hover table-bordered">
        <thead>
          <tr class="table-primary">
            <th>UserName</th>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Extensión</th>
            <th>Correo</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="usuario of usuarios">
            <td>{{ usuario.username }}</td>
            <td>{{ usuario.nombre }}</td>
            <td>{{ usuario.apellidos }}</td>
            <td>{{ usuario.telefono }}</td>
            <td>{{ usuario.correo_electronico }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div> 
</template>

<style>
 #user { 
     width: 500px;
  }
</style>