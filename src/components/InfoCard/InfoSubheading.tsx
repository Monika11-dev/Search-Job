import { Typography } from "@mui/material";
import { IFormHeading } from "../../type/type";

const InfoSubheading = (props: IFormHeading) => {
  
  return (
    <Typography
      sx={{ fontSize: "0.9rem", marginBottom: "5px", fontFamily: "Mulish" }}
    >
      {props.heading}
    </Typography>
  );
};

export default InfoSubheading;
