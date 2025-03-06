import { Box, Grid,useMediaQuery,Pagination } from '@mui/material';
import Subheading from '../../components/Subheading/Subheading';
import theme from '../../Theme/theme';
import useStyle from './Jobs.css';
import FilterDropdown from '../../components/FilterDropdown/FilterDropdown';
import JobFilter from '../../components/JobFilter/JobFilter';
import ApplyJobs from '../../components/AppliedJobs/ApplyJobs';
import { useState, useEffect } from 'react';
import { useAppSelector } from '../../Store/Store';
import { Data } from '../../Database/Data';
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

const Jobs = () => {
   const classes = useStyle();
   const url = 'https://jsonfakery.com/jobs'; 
   const navigate = useNavigate();
   const isDesktopValue = useMediaQuery(theme.breakpoints.up(1024));
   const [jobs, setJobs] = useState([]);
   const [filters, setFilters] = useState({
      location: [] as string[],
      category: [] as string[],
    });
   const [loading, setLoading] = useState(true);
   const [page, setPage] = useState(1);
   const category : string[] = useAppSelector(state => state.jobsFilter.cats);
   const location : string[] = useAppSelector(state => state.jobsFilter.loc);
   const currentUser : string = useAppSelector(state => state.userAuth.currentUser);
   
   useEffect(()=>{
      setLoading(true);
      if (currentUser) {
         navigate("/Jobs");
       } else {
         navigate("/Login");
       }
      Data(url).then((data)=>{   
         setJobs(data);
         setLoading(false)})
         .catch((err)=>console.log(err))
         .finally(()=>console.log('submitted'));
   },[navigate,currentUser]);


   const handleChangePage = (event:React.ChangeEvent<unknown>, newPage : number) => {
      setPage(newPage);
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
    
  return (
   <>
    <Searchbar onFilterChange={handleFilterChange}/>
    <Grid container  sx={{justifyContent: 'space-between'}} >
        <Grid item sm={12} md={9} className={classes.colOne}>
           <Box component='div' className={classes.col}>
             <Subheading heading='Top Job Picks for you'/>
              {!isDesktopValue && 
               (<Box component='div' className={classes.dropdownBox}>
                  <FilterDropdown onFilterChange={handleFilterChange}/>        
               </Box>)
              }
              <Box component='div' sx={{my:4}}>
                 {filteredJobs.length > 0 ? (
                     <ApplyJobs jobs={filteredJobs} page={page} rowsPerPage={5}/>
                     ) : (      
                        <ApplyJobs jobs={jobs} page={page} rowsPerPage={5}/>
                  )}                        
              </Box> 
              <Box>
                 {!loading && <Pagination count={10} color="primary" page={page} onChange={handleChangePage} className={classes.pageBox}/>}        
               </Box>      
           </Box>
        </Grid>
        {isDesktopValue && 
            (<Grid item sm={12} md={3} lg={3} className={classes.colTwo}>
               <Box component='div'>
                  <JobFilter location={location} category={category} onFilterChange={handleFilterChange}/>
               </Box>
            </Grid>)
         }   
        
    </Grid>
   </>
  )
}

export default Jobs