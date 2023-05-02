import axios from 'axios'

const host = 'https://biblioteca-26bb6-default-rtdb.europe-west1.firebasedatabase.app'

// export function llamadaApi(path) {
//   let config = {
//     method: 'get',
//     maxBodyLength: Infinity,
//     url: path,
//     headers: {}
//   }
// return axios.request(config)
// }
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
//Llama a la api y le paso un nombre
// export function getEntidades(nombre) {
//   return llamadaApi(`https://biblioteca-26bb6-default-rtdb.europe-west1.firebasedatabase.app/${nombre}.json`)
// }
export function guardarDocumento(documento) {
  debugger;
   return llamadaApi(`${host}/documentos`, 'post', documento)
  
}
export function borrarDocumento(documento) {
  debugger;
  return llamadaApi(`${host}/documentos`, 'delete', documento.id) // con la api poner la url tipo: (documento._links.self.href.replace('http', 'https'), 'delete')
}

export function getEntidades(nombre) {
  return llamadaApi(`${host}/${nombre}.json`,'get')
}
export function getDocumentos() {
  return getEntidades('documentos')
}
