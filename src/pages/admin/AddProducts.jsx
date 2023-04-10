import { useRef, useState } from "react";
import productsFromFile from "../../data/products.json";

function AddProducts() {
  const [message, updateMessage] = useState("Add product");

  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();

  const add = () => {
    if (idRef.current.value === "") {
      updateMessage("Can't add product with empty field!");
    } else {
      const newProduct = {
        id: Number(idRef.current.value),
        name: nameRef.current.value,
        price: Number(priceRef.current.value),
        image: imageRef.current.value,
        category: categoryRef.current.value,
        description: descriptionRef.current.value,
        active: activeRef.current.checked,
      };
      productsFromFile.push(newProduct);
      updateMessage(`Product ${newProduct.id} added`);
    }
  };

    
 

  return (
    <div>
      <div>{message}</div>
      <br />
      <label>Product Id</label> <br />
      <input ref={idRef} type="number" /><br />
     
      <label>New product name </label> <br />
      <input ref={nameRef} type="text" /><br />
      <label>Hind </label> <br />
      <input ref={priceRef} type="number" /><br />
      <label>Image</label> <br />
      <input ref={imageRef} type="text" /><br />
      <label>Category</label> <br />
      <input ref={categoryRef} type="text" /><br />
      <label>Description</label> <br />
      <input ref={descriptionRef} type="text" /><br />
      <label>Active</label> <br />
      <input ref={activeRef} type="checkbox" /><br />
      <br />
      <button onClick={add}>Add product</button> <br />
    </div>
  );
}

export default AddProducts;
