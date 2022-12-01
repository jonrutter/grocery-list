import React from 'react';
import ReactDOM from 'react-dom/client';

// styles
import './assets/styles/index.css';

// service worker
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// app
import { App } from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
