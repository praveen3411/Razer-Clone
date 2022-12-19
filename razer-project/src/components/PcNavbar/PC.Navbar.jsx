import { Box } from "@mui/system";
import ResponsiveAppBar from "../HomeNavbar/Navbar.data";
import Pcnavbardata from "./PC.NavbarData";


export default function PCNAVBAR() {
  return (
    <Box>
      <ResponsiveAppBar />
      <Pcnavbardata/>
    </Box>
  );
}
