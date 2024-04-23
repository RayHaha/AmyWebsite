import React from "react";
import { Grid } from "@mui/material";
import skillsData from "../utils/Skills";
import PageTitle from "../components/PageTitle";
import TimelineChip from "../components/TimelineChip";

const Skills = () => {
  return (
    <div id="Skills">
      <PageTitle title="Skills" />
      <Grid item container justifyContent="center" sx={{ mb: 5 }}>
        {skillsData.length > 0 &&
          skillsData.map((skill, index) => (
            <Grid
              container
              item
              xs={12}
              key={index}
              justifyContent="center"
              sx={{ m: 1 }}
            >
              {skill.skills.map((element, index) => (
                <TimelineChip label={element} key={index} />
              ))}
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default Skills;
