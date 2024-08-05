import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const Rating = ( {rating} ) => {
  return (
    <div className="book__ratings">
    {
        new Array(Math.floor(rating)).fill(0).map( (_, index) => <FontAwesomeIcon icon={faStar} key={index}/>) //Key only used for mapping. Preferrably index or id
    } {/*rather than using 'elemenet', use '_' for unused*/}
    {
        // Number.isInteger(book.rating) ? '' : <FontAwesomeIcon icon={faStarHalfAlt}/>        //Don't need key because not mapping
        !Number.isInteger(rating) && <FontAwesomeIcon icon={faStarHalfAlt}/>        
    }
</div>
  );
}

export default Rating;