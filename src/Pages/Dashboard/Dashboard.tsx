
import useStyle from './Dashboard.css';
import { Grid, Box, Tab, Pagination } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import Subheading from '../../components/Subheading/Subheading';
import { useState } from 'react';
import AppliedJobs from '../../components/AppliedJobs/AppliedJobs';
import JobFilter from '../../components/JobFilter/JobFilter';
// import JobCarousel from '../../components/JobCarousel/JobCarousel';

const Dashboard = () => {

  const classes = useStyle();
  const [value, setValue] = useState('1');
  const handleChange = (e:React.FormEvent, newValue:string) => {
    e.preventDefault();
    setValue(newValue);
  };
  return (
   
      <Grid container  sx={{justifyContent: 'space-evenly'}} >
        <Grid item md={8} lg={9}>
           <Box component='div' className={classes.col}>
             <Subheading heading='My Jobs'/>
             <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: '#F5F5F5', mt: 2  }}>
                  <TabList className={classes.tabBox} onChange={handleChange} >
                    <Tab className={classes.tab} label="Applied" value="1" sx={{textTransform: "capitalize"}}/>
                    <Tab className={classes.tab} label="Saved" value="2" sx={{textTransform: "capitalize"}}/>
                    <Tab className={classes.tab} label="In Progress" value="3" sx={{textTransform: "capitalize"}}/>
                  </TabList>
                </Box>
                <TabPanel value="1" className={classes.tabpanel}>
                   <AppliedJobs/>
                   <AppliedJobs/>
                   <AppliedJobs/>
                   <AppliedJobs/>
                   <AppliedJobs/>
                   
                   <Pagination count={10} className={classes.pageBox}/>
                </TabPanel>
                <TabPanel value="2">Item Two</TabPanel>
                <TabPanel value="3">Item Three</TabPanel>
              </TabContext>
              {/* <Box component='section' className={classes.suggestedJobsbox}>
                <Subheading heading='Suggested Jobs'/>
                <JobCarousel/>
              </Box> */}
           </Box>
        </Grid>
        
        <Grid item md={3} lg={2}>
           <Box component='div'>
            <JobFilter/>
            <JobFilter/>
           </Box>
        </Grid>
        
      </Grid>
   
  )
}

export default Dashboard