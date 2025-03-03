import { Box, Grid,useMediaQuery,Pagination } from '@mui/material';
import Subheading from '../../components/Subheading/Subheading';
import theme from '../../Theme/theme';
import useStyle from './Jobs.css';
import FilterDropdown from '../../components/FilterDropdown/FilterDropdown';
import JobFilter from '../../components/JobFilter/JobFilter';
import ApplyJobs from '../../components/AppliedJobs/ApplyJobs';
import { useState, useEffect } from 'react';
import CircularProgress from '@mui/joy/CircularProgress';

const Jobs = () => {
   const classes = useStyle();
   const isDesktopValue = useMediaQuery(theme.breakpoints.up(1024));
   const [jobs, setJobs] = useState([]);
   const [loading, setLoading] = useState(true);
   const [page, setPage] = useState(1);
   const rowsPerPage = 5;
  
   useEffect(()=>{     
   async function fetchJobs() {
      setLoading(true);
      await fetch('https://jsonfakery.com/jobs')
      .then((res)=>res.json())
      .then((data)=>{setJobs(data);setLoading(false)})
      .then((err)=>console.log(err)).finally(()=>console.log('submitted'));
   }
   fetchJobs();
   }, []);

   console.log(jobs);

   const handleChangePage = (event:React.ChangeEvent<unknown>, newPage : number) => {
      setPage(newPage);
      console.log(newPage);
   }
    
  return (
    <Grid container  sx={{justifyContent: 'space-between'}} >
        <Grid item sm={12} md={9} className={classes.colOne}>
           <Box component='div' className={classes.col}>
             <Subheading heading='Top Job Picks for you'/>
             {!isDesktopValue && (<Box component='div' className={classes.dropdownBox}>
                 <FilterDropdown/>
                 <FilterDropdown/>
                 <FilterDropdown/>
              </Box>)}
              <Box component='div' sx={{my:4}}>
                 
                 {loading && <CircularProgress size="md" sx={{my:'10px'}}/>}
                 <ApplyJobs jobs={jobs} page={page} rowsPerPage={rowsPerPage} />
                 
              </Box> 
              <Box>
                 {!loading && <Pagination count={10} color="primary" page={page} onChange={handleChangePage} className={classes.pageBox}/>}
                  
               </Box>      
           </Box>
        </Grid>
        {isDesktopValue && (<Grid item sm={12} md={3} lg={3} className={classes.colTwo}>
           <Box component='div'>
            <JobFilter/>
            <JobFilter/>
           </Box>
        </Grid>) }
        
        
    </Grid>
  )
}

export default Jobs