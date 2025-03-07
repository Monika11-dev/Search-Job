import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Avatar, Typography, Stack, Dialog,
         DialogActions, Button } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import img from '../../assets/Images/Logo_1.png';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Person2Icon from '@mui/icons-material/Person2';
import EditIcon from '@mui/icons-material/Edit';
import LogoutIcon from '@mui/icons-material/Logout';
import useStyle from './Sidebar.css';
import { useState, useEffect } from 'react';
import { useAppSelector } from '../../Store/Store';
import { useDispatch } from "react-redux";
import { useNavigate, Link  } from 'react-router-dom';
import { userActions } from '../../Store/Slice/userAuthSlice';

export const Sidebar : React.FC = () => {

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [logout, setLogout] = useState(false);
    const user : string = useAppSelector(state => state.userAuth.currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const classes = useStyle();

    useEffect(()=>{
        
        if(window.location.pathname === '/' ){
            setSelectedIndex(1);
        }else if(window.location.pathname === '/Jobs'){
            setSelectedIndex(2);
        }else if(window.location.pathname === '/Profile'){
            setSelectedIndex(3);
        }else if(window.location.pathname === '/JobDescription/:id'){
            setSelectedIndex(2);
        }
    },[selectedIndex,navigate])

    // handles active page 

    const handleListItemClick = (e:React.FormEvent, index:number) => {
        setSelectedIndex(index);
    };

    // handles Logout function

    const handleLogout = () => {
        dispatch(userActions.logoutUser());
        navigate('/Login');
    };

    // handles logout confirmation popup

    const handleClose = () => {
        setLogout(false);
    };


  return (  
    <>  
        <Box component='a' className={classes.logo}>
            <img src={img} className={classes.logoImg}/>
            <Typography className={classes.search} component='span'>SEARCH</Typography>
            <Typography className={classes.job} component='span'>JOB</Typography>
        </Box>
        <Box className={classes.user}>
            <Avatar className={classes.avatar}><Person2Icon/></Avatar>
            <Stack className={classes.userdetails}>
                <Typography variant='body1' className={classes.userName}>{user}</Typography>
                <Typography variant='body2' className={classes.userDesignation}>Javascript Developer</Typography>
            </Stack>
            <Link to='/Profile' className={classes.editIconBtn}>
              <EditIcon className={classes.editIcon} />
            </Link>
            
        </Box>
        <Box>
            <List disablePadding>
                <Link to='/' className={classes.navItem}>
                    <ListItem disablePadding >
                        <ListItemButton className={classes.navBtn} selected={selectedIndex === 1} 
                            onClick={(event) => handleListItemClick(event, 1)}>
                            <ListItemIcon >
                                <DashboardIcon/>
                            </ListItemIcon>
                            <ListItemText className={classes.navTxt}>Dashboard</ListItemText>
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link to='/Jobs' className={classes.navItem}>
                    <ListItem disablePadding >
                        <ListItemButton className={classes.navBtn} selected={selectedIndex === 2}
                            onClick={(event) => handleListItemClick(event, 2)}>
                            <ListItemIcon >
                                <TrendingUpIcon/>
                            </ListItemIcon>
                            <ListItemText className={classes.navTxt}>Trending Jobs</ListItemText>
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link to='/Profile' className={classes.navItem}>
                    <ListItem disablePadding >
                        <ListItemButton className={classes.navBtn} selected={selectedIndex === 3}
                        onClick={(event) => handleListItemClick(event, 3)}>
                            <ListItemIcon >
                                <Person2Icon/>
                            </ListItemIcon>
                            <ListItemText className={classes.navTxt}>Profile</ListItemText>
                        </ListItemButton>
                    </ListItem>
                </Link>
               
                    <ListItem disablePadding className={classes.navItem}>
                        <ListItemButton className={classes.navBtn} selected={selectedIndex === 4}
                        onClick={()=>setLogout(true)}>
                            <ListItemIcon >
                                <LogoutIcon/>
                            </ListItemIcon>
                            <ListItemText className={classes.navTxt}>Logout</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <Dialog
                        open={logout}
                        onClose={handleClose}
                        className={classes.logoutAlert}
                    >
                        <Typography className={classes.logoutText} >Do you want to Logout ?</Typography>
                        
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button onClick={handleLogout } autoFocus className={classes.ok}>
                                Ok
                            </Button>
                        </DialogActions>
                    </Dialog>       
            </List>
        </Box>
    </>    
  );
};

export default Sidebar;
