import React from 'react'
import UndrawBooks from '../assets/Undraw_Books.svg'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <section id="Landing">
        <header>
            <div className="header__container">
                <div className="header__description">
                    <h1>Australia's Biggest awarded Library</h1>
                    <h2>Find your dream book with our <span className="purple">Library</span></h2>
                    <Link to="#features">
                        <button className="btn">Browse Books</button>
                    </Link>
                    <figure className="header__img--wrapper">
                        <img src={UndrawBooks} alt="" />
                    </figure>
                </div>
            </div>
        </header>
    </section>
  );
}

export default Landing