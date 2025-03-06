import { makeStyles } from "@mui/styles";
import { Theme } from '@mui/material';

const useStyle = makeStyles<Theme>((theme)=>({
    mainSection: {
        display : 'flex',
    },
    firstCol: {
        height: '100vh',
        width: '280px',
        borderRadius: '4px',
        position: 'sticky',
        top: 0,
        left: 0,
        [theme.breakpoints.down(1200)]: {
            width: '200px',
        }
        
    },
    secondCol: {
        flex: 1,
        borderRadius: '4px',
        padding:'20px',
        [theme.breakpoints.down(1200)]: {
            padding:'10px',
        }

    },
    
    
}));

export default useStyle;

