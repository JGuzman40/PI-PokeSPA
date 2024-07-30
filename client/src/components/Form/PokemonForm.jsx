import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadTypesSuccess, createPokemon, updatePokemon } from '../../redux/actions';
import { validateFormData } from '../../utils/validaForm';

import './PokemonForm.scss';

const PokemonForm = ({ isEditing, pokemonId, initialValues }) => {
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

    useEffect(() => {
        if (isEditing && initialValues) {
            setFormData({
                name: initialValues.name,
                imagen: initialValues.imagen,
                vida: initialValues.vida,
                ataque: initialValues.ataque,
                defensa: initialValues.defensa,
                velocidad: initialValues.velocidad,
                altura: initialValues.altura,
                peso: initialValues.peso,
                types: initialValues.types.map(type => type.tipo) 
            });
        }
    }, [initialValues, isEditing]);

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
                const payload = {
                    ...formData,
                    types: formData.types.map(type => ({ name: type }))
                };
                console.log("Datos antes de enviar:", payload);
    
                if (isEditing) {
                    await dispatch(updatePokemon({ ...payload, id: pokemonId }));
                    setSuccessMessage('¡Pokémon actualizado exitosamente!');
                } else {
                    await dispatch(createPokemon(payload));
                    setSuccessMessage('¡Pokémon creado exitosamente!');
                }
            } catch (error) {
                setSuccessMessage('Hubo un error.');
            }
        }
    };

    const handleReset = () => {
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
    };

    return (
        <div>
            <div className="form-container">
                <h2>{successMessage ? 'Operación realizada!' : isEditing ? 'Editar Pokémon' : 'Crear Pokémon'}</h2>
                {successMessage ? (
                    <div>
                        <p className="success-message">{successMessage}</p>
                        <button onClick={handleReset}>Crear Otro Pokémon</button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        {Object.keys(formData).map((key) => (
                            key !== 'types' && (
                                <div key={key}>
                                    <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
                                    <input
                                        type={
                                            key === 'name' || key === 'imagen'
                                            ? 'text' 
                                            : 'number'
                                        }
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
                        <button type="submit">{isEditing ? 'Actualizar Pokémon' : 'Crear Pokémon'}</button>
                    </form>
                )}
            </div>
        </div>
    );
};

// Validación de props con PropTypes
PokemonForm.propTypes = {
    isEditing: PropTypes.bool,
    pokemonId: PropTypes.string,
    initialValues: PropTypes.object
};

export default PokemonForm;

