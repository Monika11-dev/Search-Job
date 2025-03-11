import useStyle from "./LandingPage.css";
import img from "../../assets/Images/Logo_1.png";
import { Typography, Container, Button, Box } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userActions } from "../../Store/Slice/userAuthSlice";
import { filterActions } from "../../Store/Slice/FiltersSlice";
import Data from "../../Database/Data";
import { useAppSelector } from "../../Store/Store";
import { IJob, IUserDetail, IInputData } from "../../type/type";

const LandingPage = () => {
  const classes = useStyle();
  const url = "https://jsonfakery.com/jobs";
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Data from redux
  const currentUser: string = useAppSelector(
    (state) => state.userAuth.currentUser
  );

  const userObject = {
    username: "",
    email: "",
    password: "",
  };

  const [isSignup, setSignup] = useState(false);
  const [validateErrors, setValidateErrors] = useState(userObject);
  const [formValues, setFormValues] = useState(userObject);
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    Data(url)
      .then((data) => {
        Filter(data);
      })
      .catch((err) => console.log(err))
      .finally(() => console.log("submitted"));
    if (currentUser) {
      navigate("/");
    } else {
      navigate("/Login");
    }
  }, [url]);

  // fetch categories and locations from api
  const Filter = (data: IJob[]) => {
    const allCat = data.map((item: IJob) => {
      return item.employment_type;
    });
    const allLoc = data.map((item: IJob) => {
      return item.location;
    });
    const myCat = [...new Set(allCat)];
    const myLoc = [...new Set(allLoc)];
    const catData = myCat.slice(0, 6);
    const locData = myLoc.slice(0, 6);

    dispatch(filterActions.setFilter({ catData, locData }));
  };

  // handles changes in form data
  const handleChange = (e: IInputData) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate(formValues);
    setValidateErrors(errors);
    setIsSubmit(!isSubmit);
    if (
      errors.username === "" &&
      errors.email === "" &&
      errors.password === ""
    ) {

      if (isSignup) {
        dispatch(userActions.registerUser({ ...formValues }));
      } else {
        dispatch(userActions.loginUser({ ...formValues }));
      }
      const currentuser = JSON.parse(
        localStorage.getItem("currentSearchJobUser") as string
      );

      if (currentuser) {
        navigate("/");
        return;
      }
      navigate("/Login");
    } else if (
      errors.username !== "" ||
      errors.email !== "" ||
      errors.password !== ""
    ) {
      setIsSubmit(false);
    }
  };

  // form validation function
  const validate = (values: IUserDetail) => {
    const errors: IUserDetail = { username: "", email: "", password: "" };
    const regexUsername = /^[A-Za-z\s]+$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/;

    if (isSignup) {
      if (values.username === "") {
        errors.username = "Username is required!";
      } else if (!regexUsername.test(values.username)) {
        errors.username = "Username can only contain letters and spaces.";
      }
    };

    if (values.email === "") {
      errors.email = "Email is required!";
    } else if (!regexEmail.test(values.email)) {
      errors.email = "Invalid email format.";
    }
    if (values.password === "") {
      errors.password = "Password is required!";
    } else if (!regexPassword.test(values.password)) {
      errors.password =
        "Password must be at least 8 characters and include an uppercase letter, a lowercase letter, a number, and a special character.";
    }
    return errors;
  };

  return (
    <>
      <Box component="section" className={classes.background}>
        <Container maxWidth="xl">
          <Box sx={{ margin: "0px 60px" }} className={classes.hero}>
            <Box className={classes.nav}>
              <Box component="a" className={classes.logo}>
                <img src={img} className={classes.logoImg} />
                <Typography className={classes.search} component="span">
                  SEARCH
                </Typography>
                <Typography className={classes.job} component="span">
                  JOB
                </Typography>
              </Box>
              <Box component="div">
                <Button onClick={() => setSignup(!isSignup)}>
                  {/* display login button by default  */}
                  {isSignup ? (
                    <Typography className={classes.login}>Log In</Typography>
                  ) : (
                    <Typography className={classes.signup}>Sign up</Typography>
                  )}
                </Button>
              </Box>
            </Box>

            <Box className={classes.heroContent}>
              <Typography component="h2" className={classes.heading}>
                Your Dream Job is
              </Typography>
              <Typography
                component="h2"
                className={classes.heading}
                sx={{ marginBottom: "10px" }}
              >
                Waiting for You
              </Typography>
              <Box className={classes.form}>
                {isSignup && (
                  <input
                    className={classes.fields}
                    type="text"
                    name="username"
                    value={formValues.username}
                    onChange={handleChange}
                    placeholder="Your Name"
                  />
                )}

                {validateErrors && (
                  <Typography component="span">
                    {validateErrors.username}
                  </Typography>
                )}

                <input
                  className={classes.fields}
                  type="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                />

                {validateErrors && (
                  <Typography component="span">
                    {validateErrors.email}
                  </Typography>
                )}

                <input
                  className={classes.fields}
                  type="password"
                  value={formValues.password}
                  onChange={handleChange}
                  name="password"
                  placeholder="Password"
                />

                {validateErrors && (
                  <Typography component="span">
                    {validateErrors.password}
                  </Typography>
                )}

                <Button
                  className={classes.signin}
                  variant="contained"
                  disableElevation
                  onClick={handleSubmit}
                >
                  <Typography className={classes.signinText}>
                    {isSignup ? "Sign Up" : "Sign In"}
                  </Typography>
                </Button>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "10px",
                  }}
                >
                  <Typography component="span" className={classes.Signup}>
                    {isSignup
                      ? "Already have an account ?"
                      : "New to SearchJob ?"}
                  </Typography>
                  <Button onClick={() => setSignup(!isSignup)}>
                    <Typography className={classes.Signup}>
                      {" "}
                      &nbsp; {isSignup ? "Log in" : "Join now"}
                    </Typography>
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default LandingPage;
