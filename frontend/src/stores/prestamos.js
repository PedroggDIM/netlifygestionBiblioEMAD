import { defineStore } from 'pinia'
import { getPrestamos, guardarPrestamo } from './api-service_prestamos'

export const prestamosStore = defineStore('prestamos', {
  state: () => ({
    prestamos: []
  }),
  actions: {
    async getPrestamos() {
      await getPrestamos().then(r =>{
        debugger;
        this.prestamos = r.data._embedded.prestamoModels;
      });

    },
    getPrestamosPorId(id) {
      return this.prestamos.find(p => p.id == id)
    },
    guardarPrestamo(prestamo) {
      debugger;
      if (prestamo.idDocumento != null || prestamo.idDocumento !== '') {
        this.prestamos.push(prestamo);
      }
      debugger;
      return guardarPrestamo(prestamo);
    },

  }
})
