import {Theme} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles<Theme>((theme)=> ({
    jobProfile: {
        ...theme.typography.h2,
        color: theme.palette.secondary.main,
        fontWeight: '500 !important',
        lineHeight: 1.5,
        [theme.breakpoints.between(850,1200)]: {
            fontSize: '0.9rem !important',
        },

    },
    company: {
        ...theme.typography.body1,
        color: theme.palette.primary.main,
        lineHeight: 1.4,
        [theme.breakpoints.down(1200)]: {
            fontSize: '0.75rem !important',
        },
        [theme.breakpoints.down(850)]: {
            fontSize: '0.7rem !important',
        }
    },
    companyLogo: {
        width: 60,
        height: 40,
        [theme.breakpoints.down(1200)]: {
            width: 45,
            height: 30,
        }
    },
    jobDetails: {
        ...theme.typography.body1,
        color: theme.palette.secondary.main,
        lineHeight: 1.4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 2,
        [theme.breakpoints.between(850,1200)]: {
            fontSize: '0.75rem !important',
        },
        [theme.breakpoints.down(850)]: {
            fontSize: '0.7rem !important',
        }
        
    },
    fulltime: {
        ...theme.typography.body2,
        color: theme.palette.primary.main,
        border: `1px solid ${theme.palette.primary.main}`,
        width: 40,
        padding: '5px 16px',
        borderRadius: 20,
        fontWeight: 700,
        marginBottom: '5px !important',
     }, 
     ApplyBtn: {
        // padding: '0px !important',
        marginTop: '4px !important',
        backgroundColor: `${theme.palette.primary.main} !important`,
        color: 'white !important',
        textTransform: 'capitalize',
        padding: '5px 10px',
        borderRadius: '18px',
        fontSize: '0.7rem !important',
        textDecoration: 'none',
        fontFamily: 'Mulish',
        '&:hover': {
            backgroundColor: `${theme.palette.primary.dark} !important`,
          }
     },   
     border: {
        border: `1px solid ${theme.palette.background.paper}`,
        padding: '10px 5px',
     }
    }
));

export default useStyle;