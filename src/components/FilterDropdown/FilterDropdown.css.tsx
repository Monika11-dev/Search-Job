import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

const useStyle = makeStyles<Theme>((theme) => ({
  inputBackground: {
    "& .MuiInputBase-root:before": {
      borderBottom: `1px solid ${theme.palette.primary.main} !important`,
    },
    "& .MuiInputBase-root .MuiSelect-select:focus": {
      backgroundColor: "white",
    },
    "&  .MuiFormLabel-root": {
      color: theme.palette.primary.main,
      fontSize: "0.9rem",
    },
    "&  .MuiInputBase-root .MuiSvgIcon-root": {
      fill: theme.palette.primary.main,
    },
  },
  categoryText: {
    border: "none  !important",
    borderRadius: "0px !important",
    padding: "5px 10px",
    "& .MuiTypography-root": {
      ...theme.typography.h3,
      textTransform: "capitalize",
    },
  },
  "& .MuiPaper-root": {
    left: 700,
  },
}));

export default useStyle;
