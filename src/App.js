import React, { Component } from 'react';
import { Button } from "reactstrap";

import './App.css';

import ListMovie from './listMovie';
import AddMovie from './addMovie';
import FilterName from './filterName';
import { withRouter } from 'react-router-dom';

const moviesToDisplay = [{
  id: 'IO',
  title: 'IO',
  rating: 5,
  image: 'http://fr.web.img5.acsta.net/f_png/c_215_290/o_logo-netflix-n.png_5_se/pictures/19/01/10/12/19/2357847.jpg',
  year: 2019}

, {
    id: 'MERVEILLEUX',
    title: 'MERVEILLEUX',
    rating: 5,
    image: 'https://img5.cdn.cinoche.com/images/b0f5d9877322585c3d101652c900c25f.jpg',
    year: 2017
    
}

, {
     id: 'MONSIEUR',
     title: 'MONSIEUR',
     rating: 3,
     image: 'http://diaphana.fr/wp-content/uploads/2018/11/monsieur_120x160_web-1-600x815.jpg',
     year: 2018
}]

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      
      movies: moviesToDisplay,
      newText: '',
      visible: false
    }
    
  }

  addNewMovie = ({...props}) => {
    this.setState({
      movies: [...this.state.movies, {...props}]
    });
    
  };
  getVisibleMovies() {
    return this.state.movies.filter(
      el => el.title.toLowerCase().startsWith(
          this.state.newText.toLowerCase().trim()
        )
      )
  }

  render() {
    return (
      <div className="App">
        <div className='header'>
        <AddMovie className="add" addMovie={this.addNewMovie} />
        <div className="search">        
        <button type="button" class="btn btn-secondary" onClick={()=>{this.setState({visible: ! this.state.visible})}} ><img src={'https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-128.png'} width='25' height='25' alt=""/> </button>
          {this.state.visible ? <FilterName 
          value= {this.state.newText}
          onChange={(newTextInput)=>{this.setState({
            newText: newTextInput
          })}}  
          /> : <div></div>}
        </div>
      </div>
        <ListMovie movies={this.getVisibleMovies()}/>
      </div>    
    )
  }
}
