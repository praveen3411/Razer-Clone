import { Box } from "@mui/material";
import ShowingOffer from "../../components/EverywhereUse/ShowingOffer";
import SupportNavbarData from "../../components/StoreNavbar/Support.Navbar";

export default function SupportPage() {
  return (
    <Box>
      <SupportNavbarData />
      <ShowingOffer passoffer={"All orders over US$79 will enjoy free standard shipping to the United States."} />
      <h1 style={{ color: "white" }}>Support</h1>
    </Box>
  );
}
