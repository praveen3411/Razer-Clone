import { Box } from "@mui/system";
import { Route, Routes } from "react-router-dom";
import CartNavbar from "../../components/Cart/Cart.Navbar";
import CommunityNavbar from "../../components/CommunityNavbar/Community.Navbar";
import LifeStyleNavbar from "../../components/LifestyleNavbar/Lifestyle.Navbar";
import ServicesNavbar from "../../components/ServicesNavbar/Services.Navbar";
import StoreNavbar from "../../components/StoreNavbar/Store.Navbar";
import SupportNavbar from "../../components/SupportNavbar/Support.Navbar";
import ConsoleComponent from "../../pages/Consolee/ConsoleComponent";
import MobileComponent from "../../pages/Mobile/MobileComponent";
import PersonalComponent from "../../pages/PersonalComputer/PersonalComponent";
export default function HeaderComponent() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<PersonalComponent />} />
        <Route path="/console" element={<ConsoleComponent />} />
        <Route path="/mobile" element={<MobileComponent />} />
        <Route path="/lifestyle" element={<LifeStyleNavbar />} />
        <Route path="/service" element={<ServicesNavbar />} />
        <Route path="/community" element={<CommunityNavbar />} />
        <Route path="/support" element={<SupportNavbar />} />
        <Route path="/store" element={<StoreNavbar />} />
        <Route path="/cart" element={<CartNavbar />} />
      </Routes>
    </Box>
  );
}
