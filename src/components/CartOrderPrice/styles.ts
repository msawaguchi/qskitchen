import styled from 'styled-components'

export const CartOrderPriceContainer = styled.div`
  padding: 2rem;
  border-radius: 1rem;
  background: ${(props) => props.theme['base-input']};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const TotalInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  margin-top: 0.4rem;
  border-top: 1px dashed ${(props) => props.theme['base-label']};
`

export const SubtotalInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: ${(props) => props.theme['base-text']};
`
