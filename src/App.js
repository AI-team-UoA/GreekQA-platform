import 'App.css';
import React from "react"
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom"

import { AuthProvider } from "contexts/AuthContext"
import Login from "Login.js"
import Register from "Register.js"
import ForgotPassword from "ForgotPassword.js"
import GetStarted from "GetStarted.js"
import Contribute from "Contribute.js"
import Guidelines from "Guidelines.js"
import Profile from "Profile.js"
import Statistics from "Statistics.js"
import NotFound from "NotFound.js"

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/forgot-password" element={<ForgotPassword />} />
            <Route exact path="/logout" element={<Login />} />
            <Route exact path="/dashboard/get-started" element={<GetStarted />} />
            <Route exact path="/dashboard/contribute" element={<Contribute />} />
            <Route exact path="/dashboard/guidelines" element={<Guidelines />} />
            <Route exact path="/account/profile" element={<Profile />} />
            <Route exact path="/dashboard/statistics" element={<Statistics />} />
            <Route
              path="/"
              element={<Navigate to="/dashboard/get-started" />}
            />
            <Route
              path="*"
              element={<NotFound />}
            />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
