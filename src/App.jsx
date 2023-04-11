import { Route, Routes } from "react-router-dom";
import ComingSoon from "./comingSoon";
import Resume from "./resume";
import Work from "./work";

import { useEffect } from "react";
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
