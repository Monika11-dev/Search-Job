import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyle = makeStyles<Theme>((theme) => ({
  colOne: {
    [theme.breakpoints.down(1024)]: {
      flexBasis: "100% !important",
      maxWidth: "100% !important",
    },
    [theme.breakpoints.between(1024, 1300)]: {
      flexBasis: "78% !important",
      maxWidth: "78% !important",
    },
    [theme.breakpoints.up(1300)]: {
      flexBasis: "80% !important",
      maxWidth: "80% !important",
    },
  },
  colTwo: {
    [theme.breakpoints.down(1024)]: {
      flexBasis: "100% !important",
      maxWidth: "100% !important",
    },
    [theme.breakpoints.between(1024, 1300)]: {
      flexBasis: "20% !important",
      maxWidth: "20% !important",
    },
    [theme.breakpoints.up(1300)]: {
      flexBasis: "18% !important",
      maxWidth: "18% !important",
    },
  },
  col: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: "15px 20px",
    border: `0.5px solid ${theme.palette.grey[300]}`,
  },
  dropdownBox: {
    display: "flex",
    justifyContent: "flex-end",
  },
  pageBox: {
    margin: "20px 0px",
    "& .MuiPaginationItem-root.Mui-selected": {
      backgroundColor: `${theme.palette.primary.main} !important`,
      color: "white",
    },
    "& .MuiPagination-ul": {
      justifyContent: "center",
      '& button': {
        fontSize: '0.875rem !important',
      }
    },
  },
}));

export default useStyle;
