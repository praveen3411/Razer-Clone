import Box from "@mui/material/Box";
import { Route, Routes } from "react-router-dom";
import MainNavbarResponsive from "../components/MainNavbar/MainNavbar";
import CartPage from "../pages/CartPage/CARTPAGE";
import CommunityPage from "../pages/CommunityPage/COMMUNITY";
import ConsolePage from "../pages/ConsolePage/CONSOLE";
import HomePage from "../pages/HomePage/HOME";
import LifeStylePage from "../pages/LifeStylePage/LIFESTYLE";
import MobilePage from "../pages/MobilePage/MOBILE.jsx";
import PersonalPage from "../pages/PersonalComputerPage/PC";
import SearchPage from "../pages/SearchPage/SEARCH";
import ServicesPage from "../pages/ServicesPage/SERVICES";
import StorePage from "../pages/StorePage/SOTREPAGE";
import SupportPage from "../pages/SupportPage/SUPPORT";

export default function MainNavRoutes() {
  return (
    <Box>
      <MainNavbarResponsive />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/personal" element={<PersonalPage />} />
        <Route path="/console" element={<ConsolePage />} />
        <Route path="/mobile" element={<MobilePage />} />
        <Route path="/lifestyle" element={<LifeStylePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/storepage" element={<StorePage />} />
        <Route path="/searchbar" element={<SearchPage />} />
        <Route path="/cartpage" element={<CartPage />} />
      </Routes>
    </Box>
  );
}
