import React from 'react'

import Rating from './rating';

const CardMovie = ({rating, image, title, year}) => {
    return (
        <div className="card">
            <div className="rating"><Rating count={rating}/></div>
            <div className="images"><img alt={title} src={image ? image : 'http://www.video-surveillance-nice.fr/images/101/PasImage.png'} width="200" height="250"/></div>
            <div className="description">{title} - {year}</div>
        </div>
    )
}

export default CardMovie


