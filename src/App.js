import "./App.css";
import Navtr from "./components/Navbar/Navtr";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Drops from "./components/Drops/Drops";
import Resposive_Navbar from "./components/Responsive_Navbar/Resposive_Navbar";
import View_tab from "./components/View_tab/View_tab";
import Mainhome from "./components/Mainhome/Mainhome";
import Footer from "./components/Footer/Footer";
import Nextdg from "./components/Next_dg/Nextdg";

import Resource_full_page from "./components/Resource_full_page/Resource_full_page";
import R_bottom_links_full_page from "./components/R_bottom_links_full_page/R_bottom_links_full_page";
import R_full_tex_page from "./components/R_full_tex_page/R_full_tex_page";
import R_partner_full from "./components/R_partner_full/R_partner_full";
import Explore_main from "./components/Exploar_main/Explore_main";
import Art_hover from "./components/Art_hover/Art_hover";
import ALL_explore from "./components/ALL_explore/ALL_explore";
import Colloctibles_hover from "./components/colloctibles_hover/Colloctibles_hover";
import Domine_hover from "./components/Domine_hover/Domine_hover";
import R_docs_full_page from "./components/R_docs_full_page/R_docs_full_page";
import Setting_page from "./components/Setting_page/Setting_page";
import Create_page from "./components/Create_page/Create_page";
import Full_new_letter from "./components/Full_new_letter/Full_new_letter";

import Music_hover from "./components/Music_hover/Music_hover";
import Photography_hover from "./components/Photography_hover/Photography_hover";
import Sport_hover from "./components/Sport_hover/Sport_hover";
import Trading_hover from "./components/Trading_hover/Trading_hover";
import Utilityhover from "./components/Utility_hover/Utilityhover";
import Virtual_hover from "./components/Virtual_hover/Virtual_hover";
import Activity from "./components/Activity/Activity";
import R_blog_cards from "./components/R_blog_cards/R_blog_cards";
import Activity_listing from "./components/Activity_listing/Activity_listing";
import Activity_offers from "./components/Activity_offers/Activity_offers";
import Activity_mob from "./components/Activity_mob/Activity_mob";
import Profile_collection from "./components/Profile_collection/Profile_collection";
import Blocard from "./components/Blog_slide/Blocard";
import Profile_collection_tab_item_data from "./components/Profile_collection_tab_item_data/Profile_collection_tab_item_data";
import Nft_main_detail from "./components/Nft_main_detail/Nft_main_detail";
import Open_sale from "./components/Open_sale/Open_sale";
import Collection_front_page from "./components/Collection_front_page/Collection_front_page";
import Main_profile_part from "./components/Main_profile_part/Main_profile_part";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navtr />
        <Resposive_Navbar />
        <Routes>
          <Route path="/" element={<Mainhome />} />
          <Route path="/Drop" element={<Drops />} />
          <Route path="/Nft_main_detail" element={<Nft_main_detail />} />
          <Route path="/View_tab" element={<View_tab />} />
          <Route path="/resources_main_page" element={<Resource_full_page />} />
          <Route path="/resource_learn_page" element={<Resource_full_page />} />
          <Route
            path="/resource_main_help"
            element={<R_bottom_links_full_page />}
          />
          <Route path="/r_help_center" element={<R_bottom_links_full_page />} />
          <Route path="/R_docs_full_page" element={<R_docs_full_page />} />
          <Route path="/R_full_tax_page" element={<R_full_tex_page />} />
          <Route path="/R_full_partner" element={<R_partner_full />} />
          <Route path="/Explore_main" element={<Explore_main />} /> 
          <Route path="/Art_hover" element={<Art_hover />} />
          <Route path="/ALL_explore" element={<ALL_explore />} />
          <Route path="/Colloctibles_hover" element={<Colloctibles_hover />} />
          <Route path="/Domine_hover" element={<Domine_hover />} />
          <Route path="/Music_hover" element={<Music_hover />} />
          <Route path="/Photography_hover" element={<Photography_hover />} />
          <Route path="/Sport_hover" element={<Sport_hover />} />
          <Route path="/Trading_hover" element={<Trading_hover />} />
          <Route path="/Utilityhover" element={<Utilityhover />} />
          <Route path="/Virtual_hover" element={<Virtual_hover />} />
          <Route path="/seeting_pro_main" element={<Setting_page />} />
          <Route path="/Nextdg" element={<Nextdg />} />
          <Route path="/newsletter" element={<Full_new_letter />} />
          <Route path="/R_blog_cards_full_page" element={<Blocard />} />
          <Route
            path="/collection_front_page"
            element={<Collection_front_page />}
          />

          <Route path="/Activity" element={<Activity />} />
          <Route path="/main_create_page" element={<Create_page />} />
          <Route path="/seeting_pro_main" element={<Setting_page />} />
          <Route path="/R_blog_cards_full_page" element={<R_blog_cards />} />
          <Route path="/Activity_listing" element={<Activity_listing />} />
          <Route path="/Activity_offers" element={<Activity_offers />} />
          <Route path="/activity" element={<Activity_mob />} />
          <Route path="/Profile_collection" element={<Profile_collection />} />
          <Route path="/mai_profile" element={<Main_profile_part />} />
          <Route
            path="/Profile_collection_tab_item_data"
            element={<Profile_collection_tab_item_data />}
          />
          <Route path="/Open_sale" element={<Open_sale />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
