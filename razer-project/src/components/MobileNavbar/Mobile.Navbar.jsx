import { Box } from "@mui/system";
import ResponsiveAppBar from "../HomeNavbar/Navbar.data";
import MobileNavbarData from "./Mobile.data";

export default function MobileNavbar() {
  return (
    <Box>
      <ResponsiveAppBar />
      <MobileNavbarData />
    </Box>
  );
}
