import styled from 'styled-components'

export const HeaderContainer = styled.nav`
  height: 2.8rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;

  div {
    display: flex;
    gap: 0.6rem;
  }
`

export const MenuButton = styled.a`
  &:hover {
    cursor: pointer;
  }
`

export const SelectCurrency = styled.select`
  border: 2px solid ${(props) => props.theme['base-hover']};
  border-radius: 0.5rem;
  background: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-label']};
`

export const ShoppingCartButton = styled.button`
  height: 2.8rem;
  background: ${(props) => props.theme['yellow-light']};
  border: 2px solid ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.yellow};
`

export const ProfileButton = styled.button`
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme.yellow};
`

export const CartQuantityCounter = styled.div`
  position: absolute;
  top: 2rem;
  margin-left: 1.2rem;
  width: 1.4rem;
  height: 1.4rem;
  border: 1px solid white;
  border-radius: 50%;
  background: ${(props) => props.theme.green};
  color: white;
  font-size: 0.8rem;
  font-weight: bold;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 600px) {
    top: 0.8rem;
  }
`
