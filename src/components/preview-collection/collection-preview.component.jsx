import React from 'react'
import './collection-preview.styles.scss'
import CollectionItems from '../collection-items/collection-items.component'

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview ">
    <h1 className="title" >{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((_item, idx) => idx < 4)
        .map((item) => (
          <CollectionItems key={item.id} item={item} />
        ))}
    </div>
  </div>
)
export default CollectionPreview
