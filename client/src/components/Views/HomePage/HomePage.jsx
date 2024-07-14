import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from '../../../redux/actions';


import Cards from '../../Cards/Cards';
import NavBar from '../../NavBar/NavBar';
import SearchBar from '../../SearchBar/SearchBar';

import './HomePage.scss'; 

const HomePage = () => {

  const dispatch = useDispatch()
  const allPokemons = useSelector((state) => state.allPokemons);

  useEffect(()=> {
    dispatch(getPokemons())
  },[dispatch]);

  const limit = 20;
  const limitedPokes = allPokemons.slice(0, limit)

  return (
    <div className='homepage'>

      <NavBar />
      <SearchBar />
      <Cards allPokemons ={limitedPokes} />
    </div>
  );
};

export default HomePage;
