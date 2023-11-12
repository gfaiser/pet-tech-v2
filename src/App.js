import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';

import Master from './components/Master';
import Home from './components/Home';
// import Page404 from './components/Page404';
import Elderly from './pages/Elderly'
import Cats from './pages/Cats'
import Contact from './pages/Contact'
import Hospitals from "./pages/Hospitals"
import PetsShop from "./pages/PetsShop"
import Purchase from "./pages/Purchase"
import Volunteer from "./pages/Volunteer"
import PageNotFound from './components/Page404'

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Routes>
        <>
          <Route path="/" element={<Home />} />
          <Route path="/pg" element={<Master />}>
            <Route path="elderly" element={<Elderly />} />
            <Route path="cats" element={<Cats />} />
            <Route path="contact" element={<Contact />} />
            <Route path="hospitals" element={<Hospitals />} />
            <Route path="pets-shop" element={<PetsShop />} />
            <Route path="purchase" element={<Purchase />} />
            <Route path="volunteer" element={<Volunteer />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
