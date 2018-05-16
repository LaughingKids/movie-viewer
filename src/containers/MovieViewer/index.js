import React, { Component } from 'react';
import './movieViewer.css';
import axios from 'axios';
import _G from '../../Global';
import MovieDetailHeader from '../../components/MovieDetailHeader';
import MovieGenreSelector from '../../components/MovieGenreSelector';
// import MovieCarousel from '../../components/MovieCarousel';

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as filterActions from '../../actions/filter';

class MovieViewer extends Component {
  constructor(props){
    super(props);
    this.state = {
      movies:[],
      dataReady:false
    }
    this.selectorChange = this.selectorChange.bind(this);
  }
  componentDidMount(){
    axios.get(_G.apiUrl).then((resp)=>{
      this.props.filterActions.initMovieList(resp.data);
      this.setState({
        movies: resp.data,
        dataReady: true
      })
    }).catch((e)=>{
      console.log(e);
    })
  }
  selectorChange(event){
    this.props.filterActions.pickUpMovieByGenre(event.target.value);
    this.setState({
      movies: this.props.filter.filteredMovies
    });
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
          <MovieDetailHeader movie={this.props.filter.filteredMovies[0]}></MovieDetailHeader>
          <MovieGenreSelector onChangeAction={this.selectorChange} genres={this.props.filter.selectorOptions}></MovieGenreSelector>
          <ul>
            {
              this.state.movies.map((movie)=>(
                <li>{movie.Title}</li>
              ))
            }
          </ul>
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
