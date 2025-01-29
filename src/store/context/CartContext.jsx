import {createContext,useState} from 'react'
import React, { useContext } from 'react';


const CartContext = createContext()
export const CartProvider = ({children})=>{
    const[cartItems,setCartItems]=useState([])

    const addToCart=(item)=>{
        setCartItems([...cartItems, item])
    }

const removeFromCart =()=>{
    setCartItems(cartItems.filter((apple)=> apple!== item))
}

return(
    <CartContext.Provider value={{cartItems, addToCart, removeFromCart}}>
        {children}
    </CartContext.Provider>
)

}
export const useCart = ()=>{
    return useContext(CartContext)
}