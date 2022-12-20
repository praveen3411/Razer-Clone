import * as React from "react";
import Navdata from "./Mobile.module.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
const pages = [
  "Handhelds",
  "Controllers",
  "Headphones",
  "Earbuds",
  "DAC",
  "Smart Glasses",
  "Cases",
  "Accessories",
  "Customs",
  "Cortex Games",
  "Anroid Apps",
  "Ios Apps",
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
    <AppBar position="static" className={Navdata.background_data}>
      <Container maxWidth="xl" style={{ height: "55px" }}>
        <Toolbar disableGutters maxWidth="lg">
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
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
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
            }}
          >
            {pages.map((page) => (
              <Typography
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 0, color: "white", display: "block" }}
                style={{ marginLeft: "38px", fontSize: "13px" }}
                className={Navdata.hovereffect}
              >
                {page}
              </Typography>
            ))}
          </Box>
        </Toolbar>
      </Container>
      <div className={Navdata.bottomline}></div>
    </AppBar>
  );
}
export default MobileNavbarData;
