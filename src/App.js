import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import NavBar from "./components/NavBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Publications from "./pages/Publications";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const App = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <>
      <CssBaseline />
      <Toolbar id="back-to-top-anchor" />
      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          color: "text.primary",
          borderRadius: 1,
        }}
      >
        <NavBar
          mode={theme.palette.mode}
          themeOnClick={colorMode.toggleColorMode}
        />
        <Home mode={theme.palette.mode} />
      </Box>
      <Box
        bgcolor={theme.palette.mode === "dark" ? "#4a4a4a" : "#efe1bd"}
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          color: "text.primary",
          borderRadius: 1,
        }}
      >
        <Experience />
      </Box>
      <Box
        bgcolor={"#202020"}
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          borderRadius: 1,
        }}
      >
        <Skills />
      </Box>
      <Box
        bgcolor={theme.palette.mode === "dark" ? "#4a4a4a" : "#efe1bd"}
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          color: "text.primary",
          borderRadius: 1,
        }}
      >
        <Publications />
      </Box>
      <Box
        bgcolor={"#202020"}
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          borderRadius: 1,
        }}
      >
        <Grid container>
          <Grid item xs={12}>
            <Projects />
          </Grid>
          <Grid item xs={12}>
            <Contact />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState("dark");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          secondary: {
            main: "#e9d5a1",
            light: "#e9d5a1",
            dark: "#4a4a4a",
          },
        },
        components: {
          MuiMenu: {
            styleOverrides: {
              list: {
                '&[role="menu"]': {
                  backgroundColor: mode === "dark" ? "#4a4a4a" : "#e9d5a1",
                },
              },
            },
          },
          MuiSvgIcon: {
            styleOverrides: {
              root: {
                color: "white",
              },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
