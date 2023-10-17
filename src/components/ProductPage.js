import React from 'react'
import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Header from './Header'

function ProductPage() {
    const navigate = useNavigate()
    const products = [
        {
            "name": "iphone 15",
            "price": 1500,
            "description": "iphone 15 is the best phone in the world",
            "image": "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/l/l/-original-imagtc5fz9spysyk.jpeg?q=70"
        },
        {
            "name": "iphone 15 Pro",
            "price": 1599,
            "description": "iphone 15 pro is the best phone in the world",
            "image": "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/x/m/u/-original-imagtc4hv5qhegyb.jpeg?q=70"
        },
        {
            "name": "iphone 15 Pro Max",
            "price": 1599,
            "description": "iphone 15 pro is the best phone in the world",
            "image": "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/p/q/i/-original-imagtc3kfyhgfcvr.jpeg?q=70"
        },
        {
            "name": "Google Pixel 7 Pro",
            "price": 1792,
            "description": "Google Pixel 7 pro is the best phone in the world",
            "image": "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/z/g/q/-original-imaggsueh4b26fj7.jpeg?q=70"
        },
        {
            "name": "Samsung Galaxy Flip 5",
            "price": 1792,
            "description": "Samsung Galaxy Flip 5 is the best phone in the world",
            "image": "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/t/o/b/galaxy-flip5-sm-f731blgains-samsung-original-imagru5pcagms7me.jpeg?q=70"
        },
        {
            "name": "Samsung Galaxy S22 Ultra",
            "price": 1792,
            "description": "Samsung Galaxy S22 Ultra is the best phone in the world",
            "image": "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/2/s/7/-original-imagmg6gktts6sfy.jpeg?q=70"
        }
    ]
    const { index } = useParams()
    // console.log(products.at(index));
    return (
        <>
            <Header />
            <div className="mt-5">
                <img src={products[index].image} className='mx-auto mt-20' alt="" />

                <div className='px-5 mt-20'>
                    <h3 className="text-2xl">{products[index].name}</h3>
                    <h4><span className='mt-1 font-bold text-xl'> ₹ {products[index].price - Math.floor((99 * products[index].price) / 100)}</span></h4>
                </div>
            </div>

            <div className='fixed bottom-0 flex justify-between w-full'>
                <button className='bg-white flex-grow py-3 text-xl'>Add to Cart</button>
                <button  className='bg-[#FFC200] text-cen flex-grow py-3 text-xl' onClick={()=>{localStorage.setItem("amount",products[index].price - Math.floor((99 * products[index].price) / 100));navigate("/address")}} >Buy Now</button>
            </div>
        </>
    )
}

export default ProductPage