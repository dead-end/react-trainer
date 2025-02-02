import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import Admin from './pages/Admin.tsx';
import Container from '@mui/material/Container';
import Home from './pages/Home.tsx';
import Navigation from './components/Navigation.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Container>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route index element={<Home />} />
          <Route path='admin' element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </Container>
  </StrictMode>
);
