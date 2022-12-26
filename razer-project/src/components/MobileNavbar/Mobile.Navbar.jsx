import * as React from "react";
// import Navdata from "../.././styles/Navbar.module.css";
import Logos from "../.././assets/Logo.svg";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";

const pages = [
  {
    to: "/mobile/handhelds",
    title: "Handhelds",
  },
  {
    to: "/mobile/controllers",
    title: "Controllers",
  },
  {
    to: "/mobile/headphones",
    title: "Headphones",
  },
  {
    to: "/mobile/earbuds",
    title: "Earbuds",
  },
  {
    to: "/mobile/dac",
    title: "DAC",
  },
  {
    to: "/mobile/smartglasses",
    title: "Smart Glasses",
  },
  {
    to: "/mobile/cases",
    title: "Cases",
  },
  {
    to: "/mobile/maccessories",
    title: "Accessories",
  },
  {
    to: "/mobile/customs",
    title: "Customs",
  },
  {
    to: "/mobile/cortexgames",
    title: "Cortex Games",
  },
];

function MobileNavbarData() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar position="static" style={{ backgroundColor: "black" }}>
      <Container maxWidth="xl" style={{ height: "62px" }}>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
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
                <MenuItem key={page.to} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              marginLeft: "-30px",
            }}
          >
            <img width={"35px"} height={"35px"} src={Logos} alt="Logo" />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              marginLeft: "100px",
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <NavLink
                key={page.title}
                style={{ textDecoration: "none" }}
                to={page.to}
              >
                <Typography
                  key={page.title}
                  onClick={handleCloseNavMenu}
                  style={{ margin: "20px", fontSize: "13px" }}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.title}
                </Typography>
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </Container>
      <Box
        style={{
          width: "100%",
          height: "0.1px",
          backgroundColor: "lightgreen",
        }}
      ></Box>
    </AppBar>
  );
}
export default MobileNavbarData;
