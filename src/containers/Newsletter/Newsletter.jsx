import React from 'react';
import './newsletter.css'
import { BiCaretRight } from "react-icons/bi";


export default function Newsletter() {
  return (
    <div className='container__newsletter'>
        <h2>Newsletter</h2>
        <p>Get timely updates from your favorite products.</p>
        <div className='container__sendNewsletter'><input placeholder='Your email'/><BiCaretRight/></div>
    </div>
  )
}
