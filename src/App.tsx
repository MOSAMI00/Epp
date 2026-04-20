
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DashboardLayout } from './layouts/DashboardLayout';

import Overview from './pages/Overview';
import MyRentals from './pages/MyRentals';
import RentalDetails from './pages/RentalDetails';
import Contracts from './pages/Contracts';
import Logistics from './pages/Logistics';
import Notifications from './pages/Notifications';
import Reviews from './pages/Reviews';
import KYC from './pages/KYC';
import Settings from './pages/Settings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Overview />} />
          <Route path="rentals" element={<MyRentals />} />
          <Route path="rentals/:id" element={<RentalDetails />} />
          <Route path="contracts" element={<Contracts />} />
          <Route path="logistics" element={<Logistics />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="kyc" element={<KYC />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
