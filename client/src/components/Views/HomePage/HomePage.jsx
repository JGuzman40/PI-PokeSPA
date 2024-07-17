import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons, getPokeByName, setCurrentPage } from '../../../redux/actions';
import Cards from '../../Cards/Cards';
import NavBar from '../../NavBar/NavBar';
import SearchBar from '../../SearchBar/SearchBar';
import FilterBar from '../../FilterBar/FilterBar';

import './HomePage.scss';

const HomePage = () => {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.allPokemons);
  const typeFilter = useSelector((state) => state.typeFilter);
  const originFilter = useSelector((state) => state.originFilter);
  const sortOrder = useSelector((state) => state.sortOrder);
  const currentPage = useSelector((state) => state.currentPage);
  const [searchByName, setSearchByName] = useState("");
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  const itemsPerPage = 12;
  const indexOfLastPokemon = currentPage * itemsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - itemsPerPage;
  const paginatedPokemons = filteredPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  useEffect(() => {
    let pokemons = [...allPokemons];

    if (typeFilter) {
      pokemons = pokemons.filter(pokemon =>
        pokemon.types.some(type => type.tipo === typeFilter)
      );
    }

    if (originFilter) {
      pokemons = pokemons.filter(pokemon => {
        if (originFilter === 'api') {
          return typeof pokemon.id === 'number';
        } else if (originFilter === 'database') {
          return typeof pokemon.id === 'string';
        }
        return true;
      });
    }

    if (sortOrder) {
      switch (sortOrder) {
        case 'name-asc':
          pokemons.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case 'name-desc':
          pokemons.sort((a, b) => b.name.localeCompare(a.name));
          break;
        case 'attack-asc':
          pokemons.sort((a, b) => a.ataque - b.ataque);
          break;
        case 'attack-desc':
          pokemons.sort((a, b) => b.ataque - a.ataque);
          break;
        default:
          break;
      }
    }

    setFilteredPokemons(pokemons);

  }, [allPokemons, typeFilter, originFilter, sortOrder]);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchByName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchNameLowerCase = searchByName.toLowerCase();
    dispatch(getPokeByName(searchNameLowerCase));
  };

  const handlePageChange = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
  };

  return (
    <div className='homepage'>
      <NavBar />
      <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
      <FilterBar />
      <Cards pokemons={paginatedPokemons} />
      <div className="pagination">
        {[...Array(Math.ceil(filteredPokemons.length / itemsPerPage)).keys()].map(number => (
          <button
            key={number}
            onClick={() => handlePageChange(number + 1)}
            className={number + 1 === currentPage ? 'active' : ''}
          >
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
