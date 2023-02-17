import React from 'react'
import { Stack, Box } from "@mui/material";
import ChannelCard from "./ChannelCard"
import VideoCard from "./VideoCard"
import Loader from "./Loader"




function Videos({ videos, direction }) {
   console.log(videos)
  
    if(!videos?.length) return <Loader style={{justifyContent:'center',alignItems:'center'}} />;
  return (
   
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap="35px">
       
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} /> }
          {item.id.channelId && <ChannelCard channelDetail={item} />}
          
        </Box>
      ))}
      
    </Stack>
  )
}

export default Videos