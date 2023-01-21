
import React from 'react';
import './top.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dataClothes } from '../../Data';
import { AiOutlineHeart } from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";



export default function Top() {    
  const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

  return (
    <div className='container__top' >
      <Slider {...settings}>
        {dataClothes.map(item=>(
        <div className='card'>
          <div className='card-top'><img src={item.img}/>
          </div>
          <div className='card-bottom'>
            <h3>{item.brand}</h3>
            <p>{item.title}: {item.price}€</p>
            <div className='container__svg'><AiOutlineHeart/><BsCartPlus/></div>
          </div>
        </div>
        ))}
      </Slider>
    </div>
  )
}
