import React, { lazy, Suspense } from "react"
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom"
import { AuthProvider } from "contexts/AuthContext"

import LoginPage from "pages/Auth/LoginPage.js"
import RegisterPage from "pages/Auth/RegisterPage.js"
import ForgotPasswordPage from "pages/Auth/ForgotPasswordPage.js"
import GetStartedPage from "pages/Dashboard/GetStartedPage.js"
import ContributePage from "pages/Dashboard/ContributePage.js"
import GuidelinesPage from "pages/Dashboard/GuidelinesPage.js"
import ProfilePage from "pages/Dashboard/ProfilePage.js"
import StatisticsPage from "pages/Dashboard/StatisticsPage.js"
import NotFoundPage from "pages/NotFoundPage.js"


// const LoginPage = lazy(() => import("./pages/LoginPage"))

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Suspense fallback={<div></div>}> */}
          <AuthProvider>
            <Routes>
              <Route exact path="/login" element={<LoginPage />} />
              <Route exact path="/register" element={<RegisterPage />} />
              <Route exact path="/forgot-password" element={<ForgotPasswordPage />} />
              <Route exact path="/logout" element={<LoginPage />} />
              <Route exact path="/dashboard/get-started" element={<GetStartedPage />} />
              <Route exact path="/dashboard/contribute" element={<ContributePage />} />
              <Route exact path="/dashboard/guidelines" element={<GuidelinesPage />} />
              <Route exact path="/account/profile" element={<ProfilePage />} />
              <Route exact path="/dashboard/statistics" element={<StatisticsPage />} />
              <Route
                path="/"
                element={<Navigate to="/dashboard/get-started" />}
              />
              <Route
                path="*"
                element={<NotFoundPage />}
              />
            </Routes>
          </AuthProvider>
        {/* </Suspense> */}
      </Router>
    </div>
  );
}

export default App;
