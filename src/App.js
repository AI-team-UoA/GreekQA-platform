import 'App.css';
import React from "react"
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom"

import { AuthProvider } from "contexts/AuthContext"
import Login from "Login.js"
import Articles from "Articles.js"

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route exact path="/dashboard/articles" element={<Articles />} />
            <Route exact path="/login" element={<Login />} />
            <Route
              path="/"
              element={<Navigate to="/dashboard/articles" />}
            />
            <Route
              path="*"
              element={<Navigate to="/404" />}
            />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
