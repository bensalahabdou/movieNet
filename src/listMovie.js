// import React from 'react'

// import CardMovie from './cardMovie';

// const ListMovie = ({movies}) => {
//     return ( 
//         <div className="map-card">
//            {movies.map( movie => <div key={movie.id}> <CardMovie rating={movie.rating} images={movie.image} title={movie.title} year={movie.year}/> </div> )} 
//            <input type ="button" value="+" onClick/>
//         </div>
//     )
// }

// export default ListMovie

import React, { Component } from 'react'

import CardMovie from './cardMovie';

export default class ListMovie extends Component {
    constructor(props){
        super(props);
        
    }
    
    render() {
        const {movies}= this.props 
        return (
            
            <div className="map-card">
               {movies.map( movie => <div key={movie.id}> <CardMovie movies={movie} /> </div> )} 
               
            </div>
        )
    }
}