import axios from 'axios'

const host = 'https://apirestbiblioemad-pedroggsegosego.b4a.run/api'

export function llamadaApi(path, method, body) {
  debugger;
  let config = {
    method: method,    
    maxBodyLength: Infinity,
    url: path,
    headers: {}
  }
  if(body) {   
    config.data = body,
    config.headers['Content-Type'] = 'application/json'
  }
return axios.request(config)
}

export function guardarPrestamo(prestamo) {
  debugger;
   return llamadaApi(`${host}/prestamos`, 'post', prestamo);
}

export function getEntidades(nombre) {
  return llamadaApi(`${host}/${nombre}`,'get')
}
export function getPrestamos() {
  return getEntidades('prestamos')
}