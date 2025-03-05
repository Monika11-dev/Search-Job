
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
// import JobCarousel from '../../components/JobCarousel/JobCarousel';
import Data from '../../Database/Data';
import ApplyJobs from '../../components/AppliedJobs/ApplyJobs';
import Searchbar from '../../components/Searchbar/Searchbar';

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


const Dashboard = () => {

  const classes = useStyle();
  const url = 'https://jsonfakery.com/jobs';
  const isDesktopValue = useMediaQuery(theme.breakpoints.up(1024));
  const category : string[] = useAppSelector(state => state.jobsFilter.cats);
  const location : string[] = useAppSelector(state => state.jobsFilter.loc);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    location: [] as string[],
    category: [] as string[],
  });
  const [value, setValue] = useState('1');
  const [jobs, setJobs] = useState([]);
  const handleChange = (e:React.FormEvent, newValue:string) => {
    e.preventDefault();
    setValue(newValue);
  };

  const handleChangePage = (event:React.ChangeEvent<unknown>, newPage : number) => {
      setPage(newPage);
      console.log(newPage);
  }
  
  const handleFilterChange = (newFilters: {
    location: string[];
    category: string[];
  }) => {
    setFilters(newFilters);
  };
  const filteredJobs = jobs.filter((job:Job) => {
    const isLocationMatch = (filters.location.length > 0)? filters.location.includes(job.location) : false;
    const isCategoryMatch = (filters.category.length > 0)? filters.category.includes(job.employment_type) : false;
    if(isLocationMatch && isCategoryMatch){
      return (isLocationMatch && isCategoryMatch);
    }
    else{
      if(isLocationMatch){
        return isLocationMatch;
      }
      else if(isCategoryMatch){
        return isCategoryMatch;
      }
    }
    
  });
  console.log(filters.location.join());
  // const searchedJobs = jobs.filter((job:Job) => {
  //   const isLocationMatch = (filters.location.length > 0)? job.location.includes(filters.location.join()) : false;
  //   const isCategoryMatch = (filters.category.length > 0)? job.employment_type.includes(filters.category.join()) : false;
  //   console.log(isLocationMatch);
  //   if(isLocationMatch && isCategoryMatch){
  //     return (isLocationMatch && isCategoryMatch);
  //   }
  //   else{
  //     if(isLocationMatch){
  //       return isLocationMatch;
  //     }
  //     else if(isCategoryMatch){
  //       return isCategoryMatch;
  //     }
  //   }
    
  // });
  // console.log(searchedJobs);
  console.log(filteredJobs.length);
  useEffect(()=>{
        
        Data(url).then((data)=>{   
           setJobs(data);
        }).catch((err)=>console.log(err)).finally(()=>console.log('submitted'));
     },[url]);
  return (

    <>
       <Searchbar onFilterChange={handleFilterChange}/>
      <Grid container  sx={{justifyContent: 'space-between'}} >
        <Grid item sm={12} md={9} className={classes.colOne}>
           <Box component='div' className={classes.col}>
             <Subheading heading='My Jobs'/>
             {!isDesktopValue && (<Box component='div' className={classes.dropdownBox}>
                 <FilterDropdown onFilterChange={handleFilterChange}/>
              </Box>)}
              
             
             {filteredJobs.length > 0 ? (
                     <ApplyJobs jobs={filteredJobs} page={page} rowsPerPage={5}/>
                     ) : (
                      <>
                      <TabContext value={value}>
                      <Box sx={{ borderBottom: 1, borderColor: '#F5F5F5', mt: 2  }}>
                      <TabList className={classes.tabBox} onChange={handleChange} >
                        <Tab className={classes.tab} label="Applied" value="1" sx={{textTransform: "capitalize"}}/>
                        <Tab className={classes.tab} label="Saved" value="2" sx={{textTransform: "capitalize"}}/>
                        <Tab className={classes.tab} label="In Progress" value="3" sx={{textTransform: "capitalize"}}/>
                      </TabList>
                    </Box>
                    <TabPanel value="1" className={classes.tabpanel}>
                       <AppliedJobs />
                       <AppliedJobs />
                       <AppliedJobs />
                       <AppliedJobs />
                       <AppliedJobs />
                       
                       
                       
                    </TabPanel>
                    <TabPanel value="2">Item Two</TabPanel>
                    <TabPanel value="3">Item Three</TabPanel>
                  </TabContext>
                  </>
                     ) }
                    
                

              <Pagination count={10} className={classes.pageBox} page={page} onChange={handleChangePage}/>
              {/* <Box component='section' className={classes.suggestedJobsbox}>
                <Subheading heading='Suggested Jobs'/>
                <JobCarousel/>
              </Box> */}
           </Box>
        </Grid>
        {isDesktopValue && (<Grid item sm={12} md={3} lg={3} className={classes.colTwo}>
           <Box component='div'>
             <JobFilter location={location} category={category} onFilterChange={handleFilterChange}/>
           </Box>
        </Grid>) }
        
        
      </Grid>
    </>
   
  )
}

export default Dashboard