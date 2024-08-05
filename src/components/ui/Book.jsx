import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom';
import Rating from './Rating';
import Price from '../ui/Price';

const Book = ({ book }) => {
  const [img, setImg] = useState();

  //Background flag 
  const mountedRef = useRef(true);    //useRef basically similar to useState. However, when img 'usestate' changes the whole component isn't re-rendered
  
  useEffect(() => {
    const image = new Image();    //Creating DOM image element
    image.src = book.url;         //Set src from book url
    image.onload = () => {        // image onload 
      setTimeout(() => {
        if(mountedRef.current){
          setImg(image);              // set the Image to image
        }
      }, 500);
    };
    // return () => {
    //   //When component unmounts
    //   mountedRef.current = false;
    // }
  })
 
  return (
    <div className="book">
        {
          img ? (
            <>
            <Link to={`/books/${book.id}`}>
                <figure className="book__img--wrapper">
                    <img src={img.src} alt="" className="book__img"/>
                </figure>
            </Link>
            <div className="book__title">
                <Link to={`/books/${book.id}`} className='book__title--link'>{book.title}</Link>
            </div>
            <Rating rating={book.rating}/>
            <Price salePrice={book.salePrice} originalPrice={book.originalPrice}/>
            </>
          ) : (
            <>
              <div className="book__img--skeleton"></div>
              <div className="skeleton book__title--skeleton"></div>
              <div className="skeleton book__rating--skeleton"></div>
              <div className="skeleton book__price--skeleton"></div>
            </>
          )
        }
    </div>
  );
}

export default Book;