import { createSelector } from 'reselect'
const selectShop = (state) => state.shop
export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections,
)
export const selectShopCollectionsPreview = createSelector(
  [selectShopCollections],
  (collections) => Object.keys(collections).map((key) => collections[key]),
)
export const selectCollection = (collectionUrlPrams) =>
  createSelector(
    [selectShopCollections],
    (collections) => collections[collectionUrlPrams],
  )
