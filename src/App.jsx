import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero';
import Footer from './Components/Footer'
import { Route, Routes, useLocation } from 'react-router-dom';
import Blogs from './Components/Blogs/Blogs';
import Card1 from './Components/Blogs/Card1';
import Card2 from './Components/Blogs/Card2';
import Card3 from './Components/Blogs/Card3';
import Card4 from './Components/Blogs/Card4';
import Card5 from './Components/Blogs/Card5';
import Card6 from './Components/Blogs/Card6';
import Card7 from './Components/Blogs/Card7';
import Card8 from './Components/Blogs/Card8';
import Card9 from './Components/Blogs/Card9';

const App = () => {
  const [name, setName] = useState("Welcome to my Personal Blog");
  const location = useLocation();
  useEffect(() => {
    if(location.pathname !== '/')
      setName("Blog Post Section");
  }, [location])
  return (
    <>
      <Navbar />
      <Hero name={name}/>
      <Routes>
        <Route index element={<Blogs/>} />
        <Route path='/card1' element={<Card1/>} />
        <Route path='/card2' element={<Card2/>} />
        <Route path='/card3' element={<Card3/>} />
        <Route path='/card4' element={<Card4/>} />
        <Route path='/card5' element={<Card5/>} />
        <Route path='/card6' element={<Card6/>} />
        <Route path='/card7' element={<Card7/>} />
        <Route path='/card8' element={<Card8/>} />
        <Route path='/card9' element={<Card9/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
