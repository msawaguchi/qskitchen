import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;
  background: ${(props) => props.theme['gray-800']};
  position: relative;
  overflow-x: hidden;

  @media (max-width: 668px) {
    padding: 0rem;
  }
`

interface LeftContainerProps {
  $iscartopen: boolean
}

export const LeftContainer = styled.div<LeftContainerProps>`
  flex: 1;
  max-width: 128rem;
  margin: 0 auto;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  transition: margin-right 0.7s ease;

  ${({ $iscartopen }) => $iscartopen && 'margin-right: 24rem'};

  @media screen and (max-width: 1600px) {
    width: calc(100vw - 24rem);
  }

  @media screen and (max-width: 600px) {
    padding: 1rem;
  }
`
