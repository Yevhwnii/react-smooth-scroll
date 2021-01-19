import React, { useState } from 'react';

import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toogleHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toogleHandler} />
      <Navbar toggle={toogleHandler} />
      <HeroSection />
    </>
  );
};

export default Home;
