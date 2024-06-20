import { FooterContainer } from './styles'
import logoImage from '@/assets/logo.png'

export function Footer() {
  return (
    <FooterContainer>
      <img src={logoImage} alt="QSKitchen" />
      <small>Made by @msawaguchi</small>
    </FooterContainer>
  )
}
