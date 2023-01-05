import Box from "@mui/material/Box";
import ShowingOffer from "../../components/EverywhereUse/ShowingOffer";
import PcNavbarData from "../../components/PcNavbar/Pc.Navbar";
export default function PersonalPage() {
  return (
    <Box>
      <PcNavbarData />
      <ShowingOffer passoffer={"All orders over US$79 will enjoy free standard shipping to the United States."}/>
      <h1 style={{ color: "white" }}>PC Page</h1>
    </Box>
  );
}
