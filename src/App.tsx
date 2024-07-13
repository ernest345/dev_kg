import React from "react";
import "./App.scss";
import Header from "./components/Header";

import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Vacancy from "./components/Vacancy";
import Soobshestvo from "./components/Soobshestvo";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="вакансии" element={<Vacancy />} />
        <Route path="сообщество" element={<Soobshestvo />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
