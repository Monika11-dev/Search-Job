import { makeStyles } from "@mui/styles";
import { Typography, Divider } from "@mui/material";
import { Theme } from "@mui/material";
import { IFormHeading } from "../../type/type";

const useStyle = makeStyles<Theme>((theme) => ({
  formHead: {
    fontFamily: "Mulish !important",
    fontSize: "17px !important",
    textTransform: "uppercase",
    fontWeight: "500 !important",
    color: theme.palette.primary.dark,
    marginBottom: "15px !important",
  },
  divider: {
    borderColor: "#F5F5F5 !important",
    borderWidth: "0.5px !important",
    marginBottom: "30px !important",
  },
}));

const Formtitle = (props: IFormHeading) => {
  const classes = useStyle();
  
  return (
    <>
      <Typography variant='h4' className={classes.formHead}>{props.heading}</Typography>
      <Divider className={classes.divider} />
    </>
  );
};

export default Formtitle;
