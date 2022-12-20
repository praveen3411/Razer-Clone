import { Box } from "@mui/system";
import ResponsiveAppBar from "../HomeNavbar/Navbar.data";
import ServicesNavbarData from "./Services.data";

export default function ServicesNavbar() {
  return (
    <Box>
      <ResponsiveAppBar />
      <ServicesNavbarData />
    </Box>
  );
}
