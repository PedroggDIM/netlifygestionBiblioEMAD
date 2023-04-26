import axios from 'axios'

export function llamadaApi(path) {
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: path,
    headers: {}
  }
return axios.request(config)
}
//Llama a la api y le paso un nombre
export function getEntidades(nombre) {
  return llamadaApi(`https://biblioteca-26bb6-default-rtdb.europe-west1.firebasedatabase.app/${nombre}.json`)
}

export function getDocumentos() {
  return getEntidades('documentos')
}
