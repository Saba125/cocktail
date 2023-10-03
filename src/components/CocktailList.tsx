import React from 'react'
import { useGlobalContext } from '../context/ContextApi'
import Cocktail from './Cocktail'
import Loading from './Loading'

type Props = {}
const CocktailList = (props: Props) => {
   const {cocktail, loading} = useGlobalContext()
   if(loading) {
    console.log('loading')
     return <Loading />
   }
   if (cocktail.length < 1) {
    return (
      <h2 className='text-6xl text-center mt-10'>No more cocktails to display...</h2>
    )
   }
  return (
    <div className='grid grid-cols-3 max-w-[1240px] mx-auto mt-20 gap-7'>
        {cocktail.map((cocktail, index: number) => {
            return <Cocktail key={index} {...cocktail} />
        })}
    </div>
  )
}

export default CocktailList