import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const CartListItemContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1rem 0rem;
  animation: ${fadeIn} 0.5s ease-out;

  img {
    height: 4rem;
    width: auto;
  }

  b,
  span {
    font-size: 0.8rem;
  }
`

export const CartListItemDescription = styled.div`
  width: 13rem;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const CartListItemTitlePrice = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    color: ${(props) => props.theme['base-text']};
    font-weight: bold;
  }
`

export const CartListItemBottom = styled.div`
  display: flex;
  justify-content: space-between;
`

export const CartListItemDeleteButton = styled.button`
  padding: 0.2rem;
  color: ${(props) => props.theme['base-label']};
  display: flex;
  align-items: center;

  &:hover {
    background: ${(props) => props.theme.red};
    color: ${(props) => props.theme.white};
  }
`
