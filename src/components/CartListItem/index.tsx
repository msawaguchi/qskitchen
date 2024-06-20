import { useDispatch, useSelector } from 'react-redux'
import { TiDelete } from 'react-icons/ti'
import { removeFromCart } from '@/redux/cartSlice'
import { priceFormatter } from '@/utils/priceFormatter'
import { CartItem, RootState } from '@/lib/definitions'
import { CartCounter } from '../CartCounter'

import {
  CartListItemContainer,
  CartListItemDescription,
  CartListItemTitlePrice,
  CartListItemBottom,
  CartListItemDeleteButton,
} from './styles'

interface CartItemProps {
  item: CartItem
}

export function CartListItem({ item }: CartItemProps) {
  const { currency, locale } = useSelector((state: RootState) => state.currency)
  const dispatch = useDispatch()

  return (
    <CartListItemContainer key={item.id}>
      <img src={item.pathImage} alt="" />
      <CartListItemDescription>
        <CartListItemTitlePrice>
          <b>{item.name}</b>
          <span>
            {priceFormatter(
              item.totalPrice ? item.totalPrice : item.price,
              locale,
              currency,
            )}
          </span>
        </CartListItemTitlePrice>
        <CartListItemBottom>
          <CartCounter item={item} quantity={item.quantity} />
          <CartListItemDeleteButton
            onClick={() => dispatch(removeFromCart(item.id))}
          >
            <TiDelete />
          </CartListItemDeleteButton>
        </CartListItemBottom>
      </CartListItemDescription>
    </CartListItemContainer>
  )
}
