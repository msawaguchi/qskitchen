import styled from 'styled-components'

export const FooterContainer = styled.footer`
  width: 100%;
  height: 12rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 0.8rem;

  img {
    width: 10rem;
  }

  small {
    font-size: 0.6rem;
    color: ${(props) => props.theme['base-label']};
  }
`
