import React from 'react';
import './slider.css';
import Feature from './Feature'
import portada from '../../assets/slider1.png';

export default function Slider() {
  return (<>
    <div className='product__header section__padding'>
    <div className='product__header-content'>
          <Feature img={portada} title='LAST SALE ON WINTER 10% OFF!' text='' button='GET HOT'/>
      </div>
    </div>
    </>
  )
}
