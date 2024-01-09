import React from "react";
import "./App.css";
import { Login } from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainAppShell from "./appShell/MainAppShell";
import { Page404 } from "./utils/uiUtils/page404/Page404";
import Introduction from "./pages/Introduction/Introduction";
// import { useLogin } from "./reduxModules/auth/hook/authHook";
import { ForgotPassword } from "./pages/auth/forgotPassword/ForgotPassword";
import Home from "./pages/home/Home";
import SearchPage from "./pages/search/SearchPage";

const USER_TYPES = {
  PUBLIC: "PUBLIC USER",
  USER: "NORMAL USER",
};

function App() {
  // const { isLoggedIn } = useLogin();
  // const CURRENT_USER_TYPE = isLoggedIn ? USER_TYPES.USER : USER_TYPES.PUBLIC;
  const CURRENT_USER_TYPE = USER_TYPES.USER;
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
            <Introduction />
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
        path="/forgotPassword"
        element={
          <PublicElement CURRENT_USER_TYPE={CURRENT_USER_TYPE}>
            <ForgotPassword />
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
        path="/app/"
        element={
          <PrivateElement CURRENT_USER_TYPE={CURRENT_USER_TYPE}>
            <MainAppShell children={<Home />} />
          </PrivateElement>
        }
      />
       <Route
        path="/app/search"
        element={
          <PrivateElement CURRENT_USER_TYPE={CURRENT_USER_TYPE}>
            <MainAppShell children={<SearchPage />} />
          </PrivateElement>
        }
      />
        <Route
        path="/app/videos"
        element={
          <PrivateElement CURRENT_USER_TYPE={CURRENT_USER_TYPE}>
            <MainAppShell children={<>Videos</>} />
          </PrivateElement>
        }
      />
      <Route
        path="/app/profile"
        element={
          <PrivateElement CURRENT_USER_TYPE={CURRENT_USER_TYPE}>
            <MainAppShell children={<>Profile</>} />
          </PrivateElement>
        }
      />
      <Route
        path="/app/settings"
        element={
          <PrivateElement CURRENT_USER_TYPE={CURRENT_USER_TYPE}>
            <MainAppShell children={<>Settings</>} />
          </PrivateElement>
        }
      />
      <Route
        path="/app/notifications"
        element={
          <PrivateElement CURRENT_USER_TYPE={CURRENT_USER_TYPE}>
            <MainAppShell children={<>Notifications</>} />
          </PrivateElement>
        }
      />
      <Route
        path="/app/conversation"
        element={
          <PrivateElement CURRENT_USER_TYPE={CURRENT_USER_TYPE}>
            <MainAppShell children={<>Conversation</>} />
          </PrivateElement>
        }
      />
      <Route
        path="/app/transactions"
        element={
          <PrivateElement CURRENT_USER_TYPE={CURRENT_USER_TYPE}>
            <MainAppShell children={<>Transactions</>} />
          </PrivateElement>
        }
      />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
}

export default App;
