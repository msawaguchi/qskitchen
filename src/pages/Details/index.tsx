import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { TiPlus } from 'react-icons/ti'
import { expandCart } from '@/redux/cartCollapseSlice'
import { addToCart } from '@/redux/cartSlice'
import { Food, RootState } from '@/lib/definitions'
import { priceFormatter } from '@/utils/priceFormatter'
import { Button } from '@/components/Button'
import { CartCounter } from '@/components/CartCounter'
import { DishesList } from '@/components/DishesList'
import { CardFood } from '@/components/CardFood'

import {
  DetailsContainer,
  FoodDetailsContainer,
  FoodDescription,
  Description,
  NutritionalInfo,
  VerticalLine,
  AddToCart,
} from './styles'

export function Details() {
  const { currency, locale } = useSelector((state: RootState) => state.currency)
  const cartItems = useSelector((state: RootState) => state.cart.cart)
  const menuItems = useSelector((state: RootState) => state.menu.items)
  const cartCollapsed = useSelector(
    (state: RootState) => state.cartCollapse.cartCollapsed,
  )
  const { id } = useParams()
  const itemId = Number(id)
  const item = useSelector((state: RootState) =>
    state.menu.items.find((item) => item.id === itemId),
  )

  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(0)

  const filteredItems = item
    ? menuItems.filter((i) => i.category === item.category)
    : []

  useEffect(() => {
    if (!item) return

    const cartItem = cartItems.find((cartItem) => cartItem.id === item.id)
    if (cartItem) {
      setQuantity(cartItem.quantity)
    } else {
      setQuantity(0)
    }
  }, [cartItems, item])

  const handleAddToCart = (item: Food) => {
    dispatch(addToCart(item))

    if (!cartCollapsed) {
      dispatch(expandCart())
    }
  }

  if (!item) {
    return <div>Item not found.</div>
  }

  return (
    <DetailsContainer>
      <FoodDetailsContainer>
        <img src={item.pathImage} alt="" />
        <FoodDescription>
          <Description>
            <h2>{item.name}</h2>
            <h3>Category: Salad</h3>
            <p>{item.description}</p>
          </Description>
          <NutritionalInfo>
            <div>
              <p>Calories:</p>
              <strong>{item.calories} kcal</strong>
            </div>
            <VerticalLine />
            <div>
              <p>Fats:</p>
              <strong>{item.fats} gr</strong>
            </div>
            <VerticalLine />
            <div>
              <p>Proteins:</p>
              <strong>{item.proteins} gr</strong>
            </div>
          </NutritionalInfo>
          <AddToCart>
            <span>{priceFormatter(item.price, locale, currency)}</span>

            {quantity > 0 ? (
              <CartCounter item={item} quantity={quantity} />
            ) : (
              <Button onClick={() => handleAddToCart(item)} disabled={false}>
                <TiPlus /> Add to cart
              </Button>
            )}
          </AddToCart>
        </FoodDescription>
      </FoodDetailsContainer>
      <h2>Maybe your hunger also needs some:</h2>
      <DishesList>
        {filteredItems.map((item) => (
          <CardFood item={item} key={item.id} />
        ))}
      </DishesList>
    </DetailsContainer>
  )
}
