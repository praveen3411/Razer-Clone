import Box from "@mui/material/Box";
import ShowingOffer from "../../components/EverywhereUse/ShowingOffer";
import LifestyleNavbarData from "../../components/LifeStyleNavbar/LifeStyle.Navbar";
export default function LifeStylePage() {
  return (
    <Box>
      <LifestyleNavbarData />
      <ShowingOffer passoffer={"Here we can see the Offers"} />
      <h1 style={{ color: "white" }}>LifeStyle</h1>
    </Box>
  );
}
