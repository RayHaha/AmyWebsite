import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  FormControlLabel,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ThemeSwitch from "./ThemeSwitch";

const pages = ["Home", "Experience", "Skills", "Publications", "Contact"];

const NavBar = (props) => {
  const { mode, themeOnClick } = props;

  const wordColor = mode === "dark" ? "white" : "black";

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      color="secondary"
      sx={{
        height: "65px",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              color: wordColor,
              textDecoration: "none",
            }}
          >
            HSIN-YU
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon sx={{ color: wordColor }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              color="secondary"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <AnchorLink
                  key={page}
                  href={"#" + page}
                  style={{ textDecoration: "none" }}
                  offset="65"
                >
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" sx={{ color: wordColor }}>
                      {page}
                    </Typography>
                  </MenuItem>
                </AnchorLink>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: -1,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              color: wordColor,
              textDecoration: "none",
            }}
          >
            HSIN-YU
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <AnchorLink
                key={page}
                href={"#" + page}
                style={{ textDecoration: "none" }}
                offset="65"
              >
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: wordColor,
                    display: "block",
                  }}
                >
                  {page}
                </Button>
              </AnchorLink>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, mr: -1 }}>
            <FormControlLabel
              control={
                <ThemeSwitch
                  checked={mode === "dark"}
                  onChange={themeOnClick}
                />
              }
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
