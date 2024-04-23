import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";

const TimelineCard = styled(Paper)(({ theme }) => {
  return {
    backgroundColor: theme.palette.mode === "dark" ? "#d2d2d2" : "#ffffff",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "15px",
    color: "black",
  };
});

export default TimelineCard;
