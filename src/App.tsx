import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import { Routes } from "./routes";
import { MyTheme } from "./config/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./config/GlobalStyle";
import { AuthProvider } from "./context/AuthContext/AuthContext";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={MyTheme}>
        <GlobalStyle />
        <Router>
          <AuthProvider>
            <Routes />
          </AuthProvider>
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
