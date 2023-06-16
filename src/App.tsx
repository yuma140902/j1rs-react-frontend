import React, { useState } from 'react';
import './App.css';
import { Box, Container, Typography } from '@mui/material';
import { DataInput, ModelFit, ModelTextArea, StartButton, WaitModelFitting } from './components';
import { DefaultApi } from './api/apis';
import { useApiStart } from './hooks'

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
  const api = new DefaultApi();
  const [phase, setPhase] = useState<Phase>("waiting_start_button");
  const [isWaitingApiResponse, setIsWaitingApiResponse] = useState<boolean>(false);

  const handleStartButton = () => {
    setIsWaitingApiResponse(true);
    setPhase("waiting_model_input");
  }

  const form = (phase: Phase) => {
    if (phase === 'waiting_start_button') {
      return <StartButton onClick={handleStartButton} />
    }
    else if (phase === 'waiting_model_input') {
      return (
        <ModelTextArea api={api} onRegister={(expr) => {
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
