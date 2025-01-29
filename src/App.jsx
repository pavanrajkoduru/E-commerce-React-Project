import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Landingpage from './store/pages/Landingpage';
import Men from './store/component/Men';
import MobilePage from './store/pages/Mobilepage';
import AcPage from './store/pages/AcPage';
import BookPage from './store/pages/BookPage';
import ComputersPage from './store/pages/ComputersPage';
import FridgesPage from './store/pages/FridgesPage';
import FurniturePage from './store/pages/FurniturePage';
import KitchenPage from './store/pages/KitchenPage';
import MenPage from './store/pages/MenPage';
import SpeakersPage from './store/pages/SpeakersPage';
import TvPage from './store/pages/TvPage';
import WatchPage from './store/pages/WatchPage';
import WomanPage from './store/pages/WomanPage';
import MobilesSingle from './single/MobilesSingle';
import UserCart from './store/UserCart';
import AcSingle from './single/AcSingle';
import BooksSingle from './single/BooksSingle';
import ComputerSingle from './single/ComputerSingle';
import FridgeSingle from './single/FridgeSingle';
import FurnitureSingle from './single/FurnitureSingle';
import KitchenSingle from './single/KitchenSingle';
import MenSingle from './single/MenSingle';
import TvSingle from './single/TvSingle';
import WatchSingle from './single/WatchSingle';
import WomanSingle from './single/WomanSingle';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/abc" element={<Men />} />
        <Route path="/mobiles" element={<MobilePage />} />
        <Route path="/ac" element={<AcPage />} />
        <Route path="/book" element={<BookPage />} />
        <Route path="/computer" element={<ComputersPage />} />
        <Route path="/fridge" element={<FridgesPage />} />
        <Route path="/furniture" element={<FurniturePage />} />
        <Route path="/kitchen" element={<KitchenPage />} />
        <Route path="/men" element={<MenPage />} />
        <Route path="/speaker" element={<SpeakersPage />} />
        <Route path="/tv" element={<TvPage />} />
        <Route path="/watch" element={<WatchPage />} />
        <Route path="/woman" element={<WomanPage />} />
        <Route path="/mobiles/:id" element={<MobilesSingle />} />
        <Route path="/cart" element={<UserCart />} />
        <Route path="/ac/:id" element={<AcSingle />} />
        <Route path="/books/:id" element={<BooksSingle />} />
        <Route path="/computers/:id" element={<ComputerSingle />} />
        <Route path="/fridge/:id" element={<FridgeSingle />} />
        <Route path="/furniture/:id" element={<FurnitureSingle />} />
        <Route path="/kitchen/:id" element={<KitchenSingle />} />
        <Route path="/men/:id" element={<MenSingle />} />
        <Route path="/tv/:id" element={<TvSingle />} />
        <Route path="/watch/:id" element={<WatchSingle />} />
        <Route path="/woman/:id" element={<WomanSingle />} />
        {/* 404 Fallback Route */}
        <Route path="*" element={<Landingpage />} />
      </Routes>
    </div>
  );
};

export default App;
