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
              <Typography className={classes.info}>
                {props.data.firstname} &nbsp; {props.data.lastname}
              </Typography>
            </Box>
            <Box className={classes.InfoBox}>
              <InfoSubheading heading="Professional title" />
              <Typography className={classes.info}>
                {props.data.title}
              </Typography>
            </Box>
            <Box className={classes.InfoBox}>
              <InfoSubheading heading="Language" />
              <Typography className={classes.info}>
                {props.data.languages}
              </Typography>
            </Box>
            <Box className={classes.InfoBox}>
              <InfoSubheading heading="Current Salary" />
              <Typography className={classes.info}>
                {props.data.current}
              </Typography>
            </Box>
            <Box className={classes.InfoLongBox}>
              <InfoSubheading heading="Description" />
              <Typography className={classes.info}>
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
              <Typography className={classes.info}>
                {props.data.mobile}
              </Typography>
              {/* <Divider className={classes.infoDivider}/> */}
            </Box>
            <Box className={classes.InfoBox}>
              <InfoSubheading heading="Email Id" />
              <Typography className={classes.info}>
                {props.data.email}
              </Typography>
            </Box>
            <Box className={classes.InfoLongBox}>
              <InfoSubheading heading="Address" />
              <Typography className={classes.info}>
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
              <Typography className={classes.info}>
                {props.data.degree}
              </Typography>
              {/* <Divider className={classes.infoDivider}/> */}
            </Box>
            <Box className={classes.InfoBox}>
              <InfoSubheading heading="University/Institue" />
              <Typography className={classes.info}>
                {props.data.university}
              </Typography>
            </Box>
            <Box className={classes.InfoBox}>
              <InfoSubheading heading="Grade" />
              <Typography className={classes.info}>
                {props.data.grade}
              </Typography>
            </Box>
            <Box className={classes.InfoBox}>
              <InfoSubheading heading="Passing Year" />
              <Typography className={classes.info}>
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
              <Typography className={classes.info}>
                {props.data.designation}
              </Typography>
            </Box>
            <Box className={classes.InfoBox}>
              <InfoSubheading heading="Company Name" />
              <Typography className={classes.info}>
                {props.data.company}
              </Typography>
            </Box>
            <Box className={classes.InfoBox}>
              <InfoSubheading heading="Employment Type" />
              <Typography className={classes.info}>
                {props.data.employment}
              </Typography>
            </Box>
            <Box className={classes.InfoBox}>
              <InfoSubheading heading="Location" />
              <Typography className={classes.info}>
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
              <Typography className={classes.info}>
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
