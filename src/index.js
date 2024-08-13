import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/styles/styles.scss";
import 'react-toastify/dist/ReactToastify.css';

import { Provider } from "react-redux"
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </PersistGate>
    </Provider>
  </BrowserRouter>
);