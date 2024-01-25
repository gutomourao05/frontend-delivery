import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/home';
import { ErrorPage } from '../pages/error/errorPage';
import { Menu } from '../pages/menu';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
        <Route path="/menu" element={<Menu />} errorElement={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export { Router };