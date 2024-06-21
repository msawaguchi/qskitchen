import { render, fireEvent, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '@/redux/store'
import { CardFood } from './index'

describe('CardFood Component', () => {
  it('should add item to cart on clicking Add to Cart button', () => {
    const item = {
      id: 4,
      name: 'Margherita Classic',
      description:
        'A garden-fresh pizza with bell peppers, onions, mushrooms, and olives on a bed of marinara sauce and cheese. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      pathImage: '/assets/products/pizza4.png',
      category: 'pizza',
      price: 11.75,
      calories: 460,
      fats: 12,
      proteins: 16,
    }

    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <CardFood item={item} />
        </BrowserRouter>
      </Provider>,
    )

    expect(store.getState().cart.cart).toHaveLength(0)

    const addToCartButton = getByTestId('add-to-cart-button')
    fireEvent.click(addToCartButton)

    expect(store.getState().cart.cart).toHaveLength(1)
    expect(store.getState().cart.cart[0].id).toBe(item.id)
    expect(store.getState().cart.totalQuantity).toBe(1)
  })

  it('should show CartCounter after adding item to cart', async () => {
    const item = {
      id: 14,
      name: 'Classic Cheeseburger',
      description:
        'Juicy beef patty topped with melted cheddar cheese, lettuce, tomatoes, and pickles on a toasted bun. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      pathImage: '/assets/products/burger1.png',
      category: 'burger',
      price: 11.0,
      calories: 750,
      fats: 35,
      proteins: 32,
    }

    const { getByTestId, queryByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <CardFood item={item} />
        </BrowserRouter>
      </Provider>,
    )

    const addToCartButton = getByTestId('add-to-cart-button')
    expect(addToCartButton).toBeInTheDocument()

    fireEvent.click(addToCartButton)

    await waitFor(() => {
      expect(queryByTestId('add-to-cart-button')).toBeNull()
    })
  })
})
