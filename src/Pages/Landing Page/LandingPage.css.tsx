import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import img from '../../assets/Images/figmabg2.jpg'

const useStyle =  makeStyles<Theme>((theme) => ({
    
    background: {
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        
    },
    nav: {
        display: 'flex',
        padding: '20px 0px 0px',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    hero: {
        height: '100vh',
        position: 'relative',

    },
    heroContent: {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',

    },
    logo: {
        display: 'flex',
        alignItems: 'center',

    },
    logoImg: {
        width: 60,
        height: 50,
    },
    search: {
        fontFamily: 'nunito !important',
        fontSize: '20px !important',
        fontWeight: '600 !important',
        letterSpacing: '4px !important',
    },
    job: {
        fontFamily: 'nunito !important',
        fontSize: '20px !important',
        fontWeight: '700 !important',
        letterSpacing: '4px !important',
        color: 'White',
        marginLeft: 1,
    },
    login: {
        fontFamily: 'Nunito !important',
        fontSize: '18px !important',
        color: 'white',
        fontWeight: 'lighter !important',
        marginRight: '40px !important',
        textDecoration: 'none'
    },
    signup: {
        ...theme.typography.h4,
        color: 'white',
        boxShadow: theme.shadows[3],
        backgroundColor: theme.palette.primary.main,
        padding: '10px 18px',
        borderRadius: '23px',
        textDecoration: 'none'
    },
    heading: {
        color: 'white',
        fontSize: '42px !important',
        fontWeight: 500,
        fontFamily: 'Mulish !important',
    },
    fields: {
        backgroundColor: 'transparent',
        outline: 'none',
        border: '1px solid white',
        borderRadius: '2px',
        padding: '15px 10px',
        width: '100%',
        marginTop: 20,
        boxSizing: 'border-box',
        '&::placeholder': {
              color: 'white', 
              fontFamily: 'Mulish',
              fontSize: 16, 
        },
    },
    signin: {
        backgroundColor: `${theme.palette.primary.main} !important`,
        padding: '15px 10px !important',
        width: '100%',
        marginTop: '20px !important',
        fontFamily: 'Mulish !important',
        fontSize: '16px !important', 
        textAlign: 'center',
    },
    form: {
        width: 300,
    },
    signinText: {
        textTransform: 'capitalize',
    },
    Signup: {
        fontFamily: 'Mulish !important',
        fontSize: '17px !important',
        color:'white',
        textTransform: 'capitalize',
    }

}));

export default useStyle;