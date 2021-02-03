import React from 'react'
import { connect } from 'react-redux'
import { selectCollection } from '../../redux/reducer/shop/shop.reselect'
import './collection.styles.scss'
import CollectionItem from '../../components/collection-items/collection-items.component'
const CollectionPage = ({ collection }) => {
  const { items, title } = collection
  
  return (
    <div className="collection-page">
          <h1 className='title'>{title}</h1>
          <div className="items">{items.map(item => (<CollectionItem key={item.id} item={item}/>))}</div>
    </div>
  )
}
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.categories)(state),
})
export default connect(mapStateToProps)(CollectionPage)
