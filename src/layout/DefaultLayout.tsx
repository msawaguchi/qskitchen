import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '@/lib/definitions'
import { Header } from '@/components/Header'
import { Cart } from '@/components/Cart'
import { LayoutContainer, LeftContainer } from './styles'
import { Footer } from '@/components/Footer'

export function DefaultLayout() {
  const cartCollapsed = useSelector(
    (state: RootState) => state.cartCollapse.cartCollapsed,
  )

  return (
    <LayoutContainer>
      <LeftContainer $iscartopen={cartCollapsed}>
        <Header />
        <Outlet />
        <Footer />
      </LeftContainer>
      <Cart />
    </LayoutContainer>
  )
}
