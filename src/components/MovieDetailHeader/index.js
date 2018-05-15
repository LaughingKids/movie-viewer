import React ,{ Component } from 'react';
import './movieDetailHeader.css';

class MovieDetailHeader extends Component {
  constructor(props){
    super(props);
    this.state = {
      excludeProps:['Genre','Poster','Website'],
      secondRowProps:['Actors','Plot','BoxOffice','Awards','Writer','Country','Metascore','Type','Production']
    }
  }
  render(){
    const bckImg = {
      backgroundImage: "url(" + this.props.movie.Poster + ")"
    }
    const properties = Object.keys(this.props.movie);
    return (
      <div className="grid-container">
        <div className="grid-item" id="movieTitle">
          {this.props.movie.Title}
        </div>
        <div className="grid-item" id="moviePosterImg">
          <div className="image" style={bckImg}></div>
        </div>
        <div className="grid-item" id="firstMovieDetailBlock">
              {
                properties.map((item,index)=>{
                  if(this.props.movie[item] != 'N/A' &&
                     this.state.excludeProps.indexOf(item) == -1 &&
                     this.state.secondRowProps.indexOf(item) == -1) {
                    return (
                      <p className="detail-row" key={index}>
                        <span className="detail-label">{item}</span>
                        <span className="detail-value">{this.props.movie[item]}</span>
                      </p>
                    )
                  }
                })
              }
        </div>
        <div className="grid-item" id="secondMovieDetailBlock">
              {
                properties.map((item,index)=>{
                  if(this.props.movie[item] != 'N/A' &&
                     this.state.excludeProps.indexOf(item) == -1 &&
                     this.state.secondRowProps.indexOf(item) != -1) {
                    return (
                      <p className="detail-row" key={index}>
                        <span className="detail-label">{item}</span>
                        <span className="detail-value">{this.props.movie[item]}</span>
                      </p>
                    )
                  }
                })
              }
        </div>
      </div>
    )
  }
}

export default MovieDetailHeader;
