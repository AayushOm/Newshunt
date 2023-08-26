import React from 'react'
import loading from './Hourglass.gif'

const load =()=>{

    return (
      <div className='text-center'>
        <img src={loading} alt="loading" />
      </div>
    )
  }

export default load
