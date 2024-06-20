import styled from 'styled-components'

export const ButtonContainer = styled.button`
  width: 100%;
  height: 2.8rem;
  background: ${(props) => props.theme.green};
  color: ${(props) => props.theme.white};
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`
