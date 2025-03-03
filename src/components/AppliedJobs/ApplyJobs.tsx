import { Grid, Typography,Button } from "@mui/material";
import img1 from '../../assets/Images/Tata-Logo-1988.png';
import useStyle from "./AppliedJobs.css";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ApplyButton from "../ApplyButton/ApplyButton";



interface Job {
   title: string;
   location:string;
   company:string;
   employment_type: string;
   created_at: string;
   id:string,
 }
 
 interface Props {
   jobs: Job[];
 }

const ApplyJobs = (props:Props) => {
    const classes = useStyle();
    
    return (
      <>
        
          {props.jobs.map((item) => (
             <Grid container columnSpacing={{lg:1}} sx={{my:'15px'}} className={classes.border} key={item.id}>
               <Grid item xs={1}>
                  <img  src={img1} className={classes.companyLogo}/>
               </Grid>
               <Grid item xs={9}>
                  <Grid container direction='column' rowSpacing='3px'>
                  <Grid item ><Typography className={classes.jobProfile}>{item.title}</Typography></Grid>
                  <Grid item>  
                     <Grid container>
                           <Grid item xs={4}><Typography className={classes.company}>{item.company}</Typography></Grid>
                           <Grid item xs={4}><Typography className={classes.jobDetails}><LocationOnIcon sx={{height: 15, width: 15, color: '#7A7A7A'}}/>{item.location}</Typography></Grid>
                           {/* <Grid item xs={2}><Typography className={classes.jobDetails}>{item.created_at}</Typography></Grid> */}
                           <Grid item xs={3}><Typography className={classes.jobDetails}>{item.employment_type}</Typography></Grid>
                           {/* <Grid item xs={2}><Typography className={classes.jobDetails}>view details</Typography></Grid> */}
                     </Grid>
                  </Grid>
                  </Grid>
               </Grid>
               <Grid item xs={2} sx={{alignSelf:'center'}}>
                  <Typography className={classes.fulltime}>Full time</Typography> 
                  <Button disableElevation={false} className={classes.ApplyBtn}><ApplyButton/> </Button>
               </Grid>
            </Grid>
            ))}
        
      </>
    )
}

export default ApplyJobs