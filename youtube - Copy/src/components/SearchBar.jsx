import React from 'react'
import { Stack } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
const navigate = useNavigate();

const onhandleSubmit = (e) => {
  e.preventDefault();

  if (searchTerm) {
    navigate(`/search/${searchTerm}`);

    setSearchTerm('');
  }
};
  return (
    <div> <form class="d-flex form" role="search" onSubmit={onhandleSubmit}>
    <input class="form-control me-2" type="search" placeholder="Search" style={{backgroundColor:"#0f0f0f",outline:'none',color:'white', color:'white',border:'none',borderRadius:'20px'}} aria-label="Search" value={searchTerm}
   
   onChange={(e) => setSearchTerm(e.target.value)}/>
  <button class="btn btn-outline-light search" style={{backgroundColor:"#222222",border:'none'}} type="submit"><SearchIcon /></button>
  </form></div>
  )
}

export default SearchBar