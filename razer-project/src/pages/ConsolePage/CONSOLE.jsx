import Box from "@mui/material/Box";
import ConsoleNavbarData from "../../components/ConsoleNavbar/Console.Navbar";
import ShowingOffer from "../../components/EverywhereUse/ShowingOffer";
export default function ConsolePage() {
  return (
    <Box>
      <ConsoleNavbarData />
      <ShowingOffer
        passoffer={"All orders over US$79 will enjoy free standard shipping to the United States."}
      />
      <h1 style={{ color: "white" }}>Console Page</h1>
    </Box>
  );
}
