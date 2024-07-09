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
    headerText: '',
  }

  removeAllCartItems = () => {
    this.setState({cartList: []})
  }

  removeCartItem = id => {
    const {cartList} = this.state
    const updatedCart = cartList.filter(item => item.dishId !== id)
    this.setState({cartList: updatedCart})
  }

  incrementCartItemQuantity = id => {
    this.setState(prevState => ({
      cartList: prevState.cartList.map(eachContact => {
        if (id === eachContact.dishId) {
          return {...eachContact, quantity: eachContact.quantity + 1}
        }
        return eachContact
      }),
    }))
  }

  decrementCartItemQuantity = id => {
    const {cartList} = this.state
    const result = cartList.find(item => item.dishId === id)
    if (result.quantity > 1) {
      this.setState(prevState => ({
        cartList: prevState.cartList.map(eachContact => {
          if (id === eachContact.dishId) {
            return {...eachContact, quantity: eachContact.quantity - 1}
          }
          return eachContact
        }),
      }))
    } else {
      this.removeCartItem(id)
    }
  }

  setHeaderText = text => {
    this.setState({headerText: text})
  }

  addCartItem = product => {
    const {cartList} = this.state
    const result = cartList.find(item => item.dishId === product.dishId)
    if (result !== undefined) {
      this.setState(prevState => ({
        cartList: prevState.cartList.map(eachContact => {
          if (product.dishId === eachContact.dishId) {
            return {
              ...eachContact,
              quantity: eachContact.quantity + product.quantity,
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
    const {cartList, headerText} = this.state

    return (
      <CartContext.Provider
        value={{
          cartList,
          headerText,
          setHeaderText: this.setHeaderText,
          removeAllCartItems: this.removeAllCartItems,
          addCartItem: this.addCartItem,
          removeCartItem: this.removeCartItem,
          incrementCartItemQuantity: this.incrementCartItemQuantity,
          decrementCartItemQuantity: this.decrementCartItemQuantity,
        }}
      >
        <div>
          <Switch>
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/" component={Home} />
            <Route exact path="/cart" component={Cart} />
          </Switch>
        </div>
      </CartContext.Provider>
    )
  }
}

export default App
