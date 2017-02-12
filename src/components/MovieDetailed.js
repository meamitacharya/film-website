import React from 'react';
import FavoriteButton, { inFavorites } from './FavoriteButton';
import MySpinner from './MySpinner';
import './MovieDetailed.sass';
import taboo from '../img/taboo.jpg';

const MovieDetailed = (props) => {
  const {currentFilm, favorites, FilmsListActions, dataReady} = props;
  const {addFavorites, removeFavorites} = FilmsListActions;
  if (!dataReady)
    return <MySpinner />

  return (
    <div className='movie-detailed'>
      <div className='movie-detailed-header'>
        <div className='film-title'>
          <h1>{currentFilm.original_title}</h1>
          <h2>{currentFilm.tagline}</h2>
        </div>
        <div className='favorite'>
          <div className='favorite-text'>
            {inFavorites(currentFilm, favorites) ? (
              <p>Delete from favorites</p>
            ) : (
              <p>Add to favorites</p>
            )}
          </div>
          <FavoriteButton
              favorites={favorites}
              movie={currentFilm}
              addFavorites={addFavorites}
              removeFavorites={removeFavorites} />
        </div>
      </div>
      <div className='image-section'>
        <img src={taboo} width='250px' alt={currentFilm.original_title}/>
        <p>Rating: {currentFilm.vote_average}</p>
      </div>
      <div className='overview'>
        <h2>Overview: </h2>
        <p className='overview-text'>{currentFilm.overview}</p>
        <p className='overview-text'><b>Genres: </b>
          {currentFilm.genres.map(item => item.name).join(', ')}
        </p>
        <p className='overview-text'><b>Languages: </b>
          {currentFilm.spoken_languages.map(item => item.name).join(', ')}
        </p>
        <p className='overview-text'><b>Release year: </b>
          {currentFilm.release_date.split('-')[0]}
        </p>
        <p className='overview-text'><b>Countries: </b>
          {currentFilm.production_countries.map(item => item.name).join(', ')}
        </p>
        {currentFilm.adult && <p className='overview-text'><b>Age: </b>
          18+
        </p>}
        <p className='overview-text'><b>Status: </b>
          {currentFilm.status}
        </p>

      </div>

    </div>
  )
}

export default MovieDetailed;
