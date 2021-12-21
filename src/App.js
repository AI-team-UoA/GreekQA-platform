import 'App.css';
import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import { AuthProvider } from "contexts/AuthContext"
import Login from "Login.js"
import Sidebar from "Sidebar.js"

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route exact path="/dashboard" element={<Sidebar />} />
            <Route exact path="/login" element={<Login />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
