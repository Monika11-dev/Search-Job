import React from "react";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { Box } from "@mui/material";
import { Search } from "@mui/icons-material";
import { LocationOn } from "@mui/icons-material";
import { useState } from "react";
import { ISearch } from "../../type/type";

const useStyle = makeStyles<Theme>((theme) => ({
  locationBox: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "30px",
  },
  outerbox: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 60,
    padding: "8px 20px 8px 20px",
    transition: "width 1s",
  },
  box: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    width: "50%",
    "& svg": {
      height: 15,
      width: 15,
      color: "#4884ED",
    },
    "& input": {
      border: "none",
      fontFamily: "Mulish",
      fontSize: 13,
      fontWeight: 500,
      width: "100%",
      pointerEvents: "auto",
      "&::placeholder": {
        color: "#4884ED",
      },
      "&:focus-visible": {
        outline: "none",
      },
      "&:focus": {
        width: "100%",
      },
      [theme.breakpoints.down(1200)]: {
        fontSize: "11px",
      },
    },
  },
  // findBtn: {
  //   borderRadius: "25px !important",
  //   padding: "6px 16px !important",
  //   backgroundColor: "#4884ED !important",
  //   "&:hover": {
  //     backgroundColor: `${theme.palette.primary.dark} !important`,
  //   },
  // },
  // btnTxt: {
  //   textTransform: "capitalize",
  //   fontFamily: "Mulish !important",
  //   fontSize: "12px !important",
  // },
}));

const Searchbar = (props: ISearch) => {
  const classes = useStyle();
  const [catValue, setCatValue] = useState("");
  const [locValue, setLocValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  
  /**
   * Handles focus event 
   */
  const handleFocus = () => {
    setIsFocused(true);
  };

  /**
   * Handles the category change event. 
   * @param {React.FormEvent} event - The form event triggered when the category selection changes.
   */
  const handleCatChange = (event: React.FormEvent) => {
    const category = (event.target as HTMLInputElement).value;
    setCatValue((event.target as HTMLInputElement).value);
    props.onFilterChange({ location: locValue, category: category });
  };
  
  /**
   * Handles the location change event. 
   * @param {React.FormEvent} event - The form event triggered when the location selection changes.
   */
  const handleLocChange = (event: React.FormEvent) => {
    const location = (event.target as HTMLInputElement).value;
    setLocValue((event.target as HTMLInputElement).value);
    props.onFilterChange({ location: location, category: catValue });
  };

  return (
    <Box className={classes.locationBox}>
      <Box
        className={classes.outerbox}
        style={{ width: isFocused ? "100%" : "40%" }}
      >
        <Box className={classes.box}>
          <Search />
          <input
            type="text"
            placeholder="Job Title"
            value={catValue}
            onFocus={handleFocus}
            onChange={handleCatChange}
          />
        </Box>
        <Box className={classes.box}>
          <LocationOn />
          <input
            type="text"
            placeholder="Location"
            value={locValue}
            onFocus={handleFocus}
            onChange={handleLocChange}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Searchbar;
