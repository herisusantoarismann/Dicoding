import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AddNote from "./pages/AddNote";
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
            <Route path="/notes/new" element={<AddNote />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
