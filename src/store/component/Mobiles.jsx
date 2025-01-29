import React from 'react'
import {mobileData} from '../data/mobiles'

const Mobiles = () => {
    const firstFiveimages=mobileData.slice(0,5)
  return (
    <><div className='proTitle'> 
    <h1>Mobiles</h1>
</div>
    <div className='proSection'>
        {
            firstFiveimages.map((item)=>{
                return(
                    <div className='imgBox' >
                        <img className='proImage' src={item.image} alt="" />
                    </div>
                )
            })
        }
      
    </div>
    </>
  )
}

export default Mobiles
