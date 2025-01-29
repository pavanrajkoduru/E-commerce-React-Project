import React from 'react'
import {menData} from '../data/men'

const Furniture = () => {
    const firstFiveimages=menData.slice(0,5)
  return (
    <><div className='proTitle'> 
    <h1>Men</h1>
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

export default Furniture
