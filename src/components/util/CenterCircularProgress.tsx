import React from 'react';
import { Box, CircularProgress, Grid, Typography } from '@mui/material';

type Props = {
  text: string
}

function CenterCircularProgress({ text }: Props) {
  return (
    <Box sx={{ my: 12 }} >
      <Grid container alignItems='center' justifyContent='center' direction='column'>
        <Grid item xs={12}>
          <CircularProgress />
        </Grid>
        <Grid item xs={12}>
          <Typography color='text.secondary' align='center'>{text}</Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export { CenterCircularProgress }
