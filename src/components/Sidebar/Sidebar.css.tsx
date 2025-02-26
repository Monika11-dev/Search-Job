import { makeStyles } from "@mui/styles";
import { Theme } from '@mui/material';

const useStyle = makeStyles<Theme>((theme)=>({
    user: {
        display: 'flex',
        padding: '0px 15px',
        margin: '20px 0px 10px',
        gap: '20px',
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
    },
    userDesignation: {
        fontFamily: 'Mulish !important',
        color: theme.palette.secondary.main,
        fontSize: '13px !important',
        fontWeight: `${300} !important`,
    },
    avatar:{
        backgroundColor: 'white !important',
        height: '55px !important',
        width: '55px !important',
        '& svg': {
            height: '30px',
            width: '30px',
            fill: theme.palette.secondary.light,
        }
    },
    editIcon: {
        height: '15px !important',
        width: '15px !important',
        fill: `${theme.palette.secondary.light} !important`,
    },
    navBtn: {
        color: `${theme.palette.secondary.main} !important`,
        gap: '15px',
        
    '& .MuiListItemIcon-root': {
        minWidth: 0,
        '& svg': {
            fill: theme.palette.secondary.main,
            height: '18px',
        }
    },
    '&:hover': {
        backgroundColor: `${theme.palette.primary.main} !important`,
        color: 'white !important',
        '& .MuiListItemIcon-root svg': {
            fill: 'white',
        }
    },
    },
    navTxt: {
        '& span': {
            fontFamily: 'nunito',
        }
    }
}));

export default useStyle;