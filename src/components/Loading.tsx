import React from 'react'
import { MoonLoader } from 'react-spinners'
type Props = {}

const Loading = (props: Props) => {
  return (
    <div className='flex justify-center mt-40'>
        <MoonLoader color="#000" size={100} />
    </div>
  )
}

export default Loading