import React from "react";
import ThemeProvider from "./contexts/ThemeProvider";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ThemeProvider>
          <Router />
        </ThemeProvider>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
