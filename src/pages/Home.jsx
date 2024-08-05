import React from 'react'
import Discounted from '../components/Discounted.jsx';
import Featured from '../components/Featured.jsx';
import Highlights from '../components/Highlights.jsx';
import Landing from '../components/Landing.jsx';
import Explore from '../components/Explore.jsx'

const Home = () => {
  return (
    <>
        <Landing />
        <Highlights />
        <Featured />
        <Discounted />
        <Explore />
    </>
  );
}

export default Home