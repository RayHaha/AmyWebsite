import React from "react";
import { Typography, Link, Stack } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";

const StyledLink = React.forwardRef(({ content, url, isBold }, ref) => {
  return (
    <Link href={url} underline="none" target="_blank" ref={ref}>
      <Stack direction="row" sx={{ alignItems: "center", color: "blue" }}>
        <LinkIcon sx={{ mr: "3px", color: "blue" }} />
        <Typography
          component="div"
          variant="body2"
          sx={{ fontWeight: isBold ? "bold" : "normal" }}
        >
          {content}
        </Typography>
      </Stack>
    </Link>
  );
});

export default StyledLink;
