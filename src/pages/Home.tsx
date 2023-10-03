import React from 'react'
import Searchform from '../components/Searchform'
import CocktailList from '../components/CocktailList'

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
      <Searchform />
      <CocktailList />
    </div>
  )
}

export default Home