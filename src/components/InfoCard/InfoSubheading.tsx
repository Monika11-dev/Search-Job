import { Typography } from "@mui/material";
import { IFormHeading } from "../../type/type";

const InfoSubheading = (props: IFormHeading) => {
  
  return (
    <Typography component='h6'
      sx={{ fontSize: "0.9rem", marginBottom: "5px", fontFamily: "Mulish" }}
    >
      {props.heading}
    </Typography>
  );
};

export default InfoSubheading;
