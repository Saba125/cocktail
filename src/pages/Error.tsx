import React from 'react'
import {Link} from 'react-router-dom'
type Props = {}

const Error = (props: Props) => {
  return (
    <div className='flex justify-center items-center flex-col gap-10 '>
      <h3 className='capitalize text-6xl text-center  mt-40'>Oops Out of bounds!</h3>
      <Link to='/' className='bg-green-500 text-black text-lg hover:bg-green-600 duration-200 p-3 rounded-md '>Back to home...</Link>
    </div>
  )
}

export default Error