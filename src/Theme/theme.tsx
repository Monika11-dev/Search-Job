import { createTheme } from "@mui/material"

// changine theme 

export const theme = createTheme({
    palette:{
        primary: {
            main: '#4884ED',
            dark: '#2E4DB2',
        },
        secondary: {
            main: '#525252',
            light: '#7A7A7A',
            dark: '#333333',
        },
        background: {
            paper: '#F5F5F5',
            default: '#FFFFFF',
        },
        grey: {
            100: '#333333',
        }
        
    },
    typography: {
        h2: {
            fontFamily: "'Nunito','serif' !important",
            fontSize: '1rem !important',
            color: 'secondary !important',
        },
        h3: {
            fontFamily: "'Mulish','serif' !important",
            fontSize: '0.875rem !important',
            color: 'secondary !important',
        },
        h4: {
            fontFamily: "'Mulish','serif' !important",
            fontSize: '0.75rem !important',
            color: 'grey[100]',
        },
        body1: {
            fontFamily: "'Nunito','serif' !important",
            fontSize: '0.8125rem !important',
            color: 'secondary !important',
        },
        body2: {
            fontFamily: "'Nunito','serif' !important",
            fontSize: '0.562rem !important',
            color: 'secondary !important',
        },
        
    }   
})

export default theme;