import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import MovieDetails from './components/MovieDetails'
import MoviesList from './components/MoviesList'
import PopularMovies from './components/PopularMovies'
import moviesService from './services/movies'

function App() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    moviesService
      .getPopular()
      .then(movies => setMovies(movies.results))
  }, [])

  return (
    <Router>
      <div className='container'>
        <Header />
        <Routes>
        <Route
            exact path='/'
            element={<PopularMovies 
            movies={movies} />}
          />
          <Route
            path='/search' 
            element={<MoviesList />}
          />
          <Route
            path='/movie/:id' 
            element={<MovieDetails />}
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
