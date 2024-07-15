import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons, getPokeByName } from '../../../redux/actions';


import Cards from '../../Cards/Cards';
import NavBar from '../../NavBar/NavBar';
import SearchBar from '../../SearchBar/SearchBar';

import './HomePage.scss'; 

const HomePage = () => {

  const dispatch = useDispatch()
  const allPokemons = useSelector((state) => state.allPokemons);
  const [searchByName, setSearchByName] = useState("");

  function handleChange(e) {
    e.preventDefault();
    setSearchByName(e.target.value)
  }

  // para buscar por nombre
  function handleSubmit(e) {
    e.preventDefault()
    const searchNameLowerCase = searchByName.toLowerCase();
    dispatch(getPokeByName(searchNameLowerCase));
  }


  useEffect(()=> {
    dispatch(getPokemons())
  },[dispatch]);

  const limit = 20;
  const limitedPokes = allPokemons.slice(0, limit)

  return (
    <div className='homepage'>

      <NavBar />
      <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
      <Cards allPokemons ={limitedPokes} />
    </div>
  );
};

export default HomePage;
