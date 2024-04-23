import { styled } from "@mui/material/styles";
import { Chip } from "@mui/material";

const TimelineChip = styled(Chip)(({ theme }) => {
  return {
    backgroundColor: theme.palette.mode === "dark" ? "#767676" : "#efe1bd",
    margin: 3,
  };
});

export default TimelineChip;
