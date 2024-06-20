import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const DetailsContainer = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 74rem;
  width: 100%;
  padding-top: 4rem;
  margin: 0 auto;
  gap: 4rem;
  animation: ${fadeIn} 1s ease-in-out;
`

export const FoodDetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  img {
    max-width: 28rem;
  }

  @media screen and (max-width: 1380px) {
    flex-direction: column;
  }

  @media screen and (max-width: 928px) {
    img {
      max-width: 16rem;
    }
  }
`
export const FoodDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 2rem;
  gap: 2rem;
`
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  h2 {
    font-size: 2.25rem;
  }

  h3 {
    color: ${(props) => props.theme['base-label']};
  }

  p {
    font-size: 0.9rem;
    color: ${(props) => props.theme['base-label']};
    line-height: 1.8rem;
  }

  @media screen and (max-width: 928px) {
    h2 {
      font-size: 1.25rem;
    }
  }
`

export const NutritionalInfo = styled.div`
  max-width: 18rem;
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;

    p,
    strong {
      font-size: 0.8rem;
    }

    p {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
export const VerticalLine = styled.div`
  width: 0.025rem;
  height: auto;
  transform: rotate(180deg);
  background: ${(props) => props.theme['base-label']};
`

export const AddToCart = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;

  span {
    font-size: 1.6rem;
    font-weight: bold;
  }
`

export const AddToCartButton = styled.button`
  background: ${(props) => props.theme.yellow};
  display: flex;
  align-items: center;
`
