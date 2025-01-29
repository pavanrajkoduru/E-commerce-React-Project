import React from 'react'
import {acData} from '../data/ac'

const Ac = () => {
    const firstFiveimages=acData.slice(0,5)
  return (
    <><div className='proTitle'> 
    <h1>Ac</h1>
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

export default Ac
