import Box from "@mui/material/Box";
import ConsoleNavbarData from "../../components/ConsoleNavbar/Console.Navbar";
import ShowingOffer from "../../components/EverywhereUse/ShowingOffer";
export default function ConsolePage() {
  return (
    <Box>
      <ConsoleNavbarData />
      <ShowingOffer
        passoffer={"Hello This is praveen kumar"}
      />
      <h1 style={{ color: "white" }}>ConsolePaes</h1>
    </Box>
  );
}
