import {Link} from 'react-router-dom'
import CartItem from '../CartItem'
import CartContext from '../../context/CartContext'
import './index.css'

const cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      const showEmptyView = cartList.length === 0

      const onClickRemove = () => {
        removeAllCartItems()
      }

      return (
        <div className="cart-container">
          {showEmptyView ? (
            <div className="cart-empty-view-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png"
                className="cart-empty-img"
                alt="cart empty"
              />
              <h1 className="cart-empty-heading">Your Cart Is Empty</h1>
              <Link to="/">
                <button type="button" className="shop-now-btn">
                  Shop Now
                </button>
              </Link>
            </div>
          ) : (
            <div className="cart-content-container">
              <div className="cart-con">
                <h1 className="cart-heading">My Cart</h1>
                <Link to="/">
                  <button type="button" className="home-btn">
                    Home
                  </button>
                </Link>
                <button
                  className="cart-remove-all"
                  type="button"
                  onClick={onClickRemove}
                >
                  Remove All
                </button>
              </div>
              <ul className="cart-list">
                {cartList.map(eachCartItem => (
                  <CartItem
                    key={eachCartItem.dishId}
                    cartItemDetails={eachCartItem}
                  />
                ))}
              </ul>
            </div>
          )}
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default cart
