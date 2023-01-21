import React from 'react';
import './navbar.css';
import { useState } from 'react';
import { RiCloseLine } from 'react-icons/ri';
import { BiSearchAlt, BiMenu } from "react-icons/bi";
import { Badge } from '@mui/material';
import { IoEarth } from "react-icons/io5";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import logo from '../../assets/logo.png';
import Register from './Register'


const Menu= () => (
    <>
        <div className='container__language'><span>EN<IoEarth/></span></div>
        <input placeholder='Search...'></input><BiSearchAlt/>
    </>
  )
  
  export default function Navbar () {
    const  [toggleMenu, setToggleMenu] = useState(false);
    return (
      <div className='product__navbar'>
        <div className='product__navbar-links'>
            <Menu/>
        </div>
        <div className='product__navbar-links_logo'>
            <img src={logo} alt='urban fashion' />
        </div>
        <div className='product__navbar-sign'>
        <Badge badgeContent={3} color="primary">
            <ShoppingCartOutlinedIcon/>
        </Badge>
        <div className='register'>
            <Register/>
        </div>
        </div>
        <div>
        </div>
        <div className='product__navbar-menu'> 
          {toggleMenu 
          ? <RiCloseLine  size={27} onClick={() => setToggleMenu(false)} />
          : <BiMenu  size={27} onClick={() => setToggleMenu(true)} />
          }
          {toggleMenu && (
            <div className='product__navbar-menu_container scale-up-center'>
              <div className='product__navbar-menu_container-links'>
              </div> 
              <Badge badgeContent={0} color="primary">
                <ShoppingCartOutlinedIcon/>
              </Badge>
              <div className="product__navbar-menu_container-links-sign">
              <Register/>
              </div>
            </div>
            )}
        </div>
      </div>
    )
  }