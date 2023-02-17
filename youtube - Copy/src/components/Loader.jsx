import React from 'react';
import { Box, CircularProgress, Stack } from '@mui/material';

import Round from '../utils/Round';

const Loader = () =>  (
  <Box minHeight="95vh">
    <Stack direction='row' justifyContent='center' alignItems='center' height='80vh' >
      {/* <CircularProgress /> */}
      <Round/>
    </Stack>
  </Box>
);

export default Loader;