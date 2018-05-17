import React,{Component} from 'react';

class MovieCarouselGrid extends Component {
  render(){
    const style = {
      backgroundImage: 'url('+this.props.movie.Poster+')',
      paddingTop: "148%",
      backgroundPosition: "center",
      backgroundSize: "cover",
      margin: "0px 10px",
      backgroundRepeat:"no-repeat"
    }
    return (
      <div data-index={this.props.index} style={style} onClick={(e)=>{this.props.carouselGridClickHandler(e)}}className="swiper-slide MovieCarouselGrid">
      </div>
    )
  }
}
export default MovieCarouselGrid;
