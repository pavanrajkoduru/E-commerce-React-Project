import React from 'react'
import {watchData} from '../data/watch'

const Watch = () => {
    const firstFiveimages=watchData.slice(0,5)
  return (
    <><div className='proTitle'> 
    <h1>Watch</h1>
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

export default Watch
