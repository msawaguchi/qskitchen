import { createSlice } from '@reduxjs/toolkit'

interface CartCollapseState {
  cartCollapsed: boolean
}

const isMobile = () => window.innerWidth <= 768

const initialState: CartCollapseState = {
  cartCollapsed: !isMobile(),
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
