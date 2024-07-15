import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Vacancy from "./components/Vacancy";
import Meropriatia from "./components/Meropriatia";
import Videoo from "./components/Videoo";
import Organizasii from "./components/Organizasii";
import Soobshestvo from "./components/Soobshestvo";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/vacancy" element={<Vacancy />} />
        <Route path="/events" element={<Meropriatia />} />
        <Route path="/meetups" element={<Videoo />} />
        <Route path="/organizations" element={<Organizasii />} />
        <Route path="/community" element={<Soobshestvo />} />
      </Routes>
      s
      <Footer />
    </div>
  );
}

export default App;
