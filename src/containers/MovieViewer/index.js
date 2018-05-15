import React, { Component } from 'react';
import './movieViewer.css';
import axios from 'axios';
import _G from '../../Global';
import MovieDetailHeader from '../../components/MovieDetailHeader';
// import MovieCarousel from '../../components/MovieCarousel';

class MovieViewer extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectorOptions: [],
      selectedOption: null,
      movieList:[],
      currentMovie:null,
      dataReady: false
    }
  }
  componentDidMount(){
    axios.get(_G.apiUrl).then((resp)=>{
      /* load all genre */
      this.setState({
        dataReady: true,
        movieList: resp.data,
        currentMovie: resp.data[0],
        selectorOptions:resp.data.map((movie)=>{
          return movie.Genre.split(',');
        })
      })
    }).catch((e)=>{
      console.log(e);
    })
  }
  genreFilter(){

  }
  render() {
    const dataReady = this.state.dataReady;
    return (
        <div className="MovieViewer">
          {dataReady ? (
                <MovieDetailHeader movie={this.state.currentMovie}></MovieDetailHeader>
          ) : (
                "loading"
            )
          }
        </div>
    );
  }
}

export default MovieViewer;
