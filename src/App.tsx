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
          (phase === "waiting_start_button") ? <StartButton onClick={() => setPhase("waiting_model_input")} /> :
            (phase === "waiting_model_input") ? <ModelTextArea onRegister={(expr) => {
              console.log("expr", expr);
              setPhase("posting_data");
            }} /> :
              (phase === "posting_data") ? <DataInput onRegister={(value) => {
                console.log("value", value);
              }} onFinish={() => {
                setPhase("waiting_fit_model")
              }} /> :
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
