import { Box } from "@mui/system";
import ResponsiveAppBar from "../HomeNavbar/Navbar.data";
import CartNavbarData from "./Cart.Navbardata";

export default function CartNavbar() {
  return (
    <Box>
      <ResponsiveAppBar/>
      <CartNavbarData/>
    </Box>
  );
}
