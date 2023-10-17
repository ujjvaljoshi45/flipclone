import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { AiOutlineClockCircle } from "react-icons/ai";
import { useState } from 'react';
import ProductCard from './components/ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Controller } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from './components/ProductPage';
import Address from './components/Address';
import Footer from './components/Footer';
function App() {
  const [products, updateproducts] = useState([
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
  ])
  const images = [
    {
      original: "bbd-banner1.jpg",
      thumbnail: "bbd-banner1.jpg",
    },
    {
      original: "bbd-banner1.jpg",
      thumbnail: "bbd-banner1.jpg",
    },
  ];
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<>
            <Header />
            <img src="menu-banner.jpg" className='w-full' alt="" />
            <Swiper

              modules={[Navigation, Pagination, Scrollbar, A11y, Controller]}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide><img src="bbd-banner.jpg" className="w-full" alt="" /></SwiperSlide>
              <SwiperSlide><img src="bbd-banner1.jpg" className="w-full" alt="" /></SwiperSlide>
            </Swiper>

            <h1 className="text-[#2873EE] mt-4 mb-1 text-xl text-center">Deals of The Day</h1>
            <h4 className="text-center text-xl text-[#2873EE]"> <AiOutlineClockCircle className="my-0 inline" /> 34:45</h4>

            <div className='grid lg:grid-cols-2 grid-col-1 gap-4 mt-7'>
              {
                products.map((element, index) => {
                  return <ProductCard product={element} index={index} />;
                })
              }
            </div>
          </>} />
          <Route path='/product/:index' element={<ProductPage />} />
          <Route path='/address' element={<Address />} />
      </Routes>
      </Router>

    </>
  );
}

export default App;
