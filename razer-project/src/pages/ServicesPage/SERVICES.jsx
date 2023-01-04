import Box from "@mui/material/Box";
import ShowingOffer from "../../components/EverywhereUse/ShowingOffer";
import ServiceNavbarData from "../../components/ServiceNavbar/Service.Navbar";
export default function ServicesPage() {
  return (
    <Box>
      <ServiceNavbarData />
      <ShowingOffer passoffer={"Here you can see all the props"}/>
      <h1 style={{ color: "white" }}>Services</h1>
    </Box>
  );
}
