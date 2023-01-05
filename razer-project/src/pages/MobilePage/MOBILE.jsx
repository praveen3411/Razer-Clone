import Box from "@mui/material/Box";
import ShowingOffer from "../../components/EverywhereUse/ShowingOffer";
import MobileNavbarData from "../../components/MobileNavbar/Mobile.Navbar";
export default function MobilePage() {
  return (
    <Box>
      <MobileNavbarData />
      <ShowingOffer passoffer={"All orders over US$79 will enjoy free standard shipping to the United States."}/>
      <h2 style={{ color: "white" }}>This is mobile Page we are going to build here it self</h2>
    </Box>
  );
}
