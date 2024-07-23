import React from "react";
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

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  return (
    <AuthProvider>
      <EmailProvider>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Router>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/redirect-handler" element={<RedirectHandler />} />
              <Route path="/onebox" element={<OneBox />}>
                <Route path="home" element={<Home />} />
                {/* <Route path="profile" element={<ProfileComponent />} /> */}
                {/* <Route path="emails" element={<EmailsComponent />} /> */}
                {/* Add other routes as needed */}
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
