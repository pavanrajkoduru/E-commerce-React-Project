import React from 'react'
import {acData} from '../data/ac'
import Navbar from '../component/Navbar' 
import {Link} from 'react-router-dom'
import {useState} from 'react'

const AcPage = () => {
  const [SelectedProduct, setSelectedProduct] = useState([])
  
  const CompanyHandler=(mango)=>{
    if(SelectedProduct.includes(mango)){
      setSelectedProduct(SelectedProduct.filter(item => item !== mango))
    }else{
      setSelectedProduct([...SelectedProduct, mango])
    }
  }
  const filteredProduct = SelectedProduct.length===0?
      acData: acData.filter((orange)=>SelectedProduct.includes(orange.company))

  return (
   <>
   <Navbar />
   <div className="fullpage">
   <div className="pro-selected">
    {acData.map((phone)=>{
      return(
        <div className='pro-input'>
          <label>
            <input type="checkbox"
            checked={SelectedProduct.includes(phone.company)}
            onChange={()=>CompanyHandler(phone.company)}
             />
             {phone.company}
          </label>
        </div>
      )
    })}
   </div>
    <div className='pageSection'>
      {filteredProduct.map((item)=>{
        return(
          <div>
          <Link to={`/ac/${item.id}`} >
              <div className="pageImg">
                  <img src={item.image} alt="" />
              </div>
          </Link>
              <div className="proModel">
                  {item.company},{item.model}
              </div>
          </div>
        )
      })}
    </div>
   </div>
   </>
  )
}

export default AcPage
