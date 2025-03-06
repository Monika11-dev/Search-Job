import { Outlet } from "react-router-dom";
import { Container, Box} from "@mui/material";
import useStyle from "./Layout.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import theme from "../../Theme/theme";
// import { FormEvent, useState } from "react";

export const Layout = () => {
  
  const classes = useStyle();
  

  return (
     
   <Container maxWidth='xl' sx={{padding:'0px !important'}}>
    <Box component='div' className={classes.mainSection}>
      <Box className={classes.firstCol} sx={{bgcolor: theme.palette.background.default}}>
          <Sidebar/>
      </Box>
      <Box className={classes.secondCol} sx={{bgcolor: theme.palette.background.paper}}>    
          <Outlet />                
      </Box>
    </Box>
   </Container> 
  );
};