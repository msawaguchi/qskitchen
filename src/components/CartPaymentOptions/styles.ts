import styled, { css } from 'styled-components'

export const PaymentOptionsContainer = styled.div`
  padding: 2rem 0rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(4rem, 1fr));
  gap: 1rem;
  text-align: center;
`

export const PaymentOption = styled.div<{ selected: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 0.725rem;
  font-weight: bold;

  div {
    width: 100%;
    padding: 1rem;
    margin-bottom: 1rem;
    border: 1px solid ${(props) => props.theme['base-input']};
    border-radius: 1rem;
    text-align: center;

    ${(props) =>
      props.selected &&
      css`
        background: ${(props) => props.theme.yellow};
        color: ${(props) => props.theme.white};
      `}

    &:hover {
      background: ${(props) => props.theme.yellow};
      color: ${(props) => props.theme.white};
      cursor: pointer;
    }
  }
`
