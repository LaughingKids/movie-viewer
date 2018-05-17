import React,{Component} from 'react';
import MovieCarouselGrid from './movie_carousel_grid';
import Slider from "react-slick";
import './movieCarousel.css'
class MovieCarousel extends Component {
  carouselGridClickHandler(e){
    this.props.carouselCursorChangeHandler(e);
  }
  render(){
    var settings = {
      infinite: false,
      slidesToShow: 6,
      slidesToScroll: 6,
      speed: 100,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: false
          }
        }
      ]
    };
    return (
      <div className="MovieCarousel">
        <Slider {...settings}>
              {
                this.props.movies.map((movie,index)=>(
                    <MovieCarouselGrid carouselGridClickHandler={(e)=>{this.carouselGridClickHandler(e)}} movie={movie} key={index} index={index}/>
                ))
              }
        </Slider>
      </div>
    )
  }
}
export default MovieCarousel;
