import React from "react";
import { Grid } from "@mui/material";
import PublicationsData from "../utils/Publications";
import PageTitle from "../components/PageTitle";
import Body2Typography from "../components/Body2Typography";

const Publications = () => {
  return (
    <div id="Publications">
      <PageTitle title="Publications" />
      <Grid item container justifyContent="center" sx={{ mb: 5 }}>
        {PublicationsData.length > 0 &&
          PublicationsData.map((pub, index) => (
            <React.Fragment key={index}>
              <Body2Typography sx={{ m: 1 }}>
                <b>{pub.name}</b>
              </Body2Typography>
              <Grid container item xs={12} key={index} sx={{ m: 1 }}>
                {pub.data.length > 0 &&
                  pub.data.map((detail, index) => (
                    <Body2Typography
                      key={index}
                      sx={{
                        mx: 5,
                        mb: index === pub.data.length - 1 ? 2 : 1,
                      }}
                    >
                      {detail}
                    </Body2Typography>
                  ))}
              </Grid>
            </React.Fragment>
          ))}
      </Grid>
    </div>
  );
};

export default Publications;
