import { Typography } from "@mui/material";
import { IFormHeading } from "../../type/type";

const InfoHeading = (props: IFormHeading) => {
  
  return (
    <Typography component='h4'
      sx={{
        marginBottom: "15px",
        color: "#2E4DB2",
        textTransform: "uppercase",
      }}
    >
      {props.heading}
    </Typography>
  );
};

export default InfoHeading;
