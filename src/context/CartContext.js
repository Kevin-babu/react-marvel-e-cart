import React, {useContext } from "react"
import useLocalStorage  from "../hooks/useLocalStorage"

const ShoppingCartContext = React.createContext()

export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({children}) {
  
 
  
  const [cartItems, setCartItems] = useLocalStorage("shopping-cart",   []   )

  
  
  const cartQuantity = cartItems.reduce(    (quantity, item) => quantity + item.quantity ,    0  )

  
  function getItemQuantity(id) {
    return (cartItems.find(item => item.id === id))?.quantity || 0 }
  function setIncrement(id) {
    setCartItems(prevItems => {
      if (prevItems.find(item => item.id === id) == null) {
        return [...prevItems, { id, quantity: 1 }]
      } else {
        return prevItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }
  function setDecrement(id) {
    setCartItems(prevItems => {
      if (prevItems.find(item => item.id === id)?.quantity === 1) {
        return prevItems.filter(item => item.id !== id)
      } else {
        return prevItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }
  function removeFromCart(id) {
    setCartItems(currItems => {
      return currItems.filter(item => item.id !== id)
    })
  }


  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        setIncrement,
        setDecrement,
        removeFromCart,
       
        cartItems,
        cartQuantity,
      }}
    >{children}
    </ShoppingCartContext.Provider>
  )
}