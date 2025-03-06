import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

const useStyle = makeStyles<Theme>((theme)=>({
    filterHeading: {
       ...theme.typography.h3,
       backgroundColor: theme.palette.primary.main,
       color: 'white',
       padding: '15px 20px',
       borderRadius: '10px 10px 0px 0px',
       boxSizing:'border-box',
       [theme.breakpoints.between(1024,1200)]: {
        padding: '14px 20px',
        fontSize: '0.82rem !important',
    }
    },
    filterContent: {
        backgroundColor: 'white',
        padding: '20px 15px 30px !important',
        // boxSizing:'border-box',
        // display: 'flex',
        alignItems: 'center',
        // '& .MuiListItem-root': {
        //     marginBottom: '10px',
        // },
        '& .Mui-checked': {
            color: `${theme.palette.primary.main} !important`,
        },
        '& .MuiRadio-root': {
            padding:0,
            marginRight: 10,
            [theme.breakpoints.between(1024,1200)]: {
                marginRight: 5,
            }
        },
        '& .MuiListItem-root .MuiRadio-root .css-hyxlzm .MuiSvgIcon-root': {
            fontSize: '1rem',
        },
        [theme.breakpoints.between(1024,1200)]: {
            padding: '20px 10px 30px !important',
        }
    },
    filterText: {
        '& .MuiTypography-body1': {
            ...theme.typography.h4,
            [theme.breakpoints.between(1024,1200)]: {
               fontSize: '0.7rem !important',
            },
            // [theme.breakpoints.up(1201)]: {
            //     fontSize: '0.8rem !important',
            //  }
        }
       
    },
    checkbox: {
        '& svg': {
            fontSize: '1.2rem' ,
        }
    }
    
}));

export default useStyle;