import { Box } from "@mui/system";
import "./App.css";
import ResponsiveAppBar from "./components/HomeNavbar/Navbar.data";
import PCNAVBAR from "./components/PcNavbar/PC.Navbar";


function App() {
  return (
    <Box>
      {/* <ResponsiveAppBar/> */}
      <PCNAVBAR/>
    </Box>
  );
}

export default App;
