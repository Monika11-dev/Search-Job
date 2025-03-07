
import useStyle from './Dashboard.css';
import { Grid, Box, Tab, Pagination, useMediaQuery } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import Subheading from '../../components/Subheading/Subheading';
import { useState,useEffect } from 'react';
import AppliedJobs from '../../components/AppliedJobs/AppliedJobs';
import JobFilter from '../../components/JobFilter/JobFilter';
import theme from '../../Theme/theme';
import FilterDropdown from '../../components/FilterDropdown/FilterDropdown';
import { useAppSelector } from '../../Store/Store';
import Data from '../../Database/Data';
import ApplyJobs from '../../components/AppliedJobs/ApplyJobs';
import Searchbar from '../../components/Searchbar/Searchbar';
import { useNavigate } from 'react-router-dom';

interface Job {
  title: string;
  location:string;
  company:string;
  employment_type: string;
  created_at: string;
  id:string,
  description:string,
  qualifications:string,
  salary_from : number,
  salary_to: number,
  number_of_opening: number,
}

interface idObj {
  id: string,
  userEmail : string,
}


const Dashboard = () => {

  const classes = useStyle();
  const url = 'https://jsonfakery.com/jobs';
  const isDesktopValue = useMediaQuery(theme.breakpoints.up(1024));
  const navigate = useNavigate();

  // Data from redux

  const category : string[] = useAppSelector(state => state.jobsFilter.cats);
  const location : string[] = useAppSelector(state => state.jobsFilter.loc);
  const appliedJobsData : idObj[] = useAppSelector(state => state.userJobs.jobs);
  const userEmail : string = useAppSelector(state => state.userAuth.currentEmail);
  const currentUser : string = useAppSelector(state => state.userAuth.currentUser);
  

  const [page, setPage] = useState(1);
  const [myJobs, setMyJobs] = useState<string[]>([]);
  const [filters, setFilters] = useState({
    location: [] as string[],
    category: [] as string[],
  });
  const [searchFilters, setSearchFilters] = useState({
    location: '',
    category: '',
  });
  const [value, setValue] = useState('1');
  const [jobs, setJobs] = useState([]);

  // handles tab value 

  const handleChange = (e:React.FormEvent, newValue:string) => {
    e.preventDefault();
    setValue(newValue);
  };

  // handles page change

  const handleChangePage = (event:React.ChangeEvent<unknown>, newPage : number) => {
      setPage(newPage);
  }

  // handles filter change
  
  const handleFilterChange = (newFilters: {
    location: string[];
    category: string[];
  }) => {
    setFilters(newFilters);
  };
  
  // handles search change

  const handleSearch = (searchFilters : {
    location: string;
    category: string;
  }) => {
    setSearchFilters(searchFilters);
  };

  // gives filters results

  const filteredJobs = jobs.filter((job:Job) => {
    const isLocationMatch = (filters.location.length > 0)? filters.location.includes(job.location) : false;
    const isCategoryMatch = (filters.category.length > 0)? filters.category.includes(job.employment_type) : false;
    if(isLocationMatch && isCategoryMatch){
      return (isLocationMatch && isCategoryMatch);
    }
    if(isLocationMatch && isCategoryMatch){
      return (isLocationMatch && isCategoryMatch);
    }
    else{
       return (isLocationMatch || isCategoryMatch);
    }
    
  });

  // gives search results

  const searchedJobs = jobs.filter((job:Job) => {
    const isLocationMatch = (searchFilters.location!=='')? job.location.toLocaleLowerCase().includes(searchFilters.location.toLocaleLowerCase()) : false;
    const isCategoryMatch = (searchFilters.category!=='')? job.employment_type.toLocaleLowerCase().includes(searchFilters.category.toLocaleLowerCase()) : false;
    if(isLocationMatch && isCategoryMatch){
      return (isLocationMatch && isCategoryMatch);
    }
    else{
       return (isLocationMatch || isCategoryMatch);
    }
  });
  
  //Loads jobs from API

  useEffect(()=>{    
        Data(url)
         .then((data)=>setJobs(data))
         .catch((err)=>console.log(err));
        },
  [url]);

  useEffect(() => {

    if (currentUser) {
      navigate("/");
    } else {
      navigate("/Login");
    }
    const applied : string[] = [];
    appliedJobsData.filter(
      (item) => {
        if(item.userEmail === userEmail){
            applied.push(item.id);
        }

      }
    );
    setMyJobs(applied);
  },[navigate,currentUser]);

  return (
    <>
        <Searchbar onFilterChange={handleSearch}/>
        <Grid container  sx={{justifyContent: 'space-between'}} >
          <Grid item sm={12} md={9} className={classes.colOne}>
            <Box component='div' className={classes.col}>
              <Subheading heading='My Jobs'/>
               
               {/* shows filter dropdown for tablet size screen */}

              {!isDesktopValue && 
                (<Box component='div' className={classes.dropdownBox}>
                  <FilterDropdown onFilterChange={handleFilterChange}/>
                </Box>)
              }

              {/* display search results */}

              {
                searchedJobs.length > 0 && 
                (<ApplyJobs jobs={searchedJobs} page={page} rowsPerPage={5}/>)
              }

              {/* display filter results    */}
              
              {
                filteredJobs.length > 0 && 
                (<ApplyJobs jobs={filteredJobs} page={page} rowsPerPage={5}/>)
              }

              {/* displays applied jobs  */}

              {
                (searchedJobs.length === 0 && filteredJobs.length === 0) &&  
                <>
                  <TabContext value={value}>
                      <Box sx={{ borderBottom: 1, borderColor: '#F5F5F5', mt: 2  }}>
                        <TabList className={classes.tabBox} onChange={handleChange} >
                          <Tab className={classes.tab} label="Applied" value="1" sx={{textTransform: "capitalize"}}/>
                          <Tab className={classes.tab} label="Saved" value="2" sx={{textTransform: "capitalize"}}/>
                        </TabList>
                      </Box>
                      <TabPanel value="1" className={classes.tabpanel}>

                      {(myJobs.length!==0) ? <AppliedJobs myJobs={myJobs} jobs={jobs} page={page} rowsPerPage={5}/> : "No applied Jobs !" }                              
                                            
                    </TabPanel>
                    <TabPanel value="2">No saved Jobs !</TabPanel>
                  </TabContext>
                </>
              }     
              
              {/* displays pagination for resulting jobs*/}

              {
                (filteredJobs.length>0 || myJobs.length>0 || searchedJobs.length > 0 ) && 
                <Pagination count={10} className={classes.pageBox} page={page} onChange={handleChangePage}/>
              }

            </Box>
          </Grid>

          {/* displays filters for desktop screen */}

          {
            isDesktopValue && 
            (
              <Grid item sm={12} md={3} lg={3} className={classes.colTwo}>
                <Box component='div'>
                  <JobFilter location={location} category={category} onFilterChange={handleFilterChange}/>
                </Box>
              </Grid>
            )
          }     
        </Grid>
    </>  
  )
}

export default Dashboard