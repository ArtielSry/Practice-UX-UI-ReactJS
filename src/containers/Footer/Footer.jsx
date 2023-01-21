import React from 'react';
import './footer.css';

export default function Footer() {
  return (    
    <div className="footer__container padding-max">
    <ul className="footer__ul">
        <h3>More info</h3>
        <li>Manage Bookings</li>
        <li>Sustainability</li>
        <li>Accessibility</li>
        <li>Our Promise</li>
    </ul>
    <ul className="footer__ul">
        <h3>Customer service</h3>
        <li>Help</li>
        <li>Latest travel information</li>
        <li>Site map</li>
        <li>Special assistance</li>
    </ul>
    <ul className="footer__ul">
        <h3>About</h3>
        <li>Careers</li>
        <li>Registered address</li>
        <li>Company information</li>
        <li>Acceptable use policy</li>
    </ul>
</div>
  )
}
