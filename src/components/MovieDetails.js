import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import moviesService from '../services/movies'

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null)
  const { id } = useParams()
  const posterUrl = 'https://image.tmdb.org/t/p/original/'
  const navigate = useNavigate()

  useEffect(() => {
    moviesService
      .getMovie(id)
      .then(result => setMovieDetails(result))
  }, [id])

  if(movieDetails !== null) {
    return (
      <>
        <button className='btn btn-back' onClick={() => navigate('/')}>Go Back</button>
        <div className='details-container'>
          <img className='details-img' src={`${posterUrl}/${movieDetails.poster_path}`} alt={`${movieDetails.title}`} />
          <div className='movie-details-info'>
            <h2>{movieDetails.title}</h2>
            <p>{movieDetails.overview}</p>
            <p><span>Release Date:</span> {movieDetails.release_date}</p>
          </div>
        </div>
      </>
    )
  }
}

export default MovieDetails