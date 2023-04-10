import React from 'react'
import { useState } from 'react'
import cartData from '../../data/cart.json'
import { Link } from 'react-router-dom';
import SingleProduct from './SingleProduct';

function Cart() {



  const [cart, setCart] = useState(cartData);

  const emptyCart = () => {
    setCart([]);
  };
  
  const addItem = (clickedItem) => {
    cart.push(clickedItem);
    setCart(cart.slice())
  };
  
  

  const delateItem = (jarjekorranumber) => {
    cart.splice(jarjekorranumber, 1);
    setCart(cart.slice());
  };
  
  const totalSum = () => {
    let summa = 0;
    cart.forEach((cart) => (summa = summa + cart.price));

    return summa;
  };


// ostukorvi fail välja kuvada:
// üles usestate
// htmals .map()

// ostukorv kustuta, tühjenda, kogusumma, dünaamika kui on 0 kogus ei näidata ja kogusummat

  return (
    <div>
{cart.length > 0 &&<button onClick={emptyCart}>Empty all</button>}
{cart.length > 0 &&<div>Items in Cart: {cart.length}</div>}

{cart.map((cart, jrkNR ) =>
<div key={jrkNR}>

        {cart.name} <br />
        <img className='image' src={cart.image} alt="" /> <br />
        {cart.id} <br />
        {cart.price} <br />
        {cart.category} <br />
        {cart.description} <br />
        {cart.active} <br />

      

  

<button onClick={() => addItem(cart)}>+</button>
<button onClick={() => delateItem(jrkNR)}>x</button>
<button onClick={SingleProduct}>View more</button>

</div>
)}

{cart.length === 0 && <div>Basket is empty. <Link to="/">Go shopping</Link></div>}

{cart.length > 0 && <div>Total: {totalSum()} $</div>}
    </div>
  )
}

export default Cart