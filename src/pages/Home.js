import React from "react";
import { Grid, Typography } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import sun from "../assets/sun.jpg";
import night from "../assets/night.jpg";

const Home = (props) => {
  const { mode } = props;
  return (
    <div
      id="Home"
      style={{
        backgroundImage: mode === "light" ? `url(${sun})` : `url(${night})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100vw",
        height: `calc(100vh - 55px)`,
        opacity: "0.8",
      }}
    >
      <Grid
        container
        alignItems="center"
        sx={{ width: "100%", height: "100%" }}
      >
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <Typography
              variant="h2"
              align="center"
              sx={{
                fontWeight: "bold",
                fontFamily: "monospace",
                color: "inherit",
              }}
            >
              Hsin-Yu Chen
            </Typography>
          </Grid>
          <Grid>
            <TypeAnimation
              sequence={["Research Specialist II", 1000, "Lab Manager", 1000]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "1.5em",
                display: "inline-block",
                fontFamily: "monospace",
                color: "inherit",
              }}
              repeat={Infinity}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h6"
              align="center"
              sx={{
                mt: 3,
                fontWeight: "bold",
                fontFamily: "monospace",
                color: "inherit",
              }}
            >
              Doctor of Philosophy in Earth and Environmental Sciences (2018 -
              2023)
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="body2"
              align="center"
              sx={{
                fontWeight: "italic",
                fontFamily: "monospace",
                color: "inherit",
              }}
            >
              Syracuse University, Syracuse, NY
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h6"
              align="center"
              sx={{
                mt: 1,
                fontWeight: "bold",
                fontFamily: "monospace",
                color: "inherit",
              }}
            >
              Master of Science in Earth Sciences (2015 - 2017)
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="body2"
              align="center"
              sx={{
                fontWeight: "italic",
                fontFamily: "monospace",
                color: "inherit",
              }}
            >
              National Cheng-Kung University, Tainan, Taiwan
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h6"
              align="center"
              sx={{
                mt: 1,
                fontWeight: "bold",
                fontFamily: "monospace",
                color: "inherit",
              }}
            >
              Bachelor of Science in Earth Sciences (2011 - 2015)
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="body2"
              align="center"
              sx={{
                fontWeight: "italic",
                fontFamily: "monospace",
                color: "inherit",
              }}
            >
              National Cheng-Kung University, Tainan, Taiwan
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
