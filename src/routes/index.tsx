import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/home';
import { ErrorPage } from '../pages/error/errorPage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export { Router };