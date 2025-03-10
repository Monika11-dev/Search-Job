import { Typography } from "@mui/material";

interface Props {
  heading: string;
}
const InfoHeading = (props: Props) => {
  
  return (
    <Typography
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
