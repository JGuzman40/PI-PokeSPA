import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPokeIdDetail } from '../../../redux/actions';

import NavBar from '../../NavBar/NavBar';

import './DetailPage.scss';

const DetailPage = () => {
const { id } = useParams();
const dispatch = useDispatch();
const pokemon = useSelector(state => state.selectedPokemon );

useEffect(()=> {
  dispatch(getPokeIdDetail(id));
}, [dispatch, id]);

console.log('Pokemon en DetailPage:', pokemon);
if (!pokemon ) {
  return <div>Elige un Pokemon</div>;
}


const captitalizarName = (name) => {
  return name.charAt(0).toUpperCase() +
  name.slice(1).toLowerCase();
};
  return (
    
    <div>
      <NavBar />
      <div className="detail-page">
      <h1>{captitalizarName(pokemon.name)}</h1>
      <img src={pokemon.imagen} alt={pokemon.name} className="pokemon-detail-image" />
            <div className='pokemon_stats'>
            <p>Vida: {pokemon.vida}</p>
            <p>Ataque: {pokemon.ataque}</p>
            <p>Defensa: {pokemon.defensa}</p>
            <p>Velocidad: {pokemon.velocidad}</p>
            <p>Altura: {pokemon.altura}</p>
            <p>Peso: {pokemon.peso}</p>
            </div>
            <div className="pokemon-detail-types">
                {pokemon.types.map((type, index) => (
                    <span key={index} className="pokemon-detail-type">{type.tipo}</span>
                ))}
          </div>
       </div>
    </div>
  );
};

export default DetailPage;
