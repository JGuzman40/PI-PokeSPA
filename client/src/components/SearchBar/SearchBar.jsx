import PropTypes from 'prop-types';
import './SearchBar.scss';

function SearchBar({ handleChange, handleSubmit}) {
    return (
        <div className="searchbar-container">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    id="pokemon-search"
                    name="pokemon-search"
                    placeholder="Pokemon name" 
                    className="search-input"
                    onChange={handleChange}
                />
                <button 
                    type="submit" 
                    className="search-button"
                    id="search-button"
                    name="search-button" 
                    >Buscar</button>
            </form>
        </div>
    );
}

SearchBar.propTypes ={
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
}



export default SearchBar;
