import { Box } from "@mui/system";
import ResponsiveAppBar from "../HomeNavbar/Navbar.data";
import ConsoleNavbarData from "./Console.Data";

export default function ConsoleNavbar() {
  return (
    <Box>
      <ResponsiveAppBar />
      <ConsoleNavbarData />
    </Box>
  );
}
