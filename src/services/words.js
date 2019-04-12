import axios from 'axios'

const baseUrl = '/api/words/'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const removeToken = () => {
  token = null
}

const getAll = async () => {
  const config = {
    headers: {
      Authorization: token
    }
  }
  const response = await axios.get(baseUrl, config)
  return response.data
}

const getOne = async word => {
  const response = await axios.get(`${baseUrl}${word}`)
  return response.data
}

const create = async word => {
  const config = {
    headers: {
      Authorization: token
    }
  }
  const response = await axios.post(baseUrl, word, config)
  return response.data
}

const update = async word => {
  const config = {
    headers: {
      Authorization: token
    }
  }
  const response = await axios.put(`${baseUrl}${word.id}`, word, config)
  return response.data
}

const remove = async word => {
  const config = {
    headers: {
      Authorization: token
    }
  }
  const response = await axios.delete(`${baseUrl}${word.id}`, config)
  return response.data
}

export default {
  setToken,
  removeToken,
  getAll,
  getOne,
  create,
  update,
  remove
}
