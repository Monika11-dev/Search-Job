import {Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Avatar, Typography, Stack} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WorkIcon from '@mui/icons-material/Work';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Person2Icon from '@mui/icons-material/Person2';
import useStyle from './Sidebar.css';
import EditIcon from '@mui/icons-material/Edit';

export const Sidebar = () => {

  const classes = useStyle();
  return (  
    <>
        <Box className={classes.user}>
            <Avatar className={classes.avatar}><Person2Icon/></Avatar>
            <Stack className={classes.userdetails}>
                <Typography variant='body1' className={classes.userName}>Monika chauhan</Typography>
                <Typography variant='body2' className={classes.userDesignation}>Javascript Developer</Typography>
            </Stack>
            <EditIcon className={classes.editIcon}/>
        </Box>
        <Box>
            <List disablePadding>
                <ListItem disablePadding>
                    <ListItemButton className={classes.navBtn}>
                        <ListItemIcon >
                            <DashboardIcon/>
                        </ListItemIcon>
                        <ListItemText className={classes.navTxt}>Dashboard</ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton className={classes.navBtn}>
                        <ListItemIcon>
                            <WorkIcon/>
                        </ListItemIcon>
                        <ListItemText className={classes.navTxt}>Jobs</ListItemText>
                    </ListItemButton>                         
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton className={classes.navBtn}>
                        <ListItemIcon>
                            <TrendingUpIcon />
                        </ListItemIcon>
                        <ListItemText className={classes.navTxt}>Trending Jobs</ListItemText>
                    </ListItemButton>                         
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton className={classes.navBtn}>
                        <ListItemIcon>
                            <Person2Icon/>
                        </ListItemIcon>
                        <ListItemText className={classes.navTxt}>Profile</ListItemText>
                    </ListItemButton>                         
                </ListItem>
            </List>
        </Box>
    </>    
  );
};

export default Sidebar;
