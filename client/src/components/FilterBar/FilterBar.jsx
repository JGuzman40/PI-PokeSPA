import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTypeFilter, setOriginFilter, setSortOrder, loadTypesSuccess } from '../../redux/actions';

import './FilterBar.scss';

function FilterBar() {
    const dispatch = useDispatch();
    const types = useSelector((state) => state.types);

    useEffect(() => {
        dispatch(loadTypesSuccess());
    }, [dispatch]);

    const handleTypeChange = (e) => {
        dispatch(setTypeFilter(e.target.value));
    };

    const handleOriginChange = (e) => {
        dispatch(setOriginFilter(e.target.value));
    };

    const handleSortChange = (e) => {
        dispatch(setSortOrder(e.target.value));
    }

    return (
        <div>
            <div className="filter-container">
                <select 
                    className="filter-select"
                    id="type-filter"
                    name="type-filter"
                    onChange={handleTypeChange}
                >
                    <option value="">Tipos de Pokemon</option>
                    {types.map((type) => (
                        <option key={type.name} value={type.name}>{type.name}</option>
                    ))}
                </select>
            
                <select 
                    className="filter-select"
                    id="origin-filter"
                    name="origin-filter"
                    onChange={handleOriginChange}
                >
                    <option value="">Filtrar por origen</option>
                    <option value="api">API</option>
                    <option value="database">Base de Datos</option>
                </select>

                <select 
                    className="filter-select"
                    id="sort-filter"
                    name="sort-filter"
                    onChange={handleSortChange}
                >
                    <option value="">Ordenar por</option>
                    <option value="name-asc">Nombre A-Z</option>
                    <option value="name-desc">Nombre Z-A</option>
                    <option value="attack-asc">Ataque Ascendente</option>
                    <option value="attack-desc">Ataque Descendente</option>
                </select>
            </div>
        </div>
    )
}

export default FilterBar;