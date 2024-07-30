import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPokeIdDetail, deletePokemon } from '../../../redux/actions';
import NavBar from '../../NavBar/NavBar';
import './DetailPage.scss';

const DetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pokemon = useSelector(state => state.selectedPokemon);

  useEffect(() => {
    dispatch(getPokeIdDetail(id));
  }, [dispatch, id]);

  const handleDelete = () => {
    dispatch(deletePokemon(id)).then(() => {
      navigate('/home'); 
    });
  };

  const handleEdit = () => {
    navigate(`/home/edit/${id}`); // Navega a la página de edición
  };

  if (!pokemon) {
    return <div>Elige un Pokémon</div>;
  }

  console.log(pokemon);

  const captitalizarName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
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
        <button onClick={handleEdit}>Actualizar Pokémon</button>
        <button onClick={handleDelete}>Eliminar Pokémon</button>
      </div>
    </div>
  );
};


export default DetailPage;
