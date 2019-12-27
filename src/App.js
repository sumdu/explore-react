import React from 'react';
import ProductDetails from './ProductDetails'

function App() {
  return (
    <ProductDetails 
      ProductId="123" 
      Upc="upc"
      Mpn="mpn"
      Sku="sku"
      Quantity="2"
      Title="Screwdriver"
      ShortDescription="shorts"
      Description="Desc"
      Price="9.99"
      CategoryId="123"
      Width="11 in."
      Height="8 in."
      Length="1 in."
      Image1="img1.jpg"
      Image2="img2.jpg"
      Image3="img3.jpg"
    />
  );
}

export default App;
