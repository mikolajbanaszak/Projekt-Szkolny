import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./myCss.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLoginHours from "./UserLoginHours.jsx";
import { DataProvider } from "./Json.jsx";
import UserLoginLocations from "./UserLoginLocations.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route
            path="/user-login-hours/:userId"
            element={<UserLoginHours />}
          ></Route>

          <Route
            path="/user-login-locations/:userId"
            element={<UserLoginLocations />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  </StrictMode>,
);
