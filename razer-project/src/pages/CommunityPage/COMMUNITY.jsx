import Box from "@mui/material/Box";
import CommunityNavbarData from "../../components/CommunityNavbar/Community.Navbar";
import ShowingOffer from "../../components/EverywhereUse/ShowingOffer";

export default function CommunityPage() {
  return (
    <Box>
      <CommunityNavbarData />
      <ShowingOffer
        passoffer={
          "All orders over US$79 will enjoy free standard shipping to the United States."
        }
      />
      <h1 style={{ color: "white" }}>Community</h1>
    </Box>
  );
}
