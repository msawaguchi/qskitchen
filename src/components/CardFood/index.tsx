import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { FiPlus } from 'react-icons/fi'
import { IoFastFood } from 'react-icons/io5'
import { expandCart } from '@/redux/cartCollapseSlice'
import { addToCart } from '@/redux/cartSlice'
import { priceFormatter } from '@/utils/priceFormatter'
import { Food, RootState } from '@/lib/definitions'
import { CartCounter } from '../CartCounter'

import {
  CardDishesContainer,
  FoodDetails,
  BottomContainer,
  AddToCartButton,
} from './styles'

interface CardFoodProps {
  item: Food
}

export function CardFood({ item }: CardFoodProps) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { currency, locale } = useSelector((state: RootState) => state.currency)
  const cartItems = useSelector((state: RootState) => state.cart.cart)
  const [imgLoaded, setImgLoaded] = useState(false)

  const cartCollapsed = useSelector(
    (state: RootState) => state.cartCollapse.cartCollapsed,
  )

  const [quantity, setQuantity] = useState(0)

  useEffect(() => {
    const cartItem = cartItems.find((cartItem) => cartItem.id === item.id)
    if (cartItem) {
      setQuantity(cartItem.quantity)
    } else {
      setQuantity(0)
    }
  }, [cartItems, item.id])

  const handleAddToCart = (
    item: Food,
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.stopPropagation()
    dispatch(addToCart(item))

    if (!cartCollapsed) {
      dispatch(expandCart())
    }
  }

  const handleViewDetails = (itemId: number) => {
    navigate(`/details/${itemId}`)
  }

  const handleImageLoad = () => {
    setImgLoaded(true)
  }

  return (
    <CardDishesContainer
      onClick={() => handleViewDetails(item.id)}
      data-testid="card-food"
    >
      <img src={item.pathImage} alt={item.name} onLoad={handleImageLoad} />
      {!imgLoaded && <IoFastFood style={{ fontSize: 48 }} />}

      <strong>{item.name}</strong>
      <FoodDetails>
        <span>
          Calories: {item.calories} - Proteins: {item.proteins} gr
        </span>
      </FoodDetails>
      <BottomContainer>
        <strong>{priceFormatter(item.price, locale, currency)}</strong>

        {quantity > 0 ? (
          <CartCounter item={item} quantity={quantity} />
        ) : (
          <AddToCartButton
            onClick={(event) => handleAddToCart(item, event)}
            data-testid="add-to-cart-button"
          >
            <FiPlus />
          </AddToCartButton>
        )}
      </BottomContainer>
    </CardDishesContainer>
  )
}
