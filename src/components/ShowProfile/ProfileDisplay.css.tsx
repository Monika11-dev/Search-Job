import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

const useStyle = makeStyles<Theme>((theme) => ({
  formBg: {
    backgroundColor: "white",
    borderRadius: 2,
    margin: "10px 20px",
    padding: "20px 40px",
    border: `1px solid ${theme.palette.background.paper}`,
  },
  
  divider: {
    color: `${theme.palette.background.paper}`,
    marginBottom: "5px !important",
    borderBottomWidth: "0.5px !important",
  },
  Info: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: "20px",
  },
  InfoBox: {
    width: "50%",
    margin: "5px 0px 20px",
  },
  InfoLongBox: {
    width: "100%",
    margin: "5px 0px 20px",
  },
  info: {
    fontSize: "0.8rem !important",
    color: theme.palette.secondary.light,
    marginBottom: "10px",
    fontFamily: "Nunito !important",
  },
  infoDivider: {
    color: `${theme.palette.background.paper}`,
    width: "50%",
  },
  edit: {
    color: theme.palette.primary.main,
    textTransform: "capitalize",
    "& svg": {
      fontSize: "1.2rem",
      marginLeft: "10px",
    },
  },
}));

export default useStyle;
