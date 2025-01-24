import {
  HashRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { App } from './modules/App/App';
import { HomePage } from './modules/HomePage/HomePage';
import { NotFoundPage } from './modules/NotFoundPage/NotFoundPage';
import { Phones } from './modules/PhonesPages/Phones';
import { Tablets } from './modules/TabletsPages/Tablets';
import { Accessories } from './modules/AccessoriesPages/Accessories';
import { Favourites } from './modules/FavouritesPages/Favourites';
import { Cart } from './modules/CartPage/Cart';

export const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />

          <Route path="home" element={<Navigate to="../" replace />} />
          <Route path="phones" element={<Phones />} />
          <Route path="tablets" element={<Tablets />} />
          <Route path="accessories" element={<Accessories />} />

          <Route path="favourites" element={<Favourites />} />
          <Route path="cart" element={<Cart />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
