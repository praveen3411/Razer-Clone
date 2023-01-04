import Box from "@mui/material/Box";
import ShowingOffer from "../../components/EverywhereUse/ShowingOffer";
import MobileNavbarData from "../../components/MobileNavbar/Mobile.Navbar";
export default function MobilePage() {
  return (
    <Box>
      <MobileNavbarData />
      <ShowingOffer passoffer={"Here you can see the offers"}/>
      <h2 style={{ color: "white" }}>This is mobile Page we are going to build here it self</h2>
    </Box>
  );
}
