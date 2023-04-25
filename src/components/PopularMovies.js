import React from 'react'
import Movie from './Movie'

const PopularMovies = ({ movies }) => {
  return (
    <>
      <h1 className='main-title'>Popular Movies</h1>
      <div className='movies-list'>
      {movies.map(movie => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
    </>
  )
}

export default PopularMovies