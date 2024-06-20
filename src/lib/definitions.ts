export interface Food {
  id: number
  name: string
  description: string
  pathImage: string
  category: string
  price: number
  calories: number
  fats: number
  proteins: number
}

export interface MenuState {
  items: Food[]
}

export interface CartItem extends Food {
  quantity: number
  totalPrice: number
}

export interface CartState {
  cart: CartItem[]
  totalCart: number
  totalQuantity: number
}

export interface CartCollapseState {
  cartCollapsed: boolean
}

export interface CurrencyState {
  currency: string
  locale: string
}

export interface RootState {
  menu: MenuState
  cart: CartState
  cartCollapse: CartCollapseState
  currency: CurrencyState
}

export interface PaymentMethods {
  method: 'cash' | 'card' | 'qrcode'
}
