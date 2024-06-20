import { useSelector, useDispatch } from 'react-redux'
import { TiArrowForward } from 'react-icons/ti'
import { collapseCart } from '@/redux/cartCollapseSlice'
import { RootState } from '@/lib/definitions'
import { Button } from '../Button'
import { CartPaymentOptions } from '../CartPaymentOptions'
import { CartOrderPrice } from '../CartOrderPrice'
import { CartEmptyMessage } from '../CartEmptyMessage'
import { CartListItem } from '../CartListItem'

import { CartContainer, CartTitle, CartListItems, CheckoutInfo } from './styles'

export function Cart() {
  const cart = useSelector((state: RootState) => state.cart.cart)

  const cartCollapsed = useSelector(
    (state: RootState) => state.cartCollapse.cartCollapsed,
  )

  const dispatch = useDispatch()

  const handleCollapseCart = () => {
    dispatch(collapseCart())
  }

  return (
    <CartContainer $isopen={cartCollapsed}>
      <div>
        <CartTitle>
          <h2>My order</h2>
          <button onClick={handleCollapseCart}>x</button>
        </CartTitle>
        <CartListItems>
          {cart.length ? (
            cart.map((item) => <CartListItem key={item.id} item={item} />)
          ) : (
            <CartEmptyMessage />
          )}
        </CartListItems>
      </div>
      <CheckoutInfo>
        <CartOrderPrice />
        <CartPaymentOptions />
        <Button
          onClick={() => {
            alert('comprou')
          }}
        >
          <TiArrowForward />
          Checkout
        </Button>
      </CheckoutInfo>
    </CartContainer>
  )
}
