import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

import { useAuthContext } from 'hooks/useAuthContext';

import { LoginPage } from 'pages/Auth/LoginPage';
import { SignupPage } from 'pages/Auth/SignupPage';
import { ForgotPasswordPage } from 'pages/Auth/ForgotPasswordPage';
import { VerifyEmailPage } from 'pages/Auth/VerifyEmailPage';
import { GetStartedPage } from 'pages/Dashboard/GetStartedPage';
import { ContributePage } from 'pages/ContributePage';
import { GuidelinesPage } from 'pages/Dashboard/GuidelinesPage';
import { ProfilePage } from 'pages/Dashboard/ProfilePage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { LoadingPage } from 'pages/LoadingPage';

function App() {

  return (
    <div className="App">
      <RequireAuthIsReady loading={<LoadingPage/>}>
        <Router>
              <Routes>
                <Route exact path="/login"
                  element={
                    <RequireNotAuth redirectAuth="/get-started">
                      <LoginPage />
                    </RequireNotAuth>
                  }
                />
                <Route exact path="/signup"
                  element={
                    <RequireNotAuth redirectAuth="/get-started">
                      <SignupPage />
                    </RequireNotAuth>
                  }
                />
                <Route exact path="/forgot-password"
                  element={
                    <RequireNotAuth redirectAuth="/get-started">
                      <ForgotPasswordPage />
                    </RequireNotAuth>
                  }
                />
                <Route exact path="/verify-email"
                  element={
                    <RequireAuthNotVerified redirectNotAuth="/login" redirectVerified="/get-started">
                      <VerifyEmailPage />
                    </RequireAuthNotVerified>
                  }
                />
                <Route exact path="/get-started"
                  element={
                    <RequireAuthVerified redirectNotAuth="/login" redirectNotVerified="/verify-email">
                      <GetStartedPage />
                    </RequireAuthVerified>
                  }
                />
                <Route exact path="/guidelines"
                  element={
                    <RequireAuthVerified redirectNotAuth="/login" redirectNotVerified="/verify-email">
                      <GuidelinesPage />
                    </RequireAuthVerified>
                  }
                />
                <Route exact path="/account"
                  element={
                    <RequireAuthVerified redirectNotAuth="/login" redirectNotVerified="/verify-email">
                      <ProfilePage />
                    </RequireAuthVerified>
                  }
                />
                <Route exact path="/contribute"
                  element={
                    <RequireAuthVerified redirectNotAuth="/login" redirectNotVerified="/verify-email">
                      <ContributePage />
                    </RequireAuthVerified>
                  }
                />
                <Route
                  path="/"
                  element={<Navigate to="/get-started" />}
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

function RequireNotAuth({ children, redirectAuth }) {
  const { user } = useAuthContext();

  return !user ? children : <Navigate to={redirectAuth} />;
}

function RequireAuthVerified({ children, redirectNotAuth, redirectNotVerified }) {
  const { user } = useAuthContext();

  if (user) {
    if (user.emailVerified) {
      return children;
    }
    else {
      return <Navigate to={redirectNotVerified} />;
    }
  }

  return <Navigate to={redirectNotAuth} />;
}

function RequireAuthNotVerified({ children, redirectNotAuth, redirectVerified }) {
  const { user } = useAuthContext();

  if (user) {
    if (user.emailVerified) {
      return <Navigate to={redirectVerified} />;
    }
    else {
      return children;
    }
  }

  return <Navigate to={redirectNotAuth} />;
}

export default App;
