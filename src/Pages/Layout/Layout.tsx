import { Outlet } from "react-router-dom";
import { Container, Box, Button, Typography} from "@mui/material";
import useStyle from "./Layout.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Search } from "@mui/icons-material";
import {LocationOn} from "@mui/icons-material";
import theme from "../../Theme/theme";
// import { useAppSelector } from "../../Store/Store";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

export const Layout = () => {
  
    const classes = useStyle();
    // const navigate = useNavigate();
    // const user : string = useAppSelector(state => state.userAuth.currentUser);

    // useEffect(()=>{

    //   if(user === ' '){
    //     navigate('/Login');
    //   }

    // },[]);

  return (
    // creating dashboard Layout 
   <Container maxWidth='xl' sx={{padding:'0px !important'}}>
    <Box component='div' className={classes.mainSection}>
      <Box className={classes.firstCol} sx={{bgcolor: theme.palette.background.default}}>
        <Sidebar/>
      </Box>
      <Box className={classes.secondCol} sx={{bgcolor: theme.palette.background.paper}}>
        <Box className={classes.locationBox}>
          <Box className={classes.outerbox}>
             <Box className={classes.box}>
               <Search />
               <input type='text' placeholder='Job Title'/>
             </Box>
             <Box className={classes.box}>
               <LocationOn/>
               <input type='text' placeholder='Location'/>
             </Box>
             <Box>
               <Button variant="contained" className={classes.findBtn} disableElevation>
                 <Typography className={classes.btnTxt} variant='body1'>Find Job</Typography>
                </Button>
             </Box>
          </Box>
          
        </Box>
        <Box component='section' sx={{my:5}}> 
          <Outlet/>            
        </Box>
      </Box>
    </Box>
   </Container> 
  );
};