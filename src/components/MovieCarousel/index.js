import React,{Component} from 'react';

class MovieCarousel extends Component {
  render(){
    return (
      <ul>
        {
          this.props.movies.map((movie,index)=>(
            <li onClick={this.props.carouselCursorChangeHandler} data-index={index}>{movie.Title}</li>
          ))
        }
      </ul>
    )
  }
}
export default MovieCarousel;
