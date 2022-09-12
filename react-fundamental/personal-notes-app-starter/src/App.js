import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AddNote from "./pages/AddNote";
import ArchivedPage from "./pages/ArchivedPage";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/404";
import RegisterPage from "./pages/RegisterPage";
import { AuthContext } from "./context/AuthContext";
import LoginPage from "./pages/LoginPage";

function App() {
  const { authed } = React.useContext(AuthContext);

  return (
    <Router>
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/archives" element={<ArchivedPage />} />
            <Route path="/notes/new" element={<AddNote />} />
            <Route path="/notes/:idnote" element={<DetailPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
