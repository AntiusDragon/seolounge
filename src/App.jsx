import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage } from "./pages/HomePage";
import { ServicesPage } from './pages/ServicesPage';
import { NoPage } from './pages/NoPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<HomePage />} />
        <Route path='/services' element={<ServicesPage />} />
        {/* <Route path='/register' element={<RegisterPage />} /> */}
        <Route path='*' element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
