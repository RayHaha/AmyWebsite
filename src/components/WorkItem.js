import React from "react";
import { Typography, Box } from "@mui/material";
import {
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from "@mui/lab";
import WorkIcon from "@mui/icons-material/Work";
import TimelineChip from "./TimelineChip";
import TimelineCard from "./TimelineCard";
import StyledLink from "./StyledLink";
import Body2Typography from "./Body2Typography";

const WorkItem = (props) => {
  const { time, title, organization, organizationLink, contents, skills } =
    props;
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
          <WorkIcon />
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
            contents.map((content, index) =>
              content.hasDetails ? (
                <React.Fragment key={index}>
                  <Body2Typography>{content.description}</Body2Typography>
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
              ) : (
                <Body2Typography sx={{ mb: 1 }} key={index}>
                  {content.description}
                </Body2Typography>
              )
            )}
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

export default WorkItem;
