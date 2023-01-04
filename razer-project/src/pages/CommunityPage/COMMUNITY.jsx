import Box from "@mui/material/Box";
import CommunityNavbarData from "../../components/CommunityNavbar/Community.Navbar";
import ShowingOffer from "../../components/EverywhereUse/ShowingOffer";

export default function CommunityPage() {
  return (
    <Box>
      <CommunityNavbarData />
      <ShowingOffer passoffer={"Here we can see offer for the days"} />
      <h1 style={{ color: "white" }}>Community</h1>
    </Box>
  );
}
