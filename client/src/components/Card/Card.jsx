import PropTypes from 'prop-types';
import './Card.scss';

function Card({ pokemon }) {
    return (
        <div className='card_container'>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.imagen} alt={pokemon.name} className='pokemon_image' />
            <div className='pokemon_stats'>
                <p><strong>Vida:</strong> {pokemon.vida}</p>
                <p><strong>Ataque:</strong> {pokemon.ataque}</p>
                <p><strong>Defensa:</strong> {pokemon.defensa}</p>
                <p><strong>Velocidad:</strong> {pokemon.velocidad}</p>
                <p><strong>Altura:</strong> {pokemon.altura} m</p>
                <p><strong>Peso:</strong> {pokemon.peso} kg</p>
            </div>
            <div className='pokemon_types'>
                {pokemon.types.map((type, index) => (
                    <span key={index} className='pokemon_type'>{type.tipo}</span>
                ))}
            </div>
        </div>
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
