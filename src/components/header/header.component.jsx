import React from 'react'
import { HeaderContainer, LogoContainer, OptionsContainer,OptionDiv,OptionLink} from './header.style'
import { createStructuredSelector } from 'reselect'
//import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { ReactComponent as Logo } from '../../asset/logo.svg'
import { auth } from '../../firebase/firebase.utils'
import './header.style.scss'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdowm from '../cart-dropdown/cart-dropdown.component'
import { selectCartHidden } from '../../redux/reducer/cart/cart.reselect'
import { selectCurrentUser } from '../../redux/reducer/users/user.reselect'
const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink  to="/shop">
        SHOP
      </OptionLink>
      <OptionLink  to="/shop">
        CONTACT
      </OptionLink>
      {currentUser ? (
        <OptionDiv  onClick={() => auth.signOut()}>
          SIGNOUT
        </OptionDiv>
      ) : (
        <OptionLink  to="/sign">
          SIGNIN{' '}
        </OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdowm></CartDropdowm>}
  </HeaderContainer>
)
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
})
export default connect(mapStateToProps)(Header)
