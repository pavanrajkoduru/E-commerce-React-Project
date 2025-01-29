import React from 'react'
import {speakerData} from '../data/speaker'

const Speakers = () => {
    const firstFiveimages=speakerData.slice(0,5)
  return (
   <><div className='proTitle'> 
   <h1>Speakers</h1>
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

export default Speakers
