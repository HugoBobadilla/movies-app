import axios from 'axios'
const baseUrl = 'https://api.themoviedb.org'

const getAll = async () => {
  const response = await axios.get()
  return response.data
}

const getPopular = async () => {
  const response = await axios.get(`${baseUrl}/3/movie/popular?api_key=c916fc76f613b8485a0a0dcaaec9302e&language=en-US&page=1`)
  return response.data
}

const searchMovie = async (movie) => {
  const response = await axios.get(`${baseUrl}/3/search/movie?api_key=c916fc76f613b8485a0a0dcaaec9302e&language=en-US&query=${movie}&page=1&include_adult=false`)
  return response.data
}

const getMovie = async (id) => {
  const response = await axios.get(`${baseUrl}/3/movie/${id}?api_key=c916fc76f613b8485a0a0dcaaec9302e&language=en-US`)
  return response.data
}

export default {
  getAll,
  getPopular,
  searchMovie,
  getMovie
}