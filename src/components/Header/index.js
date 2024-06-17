import {Link, withRouter} from 'react-router-dom'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import Cookies from 'js-cookie'
import CartContext from '../../context/CartContext'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  const renderCartItemsCount = () => (
    <CartContext.Consumer>
      {value => {
        const {cartList} = value
        const cartItemsCount = cartList.length

        return (
          <>
            {cartItemsCount > 0 ? (
              <span className="cart-count-badge">{cartList.length}</span>
            ) : null}
          </>
        )
      }}
    </CartContext.Consumer>
  )

  return (
    <nav>
      <div className="main">
        <ul className="nav-ul">
          <li>
            <Link to="/" className="nav-link">
              <h1>UNI Resto Cafe</h1>
            </Link>
          </li>
          <li>
            <Link to="/cart" className="nav-link">
              <button type="button" className="pa" data-testid="cart">
                My Orders
                <AiOutlineShoppingCart className="nav-icon" />
                {renderCartItemsCount()}
              </button>
            </Link>
          </li>
        </ul>
        <button
          type="button"
          className="logout-desktop-btn"
          onClick={onClickLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  )
}

export default withRouter(Header)
