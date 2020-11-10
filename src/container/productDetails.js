import React from 'react';
import Footer from '../components/Footer/Footer';
import Appadds from '../components/Appadds/Appadds.jsx'
import Header from '../components/Header/Header'

import ProductDetails from '../components/ProductDetails/ProductDetails.jsx';

function ProductDetailsContainer() {
  return (
    <>
      <Header />
      <ProductDetails />
      <Appadds />
      <Footer />
  </>
  );
}

export default ProductDetailsContainer;
