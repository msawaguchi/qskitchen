import { useNavigate } from 'react-router-dom'
import { PiShoppingCartSimpleFill } from 'react-icons/pi'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrency } from '@/redux/currencySlice'
import { toggleCart } from '@/redux/cartCollapseSlice'
import { RootState } from '@/lib/definitions'
import logoImg from '@/assets/logo.png'

import {
  HeaderContainer,
  MenuButton,
  ShoppingCartButton,
  CartQuantityCounter,
  SelectCurrency,
} from './styles'

export function Header() {
  const totalQuantity = useSelector(
    (state: RootState) => state.cart.totalQuantity,
  )
  const currencyState = useSelector((state: RootState) => state.currency)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleCurrencyChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const value = event.target.value
    dispatch(setCurrency({ currency: value }))
  }

  const handleToggleCart = () => {
    dispatch(toggleCart())
  }

  const handleNavigateToHome = () => {
    navigate(`/`)
  }

  return (
    <HeaderContainer>
      <div>
        <MenuButton onClick={handleNavigateToHome}>
          <img src={logoImg} alt="QSKitchen" />
        </MenuButton>
      </div>
      <div>
        <SelectCurrency
          value={currencyState.currency}
          onChange={handleCurrencyChange}
        >
          <option value="BRL">BRL - Real</option>
          <option value="USD">USD - Dollar</option>
          <option value="EUR">EUR - Euro</option>
        </SelectCurrency>
        <ShoppingCartButton onClick={handleToggleCart}>
          <PiShoppingCartSimpleFill />
          <CartQuantityCounter>{totalQuantity}</CartQuantityCounter>
        </ShoppingCartButton>
      </div>
    </HeaderContainer>
  )
}
