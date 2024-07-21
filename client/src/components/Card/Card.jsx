import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Card.scss';

const captitalizarName = (name) => {
    return name.charAt(0).toUpperCase() +
    name.slice(1).toLowerCase();
};

function Card({ pokemon }) {
    
    return (
        <Link to={`/home/${pokemon.id}`}>
        <div className='card_container'>
            <h1>{captitalizarName(pokemon.name)}</h1>
            <img src={pokemon.imagen} alt={pokemon.name} className='pokemon_image' />
            
            <div className='pokemon_types'>
                {pokemon.types.map((type, index) => (
                    <span key={index} className='pokemon_type'>{type.tipo}</span>
                ))}
            </div>
        </div>
        </Link>
    );
}

Card.propTypes = {
    pokemon: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
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
                tipo: PropTypes.string.isRequired,
            })
        ).isRequired,
    }).isRequired,
};

export default Card;
