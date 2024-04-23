import React from "react";
import { Typography } from "@mui/material";

const Body2Typography = React.forwardRef(
  ({ component, variant, children, ...rest }, ref) => {
    return (
      <Typography component="div" variant="body2" ref={ref} {...rest}>
        {children}
      </Typography>
    );
  }
);

export default Body2Typography;
