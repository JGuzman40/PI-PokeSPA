import PropTypes from 'prop-types';
import Card from '../Card/Card';

import './Cards.scss';

function Cards({ pokemons }) {
    
    return (
        <div className='cards_container'>
            {pokemons?.map((pokemon) => (
                <Card key={pokemon.id} pokemon={pokemon} />
            ))}           
        </div>
    )
}


Cards.propTypes = {
    pokemons: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // Aceptar string o number
        name: PropTypes.string.isRequired,
        imagen: PropTypes.string.isRequired,
        vida: PropTypes.number.isRequired,
        ataque: PropTypes.number.isRequired,
        defensa: PropTypes.number.isRequired,
        velocidad: PropTypes.number.isRequired,
        altura: PropTypes.number.isRequired,
        peso: PropTypes.number.isRequired,
        types: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string.isRequired,
          })
        ).isRequired,
      })
    ).isRequired,
  };

export default Cards;