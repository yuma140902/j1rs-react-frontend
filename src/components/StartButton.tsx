import React from 'react';
import { Box, Button, Grid } from "@mui/material";

type Props = {
  onClick: () => void
}

function StartButton({ onClick }: Props) {
  return (
    <Grid container alignItems='center' justifyContent='center' direction='column'>
      <Grid item xs={12}>
        <Box sx={{ my: 12 }} >
          <Button variant="contained" onClick={onClick}>スタート</Button>
        </Box>
      </Grid>
    </Grid>
  )
}

export { StartButton }
