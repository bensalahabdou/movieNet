import React from 'react'

import Rating from './rating';

const CardMovie = ({movies}) => {
    return (
        <div className="card">
            <div className="rating"><Rating count={movies.rating}/></div>
            <div className="images"><img alt={movies.title} src={movies.image ? movies.image : 'http://www.video-surveillance-nice.fr/images/101/PasImage.png'} width="200" height="250"/></div>
            <div className="description">{movies.title} - {movies.year}</div>
        </div>
    )
}

export default CardMovie;


