import React from 'react';
import { Box, CircularProgress, Grid, Typography } from '@mui/material';
import { CenterCircularProgress } from './util/CenterCircularProgress'

function WaitModelFitting() {
  return (
    <CenterCircularProgress text="校正中..." />
  )
}

export { WaitModelFitting }
