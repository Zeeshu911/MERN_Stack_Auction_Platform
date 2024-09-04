import React from 'react'
import {HashLoader} from "react-spinners"

const Spinner = () => {
  return (
    <div className='w-full min-h-[600px] flex justify-center items-center'>
      <HashLoader size={130} color='#D6482B'/>
    </div>
  )
}

export default Spinner
