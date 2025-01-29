import React from 'react'
import {booksData} from '../data/books'

const Books = () => {
    const firstFiveimages=booksData.slice(0,5)
  return (
   <><div className='proTitle'> 
   <h1>Books</h1>
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

export default Books
