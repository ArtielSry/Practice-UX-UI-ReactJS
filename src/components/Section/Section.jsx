import React from 'react';
import './section.css'

export default function Section({imgUrl, text}) {
  return (
    <div className='product__blog-container_article'>
    <div className='product__blog-container_article-image'>
      <img src={imgUrl} alt="blog"/>
    </div>
    <div className='product__blog-container_article-content'>
      <h3>{text}</h3>
    </div>
  </div>
  )
}
