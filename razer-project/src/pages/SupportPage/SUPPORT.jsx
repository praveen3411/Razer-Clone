import { Box } from "@mui/material";
import ShowingOffer from "../../components/EverywhereUse/ShowingOffer";
import SupportNavbarData from "../../components/StoreNavbar/Support.Navbar";

export default function SupportPage() {
  return (
    <Box>
      <SupportNavbarData />
      <ShowingOffer passoffer={"Here you can see all the projects"}/>
      <h1 style={{ color: "white" }}>Support</h1>
    </Box>
  );
}
