import styled from 'styled-components'
import bannerImage from '@/assets/banner.jpeg'

export const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media screen and (max-width: 880px) {
    gap: 3.25rem;
  }
`

export const HomeBanner = styled.div`
  width: 100%;
  height: 16rem;
  border-radius: 1rem;
  background: ${(props) => props.theme.yellow};
  background-image: url(${bannerImage});
  background-size: cover;
  background-position: center;
  text-align: end;

  img {
    margin-right: 2rem;
    margin-top: -0.26rem;
  }
`

export const FoodOptions = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;

  @media screen and (max-width: 1380px) {
    padding-bottom: 1rem;
    overflow-x: scroll;
  }
`

interface FoodOptionItemProps {
  $isselected: boolean
}

export const FoodOptionItem = styled.div<FoodOptionItemProps>`
  width: 8rem;
  padding: 1rem;
  border: 2px solid ${(props) => props.theme['yellow-border']};
  border-radius: 2rem;
  background: ${(props) =>
    props.$isselected ? props.theme.yellow : props.theme['yellow-light']};
  color: ${(props) =>
    props.$isselected ? props.theme.white : props.theme['base-subtitle']};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  font-size: 0.8rem;

  img {
    width: 4rem;
    height: auto;
  }

  &:hover {
    background: ${(props) => props.theme.yellow};
    color: ${(props) => props.theme.white};
    cursor: pointer;
    transition: background 0.2s;
  }
`
