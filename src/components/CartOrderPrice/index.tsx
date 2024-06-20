import { useSelector } from 'react-redux'
import { priceFormatter } from '@/utils/priceFormatter'
import { RootState } from '@/lib/definitions'

import { CartOrderPriceContainer, TotalInfo, SubtotalInfo } from './styles'

export function CartOrderPrice() {
  const totalCart = useSelector((state: RootState) => state.cart.totalCart)
  const { currency, locale } = useSelector((state: RootState) => state.currency)

  return (
    <CartOrderPriceContainer>
      <SubtotalInfo>
        <span>Sub Total:</span>
        <b>{priceFormatter(totalCart, locale, currency)}</b>
      </SubtotalInfo>
      <SubtotalInfo>
        <span>Tax:</span>
        <b> {priceFormatter(1.5, locale, currency)}</b>
      </SubtotalInfo>
      <TotalInfo>
        <strong>Total:</strong>
        <strong>
          {totalCart > 0
            ? priceFormatter(totalCart + 1.5, locale, currency)
            : '---'}
        </strong>
      </TotalInfo>
    </CartOrderPriceContainer>
  )
}
