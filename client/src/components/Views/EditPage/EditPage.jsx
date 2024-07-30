import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPokeIdDetail, updatePokemon } from '../../../redux/actions';
import PokemonForm from '../../Form/PokemonForm';
import NavBar from '../../NavBar/NavBar';
import './EditPage.scss';

const EditPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const pokemon = useSelector(state => state.selectedPokemon);
  const [successMessage, setSuccessMessage] = useState('');
  const [formVisible, setFormVisible] = useState(true); 

  useEffect(() => {
    dispatch(getPokeIdDetail(id));
  }, [dispatch, id]);

  const handleUpdate = async (updatedData) => {
    try {
      await dispatch(updatePokemon(updatedData));
      setSuccessMessage('Pokémon actualizado exitosamente.');
      setFormVisible(false);
    } catch (error) {
      console.error('Error al actualizar el Pokémon:', error);
    }
  };

  if (!pokemon) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <NavBar />
      <div className="edit-page">
        {formVisible ? (
          <PokemonForm
            isEditing={true}
            pokemonId={id}
            onSubmit={handleUpdate}
            initialValues={pokemon} // Si necesitas pasar valores iniciales al 
          />
        ) : (
          <div className="success-message">{successMessage}</div>
        )}
      </div>
    </div>
  );
};

export default EditPage;
