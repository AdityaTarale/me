import reactLogo from "./assets/react.svg";
import { Routes, Route } from "react-router-dom";
import Work from "./work";
import "./App.css";
import Navbar from "./components/Navbar";
import Resume from "./resume";

function App() {
  return (
    <Routes>
      <Route path="/" index element={<Work />} />
      <Route path="resume" element={<Resume />} />
    </Routes>
  );
}

export default App;
