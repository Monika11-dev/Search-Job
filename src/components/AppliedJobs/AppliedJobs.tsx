import { Grid, Typography } from "@mui/material";
import img1 from '../../assets/Images/Tata-Logo-1988.png';
import useStyle from "./AppliedJobs.css";
import LocationOnIcon from '@mui/icons-material/LocationOn';

const AppliedJobs = () => {
  const classes = useStyle();
  return (
    <>
      <Grid container columnSpacing={1} sx={{my:'10px'}}>
         <Grid item xs={1}>
            <img width='60' height='40' src={img1}/>
         </Grid>
         <Grid item xs={9}>
            <Grid container direction='column' rowSpacing='3px'>
             <Grid item ><Typography className={classes.jobProfile}>Technical Associate</Typography></Grid>
             <Grid item >  
                <Grid container>
                    <Grid item xs={4}><Typography className={classes.company}>Tata Consultancy Services </Typography></Grid>
                    <Grid item xs={3}><Typography className={classes.jobDetails}><LocationOnIcon sx={{height: 15, width: 15, color: '#7A7A7A'}}/>Delhi</Typography></Grid>
                    <Grid item xs={2}><Typography className={classes.jobDetails}>24 hours ago</Typography></Grid>
                    <Grid item xs={3}><Typography className={classes.jobDetails}>Fresher</Typography></Grid>
                    {/* <Grid item xs={2}><Typography className={classes.jobDetails}>view details</Typography></Grid> */}
                </Grid>
             </Grid>
            </Grid>
         </Grid>
         <Grid item xs={2}>
            <Typography className={classes.fulltime}>Full time</Typography>  
         </Grid>
      </Grid>
    </>
  )
}

export default AppliedJobs