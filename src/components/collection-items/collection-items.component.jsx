import React from 'react'
import './collection-item.style.scss'
const CollectionItems = ({ id, name, price, imageUrl }) => (
  <div className="collection-item">
    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="collection-footer">
      <span>{name}</span>
      <span>${price}</span>
    </div>
  </div>
)
export default CollectionItems
