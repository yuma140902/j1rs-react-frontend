import React, { useState } from 'react';
import { Box, Button, Grid, TextField } from "@mui/material";

type Props = {
  onRegister: (model_expression: string) => void
};

function ModelTextArea({ onRegister }: Props) {
  const [expr, setExpr] = useState<string>("");
  return (
    <Grid container alignItems='stretch' direction='column'>
      <Grid item xs={12}>
        <Box sx={{ marginTop: 12 }} >
          <TextField multiline={true} label="モデルの式を入力" minRows={2} fullWidth
            content={expr} onChange={event => setExpr(event.target.textContent ?? "")} />
        </Box>
      </Grid>
      <Grid item xs={12} container justifyContent='flex-end'>
        <Button variant='contained' onClick={() => onRegister(expr)}>登録</Button>
      </Grid>
    </Grid>
  )
}

export { ModelTextArea }