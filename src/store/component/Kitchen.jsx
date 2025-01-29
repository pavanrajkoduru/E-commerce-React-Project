import React from 'react'
import {kitchenData} from '../data/kitchen'

const Kitchen = () => {
    const firstFiveimages=kitchenData.slice(0,5)
  return (
    <>
    <div className='proTitle'> 
        <h1>Kitchen</h1>
    </div>
    <div className='proSection'>
        {
            firstFiveimages.map((item)=>{
                return(
                    <div className='imgBox'>
                        <img className='proImage' src={item.image} alt="" />
                    </div>
                )
            })
        }
      
    </div>
    </>
  )
}

export default Kitchen
