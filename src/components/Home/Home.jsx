import React from 'react';
import Hero from '../hero/hero';
import AboutIndia from '../aboutIndia/aboutIndia.jsx';
import Search from '../SearchBar/Search.jsx';
import Footer from '../Footer/Footer.jsx';
import State from '../AboutState/State.jsx';


const Home = () => {
  return (
    <div className='home'>
      <Hero/>
      <div className='india-heading'>
        <h1>India</h1>
        <AboutIndia />
      </div>
      <Search/>
    {/* <State/> */}
      <Footer/>
    </div>
  )
}

export default Home
