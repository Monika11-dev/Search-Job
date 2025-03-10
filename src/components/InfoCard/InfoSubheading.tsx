import { Typography } from "@mui/material";
interface Props {
  heading: string;
}

const InfoSubheading = (props: Props) => {
  
  return (
    <Typography
      sx={{ fontSize: "0.9rem", marginBottom: "5px", fontFamily: "Mulish" }}
    >
      {props.heading}
    </Typography>
  );
};

export default InfoSubheading;
