import React from "react";
import { Card, CardMedia } from "@mui/material";

const ProjectCard = (props) => {
  const { name, imageSrc } = props;
  return (
    <Card sx={{ width: 345, m: 2 }}>
      <CardMedia
        component="img"
        height="140"
        src={imageSrc}
        alt={name}
        sx={{ objectFit: "contain", m: 1 }}
      />
    </Card>
  );
};

export default ProjectCard;
