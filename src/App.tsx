import React, { useState } from 'react';
import './App.css';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';

type Phase = "waiting_start_button" | "waiting_model_input" | "posting_data" | "waiting_fit_model" | "model_fit";


function StartButton() {
  return (
    <Grid container alignItems='center' justifyContent='center' direction='column'>
      <Grid item xs={12}>
        <Box sx={{ my: 12 }} >
          <Button variant="contained">スタート</Button>
        </Box>
      </Grid>
    </Grid>
  )
}

function ModelTextArea() {
  return (
    <Grid container alignItems='stretch' direction='column'>
      <Grid item xs={12}>
        <Box sx={{ marginTop: 12 }} >
          <TextField multiline={true} label="モデルの式を入力" minRows={2} fullWidth />
        </Box>
      </Grid>
      <Grid item xs={12} container justifyContent='flex-end'>
        <Button variant='contained'>登録</Button>
      </Grid>
    </Grid>
  )
}

function PostData() {
  return (
    <Box sx={{ my: 12 }}>
      <Grid container alignItems='stretch' direction='row'>
        <Grid item xs={11}>
          <TextField label="値を入力" type="number" fullWidth />
        </Grid>
        <Grid item xs={1} container justifyContent='stretch'>
          <Button variant='contained'>入力</Button>
        </Grid>
      </Grid>
    </Box>
  )
}

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

function ModelFit() {
  return (

    <Box sx={{ my: 12 }} >
      <Grid container alignItems='center' justifyContent='center' direction='column'>
        <Grid item xs={12}>
          <Typography>完了！</Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.default', py: 6 }}>
      <Container maxWidth="sm">
        <Typography variant="body2" color="text.secondary" align="center">
          © 2023 Yuma Okamura
        </Typography>
      </Container>
    </Box>
  )
}

function App() {
  const [phase, setPhase] = useState<Phase>("waiting_start_button");
  return (
    <Container sx={{ height: '100%' }}>
      <Box sx={{ my: 4, height: '100%' }}>
        <Typography variant="h4" component="h1">
          半自動センサー校正器「コウセイくん☆」
        </Typography>
        <Typography variant="h5" color="text.secondary" component="h2">
          Webフロントエンド
        </Typography>
        {
          (phase === "waiting_start_button") ? <StartButton /> :
            (phase === "waiting_model_input") ? <ModelTextArea /> :
              (phase === "posting_data") ? <PostData /> :
                (phase === "waiting_fit_model") ? <WaitModelFitting /> :
                  (phase === "model_fit") ? <ModelFit /> :
                    <div />
        }
      </Box>
      <Footer />
    </Container>
  );
}

export default App;
