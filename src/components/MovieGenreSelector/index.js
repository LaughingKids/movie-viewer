import React,{Component} from 'react';
import './movieGenreSelector.css';

class MovieGenreSelector extends Component {
  selectChangedHandler(e) {
    this.props.onChangeAction(e);
  }
  render(){
    return (
      <div className="MovieGenreSelector">
        <select onChange={(e)=>{this.selectChangedHandler(e)}}>
          {
            this.props.genres.map((item,key)=>(
              <option value={item} key={key}>{item}</option>
            ))
          }
        </select>
      </div>
    )
  }
}

export default MovieGenreSelector;
