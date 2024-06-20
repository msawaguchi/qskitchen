import { MdNoFood } from 'react-icons/md'

import { CartEmptyMessageContainer } from './styles'

export function CartEmptyMessage() {
  return (
    <CartEmptyMessageContainer>
      <MdNoFood />
      <strong>Your cart is empty</strong>
      <small>Looks like you have not made your choice yet...</small>
    </CartEmptyMessageContainer>
  )
}
