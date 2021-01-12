import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import './collection-item.style.scss'
const CollectionItems = ({ id, name, price, imageUrl }) => (
  <div className="collection-item">
    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="collection-footer">
      <span>{name}</span>
      <span>${price}</span>
      <CustomButton inverted>Add To Cart</CustomButton>
    </div>
  </div>
)
export default CollectionItems
