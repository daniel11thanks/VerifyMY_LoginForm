import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";

const App = () => {
  React.useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <main className="AppBody">
          <Routes>
            <Route path="/*" element={<Login />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};
export default App;
