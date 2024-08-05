import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx';
import Books from './pages/Books.jsx';
import { books } from "./data.js";
import BookInfo from './pages/BookInfo.jsx';
import Cart from './pages/Cart.jsx';
import React, { useEffect, useState } from 'react';
// import { isCompositeComponent } from 'react-dom/test-utils';

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book){
    setCart([...cart, {...book, quantity: 1}])    //Spread cart and add book to the end of it
  }

  function changeQuantity(book, quantity){
    // console.log(book, quantity);
    //Passing new array
    setCart(
      cart.map(item => 
        item.id === book.id
          ? {
            ...item, 
            quantity: +quantity, 
            }    
          : item
      )
    );
  }

  function removeItem(item){
    setCart(cart.filter(book => book.id !== item.id));
    // console.log('remove: ', item)
  }

  function numberOfItems() {
    let counter = 0;
    cart.forEach(item => {
      counter += item.quantity;
    })
    return counter;
  }

  useEffect(() =>{
    console.log(cart)
  }, [cart])
  
  return (
    <Router>
    <div className="App">
        <Nav numberOfItems={numberOfItems()}/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/books' element={<Books books ={books}/>}/>
            <Route path='/books/:id' element={<BookInfo books = {books} addToCart={addToCart} cart={cart}/>}/>
            <Route path='/cart' element={<Cart books ={books} cart={cart} changeQuantity={changeQuantity}
            removeItem={removeItem}/>}/>

        </Routes>
        {/* <Home/> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
