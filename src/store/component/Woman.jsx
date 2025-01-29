import React from 'react'
import {womanData} from '../data/woman'

const Woman = () => {
    const firstFiveimages=womanData.slice(0,5)
  return (
    <>
    <div className='proTitle'> 
        <h1>Woman</h1>
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

export default Woman
