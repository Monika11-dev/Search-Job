import { Typography, List, ListItem, FormGroup, FormControlLabel, Checkbox, Box } from "@mui/material";
import { useState } from "react";
import useStyle from "./JobFilter.css";
import { IFilter } from "../../type/type";

const JobFilter = (props: IFilter) => {
  const classes = useStyle();
  const [selectedLocation, setSelectedLocation] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);

  /**
   * Handles the change event for selecting or deselecting a location.
   * @param {React.ChangeEvent} event - The change event triggered when the location checkbox is toggled.
   * @param {string} location - The location that was selected or deselected.
   */
  const handleLocationChange = (event: React.ChangeEvent, location: string) => {
    const newLocations = (event.target as HTMLInputElement).checked
      ? [...selectedLocation, location]
      : selectedLocation.filter((item) => item !== location);
    setSelectedLocation(newLocations);
    props.onFilterChange({
      location: newLocations,
      category: selectedCategory,
    });
  };

  /**
   * Handles the change event for selecting or deselecting a category.
   * @param {React.ChangeEvent} event - The change event triggered when the category checkbox is toggled.
   * @param {string} category - The category that was selected or deselected.
   */
  const handleCategoryChange = (event: React.ChangeEvent, category: string) => {
    const newCategories = (event.target as HTMLInputElement).checked
      ? [...selectedCategory, category]
      : selectedCategory.filter((item) => item !== category);
    setSelectedCategory(newCategories);
    props.onFilterChange({
      location: selectedLocation,
      category: newCategories,
    });
  };

  return (
    <>
      <Box
        component="div"
        sx={{ borderBottom: `2px solid #4884ED`, marginBottom: "20px" }}
      >
        <Typography variant="h3" className={classes.filterHeading}>
          Jobs by Category
        </Typography>
        <List className={classes.filterContent}>
          {props.category.map((item: string) => (
            <ListItem disablePadding key={item}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedCategory.includes(item)}
                      onChange={(event) => handleCategoryChange(event, item)}
                      className={classes.checkbox}
                    />
                  }
                  label={item}
                  className={classes.filterText}
                />
              </FormGroup>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box
        component="div"
        sx={{ borderBottom: `2px solid #4884ED`, marginBottom: "20px" }}
      >
        <Typography variant="h3" className={classes.filterHeading}>
          Jobs by Location
        </Typography>
        <List className={classes.filterContent}>
          {props.location.map((item: string) => (
            <ListItem disablePadding key={item}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedLocation.includes(item)}
                      onChange={(event) => handleLocationChange(event, item)}
                      className={classes.checkbox}
                    />
                  }
                  label={item}
                  className={classes.filterText}
                />
              </FormGroup>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
};

export default JobFilter;
