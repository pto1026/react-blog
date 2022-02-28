import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Introduction from "./routes/Introduction";
import Bio from "./routes/Bio";
import Helicopter from './routes/Helicopter'
import Strategies from './routes/Strategies'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/posts/introduction" element={<Introduction />} />
          <Route path='/posts/strategies' element={<Strategies />} />
          <Route path='/posts/helicopter' element={<Helicopter />} />
        <Route path="/bio" element={<Bio />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.querySelector("#root")
);
