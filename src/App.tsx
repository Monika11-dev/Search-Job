import './App.css';
import { Routes, Route } from "react-router-dom";
import { ThemeProvider} from "@mui/styles";
import theme from './Theme/theme';
import { Layout } from './Pages/Layout/Layout';
import Dashboard from './Pages/Dashboard/Dashboard';
import LandingPage from './Pages/Landing Page/LandingPage';

function App() { 
  
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>             
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />}/>
          </Route>    
          <Route path='/Login' element={<LandingPage />}/>
        </Routes>         
      </ThemeProvider>
    </>
  )
}
export default App
