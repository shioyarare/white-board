import React from 'react';
import logo from './logo.svg';
import { Grid } from '@mui/material';
import './App.css';
import HeaderMenu from './components/HeaderMenu';
function App() {
  return (
    <div className="App">
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <HeaderMenu />
        </Grid>
      </Grid>

    </div>
  );
}

export default App;
