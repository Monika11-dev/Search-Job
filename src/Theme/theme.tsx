import { createTheme } from "@mui/material/styles";

// changing theme
 const theme = createTheme({
  palette: {
    primary: {
      main: "#4884ED",
      dark: "#2E4DB2",
    },
    secondary: {
      main: "#525252",
      light: "#7A7A7A",
      dark: "#333333",
    },
    background: {
      paper: "#F5F5F5",
      default: "#FFFFFF",
    },
    grey: {
      100: "#333333",
      200: "#E0E0E0",
    },
  },
  typography: {
    h2: {
      fontFamily: "'Nunito','serif'",
      fontSize: "1.125rem",
      lineHeight: '1.3',
    },
    h3: {
      fontFamily: "'Mulish','serif' ",
      fontSize: "0.875rem ",   
    },
    h4: {
      fontFamily: "'Mulish','serif' ",
      fontSize: "0.75rem ",
    },
    h5: {
      fontFamily: "'Nunito','serif' ",
      fontSize: "0.8125rem ",
      fontWeight: 300,
    },
    body2: {
      fontFamily: "'Nunito','serif'",
      fontSize: "0.562rem",
    },
  },
});

export default theme;
