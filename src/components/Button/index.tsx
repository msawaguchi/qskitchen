import { ButtonContainer } from './styles'

interface ButtonProps {
  children: React.ReactNode
  onClick: () => void
}

export function Button({ children, onClick }: ButtonProps) {
  return <ButtonContainer onClick={onClick}>{children}</ButtonContainer>
}
