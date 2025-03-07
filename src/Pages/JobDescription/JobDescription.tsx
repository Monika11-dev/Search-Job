import { Box, Grid, Typography , Button, List, ListItem, ListItemText, ListItemIcon, useMediaQuery} from "@mui/material";
import useStyle from "./JobDescription.css";
import img1 from '../../assets/Images/Tata-Logo-1988.png';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ShieldIcon from '@mui/icons-material/Shield';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import { useLocation } from 'react-router-dom';
import CheckIcon from '@mui/icons-material/Check';
import theme from "../../Theme/theme";
import { useDispatch } from "react-redux";
import { jobsActions } from "../../Store/Slice/appliedJobsSlice";
import { useNavigate } from "react-router-dom";
import { useAppSelector} from "../../Store/Store";
import { useEffect } from "react";

const JobDescription = () => {
    const location = useLocation();
    const classes = useStyle();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    // Data from previous page

    const { description, qualifications, address, title, salary, opening, id, company, employment } = location.state;
    const qualification = JSON.parse(qualifications);

    const isDesktopValue = useMediaQuery(theme.breakpoints.up(1024));
    
    // Data from redux
    const userEmail : string = useAppSelector(state => state.userAuth.currentEmail);
    const currentUser : string = useAppSelector(state => state.userAuth.currentUser);

    // handles apply jobs

    const handleApply = () => {
         dispatch(jobsActions.applyJobs({id,userEmail})); 
         navigate('/');
    } 

    useEffect(()=>{
        if (currentUser === '') {
            navigate("/Login");
          }
    })

  return (
    <Grid container sx={{justifyContent: 'space-between'}} >
        <Grid item sm={12} md={9} className={classes.colOne}>
           <Box component='div' className={classes.col}>
              <Box component='div' sx={{my:4}}>
                 
                <Grid container columnSpacing={{lg:1}} sx={{justifyContent:{sm:'space-between'}}} >
                    <Grid item xs={1}>
                        <img  src={img1} className={classes.companyLogo}/>
                    </Grid>
                    <Grid item xs={8} md={7} sx={{marginLeft: {lg:'15px'}}}>
                        <Grid container direction='column' rowSpacing='1px'>
                        <Grid item ><Typography className={classes.jobProfile}>{title}</Typography></Grid>
                        <Grid item>  
                            <Grid container>
                                <Grid item xs={4}><Typography className={classes.company}>{company}</Typography></Grid>
                                <Grid item xs={4}><Typography className={classes.jobDetails}><LocationOnIcon sx={{height: 15, width: 15, color: '#7A7A7A'}}/>Noida</Typography></Grid>
                                <Grid item xs={3}><Typography className={classes.jobDetails}>{employment}</Typography></Grid>
                                {/* <Grid item xs={2}><Typography className={classes.jobDetails}>view details</Typography></Grid> */}
                            </Grid>
                        </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={2} md={3} sx={{alignSelf:'start'}}>
                        <Button variant='contained' onClick={handleApply} className={classes.btnBox}><Typography className={classes.applyNow}>Apply now</Typography></Button>
                    </Grid>
                </Grid>
                         
              </Box>   
              <Box component='div' sx={{marginBottom:4,paddingLeft:'8px'}}>
                  <Typography className={classes.descriptionHeading}>Job Description</Typography>
                  <Typography className={classes.descriptionDetails}>{description}</Typography>
                  <Typography className={classes.descriptionHeading}>Qualification</Typography>
                  
                    <List dense={false} className={classes.qualiList}>
                     {qualification.map((item:string[])=>(
                        <ListItem className={classes.qualiListItem}>
                        <ListItemIcon>
                            <CheckIcon/>
                        </ListItemIcon>
                        <ListItemText
                            primary={item}
                            className={classes.descriptionDetailsList}
                        />
                        </ListItem>
                
                    ))
                  }
                  </List>
                  {/* display when screen is of tablet size */}
                  {(!isDesktopValue) && (
                    <>
                     <Typography className={classes.descriptionHeading}>Address</Typography>
                     <Typography className={classes.descriptionDetails}>{address}</Typography>
                     <Typography className={classes.descriptionHeading}>Job Designation</Typography>
                     <Typography className={classes.descriptionDetails}>{title}</Typography>
                     <Typography className={classes.descriptionHeading}>Salary</Typography>
                     <Typography className={classes.descriptionDetails}>Rs.{salary}</Typography>
                     <Typography className={classes.descriptionHeading}>No. Of Opening</Typography>
                     <Typography className={classes.descriptionDetails}>{opening}</Typography>
                    </>
                  )}
              </Box>  
           </Box>
        </Grid> 
        {/* displays for desktop size */}
        {isDesktopValue && (<Grid item sm={12} md={3} lg={3} className={classes.colTwo}>
           <Box component='div'>
                <Grid container direction= 'column' sx={{marginBottom: '35px'}}>
                    <Grid item xs={12} sx={{borderBottom: `2px solid #4884ED`,}}>
                        <Typography variant='h3' className={classes.filterHeading}>Jobs Details</Typography>
                        <List className={classes.filterContent}>
                        <ListItem disablePadding className={classes.listItem}>             
                            <LocationOnIcon className={classes.detailsIcon}/>
                            <Box>
                                <ListItemText primary="Address" className={classes.descriptionText1}/>
                                <ListItemText primary={address} className={classes.descriptionText2}/>
                            </Box>       
                        </ListItem>
                        <ListItem disablePadding className={classes.listItem}>             
                            <CurrencyRupeeIcon className={classes.detailsIcon}/>
                            <Box>
                                <ListItemText primary="Salary" className={classes.descriptionText1}/>
                                <ListItemText primary={salary} className={classes.descriptionText2}/>
                            </Box>       
                        </ListItem>
                        <ListItem disablePadding className={classes.listItem}>             
                            <ShieldIcon className={classes.detailsIcon}/>
                            <Box>
                                <ListItemText primary="No. of Opening" className={classes.descriptionText1}/>
                                <ListItemText primary={opening} className={classes.descriptionText2}/>
                            </Box>       
                        </ListItem>
                        <ListItem disablePadding className={classes.listItem}>             
                            <ContactPageIcon className={classes.detailsIcon}/>
                            <Box>
                                <ListItemText primary="Job Designation" className={classes.descriptionText1}/>
                                <ListItemText primary={title} className={classes.descriptionText2}/>
                            </Box>       
                        </ListItem>
                        
                        
                        </List>
                    
                    </Grid>
                </Grid>
            
           </Box>
        </Grid> )}
         
    </Grid>
  )
}

export default JobDescription