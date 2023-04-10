import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import productsFromFile from "../../data/products.json";
import CartfromFile from '../../data/cart.json';


function HomePage() {

  const [products, setProducts] = useState(productsFromFile);

//   const addToCart = (klickedItem) => {
// productsFromFile.push(klickedItem)
//   }

const addToCart = (clickedItem) => {
  CartfromFile.push(clickedItem)

}

   
  const sortAZ = () => {
    products.sort((a,b) => a.name.localeCompare(b.name));
    setProducts(products.slice());
  }

  const sortZA = () => {
    products.sort((a,b) => b.name.localeCompare(a.name));
    setProducts(products.slice());
  }

  const priceAce = () => {
    products.sort((a, b) => a.price - b.price);
    setProducts(products.slice());
  };

  const PriceDesc = () => {
    products.sort((a, b) => b.price - a.price);
    setProducts(products.slice());
  };
  
  // sortZA
  // sort PriceACe
  // sort priceDesc

  return (
    <div>



      <button onClick={sortAZ}>Sort AZ</button>

      <button onClick={sortZA}>Sort ZA</button>

      <button onClick={priceAce}>Lower price first</button>

      <button onClick={PriceDesc}> Higer price first</button>

      <div>Total products: {productsFromFile.length} tk</div>

      {products.map((el, ix) => (

      
      <div key={ix}>
        <Link to ={'/cart/' + ix}>
        {el.id} <br />
        {el.name} <br />
        <img className='image' src={el.image} alt="" /> <br />
     
        {el.price} <br />
        {el.category} <br /> 
        {el.description} <br />
        {el.active} <br />

        </Link>


          {/* <img src={product.image} alt="" />
          <div>{product.id}</div>
          <div>{product.name}</div>
          <div>{product.price}</div>
          <div>{product.image}</div>
          <div>{product.category}</div>
          <div>{product.description}</div>
          <div>{product.active}</div> */}
        
          <button onClick={() => addToCart(el)}>Add product</button>

          <br />
          <br />

        </div>         
      ))}

  
    </div>
     
  )
}

export default HomePage
