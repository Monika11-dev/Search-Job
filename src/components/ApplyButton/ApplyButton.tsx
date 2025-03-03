import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

const useStyle = makeStyles<Theme>((theme)=>({
    
  Applybtn: {
    backgroundColor: `${theme.palette.primary.main} !important`,
    color: 'white !important',
    textTransform: 'capitalize',
    padding: '5px 10px',
    borderRadius: '18px',
    fontSize: '0.7rem !important',
    '&:hover': {
      backgroundColor: `${theme.palette.primary.dark} !important`,
    }
  }

}));

const ApplyButton = () => {
  const classes = useStyle();
  return (
    <Typography className={classes.Applybtn}>Apply now</Typography>
  )
}

export default ApplyButton;