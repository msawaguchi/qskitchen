import { ButtonContainer } from './styles'

interface ButtonProps {
  children: React.ReactNode
  onClick: () => void
  disabled: boolean
}

export function Button({ children, onClick, disabled }: ButtonProps) {
  return (
    <ButtonContainer onClick={onClick} disabled={disabled}>
      {children}
    </ButtonContainer>
  )
}
