import styled, { keyframes } from 'styled-components'

const slideInFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const CardDishesContainer = styled.div`
  width: 16rem;
  margin-top: 2rem;
  padding: 2rem;
  border-radius: 2rem;
  background: ${(props) => props.theme.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow:
    rgba(17, 17, 26, 0.05) 0px 4px 16px,
    rgba(17, 17, 26, 0.05) 0px 8px 32px;
  animation: ${slideInFromLeft} 0.5s ease-out;

  img {
    height: 8rem;
    width: auto;
    max-width: 10rem;
    margin-top: -4rem;
    margin-bottom: 1rem;
    border-radius: 50%;
  }

  &:hover {
    cursor: pointer;
    background: ${(props) => props.theme.yellow};
    color: ${(props) => props.theme.white};
    transition: background 0.4s;

    button {
      background: ${(props) => props.theme.white};
      color: ${(props) => props.theme.yellow};
    }

    span {
      color: ${(props) => props.theme.white};
    }
  }

  @media (max-width: 917px) {
    width: 100%;
  }
`

export const FoodDetails = styled.div`
  width: 100%;
  padding: 0.8rem 0;
  margin: 0.8rem 0;
  border-top: 1px solid ${(props) => props.theme['base-button']};
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  text-align: center;

  span {
    color: ${(props) => props.theme['base-label']};
    font-size: 0.85rem;
  }
`

export const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
`

export const AddToCartButton = styled.button`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
`
