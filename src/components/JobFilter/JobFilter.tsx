import React from 'react';
import { Grid, Typography, Radio } from '@mui/material';
import useStyle from './JobFilter.css';

const JobFilter = () => {
    const classes = useStyle();
  return (
    <Grid container direction= 'column' sx={{marginBottom: '35px'}}>
         <Grid item xs={12}>
            <Typography variant='h3' className={classes.filterHeading}>Jobs by Category</Typography>
         </Grid>
         <Grid item xs={12} sx={{borderBottom: `1px solid #4884ED`,}}>
            <Grid container columnSpacing='3px' className={classes.filterContent}>
             <Grid item xs={2} sx={{my:'6px'}}>
             <Radio checked={true} size="small" color='primary'/>
             </Grid>
             <Grid item xs={10}>  
               <Typography className={classes.filterText}>Technical Associate</Typography>
             </Grid>
             <Grid item xs={2} sx={{my:'6px'}}>
             <Radio  size="small" color='primary'/>
             </Grid>
             <Grid item xs={10}>  
               <Typography className={classes.filterText}>Technical Associate</Typography>
             </Grid>
             <Grid item xs={2} sx={{my:'6px'}}>
             <Radio  size="small" color='primary'/>
             </Grid>
             <Grid item xs={10}>  
               <Typography className={classes.filterText}>Technical Associate</Typography>
             </Grid>
             <Grid item xs={2} sx={{my:'6px'}}>
             <Radio  size="small" color='primary'/>
             </Grid>
             <Grid item xs={10}>  
               <Typography className={classes.filterText}>Technical Associate</Typography>
             </Grid>
             <Grid item xs={2} sx={{my:'6px'}}>
             <Radio  size="small" color='primary'/>
             </Grid>
             <Grid item xs={10}>  
               <Typography className={classes.filterText}>Technical Associate</Typography>
             </Grid>
             <Grid item xs={2} sx={{my:'6px'}}>
             <Radio  size="small" color='primary'/>
             </Grid>
             <Grid item xs={10}>  
               <Typography className={classes.filterText}>Technical Associate</Typography>
             </Grid>
            </Grid>
         </Grid>
         
         
      </Grid>
  )
}

export default JobFilter