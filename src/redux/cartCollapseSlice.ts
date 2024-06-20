import { createSlice } from '@reduxjs/toolkit'

interface CartCollapseState {
  cartCollapsed: boolean
}

const initialState: CartCollapseState = {
  cartCollapsed: true,
}

const cartCollapseSlice = createSlice({
  name: 'cartCollapse',
  initialState,
  reducers: {
    collapseCart: (state) => {
      state.cartCollapsed = false
    },
    expandCart: (state) => {
      state.cartCollapsed = true
    },
    toggleCart: (state) => {
      state.cartCollapsed = !state.cartCollapsed
    },
  },
})

export const { collapseCart, expandCart, toggleCart } =
  cartCollapseSlice.actions
export default cartCollapseSlice.reducer
