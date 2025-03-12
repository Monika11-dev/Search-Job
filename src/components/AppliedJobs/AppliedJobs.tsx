import { Grid, Typography } from "@mui/material";
import img1 from "../../assets/Images/Tata-Logo-1988.png";
import useStyle from "./AppliedJobs.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { IJob, IApplied } from "../../type/type";

const AppliedJobs = (props: IApplied) => {
  const classes = useStyle();

  /**
   * Filters the list of jobs to include only those that match the user's "myJobs" list.
   * @param {IJob[]} props.jobs - The list of all job objects.
   * @returns {IJob[]} - filtered jobs
   */
  const filteredJobs = props.jobs.filter((item: IJob) =>
    props.myJobs.includes(item.id)
  );

  return (
    <>
      {filteredJobs.slice(
          (props.page - 1) * props.rowsPerPage,
          (props.page - 1) * props.rowsPerPage + props.rowsPerPage
        )
        .map((item: IJob) => (
          <Grid container columnSpacing={{ lg: 1 }} key={item.id}>
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
                      <Typography variant="h5" className={classes.company}>
                        {item.company}
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography variant="h5" className={classes.jobDetails} component='span'>
                        <LocationOnIcon sx={{ height: 15, width: 15, color: "#7A7A7A" }} />
                        {item.location}
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography variant="h5" className={classes.jobDetails} component='span'>
                        {item.employment_type}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="body2" className={classes.fulltime} component='span'>full time</Typography>
            </Grid>
          </Grid>
        ))}
    </>
  );
};

export default AppliedJobs;
