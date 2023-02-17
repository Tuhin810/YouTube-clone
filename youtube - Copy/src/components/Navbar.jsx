import React from 'react'
import { Outlet, Link } from "react-router-dom";
import { Stack } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import Logo from "../utils/Logo.png"
import { logo } from '../utils/constants';
import IconMenu from './IconMenu';
import SearchBar from './SearchBar';




function Navbar() {

  
  return (
    <>
   {/* <Stack
    direction="row" 
    alignItems="center" 
    p={2} sx={{position:'sticky',background:'#000',py:1,px:4,top:0,justifyContent:'space-between'}}>
      
      <Link to="/" style={{display:'flex',color:'white',alignItems:'cenetr',fontSize:'22px'}}>
      <span class="material-symbols-outlined">
live_tv
</span>Youtube
      </Link>

      <SearchBar/>
      <div></div>
    </Stack> */}




<nav class="navbar bg-body-dark  sticky-top" style={{backgroundColor:'#0f0f0f'}}>
  <div class="container-fluid ">
<Link to="/" class="navbar-brand text-white" style={{display:'flex'}}><img src={Logo} style={{height:'2.4rem',marginLeft:'5px'}} alt="" /><span className='logo' style={{marginLeft:'3px',fontSize:'25px'}}>YouTube</span></Link>
   <SearchBar/>
    <div>
     
      <IconMenu title="Account" />
    </div>
    
  </div>
</nav>

    </>
  )
}

export default Navbar