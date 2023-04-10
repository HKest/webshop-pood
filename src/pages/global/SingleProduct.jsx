import React from 'react'
import { useParams } from 'react-router-dom'
import productsFromFail from '..//../data/products.json'


function SingleProduct() {

  const { id } = useParams();

  const found = productsFromFail[id];


  return (
    <div>
       {typeof found === 'object' && 
 <div>
          <div>Item id:{Number(id) }</div>
          <div>Name:{found.name}</div>
          <div>Price:{found.price}</div>
          <div>Image:{found.image}</div>
          <div>Category:{found.category}</div>
          <div>Description:{found.description}</div>
          <div>Active:{found.active}</div>
          </div>}

          {found === undefined && <div>
Product not found!
</div>}
    </div>
  )
}

export default SingleProduct