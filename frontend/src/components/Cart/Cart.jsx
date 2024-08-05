/* =======================================================
Imports
=======================================================*/

import { useState, createContext, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import * as authService from '../../services/authService'
import * as cartService from '../../services/cartService'
import styles from './Cart.module.css'
import data from '../../../../testdb.json'

/* =======================================================
Helper Functions
=======================================================*/

// calculate the total of the items in the product list

const calculateTotal = (arr) => {
  let total = 0
  arr.forEach((item) => {
    total += Number(item.price)
  })
  return total
}

/* =======================================================
Component
=======================================================*/

function Cart() {

  // const [cart, setCart] = useState(cartService.index())
  const [cart, setCart] = useState(data.slice(0,5))
  const [cartTotal, setCartTotal] = useState(calculateTotal(cart))
  const [orderPlacedMessage, setOrderPlacedMesage] = useState('')

  // Re-render total
  useEffect (() => {
    console.log('cart',cart)
    setCartTotal(calculateTotal(cart))
  }, [cart])

  const removeItem = (id) => {
    const newCart = cart.filter(item => item.id !== id);
    setCart(newCart);
    cartService.update(newCart)
  }

  const handleCheckout = () => {
    cartService.order(cart)
    setOrderPlacedMesage('Your order has been placed!')
    setCart([])
  }

  const addItem =(item) => {
    cartService.add(item)
  }


  const getCart = async () => {
    const userCart = await cartService.index()
    console.log('userCart return', userCart)
  }

  const createCart = async () => {
    cartService.create()
  }

  return (
    <>
      <button onClick={getCart}>See Cart</button>
      <button onClick={createCart}>Create Cart</button>

      <div>
        <h2>Checkout Total: ${cartTotal}</h2>
        <h2>{orderPlacedMessage}</h2>
        {cart && cart.length > 0 &&
          <button onClick={handleCheckout}>Place Order</button>
        }
      </div>

      <div className = {styles.cartContainer}>
        <h2>Cart Items</h2>

        {cart && cart.length > 0 ? (
          cart.map((item,ind) => (
            <div className = {styles.itemContainer} key={ind}>

              <div className ={styles.itemCard}>
                <div className = {styles.imgContainer}>
                  <img src={item.image} alt={item.title}/>
                </div>
                <div className = {styles.itemDetails}>
                  <p>{item.title}</p>
                  <p>Price: ${item.price}</p>
                </div>
              </div>
              <div className ={styles.buttonContainer}>
                <button onClick={() => addItem(item)}>Add</button>
                <button onClick={() => removeItem(item.id)}>Remove</button>
              </div>

            </div>
          ))
          

          ) : (
            <h4>Add items to your cart! Visit our marketplace</h4>
        )}

      </div>
       

      
    </>
  );
}

export default Cart;
