import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

import { useAuthContext } from './hooks/useAuthContext';

import { LoginPage } from 'pages/Auth/LoginPage.js';
import { SignupPage } from 'pages/Auth/SignupPage.js';
import { ForgotPasswordPage } from 'pages/Auth/ForgotPasswordPage.js';
import { GetStartedPage } from 'pages/Dashboard/GetStartedPage.js';
import { ContributePage } from 'pages/Dashboard/ContributePage.js';
import { GuidelinesPage } from 'pages/Dashboard/GuidelinesPage.js';
import { ProfilePage } from 'pages/Dashboard/ProfilePage.js';
import { StatisticsPage } from 'pages/Dashboard/StatisticsPage.js';
import { NotFoundPage } from 'pages/NotFoundPage.js';
import { LoadingPage } from 'pages/LoadingPage.js';


// const LoginPage = lazy(() => import("./pages/LoginPage"))

function App() {

  return (
    <div className="App">
      <RequireAuthIsReady loading={<LoadingPage/>}>
        <Router>
              <Routes>
                <Route exact path="/login"
                  element={
                    <RequireNotAuth redirectTo="/dashboard/get-started">
                      <LoginPage />
                    </RequireNotAuth>
                  }
                />
                <Route exact path="/signup"
                  element={
                    <RequireNotAuth redirectTo="/dashboard/get-started">
                      <SignupPage />
                    </RequireNotAuth>
                  }
                />
                <Route exact path="/forgot-password"
                  element={
                    <RequireNotAuth redirectTo="/dashboard/get-started">
                      <ForgotPasswordPage />
                    </RequireNotAuth>
                  }
                />
                <Route exact path="/dashboard/get-started"
                  element={
                    <RequireAuth redirectTo="/login">
                      <GetStartedPage />
                    </RequireAuth>
                  }
                />
                <Route exact path="/dashboard/contribute"
                  element={
                    <RequireAuth redirectTo="/login">
                      <ContributePage />
                    </RequireAuth>
                  }
                />
                <Route exact path="/dashboard/guidelines"
                  element={
                    <RequireAuth redirectTo="/login">
                      <GuidelinesPage />
                    </RequireAuth>
                  }
                />
                <Route exact path="/account/profile"
                  element={
                    <RequireAuth redirectTo="/login">
                      <ProfilePage />
                    </RequireAuth>
                  }
                />
                <Route exact path="/dashboard/statistics"
                  element={
                    <RequireAuth redirectTo="/login">
                      <StatisticsPage />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/"
                  element={<Navigate to="/dashboard/get-started" />}
                />
                <Route
                  path="/dashboard/*"
                  element={<Navigate to="/dashboard/get-started" />}
                />
                <Route
                  path="/account/*"
                  element={<Navigate to="/account/profile" />}
                />
                <Route
                  path="*"
                  element={<NotFoundPage />}
                />
              </Routes>
        </Router>
      </RequireAuthIsReady>
    </div>
  );
}

function RequireAuthIsReady({ children, loading }) {
  const { authIsReady } = useAuthContext();

  return authIsReady ? children : loading;
}

function RequireAuth({ children, redirectTo }) {
  const { user } = useAuthContext();

  return user ? children : <Navigate to={redirectTo} />;
}

function RequireNotAuth({ children, redirectTo }) {
  const { user } = useAuthContext();

  return !user ? children : <Navigate to={redirectTo} />;
}

export default App;
