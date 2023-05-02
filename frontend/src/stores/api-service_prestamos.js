import axios from 'axios'

const host = 'https://prestamos-3afac-default-rtdb.europe-west1.firebasedatabase.app/'

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
   return llamadaApi(`${host}/`, 'post', prestamo)  
}

export function getEntidades(nombre) {
  return llamadaApi(`${host}/${nombre}.json`,'get')
}
export function getPrestamos() {
  return getEntidades('prestamos')
}
