import './SearchBar.scss';

function SearchBar() {
    return (
        <div className="searchbar-container">
            <form>
                <input 
                    type="text" 
                    placeholder="Busca tu pokemon por nombre completo" 
                    className="search-input"
                />
                <button type="submit" className="search-button">Buscar</button>
            </form>
            <div className="filter-container">
                <select className="filter-select">
                    <option value="">Filtrar por tipo</option>
                    <option value="fire">Fuego</option>
                    <option value="water">Agua</option>
                    <option value="grass">Planta</option>
                    {/* Agrega más opciones según tus tipos */}
                </select>
                <select className="filter-select">
                    <option value="">Filtrar por origen</option>
                    <option value="api">API</option>
                    <option value="database">Base de Datos</option>
                </select>
                <select className="filter-select">
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
