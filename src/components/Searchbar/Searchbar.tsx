import React from 'react';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';
import {Box,  Button, Typography} from '@mui/material';
import { Search } from "@mui/icons-material";
import {LocationOn} from "@mui/icons-material";
import { useState } from 'react';

interface Props{
    onFilterChange: (filters: {
      location: string[];
      category: string[];
    }) => void;
  }

const useStyle = makeStyles<Theme>((theme)=>({
    locationBox: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginBottom: '30px',
    },
    outerbox:{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 60,
        padding: '4px 4px 4px 20px',
    },
    box: {
        display: 'flex',
        alignItems: 'center',
        gap: 10, 
        '& svg': {
            height: 15,
            width: 15,
            color: '#4884ED',
            // strokeWidth:1,
            // stroke: '#1976d2',
        },
        '& input': {
            border: 'none',
            fontFamily: 'Mulish',
            fontSize: 13,
            fontWeight: 500,
            '&::placeholder': {
              color: '#4884ED',  
            },
            '&:focus-visible':{
                outline: 'none',
            },
            [theme.breakpoints.down(1200)]: {
                fontSize: '11px',
            }
        }
    },
    findBtn: {     
        borderRadius: '25px !important',
        padding: '6px 16px !important',  
        backgroundColor: '#4884ED !important',   
        '&:hover': {
            backgroundColor: `${theme.palette.primary.dark} !important`,
        }
    },
    btnTxt: {
        textTransform: 'capitalize',
        fontFamily: 'Mulish !important',
        fontSize: '12px !important',
    }
}))

const Searchbar = (props:Props) => {
    const [catValue, setCatValue] = useState('');
    const [locValue, setLocValue] = useState('');
    const handleCatChange = (event:React.FormEvent) => {
          setCatValue((event.target as HTMLInputElement).value)
        };
        const handleLocChange = (event:React.FormEvent) => {
          setLocValue((event.target as HTMLInputElement).value);
        };
        console.log(catValue);
        console.log(locValue);
        const searchJob = () => {
            props.onFilterChange({ location: [locValue], category: [catValue] });
        }
    const classes = useStyle();
    return (
        <Box className={classes.locationBox}>
          <Box className={classes.outerbox}>
             <Box className={classes.box}>
               <Search />
               <input type='text' placeholder='Job Title' value={catValue} onChange={handleCatChange}/>
             </Box>
             <Box className={classes.box}>
               <LocationOn/>
               <input type='text' placeholder='Location' value={locValue} onChange={handleLocChange}/>
             </Box>
             <Box>
               <Button variant="contained" className={classes.findBtn} disableElevation onClick={searchJob}>
                 <Typography className={classes.btnTxt} variant='body1'>Find Job</Typography>
                </Button>
             </Box>
          </Box>
          
        </Box>
  )
}

export default Searchbar