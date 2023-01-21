import React from 'react';
import './slider.css';
import { BiCaretRight } from "react-icons/bi";



export default function Feature({ title, button, img }) {
  
  return (<>
    <div className='product__header section__padding' id="home">
      <div className='product__header-image'>
        <img src={img} alt="ai"/>
      </div> 
      <div className='product__header-content'>
        <h1>{title}</h1>
        <div className='product__header-content__input'>
          <button type="button">{button}<BiCaretRight/></button>
        </div>
      </div>
    </div>
    </>
  )
}
