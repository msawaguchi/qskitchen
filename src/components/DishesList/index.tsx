import { DishesListContainer } from './styles'

interface DishesListProps {
  children: React.ReactNode
}
export function DishesList({ children }: DishesListProps) {
  return <DishesListContainer>{children}</DishesListContainer>
}
