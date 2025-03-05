import { Box, Grid,useMediaQuery,Pagination } from '@mui/material';
import Subheading from '../../components/Subheading/Subheading';
import theme from '../../Theme/theme';
import useStyle from './Jobs.css';
import FilterDropdown from '../../components/FilterDropdown/FilterDropdown';
import JobFilter from '../../components/JobFilter/JobFilter';
import ApplyJobs from '../../components/AppliedJobs/ApplyJobs';
import { useState, useEffect } from 'react';
import { useAppSelector } from '../../Store/Store';
// import CircularProgress from '@mui/joy/CircularProgress';
import { Data } from '../../Database/Data';
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

const Jobs = () => {
   const classes = useStyle();
   const url = 'https://jsonfakery.com/jobs'; 
   // const rowsPerPage = 5;
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
   
   useEffect(()=>{
      setLoading(true);
      Data(url).then((data)=>{   
         setJobs(data);
         // Filter(data);
         setLoading(false)})
      .catch((err)=>console.log(err)).finally(()=>console.log('submitted'));
   },[url]);
   console.log(filters);

   // const Filter = (data:Job[]) => {
   //      const allCat = data.map((item: Job) => {
   //         return item.employment_type;
   //      })
   //      const allLoc = data.map((item: Job) => {
   //         return item.location;
   //      })
   //      const myCat = [...new Set(allCat)];
   //      const myLoc = [...new Set(allLoc)];
   //      setCategory(myCat);
   //      setLocation(myLoc);   
   // }

   console.log(category);
   console.log(location);

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

   //  const searchedJobs = jobs.filter((job:Job) => {
   //    const isLocationMatch = (filters.location.length > 0)? job.location.includes(filters.location.join()) : false;
   //    const isCategoryMatch = (filters.category.length > 0)? job.employment_type.includes(filters.category.join()) : false;
   //    if(isLocationMatch && isCategoryMatch){
   //      return (isLocationMatch && isCategoryMatch);
   //    }
   //    else{
   //      if(isLocationMatch){
   //        return isLocationMatch;
   //      }
   //      else if(isCategoryMatch){
   //        return isCategoryMatch;
   //      }
   //    }
      
   //  });

   //  const onSearchChange = jobs.filter((job:Job)=>{
      
   //  });

    console.log(filteredJobs.length);
    if(filteredJobs){
      for(let i=0; i < filteredJobs.length; i++){
         console.log(filteredJobs[i]);
       }
    }
    
   // const filter = (items: Record<string,boolean>) => {
      
   //    const filterArr = [];
     
   //    for (const [key, value] of Object.entries(items)) {
   //        if(value===true){
   //          filterArr.push(key);
   //        }
   //    }
      
      // const filteredProducts = jobs.filter((item:Job) => {

      //    for(let i = 0; i < item)

      //        if((item.employment_type === 'Full-time Developer')){
      //          count++;
      //          return item;
      //        }

      // });

      // setJobs(filteredProducts);
      // console.log(count);
   // }
   
  return (
   <>
    <Searchbar onFilterChange={handleFilterChange}/>
    <Grid container  sx={{justifyContent: 'space-between'}} >
        <Grid item sm={12} md={9} className={classes.colOne}>
           <Box component='div' className={classes.col}>
             <Subheading heading='Top Job Picks for you'/>
             {!isDesktopValue && (<Box component='div' className={classes.dropdownBox}>
                 <FilterDropdown onFilterChange={handleFilterChange}/>
                 
              </Box>)}


              <Box component='div' sx={{my:4}}>

                 {/* {loading && <CircularProgress size="md" sx={{my:'10px'}}/>} */}
                 {filteredJobs.length > 0 ? (
                     <ApplyJobs jobs={filteredJobs} page={page} rowsPerPage={5}/>
                     ) : (<>
                        {/* <p>No jobs match the filters</p> */}
                        <ApplyJobs jobs={jobs} page={page} rowsPerPage={5}/>
                     </>
                  )}
                 
                 
                 {/* <ApplyJobs jobs={jobs} page={page} rowsPerPage={rowsPerPage}/> */}
                 
              </Box> 
              <Box>
                 {!loading && <Pagination count={10} color="primary" page={page} onChange={handleChangePage} className={classes.pageBox}/>}
                  
               </Box>      
           </Box>
        </Grid>
        {isDesktopValue && (<Grid item sm={12} md={3} lg={3} className={classes.colTwo}>
           <Box component='div'>
            <JobFilter location={location} category={category} onFilterChange={handleFilterChange}/>
            {/* <JobFilter filterData = {location} title='Jobs by Location' filter={filter}/> */}
           </Box>
        </Grid>) }
        
        
    </Grid>
   </>
  )
}

export default Jobs