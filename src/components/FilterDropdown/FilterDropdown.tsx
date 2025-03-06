import { FormControl,InputLabel, Select, MenuItem,SelectChangeEvent} from "@mui/material";
import useStyle from "./FilterDropdown.css";
import { useState } from "react";
import { useAppSelector } from '../../Store/Store';

interface Props{
  onFilterChange: (filters: {
    location: string[];
    category: string[];
  }) => void;
}

const FilterDropdown = (props:Props) => {
    const classes = useStyle();
    const [catValue, setCatValue] = useState('');
    const [locValue, setLocValue] = useState('');
    const category : string[] = useAppSelector(state => state.jobsFilter.cats);
    const location : string[] = useAppSelector(state => state.jobsFilter.loc);
    const handleCatChange = (event:SelectChangeEvent) => {
      setCatValue(event.target.value);
      const newCategories = event.target.value 
      props.onFilterChange({ location: [locValue], category: [newCategories] });
      
    };
    const handleLocChange = (event:SelectChangeEvent) => {
      setLocValue(event.target.value);
      const newLocations = event.target.value
      props.onFilterChange({ location: [newLocations], category: [catValue] });
    };
    console.log(catValue,locValue);
  return (
      <>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 150}} className={classes.inputBackground}>
            <InputLabel >Jobs by Category</InputLabel>
            <Select
            value={catValue}
            onChange={handleCatChange}
            label="value"
            className={classes.Select}>
            <MenuItem value="None" >
                <em>Select</em>
            </MenuItem>
            {category.map((item) => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
            </Select>
        </FormControl>  
        <FormControl variant="standard" sx={{ m: 1, minWidth: 150}} className={classes.inputBackground}>
            <InputLabel >Jobs by Location</InputLabel>
            <Select  
            value={locValue}
            onChange={handleLocChange}
            label="value"
            className={classes.Select}>
            <MenuItem value="None" >
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
  )
}

export default FilterDropdown