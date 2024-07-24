import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import LoginPage from "./components/LoginPage";
import OneBox from "./components/OneBox";
import { AuthProvider } from "./context/Authcontext";
import RedirectHandler from "./components/RedirectHandler";
import Home from "./components/Home";
import { EmailProvider } from "./context/EmailContext";
import darkTheme from "./themes/darkTheme";
import lightTheme from "./themes/lightTheme";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const theme = isDarkMode ? darkTheme : lightTheme;

  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <AuthProvider>
      <EmailProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/redirect-handler" element={<RedirectHandler />} />
              <Route
                path="/onebox"
                element={
                  <OneBox
                    isDarkMode={isDarkMode}
                    handleToggleTheme={handleToggleTheme}
                  />
                }
              >
                <Route path="home" element={<Home />} />
                <Route element={<Navigate to="/onebox/home" />} />
              </Route>
            </Routes>
          </Router>
        </ThemeProvider>
      </EmailProvider>
    </AuthProvider>
  );
};

export default App;
