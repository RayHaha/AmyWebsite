import React from "react";
import { Grid, Typography } from "@mui/material";

const PageTitle = (props) => {
  const { title } = props;
  return (
    <Grid container justifyContent="center">
      <Typography
        variant="h4"
        sx={{
          my: 5,
          fontWeight: "bold",
          fontFamily: "monospace",
        }}
      >
        {title}
      </Typography>
    </Grid>
  );
};

export default PageTitle;
