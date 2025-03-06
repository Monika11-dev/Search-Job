import { makeStyles } from "@mui/styles";
import { Theme } from '@mui/material';

const useStyle = makeStyles<Theme>((theme)=>({
    user: {
        display: 'flex',
        padding: '0px 15px',
        margin: '20px 0px 10px',
        gap: '20px',
        [theme.breakpoints.down(1200)]:{
            marginBottom:'15px',
            gap: '5px',
            padding: '0px 5px',
        }
    },
    userdetails: {
        flex: 1,
        justifyContent: 'center',
    },
    userName: {
        fontFamily: 'Nunito !important',
        color: theme.palette.primary.main,
        fontSize: '18px !important',
        lineHeight: '1.3 !important',
        [theme.breakpoints.down(1200)]:{
            fontSize: '16px !important',
        }
    },
    userDesignation: {
        fontFamily: 'Mulish !important',
        color: theme.palette.secondary.main,
        fontSize: '13px !important',
        fontWeight: `${300} !important`,
        [theme.breakpoints.down(1200)]:{
            fontSize: '11px !important',
        }
    },
    avatar:{
        backgroundColor: 'white !important',
        height: '55px !important',
        width: '55px !important',
        '& svg': {
            height: '30px',
            width: '30px',
            fill: theme.palette.secondary.light,
        },
        [theme.breakpoints.down(1200)]:{
            height: '40px !important',
            width: '40px !important',
        }
    },
    editIconBtn: {
        height: '15px !important',
        width: '15px !important',
        fill: `${theme.palette.secondary.light} !important`,
    },
    editIcon: {
        fontSize: '1rem !important',
    },
    navItem: {
        textDecoration: 'none',
    },
    navBtn: {
        color: `${theme.palette.secondary.main} !important`,
        gap: '15px',
        '& .MuiListItemIcon-root': {
            minWidth: 0,
            '& svg': {
                fill: theme.palette.secondary.main,
                height: '18px',
                [theme.breakpoints.down(1200)]:{
                    height: '16px',
                }
            }
        },
        '&:hover,&.Mui-selected': {
            backgroundColor: `${theme.palette.primary.main} !important`,
            color: 'white !important',
            '& .MuiListItemIcon-root svg': {
                fill: 'white',
            }
        },
        [theme.breakpoints.down(1200)]:{
            padding: '6px 16px',
        }
    },
    navTxt: {
        '& span': {
            fontFamily: 'nunito',
            [theme.breakpoints.down(1200)]:{
               fontSize: '0.8rem',
            }
        }
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '10px',
    },
    logoImg: {
        width: 50,
        height: 40,
    },
    search: {
        fontFamily: 'nunito !important',
        fontSize: '20px !important',
        fontWeight: '600 !important',
        letterSpacing: '4px !important',
    },
    job: {
        fontFamily: 'nunito !important',
        fontSize: '20px !important',
        fontWeight: '700 !important',
        letterSpacing: '4px !important',
        color: theme.palette.primary.dark,
        marginLeft: 1,
    },
}));

export default useStyle;