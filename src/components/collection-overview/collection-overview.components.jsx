import React from 'react'
import './collection-overview.styles.scss'
import CollectionPreview from '../preview-collection/collection-preview.component'
import { selectShopCollections } from '../../redux/reducer/shop/shop.reselect'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
const CollectionOverview = ({ collections }) => {
    return (
        <div className="collection-overview">
            {collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
})

export default connect(mapStateToProps)(CollectionOverview)
