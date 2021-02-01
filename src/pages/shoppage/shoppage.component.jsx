import React from 'react'
import CollectionPreview from '../../components/preview-collection/collection-preview.component'
import { selectShopCollections } from '../../redux/reducer/shop/shop.reselect'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
const ShopPage=({collections})=>{
    return (
      <div>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    )
  }
const mapStateToProps = createStructuredSelector({
  collections:selectShopCollections
})

export default connect(mapStateToProps)(ShopPage)
