import React from "react";
import { Grid } from "@mui/material";
import projectsData from "../utils/Projects";
import ProjectCard from "../components/ProjectCard";
import PageTitle from "../components/PageTitle";

const Projects = () => {
  return (
    <div id="Projects">
      <PageTitle title="" />
      <Grid item container justifyContent="center" sx={{ mb: 5 }}>
        {projectsData.length > 0 &&
          projectsData.map((project, index) => (
            <ProjectCard key={index} imageSrc={project.imageSrc} />
          ))}
      </Grid>
    </div>
  );
};

export default Projects;
