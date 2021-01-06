import React, { Component } from 'react';
import HomePage from './pages/hompage/hompage.componet'
import { Switch, Route } from 'react-router-dom'
import ShopPage from './pages/shoppage/shoppage.component'
import SignInAndSignUp from './pages/sign-in-and-sign-out/sign-in-and-sign-up'
import './App.css'
import { auth } from './firebase/firebase.utils'
import Header from './components/header/header.component'
class App extends Component {
  constructor() {
    super()
    this.state = {
      currentUser: null,
    }
  }
  unSubscribeAuth = null;

  componentDidMount() {
    this.unSubscribeAuth=auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user })
      console.log(user)
    })
  }
  componentWillUnmount() {
    this.unSubscribeAuth()
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/sign" component={SignInAndSignUp} />
        </Switch>
      </div>
    )
  }
}

export default App
