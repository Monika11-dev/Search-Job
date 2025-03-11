import { Box, Grid, useMediaQuery, Pagination, Alert } from "@mui/material";
import Subheading from "../../components/Subheading/Subheading";
import theme from "../../Theme/theme";
import useStyle from "./Jobs.css";
import FilterDropdown from "../../components/FilterDropdown/FilterDropdown";
import JobFilter from "../../components/JobFilter/JobFilter";
import ApplyJobs from "../../components/AppliedJobs/ApplyJobs";
import { useState, useEffect } from "react";
import { useAppSelector } from "../../Store/Store";
import { Data } from "../../Database/Data";
import Searchbar from "../../components/Searchbar/Searchbar";
import { useNavigate } from "react-router-dom";
import { IJob } from "../../type/type";

const Jobs = () => {
  const classes = useStyle();
  const url = "https://jsonfakery.com/jobs";
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({
    location: [] as string[],
    category: [] as string[],
  });
  const [searchFilters, setSearchFilters] = useState({
    location: "",
    category: "",
  });
  const [page, setPage] = useState(1);
  const isDesktopValue = useMediaQuery(theme.breakpoints.up(1024));

  // Data from redux
  const category: string[] = useAppSelector((state) => state.jobsFilter.cats);
  const location: string[] = useAppSelector((state) => state.jobsFilter.loc);
  const currentUser: string = useAppSelector(
    (state) => state.userAuth.currentUser
  );

  useEffect(() => {
    if (currentUser) {
      navigate("/Jobs");
    } else {
      navigate("/Login");
    }
    Data(url)
      .then((data) => {
        setJobs(data);
      })
      .catch((err) => console.log(err))
      .finally(() => console.log("submitted"));
  }, [navigate, currentUser]);

  // handles pagination
  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    setPage(newPage);
  };

  // handles filter
  const handleFilterChange = (newFilters: {
    location: string[];
    category: string[];
  }) => {
    setFilters(newFilters);
  };

  // handles Searchbar
  const handleSearch = (searchFilters: {
    location: string;
    category: string;
  }) => {
    setSearchFilters(searchFilters);
  };

  // Filtered Jobs

  const filteredJobs = jobs.filter((job: IJob) => {
    const isLocationMatch =
      filters.location.length > 0
        ? filters.location.includes(job.location)
        : false;
    const isCategoryMatch =
      filters.category.length > 0
        ? filters.category.includes(job.employment_type)
        : false;
    if (isLocationMatch && isCategoryMatch) {
      return isLocationMatch && isCategoryMatch;
    } else {
      return isLocationMatch || isCategoryMatch;
    }
  });

  // searhced Jobs

  const searchedJobs = jobs.filter((job: IJob) => {
    const isLocationMatch =
      searchFilters.location !== ""
        ? job.location
            .toLocaleLowerCase()
            .includes(searchFilters.location.toLocaleLowerCase())
        : false;
    const isCategoryMatch =
      searchFilters.category !== ""
        ? job.employment_type
            .toLocaleLowerCase()
            .includes(searchFilters.category.toLocaleLowerCase())
        : false;
    if (isLocationMatch && isCategoryMatch) {
      return isLocationMatch && isCategoryMatch;
    } else {
      return isLocationMatch || isCategoryMatch;
    }
  });

  return (
    <>
      <Searchbar onFilterChange={handleSearch} />
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid item sm={12} md={9} className={classes.colOne}>
          <Box component="div" className={classes.col}>
            <Subheading heading="Top Job Picks for you" />

            {/* shows filterdropdown when screen is of tablet size */}
            {!isDesktopValue && (
              <Box component="div" className={classes.dropdownBox}>
                <FilterDropdown onFilterChange={handleFilterChange} />
              </Box>
            )}

            <Box component="div" sx={{ my: 4 }}>

              {/* shows jobs acc to search results */}
              {searchedJobs.length > 0 && (
                <ApplyJobs jobs={searchedJobs} page={page} rowsPerPage={5} />
              )}

              {/* shows jobs acc to filter results */}
              {filteredJobs.length > 0 && (
                <ApplyJobs jobs={filteredJobs} page={page} rowsPerPage={5} />
              )}
              
              {/* Shows All jobs by default */}
              {(searchFilters.location.length > 0 ||
                searchFilters.category.length > 0) &&
                searchedJobs.length === 0 && (
                  <Alert severity="info" sx={{ my: "10px" }}>
                    {" "}
                    No Search Results .
                  </Alert>
                )}
              {searchedJobs.length === 0 && filteredJobs.length === 0 && (
                <>
                  <ApplyJobs jobs={jobs} page={page} rowsPerPage={5} />
                </>
              )}
            </Box>
            <Box>
              {/* shows pagination for jobs */}
              {(filteredJobs.length > 0 ||
                jobs.length > 0 ||
                searchedJobs.length > 0) && (
                <Pagination
                  count={10}
                  color="primary"
                  page={page}
                  onChange={handleChangePage}
                  className={classes.pageBox}
                />
              )}
            </Box>
          </Box>
        </Grid>

        {/* shows filters only for desktop screen */}
        {isDesktopValue && (
          <Grid item sm={12} md={3} lg={3} className={classes.colTwo}>
            <Box component="div">
              <JobFilter
                location={location}
                category={category}
                onFilterChange={handleFilterChange}
              />
            </Box>
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default Jobs;
