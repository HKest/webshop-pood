import React, { useState } from 'react'
import productsFromFile from '../../data/products.json'
import { Link } from 'react-router-dom';

function MaintainProducts() {

  const [products, setProducts] = useState(productsFromFile);

  const deleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  }

  return (
    <div>
      <div>Tooteid on: {products.length} tk</div>
      
      {products.map(product => 
        <div key={product.id}>
          <img src={product.image} alt="" />
          <div>{product.id}</div>
          <div>{product.name}</div>
          <div>{product.price}</div>
          <div>{product.image}</div>
          <div>{product.category}</div>
          <div>{product.description}</div>
          <div>{product.active}</div>
          <button onClick={() => deleteProduct(product.id)}>Kustuta</button>

          <Link to={"/admin/edit-products/" + product.id}>
            <button>Muuda</button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default MaintainProducts;
