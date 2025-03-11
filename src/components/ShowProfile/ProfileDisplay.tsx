import { Box, Divider, Typography, Button } from "@mui/material";
import InfoHeading from "../InfoCard/InfoHeading";
import useStyle from "./ProfileDisplay.css";
import InfoSubheading from "../InfoCard/InfoSubheading";
import EditIcon from "@mui/icons-material/Edit";
import { IProfileDisplay } from "../../type/type";

const ProfileDisplay = (props: IProfileDisplay) => {
  const classes = useStyle();

  /**
   * Handles edit profile display section
   */
  const editProfile = () => {
    props.display();
  };

  return (
    <>
      <Box component="div" className={classes.formBg}>
        <Box sx={{ textAlign: "right" }}>
          <Button onClick={editProfile} className={classes.edit}>
            Edit Profile
            <EditIcon fill="#4884ED" />
          </Button>
        </Box>
        <Box>
          <InfoHeading heading="About"></InfoHeading>
          <Divider className={classes.divider} />
          <Box className={classes.Info}>
            <Box className={classes.InfoBox}>
              <InfoSubheading heading="Name" />
              <Typography component='span' className={classes.info}>
                {props.data.firstname} &nbsp; {props.data.lastname}
              </Typography>
            </Box>
            <Box className={classes.InfoBox}>
              <InfoSubheading heading="Professional title" />
              <Typography component='span' className={classes.info}>
                {props.data.title}
              </Typography>
            </Box>
            <Box className={classes.InfoBox}>
              <InfoSubheading heading="Language" />
              <Typography component='span' className={classes.info}>
                {props.data.languages}
              </Typography>
            </Box>
            <Box className={classes.InfoBox}>
              <InfoSubheading heading="Current Salary" />
              <Typography component='span' className={classes.info}>
                {props.data.current}
              </Typography>
            </Box>
            <Box className={classes.InfoLongBox}>
              <InfoSubheading heading="Description" />
              <Typography component='span' className={classes.info}>
                {props.data.message}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box component="div" className={classes.formBg}>
        <Box>
          <InfoHeading heading="Contact"></InfoHeading>
          <Divider className={classes.divider} />
          <Box className={classes.Info}>
            <Box className={classes.InfoBox}>
              <InfoSubheading heading="Mobile" />
              <Typography component='span' className={classes.info}>
                {props.data.mobile}
              </Typography>
              {/* <Divider className={classes.infoDivider}/> */}
            </Box>
            <Box className={classes.InfoBox}>
              <InfoSubheading heading="Email Id" />
              <Typography component='span' className={classes.info}>
                {props.data.email}
              </Typography>
            </Box>
            <Box className={classes.InfoLongBox}>
              <InfoSubheading heading="Address" />
              <Typography component='span' className={classes.info}>
                {props.data.street}, {props.data.state}, {props.data.country} -{" "}
                {props.data.pincode}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box component="div" className={classes.formBg}>
        <Box>
          <InfoHeading heading="Qualification"></InfoHeading>
          <Divider className={classes.divider} />
          <Box className={classes.Info}>
            <Box className={classes.InfoBox}>
              <InfoSubheading heading="Highest Degree" />
              <Typography component='span' className={classes.info}>
                {props.data.degree}
              </Typography>
              {/* <Divider className={classes.infoDivider}/> */}
            </Box>
            <Box className={classes.InfoBox}>
              <InfoSubheading heading="University/Institue" />
              <Typography component='span' className={classes.info}>
                {props.data.university}
              </Typography>
            </Box>
            <Box className={classes.InfoBox}>
              <InfoSubheading heading="Grade" />
              <Typography component='span' className={classes.info}>
                {props.data.grade}
              </Typography>
            </Box>
            <Box className={classes.InfoBox}>
              <InfoSubheading heading="Passing Year" />
              <Typography component='span' className={classes.info}>
                {props.data.year}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box component="div" className={classes.formBg}>
        <Box>
          <InfoHeading heading="Experience"></InfoHeading>
          <Divider className={classes.divider} />
          <Box className={classes.Info}>
            <Box className={classes.InfoBox}>
              <InfoSubheading heading="Job Designation" />
              <Typography component='span' className={classes.info}>
                {props.data.designation}
              </Typography>
            </Box>
            <Box className={classes.InfoBox}>
              <InfoSubheading heading="Company Name" />
              <Typography component='span' className={classes.info}>
                {props.data.company}
              </Typography>
            </Box>
            <Box className={classes.InfoBox}>
              <InfoSubheading heading="Employment Type" />
              <Typography component='span' className={classes.info}>
                {props.data.employment}
              </Typography>
            </Box>
            <Box className={classes.InfoBox}>
              <InfoSubheading heading="Location" />
              <Typography component='span' className={classes.info}>
                {props.data.location}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box component="div" className={classes.formBg}>
        <Box>
          <InfoHeading heading="Skills"></InfoHeading>
          <Divider className={classes.divider} />
          <Box className={classes.Info}>
            <Box className={classes.InfoBox}>
              <Typography component='span' className={classes.info}>
                {props.data.skill1}, {props.data.skill2}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProfileDisplay;
