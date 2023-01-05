import Box from "@mui/material/Box";
import ShowingOffer from "../../components/EverywhereUse/ShowingOffer";
import ServiceNavbarData from "../../components/ServiceNavbar/Service.Navbar";
export default function ServicesPage() {
  return (
    <Box>
      <ServiceNavbarData />
      <ShowingOffer passoffer={"All orders over US$79 will enjoy free standard shipping to the United States."}/>
      <h1 style={{ color: "white" }}>Services</h1>
    </Box>
  );
}
