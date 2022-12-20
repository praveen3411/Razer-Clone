import { Box } from "@mui/system";
import ResponsiveAppBar from "../HomeNavbar/Navbar.data";
import CommunityNavbarData from "./Community.Navbardata";

export default function CommunityNavbar() {
  return (
    <Box>
      <ResponsiveAppBar />
      <CommunityNavbarData />
    </Box>
  );
}
