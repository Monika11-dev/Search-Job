import { Grid, Typography, Radio, List, ListItem, ListItemText  } from '@mui/material';
import useStyle from './JobFilter.css';

const JobFilter = () => {
    const classes = useStyle();
  return (
    <Grid container direction= 'column' sx={{marginBottom: '35px'}}>
         <Grid item xs={12} sx={{borderBottom: `2px solid #4884ED`,}}>
            <Typography variant='h3' className={classes.filterHeading}>Jobs by Category</Typography>
            <List className={classes.filterContent}>
              <ListItem disablePadding>
                
                  
                  <Radio checked={true} size="small" color='primary'/>
                  
                  <ListItemText primary="Technical Associate" className={classes.filterText}/>
                
              </ListItem>
              <ListItem disablePadding>
                
                  
                  <Radio  size="small" color='primary'/>
                  
                  <ListItemText primary="Technical Associate" className={classes.filterText}/>
               
              </ListItem>
              <ListItem disablePadding>
                
                  
                  <Radio  size="small" color='primary'/>
                  
                  <ListItemText primary="Technical Associate" className={classes.filterText}/>
               
              </ListItem>
              <ListItem disablePadding>
                
                  
                  <Radio  size="small" color='primary'/>
                  
                  <ListItemText primary="Technical Associate" className={classes.filterText}/>
               
              </ListItem>
              <ListItem disablePadding>
                
                  
                  <Radio  size="small" color='primary'/>
                  
                  <ListItemText primary="Technical Associate" className={classes.filterText}/>
               
              </ListItem>
              <ListItem disablePadding>
                
                  
                  <Radio  size="small" color='primary'/>
                  
                  <ListItemText primary="Technical Associate" className={classes.filterText}/>
               
              </ListItem>
              
            </List>
           
         </Grid>
         {/* <Grid item xs={12} sx={{borderBottom: `1px solid #4884ED`,}}>
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
         </Grid> */}
         
         
      </Grid>
  )
}

export default JobFilter