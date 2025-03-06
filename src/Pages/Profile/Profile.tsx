import { Box, TextField, Grid,FormControl,Select , MenuItem,Typography,Button, SelectChangeEvent,FormHelperText} from "@mui/material";
import useStyle from "./Profile.css";
import Formtitle from "../../components/FormTitle/Formtitle";
import Formlabel from "../../components/FormLabel/Formlabel";
import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch} from "react-redux";
import { useEffect } from "react";
import { userActions } from "../../Store/Slice/userAuthSlice";
import { useAppSelector} from "../../Store/Store";

const countryStateMap = {
    USA: ["California", "Texas", "New York"],
    Canada: ["Ontario", "Quebec", "British Columbia"],
    India: ["Delhi", "Maharashtra", "Karnataka"],
  };

  interface errors {
    firstname: string,
    lastname: string,
    title: string,
    languages: string,
    current: string,
    expected: string,
    message: string,
    mobile: string,
    email : string,
    country: string,
    state: string,
    pincode:string,
    street:string,
    degree:string,
    university:string,
    grade:string,
    year:string,
    designation:string,
    employment:string,
    company:string,
    location:string,
    skill1:string,
    skill2: string, 
  }

const Profile = () => {

  const Error ={
    firstname: "",
    lastname: "",
    title: "",
    languages: "",
    current: '',
    expected: '',
    message: "",
    mobile: '',
    email: "",
    country: "",
    state: "",
    pincode:'',
    street:'',
    degree:'',
    university:"",
    grade:'',
    year:'',
    designation:'',
    employment:'',
    company:'',
    location:'',
    skill1:'',
    skill2: '', 
  }

  const classes = useStyle();
  const dispatch = useDispatch();
  const [states, setStates] = useState<string[]>([]);
  const [errors, setErrors] = useState(Error);
  const [isSubmit,setIsSubmit] = useState(false);
  const userEmail : string = useAppSelector(state => state.userAuth.currentEmail);
  const Profile = JSON.parse(localStorage.getItem("SearchJobProfile") as string) || [];
  const [formValues, setFormValues] = useState({
    firstname: "",
    lastname: "",
    title: "",
    languages: "",
    current: '',
    expected: '',
    message: "",
    email: userEmail,
    mobile: '',
    country: "",
    state: "",
    pincode:'',
    street:'',
    degree:'',
    university:"",
    grade:'',
    year:'',
    designation:'',
    employment:'',
    company:'',
    location:'',
    skill1:'',
    skill2: '', 
  });
  
  useEffect(()=> {
    const emailExists = Profile.find(
      (user:errors) => user.email === userEmail
    );
    // alert(emailExists);
    if(emailExists){
      setFormValues({ ...formValues,
        firstname: emailExists.firstname,
          lastname: emailExists.lastname,
          title: emailExists.title,
          languages: emailExists.languages,
          current: emailExists.current,
          expected: emailExists.expected,
          message: emailExists.message,
          mobile: emailExists.mobile,
          country: emailExists.country,
          state: emailExists.state,
          pincode: emailExists.pincode,
          street: emailExists.street,
          degree: emailExists.degree,
          university: emailExists.university,
          grade: emailExists.grade,
          year: emailExists.year,
          designation: emailExists.designation,
          employment: emailExists.employment,
          company: emailExists.company,
          location: emailExists.location,
          skill1: emailExists.skill1,
          skill2: emailExists.skill2, 
      });
    }
  },[]);
  

  const validateForm = () => {
    const newErrors : errors = Error;

    const regexUsername = /^[A-Za-z\s]+$/;
    const numberonly = /^[0-9]+$/;
    // const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formValues.firstname) newErrors.firstname = "First Name is required.";

    else if (!regexUsername.test(formValues.firstname))
      newErrors.firstname = "First name can only contain letters and spaces.";

    if (!formValues.lastname) newErrors.lastname = "Last Name is required.";

    else if (!regexUsername.test(formValues.lastname))
      newErrors.lastname = "Lastname can only contain letters and spaces.";

    if (!formValues.title)
      newErrors.title = "Title Name is required.";
    else if (!regexUsername.test(formValues.title))
        newErrors.title = "title can only contain letters and spaces.";

    if (!formValues.languages)
      newErrors.languages = "Language is required.";

    if (!formValues.current)
        newErrors.current = "Current salary is required.";

    else if (!numberonly.test(formValues.current))
      newErrors.current = "Current Salary can only contain digits.";

    if (!formValues.expected)
        newErrors.expected = "expected salary is required.";

    else if (!numberonly.test(formValues.expected))
      newErrors.expected = "expected Salary can only contain digits.";

    if (!formValues.country) newErrors.country = "Country is required.";

    if (!formValues.state) newErrors.state = "State is required.";

    if (!formValues.pincode)
      newErrors.pincode = "Zipcode is required.";

    else if (!/^\d{6}$/.test(formValues.pincode))
      newErrors.pincode = "Zipcode must be 6 digits.";

    if (!formValues.message)
      newErrors.message = "message is required.";

    if (!formValues.mobile)
        newErrors.mobile = "mobile is required.";

    else if (!/^\d{10}$/.test(formValues.mobile))
      newErrors.mobile = "Phone must be a 10-digit number.";

    if (!formValues.email) newErrors.email = "Email is required.";

    else if (!/^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/.test(formValues.email))
      newErrors.email = "Invalid email format.";

    if (!formValues.country) newErrors.country = "Country is required.";

    if (!formValues.state) newErrors.state = "State is required.";

    if (!formValues.pincode)
        newErrors.pincode = "pincode is required.";
  
      else if (!/^\d{6}$/.test(formValues.pincode))
        newErrors.pincode = "Pincode must be 6 digits.";

      if (!formValues.street)
        newErrors.street = "Street Address is required.";

      if (!formValues.degree) newErrors.degree = "Degree is required.";

    else if (!regexUsername.test(formValues.degree))
      newErrors.degree = "Degree can only contain letters and spaces.";

    if (!formValues.university) newErrors.university = "University is required.";

    else if (!regexUsername.test(formValues.university))
      newErrors.university = "University can only contain letters and spaces.";

    if (!formValues.grade) newErrors.grade = "grade is required.";


    if (!formValues.year) newErrors.year = "year is required.";

    else if (!numberonly.test(formValues.year))
      newErrors.year = "year can only contain digits.";

    if (!formValues.designation) newErrors.designation = "designation is required.";

    else if (!regexUsername.test(formValues.designation))
      newErrors.designation = "designation can only contain letters and spaces.";

    if (!formValues.employment) newErrors.employment = "employment is required.";

    else if (!regexUsername.test(formValues.employment))
      newErrors.employment = "designation can only contain letters and spaces.";

    if (!formValues.company) newErrors.company = "company is required.";

    else if (!regexUsername.test(formValues.company))
      newErrors.company = "company can only contain letters and spaces.";

    if (!formValues.location) newErrors.location = "location is required.";

    else if (!regexUsername.test(formValues.location))
      newErrors.location = "location can only contain letters and spaces.";

    if (!formValues.skill1) newErrors.skill1 = "skill1 is required.";

    if (!formValues.skill2) newErrors.skill2 = "skill2 is required.";
    setErrors(newErrors);
    return newErrors;

  };

  const handleSubmit = (e:FormEvent) => {
    e.preventDefault();

    const errors = validateForm();

    setIsSubmit(true);
    // validateForm();
    const areErrorsEmpty = (errors: errors) => {
      return Object.values(errors).every(value => value === '');
    };
    if (areErrorsEmpty(errors)) {
      setIsSubmit(true);
      dispatch(userActions.updateProfile({...formValues,userEmail}));  
      
    } else {
      
      setIsSubmit(false);
    }
   
    
  };



  const handleChange = (e:(ChangeEvent|SelectChangeEvent)) => {
    const { name, value } = e.target as HTMLInputElement;
    if (name === "country") {
      setFormValues((prev) => ({ ...prev, country: value, state: "" }));
      setStates(countryStateMap[value] || []);
    } else {
      setFormValues((prev) => ({ ...prev, [name]: value }));
    }
  };
  return (

    <Box component='section' className={classes.Bg}>
        <Box component = 'div' className={classes.formBg}>

            <form onSubmit={handleSubmit}>

            <Formtitle heading='Basic Information'/>
            
            <Grid container justifyContent='space-between' sx={{marginBottom: '40px'}} rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
                <Grid item xs={6}>
                    <Formlabel label='First Name'/>
                    <TextField  placeholder="First name"  name="firstname" fullWidth type="text" size="small" className={classes.textField}
                    value={formValues.firstname}
                    onChange={handleChange} error={!!errors.firstname}
                    helperText={errors.firstname}/>
                </Grid>
                <Grid item xs={6}>
                    <Formlabel label='Last Name'/>
                    <TextField  placeholder="Last name" name="lastname" fullWidth type="text" size="small" className={classes.textField}
                    value={formValues.lastname}
                    onChange={handleChange} error={!!errors.lastname}
                    helperText={errors.lastname}/>
                </Grid>
                <Grid item xs={6}>
                    <Formlabel label='Professional title'/>
                    <TextField  placeholder="Web Designer" name="title" fullWidth type="text" size="small" className={classes.textField}
                    value={formValues.title}
                    onChange={handleChange} error={!!errors.title}
                    helperText={errors.title}/>
                </Grid>
                <Grid item xs={6}>
                    <Formlabel label='Language'/>
                    <FormControl fullWidth sx={{ mt: 2, mb: 1 }} className={classes.dropdown}>
             
                            <Select
                                
                                id="demo-simple-select"
                                name="languages"                            
                                placeholder='Languages' 
                                className={classes.Select} 
                                value={formValues.languages}
                                onChange={handleChange} >                          
                             <MenuItem value="None">
                                Select country
                                </MenuItem>
                                
                                <MenuItem  value='English'>
                                    English
                                </MenuItem>
                                <MenuItem  value='Hindi'>
                                    Hindi
                                </MenuItem>
                                
                            </Select>
                            {errors.languages && (
                                <FormHelperText sx={{ color: "#d32f2f", fontSize: "0.75rem", mt: 0.5 }}>{errors.languages}</FormHelperText>
                            )}
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <Formlabel label='Current Salary'/>
                    <TextField  placeholder="20000" name="current" fullWidth type="text" size="small" className={classes.textField}
                    value={formValues.current}
                    onChange={handleChange} error={!!errors.current}
                    helperText={errors.current}/>
                </Grid>
                <Grid item xs={6}>
                    <Formlabel label='Expected Salary'/>
                    <TextField  placeholder="25000" name="expected" fullWidth type="text" size="small" className={classes.textField}
                    value={formValues.expected}
                    onChange={handleChange} error={!!errors.expected}
                    helperText={errors.expected}/>
                </Grid>
                <Grid item xs={12}>
                    <Formlabel label='Description'/>
                    <TextField  placeholder="Your message" name="message" fullWidth type="text" multiline rows={4} size="small" className={classes.textField}
                    value={formValues.message}
                    onChange={handleChange} error={!!errors.message}
                    helperText={errors.message}/>
                </Grid>
            </Grid>

            <Formtitle heading='Contact Information'/>
            <Grid container justifyContent='space-between' sx={{marginBottom: '40px'}} rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
                <Grid item xs={6}>
                    <Formlabel label='Mobile'/>
                    <TextField  placeholder="Mobile"  name="mobile" fullWidth type="text" size="small" className={classes.textField}
                    value={formValues.mobile}
                    onChange={handleChange} error={!!errors.mobile}
                    helperText={errors.mobile}/>
                </Grid>
                <Grid item xs={6}>
                    <Formlabel label='Email Address'/>
                    <TextField  placeholder="Email Address" name="email" fullWidth type="email" size="small" className={classes.textField}
                    value={formValues.email}
                    onChange={handleChange} error={!!errors.email}
                    helperText={errors.email}
                    
                    />
                </Grid>
                
                <Grid item xs={6}>
                    <Formlabel label='Country'/>
                    <FormControl fullWidth sx={{ mt: 2, mb: 1 }} className={classes.dropdown}>
             
                    <Select
                        
                        name="country"
                        placeholder='country' 
                        className={classes.Select} 
                        value={formValues.country}
                         onChange={handleChange} 
                       
                    > <MenuItem value="None">
                        Select country
                        </MenuItem>
                        {Object.keys(countryStateMap).map((country) => (
                        <MenuItem key={country} value={country}>
                            {country}
                        </MenuItem>
                        ))}
                    </Select>
                    {errors.country && (
                        <FormHelperText sx={{ color: "#d32f2f", fontSize: "0.75rem", mt: 0.5 }}>{errors.country}</FormHelperText>
                                
                               
                            )}
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <Formlabel label='State'/>
                    <FormControl fullWidth sx={{ mt: 2, mb: 1 }} className={classes.dropdown}>
             
                    <Select
                        
                        name="state"
                        placeholder='state' 
                        className={classes.Select} 
                        value={formValues.state}
                        onChange={handleChange} 
                       
                    > <MenuItem value="None">
                        Select State
                        </MenuItem>
                        {states.map((state) => (
                            <MenuItem key={state} value={state}>
                                {state}
                            </MenuItem>
                            ))}
                    </Select>
                    {errors.state && (
                        <FormHelperText sx={{ color: "#d32f2f", fontSize: "0.75rem", mt: 0.5 }}>{errors.state}</FormHelperText>
                                
                               
                            )}
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <Formlabel label='Pincode'/>
                    <TextField  placeholder="110085" name="pincode" fullWidth type="text" size="small" className={classes.textField}
                    value={formValues.pincode}
                    onChange={handleChange} error={!!errors.pincode}
                    helperText={errors.pincode}/>
                </Grid>
                <Grid item xs={6}>
                    <Formlabel label='Street'/>
                    <TextField  placeholder="Road No" name="street" fullWidth type="text" size="small" className={classes.textField}
                    value={formValues.street}
                    onChange={handleChange} error={!!errors.street}
                    helperText={errors.street}/>
                </Grid>
                
            </Grid>

            <Formtitle heading='Qualification'/>
            <Grid container justifyContent='space-between' sx={{marginBottom: '40px'}} rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
                <Grid item xs={6}>
                    <Formlabel label='Highest Degree'/>
                    <TextField  placeholder="Degree"  name="degree" fullWidth type="text" size="small" className={classes.textField}
                    value={formValues.degree}
                    onChange={handleChange} error={!!errors.degree}
                    helperText={errors.degree}/>
                </Grid>
                <Grid item xs={6}>
                    <Formlabel label='University/Institute'/>
                    <TextField  placeholder="University name" name="university" fullWidth type="text" size="small" className={classes.textField}
                    value={formValues.university}
                    onChange={handleChange} error={!!errors.university}
                    helperText={errors.university}/>
                </Grid>
                
                <Grid item xs={6}>
                    <Formlabel label='Grade'/>
                    <TextField  placeholder="Grade" name="grade" fullWidth type="text" size="small" className={classes.textField}
                    value={formValues.grade}
                    onChange={handleChange} error={!!errors.grade}
                    helperText={errors.grade}/>
                </Grid>
                <Grid item xs={6}>
                    <Formlabel label='Year'/>
                    <TextField  placeholder="2022" name="year" fullWidth type="text" size="small" className={classes.textField}
                    value={formValues.year}
                    onChange={handleChange} error={!!errors.year}
                    helperText={errors.year}/>
                </Grid>
            </Grid>

            <Formtitle heading='Experience'/>
            <Grid container justifyContent='space-between' sx={{marginBottom: '40px'}} rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
                <Grid item xs={6}>
                    <Formlabel label='Job Designation'/>
                    <TextField  placeholder="Javascript Developer"  name="designation" fullWidth type="text" size="small" className={classes.textField}
                    value={formValues.designation}
                    onChange={handleChange} error={!!errors.designation}
                    helperText={errors.designation}/>
                </Grid>
                <Grid item xs={6}>
                    <Formlabel label='Employment Type'/>
                    <TextField  placeholder="Full time" name="employment" fullWidth type="text" size="small" className={classes.textField}
                    value={formValues.employment}
                    onChange={handleChange} error={!!errors.employment}
                    helperText={errors.employment}/>
                </Grid>
                
                <Grid item xs={6}>
                    <Formlabel label='Company Name'/>
                    <TextField  placeholder="company" name="company" fullWidth type="text" size="small" className={classes.textField}
                    value={formValues.company}
                    onChange={handleChange} error={!!errors.company}
                    helperText={errors.company}/>
                </Grid>
                <Grid item xs={6}>
                    <Formlabel label='Location'/>
                    <TextField  placeholder="Location" name="location" fullWidth type="text" size="small" className={classes.textField}
                    value={formValues.location}
                    onChange={handleChange} error={!!errors.location}
                    helperText={errors.location}/>
                </Grid>
                
            </Grid>
            <Formtitle heading='Add Skills'/>
            <Grid container justifyContent='space-between' sx={{marginBottom: '40px'}} rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
                <Grid item xs={6}>
                    <Formlabel label='Skill 1'/>
                    <TextField  placeholder="Skill 1"  name="skill1" fullWidth type="text" size="small" className={classes.textField}
                    value={formValues.skill1}
                    onChange={handleChange} error={!!errors.skill1}
                    helperText={errors.skill1}/>
                </Grid>
                <Grid item xs={6}>
                    <Formlabel label='Skill 2'/>
                    <TextField  placeholder="skill2" name="skill2" fullWidth type="text" size="small" className={classes.textField}
                    value={formValues.skill2}
                    onChange={handleChange} error={!!errors.skill2}
                    helperText={errors.skill2}/>
                </Grid>
                
                
            </Grid>
            <Button variant='contained' type='submit'  size='small' sx={{borderRadius: '22px', padding: '8px 15px'}}><Typography className={classes.save}>Save Profile</Typography></Button>
            </form>
        </Box>
    </Box>
  )
}

export default Profile