import React from 'react';
import { Box, CircularProgress, Grid, Typography } from '@mui/material';

function WaitModelFitting() {
  return (
    <Box sx={{ my: 12 }} >
      <Grid container alignItems='center' justifyContent='center' direction='column'>
        <Grid item xs={12}>
          <CircularProgress />
        </Grid>
        <Grid item xs={12}>
          <Typography color='text.secondary' align='center'>校正中...</Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export { WaitModelFitting }
