import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { ReactComponent as Logo } from '../../asset/logo.svg'
import { auth } from '../../firebase/firebase.utils'
import './header.style.scss'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdowm from '../cart-dropdown/cart-dropdown.component'
const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGNOUT
        </div>
      ) : (
        <Link className="option" to="/sign">
          SIGNIN{' '}
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdowm></CartDropdowm>}
  </div>
)
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
})
export default connect(mapStateToProps)(Header)
