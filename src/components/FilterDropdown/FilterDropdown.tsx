import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import useStyle from "./FilterDropdown.css";
import { useState } from "react";
import { useAppSelector } from "../../Store/Store";
import { IFilterDropdown } from "../../type/type";

const FilterDropdown = (props: IFilterDropdown) => {
  const classes = useStyle();
  const [catValue, setCatValue] = useState("");
  const [locValue, setLocValue] = useState("");

  const category: string[] = useAppSelector((state) => state.jobsFilter.cats);
  const location: string[] = useAppSelector((state) => state.jobsFilter.loc);
  
  /**
   * Handles the change event for selecting a category.
   * @param {SelectChangeEvent} event - The event object triggered when the category selection changes.
   */
  const handleCatChange = (event: SelectChangeEvent) => {
    setCatValue(event.target.value);
    const newCategories = event.target.value;
    props.onFilterChange({ location: [locValue], category: [newCategories] });
  };
  
  /**
   * Handles the change event for selecting a location.
   * @param {SelectChangeEvent} event - The event object triggered when the location selection changes.
   */
  const handleLocChange = (event: SelectChangeEvent) => {
    setLocValue(event.target.value);
    const newLocations = event.target.value;
    props.onFilterChange({ location: [newLocations], category: [catValue] });
  };

  return (
    <>
      <FormControl
        variant="standard"
        sx={{ m: 1, minWidth: 150 }}
        className={classes.inputBackground}
      >
        <InputLabel>Jobs by Category</InputLabel>
        <Select
          value={catValue}
          onChange={handleCatChange}
          label="value"
          className={classes.Select}
        >
          <MenuItem value="None">
            <em>Select</em>
          </MenuItem>
          {category.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      
      <FormControl
        variant="standard"
        sx={{ m: 1, minWidth: 150 }}
        className={classes.inputBackground}
      >
        <InputLabel>Jobs by Location</InputLabel>
        <Select
          value={locValue}
          onChange={handleLocChange}
          label="value"
          className={classes.Select}
        >
          <MenuItem value="None">
            <em>Select</em>
          </MenuItem>
          {location.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default FilterDropdown;
