import { Grid, Typography } from "@mui/material";
import img1 from "../../assets/Images/Tata-Logo-1988.png";
import useStyle from "./AppliedJobs.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router-dom";
import {IApply } from "../../type/type";

const ApplyJobs = (props: IApply) => {
  const classes = useStyle();

  return (
    <>
      {props.jobs.slice(
          (props.page - 1) * props.rowsPerPage,
          (props.page - 1) * props.rowsPerPage + props.rowsPerPage
        )
        .map((item) => (
          <Grid
            container
            columnSpacing={{ lg: 1 }}
            sx={{ marginBottom: "10px" }}
            className={classes.border}
            key={item.id}
          >
            <Grid item xs={1}>
              <img src={img1} className={classes.companyLogo} />
            </Grid>
            <Grid item xs={9}>
              <Grid container direction="column" rowSpacing="3px">
                <Grid item>
                  <Typography className={classes.jobProfile} component='p'>
                    {item.title}
                  </Typography>
                </Grid>
                <Grid item>
                  <Grid container>
                    <Grid item xs={4}>
                      <Typography  variant="h5" className={classes.company}>
                        {item.company}
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant='h5' className={classes.jobDetails} component='span'>
                        <LocationOnIcon sx={{ height: 15, width: 15, color: "#7A7A7A" }} />
                        {item.location}
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography variant='h5' className={classes.jobDetails} component='span'>
                        {item.employment_type}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2} sx={{ alignSelf: "center" }}>
              <Link
                className={classes.ApplyBtn}
                to={`/JobDescription/${item.id}`}
                state={{
                  description: `${item.description}`,
                  qualifications: `${item.qualifications}`,
                  address: `${item.location}`,
                  title: `${item.title}`,
                  salary: `${item.salary_from}`,
                  opening: `${item.number_of_opening}`,
                  company: `${item.company}`,
                  employment: `${item.employment_type}`,
                  posted: `${item.employment_type}`,
                  id: `${item.id}`,
                }}
              >
                Apply now
              </Link>
            </Grid>
          </Grid>
        ))}
    </>
  );
};

export default ApplyJobs;
