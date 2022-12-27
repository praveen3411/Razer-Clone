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
import LifestyleApparel from "../pages/LifeStylePage/Lifestyle.Apparel";
import LifestyleBags from "../pages/LifeStylePage/Lifestyle.Bags";
import LifestyleBooks from "../pages/LifeStylePage/Lifestyle.Books";
import LifestyleChairs from "../pages/LifeStylePage/Lifestyle.Chairs";
import LifestyleCollabs from "../pages/LifeStylePage/Lifestyle.Collabs";
import LifestyleCustoms from "../pages/LifeStylePage/Lifestyle.Customs";
import LifestyleGear from "../pages/LifeStylePage/Lifestyle.Gear";
import LifestyleMacs from "../pages/LifeStylePage/Lifestyle.Macs";
import LifestylesRespawn from "../pages/LifeStylePage/Lifestyle.Respawn";
import LifestyleSnekiSnek from "../pages/LifeStylePage/Lifestyle.Snekisnek";
import LifestyleWearables from "../pages/LifeStylePage/Lifestyle.Wearables";
import MobileAccessories from "../pages/MobilePage/Mobile.Accessories";
import MobileCases from "../pages/MobilePage/Mobile.Cases";
import MobileControllers from "../pages/MobilePage/Mobile.Controllers";
import MobileCustoms from "../pages/MobilePage/Mobile.Custom";
import MobileCustomCortex from "../pages/MobilePage/Mobile.Customcortex";
import MobileDac from "../pages/MobilePage/Mobile.Dac";
import MobileEarbuds from "../pages/MobilePage/Mobile.Earbuds";
import MobileHandHelds from "../pages/MobilePage/Mobile.Handhelds";
import MobileHadphones from "../pages/MobilePage/Mobile.Headphones";
import MobilePage from "../pages/MobilePage/MOBILE.jsx";
import MobileSmartGlasses from "../pages/MobilePage/Mobile.Smartgalsses";
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
import ServicesGiftCard from "../pages/ServicesPage/Services.Giftcards";
import ServicesGold from "../pages/ServicesPage/Services.Gold";
import ServicesGoldPins from "../pages/ServicesPage/Services.GoldPins";
import ServiceGoldWebShop from "../pages/ServicesPage/Services.Goldwebshop";
import ServicesRaxerCare from "../pages/ServicesPage/Services.Razercare";
import ServicesRazerId from "../pages/ServicesPage/Services.Razerid";
import ServicesSilver from "../pages/ServicesPage/Services.Silver";
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
        <Route path="/mobile/handhelds" element={<MobileHandHelds />} />
        <Route path="/mobile/controllers" element={<MobileControllers />} />
        <Route path="/mobile/headphones" element={<MobileHadphones />} />
        <Route path="/mobile/earbuds" element={<MobileEarbuds />} />
        <Route path="/mobile/dac" element={<MobileDac />} />
        <Route path="/mobile/smartglasses" element={<MobileSmartGlasses />} />
        <Route path="/mobile/cases" element={<MobileCases />} />
        <Route path="/mobile/maccessories" element={<MobileAccessories />} />
        <Route path="/mobile/customs" element={<MobileCustoms />} />
        <Route path="/mobile/cortexgames" element={<MobileCustomCortex />} />
        <Route path="/lifestyle" element={<LifeStylePage />} />
        <Route path="/lifestyle/chairs" element={<LifestyleChairs />} />
        <Route path="/lifestyle/wearables" element={<LifestyleWearables />} />
        <Route path="/lifestyle/apparel" element={<LifestyleApparel />} />
        <Route path="/lifestyle/bags" element={<LifestyleBags />} />
        <Route path="/lifestyle/gear" element={<LifestyleGear />} />
        <Route path="/lifestyle/snekisnek" element={<LifestyleSnekiSnek />} />
        <Route path="/lifestyle/respawn" element={<LifestylesRespawn />} />
        <Route path="/lifestyle/customs" element={<LifestyleCustoms />} />
        <Route path="/lifestyle/collabs" element={<LifestyleCollabs />} />
        <Route path="/lifestyle/book" element={<LifestyleBooks />} />
        <Route path="/lifestyle/mac" element={<LifestyleMacs />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/gold" element={<ServicesGold />} />
        <Route path="/services/silver" element={<ServicesSilver />} />
        <Route path="/services/goldpins" element={<ServicesGoldPins />} />
        <Route path="/services/goldwebshop" element={<ServiceGoldWebShop />} />
        <Route path="/services/giftcards" element={<ServicesGiftCard />} />
        <Route path="/services/razercare" element={<ServicesRaxerCare />} />
        <Route path="/services/razerid" element={<ServicesRazerId />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/storepage" element={<StorePage />} />
        <Route path="/searchbar" element={<SearchPage />} />
        <Route path="/cartpage" element={<CartPage />} />
      </Routes>
    </Box>
  );
}
