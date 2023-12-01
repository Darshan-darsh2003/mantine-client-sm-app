import React from "react";
import "./App.css";
import { Login } from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
import AppProvider from "./reduxModules/appStore/AppProvider";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainAppShell from "./appShell/MainAppShell";
import { Page404 } from "./utils/uiUtils/page404/Page404";
import HomePage from "./pages/home/HomePage";
import { useLogin } from "./reduxModules/auth/hook/authHook";

const USER_TYPES = {
  PUBLIC: "PUBLIC USER",
  USER: "NORMAL USER",
};

function App() {
  const { isLoggedIn } = useLogin();
  const CURRENT_USER_TYPE = isLoggedIn ? USER_TYPES.USER : USER_TYPES.PUBLIC;

  return (
    <div className="App">
      <BrowserRouter>
        <AppRoutes CURRENT_USER_TYPE={CURRENT_USER_TYPE} />
      </BrowserRouter>
    </div>
  );
}

function PublicElement({
  children,
  CURRENT_USER_TYPE,
}: {
  children: React.ReactNode;
  CURRENT_USER_TYPE: string;
}) {
  return <>{children}</>;
}

function PrivateElement({
  children,
  CURRENT_USER_TYPE,
}: {
  children: React.ReactNode;
  CURRENT_USER_TYPE: string;
}) {
  return (
    <>
      {CURRENT_USER_TYPE === USER_TYPES.USER ? (
        <>{children}</>
      ) : (
        // <Navigate to="/404" />
        <>No Access for this page</>
      )}
    </>
  );
}

function AppRoutes({ CURRENT_USER_TYPE }: { CURRENT_USER_TYPE: string }) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PublicElement CURRENT_USER_TYPE={CURRENT_USER_TYPE}>
            <HomePage />
          </PublicElement>
        }
      />
      <Route
        path="/login"
        element={
          <PublicElement CURRENT_USER_TYPE={CURRENT_USER_TYPE}>
            <Login />
          </PublicElement>
        }
      />
      <Route
        path="/register"
        element={
          <PublicElement CURRENT_USER_TYPE={CURRENT_USER_TYPE}>
            <Register />
          </PublicElement>
        }
      />
      <Route
        path="/404"
        element={
          <PublicElement CURRENT_USER_TYPE={CURRENT_USER_TYPE}>
            <Page404 />
          </PublicElement>
        }
      />
      <Route
        path="/app/*"
        element={
          <PrivateElement CURRENT_USER_TYPE={CURRENT_USER_TYPE}>
            <MainAppShell />
          </PrivateElement>
        }
      />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
}

export default App;
