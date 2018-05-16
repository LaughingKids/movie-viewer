import React, { Component } from 'react';
import './movieViewer.css';
import axios from 'axios';
import _G from '../../Global';
import MovieDetailHeader from '../../components/MovieDetailHeader';
import MovieGenreSelector from '../../components/MovieGenreSelector';
import MovieCarousel from '../../components/MovieCarousel';

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as filterActions from '../../actions/filter';

class MovieViewer extends Component {
  constructor(props){
    super(props);
    this.state = {
      movies   : [],
      dataReady: false,
      movie    : null
    }
    this.selectorChange = this.selectorChange.bind(this);
    this.carouselCursorChangeHandler = this.carouselCursorChangeHandler.bind(this);
  }
  componentDidMount(){
    axios.get(_G.apiUrl).then((resp)=>{
      this.props.filterActions.initMovieList(resp.data);
      this.setState({
        movies: resp.data,
        dataReady: true,
        movie : resp.data[0]
      })
    }).catch((e)=>{
      console.log(e);
    })
  }
  selectorChange(event){
    this.props.filterActions.pickUpMovieByGenre(event.target.value);
    this.setState({
      movies: this.props.filter.filteredMovies,
      movie : this.props.filter.filteredMovies[0]
    });
  }
  carouselCursorChangeHandler(event){
    this.setState({
      movie : this.state.movies[event.target.dataset.index]
    })
  }
  render() {
    if(!this.state.dataReady) {
      return (
        <div className="MovieViewer">
          loading...
        </div>
      )
    } else {
      return (
        <div className="MovieViewer">
          <MovieDetailHeader movie={this.state.movie}></MovieDetailHeader>
          <MovieGenreSelector onChangeAction={this.selectorChange} genres={this.props.filter.selectorOptions}></MovieGenreSelector>
          <MovieCarousel carouselCursorChangeHandler={this.carouselCursorChangeHandler} movies={this.state.movies}></MovieCarousel>
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    filter:state.filter
  }
}

function mapDispachToProps (dispatch) {
  return {
    filterActions:bindActionCreators(filterActions,dispatch)
  }
}

export default connect(mapStateToProps,mapDispachToProps)(MovieViewer);
