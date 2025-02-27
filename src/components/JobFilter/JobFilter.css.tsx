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
    },
    filterContent: {
        backgroundColor: 'white',
        padding: '20px 15px 30px',
        boxSizing:'border-box',
        display: 'flex',
        alignItems: 'center',
        '& .Mui-checked': {
            color: `${theme.palette.primary.main} !important`,
        },
        '& .MuiRadio-root': {
            padding:0,
            marginRight: 5,
        }
    },
    filterText: {
        ...theme.typography.h4,
    }
}));

export default useStyle;