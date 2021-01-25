import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../../redux/reducer/cart/cart.action'
import CustomButton from '../custom-button/custom-button.component'
import './collection-item.style.scss'
const CollectionItems = ({ item, addItem }) => {
  const { name, price, imageUrl } = item
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span>{name}</span>
        <span>${price}</span>
        <CustomButton onClick={() => addItem(item)} inverted>
          Add To Cart
        </CustomButton>
      </div>
    </div>
  )
}
const mapDispatchProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
})
export default connect(null, mapDispatchProps)(CollectionItems)
