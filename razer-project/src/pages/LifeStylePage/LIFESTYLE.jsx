import Box from "@mui/material/Box";
import ShowingOffer from "../../components/EverywhereUse/ShowingOffer";
import LifestyleNavbarData from "../../components/LifeStyleNavbar/LifeStyle.Navbar";
export default function LifeStylePage() {
  return (
    <Box>
      <LifestyleNavbarData />
      <ShowingOffer passoffer={"All orders over US$79 will enjoy free standard shipping to the United States."} />
      <h1 style={{ color: "white" }}>LifeStyle</h1>
    </Box>
  );
}
