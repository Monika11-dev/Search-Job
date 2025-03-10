import { Card, CardContent, Typography, CardActions, Grid } from "@mui/material";
import img1 from "../../assets/Images/Tata-Logo-1988.png";
import useStyle from "./JobCarousel.css";
import ApplyButton from "../ApplyButton/ApplyButton";

const JobCarousel = () => {
  const classes = useStyle();
  
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Card className={classes.content}>
            <CardContent>
              <img width="60" height="40" src={img1} />
              <Typography variant="h3" className={classes.cardhead}>
                Technical Associate
              </Typography>
              <Typography variant="body2" className={classes.jobLocation}>
                Noida
              </Typography>
            </CardContent>
            <CardActions>
              <ApplyButton />
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </>
  );
};

export default JobCarousel;
