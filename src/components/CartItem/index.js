import {AiFillCloseCircle} from 'react-icons/ai'
import CartContext from '../../context/CartContext'
import './index.css'

const CartItem = props => (
  <CartContext.Consumer>
    {value => {
      const {
        removeCartItem,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
      } = value
      const {cartItemDetails} = props
      const {dishId, dishName, quantity, dishImage, dishPrice} = cartItemDetails
      const circle = <AiFillCloseCircle color="#616E7C" size={20} />
      const onRemoveCartItem = () => {
        removeCartItem(dishId)
      }

      const onClickPlus = () => {
        incrementCartItemQuantity(dishId)
      }

      const onClickMinus = () => {
        decrementCartItemQuantity(dishId)
      }

      return (
        <li className="cart-item">
          <img className="cart-product-image" src={dishImage} alt={dishName} />
          <div className="cart-item-details-container">
            <div className="cart-product-title-brand-container">
              <p className="cart-product-title">{dishName}</p>
            </div>
            <div className="cart-quantity-container">
              <button
                type="button"
                className="quantity-controller-button"
                onClick={onClickMinus}
              >
                +
              </button>
              <p className="cart-quantity">{quantity}</p>
              <button
                type="button"
                className="quantity-controller-button"
                onClick={onClickPlus}
              >
                -
              </button>
            </div>
            <div className="total-price-remove-container">
              <p className="cart-total-price">Rs {dishPrice * quantity}/-</p>
              <button
                className="remove-button"
                type="button"
                onClick={onRemoveCartItem}
              >
                Remove
              </button>
            </div>
          </div>
          <button
            className="delete-button"
            type="button"
            onClick={onRemoveCartItem}
          >
            {circle}
          </button>
        </li>
      )
    }}
  </CartContext.Consumer>
)

export default CartItem
