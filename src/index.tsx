import React from 'react';
import ReactDOM from 'react-dom/client';
import './tailwind.css';
import "react-toastify/dist/ReactToastify.css";
import reportWebVitals from './reportWebVitals'; 
import {
  RouterProvider,
} from "react-router-dom";
import router from './routers/router';
import { ToastContainer} from 'react-toastify';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
