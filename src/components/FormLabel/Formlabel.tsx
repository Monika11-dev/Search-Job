import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { IFormLabel } from "../../type/type";

const useStyle = makeStyles<Theme>((theme) => ({
  Label: {
    fontFamily: "Mulish !important",
    fontSize: "14px !important",
    fontWeight: "400 !important",
    marginBottom: "10px !important",
    textTransform: "capitalize",
    color: theme.palette.secondary.dark,
  },
}));

const Formlabel = (props: IFormLabel) => {
  const classes = useStyle();
  
  return <Typography className={classes.Label}>{props.label}</Typography>;
};

export default Formlabel;
