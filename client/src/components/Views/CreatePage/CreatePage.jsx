import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadTypesSuccess, createPokemon } from '../../../redux/actions';
import Card from '../../Card/Card'; // Asegúrate de que la ruta sea correcta
import NavBar from '../../NavBar/NavBar';
import './CreatePage.scss';

const PokemonForm = () => {
    const dispatch = useDispatch();
    const types = useSelector(state => state.types);
    const createdPokemon = useSelector(state => state.createdPokemon);
    const [formData, setFormData] = useState({
        name: '',
        imagen: '',
        vida: '',
        ataque: '',
        defensa: '',
        velocidad: '',
        altura: '',
        peso: '',
        types: []
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        dispatch(loadTypesSuccess());
    }, [dispatch]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData(prev => ({
                ...prev,
                types: checked 
                    ? [...prev.types, value] 
                    : prev.types.filter(type => type !== value)
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const validate = () => {
        const errors = {};
        if (!formData.name || /\d/.test(formData.name)) errors.name = 'Nombre inválido';
        if (!formData.imagen) errors.imagen = 'Imagen es requerida';
        if (!formData.vida || formData.vida < 0) errors.vida = 'Vida inválida';
        if (!formData.ataque || formData.ataque < 0) errors.ataque = 'Ataque inválido';
        if (!formData.defensa || formData.defensa < 0) errors.defensa = 'Defensa inválida';
        if (formData.velocidad && formData.velocidad < 0) errors.velocidad = 'Velocidad inválida';
        if (formData.altura && formData.altura < 0) errors.altura = 'Altura inválida';
        if (formData.peso && formData.peso < 0) errors.peso = 'Peso inválido';
        if (formData.types.length === 0) errors.types = 'Debe seleccionar al menos un tipo';
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            try {
                const createdPokemonResponse = await dispatch(createPokemon({
                    ...formData,
                    types: formData.types.map(type => ({ name: type })),
                }));
                console.log('Created Pokemon Response:', createdPokemonResponse);
                setSuccessMessage('¡Pokémon creado exitosamente!');
            } catch (error) {
                setSuccessMessage('Hubo un error al crear el Pokémon.');
                console.error('Error al crear el Pokémon:', error);
            }
        }
    };

    const handleCreateAnotherPokemon = () => {
        setFormData({
            name: '',
            imagen: '',
            vida: '',
            ataque: '',
            defensa: '',
            velocidad: '',
            altura: '',
            peso: '',
            types: []
        });
        setSuccessMessage('');
        dispatch({
            type: "CREATE_POKEMON_SUCCESS",
            payload: null,
        });
    };

    return (
        <div className="form-container">
            <NavBar />
            <h2>{createdPokemon ? 'Pokémon Creado' : 'Crear Nuevo Pokémon'}</h2>
            {createdPokemon ? (
                <div>
                    <Card pokemon={createdPokemon} />
                    <button onClick={handleCreateAnotherPokemon}>Crear Otro Pokémon</button>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Nombre:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            autoComplete="off"
                        />
                        {errors.name && <p className="error-message">{errors.name}</p>}
                    </div>
                    <div>
                        <label htmlFor="imagen">Imagen:</label>
                        <input
                            type="text"
                            id="imagen"
                            name="imagen"
                            value={formData.imagen}
                            onChange={handleChange}
                            autoComplete="off"
                        />
                        {errors.imagen && <p className="error-message">{errors.imagen}</p>}
                    </div>
                    <div>
                        <label htmlFor="vida">Vida:</label>
                        <input
                            type="number"
                            id="vida"
                            name="vida"
                            value={formData.vida}
                            onChange={handleChange}
                            autoComplete="off"
                        />
                        {errors.vida && <p className="error-message">{errors.vida}</p>}
                    </div>
                    <div>
                        <label htmlFor="ataque">Ataque:</label>
                        <input
                            type="number"
                            id="ataque"
                            name="ataque"
                            value={formData.ataque}
                            onChange={handleChange}
                            autoComplete="off"
                        />
                        {errors.ataque && <p className="error-message">{errors.ataque}</p>}
                    </div>
                    <div>
                        <label htmlFor="defensa">Defensa:</label>
                        <input
                            type="number"
                            id="defensa"
                            name="defensa"
                            value={formData.defensa}
                            onChange={handleChange}
                            autoComplete="off"
                        />
                        {errors.defensa && <p className="error-message">{errors.defensa}</p>}
                    </div>
                    <div>
                        <label htmlFor="velocidad">Velocidad:</label>
                        <input
                            type="number"
                            id="velocidad"
                            name="velocidad"
                            value={formData.velocidad}
                            onChange={handleChange}
                            autoComplete="off"
                        />
                        {errors.velocidad && <p className="error-message">{errors.velocidad}</p>}
                    </div>
                    <div>
                        <label htmlFor="altura">Altura:</label>
                        <input
                            type="number"
                            id="altura"
                            name="altura"
                            value={formData.altura}
                            onChange={handleChange}
                            autoComplete="off"
                        />
                        {errors.altura && <p className="error-message">{errors.altura}</p>}
                    </div>
                    <div>
                        <label htmlFor="peso">Peso:</label>
                        <input
                            type="number"
                            id="peso"
                            name="peso"
                            value={formData.peso}
                            onChange={handleChange}
                            autoComplete="off"
                        />
                        {errors.peso && <p className="error-message">{errors.peso}</p>}
                    </div>
                    <div className="type-container">
                        <label>Tipos:</label>
                        {types.map(type => (
                            <div key={type.name}>
                                <input
                                    type="checkbox"
                                    id={type.name}
                                    value={type.name}
                                    checked={formData.types.includes(type.name)}
                                    onChange={handleChange}
                                />
                                <label htmlFor={type.name}>{type.name}</label>
                            </div>
                        ))}
                        {errors.types && <p className="error-message">{errors.types}</p>}
                    </div>
                    <button type="submit">Crear Pokémon</button>
                    {successMessage && <p className="success-message">{successMessage}</p>}
                </form>
            )}
        </div>
    );
};

export default PokemonForm;
