import CartContext from '../../context/CartContext'
import './index.css'

const Items = props => (
  <CartContext.Consumer>
    {value => {
      const {addCartItem} = value
      const {productDetails, dishCount, increment, decrement} = props
      const {
        dishId,
        dishName,
        dishPrice,
        dishImage,
        dishCurrency,
        dishCalories,
        dishDescription,
        dishAvailability,
        addonCat,
      } = productDetails
      const c = dishCount.find(item => item.id === dishId)
      let co
      if (c === undefined) {
        co = 0
      } else {
        co = c.quantity
      }
      const disp = addonCat.length
      const disp1 = disp !== 0
      const inc = () => {
        increment(dishId)
      }
      const dec = () => {
        decrement(dishId)
      }

      const renderCartItem = () => {
        addCartItem({...productDetails, quantity: co})
      }

      return (
        <li className="li">
          <div className="main1">
            <h1 className="h1 margin">{dishName}</h1>
            <h1 className="h1 margin">{`${dishCurrency} ${dishPrice}`}</h1>
            <p className="margin">{dishDescription}</p>
            {dishAvailability && (
              <div className="btn-con">
                <div className="con margin">
                  <button type="button" className="b2" onClick={dec}>
                    -
                  </button>
                  <p className="margin">{co}</p>
                  <button type="button" className="b2" onClick={inc}>
                    +
                  </button>
                </div>
                <button
                  type="button"
                  className="cart-btn"
                  onClick={renderCartItem}
                >
                  ADD TO CART
                </button>
              </div>
            )}
            {!dishAvailability && <p className="margin p3">Not Available</p>}
            {disp1 && <p className="p1 margin">Customizations available</p>}
          </div>
          <div className="p2 margin">{`${dishCalories} calories`}</div>
          <img className="img margin" src={dishImage} alt="dishImage" />
        </li>
      )
    }}
  </CartContext.Consumer>
)

export default Items
