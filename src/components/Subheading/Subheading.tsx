import { Typography, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { IFormHeading } from "../../type/type";

const useStyle = makeStyles<Theme>((theme) => ({
  subhead: {
    ...theme.typography.h3,
    fontWeight: "600 !important",
    color: theme.palette.secondary.main,
    marginTop: "5px !important",
    marginBottom: "20px !important",
  },
}));

const Subheading = (props: IFormHeading) => {
  const classes = useStyle();
  
  return (
    <>
      <Typography variant="h3" className={classes.subhead}>
        {props.heading}
      </Typography>
    </>
  );
};

export default Subheading;
