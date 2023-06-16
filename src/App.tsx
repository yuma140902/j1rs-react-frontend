import React, { useState } from 'react';
import './App.css';
import { Box, Container, Typography } from '@mui/material';
import { DataInput, ModelFitResult, ModelTextArea, StartButton, WaitModelFitting } from './components';
import { DefaultApi } from './api/apis';
import { useApiStart } from './hooks'
import { CenterCircularProgress } from './components/util/CenterCircularProgress';

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
  const [fitModel, setFitModel] = useState<string | undefined>(undefined);

  const handleStartButton = () => {
    setIsWaitingApiResponse(true);
    api.postStart().then(() => {
      setIsWaitingApiResponse(false);
      setPhase("waiting_model_input");
    });
  }

  const handleRegisterModel = (expression: string) => {
    setIsWaitingApiResponse(true);
    api.putModel({ modelRequest: { expression } }).then(() => {
      setIsWaitingApiResponse(false);
      setPhase("posting_data");
    })
  }

  const handleRegisterData = (value: number) => {
    if (Number.isNaN(value)) {
      console.log("skipped bacause value is NaN");
      return;
    }

    setIsWaitingApiResponse(true);
    api.postM({ mRequest: { index: 1, value } }).then(() => {
      setIsWaitingApiResponse(false);
    })
  }

  const handleFinishData = () => {
    setPhase("waiting_fit_model");
    api.postDone().then((res) => {
      setPhase("model_fit")
      console.log("model_fit", res);
      setFitModel(JSON.stringify(res, null, 2))
    })
  }

  const form = (isWaitingApiResponse: boolean, phase: Phase) => {
    if (isWaitingApiResponse) {
      return <CenterCircularProgress text='通信中...' />
    }
    if (phase === 'waiting_start_button') {
      return <StartButton onClick={handleStartButton} />
    }
    else if (phase === 'waiting_model_input') {
      return (
        <ModelTextArea onRegister={handleRegisterModel} />);
    }
    else if (phase === 'posting_data') {
      return (
        <DataInput onRegister={handleRegisterData} onFinish={handleFinishData} />);
    }
    else if (phase === 'waiting_fit_model') {
      return <WaitModelFitting />
    }
    else if (phase === 'model_fit') {
      return <ModelFitResult model={fitModel} />
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
        {form(isWaitingApiResponse, phase)}
      </Box>
      <Footer />
    </Container>
  );
}

export default App;
