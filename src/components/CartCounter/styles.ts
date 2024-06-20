import styled from 'styled-components'

export const CartCounterContainer = styled.div`
  width: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  border-radius: 0.6rem;
  background: ${(props) => props.theme['base-input']};
  font-size: 0.8rem;
  font-weight: bold;
  color: ${(props) => props.theme['base-label']};

  button {
    background: ${(props) => props.theme.white};
    border: 1px solid ${(props) => props.theme['base-input']};
    padding: 0.4rem;

    svg {
      font-size: 1rem;
      color: ${(props) => props.theme['base-label']};
    }

    &:hover {
      background: ${(props) => props.theme.yellow};
      color: ${(props) => props.theme.white};
      cursor: pointer;

      svg {
        color: ${(props) => props.theme.white};
      }
    }
  }
`
