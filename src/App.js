import Home from "./features/home";
import Feat02 from "./features/feat-02";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feat02" element={<Feat02 />} />
      </Routes>
    </Router>
  );
};
