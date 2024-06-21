import { useSelector, useDispatch } from 'react-redux'
import { TiArrowForward } from 'react-icons/ti'
import { ToastContainer, toast } from 'react-toastify'
import { collapseCart } from '@/redux/cartCollapseSlice'
import { resetCart } from '@/redux/cartSlice'
import { RootState } from '@/lib/definitions'
import { Button } from '../Button'
import { CartPaymentOptions } from '../CartPaymentOptions'
import { CartOrderPrice } from '../CartOrderPrice'
import { CartEmptyMessage } from '../CartEmptyMessage'
import { CartListItem } from '../CartListItem'

import { CartContainer, CartTitle, CartListItems, CheckoutInfo } from './styles'
import 'react-toastify/dist/ReactToastify.css'

export function Cart() {
  const cart = useSelector((state: RootState) => state.cart.cart)

  const cartCollapsed = useSelector(
    (state: RootState) => state.cartCollapse.cartCollapsed,
  )

  const dispatch = useDispatch()

  const handleCollapseCart = () => {
    dispatch(collapseCart())
  }

  const promise1sec = () => new Promise((resolve) => setTimeout(resolve, 1000))

  const handleCheckout = () => {
    if (!cart.length) return

    toast.promise(promise1sec, {
      pending: 'Loading order...',
      success: 'Order made successfully!',
    })
    dispatch(resetCart())
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
        <Button onClick={handleCheckout} disabled={!cart.length}>
          <TiArrowForward />
          Checkout
        </Button>
        <ToastContainer position="bottom-center" pauseOnFocusLoss={false} />
      </CheckoutInfo>
    </CartContainer>
  )
}
