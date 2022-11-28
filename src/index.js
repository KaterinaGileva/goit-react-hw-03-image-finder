import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';
import './index.css';
//import { Reader } from 'components/Reader/Reader';

//import publications from './publications.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>
);
//<Reader items={publications} />