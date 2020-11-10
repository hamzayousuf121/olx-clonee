import React from 'react';
import Banner from '../components/Banner/Banner.js';
import Adds from '../components/Adds/Adds'
import Footer from '../components/Footer/Footer';
import Appadds from '../components/Appadds/Appadds.jsx'
import Header from '../components/Header/Header'
import Featured from '../components/Featured/Featured.js';
import Products from '../components/Products/Products';
import Category from '../components/Category/Category'
function Home() {
  return (
    <>
      <Header />
      <Category />
      <Banner />
      <Adds />
      <Featured heading='Based on Your Last Search'/>
      <Products />
      <Appadds />
      <Footer />
  </>
  );
}

export default Home;
