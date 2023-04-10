import React, { useState } from 'react'
import {useParams } from 'react-router-dom'
import productsFromFile from "../../data/products.json"
import { useRef } from 'react';


function EditProducts() {


const { id } = useParams();

const productFound = productsFromFile.find(oneProduct => oneProduct.id === Number(id));

const idRef = useRef();
const nameRef = useRef();
const priceRef = useRef();
const imageRef = useRef();
const categoryRef = useRef();
const descriptionRef = useRef();
const activeRef = useRef();



const edit = () => {

const index = productsFromFile.findIndex(oneProduct => oneProduct.id === Number(id));

const newProduct = {
"id" : Number(idRef.current.value),
"name" : nameRef.current.value,
"price" : Number(priceRef.current.value),
"image" : imageRef.current.value,
"category" : categoryRef.current.value,
"description" : descriptionRef.current.value,
"active" : activeRef.current.cheked,


}

productsFromFile[index] = newProduct;

}

const [isIdUnigue, setIdUnigue] = useState(true);

const checkIdUniqueness = () => {
  const index = productsFromFile.findIndex(product => product.id === Number(idRef.current.value));
  if (index === -1) {
setIdUnigue(true);
  } else {
setIdUnigue(false);
  }


  // productsFromFile.find(product => product.id === idRef.current.value);
  // productsFromFile.filter(product => product.id === idRef.current.value)[o];
  // idRef.current.value

}

  return (
    <div>
      {isIdUnigue === false && <div>Entered ID is not unigu!</div>}

      <label>ID</label><br />
      <input ref={idRef} onChange={checkIdUniqueness} defaultValue={productFound.id} type="number" /> <br />

      <label>Name</label><br />
      <input ref={nameRef} defaultValue={productFound.name} type="text" /><br />

      <label>Price</label><br />
      <input ref={priceRef} defaultValue={productFound.price} type="number" /><br />

      <label>Image</label><br />
      <input ref={imageRef} defaultValue={productFound.image} type="text" /><br />

      <label>Category</label><br />
      <input ref={categoryRef} defaultValue={productFound.category} type="text" /><br />

      <label>Description</label><br />
      <input ref={descriptionRef} defaultValue={productFound.description} type="text" /><br />

      <label>Active</label><br />
      <input ref={activeRef} defaultValue={productFound.active} type="checkbox" /><br />

      <button disabled={isIdUnigue === false} onClick={edit}>Edit</button>





    </div>
  )
}

export default EditProducts