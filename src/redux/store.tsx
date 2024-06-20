import { configureStore } from '@reduxjs/toolkit'
import menuReducer from './menuSlice'
import cartSlice from './cartSlice'
import cartCollapseSlice from './cartCollapseSlice'
import currencyReducer from './currencySlice'

const store = configureStore({
  reducer: {
    menu: menuReducer,
    cart: cartSlice,
    cartCollapse: cartCollapseSlice,
    currency: currencyReducer,
  },
})

export default store
