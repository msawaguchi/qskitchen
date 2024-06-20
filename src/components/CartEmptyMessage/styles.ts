import styled from 'styled-components'

export const CartEmptyMessageContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 4rem;
  color: ${(props) => props.theme['base-label']};

  svg {
    font-size: 4rem;
    color: ${(props) => props.theme['base-hover']};
  }
`
