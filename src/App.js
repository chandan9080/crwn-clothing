import React, { Component } from 'react'
import HomePage from './pages/hompage/hompage.componet'
import { Switch, Route, Redirect } from 'react-router-dom'
import ShopPage from './pages/shoppage/shoppage.component'
import SignInAndSignUp from './pages/sign-in-and-sign-out/sign-in-and-sign-up'
import './App.css'
import { auth, createUserAuth } from './firebase/firebase.utils'
import { connect } from 'react-redux'
import Header from './components/header/header.component'
import { setCurrentUser } from './redux/reducer/users/user.action'
class App extends Component {
  unSubscribeAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props
    this.unSubscribeAuth = auth.onAuthStateChanged(async (userAuth) => {
      const userRef = await createUserAuth(userAuth)
      if (userRef) {
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          })
        })
      }
      setCurrentUser(userAuth)
    })
  }

  componentWillUnmount() {
    this.unSubscribeAuth()
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/sign"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          />
        </Switch>
      </div>
    )
  }
}
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
})
const matchDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
})
export default connect(mapStateToProps, matchDispatchToProps)(App)
