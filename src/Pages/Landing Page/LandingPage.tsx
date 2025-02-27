import { Box } from "@mui/material";
import useStyle from "./LandingPage.css";
import img from '../../assets/Images/Logo_1.png';
import {Typography, Container, Button} from "@mui/material";

const LandingPage = () => {

  const classes = useStyle();

  return (
    <>
       <Box component = 'section' className={classes.background}>
         <Container maxWidth='xl'>
          <Box sx={{margin:'0px 60px'}} className={classes.hero}>
            <Box className={classes.nav}>
              <Box component='a' className={classes.logo}>
                  <img src={img} className={classes.logoImg}/>
                  <Typography className={classes.search} component='span'>SEARCH</Typography>
                  <Typography className={classes.job} component='span'>JOB</Typography>
              </Box>
              <Box component='div'>
                  <Typography component='a' href='/Login' className={classes.login}>Log In</Typography>
                  <Typography component='a' href='/Signup' className={classes.signup}>Sign up</Typography>
              </Box>
            </Box>
            <Box className={classes.heroContent}>
              <Typography component='h2' className={classes.heading}>Your Dream Job is</Typography>
              <Typography component='h2' className={classes.heading} sx={{marginBottom: '10px'}}>Waiting for You</Typography>
              <Box className={classes.form}>
                <input className={classes.fields} type='email' placeholder='Email Address'/>
                <input className={classes.fields} type='password' placeholder='Password'/>
                <Button className={classes.signin} variant='contained' disableElevation><Typography className={classes.signinText}>Sign In</Typography></Button>
              </Box>    
            </Box>
          </Box>
          
         </Container>
       </Box>
    </>
  )

}

export default LandingPage