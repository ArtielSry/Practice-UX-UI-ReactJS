import React from 'react';
import './grid.css';
import { Section } from '../../components';
import { section2, section3, section4, section5 } from './index';

export default function Grid() {
  return (
    <div className='product__blog section__padding' id='blog'>
    <div className='product__blog-heading'>
      <h1>NEW ARRIVAL</h1>
    </div>
    <div className='product__blog-container'>
      <div className='product__blog-container_B'>
        <Section imgUrl={section5} text="INFORMAL" alt="blog1"/>
        <Section imgUrl={section2} text="OFFICE" alt="blog1"/>
        <Section imgUrl={section3} text="SPRINGTIME" alt="blog1"/>
        <Section imgUrl={section4} text="HOME" alt="blog1"/>
      </div>
    </div>
  </div>
  )
}
