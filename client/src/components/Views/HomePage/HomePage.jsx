
import Cards from '../../Cards/Cards';
import NavBar from '../../NavBar/NavBar';
import SearchBar from '../../SearchBar/SearchBar';

import './HomePage.scss'; // Asegúrate de tener estilos para esta página

const HomePage = () => {
  return (
    <div className="home-page">
      <NavBar />
      <SearchBar />
      <Cards />
    </div>
  );
};

export default HomePage;
