import { Routes, Route } from "react-router-dom";
import Work from "./work";
import Resume from "./resume";
import ComingSoon from "./comingSoon";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" index element={<Work />} />
      <Route path="resume" element={<Resume />} />
      <Route path="me" element={<ComingSoon />} />
      <Route path="gallery" element={<ComingSoon />} />
    </Routes>
  );
}

export default App;
