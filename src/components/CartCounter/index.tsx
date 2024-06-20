import { useDispatch } from 'react-redux'
import { TiMinus, TiPlus } from 'react-icons/ti'
import { addToCart, subtractFromCart } from '@/redux/cartSlice'
import { Food } from '@/lib/definitions'

import { CartCounterContainer } from './styles'

interface CartCounterProps {
  item: Food
  quantity: number
}

export function CartCounter({ item, quantity }: CartCounterProps) {
  const dispatch = useDispatch()

  const handleAddToCart = (
    item: Food,
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.stopPropagation()
    dispatch(addToCart(item))
  }

  const handleSubctractFromCart = (
    item: Food,
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.stopPropagation()
    dispatch(subtractFromCart(item.id))
  }

  return (
    <CartCounterContainer>
      <button onClick={(event) => handleSubctractFromCart(item, event)}>
        <TiMinus />
      </button>
      {quantity}
      <button onClick={(event) => handleAddToCart(item, event)}>
        <TiPlus />
      </button>
    </CartCounterContainer>
  )
}
