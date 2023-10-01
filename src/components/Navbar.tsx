import React from 'react'
import Cocktail from '../assets/cocktail.jpg'
import {Link} from 'react-router-dom'
type Props = {}

const Navbar = (props: Props) => {
  return (
    <div>
      <Link to='/' className='inline-block'>
          <img className='w-14 h-14 rounded-full cursor-pointer' src={Cocktail} alt="" />
      </Link>
    </div>
  )
}

export default Navbar