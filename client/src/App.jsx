// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/Views/LandingPage/LandingPage';
import HomePage from './components/Views/HomePage/HomePage';
import DetailPage from './components/Views/DetailPage/DetailPage';
import CreatePage from './components/Views/CreatePage/CreatePage';

import './styles/global.scss';

function App() {
  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route excat path="/home" element={<HomePage />} />
        <Route path="/home/:id" element={<DetailPage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
  );
}

export default App;

