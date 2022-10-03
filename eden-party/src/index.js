import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Homepage from "./components/Home/Homepage";
import Events from "./components/Events";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/events" element={<Events />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
          </Routes>
      </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
