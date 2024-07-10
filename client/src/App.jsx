// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import HomePage from './components/HomePage/HomePage';
import DetailPage from './components/DetailPage/DetailPage';
import NavBar from './components/NavBar/NavBar';
import './styles/global.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomeWithNavBar />} />
        <Route path="/pokemon/:id" element={<DetailPage />} />
      </Routes>
    </Router>
  );
}

function HomeWithNavBar() {
  return (
    <>
      <NavBar />
      <HomePage />
    </>
  );
}

export default App;

