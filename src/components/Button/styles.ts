import styled from 'styled-components'

export const ButtonContainer = styled.button`
  width: 100%;
  height: 2.8rem;
  background: ${(props) =>
    props.disabled ? props.theme['base-hover'] : props.theme.green};
  color: ${(props) => props.theme.white};
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`
