import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import {
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from "@mui/lab";
import SchoolIcon from "@mui/icons-material/School";
import TimelineChip from "./TimelineChip";
import TimelineCard from "./TimelineCard";
import StyledLink from "./StyledLink";
import Body2Typography from "./Body2Typography";

const EducationItem = (props) => {
  const {
    time,
    title,
    organization,
    organizationLink,
    contents,
    interns,
    skills,
    leadershipAndVolunteer,
  } = props;
  return (
    <TimelineItem>
      <TimelineOppositeContent
        color="inherit"
        sx={{ mt: 1, display: { xs: "none", md: "block" } }}
        variant="body2"
      >
        {time}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot>
          <SchoolIcon />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: "12px", px: 2 }}>
        <TimelineCard
          sx={{
            textAlign: "left",
          }}
        >
          <Typography component="div" variant="h6" sx={{ fontWeight: "bold" }}>
            {title}
          </Typography>
          <StyledLink
            content={organization}
            url={organizationLink}
            isBold={true}
          />
          <Box sx={{ mb: 1, display: { xs: "block", md: "none" } }}>
            <Body2Typography>{time}</Body2Typography>
          </Box>
          {contents?.length > 0 &&
            contents.map((content, index) => (
              <React.Fragment key={index}>
                {content.name && (
                  <Body2Typography>
                    <b>{content.name}</b>
                  </Body2Typography>
                )}
                {content.details.length > 0 &&
                  content.details.map((detail, index) => (
                    <Body2Typography
                      key={index}
                      sx={{
                        ml: 1,
                        mb: index === content.details.length - 1 ? 1 : 0,
                      }}
                    >
                      {detail}
                    </Body2Typography>
                  ))}
              </React.Fragment>
            ))}
          {interns?.length > 0 &&
            interns.map((intern, index) => (
              <React.Fragment key={index}>
                <Body2Typography sx={{ mt: 1 }}>
                  <Grid container justifyContent="space-between">
                    <Grid item>
                      <b>{intern.title}</b>
                    </Grid>
                    <Grid item>{intern.time}</Grid>
                  </Grid>
                </Body2Typography>
                <StyledLink
                  content={intern.organization}
                  url={intern.organizationLink}
                  isBold={false}
                />
                {intern.contents.length > 0 &&
                  intern.contents.map((content, index) => (
                    <Body2Typography key={index}>{content}</Body2Typography>
                  ))}
              </React.Fragment>
            ))}
          {leadershipAndVolunteer?.length > 0 &&
            leadershipAndVolunteer.map((element, index) => (
              <React.Fragment key={index}>
                <Body2Typography sx={{ mt: 1 }}>
                  <Grid container justifyContent="space-between">
                    <Grid item>
                      <b>{element.title}</b>
                    </Grid>
                    <Grid item>{element.time}</Grid>
                  </Grid>
                </Body2Typography>
                <Body2Typography>{element.organization}</Body2Typography>
                {element.details.length > 0 &&
                  element.details.map((detail, index) => (
                    <Body2Typography key={index}>{detail}</Body2Typography>
                  ))}
              </React.Fragment>
            ))}
          <Box sx={{ p: 1 }}>
            {skills.length > 0 &&
              skills.map((skill, index) => (
                <TimelineChip label={skill} key={index} />
              ))}
          </Box>
        </TimelineCard>
      </TimelineContent>
    </TimelineItem>
  );
};

export default EducationItem;
