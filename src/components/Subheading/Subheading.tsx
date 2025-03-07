import { Typography, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';


const useStyle = makeStyles<Theme>((theme)=>({
    subhead: {
       ...theme.typography.h3,
       fontWeight: '600 !important',
       color: theme.palette.secondary.main,
       marginTop: '5px !important',
       marginBottom: '20px !important',
    }
}));

interface SubheadingProps {
    heading: string;
  }

const Subheading = (props : SubheadingProps) => {
   const classes = useStyle();
  return (
    <>
      <Typography variant='h3' className={classes.subhead}>{props.heading}</Typography>
    </>
  )
}

export default Subheading;