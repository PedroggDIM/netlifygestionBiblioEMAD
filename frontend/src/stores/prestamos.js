import { defineStore } from 'pinia'
import { getPrestamos, guardarPrestamo } from '@/stores/api-service_prestamos.js'

export const prestamosStore = defineStore('prestamos', {
  state: () => ({
    prestamos: []
  }),
  actions: {
    async getPrestamos() {
      await getPrestamos().then(r => this.prestamos = r.data._embedded.prestamo)

    },
    getPrestamosPorId(id) {
      return this.prestamos.find(p => p.id == id)
    },
    guardarPrestamo(prestamo) {
      if (prestamo.id == null || prestamo.id === '') {
        this.prestamos.push(prestamo);
      }
      debugger;
      return guardarPrestamo(prestamo);

    },

  }
})
