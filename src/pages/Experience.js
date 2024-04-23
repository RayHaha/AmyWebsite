import React from "react";
import { Grid } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import { timelineItemClasses } from "@mui/lab/TimelineItem";
import WorkItem from "../components/WorkItem";
import WorkExperiences from "../utils/WorkExperiences";
import EducationItem from "../components/EducationItem";
import EducationExperiences from "../utils/EducationExperiences";
import PageTitle from "../components/PageTitle";

const Experience = () => {
  return (
    <div id="Experience">
      <PageTitle title="Experience" />
      <Grid item xs={12}>
        <Timeline
          position="alternate"
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          {WorkExperiences.length > 0 &&
            WorkExperiences.map((workExperience, index) => (
              <WorkItem
                key={index}
                time={workExperience.time}
                title={workExperience.title}
                organization={workExperience.organization}
                organizationLink={workExperience.organizationLink}
                contents={workExperience.contents}
                skills={workExperience.skills}
              />
            ))}
          {EducationExperiences.length > 0 &&
            EducationExperiences.map((educationExperience, index) => (
              <EducationItem
                key={index}
                time={educationExperience.time}
                title={educationExperience.title}
                organization={educationExperience.organization}
                organizationLink={educationExperience.organizationLink}
                contents={educationExperience.contents}
                interns={educationExperience.interns}
                skills={educationExperience.skills}
                leadershipAndVolunteer={
                  educationExperience.leadershipAndVolunteer
                }
              />
            ))}
        </Timeline>
        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
            display: { xs: "flex", md: "none" },
          }}
        >
          {WorkExperiences.length > 0 &&
            WorkExperiences.map((workExperience, index) => (
              <WorkItem
                key={index}
                time={workExperience.time}
                title={workExperience.title}
                organization={workExperience.organization}
                organizationLink={workExperience.organizationLink}
                contents={workExperience.contents}
                skills={workExperience.skills}
              />
            ))}
          {EducationExperiences.length > 0 &&
            EducationExperiences.map((educationExperience, index) => (
              <EducationItem
                key={index}
                time={educationExperience.time}
                title={educationExperience.title}
                organization={educationExperience.organization}
                organizationLink={educationExperience.organizationLink}
                contents={educationExperience.contents}
                interns={educationExperience.interns}
                skills={educationExperience.skills}
                leadershipAndVolunteer={
                  educationExperience.leadershipAndVolunteer
                }
              />
            ))}
        </Timeline>
      </Grid>
    </div>
  );
};

export default Experience;
