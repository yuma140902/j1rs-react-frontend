import React, { useState } from 'react';
import './App.css';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import { DataInput, ModelFit, ModelTextArea, StartButton, WaitModelFitting } from './components';

type Phase = "waiting_start_button" | "waiting_model_input" | "posting_data" | "waiting_fit_model" | "model_fit";


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

  const form = (phase: Phase) => {
    if (phase === 'waiting_start_button') {
      return <StartButton onClick={() => setPhase("waiting_model_input")} />
    }
    else if (phase === 'waiting_model_input') {
      return (
        <ModelTextArea onRegister={(expr) => {
          console.log("expr", expr);
          setPhase("posting_data");
        }} />);
    }
    else if (phase === 'posting_data') {
      return (
        <DataInput onRegister={(value) => {
          console.log("value", value);
        }} onFinish={() => {
          setPhase("waiting_fit_model")
        }} />);
    }
    else if (phase === 'waiting_fit_model') {
      return <WaitModelFitting />
    }
    else if (phase === 'model_fit') {
      return <ModelFit />
    }
    else {
      return <div />
    }
  }

  return (
    <Container sx={{ height: '100%' }}>
      <Box sx={{ my: 4, height: '100%' }}>
        <Typography variant="h4" component="h1">
          半自動センサー校正器「コウセイくん☆」
        </Typography>
        <Typography variant="h5" color="text.secondary" component="h2">
          Webフロントエンド
        </Typography>
        {form(phase)}
      </Box>
      <Footer />
    </Container>
  );
}

export default App;
