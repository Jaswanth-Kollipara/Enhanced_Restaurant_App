import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import Cart from './components/Cart'
import CartContext from './context/CartContext'
import './App.css'

class App extends Component {
  state = {
    cartList: [],
  }

  removeAllCartItems = () => {
    this.setState({cartList: []})
  }

  removeCartItem = id => {
    const {cartList} = this.state
    const updatedCart = cartList.filter(item => item.id !== id)
    this.setState({cartList: updatedCart})
  }

  incrementCartItemQuantity = id => {
    this.setState(prevState => ({
      cartList: prevState.cartList.map(eachContact => {
        if (id === eachContact.id) {
          return {...eachContact, quantity: prevState.quantity + 1}
        }
        return eachContact
      }),
    }))
  }

  decrementCartItemQuantity = id => {
    const {cartList} = this.state
    const result = cartList.find(item => item.id === id)
    if (result.quantity > 1) {
      this.setState(prevState => ({
        cartList: prevState.cartList.map(eachContact => {
          if (id === eachContact.id) {
            return {...eachContact, quantity: prevState.quantity - 1}
          }
          return eachContact
        }),
      }))
    } else {
      this.removeCartItem(id)
    }
  }

  addCartItem = product => {
    const {cartList} = this.state
    const result = cartList.find(item => item.id === product.id)
    if (result !== undefined) {
      this.setState(prevState => ({
        cartList: prevState.cartList.map(eachContact => {
          if (product.id === eachContact.id) {
            return {
              ...eachContact,
              quantity: prevState.quantity + product.quantity,
            }
          }
          return eachContact
        }),
      }))
    } else {
      this.setState(prevState => ({cartList: [...prevState.cartList, product]}))
    }
  }

  render() {
    const {cartList} = this.state

    return (
      <CartContext.Provider
        value={{
          cartList,
          removeAllCartItems: this.removeAllCartItems,
          addCartItem: this.addCartItem,
          removeCartItem: this.removeCartItem,
          incrementCartItemQuantity: this.incrementCartItemQuantity,
          decrementCartItemQuantity: this.decrementCartItemQuantity,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </CartContext.Provider>
    )
  }
}

export default App
