import 'normalize.css';
import React from 'react';
import ReactGA from 'react-ga4';
import './App.css';
import { ANALYTICS_ID } from './config';
import { ChannelsPage } from './views/ChannelsPage/ChannelsPage';

if (ANALYTICS_ID) {
  ReactGA.initialize('G-1SJ3FHLQLL');
  ReactGA.send('pageview');
}

function App() {
  return (
    <div className="App">
      <ChannelsPage />
    </div>
  );
}

export default App;
