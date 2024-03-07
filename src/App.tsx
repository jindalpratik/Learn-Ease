import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Learning from "./components/Learning";
import Quiz from "./components/Quiz";
import Results from "./components/Results";
import LangSelect from "./components/LangSelect";
import Login from "./components/Login";

import AboutUs from "./components/AboutUs";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/get-started" element={<LangSelect />} />

          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<Learning />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Results />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
