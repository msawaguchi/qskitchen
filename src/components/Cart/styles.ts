import styled from 'styled-components'

interface CartContainerProps {
  $isopen: boolean
}

export const CartContainer = styled.div<CartContainerProps>`
  width: ${({ $isopen }) => ($isopen ? '24rem' : '0rem')};
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  padding: 2rem;
  border-radius: 2rem;
  background-color: ${(props) => props.theme.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.8s ease;
  transform: ${({ $isopen }) =>
    $isopen ? 'translateX(0)' : 'translateX(100%)'};
  overflow-y: scroll;
`

export const CartTitle = styled.div`
  display: flex;
  justify-content: space-between;
`

export const CartListItems = styled.div`
  margin-top: 1rem;
`

export const CheckoutInfo = styled.div`
  margin-top: 1rem;
`
