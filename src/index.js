import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavRoute from './Router.js';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { MetaMaskProvider } from '@metamask/sdk-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <MetaMaskProvider debug={false} sdkOptions={{
      checkInstallationImmediately: false,
      dappMetadata: {
        name: "H4M",
        url: window.location.host,
      }
    }}>
      <NavRoute />
      </MetaMaskProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
