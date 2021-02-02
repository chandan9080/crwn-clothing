import React from 'react'
import { Route } from 'react-router-dom'
import CollectionOverview from '../../components/collection-overview/collection-overview.components'
import CollectionPage from '../collection/collectioncomponent'
const ShopPage = ({ match }) => {
  //console.log(match)
  return (
    <div>
      <Route exact path={match.path} component={CollectionOverview}>
      </Route>
      <Route path ={`${match.path}/:categories`} component={CollectionPage} />
    </div>
  )
}

export default ShopPage
