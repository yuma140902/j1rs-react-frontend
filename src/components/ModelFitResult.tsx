import React from 'react'
import { Box, Grid, Typography } from "@mui/material";

type Props = {
  model?: string
}

function ModelFitResult({ model }: Props) {
  return (

    <Box sx={{ my: 12 }} >
      <Grid container alignItems='center' justifyContent='center' direction='column'>
        <Grid item xs={12}>
          <Typography>完了！</Typography>
          <pre>{model ?? "<none>"}</pre>
        </Grid>
      </Grid>
    </Box>
  )
}

export { ModelFitResult }
