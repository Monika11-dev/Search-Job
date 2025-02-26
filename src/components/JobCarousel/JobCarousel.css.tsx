import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

const useStyle = makeStyles<Theme>((theme)=>({
     content: {
        textAlign: 'center',
        '& .MuiCardContent-root': {
            padding: '20px 10px 15px !important',
            color: theme.palette.secondary.main,
        },
     },
     cardhead: {
        ...theme.typography.h3,
        margin: '10px 0px !important',
     },
     jobLocation: {
        ...theme.typography.h4,
     }
}));

export default useStyle;