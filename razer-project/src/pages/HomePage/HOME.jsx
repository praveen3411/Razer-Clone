import Box from "@mui/material/Box";
import ShowingOffer from "../../components/EverywhereUse/ShowingOffer";
export default function HomePage() {
  return (
    <Box>
      <ShowingOffer
        passoffer={
          "All orders over US$79 will enjoy free standard shipping to the United States."
        }
      />
      <h1 style={{ color: "white" }}>HomePage</h1>
    </Box>
  );
}
