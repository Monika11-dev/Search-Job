import { FormControl,InputLabel, Select, MenuItem,SelectChangeEvent} from "@mui/material";
import useStyle from "./FilterDropdown.css";
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from "react";

const FilterDropdown = () => {
    const classes = useStyle();
    const [value, setvalue] = useState('');

    const handleChange = (event:SelectChangeEvent) => {
      setvalue(event.target.value);
    };
  return (
    
        <FormControl variant="standard" sx={{ m: 1, minWidth: 150}} className={classes.inputBackground}>
            <InputLabel id="demo-simple-select-standard-label">Jobs by Category</InputLabel>
            <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={value}
            onChange={handleChange}
            label="value"
            className={classes.Select}>
            <MenuItem value="" >
                <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Technical Associate</MenuItem>
            <MenuItem value={20}>Web Developer</MenuItem>
            <MenuItem value={30}>App Developer</MenuItem>
            </Select>
      </FormControl>       
    
  )
}

export default FilterDropdown