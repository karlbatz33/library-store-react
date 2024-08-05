import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import Rating from '../components/ui/Rating';
import Price from '../components/ui/Price';
import Book from '../components/ui/Book';

const BookInfo = ({ books, addToCart, cart}) => {
    const { id } = useParams();
    const book = books.find(book => +book.id === +id);      // + converts it to number

    function addBookToCart(book){
        addToCart(book);
        // console.log(" The updated cart is: "+ [cart] +"   ...");
    } 

    /*Print test For my own use*/
    // useEffect(() => {
    //     console.log("The updated cart is:", cart);
    // }, [cart]);

    function bookExistsOnCart(){
        // console.log("... "+ cart.find(book => book.id === +id) +" ...");   
        // return cart.find(book => book.id === +id);
        return cart.some(item => item.id === book.id);
    }

    return (
        <div id="books__body">
            <main id="books__main">
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <Link to="/books" className="book__link">
                                <FontAwesomeIcon icon={'arrow-left'} />
                            </Link>
                            <Link to="/books" className="book__link">
                                <h2 className="book__selected--title--top">Books</h2>
                            </Link>
                        </div>
                        <div className="book__selected">
                            <figure className="book__selected--figure">
                                <img src={book.url} alt="" className="book__selected--img" />
                            </figure>
                            <div className="book__selected--description">
                                <h2 className="book__selected--title">{book.title}</h2>
                                <Rating rating={book.rating} />
                                <div className="book__selected--price">
                                    <Price originalPrice={book.originalPrice} salePrice={book.salePrice} />
                                </div>
                                <div className="book__sumary">
                                    <h3 className="book__summary--title">
                                        Summary
                                    </h3>
                                    <p className="book__summary--para">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At eligendi ratione aspernatur amet eum, soluta fugit quos! Odio, sed in illo dignissimos atque magni voluptatem, quasi explicabo at reiciendis culpa!
                                    </p>
                                    <p className="book__summary--para">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At eligendi ratione aspernatur amet eum, soluta fugit quos! Odio, sed in illo dignissimos atque magni voluptatem, quasi explicabo at reiciendis culpa!
                                    </p>
                                </div>

                                {/* Conditional rendering based on whether book is in cart */}
                                {bookExistsOnCart() ? (
                                    <Link to={`/cart`} className="book__link">
                                        <button className="btn">Checkout</button>
                                    </Link>
                                ) : (
                                    <button className="btn" onClick={() => addBookToCart(book)}>Add to Cart</button>
                                )}

                            </div>
                        </div>
                    </div>
                </div>

                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <h2 className="book__selected--title--top">
                                Recommended Books
                            </h2>
                        </div>
                        <div className="books">
                            {books
                            .filter((book) => book.rating === 5 && +book.id !== +id) /*Basically want all 5 star books but not of the ones that are currently selected.*/
                            .slice(0,4)
                            .map((book) => (<Book book={book} key={book.id}/>)
                            )}                            
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default BookInfo;