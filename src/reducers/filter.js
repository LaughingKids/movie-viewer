import * as actionTypes from '../actions/filter/types'
const initState = {
  dataReady       : false,
  genre           : null,
  selectorOptions : ['Genre'],
  filteredMovies  : [],
  fullMovies      : []
}

export default function filter ( state = initState , action) {
  switch (action.type) {
    case actionTypes.PICK_UP_MOVIE_BY_GENRE: {
      state.genre  = action.payload;
      var filtedMovies = state.fullMovies;
      if(action.payload !== 'Genre') {
        filtedMovies = state.fullMovies.filter((item)=>{
          const genres = item.Genre.replace(new RegExp(" ", 'g'),'').split(',');
          return genres.indexOf(action.payload) !== -1;
        });
      }
      state.filteredMovies = filtedMovies;
      return state;
    }
    case actionTypes.INIT_MOVIE_LIST: {
      var filteredGenre = new Array();
      action.payload.map((movie)=>{
        return movie.Genre.split(',');
      }).map((genre)=>{
        genre.map((item)=>{
          filteredGenre.push(item.replace(' ',''));
        })
      });
      filteredGenre = filteredGenre.filter((item,idx)=>{
        return filteredGenre.indexOf(item) === idx;
      });
      state.selectorOptions = state.selectorOptions.concat(filteredGenre);
      state.filteredMovies  = action.payload;
      state.fullMovies      = action.payload;
      state.dataReady       = true;
      return state;
    }
    default:
      return state;
  }
}
