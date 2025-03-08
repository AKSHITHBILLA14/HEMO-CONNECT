import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/homepage";
import Login from "./components/login";
import HelpRequest from "./components/helpReq";
import NotificationPopup from "./components/NotificationPopUP";


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<HomePage/>} />
          
          <Route path="/" element={<Login/>} />

          
          <Route path="/help" element={<HelpRequest />} />

          
          <Route path="/notifications" element={<NotificationPopup />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
