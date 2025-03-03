import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyle = makeStyles<Theme>((theme)=>({
    colOne: {

        [theme.breakpoints.down(1024)]: {
           flexBasis: '100% !important',
           maxWidth: '100% !important',
        },
        [theme.breakpoints.between(1024,1300)]: {
           flexBasis: '74% !important',
           maxWidth: '74% !important',
        },
        [theme.breakpoints.up(1300)]: {
           flexBasis: '76% !important',
           maxWidth: '76% !important',
        },
        
     },
     colTwo: {
       
        [theme.breakpoints.down(1024)]: {
           flexBasis: '100% !important',
           maxWidth: '100% !important',
        },
        [theme.breakpoints.between(1024,1300)]: {
           flexBasis: '24% !important',
           maxWidth: '24% !important',
        },
        [theme.breakpoints.up(1300)]: {
           flexBasis: '22% !important',
           maxWidth: '22% !important',
        },
     },
     col: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: '15px 20px',
        border: `0.5px solid ${theme.palette.grey[300]}`,
        minHeight: '600px',
     },
     companyLogo: {
      width: 60,
      height: 40,
      // [theme.breakpoints.down(1200)]: {
      //     width: 45,
      //     height: 30,
      // }
    },
    jobProfile: {
      ...theme.typography.h2,
      fontSize: '20px !important',
      color: theme.palette.grey[100],
      fontWeight: '600 !important',
      lineHeight: 1.5,
      [theme.breakpoints.down(1024)]: {
          fontSize: '1rem !important',
      },

   },
   company: {
         ...theme.typography.body1,
         color: theme.palette.primary.main,
         lineHeight: 1.4,
         [theme.breakpoints.down(1200)]: {
            fontSize: '0.75rem !important',
         },
         [theme.breakpoints.down(850)]: {
            fontSize: '0.7rem !important',
         }
   },
   jobDetails: {
      ...theme.typography.body1,
      color: theme.palette.secondary.main,
      lineHeight: 1.4,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight:'200 !important',
      gap: 2,
      [theme.breakpoints.between(850,1200)]: {
          fontSize: '0.75rem !important',
      },
      [theme.breakpoints.down(850)]: {
          fontSize: '0.7rem !important',
      }
      
   },
   applyNow: {
      ...theme.typography.h4,
      textTransform: 'capitalize',
      fontWeight:'500 !important',
      [theme.breakpoints.down(1024)]: {
         fontSize: '0.68rem !important',
     },
   },
   btnBox: {
      padding: '7px 16px !important',
      borderRadius: '24px !important',
      backgroundColor: `${theme.palette.primary.main} !important`,
      [theme.breakpoints.down(1024)]: {
         padding: '7px 12px !important',
      },
   },
   descriptionHeading: {
      fontFamily: 'Nunito !important',
      fontSize: '18px !important',
      marginBottom: '15px !important',
      fontWeight: '500 !important',
      color: `${theme.palette.secondary.main} !important`,
      [theme.breakpoints.down(1024)]: {
         fontSize: '15px !important',
      },
      [theme.breakpoints.between(1024,1200)]: {
         fontSize: '18px !important',
      },
   },
   descriptionDetailsList: {
      '& .MuiTypography-body1':{
         fontFamily: 'Nunito !important',
         fontWeight: '300 !important',
         fontSize: '15px !important',
         color: '#000000',
         
         [theme.breakpoints.down(1024)]: {
            fontSize: '12px !important',
         },
         [theme.breakpoints.between(1024,1200)]: {
            fontSize: '14px !important',
         },
      }
      
   },
   descriptionDetails: {
      
         fontFamily: 'Nunito !important',
         fontWeight: '300 !important',
         fontSize: '15px !important',
         color: '#000000',
         marginBottom: '20px !important',
         [theme.breakpoints.down(1024)]: {
            fontSize: '12px !important',
         },
         [theme.breakpoints.between(1024,1200)]: {
            fontSize: '14px !important',
         },
      
      
   },
   filterHeading: {
      ...theme.typography.h3,
      backgroundColor: theme.palette.primary.main,
      color: 'white',
      padding: '15px 20px',
      borderRadius: '5px 5px 0px 0px',
      boxSizing:'border-box',
      textAlign: 'center',
      [theme.breakpoints.between(1024,1200)]: {
      padding: '14px 20px',
      fontSize: '0.82rem !important',
      
   }
   },
   filterContent: {
      backgroundColor: 'white',
      padding: '30px 15px 30px !important',
      // boxSizing:'border-box',
      // display: 'flex',
      alignItems: 'center',
      '& .MuiListItem-root': {
         marginBottom: '15px',
      },
      '& .Mui-checked': {
         color: `${theme.palette.primary.main} !important`,
      },
      '& .MuiRadio-root': {
         padding:0,
         marginRight: 10,
         [theme.breakpoints.between(1024,1200)]: {
               marginRight: 5,
         }
      },
      '& .MuiListItem-root .MuiRadio-root .css-hyxlzm .MuiSvgIcon-root': {
         fontSize: '1rem',
      },
      [theme.breakpoints.between(1024,1200)]: {
         padding: '30px 15px 30px !important',
      }
   },
   descriptionText1: {
      
      marginTop: '0px !important',
      marginBottom: '6px !important',
      '& .MuiTypography-body1': {
         ...theme.typography.h3,
         fontWeight: '500 !important',
         [theme.breakpoints.between(1024,1200)]: {
            fontSize: '0.9rem !important',
         },
         // [theme.breakpoints.up(1201)]: {
         //     fontSize: '0.8rem !important',
         //  }
      }
      
   },
   descriptionText2: {
      '& .MuiTypography-body1': {
         ...theme.typography.h4,
         fontWeight: '300 !important',
         [theme.breakpoints.between(1024,1200)]: {
            fontSize: '0.7rem !important',
         },
         // [theme.breakpoints.up(1201)]: {
         //     fontSize: '0.8rem !important',
         //  }
      }
   },
   detailsIcon: {
      alignSelf: 'start',
      fill: `${theme.palette.primary.main} !important`,
      fontSize: '1.3rem !important',
   },
   listItem: {
      gap: '10px',
   },
   qualiList: {
      padding: '0px !important',
      marginBottom: '20px !important',
   },
   qualiListItem: {
      padding: '2px 0px !important',
      '& .MuiListItemIcon-root': {
         minWidth: '30px',
      },
      '& .MuiSvgIcon-root': {
         fill : theme.palette.primary.main,
         fontSize: '1.4rem !important',
      }
   }
   

}));

export default useStyle;

