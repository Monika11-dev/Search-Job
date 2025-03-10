import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/styles";
import theme from "./Theme/theme";
import { Layout } from "./Pages/Layout/Layout";
import Dashboard from "./Pages/Dashboard/Dashboard";
import LandingPage from "./Pages/Landing Page/LandingPage";
import JobDescription from "./Pages/JobDescription/JobDescription";
import Jobs from "./Pages/Jobs/Jobs";
import Profile from "./Pages/Profile/Profile";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/Jobs" element={<Jobs />} />
            <Route path="/JobDescription/:id" element={<JobDescription />} />
            <Route path="/Profile" element={<Profile />} />
          </Route>
          <Route path="/Login" element={<LandingPage />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}
export default App;
