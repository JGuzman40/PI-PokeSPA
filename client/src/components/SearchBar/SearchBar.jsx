import './SearchBar.scss';

function SearchBar() {
    return (
        <div className="searchbar-container">
            <form>
                <input 
                    type="text" 
                    id="pokemon-search"
                    name="pokemon-search"
                    placeholder="Busca tu pokemon por nombre completo" 
                    className="search-input"
                />
                <button 
                    type="submit" 
                    className="search-button"
                    id="search-button"
                    name="search-button" 
                    >Buscar</button>
            </form>
            <div className="filter-container">
                <select 
                className="filter-select"
                id="type-filter"
                name="type-filter"
                >
                    <option value="">Filtrar por tipo</option>
                    <option value="fire">Fuego</option>
                    <option value="water">Agua</option>
                    <option value="grass">Planta</option>
                    {/* Agrega más opciones según tus tipos */}
                </select>
                <select 
                className="filter-select"
                id="origin-filter"
                name="origin-filter"
                >
                    <option value="">Filtrar por origen</option>
                    <option value="api">API</option>
                    <option value="database">Base de Datos</option>
                </select>
                <select 
                className="filter-select"
                id="sort-filter"
                name="sort-filter"
                >
                    <option value="">Ordenar por</option>
                    <option value="name-asc">Nombre A-Z</option>
                    <option value="name-desc">Nombre Z-A</option>
                    <option value="attack-asc">Ataque Ascendente</option>
                    <option value="attack-desc">Ataque Descendente</option>
                </select>
            </div>
        </div>
    );
}

export default SearchBar;
