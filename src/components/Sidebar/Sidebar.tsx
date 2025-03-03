import {Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Avatar, Typography, Stack} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
// import WorkIcon from '@mui/icons-material/Work';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Person2Icon from '@mui/icons-material/Person2';
import useStyle from './Sidebar.css';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAppSelector } from '../../Store/Store';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch} from "react-redux";
import { userActions } from '../../Store/Slice/userAuthSlice';
import { useNavigate } from 'react-router-dom';

export const Sidebar : React.FC = () => {

    const [selectedIndex, setSelectedIndex] = useState(0);
    const user : string = useAppSelector(state => state.userAuth.currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const classes = useStyle();
    
    useEffect(()=>{
        if(window.location.pathname === '/' ){
            setSelectedIndex(1);
        }else if(window.location.pathname === '/Jobs'){
            setSelectedIndex(2);
        }
    },[selectedIndex])

    const handleListItemClick = (e:React.FormEvent, index:number) => {
        console.log(e);
        setSelectedIndex(index);
    };
    const handleLogout = () => {
        dispatch(userActions.logoutUser());
        navigate('/Login');
      };

  return (  
    <>
        <Box className={classes.user}>
            <Avatar className={classes.avatar}><Person2Icon/></Avatar>
            <Stack className={classes.userdetails}>
                <Typography variant='body1' className={classes.userName}>{user}</Typography>
                <Typography variant='body2' className={classes.userDesignation}>Javascript Developer</Typography>
            </Stack>
            <EditIcon className={classes.editIcon}/>
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
                <Link to='/' className={classes.navItem}>
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
                {/* <Link to='/Login' className={classes.navItem}> */}
                    <ListItem disablePadding className={classes.navItem}>
                        <ListItemButton className={classes.navBtn} selected={selectedIndex === 4}
                        onClick={handleLogout}>
                            <ListItemIcon >
                                <LogoutIcon/>
                            </ListItemIcon>
                            <ListItemText className={classes.navTxt}>Logout</ListItemText>
                        </ListItemButton>
                    </ListItem>
                {/* </Link> */}
            </List>
        </Box>
    </>    
  );
};

export default Sidebar;
