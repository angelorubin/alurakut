import Feat01 from "./features/feat-01";
import Feat02 from "./features/feat-02";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Feat01 />} />
        <Route path="/feat02" element={<Feat02 />} />
      </Routes>
    </Router>
  );
};
