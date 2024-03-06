import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Learning from "./components/Learning";
import Quiz from "./components/Quiz";
import Results from "./components/Results";
import LangSelect from "./components/LangSelect";

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/get-started" element={<LangSelect />} />

          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<Learning />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Results />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
