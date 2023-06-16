import React, { useState } from 'react'
import { Box, Button, Grid, TextField } from '@mui/material'

type Props = {
  onRegister: (value: number) => void;
  onFinish: () => void
}

function DataInput({ onRegister, onFinish }: Props) {
  const [value, setValue] = useState<number>(NaN);

  return (
    <>
      <Box sx={{ my: 12 }}>
        <Grid item container alignItems='stretch' direction='row'>
          <Grid item xs={11}>
            <TextField label="値を入力" type="number" fullWidth
              content={Number.isNaN(value) ? "" : value.toString()}
              onChange={event => setValue(Number.parseFloat(event.target.textContent ?? "NaN"))}
            />
          </Grid>
          <Grid item xs={1} container justifyContent='stretch'>
            <Button variant='contained' onClick={() => onRegister(value)}>入力</Button>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container alignItems='center' justifyContent='center' direction='column'>
          <Grid item xs={12}>
            <Button variant='outlined' onClick={onFinish} > データ入力終了</Button>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export { DataInput }
