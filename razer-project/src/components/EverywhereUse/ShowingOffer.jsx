import { Box } from "@mui/system";
import Showing from "../../styles/ShowingOffers.module.css";
export default function ShowingOffer({ passoffer }) {
  return (
    <Box>
      <h3 style={{ color: "white" }}>{passoffer}</h3>
    </Box>
  );
}
