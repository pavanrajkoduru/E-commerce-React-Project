import React from 'react'
import {tvData} from '../data/tv'

const Tv = () => {
    const firstFiveimages=tvData.slice(0,5)
  return (
    <><div className='proTitle'> 
    <h1>Tv</h1>
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

export default Tv
