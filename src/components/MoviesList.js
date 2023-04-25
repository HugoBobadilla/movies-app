import React, { useEffect, useState } from 'react'
import Movie from './Movie'
import SearchMovie from './SearchMovie'
import moviesService from '../services/movies'

const MoviesList = () => {
  const [movies, setMovies] = useState([])
  const [movie, setMovie] = useState('')

  const handleChange = (e) => {
    setMovie(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    moviesService
      .searchMovie(movie)
      .then(result => setMovies(result.results))
  }

  // useEffect(() => {
  //   moviesService
  //     .searchMovie(movie)
  //     .then(result => setMovies(result.results))
  // }, [movie])

  const clearResults = () => {
    setMovie('')
    setMovies([])
  }

  return (
    <>
      <SearchMovie
        movie={movie}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <div className='movies-list'>
      {movies.map(movie => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
    {movies.length > 0 && <button className='btn btn-clear' onClick={clearResults}>Clear Results</button>}
    </>
  )
}

export default MoviesList