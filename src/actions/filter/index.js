import * as actionTypes from './types';

export function pickUpMovieByGenre(genre) {
  return {
    type: actionTypes.PICK_UP_MOVIE_BY_GENRE,
    payload: genre
  }
}

export function initMovieList(movies) {
  return {
    type: actionTypes.INIT_MOVIE_LIST,
    payload: movies
  }
}
