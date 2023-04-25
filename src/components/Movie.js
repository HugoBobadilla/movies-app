import React from 'react'
import { Link } from 'react-router-dom'

const Movie = ({ movie }) => {
  const posterUrl = 'https://image.tmdb.org/t/p/original/'

  return (
    <div className='movie-container'>
      <div className='movie-info'>
        <h4>{movie.title}</h4>
        <p>Release Date: {movie.release_date}</p>
      </div>
      <img className='movie-poster' src={`${posterUrl}/${movie.poster_path}`} alt="poster" />
      <Link className='more-details-link' to={`/movie/${movie.id}`}>More Details</Link>
    </div>
  )
}

export default Movie