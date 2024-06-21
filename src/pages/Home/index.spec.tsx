import { render, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '@/redux/store'
import { Home } from './index'

describe('Home Component', () => {
  it('should render menu list items.', () => {
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    )

    expect(getByText('Margherita Classic')).toBeInTheDocument()
    expect(getByText('Quinoa Avocado Salad')).toBeInTheDocument()
    expect(getByText('Cobb Salad')).toBeInTheDocument()
  })

  it('should filter dishes on menu by category.', () => {
    const { getByText, getAllByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    )

    const pizzaOption = getByText('Pizzas')
    fireEvent.click(pizzaOption)

    const pizzaItems = getAllByTestId('card-food')

    expect(pizzaItems).toHaveLength(5)
  })
})
