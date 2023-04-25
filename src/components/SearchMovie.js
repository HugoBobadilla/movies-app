import React from 'react'

const SearchMovie = ({
  movie,
  handleChange,
  handleSubmit
}) => {
  

  return (
    <>
      <h1 className='main-title'>Search Movie</h1>
      <form onSubmit={handleSubmit}>
        <input 
          className='input-field'
          type='text'
          onChange={handleChange}
          value={movie}
          autoFocus
        />
        <button type='submit' className='btn btn-submit'>Search</button>
      </form>
    </>
  )
}

export default SearchMovie