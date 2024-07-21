import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadTypesSuccess, createPokemon } from '../../../redux/actions';
import { validateFormData } from '../../../utils/validaForm'; 
import NavBar from '../../NavBar/NavBar';

import './CreatePage.scss';

const PokemonForm = () => {
    const dispatch = useDispatch();
    const types = useSelector(state => state.types);
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
        const errors = validateFormData(formData); 
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            try {
                await dispatch(createPokemon({
                    ...formData,
                    types: formData.types.map(type => ({ name: type })),
                }));
                setSuccessMessage('¡Encuentra tu Pokemon jajaja...!');
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
        <div>
            <NavBar />
            <div className="form-container">
                <h2>{successMessage ? 'Pokémon listo!' : 'Crea un Pokemón'}</h2>
                {successMessage ? (
                    <div>
                        <p className="success-message">{successMessage}</p>
                        <button onClick={handleCreateAnotherPokemon}>Crea Otro Pokémon</button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        {/* Campos del formulario */}
                        {Object.keys(formData).map((key) => (
                            key !== 'types' && (
                                <div key={key}>
                                    <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
                                    <input
                                        type={key === 'imagen' ? 'text' : 'number'}
                                        id={key}
                                        name={key}
                                        value={formData[key]}
                                        onChange={handleChange}
                                        autoComplete="off"
                                    />
                                    {errors[key] && <p className="error-message">{errors[key]}</p>}
                                </div>
                            )
                        ))}
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
                    </form>
                )}
            </div>
        </div>
    );
};

export default PokemonForm;
