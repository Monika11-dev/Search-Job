import { makeStyles } from "@mui/styles";
import { Theme } from '@mui/material';

const useStyle = makeStyles<Theme>((theme)=>({
    mainSection: {
        display : 'flex',
        // margin: '24px 10px 0px',
        // gap: '15px',
    },
    firstCol: {
        height: '100vh',
        width: '280px',
        borderRadius: '4px',
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
    locationBox: {
        display: 'flex',
        justifyContent: 'flex-end',
       
    },
    outerbox:{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 60,
        padding: '4px 4px 4px 20px',
    },
    box: {
        display: 'flex',
        alignItems: 'center',
        gap: 10, 
        '& svg': {
            height: 15,
            width: 15,
            color: '#4884ED',
            // strokeWidth:1,
            // stroke: '#1976d2',
        },
        '& input': {
            border: 'none',
            fontFamily: 'Mulish',
            fontSize: 13,
            fontWeight: 500,
            '&::placeholder': {
              color: '#4884ED',  
            },
            '&:focus-visible':{
                outline: 'none',
            },
            [theme.breakpoints.down(1200)]: {
                fontSize: '11px',
            }
        }
    },
    findBtn: {     
        borderRadius: '25px !important',
        padding: '6px 16px !important',  
        backgroundColor: '#4884ED !important',   
    },
    btnTxt: {
        textTransform: 'capitalize',
        fontFamily: 'Mulish !important',
        fontSize: '12px !important',
    }
    
}));

export default useStyle;

