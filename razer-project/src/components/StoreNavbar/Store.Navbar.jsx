import { Box } from "@mui/system";
import ResponsiveAppBar from "../HomeNavbar/Navbar.data";
import StoreNavbardata from "./Store.Navbardata";

export default function StoreNavbar() {
  return (
    <Box>
      <ResponsiveAppBar />
      <StoreNavbardata />
    </Box>
  );
}
