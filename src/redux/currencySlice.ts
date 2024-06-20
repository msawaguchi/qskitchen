import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CurrencyState {
  currency: string
  locale: string
}

const initialState: CurrencyState = {
  currency: 'USD',
  locale: 'en-US',
}

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setCurrency: (state, action: PayloadAction<{ currency: string }>) => {
      state.currency = action.payload.currency
    },
  },
})

export const { setCurrency } = currencySlice.actions
export default currencySlice.reducer
