import React from 'react'
import { useNavigate } from 'react-router-dom'

function ProductCard({product,index}) {
    const navigate = useNavigate()
  return (
    <div className='bg-white pt-4 pb-8 cursor-pointer' onClick={()=>{navigate(`product/${index}`)}} >
        <img src={product.image} className="mx-auto max-h-48 pb-4" alt="" />
        <div className='pl-4'>
        <h4 className="text-xl">{product.name}</h4>
        <h4 className="text-lg"><span className="text-[#728E3C]">99%</span><span className="line-through ml-2">{product.price}</span></h4>
        <h4><span className='font-bold text-xl'>₹ {product.price - Math.floor((99*product.price)/100)}</span></h4>
        </div>
    </div>
  )
}

export default ProductCard