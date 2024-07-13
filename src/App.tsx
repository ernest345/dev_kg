import React from "react";
import "./App.scss";
import Header from "./components/Header";

import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Vacancy from "./components/Vacancy";




function App() {
  return (
    <div className="App">
      <Header />
      <Routes>

        <Route path="вакансии" element={<Vacancy />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
