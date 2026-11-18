import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StrictMode } from 'react'
import ClickCounter from './Counter'
import EmojiCounter from './Emojeecounter'
import Love from "./Love.png";
import Sad from "./Sad.png";
import Like from "./Like.png";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ClickCounter />
    <EmojiCounter pic='Love'/>
    <EmojiCounter pic='Sad'/>
    <EmojiCounter pic='Like'/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
