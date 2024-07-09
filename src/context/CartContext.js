import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  headerText: '',
  setHeaderText: () => {},
  removeAllCartItems: () => {},
  addCartItem: () => {},
  removeCartItem: () => {},
  incrementCartItemQuantity: () => {},
  decrementCartItemQuantity: () => {},
})

export default CartContext
