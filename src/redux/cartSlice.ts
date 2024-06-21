import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CartItem, CartState } from '@/lib/definitions'

const loadState = (): CartState => {
  try {
    const serializedState = localStorage.getItem('cart@QSKitchen')
    if (serializedState === null) {
      return {
        cart: [],
        totalCart: 0,
        totalQuantity: 0,
      }
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return {
      cart: [],
      totalCart: 0,
      totalQuantity: 0,
    }
  }
}

const saveState = (state: CartState) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('cart@QSKitchen', serializedState)
  } catch (err) {
    console.error('Could not save state', err)
  }
}

const calculateTotalCart = (cart: CartItem[]): number => {
  return cart.reduce((total, item) => total + item.totalPrice, 0)
}

const calculateTotalQuantity = (cart: CartItem[]): number => {
  return cart.reduce((total, item) => total + item.quantity, 0)
}

const initialState: CartState = loadState()

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<Omit<CartItem, 'quantity' | 'totalPrice'>>,
    ) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id,
      )

      if (existingItem) {
        existingItem.quantity += 1
        existingItem.totalPrice = existingItem.quantity * existingItem.price
      } else {
        state.cart.push({
          ...action.payload,
          quantity: 1,
          totalPrice: action.payload.price,
        })
      }
      state.totalCart = calculateTotalCart(state.cart)
      state.totalQuantity = calculateTotalQuantity(state.cart)
      saveState(state)
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((x) => x.id !== action.payload)
      state.totalCart = calculateTotalCart(state.cart)
      state.totalQuantity = calculateTotalQuantity(state.cart)
      saveState(state)
    },
    subtractFromCart: (state, action) => {
      const existingItem = state.cart.find((item) => item.id === action.payload)
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1
        } else {
          state.cart = state.cart.filter((x) => x.id !== action.payload)
        }
      }
      state.totalCart = calculateTotalCart(state.cart)
      state.totalQuantity = calculateTotalQuantity(state.cart)
      saveState(state)
    },
    resetCart: (state) => {
      state.cart = []
      state.totalCart = 0
      state.totalQuantity = 0
      saveState(state)
    },
  },
})

export default cartSlice.reducer
export const { addToCart, removeFromCart, subtractFromCart, resetCart } =
  cartSlice.actions
