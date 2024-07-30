// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/Views/LandingPage/LandingPage';
import HomePage from './components/Views/HomePage/HomePage';
import DetailPage from './components/Views/DetailPage/DetailPage';
import CreatePage from './components/Views/CreatePage/CreatePage';
import EditPage from './components/Views/EditPage/EditPage';

import './styles/global.scss';

function App() {
  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/home/:id" element={<DetailPage />} />
        <Route path="/home/edit/:id" element={<EditPage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
  );
}

export default App;

