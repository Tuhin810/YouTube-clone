import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "./Sidebar";
import Videos from "./Videos";



import { fetchFromAPI } from "../utils/fetchFromAPI";



const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  


  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory]);

   
  return (
    <>
     <Box sx={{ width: '100%' }}>
    
    </Box>
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" },  px: { sx: 0, md: 2 } }}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        
        
      </Box>




      <Box px={2} sx={{ overflowY: "auto", height: "92vh", flex: 2 }}>
         
    
        <Videos videos={videos} sx={{my:10}}  />
      </Box>
    </Stack></>
  );
};


export default Feed