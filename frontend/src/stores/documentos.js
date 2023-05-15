import { defineStore } from 'pinia'
import { getDocumentos, guardarDocumento, borrarDocumento } from './api-service'

export const documentosStore = defineStore('documentos', {
  state: () => ({
    documentos: []
  }),
  actions: {
    async getDocumentos() {
      debugger;
      await getDocumentos().then(r => {
        debugger;
        this.documentos = r.data._embedded.documentoModels
      });

    },
    getDocumentosPorId(id) {
      return this.documentos.find(p => p.id == id)
    },
    guardarDocumento(documento) {
      if (documento.id != null || documento.id !== '') {
        this.documentos.push(documento);
      }
      debugger;
      return guardarDocumento(documento);

    },

    eliminarDocumento(documento) {
      return borrarDocumento(documento);
    }
  }
})