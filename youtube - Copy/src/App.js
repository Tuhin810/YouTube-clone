import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import ChannelDetail from './components/ChannelDetail';
import SearchFeed from './components/SearchFeed';
import VideoDetail from './components/VideoDetail';

function App() {
  return( 
  <BrowserRouter>
  <Box sx={{backgroundColor:'#0f0f0f'}}>
  <Navbar/>
    <Routes>
    <Route path="/" exact element={<Feed/>}/>
    
   
    <Route path="/video/:id" exact element={<VideoDetail/>} />
    <Route path="/channel/:id" exact element={<ChannelDetail/>} />
    <Route path="/Search/:searchTerm" exact element={<SearchFeed/>} />
  
    </Routes>
  </Box>
  </BrowserRouter>
  )
}

export default App