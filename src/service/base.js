import axios from 'axios'

const config = {
  baseURL: 'http://localhost:3000/',
  timeout: 1000
}

const protocolo = axios.create(config)

export function getPistas() {
  const url = './pistas.json'
  return protocolo.get(url)
}