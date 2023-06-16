import React, { useState } from 'react';
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { DefaultApi } from '../api/apis/DefaultApi';
import { useApiStart } from '../hooks';

type Props = {
  onRegister: (model_expression: string) => void
};

function ModelTextArea({ onRegister }: Props) {
  const [expr, setExpr] = useState<string>("");
  return (
    <Grid container alignItems='stretch' direction='column'>
      <Grid item xs={12}>
        <Box sx={{ marginTop: 12 }} >
          <Typography>目的変数 = Vの関数。推定すべきパラメータはp[0], p[1], ...とする</Typography>
          <TextField multiline={true} label="モデルの式を入力" minRows={2} fullWidth
            onChange={event => setExpr(event.target.value)} value={expr} />
        </Box>
      </Grid>
      <Grid item xs={12} container justifyContent='flex-end'>
        <Button variant='contained' onClick={() => onRegister(expr)}>登録</Button>
      </Grid>
    </Grid>
  )
}

export { ModelTextArea }
