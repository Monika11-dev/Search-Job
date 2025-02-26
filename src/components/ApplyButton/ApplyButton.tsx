import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

const useStyle = makeStyles<Theme>((theme)=>({
    
  Applybtn: {
    backgroundColor: `${theme.palette.primary.main} !important`,
    color: 'white !important',
    // textTransform: 'capitalize !important',
    
  }

}));

const ApplyButton = () => {
  const classes = useStyle();
  return (
    <Button className={classes.Applybtn}>Apply</Button>
  )
}

export default ApplyButton;