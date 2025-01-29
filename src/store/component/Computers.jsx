import React from 'react'
import {computerData} from '../data/computers'

const Computers = () => {
    const firstFiveimages=computerData.slice(0,5)
  return (
    <><div className='proTitle'> 
    <h1>Computers</h1>
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

export default Computers
