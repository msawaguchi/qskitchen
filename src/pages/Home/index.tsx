import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/lib/definitions'
import { CardFood } from '@/components/CardFood'
import { DishesList } from '@/components/DishesList'
import rainbowDiscountImage from '@/assets/rainbow.png'

import {
  HomeContainer,
  HomeBanner,
  FoodOptions,
  FoodOptionItem,
} from './styles'

const foodCategories = [
  {
    id: 1,
    category: 'popular',
    categoryName: 'Popular',
    pathImage: '/assets/products/pasta1.png',
  },
  {
    id: 2,
    category: 'burger',
    categoryName: 'Burgers',
    pathImage: '/assets/products/burger7.png',
  },
  {
    id: 3,
    category: 'pizza',
    categoryName: 'Pizzas',
    pathImage: '/assets/products/pizza3.png',
  },
  {
    id: 4,
    category: 'salad',
    categoryName: 'Salads',
    pathImage: '/assets/products/salad2.png',
  },
  {
    id: 5,
    category: 'pasta',
    categoryName: 'Pastas',
    pathImage: '/assets/products/pasta3.png',
  },
  {
    id: 6,
    category: 'drink',
    categoryName: 'Drinks',
    pathImage: '/assets/products/drink2.png',
  },
  {
    id: 7,
    category: 'special',
    categoryName: 'Specials',
    pathImage: '/assets/products/special1.png',
  },
  {
    id: 8,
    category: 'soup',
    categoryName: 'Soups',
    pathImage: '/assets/products/soup2.png',
  },
  {
    id: 9,
    category: 'desert',
    categoryName: 'Deserts',
    pathImage: '/assets/products/desert1.png',
  },
]

const popularDishesId = [4, 8, 10, 12, 30, 34, 40, 42]

export function Home() {
  const [selectedCategory, setSelectedCategory] = useState('popular')
  const menuItems = useSelector((state: RootState) => state.menu.items)

  const filteredItems =
    selectedCategory === 'popular'
      ? menuItems.filter((item) => popularDishesId.includes(item.id))
      : menuItems.filter((item) => item.category === selectedCategory)

  return (
    <HomeContainer>
      <HomeBanner>
        <img src={rainbowDiscountImage} alt="50% discount" />
      </HomeBanner>
      <h2>Menu Category</h2>
      <FoodOptions>
        {foodCategories.map((foodOption) => (
          <FoodOptionItem
            key={foodOption.id}
            onClick={() => setSelectedCategory(foodOption.category)}
            $isselected={selectedCategory === foodOption.category && true}
          >
            {foodOption.pathImage && (
              <img
                src={foodOption.pathImage}
                alt={`${foodOption.category} category`}
              />
            )}
            <b>{foodOption.categoryName}</b>
          </FoodOptionItem>
        ))}
      </FoodOptions>

      <h2>Choose Order</h2>
      <DishesList>
        {filteredItems.map((item) => (
          <CardFood item={item} key={item.id} />
        ))}
      </DishesList>
    </HomeContainer>
  )
}
