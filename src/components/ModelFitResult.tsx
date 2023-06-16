import React from 'react'
import { Box, Button, Grid, Typography } from "@mui/material";

type Props = {
  model?: string
}

function ModelFitResult({ model }: Props) {
  return (

    <Box sx={{ my: 12 }} >
      <Grid container alignItems='center' justifyContent='center' direction='column'>
        <Grid item xs={12}>
          <Typography>完了！</Typography>
          <Button variant='contained' href='http://192.168.241.165:8080/static/out.html' target='_blank'>グラフを表示</Button>
          <pre>{model ?? "<none>"}</pre>
        </Grid>
      </Grid>
    </Box>
  )
}

export { ModelFitResult }
