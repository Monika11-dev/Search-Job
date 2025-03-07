import { Grid, Typography } from "@mui/material";
import img1 from '../../assets/Images/Tata-Logo-1988.png';
import useStyle from "./AppliedJobs.css";
import LocationOnIcon from '@mui/icons-material/LocationOn';

interface Props{
   jobs: Job[],
   myJobs : string[],
   page: number,
   rowsPerPage: number,
}
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

const AppliedJobs = (props:Props) => {
  const classes = useStyle();
  const filteredJobs = props.jobs.filter((item:Job) => props.myJobs.includes(item.id));
  return (
   <>
         {filteredJobs.slice((props.page-1) * props.rowsPerPage, ((props.page-1) * props.rowsPerPage) + props.rowsPerPage).map((item:Job) => (
            <Grid container columnSpacing={{lg:1}} key={item.id}>
               <Grid item xs={1}>
                  <img  src={img1} className={classes.companyLogo}/>
               </Grid>
               <Grid item xs={9}>
                  <Grid container direction='column' rowSpacing='3px'>
                  <Grid item ><Typography className={classes.jobProfile}>{item.title}</Typography></Grid>
                  <Grid item >  
                     <Grid container>
                        <Grid item xs={4}><Typography className={classes.company}>{item.company} </Typography></Grid>
                        <Grid item xs={3}><Typography className={classes.jobDetails}><LocationOnIcon sx={{height: 15, width: 15, color: '#7A7A7A'}}/>{item.location}</Typography></Grid>
                  
                        <Grid item xs={3}><Typography className={classes.jobDetails}>{item.employment_type}</Typography></Grid>
                     </Grid>
                  </Grid>
                  </Grid>
               </Grid>
               <Grid item xs={2} >
                  <Typography className={classes.fulltime}>full time</Typography>  
               </Grid>
            </Grid>
         ))}   
   </>
   )
}

export default AppliedJobs