import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

const useStyle = makeStyles<Theme>((theme)=>({
   col: {
      backgroundColor: 'white',
      borderRadius: 8,
      padding: '15px 20px',
      border: `0.5px solid ${theme.palette.grey[300]}`
   },
   tab: {
      ...theme.typography.h2,
      fontWeight: '300 !important',
      '&.Mui-selected': {
         color: `${theme.palette.primary.main} !important`,
         fontWeight: '500 !important',
      }
   },
   tabBox: {
      '& .MuiTabs-scroller .MuiTabs-indicator': {
         color: `${theme.palette.primary.main} !important`,
      }
   },
   tabpanel: {
      padding: '24px 0px !important',
   },
   pageBox: {
      margin: '20px 0px',
      '& .MuiPaginationItem-root.Mui-selected': {
         backgroundColor: `${theme.palette.primary.main} !important`,
         color: 'white',
      },
      '& .MuiPagination-ul': {
         justifyContent: 'end',
      }
   },
   suggestedJobsbox: {
      backgroundColor: 'white',
      borderRadius: 2,
      padding: '12px 20px',
      border: `0.5px solid ${theme.palette.grey[300]}`
   }
}));

export default useStyle;