import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyle = makeStyles<Theme>((theme) => ({
  formBg: {
    backgroundColor: "white",
    borderRadius: 4,
    margin: "10px 20px",
    padding: "20px 40px",
  },
  textField: {
    "& .MuiInputBase-root": {
      "&:focus-visible": {
        outline: "none",
      },
      "& textarea": {
        fontSize: "0.9rem",
      },
    },
    "& .MuiInputBase-root .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.grey[200],
      "&:hover": {
        borderColor: `${theme.palette.primary.main} !important`,
      },
    },
    "&  .MuiInputBase-root input": {
      padding: "12px 14px",
      fontSize: "0.9rem",
      fontFamily: "Nunito",
    },
  },
  dropdown: {
    margin: "0px !important",
  },
  Select: {
    "& .MuiSelect-select": {
      padding: "11.5px 14px !important",
    },
    "& fieldset": {
      borderColor: theme.palette.grey[200],
    },
  },
  save: {
    fontSize: "0.8rem !important",
    textTransform: "capitalize",
  },
}));

export default useStyle;
