import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./myCss.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import UserLoginHours from "./UserLoginHours.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route
          path="/user-login-hours/:userId"
          element={<UserLoginHours />}
        ></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
