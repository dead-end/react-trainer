import Container from '@mui/material/Container';
import { BrowserRouter, Routes, Route } from 'react-router';
import Admin from './pages/Admin';
import Home from './pages/Home';
import Navigation from './components/Navigation';
import { ConfigContext } from './components/ConfigContext';
import { useConfig } from './libs/hooks/useConfig';

const App = () => {
  const config = useConfig();

  return (
    <Container>
      <ConfigContext.Provider value={config}>
        {config.config.user !== '' ? (
          <BrowserRouter>
            <Navigation />
            <Routes>
              <Route index element={<Home />} />
              <Route path='admin' element={<Admin />} />
            </Routes>
          </BrowserRouter>
        ) : (
          <Admin />
        )}
      </ConfigContext.Provider>
    </Container>
  );
};

export default App;
