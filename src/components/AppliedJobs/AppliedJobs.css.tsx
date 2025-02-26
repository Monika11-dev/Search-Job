import {Theme} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles<Theme>((theme)=> ({
    jobProfile: {
        ...theme.typography.h2,
        color: theme.palette.secondary.main,
        fontWeight: '500 !important',
        lineHeight: 1.5,
    },
    company: {
        ...theme.typography.body1,
        color: theme.palette.primary.main,
        lineHeight: 1.4,
    },
    jobDetails: {
        ...theme.typography.body1,
        color: theme.palette.secondary.main,
        lineHeight: 1.4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
    },
    fulltime: {
        ...theme.typography.body2,
        color: theme.palette.primary.main,
        border: `1px solid ${theme.palette.primary.main}`,
        width: 40,
        padding: '5px 16px',
        borderRadius: 20,
        fontWeight: 700,
     },    
    }
));

export default useStyle;