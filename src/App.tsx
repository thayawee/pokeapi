import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:id" element={<Pokemon />} />
      </Routes>
    </>
  );
}

export default App;
