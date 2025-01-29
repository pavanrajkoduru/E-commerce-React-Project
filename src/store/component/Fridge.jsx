import React from 'react'
import {fridgeData} from '../data/fridge'

const Fridge = () => {
    const firstFiveimages=fridgeData.slice(0,5)
  return (
    <>
    <div className='proTitle'> 
        <h1>Fridge</h1>
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

export default Fridge
