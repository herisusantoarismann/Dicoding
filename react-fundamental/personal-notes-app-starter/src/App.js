import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ArchivedPage from "./pages/ArchivedPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/archives" element={<ArchivedPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
