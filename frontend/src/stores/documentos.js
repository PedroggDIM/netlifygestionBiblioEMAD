import { defineStore } from 'pinia'
import { getDocumentos } from './api-service'
import axios from 'axios'

export const documentosStore = defineStore('documentos', {
  state: () => ({
    documentos: []
  }),
  actions: {
    async getDocumentos() {
      await getDocumentos().then(r => this.documentos = r.data._embedded.documento)
 
    },
    getDocumentosPorId(id) {
      return this.documentos.find(p => p.id == id)
    }
  }
})
