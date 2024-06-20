import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import menuItems from '@/resources/menuItems.json'
import { Food, MenuState } from '@/lib/definitions'

const initialState: MenuState = {
  items: menuItems,
}

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setMenuItems(state, action: PayloadAction<Food[]>) {
      state.items = action.payload
    },
  },
})

export const { setMenuItems } = menuSlice.actions

export default menuSlice.reducer
