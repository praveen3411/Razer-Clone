import Box from "@mui/material/Box";
import { Route, Routes } from "react-router-dom";
import MainNavbarResponsive from "../components/MainNavbar/MainNavbar";
import CartPage from "../pages/CartPage/CARTPAGE";
import CommunityPage from "../pages/CommunityPage/COMMUNITY";
import ConsolePage from "../pages/ConsolePage/CONSOLE";
import ConsoleAccessories from "../pages/ConsolePage/Console.Accessories";
import ConsolePlayStation from "../pages/ConsolePage/Console.playstation";
import ConsoleXbox from "../pages/ConsolePage/Console.Xbox";
import HomePage from "../pages/HomePage/HOME";
import LifeStylePage from "../pages/LifeStylePage/LIFESTYLE";
import MobilePage from "../pages/MobilePage/MOBILE.jsx";
import PersonalPage from "../pages/PersonalComputerPage/PC";
import PcChairs from "../pages/PersonalComputerPage/Pc.Chairs";
import PcHeadset from "../pages/PersonalComputerPage/Pc.Headset";
import PcKeyboard from "../pages/PersonalComputerPage/Pc.Keyboard";
import PcMaths from "../pages/PersonalComputerPage/Pc.Mats";
import PcMice from "../pages/PersonalComputerPage/Pc.Mice";
import PcMonitors from "../pages/PersonalComputerPage/Pc.Monitors";
import PcProductvity from "../pages/PersonalComputerPage/Pc.Productivity";
import PcSoftware from "../pages/PersonalComputerPage/Pc.Software";
import PcSpeaker from "../pages/PersonalComputerPage/Pc.Speakers";
import PcStreaming from "../pages/PersonalComputerPage/Pc.Streaming";
import PcDesktop from "../pages/PersonalComputerPage/PcDesktop";
import PcLaptop from "../pages/PersonalComputerPage/PcLaptopPage";
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
        <Route path="/personal/laptops" element={<PcLaptop />} />
        <Route path="/personal/desktops" element={<PcDesktop />} />
        <Route path="/personal/desktops" element={<PcDesktop />} />
        <Route path="/personal/monitors" element={<PcMonitors />} />
        <Route path="/personal/mice" element={<PcMice />} />
        <Route path="/personal/mats" element={<PcMaths />} />
        <Route path="/personal/keyboard" element={<PcKeyboard />} />
        <Route path="/personal/headset" element={<PcHeadset />} />
        <Route path="/personal/speaker" element={<PcSpeaker />} />
        <Route path="/personal/streaming" element={<PcStreaming />} />
        <Route path="/personal/productivity" element={<PcProductvity />} />
        <Route path="/personal/chairs" element={<PcChairs />} />
        <Route path="/personal/software" element={<PcSoftware />} />
        <Route path="/console" element={<ConsolePage />} />
        <Route path="/console/xbox" element={<ConsoleXbox />} />
        <Route path="/console/palystation" element={<ConsolePlayStation />} />
        <Route path="/console/accessories" element={<ConsoleAccessories />} />
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
