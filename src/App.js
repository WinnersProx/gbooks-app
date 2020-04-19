import React from 'react';
import { RouterGuard, Link } from 'react-router-guard';
import { ToastContainer, toast } from 'react-toastify';
import routesConfig from './routes/config';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import '@fortawesome/fontawesome-free/js/all';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import bootstrap from 'bootstrap';

function App() {
  return (
    <div className="App">
	    <RouterGuard config={routesConfig} />
	    <ToastContainer position={toast.POSITION.TOP_RIGHT} />
    </div>
  );
}

export default App;
